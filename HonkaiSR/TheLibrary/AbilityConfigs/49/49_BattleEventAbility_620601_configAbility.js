const configAbility = {
  "fileName": "49_BattleEventAbility_620601",
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
      "modifier": "<a class=\"gModGreen\" id=\"1307837963\">Modifier_BattleEventAbility_620601</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"495863228\">RogueBattleevent123_StatusProbability</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1307837963\">Modifier_BattleEventAbility_620601</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "OverflowHeal_Flag",
              "value": 0
            },
            "Deleted bullshit",
            {
              "name": "UI Display Event",
              "popUpText": "Path Resonance: Abundance"
            },
            {
              "name": "Heal",
              "target": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "healPercent": {
                "operator": "Variables[0] (ADF_1) || RETURN",
                "displayLines": "ADF_1",
                "constants": [],
                "variables": [
                  "ADF_1"
                ]
              },
              "formula": "Heal from Target MaxHP"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1571353533\">RogueBattleevent123_HPAddRatio</a>[<span class=\"descriptionNumberColor\">Path Resonance: Abundance</span>]",
              "duration": {
                "operator": "Variables[0] (ADF_3) || RETURN",
                "displayLines": "ADF_3",
                "constants": [],
                "variables": [
                  "ADF_3"
                ]
              },
              "valuePerStack": {
                "MDF_1": {
                  "operator": "Variables[0] (ADF_2) || RETURN",
                  "displayLines": "ADF_2",
                  "constants": [],
                  "variables": [
                    "ADF_2"
                  ]
                }
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Level Entity}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1871531960\">StageAbility_612322_Modifier</a>"
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "searchRandom": true,
                  "ifTargetFound": [
                    {
                      "name": "Dispel Debuffs",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "huahai_count",
                      "value": 0
                    },
                    {
                      "name": "Define Custom Variable with Modifier Values",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "variableName": "huahai_count",
                      "modifierName": "<a class=\"gModGreen\" id=\"-369007412\">RogueBattleevent123_LevelUp2</a>[<span class=\"descriptionNumberColor\">Subduing Evils</span>]",
                      "multiplier": 1
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "huahai_count",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (ADF_7) || Variables[1] (ADF_4) || SUB || RETURN",
                          "displayLines": "(ADF_7 - ADF_4)",
                          "constants": [],
                          "variables": [
                            "ADF_7",
                            "ADF_4"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "huahai_count",
                          "value": {
                            "operator": "Variables[0] (ADF_7) || RETURN",
                            "displayLines": "ADF_7",
                            "constants": [],
                            "variables": [
                              "ADF_7"
                            ]
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "huahai_count",
                          "value": {
                            "operator": "Variables[0] (huahai_count) || Variables[1] (ADF_4) || ADD || RETURN",
                            "displayLines": "(huahai_count + ADF_4)",
                            "constants": [],
                            "variables": [
                              "huahai_count",
                              "ADF_4"
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-369007412\">RogueBattleevent123_LevelUp2</a>[<span class=\"descriptionNumberColor\">Subduing Evils</span>]",
                      "counter": {
                        "operator": "Variables[0] (huahai_count) || RETURN",
                        "displayLines": "huahai_count",
                        "constants": [],
                        "variables": [
                          "huahai_count"
                        ]
                      },
                      "duration": {
                        "operator": "Variables[0] (ADF_5) || RETURN",
                        "displayLines": "ADF_5",
                        "constants": [],
                        "variables": [
                          "ADF_5"
                        ]
                      },
                      "valuePerStack": {
                        "MDF_1": {
                          "operator": "Variables[0] (ADF_6) || RETURN",
                          "displayLines": "ADF_6",
                          "constants": [],
                          "variables": [
                            "ADF_6"
                          ]
                        },
                        "MDF_2": {
                          "operator": "Variables[0] (ADF_7) || RETURN",
                          "displayLines": "ADF_7",
                          "constants": [],
                          "variables": [
                            "ADF_7"
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "OverflowHeal_Flag",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Skill Points Modification",
                  "adjustmentValue": 1,
                  "adjustmentType": "+"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"831328805\">RogueBattleevent123_Levelup_4_1</a>[<span class=\"descriptionNumberColor\">Resonance Interplay: Mountain High</span>]",
                  "duration": {
                    "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__285) || RETURN",
                    "displayLines": "ENEMIES_OBJECT_UNUSED__285",
                    "constants": [],
                    "variables": [
                      "ENEMIES_OBJECT_UNUSED__285"
                    ]
                  },
                  "stackLimit": {
                    "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__287) || RETURN",
                    "displayLines": "ENEMIES_OBJECT_UNUSED__287",
                    "constants": [],
                    "variables": [
                      "ENEMIES_OBJECT_UNUSED__287"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_1": {
                      "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__286) || RETURN",
                      "displayLines": "ENEMIES_OBJECT_UNUSED__286",
                      "constants": [],
                      "variables": [
                        "ENEMIES_OBJECT_UNUSED__286"
                      ]
                    },
                    "MDF_MaxLayer": {
                      "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__287) || RETURN",
                      "displayLines": "ENEMIES_OBJECT_UNUSED__287",
                      "constants": [],
                      "variables": [
                        "ENEMIES_OBJECT_UNUSED__287"
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
                  "target": "{{Level Entity}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1256389149\">StageAbility_612325_Modifier</a>"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1572469434\">RogueBattleevent123_Levelup_5</a>[<span class=\"descriptionNumberColor\">Resonance Interplay: Nullifying Ardor</span>]",
                  "duration": {
                    "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__288) || RETURN",
                    "displayLines": "ENEMIES_OBJECT_UNUSED__288",
                    "constants": [],
                    "variables": [
                      "ENEMIES_OBJECT_UNUSED__288"
                    ]
                  },
                  "stackLimit": {
                    "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__289) || RETURN",
                    "displayLines": "ENEMIES_OBJECT_UNUSED__289",
                    "constants": [],
                    "variables": [
                      "ENEMIES_OBJECT_UNUSED__289"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_1": {
                      "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__290) || RETURN",
                      "displayLines": "ENEMIES_OBJECT_UNUSED__290",
                      "constants": [],
                      "variables": [
                        "ENEMIES_OBJECT_UNUSED__290"
                      ]
                    },
                    "MDF_2": {
                      "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__291) || RETURN",
                      "displayLines": "ENEMIES_OBJECT_UNUSED__291",
                      "constants": [],
                      "variables": [
                        "ENEMIES_OBJECT_UNUSED__291"
                      ]
                    },
                    "MDF_MaxLayer": {
                      "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__289) || RETURN",
                      "displayLines": "ENEMIES_OBJECT_UNUSED__289",
                      "constants": [],
                      "variables": [
                        "ENEMIES_OBJECT_UNUSED__289"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Heal Target Start [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Level Entity}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1694964411\">StageAbility_612323_Modifier</a>"
              },
              "passed": [
                {
                  "name": "Adjust Target Healing Stats",
                  "on": "Healer",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">HealingOutgoingSUM</span>&nbsp;",
                  "value": {
                    "operator": "Constants[0] (1) || INVERT || Variables[0] (ADF_8) || MUL || RETURN",
                    "displayLines": "(-1 * ADF_8)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "ADF_8"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Heal Target End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Level Entity}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1091609682\">StageAbility_612324_Modifier</a>"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Healing",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "OverflowHeal_Temp",
                  "healProperty": "Result_OverflowHealAmount"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "OverflowHeal_Temp",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "OverflowHeal_Flag",
                      "value": 1
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
                  "name": "Target Name",
                  "target": "{{Level Entity}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1454895897\">StageAbility_612327_Modifier</a>"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Healing",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "OverflowHeal_Temp",
                  "healProperty": "Result_OverflowHealAmount"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "OverflowHeal_Temp",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"2059475567\">RogueBattleevent123_Levelup7_1</a>[<span class=\"descriptionNumberColor\">Resonance Interplay: Destined Death</span>]",
                      "valuePerStack": {
                        "MDF_OverHeal": {
                          "operator": "Variables[0] (OverflowHeal_Temp) || RETURN",
                          "displayLines": "OverflowHeal_Temp",
                          "constants": [],
                          "variables": [
                            "OverflowHeal_Temp"
                          ]
                        },
                        "MDF_HealHPRatio": {
                          "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__292) || RETURN",
                          "displayLines": "ENEMIES_OBJECT_UNUSED__292",
                          "constants": [],
                          "variables": [
                            "ENEMIES_OBJECT_UNUSED__292"
                          ]
                        },
                        "MDF_MaxHealAmount": {
                          "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__293) || RETURN",
                          "displayLines": "ENEMIES_OBJECT_UNUSED__293",
                          "constants": [],
                          "variables": [
                            "ENEMIES_OBJECT_UNUSED__293"
                          ]
                        }
                      }
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
                  "name": "Target Name",
                  "target": "{{Level Entity}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1777765980\">StageAbility_612326_Modifier</a>"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Healing",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "OverflowHeal_Temp",
                  "healProperty": "Result_OverflowHealAmount"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "OverflowHeal_Temp",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1640486188\">RogueBattleevent123_Levelup6_1</a>[<span class=\"descriptionNumberColor\">Resonance Interplay: Fleeting Samadhi</span>]",
                      "duration": {
                        "operator": "Variables[0] (OverflowHeal_Flag) || RETURN",
                        "displayLines": "OverflowHeal_Flag",
                        "constants": [],
                        "variables": [
                          "OverflowHeal_Flag"
                        ]
                      },
                      "valuePerStack": {
                        "MDF_OverHeal": {
                          "operator": "Variables[0] (OverflowHeal_Temp) || RETURN",
                          "displayLines": "OverflowHeal_Temp",
                          "constants": [],
                          "variables": [
                            "OverflowHeal_Temp"
                          ]
                        },
                        "MDF_OverflowHealToDamageAddRatio": {
                          "operator": "Variables[0] (HealRatio_620601) || RETURN",
                          "displayLines": "HealRatio_620601",
                          "constants": [],
                          "variables": [
                            "HealRatio_620601"
                          ]
                        },
                        "MDF_MaxDamageAddRatio": {
                          "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__294) || RETURN",
                          "displayLines": "ENEMIES_OBJECT_UNUSED__294",
                          "constants": [],
                          "variables": [
                            "ENEMIES_OBJECT_UNUSED__294"
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
      "for": "<a class=\"gModGreen\" id=\"mod__495863228\">RogueBattleevent123_StatusProbability</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "_Hardlevel_StatusResistance",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">EffectRESSUM</span>&nbsp;"
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">EffectHitRate</span>&nbsp;",
              "value": {
                "operator": "Constants[0] (1) || Constants[0] (1) || Variables[0] (_Hardlevel_StatusResistance) || SUB || DIV || Constants[0] (1) || SUB || RETURN",
                "displayLines": "((1 / (1 - _Hardlevel_StatusResistance)) - 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "_Hardlevel_StatusResistance"
                ]
              }
            }
          ]
        }
      ]
    }
  ]
}