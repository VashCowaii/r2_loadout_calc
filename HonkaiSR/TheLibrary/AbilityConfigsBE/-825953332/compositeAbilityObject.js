const entityPageType = "misc"
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
    "-825953332_FantasticStory_BaseAbility_AllLightTeam_Insert_Camera",
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
          "modifier": "<a class=\"gModGreen\" id=\"662160444\">MBattleEvent_FantasticStory_BaseAbility_Standard_sub</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"987171790\">MBattleEvent_FantasticStory_BaseAbility_Standard_BaseSpeed</a>"
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
          "for": "<a class=\"gModGreen\" id=\"mod__662160444\">MBattleEvent_FantasticStory_BaseAbility_Standard_sub</a>",
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
                  "modifier": "<a class=\"gModGreen\" id=\"1923363748\">Modifier_FantasticStory_BaseAbility_2110_aura</a>"
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
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__987171790\">MBattleEvent_FantasticStory_BaseAbility_Standard_BaseSpeed</a>",
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
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
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
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "-825953332_FantasticStory_BaseAbility_2110_Insert_Camera_Enemy": {
      "fileName": "-825953332_FantasticStory_BaseAbility_2110_Insert_Camera_Enemy",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
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
                  "modifier": "<a class=\"gModGreen\" id=\"1391985236\">Modifier_FantasticStory_BaseAbility_2110_ListenBEDelay</a>"
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
          "modifier": "<a class=\"gModGreen\" id=\"773567825\">Modifier_FantasticStory_BaseAbility_2110_AddSP</a>",
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
          "modifier": "<a class=\"gModGreen\" id=\"-384544290\">Modifier_FantasticStory_BaseAbility_2110_ReturnSP</a>",
          "casterAssign": "TargetSelf"
        },
        "Trigger: Attack End",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1923363748\">Modifier_FantasticStory_BaseAbility_2110_aura</a>"
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
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
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
          "modifier": "<a class=\"gModGreen\" id=\"-153051417\">Modifier_FantasticStory_BaseAbility_2110_EnterFever</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-153051417\">Modifier_FantasticStory_BaseAbility_2110_EnterFever</a>",
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
                        "modifier": "<a class=\"gModGreen\" id=\"1923363748\">Modifier_FantasticStory_BaseAbility_2110_aura</a>"
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
                      "modifier": "<a class=\"gModGreen\" id=\"-277929062\">Modifier_FantasticStory_BaseAbility_2110_EnterFever_sub</a>[<span class=\"descriptionNumberColor\">Surging Grit</span>]",
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
                    "modifier": "<a class=\"gModGreen\" id=\"1923363748\">Modifier_FantasticStory_BaseAbility_2110_aura</a>"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-277929062\">Modifier_FantasticStory_BaseAbility_2110_EnterFever_sub</a>[<span class=\"descriptionNumberColor\">Surging Grit</span>]",
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
                    "modifier": "<a class=\"gModGreen\" id=\"1923363748\">Modifier_FantasticStory_BaseAbility_2110_aura</a>"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All(with Unselectable)}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-277929062\">Modifier_FantasticStory_BaseAbility_2110_EnterFever_sub</a>[<span class=\"descriptionNumberColor\">Surging Grit</span>]"
                    }
                  ]
                }
              ]
            }
          ]
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
          "modifier": "<a class=\"gModGreen\" id=\"-1473014214\">Modifier_FantasticStory_BaseAbility_2110_BeforeFever</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2132571309\">Modifier_FantasticStory_BaseAbility_2110_BeforeFever_sub2</a>[<span class=\"descriptionNumberColor\">Shatter</span>]",
          "stackType": "Replace",
          "modifierFlags": [
            "Deathrattle"
          ],
          "description": "When this unit's turn starts or when defeated by any unit, this unit takes a set amount of DMG based on the number of \"Shatter\" stacks.",
          "type": "Debuff",
          "statusName": "Shatter",
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
                    "modifier": "<a class=\"gModGreen\" id=\"1923363748\">Modifier_FantasticStory_BaseAbility_2110_aura</a>"
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
                    "modifier": "<a class=\"gModGreen\" id=\"1923363748\">Modifier_FantasticStory_BaseAbility_2110_aura</a>"
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
                    "modifier": "<a class=\"gModGreen\" id=\"1923363748\">Modifier_FantasticStory_BaseAbility_2110_aura</a>"
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
                        "modifier": "<a class=\"gModGreen\" id=\"-1595223290\">Modifier_FantasticStory_BaseAbility_2110_plus2_sub</a>"
                      },
                      "passed": [
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "FantasticStory_BaseAbility_2110_Insert_Enemy",
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "priorityTag": "EnemyDeathEffect",
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
                          "priorityTag": "EnemyDeathEffect",
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
                      "priorityTag": "EnemyDeathEffect",
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
                    "modifier": "<a class=\"gModGreen\" id=\"1923363748\">Modifier_FantasticStory_BaseAbility_2110_aura</a>"
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
                    "modifier": "<a class=\"gModGreen\" id=\"1923363748\">Modifier_FantasticStory_BaseAbility_2110_aura</a>"
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
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1873057933\">Modifier_FantasticStory_BaseAbility_2110_BeforeFever_sub</a>",
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
                      "modifier": "<a class=\"gModGreen\" id=\"-2132571309\">Modifier_FantasticStory_BaseAbility_2110_BeforeFever_sub2</a>[<span class=\"descriptionNumberColor\">Shatter</span>]",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1473014214\">Modifier_FantasticStory_BaseAbility_2110_BeforeFever</a>",
          "stackType": "ReplaceByCaster",
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1102093119\">Modifier_FantasticStory_BaseAbility_2110_BeforeFever_ForShow</a>[<span class=\"descriptionNumberColor\">Concordant Truce</span>]",
              "haloStatus": true
            }
          ],
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
                      "modifier": "<a class=\"gModGreen\" id=\"-1873057933\">Modifier_FantasticStory_BaseAbility_2110_BeforeFever_sub</a>"
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
                    "modifier": "<a class=\"gModGreen\" id=\"-1873057933\">Modifier_FantasticStory_BaseAbility_2110_BeforeFever_sub</a>"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1873057933\">Modifier_FantasticStory_BaseAbility_2110_BeforeFever_sub</a>"
                    }
                  ]
                }
              ]
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
          "modifier": "<a class=\"gModGreen\" id=\"609570996\">Modifier_FantasticStory_BaseAbility_2110_BaseAddOn</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__609570996\">Modifier_FantasticStory_BaseAbility_2110_BaseAddOn</a>",
          "stackType": "ReplaceByCaster",
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1732946835\">Modifier_FantasticStory_BaseAbility_2110_BaseAddOn_ForShow</a>[<span class=\"descriptionNumberColor\">Grit Mechanics</span>]",
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
          ],
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
                        "modifier": "<a class=\"gModGreen\" id=\"1923363748\">Modifier_FantasticStory_BaseAbility_2110_aura</a>",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1377844470\">Modifier_FantasticStory_BaseAbility_2110</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1598958563\">Modifier_FantasticStory_BaseAbility_2110_sub</a>",
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
                      "modifier": "<a class=\"gModGreen\" id=\"-1363213920\">Modifier_FantasticStory_BaseAbility_2110_Plus1AddOn</a>"
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
                      "modifier": "<a class=\"gModGreen\" id=\"-1928021681\">Modifier_FantasticStory_BaseAbility_2110_Plus2AddOn</a>"
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
                      "modifier": "<a class=\"gModGreen\" id=\"-1058073602\">Modifier_FantasticStory_BaseAbility_2110_Plus3AddOn</a>"
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
                          "priorityTag": "CharacterBuffSelf",
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
                          "priorityTag": "CharacterBuffSelf",
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
                          "priorityTag": "CharacterBuffSelf",
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
                          "priorityTag": "CharacterBuffSelf",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1377844470\">Modifier_FantasticStory_BaseAbility_2110</a>",
          "stackType": "ReplaceByCaster",
          "latentQueue": [
            "DV_FantasticStory_PlusAbility_2111",
            "DV_FantasticStory_PlusAbility_2112",
            "DV_FantasticStory_PlusAbility_2113",
            "DV_FantasticStory_BaseAbility_TriggerFlag"
          ],
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
                          "modifier": "<a class=\"gModGreen\" id=\"-1135719358\">MDF_NoScore</a>"
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
                            "modifier": "<a class=\"gModGreen\" id=\"-1135719358\">MDF_NoScore</a>"
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
                                "modifier": "<a class=\"gModGreen\" id=\"1923363748\">Modifier_FantasticStory_BaseAbility_2110_aura</a>"
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
                                          "modifier": "<a class=\"gModGreen\" id=\"1391985236\">Modifier_FantasticStory_BaseAbility_2110_ListenBEDelay</a>"
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
                          "modifier": "<a class=\"gModGreen\" id=\"-149468610\">Modifier_FantasticStory_HPParentChild</a>[<span class=\"descriptionNumberColor\">Binding Obligation</span>]"
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
                  "modifier": "<a class=\"gModGreen\" id=\"1598958563\">Modifier_FantasticStory_BaseAbility_2110_sub</a>"
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
                      "modifier": "<a class=\"gModGreen\" id=\"-149468610\">Modifier_FantasticStory_HPParentChild</a>[<span class=\"descriptionNumberColor\">Binding Obligation</span>]"
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
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1532586988\">Modifier_FantasticStory_HPParentChildForShow</a>[<span class=\"descriptionNumberColor\">Fate's Convergence</span>]",
          "stackType": "ReplaceByCaster",
          "description": "After being defeated, deal DMG based on a certain percentage of their Max HP to the Elite enemy target.",
          "type": "Buff",
          "effectName": "Fate's Convergence",
          "statusName": "Fate's Convergence"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-149468610\">Modifier_FantasticStory_HPParentChild</a>[<span class=\"descriptionNumberColor\">Binding Obligation</span>]",
          "stackType": "ReplaceByCaster",
          "latentQueue": [
            "DV_FantasticStory_BaseAbility_TriggerFlag",
            "DV_FantasticStory_PlusAbility_2113",
            "DV_FantasticStory_PlusAbility_2112",
            "DV_FantasticStory_PlusAbility_2111"
          ],
          "description": "After non-Elite enemy targets are defeated, receive DMG based on a certain percentage of this unit's Max HP.",
          "type": "Buff",
          "effectName": "Binding Obligation",
          "statusName": "Binding Obligation",
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
                  "modifier": "<a class=\"gModGreen\" id=\"1532586988\">Modifier_FantasticStory_HPParentChildForShow</a>[<span class=\"descriptionNumberColor\">Fate's Convergence</span>]"
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
                  "modifier": "<a class=\"gModGreen\" id=\"1532586988\">Modifier_FantasticStory_HPParentChildForShow</a>[<span class=\"descriptionNumberColor\">Fate's Convergence</span>]"
                }
              ]
            }
          ]
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
    "-825953332_FantasticStory_BaseAbility_AllLightTeam_Insert_Camera": {
      "fileName": "-825953332_FantasticStory_BaseAbility_AllLightTeam_Insert_Camera",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1135719358\">MDF_NoScore</a>",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1120307389\">Modifier_FantasticStory_BaseAbility_2010_Plus8AddOn_ForShow</a>[<span class=\"descriptionNumberColor\">Grit Mechanics_Ravings</span>]",
          "stackType": "ReplaceByCaster",
          "description": "After attacking enemy targets, every enemy target who has their Weakness Broken additionally accumulates <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_2018_ADF_3</span> Grit Value.",
          "type": "Buff",
          "statusName": "Grit Mechanics_Ravings"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1238380036\">Modifier_FantasticStory_BaseAbility_2010_Plus8AddOn</a>",
          "stackType": "ReplaceByCaster",
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1120307389\">Modifier_FantasticStory_BaseAbility_2010_Plus8AddOn_ForShow</a>[<span class=\"descriptionNumberColor\">Grit Mechanics_Ravings</span>]",
              "haloStatus": true
            }
          ],
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
                        "modifier": "<a class=\"gModGreen\" id=\"-465768831\">Modifier_FantasticStory_BaseAbility_2010_aura</a>",
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "DV_FantasticStory_BaseAbility_CountSum",
                      "value": {
                        "operator": "Variables[0] (DV_FantasticStory_BaseAbility_CountSum) || Variables[1] (DV_TargetCount) || Variables[2] (DV_FantasticStory_PlusAbility_2018_ADF_3) || MUL || ADD || RETURN",
                        "displayLines": "(DV_FantasticStory_BaseAbility_CountSum + (DV_TargetCount * DV_FantasticStory_PlusAbility_2018_ADF_3))",
                        "constants": [],
                        "variables": [
                          "DV_FantasticStory_BaseAbility_CountSum",
                          "DV_TargetCount",
                          "DV_FantasticStory_PlusAbility_2018_ADF_3"
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
                            "operator": "Variables[0] (DV_TargetCount) || Variables[1] (DV_FantasticStory_PlusAbility_2018_ADF_3) || MUL || RETURN",
                            "displayLines": "(DV_TargetCount * DV_FantasticStory_PlusAbility_2018_ADF_3)",
                            "constants": [],
                            "variables": [
                              "DV_TargetCount",
                              "DV_FantasticStory_PlusAbility_2018_ADF_3"
                            ]
                          },
                          "type": "Special",
                          "phaseType": "P1",
                          "text": "Ravings"
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
                            "operator": "Variables[0] (DV_TargetCount) || Variables[1] (DV_FantasticStory_PlusAbility_2018_ADF_3) || MUL || RETURN",
                            "displayLines": "(DV_TargetCount * DV_FantasticStory_PlusAbility_2018_ADF_3)",
                            "constants": [],
                            "variables": [
                              "DV_TargetCount",
                              "DV_FantasticStory_PlusAbility_2018_ADF_3"
                            ]
                          },
                          "type": "Special",
                          "text": "Ravings"
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
                          "target": "{{Parameter Target 2}}"
                        },
                        "mustBeAlive2": true
                      },
                      {
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
                      }
                    ]
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
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__224481971\">Modifier_FantasticStory_BaseAbility_2010_Plus6AddOn_ForShow</a>[<span class=\"descriptionNumberColor\">Grit Mechanics: Euphony</span>]",
          "stackType": "ReplaceByCaster",
          "description": "After receiving DoT, additionally accumulates <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_2016_ADF_3</span> Grit Value for allies.",
          "type": "Debuff",
          "statusName": "Grit Mechanics: Euphony"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1848051030\">Modifier_FantasticStory_BaseAbility_2010_Plus6AddOn</a>",
          "stackType": "ReplaceByCaster",
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"224481971\">Modifier_FantasticStory_BaseAbility_2010_Plus6AddOn_ForShow</a>[<span class=\"descriptionNumberColor\">Grit Mechanics: Euphony</span>]",
              "haloStatus": true
            }
          ],
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Anyone]: Any",
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
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Attack Type",
                            "attackTypes": [
                              "DOT"
                            ],
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            }
                          }
                        ]
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-465768831\">Modifier_FantasticStory_BaseAbility_2010_aura</a>",
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "DV_FantasticStory_BaseAbility_CountSum",
                      "value": {
                        "operator": "Variables[0] (DV_FantasticStory_BaseAbility_CountSum) || Variables[1] (DV_FantasticStory_PlusAbility_2016_ADF_3) || ADD || RETURN",
                        "displayLines": "(DV_FantasticStory_BaseAbility_CountSum + DV_FantasticStory_PlusAbility_2016_ADF_3)",
                        "constants": [],
                        "variables": [
                          "DV_FantasticStory_BaseAbility_CountSum",
                          "DV_FantasticStory_PlusAbility_2016_ADF_3"
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
                            "operator": "Variables[0] (DV_FantasticStory_PlusAbility_2016_ADF_3) || RETURN",
                            "displayLines": "DV_FantasticStory_PlusAbility_2016_ADF_3",
                            "constants": [],
                            "variables": [
                              "DV_FantasticStory_PlusAbility_2016_ADF_3"
                            ]
                          },
                          "type": "Special",
                          "phaseType": "P1",
                          "text": "Euphony"
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
                            "operator": "Variables[0] (DV_FantasticStory_PlusAbility_2016_ADF_3) || RETURN",
                            "displayLines": "DV_FantasticStory_PlusAbility_2016_ADF_3",
                            "constants": [],
                            "variables": [
                              "DV_FantasticStory_PlusAbility_2016_ADF_3"
                            ]
                          },
                          "type": "Special",
                          "text": "Euphony"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-454840159\">Modifier_FantasticStory_BaseAbility_2010_Plus5AddOn</a>[<span class=\"descriptionNumberColor\">Grit Mechanics: Ballad</span>]",
          "stackType": "ReplaceByCaster",
          "description": "For each enemy target hit after an attack, additionally accumulates <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_2015_ADF_3</span> Grit Value for allies.",
          "type": "Buff",
          "statusName": "Grit Mechanics: Ballad",
          "execute": [
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-465768831\">Modifier_FantasticStory_BaseAbility_2010_aura</a>",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Attack Targets",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "DV_TargetCount"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "DV_FantasticStory_BaseAbility_CountSum",
                      "value": {
                        "operator": "Variables[0] (DV_FantasticStory_BaseAbility_CountSum) || Variables[1] (DV_FantasticStory_PlusAbility_2015_ADF_3) || Variables[2] (DV_TargetCount) || MUL || ADD || RETURN",
                        "displayLines": "(DV_FantasticStory_BaseAbility_CountSum + (DV_FantasticStory_PlusAbility_2015_ADF_3 * DV_TargetCount))",
                        "constants": [],
                        "variables": [
                          "DV_FantasticStory_BaseAbility_CountSum",
                          "DV_FantasticStory_PlusAbility_2015_ADF_3",
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
                            "operator": "Variables[0] (DV_FantasticStory_PlusAbility_2015_ADF_3) || Variables[1] (DV_TargetCount) || MUL || RETURN",
                            "displayLines": "(DV_FantasticStory_PlusAbility_2015_ADF_3 * DV_TargetCount)",
                            "constants": [],
                            "variables": [
                              "DV_FantasticStory_PlusAbility_2015_ADF_3",
                              "DV_TargetCount"
                            ]
                          },
                          "type": "Special",
                          "phaseType": "P1",
                          "text": "Ballad"
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
                            "operator": "Variables[0] (DV_FantasticStory_PlusAbility_2015_ADF_3) || Variables[1] (DV_TargetCount) || MUL || RETURN",
                            "displayLines": "(DV_FantasticStory_PlusAbility_2015_ADF_3 * DV_TargetCount)",
                            "constants": [],
                            "variables": [
                              "DV_FantasticStory_PlusAbility_2015_ADF_3",
                              "DV_TargetCount"
                            ]
                          },
                          "type": "Special",
                          "text": "Ballad"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-854888599\">Modifier_FantasticStory_BaseAbility_2010_Plus4AddOn_ForShow</a>[<span class=\"descriptionNumberColor\">Grit Mechanics: Hierophany</span>]",
          "stackType": "ReplaceByCaster",
          "description": "When receiving an attack or losing HP, allies will additionally accumulate <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_2014_ADF_3</span> Grit Value.",
          "type": "Buff",
          "statusName": "Grit Mechanics: Hierophany"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1827065640\">Modifier_FantasticStory_BaseAbility_2010_Plus4AddOn</a>",
          "stackType": "ReplaceByCaster",
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-854888599\">Modifier_FantasticStory_BaseAbility_2010_Plus4AddOn_ForShow</a>[<span class=\"descriptionNumberColor\">Grit Mechanics: Hierophany</span>]",
              "haloStatus": true
            }
          ],
          "execute": [
            {
              "eventTrigger": "HP Change [Owner]",
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
                        "value1": "ParameterValue",
                        "compareType": "<",
                        "value2": 0
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-465768831\">Modifier_FantasticStory_BaseAbility_2010_aura</a>",
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "DV_FantasticStory_BaseAbility_CountSum",
                      "value": {
                        "operator": "Variables[0] (DV_FantasticStory_BaseAbility_CountSum) || Variables[1] (DV_FantasticStory_PlusAbility_2014_ADF_3) || ADD || RETURN",
                        "displayLines": "(DV_FantasticStory_BaseAbility_CountSum + DV_FantasticStory_PlusAbility_2014_ADF_3)",
                        "constants": [],
                        "variables": [
                          "DV_FantasticStory_BaseAbility_CountSum",
                          "DV_FantasticStory_PlusAbility_2014_ADF_3"
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
                            "operator": "Variables[0] (DV_FantasticStory_PlusAbility_2014_ADF_3) || RETURN",
                            "displayLines": "DV_FantasticStory_PlusAbility_2014_ADF_3",
                            "constants": [],
                            "variables": [
                              "DV_FantasticStory_PlusAbility_2014_ADF_3"
                            ]
                          },
                          "type": "Special",
                          "phaseType": "P1",
                          "text": "Hierophany"
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
                            "operator": "Variables[0] (DV_FantasticStory_PlusAbility_2014_ADF_3) || RETURN",
                            "displayLines": "DV_FantasticStory_PlusAbility_2014_ADF_3",
                            "constants": [],
                            "variables": [
                              "DV_FantasticStory_PlusAbility_2014_ADF_3"
                            ]
                          },
                          "type": "Special",
                          "text": "Hierophany"
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
                    "modifier": "<a class=\"gModGreen\" id=\"-465768831\">Modifier_FantasticStory_BaseAbility_2010_aura</a>",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "DV_FantasticStory_BaseAbility_CountSum",
                      "value": {
                        "operator": "Variables[0] (DV_FantasticStory_BaseAbility_CountSum) || Variables[1] (DV_FantasticStory_PlusAbility_2014_ADF_3) || ADD || RETURN",
                        "displayLines": "(DV_FantasticStory_BaseAbility_CountSum + DV_FantasticStory_PlusAbility_2014_ADF_3)",
                        "constants": [],
                        "variables": [
                          "DV_FantasticStory_BaseAbility_CountSum",
                          "DV_FantasticStory_PlusAbility_2014_ADF_3"
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
                            "operator": "Variables[0] (DV_FantasticStory_PlusAbility_2014_ADF_3) || RETURN",
                            "displayLines": "DV_FantasticStory_PlusAbility_2014_ADF_3",
                            "constants": [],
                            "variables": [
                              "DV_FantasticStory_PlusAbility_2014_ADF_3"
                            ]
                          },
                          "type": "Special",
                          "phaseType": "P1",
                          "text": "Hierophany"
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
                            "operator": "Variables[0] (DV_FantasticStory_PlusAbility_2014_ADF_3) || RETURN",
                            "displayLines": "DV_FantasticStory_PlusAbility_2014_ADF_3",
                            "constants": [],
                            "variables": [
                              "DV_FantasticStory_PlusAbility_2014_ADF_3"
                            ]
                          },
                          "type": "Special",
                          "text": "Hierophany"
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
          "for": "<a class=\"gModGreen\" id=\"mod__243727462\">Modifier_FantasticStory_BaseAbility_2010_Plus3AddOn_ForShow</a>[<span class=\"descriptionNumberColor\">Grit Mechanics: Hollow Hope</span>]",
          "stackType": "ReplaceByCaster",
          "description": "After attacking enemy targets, every enemy target who has their Weakness Broken additionally accumulates <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_2013_ADF_3</span> Grit Value.",
          "type": "Buff",
          "statusName": "Grit Mechanics: Hollow Hope"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1224313035\">Modifier_FantasticStory_BaseAbility_2010_Plus3AddOn</a>",
          "stackType": "ReplaceByCaster",
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"243727462\">Modifier_FantasticStory_BaseAbility_2010_Plus3AddOn_ForShow</a>[<span class=\"descriptionNumberColor\">Grit Mechanics: Hollow Hope</span>]",
              "haloStatus": true
            }
          ],
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
                        "modifier": "<a class=\"gModGreen\" id=\"-465768831\">Modifier_FantasticStory_BaseAbility_2010_aura</a>",
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "DV_FantasticStory_BaseAbility_CountSum",
                      "value": {
                        "operator": "Variables[0] (DV_FantasticStory_BaseAbility_CountSum) || Variables[1] (DV_TargetCount) || Variables[2] (DV_FantasticStory_PlusAbility_2013_ADF_3) || MUL || ADD || RETURN",
                        "displayLines": "(DV_FantasticStory_BaseAbility_CountSum + (DV_TargetCount * DV_FantasticStory_PlusAbility_2013_ADF_3))",
                        "constants": [],
                        "variables": [
                          "DV_FantasticStory_BaseAbility_CountSum",
                          "DV_TargetCount",
                          "DV_FantasticStory_PlusAbility_2013_ADF_3"
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
                            "operator": "Variables[0] (DV_TargetCount) || Variables[1] (DV_FantasticStory_PlusAbility_2013_ADF_3) || MUL || RETURN",
                            "displayLines": "(DV_TargetCount * DV_FantasticStory_PlusAbility_2013_ADF_3)",
                            "constants": [],
                            "variables": [
                              "DV_TargetCount",
                              "DV_FantasticStory_PlusAbility_2013_ADF_3"
                            ]
                          },
                          "type": "Special",
                          "phaseType": "P1",
                          "text": "Hollow Hope"
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
                            "operator": "Variables[0] (DV_TargetCount) || Variables[1] (DV_FantasticStory_PlusAbility_2013_ADF_3) || MUL || RETURN",
                            "displayLines": "(DV_TargetCount * DV_FantasticStory_PlusAbility_2013_ADF_3)",
                            "constants": [],
                            "variables": [
                              "DV_TargetCount",
                              "DV_FantasticStory_PlusAbility_2013_ADF_3"
                            ]
                          },
                          "type": "Special",
                          "text": "Hollow Hope"
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
                          "target": "{{Parameter Target 2}}"
                        },
                        "mustBeAlive2": true
                      },
                      {
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
                      }
                    ]
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
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1263632305\">Modifier_FantasticStory_BaseAbility_2010_Plus2AddOn_ForShow</a>[<span class=\"descriptionNumberColor\">Grit Mechanics: False Promises</span>]",
          "stackType": "ReplaceByCaster",
          "description": "After launching a Follow-Up ATK, every enemy target attacked additionally accumulates <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_2012_ADF_3</span> Grit Value.",
          "type": "Buff",
          "statusName": "Grit Mechanics: False Promises"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__406324874\">Modifier_FantasticStory_BaseAbility_2010_Plus2AddOn</a>",
          "stackType": "ReplaceByCaster",
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1263632305\">Modifier_FantasticStory_BaseAbility_2010_Plus2AddOn_ForShow</a>[<span class=\"descriptionNumberColor\">Grit Mechanics: False Promises</span>]",
              "haloStatus": true
            }
          ],
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
                        "name": "Compare: Variable",
                        "value1": "DV_InsertFlag",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-465768831\">Modifier_FantasticStory_BaseAbility_2010_aura</a>",
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
                        "operator": "Variables[0] (DV_FantasticStory_BaseAbility_CountSum) || Variables[1] (DV_FantasticStory_PlusAbility_2012_ADF_3) || Variables[2] (DV_TargetCount) || MUL || ADD || RETURN",
                        "displayLines": "(DV_FantasticStory_BaseAbility_CountSum + (DV_FantasticStory_PlusAbility_2012_ADF_3 * DV_TargetCount))",
                        "constants": [],
                        "variables": [
                          "DV_FantasticStory_BaseAbility_CountSum",
                          "DV_FantasticStory_PlusAbility_2012_ADF_3",
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
                            "operator": "Variables[0] (DV_TargetCount) || Variables[1] (DV_FantasticStory_PlusAbility_2012_ADF_3) || MUL || RETURN",
                            "displayLines": "(DV_TargetCount * DV_FantasticStory_PlusAbility_2012_ADF_3)",
                            "constants": [],
                            "variables": [
                              "DV_TargetCount",
                              "DV_FantasticStory_PlusAbility_2012_ADF_3"
                            ]
                          },
                          "type": "Special",
                          "phaseType": "P1",
                          "text": "False Promises"
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
                            "operator": "Variables[0] (DV_TargetCount) || Variables[1] (DV_FantasticStory_PlusAbility_2012_ADF_3) || MUL || RETURN",
                            "displayLines": "(DV_TargetCount * DV_FantasticStory_PlusAbility_2012_ADF_3)",
                            "constants": [],
                            "variables": [
                              "DV_TargetCount",
                              "DV_FantasticStory_PlusAbility_2012_ADF_3"
                            ]
                          },
                          "type": "Special",
                          "text": "False Promises"
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
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__88399756\">Modifier_FantasticStory_BaseAbility_2010_Plus1AddOn_ForShow</a>[<span class=\"descriptionNumberColor\">Grit Mechanics: Empty Air</span>]",
          "stackType": "ReplaceByCaster",
          "description": "After using Ultimate to attack enemy targets, every enemy target attacked additionally accumulates <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_2011_ADF_4</span> Grit Value.",
          "type": "Buff",
          "statusName": "Grit Mechanics: Empty Air"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2085135947\">Modifier_FantasticStory_BaseAbility_2010_Plus1AddOn</a>",
          "stackType": "ReplaceByCaster",
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"88399756\">Modifier_FantasticStory_BaseAbility_2010_Plus1AddOn_ForShow</a>[<span class=\"descriptionNumberColor\">Grit Mechanics: Empty Air</span>]",
              "haloStatus": true
            }
          ],
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
                        "name": "Skill Type",
                        "skillType": "Ultimate"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-465768831\">Modifier_FantasticStory_BaseAbility_2010_aura</a>",
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
                        "operator": "Variables[0] (DV_FantasticStory_BaseAbility_CountSum) || Variables[1] (DV_FantasticStory_PlusAbility_2011_ADF_4) || Variables[2] (DV_TargetCount) || MUL || ADD || RETURN",
                        "displayLines": "(DV_FantasticStory_BaseAbility_CountSum + (DV_FantasticStory_PlusAbility_2011_ADF_4 * DV_TargetCount))",
                        "constants": [],
                        "variables": [
                          "DV_FantasticStory_BaseAbility_CountSum",
                          "DV_FantasticStory_PlusAbility_2011_ADF_4",
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
                            "operator": "Variables[0] (DV_TargetCount) || Variables[1] (DV_FantasticStory_PlusAbility_2011_ADF_4) || MUL || RETURN",
                            "displayLines": "(DV_TargetCount * DV_FantasticStory_PlusAbility_2011_ADF_4)",
                            "constants": [],
                            "variables": [
                              "DV_TargetCount",
                              "DV_FantasticStory_PlusAbility_2011_ADF_4"
                            ]
                          },
                          "type": "Special",
                          "phaseType": "P1",
                          "text": "Empty Air"
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
                            "operator": "Variables[0] (DV_TargetCount) || Variables[1] (DV_FantasticStory_PlusAbility_2011_ADF_4) || MUL || RETURN",
                            "displayLines": "(DV_TargetCount * DV_FantasticStory_PlusAbility_2011_ADF_4)",
                            "constants": [],
                            "variables": [
                              "DV_TargetCount",
                              "DV_FantasticStory_PlusAbility_2011_ADF_4"
                            ]
                          },
                          "type": "Special",
                          "text": "Empty Air"
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
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2145216821\">Modifier_FantasticStory_BaseAbility_2010_plus8_sub</a>[<span class=\"descriptionNumberColor\">Ravings</span>]",
          "stackType": "ReplaceByCaster",
          "description": "Increases Break DMG taken by <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_2018_ADF_2</span>.",
          "type": "Debuff",
          "statusName": "Ravings",
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
                          "value": "DV_FantasticStory_PlusAbility_2018_ADF_2"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1958190695\">Modifier_FantasticStory_BaseAbility_2010_Plus7_Sub_Enemy</a>",
          "execute": [
            {
              "eventTrigger": "Being Attacked End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_DamageCount",
                    "compareType": ">",
                    "value2": 0
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
                          "operator": "Variables[0] (MDF_DamageCount) || Variables[1] (DV_FantasticStory_PlusAbility_2017_ADF_1) || MUL || RETURN",
                          "displayLines": "(MDF_DamageCount * DV_FantasticStory_PlusAbility_2017_ADF_1)",
                          "constants": [],
                          "variables": [
                            "MDF_DamageCount",
                            "DV_FantasticStory_PlusAbility_2017_ADF_1"
                          ]
                        },
                        "dmgFormulaFinal": "Converted DMG Base",
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "True DMG"
                      },
                      "overrideDamageOwner": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "isConvertedDMG": true
                    }
                  ]
                },
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1761217442\">Modifier_FantasticStory_BaseAbility_2010_Plus7_Sub</a>",
          "execute": [
            {
              "eventTrigger": "Deal Damage End [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Converted DMG",
                        "invertCondition": true
                      },
                      {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Skill Type",
                            "skillType": "Skill"
                          }
                        ]
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "Skill_Flag",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Damage Data",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "MDF_DamageOnce",
                      "value": "Result_FinalDamageBase",
                      "context": "ContextModifier"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1958190695\">Modifier_FantasticStory_BaseAbility_2010_Plus7_Sub_Enemy</a>"
                      },
                      "passed": [
                        {
                          "name": "Define Modifier-Specific Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifierName": "<a class=\"gModGreen\" id=\"-1958190695\">Modifier_FantasticStory_BaseAbility_2010_Plus7_Sub_Enemy</a>",
                          "adjustmentType": "+",
                          "variableName": "MDF_DamageCount",
                          "value": {
                            "operator": "Variables[0] (MDF_DamageOnce) || RETURN",
                            "displayLines": "MDF_DamageOnce",
                            "constants": [],
                            "variables": [
                              "MDF_DamageOnce"
                            ]
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1958190695\">Modifier_FantasticStory_BaseAbility_2010_Plus7_Sub_Enemy</a>",
                          "valuePerStack": {
                            "MDF_DamageCount": {
                              "operator": "Variables[0] (MDF_DamageOnce) || RETURN",
                              "displayLines": "MDF_DamageOnce",
                              "constants": [],
                              "variables": [
                                "MDF_DamageOnce"
                              ]
                            },
                            "DV_FantasticStory_PlusAbility_2017_ADF_1": {
                              "operator": "Variables[0] (DV_FantasticStory_PlusAbility_2017_ADF_1) || RETURN",
                              "displayLines": "DV_FantasticStory_PlusAbility_2017_ADF_1",
                              "constants": [],
                              "variables": [
                                "DV_FantasticStory_PlusAbility_2017_ADF_1"
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
              "eventTrigger": "Attack Start [Owner]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All(with Unselectable)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1958190695\">Modifier_FantasticStory_BaseAbility_2010_Plus7_Sub_Enemy</a>"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Type",
                    "skillType": "Skill"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Skill_Flag",
                      "value": 1
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "Skill_Flag",
                  "value": 0
                }
              ]
            },
            {
              "eventTrigger": "Attack Action Completed [Owner]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All(with Unselectable)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1958190695\">Modifier_FantasticStory_BaseAbility_2010_Plus7_Sub_Enemy</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1764196443\">Modifier_FantasticStory_BaseAbility_2010_Plus6_Sub</a>[<span class=\"descriptionNumberColor\">Euphony</span>]",
          "stackType": "ReplaceByCaster",
          "description": "Increases DoT taken by <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_2016_ADF_2</span>.",
          "type": "Debuff",
          "statusName": "Euphony",
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "DOT"
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
                          "value": "DV_FantasticStory_PlusAbility_2016_ADF_2"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-588223096\">Modifier_FantasticStory_BaseAbility_2010_Plus5_Sub</a>[<span class=\"descriptionNumberColor\">Ballad</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "description": "Increases DMG by <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_2015_ADF_1</span>, and memomaster's action advances by <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_2015_ADF_2</span> when it disappears.",
          "type": "Buff",
          "statusName": "Ballad",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Entity Type",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "type": "Memosprite"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Level Entity}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-465768831\">Modifier_FantasticStory_BaseAbility_2010_aura</a>"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Action Advance/Delay",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}.[[getSummoner]]"
                      },
                      "advanceType": "Set",
                      "multiAdd": "-DV_FantasticStory_PlusAbility_2015_ADF_2"
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (DV_FantasticStory_PlusAbility_2015_ADF_1) || RETURN",
                    "displayLines": "DV_FantasticStory_PlusAbility_2015_ADF_1",
                    "constants": [],
                    "variables": [
                      "DV_FantasticStory_PlusAbility_2015_ADF_1"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-375683577\">Modifier_FantasticStory_BaseAbility_2010_plus4_sub</a>[<span class=\"descriptionNumberColor\">Hierophany</span>]",
          "stackType": "ReplaceByCaster",
          "description": "Using Skill consumes HP equal to <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_2014_ADF_1</span> of this unit's Max HP. Additionally, after using Skill, restores HP equal to <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_2014_ADF_2</span> of this unit's Max HP.",
          "type": "Buff",
          "statusName": "Hierophany",
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
                      "consumeFrom": "MaxHP",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "consumePercent": {
                        "operator": "Variables[0] (DV_FantasticStory_PlusAbility_2014_ADF_1) || RETURN",
                        "displayLines": "DV_FantasticStory_PlusAbility_2014_ADF_1",
                        "constants": [],
                        "variables": [
                          "DV_FantasticStory_PlusAbility_2014_ADF_1"
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
                        "operator": "Variables[0] (DV_FantasticStory_PlusAbility_2014_ADF_2) || RETURN",
                        "displayLines": "DV_FantasticStory_PlusAbility_2014_ADF_2",
                        "constants": [],
                        "variables": [
                          "DV_FantasticStory_PlusAbility_2014_ADF_2"
                        ]
                      },
                      "formula": "Heal from Target MaxHP"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-354397128\">Modifier_FantasticStory_BaseAbility_2010_plus3_sub2</a>",
          "stackType": "ReplaceByCaster",
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Attack Source}}"
            },
            "conditions": {
              "name": "Has Toughness Reduction Preview",
              "caster": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "target": {
                "name": "Target Name",
                "target": "{{Player's Aim Target List}}"
              }
            },
            "delayAdvancePreview": {
              "name": "Delay/Advance Preview",
              "previewValue": {
                "operator": "Constants[0] (0) || Variables[0] (DV_FantasticStory_PlusAbility_2013_ADF_2) || SUB || RETURN",
                "displayLines": "(0 - DV_FantasticStory_PlusAbility_2013_ADF_2)",
                "constants": [
                  0
                ],
                "variables": [
                  "DV_FantasticStory_PlusAbility_2013_ADF_2"
                ]
              }
            }
          },
          "execute": [
            {
              "eventTrigger": "Caused Weakness Break [Owner]",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-537679168\">ReduceActionDelay</a>",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variables": {
                    "parameter[0]_NormalizedValue": {
                      "operator": "Variables[0] (DV_FantasticStory_PlusAbility_2013_ADF_2) || RETURN",
                      "displayLines": "DV_FantasticStory_PlusAbility_2013_ADF_2",
                      "constants": [],
                      "variables": [
                        "DV_FantasticStory_PlusAbility_2013_ADF_2"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1236148774\">Modifier_FantasticStory_BaseAbility_2010_plus3_sub</a>[<span class=\"descriptionNumberColor\">Hollow Hope</span>]",
          "stackType": "ReplaceByCaster",
          "description": "Break DMG taken increases by <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_2013_ADF_1</span>. When Weakness is Broken, the attacker's action advances by <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_2013_ADF_2</span>.",
          "type": "Debuff",
          "statusName": "Hollow Hope",
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
                          "value": "DV_FantasticStory_PlusAbility_2013_ADF_1"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1203635663\">Modifier_FantasticStory_BaseAbility_2010_plus2_sub</a>[<span class=\"descriptionNumberColor\">False Promises</span>]",
          "stackType": "ReplaceByCaster",
          "description": "Follow-Up ATK DMG dealt increases by <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_2012_ADF_1</span>. After launching a Follow-Up ATK, deals a set amount of DMG to every attacked enemy target and adjacent target.",
          "type": "Buff",
          "statusName": "False Promises",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
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
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAllTypes</span>&nbsp;",
                          "value": "DV_FantasticStory_PlusAbility_2012_ADF_1"
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "_InsertAttack_Count",
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
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_InsertAttack_Count",
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
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "_InsertAttack_Count",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Attack Targets of Modifier Holder}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "conditions": {
                        "name": "Living State",
                        "state": "Mask_AliveOnly",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
                      },
                      "ifTargetFound": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Active: Fast-Forward Animations"
                          },
                          "passed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Is in Timeline Execution",
                                "invertCondition": true
                              },
                              "passed": [
                                {
                                  "name": "Define Custom Variable",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "variableName": "DV_PerformanceDelay",
                                  "value": 0.35
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Define Custom Variable",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "variableName": "DV_PerformanceDelay",
                                  "value": 0.25
                                }
                              ]
                            }
                          ],
                          "failed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Is in Timeline Execution",
                                "invertCondition": true
                              },
                              "passed": [
                                {
                                  "name": "Define Custom Variable",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "variableName": "DV_PerformanceDelay",
                                  "value": 0.55
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Define Custom Variable",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "variableName": "DV_PerformanceDelay",
                                  "value": 0.35
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Attack Targets of Modifier Holder}}"
                      },
                      "includeDyingTargets": true,
                      "maxTargets": 5,
                      "ifTargetFound": [
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
                              "operator": "Variables[0] (BattleEvent_BaseHP) || Variables[1] (DV_FantasticStory_PlusAbility_2012_ADF_2) || MUL || RETURN",
                              "displayLines": "(BattleEvent_BaseHP * DV_FantasticStory_PlusAbility_2012_ADF_2)",
                              "constants": [],
                              "variables": [
                                "BattleEvent_BaseHP",
                                "DV_FantasticStory_PlusAbility_2012_ADF_2"
                              ]
                            },
                            "dmgFormulaFinal": "Converted DMG Base",
                            "Toughness": null,
                            "Tags": null,
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
                              "operator": "Variables[0] (BattleEvent_BaseHP) || Variables[1] (DV_FantasticStory_PlusAbility_2012_ADF_2) || MUL || RETURN",
                              "displayLines": "(BattleEvent_BaseHP * DV_FantasticStory_PlusAbility_2012_ADF_2)",
                              "constants": [],
                              "variables": [
                                "BattleEvent_BaseHP",
                                "DV_FantasticStory_PlusAbility_2012_ADF_2"
                              ]
                            },
                            "dmgFormulaFinal": "Converted DMG Base",
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "True DMG"
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_InsertAttack_Count",
                  "value": 0
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1632199378\">Modifier_FantasticStory_BaseAbility_2010_plus1_sub2</a>[<span class=\"descriptionNumberColor\">Feverish Surge</span>]",
          "stackType": "ReplaceByCaster",
          "description": "Skill and Ultimate DMG dealt increase by <span class=\"descriptionNumberColor\">_BP_Dmgup_Ratio</span> and SPD increases by <span class=\"descriptionNumberColor\">_Speedup_Ratio</span>.",
          "type": "Buff",
          "statusName": "Feverish Surge",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "_Current_Layer",
                  "multiplier": 1
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_BP_Dmgup_Ratio",
                  "value": {
                    "operator": "Variables[0] (_Current_Layer) || Variables[1] (DV_FantasticStory_PlusAbility_2011_ADF_1) || MUL || RETURN",
                    "displayLines": "(_Current_Layer * DV_FantasticStory_PlusAbility_2011_ADF_1)",
                    "constants": [],
                    "variables": [
                      "_Current_Layer",
                      "DV_FantasticStory_PlusAbility_2011_ADF_1"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_Speedup_Ratio",
                  "value": {
                    "operator": "Variables[0] (_Current_Layer) || Variables[1] (DV_FantasticStory_PlusAbility_2011_ADF_2) || MUL || RETURN",
                    "displayLines": "(_Current_Layer * DV_FantasticStory_PlusAbility_2011_ADF_2)",
                    "constants": [],
                    "variables": [
                      "_Current_Layer",
                      "DV_FantasticStory_PlusAbility_2011_ADF_2"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (_Speedup_Ratio) || RETURN",
                    "displayLines": "_Speedup_Ratio",
                    "constants": [],
                    "variables": [
                      "_Speedup_Ratio"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__396795156\">Modifier_FantasticStory_BaseAbility_2010_plus1_sub</a>[<span class=\"descriptionNumberColor\">Empty Air</span>]",
          "stackType": "ReplaceByCaster",
          "description": "Using Skill does not consume Skill Points.",
          "type": "Buff",
          "statusName": "Empty Air",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1632199378\">Modifier_FantasticStory_BaseAbility_2010_plus1_sub2</a>[<span class=\"descriptionNumberColor\">Feverish Surge</span>]"
                }
              ]
            },
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Skill Type",
                        "skillType": "Skill"
                      },
                      {
                        "name": "Skill Type",
                        "skillType": "Ultimate"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Modifier Values",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "valueType": "Layer",
                      "variableName": "_Current_Layer",
                      "modifierName": "<a class=\"gModGreen\" id=\"1632199378\">Modifier_FantasticStory_BaseAbility_2010_plus1_sub2</a>[<span class=\"descriptionNumberColor\">Feverish Surge</span>]",
                      "multiplier": 1
                    },
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAllTypes</span>&nbsp;",
                          "value": "(_Current_Layer * DV_FantasticStory_PlusAbility_2011_ADF_1)"
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
                  "name": "Update Ability Properties",
                  "abilityTypeList": "Control Skill(2)",
                  "propertyList": [
                    {
                      "name": "Ability Property Action",
                      "propertyName": "Skill Point Cost",
                      "propertyAction": "Remove"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Skill Type",
                        "skillType": "Skill"
                      },
                      {
                        "name": "Skill Type",
                        "skillType": "Ultimate"
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
                      "includeDyingTargets": true,
                      "maxTargets": 5,
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1632199378\">Modifier_FantasticStory_BaseAbility_2010_plus1_sub2</a>[<span class=\"descriptionNumberColor\">Feverish Surge</span>]",
                          "stackLimit": {
                            "operator": "Variables[0] (DV_FantasticStory_PlusAbility_2011_ADF_3) || RETURN",
                            "displayLines": "DV_FantasticStory_PlusAbility_2011_ADF_3",
                            "constants": [],
                            "variables": [
                              "DV_FantasticStory_PlusAbility_2011_ADF_3"
                            ]
                          },
                          "addStacksPerTrigger": 1
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
          "for": "<a class=\"gModGreen\" id=\"mod__-364255802\">Modifier_FantasticStory_BaseAbility_2010_BaseAddOn_ForShow</a>[<span class=\"descriptionNumberColor\">Grit Mechanics</span>]",
          "stackType": "ReplaceByCaster",
          "description": "After using Skill to attack enemy targets, every enemy target attacked additionally accumulates <span class=\"descriptionNumberColor\">DV_Ratio</span> Grit Value.",
          "type": "Buff",
          "statusName": "Grit Mechanics"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2044140979\">Modifier_FantasticStory_BaseAbility_2010_EnterFever_ForShow</a>[<span class=\"descriptionNumberColor\">Surging Grit</span>]",
          "stackType": "ReplaceByCaster",
          "description": "After using Skill to attack an enemy target, deals a set amount of DMG to the targets adjacent to the attacked target.",
          "type": "Buff",
          "statusName": "Surging Grit"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1101088336\">Modifier_FantasticStory_BaseAbility_2010_BeforeFever_ForShow</a>[<span class=\"descriptionNumberColor\">Concordant Truce</span>]",
          "stackType": "ReplaceByCaster",
          "description": "After using Skill to attack an enemy target, deals a set amount of DMG to the targets.",
          "type": "Buff",
          "statusName": "Concordant Truce"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1762727873\">Modifier_FantasticStory_BaseAbility_2010_EnterFever_sub</a>[<span class=\"descriptionNumberColor\">Surging Grit</span>]",
          "stackType": "ReplaceByCaster",
          "description": "DMG taken increases by <span class=\"descriptionNumberColor\">DV_Ratio_Get</span>.",
          "type": "Debuff",
          "effectName": "Vulnerability",
          "statusName": "Surging Grit",
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
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-465768831\">Modifier_FantasticStory_BaseAbility_2010_aura</a>",
          "stackType": "ReplaceByCaster",
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"396795156\">Modifier_FantasticStory_BaseAbility_2010_plus1_sub</a>[<span class=\"descriptionNumberColor\">Empty Air</span>]",
              "haloStatus": true,
              "conditions": {
                "name": "Compare: Variable",
                "value1": "DV_FantasticStory_PlusAbility_2011",
                "compareType": "=",
                "value2": 1
              }
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1203635663\">Modifier_FantasticStory_BaseAbility_2010_plus2_sub</a>[<span class=\"descriptionNumberColor\">False Promises</span>]",
              "haloStatus": true,
              "conditions": {
                "name": "Compare: Variable",
                "value1": "DV_FantasticStory_PlusAbility_2012",
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
              "modifier": "<a class=\"gModGreen\" id=\"-1236148774\">Modifier_FantasticStory_BaseAbility_2010_plus3_sub</a>[<span class=\"descriptionNumberColor\">Hollow Hope</span>]",
              "haloStatus": true,
              "conditions": {
                "name": "Compare: Variable",
                "value1": "DV_FantasticStory_PlusAbility_2013",
                "compareType": "=",
                "value2": 1
              }
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-354397128\">Modifier_FantasticStory_BaseAbility_2010_plus3_sub2</a>",
              "haloStatus": true,
              "conditions": {
                "name": "Compare: Variable",
                "value1": "DV_FantasticStory_PlusAbility_2013",
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
              "modifier": "<a class=\"gModGreen\" id=\"-375683577\">Modifier_FantasticStory_BaseAbility_2010_plus4_sub</a>[<span class=\"descriptionNumberColor\">Hierophany</span>]",
              "haloStatus": true,
              "conditions": {
                "name": "Compare: Variable",
                "value1": "DV_FantasticStory_PlusAbility_2014",
                "compareType": "=",
                "value2": 1
              }
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]].[[getMemosprite]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-588223096\">Modifier_FantasticStory_BaseAbility_2010_Plus5_Sub</a>[<span class=\"descriptionNumberColor\">Ballad</span>]",
              "haloStatus": true,
              "conditions": {
                "name": "Compare: Variable",
                "value1": "DV_FantasticStory_PlusAbility_2015",
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
              "modifier": "<a class=\"gModGreen\" id=\"-1764196443\">Modifier_FantasticStory_BaseAbility_2010_Plus6_Sub</a>[<span class=\"descriptionNumberColor\">Euphony</span>]",
              "haloStatus": true,
              "conditions": {
                "name": "Compare: Variable",
                "value1": "DV_FantasticStory_PlusAbility_2016",
                "compareType": "=",
                "value2": 1
              }
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1761217442\">Modifier_FantasticStory_BaseAbility_2010_Plus7_Sub</a>",
              "haloStatus": true,
              "conditions": {
                "name": "Compare: Variable",
                "value1": "DV_FantasticStory_PlusAbility_2017",
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
              "modifier": "<a class=\"gModGreen\" id=\"-2145216821\">Modifier_FantasticStory_BaseAbility_2010_plus8_sub</a>[<span class=\"descriptionNumberColor\">Ravings</span>]",
              "haloStatus": true,
              "conditions": {
                "name": "Compare: Variable",
                "value1": "DV_FantasticStory_PlusAbility_2018",
                "compareType": "=",
                "value2": 1
              }
            }
          ],
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
                  "type": "FeverBack",
                  "text": "Resurging Tide"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "DV_FantasticStory_BaseAbility_CountSumTemp",
                  "value": 0
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "DV_FantasticStory_PlusAbility_2016",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Skill Points Modification",
                      "adjustmentValue": {
                        "operator": "Variables[0] (DV_FantasticStory_PlusAbility_2018) || RETURN",
                        "displayLines": "DV_FantasticStory_PlusAbility_2018",
                        "constants": [],
                        "variables": [
                          "DV_FantasticStory_PlusAbility_2018"
                        ]
                      },
                      "adjustmentType": "+"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__759083839\">Modifier_FantasticStory_BaseAbility_2010_ListenBEDelay</a>",
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
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__51786752\">Modifier_FantasticStory_BaseAbility_2110_ExceedSP</a>[<span class=\"descriptionNumberColor\">Energy Overflow</span>]",
          "stackType": "ReplaceByCaster",
          "description": "<span class=\"descriptionNumberColor\">EntityStockSPForShow</span> extra Energy. This will be consumed first when unleashing Ultimate.",
          "type": "Other",
          "effectName": "Energy Overflow",
          "statusName": "Energy Overflow"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-384544290\">Modifier_FantasticStory_BaseAbility_2110_ReturnSP</a>",
          "stackType": "ReplaceByCaster",
          "latentQueue": [
            "DV_FantasticStory_BaseAbility_TriggerFlag"
          ],
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
                          "modifier": "<a class=\"gModGreen\" id=\"51786752\">Modifier_FantasticStory_BaseAbility_2110_ExceedSP</a>[<span class=\"descriptionNumberColor\">Energy Overflow</span>]"
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
                          "modifier": "<a class=\"gModGreen\" id=\"51786752\">Modifier_FantasticStory_BaseAbility_2110_ExceedSP</a>[<span class=\"descriptionNumberColor\">Energy Overflow</span>]",
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
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__773567825\">Modifier_FantasticStory_BaseAbility_2110_AddSP</a>",
          "stackType": "ReplaceByCaster",
          "stackData": [
            "BattleEvent_P1_ADF_Get"
          ],
          "latentQueue": [
            "DV_FantasticStory_BaseAbility_TriggerFlag"
          ],
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
                          "modifier": "<a class=\"gModGreen\" id=\"51786752\">Modifier_FantasticStory_BaseAbility_2110_ExceedSP</a>[<span class=\"descriptionNumberColor\">Energy Overflow</span>]",
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
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1805319333\">Modifier_FantasticStory_BaseAbility_2110_Plus3AddOn_ForShow</a>[<span class=\"descriptionNumberColor\">Grit Mechanics: Sanity</span>]",
          "stackType": "ReplaceByCaster",
          "description": "When receiving an attack or losing HP, allies will additionally accumulate <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_2113_ADF_3</span> Grit Value.",
          "type": "Buff",
          "statusName": "Grit Mechanics: Sanity"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1058073602\">Modifier_FantasticStory_BaseAbility_2110_Plus3AddOn</a>",
          "stackType": "ReplaceByCaster",
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
              "modifier": "<a class=\"gModGreen\" id=\"-1805319333\">Modifier_FantasticStory_BaseAbility_2110_Plus3AddOn_ForShow</a>[<span class=\"descriptionNumberColor\">Grit Mechanics: Sanity</span>]",
              "haloStatus": true
            }
          ],
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
                    "modifier": "<a class=\"gModGreen\" id=\"1923363748\">Modifier_FantasticStory_BaseAbility_2110_aura</a>",
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
                    "modifier": "<a class=\"gModGreen\" id=\"1923363748\">Modifier_FantasticStory_BaseAbility_2110_aura</a>",
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
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__612720754\">Modifier_FantasticStory_BaseAbility_2110_Plus2AddOn_ForShow</a>[<span class=\"descriptionNumberColor\">Grit Mechanics: Gnosis</span>]",
          "stackType": "ReplaceByCaster",
          "description": "When a Weakness is Broken, additionally accumulates <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_2112_ADF_2</span> Grit Value for allies.",
          "type": "Debuff",
          "statusName": "Grit Mechanics: Gnosis"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1928021681\">Modifier_FantasticStory_BaseAbility_2110_Plus2AddOn</a>",
          "stackType": "ReplaceByCaster",
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
              "modifier": "<a class=\"gModGreen\" id=\"612720754\">Modifier_FantasticStory_BaseAbility_2110_Plus2AddOn_ForShow</a>[<span class=\"descriptionNumberColor\">Grit Mechanics: Gnosis</span>]",
              "haloStatus": true
            }
          ],
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
                        "modifier": "<a class=\"gModGreen\" id=\"1923363748\">Modifier_FantasticStory_BaseAbility_2110_aura</a>",
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
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-31325999\">Modifier_FantasticStory_BaseAbility_2110_Plus1AddOn_ForShow</a>[<span class=\"descriptionNumberColor\">Grit Mechanics: Evince</span>]",
          "stackType": "ReplaceByCaster",
          "description": "After using Skill or launching a Follow-Up ATK, every enemy target hit additionally accumulates <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_2111_ADF_1</span> Grit Value for allies.",
          "type": "Buff",
          "statusName": "Grit Mechanics: Evince"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1363213920\">Modifier_FantasticStory_BaseAbility_2110_Plus1AddOn</a>",
          "stackType": "ReplaceByCaster",
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
              "modifier": "<a class=\"gModGreen\" id=\"-31325999\">Modifier_FantasticStory_BaseAbility_2110_Plus1AddOn_ForShow</a>[<span class=\"descriptionNumberColor\">Grit Mechanics: Evince</span>]",
              "haloStatus": true
            }
          ],
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
                        "modifier": "<a class=\"gModGreen\" id=\"1923363748\">Modifier_FantasticStory_BaseAbility_2110_aura</a>",
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
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1184097523\">Modifier_FantasticStory_BaseAbility_2110_plus3_sub</a>[<span class=\"descriptionNumberColor\">Sanity</span>]",
          "stackType": "ReplaceByCaster",
          "description": "Consumes this unit's current HP by <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_2113_ADF_1</span> when using a Skill. After using Skill, restores <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_2113_ADF_2</span> HP equal to this unit's Max HP.",
          "type": "Buff",
          "statusName": "Sanity",
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
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2052424996\">Modifier_FantasticStory_BaseAbility_2110_plus2_sub2</a>[<span class=\"descriptionNumberColor\">Gnosis</span>]",
          "stackType": "ReplaceByCaster",
          "description": "Break DMG taken increases by <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_2112_ADF_3</span>.",
          "type": "Debuff",
          "effectName": "Vulnerability",
          "statusName": "Gnosis",
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
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1595223290\">Modifier_FantasticStory_BaseAbility_2110_plus2_sub</a>",
          "stackType": "ReplaceByCaster"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__547730031\">Modifier_FantasticStory_BaseAbility_2110_plus1_sub</a>[<span class=\"descriptionNumberColor\">Evince</span>]",
          "stackType": "ReplaceByCaster",
          "description": "Use Skills or launching a Follow-Up ATK against enemy targets with \"Shatter\" can immediately trigger \"Shatter.\"",
          "type": "Buff",
          "statusName": "Evince",
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
                        "modifier": "<a class=\"gModGreen\" id=\"-2132571309\">Modifier_FantasticStory_BaseAbility_2110_BeforeFever_sub2</a>[<span class=\"descriptionNumberColor\">Shatter</span>]"
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
                          "modifierName": "<a class=\"gModGreen\" id=\"-2132571309\">Modifier_FantasticStory_BaseAbility_2110_BeforeFever_sub2</a>[<span class=\"descriptionNumberColor\">Shatter</span>]",
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
                          "modifier": "<a class=\"gModGreen\" id=\"-2132571309\">Modifier_FantasticStory_BaseAbility_2110_BeforeFever_sub2</a>[<span class=\"descriptionNumberColor\">Shatter</span>]"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1732946835\">Modifier_FantasticStory_BaseAbility_2110_BaseAddOn_ForShow</a>[<span class=\"descriptionNumberColor\">Grit Mechanics</span>]",
          "stackType": "ReplaceByCaster",
          "stackData": [
            "DV_Ratio"
          ],
          "description": "After using Basic ATK or Ultimate to attack enemy targets, every enemy target hit additionally accumulates <span class=\"descriptionNumberColor\">DV_Ratio</span> Grit Value for allies.",
          "type": "Buff",
          "statusName": "Grit Mechanics"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1102093119\">Modifier_FantasticStory_BaseAbility_2110_BeforeFever_ForShow</a>[<span class=\"descriptionNumberColor\">Concordant Truce</span>]",
          "stackType": "ReplaceByCaster",
          "description": "When using a Basic ATK or an Ultimate to attack an enemy target, inflicts the target with \"Shatter,\" stacking up to <span class=\"descriptionNumberColor\">DV_FantasticStory_BaseAbility_2110_BeforeFever_P1_MaxLayer</span> time(s). At the start of the target's turn or when the target is defeated, deals a set amount of DMG to the target and adjacent targets based on the number of \"Shatter\" stacks.",
          "type": "Buff",
          "statusName": "Concordant Truce"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-277929062\">Modifier_FantasticStory_BaseAbility_2110_EnterFever_sub</a>[<span class=\"descriptionNumberColor\">Surging Grit</span>]",
          "stackType": "ReplaceByCaster",
          "stackData": [
            "DV_Ratio_Get"
          ],
          "description": "Increases DMG taken by <span class=\"descriptionNumberColor\">DV_Ratio_Get</span>.",
          "type": "Debuff",
          "statusName": "Surging Grit",
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
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1923363748\">Modifier_FantasticStory_BaseAbility_2110_aura</a>",
          "stackType": "ReplaceByCaster",
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
              "modifier": "<a class=\"gModGreen\" id=\"547730031\">Modifier_FantasticStory_BaseAbility_2110_plus1_sub</a>[<span class=\"descriptionNumberColor\">Evince</span>]",
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
              "modifier": "<a class=\"gModGreen\" id=\"-1595223290\">Modifier_FantasticStory_BaseAbility_2110_plus2_sub</a>",
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
              "modifier": "<a class=\"gModGreen\" id=\"-2052424996\">Modifier_FantasticStory_BaseAbility_2110_plus2_sub2</a>[<span class=\"descriptionNumberColor\">Gnosis</span>]",
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
              "modifier": "<a class=\"gModGreen\" id=\"-1184097523\">Modifier_FantasticStory_BaseAbility_2110_plus3_sub</a>[<span class=\"descriptionNumberColor\">Sanity</span>]",
              "haloStatus": true,
              "conditions": {
                "name": "Compare: Variable",
                "value1": "DV_FantasticStory_PlusAbility_2113",
                "compareType": "=",
                "value2": 1
              }
            }
          ],
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
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1391985236\">Modifier_FantasticStory_BaseAbility_2110_ListenBEDelay</a>",
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
          ]
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