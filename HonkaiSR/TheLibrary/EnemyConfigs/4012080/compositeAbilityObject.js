const entityPageType = "enemy"
const compositeAbilityObject = {
  "fullCharacterName": 4012080,
  "trimCharacterName": 4012080,
  "abilityList": [
    "4012080_Monster_W4_DawnsEyePart_Ability02P2_Part02",
    "4012080_Monster_W4_DawnsEyePart_Ability02P2_Part01",
    "4012080_Monster_W4_DawnsEyePart_Ability02_Part02",
    "4012080_Monster_W4_DawnsEyePart_Ability02_Part01",
    "4012080_Monster_W4_DawnsEyePart_Ability01_Part02",
    "4012080_Monster_W4_DawnsEyePart_Ability01_Part01",
    "4012080_Monster_W4_DawnsEyePart_AbilityP01",
    "4012080_Modifiers"
  ],
  "abilityObject": {
    "4012080_Monster_W4_DawnsEyePart_Ability02P2_Part02": {
      "fileName": "4012080_Monster_W4_DawnsEyePart_Ability02P2_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Summoner}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1923265590\">Modifier_Monster_W4_DawnsEye_WheaterRain</a>"
          },
          "passed": [
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "variableName": "Thunder_CountDark",
              "context": "TargetEntity",
              "value": {
                "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
                "displayLines": "{[Skill02[0]]}",
                "constants": [],
                "variables": [
                  "{[Skill02[0]]}"
                ]
              },
              "max": 999
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2093876840\">Modifier_Monster_W4_DawnsEye_WheaterRainUIController</a>",
              "casterAssign": "TargetSelf"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1785279589\">Enemy_W4_DawnsEye_WeatherEnhanced</a>[<span class=\"descriptionNumberColor\">Wingbeats</span>]",
              "valuePerStack": {
                "MDF_Weather": 0
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-714604619\">Enemy_W4_DawnsEye_WeatherEnhancedEffectPhase2</a>"
            }
          ]
        },
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "PhaseCharge"
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "4012080_Monster_W4_DawnsEyePart_Ability02P2_Part01": {
      "fileName": "4012080_Monster_W4_DawnsEyePart_Ability02P2_Part01",
      "childAbilityList": [
        "4012080_Monster_W4_DawnsEyePart_Ability02P2_Camera",
        "4012080_Monster_W4_DawnsEyePart_Ability02P2_Part01",
        "4012080_Monster_W4_DawnsEyePart_Ability02P2_Part02"
      ],
      "skillTrigger": "Skill02P2",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W4_DawnsEyePart_Ability02P2_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "4012080_Monster_W4_DawnsEyePart_Ability02_Part02": {
      "fileName": "4012080_Monster_W4_DawnsEyePart_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Summoner}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-39064349\">Modifier_Monster_W4_DawnsEye_WheaterSunny</a>"
          },
          "passed": [
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "variableName": "Sunny_Temperature",
              "context": "TargetEntity",
              "value": {
                "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
                "displayLines": "{[Skill02[1]]}",
                "constants": [],
                "variables": [
                  "{[Skill02[1]]}"
                ]
              },
              "max": 999
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"735847061\">Modifier_Monster_W4_DawnsEye_WheaterSunnyUIController</a>",
              "casterAssign": "TargetSelf"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1785279589\">Enemy_W4_DawnsEye_WeatherEnhanced</a>[<span class=\"descriptionNumberColor\">Wingbeats</span>]",
              "valuePerStack": {
                "MDF_Weather": 0
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-764937476\">Enemy_W4_DawnsEye_WeatherEnhancedEffectPhase1</a>"
            }
          ]
        },
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "PhaseCharge"
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "4012080_Monster_W4_DawnsEyePart_Ability02_Part01": {
      "fileName": "4012080_Monster_W4_DawnsEyePart_Ability02_Part01",
      "childAbilityList": [
        "4012080_Monster_W4_DawnsEyePart_Ability02_Camera",
        "4012080_Monster_W4_DawnsEyePart_Ability02_Part01",
        "4012080_Monster_W4_DawnsEyePart_Ability02_Part02"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W4_DawnsEyePart_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "4012080_Monster_W4_DawnsEyePart_Ability01_Part02": {
      "fileName": "4012080_Monster_W4_DawnsEyePart_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
              "displayLines": "{[Skill01[0]]}",
              "constants": [],
              "variables": [
                "{[Skill01[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "4012080_Monster_W4_DawnsEyePart_Ability01_Part01": {
      "fileName": "4012080_Monster_W4_DawnsEyePart_Ability01_Part01",
      "childAbilityList": [
        "4012080_Monster_W4_DawnsEyePart_Ability01_Camera",
        "4012080_Monster_W4_DawnsEyePart_Ability01_Part01",
        "4012080_Monster_W4_DawnsEyePart_Ability01_Part02"
      ],
      "skillTrigger": "Skill01",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W4_DawnsEyePart_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "4012080_Monster_W4_DawnsEyePart_AbilityP01": {
      "fileName": "4012080_Monster_W4_DawnsEyePart_AbilityP01",
      "skillTrigger": "SkillP01",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1513761820\">Monster_W4_DawnsEyePart_BreakController</a>"
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1513761820\">Monster_W4_DawnsEyePart_BreakController</a>",
          "modifierFlags": [
            "MuteHitFly"
          ],
          "execute": [
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "revertDefault": true
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "4012080_Modifiers": {
      "fileName": "4012080_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__791776772\">Enemy_W4_DawnsEye_WeatherWeakMessage</a>",
          "execute": [
            {
              "eventTrigger": "Turn Start [Anyone]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-714604619\">Enemy_W4_DawnsEye_WeatherEnhancedEffectPhase2</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-764937476\">Enemy_W4_DawnsEye_WeatherEnhancedEffectPhase1</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1785279589\">Enemy_W4_DawnsEye_WeatherEnhanced</a>[<span class=\"descriptionNumberColor\">Wingbeats</span>]",
          "modifierFlags": [
            "MuteSpeed"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Block Advance/Delay Effects",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "isLock": false
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1785279589\">Enemy_W4_DawnsEye_WeatherEnhanced</a>[<span class=\"descriptionNumberColor\">Wingbeats</span>]"
                  },
                  "noTargetFound": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "conditions": {
                        "name": "Compare: Monster Rank",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "compareType": "=",
                        "value2": 5
                      },
                      "ifTargetFound": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-122136541\">Enemy_W4_DawnsEye_MainBlock</a>"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Set Action-State",
                  "on": null,
                  "stateName": "PartControl"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster's Summoner}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1923265590\">Modifier_Monster_W4_DawnsEye_WheaterRain</a>"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster's Summoner}}"
                        },
                        "value1": "Thunder_CountDark",
                        "compareType": ">=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable with Added Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster's Summoner}}"
                          },
                          "variableName": "Thunder_CountDark",
                          "context": "TargetEntity",
                          "value": {
                            "operator": "Constants[0] (0) || Variables[0] ({[Skill02[3]]}) || SUB || RETURN",
                            "displayLines": "(0 - {[Skill02[3]]})",
                            "constants": [
                              0
                            ],
                            "variables": [
                              "{[Skill02[3]]}"
                            ]
                          },
                          "max": 999
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster's Summoner}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-2093876840\">Modifier_Monster_W4_DawnsEye_WheaterRainUIController</a>",
                          "casterAssign": "TargetSelf"
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster's Summoner}}"
                            },
                            "value1": "Thunder_CountDark",
                            "compareType": "=",
                            "value2": 0
                          },
                          "passed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Caster's Summoner}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"-1414068042\">Modifier_Monster_W4_DawnsEye_WheaterMarkAbility04</a>[<span class=\"descriptionNumberColor\">Ionization</span>]"
                              },
                              "passed": [
                                {
                                  "name": "Define Custom Variable with Stat",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Caster's Summoner}}"
                                  },
                                  "variableName": "MDF_BreakStance",
                                  "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
                                },
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Caster's Summoner}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"1862939413\">Modifier_Monster_W4_DawnsEye_WheaterRainTriggerBreak</a>",
                                  "casterAssign": "TargetSelf"
                                },
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Caster's Summoner}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"1497489687\">W4_DawnsEye_BattleScore2</a>"
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster's Summoner}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-39064349\">Modifier_Monster_W4_DawnsEye_WheaterSunny</a>"
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable with Added Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster's Summoner}}"
                          },
                          "variableName": "Sunny_Temperature",
                          "context": "TargetEntity",
                          "value": {
                            "operator": "Constants[0] (0) || Variables[0] ({[Skill02[4]]}) || SUB || RETURN",
                            "displayLines": "(0 - {[Skill02[4]]})",
                            "constants": [
                              0
                            ],
                            "variables": [
                              "{[Skill02[4]]}"
                            ]
                          },
                          "max": 999
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster's Summoner}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"735847061\">Modifier_Monster_W4_DawnsEye_WheaterSunnyUIController</a>",
                          "casterAssign": "TargetSelf"
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
                  "name": "Block Advance/Delay Effects",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "whitelist": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "whitelistTag": "Mask_TurnBasedAdvance"
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "conditions": {
                    "name": "Compare: Monster Rank",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "compareType": "=",
                    "value2": 5
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-122136541\">Enemy_W4_DawnsEye_MainBlock</a>"
                    }
                  ]
                },
                {
                  "name": "Set Action-State",
                  "on": null,
                  "stateName": "PartControl",
                  "state": false
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "AIFlag",
                  "value": 2
                },
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [
            "MDF_Weather"
          ],
          "latentQueue": [],
          "description": "\"Daythunder Raven\" enters Enhanced state. Dispelled upon being Weakness Broken.",
          "type": "Other",
          "effectName": "Enhance",
          "statusName": "Wingbeats"
        }
      ],
      "references": []
    }
  }
}