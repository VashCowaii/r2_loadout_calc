const compositeAbilityObject = {
  "fullCharacterName": "Pan-Cosmic Commercial Enterprise",
  "trimCharacterName": "PanCosmicCommercialEnterprise",
  "abilityList": [
    "PanCosmicCommercialEnterprise_Ability53031"
  ],
  "abilityObject": {
    "PanCosmicCommercialEnterprise_Ability53031": {
      "fileName": "PanCosmicCommercialEnterprise_Ability53031",
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
          "modifier": "<a class=\"gModGreen\" id=\"-412340916\">Relic_303_Main</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-43633495\">Relic_303_Sub</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_AttackAddedRatio",
                    "compareType": ">",
                    "value2": {
                      "operator": "Variables[0] (0.25) || RETURN",
                      "displayLines": "0.25",
                      "constants": [],
                      "variables": [
                        0.25
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Stack Target Stat Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
                      "value": {
                        "operator": "Variables[0] (0.25) || RETURN",
                        "displayLines": "0.25",
                        "constants": [],
                        "variables": [
                          0.25
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Stack Target Stat Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
                      "value": {
                        "operator": "Variables[0] (MDF_AttackAddedRatio) || RETURN",
                        "displayLines": "MDF_AttackAddedRatio",
                        "constants": [],
                        "variables": [
                          "MDF_AttackAddedRatio"
                        ]
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
          "for": "<a class=\"gModGreen\" id=\"mod__-412340916\">Relic_303_Main</a>",
          "modifierFlags": [
            "ListenBattleEventSkill"
          ],
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Ability Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "&nbsp;<span class=\"descriptionNumberColor\">EffectHitRate</span>&nbsp;",
                    "compareType": "=",
                    "value2": {
                      "operator": "Variables[0] (MDF_StatusProbability) || RETURN",
                      "displayLines": "MDF_StatusProbability",
                      "constants": [],
                      "variables": [
                        "MDF_StatusProbability"
                      ]
                    }
                  },
                  "failed": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "MDF_StatusProbability",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">EffectHitRate</span>&nbsp;"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-43633495\">Relic_303_Sub</a>",
                      "valuePerStack": {
                        "MDF_AttackAddedRatio": {
                          "operator": "Variables[0] (MDF_StatusProbability) || Variables[1] (0.25) || MUL || RETURN",
                          "displayLines": "(MDF_StatusProbability * 0.25)",
                          "constants": [],
                          "variables": [
                            "MDF_StatusProbability",
                            0.25
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Turn [Action-End Phase]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Ability Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "&nbsp;<span class=\"descriptionNumberColor\">EffectHitRate</span>&nbsp;",
                    "compareType": "=",
                    "value2": {
                      "operator": "Variables[0] (MDF_StatusProbability) || RETURN",
                      "displayLines": "MDF_StatusProbability",
                      "constants": [],
                      "variables": [
                        "MDF_StatusProbability"
                      ]
                    }
                  },
                  "failed": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "MDF_StatusProbability",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">EffectHitRate</span>&nbsp;"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-43633495\">Relic_303_Sub</a>",
                      "valuePerStack": {
                        "MDF_AttackAddedRatio": {
                          "operator": "Variables[0] (MDF_StatusProbability) || Variables[1] (0.25) || MUL || RETURN",
                          "displayLines": "(MDF_StatusProbability * 0.25)",
                          "constants": [],
                          "variables": [
                            "MDF_StatusProbability",
                            0.25
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Ability Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "&nbsp;<span class=\"descriptionNumberColor\">EffectHitRate</span>&nbsp;",
                    "compareType": "=",
                    "value2": {
                      "operator": "Variables[0] (MDF_StatusProbability) || RETURN",
                      "displayLines": "MDF_StatusProbability",
                      "constants": [],
                      "variables": [
                        "MDF_StatusProbability"
                      ]
                    }
                  },
                  "failed": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "MDF_StatusProbability",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">EffectHitRate</span>&nbsp;"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-43633495\">Relic_303_Sub</a>",
                      "valuePerStack": {
                        "MDF_AttackAddedRatio": {
                          "operator": "Variables[0] (MDF_StatusProbability) || Variables[1] (0.25) || MUL || RETURN",
                          "displayLines": "(MDF_StatusProbability * 0.25)",
                          "constants": [],
                          "variables": [
                            "MDF_StatusProbability",
                            0.25
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Anyone]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Ability Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "&nbsp;<span class=\"descriptionNumberColor\">EffectHitRate</span>&nbsp;",
                    "compareType": "=",
                    "value2": {
                      "operator": "Variables[0] (MDF_StatusProbability) || RETURN",
                      "displayLines": "MDF_StatusProbability",
                      "constants": [],
                      "variables": [
                        "MDF_StatusProbability"
                      ]
                    }
                  },
                  "failed": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "MDF_StatusProbability",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">EffectHitRate</span>&nbsp;"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-43633495\">Relic_303_Sub</a>",
                      "valuePerStack": {
                        "MDF_AttackAddedRatio": {
                          "operator": "Variables[0] (MDF_StatusProbability) || Variables[1] (0.25) || MUL || RETURN",
                          "displayLines": "(MDF_StatusProbability * 0.25)",
                          "constants": [],
                          "variables": [
                            "MDF_StatusProbability",
                            0.25
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
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_StatusProbability",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">EffectHitRate</span>&nbsp;"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-43633495\">Relic_303_Sub</a>",
                  "valuePerStack": {
                    "MDF_AttackAddedRatio": {
                      "operator": "Variables[0] (MDF_StatusProbability) || Variables[1] (0.25) || MUL || RETURN",
                      "displayLines": "(MDF_StatusProbability * 0.25)",
                      "constants": [],
                      "variables": [
                        "MDF_StatusProbability",
                        0.25
                      ]
                    }
                  }
                }
              ],
              "priorityLevel": -80
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ],
      "isLightcone": true,
      "isRelic": true,
      "desc": [
        "Increases the wearer's Effect Hit Rate by 10%. Meanwhile, the wearer's ATK increases by an amount that is equal to 25% of the current Effect Hit Rate, up to a maximum increase of 25%."
      ],
      "params": [
        [
          0.1,
          0.25,
          0.25
        ],
        []
      ]
    }
  },
  "fixedStats": {
    "2": {
      "EffectHitRate": 0.1
    },
    "4": {}
  },
  "isLightcone": true,
  "isRelic": true
}