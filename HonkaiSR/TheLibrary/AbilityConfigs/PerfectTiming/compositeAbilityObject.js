const compositeAbilityObject = {
  "fullCharacterName": "Perfect Timing",
  "trimCharacterName": "PerfectTiming",
  "abilityList": [
    "PerfectTiming_Ability21014"
  ],
  "fixedStats": {
    "1": {
      "EffectRES": 0.16
    },
    "2": {
      "EffectRES": 0.2
    },
    "3": {
      "EffectRES": 0.24
    },
    "4": {
      "EffectRES": 0.28
    },
    "5": {
      "EffectRES": 0.32
    }
  },
  "abilityObject": {
    "PerfectTiming_Ability21014": {
      "fileName": "PerfectTiming_Ability21014",
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
          "modifier": "LC_21014_Main"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "LC_21014_Sub",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_HealRatio",
                    "compareType": ">",
                    "value2": {
                      "operator": "Variables[0] (0.15) || RETURN",
                      "displayLines": "0.15",
                      "constants": [],
                      "variables": [
                        0.15
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_HealRatio",
                      "value": {
                        "operator": "Variables[0] (0.15) || RETURN",
                        "displayLines": "0.15",
                        "constants": [],
                        "variables": [
                          0.15
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">HealingOutgoingConverted</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_HealRatio) || RETURN",
                    "displayLines": "MDF_HealRatio",
                    "constants": [],
                    "variables": [
                      "MDF_HealRatio"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "LC_21014_Main",
          "modifierFlags": [
            "ListenBattleEventSkill"
          ],
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "CasterStatusResistance",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">EffectRES</span>&nbsp;"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "LC_21014_Sub",
                  "valuePerStack": {
                    "MDF_HealRatio": {
                      "operator": "Variables[0] (CasterStatusResistance) || Variables[1] (0.33) || MUL || RETURN",
                      "displayLines": "(CasterStatusResistance * 0.33)",
                      "constants": [],
                      "variables": [
                        "CasterStatusResistance",
                        0.33
                      ]
                    }
                  }
                }
              ],
              "priorityLevel": -80
            }
          ],
          "abilityValueChange": [
            {
              "name": "Ability Value Changes",
              "variableName": "&nbsp;<span class=\"descriptionNumberColor\">EffectRES</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "whenValueChanges": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "CasterStatusResistance",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">EffectRES</span>&nbsp;"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "LC_21014_Sub",
                      "valuePerStack": {
                        "MDF_HealRatio": {
                          "operator": "Variables[0] (CasterStatusResistance) || Variables[1] (0.33) || MUL || RETURN",
                          "displayLines": "(CasterStatusResistance * 0.33)",
                          "constants": [],
                          "variables": [
                            "CasterStatusResistance",
                            0.33
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
      "desc": "Increases the wearer's Effect RES by #1[i]% and increases Outgoing Healing by an amount that is equal to #2[i]% of Effect RES. Outgoing Healing can be increased this way by up to #3[i]%.",
      "params": [
        [
          0.16,
          0.33,
          0.15
        ],
        [
          0.2,
          0.36,
          0.18
        ],
        [
          0.24,
          0.39,
          0.21
        ],
        [
          0.28,
          0.42,
          0.24
        ],
        [
          0.32,
          0.45,
          0.27
        ]
      ]
    }
  },
  "isLightcone": true
}