const configAbility = {
  "fileName": "1490374940_BattleEventAbility_Challenge_Month_38",
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
      "modifier": "<a class=\"gModGreen\" id=\"1052717956\">Modifier_BattleEventAbility_Challenge_Month_38</a>",
      "valuePerStack": {
        "MDF_PursuedDamageRatio": {
          "operator": "Variables[0] (#BattleEvent_P1_ADF) || RETURN",
          "displayLines": "#BattleEvent_P1_ADF",
          "constants": [],
          "variables": [
            "#BattleEvent_P1_ADF"
          ]
        },
        "MDF_DotDmgRatio": {
          "operator": "Variables[0] (#BattleEvent_P2_ADF) || RETURN",
          "displayLines": "#BattleEvent_P2_ADF",
          "constants": [],
          "variables": [
            "#BattleEvent_P2_ADF"
          ]
        }
      }
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__894900364\">Modifier_BattleEventAbility_Challenge_Month_38_PLY</a>",
      "execute": [
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Type",
                "skillType": "Skill"
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Attack Targets of Modifier Holder}}"
                  },
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-717184223\">Modifier_BattleEventAbility_Challenge_Month_38_Sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]"
                  },
                  "ifTargetFound": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": {
                          "name": "Damage Type Source",
                          "sourceType": "ReadTargetType",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          }
                        },
                        "Damage": {
                          "operator": "Variables[0] (MDF_PursuedDamageRatio) || RETURN",
                          "displayLines": "MDF_PursuedDamageRatio",
                          "constants": [],
                          "variables": [
                            "MDF_PursuedDamageRatio"
                          ]
                        },
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "Additional DMG"
                      }
                    },
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Targets Adjacent to Parameter Target}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": {
                          "name": "Damage Type Source",
                          "sourceType": "ReadTargetType",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          }
                        },
                        "Damage": {
                          "operator": "Variables[0] (MDF_PursuedDamageRatio) || RETURN",
                          "displayLines": "MDF_PursuedDamageRatio",
                          "constants": [],
                          "variables": [
                            "MDF_PursuedDamageRatio"
                          ]
                        },
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "Additional DMG"
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
      "for": "<a class=\"gModGreen\" id=\"mod__-717184223\">Modifier_BattleEventAbility_Challenge_Month_38_Sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]",
      "stackType": "ReplaceByCaster",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "modifierFlags": [
        "STAT_DOT",
        "STAT_DOT_Burn",
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is NOT in Auto-Battle State"
              }
            }
          ]
        },
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "AttackScaling": {
                "DamageType": "Fire",
                "DamageFlat": {
                  "operator": "Variables[0] (Modifier_Burn_DamageValue) || RETURN",
                  "displayLines": "Modifier_Burn_DamageValue",
                  "constants": [],
                  "variables": [
                    "Modifier_Burn_DamageValue"
                  ]
                },
                "Toughness": null,
                "Tags": [
                  "Burn"
                ],
                "attackType": "DOT"
              }
            }
          ]
        },
        {
          "eventTrigger": "Custom Event",
          "execute": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "AttackScaling": {
                "DamageType": "Fire",
                "DamageFlat": {
                  "operator": "Variables[0] (DOT_TriggerRatio) || Variables[1] (Modifier_Burn_DamageValue) || MUL || RETURN",
                  "displayLines": "(DOT_TriggerRatio * Modifier_Burn_DamageValue)",
                  "constants": [],
                  "variables": [
                    "DOT_TriggerRatio",
                    "Modifier_Burn_DamageValue"
                  ]
                },
                "Toughness": null,
                "Tags": [
                  "Burn"
                ],
                "attackType": "DOT"
              }
            }
          ]
        }
      ],
      "useEntitySnapshot": true,
      "description": "Takes Fire DMG at the beginning of each turn for a certain number of turns. After being attacked by a Skill, this unit and adjacent targets additionally take DMG.",
      "type": "Debuff",
      "effectName": "Memory Imprint",
      "statusName": "Memory Imprint",
      "stackLimit": 1,
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1052717956\">Modifier_BattleEventAbility_Challenge_Month_38</a>",
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All(with Unselectable)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-717184223\">Modifier_BattleEventAbility_Challenge_Month_38_Sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]"
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All(with Unselectable)}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Monster Rank",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "compareType": ">=",
                        "value2": 4
                      },
                      {
                        "name": "Is Entity a Battle Event/Summon",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "invertCondition": true
                      },
                      {
                        "name": "Target is Unselectable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "invertCondition": true
                      }
                    ]
                  },
                  {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Target is Unselectable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
                      },
                      {
                        "name": "Enemy ID",
                        "ID": 803401,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": null,
                        "isCompareUniqueID": true
                      }
                    ]
                  }
                ]
              },
              "ifTargetFound": [
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "inherentTarget": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "ability": "BattleEventAbility_Camear_SelectDarkTeamEntity",
                  "isTrigger": true
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-717184223\">Modifier_BattleEventAbility_Challenge_Month_38_Sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]",
                  "valuePerStack": {
                    "Modifier_Burn_DamageValue": {
                      "operator": "Variables[0] (MDF_DotDmgRatio) || Variables[1] (_Temp_HP_BE) || MUL || RETURN",
                      "displayLines": "(MDF_DotDmgRatio * _Temp_HP_BE)",
                      "constants": [],
                      "variables": [
                        "MDF_DotDmgRatio",
                        "_Temp_HP_BE"
                      ]
                    }
                  }
                }
              ],
              "noTargetFound": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Monster Rank",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "compareType": ">=",
                        "value2": 3
                      },
                      {
                        "name": "Is Entity a Battle Event/Summon",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "invertCondition": true
                      },
                      {
                        "name": "Target is Unselectable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "invertCondition": true
                      }
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "Trigger Ability",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "inherentTarget": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "ability": "BattleEventAbility_Camear_SelectDarkTeamEntity",
                      "isTrigger": true
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-717184223\">Modifier_BattleEventAbility_Challenge_Month_38_Sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]",
                      "valuePerStack": {
                        "Modifier_Burn_DamageValue": {
                          "operator": "Variables[0] (MDF_DotDmgRatio) || Variables[1] (_Temp_HP_BE) || MUL || RETURN",
                          "displayLines": "(MDF_DotDmgRatio * _Temp_HP_BE)",
                          "constants": [],
                          "variables": [
                            "MDF_DotDmgRatio",
                            "_Temp_HP_BE"
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
                  "modifier": "<a class=\"gModGreen\" id=\"894900364\">Modifier_BattleEventAbility_Challenge_Month_38_PLY</a>",
                  "valuePerStack": {
                    "MDF_PursuedDamageRatio": {
                      "operator": "Variables[0] (MDF_PursuedDamageRatio) || RETURN",
                      "displayLines": "MDF_PursuedDamageRatio",
                      "constants": [],
                      "variables": [
                        "MDF_PursuedDamageRatio"
                      ]
                    }
                  },
                  "casterAssign": "TargetSelf"
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
              "variableName": "_Temp_HP_BE",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"894900364\">Modifier_BattleEventAbility_Challenge_Month_38_PLY</a>",
              "valuePerStack": {
                "MDF_PursuedDamageRatio": {
                  "operator": "Variables[0] (MDF_PursuedDamageRatio) || RETURN",
                  "displayLines": "MDF_PursuedDamageRatio",
                  "constants": [],
                  "variables": [
                    "MDF_PursuedDamageRatio"
                  ]
                }
              },
              "casterAssign": "TargetSelf"
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All(with Unselectable)}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Monster Rank",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "compareType": ">=",
                        "value2": 4
                      },
                      {
                        "name": "Is Entity a Battle Event/Summon",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "invertCondition": true
                      },
                      {
                        "name": "Target is Unselectable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "invertCondition": true
                      }
                    ]
                  },
                  {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Target is Unselectable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
                      },
                      {
                        "name": "Enemy ID",
                        "ID": 803401,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": null,
                        "isCompareUniqueID": true
                      }
                    ]
                  }
                ]
              },
              "ifTargetFound": [
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "inherentTarget": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "ability": "BattleEventAbility_Camear_SelectDarkTeamEntity",
                  "isTrigger": true
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-717184223\">Modifier_BattleEventAbility_Challenge_Month_38_Sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]",
                  "valuePerStack": {
                    "Modifier_Burn_DamageValue": {
                      "operator": "Variables[0] (MDF_DotDmgRatio) || Variables[1] (_Temp_HP_BE) || MUL || RETURN",
                      "displayLines": "(MDF_DotDmgRatio * _Temp_HP_BE)",
                      "constants": [],
                      "variables": [
                        "MDF_DotDmgRatio",
                        "_Temp_HP_BE"
                      ]
                    }
                  }
                }
              ],
              "noTargetFound": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Monster Rank",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "compareType": ">=",
                        "value2": 3
                      },
                      {
                        "name": "Is Entity a Battle Event/Summon",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "invertCondition": true
                      },
                      {
                        "name": "Target is Unselectable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "invertCondition": true
                      }
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "Trigger Ability",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "inherentTarget": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "ability": "BattleEventAbility_Camear_SelectDarkTeamEntity",
                      "isTrigger": true
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-717184223\">Modifier_BattleEventAbility_Challenge_Month_38_Sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]",
                      "valuePerStack": {
                        "Modifier_Burn_DamageValue": {
                          "operator": "Variables[0] (MDF_DotDmgRatio) || Variables[1] (_Temp_HP_BE) || MUL || RETURN",
                          "displayLines": "(MDF_DotDmgRatio * _Temp_HP_BE)",
                          "constants": [],
                          "variables": [
                            "MDF_DotDmgRatio",
                            "_Temp_HP_BE"
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "priorityLevel": -90
        }
      ],
      "stackData": [
        "MDF_PursuedDamageRatio",
        "MDF_DotDmgRatio"
      ],
      "latentQueue": []
    }
  ]
}