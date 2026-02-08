const compositeAbilityObject = {
  "fullCharacterName": "Eternal Calculus",
  "trimCharacterName": "EternalCalculus",
  "abilityList": [
    "EternalCalculus_Ability24004"
  ],
  "fixedStats": {
    "1": {
      "ATK%": 0.08
    },
    "2": {
      "ATK%": 0.09
    },
    "3": {
      "ATK%": 0.1
    },
    "4": {
      "ATK%": 0.11
    },
    "5": {
      "ATK%": 0.12
    }
  },
  "abilityObject": {
    "EternalCalculus_Ability24004": {
      "fileName": "EternalCalculus_Ability24004",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1124656917\">LC_24004_Main</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__291841903\">LC_24004_SpeedAddRatio</a>[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "STAT_SpeedUp"
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_1) || RETURN",
                    "displayLines": "MDF_1",
                    "constants": [],
                    "variables": [
                      "MDF_1"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "Increases SPD by <span class=\"descriptionNumberColor\">MDF_1</span>.",
          "type": "Buff",
          "effectName": "SPD Boost",
          "statusName": "SPD Boost"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1892511260\">LC_24004_AttackAddRatio</a>[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_1) || RETURN",
                    "displayLines": "MDF_1",
                    "constants": [],
                    "variables": [
                      "MDF_1"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "ATK increases by <span class=\"descriptionNumberColor\">MDF_1</span>, lasting until after the next attack.",
          "type": "Buff",
          "effectName": "ATK Boost",
          "statusName": "ATK Boost"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1124656917\">LC_24004_Main</a>",
          "execute": [
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1892511260\">LC_24004_AttackAddRatio</a>[<span class=\"descriptionNumberColor\">ATK Boost</span>]"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "AttackNum_24004",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable with Attack Targets",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "AttackNum_24004"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1892511260\">LC_24004_AttackAddRatio</a>[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
                  "valuePerStack": {
                    "MDF_1": {
                      "operator": "Variables[0] (AttackNum_24004) || Variables[1] (0.04) || MUL || RETURN",
                      "displayLines": "(AttackNum_24004 * 0.04)",
                      "constants": [],
                      "variables": [
                        "AttackNum_24004",
                        0.04
                      ]
                    }
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "AttackNum_24004",
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
                      "modifier": "<a class=\"gModGreen\" id=\"291841903\">LC_24004_SpeedAddRatio</a>[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
                      "duration": {
                        "operator": "Variables[0] (1) || RETURN",
                        "displayLines": "1",
                        "constants": [],
                        "variables": [
                          1
                        ]
                      },
                      "valuePerStack": {
                        "MDF_1": {
                          "operator": "Variables[0] (0.08) || RETURN",
                          "displayLines": "0.08",
                          "constants": [],
                          "variables": [
                            0.08
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
      ],
      "isLightcone": true,
      "desc": "Increases the wearer's ATK by #1[i]%. After using an attack, for each enemy target hit, additionally increases ATK by #2[i]%. This effect can stack up to 5 times and last until the next attack. If there are #3[i] or more enemy targets hit, this unit's SPD increases by #4[i]%, lasting for #5[i] turn(s).",
      "params": [
        [
          0.08,
          0.04,
          3,
          0.08,
          1
        ],
        [
          0.09,
          0.05,
          3,
          0.1,
          1
        ],
        [
          0.1,
          0.06,
          3,
          0.12,
          1
        ],
        [
          0.11,
          0.07,
          3,
          0.14,
          1
        ],
        [
          0.12,
          0.08,
          3,
          0.16,
          1
        ]
      ]
    }
  },
  "isLightcone": true
}