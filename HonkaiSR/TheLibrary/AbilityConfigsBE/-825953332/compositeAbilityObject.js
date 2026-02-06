const compositeAbilityObject = {
  "fullCharacterName": -825953332,
  "trimCharacterName": -825953332,
  "abilityList": [
    "-825953332_FantasticStory_PlusAbility_2113",
    "-825953332_FantasticStory_PlusAbility_2112",
    "-825953332_FantasticStory_PlusAbility_2111",
    "-825953332_BattleEvent_FantasticStory_BaseAbility_Standard",
    "-825953332_FantasticStory_BaseAbility_2110_Insert_Enemy",
    "-825953332_FantasticStory_BaseAbility_2110_Insert_Camera_Enemy",
    "-825953332_FantasticStory_BaseAbility_2110_Insert",
    "-825953332_FantasticStory_BaseAbility_2110_EnterFever",
    "-825953332_FantasticStory_BaseAbility_2110_BeforeFever",
    "-825953332_FantasticStory_BaseAbility_2110_BaseAddOn",
    "-825953332_FantasticStory_BaseAbility_2110",
    "-825953332_FantasticStory_BaseAbility_2100",
    "-825953332_Modifiers",
    "-825953332_BE_BattleEvents"
  ],
  "abilityObject": {
    "-825953332_FantasticStory_PlusAbility_2113": {
      "fileName": "-825953332_FantasticStory_PlusAbility_2113",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Define Custom Variable",
          "variableName": "DV_FantasticStory_PlusAbility_2113",
          "value": 1
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_PlusAbility_2113_ADF_1",
          "value": {
            "operator": "Variables[0] (#ADF_1) || RETURN",
            "displayLines": "#ADF_1",
            "constants": [],
            "variables": [
              "#ADF_1"
            ]
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_PlusAbility_2113_ADF_2",
          "value": {
            "operator": "Variables[0] (#ADF_2) || RETURN",
            "displayLines": "#ADF_2",
            "constants": [],
            "variables": [
              "#ADF_2"
            ]
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_PlusAbility_2113_ADF_3",
          "value": {
            "operator": "Variables[0] (#ADF_3) || RETURN",
            "displayLines": "#ADF_3",
            "constants": [],
            "variables": [
              "#ADF_3"
            ]
          }
        }
      ],
      "references": []
    },
    "-825953332_FantasticStory_PlusAbility_2112": {
      "fileName": "-825953332_FantasticStory_PlusAbility_2112",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Define Custom Variable",
          "variableName": "DV_FantasticStory_PlusAbility_2112",
          "value": 1
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_PlusAbility_2112_ADF_1",
          "value": {
            "operator": "Variables[0] (#ADF_1) || RETURN",
            "displayLines": "#ADF_1",
            "constants": [],
            "variables": [
              "#ADF_1"
            ]
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_PlusAbility_2112_ADF_2",
          "value": {
            "operator": "Variables[0] (#ADF_2) || RETURN",
            "displayLines": "#ADF_2",
            "constants": [],
            "variables": [
              "#ADF_2"
            ]
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_PlusAbility_2112_ADF_3",
          "value": {
            "operator": "Variables[0] (#ADF_3) || RETURN",
            "displayLines": "#ADF_3",
            "constants": [],
            "variables": [
              "#ADF_3"
            ]
          }
        }
      ],
      "references": []
    },
    "-825953332_FantasticStory_PlusAbility_2111": {
      "fileName": "-825953332_FantasticStory_PlusAbility_2111",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Define Custom Variable",
          "variableName": "DV_FantasticStory_PlusAbility_2111",
          "value": 1
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_PlusAbility_2111_ADF_1",
          "value": {
            "operator": "Variables[0] (#ADF_1) || RETURN",
            "displayLines": "#ADF_1",
            "constants": [],
            "variables": [
              "#ADF_1"
            ]
          }
        }
      ],
      "references": []
    },
    "-825953332_BattleEvent_FantasticStory_BaseAbility_Standard": {
      "fileName": "-825953332_BattleEvent_FantasticStory_BaseAbility_Standard",
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
          "modifier": "MBattleEvent_FantasticStory_BaseAbility_Standard_sub"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "MBattleEvent_FantasticStory_BaseAbility_Standard_BaseSpeed"
        },
        {
          "name": "Block Advance/Delay Effects",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "whitelist": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "whitelistTag": "Mask_TurnBasedAdvance"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "MBattleEvent_FantasticStory_BaseAbility_Standard_sub",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Battle Event's Caster}}"
                  },
                  "modifier": "Modifier_FantasticStory_BaseAbility_2110_aura"
                },
                {
                  "name": "Force Entity Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "MBattleEvent_FantasticStory_BaseAbility_Standard_BaseSpeed",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDBase</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (DV_BE_BaseSpeed) || RETURN",
                    "displayLines": "DV_BE_BaseSpeed",
                    "constants": [],
                    "variables": [
                      "DV_BE_BaseSpeed"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "-825953332_FantasticStory_BaseAbility_2110_Insert_Enemy": {
      "fileName": "-825953332_FantasticStory_BaseAbility_2110_Insert_Enemy",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Exit Broken-State",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Physical",
            "DamageFlat": {
              "operator": "Variables[0] (Bomb_Damage_get) || RETURN",
              "displayLines": "Bomb_Damage_get",
              "constants": [],
              "variables": [
                "Bomb_Damage_get"
              ]
            },
            "dmgFormulaFinal": "Converted DMG Base",
            "Toughness": null,
            "Tags": [
              "Bomb DMG"
            ],
            "attackType": "True DMG"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "value1": "Plus2_DamgeStance",
            "compareType": ">",
            "value2": 0
          },
          "passed": [
            {
              "name": "Deal Toughness DMG",
              "value": {
                "operator": "Variables[0] (Plus2_DamgeStance) || Constants[0] (3) || MUL || RETURN",
                "displayLines": "(Plus2_DamgeStance * 3)",
                "constants": [
                  3
                ],
                "variables": [
                  "Plus2_DamgeStance"
                ]
              },
              "defender": {
                "name": "Target Name",
                "target": "{{Ability Targets Adjacent(Blast)}}"
              },
              "forceReduction": true,
              "canDelay": true,
              "ToughnessDMGType": "Physical"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "value1": "Bomb_Damage_Adjoin_get",
            "compareType": ">",
            "value2": 0
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Targets Adjacent(Blast)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Physical",
                "DamageFlat": {
                  "operator": "Variables[0] (Bomb_Damage_Adjoin_get) || RETURN",
                  "displayLines": "Bomb_Damage_Adjoin_get",
                  "constants": [],
                  "variables": [
                    "Bomb_Damage_Adjoin_get"
                  ]
                },
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": [
                  "Bomb DMG"
                ],
                "attackType": "True DMG"
              }
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "value1": "Plus3_DelayRatio",
            "compareType": ">",
            "value2": 0
          },
          "passed": [
            {
              "name": "Action Advance/Delay",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Targets Adjacent(Blast)}}"
              },
              "advanceType": "Set",
              "multiAdd": "(0 - Plus3_DelayRatio)"
            }
          ]
        }
      ],
      "references": []
    },
    "-825953332_FantasticStory_BaseAbility_2110_Insert_Camera_Enemy": {
      "fileName": "-825953332_FantasticStory_BaseAbility_2110_Insert_Camera_Enemy",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "-825953332_FantasticStory_BaseAbility_2110_Insert": {
      "fileName": "-825953332_FantasticStory_BaseAbility_2110_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Battle Event List}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Battle Event ID",
            "ID": 30501,
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            }
          },
          "noTargetFound": [
            {
              "name": "Add Battle Event",
              "teamName": "Player Team",
              "eventID": 30501,
              "variables": {
                "DV_BE_BaseSpeed": {
                  "operator": "Variables[0] (DV_FeverBESpeed) || RETURN",
                  "displayLines": "DV_FeverBESpeed",
                  "constants": [],
                  "variables": [
                    "DV_FeverBESpeed"
                  ]
                }
              },
              "whenCreated": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Modifier_FantasticStory_BaseAbility_2110_ListenBEDelay"
                }
              ]
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "DV_FantasticStory_BaseAbility_TriggerFlag",
          "value": 0
        },
        "Deleted bullshit",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]].[[removeMemosprite]]"
          },
          "modifier": "Modifier_FantasticStory_BaseAbility_2110_AddSP",
          "valuePerStack": {
            "BattleEvent_P1_ADF_Get": {
              "operator": "Variables[0] (DV_FantasticStory_BaseAbility_2110_EnterFever_P1_Ratio) || RETURN",
              "displayLines": "DV_FantasticStory_BaseAbility_2110_EnterFever_P1_Ratio",
              "constants": [],
              "variables": [
                "DV_FantasticStory_BaseAbility_2110_EnterFever_P1_Ratio"
              ]
            }
          },
          "casterAssign": "TargetSelf"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]].[[removeMemosprite]]"
          },
          "modifier": "Modifier_FantasticStory_BaseAbility_2110_ReturnSP",
          "casterAssign": "TargetSelf"
        },
        "Trigger: Attack End",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Modifier_FantasticStory_BaseAbility_2110_aura"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "DV_FantasticStory_BaseAbility_CountSum",
          "value": {
            "operator": "Constants[0] (0) || RETURN",
            "displayLines": "0",
            "constants": [
              0
            ],
            "variables": []
          }
        }
      ],
      "references": []
    },
    "-825953332_FantasticStory_BaseAbility_2110_EnterFever": {
      "fileName": "-825953332_FantasticStory_BaseAbility_2110_EnterFever",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_BaseAbility_2110_EnterFever_P1_Ratio",
          "value": {
            "operator": "Variables[0] (ADF_1_Get) || RETURN",
            "displayLines": "ADF_1_Get",
            "constants": [],
            "variables": [
              "ADF_1_Get"
            ]
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_BaseAbility_2110_EnterFever_P2_Ratio",
          "value": {
            "operator": "Variables[0] (ADF_2_Get) || RETURN",
            "displayLines": "ADF_2_Get",
            "constants": [],
            "variables": [
              "ADF_2_Get"
            ]
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_BaseAbility_2110_EnterFever_P3_Ratio",
          "value": {
            "operator": "Variables[0] (ADF_3_Get) || RETURN",
            "displayLines": "ADF_3_Get",
            "constants": [],
            "variables": [
              "ADF_3_Get"
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Modifier_FantasticStory_BaseAbility_2110_EnterFever"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Modifier_FantasticStory_BaseAbility_2110_EnterFever",
          "stackType": "ReplaceByCaster",
          "execute": [
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
                        "team": "Enemy Team"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "Modifier_FantasticStory_BaseAbility_2110_aura"
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
                      "modifier": "Modifier_FantasticStory_BaseAbility_2110_EnterFever_sub[<span class=\"descriptionNumberColor\">Surging Grit</span>]",
                      "valuePerStack": {
                        "DV_Ratio_Get": {
                          "operator": "Variables[0] (DV_FantasticStory_BaseAbility_2110_EnterFever_P2_Ratio) || RETURN",
                          "displayLines": "DV_FantasticStory_BaseAbility_2110_EnterFever_P2_Ratio",
                          "constants": [],
                          "variables": [
                            "DV_FantasticStory_BaseAbility_2110_EnterFever_P2_Ratio"
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
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "EntityCurrentSP"
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "EntityStockSP"
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "EntityMaxSP"
                    }
                  ]
                }
              ],
              "priorityLevel": -90
            },
            {
              "eventTrigger": "When Modifier is Added [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "Modifier_FantasticStory_BaseAbility_2110_aura"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "modifier": "Modifier_FantasticStory_BaseAbility_2110_EnterFever_sub[<span class=\"descriptionNumberColor\">Surging Grit</span>]",
                      "valuePerStack": {
                        "DV_Ratio_Get": {
                          "operator": "Variables[0] (DV_FantasticStory_BaseAbility_2110_EnterFever_P2_Ratio) || RETURN",
                          "displayLines": "DV_FantasticStory_BaseAbility_2110_EnterFever_P2_Ratio",
                          "constants": [],
                          "variables": [
                            "DV_FantasticStory_BaseAbility_2110_EnterFever_P2_Ratio"
                          ]
                        }
                      }
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
                    "modifier": "Modifier_FantasticStory_BaseAbility_2110_aura"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All(with Unselectable)}}"
                      },
                      "modifier": "Modifier_FantasticStory_BaseAbility_2110_EnterFever_sub[<span class=\"descriptionNumberColor\">Surging Grit</span>]"
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "-825953332_FantasticStory_BaseAbility_2110_BeforeFever": {
      "fileName": "-825953332_FantasticStory_BaseAbility_2110_BeforeFever",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_BaseAbility_2110_BeforeFever_P1_MaxLayer",
          "value": {
            "operator": "Variables[0] (ADF_1_Get) || RETURN",
            "displayLines": "ADF_1_Get",
            "constants": [],
            "variables": [
              "ADF_1_Get"
            ]
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_BaseAbility_2110_BeforeFever_P2_Ratio",
          "value": {
            "operator": "Variables[0] (ADF_2_Get) || RETURN",
            "displayLines": "ADF_2_Get",
            "constants": [],
            "variables": [
              "ADF_2_Get"
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Modifier_FantasticStory_BaseAbility_2110_BeforeFever"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Modifier_FantasticStory_BaseAbility_2110_BeforeFever_sub2[<span class=\"descriptionNumberColor\">Shatter</span>]",
          "stackType": "Replace",
          "modifierFlags": [
            "Deathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Toggle Skill Mark"
                }
              ]
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "Modifier_FantasticStory_BaseAbility_2110_aura"
                  },
                  "passed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Physical",
                        "DamageFlat": {
                          "operator": "Variables[0] (Bomb_Damage) || RETURN",
                          "displayLines": "Bomb_Damage",
                          "constants": [],
                          "variables": [
                            "Bomb_Damage"
                          ]
                        },
                        "dmgFormulaFinal": "Converted DMG Base",
                        "Toughness": null,
                        "Tags": [
                          "Bomb DMG"
                        ],
                        "attackType": "True DMG"
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Bomb_Damage_Adjoin",
                      "value": {
                        "operator": "Variables[0] (BattleEvent_BaseHP) || Variables[1] (DV_FantasticStory_BaseAbility_2110_EnterFever_P3_Ratio) || MUL || Variables[2] (Bomb_Layer) || MUL || RETURN",
                        "displayLines": "((BattleEvent_BaseHP * DV_FantasticStory_BaseAbility_2110_EnterFever_P3_Ratio) * Bomb_Layer)",
                        "constants": [],
                        "variables": [
                          "BattleEvent_BaseHP",
                          "DV_FantasticStory_BaseAbility_2110_EnterFever_P3_Ratio",
                          "Bomb_Layer"
                        ]
                      }
                    },
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Targets Adjacent to Modifier Holder}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Physical",
                        "DamageFlat": {
                          "operator": "Variables[0] (Bomb_Damage_Adjoin) || RETURN",
                          "displayLines": "Bomb_Damage_Adjoin",
                          "constants": [],
                          "variables": [
                            "Bomb_Damage_Adjoin"
                          ]
                        },
                        "dmgFormulaFinal": "Converted DMG Base",
                        "Toughness": null,
                        "Tags": [
                          "Bomb DMG"
                        ],
                        "attackType": "True DMG"
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
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Physical",
                        "DamageFlat": {
                          "operator": "Variables[0] (Bomb_Damage) || RETURN",
                          "displayLines": "Bomb_Damage",
                          "constants": [],
                          "variables": [
                            "Bomb_Damage"
                          ]
                        },
                        "dmgFormulaFinal": "Converted DMG Base",
                        "Toughness": null,
                        "Tags": [
                          "Bomb DMG"
                        ],
                        "attackType": "True DMG"
                      }
                    }
                  ]
                },
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueType": "Layer",
                  "variableName": "Bomb_Layer",
                  "multiplier": 1
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "Bomb_Damage",
                  "value": {
                    "operator": "Variables[0] (BattleEvent_BaseHP) || Variables[1] (DV_FantasticStory_BaseAbility_2110_BeforeFever_P2_Ratio) || MUL || Variables[2] (Bomb_Layer) || MUL || RETURN",
                    "displayLines": "((BattleEvent_BaseHP * DV_FantasticStory_BaseAbility_2110_BeforeFever_P2_Ratio) * Bomb_Layer)",
                    "constants": [],
                    "variables": [
                      "BattleEvent_BaseHP",
                      "DV_FantasticStory_BaseAbility_2110_BeforeFever_P2_Ratio",
                      "Bomb_Layer"
                    ]
                  }
                },
                {
                  "name": "Add Ability",
                  "abilityName": "FantasticStory_BaseAbility_2110_Insert_Camera_Enemy"
                },
                {
                  "name": "Add Ability",
                  "abilityName": "FantasticStory_BaseAbility_2110_Insert_Enemy"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "Modifier_FantasticStory_BaseAbility_2110_aura"
                  },
                  "passed": [
                    {
                      "name": "Update Modifier Description"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Was Killed (Queued) [Owner]",
              "execute": [
                {
                  "name": "Dispel Debuffs",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "silent": true
                },
                {
                  "name": "Mark Entity For Immediate Death"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "Modifier_FantasticStory_BaseAbility_2110_aura"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Bomb_Damage_Adjoin",
                      "value": {
                        "operator": "Variables[0] (BattleEvent_BaseHP) || Variables[1] (DV_FantasticStory_BaseAbility_2110_EnterFever_P3_Ratio) || MUL || Variables[2] (Bomb_Layer) || MUL || RETURN",
                        "displayLines": "((BattleEvent_BaseHP * DV_FantasticStory_BaseAbility_2110_EnterFever_P3_Ratio) * Bomb_Layer)",
                        "constants": [],
                        "variables": [
                          "BattleEvent_BaseHP",
                          "DV_FantasticStory_BaseAbility_2110_EnterFever_P3_Ratio",
                          "Bomb_Layer"
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "Modifier_FantasticStory_BaseAbility_2110_plus2_sub"
                      },
                      "passed": [
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "FantasticStory_BaseAbility_2110_Insert_Enemy",
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "priorityTag": "MonsterChangePhase",
                          "ownerState": "Mask_AliveOrLimbo",
                          "targetState": "Mask_AliveOrLimbo",
                          "canHitNonTargets": true,
                          "showInActionOrder": true,
                          "valuePerStack": {
                            "Bomb_Damage_get": {
                              "operator": "Variables[0] (Bomb_Damage) || RETURN",
                              "displayLines": "Bomb_Damage",
                              "constants": [],
                              "variables": [
                                "Bomb_Damage"
                              ]
                            },
                            "Bomb_Damage_Adjoin_get": {
                              "operator": "Variables[0] (Bomb_Damage_Adjoin) || RETURN",
                              "displayLines": "Bomb_Damage_Adjoin",
                              "constants": [],
                              "variables": [
                                "Bomb_Damage_Adjoin"
                              ]
                            },
                            "Plus2_DamgeStance": {
                              "operator": "Variables[0] (DV_FantasticStory_PlusAbility_2112_ADF_1) || RETURN",
                              "displayLines": "DV_FantasticStory_PlusAbility_2112_ADF_1",
                              "constants": [],
                              "variables": [
                                "DV_FantasticStory_PlusAbility_2112_ADF_1"
                              ]
                            }
                          },
                          "allowAbilityTriggers": false
                        }
                      ],
                      "failed": [
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "FantasticStory_BaseAbility_2110_Insert_Enemy",
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "priorityTag": "MonsterChangePhase",
                          "ownerState": "Mask_AliveOrLimbo",
                          "targetState": "Mask_AliveOrLimbo",
                          "canHitNonTargets": true,
                          "showInActionOrder": true,
                          "valuePerStack": {
                            "Bomb_Damage_get": {
                              "operator": "Variables[0] (Bomb_Damage) || RETURN",
                              "displayLines": "Bomb_Damage",
                              "constants": [],
                              "variables": [
                                "Bomb_Damage"
                              ]
                            },
                            "Bomb_Damage_Adjoin_get": {
                              "operator": "Variables[0] (Bomb_Damage_Adjoin) || RETURN",
                              "displayLines": "Bomb_Damage_Adjoin",
                              "constants": [],
                              "variables": [
                                "Bomb_Damage_Adjoin"
                              ]
                            }
                          },
                          "allowAbilityTriggers": false
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "FantasticStory_BaseAbility_2110_Insert_Enemy",
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "priorityTag": "MonsterChangePhase",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "valuePerStack": {
                        "Bomb_Damage_get": {
                          "operator": "Variables[0] (Bomb_Damage) || RETURN",
                          "displayLines": "Bomb_Damage",
                          "constants": [],
                          "variables": [
                            "Bomb_Damage"
                          ]
                        }
                      },
                      "allowAbilityTriggers": false
                    }
                  ]
                },
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "Ability Use [Anyone]: Start",
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
                      "name": "Toggle Skill Mark"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Modifier is Added [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "Modifier_FantasticStory_BaseAbility_2110_aura"
                  },
                  "passed": [
                    {
                      "name": "Update Modifier Description"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Losing Modifier [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "Modifier_FantasticStory_BaseAbility_2110_aura"
                  },
                  "passed": [
                    {
                      "name": "Update Modifier Description"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Update Target Selected(UI) [Anyone]",
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
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Toggle Skill Mark",
                      "toggle": true
                    }
                  ],
                  "failed": [
                    {
                      "name": "Toggle Skill Mark"
                    }
                  ]
                }
              ]
            }
          ],
          "description": "When this unit's turn starts or when defeated by any unit, this unit takes a set amount of DMG based on the number of \"Shatter\" stacks.",
          "type": "Debuff",
          "statusName": "Shatter"
        },
        {
          "name": "Modifier Construction",
          "for": "Modifier_FantasticStory_BaseAbility_2110_BeforeFever_sub",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "Take Damage End [Owner]: Hit",
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
                        "value1": "DV_BeingHitCount",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Has Damage Tags",
                        "damageTag": [
                          "Bomb DMG"
                        ],
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
                      "modifier": "Modifier_FantasticStory_BaseAbility_2110_BeforeFever_sub2[<span class=\"descriptionNumberColor\">Shatter</span>]",
                      "stackLimit": {
                        "operator": "Variables[0] (DV_FantasticStory_BaseAbility_2110_BeforeFever_P1_MaxLayer) || RETURN",
                        "displayLines": "DV_FantasticStory_BaseAbility_2110_BeforeFever_P1_MaxLayer",
                        "constants": [],
                        "variables": [
                          "DV_FantasticStory_BaseAbility_2110_BeforeFever_P1_MaxLayer"
                        ]
                      },
                      "addStacksPerTrigger": 1
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "DV_BeingHitCount",
                      "value": 0
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Modifier_FantasticStory_BaseAbility_2110_BeforeFever",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Attack Start [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{Player Team All}}"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "mustBeAlive2": true
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
                            "skillType": "Ultimate"
                          }
                        ]
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "modifier": "Modifier_FantasticStory_BaseAbility_2110_BeforeFever_sub"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Attack Action Completed [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Enemy Team All}}"
                    },
                    "modifier": "Modifier_FantasticStory_BaseAbility_2110_BeforeFever_sub"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "modifier": "Modifier_FantasticStory_BaseAbility_2110_BeforeFever_sub"
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "modifier": "Modifier_FantasticStory_BaseAbility_2110_BeforeFever_ForShow[<span class=\"descriptionNumberColor\">Concordant Truce</span>]",
              "haloStatus": true
            }
          ]
        }
      ]
    },
    "-825953332_FantasticStory_BaseAbility_2110_BaseAddOn": {
      "fileName": "-825953332_FantasticStory_BaseAbility_2110_BaseAddOn",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_BaseAbility_2110_BaseAddOn_P1_Ratio",
          "value": {
            "operator": "Variables[0] (ADF_1_Get) || Constants[0] (100) || DIV || RETURN",
            "displayLines": "(ADF_1_Get / 100)",
            "constants": [
              100
            ],
            "variables": [
              "ADF_1_Get"
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Modifier_FantasticStory_BaseAbility_2110_BaseAddOn"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Modifier_FantasticStory_BaseAbility_2110_BaseAddOn",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Attack DMG End [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{Player Team All}}"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "mustBeAlive2": true
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
                            "skillType": "Ultimate"
                          }
                        ]
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "Modifier_FantasticStory_BaseAbility_2110_aura",
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Attack Targets",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "variableName": "DV_TargetCount"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "DV_FantasticStory_BaseAbility_CountSum",
                      "value": {
                        "operator": "Variables[0] (DV_FantasticStory_BaseAbility_CountSum) || Variables[1] (DV_EnterFeverValue) || Variables[2] (DV_FantasticStory_BaseAbility_2110_BaseAddOn_P1_Ratio) || MUL || Variables[3] (DV_TargetCount) || MUL || ADD || RETURN",
                        "displayLines": "(DV_FantasticStory_BaseAbility_CountSum + ((DV_EnterFeverValue * DV_FantasticStory_BaseAbility_2110_BaseAddOn_P1_Ratio) * DV_TargetCount))",
                        "constants": [],
                        "variables": [
                          "DV_FantasticStory_BaseAbility_CountSum",
                          "DV_EnterFeverValue",
                          "DV_FantasticStory_BaseAbility_2110_BaseAddOn_P1_Ratio",
                          "DV_TargetCount"
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_BaseAbility_CountSum",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (DV_EnterFeverValue) || RETURN",
                          "displayLines": "DV_EnterFeverValue",
                          "constants": [],
                          "variables": [
                            "DV_EnterFeverValue"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Update Surging Grit[PF]",
                          "current": 100,
                          "max": 100,
                          "delta": {
                            "operator": "Variables[0] (DV_TargetCount) || Variables[1] (DV_EnterFeverValue) || MUL || Variables[2] (DV_FantasticStory_BaseAbility_2110_BaseAddOn_P1_Ratio) || MUL || RETURN",
                            "displayLines": "((DV_TargetCount * DV_EnterFeverValue) * DV_FantasticStory_BaseAbility_2110_BaseAddOn_P1_Ratio)",
                            "constants": [],
                            "variables": [
                              "DV_TargetCount",
                              "DV_EnterFeverValue",
                              "DV_FantasticStory_BaseAbility_2110_BaseAddOn_P1_Ratio"
                            ]
                          },
                          "type": "FeverSpecial",
                          "phaseType": "P1"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Update Surging Grit[PF]",
                          "current": {
                            "operator": "Variables[0] (DV_FantasticStory_BaseAbility_CountSum) || RETURN",
                            "displayLines": "DV_FantasticStory_BaseAbility_CountSum",
                            "constants": [],
                            "variables": [
                              "DV_FantasticStory_BaseAbility_CountSum"
                            ]
                          },
                          "max": {
                            "operator": "Variables[0] (DV_EnterFeverValue) || RETURN",
                            "displayLines": "DV_EnterFeverValue",
                            "constants": [],
                            "variables": [
                              "DV_EnterFeverValue"
                            ]
                          },
                          "delta": {
                            "operator": "Variables[0] (DV_TargetCount) || Variables[1] (DV_EnterFeverValue) || MUL || Variables[2] (DV_FantasticStory_BaseAbility_2110_BaseAddOn_P1_Ratio) || MUL || RETURN",
                            "displayLines": "((DV_TargetCount * DV_EnterFeverValue) * DV_FantasticStory_BaseAbility_2110_BaseAddOn_P1_Ratio)",
                            "constants": [],
                            "variables": [
                              "DV_TargetCount",
                              "DV_EnterFeverValue",
                              "DV_FantasticStory_BaseAbility_2110_BaseAddOn_P1_Ratio"
                            ]
                          },
                          "type": "FeverSpecial"
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "DV_TargetCount",
                      "value": 0
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
              },
              "modifier": "Modifier_FantasticStory_BaseAbility_2110_BaseAddOn_ForShow[<span class=\"descriptionNumberColor\">Grit Mechanics</span>]",
              "haloStatus": true,
              "valuePerStack": {
                "DV_Ratio": {
                  "operator": "Variables[0] (DV_FantasticStory_BaseAbility_2110_BaseAddOn_P1_Ratio) || Constants[0] (100) || MUL || RETURN",
                  "displayLines": "(DV_FantasticStory_BaseAbility_2110_BaseAddOn_P1_Ratio * 100)",
                  "constants": [
                    100
                  ],
                  "variables": [
                    "DV_FantasticStory_BaseAbility_2110_BaseAddOn_P1_Ratio"
                  ]
                }
              }
            }
          ]
        }
      ]
    },
    "-825953332_FantasticStory_BaseAbility_2110": {
      "fileName": "-825953332_FantasticStory_BaseAbility_2110",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_BaseAbility_CountSum"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_BaseAbility_CountSumTemp"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_EnterFeverValue",
          "value": {
            "operator": "Variables[0] (ADF_1_Get) || RETURN",
            "displayLines": "ADF_1_Get",
            "constants": [],
            "variables": [
              "ADF_1_Get"
            ]
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_BeforeFeverEliteDmgRatio",
          "value": {
            "operator": "Variables[0] (ADF_3_Get) || RETURN",
            "displayLines": "ADF_3_Get",
            "constants": [],
            "variables": [
              "ADF_3_Get"
            ]
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_BeforeFeverKillChargeRatio",
          "value": {
            "operator": "Variables[0] (ADF_4_Get) || RETURN",
            "displayLines": "ADF_4_Get",
            "constants": [],
            "variables": [
              "ADF_4_Get"
            ]
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FeverKillReturnRatio",
          "value": {
            "operator": "Variables[0] (ADF_5_Get) || RETURN",
            "displayLines": "ADF_5_Get",
            "constants": [],
            "variables": [
              "ADF_5_Get"
            ]
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FeverBESpeed",
          "value": {
            "operator": "Variables[0] (ADF_6_Get) || RETURN",
            "displayLines": "ADF_6_Get",
            "constants": [],
            "variables": [
              "ADF_6_Get"
            ]
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_BaseAbility_CountSumTempMax",
          "value": {
            "operator": "Variables[0] (ADF_1_Get) || Variables[1] (ADF_2_Get) || MUL || RETURN",
            "displayLines": "(ADF_1_Get * ADF_2_Get)",
            "constants": [],
            "variables": [
              "ADF_1_Get",
              "ADF_2_Get"
            ]
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_PlusAbility_2111"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_PlusAbility_2112"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_PlusAbility_2113"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "BattleEvent_BaseHP"
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "BattleEvent_BaseHP",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent%</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "BattleEvent_BaseHP",
          "value": {
            "operator": "Variables[0] (BattleEvent_BaseHP) || Constants[0] (90) || MUL || RETURN",
            "displayLines": "(BattleEvent_BaseHP * 90)",
            "constants": [
              90
            ],
            "variables": [
              "BattleEvent_BaseHP"
            ]
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "DV_FantasticStory_BaseAbility_TriggerFlag"
        },
        {
          "name": "Update Surging Grit[PF]",
          "max": {
            "operator": "Variables[0] (DV_EnterFeverValue) || RETURN",
            "displayLines": "DV_EnterFeverValue",
            "constants": [],
            "variables": [
              "DV_EnterFeverValue"
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Modifier_FantasticStory_BaseAbility_2110"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Modifier_FantasticStory_BaseAbility_2110_sub",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Ability",
                  "abilityName": "FantasticStory_BaseAbility_AllLightTeam_Insert_Camera"
                },
                {
                  "name": "Add Ability",
                  "abilityName": "FantasticStory_BaseAbility_2110_Insert"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "DV_FantasticStory_PlusAbility_2111",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Modifier_FantasticStory_BaseAbility_2110_Plus1AddOn"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "DV_FantasticStory_PlusAbility_2112",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Modifier_FantasticStory_BaseAbility_2110_Plus2AddOn"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "DV_FantasticStory_PlusAbility_2113",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]].[[removeMemosprite]]"
                      },
                      "modifier": "Modifier_FantasticStory_BaseAbility_2110_Plus3AddOn"
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
                        "value1": "DV_FantasticStory_BaseAbility_TriggerFlag",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}.[[removeMemosprite]]"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "ifTargetFound": [
                        {
                          "name": "Inject Ability Use",
                          "condition": {
                            "name": "Insert Ability Condition",
                            "type": "AbilityOwnerInsertUnusedCount",
                            "typeValue": 1
                          },
                          "abilityName": "FantasticStory_BaseAbility_2110_Insert",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "priorityTag": "AvatarBuffSelf",
                          "ownerState": "Anyone",
                          "canHitNonTargets": true,
                          "allowAbilityTriggers": false
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Attack DMG End [Anyone]",
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
                        "name": "Enemies Still Alive",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "includeNonTargets": true
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_BaseAbility_TriggerFlag",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}.[[removeMemosprite]]"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "ifTargetFound": [
                        {
                          "name": "Inject Ability Use",
                          "condition": {
                            "name": "Insert Ability Condition",
                            "type": "AbilityOwnerInsertUnusedCount",
                            "typeValue": 1
                          },
                          "abilityName": "FantasticStory_BaseAbility_2110_Insert",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "priorityTag": "AvatarBuffSelf",
                          "ownerState": "Anyone",
                          "canHitNonTargets": true,
                          "allowAbilityTriggers": false
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "New Enemy Wave",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Enemies Still Alive",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Player Team All}}"
                        },
                        "includeNonTargets": true
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_BaseAbility_TriggerFlag",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}.[[removeMemosprite]]"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "ifTargetFound": [
                        {
                          "name": "Inject Ability Use",
                          "condition": {
                            "name": "Insert Ability Condition",
                            "type": "AbilityOwnerInsertUnusedCount",
                            "typeValue": 1
                          },
                          "abilityName": "FantasticStory_BaseAbility_2110_Insert",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "priorityTag": "AvatarBuffSelf",
                          "ownerState": "Anyone",
                          "canHitNonTargets": true,
                          "allowAbilityTriggers": false
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "DV_FantasticStory_BaseAbility_CountSum",
              "from": "ContextOwner",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": {
                    "operator": "Variables[0] (DV_EnterFeverValue) || RETURN",
                    "displayLines": "DV_EnterFeverValue",
                    "constants": [],
                    "variables": [
                      "DV_EnterFeverValue"
                    ]
                  },
                  "maxValue": 1000000000,
                  "includeMaxValueInRange": true,
                  "whenEnteringRange": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "DV_FantasticStory_BaseAbility_TriggerFlag",
                      "value": 1
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}.[[removeMemosprite]]"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "ifTargetFound": [
                        {
                          "name": "Inject Ability Use",
                          "condition": {
                            "name": "Insert Ability Condition",
                            "type": "AbilityOwnerInsertUnusedCount",
                            "typeValue": 1
                          },
                          "abilityName": "FantasticStory_BaseAbility_2110_Insert",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "priorityTag": "AvatarBuffSelf",
                          "ownerState": "Anyone",
                          "canHitNonTargets": true,
                          "allowAbilityTriggers": false
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
          "for": "Modifier_FantasticStory_BaseAbility_2110",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Entity Death [Anyone]",
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
                        "team": "Enemy Team"
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
                            "name": "Compare: Monster Rank",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "compareType": ">=",
                            "value2": 3
                          },
                          {
                            "name": "Enemy ID",
                            "ID": 8003060,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "characterName": "Fictional Ensemble"
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Update Max Wave Count",
                          "add": -99
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Enemy Team All}}"
                          },
                          "modifier": "MDF_NoScore"
                        },
                        {
                          "name": "Force Entity Death",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Enemy Team All}}"
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "MDF_NoScore"
                          },
                          "failed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                },
                                "modifier": "Modifier_FantasticStory_BaseAbility_2110_aura"
                              },
                              "passed": [
                                {
                                  "name": "Define Custom Variable with Stat",
                                  "target": {
                                    "name": "Target Sequence",
                                    "Sequence": [
                                      {
                                        "name": "Target Name",
                                        "target": "{{Battle Event List}}"
                                      },
                                      {
                                        "name": "Target Filter",
                                        "conditions": {
                                          "name": "Has Modifier",
                                          "target": {
                                            "name": "Target Name",
                                            "target": "{{Parameter Target}}"
                                          },
                                          "modifier": "Modifier_FantasticStory_BaseAbility_2110_ListenBEDelay"
                                        }
                                      }
                                    ]
                                  },
                                  "variableName": "DV_Delay",
                                  "value": "&nbsp;<span class=\"descriptionNumberColor\">ActionDelay</span>&nbsp;"
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "DV_FantasticStory_BaseAbility_CountSumTemp",
                                  "value": {
                                    "operator": "Variables[0] (DV_FantasticStory_BaseAbility_CountSumTemp) || Variables[1] (DV_EnterFeverValue) || Variables[2] (DV_BeforeFeverKillChargeRatio) || MUL || ADD || RETURN",
                                    "displayLines": "(DV_FantasticStory_BaseAbility_CountSumTemp + (DV_EnterFeverValue * DV_BeforeFeverKillChargeRatio))",
                                    "constants": [],
                                    "variables": [
                                      "DV_FantasticStory_BaseAbility_CountSumTemp",
                                      "DV_EnterFeverValue",
                                      "DV_BeforeFeverKillChargeRatio"
                                    ]
                                  }
                                },
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Compare: Variable",
                                    "value1": "DV_FantasticStory_BaseAbility_CountSumTemp",
                                    "compareType": ">=",
                                    "value2": {
                                      "operator": "Variables[0] (DV_FantasticStory_BaseAbility_CountSumTempMax) || RETURN",
                                      "displayLines": "DV_FantasticStory_BaseAbility_CountSumTempMax",
                                      "constants": [],
                                      "variables": [
                                        "DV_FantasticStory_BaseAbility_CountSumTempMax"
                                      ]
                                    }
                                  },
                                  "passed": [
                                    {
                                      "name": "Define Custom Variable",
                                      "variableName": "DV_FantasticStory_BaseAbility_CountSumTemp",
                                      "value": {
                                        "operator": "Variables[0] (DV_FantasticStory_BaseAbility_CountSumTempMax) || RETURN",
                                        "displayLines": "DV_FantasticStory_BaseAbility_CountSumTempMax",
                                        "constants": [],
                                        "variables": [
                                          "DV_FantasticStory_BaseAbility_CountSumTempMax"
                                        ]
                                      }
                                    },
                                    {
                                      "name": "Update Surging Grit[PF]",
                                      "current": {
                                        "operator": "Variables[0] (DV_Delay) || Constants[0] (10) || MUL || RETURN",
                                        "displayLines": "(DV_Delay * 10)",
                                        "constants": [
                                          10
                                        ],
                                        "variables": [
                                          "DV_Delay"
                                        ]
                                      },
                                      "max": 100,
                                      "extra": {
                                        "operator": "Variables[0] (FLOOR) || Variables[1] (DV_FantasticStory_BaseAbility_CountSumTemp) || PARAM_1 || FUNCTION || RETURN",
                                        "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>(DV_FantasticStory_BaseAbility_CountSumTemp)",
                                        "constants": [],
                                        "variables": [
                                          "FLOOR",
                                          "DV_FantasticStory_BaseAbility_CountSumTemp"
                                        ]
                                      },
                                      "phaseType": "P1",
                                      "reachedLimit": true
                                    }
                                  ],
                                  "failed": [
                                    {
                                      "name": "Update Surging Grit[PF]",
                                      "current": {
                                        "operator": "Variables[0] (DV_Delay) || Constants[0] (10) || MUL || RETURN",
                                        "displayLines": "(DV_Delay * 10)",
                                        "constants": [
                                          10
                                        ],
                                        "variables": [
                                          "DV_Delay"
                                        ]
                                      },
                                      "max": 100,
                                      "extra": {
                                        "operator": "Variables[0] (FLOOR) || Variables[1] (DV_FantasticStory_BaseAbility_CountSumTemp) || PARAM_1 || FUNCTION || RETURN",
                                        "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>(DV_FantasticStory_BaseAbility_CountSumTemp)",
                                        "constants": [],
                                        "variables": [
                                          "FLOOR",
                                          "DV_FantasticStory_BaseAbility_CountSumTemp"
                                        ]
                                      },
                                      "phaseType": "P1"
                                    }
                                  ]
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "DV_FantasticStory_BaseAbility_CountSum",
                                  "value": {
                                    "operator": "Variables[0] (DV_FantasticStory_BaseAbility_CountSum) || Variables[1] (DV_EnterFeverValue) || Variables[2] (DV_FeverKillReturnRatio) || MUL || ADD || RETURN",
                                    "displayLines": "(DV_FantasticStory_BaseAbility_CountSum + (DV_EnterFeverValue * DV_FeverKillReturnRatio))",
                                    "constants": [],
                                    "variables": [
                                      "DV_FantasticStory_BaseAbility_CountSum",
                                      "DV_EnterFeverValue",
                                      "DV_FeverKillReturnRatio"
                                    ]
                                  }
                                },
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Compare: Variable",
                                    "value1": "DV_FantasticStory_BaseAbility_CountSum",
                                    "compareType": ">=",
                                    "value2": {
                                      "operator": "Variables[0] (DV_EnterFeverValue) || RETURN",
                                      "displayLines": "DV_EnterFeverValue",
                                      "constants": [],
                                      "variables": [
                                        "DV_EnterFeverValue"
                                      ]
                                    }
                                  },
                                  "passed": [
                                    {
                                      "name": "Update Surging Grit[PF]",
                                      "current": 100,
                                      "max": 100,
                                      "delta": {
                                        "operator": "Variables[0] (DV_EnterFeverValue) || Variables[1] (DV_FeverKillReturnRatio) || MUL || RETURN",
                                        "displayLines": "(DV_EnterFeverValue * DV_FeverKillReturnRatio)",
                                        "constants": [],
                                        "variables": [
                                          "DV_EnterFeverValue",
                                          "DV_FeverKillReturnRatio"
                                        ]
                                      },
                                      "type": "Normal",
                                      "phaseType": "P1"
                                    }
                                  ],
                                  "failed": [
                                    {
                                      "name": "Update Surging Grit[PF]",
                                      "current": {
                                        "operator": "Variables[0] (DV_FantasticStory_BaseAbility_CountSum) || RETURN",
                                        "displayLines": "DV_FantasticStory_BaseAbility_CountSum",
                                        "constants": [],
                                        "variables": [
                                          "DV_FantasticStory_BaseAbility_CountSum"
                                        ]
                                      },
                                      "max": {
                                        "operator": "Variables[0] (DV_EnterFeverValue) || RETURN",
                                        "displayLines": "DV_EnterFeverValue",
                                        "constants": [],
                                        "variables": [
                                          "DV_EnterFeverValue"
                                        ]
                                      },
                                      "delta": {
                                        "operator": "Variables[0] (DV_EnterFeverValue) || Variables[1] (DV_FeverKillReturnRatio) || MUL || RETURN",
                                        "displayLines": "(DV_EnterFeverValue * DV_FeverKillReturnRatio)",
                                        "constants": [],
                                        "variables": [
                                          "DV_EnterFeverValue",
                                          "DV_FeverKillReturnRatio"
                                        ]
                                      },
                                      "type": "Normal"
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              "name": "Find New Target",
                              "from": {
                                "name": "Target Name",
                                "target": "{{Enemy Team All}}"
                              },
                              "searchRandom": true,
                              "maxTargets": 1,
                              "conditions": {
                                "name": "Compare: Monster Rank",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "compareType": ">=",
                                "value2": 3
                              },
                              "ifTargetFound": [
                                {
                                  "name": "Define Custom Variable with Stat",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "variableName": "DV_maxHP",
                                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                                },
                                {
                                  "name": "ATK Scaling DMG",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "canPhase": true,
                                  "AttackScaling": {
                                    "DamageType": "Physical",
                                    "DamageFlat": {
                                      "operator": "Variables[0] (DV_maxHP) || Variables[1] (DV_BeforeFeverEliteDmgRatio) || MUL || RETURN",
                                      "displayLines": "(DV_maxHP * DV_BeforeFeverEliteDmgRatio)",
                                      "constants": [],
                                      "variables": [
                                        "DV_maxHP",
                                        "DV_BeforeFeverEliteDmgRatio"
                                      ]
                                    },
                                    "notAHit": true,
                                    "dmgFormulaFinal": "Converted DMG Base",
                                    "Toughness": null,
                                    "Tags": null,
                                    "attackType": "True DMG"
                                  }
                                }
                              ],
                              "noTargetFound": [
                                {
                                  "name": "Find New Target",
                                  "from": {
                                    "name": "Target Name",
                                    "target": "{{Enemy Team All(with Unselectable)}}"
                                  },
                                  "searchRandom": true,
                                  "maxTargets": 1,
                                  "conditions": {
                                    "name": "Enemy ID",
                                    "ID": 8003060,
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "characterName": "Fictional Ensemble"
                                  },
                                  "ifTargetFound": [
                                    {
                                      "name": "Define Custom Variable with Stat",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "variableName": "DV_maxHP",
                                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                                    },
                                    {
                                      "name": "ATK Scaling DMG",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "canPhase": true,
                                      "AttackScaling": {
                                        "DamageType": "Physical",
                                        "DamageFlat": {
                                          "operator": "Variables[0] (DV_maxHP) || Constants[0] (20) || DIV || Constants[1] (0.0009999999) || ADD || RETURN",
                                          "displayLines": "((DV_maxHP / 20) + 0.0009999999)",
                                          "constants": [
                                            20,
                                            0.0009999999
                                          ],
                                          "variables": [
                                            "DV_maxHP"
                                          ]
                                        },
                                        "notAHit": true,
                                        "dmgFormulaFinal": "Converted DMG Base",
                                        "Toughness": null,
                                        "Tags": null,
                                        "attackType": "True DMG"
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
                    "team": "Enemy Team"
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All(with Unselectable)}}"
                      },
                      "maxTargets": 1,
                      "conditions": {
                        "name": "OR",
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
                            "name": "Enemy ID",
                            "ID": 8003060,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "characterName": "Fictional Ensemble"
                          }
                        ]
                      },
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "Modifier_FantasticStory_HPParentChild[<span class=\"descriptionNumberColor\">Binding Obligation</span>]"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Modifier_FantasticStory_BaseAbility_2110_sub"
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All(with Unselectable)}}"
                  },
                  "maxTargets": 1,
                  "conditions": {
                    "name": "OR",
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
                        "name": "Enemy ID",
                        "ID": 8003060,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Fictional Ensemble"
                      }
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Modifier_FantasticStory_HPParentChild[<span class=\"descriptionNumberColor\">Binding Obligation</span>]"
                    },
                    {
                      "name": "Boss Bar Display",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "display": true
                    }
                  ]
                }
              ],
              "priorityLevel": -90
            }
          ],
          "stackData": [],
          "latentQueue": [
            "DV_FantasticStory_PlusAbility_2111",
            "DV_FantasticStory_PlusAbility_2112",
            "DV_FantasticStory_PlusAbility_2113",
            "DV_FantasticStory_BaseAbility_TriggerFlag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Modifier_FantasticStory_HPParentChildForShow[<span class=\"descriptionNumberColor\">Fate's Convergence</span>]",
          "stackType": "ReplaceByCaster",
          "description": "After being defeated, deal DMG based on a certain percentage of their Max HP to the Elite enemy target.",
          "type": "Buff",
          "effectName": "Fate's Convergence",
          "statusName": "Fate's Convergence"
        },
        {
          "name": "Modifier Construction",
          "for": "Modifier_FantasticStory_HPParentChild[<span class=\"descriptionNumberColor\">Binding Obligation</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Sever Group Relationship",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All(with Unselectable)}}"
                  },
                  "relatedGroup": "HPParentChild"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All(with Unselectable)}}"
                  },
                  "modifier": "Modifier_FantasticStory_HPParentChildForShow[<span class=\"descriptionNumberColor\">Fate's Convergence</span>]"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Establish Group Relationship",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "subTarget": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All(with Unselectable)}} - {{Modifier Holder}}"
                  },
                  "relatedGroup": "HPParentChild"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All(with Unselectable)}} - {{Modifier Holder}}"
                  },
                  "modifier": "Modifier_FantasticStory_HPParentChildForShow[<span class=\"descriptionNumberColor\">Fate's Convergence</span>]"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "DV_FantasticStory_BaseAbility_TriggerFlag",
            "DV_FantasticStory_PlusAbility_2113",
            "DV_FantasticStory_PlusAbility_2112",
            "DV_FantasticStory_PlusAbility_2111"
          ],
          "description": "After non-Elite enemy targets are defeated, receive DMG based on a certain percentage of this unit's Max HP.",
          "type": "Buff",
          "effectName": "Binding Obligation",
          "statusName": "Binding Obligation"
        }
      ]
    },
    "-825953332_FantasticStory_BaseAbility_2100": {
      "fileName": "-825953332_FantasticStory_BaseAbility_2100",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Define Variable with Buff Configs",
          "finalKeyArray": [
            {
              "name": "ADF_1",
              "value": 100
            },
            {
              "name": "ADF_2",
              "value": 0.3
            },
            {
              "name": "ADF_3",
              "value": 0.03
            },
            {
              "name": "ADF_4",
              "value": 0.05
            },
            {
              "name": "ADF_5",
              "value": 0.05
            },
            {
              "name": "ADF_6",
              "value": 100
            },
            {
              "name": "ADF_7",
              "value": 3
            },
            {
              "name": "ADF_8",
              "value": 3
            },
            {
              "name": "ADF_9",
              "value": 0.5
            },
            {
              "name": "ADF_10",
              "value": 0.3
            },
            {
              "name": "ADF_11",
              "value": 0.5
            },
            {
              "name": "ADF_12",
              "value": 0.35
            }
          ]
        },
        {
          "name": "Add Ability",
          "abilityName": "FantasticStory_BaseAbility_2110",
          "parameters": {
            "ADF_1_Get": {
              "operator": "Variables[0] (ADF_1) || RETURN",
              "displayLines": "ADF_1",
              "constants": [],
              "variables": [
                "ADF_1"
              ]
            },
            "ADF_2_Get": {
              "operator": "Variables[0] (ADF_2) || RETURN",
              "displayLines": "ADF_2",
              "constants": [],
              "variables": [
                "ADF_2"
              ]
            },
            "ADF_3_Get": {
              "operator": "Variables[0] (ADF_3) || RETURN",
              "displayLines": "ADF_3",
              "constants": [],
              "variables": [
                "ADF_3"
              ]
            },
            "ADF_4_Get": {
              "operator": "Variables[0] (ADF_4) || RETURN",
              "displayLines": "ADF_4",
              "constants": [],
              "variables": [
                "ADF_4"
              ]
            },
            "ADF_5_Get": {
              "operator": "Variables[0] (ADF_5) || RETURN",
              "displayLines": "ADF_5",
              "constants": [],
              "variables": [
                "ADF_5"
              ]
            },
            "ADF_6_Get": {
              "operator": "Variables[0] (ADF_6) || RETURN",
              "displayLines": "ADF_6",
              "constants": [],
              "variables": [
                "ADF_6"
              ]
            }
          }
        },
        {
          "name": "Add Ability",
          "abilityName": "FantasticStory_BaseAbility_2110_BaseAddOn",
          "parameters": {
            "ADF_1_Get": {
              "operator": "Variables[0] (ADF_7) || RETURN",
              "displayLines": "ADF_7",
              "constants": [],
              "variables": [
                "ADF_7"
              ]
            }
          }
        },
        {
          "name": "Add Ability",
          "abilityName": "FantasticStory_BaseAbility_2110_BeforeFever",
          "parameters": {
            "ADF_1_Get": {
              "operator": "Variables[0] (ADF_8) || RETURN",
              "displayLines": "ADF_8",
              "constants": [],
              "variables": [
                "ADF_8"
              ]
            },
            "ADF_2_Get": {
              "operator": "Variables[0] (ADF_9) || RETURN",
              "displayLines": "ADF_9",
              "constants": [],
              "variables": [
                "ADF_9"
              ]
            }
          }
        },
        {
          "name": "Add Ability",
          "abilityName": "FantasticStory_BaseAbility_2110_EnterFever",
          "parameters": {
            "ADF_1_Get": {
              "operator": "Variables[0] (ADF_10) || RETURN",
              "displayLines": "ADF_10",
              "constants": [],
              "variables": [
                "ADF_10"
              ]
            },
            "ADF_2_Get": {
              "operator": "Variables[0] (ADF_11) || RETURN",
              "displayLines": "ADF_11",
              "constants": [],
              "variables": [
                "ADF_11"
              ]
            },
            "ADF_3_Get": {
              "operator": "Variables[0] (ADF_12) || RETURN",
              "displayLines": "ADF_12",
              "constants": [],
              "variables": [
                "ADF_12"
              ]
            }
          }
        }
      ],
      "references": []
    },
    "-825953332_Modifiers": {
      "fileName": "-825953332_Modifiers",
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
          "for": "Modifier_FantasticStory_BaseAbility_2110_ExceedSP[<span class=\"descriptionNumberColor\">Energy Overflow</span>]",
          "stackType": "ReplaceByCaster",
          "description": "<span class=\"descriptionNumberColor\">EntityStockSPForShow</span> extra Energy. This will be consumed first when unleashing Ultimate.",
          "type": "Other",
          "effectName": "Energy Overflow",
          "statusName": "Energy Overflow"
        },
        {
          "name": "Modifier Construction",
          "for": "Modifier_FantasticStory_BaseAbility_2110_ReturnSP",
          "stackType": "ReplaceByCaster",
          "execute": [
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
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "_CurrentSP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrent</span>&nbsp;"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "EntityStockSP",
                        "compareType": "<=",
                        "value2": {
                          "operator": "Variables[0] (EntityMaxSP) || Variables[1] (_CurrentSP) || SUB || RETURN",
                          "displayLines": "(EntityMaxSP - _CurrentSP)",
                          "constants": [],
                          "variables": [
                            "EntityMaxSP",
                            "_CurrentSP"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Update Energy",
                          "on": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "value": {
                            "operator": "Variables[0] (EntityStockSP) || RETURN",
                            "displayLines": "EntityStockSP",
                            "constants": [],
                            "variables": [
                              "EntityStockSP"
                            ]
                          },
                          "isFixed": "(Fixed)"
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "EntityStockSP",
                          "value": 0
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "Modifier_FantasticStory_BaseAbility_2110_ExceedSP[<span class=\"descriptionNumberColor\">Energy Overflow</span>]"
                        },
                        "Modifier Deletes Itself"
                      ],
                      "failed": [
                        {
                          "name": "Update Energy",
                          "on": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "value": {
                            "operator": "Variables[0] (EntityMaxSP) || Variables[1] (_CurrentSP) || SUB || RETURN",
                            "displayLines": "(EntityMaxSP - _CurrentSP)",
                            "constants": [],
                            "variables": [
                              "EntityMaxSP",
                              "_CurrentSP"
                            ]
                          },
                          "isFixed": "(Fixed)"
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "EntityStockSP",
                          "value": {
                            "operator": "Variables[0] (EntityStockSP) || Variables[1] (EntityMaxSP) || SUB || Variables[2] (_CurrentSP) || ADD || RETURN",
                            "displayLines": "((EntityStockSP - EntityMaxSP) + _CurrentSP)",
                            "constants": [],
                            "variables": [
                              "EntityStockSP",
                              "EntityMaxSP",
                              "_CurrentSP"
                            ]
                          }
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "Modifier_FantasticStory_BaseAbility_2110_ExceedSP[<span class=\"descriptionNumberColor\">Energy Overflow</span>]",
                          "valuePerStack": {
                            "EntityStockSPForShow": {
                              "operator": "Variables[0] (EntityStockSP) || RETURN",
                              "displayLines": "EntityStockSP",
                              "constants": [],
                              "variables": [
                                "EntityStockSP"
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
          ],
          "stackData": [],
          "latentQueue": [
            "DV_FantasticStory_BaseAbility_TriggerFlag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Modifier_FantasticStory_BaseAbility_2110_AddSP",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
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
                        "name": "Is Entity a Battle Event/Summon",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "EntityCurrentSP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrent</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "EntityMaxSP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "EntityCurrentSP",
                      "value": {
                        "operator": "Variables[0] (EntityCurrentSP) || Variables[1] (EntityMaxSP) || Variables[2] (BattleEvent_P1_ADF_Get) || MUL || ADD || RETURN",
                        "displayLines": "(EntityCurrentSP + (EntityMaxSP * BattleEvent_P1_ADF_Get))",
                        "constants": [],
                        "variables": [
                          "EntityCurrentSP",
                          "EntityMaxSP",
                          "BattleEvent_P1_ADF_Get"
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "EntityCurrentSP",
                        "compareType": "<=",
                        "value2": {
                          "operator": "Variables[0] (EntityMaxSP) || RETURN",
                          "displayLines": "EntityMaxSP",
                          "constants": [],
                          "variables": [
                            "EntityMaxSP"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Update Energy",
                          "on": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "value": {
                            "operator": "Variables[0] (EntityMaxSP) || Variables[1] (BattleEvent_P1_ADF_Get) || MUL || RETURN",
                            "displayLines": "(EntityMaxSP * BattleEvent_P1_ADF_Get)",
                            "constants": [],
                            "variables": [
                              "EntityMaxSP",
                              "BattleEvent_P1_ADF_Get"
                            ]
                          },
                          "isFixed": "(Fixed)"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Update Energy",
                          "on": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "valuePercent": 1,
                          "isFixed": "(Fixed)"
                        },
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "EntityStockSP",
                          "value": {
                            "operator": "Variables[0] (EntityStockSP) || Variables[1] (EntityCurrentSP) || ADD || Variables[2] (EntityMaxSP) || SUB || RETURN",
                            "displayLines": "((EntityStockSP + EntityCurrentSP) - EntityMaxSP)",
                            "constants": [],
                            "variables": [
                              "EntityStockSP",
                              "EntityCurrentSP",
                              "EntityMaxSP"
                            ]
                          }
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "Modifier_FantasticStory_BaseAbility_2110_ExceedSP[<span class=\"descriptionNumberColor\">Energy Overflow</span>]",
                          "valuePerStack": {
                            "EntityStockSPForShow": {
                              "operator": "Variables[0] (EntityStockSP) || RETURN",
                              "displayLines": "EntityStockSP",
                              "constants": [],
                              "variables": [
                                "EntityStockSP"
                              ]
                            }
                          }
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "EntityCurrentSP",
                      "value": 0
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "BattleEvent_P1_ADF_Get"
          ],
          "latentQueue": [
            "DV_FantasticStory_BaseAbility_TriggerFlag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Modifier_FantasticStory_BaseAbility_2110_Plus3AddOn_ForShow[<span class=\"descriptionNumberColor\">Grit Mechanics: Sanity</span>]",
          "stackType": "ReplaceByCaster",
          "description": "When receiving an attack or losing HP, allies will additionally accumulate <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_2113_ADF_3</span> Grit Value.",
          "type": "Buff",
          "statusName": "Grit Mechanics: Sanity"
        },
        {
          "name": "Modifier Construction",
          "for": "Modifier_FantasticStory_BaseAbility_2110_Plus3AddOn",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "HP Change [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "Modifier_FantasticStory_BaseAbility_2110_aura",
                    "invertCondition": true
                  },
                  "passed": [
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
                            "value1": "ParameterValue",
                            "compareType": "<",
                            "value2": 0
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DV_FantasticStory_BaseAbility_CountSum",
                          "value": {
                            "operator": "Variables[0] (DV_FantasticStory_BaseAbility_CountSum) || Variables[1] (DV_FantasticStory_PlusAbility_2113_ADF_3) || ADD || RETURN",
                            "displayLines": "(DV_FantasticStory_BaseAbility_CountSum + DV_FantasticStory_PlusAbility_2113_ADF_3)",
                            "constants": [],
                            "variables": [
                              "DV_FantasticStory_BaseAbility_CountSum",
                              "DV_FantasticStory_PlusAbility_2113_ADF_3"
                            ]
                          }
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "DV_FantasticStory_BaseAbility_CountSum",
                            "compareType": ">=",
                            "value2": {
                              "operator": "Variables[0] (DV_EnterFeverValue) || RETURN",
                              "displayLines": "DV_EnterFeverValue",
                              "constants": [],
                              "variables": [
                                "DV_EnterFeverValue"
                              ]
                            }
                          },
                          "passed": [
                            {
                              "name": "Update Surging Grit[PF]",
                              "current": 100,
                              "max": 100,
                              "delta": {
                                "operator": "Variables[0] (DV_FantasticStory_PlusAbility_2113_ADF_3) || RETURN",
                                "displayLines": "DV_FantasticStory_PlusAbility_2113_ADF_3",
                                "constants": [],
                                "variables": [
                                  "DV_FantasticStory_PlusAbility_2113_ADF_3"
                                ]
                              },
                              "type": "Special",
                              "phaseType": "P1"
                            }
                          ],
                          "failed": [
                            {
                              "name": "Update Surging Grit[PF]",
                              "current": {
                                "operator": "Variables[0] (DV_FantasticStory_BaseAbility_CountSum) || RETURN",
                                "displayLines": "DV_FantasticStory_BaseAbility_CountSum",
                                "constants": [],
                                "variables": [
                                  "DV_FantasticStory_BaseAbility_CountSum"
                                ]
                              },
                              "max": {
                                "operator": "Variables[0] (DV_EnterFeverValue) || RETURN",
                                "displayLines": "DV_EnterFeverValue",
                                "constants": [],
                                "variables": [
                                  "DV_EnterFeverValue"
                                ]
                              },
                              "delta": {
                                "operator": "Variables[0] (DV_FantasticStory_PlusAbility_2113_ADF_3) || RETURN",
                                "displayLines": "DV_FantasticStory_PlusAbility_2113_ADF_3",
                                "constants": [],
                                "variables": [
                                  "DV_FantasticStory_PlusAbility_2113_ADF_3"
                                ]
                              },
                              "type": "Special"
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
              "eventTrigger": "Being Attacked Start [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "Modifier_FantasticStory_BaseAbility_2110_aura",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "DV_FantasticStory_BaseAbility_CountSum",
                      "value": {
                        "operator": "Variables[0] (DV_FantasticStory_BaseAbility_CountSum) || Variables[1] (DV_FantasticStory_PlusAbility_2113_ADF_3) || ADD || RETURN",
                        "displayLines": "(DV_FantasticStory_BaseAbility_CountSum + DV_FantasticStory_PlusAbility_2113_ADF_3)",
                        "constants": [],
                        "variables": [
                          "DV_FantasticStory_BaseAbility_CountSum",
                          "DV_FantasticStory_PlusAbility_2113_ADF_3"
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_BaseAbility_CountSum",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (DV_EnterFeverValue) || RETURN",
                          "displayLines": "DV_EnterFeverValue",
                          "constants": [],
                          "variables": [
                            "DV_EnterFeverValue"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Update Surging Grit[PF]",
                          "current": 100,
                          "max": 100,
                          "delta": {
                            "operator": "Variables[0] (DV_FantasticStory_PlusAbility_2113_ADF_3) || RETURN",
                            "displayLines": "DV_FantasticStory_PlusAbility_2113_ADF_3",
                            "constants": [],
                            "variables": [
                              "DV_FantasticStory_PlusAbility_2113_ADF_3"
                            ]
                          },
                          "type": "Special",
                          "phaseType": "P1"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Update Surging Grit[PF]",
                          "current": {
                            "operator": "Variables[0] (DV_FantasticStory_BaseAbility_CountSum) || RETURN",
                            "displayLines": "DV_FantasticStory_BaseAbility_CountSum",
                            "constants": [],
                            "variables": [
                              "DV_FantasticStory_BaseAbility_CountSum"
                            ]
                          },
                          "max": {
                            "operator": "Variables[0] (DV_EnterFeverValue) || RETURN",
                            "displayLines": "DV_EnterFeverValue",
                            "constants": [],
                            "variables": [
                              "DV_EnterFeverValue"
                            ]
                          },
                          "delta": {
                            "operator": "Variables[0] (DV_FantasticStory_PlusAbility_2113_ADF_3) || RETURN",
                            "displayLines": "DV_FantasticStory_PlusAbility_2113_ADF_3",
                            "constants": [],
                            "variables": [
                              "DV_FantasticStory_PlusAbility_2113_ADF_3"
                            ]
                          },
                          "type": "Special"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "DV_FantasticStory_PlusAbility_2111",
            "DV_FantasticStory_PlusAbility_2112",
            "DV_FantasticStory_PlusAbility_2113"
          ],
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Modifier_FantasticStory_BaseAbility_2110_Plus3AddOn_ForShow[<span class=\"descriptionNumberColor\">Grit Mechanics: Sanity</span>]",
              "haloStatus": true
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Modifier_FantasticStory_BaseAbility_2110_Plus2AddOn_ForShow[<span class=\"descriptionNumberColor\">Grit Mechanics: Gnosis</span>]",
          "stackType": "ReplaceByCaster",
          "description": "When a Weakness is Broken, additionally accumulates <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_2112_ADF_2</span> Grit Value for allies.",
          "type": "Debuff",
          "statusName": "Grit Mechanics: Gnosis"
        },
        {
          "name": "Modifier Construction",
          "for": "Modifier_FantasticStory_BaseAbility_2110_Plus2AddOn",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Attack Start [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Attack Type",
                        "attackTypes": [
                          "Technique"
                        ],
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "invertCondition": true
                      },
                      {
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{Player Team All}}"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "mustBeAlive2": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "DV_TargetCount",
                      "value": 0
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Attack DMG End [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{Player Team All}}"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "mustBeAlive2": true
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "DV_TargetCount",
                        "compareType": ">",
                        "value2": 0
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "Modifier_FantasticStory_BaseAbility_2110_aura",
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "DV_FantasticStory_BaseAbility_CountSum",
                      "value": {
                        "operator": "Variables[0] (DV_FantasticStory_BaseAbility_CountSum) || Variables[1] (DV_FantasticStory_PlusAbility_2112_ADF_2) || Variables[2] (DV_TargetCount) || MUL || ADD || RETURN",
                        "displayLines": "(DV_FantasticStory_BaseAbility_CountSum + (DV_FantasticStory_PlusAbility_2112_ADF_2 * DV_TargetCount))",
                        "constants": [],
                        "variables": [
                          "DV_FantasticStory_BaseAbility_CountSum",
                          "DV_FantasticStory_PlusAbility_2112_ADF_2",
                          "DV_TargetCount"
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_BaseAbility_CountSum",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (DV_EnterFeverValue) || RETURN",
                          "displayLines": "DV_EnterFeverValue",
                          "constants": [],
                          "variables": [
                            "DV_EnterFeverValue"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Update Surging Grit[PF]",
                          "current": 100,
                          "max": 100,
                          "delta": {
                            "operator": "Variables[0] (DV_TargetCount) || Variables[1] (DV_FantasticStory_PlusAbility_2112_ADF_2) || MUL || RETURN",
                            "displayLines": "(DV_TargetCount * DV_FantasticStory_PlusAbility_2112_ADF_2)",
                            "constants": [],
                            "variables": [
                              "DV_TargetCount",
                              "DV_FantasticStory_PlusAbility_2112_ADF_2"
                            ]
                          },
                          "type": "Special",
                          "phaseType": "P1"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Update Surging Grit[PF]",
                          "current": {
                            "operator": "Variables[0] (DV_FantasticStory_BaseAbility_CountSum) || RETURN",
                            "displayLines": "DV_FantasticStory_BaseAbility_CountSum",
                            "constants": [],
                            "variables": [
                              "DV_FantasticStory_BaseAbility_CountSum"
                            ]
                          },
                          "max": {
                            "operator": "Variables[0] (DV_EnterFeverValue) || RETURN",
                            "displayLines": "DV_EnterFeverValue",
                            "constants": [],
                            "variables": [
                              "DV_EnterFeverValue"
                            ]
                          },
                          "delta": {
                            "operator": "Variables[0] (DV_TargetCount) || Variables[1] (DV_FantasticStory_PlusAbility_2112_ADF_2) || MUL || RETURN",
                            "displayLines": "(DV_TargetCount * DV_FantasticStory_PlusAbility_2112_ADF_2)",
                            "constants": [],
                            "variables": [
                              "DV_TargetCount",
                              "DV_FantasticStory_PlusAbility_2112_ADF_2"
                            ]
                          },
                          "type": "Special"
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "DV_TargetCount",
                      "value": 0
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Weakness Break [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of",
                    "of": {
                      "name": "Target Name",
                      "target": "{{Enemy Team All}}"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "mustBeAlive2": true
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "DV_TargetCount",
                      "value": {
                        "operator": "Variables[0] (DV_TargetCount) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(DV_TargetCount + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "DV_TargetCount"
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "New Enemy Wave",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "DV_TargetCount",
                  "value": 0
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "DV_FantasticStory_PlusAbility_2111",
            "DV_FantasticStory_PlusAbility_2112"
          ],
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All(with Unselectable)}}"
              },
              "modifier": "Modifier_FantasticStory_BaseAbility_2110_Plus2AddOn_ForShow[<span class=\"descriptionNumberColor\">Grit Mechanics: Gnosis</span>]",
              "haloStatus": true
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Modifier_FantasticStory_BaseAbility_2110_Plus1AddOn_ForShow[<span class=\"descriptionNumberColor\">Grit Mechanics: Evince</span>]",
          "stackType": "ReplaceByCaster",
          "description": "After using Skill or launching a Follow-Up ATK, every enemy target hit additionally accumulates <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_2111_ADF_1</span> Grit Value for allies.",
          "type": "Buff",
          "statusName": "Grit Mechanics: Evince"
        },
        {
          "name": "Modifier Construction",
          "for": "Modifier_FantasticStory_BaseAbility_2110_Plus1AddOn",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Deal Damage End [Anyone]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{Player Team All}}"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "mustBeAlive2": true
                      },
                      {
                        "name": "Attack Type",
                        "attackTypes": [
                          "Follow-up"
                        ],
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "DV_InsertFlag",
                      "value": 1
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Attack Start [Anyone]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "DV_InsertFlag",
                  "value": 0
                }
              ]
            },
            {
              "eventTrigger": "Attack DMG End [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{Player Team All}}"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "mustBeAlive2": true
                      },
                      {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "value1": "DV_InsertFlag",
                            "compareType": "=",
                            "value2": 1
                          },
                          {
                            "name": "Skill Type",
                            "skillType": "Skill"
                          }
                        ]
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "Modifier_FantasticStory_BaseAbility_2110_aura",
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Attack Targets",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "variableName": "DV_TargetCount"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "DV_FantasticStory_BaseAbility_CountSum",
                      "value": {
                        "operator": "Variables[0] (DV_FantasticStory_BaseAbility_CountSum) || Variables[1] (DV_FantasticStory_PlusAbility_2111_ADF_1) || Variables[2] (DV_TargetCount) || MUL || ADD || RETURN",
                        "displayLines": "(DV_FantasticStory_BaseAbility_CountSum + (DV_FantasticStory_PlusAbility_2111_ADF_1 * DV_TargetCount))",
                        "constants": [],
                        "variables": [
                          "DV_FantasticStory_BaseAbility_CountSum",
                          "DV_FantasticStory_PlusAbility_2111_ADF_1",
                          "DV_TargetCount"
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_BaseAbility_CountSum",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (DV_EnterFeverValue) || RETURN",
                          "displayLines": "DV_EnterFeverValue",
                          "constants": [],
                          "variables": [
                            "DV_EnterFeverValue"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Update Surging Grit[PF]",
                          "current": 100,
                          "max": 100,
                          "delta": {
                            "operator": "Variables[0] (DV_TargetCount) || Variables[1] (DV_FantasticStory_PlusAbility_2111_ADF_1) || MUL || RETURN",
                            "displayLines": "(DV_TargetCount * DV_FantasticStory_PlusAbility_2111_ADF_1)",
                            "constants": [],
                            "variables": [
                              "DV_TargetCount",
                              "DV_FantasticStory_PlusAbility_2111_ADF_1"
                            ]
                          },
                          "type": "Special",
                          "phaseType": "P1"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Update Surging Grit[PF]",
                          "current": {
                            "operator": "Variables[0] (DV_FantasticStory_BaseAbility_CountSum) || RETURN",
                            "displayLines": "DV_FantasticStory_BaseAbility_CountSum",
                            "constants": [],
                            "variables": [
                              "DV_FantasticStory_BaseAbility_CountSum"
                            ]
                          },
                          "max": {
                            "operator": "Variables[0] (DV_EnterFeverValue) || RETURN",
                            "displayLines": "DV_EnterFeverValue",
                            "constants": [],
                            "variables": [
                              "DV_EnterFeverValue"
                            ]
                          },
                          "delta": {
                            "operator": "Variables[0] (DV_TargetCount) || Variables[1] (DV_FantasticStory_PlusAbility_2111_ADF_1) || MUL || RETURN",
                            "displayLines": "(DV_TargetCount * DV_FantasticStory_PlusAbility_2111_ADF_1)",
                            "constants": [],
                            "variables": [
                              "DV_TargetCount",
                              "DV_FantasticStory_PlusAbility_2111_ADF_1"
                            ]
                          },
                          "type": "Special"
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "DV_TargetCount",
                      "value": 0
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "DV_FantasticStory_PlusAbility_2111"
          ],
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
              },
              "modifier": "Modifier_FantasticStory_BaseAbility_2110_Plus1AddOn_ForShow[<span class=\"descriptionNumberColor\">Grit Mechanics: Evince</span>]",
              "haloStatus": true
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Modifier_FantasticStory_BaseAbility_2110_plus3_sub[<span class=\"descriptionNumberColor\">Sanity</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Ability Use [Owner]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Type",
                    "skillType": "Skill"
                  },
                  "passed": [
                    {
                      "name": "Consume",
                      "consumeFrom": "CurrentHP",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "consumePercent": {
                        "operator": "Variables[0] (DV_FantasticStory_PlusAbility_2113_ADF_1) || RETURN",
                        "displayLines": "DV_FantasticStory_PlusAbility_2113_ADF_1",
                        "constants": [],
                        "variables": [
                          "DV_FantasticStory_PlusAbility_2113_ADF_1"
                        ]
                      },
                      "consumeFloor": 1
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
                    "skillType": "Skill"
                  },
                  "passed": [
                    {
                      "name": "Heal",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "healPercent": {
                        "operator": "Variables[0] (DV_FantasticStory_PlusAbility_2113_ADF_2) || RETURN",
                        "displayLines": "DV_FantasticStory_PlusAbility_2113_ADF_2",
                        "constants": [],
                        "variables": [
                          "DV_FantasticStory_PlusAbility_2113_ADF_2"
                        ]
                      },
                      "formula": "Heal from Target MaxHP"
                    }
                  ]
                }
              ]
            }
          ],
          "description": "Consumes this unit's current HP by <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_2113_ADF_1</span> when using a Skill. After using Skill, restores <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_2113_ADF_2</span> HP equal to this unit's Max HP.",
          "type": "Buff",
          "statusName": "Sanity"
        },
        {
          "name": "Modifier Construction",
          "for": "Modifier_FantasticStory_BaseAbility_2110_plus2_sub2[<span class=\"descriptionNumberColor\">Gnosis</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Break DMG"
                    ],
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Defender",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                          "value": "DV_FantasticStory_PlusAbility_2112_ADF_3"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "description": "Break DMG taken increases by <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_2112_ADF_3</span>.",
          "type": "Debuff",
          "effectName": "Vulnerability",
          "statusName": "Gnosis"
        },
        {
          "name": "Modifier Construction",
          "for": "Modifier_FantasticStory_BaseAbility_2110_plus2_sub",
          "stackType": "ReplaceByCaster"
        },
        {
          "name": "Modifier Construction",
          "for": "Modifier_FantasticStory_BaseAbility_2110_plus1_sub[<span class=\"descriptionNumberColor\">Evince</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Deal Damage End [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Follow-up"
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "DV_InsertFlag",
                      "value": 1
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Attack Start [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "DV_InsertFlag",
                  "value": 0
                }
              ]
            },
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "DV_InsertFlag",
                            "compareType": "=",
                            "value2": 1
                          },
                          {
                            "name": "Skill Type",
                            "skillType": "Skill"
                          }
                        ]
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Attack Targets of Modifier Holder}}"
                      },
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "Modifier_FantasticStory_BaseAbility_2110_BeforeFever_sub2[<span class=\"descriptionNumberColor\">Shatter</span>]"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Define Custom Variable with Modifier Values",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "valueType": "Layer",
                          "variableName": "Bomb_Layer",
                          "modifierName": "Modifier_FantasticStory_BaseAbility_2110_BeforeFever_sub2[<span class=\"descriptionNumberColor\">Shatter</span>]",
                          "multiplier": 1
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "Bomb_Damage",
                          "value": {
                            "operator": "Variables[0] (BattleEvent_BaseHP) || Variables[1] (DV_FantasticStory_BaseAbility_2110_BeforeFever_P2_Ratio) || MUL || Variables[2] (Bomb_Layer) || MUL || RETURN",
                            "displayLines": "((BattleEvent_BaseHP * DV_FantasticStory_BaseAbility_2110_BeforeFever_P2_Ratio) * Bomb_Layer)",
                            "constants": [],
                            "variables": [
                              "BattleEvent_BaseHP",
                              "DV_FantasticStory_BaseAbility_2110_BeforeFever_P2_Ratio",
                              "Bomb_Layer"
                            ]
                          }
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "Bomb_Damage_Adjoin",
                          "value": {
                            "operator": "Variables[0] (BattleEvent_BaseHP) || Variables[1] (DV_FantasticStory_BaseAbility_2110_EnterFever_P3_Ratio) || MUL || Variables[2] (Bomb_Layer) || MUL || RETURN",
                            "displayLines": "((BattleEvent_BaseHP * DV_FantasticStory_BaseAbility_2110_EnterFever_P3_Ratio) * Bomb_Layer)",
                            "constants": [],
                            "variables": [
                              "BattleEvent_BaseHP",
                              "DV_FantasticStory_BaseAbility_2110_EnterFever_P3_Ratio",
                              "Bomb_Layer"
                            ]
                          }
                        },
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "canPhase": true,
                          "AttackScaling": {
                            "DamageType": "Physical",
                            "DamageFlat": {
                              "operator": "Variables[0] (Bomb_Damage) || RETURN",
                              "displayLines": "Bomb_Damage",
                              "constants": [],
                              "variables": [
                                "Bomb_Damage"
                              ]
                            },
                            "dmgFormulaFinal": "Converted DMG Base",
                            "Toughness": null,
                            "Tags": [
                              "Bomb DMG"
                            ],
                            "attackType": "True DMG"
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
                            "DamageType": "Physical",
                            "DamageFlat": {
                              "operator": "Variables[0] (Bomb_Damage_Adjoin) || RETURN",
                              "displayLines": "Bomb_Damage_Adjoin",
                              "constants": [],
                              "variables": [
                                "Bomb_Damage_Adjoin"
                              ]
                            },
                            "dmgFormulaFinal": "Converted DMG Base",
                            "Toughness": null,
                            "Tags": [
                              "Bomb DMG"
                            ],
                            "attackType": "True DMG"
                          }
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "Modifier_FantasticStory_BaseAbility_2110_BeforeFever_sub2[<span class=\"descriptionNumberColor\">Shatter</span>]"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "description": "Use Skills or launching a Follow-Up ATK against enemy targets with \"Shatter\" can immediately trigger \"Shatter.\"",
          "type": "Buff",
          "statusName": "Evince"
        },
        {
          "name": "Modifier Construction",
          "for": "Modifier_FantasticStory_BaseAbility_2110_BaseAddOn_ForShow[<span class=\"descriptionNumberColor\">Grit Mechanics</span>]",
          "stackType": "ReplaceByCaster",
          "stackData": [
            "DV_Ratio"
          ],
          "latentQueue": [],
          "description": "After using Basic ATK or Ultimate to attack enemy targets, every enemy target hit additionally accumulates <span class=\"descriptionNumberColor\">DV_Ratio</span> Grit Value for allies.",
          "type": "Buff",
          "statusName": "Grit Mechanics"
        },
        {
          "name": "Modifier Construction",
          "for": "Modifier_FantasticStory_BaseAbility_2110_BeforeFever_ForShow[<span class=\"descriptionNumberColor\">Concordant Truce</span>]",
          "stackType": "ReplaceByCaster",
          "stackData": [],
          "latentQueue": [],
          "description": "When using a Basic ATK or an Ultimate to attack an enemy target, inflicts the target with \"Shatter,\" stacking up to <span class=\"descriptionNumberColor\">DV_FantasticStory_BaseAbility_2110_BeforeFever_P1_MaxLayer</span> time(s). At the start of the target's turn or when the target is defeated, deals a set amount of DMG to the target and adjacent targets based on the number of \"Shatter\" stacks.",
          "type": "Buff",
          "statusName": "Concordant Truce"
        },
        {
          "name": "Modifier Construction",
          "for": "Modifier_FantasticStory_BaseAbility_2110_EnterFever_sub[<span class=\"descriptionNumberColor\">Surging Grit</span>]",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (DV_Ratio_Get) || RETURN",
                    "displayLines": "DV_Ratio_Get",
                    "constants": [],
                    "variables": [
                      "DV_Ratio_Get"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "DV_Ratio_Get"
          ],
          "latentQueue": [],
          "description": "Increases DMG taken by <span class=\"descriptionNumberColor\">DV_Ratio_Get</span>.",
          "type": "Debuff",
          "statusName": "Surging Grit"
        },
        {
          "name": "Modifier Construction",
          "for": "Modifier_FantasticStory_BaseAbility_2110_aura",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "DV_FantasticStory_BaseAbility_CountSum",
                  "value": {
                    "operator": "Variables[0] (DV_FantasticStory_BaseAbility_CountSumTemp) || RETURN",
                    "displayLines": "DV_FantasticStory_BaseAbility_CountSumTemp",
                    "constants": [],
                    "variables": [
                      "DV_FantasticStory_BaseAbility_CountSumTemp"
                    ]
                  }
                },
                {
                  "name": "Update Surging Grit[PF]",
                  "current": {
                    "operator": "Variables[0] (DV_FantasticStory_BaseAbility_CountSum) || RETURN",
                    "displayLines": "DV_FantasticStory_BaseAbility_CountSum",
                    "constants": [],
                    "variables": [
                      "DV_FantasticStory_BaseAbility_CountSum"
                    ]
                  },
                  "max": {
                    "operator": "Variables[0] (DV_EnterFeverValue) || RETURN",
                    "displayLines": "DV_EnterFeverValue",
                    "constants": [],
                    "variables": [
                      "DV_EnterFeverValue"
                    ]
                  },
                  "delta": {
                    "operator": "Variables[0] (DV_FantasticStory_BaseAbility_CountSum) || RETURN",
                    "displayLines": "DV_FantasticStory_BaseAbility_CountSum",
                    "constants": [],
                    "variables": [
                      "DV_FantasticStory_BaseAbility_CountSum"
                    ]
                  },
                  "type": "FeverBack"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "DV_FantasticStory_BaseAbility_CountSumTemp",
                  "value": 0
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "DV_FantasticStory_BaseAbility_TriggerFlag"
          ],
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "modifier": "Modifier_FantasticStory_BaseAbility_2110_plus1_sub[<span class=\"descriptionNumberColor\">Evince</span>]",
              "haloStatus": true,
              "conditions": {
                "name": "Compare: Variable",
                "value1": "DV_FantasticStory_PlusAbility_2111",
                "compareType": "=",
                "value2": 1
              }
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Modifier_FantasticStory_BaseAbility_2110_plus2_sub",
              "haloStatus": true,
              "conditions": {
                "name": "Compare: Variable",
                "value1": "DV_FantasticStory_PlusAbility_2112",
                "compareType": "=",
                "value2": 1
              }
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "modifier": "Modifier_FantasticStory_BaseAbility_2110_plus2_sub2[<span class=\"descriptionNumberColor\">Gnosis</span>]",
              "haloStatus": true,
              "conditions": {
                "name": "Compare: Variable",
                "value1": "DV_FantasticStory_PlusAbility_2112",
                "compareType": "=",
                "value2": 1
              }
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]].[[removeMemosprite]]"
              },
              "modifier": "Modifier_FantasticStory_BaseAbility_2110_plus3_sub[<span class=\"descriptionNumberColor\">Sanity</span>]",
              "haloStatus": true,
              "conditions": {
                "name": "Compare: Variable",
                "value1": "DV_FantasticStory_PlusAbility_2113",
                "compareType": "=",
                "value2": 1
              }
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Modifier_FantasticStory_BaseAbility_2110_ListenBEDelay",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "AV Forcibly Changed [Global]",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "DV_CurrentDelay",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">ActionDelay</span>&nbsp;"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "DV_FantasticStory_BaseAbility_CountSumTemp",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (DV_FantasticStory_BaseAbility_CountSumTempMax) || RETURN",
                      "displayLines": "DV_FantasticStory_BaseAbility_CountSumTempMax",
                      "constants": [],
                      "variables": [
                        "DV_FantasticStory_BaseAbility_CountSumTempMax"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Update Surging Grit[PF]",
                      "current": {
                        "operator": "Variables[0] (DV_CurrentDelay) || Constants[0] (10) || MUL || RETURN",
                        "displayLines": "(DV_CurrentDelay * 10)",
                        "constants": [
                          10
                        ],
                        "variables": [
                          "DV_CurrentDelay"
                        ]
                      },
                      "max": 100,
                      "extra": {
                        "operator": "Variables[0] (FLOOR) || Variables[1] (DV_FantasticStory_BaseAbility_CountSumTemp) || PARAM_1 || FUNCTION || RETURN",
                        "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>(DV_FantasticStory_BaseAbility_CountSumTemp)",
                        "constants": [],
                        "variables": [
                          "FLOOR",
                          "DV_FantasticStory_BaseAbility_CountSumTemp"
                        ]
                      },
                      "phaseType": "P1",
                      "reachedLimit": true
                    }
                  ],
                  "failed": [
                    {
                      "name": "Update Surging Grit[PF]",
                      "current": {
                        "operator": "Variables[0] (DV_CurrentDelay) || Constants[0] (10) || MUL || RETURN",
                        "displayLines": "(DV_CurrentDelay * 10)",
                        "constants": [
                          10
                        ],
                        "variables": [
                          "DV_CurrentDelay"
                        ]
                      },
                      "max": 100,
                      "extra": {
                        "operator": "Variables[0] (FLOOR) || Variables[1] (DV_FantasticStory_BaseAbility_CountSumTemp) || PARAM_1 || FUNCTION || RETURN",
                        "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>(DV_FantasticStory_BaseAbility_CountSumTemp)",
                        "constants": [],
                        "variables": [
                          "FLOOR",
                          "DV_FantasticStory_BaseAbility_CountSumTemp"
                        ]
                      },
                      "phaseType": "P1"
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
      "references": []
    },
    "-825953332_BE_BattleEvents": {
      "fileName": "-825953332_BE_BattleEvents",
      "abilityType": "Char. B.Events",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Battle Event Construction",
          "ID": 30501,
          "team": "Player Team",
          "eventType": "Assist",
          "abilityList": [
            "BattleEvent_FantasticStory_BaseAbility_Standard"
          ],
          "overridesArray": [
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;",
              "value": 100
            }
          ],
          "hardLevelEvent": true,
          "barType": 3
        }
      ],
      "references": []
    }
  }
}