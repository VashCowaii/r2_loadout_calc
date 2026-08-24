const entityPageType = "lc"
const compositeAbilityObject = {
  "fullCharacterName": "I Am As You Behold",
  "trimCharacterName": "IAmAsYouBehold",
  "abilityList": [
    "IAmAsYouBehold_Ability23062"
  ],
  "fixedStats": {
    "1": {
      "ATK%": 0.18,
      "EnergyRegenRate": 0.1
    },
    "2": {
      "ATK%": 0.21,
      "EnergyRegenRate": 0.125
    },
    "3": {
      "ATK%": 0.24,
      "EnergyRegenRate": 0.15
    },
    "4": {
      "ATK%": 0.27,
      "EnergyRegenRate": 0.175
    },
    "5": {
      "ATK%": 0.3,
      "EnergyRegenRate": 0.2
    }
  },
  "abilityObject": {
    "IAmAsYouBehold_Ability23062": {
      "fileName": "IAmAsYouBehold_Ability23062",
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
          "modifier": "<a class=\"gModGreen\" id=\"1888433166\">LC_23062_Main</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1000728603\">LC_23062_Sub_Team</a>[<span class=\"descriptionNumberColor\">King's Entertainment</span>]",
          "stackType": "Replace",
          "description": "CRIT DMG increases by <span class=\"descriptionNumberColor\">MDF_TeamCriticalDamageBaseAdd</span>.",
          "type": "Buff",
          "effectName": "King's Entertainment",
          "statusName": "King's Entertainment",
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
                    "operator": "Variables[0] (MDF_TeamCriticalDamageBaseAdd) || RETURN",
                    "displayLines": "MDF_TeamCriticalDamageBaseAdd",
                    "constants": [],
                    "variables": [
                      "MDF_TeamCriticalDamageBaseAdd"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__338159187\">LC_23062_Sub</a>[<span class=\"descriptionNumberColor\">King's Entertainment</span>]",
          "stackType": "ReplaceByCaster",
          "description": "All allies' CRIT DMG increases.",
          "type": "Buff",
          "effectName": "King's Entertainment",
          "statusName": "King's Entertainment",
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1000728603\">LC_23062_Sub_Team</a>[<span class=\"descriptionNumberColor\">King's Entertainment</span>]",
              "haloStatus": true,
              "valuePerStack": {
                "MDF_TeamCriticalDamageBaseAdd": {
                  "operator": "Variables[0] (MDF_TeamCriticalDamageBaseAdd) || RETURN",
                  "displayLines": "MDF_TeamCriticalDamageBaseAdd",
                  "constants": [],
                  "variables": [
                    "MDF_TeamCriticalDamageBaseAdd"
                  ]
                }
              }
            }
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1000728603\">LC_23062_Sub_Team</a>[<span class=\"descriptionNumberColor\">King's Entertainment</span>]",
                  "onlyRemoveOwnersInstance": true
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "When Losing Modifier [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"-1000728603\">LC_23062_Sub_Team</a>[<span class=\"descriptionNumberColor\">King's Entertainment</span>]"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1000728603\">LC_23062_Sub_Team</a>[<span class=\"descriptionNumberColor\">King's Entertainment</span>]",
                      "valuePerStack": {
                        "MDF_TeamCriticalDamageBaseAdd": {
                          "operator": "Variables[0] (MDF_TeamCriticalDamageBaseAdd) || RETURN",
                          "displayLines": "MDF_TeamCriticalDamageBaseAdd",
                          "constants": [],
                          "variables": [
                            "MDF_TeamCriticalDamageBaseAdd"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-607118875\">LC_23062_UltraDamageUp_once</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Ultimate"
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": {
                          "operator": "Variables[0] (0.0019999999) || Variables[1] (MDF_NeedSP) || MUL || RETURN",
                          "displayLines": "(0.0019999999 * MDF_NeedSP)",
                          "constants": [],
                          "variables": [
                            0.0019999999,
                            "MDF_NeedSP"
                          ]
                        },
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (0.72) || RETURN",
                          "displayLines": "0.72",
                          "constants": [],
                          "variables": [
                            0.72
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Adjust Target Stats",
                          "modifiedValuesArray": [
                            {
                              "on": "Attacker",
                              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                              "value": "0.72"
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "Adjust Target Stats",
                          "modifiedValuesArray": [
                            {
                              "on": "Attacker",
                              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                              "value": "(0.0019999999 * MDF_NeedSP)"
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
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Type",
                    "skillType": "Ultimate"
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__717798427\">LC_23062_UltraDamageUp</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Ability Cost Deduction [Owner]: Start[?]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Type",
                    "skillType": "Ultimate"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_UltraSkill",
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
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Skill Type",
                        "skillType": "Ultimate"
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
                      "modifier": "<a class=\"gModGreen\" id=\"-607118875\">LC_23062_UltraDamageUp_once</a>",
                      "valuePerStack": {
                        "MDF_NeedSP": {
                          "operator": "Variables[0] (MDF_NeedSP) || RETURN",
                          "displayLines": "MDF_NeedSP",
                          "constants": [],
                          "variables": [
                            "MDF_NeedSP"
                          ]
                        }
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_UltraSkill",
                      "value": 0
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_NeedSP",
                      "value": 0
                    }
                  ]
                }
              ]
            }
          ],
          "abilityValueChange": [
            {
              "name": "Ability Value Changes",
              "variableName": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrent</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "whenValueChanges": [
                    {
                      "name": "Define Custom Variable with Changes to Stats",
                      "variableName": "MDF_TempSPChange"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Array Condition",
                            "arrayToCheck": [
                              "ByUseSkill"
                            ]
                          },
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "MDF_TempSPChange",
                            "compareType": "<",
                            "value2": 0
                          },
                          {
                            "name": "Compare: Ability Value",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "&nbsp;<span class=\"descriptionNumberColor\">MaxSpecialEnergy</span>&nbsp;",
                            "compareType": ">",
                            "value2": 0,
                            "invertCondition": true
                          },
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "MDF_UltraSkill",
                            "compareType": "=",
                            "value2": 1
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_NeedSP",
                          "value": {
                            "operator": "Variables[0] (MDF_TempSPChange) || INVERT || RETURN",
                            "displayLines": "-MDF_TempSPChange",
                            "constants": [],
                            "variables": [
                              "MDF_TempSPChange"
                            ]
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
          "for": "<a class=\"gModGreen\" id=\"mod__1888433166\">LC_23062_Main</a>",
          "stackType": "ReplaceByCaster",
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
                  "modifier": "<a class=\"gModGreen\" id=\"717798427\">LC_23062_UltraDamageUp</a>"
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
                      "modifier": "<a class=\"gModGreen\" id=\"338159187\">LC_23062_Sub</a>[<span class=\"descriptionNumberColor\">King's Entertainment</span>]",
                      "duration": {
                        "operator": "Variables[0] (3) || RETURN",
                        "displayLines": "3",
                        "constants": [],
                        "variables": [
                          3
                        ]
                      },
                      "valuePerStack": {
                        "MDF_TeamCriticalDamageBaseAdd": {
                          "operator": "Variables[0] (0.24) || RETURN",
                          "displayLines": "0.24",
                          "constants": [],
                          "variables": [
                            0.24
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
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Wave Count",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"338159187\">LC_23062_Sub</a>[<span class=\"descriptionNumberColor\">King's Entertainment</span>]",
                      "duration": {
                        "operator": "Variables[0] (3) || RETURN",
                        "displayLines": "3",
                        "constants": [],
                        "variables": [
                          3
                        ]
                      },
                      "valuePerStack": {
                        "MDF_TeamCriticalDamageBaseAdd": {
                          "operator": "Variables[0] (0.24) || RETURN",
                          "displayLines": "0.24",
                          "constants": [],
                          "variables": [
                            0.24
                          ]
                        }
                      }
                    }
                  ]
                }
              ],
              "priorityLevel": -80
            }
          ]
        }
      ],
      "isLightcone": true,
      "desc": "Increases the wearer's ATK by #1[i]% and Energy Regeneration Rate by #2[f1]%. When the wearer uses Ultimate, for every 1 Energy consumed, increases the Ultimate DMG dealt this time by #3[f2]%, up to a max increase of #6[i]%. When the wearer enters combat or uses Ultimate, the wearer gains \"King's Entertainment,\" lasting for #4[i] turn(s). While the wearer holds \"King's Entertainment,\" increases all allies' CRIT DMG by #5[i]%. Effects of the same type cannot stack.",
      "params": [
        [
          0.18,
          0.1,
          0.0019999999,
          3,
          0.24,
          0.72
        ],
        [
          0.21,
          0.125,
          0.0025000002,
          3,
          0.3,
          0.9
        ],
        [
          0.24,
          0.15,
          0.0029999998,
          3,
          0.36,
          1.08
        ],
        [
          0.27,
          0.175,
          0.0035,
          3,
          0.42,
          1.26
        ],
        [
          0.3,
          0.2,
          0.0039999997,
          3,
          0.48,
          1.44
        ]
      ]
    }
  },
  "isLightcone": true
}