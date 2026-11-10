const entityPageType = "misc"
const compositeAbilityObject = {
  "fullCharacterName": 20020,
  "trimCharacterName": 20020,
  "abilityList": [
    "20020_Modifiers",
    "20020_BattleEventAbility_Monster_W4_Manta_BattleEvent",
    "20020_Monster_W4_Manta_Passive_Insert",
    "20020_BattleEventAbility_Monster_W4_Manta_BattleEventFinish"
  ],
  "abilityObject": {
    "20020_Modifiers": {
      "fileName": "20020_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__1846479482\">W4_Manta_BattleScore2</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Achievement",
                  "relatedAchievements": [
                    {
                      "title": "Prevention Is the Best Medicine",
                      "desc": "When allies are inflicted with \"Black Tide Fever,\" remove the state before its negative effects trigger",
                      "rarity": "Low"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1829701863\">W4_Manta_BattleScore1</a>",
          "execute": [
            {
              "eventTrigger": "Action Choice Window [Owner]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "Turn [Owner]: Action-End Phase",
              "execute": [
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "Achievement",
                  "relatedAchievements": [
                    {
                      "title": "Revelry Comes to a Halt",
                      "desc": "While the \"Lady of Crashing Waves\" is in the \"Revel in Destruction\" state, triggers her action advance effect and defeats her before this action",
                      "rarity": "Low"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1447914838\">Enemy_W4_Manta_Virus_Monster</a>[<span class=\"descriptionNumberColor\">Black Tide Fever</span>]",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "modifierFlags": [
            "STAT_DOT",
            "CanBeAddedToServant",
            "CanListenServantCallback"
          ],
          "useEntitySnapshot": true,
          "description": "<span class=\"descriptionNumberColor\">MDF_TotalDamageValue</span> DMG is taken in the form of DoT over a certain number of turns. Wind Shear, Burn, Shock, and Bleed DoTs are received at the start of every turn. Immediately dispelled for this unit when \"Revel in Destruction\" state ends, negating this DoT.",
          "type": "Debuff",
          "effectName": "Black Tide Fever",
          "statusName": "Black Tide Fever",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "UI Display Event (On Entity)",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "popUpText": "\"Black Tide Fever\" dispelled"
                }
              ]
            },
            {
              "eventTrigger": "Turn [Owner]: Pre-action Phase",
              "priorityLevel": 90,
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "value": 1,
                  "variableName": "BattleScore_Damage"
                },
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
                        "modifier": "<a class=\"gModGreen\" id=\"1261127743\">Enemy_W2_Mecha02_02_TimeSlow</a>"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1670308834\">Enemy_W4_Manta_TimeSlow</a>"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Fire",
                        "DamageFlat": {
                          "displayLines": "((MDF_TotalDamageValue * MDF_TriggerRatio) / 4)"
                        },
                        "dmgFormulaFinal": "Converted DMG Base",
                        "Toughness": null,
                        "Tags": [
                          "Manta's Virus"
                        ],
                        "attackType": "DOT",
                        "hitOwner": {
                          "name": "Target Name",
                          "target": "{{Player Teams}}"
                        }
                      }
                    },
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Wind",
                        "DamageFlat": {
                          "displayLines": "((MDF_TotalDamageValue * MDF_TriggerRatio) / 4)"
                        },
                        "dmgFormulaFinal": "Converted DMG Base",
                        "Toughness": null,
                        "Tags": [
                          "Manta's Virus"
                        ],
                        "attackType": "DOT",
                        "hitOwner": {
                          "name": "Target Name",
                          "target": "{{Player Teams}}"
                        }
                      }
                    },
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Thunder",
                        "DamageFlat": {
                          "displayLines": "((MDF_TotalDamageValue * MDF_TriggerRatio) / 4)"
                        },
                        "dmgFormulaFinal": "Converted DMG Base",
                        "Toughness": null,
                        "Tags": [
                          "Manta's Virus"
                        ],
                        "attackType": "DOT",
                        "hitOwner": {
                          "name": "Target Name",
                          "target": "{{Player Teams}}"
                        }
                      }
                    },
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Physical",
                        "DamageFlat": {
                          "displayLines": "((MDF_TotalDamageValue * MDF_TriggerRatio) / 4)"
                        },
                        "dmgFormulaFinal": "Converted DMG Base",
                        "Toughness": null,
                        "Tags": [
                          "Manta's Virus"
                        ],
                        "attackType": "DOT",
                        "hitOwner": {
                          "name": "Target Name",
                          "target": "{{Player Teams}}"
                        }
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Fire",
                        "DamageFlat": {
                          "displayLines": "((MDF_TotalDamageValue * MDF_TriggerRatio) / 4)"
                        },
                        "dmgFormulaFinal": "Converted DMG Base",
                        "Toughness": null,
                        "Tags": [
                          "Manta's Virus"
                        ],
                        "attackType": "DOT",
                        "hitOwner": {
                          "name": "Target Name",
                          "target": "{{Player Teams}}"
                        }
                      }
                    },
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Wind",
                        "DamageFlat": {
                          "displayLines": "((MDF_TotalDamageValue * MDF_TriggerRatio) / 4)"
                        },
                        "dmgFormulaFinal": "Converted DMG Base",
                        "Toughness": null,
                        "Tags": [
                          "Manta's Virus"
                        ],
                        "attackType": "DOT",
                        "hitOwner": {
                          "name": "Target Name",
                          "target": "{{Player Teams}}"
                        }
                      }
                    },
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Thunder",
                        "DamageFlat": {
                          "displayLines": "((MDF_TotalDamageValue * MDF_TriggerRatio) / 4)"
                        },
                        "dmgFormulaFinal": "Converted DMG Base",
                        "Toughness": null,
                        "Tags": [
                          "Manta's Virus"
                        ],
                        "attackType": "DOT",
                        "hitOwner": {
                          "name": "Target Name",
                          "target": "{{Player Teams}}"
                        }
                      }
                    },
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Physical",
                        "DamageFlat": {
                          "displayLines": "((MDF_TotalDamageValue * MDF_TriggerRatio) / 4)"
                        },
                        "dmgFormulaFinal": "Converted DMG Base",
                        "Toughness": null,
                        "Tags": [
                          "Manta's Virus"
                        ],
                        "attackType": "DOT",
                        "hitOwner": {
                          "name": "Target Name",
                          "target": "{{Player Teams}}"
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "Custom Event",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "value": 1,
                  "variableName": "BattleScore_Damage"
                },
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
                        "modifier": "<a class=\"gModGreen\" id=\"1261127743\">Enemy_W2_Mecha02_02_TimeSlow</a>"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1670308834\">Enemy_W4_Manta_TimeSlow</a>"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Fire",
                        "DamageFlat": {
                          "displayLines": "((MDF_TotalDamageValue * MDF_TriggerRatio) / 4)"
                        },
                        "dmgFormulaFinal": "Converted DMG Base",
                        "Toughness": null,
                        "Tags": [
                          "Manta's Virus"
                        ],
                        "attackType": "DOT",
                        "hitOwner": {
                          "name": "Target Name",
                          "target": "{{Player Teams}}"
                        }
                      }
                    },
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Wind",
                        "DamageFlat": {
                          "displayLines": "((MDF_TotalDamageValue * MDF_TriggerRatio) / 4)"
                        },
                        "dmgFormulaFinal": "Converted DMG Base",
                        "Toughness": null,
                        "Tags": [
                          "Manta's Virus"
                        ],
                        "attackType": "DOT",
                        "hitOwner": {
                          "name": "Target Name",
                          "target": "{{Player Teams}}"
                        }
                      }
                    },
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Thunder",
                        "DamageFlat": {
                          "displayLines": "((MDF_TotalDamageValue * MDF_TriggerRatio) / 4)"
                        },
                        "dmgFormulaFinal": "Converted DMG Base",
                        "Toughness": null,
                        "Tags": [
                          "Manta's Virus"
                        ],
                        "attackType": "DOT",
                        "hitOwner": {
                          "name": "Target Name",
                          "target": "{{Player Teams}}"
                        }
                      }
                    },
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Physical",
                        "DamageFlat": {
                          "displayLines": "((MDF_TotalDamageValue * MDF_TriggerRatio) / 4)"
                        },
                        "dmgFormulaFinal": "Converted DMG Base",
                        "Toughness": null,
                        "Tags": [
                          "Manta's Virus"
                        ],
                        "attackType": "DOT",
                        "hitOwner": {
                          "name": "Target Name",
                          "target": "{{Player Teams}}"
                        }
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Fire",
                        "DamageFlat": {
                          "displayLines": "((DOT_TriggerRatio * MDF_TotalDamageValue) / 4)"
                        },
                        "dmgFormulaFinal": "Converted DMG Base",
                        "Toughness": null,
                        "Tags": [
                          "Manta's Virus"
                        ],
                        "attackType": "DOT",
                        "hitOwner": {
                          "name": "Target Name",
                          "target": "{{Player Teams}}"
                        }
                      }
                    },
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Thunder",
                        "DamageFlat": {
                          "displayLines": "((DOT_TriggerRatio * MDF_TotalDamageValue) / 4)"
                        },
                        "dmgFormulaFinal": "Converted DMG Base",
                        "Toughness": null,
                        "Tags": [
                          "Manta's Virus"
                        ],
                        "attackType": "DOT",
                        "hitOwner": {
                          "name": "Target Name",
                          "target": "{{Player Teams}}"
                        }
                      }
                    },
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Wind",
                        "DamageFlat": {
                          "displayLines": "((DOT_TriggerRatio * MDF_TotalDamageValue) / 4)"
                        },
                        "dmgFormulaFinal": "Converted DMG Base",
                        "Toughness": null,
                        "Tags": [
                          "Manta's Virus"
                        ],
                        "attackType": "DOT",
                        "hitOwner": {
                          "name": "Target Name",
                          "target": "{{Player Teams}}"
                        }
                      }
                    },
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Physical",
                        "DamageFlat": {
                          "displayLines": "((DOT_TriggerRatio * MDF_TotalDamageValue) / 4)"
                        },
                        "dmgFormulaFinal": "Converted DMG Base",
                        "Toughness": null,
                        "Tags": [
                          "Manta's Virus"
                        ],
                        "attackType": "DOT",
                        "hitOwner": {
                          "name": "Target Name",
                          "target": "{{Player Teams}}"
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Modifier is Added [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"1476575085\">Enemy_W4_Manta_Virus_Mark</a>"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Copy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1476575085\">Enemy_W4_Manta_Virus_Mark</a>",
                      "variable": "MDF_AddDamageValue",
                      "target2": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variable2": "MDF_AddDamageValue"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-228290033\">ParamModifier</a>"
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "(MDF_TotalDamageValue + MDF_AddDamageValue)"
                      },
                      "variableName": "MDF_TotalDamageValue"
                    },
                    {
                      "name": "Define Modifier Variable",
                      "modifierName": null,
                      "value": {
                        "displayLines": "MDF_LifeTime"
                      },
                      "valueType": "Duration"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Batch: Enemy Arrival",
              "execute": [
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "On Dispel/Cleanse",
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
                          "target": "{{Modifier Holder}}"
                        },
                        "team": "Player Team"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "BattleScore_Damage",
                        "compareType": "=",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1846479482\">W4_Manta_BattleScore2</a>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1491117859\">Enemy_W4_Manta_Virus_Avatar</a>[<span class=\"descriptionNumberColor\">Black Tide Fever</span>]",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "modifierFlags": [
            "STAT_DOT",
            "CanBeAddedToServant",
            "CanListenServantCallback"
          ],
          "useEntitySnapshot": true,
          "description": "<span class=\"descriptionNumberColor\">MDF_TotalDamageValue</span> DMG is taken in the form of DoT over a certain number of turns. Wind Shear, Burn, Shock, and Bleed DoTs are received at the start of every turn. Immediately dispelled for this unit when HP is fully restored, negating this DoT.",
          "type": "Debuff",
          "effectName": "Black Tide Fever",
          "statusName": "Black Tide Fever",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "UI Display Event (On Entity)",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "popUpText": "\"Black Tide Fever\" dispelled"
                }
              ]
            },
            {
              "eventTrigger": "Turn [Owner]: Pre-action Phase",
              "priorityLevel": 90,
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "value": 1,
                  "variableName": "BattleScore_Damage"
                },
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
                        "modifier": "<a class=\"gModGreen\" id=\"1261127743\">Enemy_W2_Mecha02_02_TimeSlow</a>"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1670308834\">Enemy_W4_Manta_TimeSlow</a>"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Fire",
                        "DamageFlat": {
                          "displayLines": "((MDF_TotalDamageValue * MDF_TriggerRatio) / 4)"
                        },
                        "dmgFormulaFinal": "Converted DMG Base",
                        "Toughness": null,
                        "Tags": [
                          "Manta's Virus"
                        ],
                        "attackType": "DOT",
                        "hitOwner": {
                          "name": "Target Name",
                          "target": "{{Enemy Teams}}"
                        }
                      }
                    },
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Wind",
                        "DamageFlat": {
                          "displayLines": "((MDF_TotalDamageValue * MDF_TriggerRatio) / 4)"
                        },
                        "dmgFormulaFinal": "Converted DMG Base",
                        "Toughness": null,
                        "Tags": [
                          "Manta's Virus"
                        ],
                        "attackType": "DOT",
                        "hitOwner": {
                          "name": "Target Name",
                          "target": "{{Enemy Teams}}"
                        }
                      }
                    },
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Thunder",
                        "DamageFlat": {
                          "displayLines": "((MDF_TotalDamageValue * MDF_TriggerRatio) / 4)"
                        },
                        "dmgFormulaFinal": "Converted DMG Base",
                        "Toughness": null,
                        "Tags": [
                          "Manta's Virus"
                        ],
                        "attackType": "DOT",
                        "hitOwner": {
                          "name": "Target Name",
                          "target": "{{Enemy Teams}}"
                        }
                      }
                    },
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Physical",
                        "DamageFlat": {
                          "displayLines": "((MDF_TotalDamageValue * MDF_TriggerRatio) / 4)"
                        },
                        "dmgFormulaFinal": "Converted DMG Base",
                        "Toughness": null,
                        "Tags": [
                          "Manta's Virus"
                        ],
                        "attackType": "DOT",
                        "hitOwner": {
                          "name": "Target Name",
                          "target": "{{Enemy Teams}}"
                        }
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Fire",
                        "DamageFlat": {
                          "displayLines": "((MDF_TotalDamageValue * MDF_TriggerRatio) / 4)"
                        },
                        "dmgFormulaFinal": "Converted DMG Base",
                        "Toughness": null,
                        "Tags": [
                          "Manta's Virus"
                        ],
                        "attackType": "DOT",
                        "hitOwner": {
                          "name": "Target Name",
                          "target": "{{Enemy Teams}}"
                        }
                      }
                    },
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Wind",
                        "DamageFlat": {
                          "displayLines": "((MDF_TotalDamageValue * MDF_TriggerRatio) / 4)"
                        },
                        "dmgFormulaFinal": "Converted DMG Base",
                        "Toughness": null,
                        "Tags": [
                          "Manta's Virus"
                        ],
                        "attackType": "DOT",
                        "hitOwner": {
                          "name": "Target Name",
                          "target": "{{Enemy Teams}}"
                        }
                      }
                    },
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Thunder",
                        "DamageFlat": {
                          "displayLines": "((MDF_TotalDamageValue * MDF_TriggerRatio) / 4)"
                        },
                        "dmgFormulaFinal": "Converted DMG Base",
                        "Toughness": null,
                        "Tags": [
                          "Manta's Virus"
                        ],
                        "attackType": "DOT",
                        "hitOwner": {
                          "name": "Target Name",
                          "target": "{{Enemy Teams}}"
                        }
                      }
                    },
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Physical",
                        "DamageFlat": {
                          "displayLines": "((MDF_TotalDamageValue * MDF_TriggerRatio) / 4)"
                        },
                        "dmgFormulaFinal": "Converted DMG Base",
                        "Toughness": null,
                        "Tags": [
                          "Manta's Virus"
                        ],
                        "attackType": "DOT",
                        "hitOwner": {
                          "name": "Target Name",
                          "target": "{{Enemy Teams}}"
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Receiving Heal End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": ">=",
                    "value2": 1
                  },
                  "passed": [
                    "Modifier Deletes Itself",
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Is Entity Type",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "entityType": "Enemy"
                      },
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Is Part Of Team",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "team": "Player Team"
                              },
                              {
                                "name": "Compare: Variable",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "value1": "BattleScore_Damage",
                                "compareType": "=",
                                "value2": 0
                              }
                            ]
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Level Entity}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1846479482\">W4_Manta_BattleScore2</a>"
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
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "HP Change [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "ParameterValue",
                        "compareType": ">",
                        "value2": 0
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "CurrentHP%",
                        "compareType": ">=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    "Modifier Deletes Itself",
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Is Entity Type",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "entityType": "Enemy"
                      },
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Is Part Of Team",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "team": "Player Team"
                              },
                              {
                                "name": "Compare: Variable",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "value1": "BattleScore_Damage",
                                "compareType": "=",
                                "value2": 0
                              }
                            ]
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Level Entity}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1846479482\">W4_Manta_BattleScore2</a>"
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
              "eventTrigger": "Custom Event",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "value": 1,
                  "variableName": "BattleScore_Damage"
                },
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
                        "modifier": "<a class=\"gModGreen\" id=\"1261127743\">Enemy_W2_Mecha02_02_TimeSlow</a>"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1670308834\">Enemy_W4_Manta_TimeSlow</a>"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Fire",
                        "DamageFlat": {
                          "displayLines": "((MDF_TotalDamageValue * MDF_TriggerRatio) / 4)"
                        },
                        "dmgFormulaFinal": "Converted DMG Base",
                        "Toughness": null,
                        "Tags": [
                          "Manta's Virus"
                        ],
                        "attackType": "DOT",
                        "hitOwner": {
                          "name": "Target Name",
                          "target": "{{Enemy Teams}}"
                        }
                      }
                    },
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Wind",
                        "DamageFlat": {
                          "displayLines": "((MDF_TotalDamageValue * MDF_TriggerRatio) / 4)"
                        },
                        "dmgFormulaFinal": "Converted DMG Base",
                        "Toughness": null,
                        "Tags": [
                          "Manta's Virus"
                        ],
                        "attackType": "DOT",
                        "hitOwner": {
                          "name": "Target Name",
                          "target": "{{Enemy Teams}}"
                        }
                      }
                    },
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Thunder",
                        "DamageFlat": {
                          "displayLines": "((MDF_TotalDamageValue * MDF_TriggerRatio) / 4)"
                        },
                        "dmgFormulaFinal": "Converted DMG Base",
                        "Toughness": null,
                        "Tags": [
                          "Manta's Virus"
                        ],
                        "attackType": "DOT",
                        "hitOwner": {
                          "name": "Target Name",
                          "target": "{{Enemy Teams}}"
                        }
                      }
                    },
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Physical",
                        "DamageFlat": {
                          "displayLines": "((MDF_TotalDamageValue * MDF_TriggerRatio) / 4)"
                        },
                        "dmgFormulaFinal": "Converted DMG Base",
                        "Toughness": null,
                        "Tags": [
                          "Manta's Virus"
                        ],
                        "attackType": "DOT",
                        "hitOwner": {
                          "name": "Target Name",
                          "target": "{{Enemy Teams}}"
                        }
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Fire",
                        "DamageFlat": {
                          "displayLines": "((DOT_TriggerRatio * MDF_TotalDamageValue) / 4)"
                        },
                        "dmgFormulaFinal": "Converted DMG Base",
                        "Toughness": null,
                        "Tags": [
                          "Manta's Virus"
                        ],
                        "attackType": "DOT",
                        "hitOwner": {
                          "name": "Target Name",
                          "target": "{{Enemy Teams}}"
                        }
                      }
                    },
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Thunder",
                        "DamageFlat": {
                          "displayLines": "((DOT_TriggerRatio * MDF_TotalDamageValue) / 4)"
                        },
                        "dmgFormulaFinal": "Converted DMG Base",
                        "Toughness": null,
                        "Tags": [
                          "Manta's Virus"
                        ],
                        "attackType": "DOT",
                        "hitOwner": {
                          "name": "Target Name",
                          "target": "{{Enemy Teams}}"
                        }
                      }
                    },
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Wind",
                        "DamageFlat": {
                          "displayLines": "((DOT_TriggerRatio * MDF_TotalDamageValue) / 4)"
                        },
                        "dmgFormulaFinal": "Converted DMG Base",
                        "Toughness": null,
                        "Tags": [
                          "Manta's Virus"
                        ],
                        "attackType": "DOT",
                        "hitOwner": {
                          "name": "Target Name",
                          "target": "{{Enemy Teams}}"
                        }
                      }
                    },
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Physical",
                        "DamageFlat": {
                          "displayLines": "((DOT_TriggerRatio * MDF_TotalDamageValue) / 4)"
                        },
                        "dmgFormulaFinal": "Converted DMG Base",
                        "Toughness": null,
                        "Tags": [
                          "Manta's Virus"
                        ],
                        "attackType": "DOT",
                        "hitOwner": {
                          "name": "Target Name",
                          "target": "{{Enemy Teams}}"
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Modifier is Added [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"1476575085\">Enemy_W4_Manta_Virus_Mark</a>"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Copy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1476575085\">Enemy_W4_Manta_Virus_Mark</a>",
                      "variable": "MDF_AddDamageValue",
                      "target2": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variable2": "MDF_AddDamageValue"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-228290033\">ParamModifier</a>"
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "(MDF_TotalDamageValue + MDF_AddDamageValue)"
                      },
                      "variableName": "MDF_TotalDamageValue"
                    },
                    {
                      "name": "Define Modifier Variable",
                      "modifierName": null,
                      "value": {
                        "displayLines": "MDF_LifeTime"
                      },
                      "valueType": "Duration"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Batch: Enemy Arrival",
              "execute": [
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "On Dispel/Cleanse",
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
                          "target": "{{Modifier Holder}}"
                        },
                        "team": "Player Team"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "BattleScore_Damage",
                        "compareType": "=",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1846479482\">W4_Manta_BattleScore2</a>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1476575085\">Enemy_W4_Manta_Virus_Mark</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1053900391\">Enemy_W4_Manta_Virus_Transfer</a>",
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Damage Tags",
                        "damageTag": [
                          "Manta's Virus"
                        ],
                        "invertCondition": true
                      },
                      {
                        "name": "Attack Type",
                        "attackTypes": [
                          "True DMG"
                        ],
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Damage Data",
                      "variableName": "MDF_ConstFinalDamage",
                      "scope": "ContextModifier",
                      "readTarget": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">AttackData_ConstFinalDamage</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable with Damage Data",
                      "variableName": "MDF_FinalDamageMax",
                      "scope": "ContextModifier",
                      "readTarget": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">AttackData_FinalDamageMax</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable with Damage Data",
                      "variableName": "MDF_FinalDamage",
                      "scope": "ContextModifier",
                      "readTarget": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      }
                    },
                    {
                      "name": "Define Custom Variable with Damage Data",
                      "variableName": "MDF_ShieldDamage",
                      "scope": "ContextModifier",
                      "readTarget": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">Result_ShieldDamage</span>&nbsp;"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "MDF_FinalDamageMax",
                        "compareType": "=",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "value": {
                            "displayLines": "(((MDF_ConstFinalDamage + MDF_ShieldDamage) / (1 - MDF_TransferRatio)) - (MDF_ConstFinalDamage + MDF_ShieldDamage))"
                          },
                          "variableName": "MDF_TransferDamage"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable",
                          "value": {
                            "displayLines": "(&nbsp;<span class=\"descriptionFunctionColor\">MIN</span>(((MDF_ConstFinalDamage + MDF_ShieldDamage) / (1 - MDF_TransferRatio)), MDF_FinalDamageMax) - (MDF_ConstFinalDamage + MDF_ShieldDamage))"
                          },
                          "variableName": "MDF_TransferDamage"
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
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "MDF_ConstFinalDamage",
                            "compareType": "<",
                            "value2": 0
                          },
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "MDF_TransferDamage",
                            "compareType": ">",
                            "value2": 0
                          }
                        ]
                      },
                      "passed": [
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
                                "modifier": "<a class=\"gModGreen\" id=\"-1491117859\">Enemy_W4_Manta_Virus_Avatar</a>[<span class=\"descriptionNumberColor\">Black Tide Fever</span>]"
                              },
                              {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"-1447914838\">Enemy_W4_Manta_Virus_Monster</a>[<span class=\"descriptionNumberColor\">Black Tide Fever</span>]"
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
                              "modifier": "<a class=\"gModGreen\" id=\"1476575085\">Enemy_W4_Manta_Virus_Mark</a>",
                              "valuePerStack": {
                                "MDF_AddDamageValue": {
                                  "displayLines": "MDF_TransferDamage"
                                },
                                "MDF_TriggerRatio": {
                                  "displayLines": "MDF_TriggerRatio"
                                }
                              }
                            }
                          ],
                          "failed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Is Entity Type",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "entityType": "Enemy"
                              },
                              "passed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-1447914838\">Enemy_W4_Manta_Virus_Monster</a>[<span class=\"descriptionNumberColor\">Black Tide Fever</span>]",
                                  "duration": {
                                    "displayLines": "MDF_LifeTime"
                                  },
                                  "valuePerStack": {
                                    "MDF_TotalDamageValue": {
                                      "displayLines": "MDF_TransferDamage"
                                    },
                                    "MDF_LifeTime": {
                                      "displayLines": "MDF_LifeTime"
                                    },
                                    "MDF_TriggerRatio": {
                                      "displayLines": "MDF_TriggerRatio"
                                    }
                                  },
                                  "casterAssign": "TargetSelf"
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-1491117859\">Enemy_W4_Manta_Virus_Avatar</a>[<span class=\"descriptionNumberColor\">Black Tide Fever</span>]",
                                  "duration": {
                                    "displayLines": "MDF_LifeTime"
                                  },
                                  "valuePerStack": {
                                    "MDF_TotalDamageValue": {
                                      "displayLines": "MDF_TransferDamage"
                                    },
                                    "MDF_LifeTime": {
                                      "displayLines": "MDF_LifeTime"
                                    },
                                    "MDF_TriggerRatio": {
                                      "displayLines": "MDF_TriggerRatio"
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
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
                  "statValue": {
                    "displayLines": "MDF_TransferRatio"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1741196770\">Enemy_W4_Manta_Charge</a>[<span class=\"descriptionNumberColor\">Yearning for a Shared Dance</span>]",
          "description": "Uses \"Embrace From the Waves\" in every action. Dispelled when Weakness is broken.",
          "type": "Other",
          "effectName": "Yearning for a Shared Dance",
          "statusName": "Yearning for a Shared Dance",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                },
                {
                  "name": "Define Custom Variable",
                  "value": 1,
                  "variableName": "AIFlag"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "value": 5,
                  "variableName": "AIFlag"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__233383223\">Enemy_W4_Manta_PassiveUp_Sub</a>[<span class=\"descriptionNumberColor\">Revel in Destruction</span>]",
          "description": "Number of hits to advance action decreases. When taking DMG or using certain abilities to deal DMG, some DMG will be taken in the form of \"Black Tide Fever\" over a specific number of turns. When the \"Revel in Destruction\" countdown's turn begins, all enemy units will have their \"Revel in Destruction\" state dispelled.",
          "type": "Other",
          "effectName": "Revel in Destruction",
          "statusName": "Revel in Destruction",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1447914838\">Enemy_W4_Manta_Virus_Monster</a>[<span class=\"descriptionNumberColor\">Black Tide Fever</span>]"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1447914838\">Enemy_W4_Manta_Virus_Monster</a>[<span class=\"descriptionNumberColor\">Black Tide Fever</span>]"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Is Entity Type",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "entityType": "Enemy"
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "variableName": "SW_Minion01_03"
                      },
                      {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "variableName": "RLElite"
                      }
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Owner]: Start"
            },
            {
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "variableName": "SW_Minion01_03"
                      },
                      {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "variableName": "RLElite"
                      }
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-431422946\">Enemy_W4_Manta_PassiveUp</a>",
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Sequence",
                "TargetList": [
                  {
                    "name": "Target Name",
                    "target": "{{Enemy Team All(with Unselectable)}}"
                  },
                  {
                    "name": "Target Filter",
                    "conditions": {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1650122283\">Enemy_W4_Manta_Passive</a>[<span class=\"descriptionNumberColor\">Respite By The Waters</span>]"
                    }
                  }
                ]
              },
              "modifier": "<a class=\"gModGreen\" id=\"233383223\">Enemy_W4_Manta_PassiveUp_Sub</a>[<span class=\"descriptionNumberColor\">Revel in Destruction</span>]",
              "haloStatus": true,
              "valuePerStack": {
                "MDF_NewMaxLayer": {
                  "displayLines": "MDF_NewMaxLayer"
                }
              }
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Sequence",
                "TargetList": [
                  {
                    "name": "Target Name",
                    "target": "{{Enemy Team All(with Unselectable)}}"
                  },
                  {
                    "name": "Target Filter",
                    "conditions": {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1650122283\">Enemy_W4_Manta_Passive</a>[<span class=\"descriptionNumberColor\">Respite By The Waters</span>]"
                    }
                  }
                ]
              },
              "modifier": "<a class=\"gModGreen\" id=\"1053900391\">Enemy_W4_Manta_Virus_Transfer</a>",
              "haloStatus": true,
              "valuePerStack": {
                "MDF_TransferRatio": {
                  "displayLines": "MDF_TransferRatio"
                },
                "MDF_LifeTime": {
                  "displayLines": "MDF_LifeTime"
                },
                "MDF_TriggerRatio": {
                  "displayLines": "MDF_TriggerRatio"
                }
              }
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1079670411\">Enemy_W4_Manta_Passive_Insert_Mark</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1823230905\">Enemy_W4_Manta_Passive_Insert</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Add Ability",
                  "abilityName": "Monster_W4_Manta_Passive_Insert"
                },
                {
                  "name": "Inject Ability Use",
                  "condition": {
                    "name": "Insert Ability Condition",
                    "type": "AbilityOwnerInsertUnusedCount",
                    "typeValue": 1
                  },
                  "conditionActive": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1823230905\">Enemy_W4_Manta_Passive_Insert</a>"
                  },
                  "abilityName": "Monster_W4_Manta_Passive_Insert",
                  "priorityTag": "EnemyBuffSelf",
                  "canHitNonTargets": true,
                  "allowAbilityTriggers": false
                }
              ]
            },
            {
              "eventTrigger": "Entity Death [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1650122283\">Enemy_W4_Manta_Passive</a>[<span class=\"descriptionNumberColor\">Respite By The Waters</span>]"
                  },
                  "passed": [
                    {
                      "name": "Reconstruct Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All(with Unselectable)}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1650122283\">Enemy_W4_Manta_Passive</a>[<span class=\"descriptionNumberColor\">Respite By The Waters</span>]",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_Trigger",
                        "compareType": "=",
                        "value2": 1
                      },
                      "execute": [],
                      "failed": [
                        "Modifier Deletes Itself"
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
          "for": "<a class=\"gModGreen\" id=\"mod__1650122283\">Enemy_W4_Manta_Passive</a>[<span class=\"descriptionNumberColor\">Respite By The Waters</span>]",
          "stackType": "Replace",
          "description": "Advances action after taking a certain number of attacks from Basic ATK, Skill, Ultimate, or Memosprite Skill.",
          "type": "Other",
          "statusName": "Respite By The Waters",
          "addStacksPerTrigger": 1,
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": 0,
                  "entityClass": "Enemy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "maximum": {
                    "displayLines": "MDF_MaxLayer"
                  },
                  "assignState": "True",
                  "state": "Normal"
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "MDF_Count",
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
                    "compareType": ">",
                    "value2": {
                      "displayLines": "(MDF_Count + 1)"
                    },
                    "valueType": "MaxLayer"
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
                        "modifier": "<a class=\"gModGreen\" id=\"233383223\">Enemy_W4_Manta_PassiveUp_Sub</a>[<span class=\"descriptionNumberColor\">Revel in Destruction</span>]"
                      },
                      "passed": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "value": {
                            "displayLines": "MDF_Count"
                          },
                          "entityClass": "Enemy",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "maximum": {
                            "displayLines": "MDF_NewMaxLayer"
                          },
                          "state": "Normal"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "value": {
                            "displayLines": "MDF_Count"
                          },
                          "entityClass": "Enemy",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "maximum": {
                            "displayLines": "MDF_MaxLayer"
                          },
                          "state": "Normal"
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "compareType": "=",
                        "value2": {
                          "displayLines": "(MDF_Count + 1)"
                        },
                        "valueType": "MaxLayer"
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
                            "modifier": "<a class=\"gModGreen\" id=\"233383223\">Enemy_W4_Manta_PassiveUp_Sub</a>[<span class=\"descriptionNumberColor\">Revel in Destruction</span>]"
                          },
                          "passed": [
                            {
                              "name": "Update Displayed Energy Bar",
                              "value": {
                                "displayLines": "MDF_Count"
                              },
                              "entityClass": "Enemy",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "maximum": {
                                "displayLines": "MDF_NewMaxLayer"
                              },
                              "state": "Normal"
                            }
                          ],
                          "failed": [
                            {
                              "name": "Update Displayed Energy Bar",
                              "value": {
                                "displayLines": "MDF_Count"
                              },
                              "entityClass": "Enemy",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "maximum": {
                                "displayLines": "MDF_MaxLayer"
                              },
                              "state": "Normal"
                            }
                          ]
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Monster Rank",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "compareType": "=",
                            "value2": 3
                          },
                          "passed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Check Boolean Value",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "variableName": "RLElite"
                              }
                            }
                          ],
                          "failed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Check Boolean Value",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "variableName": "SW_Minion01_03"
                              }
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable",
                          "value": 1,
                          "variableName": "MDF_Trigger"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Level Entity}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1823230905\">Enemy_W4_Manta_Passive_Insert</a>"
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"233383223\">Enemy_W4_Manta_PassiveUp_Sub</a>[<span class=\"descriptionNumberColor\">Revel in Destruction</span>]"
                          },
                          "passed": [
                            {
                              "name": "Update Displayed Energy Bar",
                              "value": {
                                "displayLines": "MDF_NewMaxLayer"
                              },
                              "entityClass": "Enemy",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "maximum": {
                                "displayLines": "MDF_NewMaxLayer"
                              },
                              "state": "Active"
                            }
                          ],
                          "failed": [
                            {
                              "name": "Update Displayed Energy Bar",
                              "value": {
                                "displayLines": "MDF_MaxLayer"
                              },
                              "entityClass": "Enemy",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "maximum": {
                                "displayLines": "MDF_MaxLayer"
                              },
                              "state": "Active"
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
              "eventTrigger": "Being Attacked [Owner]: Start",
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
                        "value1": "MDF_Trigger",
                        "compareType": "=",
                        "value2": 0
                      },
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Player Team"
                      },
                      {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Skill Type",
                            "skillType": "Basic ATK"
                          },
                          {
                            "name": "Skill Type",
                            "skillType": "Skill"
                          },
                          {
                            "name": "Skill Type",
                            "skillType": "Ultimate"
                          },
                          {
                            "name": "Skill Type",
                            "skillType": "Memosprite"
                          }
                        ]
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1035214462\">Enemy_SW_Minion01_03_CommandMark</a>[<span class=\"descriptionNumberColor\">Mirage Rush</span>]",
                        "invertCondition": true
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
                      "modifier": "<a class=\"gModGreen\" id=\"1650122283\">Enemy_W4_Manta_Passive</a>[<span class=\"descriptionNumberColor\">Respite By The Waters</span>]"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Modifier is Added [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Modifier Was",
                        "modifier": "<a class=\"gModGreen\" id=\"1079670411\">Enemy_W4_Manta_Passive_Insert_Mark</a>"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1035214462\">Enemy_SW_Minion01_03_CommandMark</a>[<span class=\"descriptionNumberColor\">Mirage Rush</span>]",
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "entityClass": "Enemy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "trigger": "SpEff_Trigger"
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": 0,
                      "variableName": "MDF_Trigger"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"233383223\">Enemy_W4_Manta_PassiveUp_Sub</a>[<span class=\"descriptionNumberColor\">Revel in Destruction</span>]"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1650122283\">Enemy_W4_Manta_Passive</a>[<span class=\"descriptionNumberColor\">Respite By The Waters</span>]",
                          "addStacksPerTrigger": {
                            "displayLines": "-MDF_NewMaxLayer"
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1650122283\">Enemy_W4_Manta_Passive</a>[<span class=\"descriptionNumberColor\">Respite By The Waters</span>]",
                          "addStacksPerTrigger": {
                            "displayLines": "-MDF_MaxLayer"
                          }
                        }
                      ]
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-228290033\">ParamModifier</a>"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"233383223\">Enemy_W4_Manta_PassiveUp_Sub</a>[<span class=\"descriptionNumberColor\">Revel in Destruction</span>]"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Copy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"233383223\">Enemy_W4_Manta_PassiveUp_Sub</a>[<span class=\"descriptionNumberColor\">Revel in Destruction</span>]",
                      "variable": "MDF_NewMaxLayer",
                      "target2": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variable2": "MDF_NewMaxLayer"
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "(MDF_MaxLayer - MDF_NewMaxLayer)"
                      },
                      "variableName": "MDF_NewMaxLayer"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "compareType": "<",
                        "value2": {
                          "displayLines": "MDF_NewMaxLayer"
                        },
                        "valueType": "Layer"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1650122283\">Enemy_W4_Manta_Passive</a>[<span class=\"descriptionNumberColor\">Respite By The Waters</span>]",
                          "stackLimit": {
                            "displayLines": "MDF_NewMaxLayer"
                          },
                          "addStacksPerTrigger": 0
                        }
                      ],
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1650122283\">Enemy_W4_Manta_Passive</a>[<span class=\"descriptionNumberColor\">Respite By The Waters</span>]",
                          "stackLimit": {
                            "displayLines": "MDF_NewMaxLayer"
                          },
                          "addStacksPerTrigger": {
                            "displayLines": "(MDF_Count - MDF_NewMaxLayer)"
                          }
                        }
                      ]
                    },
                    {
                      "name": "Update Displayed Energy Bar",
                      "entityClass": "Enemy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
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
                        "name": "Modifier Was",
                        "modifier": "<a class=\"gModGreen\" id=\"1035214462\">Enemy_SW_Minion01_03_CommandMark</a>[<span class=\"descriptionNumberColor\">Mirage Rush</span>]"
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
                      "modifier": "<a class=\"gModGreen\" id=\"1650122283\">Enemy_W4_Manta_Passive</a>[<span class=\"descriptionNumberColor\">Respite By The Waters</span>]",
                      "addStacksPerTrigger": {
                        "displayLines": "-MDF_Count"
                      }
                    },
                    {
                      "name": "Update Displayed Energy Bar",
                      "entityClass": "Enemy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "assignState": "True",
                      "state": "Disable"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Losing Modifier [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"233383223\">Enemy_W4_Manta_PassiveUp_Sub</a>[<span class=\"descriptionNumberColor\">Revel in Destruction</span>]"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1650122283\">Enemy_W4_Manta_Passive</a>[<span class=\"descriptionNumberColor\">Respite By The Waters</span>]",
                      "stackLimit": {
                        "displayLines": "MDF_MaxLayer"
                      },
                      "addStacksPerTrigger": 0
                    },
                    {
                      "name": "Update Displayed Energy Bar",
                      "entityClass": "Enemy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "references": []
    },
    "20020_BattleEventAbility_Monster_W4_Manta_BattleEvent": {
      "fileName": "20020_BattleEventAbility_Monster_W4_Manta_BattleEvent",
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
          "modifier": "<a class=\"gModGreen\" id=\"1051712844\">Enemy_W4_Manta_BEFinish</a>"
        },
        {
          "name": "Assign Unique Name",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "identifier": "Monster_W4_Manta_00_BE"
        },
        {
          "name": "Add Stage Ability",
          "abilityName": "BattleEventAbility_Monster_W4_Manta_BattleEventFinish"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1051712844\">Enemy_W4_Manta_BEFinish</a>",
          "execute": [
            {
              "eventTrigger": "Turn [Owner]: Pre-action Phase",
              "execute": [
                {
                  "name": "Inject Ability Use",
                  "condition": {
                    "name": "Insert Ability Condition",
                    "type": "AbilityOwnerInsertUnusedCount",
                    "typeValue": 1
                  },
                  "conditionActive": {
                    "name": "Target Exists",
                    "target": {
                      "name": "Add Target by Unique Identifier",
                      "identifier": "Monster_W4_Manta_00_BE"
                    },
                    "living": true
                  },
                  "abilityName": "BattleEventAbility_Monster_W4_Manta_BattleEventFinish",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "priorityTag": "EnemyChangeState",
                  "canHitNonTargets": true,
                  "allowAbilityTriggers": false
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All(with Unselectable)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1741196770\">Enemy_W4_Manta_Charge</a>[<span class=\"descriptionNumberColor\">Yearning for a Shared Dance</span>]"
                }
              ]
            },
            {
              "eventTrigger": "Entity Death [Anyone]",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All(with Unselectable)}}"
                  },
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1650122283\">Enemy_W4_Manta_Passive</a>[<span class=\"descriptionNumberColor\">Respite By The Waters</span>]"
                  },
                  "noTargetFound": [
                    {
                      "name": "Force Entity Death",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
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
    "20020_Monster_W4_Manta_Passive_Insert": {
      "fileName": "20020_Monster_W4_Manta_Passive_Insert",
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
          "variableName": "Manta_Passive"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All(with Unselectable)}}"
          },
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1650122283\">Enemy_W4_Manta_Passive</a>[<span class=\"descriptionNumberColor\">Respite By The Waters</span>]"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Copy",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1650122283\">Enemy_W4_Manta_Passive</a>[<span class=\"descriptionNumberColor\">Respite By The Waters</span>]",
              "variable": "MDF_Trigger",
              "target2": null,
              "variable2": "Manta_Passive"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Manta_Passive",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "variableName": "BattleScore_Manta"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"233383223\">Enemy_W4_Manta_PassiveUp_Sub</a>[<span class=\"descriptionNumberColor\">Revel in Destruction</span>]"
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
                      "modifier": "<a class=\"gModGreen\" id=\"1829701863\">W4_Manta_BattleScore1</a>"
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1079670411\">Enemy_W4_Manta_Passive_Insert_Mark</a>"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Monster Rank",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "compareType": "=",
                    "value2": 3
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "variableName": "RLElite"
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Current Turn Is",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
                      },
                      "passed": [
                        {
                          "name": "Action Advance/Delay",
                          "advanceType": "Set",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "set": 0
                        },
                        {
                          "name": "Assign Advance/Delay to Current Ability Use",
                          "adjustmentValue": 0,
                          "adjustmentType": "="
                        }
                      ],
                      "failed": [
                        {
                          "name": "Action Advance/Delay",
                          "advanceType": "Set",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "set": 0
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "variableName": "SW_Minion01_03"
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "variableName": "SW_Minion01_03"
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Current Turn Is",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
                      },
                      "passed": [
                        {
                          "name": "Action Advance/Delay",
                          "advanceType": "Set",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "set": 0
                        },
                        {
                          "name": "Assign Advance/Delay to Current Ability Use",
                          "adjustmentValue": 0,
                          "adjustmentType": "="
                        }
                      ],
                      "failed": [
                        {
                          "name": "Action Advance/Delay",
                          "advanceType": "Set",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "set": 0
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
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1823230905\">Enemy_W4_Manta_Passive_Insert</a>"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All(with Unselectable)}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1500090502\">Enemy_W4_Unicorn_01_HitSummonMark1</a>"
          }
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "20020_BattleEventAbility_Monster_W4_Manta_BattleEventFinish": {
      "fileName": "20020_BattleEventAbility_Monster_W4_Manta_BattleEventFinish",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All(with Unselectable)}}"
          },
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"233383223\">Enemy_W4_Manta_PassiveUp_Sub</a>[<span class=\"descriptionNumberColor\">Revel in Destruction</span>]"
          }
        },
        {
          "name": "Destroy Battle Entity",
          "identifier": "Monster_W4_Manta_00_BE"
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    }
  },
  "enemyData": {},
  "isBattleEvent": true,
  "finalData": {
    "name": "Battle Event Construction",
    "beID": 20020,
    "team": "Enemy Team",
    "eventType": "Assist",
    "icon": "BattleEvent_W4_Manta_WormPassive.png",
    "abilityList": [
      "BattleEventAbility_Monster_W4_Manta_BattleEvent"
    ],
    "statOverrides": [
      {
        "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPBase</span>&nbsp;",
        "value": 90
      },
      {
        "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;",
        "value": 100
      }
    ],
    "spd": 80,
    "hardLevel": true
  }
}