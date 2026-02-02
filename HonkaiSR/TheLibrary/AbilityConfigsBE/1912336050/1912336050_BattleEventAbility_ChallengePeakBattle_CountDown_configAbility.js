const configAbility = {
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
      "modifier": "Modifier_BattleEventAbility_ChallengePeakBattle_CountDown",
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
      "for": "Modifier_BattleEventAbility_ChallengePeakBattle_Rage[<span class=\"descriptionNumberColor\">Middlegame Mayhem</span>]",
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
      "for": "Modifier_BattleEventAbility_ChallengePeakBattle_CountDown",
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
                  "modifier": "Modifier_BattleEventAbility_ChallengePeakBattle_Rage[<span class=\"descriptionNumberColor\">Middlegame Mayhem</span>]",
                  "valuePerStack": {
                    "BE_ChallengePeakBattle_Rage_AllDamageTypeAddedRatio": {
                      "operator": "Variables[0] (RageTime) || RETURN",
                      "displayLines": "RageTime",
                      "constants": [],
                      "variables": [
                        "RageTime"
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
                  "modifier": "Modifier_BattleEventAbility_ChallengePeakBattle_Rage[<span class=\"descriptionNumberColor\">Middlegame Mayhem</span>]",
                  "valuePerStack": {
                    "BE_ChallengePeakBattle_Rage_AllDamageTypeAddedRatio": {
                      "operator": "Variables[0] (RageTime) || RETURN",
                      "displayLines": "RageTime",
                      "constants": [],
                      "variables": [
                        "RageTime"
                      ]
                    }
                  },
                  "addStacksPerTrigger": {
                    "operator": "Variables[0] (BattleEventTurnLeftParam3) || RETURN",
                    "displayLines": "BattleEventTurnLeftParam3",
                    "constants": [],
                    "variables": [
                      "BattleEventTurnLeftParam3"
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
                  "multi": 2
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
}