const compositeAbilityObject = {
  "fullCharacterName": "Tengoku@Livestream",
  "trimCharacterName": "TengokuLivestream",
  "abilityList": [
    "TengokuLivestream_Ability53241"
  ],
  "abilityObject": {
    "TengokuLivestream_Ability53241": {
      "fileName": "TengokuLivestream_Ability53241",
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
          "modifier": "Relic_324_Main"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Relic_324_Sub[<span class=\"descriptionNumberColor\">Tengoku@Livestream</span>]",
          "stackType": "ReplaceByCaster",
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
                    "operator": "Variables[0] (0.32) || RETURN",
                    "displayLines": "0.32",
                    "constants": [],
                    "variables": [
                      0.32
                    ]
                  }
                }
              ]
            }
          ],
          "description": "CRIT DMG increases by <span class=\"descriptionNumberColor\">#SkillRelic_324_2_P3_CriticalDamage</span>.",
          "type": "Buff",
          "effectName": "CRIT DMG Boost",
          "statusName": "Tengoku@Livestream"
        },
        {
          "name": "Modifier Construction",
          "for": "Relic_324_Main",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_PhaseFlag",
                  "value": 1
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_BPCount_Sum",
                  "value": 0
                }
              ]
            },
            {
              "eventTrigger": "Turn [Action-End Phase]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_PhaseFlag",
                  "value": 0
                }
              ]
            },
            {
              "eventTrigger": "Skill Point Changes",
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
                        }
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "ParameterValue",
                        "compareType": "<",
                        "value2": 0
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "_PhaseFlag",
                        "compareType": ">=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with SkillPoint Changes",
                      "variableName": "_BPCount"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_BPCount_Sum",
                      "value": {
                        "operator": "Variables[0] (_BPCount_Sum) || Variables[1] (ABS) || Variables[2] (_BPCount) || PARAM_1 || FUNCTION || ADD || RETURN",
                        "displayLines": "(_BPCount_Sum + &nbsp;<span class=\"descriptionFunctionColor\">ABS</span>(_BPCount))",
                        "constants": [],
                        "variables": [
                          "_BPCount_Sum",
                          "ABS",
                          "_BPCount"
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "_BPCount_Sum",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (3) || RETURN",
                          "displayLines": "3",
                          "constants": [],
                          "variables": [
                            3
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "Relic_324_Sub[<span class=\"descriptionNumberColor\">Tengoku@Livestream</span>]",
                          "duration": {
                            "operator": "Variables[0] (3) || RETURN",
                            "displayLines": "3",
                            "constants": [],
                            "variables": [
                              3
                            ]
                          }
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_PhaseFlag",
                          "value": 0
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
      "isLightcone": true,
      "isRelic": true,
      "desc": [
        "Increases the wearer's CRIT DMG by 16%. If 3 or more Skill Points are consumed in the same turn, additionally increases the wearer's CRIT DMG by 32%, lasting for 3 turns."
      ],
      "params": [
        [
          0.16,
          3,
          0.32,
          3
        ],
        []
      ]
    }
  },
  "fixedStats": {
    "2": {
      "CritDamageBase": 0.16
    },
    "4": {}
  },
  "isLightcone": true,
  "isRelic": true
}