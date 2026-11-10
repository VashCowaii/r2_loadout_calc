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
      "modifier": "<a class=\"gModGreen\" id=\"-1148970670\">Modifier_BattleEventAbility_ChallengePeakBattle_CountDown</a>",
      "valuePerStack": {
        "BattleEventTurnLeftParam": {
          "displayLines": "#BattleEvent_P2_ADF"
        },
        "BattleEventTurnLeftParam2": {
          "displayLines": "#BattleEvent_P3_ADF"
        },
        "BattleEventTurnLeftParam3": {
          "displayLines": "#BattleEvent_P4_ADF"
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
      "description": "Increases the final DMG dealt by each stack by <span class=\"descriptionNumberColor\">BE_ChallengePeakBattle_Rage_AllDamageTypeAddedRatio</span>.",
      "type": "Other",
      "statusName": "Middlegame Mayhem",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">BaseDMGMultiplier</span>&nbsp;",
              "value": {
                "displayLines": "(1 + (BE_ChallengePeakBattle_Rage_AllDamageTypeAddedRatio * MDF_Layer))"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1148970670\">Modifier_BattleEventAbility_ChallengePeakBattle_CountDown</a>",
      "modifierFlags": [
        "STAT_TurnCountAccumulator"
      ],
      "stackData": [
        "BattleEventTurnLeftParam",
        "BattleEventTurnLeftParam2",
        "BattleEventTurnLeftParam3"
      ],
      "execute": [
        {
          "eventTrigger": "Turn [Owner]: Pre-action Phase",
          "priorityLevel": -12,
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
                      "displayLines": "(BattleEventTurnLeftParam2 + 1)"
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
                "Show VS. Countdown Effect"
              ]
            },
            {
              "name": "Set Warning Countdown",
              "countdownTime": {
                "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MAX</span>((BattleEventTurnLeftParam - 1), 0)"
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
                      "displayLines": "BattleEventTurnLeftParam2"
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
                      "displayLines": "BattleEventTurnLeftParam3"
                    }
                  },
                  "addStacksPerTrigger": 1
                }
              ]
            }
          ]
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
          "eventTrigger": "Turn [Anyone]: End",
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
                  "target": {
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
                  "target": {
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
                      "displayLines": "BattleEventTurnLeftParam3"
                    }
                  },
                  "addStacksPerTrigger": {
                    "displayLines": "RageTime"
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
                  "countdownTime": {
                    "displayLines": "(BattleEventTurnLeftParam - 1)"
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