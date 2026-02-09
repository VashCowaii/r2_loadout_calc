const compositeAbilityObject = {
  "fullCharacterName": 1912336050,
  "trimCharacterName": 1912336050,
  "abilityList": [
    "1912336050_BattleTarget_TurnLimit_PeakBattle_7",
    "1912336050_BattleTarget_TurnLimit_PeakBattle_6",
    "1912336050_BattleTarget_TurnLimit_PeakBattle_5",
    "1912336050_BattleTarget_TurnLimit_PeakBattle_4",
    "1912336050_BattleTarget_TurnLimit_PeakBattle_3",
    "1912336050_BattleTarget_TurnLimit_PeakBattle_2",
    "1912336050_BattleTarget_TurnLimit_PeakBattle_1",
    "1912336050_BattleEventAbility_ChallengePeakBattle_HardBossScreenEffect",
    "1912336050_BattleEventAbility_ChallengePeakBattle_Camera_AllLightTeam",
    "1912336050_BattleEventAbility_ChallengePeakBattle_CountDown",
    "1912336050_ChallengePeakBattle_BaseAbility_Environment_0001",
    "1912336050_ChallengePeakBattle_BaseAbility_Plugins_0009",
    "1912336050_ChallengePeakBattle_BaseAbility_Plugins_0008",
    "1912336050_ChallengePeakBattle_BaseAbility_Plugins_0007",
    "1912336050_ChallengePeakBattle_BaseAbility_Plugins_0006",
    "1912336050_ChallengePeakBattle_BaseAbility_Plugins_0005",
    "1912336050_ChallengePeakBattle_BaseAbility_Plugins_0004",
    "1912336050_ChallengePeakBattle_BaseAbility_Plugins_0003",
    "1912336050_ChallengePeakBattle_BaseAbility_Plugins_0002",
    "1912336050_ChallengePeakBattle_BaseAbility_Plugins_0001",
    "1912336050_ChallengePeakBattle_ExtremeAbility_0013",
    "1912336050_ChallengePeakBattle_EnhancedAbility_0013",
    "1912336050_ChallengePeakBattle_BaseAbility_0013",
    "1912336050_ChallengePeakBattle_EnhancedAbility_0012",
    "1912336050_ChallengePeakBattle_BaseAbility_0012",
    "1912336050_ChallengePeakBattle_EnhancedAbility_0011",
    "1912336050_ChallengePeakBattle_BaseAbility_0011",
    "1912336050_ChallengePeakBattle_BaseAbility_0010",
    "1912336050_ChallengePeakBattle_ExtremeAbility_0009",
    "1912336050_ChallengePeakBattle_EnhancedAbility_0009",
    "1912336050_ChallengePeakBattle_BaseAbility_0009",
    "1912336050_ChallengePeakBattle_EnhancedAbility_0008",
    "1912336050_ChallengePeakBattle_BaseAbility_0008",
    "1912336050_ChallengePeakBattle_ExtremeAbility_0007",
    "1912336050_ChallengePeakBattle_EnhancedAbility_0007",
    "1912336050_ChallengePeakBattle_BaseAbility_0007",
    "1912336050_ChallengePeakBattle_ExtremeAbility_0006",
    "1912336050_ChallengePeakBattle_EnhancedAbility_0006",
    "1912336050_ChallengePeakBattle_BaseAbility_0006",
    "1912336050_ChallengePeakBattle_ExtremeAbility_0005",
    "1912336050_ChallengePeakBattle_EnhancedAbility_0005",
    "1912336050_ChallengePeakBattle_BaseAbility_0005",
    "1912336050_ChallengePeakBattle_BaseAbility_0004",
    "1912336050_ChallengePeakBattle_ExtremeAbility_0003",
    "1912336050_ChallengePeakBattle_EnhancedAbility_0003",
    "1912336050_ChallengePeakBattle_BaseAbility_0003",
    "1912336050_ChallengePeakBattle_BaseAbility_0002",
    "1912336050_ChallengePeakBattle_ExtremeAbility_0001",
    "1912336050_ChallengePeakBattle_EnhancedAbility_0001",
    "1912336050_ChallengePeakBattle_BaseAbility_0001"
  ],
  "abilityObject": {
    "1912336050_BattleTarget_TurnLimit_PeakBattle_7": {
      "fileName": "1912336050_BattleTarget_TurnLimit_PeakBattle_7",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1377962353\">Modifier_BattleTarget_TurnLimit_PeakBattle_7</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1377962353\">Modifier_BattleTarget_TurnLimit_PeakBattle_7</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Define Variable with Battle Goal ID",
                  "ability": "BattleTarget_TurnLimit_PeakBattle_7",
                  "variableName": "_BattleTargetKey"
                }
              ]
            },
            {
              "eventTrigger": "Turn End [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Entity a Battle Event/Summon",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Current Turn Owner}}"
                        },
                        "expectedType": "VS. Warning Event"
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "1912336050_BattleTarget_TurnLimit_PeakBattle_6": {
      "fileName": "1912336050_BattleTarget_TurnLimit_PeakBattle_6",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1394739972\">Modifier_BattleTarget_TurnLimit_PeakBattle_6</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1394739972\">Modifier_BattleTarget_TurnLimit_PeakBattle_6</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Define Variable with Battle Goal ID",
                  "ability": "BattleTarget_TurnLimit_PeakBattle_6",
                  "variableName": "_BattleTargetKey"
                }
              ]
            },
            {
              "eventTrigger": "Turn End [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Entity a Battle Event/Summon",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Current Turn Owner}}"
                        },
                        "expectedType": "VS. Warning Event"
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "1912336050_BattleTarget_TurnLimit_PeakBattle_5": {
      "fileName": "1912336050_BattleTarget_TurnLimit_PeakBattle_5",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1344407115\">Modifier_BattleTarget_TurnLimit_PeakBattle_5</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1344407115\">Modifier_BattleTarget_TurnLimit_PeakBattle_5</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Define Variable with Battle Goal ID",
                  "ability": "BattleTarget_TurnLimit_PeakBattle_5",
                  "variableName": "_BattleTargetKey"
                }
              ]
            },
            {
              "eventTrigger": "Turn End [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Entity a Battle Event/Summon",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Current Turn Owner}}"
                        },
                        "expectedType": "VS. Warning Event"
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "1912336050_BattleTarget_TurnLimit_PeakBattle_4": {
      "fileName": "1912336050_BattleTarget_TurnLimit_PeakBattle_4",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1361184734\">Modifier_BattleTarget_TurnLimit_PeakBattle_4</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1361184734\">Modifier_BattleTarget_TurnLimit_PeakBattle_4</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Define Variable with Battle Goal ID",
                  "ability": "BattleTarget_TurnLimit_PeakBattle_4",
                  "variableName": "_BattleTargetKey"
                }
              ]
            },
            {
              "eventTrigger": "Turn End [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Entity a Battle Event/Summon",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Current Turn Owner}}"
                        },
                        "expectedType": "VS. Warning Event"
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "1912336050_BattleTarget_TurnLimit_PeakBattle_3": {
      "fileName": "1912336050_BattleTarget_TurnLimit_PeakBattle_3",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1445072829\">Modifier_BattleTarget_TurnLimit_PeakBattle_3</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1445072829\">Modifier_BattleTarget_TurnLimit_PeakBattle_3</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Define Variable with Battle Goal ID",
                  "ability": "BattleTarget_TurnLimit_PeakBattle_3",
                  "variableName": "_BattleTargetKey"
                }
              ]
            },
            {
              "eventTrigger": "Turn End [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Entity a Battle Event/Summon",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Current Turn Owner}}"
                        },
                        "expectedType": "VS. Warning Event"
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "1912336050_BattleTarget_TurnLimit_PeakBattle_2": {
      "fileName": "1912336050_BattleTarget_TurnLimit_PeakBattle_2",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1461850448\">Modifier_BattleTarget_TurnLimit_PeakBattle_2</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1461850448\">Modifier_BattleTarget_TurnLimit_PeakBattle_2</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Define Variable with Battle Goal ID",
                  "ability": "BattleTarget_TurnLimit_PeakBattle_2",
                  "variableName": "_BattleTargetKey"
                }
              ]
            },
            {
              "eventTrigger": "Turn End [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Entity a Battle Event/Summon",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Current Turn Owner}}"
                        },
                        "expectedType": "VS. Warning Event"
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "1912336050_BattleTarget_TurnLimit_PeakBattle_1": {
      "fileName": "1912336050_BattleTarget_TurnLimit_PeakBattle_1",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1411517591\">Modifier_BattleTarget_TurnLimit_PeakBattle_1</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1411517591\">Modifier_BattleTarget_TurnLimit_PeakBattle_1</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Define Variable with Battle Goal ID",
                  "ability": "BattleTarget_TurnLimit_PeakBattle_1",
                  "variableName": "_BattleTargetKey"
                }
              ]
            },
            {
              "eventTrigger": "Turn End [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Entity a Battle Event/Summon",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Current Turn Owner}}"
                        },
                        "expectedType": "VS. Warning Event"
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "1912336050_BattleEventAbility_ChallengePeakBattle_HardBossScreenEffect": {
      "fileName": "1912336050_BattleEventAbility_ChallengePeakBattle_HardBossScreenEffect",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [],
      "references": []
    },
    "1912336050_BattleEventAbility_ChallengePeakBattle_Camera_AllLightTeam": {
      "fileName": "1912336050_BattleEventAbility_ChallengePeakBattle_Camera_AllLightTeam",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "1912336050_BattleEventAbility_ChallengePeakBattle_CountDown": {
      "fileName": "1912336050_BattleEventAbility_ChallengePeakBattle_CountDown",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1148970670\">Modifier_BattleEventAbility_ChallengePeakBattle_CountDown</a>",
          "valuePerStack": {
            "BattleEventTurnLeftParam": {
              "operator": "Variables[0] (#BattleEvent_P2_ADF) || RETURN",
              "displayLines": "#BattleEvent_P2_ADF",
              "constants": [],
              "variables": [
                "#BattleEvent_P2_ADF"
              ]
            },
            "BattleEventTurnLeftParam2": {
              "operator": "Variables[0] (#BattleEvent_P3_ADF) || RETURN",
              "displayLines": "#BattleEvent_P3_ADF",
              "constants": [],
              "variables": [
                "#BattleEvent_P3_ADF"
              ]
            },
            "BattleEventTurnLeftParam3": {
              "operator": "Variables[0] (#BattleEvent_P4_ADF) || RETURN",
              "displayLines": "#BattleEvent_P4_ADF",
              "constants": [],
              "variables": [
                "#BattleEvent_P4_ADF"
              ]
            }
          }
        },
        {
          "name": "Add Ability",
          "abilityName": "BattleEventAbility_ChallengePeakBattle_Camera_AllLightTeam"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-936105590\">Modifier_BattleEventAbility_ChallengePeakBattle_Rage</a>[<span class=\"descriptionNumberColor\">Middlegame Mayhem</span>]",
          "stackType": "Replace",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">BaseAbilityMultiplier</span>&nbsp;",
                  "value": {
                    "operator": "Constants[0] (1) || Variables[0] (BE_ChallengePeakBattle_Rage_AllDamageTypeAddedRatio) || Variables[1] (MDF_Layer) || MUL || ADD || RETURN",
                    "displayLines": "(1 + (BE_ChallengePeakBattle_Rage_AllDamageTypeAddedRatio * MDF_Layer))",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "BE_ChallengePeakBattle_Rage_AllDamageTypeAddedRatio",
                      "MDF_Layer"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "Increases the final DMG dealt by each stack by <span class=\"descriptionNumberColor\">BE_ChallengePeakBattle_Rage_AllDamageTypeAddedRatio</span>.",
          "type": "Other",
          "statusName": "Middlegame Mayhem"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1148970670\">Modifier_BattleEventAbility_ChallengePeakBattle_CountDown</a>",
          "modifierFlags": [
            "STAT_TurnCountAccumulator"
          ],
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                "Increment Cycles Counter",
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "BattleEventTurnLeftParam",
                  "value": -1,
                  "max": 100
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "BattleEventTurnLeftParam",
                        "compareType": "=",
                        "value2": {
                          "operator": "Variables[0] (BattleEventTurnLeftParam2) || Constants[0] (1) || ADD || RETURN",
                          "displayLines": "(BattleEventTurnLeftParam2 + 1)",
                          "constants": [
                            1
                          ],
                          "variables": [
                            "BattleEventTurnLeftParam2"
                          ]
                        }
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "BattleEventTurnLeftParam",
                        "compareType": ">",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Show VS. Countdown Effect",
                      "show": true
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
                        "value1": "BattleEventTurnLeftParam",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Show VS. Countdown Effect",
                      "show": false
                    }
                  ]
                },
                {
                  "name": "Set Warning Countdown",
                  "time": {
                    "operator": "Variables[0] (MAX) || Variables[1] (BattleEventTurnLeftParam) || Constants[0] (1) || SUB || Constants[1] (0) || PARAM_2 || FUNCTION || RETURN",
                    "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MAX</span>((BattleEventTurnLeftParam - 1), 0)",
                    "constants": [
                      1,
                      0
                    ],
                    "variables": [
                      "MAX",
                      "BattleEventTurnLeftParam"
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
                        "value1": "BattleEventTurnLeftParam",
                        "compareType": "<=",
                        "value2": {
                          "operator": "Variables[0] (BattleEventTurnLeftParam2) || RETURN",
                          "displayLines": "BattleEventTurnLeftParam2",
                          "constants": [],
                          "variables": [
                            "BattleEventTurnLeftParam2"
                          ]
                        }
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "BattleEventTurnLeftParam",
                        "compareType": ">",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    "Deleted bullshit",
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "RageTime",
                      "value": 1,
                      "max": 100
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All(with Unselectable)V2}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-936105590\">Modifier_BattleEventAbility_ChallengePeakBattle_Rage</a>[<span class=\"descriptionNumberColor\">Middlegame Mayhem</span>]",
                      "valuePerStack": {
                        "BE_ChallengePeakBattle_Rage_AllDamageTypeAddedRatio": {
                          "operator": "Variables[0] (BattleEventTurnLeftParam3) || RETURN",
                          "displayLines": "BattleEventTurnLeftParam3",
                          "constants": [],
                          "variables": [
                            "BattleEventTurnLeftParam3"
                          ]
                        }
                      },
                      "addStacksPerTrigger": 1
                    }
                  ]
                }
              ],
              "priorityLevel": -12
            },
            {
              "eventTrigger": "Action End [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": "Has Specific Result"
                }
              ]
            },
            {
              "eventTrigger": "Turn End [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "CyclesRemaining[?]",
                    "compareType": "<="
                  },
                  "passed": [
                    {
                      "name": "Action Advance/Delay",
                      "advanceType": "Set",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "set": 0
                    },
                    {
                      "name": "Lock Target AV",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": "Has Specific Result",
                  "passed": [
                    {
                      "name": "Lock Target AV",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Entity Created [Anyone]",
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
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Player Team"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "RageTime",
                        "compareType": ">=",
                        "value2": 1
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
                      "modifier": "<a class=\"gModGreen\" id=\"-936105590\">Modifier_BattleEventAbility_ChallengePeakBattle_Rage</a>[<span class=\"descriptionNumberColor\">Middlegame Mayhem</span>]",
                      "valuePerStack": {
                        "BE_ChallengePeakBattle_Rage_AllDamageTypeAddedRatio": {
                          "operator": "Variables[0] (BattleEventTurnLeftParam3) || RETURN",
                          "displayLines": "BattleEventTurnLeftParam3",
                          "constants": [],
                          "variables": [
                            "BattleEventTurnLeftParam3"
                          ]
                        }
                      },
                      "addStacksPerTrigger": {
                        "operator": "Variables[0] (RageTime) || RETURN",
                        "displayLines": "RageTime",
                        "constants": [],
                        "variables": [
                          "RageTime"
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Wave Count",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Action Advance/Delay",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "advanceType": "Delay",
                      "multiAdd": 2
                    },
                    {
                      "name": "Set Warning Countdown",
                      "time": {
                        "operator": "Variables[0] (BattleEventTurnLeftParam) || Constants[0] (1) || SUB || RETURN",
                        "displayLines": "(BattleEventTurnLeftParam - 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "BattleEventTurnLeftParam"
                        ]
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "BattleEventTurnLeftParam",
            "BattleEventTurnLeftParam2",
            "BattleEventTurnLeftParam3"
          ],
          "latentQueue": []
        }
      ]
    },
    "1912336050_ChallengePeakBattle_BaseAbility_Environment_0001": {
      "fileName": "1912336050_ChallengePeakBattle_BaseAbility_Environment_0001",
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
          "modifier": "<a class=\"gModGreen\" id=\"850232515\">Modifier_ChallengePeakBattle_BaseAbility_Environment_0001</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1809743821\">Modifier_ChallengePeakBattle_BaseAbility_Environment_0001_03</a>",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Defender",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                      "value": "-ChallengePeakBattle_Environment_0001_ADF_1"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1792966202\">Modifier_ChallengePeakBattle_BaseAbility_Environment_0001_02</a>",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "Receiving Heal End [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1809743821\">Modifier_ChallengePeakBattle_BaseAbility_Environment_0001_03</a>",
                  "duration": {
                    "operator": "Variables[0] (ChallengePeakBattle_Environment_0001_ADF_2) || RETURN",
                    "displayLines": "ChallengePeakBattle_Environment_0001_ADF_2",
                    "constants": [],
                    "variables": [
                      "ChallengePeakBattle_Environment_0001_ADF_2"
                    ]
                  },
                  "valuePerStack": {
                    "ChallengePeakBattle_Environment_0001_ADF_1": {
                      "operator": "Variables[0] (ChallengePeakBattle_Environment_0001_ADF_1) || RETURN",
                      "displayLines": "ChallengePeakBattle_Environment_0001_ADF_1",
                      "constants": [],
                      "variables": [
                        "ChallengePeakBattle_Environment_0001_ADF_1"
                      ]
                    },
                    "ChallengePeakBattle_Environment_0001_ADF_2": {
                      "operator": "Variables[0] (ChallengePeakBattle_Environment_0001_ADF_2) || RETURN",
                      "displayLines": "ChallengePeakBattle_Environment_0001_ADF_2",
                      "constants": [],
                      "variables": [
                        "ChallengePeakBattle_Environment_0001_ADF_2"
                      ]
                    }
                  }
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
                    "flagName": "Shield"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1809743821\">Modifier_ChallengePeakBattle_BaseAbility_Environment_0001_03</a>",
                      "duration": {
                        "operator": "Variables[0] (ChallengePeakBattle_Environment_0001_ADF_2) || RETURN",
                        "displayLines": "ChallengePeakBattle_Environment_0001_ADF_2",
                        "constants": [],
                        "variables": [
                          "ChallengePeakBattle_Environment_0001_ADF_2"
                        ]
                      },
                      "valuePerStack": {
                        "ChallengePeakBattle_Environment_0001_ADF_1": {
                          "operator": "Variables[0] (ChallengePeakBattle_Environment_0001_ADF_1) || RETURN",
                          "displayLines": "ChallengePeakBattle_Environment_0001_ADF_1",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_Environment_0001_ADF_1"
                          ]
                        },
                        "ChallengePeakBattle_Environment_0001_ADF_2": {
                          "operator": "Variables[0] (ChallengePeakBattle_Environment_0001_ADF_2) || RETURN",
                          "displayLines": "ChallengePeakBattle_Environment_0001_ADF_2",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_Environment_0001_ADF_2"
                          ]
                        }
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
          "for": "<a class=\"gModGreen\" id=\"mod__850232515\">Modifier_ChallengePeakBattle_BaseAbility_Environment_0001</a>",
          "execute": [
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Player Team"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1792966202\">Modifier_ChallengePeakBattle_BaseAbility_Environment_0001_02</a>",
                      "valuePerStack": {
                        "ChallengePeakBattle_Environment_0001_ADF_1": {
                          "operator": "Variables[0] (#ADF_1) || RETURN",
                          "displayLines": "#ADF_1",
                          "constants": [],
                          "variables": [
                            "#ADF_1"
                          ]
                        },
                        "ChallengePeakBattle_Environment_0001_ADF_2": {
                          "operator": "Variables[0] (#ADF_2) || RETURN",
                          "displayLines": "#ADF_2",
                          "constants": [],
                          "variables": [
                            "#ADF_2"
                          ]
                        }
                      }
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
    "1912336050_ChallengePeakBattle_BaseAbility_Plugins_0009": {
      "fileName": "1912336050_ChallengePeakBattle_BaseAbility_Plugins_0009",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1915662060\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0009</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1054595271\">ChallengePeakBattle_Plugins_0009_WindTag</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__662747565\">ChallengePeakBattle_Plugins_0009_ThunderTag</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1584675292\">ChallengePeakBattle_Plugins_0009_QuantumTag</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1304856250\">ChallengePeakBattle_Plugins_0009_PhysicalTag</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1959783064\">ChallengePeakBattle_Plugins_0009_ImaginaryTag</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1098913394\">ChallengePeakBattle_Plugins_0009_IceTag</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__962586433\">ChallengePeakBattle_Plugins_0009_FireTag</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1236507091\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0009_02</a>[<span class=\"descriptionNumberColor\">Seize the Moment</span>]",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (ChallengePeakBattle_Plugins_0009_ADF_1) || RETURN",
                    "displayLines": "ChallengePeakBattle_Plugins_0009_ADF_1",
                    "constants": [],
                    "variables": [
                      "ChallengePeakBattle_Plugins_0009_ADF_1"
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Attack Targets of Modifier Holder}}"
                  },
                  "ifTargetFound": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Has Element",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "DamageType": {
                              "name": "Damage Type Source",
                              "sourceType": "Fire"
                            }
                          },
                          {
                            "name": "Has Weakness",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "DamageType": "Fire",
                            "invertCondition": true
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
                          "modifier": "<a class=\"gModGreen\" id=\"-2009288629\">Standard_WeakType_Fire</a>[<span class=\"descriptionNumberColor\">Additional Fire Weakness</span>]"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"962586433\">ChallengePeakBattle_Plugins_0009_FireTag</a>"
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Has Element",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "DamageType": {
                              "name": "Damage Type Source",
                              "sourceType": "Ice"
                            }
                          },
                          {
                            "name": "Has Weakness",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "DamageType": "Ice",
                            "invertCondition": true
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
                          "modifier": "<a class=\"gModGreen\" id=\"1497676034\">Standard_WeakType_Ice</a>[<span class=\"descriptionNumberColor\">Additional Ice Weakness</span>]"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1098913394\">ChallengePeakBattle_Plugins_0009_IceTag</a>"
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Has Element",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "DamageType": {
                              "name": "Damage Type Source",
                              "sourceType": "Imaginary"
                            }
                          },
                          {
                            "name": "Has Weakness",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "DamageType": "Imaginary",
                            "invertCondition": true
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
                          "modifier": "<a class=\"gModGreen\" id=\"-1118024096\">Standard_WeakType_Imaginary</a>[<span class=\"descriptionNumberColor\">Additional Imaginary Weakness</span>]"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1959783064\">ChallengePeakBattle_Plugins_0009_ImaginaryTag</a>"
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Has Element",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "DamageType": {
                              "name": "Damage Type Source",
                              "sourceType": "Physical"
                            }
                          },
                          {
                            "name": "Has Weakness",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "DamageType": "Physical",
                            "invertCondition": true
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
                          "modifier": "<a class=\"gModGreen\" id=\"-1724958950\">Standard_WeakType_Physical</a>[<span class=\"descriptionNumberColor\">Additional Physical Weakness</span>]"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1304856250\">ChallengePeakBattle_Plugins_0009_PhysicalTag</a>"
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Has Element",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "DamageType": {
                              "name": "Damage Type Source",
                              "sourceType": "Quantum"
                            }
                          },
                          {
                            "name": "Has Weakness",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "DamageType": "Quantum",
                            "invertCondition": true
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
                          "modifier": "<a class=\"gModGreen\" id=\"1012677236\">Standard_WeakType_Quantum</a>[<span class=\"descriptionNumberColor\">Additional Quantum Weakness</span>]"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1584675292\">ChallengePeakBattle_Plugins_0009_QuantumTag</a>"
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Has Element",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "DamageType": {
                              "name": "Damage Type Source",
                              "sourceType": "Thunder"
                            }
                          },
                          {
                            "name": "Has Weakness",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "DamageType": "Thunder",
                            "invertCondition": true
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
                          "modifier": "<a class=\"gModGreen\" id=\"1930557999\">Standard_WeakType_Thunder</a>[<span class=\"descriptionNumberColor\">Additional Lightning Weakness</span>]"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"662747565\">ChallengePeakBattle_Plugins_0009_ThunderTag</a>"
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Has Element",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "DamageType": {
                              "name": "Damage Type Source",
                              "sourceType": "Wind"
                            }
                          },
                          {
                            "name": "Has Weakness",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "DamageType": "Wind",
                            "invertCondition": true
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
                          "modifier": "<a class=\"gModGreen\" id=\"-1938125975\">Standard_WeakType_Wind</a>[<span class=\"descriptionNumberColor\">Additional Wind Weakness</span>]"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1054595271\">ChallengePeakBattle_Plugins_0009_WindTag</a>"
                        }
                      ]
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
                    "modifier": "<a class=\"gModGreen\" id=\"962586433\">ChallengePeakBattle_Plugins_0009_FireTag</a>",
                    "casterFilter": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-2009288629\">Standard_WeakType_Fire</a>[<span class=\"descriptionNumberColor\">Additional Fire Weakness</span>]",
                      "onlyRemoveOwnersInstance": true
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1098913394\">ChallengePeakBattle_Plugins_0009_IceTag</a>",
                    "casterFilter": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1497676034\">Standard_WeakType_Ice</a>[<span class=\"descriptionNumberColor\">Additional Ice Weakness</span>]",
                      "onlyRemoveOwnersInstance": true
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1959783064\">ChallengePeakBattle_Plugins_0009_ImaginaryTag</a>",
                    "casterFilter": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1118024096\">Standard_WeakType_Imaginary</a>[<span class=\"descriptionNumberColor\">Additional Imaginary Weakness</span>]",
                      "onlyRemoveOwnersInstance": true
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1304856250\">ChallengePeakBattle_Plugins_0009_PhysicalTag</a>",
                    "casterFilter": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1724958950\">Standard_WeakType_Physical</a>[<span class=\"descriptionNumberColor\">Additional Physical Weakness</span>]",
                      "onlyRemoveOwnersInstance": true
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1584675292\">ChallengePeakBattle_Plugins_0009_QuantumTag</a>",
                    "casterFilter": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1012677236\">Standard_WeakType_Quantum</a>[<span class=\"descriptionNumberColor\">Additional Quantum Weakness</span>]",
                      "onlyRemoveOwnersInstance": true
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"662747565\">ChallengePeakBattle_Plugins_0009_ThunderTag</a>",
                    "casterFilter": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1930557999\">Standard_WeakType_Thunder</a>[<span class=\"descriptionNumberColor\">Additional Lightning Weakness</span>]",
                      "onlyRemoveOwnersInstance": true
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1054595271\">ChallengePeakBattle_Plugins_0009_WindTag</a>",
                    "casterFilter": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1938125975\">Standard_WeakType_Wind</a>[<span class=\"descriptionNumberColor\">Additional Wind Weakness</span>]",
                      "onlyRemoveOwnersInstance": true
                    }
                  ]
                }
              ]
            }
          ],
          "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">ChallengePeakBattle_Plugins_0009_ADF_1</span>. After using an attack, applies a Weakness of this unit's Type to the enemy target. This effect is removed when the enemy target recovers from the Weakness Break state.",
          "type": "Other",
          "statusName": "Seize the Moment"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1915662060\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0009</a>",
          "execute": [
            {
              "eventTrigger": "Entity Created [Anyone]",
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
                      "modifier": "<a class=\"gModGreen\" id=\"1236507091\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0009_02</a>[<span class=\"descriptionNumberColor\">Seize the Moment</span>]",
                      "valuePerStack": {
                        "ChallengePeakBattle_Plugins_0009_ADF_1": {
                          "operator": "Variables[0] (#ADF_1) || RETURN",
                          "displayLines": "#ADF_1",
                          "constants": [],
                          "variables": [
                            "#ADF_1"
                          ]
                        }
                      }
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
    "1912336050_ChallengePeakBattle_BaseAbility_Plugins_0008": {
      "fileName": "1912336050_ChallengePeakBattle_BaseAbility_Plugins_0008",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1898884441\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0008</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2126925530\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0008_Halo</a>",
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable, exclude Netherwing)}}.[[removeBattleEvents]]"
                  },
                  {
                    "name": "Target Filter",
                    "conditions": {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1577099167\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0008_03</a>[<span class=\"descriptionNumberColor\">Impassioned Spirits</span>]",
                      "invertCondition": true
                    }
                  }
                ]
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1560321548\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0008_04</a>",
              "haloStatus": true,
              "valuePerStack": {
                "ChallengePeakBattle_Plugins_0008_ADF_1": {
                  "operator": "Variables[0] (#ADF_1) || RETURN",
                  "displayLines": "#ADF_1",
                  "constants": [],
                  "variables": [
                    "#ADF_1"
                  ]
                },
                "ChallengePeakBattle_Plugins_0008_ADF_2": {
                  "operator": "Variables[0] (#ADF_2) || RETURN",
                  "displayLines": "#ADF_2",
                  "constants": [],
                  "variables": [
                    "#ADF_2"
                  ]
                },
                "ChallengePeakBattle_Plugins_0008_ADF_3": {
                  "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED_21) || RETURN",
                  "displayLines": "ENEMIES_OBJECT_UNUSED_21",
                  "constants": [],
                  "variables": [
                    "ENEMIES_OBJECT_UNUSED_21"
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1560321548\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0008_04</a>",
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1577099167\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0008_03</a>[<span class=\"descriptionNumberColor\">Impassioned Spirits</span>]",
                  "stackLimit": 999,
                  "valuePerStack": {
                    "ChallengePeakBattle_Plugins_0008_ADF_1": {
                      "operator": "Variables[0] (ChallengePeakBattle_Plugins_0008_ADF_1) || RETURN",
                      "displayLines": "ChallengePeakBattle_Plugins_0008_ADF_1",
                      "constants": [],
                      "variables": [
                        "ChallengePeakBattle_Plugins_0008_ADF_1"
                      ]
                    },
                    "ChallengePeakBattle_Plugins_0008_ADF_2": {
                      "operator": "Variables[0] (ChallengePeakBattle_Plugins_0008_ADF_2) || RETURN",
                      "displayLines": "ChallengePeakBattle_Plugins_0008_ADF_2",
                      "constants": [],
                      "variables": [
                        "ChallengePeakBattle_Plugins_0008_ADF_2"
                      ]
                    }
                  },
                  "addStacksPerTrigger": {
                    "operator": "Variables[0] (ChallengePeakBattle_Plugins_0008_ADF_3) || RETURN",
                    "displayLines": "ChallengePeakBattle_Plugins_0008_ADF_3",
                    "constants": [],
                    "variables": [
                      "ChallengePeakBattle_Plugins_0008_ADF_3"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "ChallengePeakBattle_Plugins_0008_ADF_1",
            "ChallengePeakBattle_Plugins_0008_ADF_2",
            "ChallengePeakBattle_Plugins_0008_ADF_3"
          ],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1577099167\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0008_03</a>[<span class=\"descriptionNumberColor\">Impassioned Spirits</span>]",
          "stackType": "Replace",
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
                    "operator": "Variables[0] (ChallengePeakBattle_Plugins_0008_ADF_2) || Variables[1] (MDF_Layer) || MUL || RETURN",
                    "displayLines": "(ChallengePeakBattle_Plugins_0008_ADF_2 * MDF_Layer)",
                    "constants": [],
                    "variables": [
                      "ChallengePeakBattle_Plugins_0008_ADF_2",
                      "MDF_Layer"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "ChallengePeakBattle_Plugins_0008_ADF_1",
            "ChallengePeakBattle_Plugins_0008_ADF_2"
          ],
          "latentQueue": [],
          "description": "Each stack increases ATK by <span class=\"descriptionNumberColor\">ChallengePeakBattle_Plugins_0008_ADF_2</span>.",
          "type": "Other",
          "effectName": "ATK Boost",
          "statusName": "Impassioned Spirits",
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1593876786\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0008_02</a>[<span class=\"descriptionNumberColor\">Impassioned Spirits</span>]",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (ChallengePeakBattle_Plugins_0008_ADF_1) || RETURN",
                    "displayLines": "ChallengePeakBattle_Plugins_0008_ADF_1",
                    "constants": [],
                    "variables": [
                      "ChallengePeakBattle_Plugins_0008_ADF_1"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "Increases ATK by <span class=\"descriptionNumberColor\">ChallengePeakBattle_Plugins_0008_ADF_1</span>.",
          "type": "Other",
          "statusName": "Impassioned Spirits"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1898884441\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0008</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "BattleEventAttack_Layer"
                }
              ]
            },
            {
              "eventTrigger": "Entity Created [Anyone]",
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
                      "modifier": "<a class=\"gModGreen\" id=\"-1593876786\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0008_02</a>[<span class=\"descriptionNumberColor\">Impassioned Spirits</span>]",
                      "valuePerStack": {
                        "ChallengePeakBattle_Plugins_0008_ADF_1": {
                          "operator": "Variables[0] (#ADF_1) || RETURN",
                          "displayLines": "#ADF_1",
                          "constants": [],
                          "variables": [
                            "#ADF_1"
                          ]
                        },
                        "ChallengePeakBattle_Plugins_0008_ADF_2": {
                          "operator": "Variables[0] (#ADF_2) || RETURN",
                          "displayLines": "#ADF_2",
                          "constants": [],
                          "variables": [
                            "#ADF_2"
                          ]
                        }
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
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Modifier Was",
                        "modifier": "<a class=\"gModGreen\" id=\"1690022498\">MissionBattleEvent60038_BE_Trigger</a>"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All(with Unselectable, exclude Netherwing)}}.[[removeBattleEvents]]"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1577099167\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0008_03</a>[<span class=\"descriptionNumberColor\">Impassioned Spirits</span>]",
                      "stackLimit": 999,
                      "valuePerStack": {
                        "ChallengePeakBattle_Plugins_0008_ADF_1": {
                          "operator": "Variables[0] (#ADF_1) || RETURN",
                          "displayLines": "#ADF_1",
                          "constants": [],
                          "variables": [
                            "#ADF_1"
                          ]
                        },
                        "ChallengePeakBattle_Plugins_0008_ADF_2": {
                          "operator": "Variables[0] (#ADF_2) || RETURN",
                          "displayLines": "#ADF_2",
                          "constants": [],
                          "variables": [
                            "#ADF_2"
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
                      "modifier": "<a class=\"gModGreen\" id=\"-2126925530\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0008_Halo</a>",
                      "valuePerStack": {
                        "ChallengePeakBattle_Plugins_0008_ADF_1": {
                          "operator": "Variables[0] (#ADF_1) || RETURN",
                          "displayLines": "#ADF_1",
                          "constants": [],
                          "variables": [
                            "#ADF_1"
                          ]
                        },
                        "ChallengePeakBattle_Plugins_0008_ADF_2": {
                          "operator": "Variables[0] (#ADF_2) || RETURN",
                          "displayLines": "#ADF_2",
                          "constants": [],
                          "variables": [
                            "#ADF_2"
                          ]
                        }
                      }
                    },
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "BattleEventAttack_Layer",
                      "value": 1,
                      "max": 999
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
    "1912336050_ChallengePeakBattle_BaseAbility_Plugins_0007": {
      "fileName": "1912336050_ChallengePeakBattle_BaseAbility_Plugins_0007",
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
          "modifier": "<a class=\"gModGreen\" id=\"-2083438250\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0007</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1588986863\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0007_04</a>[<span class=\"descriptionNumberColor\">No Break No Rise</span>]",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreak</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (ChallengePeakBattle_Plugins_0007_ADF_1) || RETURN",
                    "displayLines": "ChallengePeakBattle_Plugins_0007_ADF_1",
                    "constants": [],
                    "variables": [
                      "ChallengePeakBattle_Plugins_0007_ADF_1"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "Break Effect increases by <span class=\"descriptionNumberColor\">ChallengePeakBattle_Plugins_0007_ADF_1</span>.",
          "type": "Other",
          "statusName": "No Break No Rise"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1538654006\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0007_03</a>[<span class=\"descriptionNumberColor\">No Break No Rise</span>]",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Break DMG"
                    ],
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Defender",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                          "value": "(MDF_Layer * ChallengePeakBattle_Plugins_0007_ADF_2)"
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
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "MDF_Layer",
                  "multiplier": 1
                }
              ]
            }
          ],
          "description": "Each stack increases the Break DMG taken by <span class=\"descriptionNumberColor\">ChallengePeakBattle_Plugins_0007_ADF_2</span>. This effect can stack up to <span class=\"descriptionNumberColor\">ChallengePeakBattle_Plugins_0007_ADF_3</span> time(s).",
          "type": "Other",
          "statusName": "No Break No Rise",
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1555431625\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0007_02</a>",
          "execute": [
            {
              "eventTrigger": "Being Toughness Bar Reset [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1538654006\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0007_03</a>[<span class=\"descriptionNumberColor\">No Break No Rise</span>]",
                  "stackLimit": {
                    "operator": "Variables[0] (ChallengePeakBattle_Plugins_0007_ADF_3) || RETURN",
                    "displayLines": "ChallengePeakBattle_Plugins_0007_ADF_3",
                    "constants": [],
                    "variables": [
                      "ChallengePeakBattle_Plugins_0007_ADF_3"
                    ]
                  },
                  "valuePerStack": {
                    "ChallengePeakBattle_Plugins_0007_ADF_1": {
                      "operator": "Variables[0] (ChallengePeakBattle_Plugins_0007_ADF_1) || RETURN",
                      "displayLines": "ChallengePeakBattle_Plugins_0007_ADF_1",
                      "constants": [],
                      "variables": [
                        "ChallengePeakBattle_Plugins_0007_ADF_1"
                      ]
                    },
                    "ChallengePeakBattle_Plugins_0007_ADF_2": {
                      "operator": "Variables[0] (ChallengePeakBattle_Plugins_0007_ADF_2) || RETURN",
                      "displayLines": "ChallengePeakBattle_Plugins_0007_ADF_2",
                      "constants": [],
                      "variables": [
                        "ChallengePeakBattle_Plugins_0007_ADF_2"
                      ]
                    },
                    "ChallengePeakBattle_Plugins_0007_ADF_3": {
                      "operator": "Variables[0] (ChallengePeakBattle_Plugins_0007_ADF_3) || RETURN",
                      "displayLines": "ChallengePeakBattle_Plugins_0007_ADF_3",
                      "constants": [],
                      "variables": [
                        "ChallengePeakBattle_Plugins_0007_ADF_3"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2083438250\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0007</a>",
          "execute": [
            {
              "eventTrigger": "Entity Created [Anyone]",
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
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Enemy Team"
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
                      "modifier": "<a class=\"gModGreen\" id=\"1555431625\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0007_02</a>",
                      "valuePerStack": {
                        "ChallengePeakBattle_Plugins_0007_ADF_1": {
                          "operator": "Variables[0] (#ADF_1) || RETURN",
                          "displayLines": "#ADF_1",
                          "constants": [],
                          "variables": [
                            "#ADF_1"
                          ]
                        },
                        "ChallengePeakBattle_Plugins_0007_ADF_2": {
                          "operator": "Variables[0] (#ADF_2) || RETURN",
                          "displayLines": "#ADF_2",
                          "constants": [],
                          "variables": [
                            "#ADF_2"
                          ]
                        },
                        "ChallengePeakBattle_Plugins_0007_ADF_3": {
                          "operator": "Variables[0] (#ADF_3) || RETURN",
                          "displayLines": "#ADF_3",
                          "constants": [],
                          "variables": [
                            "#ADF_3"
                          ]
                        }
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
                      "modifier": "<a class=\"gModGreen\" id=\"1588986863\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0007_04</a>[<span class=\"descriptionNumberColor\">No Break No Rise</span>]",
                      "valuePerStack": {
                        "ChallengePeakBattle_Plugins_0007_ADF_1": {
                          "operator": "Variables[0] (#ADF_1) || RETURN",
                          "displayLines": "#ADF_1",
                          "constants": [],
                          "variables": [
                            "#ADF_1"
                          ]
                        },
                        "ChallengePeakBattle_Plugins_0007_ADF_2": {
                          "operator": "Variables[0] (#ADF_2) || RETURN",
                          "displayLines": "#ADF_2",
                          "constants": [],
                          "variables": [
                            "#ADF_2"
                          ]
                        },
                        "ChallengePeakBattle_Plugins_0007_ADF_3": {
                          "operator": "Variables[0] (#ADF_3) || RETURN",
                          "displayLines": "#ADF_3",
                          "constants": [],
                          "variables": [
                            "#ADF_3"
                          ]
                        }
                      }
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
    "1912336050_ChallengePeakBattle_BaseAbility_Plugins_0006": {
      "fileName": "1912336050_ChallengePeakBattle_BaseAbility_Plugins_0006",
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
          "modifier": "<a class=\"gModGreen\" id=\"-2066660631\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0006</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-754455660\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0006_Halo</a>",
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable, exclude Netherwing)}}.[[removeBattleEvents]]"
                  },
                  {
                    "name": "Target Filter",
                    "conditions": {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"770601951\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0006_03</a>[<span class=\"descriptionNumberColor\">Fluid Dash</span>]",
                      "invertCondition": true
                    }
                  }
                ]
              },
              "modifier": "<a class=\"gModGreen\" id=\"720269094\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0006_04</a>",
              "haloStatus": true,
              "valuePerStack": {
                "ChallengePeakBattle_Plugins_0006_ADF_1": {
                  "operator": "Variables[0] (#ADF_1) || RETURN",
                  "displayLines": "#ADF_1",
                  "constants": [],
                  "variables": [
                    "#ADF_1"
                  ]
                },
                "ChallengePeakBattle_Plugins_0006_ADF_2": {
                  "operator": "Variables[0] (#ADF_2) || RETURN",
                  "displayLines": "#ADF_2",
                  "constants": [],
                  "variables": [
                    "#ADF_2"
                  ]
                },
                "ChallengePeakBattle_Plugins_0006_ADF_3": {
                  "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED_20) || RETURN",
                  "displayLines": "ENEMIES_OBJECT_UNUSED_20",
                  "constants": [],
                  "variables": [
                    "ENEMIES_OBJECT_UNUSED_20"
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__720269094\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0006_04</a>",
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
                  "modifier": "<a class=\"gModGreen\" id=\"770601951\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0006_03</a>[<span class=\"descriptionNumberColor\">Fluid Dash</span>]",
                  "stackLimit": 999,
                  "valuePerStack": {
                    "ChallengePeakBattle_Plugins_0006_ADF_1": {
                      "operator": "Variables[0] (ChallengePeakBattle_Plugins_0006_ADF_1) || RETURN",
                      "displayLines": "ChallengePeakBattle_Plugins_0006_ADF_1",
                      "constants": [],
                      "variables": [
                        "ChallengePeakBattle_Plugins_0006_ADF_1"
                      ]
                    },
                    "ChallengePeakBattle_Plugins_0006_ADF_2": {
                      "operator": "Variables[0] (ChallengePeakBattle_Plugins_0006_ADF_2) || RETURN",
                      "displayLines": "ChallengePeakBattle_Plugins_0006_ADF_2",
                      "constants": [],
                      "variables": [
                        "ChallengePeakBattle_Plugins_0006_ADF_2"
                      ]
                    }
                  },
                  "addStacksPerTrigger": {
                    "operator": "Variables[0] (ChallengePeakBattle_Plugins_0006_ADF_3) || RETURN",
                    "displayLines": "ChallengePeakBattle_Plugins_0006_ADF_3",
                    "constants": [],
                    "variables": [
                      "ChallengePeakBattle_Plugins_0006_ADF_3"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "ChallengePeakBattle_Plugins_0006_ADF_1",
            "ChallengePeakBattle_Plugins_0006_ADF_2",
            "ChallengePeakBattle_Plugins_0006_ADF_3"
          ],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__770601951\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0006_03</a>[<span class=\"descriptionNumberColor\">Fluid Dash</span>]",
          "stackType": "Replace",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (ChallengePeakBattle_Plugins_0006_ADF_2) || Variables[1] (MDF_Layer) || MUL || RETURN",
                    "displayLines": "(ChallengePeakBattle_Plugins_0006_ADF_2 * MDF_Layer)",
                    "constants": [],
                    "variables": [
                      "ChallengePeakBattle_Plugins_0006_ADF_2",
                      "MDF_Layer"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "ChallengePeakBattle_Plugins_0006_ADF_1",
            "ChallengePeakBattle_Plugins_0006_ADF_2"
          ],
          "latentQueue": [],
          "description": "Each stack increases SPD by <span class=\"descriptionNumberColor\">ChallengePeakBattle_Plugins_0006_ADF_2</span>.",
          "type": "Other",
          "effectName": "SPD Boost",
          "statusName": "Fluid Dash",
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__753824332\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0006_02</a>[<span class=\"descriptionNumberColor\">Fluid Dash</span>]",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "DOT"
                    ]
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceAllPEN</span>&nbsp;",
                          "value": "ChallengePeakBattle_Plugins_0006_ADF_1"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "description": "All-Type RES PEN for DoT dealt increases by <span class=\"descriptionNumberColor\">ChallengePeakBattle_Plugins_0006_ADF_1</span>.",
          "type": "Other",
          "statusName": "Fluid Dash"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2066660631\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0006</a>",
          "execute": [
            {
              "eventTrigger": "Entity Created [Anyone]",
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
                      "modifier": "<a class=\"gModGreen\" id=\"753824332\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0006_02</a>[<span class=\"descriptionNumberColor\">Fluid Dash</span>]",
                      "valuePerStack": {
                        "ChallengePeakBattle_Plugins_0006_ADF_1": {
                          "operator": "Variables[0] (#ADF_1) || RETURN",
                          "displayLines": "#ADF_1",
                          "constants": [],
                          "variables": [
                            "#ADF_1"
                          ]
                        },
                        "ChallengePeakBattle_Plugins_0006_ADF_2": {
                          "operator": "Variables[0] (#ADF_2) || RETURN",
                          "displayLines": "#ADF_2",
                          "constants": [],
                          "variables": [
                            "#ADF_2"
                          ]
                        }
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
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Modifier Was",
                        "modifier": "<a class=\"gModGreen\" id=\"922752745\">MissionBattleEvent60037_BE_Trigger</a>"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All(with Unselectable, exclude Netherwing)}}.[[removeBattleEvents]]"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"770601951\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0006_03</a>[<span class=\"descriptionNumberColor\">Fluid Dash</span>]",
                      "stackLimit": 999,
                      "valuePerStack": {
                        "ChallengePeakBattle_Plugins_0006_ADF_1": {
                          "operator": "Variables[0] (#ADF_1) || RETURN",
                          "displayLines": "#ADF_1",
                          "constants": [],
                          "variables": [
                            "#ADF_1"
                          ]
                        },
                        "ChallengePeakBattle_Plugins_0006_ADF_2": {
                          "operator": "Variables[0] (#ADF_2) || RETURN",
                          "displayLines": "#ADF_2",
                          "constants": [],
                          "variables": [
                            "#ADF_2"
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
                      "modifier": "<a class=\"gModGreen\" id=\"-754455660\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0006_Halo</a>",
                      "valuePerStack": {
                        "ChallengePeakBattle_Plugins_0006_ADF_1": {
                          "operator": "Variables[0] (#ADF_1) || RETURN",
                          "displayLines": "#ADF_1",
                          "constants": [],
                          "variables": [
                            "#ADF_1"
                          ]
                        },
                        "ChallengePeakBattle_Plugins_0006_ADF_2": {
                          "operator": "Variables[0] (#ADF_2) || RETURN",
                          "displayLines": "#ADF_2",
                          "constants": [],
                          "variables": [
                            "#ADF_2"
                          ]
                        }
                      }
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
    "1912336050_ChallengePeakBattle_BaseAbility_Plugins_0005": {
      "fileName": "1912336050_ChallengePeakBattle_BaseAbility_Plugins_0005",
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
          "modifier": "<a class=\"gModGreen\" id=\"-2116993488\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0005</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1184857721\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0005_Halo</a>",
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable, exclude Netherwing)}}.[[removeBattleEvents]]"
                  },
                  {
                    "name": "Target Filter",
                    "conditions": {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-46685300\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0005_03</a>[<span class=\"descriptionNumberColor\">Power Surge</span>]",
                      "invertCondition": true
                    }
                  }
                ]
              },
              "modifier": "<a class=\"gModGreen\" id=\"-63462919\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0005_04</a>",
              "haloStatus": true,
              "valuePerStack": {
                "ChallengePeakBattle_Plugins_0005_ADF_1": {
                  "operator": "Variables[0] (#ADF_1) || RETURN",
                  "displayLines": "#ADF_1",
                  "constants": [],
                  "variables": [
                    "#ADF_1"
                  ]
                },
                "ChallengePeakBattle_Plugins_0005_ADF_2": {
                  "operator": "Variables[0] (#ADF_2) || RETURN",
                  "displayLines": "#ADF_2",
                  "constants": [],
                  "variables": [
                    "#ADF_2"
                  ]
                },
                "ChallengePeakBattle_Plugins_0005_ADF_3": {
                  "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED_20) || RETURN",
                  "displayLines": "ENEMIES_OBJECT_UNUSED_20",
                  "constants": [],
                  "variables": [
                    "ENEMIES_OBJECT_UNUSED_20"
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-63462919\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0005_04</a>",
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
                  "modifier": "<a class=\"gModGreen\" id=\"-46685300\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0005_03</a>[<span class=\"descriptionNumberColor\">Power Surge</span>]",
                  "stackLimit": 999,
                  "valuePerStack": {
                    "ChallengePeakBattle_Plugins_0005_ADF_1": {
                      "operator": "Variables[0] (ChallengePeakBattle_Plugins_0005_ADF_1) || RETURN",
                      "displayLines": "ChallengePeakBattle_Plugins_0005_ADF_1",
                      "constants": [],
                      "variables": [
                        "ChallengePeakBattle_Plugins_0005_ADF_1"
                      ]
                    },
                    "ChallengePeakBattle_Plugins_0005_ADF_2": {
                      "operator": "Variables[0] (ChallengePeakBattle_Plugins_0005_ADF_2) || RETURN",
                      "displayLines": "ChallengePeakBattle_Plugins_0005_ADF_2",
                      "constants": [],
                      "variables": [
                        "ChallengePeakBattle_Plugins_0005_ADF_2"
                      ]
                    }
                  },
                  "addStacksPerTrigger": {
                    "operator": "Variables[0] (ChallengePeakBattle_Plugins_0005_ADF_3) || RETURN",
                    "displayLines": "ChallengePeakBattle_Plugins_0005_ADF_3",
                    "constants": [],
                    "variables": [
                      "ChallengePeakBattle_Plugins_0005_ADF_3"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "ChallengePeakBattle_Plugins_0005_ADF_1",
            "ChallengePeakBattle_Plugins_0005_ADF_2",
            "ChallengePeakBattle_Plugins_0005_ADF_3"
          ],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-46685300\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0005_03</a>[<span class=\"descriptionNumberColor\">Power Surge</span>]",
          "stackType": "Replace",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATKFlat</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (ChallengePeakBattle_Plugins_0005_ADF_2) || Variables[1] (MDF_Layer) || MUL || RETURN",
                    "displayLines": "(ChallengePeakBattle_Plugins_0005_ADF_2 * MDF_Layer)",
                    "constants": [],
                    "variables": [
                      "ChallengePeakBattle_Plugins_0005_ADF_2",
                      "MDF_Layer"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "ChallengePeakBattle_Plugins_0005_ADF_1",
            "ChallengePeakBattle_Plugins_0005_ADF_2"
          ],
          "latentQueue": [],
          "description": "Each stack increases ATK by <span class=\"descriptionNumberColor\">ChallengePeakBattle_Plugins_0005_ADF_2</span>.",
          "type": "Other",
          "effectName": "ATK Boost",
          "statusName": "Power Surge",
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-29907681\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0005_02</a>[<span class=\"descriptionNumberColor\">Power Surge</span>]",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Basic ATK",
                      "Skill",
                      "Ultimate"
                    ]
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                          "value": "ChallengePeakBattle_Plugins_0005_ADF_1"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "description": "Basic ATK, Skill, and Ultimate DMG dealt increase by <span class=\"descriptionNumberColor\">ChallengePeakBattle_Plugins_0005_ADF_1</span>.",
          "type": "Other",
          "statusName": "Power Surge"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2116993488\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0005</a>",
          "execute": [
            {
              "eventTrigger": "Entity Created [Anyone]",
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
                      "modifier": "<a class=\"gModGreen\" id=\"-29907681\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0005_02</a>[<span class=\"descriptionNumberColor\">Power Surge</span>]",
                      "valuePerStack": {
                        "ChallengePeakBattle_Plugins_0005_ADF_1": {
                          "operator": "Variables[0] (#ADF_1) || RETURN",
                          "displayLines": "#ADF_1",
                          "constants": [],
                          "variables": [
                            "#ADF_1"
                          ]
                        },
                        "ChallengePeakBattle_Plugins_0005_ADF_2": {
                          "operator": "Variables[0] (#ADF_2) || RETURN",
                          "displayLines": "#ADF_2",
                          "constants": [],
                          "variables": [
                            "#ADF_2"
                          ]
                        }
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
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Modifier Was",
                        "modifier": "<a class=\"gModGreen\" id=\"922752745\">MissionBattleEvent60037_BE_Trigger</a>"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All(with Unselectable, exclude Netherwing)}}.[[removeBattleEvents]]"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-46685300\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0005_03</a>[<span class=\"descriptionNumberColor\">Power Surge</span>]",
                      "stackLimit": 999,
                      "valuePerStack": {
                        "ChallengePeakBattle_Plugins_0005_ADF_1": {
                          "operator": "Variables[0] (#ADF_1) || RETURN",
                          "displayLines": "#ADF_1",
                          "constants": [],
                          "variables": [
                            "#ADF_1"
                          ]
                        },
                        "ChallengePeakBattle_Plugins_0005_ADF_2": {
                          "operator": "Variables[0] (#ADF_2) || RETURN",
                          "displayLines": "#ADF_2",
                          "constants": [],
                          "variables": [
                            "#ADF_2"
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
                      "modifier": "<a class=\"gModGreen\" id=\"-1184857721\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0005_Halo</a>",
                      "valuePerStack": {
                        "ChallengePeakBattle_Plugins_0005_ADF_1": {
                          "operator": "Variables[0] (#ADF_1) || RETURN",
                          "displayLines": "#ADF_1",
                          "constants": [],
                          "variables": [
                            "#ADF_1"
                          ]
                        },
                        "ChallengePeakBattle_Plugins_0005_ADF_2": {
                          "operator": "Variables[0] (#ADF_2) || RETURN",
                          "displayLines": "#ADF_2",
                          "constants": [],
                          "variables": [
                            "#ADF_2"
                          ]
                        }
                      }
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
    "1912336050_ChallengePeakBattle_BaseAbility_Plugins_0004": {
      "fileName": "1912336050_ChallengePeakBattle_BaseAbility_Plugins_0004",
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
          "modifier": "<a class=\"gModGreen\" id=\"-2100215869\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0004</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-468236083\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0004_03</a>",
          "execute": [
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
                  "variableName": "BattleEvent_P1_ADF_ExtraRadio",
                  "value": {
                    "operator": "Variables[0] (ChallengePeakBattle_Plugins_0004_ADF_2) || RETURN",
                    "displayLines": "ChallengePeakBattle_Plugins_0004_ADF_2",
                    "constants": [],
                    "variables": [
                      "ChallengePeakBattle_Plugins_0004_ADF_2"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-485013702\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0004_02</a>[<span class=\"descriptionNumberColor\">Sanguine Vitality</span>]",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (ChallengePeakBattle_Plugins_0004_ADF_1) || RETURN",
                    "displayLines": "ChallengePeakBattle_Plugins_0004_ADF_1",
                    "constants": [],
                    "variables": [
                      "ChallengePeakBattle_Plugins_0004_ADF_1"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "CRIT DMG increases by <span class=\"descriptionNumberColor\">ChallengePeakBattle_Plugins_0004_ADF_1</span>.",
          "type": "Other",
          "statusName": "Sanguine Vitality"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2100215869\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0004</a>",
          "execute": [
            {
              "eventTrigger": "Entity Created [Anyone]",
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
                      "modifier": "<a class=\"gModGreen\" id=\"-485013702\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0004_02</a>[<span class=\"descriptionNumberColor\">Sanguine Vitality</span>]",
                      "valuePerStack": {
                        "ChallengePeakBattle_Plugins_0004_ADF_1": {
                          "operator": "Variables[0] (#ADF_1) || RETURN",
                          "displayLines": "#ADF_1",
                          "constants": [],
                          "variables": [
                            "#ADF_1"
                          ]
                        },
                        "ChallengePeakBattle_Plugins_0004_ADF_2": {
                          "operator": "Variables[0] (#ADF_2) || RETURN",
                          "displayLines": "#ADF_2",
                          "constants": [],
                          "variables": [
                            "#ADF_2"
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Battle Event/Summon Created [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Battle Event ID",
                        "ID": 60037,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
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
                      "modifier": "<a class=\"gModGreen\" id=\"-468236083\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0004_03</a>",
                      "valuePerStack": {
                        "ChallengePeakBattle_Plugins_0004_ADF_1": {
                          "operator": "Variables[0] (#ADF_1) || RETURN",
                          "displayLines": "#ADF_1",
                          "constants": [],
                          "variables": [
                            "#ADF_1"
                          ]
                        },
                        "ChallengePeakBattle_Plugins_0004_ADF_2": {
                          "operator": "Variables[0] (#ADF_2) || RETURN",
                          "displayLines": "#ADF_2",
                          "constants": [],
                          "variables": [
                            "#ADF_2"
                          ]
                        }
                      },
                      "casterAssign": "TargetSelf"
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
    "1912336050_ChallengePeakBattle_BaseAbility_Plugins_0003": {
      "fileName": "1912336050_ChallengePeakBattle_BaseAbility_Plugins_0003",
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
          "modifier": "<a class=\"gModGreen\" id=\"-2016327774\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0003</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1147866258\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0003_03</a>[<span class=\"descriptionNumberColor\">Hammer and Anvil</span>]",
          "stackType": "Replace",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (ChallengePeakBattle_Plugins_0003_ADF_1) || RETURN",
                    "displayLines": "ChallengePeakBattle_Plugins_0003_ADF_1",
                    "constants": [],
                    "variables": [
                      "ChallengePeakBattle_Plugins_0003_ADF_1"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceAllPEN</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (ChallengePeakBattle_Plugins_0003_ADF_2) || RETURN",
                    "displayLines": "ChallengePeakBattle_Plugins_0003_ADF_2",
                    "constants": [],
                    "variables": [
                      "ChallengePeakBattle_Plugins_0003_ADF_2"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "DMG taken decreases by <span class=\"descriptionNumberColor\">ChallengePeakBattle_Plugins_0003_ADF_1</span> and All-Type RES PEN increases by <span class=\"descriptionNumberColor\">ChallengePeakBattle_Plugins_0003_ADF_2</span>.",
          "type": "Other",
          "statusName": "Hammer and Anvil"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1164643877\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0003_02</a>",
          "execute": [
            {
              "eventTrigger": "Receiving Heal End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
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
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1147866258\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0003_03</a>[<span class=\"descriptionNumberColor\">Hammer and Anvil</span>]",
                      "duration": {
                        "operator": "Variables[0] (ChallengePeakBattle_Plugins_0003_ADF_3) || RETURN",
                        "displayLines": "ChallengePeakBattle_Plugins_0003_ADF_3",
                        "constants": [],
                        "variables": [
                          "ChallengePeakBattle_Plugins_0003_ADF_3"
                        ]
                      },
                      "valuePerStack": {
                        "ChallengePeakBattle_Plugins_0003_ADF_1": {
                          "operator": "Variables[0] (ChallengePeakBattle_Plugins_0003_ADF_1) || RETURN",
                          "displayLines": "ChallengePeakBattle_Plugins_0003_ADF_1",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_Plugins_0003_ADF_1"
                          ]
                        },
                        "ChallengePeakBattle_Plugins_0003_ADF_2": {
                          "operator": "Variables[0] (ChallengePeakBattle_Plugins_0003_ADF_2) || RETURN",
                          "displayLines": "ChallengePeakBattle_Plugins_0003_ADF_2",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_Plugins_0003_ADF_2"
                          ]
                        },
                        "ChallengePeakBattle_Plugins_0003_ADF_3": {
                          "operator": "Variables[0] (ChallengePeakBattle_Plugins_0003_ADF_3) || RETURN",
                          "displayLines": "ChallengePeakBattle_Plugins_0003_ADF_3",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_Plugins_0003_ADF_3"
                          ]
                        }
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
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Modifier Has Flag",
                        "flagName": "Shield"
                      },
                      {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target 2}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "invertCondition": true
                      },
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target 2}}"
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
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1147866258\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0003_03</a>[<span class=\"descriptionNumberColor\">Hammer and Anvil</span>]",
                      "duration": {
                        "operator": "Variables[0] (ChallengePeakBattle_Plugins_0003_ADF_3) || RETURN",
                        "displayLines": "ChallengePeakBattle_Plugins_0003_ADF_3",
                        "constants": [],
                        "variables": [
                          "ChallengePeakBattle_Plugins_0003_ADF_3"
                        ]
                      },
                      "valuePerStack": {
                        "ChallengePeakBattle_Plugins_0003_ADF_1": {
                          "operator": "Variables[0] (ChallengePeakBattle_Plugins_0003_ADF_1) || RETURN",
                          "displayLines": "ChallengePeakBattle_Plugins_0003_ADF_1",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_Plugins_0003_ADF_1"
                          ]
                        },
                        "ChallengePeakBattle_Plugins_0003_ADF_2": {
                          "operator": "Variables[0] (ChallengePeakBattle_Plugins_0003_ADF_2) || RETURN",
                          "displayLines": "ChallengePeakBattle_Plugins_0003_ADF_2",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_Plugins_0003_ADF_2"
                          ]
                        },
                        "ChallengePeakBattle_Plugins_0003_ADF_3": {
                          "operator": "Variables[0] (ChallengePeakBattle_Plugins_0003_ADF_3) || RETURN",
                          "displayLines": "ChallengePeakBattle_Plugins_0003_ADF_3",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_Plugins_0003_ADF_3"
                          ]
                        }
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
          "for": "<a class=\"gModGreen\" id=\"mod__-2016327774\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0003</a>",
          "execute": [
            {
              "eventTrigger": "Entity Created [Anyone]",
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
                      "modifier": "<a class=\"gModGreen\" id=\"1164643877\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0003_02</a>",
                      "valuePerStack": {
                        "ChallengePeakBattle_Plugins_0003_ADF_1": {
                          "operator": "Variables[0] (#ADF_1) || RETURN",
                          "displayLines": "#ADF_1",
                          "constants": [],
                          "variables": [
                            "#ADF_1"
                          ]
                        },
                        "ChallengePeakBattle_Plugins_0003_ADF_2": {
                          "operator": "Variables[0] (#ADF_2) || RETURN",
                          "displayLines": "#ADF_2",
                          "constants": [],
                          "variables": [
                            "#ADF_2"
                          ]
                        },
                        "ChallengePeakBattle_Plugins_0003_ADF_3": {
                          "operator": "Variables[0] (#ADF_3) || RETURN",
                          "displayLines": "#ADF_3",
                          "constants": [],
                          "variables": [
                            "#ADF_3"
                          ]
                        }
                      }
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
    "1912336050_ChallengePeakBattle_BaseAbility_Plugins_0002": {
      "fileName": "1912336050_ChallengePeakBattle_BaseAbility_Plugins_0002",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1999550155\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0002</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1575097166\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0002_IgnoreDEF_2</a>",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Hit",
              "execute": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Defender",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                      "value": "-ChallengePeakBattle_Plugins_0002_ADF_2"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-565240697\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0002_IgnoreDEF</a>",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Hit",
              "execute": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Defender",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                      "value": "-ChallengePeakBattle_Plugins_0002_ADF_1"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1527327304\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0002_02</a>[<span class=\"descriptionNumberColor\">Infantry and Cavalry</span>]",
          "execute": [
            {
              "eventTrigger": "Deal Damage End [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "MDF_InUltra",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_SkillEnhanced",
                      "value": 1
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Owner]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Type",
                    "skillType": "Ultimate"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-565240697\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0002_IgnoreDEF</a>",
                      "valuePerStack": {
                        "ChallengePeakBattle_Plugins_0002_ADF_1": {
                          "operator": "Variables[0] (ChallengePeakBattle_Plugins_0002_ADF_1) || RETURN",
                          "displayLines": "ChallengePeakBattle_Plugins_0002_ADF_1",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_Plugins_0002_ADF_1"
                          ]
                        }
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_InUltra",
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
                        "name": "Compare: Variable",
                        "value1": "MDF_SkillEnhanced",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Skill Type",
                        "skillType": "Skill"
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
                      "modifier": "<a class=\"gModGreen\" id=\"1575097166\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0002_IgnoreDEF_2</a>",
                      "valuePerStack": {
                        "ChallengePeakBattle_Plugins_0002_ADF_2": {
                          "operator": "Variables[0] (ChallengePeakBattle_Plugins_0002_ADF_2) || RETURN",
                          "displayLines": "ChallengePeakBattle_Plugins_0002_ADF_2",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_Plugins_0002_ADF_2"
                          ]
                        }
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_SkillEnhanced",
                      "value": 0
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Type",
                    "skillType": "Ultimate"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-565240697\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0002_IgnoreDEF</a>"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_InUltra",
                      "value": 0
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Type",
                    "skillType": "Skill"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1575097166\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0002_IgnoreDEF_2</a>"
                    }
                  ]
                }
              ]
            }
          ],
          "description": "Ignores <span class=\"descriptionNumberColor\">ChallengePeakBattle_Plugins_0002_ADF_1</span> of the target's DEF when using Ultimate. After Ultimate deals DMG, the next Skill ignores <span class=\"descriptionNumberColor\">ChallengePeakBattle_Plugins_0002_ADF_2</span> of the target's DEF.",
          "type": "Other",
          "statusName": "Infantry and Cavalry"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1999550155\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0002</a>",
          "execute": [
            {
              "eventTrigger": "Entity Created [Anyone]",
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
                      "modifier": "<a class=\"gModGreen\" id=\"1527327304\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0002_02</a>[<span class=\"descriptionNumberColor\">Infantry and Cavalry</span>]",
                      "valuePerStack": {
                        "ChallengePeakBattle_Plugins_0002_ADF_1": {
                          "operator": "Variables[0] (#ADF_1) || RETURN",
                          "displayLines": "#ADF_1",
                          "constants": [],
                          "variables": [
                            "#ADF_1"
                          ]
                        },
                        "ChallengePeakBattle_Plugins_0002_ADF_2": {
                          "operator": "Variables[0] (#ADF_2) || RETURN",
                          "displayLines": "#ADF_2",
                          "constants": [],
                          "variables": [
                            "#ADF_2"
                          ]
                        }
                      }
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
    "1912336050_ChallengePeakBattle_BaseAbility_Plugins_0001": {
      "fileName": "1912336050_ChallengePeakBattle_BaseAbility_Plugins_0001",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "_TeamLight_Num"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "_MDF_Layer"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2049883012\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0001</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-963813829\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0001_02</a>[<span class=\"descriptionNumberColor\">Think Outside the Box</span>]",
          "stackType": "Replace",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (ChallengePeakBattle_Plugins_0001_ADF_1) || RETURN",
                    "displayLines": "ChallengePeakBattle_Plugins_0001_ADF_1",
                    "constants": [],
                    "variables": [
                      "ChallengePeakBattle_Plugins_0001_ADF_1"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">ChallengePeakBattle_Plugins_0001_ADF_1</span>.",
          "type": "Other",
          "statusName": "Think Outside the Box"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2049883012\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0001</a>",
          "execute": [
            {
              "eventTrigger": "Entity Death [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Player Team"
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1330375513\">ChallengePeakBattle_BaseAbility_Plugins_0001_Template</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Player Team"
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1330375513\">ChallengePeakBattle_BaseAbility_Plugins_0001_Template</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Departed State: Begin [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Player Team"
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1330375513\">ChallengePeakBattle_BaseAbility_Plugins_0001_Template</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Departed State: End [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Player Team"
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1330375513\">ChallengePeakBattle_BaseAbility_Plugins_0001_Template</a>"
                    }
                  ]
                }
              ]
            }
          ],
          "modifierFunctions": [
            {
              "name": "CharacterFunctions",
              "functionName": "<a class=\"gTempYellow\" id=\"fun__-1330375513\">ChallengePeakBattle_BaseAbility_Plugins_0001_Template</a>",
              "parse": [
                {
                  "name": "Define Custom Variable with Team Count",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "variableName": "_TeamLight_Num",
                  "livingTargets": true,
                  "context": "ContextOwner"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_TeamLight_Num",
                    "compareType": "=",
                    "value2": 4
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-963813829\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0001_02</a>[<span class=\"descriptionNumberColor\">Think Outside the Box</span>]"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-963813829\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0001_02</a>[<span class=\"descriptionNumberColor\">Think Outside the Box</span>]",
                      "valuePerStack": {
                        "ChallengePeakBattle_Plugins_0001_ADF_1": {
                          "operator": "Variables[0] (#ADF_1) || RETURN",
                          "displayLines": "#ADF_1",
                          "constants": [],
                          "variables": [
                            "#ADF_1"
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "_TeamLight_Num",
            "_MDF_Layer"
          ]
        }
      ]
    },
    "1912336050_ChallengePeakBattle_ExtremeAbility_0013": {
      "fileName": "1912336050_ChallengePeakBattle_ExtremeAbility_0013",
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
          "modifier": "<a class=\"gModGreen\" id=\"1007273967\">Modifier_ChallengePeakBattle_ExtremeAbility_0013</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-926604631\">Modifier_ChallengePeakBattle_ExtremeAbility_0013_03</a>",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">EnergyRegenRate</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (ChallengePeakBattle_0013_ADF_2) || INVERT || RETURN",
                    "displayLines": "-ChallengePeakBattle_0013_ADF_2",
                    "constants": [],
                    "variables": [
                      "ChallengePeakBattle_0013_ADF_2"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-943382250\">Modifier_ChallengePeakBattle_ExtremeAbility_0013_02</a>[<span class=\"descriptionNumberColor\">Depowered++</span>]",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}.[[getMemosprite]]"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-943382250\">Modifier_ChallengePeakBattle_ExtremeAbility_0013_02</a>[<span class=\"descriptionNumberColor\">Depowered++</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-926604631\">Modifier_ChallengePeakBattle_ExtremeAbility_0013_03</a>"
                }
              ]
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-926604631\">Modifier_ChallengePeakBattle_ExtremeAbility_0013_03</a>"
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
                  "modifier": "<a class=\"gModGreen\" id=\"-926604631\">Modifier_ChallengePeakBattle_ExtremeAbility_0013_03</a>",
                  "duration": {
                    "operator": "Variables[0] (ChallengePeakBattle_0013_ADF_3) || RETURN",
                    "displayLines": "ChallengePeakBattle_0013_ADF_3",
                    "constants": [],
                    "variables": [
                      "ChallengePeakBattle_0013_ADF_3"
                    ]
                  },
                  "valuePerStack": {
                    "ChallengePeakBattle_0013_ADF_1": {
                      "operator": "Variables[0] (ChallengePeakBattle_0013_ADF_1) || RETURN",
                      "displayLines": "ChallengePeakBattle_0013_ADF_1",
                      "constants": [],
                      "variables": [
                        "ChallengePeakBattle_0013_ADF_1"
                      ]
                    },
                    "ChallengePeakBattle_0013_ADF_2": {
                      "operator": "Variables[0] (ChallengePeakBattle_0013_ADF_2) || RETURN",
                      "displayLines": "ChallengePeakBattle_0013_ADF_2",
                      "constants": [],
                      "variables": [
                        "ChallengePeakBattle_0013_ADF_2"
                      ]
                    },
                    "ChallengePeakBattle_0013_ADF_3": {
                      "operator": "Variables[0] (ChallengePeakBattle_0013_ADF_3) || RETURN",
                      "displayLines": "ChallengePeakBattle_0013_ADF_3",
                      "constants": [],
                      "variables": [
                        "ChallengePeakBattle_0013_ADF_3"
                      ]
                    }
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-926604631\">Modifier_ChallengePeakBattle_ExtremeAbility_0013_03</a>",
                  "valuePerStack": {
                    "ChallengePeakBattle_0013_ADF_1": {
                      "operator": "Variables[0] (ChallengePeakBattle_0013_ADF_1) || RETURN",
                      "displayLines": "ChallengePeakBattle_0013_ADF_1",
                      "constants": [],
                      "variables": [
                        "ChallengePeakBattle_0013_ADF_1"
                      ]
                    },
                    "ChallengePeakBattle_0013_ADF_2": {
                      "operator": "Variables[0] (ChallengePeakBattle_0013_ADF_2) || RETURN",
                      "displayLines": "ChallengePeakBattle_0013_ADF_2",
                      "constants": [],
                      "variables": [
                        "ChallengePeakBattle_0013_ADF_2"
                      ]
                    },
                    "ChallengePeakBattle_0013_ADF_3": {
                      "operator": "Variables[0] (ChallengePeakBattle_0013_ADF_3) || RETURN",
                      "displayLines": "ChallengePeakBattle_0013_ADF_3",
                      "constants": [],
                      "variables": [
                        "ChallengePeakBattle_0013_ADF_3"
                      ]
                    }
                  }
                }
              ]
            },
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Entity Type",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "type": "Memosprite"
                      },
                      {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}.[[getMemosprite]]"
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Modifier Values",
                      "valueType": "LifeTime",
                      "variableName": "MDF_LifeTime",
                      "multiplier": 1
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-943382250\">Modifier_ChallengePeakBattle_ExtremeAbility_0013_02</a>[<span class=\"descriptionNumberColor\">Depowered++</span>]",
                      "valuePerStack": {
                        "ChallengePeakBattle_0013_ADF_1": {
                          "operator": "Variables[0] (ChallengePeakBattle_0013_ADF_1) || RETURN",
                          "displayLines": "ChallengePeakBattle_0013_ADF_1",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0013_ADF_1"
                          ]
                        },
                        "ChallengePeakBattle_0013_ADF_2": {
                          "operator": "Variables[0] (ChallengePeakBattle_0013_ADF_2) || RETURN",
                          "displayLines": "ChallengePeakBattle_0013_ADF_2",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0013_ADF_2"
                          ]
                        },
                        "ChallengePeakBattle_0013_ADF_3": {
                          "operator": "Variables[0] (ChallengePeakBattle_0013_ADF_3) || RETURN",
                          "displayLines": "ChallengePeakBattle_0013_ADF_3",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0013_ADF_3"
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valuePercent": {
                    "operator": "Variables[0] (ChallengePeakBattle_0013_ADF_1) || INVERT || RETURN",
                    "displayLines": "-ChallengePeakBattle_0013_ADF_1",
                    "constants": [],
                    "variables": [
                      "ChallengePeakBattle_0013_ADF_1"
                    ]
                  },
                  "isFixed": "(Fixed)"
                }
              ],
              "priorityLevel": -90
            }
          ],
          "description": "Decreases Energy Regeneration Rate by <span class=\"descriptionNumberColor\">ChallengePeakBattle_0013_ADF_2</span> outside this unit's turn.",
          "type": "Other",
          "statusName": "Depowered++"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1007273967\">Modifier_ChallengePeakBattle_ExtremeAbility_0013</a>",
          "execute": [
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Entity Type",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "type": "Character"
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
                      "modifier": "<a class=\"gModGreen\" id=\"-943382250\">Modifier_ChallengePeakBattle_ExtremeAbility_0013_02</a>[<span class=\"descriptionNumberColor\">Depowered++</span>]",
                      "duration": {
                        "operator": "Variables[0] (#ADF_3) || RETURN",
                        "displayLines": "#ADF_3",
                        "constants": [],
                        "variables": [
                          "#ADF_3"
                        ]
                      },
                      "valuePerStack": {
                        "ChallengePeakBattle_0013_ADF_1": {
                          "operator": "Variables[0] (#ADF_1) || RETURN",
                          "displayLines": "#ADF_1",
                          "constants": [],
                          "variables": [
                            "#ADF_1"
                          ]
                        },
                        "ChallengePeakBattle_0013_ADF_2": {
                          "operator": "Variables[0] (#ADF_2) || RETURN",
                          "displayLines": "#ADF_2",
                          "constants": [],
                          "variables": [
                            "#ADF_2"
                          ]
                        },
                        "ChallengePeakBattle_0013_ADF_3": {
                          "operator": "Variables[0] (#ADF_3) || RETURN",
                          "displayLines": "#ADF_3",
                          "constants": [],
                          "variables": [
                            "#ADF_3"
                          ]
                        }
                      }
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
    "1912336050_ChallengePeakBattle_EnhancedAbility_0013": {
      "fileName": "1912336050_ChallengePeakBattle_EnhancedAbility_0013",
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
          "modifier": "<a class=\"gModGreen\" id=\"1699267029\">Modifier_ChallengePeakBattle_EnhancedAbility_0013</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-399931461\">Modifier_ChallengePeakBattle_EnhancedAbility_0013_03</a>",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">EnergyRegenRate</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (ChallengePeakBattle_0013_ADF_2) || INVERT || RETURN",
                    "displayLines": "-ChallengePeakBattle_0013_ADF_2",
                    "constants": [],
                    "variables": [
                      "ChallengePeakBattle_0013_ADF_2"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-416709080\">Modifier_ChallengePeakBattle_EnhancedAbility_0013_02</a>[<span class=\"descriptionNumberColor\">Depowered+</span>]",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}.[[getMemosprite]]"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-416709080\">Modifier_ChallengePeakBattle_EnhancedAbility_0013_02</a>[<span class=\"descriptionNumberColor\">Depowered+</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-399931461\">Modifier_ChallengePeakBattle_EnhancedAbility_0013_03</a>"
                }
              ]
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-399931461\">Modifier_ChallengePeakBattle_EnhancedAbility_0013_03</a>"
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
                  "modifier": "<a class=\"gModGreen\" id=\"-399931461\">Modifier_ChallengePeakBattle_EnhancedAbility_0013_03</a>",
                  "duration": {
                    "operator": "Variables[0] (ChallengePeakBattle_0013_ADF_3) || RETURN",
                    "displayLines": "ChallengePeakBattle_0013_ADF_3",
                    "constants": [],
                    "variables": [
                      "ChallengePeakBattle_0013_ADF_3"
                    ]
                  },
                  "valuePerStack": {
                    "ChallengePeakBattle_0013_ADF_1": {
                      "operator": "Variables[0] (ChallengePeakBattle_0013_ADF_1) || RETURN",
                      "displayLines": "ChallengePeakBattle_0013_ADF_1",
                      "constants": [],
                      "variables": [
                        "ChallengePeakBattle_0013_ADF_1"
                      ]
                    },
                    "ChallengePeakBattle_0013_ADF_2": {
                      "operator": "Variables[0] (ChallengePeakBattle_0013_ADF_2) || RETURN",
                      "displayLines": "ChallengePeakBattle_0013_ADF_2",
                      "constants": [],
                      "variables": [
                        "ChallengePeakBattle_0013_ADF_2"
                      ]
                    },
                    "ChallengePeakBattle_0013_ADF_3": {
                      "operator": "Variables[0] (ChallengePeakBattle_0013_ADF_3) || RETURN",
                      "displayLines": "ChallengePeakBattle_0013_ADF_3",
                      "constants": [],
                      "variables": [
                        "ChallengePeakBattle_0013_ADF_3"
                      ]
                    }
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-399931461\">Modifier_ChallengePeakBattle_EnhancedAbility_0013_03</a>",
                  "valuePerStack": {
                    "ChallengePeakBattle_0013_ADF_1": {
                      "operator": "Variables[0] (ChallengePeakBattle_0013_ADF_1) || RETURN",
                      "displayLines": "ChallengePeakBattle_0013_ADF_1",
                      "constants": [],
                      "variables": [
                        "ChallengePeakBattle_0013_ADF_1"
                      ]
                    },
                    "ChallengePeakBattle_0013_ADF_2": {
                      "operator": "Variables[0] (ChallengePeakBattle_0013_ADF_2) || RETURN",
                      "displayLines": "ChallengePeakBattle_0013_ADF_2",
                      "constants": [],
                      "variables": [
                        "ChallengePeakBattle_0013_ADF_2"
                      ]
                    },
                    "ChallengePeakBattle_0013_ADF_3": {
                      "operator": "Variables[0] (ChallengePeakBattle_0013_ADF_3) || RETURN",
                      "displayLines": "ChallengePeakBattle_0013_ADF_3",
                      "constants": [],
                      "variables": [
                        "ChallengePeakBattle_0013_ADF_3"
                      ]
                    }
                  }
                }
              ]
            },
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Entity Type",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "type": "Memosprite"
                      },
                      {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}.[[getMemosprite]]"
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Modifier Values",
                      "valueType": "LifeTime",
                      "variableName": "MDF_LifeTime",
                      "multiplier": 1
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-416709080\">Modifier_ChallengePeakBattle_EnhancedAbility_0013_02</a>[<span class=\"descriptionNumberColor\">Depowered+</span>]",
                      "valuePerStack": {
                        "ChallengePeakBattle_0013_ADF_1": {
                          "operator": "Variables[0] (ChallengePeakBattle_0013_ADF_1) || RETURN",
                          "displayLines": "ChallengePeakBattle_0013_ADF_1",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0013_ADF_1"
                          ]
                        },
                        "ChallengePeakBattle_0013_ADF_2": {
                          "operator": "Variables[0] (ChallengePeakBattle_0013_ADF_2) || RETURN",
                          "displayLines": "ChallengePeakBattle_0013_ADF_2",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0013_ADF_2"
                          ]
                        },
                        "ChallengePeakBattle_0013_ADF_3": {
                          "operator": "Variables[0] (ChallengePeakBattle_0013_ADF_3) || RETURN",
                          "displayLines": "ChallengePeakBattle_0013_ADF_3",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0013_ADF_3"
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valuePercent": {
                    "operator": "Variables[0] (ChallengePeakBattle_0013_ADF_1) || INVERT || RETURN",
                    "displayLines": "-ChallengePeakBattle_0013_ADF_1",
                    "constants": [],
                    "variables": [
                      "ChallengePeakBattle_0013_ADF_1"
                    ]
                  },
                  "isFixed": "(Fixed)"
                }
              ],
              "priorityLevel": -90
            }
          ],
          "description": "Decreases Energy Regeneration Rate by <span class=\"descriptionNumberColor\">ChallengePeakBattle_0013_ADF_2</span> outside this unit's turn.",
          "type": "Other",
          "statusName": "Depowered+"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1699267029\">Modifier_ChallengePeakBattle_EnhancedAbility_0013</a>",
          "execute": [
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Entity Type",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "type": "Character"
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
                      "modifier": "<a class=\"gModGreen\" id=\"-416709080\">Modifier_ChallengePeakBattle_EnhancedAbility_0013_02</a>[<span class=\"descriptionNumberColor\">Depowered+</span>]",
                      "duration": {
                        "operator": "Variables[0] (#ADF_3) || RETURN",
                        "displayLines": "#ADF_3",
                        "constants": [],
                        "variables": [
                          "#ADF_3"
                        ]
                      },
                      "valuePerStack": {
                        "ChallengePeakBattle_0013_ADF_1": {
                          "operator": "Variables[0] (#ADF_1) || RETURN",
                          "displayLines": "#ADF_1",
                          "constants": [],
                          "variables": [
                            "#ADF_1"
                          ]
                        },
                        "ChallengePeakBattle_0013_ADF_2": {
                          "operator": "Variables[0] (#ADF_2) || RETURN",
                          "displayLines": "#ADF_2",
                          "constants": [],
                          "variables": [
                            "#ADF_2"
                          ]
                        },
                        "ChallengePeakBattle_0013_ADF_3": {
                          "operator": "Variables[0] (#ADF_3) || RETURN",
                          "displayLines": "#ADF_3",
                          "constants": [],
                          "variables": [
                            "#ADF_3"
                          ]
                        }
                      }
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
    "1912336050_ChallengePeakBattle_BaseAbility_0013": {
      "fileName": "1912336050_ChallengePeakBattle_BaseAbility_0013",
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
          "modifier": "<a class=\"gModGreen\" id=\"-203800338\">Modifier_ChallengePeakBattle_BaseAbility_0013</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1710557010\">Modifier_ChallengePeakBattle_BaseAbility_0013_03</a>",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">EnergyRegenRate</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (ChallengePeakBattle_0013_ADF_2) || INVERT || RETURN",
                    "displayLines": "-ChallengePeakBattle_0013_ADF_2",
                    "constants": [],
                    "variables": [
                      "ChallengePeakBattle_0013_ADF_2"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1693779391\">Modifier_ChallengePeakBattle_BaseAbility_0013_02</a>[<span class=\"descriptionNumberColor\">Depowered</span>]",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}.[[getMemosprite]]"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1693779391\">Modifier_ChallengePeakBattle_BaseAbility_0013_02</a>[<span class=\"descriptionNumberColor\">Depowered</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1710557010\">Modifier_ChallengePeakBattle_BaseAbility_0013_03</a>"
                }
              ]
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1710557010\">Modifier_ChallengePeakBattle_BaseAbility_0013_03</a>"
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1710557010\">Modifier_ChallengePeakBattle_BaseAbility_0013_03</a>",
                  "duration": {
                    "operator": "Variables[0] (ChallengePeakBattle_0013_ADF_3) || RETURN",
                    "displayLines": "ChallengePeakBattle_0013_ADF_3",
                    "constants": [],
                    "variables": [
                      "ChallengePeakBattle_0013_ADF_3"
                    ]
                  },
                  "valuePerStack": {
                    "ChallengePeakBattle_0013_ADF_1": {
                      "operator": "Variables[0] (ChallengePeakBattle_0013_ADF_1) || RETURN",
                      "displayLines": "ChallengePeakBattle_0013_ADF_1",
                      "constants": [],
                      "variables": [
                        "ChallengePeakBattle_0013_ADF_1"
                      ]
                    },
                    "ChallengePeakBattle_0013_ADF_2": {
                      "operator": "Variables[0] (ChallengePeakBattle_0013_ADF_2) || RETURN",
                      "displayLines": "ChallengePeakBattle_0013_ADF_2",
                      "constants": [],
                      "variables": [
                        "ChallengePeakBattle_0013_ADF_2"
                      ]
                    },
                    "ChallengePeakBattle_0013_ADF_3": {
                      "operator": "Variables[0] (ChallengePeakBattle_0013_ADF_3) || RETURN",
                      "displayLines": "ChallengePeakBattle_0013_ADF_3",
                      "constants": [],
                      "variables": [
                        "ChallengePeakBattle_0013_ADF_3"
                      ]
                    }
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1710557010\">Modifier_ChallengePeakBattle_BaseAbility_0013_03</a>",
                  "valuePerStack": {
                    "ChallengePeakBattle_0013_ADF_1": {
                      "operator": "Variables[0] (ChallengePeakBattle_0013_ADF_1) || RETURN",
                      "displayLines": "ChallengePeakBattle_0013_ADF_1",
                      "constants": [],
                      "variables": [
                        "ChallengePeakBattle_0013_ADF_1"
                      ]
                    },
                    "ChallengePeakBattle_0013_ADF_2": {
                      "operator": "Variables[0] (ChallengePeakBattle_0013_ADF_2) || RETURN",
                      "displayLines": "ChallengePeakBattle_0013_ADF_2",
                      "constants": [],
                      "variables": [
                        "ChallengePeakBattle_0013_ADF_2"
                      ]
                    },
                    "ChallengePeakBattle_0013_ADF_3": {
                      "operator": "Variables[0] (ChallengePeakBattle_0013_ADF_3) || RETURN",
                      "displayLines": "ChallengePeakBattle_0013_ADF_3",
                      "constants": [],
                      "variables": [
                        "ChallengePeakBattle_0013_ADF_3"
                      ]
                    }
                  }
                }
              ]
            },
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Entity Type",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "type": "Memosprite"
                      },
                      {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}.[[getMemosprite]]"
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Modifier Values",
                      "valueType": "LifeTime",
                      "variableName": "MDF_LifeTime",
                      "multiplier": 1
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1693779391\">Modifier_ChallengePeakBattle_BaseAbility_0013_02</a>[<span class=\"descriptionNumberColor\">Depowered</span>]",
                      "valuePerStack": {
                        "ChallengePeakBattle_0013_ADF_1": {
                          "operator": "Variables[0] (ChallengePeakBattle_0013_ADF_1) || RETURN",
                          "displayLines": "ChallengePeakBattle_0013_ADF_1",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0013_ADF_1"
                          ]
                        },
                        "ChallengePeakBattle_0013_ADF_2": {
                          "operator": "Variables[0] (ChallengePeakBattle_0013_ADF_2) || RETURN",
                          "displayLines": "ChallengePeakBattle_0013_ADF_2",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0013_ADF_2"
                          ]
                        },
                        "ChallengePeakBattle_0013_ADF_3": {
                          "operator": "Variables[0] (ChallengePeakBattle_0013_ADF_3) || RETURN",
                          "displayLines": "ChallengePeakBattle_0013_ADF_3",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0013_ADF_3"
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valuePercent": {
                    "operator": "Variables[0] (ChallengePeakBattle_0013_ADF_1) || INVERT || RETURN",
                    "displayLines": "-ChallengePeakBattle_0013_ADF_1",
                    "constants": [],
                    "variables": [
                      "ChallengePeakBattle_0013_ADF_1"
                    ]
                  },
                  "isFixed": "(Fixed)"
                }
              ],
              "priorityLevel": -90
            }
          ],
          "description": "Decreases Energy Regeneration Rate by <span class=\"descriptionNumberColor\">ChallengePeakBattle_0013_ADF_2</span> outside this unit's turn.",
          "type": "Other",
          "statusName": "Depowered"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-203800338\">Modifier_ChallengePeakBattle_BaseAbility_0013</a>",
          "execute": [
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Entity Type",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "type": "Character"
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
                      "modifier": "<a class=\"gModGreen\" id=\"-1693779391\">Modifier_ChallengePeakBattle_BaseAbility_0013_02</a>[<span class=\"descriptionNumberColor\">Depowered</span>]",
                      "duration": {
                        "operator": "Variables[0] (#ADF_3) || RETURN",
                        "displayLines": "#ADF_3",
                        "constants": [],
                        "variables": [
                          "#ADF_3"
                        ]
                      },
                      "valuePerStack": {
                        "ChallengePeakBattle_0013_ADF_1": {
                          "operator": "Variables[0] (#ADF_1) || RETURN",
                          "displayLines": "#ADF_1",
                          "constants": [],
                          "variables": [
                            "#ADF_1"
                          ]
                        },
                        "ChallengePeakBattle_0013_ADF_2": {
                          "operator": "Variables[0] (#ADF_2) || RETURN",
                          "displayLines": "#ADF_2",
                          "constants": [],
                          "variables": [
                            "#ADF_2"
                          ]
                        },
                        "ChallengePeakBattle_0013_ADF_3": {
                          "operator": "Variables[0] (#ADF_3) || RETURN",
                          "displayLines": "#ADF_3",
                          "constants": [],
                          "variables": [
                            "#ADF_3"
                          ]
                        }
                      }
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
    "1912336050_ChallengePeakBattle_EnhancedAbility_0012": {
      "fileName": "1912336050_ChallengePeakBattle_EnhancedAbility_0012",
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
          "modifier": "<a class=\"gModGreen\" id=\"1682489410\">Modifier_ChallengePeakBattle_EnhancedAbility_0012</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1351261938\">Modifier_ChallengePeakBattle_EnhancedAbility_0012_03</a>[<span class=\"descriptionNumberColor\">Unending Refinement+</span>]",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Owner]: Hit",
              "execute": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageSUM</span>&nbsp;",
                      "value": "(-ChallengePeakBattle_0012_ADF_3 * MDF_Layer)"
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
                  "variableName": "MDF_Layer",
                  "multiplier": 1
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (ChallengePeakBattle_0012_ADF_1) || Variables[1] (MDF_Layer) || MUL || RETURN",
                    "displayLines": "(ChallengePeakBattle_0012_ADF_1 * MDF_Layer)",
                    "constants": [],
                    "variables": [
                      "ChallengePeakBattle_0012_ADF_1",
                      "MDF_Layer"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "Each stack reduces DMG received by <span class=\"descriptionNumberColor\">ChallengePeakBattle_0012_ADF_1</span> and CRIT DMG taken by <span class=\"descriptionNumberColor\">ChallengePeakBattle_0012_ADF_3</span>, stackable up to <span class=\"descriptionNumberColor\">ChallengePeakBattle_0012_ADF_2</span> time(s). Stacks are cleared at the start of turn or when entering the Weakness Break state.",
          "type": "Other",
          "statusName": "Unending Refinement+",
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1368039557\">Modifier_ChallengePeakBattle_EnhancedAbility_0012_02</a>",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1351261938\">Modifier_ChallengePeakBattle_EnhancedAbility_0012_03</a>[<span class=\"descriptionNumberColor\">Unending Refinement+</span>]"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1351261938\">Modifier_ChallengePeakBattle_EnhancedAbility_0012_03</a>[<span class=\"descriptionNumberColor\">Unending Refinement+</span>]",
                  "stackLimit": {
                    "operator": "Variables[0] (ChallengePeakBattle_0012_ADF_2) || RETURN",
                    "displayLines": "ChallengePeakBattle_0012_ADF_2",
                    "constants": [],
                    "variables": [
                      "ChallengePeakBattle_0012_ADF_2"
                    ]
                  },
                  "valuePerStack": {
                    "ChallengePeakBattle_0012_ADF_1": {
                      "operator": "Variables[0] (#ADF_1) || RETURN",
                      "displayLines": "#ADF_1",
                      "constants": [],
                      "variables": [
                        "#ADF_1"
                      ]
                    },
                    "ChallengePeakBattle_0012_ADF_2": {
                      "operator": "Variables[0] (#ADF_2) || RETURN",
                      "displayLines": "#ADF_2",
                      "constants": [],
                      "variables": [
                        "#ADF_2"
                      ]
                    },
                    "ChallengePeakBattle_0012_ADF_3": {
                      "operator": "Variables[0] (#ADF_3) || RETURN",
                      "displayLines": "#ADF_3",
                      "constants": [],
                      "variables": [
                        "#ADF_3"
                      ]
                    }
                  },
                  "addStacksPerTrigger": 0
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1351261938\">Modifier_ChallengePeakBattle_EnhancedAbility_0012_03</a>[<span class=\"descriptionNumberColor\">Unending Refinement+</span>]",
                  "stackLimit": {
                    "operator": "Variables[0] (ChallengePeakBattle_0012_ADF_2) || RETURN",
                    "displayLines": "ChallengePeakBattle_0012_ADF_2",
                    "constants": [],
                    "variables": [
                      "ChallengePeakBattle_0012_ADF_2"
                    ]
                  },
                  "valuePerStack": {
                    "ChallengePeakBattle_0012_ADF_1": {
                      "operator": "Variables[0] (#ADF_1) || RETURN",
                      "displayLines": "#ADF_1",
                      "constants": [],
                      "variables": [
                        "#ADF_1"
                      ]
                    },
                    "ChallengePeakBattle_0012_ADF_2": {
                      "operator": "Variables[0] (#ADF_2) || RETURN",
                      "displayLines": "#ADF_2",
                      "constants": [],
                      "variables": [
                        "#ADF_2"
                      ]
                    },
                    "ChallengePeakBattle_0012_ADF_3": {
                      "operator": "Variables[0] (#ADF_3) || RETURN",
                      "displayLines": "#ADF_3",
                      "constants": [],
                      "variables": [
                        "#ADF_3"
                      ]
                    }
                  },
                  "addStacksPerTrigger": 0
                }
              ]
            },
            {
              "eventTrigger": "Being Attacked Completed [Owner]",
              "execute": [
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
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1351261938\">Modifier_ChallengePeakBattle_EnhancedAbility_0012_03</a>[<span class=\"descriptionNumberColor\">Unending Refinement+</span>]",
                      "valuePerStack": {
                        "ChallengePeakBattle_0012_ADF_1": {
                          "operator": "Variables[0] (#ADF_1) || RETURN",
                          "displayLines": "#ADF_1",
                          "constants": [],
                          "variables": [
                            "#ADF_1"
                          ]
                        },
                        "ChallengePeakBattle_0012_ADF_2": {
                          "operator": "Variables[0] (#ADF_2) || RETURN",
                          "displayLines": "#ADF_2",
                          "constants": [],
                          "variables": [
                            "#ADF_2"
                          ]
                        },
                        "ChallengePeakBattle_0012_ADF_3": {
                          "operator": "Variables[0] (#ADF_3) || RETURN",
                          "displayLines": "#ADF_3",
                          "constants": [],
                          "variables": [
                            "#ADF_3"
                          ]
                        }
                      }
                    }
                  ]
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
                  "modifier": "<a class=\"gModGreen\" id=\"1351261938\">Modifier_ChallengePeakBattle_EnhancedAbility_0012_03</a>[<span class=\"descriptionNumberColor\">Unending Refinement+</span>]"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1351261938\">Modifier_ChallengePeakBattle_EnhancedAbility_0012_03</a>[<span class=\"descriptionNumberColor\">Unending Refinement+</span>]",
                  "stackLimit": {
                    "operator": "Variables[0] (ChallengePeakBattle_0012_ADF_2) || RETURN",
                    "displayLines": "ChallengePeakBattle_0012_ADF_2",
                    "constants": [],
                    "variables": [
                      "ChallengePeakBattle_0012_ADF_2"
                    ]
                  },
                  "valuePerStack": {
                    "ChallengePeakBattle_0012_ADF_1": {
                      "operator": "Variables[0] (#ADF_1) || RETURN",
                      "displayLines": "#ADF_1",
                      "constants": [],
                      "variables": [
                        "#ADF_1"
                      ]
                    },
                    "ChallengePeakBattle_0012_ADF_2": {
                      "operator": "Variables[0] (#ADF_2) || RETURN",
                      "displayLines": "#ADF_2",
                      "constants": [],
                      "variables": [
                        "#ADF_2"
                      ]
                    },
                    "ChallengePeakBattle_0012_ADF_3": {
                      "operator": "Variables[0] (#ADF_3) || RETURN",
                      "displayLines": "#ADF_3",
                      "constants": [],
                      "variables": [
                        "#ADF_3"
                      ]
                    }
                  },
                  "addStacksPerTrigger": 0
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1682489410\">Modifier_ChallengePeakBattle_EnhancedAbility_0012</a>",
          "execute": [
            {
              "eventTrigger": "Entity Created [Anyone]",
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
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1368039557\">Modifier_ChallengePeakBattle_EnhancedAbility_0012_02</a>",
                      "valuePerStack": {
                        "ChallengePeakBattle_0012_ADF_1": {
                          "operator": "Variables[0] (#ADF_1) || RETURN",
                          "displayLines": "#ADF_1",
                          "constants": [],
                          "variables": [
                            "#ADF_1"
                          ]
                        },
                        "ChallengePeakBattle_0012_ADF_2": {
                          "operator": "Variables[0] (#ADF_2) || RETURN",
                          "displayLines": "#ADF_2",
                          "constants": [],
                          "variables": [
                            "#ADF_2"
                          ]
                        },
                        "ChallengePeakBattle_0012_ADF_3": {
                          "operator": "Variables[0] (#ADF_3) || RETURN",
                          "displayLines": "#ADF_3",
                          "constants": [],
                          "variables": [
                            "#ADF_3"
                          ]
                        }
                      }
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
    "1912336050_ChallengePeakBattle_BaseAbility_0012": {
      "fileName": "1912336050_ChallengePeakBattle_BaseAbility_0012",
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
          "modifier": "<a class=\"gModGreen\" id=\"-187022719\">Modifier_ChallengePeakBattle_BaseAbility_0012</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-558919625\">Modifier_ChallengePeakBattle_BaseAbility_0012_03</a>[<span class=\"descriptionNumberColor\">Unending Refinement</span>]",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Owner]: Hit",
              "execute": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageSUM</span>&nbsp;",
                      "value": "(-ChallengePeakBattle_0012_ADF_3 * MDF_Layer)"
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
                  "variableName": "MDF_Layer",
                  "multiplier": 1
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (ChallengePeakBattle_0012_ADF_1) || Variables[1] (MDF_Layer) || MUL || RETURN",
                    "displayLines": "(ChallengePeakBattle_0012_ADF_1 * MDF_Layer)",
                    "constants": [],
                    "variables": [
                      "ChallengePeakBattle_0012_ADF_1",
                      "MDF_Layer"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "Each stack reduces DMG received by <span class=\"descriptionNumberColor\">ChallengePeakBattle_0012_ADF_1</span> and CRIT DMG taken by <span class=\"descriptionNumberColor\">ChallengePeakBattle_0012_ADF_3</span>, stackable up to <span class=\"descriptionNumberColor\">ChallengePeakBattle_0012_ADF_2</span> time(s). Stacks are cleared at the start of turn or when entering the Weakness Break state.",
          "type": "Other",
          "statusName": "Unending Refinement",
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-575697244\">Modifier_ChallengePeakBattle_BaseAbility_0012_02</a>",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-558919625\">Modifier_ChallengePeakBattle_BaseAbility_0012_03</a>[<span class=\"descriptionNumberColor\">Unending Refinement</span>]"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-558919625\">Modifier_ChallengePeakBattle_BaseAbility_0012_03</a>[<span class=\"descriptionNumberColor\">Unending Refinement</span>]",
                  "stackLimit": {
                    "operator": "Variables[0] (ChallengePeakBattle_0012_ADF_2) || RETURN",
                    "displayLines": "ChallengePeakBattle_0012_ADF_2",
                    "constants": [],
                    "variables": [
                      "ChallengePeakBattle_0012_ADF_2"
                    ]
                  },
                  "valuePerStack": {
                    "ChallengePeakBattle_0012_ADF_1": {
                      "operator": "Variables[0] (#ADF_1) || RETURN",
                      "displayLines": "#ADF_1",
                      "constants": [],
                      "variables": [
                        "#ADF_1"
                      ]
                    },
                    "ChallengePeakBattle_0012_ADF_2": {
                      "operator": "Variables[0] (#ADF_2) || RETURN",
                      "displayLines": "#ADF_2",
                      "constants": [],
                      "variables": [
                        "#ADF_2"
                      ]
                    },
                    "ChallengePeakBattle_0012_ADF_3": {
                      "operator": "Variables[0] (#ADF_3) || RETURN",
                      "displayLines": "#ADF_3",
                      "constants": [],
                      "variables": [
                        "#ADF_3"
                      ]
                    }
                  },
                  "addStacksPerTrigger": 0
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-558919625\">Modifier_ChallengePeakBattle_BaseAbility_0012_03</a>[<span class=\"descriptionNumberColor\">Unending Refinement</span>]",
                  "stackLimit": {
                    "operator": "Variables[0] (ChallengePeakBattle_0012_ADF_2) || RETURN",
                    "displayLines": "ChallengePeakBattle_0012_ADF_2",
                    "constants": [],
                    "variables": [
                      "ChallengePeakBattle_0012_ADF_2"
                    ]
                  },
                  "valuePerStack": {
                    "ChallengePeakBattle_0012_ADF_1": {
                      "operator": "Variables[0] (#ADF_1) || RETURN",
                      "displayLines": "#ADF_1",
                      "constants": [],
                      "variables": [
                        "#ADF_1"
                      ]
                    },
                    "ChallengePeakBattle_0012_ADF_2": {
                      "operator": "Variables[0] (#ADF_2) || RETURN",
                      "displayLines": "#ADF_2",
                      "constants": [],
                      "variables": [
                        "#ADF_2"
                      ]
                    },
                    "ChallengePeakBattle_0012_ADF_3": {
                      "operator": "Variables[0] (#ADF_3) || RETURN",
                      "displayLines": "#ADF_3",
                      "constants": [],
                      "variables": [
                        "#ADF_3"
                      ]
                    }
                  },
                  "addStacksPerTrigger": 0
                }
              ]
            },
            {
              "eventTrigger": "Being Attacked Completed [Owner]",
              "execute": [
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
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-558919625\">Modifier_ChallengePeakBattle_BaseAbility_0012_03</a>[<span class=\"descriptionNumberColor\">Unending Refinement</span>]",
                      "valuePerStack": {
                        "ChallengePeakBattle_0012_ADF_1": {
                          "operator": "Variables[0] (#ADF_1) || RETURN",
                          "displayLines": "#ADF_1",
                          "constants": [],
                          "variables": [
                            "#ADF_1"
                          ]
                        },
                        "ChallengePeakBattle_0012_ADF_2": {
                          "operator": "Variables[0] (#ADF_2) || RETURN",
                          "displayLines": "#ADF_2",
                          "constants": [],
                          "variables": [
                            "#ADF_2"
                          ]
                        },
                        "ChallengePeakBattle_0012_ADF_3": {
                          "operator": "Variables[0] (#ADF_3) || RETURN",
                          "displayLines": "#ADF_3",
                          "constants": [],
                          "variables": [
                            "#ADF_3"
                          ]
                        }
                      }
                    }
                  ]
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
                  "modifier": "<a class=\"gModGreen\" id=\"-558919625\">Modifier_ChallengePeakBattle_BaseAbility_0012_03</a>[<span class=\"descriptionNumberColor\">Unending Refinement</span>]"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-558919625\">Modifier_ChallengePeakBattle_BaseAbility_0012_03</a>[<span class=\"descriptionNumberColor\">Unending Refinement</span>]",
                  "stackLimit": {
                    "operator": "Variables[0] (ChallengePeakBattle_0012_ADF_2) || RETURN",
                    "displayLines": "ChallengePeakBattle_0012_ADF_2",
                    "constants": [],
                    "variables": [
                      "ChallengePeakBattle_0012_ADF_2"
                    ]
                  },
                  "valuePerStack": {
                    "ChallengePeakBattle_0012_ADF_1": {
                      "operator": "Variables[0] (#ADF_1) || RETURN",
                      "displayLines": "#ADF_1",
                      "constants": [],
                      "variables": [
                        "#ADF_1"
                      ]
                    },
                    "ChallengePeakBattle_0012_ADF_2": {
                      "operator": "Variables[0] (#ADF_2) || RETURN",
                      "displayLines": "#ADF_2",
                      "constants": [],
                      "variables": [
                        "#ADF_2"
                      ]
                    },
                    "ChallengePeakBattle_0012_ADF_3": {
                      "operator": "Variables[0] (#ADF_3) || RETURN",
                      "displayLines": "#ADF_3",
                      "constants": [],
                      "variables": [
                        "#ADF_3"
                      ]
                    }
                  },
                  "addStacksPerTrigger": 0
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-187022719\">Modifier_ChallengePeakBattle_BaseAbility_0012</a>",
          "execute": [
            {
              "eventTrigger": "Entity Created [Anyone]",
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
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-575697244\">Modifier_ChallengePeakBattle_BaseAbility_0012_02</a>",
                      "valuePerStack": {
                        "ChallengePeakBattle_0012_ADF_1": {
                          "operator": "Variables[0] (#ADF_1) || RETURN",
                          "displayLines": "#ADF_1",
                          "constants": [],
                          "variables": [
                            "#ADF_1"
                          ]
                        },
                        "ChallengePeakBattle_0012_ADF_2": {
                          "operator": "Variables[0] (#ADF_2) || RETURN",
                          "displayLines": "#ADF_2",
                          "constants": [],
                          "variables": [
                            "#ADF_2"
                          ]
                        },
                        "ChallengePeakBattle_0012_ADF_3": {
                          "operator": "Variables[0] (#ADF_3) || RETURN",
                          "displayLines": "#ADF_3",
                          "constants": [],
                          "variables": [
                            "#ADF_3"
                          ]
                        }
                      }
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
    "1912336050_ChallengePeakBattle_EnhancedAbility_0011": {
      "fileName": "1912336050_ChallengePeakBattle_EnhancedAbility_0011",
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
          "modifier": "<a class=\"gModGreen\" id=\"1665711791\">Modifier_ChallengePeakBattle_EnhancedAbility_0011</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-241610538\">Modifier_ChallengePeakBattle_EnhancedAbility_0011_02</a>",
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Owner]: Hit",
              "execute": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateSUM</span>&nbsp;",
                      "value": "-ChallengePeakBattle_0011_ADF_1"
                    }
                  ]
                },
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageSUM</span>&nbsp;",
                      "value": "-ChallengePeakBattle_0011_ADF_2"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1665711791\">Modifier_ChallengePeakBattle_EnhancedAbility_0011</a>",
          "execute": [
            {
              "eventTrigger": "Entity Created [Anyone]",
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
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-241610538\">Modifier_ChallengePeakBattle_EnhancedAbility_0011_02</a>",
                      "valuePerStack": {
                        "ChallengePeakBattle_0011_ADF_1": {
                          "operator": "Variables[0] (#ADF_1) || RETURN",
                          "displayLines": "#ADF_1",
                          "constants": [],
                          "variables": [
                            "#ADF_1"
                          ]
                        },
                        "ChallengePeakBattle_0011_ADF_2": {
                          "operator": "Variables[0] (#ADF_2) || RETURN",
                          "displayLines": "#ADF_2",
                          "constants": [],
                          "variables": [
                            "#ADF_2"
                          ]
                        }
                      }
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
    "1912336050_ChallengePeakBattle_BaseAbility_0011": {
      "fileName": "1912336050_ChallengePeakBattle_BaseAbility_0011",
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
          "modifier": "<a class=\"gModGreen\" id=\"-237355576\">Modifier_ChallengePeakBattle_BaseAbility_0011</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1228128919\">Modifier_ChallengePeakBattle_BaseAbility_0011_02</a>",
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Owner]: Hit",
              "execute": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateSUM</span>&nbsp;",
                      "value": "-ChallengePeakBattle_0011_ADF_1"
                    }
                  ]
                },
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageSUM</span>&nbsp;",
                      "value": "-ChallengePeakBattle_0011_ADF_2"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-237355576\">Modifier_ChallengePeakBattle_BaseAbility_0011</a>",
          "execute": [
            {
              "eventTrigger": "Entity Created [Anyone]",
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
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1228128919\">Modifier_ChallengePeakBattle_BaseAbility_0011_02</a>",
                      "valuePerStack": {
                        "ChallengePeakBattle_0011_ADF_1": {
                          "operator": "Variables[0] (#ADF_1) || RETURN",
                          "displayLines": "#ADF_1",
                          "constants": [],
                          "variables": [
                            "#ADF_1"
                          ]
                        },
                        "ChallengePeakBattle_0011_ADF_2": {
                          "operator": "Variables[0] (#ADF_2) || RETURN",
                          "displayLines": "#ADF_2",
                          "constants": [],
                          "variables": [
                            "#ADF_2"
                          ]
                        }
                      }
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
    "1912336050_ChallengePeakBattle_BaseAbility_0010": {
      "fileName": "1912336050_ChallengePeakBattle_BaseAbility_0010",
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
          "modifier": "<a class=\"gModGreen\" id=\"-220577957\">Modifier_ChallengePeakBattle_BaseAbility_0010</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1607072781\">Modifier_ChallengePeakBattle_BaseAbility_0010_Debuff5</a>",
          "stackType": "Replace",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_6) || INVERT || RETURN",
                    "displayLines": "-ChallengePeakBattle_0010_ADF_6",
                    "constants": [],
                    "variables": [
                      "ChallengePeakBattle_0010_ADF_6"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1590295162\">Modifier_ChallengePeakBattle_BaseAbility_0010_Debuff4</a>",
          "stackType": "Replace",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreak</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_5) || INVERT || RETURN",
                    "displayLines": "-ChallengePeakBattle_0010_ADF_5",
                    "constants": [],
                    "variables": [
                      "ChallengePeakBattle_0010_ADF_5"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1506407067\">Modifier_ChallengePeakBattle_BaseAbility_0010_Debuff3</a>",
          "stackType": "Replace",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateBase</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_4) || INVERT || RETURN",
                    "displayLines": "-ChallengePeakBattle_0010_ADF_4",
                    "constants": [],
                    "variables": [
                      "ChallengePeakBattle_0010_ADF_4"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1489629448\">Modifier_ChallengePeakBattle_BaseAbility_0010_Debuff2</a>",
          "stackType": "Replace",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">HP%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_3) || INVERT || RETURN",
                    "displayLines": "-ChallengePeakBattle_0010_ADF_3",
                    "constants": [],
                    "variables": [
                      "ChallengePeakBattle_0010_ADF_3"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1539962305\">Modifier_ChallengePeakBattle_BaseAbility_0010_Debuff1</a>",
          "stackType": "Replace",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_2) || INVERT || RETURN",
                    "displayLines": "-ChallengePeakBattle_0010_ADF_2",
                    "constants": [],
                    "variables": [
                      "ChallengePeakBattle_0010_ADF_2"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1208937842\">Modifier_ChallengePeakBattle_BaseAbility_0010_02</a>",
          "execute": [
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Entity Type",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "type": "Memosprite"
                      },
                      {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}.[[getMemosprite]]"
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1539962305\">Modifier_ChallengePeakBattle_BaseAbility_0010_Debuff1</a>"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1539962305\">Modifier_ChallengePeakBattle_BaseAbility_0010_Debuff1</a>",
                          "duration": {
                            "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_1) || RETURN",
                            "displayLines": "ChallengePeakBattle_0010_ADF_1",
                            "constants": [],
                            "variables": [
                              "ChallengePeakBattle_0010_ADF_1"
                            ]
                          },
                          "valuePerStack": {
                            "ChallengePeakBattle_0010_ADF_1": {
                              "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_1) || RETURN",
                              "displayLines": "ChallengePeakBattle_0010_ADF_1",
                              "constants": [],
                              "variables": [
                                "ChallengePeakBattle_0010_ADF_1"
                              ]
                            },
                            "ChallengePeakBattle_0010_ADF_2": {
                              "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_2) || RETURN",
                              "displayLines": "ChallengePeakBattle_0010_ADF_2",
                              "constants": [],
                              "variables": [
                                "ChallengePeakBattle_0010_ADF_2"
                              ]
                            },
                            "ChallengePeakBattle_0010_ADF_3": {
                              "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_3) || RETURN",
                              "displayLines": "ChallengePeakBattle_0010_ADF_3",
                              "constants": [],
                              "variables": [
                                "ChallengePeakBattle_0010_ADF_3"
                              ]
                            },
                            "ChallengePeakBattle_0010_ADF_4": {
                              "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_4) || RETURN",
                              "displayLines": "ChallengePeakBattle_0010_ADF_4",
                              "constants": [],
                              "variables": [
                                "ChallengePeakBattle_0010_ADF_4"
                              ]
                            },
                            "ChallengePeakBattle_0010_ADF_5": {
                              "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_5) || RETURN",
                              "displayLines": "ChallengePeakBattle_0010_ADF_5",
                              "constants": [],
                              "variables": [
                                "ChallengePeakBattle_0010_ADF_5"
                              ]
                            },
                            "ChallengePeakBattle_0010_ADF_6": {
                              "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_6) || RETURN",
                              "displayLines": "ChallengePeakBattle_0010_ADF_6",
                              "constants": [],
                              "variables": [
                                "ChallengePeakBattle_0010_ADF_6"
                              ]
                            }
                          }
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
                        "modifier": "<a class=\"gModGreen\" id=\"1489629448\">Modifier_ChallengePeakBattle_BaseAbility_0010_Debuff2</a>"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1489629448\">Modifier_ChallengePeakBattle_BaseAbility_0010_Debuff2</a>",
                          "duration": {
                            "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_1) || RETURN",
                            "displayLines": "ChallengePeakBattle_0010_ADF_1",
                            "constants": [],
                            "variables": [
                              "ChallengePeakBattle_0010_ADF_1"
                            ]
                          },
                          "valuePerStack": {
                            "ChallengePeakBattle_0010_ADF_1": {
                              "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_1) || RETURN",
                              "displayLines": "ChallengePeakBattle_0010_ADF_1",
                              "constants": [],
                              "variables": [
                                "ChallengePeakBattle_0010_ADF_1"
                              ]
                            },
                            "ChallengePeakBattle_0010_ADF_2": {
                              "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_2) || RETURN",
                              "displayLines": "ChallengePeakBattle_0010_ADF_2",
                              "constants": [],
                              "variables": [
                                "ChallengePeakBattle_0010_ADF_2"
                              ]
                            },
                            "ChallengePeakBattle_0010_ADF_3": {
                              "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_3) || RETURN",
                              "displayLines": "ChallengePeakBattle_0010_ADF_3",
                              "constants": [],
                              "variables": [
                                "ChallengePeakBattle_0010_ADF_3"
                              ]
                            },
                            "ChallengePeakBattle_0010_ADF_4": {
                              "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_4) || RETURN",
                              "displayLines": "ChallengePeakBattle_0010_ADF_4",
                              "constants": [],
                              "variables": [
                                "ChallengePeakBattle_0010_ADF_4"
                              ]
                            },
                            "ChallengePeakBattle_0010_ADF_5": {
                              "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_5) || RETURN",
                              "displayLines": "ChallengePeakBattle_0010_ADF_5",
                              "constants": [],
                              "variables": [
                                "ChallengePeakBattle_0010_ADF_5"
                              ]
                            },
                            "ChallengePeakBattle_0010_ADF_6": {
                              "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_6) || RETURN",
                              "displayLines": "ChallengePeakBattle_0010_ADF_6",
                              "constants": [],
                              "variables": [
                                "ChallengePeakBattle_0010_ADF_6"
                              ]
                            }
                          }
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
                        "modifier": "<a class=\"gModGreen\" id=\"1506407067\">Modifier_ChallengePeakBattle_BaseAbility_0010_Debuff3</a>"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1506407067\">Modifier_ChallengePeakBattle_BaseAbility_0010_Debuff3</a>",
                          "duration": {
                            "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_1) || RETURN",
                            "displayLines": "ChallengePeakBattle_0010_ADF_1",
                            "constants": [],
                            "variables": [
                              "ChallengePeakBattle_0010_ADF_1"
                            ]
                          },
                          "valuePerStack": {
                            "ChallengePeakBattle_0010_ADF_1": {
                              "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_1) || RETURN",
                              "displayLines": "ChallengePeakBattle_0010_ADF_1",
                              "constants": [],
                              "variables": [
                                "ChallengePeakBattle_0010_ADF_1"
                              ]
                            },
                            "ChallengePeakBattle_0010_ADF_2": {
                              "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_2) || RETURN",
                              "displayLines": "ChallengePeakBattle_0010_ADF_2",
                              "constants": [],
                              "variables": [
                                "ChallengePeakBattle_0010_ADF_2"
                              ]
                            },
                            "ChallengePeakBattle_0010_ADF_3": {
                              "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_3) || RETURN",
                              "displayLines": "ChallengePeakBattle_0010_ADF_3",
                              "constants": [],
                              "variables": [
                                "ChallengePeakBattle_0010_ADF_3"
                              ]
                            },
                            "ChallengePeakBattle_0010_ADF_4": {
                              "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_4) || RETURN",
                              "displayLines": "ChallengePeakBattle_0010_ADF_4",
                              "constants": [],
                              "variables": [
                                "ChallengePeakBattle_0010_ADF_4"
                              ]
                            },
                            "ChallengePeakBattle_0010_ADF_5": {
                              "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_5) || RETURN",
                              "displayLines": "ChallengePeakBattle_0010_ADF_5",
                              "constants": [],
                              "variables": [
                                "ChallengePeakBattle_0010_ADF_5"
                              ]
                            },
                            "ChallengePeakBattle_0010_ADF_6": {
                              "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_6) || RETURN",
                              "displayLines": "ChallengePeakBattle_0010_ADF_6",
                              "constants": [],
                              "variables": [
                                "ChallengePeakBattle_0010_ADF_6"
                              ]
                            }
                          }
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
                        "modifier": "<a class=\"gModGreen\" id=\"1590295162\">Modifier_ChallengePeakBattle_BaseAbility_0010_Debuff4</a>"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1590295162\">Modifier_ChallengePeakBattle_BaseAbility_0010_Debuff4</a>",
                          "duration": {
                            "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_1) || RETURN",
                            "displayLines": "ChallengePeakBattle_0010_ADF_1",
                            "constants": [],
                            "variables": [
                              "ChallengePeakBattle_0010_ADF_1"
                            ]
                          },
                          "valuePerStack": {
                            "ChallengePeakBattle_0010_ADF_1": {
                              "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_1) || RETURN",
                              "displayLines": "ChallengePeakBattle_0010_ADF_1",
                              "constants": [],
                              "variables": [
                                "ChallengePeakBattle_0010_ADF_1"
                              ]
                            },
                            "ChallengePeakBattle_0010_ADF_2": {
                              "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_2) || RETURN",
                              "displayLines": "ChallengePeakBattle_0010_ADF_2",
                              "constants": [],
                              "variables": [
                                "ChallengePeakBattle_0010_ADF_2"
                              ]
                            },
                            "ChallengePeakBattle_0010_ADF_3": {
                              "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_3) || RETURN",
                              "displayLines": "ChallengePeakBattle_0010_ADF_3",
                              "constants": [],
                              "variables": [
                                "ChallengePeakBattle_0010_ADF_3"
                              ]
                            },
                            "ChallengePeakBattle_0010_ADF_4": {
                              "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_4) || RETURN",
                              "displayLines": "ChallengePeakBattle_0010_ADF_4",
                              "constants": [],
                              "variables": [
                                "ChallengePeakBattle_0010_ADF_4"
                              ]
                            },
                            "ChallengePeakBattle_0010_ADF_5": {
                              "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_5) || RETURN",
                              "displayLines": "ChallengePeakBattle_0010_ADF_5",
                              "constants": [],
                              "variables": [
                                "ChallengePeakBattle_0010_ADF_5"
                              ]
                            },
                            "ChallengePeakBattle_0010_ADF_6": {
                              "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_6) || RETURN",
                              "displayLines": "ChallengePeakBattle_0010_ADF_6",
                              "constants": [],
                              "variables": [
                                "ChallengePeakBattle_0010_ADF_6"
                              ]
                            }
                          }
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
                        "modifier": "<a class=\"gModGreen\" id=\"1607072781\">Modifier_ChallengePeakBattle_BaseAbility_0010_Debuff5</a>"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1607072781\">Modifier_ChallengePeakBattle_BaseAbility_0010_Debuff5</a>",
                          "duration": {
                            "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_1) || RETURN",
                            "displayLines": "ChallengePeakBattle_0010_ADF_1",
                            "constants": [],
                            "variables": [
                              "ChallengePeakBattle_0010_ADF_1"
                            ]
                          },
                          "valuePerStack": {
                            "ChallengePeakBattle_0010_ADF_1": {
                              "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_1) || RETURN",
                              "displayLines": "ChallengePeakBattle_0010_ADF_1",
                              "constants": [],
                              "variables": [
                                "ChallengePeakBattle_0010_ADF_1"
                              ]
                            },
                            "ChallengePeakBattle_0010_ADF_2": {
                              "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_2) || RETURN",
                              "displayLines": "ChallengePeakBattle_0010_ADF_2",
                              "constants": [],
                              "variables": [
                                "ChallengePeakBattle_0010_ADF_2"
                              ]
                            },
                            "ChallengePeakBattle_0010_ADF_3": {
                              "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_3) || RETURN",
                              "displayLines": "ChallengePeakBattle_0010_ADF_3",
                              "constants": [],
                              "variables": [
                                "ChallengePeakBattle_0010_ADF_3"
                              ]
                            },
                            "ChallengePeakBattle_0010_ADF_4": {
                              "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_4) || RETURN",
                              "displayLines": "ChallengePeakBattle_0010_ADF_4",
                              "constants": [],
                              "variables": [
                                "ChallengePeakBattle_0010_ADF_4"
                              ]
                            },
                            "ChallengePeakBattle_0010_ADF_5": {
                              "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_5) || RETURN",
                              "displayLines": "ChallengePeakBattle_0010_ADF_5",
                              "constants": [],
                              "variables": [
                                "ChallengePeakBattle_0010_ADF_5"
                              ]
                            },
                            "ChallengePeakBattle_0010_ADF_6": {
                              "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_6) || RETURN",
                              "displayLines": "ChallengePeakBattle_0010_ADF_6",
                              "constants": [],
                              "variables": [
                                "ChallengePeakBattle_0010_ADF_6"
                              ]
                            }
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1539962305\">Modifier_ChallengePeakBattle_BaseAbility_0010_Debuff1</a>"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_Debuff1_Odds",
                      "value": 0
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_Debuff1_Odds",
                      "value": 1
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
                    "modifier": "<a class=\"gModGreen\" id=\"1489629448\">Modifier_ChallengePeakBattle_BaseAbility_0010_Debuff2</a>"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_Debuff2_Odds",
                      "value": 0
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_Debuff2_Odds",
                      "value": 1
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
                    "modifier": "<a class=\"gModGreen\" id=\"1506407067\">Modifier_ChallengePeakBattle_BaseAbility_0010_Debuff3</a>"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_Debuff3_Odds",
                      "value": 0
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_Debuff3_Odds",
                      "value": 1
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
                    "modifier": "<a class=\"gModGreen\" id=\"1590295162\">Modifier_ChallengePeakBattle_BaseAbility_0010_Debuff4</a>"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_Debuff4_Odds",
                      "value": 0
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_Debuff4_Odds",
                      "value": 1
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
                    "modifier": "<a class=\"gModGreen\" id=\"1607072781\">Modifier_ChallengePeakBattle_BaseAbility_0010_Debuff5</a>"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_Debuff5_Odds",
                      "value": 0
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_Debuff5_Odds",
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
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1539962305\">Modifier_ChallengePeakBattle_BaseAbility_0010_Debuff1</a>"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1489629448\">Modifier_ChallengePeakBattle_BaseAbility_0010_Debuff2</a>"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1506407067\">Modifier_ChallengePeakBattle_BaseAbility_0010_Debuff3</a>"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1590295162\">Modifier_ChallengePeakBattle_BaseAbility_0010_Debuff4</a>"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1607072781\">Modifier_ChallengePeakBattle_BaseAbility_0010_Debuff5</a>"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_Debuff1_Odds",
                      "value": 1
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_Debuff2_Odds",
                      "value": 1
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_Debuff3_Odds",
                      "value": 1
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_Debuff4_Odds",
                      "value": 1
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_Debuff5_Odds",
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
                        "name": "Is Entity Type",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "type": "Memosprite"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Random Event",
                      "odds": [
                        {
                          "operator": "Variables[0] (MDF_Debuff1_Odds) || RETURN",
                          "displayLines": "MDF_Debuff1_Odds",
                          "constants": [],
                          "variables": [
                            "MDF_Debuff1_Odds"
                          ]
                        },
                        {
                          "operator": "Variables[0] (MDF_Debuff2_Odds) || RETURN",
                          "displayLines": "MDF_Debuff2_Odds",
                          "constants": [],
                          "variables": [
                            "MDF_Debuff2_Odds"
                          ]
                        },
                        {
                          "operator": "Variables[0] (MDF_Debuff3_Odds) || RETURN",
                          "displayLines": "MDF_Debuff3_Odds",
                          "constants": [],
                          "variables": [
                            "MDF_Debuff3_Odds"
                          ]
                        },
                        {
                          "operator": "Variables[0] (MDF_Debuff4_Odds) || RETURN",
                          "displayLines": "MDF_Debuff4_Odds",
                          "constants": [],
                          "variables": [
                            "MDF_Debuff4_Odds"
                          ]
                        },
                        {
                          "operator": "Variables[0] (MDF_Debuff5_Odds) || RETURN",
                          "displayLines": "MDF_Debuff5_Odds",
                          "constants": [],
                          "variables": [
                            "MDF_Debuff5_Odds"
                          ]
                        }
                      ],
                      "execute": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}} + {{Modifier Holder}}.[[getSummoner]]"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1539962305\">Modifier_ChallengePeakBattle_BaseAbility_0010_Debuff1</a>",
                          "duration": {
                            "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_1) || RETURN",
                            "displayLines": "ChallengePeakBattle_0010_ADF_1",
                            "constants": [],
                            "variables": [
                              "ChallengePeakBattle_0010_ADF_1"
                            ]
                          },
                          "valuePerStack": {
                            "ChallengePeakBattle_0010_ADF_1": {
                              "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_1) || RETURN",
                              "displayLines": "ChallengePeakBattle_0010_ADF_1",
                              "constants": [],
                              "variables": [
                                "ChallengePeakBattle_0010_ADF_1"
                              ]
                            },
                            "ChallengePeakBattle_0010_ADF_2": {
                              "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_2) || RETURN",
                              "displayLines": "ChallengePeakBattle_0010_ADF_2",
                              "constants": [],
                              "variables": [
                                "ChallengePeakBattle_0010_ADF_2"
                              ]
                            },
                            "ChallengePeakBattle_0010_ADF_3": {
                              "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_3) || RETURN",
                              "displayLines": "ChallengePeakBattle_0010_ADF_3",
                              "constants": [],
                              "variables": [
                                "ChallengePeakBattle_0010_ADF_3"
                              ]
                            },
                            "ChallengePeakBattle_0010_ADF_4": {
                              "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_4) || RETURN",
                              "displayLines": "ChallengePeakBattle_0010_ADF_4",
                              "constants": [],
                              "variables": [
                                "ChallengePeakBattle_0010_ADF_4"
                              ]
                            },
                            "ChallengePeakBattle_0010_ADF_5": {
                              "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_5) || RETURN",
                              "displayLines": "ChallengePeakBattle_0010_ADF_5",
                              "constants": [],
                              "variables": [
                                "ChallengePeakBattle_0010_ADF_5"
                              ]
                            },
                            "ChallengePeakBattle_0010_ADF_6": {
                              "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_6) || RETURN",
                              "displayLines": "ChallengePeakBattle_0010_ADF_6",
                              "constants": [],
                              "variables": [
                                "ChallengePeakBattle_0010_ADF_6"
                              ]
                            }
                          }
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}} + {{Modifier Holder}}.[[getSummoner]]"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1489629448\">Modifier_ChallengePeakBattle_BaseAbility_0010_Debuff2</a>",
                          "duration": {
                            "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_1) || RETURN",
                            "displayLines": "ChallengePeakBattle_0010_ADF_1",
                            "constants": [],
                            "variables": [
                              "ChallengePeakBattle_0010_ADF_1"
                            ]
                          },
                          "valuePerStack": {
                            "ChallengePeakBattle_0010_ADF_1": {
                              "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_1) || RETURN",
                              "displayLines": "ChallengePeakBattle_0010_ADF_1",
                              "constants": [],
                              "variables": [
                                "ChallengePeakBattle_0010_ADF_1"
                              ]
                            },
                            "ChallengePeakBattle_0010_ADF_2": {
                              "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_2) || RETURN",
                              "displayLines": "ChallengePeakBattle_0010_ADF_2",
                              "constants": [],
                              "variables": [
                                "ChallengePeakBattle_0010_ADF_2"
                              ]
                            },
                            "ChallengePeakBattle_0010_ADF_3": {
                              "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_3) || RETURN",
                              "displayLines": "ChallengePeakBattle_0010_ADF_3",
                              "constants": [],
                              "variables": [
                                "ChallengePeakBattle_0010_ADF_3"
                              ]
                            },
                            "ChallengePeakBattle_0010_ADF_4": {
                              "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_4) || RETURN",
                              "displayLines": "ChallengePeakBattle_0010_ADF_4",
                              "constants": [],
                              "variables": [
                                "ChallengePeakBattle_0010_ADF_4"
                              ]
                            },
                            "ChallengePeakBattle_0010_ADF_5": {
                              "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_5) || RETURN",
                              "displayLines": "ChallengePeakBattle_0010_ADF_5",
                              "constants": [],
                              "variables": [
                                "ChallengePeakBattle_0010_ADF_5"
                              ]
                            },
                            "ChallengePeakBattle_0010_ADF_6": {
                              "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_6) || RETURN",
                              "displayLines": "ChallengePeakBattle_0010_ADF_6",
                              "constants": [],
                              "variables": [
                                "ChallengePeakBattle_0010_ADF_6"
                              ]
                            }
                          }
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}} + {{Modifier Holder}}.[[getSummoner]]"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1506407067\">Modifier_ChallengePeakBattle_BaseAbility_0010_Debuff3</a>",
                          "duration": {
                            "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_1) || RETURN",
                            "displayLines": "ChallengePeakBattle_0010_ADF_1",
                            "constants": [],
                            "variables": [
                              "ChallengePeakBattle_0010_ADF_1"
                            ]
                          },
                          "valuePerStack": {
                            "ChallengePeakBattle_0010_ADF_1": {
                              "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_1) || RETURN",
                              "displayLines": "ChallengePeakBattle_0010_ADF_1",
                              "constants": [],
                              "variables": [
                                "ChallengePeakBattle_0010_ADF_1"
                              ]
                            },
                            "ChallengePeakBattle_0010_ADF_2": {
                              "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_2) || RETURN",
                              "displayLines": "ChallengePeakBattle_0010_ADF_2",
                              "constants": [],
                              "variables": [
                                "ChallengePeakBattle_0010_ADF_2"
                              ]
                            },
                            "ChallengePeakBattle_0010_ADF_3": {
                              "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_3) || RETURN",
                              "displayLines": "ChallengePeakBattle_0010_ADF_3",
                              "constants": [],
                              "variables": [
                                "ChallengePeakBattle_0010_ADF_3"
                              ]
                            },
                            "ChallengePeakBattle_0010_ADF_4": {
                              "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_4) || RETURN",
                              "displayLines": "ChallengePeakBattle_0010_ADF_4",
                              "constants": [],
                              "variables": [
                                "ChallengePeakBattle_0010_ADF_4"
                              ]
                            },
                            "ChallengePeakBattle_0010_ADF_5": {
                              "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_5) || RETURN",
                              "displayLines": "ChallengePeakBattle_0010_ADF_5",
                              "constants": [],
                              "variables": [
                                "ChallengePeakBattle_0010_ADF_5"
                              ]
                            },
                            "ChallengePeakBattle_0010_ADF_6": {
                              "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_6) || RETURN",
                              "displayLines": "ChallengePeakBattle_0010_ADF_6",
                              "constants": [],
                              "variables": [
                                "ChallengePeakBattle_0010_ADF_6"
                              ]
                            }
                          }
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}} + {{Modifier Holder}}.[[getSummoner]]"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1590295162\">Modifier_ChallengePeakBattle_BaseAbility_0010_Debuff4</a>",
                          "duration": {
                            "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_1) || RETURN",
                            "displayLines": "ChallengePeakBattle_0010_ADF_1",
                            "constants": [],
                            "variables": [
                              "ChallengePeakBattle_0010_ADF_1"
                            ]
                          },
                          "valuePerStack": {
                            "ChallengePeakBattle_0010_ADF_1": {
                              "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_1) || RETURN",
                              "displayLines": "ChallengePeakBattle_0010_ADF_1",
                              "constants": [],
                              "variables": [
                                "ChallengePeakBattle_0010_ADF_1"
                              ]
                            },
                            "ChallengePeakBattle_0010_ADF_2": {
                              "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_2) || RETURN",
                              "displayLines": "ChallengePeakBattle_0010_ADF_2",
                              "constants": [],
                              "variables": [
                                "ChallengePeakBattle_0010_ADF_2"
                              ]
                            },
                            "ChallengePeakBattle_0010_ADF_3": {
                              "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_3) || RETURN",
                              "displayLines": "ChallengePeakBattle_0010_ADF_3",
                              "constants": [],
                              "variables": [
                                "ChallengePeakBattle_0010_ADF_3"
                              ]
                            },
                            "ChallengePeakBattle_0010_ADF_4": {
                              "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_4) || RETURN",
                              "displayLines": "ChallengePeakBattle_0010_ADF_4",
                              "constants": [],
                              "variables": [
                                "ChallengePeakBattle_0010_ADF_4"
                              ]
                            },
                            "ChallengePeakBattle_0010_ADF_5": {
                              "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_5) || RETURN",
                              "displayLines": "ChallengePeakBattle_0010_ADF_5",
                              "constants": [],
                              "variables": [
                                "ChallengePeakBattle_0010_ADF_5"
                              ]
                            },
                            "ChallengePeakBattle_0010_ADF_6": {
                              "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_6) || RETURN",
                              "displayLines": "ChallengePeakBattle_0010_ADF_6",
                              "constants": [],
                              "variables": [
                                "ChallengePeakBattle_0010_ADF_6"
                              ]
                            }
                          }
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}} + {{Modifier Holder}}.[[getSummoner]]"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1607072781\">Modifier_ChallengePeakBattle_BaseAbility_0010_Debuff5</a>",
                          "duration": {
                            "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_1) || RETURN",
                            "displayLines": "ChallengePeakBattle_0010_ADF_1",
                            "constants": [],
                            "variables": [
                              "ChallengePeakBattle_0010_ADF_1"
                            ]
                          },
                          "valuePerStack": {
                            "ChallengePeakBattle_0010_ADF_1": {
                              "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_1) || RETURN",
                              "displayLines": "ChallengePeakBattle_0010_ADF_1",
                              "constants": [],
                              "variables": [
                                "ChallengePeakBattle_0010_ADF_1"
                              ]
                            },
                            "ChallengePeakBattle_0010_ADF_2": {
                              "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_2) || RETURN",
                              "displayLines": "ChallengePeakBattle_0010_ADF_2",
                              "constants": [],
                              "variables": [
                                "ChallengePeakBattle_0010_ADF_2"
                              ]
                            },
                            "ChallengePeakBattle_0010_ADF_3": {
                              "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_3) || RETURN",
                              "displayLines": "ChallengePeakBattle_0010_ADF_3",
                              "constants": [],
                              "variables": [
                                "ChallengePeakBattle_0010_ADF_3"
                              ]
                            },
                            "ChallengePeakBattle_0010_ADF_4": {
                              "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_4) || RETURN",
                              "displayLines": "ChallengePeakBattle_0010_ADF_4",
                              "constants": [],
                              "variables": [
                                "ChallengePeakBattle_0010_ADF_4"
                              ]
                            },
                            "ChallengePeakBattle_0010_ADF_5": {
                              "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_5) || RETURN",
                              "displayLines": "ChallengePeakBattle_0010_ADF_5",
                              "constants": [],
                              "variables": [
                                "ChallengePeakBattle_0010_ADF_5"
                              ]
                            },
                            "ChallengePeakBattle_0010_ADF_6": {
                              "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_6) || RETURN",
                              "displayLines": "ChallengePeakBattle_0010_ADF_6",
                              "constants": [],
                              "variables": [
                                "ChallengePeakBattle_0010_ADF_6"
                              ]
                            }
                          }
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Random Event",
                      "odds": [
                        {
                          "operator": "Variables[0] (MDF_Debuff1_Odds) || RETURN",
                          "displayLines": "MDF_Debuff1_Odds",
                          "constants": [],
                          "variables": [
                            "MDF_Debuff1_Odds"
                          ]
                        },
                        {
                          "operator": "Variables[0] (MDF_Debuff2_Odds) || RETURN",
                          "displayLines": "MDF_Debuff2_Odds",
                          "constants": [],
                          "variables": [
                            "MDF_Debuff2_Odds"
                          ]
                        },
                        {
                          "operator": "Variables[0] (MDF_Debuff3_Odds) || RETURN",
                          "displayLines": "MDF_Debuff3_Odds",
                          "constants": [],
                          "variables": [
                            "MDF_Debuff3_Odds"
                          ]
                        },
                        {
                          "operator": "Variables[0] (MDF_Debuff4_Odds) || RETURN",
                          "displayLines": "MDF_Debuff4_Odds",
                          "constants": [],
                          "variables": [
                            "MDF_Debuff4_Odds"
                          ]
                        },
                        {
                          "operator": "Variables[0] (MDF_Debuff5_Odds) || RETURN",
                          "displayLines": "MDF_Debuff5_Odds",
                          "constants": [],
                          "variables": [
                            "MDF_Debuff5_Odds"
                          ]
                        }
                      ],
                      "execute": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1539962305\">Modifier_ChallengePeakBattle_BaseAbility_0010_Debuff1</a>",
                          "duration": {
                            "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_1) || RETURN",
                            "displayLines": "ChallengePeakBattle_0010_ADF_1",
                            "constants": [],
                            "variables": [
                              "ChallengePeakBattle_0010_ADF_1"
                            ]
                          },
                          "valuePerStack": {
                            "ChallengePeakBattle_0010_ADF_1": {
                              "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_1) || RETURN",
                              "displayLines": "ChallengePeakBattle_0010_ADF_1",
                              "constants": [],
                              "variables": [
                                "ChallengePeakBattle_0010_ADF_1"
                              ]
                            },
                            "ChallengePeakBattle_0010_ADF_2": {
                              "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_2) || RETURN",
                              "displayLines": "ChallengePeakBattle_0010_ADF_2",
                              "constants": [],
                              "variables": [
                                "ChallengePeakBattle_0010_ADF_2"
                              ]
                            },
                            "ChallengePeakBattle_0010_ADF_3": {
                              "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_3) || RETURN",
                              "displayLines": "ChallengePeakBattle_0010_ADF_3",
                              "constants": [],
                              "variables": [
                                "ChallengePeakBattle_0010_ADF_3"
                              ]
                            },
                            "ChallengePeakBattle_0010_ADF_4": {
                              "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_4) || RETURN",
                              "displayLines": "ChallengePeakBattle_0010_ADF_4",
                              "constants": [],
                              "variables": [
                                "ChallengePeakBattle_0010_ADF_4"
                              ]
                            },
                            "ChallengePeakBattle_0010_ADF_5": {
                              "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_5) || RETURN",
                              "displayLines": "ChallengePeakBattle_0010_ADF_5",
                              "constants": [],
                              "variables": [
                                "ChallengePeakBattle_0010_ADF_5"
                              ]
                            },
                            "ChallengePeakBattle_0010_ADF_6": {
                              "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_6) || RETURN",
                              "displayLines": "ChallengePeakBattle_0010_ADF_6",
                              "constants": [],
                              "variables": [
                                "ChallengePeakBattle_0010_ADF_6"
                              ]
                            }
                          }
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1489629448\">Modifier_ChallengePeakBattle_BaseAbility_0010_Debuff2</a>",
                          "duration": {
                            "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_1) || RETURN",
                            "displayLines": "ChallengePeakBattle_0010_ADF_1",
                            "constants": [],
                            "variables": [
                              "ChallengePeakBattle_0010_ADF_1"
                            ]
                          },
                          "valuePerStack": {
                            "ChallengePeakBattle_0010_ADF_1": {
                              "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_1) || RETURN",
                              "displayLines": "ChallengePeakBattle_0010_ADF_1",
                              "constants": [],
                              "variables": [
                                "ChallengePeakBattle_0010_ADF_1"
                              ]
                            },
                            "ChallengePeakBattle_0010_ADF_2": {
                              "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_2) || RETURN",
                              "displayLines": "ChallengePeakBattle_0010_ADF_2",
                              "constants": [],
                              "variables": [
                                "ChallengePeakBattle_0010_ADF_2"
                              ]
                            },
                            "ChallengePeakBattle_0010_ADF_3": {
                              "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_3) || RETURN",
                              "displayLines": "ChallengePeakBattle_0010_ADF_3",
                              "constants": [],
                              "variables": [
                                "ChallengePeakBattle_0010_ADF_3"
                              ]
                            },
                            "ChallengePeakBattle_0010_ADF_4": {
                              "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_4) || RETURN",
                              "displayLines": "ChallengePeakBattle_0010_ADF_4",
                              "constants": [],
                              "variables": [
                                "ChallengePeakBattle_0010_ADF_4"
                              ]
                            },
                            "ChallengePeakBattle_0010_ADF_5": {
                              "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_5) || RETURN",
                              "displayLines": "ChallengePeakBattle_0010_ADF_5",
                              "constants": [],
                              "variables": [
                                "ChallengePeakBattle_0010_ADF_5"
                              ]
                            },
                            "ChallengePeakBattle_0010_ADF_6": {
                              "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_6) || RETURN",
                              "displayLines": "ChallengePeakBattle_0010_ADF_6",
                              "constants": [],
                              "variables": [
                                "ChallengePeakBattle_0010_ADF_6"
                              ]
                            }
                          }
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1506407067\">Modifier_ChallengePeakBattle_BaseAbility_0010_Debuff3</a>",
                          "duration": {
                            "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_1) || RETURN",
                            "displayLines": "ChallengePeakBattle_0010_ADF_1",
                            "constants": [],
                            "variables": [
                              "ChallengePeakBattle_0010_ADF_1"
                            ]
                          },
                          "valuePerStack": {
                            "ChallengePeakBattle_0010_ADF_1": {
                              "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_1) || RETURN",
                              "displayLines": "ChallengePeakBattle_0010_ADF_1",
                              "constants": [],
                              "variables": [
                                "ChallengePeakBattle_0010_ADF_1"
                              ]
                            },
                            "ChallengePeakBattle_0010_ADF_2": {
                              "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_2) || RETURN",
                              "displayLines": "ChallengePeakBattle_0010_ADF_2",
                              "constants": [],
                              "variables": [
                                "ChallengePeakBattle_0010_ADF_2"
                              ]
                            },
                            "ChallengePeakBattle_0010_ADF_3": {
                              "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_3) || RETURN",
                              "displayLines": "ChallengePeakBattle_0010_ADF_3",
                              "constants": [],
                              "variables": [
                                "ChallengePeakBattle_0010_ADF_3"
                              ]
                            },
                            "ChallengePeakBattle_0010_ADF_4": {
                              "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_4) || RETURN",
                              "displayLines": "ChallengePeakBattle_0010_ADF_4",
                              "constants": [],
                              "variables": [
                                "ChallengePeakBattle_0010_ADF_4"
                              ]
                            },
                            "ChallengePeakBattle_0010_ADF_5": {
                              "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_5) || RETURN",
                              "displayLines": "ChallengePeakBattle_0010_ADF_5",
                              "constants": [],
                              "variables": [
                                "ChallengePeakBattle_0010_ADF_5"
                              ]
                            },
                            "ChallengePeakBattle_0010_ADF_6": {
                              "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_6) || RETURN",
                              "displayLines": "ChallengePeakBattle_0010_ADF_6",
                              "constants": [],
                              "variables": [
                                "ChallengePeakBattle_0010_ADF_6"
                              ]
                            }
                          }
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1590295162\">Modifier_ChallengePeakBattle_BaseAbility_0010_Debuff4</a>",
                          "duration": {
                            "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_1) || RETURN",
                            "displayLines": "ChallengePeakBattle_0010_ADF_1",
                            "constants": [],
                            "variables": [
                              "ChallengePeakBattle_0010_ADF_1"
                            ]
                          },
                          "valuePerStack": {
                            "ChallengePeakBattle_0010_ADF_1": {
                              "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_1) || RETURN",
                              "displayLines": "ChallengePeakBattle_0010_ADF_1",
                              "constants": [],
                              "variables": [
                                "ChallengePeakBattle_0010_ADF_1"
                              ]
                            },
                            "ChallengePeakBattle_0010_ADF_2": {
                              "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_2) || RETURN",
                              "displayLines": "ChallengePeakBattle_0010_ADF_2",
                              "constants": [],
                              "variables": [
                                "ChallengePeakBattle_0010_ADF_2"
                              ]
                            },
                            "ChallengePeakBattle_0010_ADF_3": {
                              "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_3) || RETURN",
                              "displayLines": "ChallengePeakBattle_0010_ADF_3",
                              "constants": [],
                              "variables": [
                                "ChallengePeakBattle_0010_ADF_3"
                              ]
                            },
                            "ChallengePeakBattle_0010_ADF_4": {
                              "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_4) || RETURN",
                              "displayLines": "ChallengePeakBattle_0010_ADF_4",
                              "constants": [],
                              "variables": [
                                "ChallengePeakBattle_0010_ADF_4"
                              ]
                            },
                            "ChallengePeakBattle_0010_ADF_5": {
                              "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_5) || RETURN",
                              "displayLines": "ChallengePeakBattle_0010_ADF_5",
                              "constants": [],
                              "variables": [
                                "ChallengePeakBattle_0010_ADF_5"
                              ]
                            },
                            "ChallengePeakBattle_0010_ADF_6": {
                              "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_6) || RETURN",
                              "displayLines": "ChallengePeakBattle_0010_ADF_6",
                              "constants": [],
                              "variables": [
                                "ChallengePeakBattle_0010_ADF_6"
                              ]
                            }
                          }
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1607072781\">Modifier_ChallengePeakBattle_BaseAbility_0010_Debuff5</a>",
                          "duration": {
                            "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_1) || RETURN",
                            "displayLines": "ChallengePeakBattle_0010_ADF_1",
                            "constants": [],
                            "variables": [
                              "ChallengePeakBattle_0010_ADF_1"
                            ]
                          },
                          "valuePerStack": {
                            "ChallengePeakBattle_0010_ADF_1": {
                              "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_1) || RETURN",
                              "displayLines": "ChallengePeakBattle_0010_ADF_1",
                              "constants": [],
                              "variables": [
                                "ChallengePeakBattle_0010_ADF_1"
                              ]
                            },
                            "ChallengePeakBattle_0010_ADF_2": {
                              "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_2) || RETURN",
                              "displayLines": "ChallengePeakBattle_0010_ADF_2",
                              "constants": [],
                              "variables": [
                                "ChallengePeakBattle_0010_ADF_2"
                              ]
                            },
                            "ChallengePeakBattle_0010_ADF_3": {
                              "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_3) || RETURN",
                              "displayLines": "ChallengePeakBattle_0010_ADF_3",
                              "constants": [],
                              "variables": [
                                "ChallengePeakBattle_0010_ADF_3"
                              ]
                            },
                            "ChallengePeakBattle_0010_ADF_4": {
                              "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_4) || RETURN",
                              "displayLines": "ChallengePeakBattle_0010_ADF_4",
                              "constants": [],
                              "variables": [
                                "ChallengePeakBattle_0010_ADF_4"
                              ]
                            },
                            "ChallengePeakBattle_0010_ADF_5": {
                              "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_5) || RETURN",
                              "displayLines": "ChallengePeakBattle_0010_ADF_5",
                              "constants": [],
                              "variables": [
                                "ChallengePeakBattle_0010_ADF_5"
                              ]
                            },
                            "ChallengePeakBattle_0010_ADF_6": {
                              "operator": "Variables[0] (ChallengePeakBattle_0010_ADF_6) || RETURN",
                              "displayLines": "ChallengePeakBattle_0010_ADF_6",
                              "constants": [],
                              "variables": [
                                "ChallengePeakBattle_0010_ADF_6"
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
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-220577957\">Modifier_ChallengePeakBattle_BaseAbility_0010</a>",
          "execute": [
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Player Team"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1208937842\">Modifier_ChallengePeakBattle_BaseAbility_0010_02</a>",
                      "valuePerStack": {
                        "ChallengePeakBattle_0010_ADF_1": {
                          "operator": "Variables[0] (#ADF_1) || RETURN",
                          "displayLines": "#ADF_1",
                          "constants": [],
                          "variables": [
                            "#ADF_1"
                          ]
                        },
                        "ChallengePeakBattle_0010_ADF_2": {
                          "operator": "Variables[0] (#ADF_2) || RETURN",
                          "displayLines": "#ADF_2",
                          "constants": [],
                          "variables": [
                            "#ADF_2"
                          ]
                        },
                        "ChallengePeakBattle_0010_ADF_3": {
                          "operator": "Variables[0] (#ADF_3) || RETURN",
                          "displayLines": "#ADF_3",
                          "constants": [],
                          "variables": [
                            "#ADF_3"
                          ]
                        },
                        "ChallengePeakBattle_0010_ADF_4": {
                          "operator": "Variables[0] (#ADF_4) || RETURN",
                          "displayLines": "#ADF_4",
                          "constants": [],
                          "variables": [
                            "#ADF_4"
                          ]
                        },
                        "ChallengePeakBattle_0010_ADF_5": {
                          "operator": "Variables[0] (#ADF_5) || RETURN",
                          "displayLines": "#ADF_5",
                          "constants": [],
                          "variables": [
                            "#ADF_5"
                          ]
                        },
                        "ChallengePeakBattle_0010_ADF_6": {
                          "operator": "Variables[0] (#ADF_6) || RETURN",
                          "displayLines": "#ADF_6",
                          "constants": [],
                          "variables": [
                            "#ADF_6"
                          ]
                        }
                      }
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
    "1912336050_ChallengePeakBattle_ExtremeAbility_0009": {
      "fileName": "1912336050_ChallengePeakBattle_ExtremeAbility_0009",
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
          "modifier": "<a class=\"gModGreen\" id=\"973865824\">Modifier_ChallengePeakBattle_ExtremeAbility_0009</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__574373263\">Modifier_ChallengePeakBattle_ExtremeAbility_0009_02</a>[<span class=\"descriptionNumberColor\">Interference++</span>]",
          "execute": [
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Attack Targets of Modifier Holder}}"
                  },
                  "ifTargetFound": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Random Chance",
                        "chance": 0.5
                      },
                      "passed": [
                        {
                          "name": "Action Advance/Delay",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "advanceType": "Set",
                          "multiAdd": "ChallengePeakBattle_0009_ADF_1"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Action Advance/Delay",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "advanceType": "Set",
                          "multiAdd": "ChallengePeakBattle_0009_ADF_2"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "description": "After using an attack, randomly inflicts <span class=\"descriptionNumberColor\">ChallengePeakBattle_0009_ADF_1</span> or <span class=\"descriptionNumberColor\">ChallengePeakBattle_0009_ADF_2</span> action delay on the target.",
          "type": "Other",
          "statusName": "Interference++"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__973865824\">Modifier_ChallengePeakBattle_ExtremeAbility_0009</a>",
          "execute": [
            {
              "eventTrigger": "Entity Created [Anyone]",
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
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"574373263\">Modifier_ChallengePeakBattle_ExtremeAbility_0009_02</a>[<span class=\"descriptionNumberColor\">Interference++</span>]",
                      "valuePerStack": {
                        "ChallengePeakBattle_0009_ADF_1": {
                          "operator": "Variables[0] (#ADF_1) || RETURN",
                          "displayLines": "#ADF_1",
                          "constants": [],
                          "variables": [
                            "#ADF_1"
                          ]
                        },
                        "ChallengePeakBattle_0009_ADF_2": {
                          "operator": "Variables[0] (#ADF_2) || RETURN",
                          "displayLines": "#ADF_2",
                          "constants": [],
                          "variables": [
                            "#ADF_2"
                          ]
                        }
                      }
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
    "1912336050_ChallengePeakBattle_EnhancedAbility_0009": {
      "fileName": "1912336050_ChallengePeakBattle_EnhancedAbility_0009",
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
          "modifier": "<a class=\"gModGreen\" id=\"1867190314\">Modifier_ChallengePeakBattle_EnhancedAbility_0009</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__141969773\">Modifier_ChallengePeakBattle_EnhancedAbility_0009_02</a>[<span class=\"descriptionNumberColor\">Interference+</span>]",
          "execute": [
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Attack Targets of Modifier Holder}}"
                  },
                  "ifTargetFound": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Random Chance",
                        "chance": 0.5
                      },
                      "passed": [
                        {
                          "name": "Action Advance/Delay",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "advanceType": "Set",
                          "multiAdd": "ChallengePeakBattle_0009_ADF_1"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Action Advance/Delay",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "advanceType": "Set",
                          "multiAdd": "ChallengePeakBattle_0009_ADF_2"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "description": "After using an attack, randomly inflicts <span class=\"descriptionNumberColor\">ChallengePeakBattle_0009_ADF_1</span> or <span class=\"descriptionNumberColor\">ChallengePeakBattle_0009_ADF_2</span> action delay on the target.",
          "type": "Other",
          "statusName": "Interference+"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1867190314\">Modifier_ChallengePeakBattle_EnhancedAbility_0009</a>",
          "execute": [
            {
              "eventTrigger": "Entity Created [Anyone]",
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
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"141969773\">Modifier_ChallengePeakBattle_EnhancedAbility_0009_02</a>[<span class=\"descriptionNumberColor\">Interference+</span>]",
                      "valuePerStack": {
                        "ChallengePeakBattle_0009_ADF_1": {
                          "operator": "Variables[0] (#ADF_1) || RETURN",
                          "displayLines": "#ADF_1",
                          "constants": [],
                          "variables": [
                            "#ADF_1"
                          ]
                        },
                        "ChallengePeakBattle_0009_ADF_2": {
                          "operator": "Variables[0] (#ADF_2) || RETURN",
                          "displayLines": "#ADF_2",
                          "constants": [],
                          "variables": [
                            "#ADF_2"
                          ]
                        }
                      }
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
    "1912336050_ChallengePeakBattle_BaseAbility_0009": {
      "fileName": "1912336050_ChallengePeakBattle_BaseAbility_0009",
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
          "modifier": "<a class=\"gModGreen\" id=\"-170392195\">Modifier_ChallengePeakBattle_BaseAbility_0009</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__954434320\">Modifier_ChallengePeakBattle_BaseAbility_0009_02</a>[<span class=\"descriptionNumberColor\">Interference</span>]",
          "execute": [
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Attack Targets of Modifier Holder}}"
                  },
                  "ifTargetFound": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Random Chance",
                        "chance": 0.5
                      },
                      "passed": [
                        {
                          "name": "Action Advance/Delay",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "advanceType": "Set",
                          "multiAdd": "ChallengePeakBattle_0009_ADF_1"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Action Advance/Delay",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "advanceType": "Set",
                          "multiAdd": "ChallengePeakBattle_0009_ADF_2"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "description": "After using an attack, randomly inflicts <span class=\"descriptionNumberColor\">ChallengePeakBattle_0009_ADF_1</span> or <span class=\"descriptionNumberColor\">ChallengePeakBattle_0009_ADF_2</span> action delay on the target.",
          "type": "Other",
          "statusName": "Interference"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-170392195\">Modifier_ChallengePeakBattle_BaseAbility_0009</a>",
          "execute": [
            {
              "eventTrigger": "Entity Created [Anyone]",
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
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"954434320\">Modifier_ChallengePeakBattle_BaseAbility_0009_02</a>[<span class=\"descriptionNumberColor\">Interference</span>]",
                      "valuePerStack": {
                        "ChallengePeakBattle_0009_ADF_1": {
                          "operator": "Variables[0] (#ADF_1) || RETURN",
                          "displayLines": "#ADF_1",
                          "constants": [],
                          "variables": [
                            "#ADF_1"
                          ]
                        },
                        "ChallengePeakBattle_0009_ADF_2": {
                          "operator": "Variables[0] (#ADF_2) || RETURN",
                          "displayLines": "#ADF_2",
                          "constants": [],
                          "variables": [
                            "#ADF_2"
                          ]
                        }
                      }
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
    "1912336050_ChallengePeakBattle_EnhancedAbility_0008": {
      "fileName": "1912336050_ChallengePeakBattle_EnhancedAbility_0008",
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
          "modifier": "<a class=\"gModGreen\" id=\"1883967933\">Modifier_ChallengePeakBattle_EnhancedAbility_0008</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2147319581\">Modifier_ChallengePeakBattle_EnhancedAbility_0008_03</a>[<span class=\"descriptionNumberColor\">Taunting+</span>]",
          "stackType": "Replace",
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
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_Layer",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (ChallengePeakBattle_0008_ADF_1) || RETURN",
                      "displayLines": "ChallengePeakBattle_0008_ADF_1",
                      "constants": [],
                      "variables": [
                        "ChallengePeakBattle_0008_ADF_1"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Action Advance/Delay",
                      "advanceType": "Set",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "set": 0
                    }
                  ]
                }
              ]
            }
          ],
          "description": "Gain 1 stack when attacked. When stacks reach <span class=\"descriptionNumberColor\">ChallengePeakBattle_0008_ADF_1</span>, take action immediately. Stack count resets at the start of turn.",
          "type": "Other",
          "statusName": "Taunting+",
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-427871213\">Modifier_ChallengePeakBattle_EnhancedAbility_0008_02_PreShow</a>",
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "target": {
              "name": "Target Name",
              "target": "{{Player's Aim Target List}}"
            },
            "skillType": [
              "Basic ATK",
              "Skill",
              "Ultimate",
              "Memosprite"
            ],
            "conditions": {
              "name": "AND",
              "conditionList": [
                {
                  "name": "Compare: Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "value1": "<a class=\"gModGreen\" id=\"-2147319581\">Modifier_ChallengePeakBattle_EnhancedAbility_0008_03</a>[<span class=\"descriptionNumberColor\">Taunting+</span>]",
                  "compareType": ">=",
                  "value2": {
                    "operator": "Variables[0] (ChallengePeakBattle_0008_ADF_1) || Constants[0] (1) || SUB || RETURN",
                    "displayLines": "(ChallengePeakBattle_0008_ADF_1 - 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "ChallengePeakBattle_0008_ADF_1"
                    ]
                  },
                  "valueType": "Layer"
                },
                {
                  "name": "Skill Effect",
                  "skillType": [
                    "SingleAttack",
                    "AoEAttack",
                    "Bounce",
                    "Blast"
                  ],
                  "activeSkill": true
                }
              ]
            },
            "delayAdvancePreview": {
              "name": "Delay/Advance Preview",
              "previewValue": "0(Set AV)"
            }
          }
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2130870096\">Modifier_ChallengePeakBattle_EnhancedAbility_0008_02</a>",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-2147319581\">Modifier_ChallengePeakBattle_EnhancedAbility_0008_03</a>[<span class=\"descriptionNumberColor\">Taunting+</span>]"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-2147319581\">Modifier_ChallengePeakBattle_EnhancedAbility_0008_03</a>[<span class=\"descriptionNumberColor\">Taunting+</span>]",
                  "valuePerStack": {
                    "ChallengePeakBattle_0008_ADF_1": {
                      "operator": "Variables[0] (#ADF_1) || RETURN",
                      "displayLines": "#ADF_1",
                      "constants": [],
                      "variables": [
                        "#ADF_1"
                      ]
                    }
                  },
                  "addStacksPerTrigger": 0
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-2147319581\">Modifier_ChallengePeakBattle_EnhancedAbility_0008_03</a>[<span class=\"descriptionNumberColor\">Taunting+</span>]",
                  "valuePerStack": {
                    "ChallengePeakBattle_0008_ADF_1": {
                      "operator": "Variables[0] (#ADF_1) || RETURN",
                      "displayLines": "#ADF_1",
                      "constants": [],
                      "variables": [
                        "#ADF_1"
                      ]
                    }
                  },
                  "addStacksPerTrigger": 0
                }
              ]
            },
            {
              "eventTrigger": "Being Attacked End [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-2147319581\">Modifier_ChallengePeakBattle_EnhancedAbility_0008_03</a>[<span class=\"descriptionNumberColor\">Taunting+</span>]",
                  "valuePerStack": {
                    "ChallengePeakBattle_0008_ADF_1": {
                      "operator": "Variables[0] (#ADF_1) || RETURN",
                      "displayLines": "#ADF_1",
                      "constants": [],
                      "variables": [
                        "#ADF_1"
                      ]
                    }
                  }
                }
              ]
            }
          ],
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1883967933\">Modifier_ChallengePeakBattle_EnhancedAbility_0008</a>",
          "execute": [
            {
              "eventTrigger": "Entity Created [Anyone]",
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
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"2130870096\">Modifier_ChallengePeakBattle_EnhancedAbility_0008_02</a>",
                      "valuePerStack": {
                        "ChallengePeakBattle_0008_ADF_1": {
                          "operator": "Variables[0] (#ADF_1) || RETURN",
                          "displayLines": "#ADF_1",
                          "constants": [],
                          "variables": [
                            "#ADF_1"
                          ]
                        }
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Player Team"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-427871213\">Modifier_ChallengePeakBattle_EnhancedAbility_0008_02_PreShow</a>",
                      "valuePerStack": {
                        "ChallengePeakBattle_0008_ADF_1": {
                          "operator": "Variables[0] (#ADF_1) || RETURN",
                          "displayLines": "#ADF_1",
                          "constants": [],
                          "variables": [
                            "#ADF_1"
                          ]
                        }
                      }
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
    "1912336050_ChallengePeakBattle_BaseAbility_0008": {
      "fileName": "1912336050_ChallengePeakBattle_BaseAbility_0008",
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
          "modifier": "<a class=\"gModGreen\" id=\"-187169814\">Modifier_ChallengePeakBattle_BaseAbility_0008</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1051243622\">Modifier_ChallengePeakBattle_BaseAbility_0008_03</a>[<span class=\"descriptionNumberColor\">Taunting</span>]",
          "stackType": "Replace",
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
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_Layer",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (ChallengePeakBattle_0008_ADF_1) || RETURN",
                      "displayLines": "ChallengePeakBattle_0008_ADF_1",
                      "constants": [],
                      "variables": [
                        "ChallengePeakBattle_0008_ADF_1"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Action Advance/Delay",
                      "advanceType": "Set",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "set": 0
                    }
                  ]
                }
              ]
            }
          ],
          "description": "Gain 1 stack when attacked. When stacks reach <span class=\"descriptionNumberColor\">ChallengePeakBattle_0008_ADF_1</span>, take action immediately. Stack count resets at the start of turn.",
          "type": "Other",
          "statusName": "Taunting",
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1958699986\">Modifier_ChallengePeakBattle_BaseAbility_0008_02_PreShow</a>",
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "target": {
              "name": "Target Name",
              "target": "{{Player's Aim Target List}}"
            },
            "skillType": [
              "Basic ATK",
              "Skill",
              "Ultimate",
              "Memosprite"
            ],
            "conditions": {
              "name": "AND",
              "conditionList": [
                {
                  "name": "Compare: Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "value1": "<a class=\"gModGreen\" id=\"-1051243622\">Modifier_ChallengePeakBattle_BaseAbility_0008_03</a>[<span class=\"descriptionNumberColor\">Taunting</span>]",
                  "compareType": ">=",
                  "value2": {
                    "operator": "Variables[0] (ChallengePeakBattle_0008_ADF_1) || Constants[0] (1) || SUB || RETURN",
                    "displayLines": "(ChallengePeakBattle_0008_ADF_1 - 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "ChallengePeakBattle_0008_ADF_1"
                    ]
                  },
                  "valueType": "Layer"
                },
                {
                  "name": "Skill Effect",
                  "skillType": [
                    "SingleAttack",
                    "AoEAttack",
                    "Bounce",
                    "Blast"
                  ],
                  "activeSkill": true
                }
              ]
            },
            "delayAdvancePreview": {
              "name": "Delay/Advance Preview",
              "previewValue": "0(Set AV)"
            }
          }
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1034466003\">Modifier_ChallengePeakBattle_BaseAbility_0008_02</a>",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1051243622\">Modifier_ChallengePeakBattle_BaseAbility_0008_03</a>[<span class=\"descriptionNumberColor\">Taunting</span>]"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1051243622\">Modifier_ChallengePeakBattle_BaseAbility_0008_03</a>[<span class=\"descriptionNumberColor\">Taunting</span>]",
                  "valuePerStack": {
                    "ChallengePeakBattle_0008_ADF_1": {
                      "operator": "Variables[0] (#ADF_1) || RETURN",
                      "displayLines": "#ADF_1",
                      "constants": [],
                      "variables": [
                        "#ADF_1"
                      ]
                    }
                  },
                  "addStacksPerTrigger": 0
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1051243622\">Modifier_ChallengePeakBattle_BaseAbility_0008_03</a>[<span class=\"descriptionNumberColor\">Taunting</span>]",
                  "valuePerStack": {
                    "ChallengePeakBattle_0008_ADF_1": {
                      "operator": "Variables[0] (#ADF_1) || RETURN",
                      "displayLines": "#ADF_1",
                      "constants": [],
                      "variables": [
                        "#ADF_1"
                      ]
                    }
                  },
                  "addStacksPerTrigger": 0
                }
              ]
            },
            {
              "eventTrigger": "Being Attacked End [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1051243622\">Modifier_ChallengePeakBattle_BaseAbility_0008_03</a>[<span class=\"descriptionNumberColor\">Taunting</span>]",
                  "valuePerStack": {
                    "ChallengePeakBattle_0008_ADF_1": {
                      "operator": "Variables[0] (#ADF_1) || RETURN",
                      "displayLines": "#ADF_1",
                      "constants": [],
                      "variables": [
                        "#ADF_1"
                      ]
                    }
                  }
                }
              ]
            }
          ],
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "target": {
              "name": "Target Name",
              "target": "{{Modifier Holder}}"
            },
            "conditions": {
              "name": "AND",
              "conditionList": [
                {
                  "name": "Compare: Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "value1": null,
                  "compareType": ">=",
                  "value2": {
                    "operator": "Variables[0] (ChallengePeakBattle_0008_ADF_1) || Constants[0] (1) || SUB || RETURN",
                    "displayLines": "(ChallengePeakBattle_0008_ADF_1 - 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "ChallengePeakBattle_0008_ADF_1"
                    ]
                  },
                  "valueType": "Layer"
                },
                {
                  "name": "Compare: Target",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Player's Aim Target List}}"
                  },
                  "target2": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                }
              ]
            },
            "delayAdvancePreview": {
              "name": "Delay/Advance Preview",
              "previewValue": -1
            }
          },
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-187169814\">Modifier_ChallengePeakBattle_BaseAbility_0008</a>",
          "execute": [
            {
              "eventTrigger": "Entity Created [Anyone]",
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
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1034466003\">Modifier_ChallengePeakBattle_BaseAbility_0008_02</a>",
                      "valuePerStack": {
                        "ChallengePeakBattle_0008_ADF_1": {
                          "operator": "Variables[0] (#ADF_1) || RETURN",
                          "displayLines": "#ADF_1",
                          "constants": [],
                          "variables": [
                            "#ADF_1"
                          ]
                        }
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Player Team"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1958699986\">Modifier_ChallengePeakBattle_BaseAbility_0008_02_PreShow</a>",
                      "valuePerStack": {
                        "ChallengePeakBattle_0008_ADF_1": {
                          "operator": "Variables[0] (#ADF_1) || RETURN",
                          "displayLines": "#ADF_1",
                          "constants": [],
                          "variables": [
                            "#ADF_1"
                          ]
                        }
                      }
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
    "1912336050_ChallengePeakBattle_ExtremeAbility_0007": {
      "fileName": "1912336050_ChallengePeakBattle_ExtremeAbility_0007",
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
          "modifier": "<a class=\"gModGreen\" id=\"1208752490\">Modifier_ChallengePeakBattle_ExtremeAbility_0007</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-576579558\">Modifier_ChallengePeakBattle_ExtremeAbility_0007_03</a>[<span class=\"descriptionNumberColor\">Sunder++</span>]",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "MDF_Layer",
                  "multiplier": 1
                }
              ]
            },
            {
              "eventTrigger": "Being Attacked End [Owner]",
              "execute": [
                {
                  "name": "Consume",
                  "consumeFrom": "MaxHP",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "sourceTarget": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "consumePercent": {
                    "operator": "Variables[0] (MDF_Layer) || Variables[1] (ChallengePeakBattle_0007_ADF_1) || MUL || RETURN",
                    "displayLines": "(MDF_Layer * ChallengePeakBattle_0007_ADF_1)",
                    "constants": [],
                    "variables": [
                      "MDF_Layer",
                      "ChallengePeakBattle_0007_ADF_1"
                    ]
                  },
                  "eatShield": true,
                  "attackType": "Level",
                  "DamageType": {
                    "name": "Damage Type Source",
                    "sourceType": "Physical"
                  }
                }
              ]
            }
          ],
          "description": "Each stack causes this unit to additionally lose HP equal to <span class=\"descriptionNumberColor\">ChallengePeakBattle_0007_ADF_1</span> of their own Max HP after being attacked. After gaining a Shield or healing from an ally target (except this unit), both units will dispel all \"Sunder++\" effect.",
          "type": "Other",
          "effectName": "Vulnerability",
          "statusName": "Sunder++",
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-559801939\">Modifier_ChallengePeakBattle_ExtremeAbility_0007_02</a>",
          "execute": [
            {
              "eventTrigger": "Receiving Heal End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target's Source Owner}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "invertCondition": true
                      },
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target's Source Owner}}"
                        },
                        "team": "Player Team"
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
                      "modifier": "<a class=\"gModGreen\" id=\"-576579558\">Modifier_ChallengePeakBattle_ExtremeAbility_0007_03</a>[<span class=\"descriptionNumberColor\">Sunder++</span>]"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target's Source Owner}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-576579558\">Modifier_ChallengePeakBattle_ExtremeAbility_0007_03</a>[<span class=\"descriptionNumberColor\">Sunder++</span>]"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Being Attacked Start [Owner]",
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
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-576579558\">Modifier_ChallengePeakBattle_ExtremeAbility_0007_03</a>[<span class=\"descriptionNumberColor\">Sunder++</span>]",
                      "stackLimit": 999,
                      "valuePerStack": {
                        "ChallengePeakBattle_0007_ADF_1": {
                          "operator": "Variables[0] (ChallengePeakBattle_0007_ADF_1) || RETURN",
                          "displayLines": "ChallengePeakBattle_0007_ADF_1",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0007_ADF_1"
                          ]
                        }
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
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Modifier Has Flag",
                        "flagName": "Shield"
                      },
                      {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target 2}}.[[getSourceCreator]]"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "invertCondition": true
                      },
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target 2}}.[[getSourceCreator]]"
                        },
                        "team": "Player Team"
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
                      "modifier": "<a class=\"gModGreen\" id=\"-576579558\">Modifier_ChallengePeakBattle_ExtremeAbility_0007_03</a>[<span class=\"descriptionNumberColor\">Sunder++</span>]"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target 2}}.[[getSourceCreator]]"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-576579558\">Modifier_ChallengePeakBattle_ExtremeAbility_0007_03</a>[<span class=\"descriptionNumberColor\">Sunder++</span>]"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1208752490\">Modifier_ChallengePeakBattle_ExtremeAbility_0007</a>",
          "execute": [
            {
              "eventTrigger": "Entity Created [Anyone]",
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
                      "modifier": "<a class=\"gModGreen\" id=\"-559801939\">Modifier_ChallengePeakBattle_ExtremeAbility_0007_02</a>",
                      "valuePerStack": {
                        "ChallengePeakBattle_0007_ADF_1": {
                          "operator": "Variables[0] (#ADF_1) || RETURN",
                          "displayLines": "#ADF_1",
                          "constants": [],
                          "variables": [
                            "#ADF_1"
                          ]
                        }
                      }
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
    "1912336050_ChallengePeakBattle_EnhancedAbility_0007": {
      "fileName": "1912336050_ChallengePeakBattle_EnhancedAbility_0007",
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
          "modifier": "<a class=\"gModGreen\" id=\"1632303648\">Modifier_ChallengePeakBattle_EnhancedAbility_0007</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1259367356\">Modifier_ChallengePeakBattle_EnhancedAbility_0007_03</a>[<span class=\"descriptionNumberColor\">Sunder+</span>]",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "MDF_Layer",
                  "multiplier": 1
                }
              ]
            },
            {
              "eventTrigger": "Being Attacked End [Owner]",
              "execute": [
                {
                  "name": "Consume",
                  "consumeFrom": "MaxHP",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "sourceTarget": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "consumePercent": {
                    "operator": "Variables[0] (MDF_Layer) || Variables[1] (ChallengePeakBattle_0007_ADF_1) || MUL || RETURN",
                    "displayLines": "(MDF_Layer * ChallengePeakBattle_0007_ADF_1)",
                    "constants": [],
                    "variables": [
                      "MDF_Layer",
                      "ChallengePeakBattle_0007_ADF_1"
                    ]
                  },
                  "eatShield": true,
                  "attackType": "Level",
                  "DamageType": {
                    "name": "Damage Type Source",
                    "sourceType": "Physical"
                  }
                }
              ]
            }
          ],
          "description": "Each stack causes this unit to additionally lose HP equal to <span class=\"descriptionNumberColor\">ChallengePeakBattle_0007_ADF_1</span> of their own Max HP after being attacked. After gaining a Shield or healing from an ally target (except this unit), both units will dispel all \"Sunder+\" effect.",
          "type": "Other",
          "effectName": "Vulnerability",
          "statusName": "Sunder+",
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1276144975\">Modifier_ChallengePeakBattle_EnhancedAbility_0007_02</a>",
          "execute": [
            {
              "eventTrigger": "Receiving Heal End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target's Source Owner}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "invertCondition": true
                      },
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target's Source Owner}}"
                        },
                        "team": "Player Team"
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
                      "modifier": "<a class=\"gModGreen\" id=\"1259367356\">Modifier_ChallengePeakBattle_EnhancedAbility_0007_03</a>[<span class=\"descriptionNumberColor\">Sunder+</span>]"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target's Source Owner}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1259367356\">Modifier_ChallengePeakBattle_EnhancedAbility_0007_03</a>[<span class=\"descriptionNumberColor\">Sunder+</span>]"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Being Attacked Start [Owner]",
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
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1259367356\">Modifier_ChallengePeakBattle_EnhancedAbility_0007_03</a>[<span class=\"descriptionNumberColor\">Sunder+</span>]",
                      "stackLimit": 999,
                      "valuePerStack": {
                        "ChallengePeakBattle_0007_ADF_1": {
                          "operator": "Variables[0] (ChallengePeakBattle_0007_ADF_1) || RETURN",
                          "displayLines": "ChallengePeakBattle_0007_ADF_1",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0007_ADF_1"
                          ]
                        }
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
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Modifier Has Flag",
                        "flagName": "Shield"
                      },
                      {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target 2}}.[[getSourceCreator]]"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "invertCondition": true
                      },
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target 2}}.[[getSourceCreator]]"
                        },
                        "team": "Player Team"
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
                      "modifier": "<a class=\"gModGreen\" id=\"1259367356\">Modifier_ChallengePeakBattle_EnhancedAbility_0007_03</a>[<span class=\"descriptionNumberColor\">Sunder+</span>]"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target 2}}.[[getSourceCreator]]"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1259367356\">Modifier_ChallengePeakBattle_EnhancedAbility_0007_03</a>[<span class=\"descriptionNumberColor\">Sunder+</span>]"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1632303648\">Modifier_ChallengePeakBattle_EnhancedAbility_0007</a>",
          "execute": [
            {
              "eventTrigger": "Entity Created [Anyone]",
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
                      "modifier": "<a class=\"gModGreen\" id=\"1276144975\">Modifier_ChallengePeakBattle_EnhancedAbility_0007_02</a>",
                      "valuePerStack": {
                        "ChallengePeakBattle_0007_ADF_1": {
                          "operator": "Variables[0] (#ADF_1) || RETURN",
                          "displayLines": "#ADF_1",
                          "constants": [],
                          "variables": [
                            "#ADF_1"
                          ]
                        }
                      }
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
    "1912336050_ChallengePeakBattle_BaseAbility_0007": {
      "fileName": "1912336050_ChallengePeakBattle_BaseAbility_0007",
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
          "modifier": "<a class=\"gModGreen\" id=\"-405278861\">Modifier_ChallengePeakBattle_BaseAbility_0007</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1518475395\">Modifier_ChallengePeakBattle_BaseAbility_0007_03</a>[<span class=\"descriptionNumberColor\">Sunder</span>]",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "MDF_Layer",
                  "multiplier": 1
                }
              ]
            },
            {
              "eventTrigger": "Being Attacked End [Owner]",
              "execute": [
                {
                  "name": "Consume",
                  "consumeFrom": "MaxHP",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "sourceTarget": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "consumePercent": {
                    "operator": "Variables[0] (MDF_Layer) || Variables[1] (ChallengePeakBattle_0007_ADF_1) || MUL || RETURN",
                    "displayLines": "(MDF_Layer * ChallengePeakBattle_0007_ADF_1)",
                    "constants": [],
                    "variables": [
                      "MDF_Layer",
                      "ChallengePeakBattle_0007_ADF_1"
                    ]
                  },
                  "eatShield": true,
                  "attackType": "Level",
                  "DamageType": {
                    "name": "Damage Type Source",
                    "sourceType": "Physical"
                  }
                }
              ]
            }
          ],
          "description": "Each stack causes this unit to additionally lose HP equal to <span class=\"descriptionNumberColor\">ChallengePeakBattle_0007_ADF_1</span> of their own Max HP after being attacked. After gaining a Shield or healing from an ally target (except this unit), both units will dispel all \"Sunder\" effect.",
          "type": "Other",
          "effectName": "Vulnerability",
          "statusName": "Sunder",
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1535253014\">Modifier_ChallengePeakBattle_BaseAbility_0007_02</a>",
          "execute": [
            {
              "eventTrigger": "Receiving Heal End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target's Source Owner}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "invertCondition": true
                      },
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target's Source Owner}}"
                        },
                        "team": "Player Team"
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
                      "modifier": "<a class=\"gModGreen\" id=\"-1518475395\">Modifier_ChallengePeakBattle_BaseAbility_0007_03</a>[<span class=\"descriptionNumberColor\">Sunder</span>]"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target's Source Owner}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1518475395\">Modifier_ChallengePeakBattle_BaseAbility_0007_03</a>[<span class=\"descriptionNumberColor\">Sunder</span>]"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Being Attacked Start [Owner]",
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
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1518475395\">Modifier_ChallengePeakBattle_BaseAbility_0007_03</a>[<span class=\"descriptionNumberColor\">Sunder</span>]",
                      "stackLimit": 999,
                      "valuePerStack": {
                        "ChallengePeakBattle_0007_ADF_1": {
                          "operator": "Variables[0] (ChallengePeakBattle_0007_ADF_1) || RETURN",
                          "displayLines": "ChallengePeakBattle_0007_ADF_1",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0007_ADF_1"
                          ]
                        }
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
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Modifier Has Flag",
                        "flagName": "Shield"
                      },
                      {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target 2}}.[[getSourceCreator]]"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "invertCondition": true
                      },
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target 2}}.[[getSourceCreator]]"
                        },
                        "team": "Player Team"
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
                      "modifier": "<a class=\"gModGreen\" id=\"-1518475395\">Modifier_ChallengePeakBattle_BaseAbility_0007_03</a>[<span class=\"descriptionNumberColor\">Sunder</span>]"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target 2}}.[[getSourceCreator]]"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1518475395\">Modifier_ChallengePeakBattle_BaseAbility_0007_03</a>[<span class=\"descriptionNumberColor\">Sunder</span>]"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-405278861\">Modifier_ChallengePeakBattle_BaseAbility_0007</a>",
          "execute": [
            {
              "eventTrigger": "Entity Created [Anyone]",
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
                      "modifier": "<a class=\"gModGreen\" id=\"-1535253014\">Modifier_ChallengePeakBattle_BaseAbility_0007_02</a>",
                      "valuePerStack": {
                        "ChallengePeakBattle_0007_ADF_1": {
                          "operator": "Variables[0] (#ADF_1) || RETURN",
                          "displayLines": "#ADF_1",
                          "constants": [],
                          "variables": [
                            "#ADF_1"
                          ]
                        }
                      }
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
    "1912336050_ChallengePeakBattle_ExtremeAbility_0006": {
      "fileName": "1912336050_ChallengePeakBattle_ExtremeAbility_0006",
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
          "modifier": "<a class=\"gModGreen\" id=\"1225530109\">Modifier_ChallengePeakBattle_ExtremeAbility_0006</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1445876003\">Modifier_ChallengePeakBattle_ExtremeAbility_0006_03</a>[<span class=\"descriptionNumberColor\">Anguish++</span>]",
          "stackType": "Replace",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (ChallengePeakBattle_0006_ADF_2) || Variables[1] (MDF_Layer) || MUL || RETURN",
                    "displayLines": "(ChallengePeakBattle_0006_ADF_2 * MDF_Layer)",
                    "constants": [],
                    "variables": [
                      "ChallengePeakBattle_0006_ADF_2",
                      "MDF_Layer"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "Each stack increases DMG taken by <span class=\"descriptionNumberColor\">ChallengePeakBattle_0006_ADF_2</span>.",
          "type": "Debuff",
          "effectName": "Vulnerability",
          "statusName": "Anguish++",
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1429098384\">Modifier_ChallengePeakBattle_ExtremeAbility_0006_02</a>",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1445876003\">Modifier_ChallengePeakBattle_ExtremeAbility_0006_03</a>[<span class=\"descriptionNumberColor\">Anguish++</span>]",
                  "baseChance": {
                    "operator": "Variables[0] (ChallengePeakBattle_0006_ADF_1) || RETURN",
                    "displayLines": "ChallengePeakBattle_0006_ADF_1",
                    "constants": [],
                    "variables": [
                      "ChallengePeakBattle_0006_ADF_1"
                    ]
                  },
                  "stackLimit": {
                    "operator": "Variables[0] (ChallengePeakBattle_0006_ADF_3) || RETURN",
                    "displayLines": "ChallengePeakBattle_0006_ADF_3",
                    "constants": [],
                    "variables": [
                      "ChallengePeakBattle_0006_ADF_3"
                    ]
                  },
                  "valuePerStack": {
                    "ChallengePeakBattle_0006_ADF_1": {
                      "operator": "Variables[0] (ChallengePeakBattle_0006_ADF_1) || RETURN",
                      "displayLines": "ChallengePeakBattle_0006_ADF_1",
                      "constants": [],
                      "variables": [
                        "ChallengePeakBattle_0006_ADF_1"
                      ]
                    },
                    "ChallengePeakBattle_0006_ADF_2": {
                      "operator": "Variables[0] (ChallengePeakBattle_0006_ADF_2) || RETURN",
                      "displayLines": "ChallengePeakBattle_0006_ADF_2",
                      "constants": [],
                      "variables": [
                        "ChallengePeakBattle_0006_ADF_2"
                      ]
                    },
                    "ChallengePeakBattle_0006_ADF_3": {
                      "operator": "Variables[0] (ChallengePeakBattle_0006_ADF_3) || RETURN",
                      "displayLines": "ChallengePeakBattle_0006_ADF_3",
                      "constants": [],
                      "variables": [
                        "ChallengePeakBattle_0006_ADF_3"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1225530109\">Modifier_ChallengePeakBattle_ExtremeAbility_0006</a>",
          "execute": [
            {
              "eventTrigger": "Entity Created [Anyone]",
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
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Enemy Team"
                      },
                      {
                        "name": "Compare: Monster Rank",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "compareType": ">=",
                        "value2": 3
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
                      "modifier": "<a class=\"gModGreen\" id=\"1429098384\">Modifier_ChallengePeakBattle_ExtremeAbility_0006_02</a>",
                      "valuePerStack": {
                        "ChallengePeakBattle_0006_ADF_1": {
                          "operator": "Variables[0] (#ADF_1) || RETURN",
                          "displayLines": "#ADF_1",
                          "constants": [],
                          "variables": [
                            "#ADF_1"
                          ]
                        },
                        "ChallengePeakBattle_0006_ADF_2": {
                          "operator": "Variables[0] (#ADF_2) || RETURN",
                          "displayLines": "#ADF_2",
                          "constants": [],
                          "variables": [
                            "#ADF_2"
                          ]
                        },
                        "ChallengePeakBattle_0006_ADF_3": {
                          "operator": "Variables[0] (#ADF_3) || RETURN",
                          "displayLines": "#ADF_3",
                          "constants": [],
                          "variables": [
                            "#ADF_3"
                          ]
                        }
                      }
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
    "1912336050_ChallengePeakBattle_EnhancedAbility_0006": {
      "fileName": "1912336050_ChallengePeakBattle_EnhancedAbility_0006",
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
          "modifier": "<a class=\"gModGreen\" id=\"1649081267\">Modifier_ChallengePeakBattle_EnhancedAbility_0006</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-342039619\">Modifier_ChallengePeakBattle_EnhancedAbility_0006_03</a>[<span class=\"descriptionNumberColor\">Anguish+</span>]",
          "stackType": "Replace",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (ChallengePeakBattle_0006_ADF_2) || Variables[1] (MDF_Layer) || MUL || RETURN",
                    "displayLines": "(ChallengePeakBattle_0006_ADF_2 * MDF_Layer)",
                    "constants": [],
                    "variables": [
                      "ChallengePeakBattle_0006_ADF_2",
                      "MDF_Layer"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "Each stack increases DMG taken by <span class=\"descriptionNumberColor\">ChallengePeakBattle_0006_ADF_2</span>.",
          "type": "Debuff",
          "effectName": "Vulnerability",
          "statusName": "Anguish+",
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-358817238\">Modifier_ChallengePeakBattle_EnhancedAbility_0006_02</a>",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-342039619\">Modifier_ChallengePeakBattle_EnhancedAbility_0006_03</a>[<span class=\"descriptionNumberColor\">Anguish+</span>]",
                  "baseChance": {
                    "operator": "Variables[0] (ChallengePeakBattle_0006_ADF_1) || RETURN",
                    "displayLines": "ChallengePeakBattle_0006_ADF_1",
                    "constants": [],
                    "variables": [
                      "ChallengePeakBattle_0006_ADF_1"
                    ]
                  },
                  "stackLimit": {
                    "operator": "Variables[0] (ChallengePeakBattle_0006_ADF_3) || RETURN",
                    "displayLines": "ChallengePeakBattle_0006_ADF_3",
                    "constants": [],
                    "variables": [
                      "ChallengePeakBattle_0006_ADF_3"
                    ]
                  },
                  "valuePerStack": {
                    "ChallengePeakBattle_0006_ADF_1": {
                      "operator": "Variables[0] (ChallengePeakBattle_0006_ADF_1) || RETURN",
                      "displayLines": "ChallengePeakBattle_0006_ADF_1",
                      "constants": [],
                      "variables": [
                        "ChallengePeakBattle_0006_ADF_1"
                      ]
                    },
                    "ChallengePeakBattle_0006_ADF_2": {
                      "operator": "Variables[0] (ChallengePeakBattle_0006_ADF_2) || RETURN",
                      "displayLines": "ChallengePeakBattle_0006_ADF_2",
                      "constants": [],
                      "variables": [
                        "ChallengePeakBattle_0006_ADF_2"
                      ]
                    },
                    "ChallengePeakBattle_0006_ADF_3": {
                      "operator": "Variables[0] (ChallengePeakBattle_0006_ADF_3) || RETURN",
                      "displayLines": "ChallengePeakBattle_0006_ADF_3",
                      "constants": [],
                      "variables": [
                        "ChallengePeakBattle_0006_ADF_3"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1649081267\">Modifier_ChallengePeakBattle_EnhancedAbility_0006</a>",
          "execute": [
            {
              "eventTrigger": "Entity Created [Anyone]",
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
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Enemy Team"
                      },
                      {
                        "name": "Compare: Monster Rank",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "compareType": ">=",
                        "value2": 3
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
                      "modifier": "<a class=\"gModGreen\" id=\"-358817238\">Modifier_ChallengePeakBattle_EnhancedAbility_0006_02</a>",
                      "valuePerStack": {
                        "ChallengePeakBattle_0006_ADF_1": {
                          "operator": "Variables[0] (#ADF_1) || RETURN",
                          "displayLines": "#ADF_1",
                          "constants": [],
                          "variables": [
                            "#ADF_1"
                          ]
                        },
                        "ChallengePeakBattle_0006_ADF_2": {
                          "operator": "Variables[0] (#ADF_2) || RETURN",
                          "displayLines": "#ADF_2",
                          "constants": [],
                          "variables": [
                            "#ADF_2"
                          ]
                        },
                        "ChallengePeakBattle_0006_ADF_3": {
                          "operator": "Variables[0] (#ADF_3) || RETURN",
                          "displayLines": "#ADF_3",
                          "constants": [],
                          "variables": [
                            "#ADF_3"
                          ]
                        }
                      }
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
    "1912336050_ChallengePeakBattle_BaseAbility_0006": {
      "fileName": "1912336050_ChallengePeakBattle_BaseAbility_0006",
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
          "modifier": "<a class=\"gModGreen\" id=\"-422056480\">Modifier_ChallengePeakBattle_BaseAbility_0006</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__82931580\">Modifier_ChallengePeakBattle_BaseAbility_0006_03</a>[<span class=\"descriptionNumberColor\">Anguish</span>]",
          "stackType": "Replace",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (ChallengePeakBattle_0006_ADF_2) || Variables[1] (MDF_Layer) || MUL || RETURN",
                    "displayLines": "(ChallengePeakBattle_0006_ADF_2 * MDF_Layer)",
                    "constants": [],
                    "variables": [
                      "ChallengePeakBattle_0006_ADF_2",
                      "MDF_Layer"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "Each stack increases DMG taken by <span class=\"descriptionNumberColor\">ChallengePeakBattle_0006_ADF_2</span>.",
          "type": "Debuff",
          "effectName": "Vulnerability",
          "statusName": "Anguish",
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__99709199\">Modifier_ChallengePeakBattle_BaseAbility_0006_02</a>",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"82931580\">Modifier_ChallengePeakBattle_BaseAbility_0006_03</a>[<span class=\"descriptionNumberColor\">Anguish</span>]",
                  "baseChance": {
                    "operator": "Variables[0] (ChallengePeakBattle_0006_ADF_1) || RETURN",
                    "displayLines": "ChallengePeakBattle_0006_ADF_1",
                    "constants": [],
                    "variables": [
                      "ChallengePeakBattle_0006_ADF_1"
                    ]
                  },
                  "stackLimit": {
                    "operator": "Variables[0] (ChallengePeakBattle_0006_ADF_3) || RETURN",
                    "displayLines": "ChallengePeakBattle_0006_ADF_3",
                    "constants": [],
                    "variables": [
                      "ChallengePeakBattle_0006_ADF_3"
                    ]
                  },
                  "valuePerStack": {
                    "ChallengePeakBattle_0006_ADF_1": {
                      "operator": "Variables[0] (ChallengePeakBattle_0006_ADF_1) || RETURN",
                      "displayLines": "ChallengePeakBattle_0006_ADF_1",
                      "constants": [],
                      "variables": [
                        "ChallengePeakBattle_0006_ADF_1"
                      ]
                    },
                    "ChallengePeakBattle_0006_ADF_2": {
                      "operator": "Variables[0] (ChallengePeakBattle_0006_ADF_2) || RETURN",
                      "displayLines": "ChallengePeakBattle_0006_ADF_2",
                      "constants": [],
                      "variables": [
                        "ChallengePeakBattle_0006_ADF_2"
                      ]
                    },
                    "ChallengePeakBattle_0006_ADF_3": {
                      "operator": "Variables[0] (ChallengePeakBattle_0006_ADF_3) || RETURN",
                      "displayLines": "ChallengePeakBattle_0006_ADF_3",
                      "constants": [],
                      "variables": [
                        "ChallengePeakBattle_0006_ADF_3"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-422056480\">Modifier_ChallengePeakBattle_BaseAbility_0006</a>",
          "execute": [
            {
              "eventTrigger": "Entity Created [Anyone]",
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
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Enemy Team"
                      },
                      {
                        "name": "Compare: Monster Rank",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "compareType": ">=",
                        "value2": 3
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
                      "modifier": "<a class=\"gModGreen\" id=\"99709199\">Modifier_ChallengePeakBattle_BaseAbility_0006_02</a>",
                      "valuePerStack": {
                        "ChallengePeakBattle_0006_ADF_1": {
                          "operator": "Variables[0] (#ADF_1) || RETURN",
                          "displayLines": "#ADF_1",
                          "constants": [],
                          "variables": [
                            "#ADF_1"
                          ]
                        },
                        "ChallengePeakBattle_0006_ADF_2": {
                          "operator": "Variables[0] (#ADF_2) || RETURN",
                          "displayLines": "#ADF_2",
                          "constants": [],
                          "variables": [
                            "#ADF_2"
                          ]
                        },
                        "ChallengePeakBattle_0006_ADF_3": {
                          "operator": "Variables[0] (#ADF_3) || RETURN",
                          "displayLines": "#ADF_3",
                          "constants": [],
                          "variables": [
                            "#ADF_3"
                          ]
                        }
                      }
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
    "1912336050_ChallengePeakBattle_ExtremeAbility_0005": {
      "fileName": "1912336050_ChallengePeakBattle_ExtremeAbility_0005",
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
          "modifier": "<a class=\"gModGreen\" id=\"1175197252\">Modifier_ChallengePeakBattle_ExtremeAbility_0005</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1840788035\">Modifier_ChallengePeakBattle_ExtremeAbility_0005_02</a>[<span class=\"descriptionNumberColor\">Energy Absorption++</span>]",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Player Team"
                  },
                  "passed": [
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "value": {
                        "operator": "Variables[0] (ChallengePeakBattle_0005_ADF_1) || RETURN",
                        "displayLines": "ChallengePeakBattle_0005_ADF_1",
                        "constants": [],
                        "variables": [
                          "ChallengePeakBattle_0005_ADF_1"
                        ]
                      },
                      "isFixed": "(Fixed)"
                    },
                    {
                      "name": "UI Display Event (On Entity)",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "living": true
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
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value1": "Energy%",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value1": "Energy%",
                        "compareType": "=",
                        "value2": 0
                      }
                    ]
                  },
                  "failed": [
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "value": {
                        "operator": "Variables[0] (ChallengePeakBattle_0005_ADF_2) || INVERT || RETURN",
                        "displayLines": "-ChallengePeakBattle_0005_ADF_2",
                        "constants": [],
                        "variables": [
                          "ChallengePeakBattle_0005_ADF_2"
                        ]
                      },
                      "isFixed": "(Fixed)"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Living State",
                        "state": "Mask_AliveOnly",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        }
                      },
                      "passed": [
                        {
                          "name": "UI Display Event (On Entity)",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "living": true
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "description": "After each time an attack is received, reduces the attacker's Energy by <span class=\"descriptionNumberColor\">ChallengePeakBattle_0005_ADF_1</span> points. The attacker's Energy will not be reduced if it is maxed. When defeated, regenerates <span class=\"descriptionNumberColor\">ChallengePeakBattle_0005_ADF_2</span> Energy for the attacker.",
          "type": "Other",
          "statusName": "Energy Absorption++"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1175197252\">Modifier_ChallengePeakBattle_ExtremeAbility_0005</a>",
          "execute": [
            {
              "eventTrigger": "Entity Created [Anyone]",
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
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1840788035\">Modifier_ChallengePeakBattle_ExtremeAbility_0005_02</a>[<span class=\"descriptionNumberColor\">Energy Absorption++</span>]",
                      "valuePerStack": {
                        "ChallengePeakBattle_0005_ADF_1": {
                          "operator": "Variables[0] (#ADF_1) || RETURN",
                          "displayLines": "#ADF_1",
                          "constants": [],
                          "variables": [
                            "#ADF_1"
                          ]
                        },
                        "ChallengePeakBattle_0005_ADF_2": {
                          "operator": "Variables[0] (#ADF_2) || RETURN",
                          "displayLines": "#ADF_2",
                          "constants": [],
                          "variables": [
                            "#ADF_2"
                          ]
                        }
                      }
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
    "1912336050_ChallengePeakBattle_EnhancedAbility_0005": {
      "fileName": "1912336050_ChallengePeakBattle_EnhancedAbility_0005",
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
          "modifier": "<a class=\"gModGreen\" id=\"1665858886\">Modifier_ChallengePeakBattle_EnhancedAbility_0005</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__713949049\">Modifier_ChallengePeakBattle_EnhancedAbility_0005_02</a>[<span class=\"descriptionNumberColor\">Energy Absorption+</span>]",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Player Team"
                  },
                  "passed": [
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "value": {
                        "operator": "Variables[0] (ChallengePeakBattle_0005_ADF_1) || RETURN",
                        "displayLines": "ChallengePeakBattle_0005_ADF_1",
                        "constants": [],
                        "variables": [
                          "ChallengePeakBattle_0005_ADF_1"
                        ]
                      },
                      "isFixed": "(Fixed)"
                    },
                    {
                      "name": "UI Display Event (On Entity)",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "living": true
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
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value1": "Energy%",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value1": "Energy%",
                        "compareType": "=",
                        "value2": 0
                      }
                    ]
                  },
                  "failed": [
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "value": {
                        "operator": "Variables[0] (ChallengePeakBattle_0005_ADF_2) || INVERT || RETURN",
                        "displayLines": "-ChallengePeakBattle_0005_ADF_2",
                        "constants": [],
                        "variables": [
                          "ChallengePeakBattle_0005_ADF_2"
                        ]
                      },
                      "isFixed": "(Fixed)"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Living State",
                        "state": "Mask_AliveOnly",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        }
                      },
                      "passed": [
                        {
                          "name": "UI Display Event (On Entity)",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "living": true
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "description": "After each time an attack is received, reduces the attacker's Energy by <span class=\"descriptionNumberColor\">ChallengePeakBattle_0005_ADF_1</span> points. The attacker's Energy will not be reduced if it is maxed. When defeated, regenerates <span class=\"descriptionNumberColor\">ChallengePeakBattle_0005_ADF_2</span> Energy for the attacker.",
          "type": "Other",
          "statusName": "Energy Absorption+"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1665858886\">Modifier_ChallengePeakBattle_EnhancedAbility_0005</a>",
          "execute": [
            {
              "eventTrigger": "Entity Created [Anyone]",
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
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"713949049\">Modifier_ChallengePeakBattle_EnhancedAbility_0005_02</a>[<span class=\"descriptionNumberColor\">Energy Absorption+</span>]",
                      "valuePerStack": {
                        "ChallengePeakBattle_0005_ADF_1": {
                          "operator": "Variables[0] (#ADF_1) || RETURN",
                          "displayLines": "#ADF_1",
                          "constants": [],
                          "variables": [
                            "#ADF_1"
                          ]
                        },
                        "ChallengePeakBattle_0005_ADF_2": {
                          "operator": "Variables[0] (#ADF_2) || RETURN",
                          "displayLines": "#ADF_2",
                          "constants": [],
                          "variables": [
                            "#ADF_2"
                          ]
                        }
                      }
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
    "1912336050_ChallengePeakBattle_BaseAbility_0005": {
      "fileName": "1912336050_ChallengePeakBattle_BaseAbility_0005",
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
          "modifier": "<a class=\"gModGreen\" id=\"-371723623\">Modifier_ChallengePeakBattle_BaseAbility_0005</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1618051580\">Modifier_ChallengePeakBattle_BaseAbility_0005_02</a>[<span class=\"descriptionNumberColor\">Energy Absorption</span>]",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Player Team"
                  },
                  "passed": [
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "value": {
                        "operator": "Variables[0] (ChallengePeakBattle_0005_ADF_1) || RETURN",
                        "displayLines": "ChallengePeakBattle_0005_ADF_1",
                        "constants": [],
                        "variables": [
                          "ChallengePeakBattle_0005_ADF_1"
                        ]
                      },
                      "isFixed": "(Fixed)"
                    },
                    {
                      "name": "UI Display Event (On Entity)",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "living": true
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
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value1": "Energy%",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value1": "Energy%",
                        "compareType": "=",
                        "value2": 0
                      }
                    ]
                  },
                  "failed": [
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "value": {
                        "operator": "Variables[0] (ChallengePeakBattle_0005_ADF_2) || INVERT || RETURN",
                        "displayLines": "-ChallengePeakBattle_0005_ADF_2",
                        "constants": [],
                        "variables": [
                          "ChallengePeakBattle_0005_ADF_2"
                        ]
                      },
                      "isFixed": "(Fixed)"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Living State",
                        "state": "Mask_AliveOnly",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        }
                      },
                      "passed": [
                        {
                          "name": "UI Display Event (On Entity)",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "living": true
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "description": "After each time an attack is received, reduces the attacker's Energy by <span class=\"descriptionNumberColor\">ChallengePeakBattle_0005_ADF_1</span> points. The attacker's Energy will not be reduced if it is maxed. When defeated, regenerates <span class=\"descriptionNumberColor\">ChallengePeakBattle_0005_ADF_2</span> Energy for the attacker.",
          "type": "Other",
          "statusName": "Energy Absorption"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-371723623\">Modifier_ChallengePeakBattle_BaseAbility_0005</a>",
          "execute": [
            {
              "eventTrigger": "Entity Created [Anyone]",
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
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1618051580\">Modifier_ChallengePeakBattle_BaseAbility_0005_02</a>[<span class=\"descriptionNumberColor\">Energy Absorption</span>]",
                      "valuePerStack": {
                        "ChallengePeakBattle_0005_ADF_1": {
                          "operator": "Variables[0] (#ADF_1) || RETURN",
                          "displayLines": "#ADF_1",
                          "constants": [],
                          "variables": [
                            "#ADF_1"
                          ]
                        },
                        "ChallengePeakBattle_0005_ADF_2": {
                          "operator": "Variables[0] (#ADF_2) || RETURN",
                          "displayLines": "#ADF_2",
                          "constants": [],
                          "variables": [
                            "#ADF_2"
                          ]
                        }
                      }
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
    "1912336050_ChallengePeakBattle_BaseAbility_0004": {
      "fileName": "1912336050_ChallengePeakBattle_BaseAbility_0004",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "_Elite_Num"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-388501242\">Modifier_ChallengePeakBattle_BaseAbility_0004</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-886944199\">Modifier_ChallengePeakBattle_BaseAbility_0004_02</a>[<span class=\"descriptionNumberColor\">Under Protection</span>]",
          "modifierFlags": [
            "MuteBreak",
            "STAT_AITargetLowerPriority"
          ],
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">EffectRES</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (ChallengePeakBattle_0004_ADF_1) || RETURN",
                    "displayLines": "ChallengePeakBattle_0004_ADF_1",
                    "constants": [],
                    "variables": [
                      "ChallengePeakBattle_0004_ADF_1"
                    ]
                  }
                },
                {
                  "name": "Lock HP",
                  "threshold": {
                    "operator": "Constants[0] (1) || RETURN",
                    "displayLines": "1",
                    "constants": [
                      1
                    ],
                    "variables": []
                  },
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "lockHolder": "<a class=\"gModGreen\" id=\"-1276583244\">ChallengePeakBattle_BaseAbility_0004_LockHP</a>"
                },
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
          "description": "Will not have HP and Toughness reduced, and increases Effect RES by <span class=\"descriptionNumberColor\">ChallengePeakBattle_0004_ADF_1</span>. When all elite enemy targets are eliminated, this unit will also be eliminated.",
          "type": "Other",
          "statusName": "Under Protection"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-388501242\">Modifier_ChallengePeakBattle_BaseAbility_0004</a>",
          "execute": [
            {
              "eventTrigger": "Entity Death [Anyone]",
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
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Enemy Team"
                      },
                      {
                        "name": "Compare: Monster Rank",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "compareType": ">=",
                        "value2": 3
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "_Elite_Num",
                      "value": -1,
                      "max": 100
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Entity Created [Anyone]",
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
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Enemy Team"
                      },
                      {
                        "name": "Compare: Monster Rank",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "compareType": "<",
                        "value2": 3
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
                      "modifier": "<a class=\"gModGreen\" id=\"-886944199\">Modifier_ChallengePeakBattle_BaseAbility_0004_02</a>[<span class=\"descriptionNumberColor\">Under Protection</span>]",
                      "valuePerStack": {
                        "ChallengePeakBattle_0004_ADF_1": {
                          "operator": "Variables[0] (#ADF_1) || RETURN",
                          "displayLines": "#ADF_1",
                          "constants": [],
                          "variables": [
                            "#ADF_1"
                          ]
                        }
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
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Enemy Team"
                      },
                      {
                        "name": "Compare: Monster Rank",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "compareType": ">=",
                        "value2": 3
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "_Elite_Num",
                      "value": 1,
                      "max": 100
                    }
                  ]
                }
              ]
            }
          ],
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "_Elite_Num",
              "from": "ContextOwner",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "maxValue": 100,
                  "includeMaxValueInRange": true,
                  "whenValueChanges": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "_Elite_Num",
                        "compareType": "=",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Enemy Team All}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-886944199\">Modifier_ChallengePeakBattle_BaseAbility_0004_02</a>[<span class=\"descriptionNumberColor\">Under Protection</span>]"
                        },
                        {
                          "name": "Force Entity Death",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Enemy Team All}}"
                          }
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
      ]
    },
    "1912336050_ChallengePeakBattle_ExtremeAbility_0003": {
      "fileName": "1912336050_ChallengePeakBattle_ExtremeAbility_0003",
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
          "modifier": "<a class=\"gModGreen\" id=\"1141642014\">Modifier_ChallengePeakBattle_ExtremeAbility_0003</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-577906191\">Modifier_ChallengePeakBattle_ExtremeAbility_0003_02</a>[<span class=\"descriptionNumberColor\">Inversion++</span>]",
          "execute": [
            {
              "eventTrigger": "Being Attacked End [Owner]",
              "execute": [
                {
                  "name": "Consume",
                  "consumeFrom": "MaxHP",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "sourceTarget": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "consumePercent": {
                    "operator": "Variables[0] (ChallengePeakBattle_0003_ADF_1) || RETURN",
                    "displayLines": "ChallengePeakBattle_0003_ADF_1",
                    "constants": [],
                    "variables": [
                      "ChallengePeakBattle_0003_ADF_1"
                    ]
                  },
                  "consumeFloor": 1,
                  "eatShield": true,
                  "attackType": "Level",
                  "DamageType": {
                    "name": "Damage Type Source",
                    "sourceType": "Physical"
                  }
                }
              ]
            }
          ],
          "description": "Each time after being attacked, the attacker will lose HP equal to <span class=\"descriptionNumberColor\">ChallengePeakBattle_0003_ADF_1</span> of their own Max HP. This effect is Non-fatal.",
          "type": "Other",
          "statusName": "Inversion++"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1141642014\">Modifier_ChallengePeakBattle_ExtremeAbility_0003</a>",
          "execute": [
            {
              "eventTrigger": "Entity Created [Anyone]",
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
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-577906191\">Modifier_ChallengePeakBattle_ExtremeAbility_0003_02</a>[<span class=\"descriptionNumberColor\">Inversion++</span>]",
                      "valuePerStack": {
                        "ChallengePeakBattle_0003_ADF_1": {
                          "operator": "Variables[0] (#ADF_1) || RETURN",
                          "displayLines": "#ADF_1",
                          "constants": [],
                          "variables": [
                            "#ADF_1"
                          ]
                        }
                      },
                      "casterAssign": "TargetSelf"
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
    "1912336050_ChallengePeakBattle_EnhancedAbility_0003": {
      "fileName": "1912336050_ChallengePeakBattle_EnhancedAbility_0003",
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
          "modifier": "<a class=\"gModGreen\" id=\"1699414124\">Modifier_ChallengePeakBattle_EnhancedAbility_0003</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1805296405\">Modifier_ChallengePeakBattle_EnhancedAbility_0003_02</a>[<span class=\"descriptionNumberColor\">Inversion+</span>]",
          "execute": [
            {
              "eventTrigger": "Being Attacked End [Owner]",
              "execute": [
                {
                  "name": "Consume",
                  "consumeFrom": "MaxHP",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "sourceTarget": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "consumePercent": {
                    "operator": "Variables[0] (ChallengePeakBattle_0003_ADF_1) || RETURN",
                    "displayLines": "ChallengePeakBattle_0003_ADF_1",
                    "constants": [],
                    "variables": [
                      "ChallengePeakBattle_0003_ADF_1"
                    ]
                  },
                  "consumeFloor": 1,
                  "eatShield": true,
                  "attackType": "Level",
                  "DamageType": {
                    "name": "Damage Type Source",
                    "sourceType": "Physical"
                  }
                }
              ]
            }
          ],
          "description": "Each time after being attacked, the attacker will lose HP equal to <span class=\"descriptionNumberColor\">ChallengePeakBattle_0003_ADF_1</span> of their own Max HP. This effect is Non-fatal.",
          "type": "Other",
          "statusName": "Inversion+"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1699414124\">Modifier_ChallengePeakBattle_EnhancedAbility_0003</a>",
          "execute": [
            {
              "eventTrigger": "Entity Created [Anyone]",
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
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1805296405\">Modifier_ChallengePeakBattle_EnhancedAbility_0003_02</a>[<span class=\"descriptionNumberColor\">Inversion+</span>]",
                      "valuePerStack": {
                        "ChallengePeakBattle_0003_ADF_1": {
                          "operator": "Variables[0] (#ADF_1) || RETURN",
                          "displayLines": "#ADF_1",
                          "constants": [],
                          "variables": [
                            "#ADF_1"
                          ]
                        }
                      },
                      "casterAssign": "TargetSelf"
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
    "1912336050_ChallengePeakBattle_BaseAbility_0003": {
      "fileName": "1912336050_ChallengePeakBattle_BaseAbility_0003",
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
          "modifier": "<a class=\"gModGreen\" id=\"-338168385\">Modifier_ChallengePeakBattle_BaseAbility_0003</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1303856730\">Modifier_ChallengePeakBattle_BaseAbility_0003_02</a>[<span class=\"descriptionNumberColor\">Inversion</span>]",
          "execute": [
            {
              "eventTrigger": "Being Attacked End [Owner]",
              "execute": [
                {
                  "name": "Consume",
                  "consumeFrom": "MaxHP",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "sourceTarget": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "consumePercent": {
                    "operator": "Variables[0] (ChallengePeakBattle_0003_ADF_1) || RETURN",
                    "displayLines": "ChallengePeakBattle_0003_ADF_1",
                    "constants": [],
                    "variables": [
                      "ChallengePeakBattle_0003_ADF_1"
                    ]
                  },
                  "consumeFloor": 1,
                  "eatShield": true,
                  "attackType": "Level",
                  "DamageType": {
                    "name": "Damage Type Source",
                    "sourceType": "Physical"
                  }
                }
              ]
            }
          ],
          "description": "Each time after being attacked, the attacker will lose HP equal to <span class=\"descriptionNumberColor\">ChallengePeakBattle_0003_ADF_1</span> of their own Max HP. This effect is Non-fatal.",
          "type": "Other",
          "statusName": "Inversion"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-338168385\">Modifier_ChallengePeakBattle_BaseAbility_0003</a>",
          "execute": [
            {
              "eventTrigger": "Entity Created [Anyone]",
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
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1303856730\">Modifier_ChallengePeakBattle_BaseAbility_0003_02</a>[<span class=\"descriptionNumberColor\">Inversion</span>]",
                      "valuePerStack": {
                        "ChallengePeakBattle_0003_ADF_1": {
                          "operator": "Variables[0] (#ADF_1) || RETURN",
                          "displayLines": "#ADF_1",
                          "constants": [],
                          "variables": [
                            "#ADF_1"
                          ]
                        }
                      },
                      "casterAssign": "TargetSelf"
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
    "1912336050_ChallengePeakBattle_BaseAbility_0002": {
      "fileName": "1912336050_ChallengePeakBattle_BaseAbility_0002",
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
          "modifier": "<a class=\"gModGreen\" id=\"-354946004\">Modifier_ChallengePeakBattle_BaseAbility_0002</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__872000024\">Modifier_ChallengePeakBattle_BaseAbility_0002_03</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Owner]: Hit",
              "execute": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageSUM</span>&nbsp;",
                      "value": "(-LoseHPPercentage * ChallengePeakBattle_0002_ADF_1)"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with HP%",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "LoseHPPercentage"
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "LoseHPPercentage",
                  "value": {
                    "operator": "Constants[0] (1) || Variables[0] (LoseHPPercentage) || SUB || RETURN",
                    "displayLines": "(1 - LoseHPPercentage)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "LoseHPPercentage"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "LoseHPPercentage",
                  "value": {
                    "operator": "Variables[0] (LoseHPPercentage) || Constants[0] (100) || MUL || RETURN",
                    "displayLines": "(LoseHPPercentage * 100)",
                    "constants": [
                      100
                    ],
                    "variables": [
                      "LoseHPPercentage"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__888777643\">Modifier_ChallengePeakBattle_BaseAbility_0002_02</a>[<span class=\"descriptionNumberColor\">Tempering</span>]",
          "execute": [
            {
              "eventTrigger": "HP Change [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"872000024\">Modifier_ChallengePeakBattle_BaseAbility_0002_03</a>",
                  "valuePerStack": {
                    "ChallengePeakBattle_0002_ADF_1": {
                      "operator": "Variables[0] (ChallengePeakBattle_0002_ADF_1) || RETURN",
                      "displayLines": "ChallengePeakBattle_0002_ADF_1",
                      "constants": [],
                      "variables": [
                        "ChallengePeakBattle_0002_ADF_1"
                      ]
                    }
                  }
                }
              ]
            }
          ],
          "description": "For every 1% HP lost, reduces CRIT DMG dealt by allies by <span class=\"descriptionNumberColor\">ChallengePeakBattle_0002_ADF_1</span>.",
          "type": "Other",
          "statusName": "Tempering"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-354946004\">Modifier_ChallengePeakBattle_BaseAbility_0002</a>",
          "execute": [
            {
              "eventTrigger": "Entity Created [Anyone]",
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
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"888777643\">Modifier_ChallengePeakBattle_BaseAbility_0002_02</a>[<span class=\"descriptionNumberColor\">Tempering</span>]",
                      "valuePerStack": {
                        "ChallengePeakBattle_0002_ADF_1": {
                          "operator": "Variables[0] (#ADF_1) || RETURN",
                          "displayLines": "#ADF_1",
                          "constants": [],
                          "variables": [
                            "#ADF_1"
                          ]
                        }
                      }
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
    "1912336050_ChallengePeakBattle_ExtremeAbility_0001": {
      "fileName": "1912336050_ChallengePeakBattle_ExtremeAbility_0001",
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
          "modifier": "<a class=\"gModGreen\" id=\"1108086776\">Modifier_ChallengePeakBattle_ExtremeAbility_0001</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__391969588\">Modifier_ChallengePeakBattle_ExtremeAbility_0001_03</a>[<span class=\"descriptionNumberColor\">Resilient Armor++</span>]",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "Being Toughness Bar Reset [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": null,
                    "compareType": ">",
                    "value2": 0,
                    "valueType": "Layer"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"391969588\">Modifier_ChallengePeakBattle_ExtremeAbility_0001_03</a>[<span class=\"descriptionNumberColor\">Resilient Armor++</span>]"
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
                  "variableName": "MDF_Layer",
                  "multiplier": 1
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (ChallengePeakBattle_0001_ADF_2) || Variables[1] (MDF_Layer) || MUL || RETURN",
                    "displayLines": "(ChallengePeakBattle_0001_ADF_2 * MDF_Layer)",
                    "constants": [],
                    "variables": [
                      "ChallengePeakBattle_0001_ADF_2",
                      "MDF_Layer"
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
                    "value1": null,
                    "compareType": "<=",
                    "value2": 0,
                    "valueType": "Layer"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"391969588\">Modifier_ChallengePeakBattle_ExtremeAbility_0001_03</a>[<span class=\"descriptionNumberColor\">Resilient Armor++</span>]"
                    }
                  ]
                }
              ]
            }
          ],
          "description": "Each stack reduces DMG taken by <span class=\"descriptionNumberColor\">ChallengePeakBattle_0001_ADF_2</span>. Loses 1 stack of \"Resilient Armor++\" each time Toughness is reduced to 0.",
          "type": "Other",
          "statusName": "Resilient Armor++",
          "addStacksPerTrigger": -1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__408747207\">Modifier_ChallengePeakBattle_ExtremeAbility_0001_02</a>",
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
                  "modifier": "<a class=\"gModGreen\" id=\"391969588\">Modifier_ChallengePeakBattle_ExtremeAbility_0001_03</a>[<span class=\"descriptionNumberColor\">Resilient Armor++</span>]",
                  "stackLimit": {
                    "operator": "Variables[0] (ChallengePeakBattle_0001_ADF_1) || RETURN",
                    "displayLines": "ChallengePeakBattle_0001_ADF_1",
                    "constants": [],
                    "variables": [
                      "ChallengePeakBattle_0001_ADF_1"
                    ]
                  },
                  "valuePerStack": {
                    "ChallengePeakBattle_0001_ADF_1": {
                      "operator": "Variables[0] (ChallengePeakBattle_0001_ADF_1) || RETURN",
                      "displayLines": "ChallengePeakBattle_0001_ADF_1",
                      "constants": [],
                      "variables": [
                        "ChallengePeakBattle_0001_ADF_1"
                      ]
                    },
                    "ChallengePeakBattle_0001_ADF_2": {
                      "operator": "Variables[0] (ChallengePeakBattle_0001_ADF_2) || RETURN",
                      "displayLines": "ChallengePeakBattle_0001_ADF_2",
                      "constants": [],
                      "variables": [
                        "ChallengePeakBattle_0001_ADF_2"
                      ]
                    }
                  },
                  "addStacksPerTrigger": {
                    "operator": "Variables[0] (ChallengePeakBattle_0001_ADF_1) || RETURN",
                    "displayLines": "ChallengePeakBattle_0001_ADF_1",
                    "constants": [],
                    "variables": [
                      "ChallengePeakBattle_0001_ADF_1"
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "Enemy HP Phased",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"391969588\">Modifier_ChallengePeakBattle_ExtremeAbility_0001_03</a>[<span class=\"descriptionNumberColor\">Resilient Armor++</span>]"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"391969588\">Modifier_ChallengePeakBattle_ExtremeAbility_0001_03</a>[<span class=\"descriptionNumberColor\">Resilient Armor++</span>]",
                  "stackLimit": {
                    "operator": "Variables[0] (ChallengePeakBattle_0001_ADF_1) || RETURN",
                    "displayLines": "ChallengePeakBattle_0001_ADF_1",
                    "constants": [],
                    "variables": [
                      "ChallengePeakBattle_0001_ADF_1"
                    ]
                  },
                  "valuePerStack": {
                    "ChallengePeakBattle_0001_ADF_1": {
                      "operator": "Variables[0] (ChallengePeakBattle_0001_ADF_1) || RETURN",
                      "displayLines": "ChallengePeakBattle_0001_ADF_1",
                      "constants": [],
                      "variables": [
                        "ChallengePeakBattle_0001_ADF_1"
                      ]
                    },
                    "ChallengePeakBattle_0001_ADF_2": {
                      "operator": "Variables[0] (ChallengePeakBattle_0001_ADF_2) || RETURN",
                      "displayLines": "ChallengePeakBattle_0001_ADF_2",
                      "constants": [],
                      "variables": [
                        "ChallengePeakBattle_0001_ADF_2"
                      ]
                    }
                  },
                  "addStacksPerTrigger": {
                    "operator": "Variables[0] (ChallengePeakBattle_0001_ADF_1) || RETURN",
                    "displayLines": "ChallengePeakBattle_0001_ADF_1",
                    "constants": [],
                    "variables": [
                      "ChallengePeakBattle_0001_ADF_1"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1108086776\">Modifier_ChallengePeakBattle_ExtremeAbility_0001</a>",
          "execute": [
            {
              "eventTrigger": "Entity Created [Anyone]",
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
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"408747207\">Modifier_ChallengePeakBattle_ExtremeAbility_0001_02</a>",
                      "valuePerStack": {
                        "ChallengePeakBattle_0001_ADF_1": {
                          "operator": "Variables[0] (#ADF_1) || RETURN",
                          "displayLines": "#ADF_1",
                          "constants": [],
                          "variables": [
                            "#ADF_1"
                          ]
                        },
                        "ChallengePeakBattle_0001_ADF_2": {
                          "operator": "Variables[0] (#ADF_2) || RETURN",
                          "displayLines": "#ADF_2",
                          "constants": [],
                          "variables": [
                            "#ADF_2"
                          ]
                        }
                      }
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
    "1912336050_ChallengePeakBattle_EnhancedAbility_0001": {
      "fileName": "1912336050_ChallengePeakBattle_EnhancedAbility_0001",
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
          "modifier": "<a class=\"gModGreen\" id=\"1732969362\">Modifier_ChallengePeakBattle_EnhancedAbility_0001</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-681980542\">Modifier_ChallengePeakBattle_EnhancedAbility_0001_03</a>[<span class=\"descriptionNumberColor\">Resilient Armor+</span>]",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "Being Toughness Bar Reset [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": null,
                    "compareType": ">",
                    "value2": 0,
                    "valueType": "Layer"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-681980542\">Modifier_ChallengePeakBattle_EnhancedAbility_0001_03</a>[<span class=\"descriptionNumberColor\">Resilient Armor+</span>]"
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
                  "variableName": "MDF_Layer",
                  "multiplier": 1
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (ChallengePeakBattle_0001_ADF_2) || Variables[1] (MDF_Layer) || MUL || RETURN",
                    "displayLines": "(ChallengePeakBattle_0001_ADF_2 * MDF_Layer)",
                    "constants": [],
                    "variables": [
                      "ChallengePeakBattle_0001_ADF_2",
                      "MDF_Layer"
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
                    "value1": null,
                    "compareType": "<=",
                    "value2": 0,
                    "valueType": "Layer"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-681980542\">Modifier_ChallengePeakBattle_EnhancedAbility_0001_03</a>[<span class=\"descriptionNumberColor\">Resilient Armor+</span>]"
                    }
                  ]
                }
              ]
            }
          ],
          "description": "Each stack reduces DMG taken by <span class=\"descriptionNumberColor\">ChallengePeakBattle_0001_ADF_2</span>. Loses 1 stack of \"Resilient Armor+\" each time Toughness is reduced to 0.",
          "type": "Other",
          "statusName": "Resilient Armor+",
          "addStacksPerTrigger": -1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-665202923\">Modifier_ChallengePeakBattle_EnhancedAbility_0001_02</a>",
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
                  "modifier": "<a class=\"gModGreen\" id=\"-681980542\">Modifier_ChallengePeakBattle_EnhancedAbility_0001_03</a>[<span class=\"descriptionNumberColor\">Resilient Armor+</span>]",
                  "stackLimit": {
                    "operator": "Variables[0] (ChallengePeakBattle_0001_ADF_1) || RETURN",
                    "displayLines": "ChallengePeakBattle_0001_ADF_1",
                    "constants": [],
                    "variables": [
                      "ChallengePeakBattle_0001_ADF_1"
                    ]
                  },
                  "valuePerStack": {
                    "ChallengePeakBattle_0001_ADF_1": {
                      "operator": "Variables[0] (ChallengePeakBattle_0001_ADF_1) || RETURN",
                      "displayLines": "ChallengePeakBattle_0001_ADF_1",
                      "constants": [],
                      "variables": [
                        "ChallengePeakBattle_0001_ADF_1"
                      ]
                    },
                    "ChallengePeakBattle_0001_ADF_2": {
                      "operator": "Variables[0] (ChallengePeakBattle_0001_ADF_2) || RETURN",
                      "displayLines": "ChallengePeakBattle_0001_ADF_2",
                      "constants": [],
                      "variables": [
                        "ChallengePeakBattle_0001_ADF_2"
                      ]
                    }
                  },
                  "addStacksPerTrigger": {
                    "operator": "Variables[0] (ChallengePeakBattle_0001_ADF_1) || RETURN",
                    "displayLines": "ChallengePeakBattle_0001_ADF_1",
                    "constants": [],
                    "variables": [
                      "ChallengePeakBattle_0001_ADF_1"
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "Enemy HP Phased",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-681980542\">Modifier_ChallengePeakBattle_EnhancedAbility_0001_03</a>[<span class=\"descriptionNumberColor\">Resilient Armor+</span>]"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-681980542\">Modifier_ChallengePeakBattle_EnhancedAbility_0001_03</a>[<span class=\"descriptionNumberColor\">Resilient Armor+</span>]",
                  "stackLimit": {
                    "operator": "Variables[0] (ChallengePeakBattle_0001_ADF_1) || RETURN",
                    "displayLines": "ChallengePeakBattle_0001_ADF_1",
                    "constants": [],
                    "variables": [
                      "ChallengePeakBattle_0001_ADF_1"
                    ]
                  },
                  "valuePerStack": {
                    "ChallengePeakBattle_0001_ADF_1": {
                      "operator": "Variables[0] (ChallengePeakBattle_0001_ADF_1) || RETURN",
                      "displayLines": "ChallengePeakBattle_0001_ADF_1",
                      "constants": [],
                      "variables": [
                        "ChallengePeakBattle_0001_ADF_1"
                      ]
                    },
                    "ChallengePeakBattle_0001_ADF_2": {
                      "operator": "Variables[0] (ChallengePeakBattle_0001_ADF_2) || RETURN",
                      "displayLines": "ChallengePeakBattle_0001_ADF_2",
                      "constants": [],
                      "variables": [
                        "ChallengePeakBattle_0001_ADF_2"
                      ]
                    }
                  },
                  "addStacksPerTrigger": {
                    "operator": "Variables[0] (ChallengePeakBattle_0001_ADF_1) || RETURN",
                    "displayLines": "ChallengePeakBattle_0001_ADF_1",
                    "constants": [],
                    "variables": [
                      "ChallengePeakBattle_0001_ADF_1"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1732969362\">Modifier_ChallengePeakBattle_EnhancedAbility_0001</a>",
          "execute": [
            {
              "eventTrigger": "Entity Created [Anyone]",
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
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-665202923\">Modifier_ChallengePeakBattle_EnhancedAbility_0001_02</a>",
                      "valuePerStack": {
                        "ChallengePeakBattle_0001_ADF_1": {
                          "operator": "Variables[0] (#ADF_1) || RETURN",
                          "displayLines": "#ADF_1",
                          "constants": [],
                          "variables": [
                            "#ADF_1"
                          ]
                        },
                        "ChallengePeakBattle_0001_ADF_2": {
                          "operator": "Variables[0] (#ADF_2) || RETURN",
                          "displayLines": "#ADF_2",
                          "constants": [],
                          "variables": [
                            "#ADF_2"
                          ]
                        }
                      }
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
    "1912336050_ChallengePeakBattle_BaseAbility_0001": {
      "fileName": "1912336050_ChallengePeakBattle_BaseAbility_0001",
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
          "modifier": "<a class=\"gModGreen\" id=\"-304613147\">Modifier_ChallengePeakBattle_BaseAbility_0001</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1656944184\">Modifier_ChallengePeakBattle_BaseAbility_0001_02</a>[<span class=\"descriptionNumberColor\">Resilient Armor</span>]",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "Being Toughness Bar Reset [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": null,
                    "compareType": ">",
                    "value2": 0,
                    "valueType": "Layer"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1656944184\">Modifier_ChallengePeakBattle_BaseAbility_0001_02</a>[<span class=\"descriptionNumberColor\">Resilient Armor</span>]"
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
                  "variableName": "MDF_Layer",
                  "multiplier": 1
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (ChallengePeakBattle_0001_ADF_2) || Variables[1] (MDF_Layer) || MUL || RETURN",
                    "displayLines": "(ChallengePeakBattle_0001_ADF_2 * MDF_Layer)",
                    "constants": [],
                    "variables": [
                      "ChallengePeakBattle_0001_ADF_2",
                      "MDF_Layer"
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
                    "value1": null,
                    "compareType": "<=",
                    "value2": 0,
                    "valueType": "Layer"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1656944184\">Modifier_ChallengePeakBattle_BaseAbility_0001_02</a>[<span class=\"descriptionNumberColor\">Resilient Armor</span>]"
                    }
                  ]
                }
              ]
            }
          ],
          "description": "Each stack reduces DMG taken by <span class=\"descriptionNumberColor\">ChallengePeakBattle_0001_ADF_2</span>. Loses 1 stack of \"Resilient Armor\" each time Toughness is reduced to 0.",
          "type": "Other",
          "statusName": "Resilient Armor",
          "addStacksPerTrigger": -1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-304613147\">Modifier_ChallengePeakBattle_BaseAbility_0001</a>",
          "execute": [
            {
              "eventTrigger": "Entity Created [Anyone]",
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
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1656944184\">Modifier_ChallengePeakBattle_BaseAbility_0001_02</a>[<span class=\"descriptionNumberColor\">Resilient Armor</span>]",
                      "stackLimit": {
                        "operator": "Variables[0] (#ADF_1) || RETURN",
                        "displayLines": "#ADF_1",
                        "constants": [],
                        "variables": [
                          "#ADF_1"
                        ]
                      },
                      "valuePerStack": {
                        "ChallengePeakBattle_0001_ADF_1": {
                          "operator": "Variables[0] (#ADF_1) || RETURN",
                          "displayLines": "#ADF_1",
                          "constants": [],
                          "variables": [
                            "#ADF_1"
                          ]
                        },
                        "ChallengePeakBattle_0001_ADF_2": {
                          "operator": "Variables[0] (#ADF_2) || RETURN",
                          "displayLines": "#ADF_2",
                          "constants": [],
                          "variables": [
                            "#ADF_2"
                          ]
                        }
                      },
                      "addStacksPerTrigger": {
                        "operator": "Variables[0] (#ADF_1) || RETURN",
                        "displayLines": "#ADF_1",
                        "constants": [],
                        "variables": [
                          "#ADF_1"
                        ]
                      }
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
    }
  }
}