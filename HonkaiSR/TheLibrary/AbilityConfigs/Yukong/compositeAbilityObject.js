const entityPageType = "char"
const compositeAbilityObject = {
  "fullCharacterName": "Yukong",
  "trimCharacterName": "Yukong",
  "abilityList": [
    "Yukong_Modifiers",
    "Yukong_Yukong_Trace02",
    "Yukong_Yukong_Trace01",
    "Yukong_Yukong_Eidolon2",
    "Yukong_Yukong_Eidolon1",
    "Yukong_LocalPlayer_StandardAbility_AttackBreak",
    "Yukong_LocalPlayer_Yukong_TechniqueUsage",
    "Yukong_LocalPlayer_Yukong_NormalAtk01",
    "Yukong_Yukong_TechniqueInLevel",
    "Yukong_Yukong_PassiveAbility01",
    "Yukong_Yukong_Ability03_AddFlower",
    "Yukong_Yukong_Ability03_Part02",
    "Yukong_Yukong_Ability03_Part01",
    "Yukong_Yukong_Ability03_EnterReady",
    "Yukong_Yukong_Ability02_CountDown",
    "Yukong_Yukong_Ability02_AddFlower",
    "Yukong_Yukong_Ability02_Part02",
    "Yukong_Yukong_Ability02_Part01",
    "Yukong_Yukong_Ability01_Part02",
    "Yukong_Yukong_Ability01_Part01"
  ],
  "abilityObject": {
    "Yukong_Modifiers": {
      "fileName": "Yukong_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__1461700286\">ADV_Modifier_Maze_Yukong</a>",
          "counter": 1,
          "stackType": "Refresh",
          "onCreation": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Animator Variable",
                "paramType": "Int",
                "paramName": "MotionFlag",
                "compareType": "=",
                "compareValue": 3
              }
            }
          ],
          "onStageExit": [
            "Modifier Deletes Itself"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__203914091\">ADV_StageAbility_Maze_Yukong</a>",
          "counter": 1,
          "stackType": "Merge"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__64466487\">Yukong_FlowerListen</a>",
          "execute": [
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members with Unselectables}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1617821492\">Yukong_Flower</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__781697929\">Yukong_Eidolon4_Flower_Bonus</a>[<span class=\"descriptionNumberColor\">Zephyrean Echoes</span>]",
          "description": "Increases DMG dealt by <span class=\"descriptionNumberColor\">MDF_AddedRatio</span>.",
          "type": "Buff",
          "effectName": "DMG Boost",
          "statusName": "Zephyrean Echoes",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": {
                    "displayLines": "MDF_AddedRatio"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1203634791\">Yukong_Passive_BonusCD</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-2029608096\">Yukong_Passive_Bonus</a>[<span class=\"descriptionNumberColor\">Seven Layers, One Arrow</span>]",
                  "valuePerStack": {
                    "MDF_AddDamagePercentage": {
                      "displayLines": "MDF_AddDamagePercentage"
                    },
                    "MDF_StanceBreakAddedRatio": {
                      "displayLines": "MDF_StanceBreakAddedRatio"
                    }
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-2029608096\">Yukong_Passive_Bonus</a>[<span class=\"descriptionNumberColor\">Seven Layers, One Arrow</span>]"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2029608096\">Yukong_Passive_Bonus</a>[<span class=\"descriptionNumberColor\">Seven Layers, One Arrow</span>]",
          "stackData": [
            "MDF_AddDamagePercentage",
            "MDF_StanceBreakAddedRatio"
          ],
          "description": "Basic ATK deals additional Imaginary DMG equal to <span class=\"descriptionNumberColor\">MDF_AddDamagePercentage</span> of Yukong's ATK, and increases Toughness Reduction by <span class=\"descriptionNumberColor\">MDF_StanceBreakAddedRatio</span>.",
          "type": "Buff",
          "statusName": "Seven Layers, One Arrow",
          "execute": [
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members with Unselectables}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1617821492\">Yukong_Flower</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1932378528\">Yukong_Flower_ActionTurn</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1097783562\">Yukong_Flower_ATK_Crit</a>[<span class=\"descriptionNumberColor\">Roaring Bowstrings</span>]",
          "stackType": "ReplaceByCaster",
          "description": "Increases ATK by <span class=\"descriptionNumberColor\">MDF_RealAttack</span>, CRIT Rate by <span class=\"descriptionNumberColor\">MDF_CritChanceUp</span>, and CRIT DMG by <span class=\"descriptionNumberColor\">MDF_CritDamageUpRatio</span>.",
          "type": "Buff",
          "effectName": "ATK, CRIT Rate, and CRIT DMG Boost",
          "statusName": "Roaring Bowstrings",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"432670237\">Yukong_Flower_ATK</a>[<span class=\"descriptionNumberColor\">Roaring Bowstrings</span>]"
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
                  "value": {
                    "displayLines": "MDF_RealAttack"
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateBase</span>&nbsp;",
                  "value": {
                    "displayLines": "MDF_CritChanceUp"
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
                  "value": {
                    "displayLines": "MDF_CritDamageUpRatio"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__432670237\">Yukong_Flower_ATK</a>[<span class=\"descriptionNumberColor\">Roaring Bowstrings</span>]",
          "stackType": "ReplaceByCaster",
          "description": "ATK +<span class=\"descriptionNumberColor\">MDF_RealAttack</span>.",
          "type": "Buff",
          "effectName": "ATK Boost",
          "statusName": "Roaring Bowstrings",
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
                    "displayLines": "MDF_RealAttack"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1617821492\">Yukong_Flower</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 4
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"781697929\">Yukong_Eidolon4_Flower_Bonus</a>[<span class=\"descriptionNumberColor\">Zephyrean Echoes</span>]",
                      "valuePerStack": {
                        "MDF_AddedRatio": {
                          "displayLines": "MDF_Rank04AddedRatio"
                        }
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_FromUltraMark",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"432670237\">Yukong_Flower_ATK</a>[<span class=\"descriptionNumberColor\">Roaring Bowstrings</span>]",
                      "valuePerStack": {
                        "MDF_RealAttack": {
                          "displayLines": "MDF_AttackAddedRatio"
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"432670237\">Yukong_Flower_ATK</a>[<span class=\"descriptionNumberColor\">Roaring Bowstrings</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1097783562\">Yukong_Flower_ATK_Crit</a>[<span class=\"descriptionNumberColor\">Roaring Bowstrings</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"781697929\">Yukong_Eidolon4_Flower_Bonus</a>[<span class=\"descriptionNumberColor\">Zephyrean Echoes</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1932378528\">Yukong_Flower_ActionTurn</a>"
                }
              ]
            },
            {
              "eventTrigger": "Turn [Owner]: Pre-action Phase",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Current Turn Is",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1932378528\">Yukong_Flower_ActionTurn</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Turn [Anyone]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Current Turn Is",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    }
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
                        "modifier": "<a class=\"gModGreen\" id=\"-1932378528\">Yukong_Flower_ActionTurn</a>"
                      },
                      "passed": [
                        {
                          "name": "Trigger Ability",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "ability": "Yukong_Ability02_CountDown"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1932378528\">Yukong_Flower_ActionTurn</a>"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Current Turn Is",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    }
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
                        "modifier": "<a class=\"gModGreen\" id=\"-1103490299\">Yukong_Ability02_FlowerFlag</a>"
                      },
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1932378528\">Yukong_Flower_ActionTurn</a>"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Current Turn Is",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        }
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "MDF_FromUltraMark",
                        "compareType": "=",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1932378528\">Yukong_Flower_ActionTurn</a>"
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": 1,
                      "variableName": "MDF_FromUltraMark"
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
                    "name": "Trace Activated",
                    "conditionList": "Majestas"
                  },
                  "passed": [
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": {
                        "displayLines": "MDF_PointB3Amount"
                      },
                      "isFixed": "* ERR"
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
    "Yukong_Yukong_Trace02": {
      "fileName": "Yukong_Yukong_Trace02",
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
          "modifier": "<a class=\"gModGreen\" id=\"1474251407\">Yukong_Point02_Bonus</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__931142386\">Yukong_Point02_ImaginaryAddedRatio</a>",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageImaginary</span>&nbsp;",
                  "value": {
                    "displayLines": "MDF_Ratio"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1474251407\">Yukong_Point02_Bonus</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"931142386\">Yukong_Point02_ImaginaryAddedRatio</a>",
                  "valuePerStack": {
                    "MDF_Ratio": {
                      "displayLines": "0.12"
                    }
                  }
                }
              ]
            },
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Teammate",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"931142386\">Yukong_Point02_ImaginaryAddedRatio</a>",
                      "valuePerStack": {
                        "MDF_Ratio": {
                          "displayLines": "0.12"
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members with Unselectables}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"931142386\">Yukong_Point02_ImaginaryAddedRatio</a>",
                  "onlyRemoveOwnersInstance": true
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
    "Yukong_Yukong_Trace01": {
      "fileName": "Yukong_Yukong_Trace01",
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
          "modifier": "<a class=\"gModGreen\" id=\"8695772\">Yukong_Point01_Bonus</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-92058280\">Yukong_Point01_ResistCD</a>",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
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
                  "modifier": "<a class=\"gModGreen\" id=\"-238308601\">Yukong_Point01_Resist</a>[<span class=\"descriptionNumberColor\">Debuff Block</span>]",
                  "valuePerStack": {
                    "MDF_ResistCD": {
                      "displayLines": "2"
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-238308601\">Yukong_Point01_Resist</a>[<span class=\"descriptionNumberColor\">Debuff Block</span>]",
          "modifierFlags": [
            "ImmuneDebuff"
          ],
          "stackData": [
            "MDF_ResistCD"
          ],
          "description": "Blocks 1 debuff.",
          "type": "Buff",
          "statusName": "Debuff Block",
          "execute": [
            {
              "eventTrigger": "Debuff Immunity[?]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-92058280\">Yukong_Point01_ResistCD</a>",
                  "duration": {
                    "displayLines": "MDF_ResistCD"
                  }
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-238308601\">Yukong_Point01_Resist</a>[<span class=\"descriptionNumberColor\">Debuff Block</span>]"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__8695772\">Yukong_Point01_Bonus</a>",
          "execute": [
            {
              "eventTrigger": "Turn [Owner]: Pre-action Phase",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "NOT",
                        "conditions": {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-238308601\">Yukong_Point01_Resist</a>[<span class=\"descriptionNumberColor\">Debuff Block</span>]"
                        }
                      },
                      {
                        "name": "NOT",
                        "conditions": {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-92058280\">Yukong_Point01_ResistCD</a>"
                        }
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
                      "modifier": "<a class=\"gModGreen\" id=\"-238308601\">Yukong_Point01_Resist</a>[<span class=\"descriptionNumberColor\">Debuff Block</span>]",
                      "valuePerStack": {
                        "MDF_ResistCD": {
                          "displayLines": "2"
                        }
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
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-238308601\">Yukong_Point01_Resist</a>[<span class=\"descriptionNumberColor\">Debuff Block</span>]",
                  "valuePerStack": {
                    "MDF_ResistCD": {
                      "displayLines": "2"
                    }
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
    "Yukong_Yukong_Eidolon2": {
      "fileName": "Yukong_Yukong_Eidolon2",
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
          "modifier": "<a class=\"gModGreen\" id=\"153995997\">Yukong_Eidolon2_Bonus</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-476851750\">Yukong_Eidolon2_BonusCD</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1787779750\">Yukong_Eidolon2_TeamMemberCheckSP</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-476851750\">Yukong_Eidolon2_BonusCD</a>",
                        "invertCondition": true
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "Energy%",
                        "compareType": ">=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": {
                        "displayLines": "MDF_Rank02Amount"
                      },
                      "isFixed": "* ERR"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-476851750\">Yukong_Eidolon2_BonusCD</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Energy Change",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-476851750\">Yukong_Eidolon2_BonusCD</a>",
                        "invertCondition": true
                      },
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
                        "value1": "Energy%",
                        "compareType": ">=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": {
                        "displayLines": "MDF_Rank02Amount"
                      },
                      "isFixed": "* ERR"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-476851750\">Yukong_Eidolon2_BonusCD</a>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__153995997\">Yukong_Eidolon2_Bonus</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "5"
                  },
                  "variableName": "MDF_Rank02Amount"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1787779750\">Yukong_Eidolon2_TeamMemberCheckSP</a>"
                }
              ]
            },
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Teammate",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1787779750\">Yukong_Eidolon2_TeamMemberCheckSP</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members with Unselectables}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1787779750\">Yukong_Eidolon2_TeamMemberCheckSP</a>",
                  "onlyRemoveOwnersInstance": true
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
    "Yukong_Yukong_Eidolon1": {
      "fileName": "Yukong_Yukong_Eidolon1",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1803156714\">Yukong_Eidolon1_Bonus</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-65553749\">Yukong_Eidolon1_SpeedUp</a>[<span class=\"descriptionNumberColor\">Aerial Marshal</span>]",
          "description": "SPD +<span class=\"descriptionNumberColor\">MDF_SpeedUpRatio</span>.",
          "type": "Buff",
          "effectName": "SPD Boost",
          "statusName": "Aerial Marshal",
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
                    "displayLines": "MDF_SpeedUpRatio"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1803156714\">Yukong_Eidolon1_Bonus</a>",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "priorityLevel": -80,
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
                        "target": "{{All Team Members}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-65553749\">Yukong_Eidolon1_SpeedUp</a>[<span class=\"descriptionNumberColor\">Aerial Marshal</span>]",
                      "duration": {
                        "displayLines": "2"
                      },
                      "valuePerStack": {
                        "MDF_SpeedUpRatio": {
                          "displayLines": "0.1"
                        },
                        "MDF_LifeTime": {
                          "displayLines": "2"
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
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "Yukong_LocalPlayer_StandardAbility_AttackBreak": {
      "fileName": "Yukong_LocalPlayer_StandardAbility_AttackBreak",
      "skillTrigger": "MazeCommonPassve01",
      "abilityType": "Basic ATK",
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"951318209\">ADV_StageAbility_MazeStandard_OnStageEffect</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-247093964\">ADV_StageAbility_MazeStandard_ListenEnterBattle_Standard</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Element",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "DamageType": "Physical"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"761715744\">ADV_StageAbility_MazeStandard_ListenEnterBattle_Physical</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Element",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "DamageType": "Fire"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-380086631\">ADV_StageAbility_MazeStandard_ListenEnterBattle_Fire</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Element",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "DamageType": "Ice"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-97518784\">ADV_StageAbility_MazeStandard_ListenEnterBattle_Ice</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Element",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "DamageType": "Thunder"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1597144751\">ADV_StageAbility_MazeStandard_ListenEnterBattle_Thunder</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Element",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "DamageType": "Wind"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1816746695\">ADV_StageAbility_MazeStandard_ListenEnterBattle_Wind</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Element",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "DamageType": "Quantum"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-418599870\">ADV_StageAbility_MazeStandard_ListenEnterBattle_Quantum</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Element",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "DamageType": "Imaginary"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1882459002\">ADV_StageAbility_MazeStandard_ListenEnterBattle_Imaginary</a>"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1927069485\">ADV_StageAbility_MazeStandard_ListenEnterBattle_TeamLeader</a>"
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "Yukong_LocalPlayer_Yukong_TechniqueUsage": {
      "fileName": "Yukong_LocalPlayer_Yukong_TechniqueUsage",
      "skillTrigger": "MazeSkill",
      "abilityType": "Basic ATK",
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": null,
          "ID": "120702()",
          "duration": {
            "displayLines": "20"
          },
          "valuePerStack": {
            "MDF_MoveSpeedRatio": {
              "displayLines": "0.35"
            }
          }
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "Yukong_LocalPlayer_Yukong_NormalAtk01": {
      "fileName": "Yukong_LocalPlayer_Yukong_NormalAtk01",
      "skillTrigger": "NormalAtk",
      "abilityType": "Basic ATK",
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": "Ability Has a Target",
          "passed": [
            "Deleted bullshit",
            {
              "name": "Shot Fired",
              "execute": [
                {
                  "name": "Overworld Attack Instance",
                  "onBattle": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier (OVERWORLD)",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1461700286\">ADV_Modifier_Maze_Yukong</a>"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": null,
                          "ID": "120701(SkillMaze)"
                        }
                      ]
                    }
                  ]
                }
              ],
              "projectileFinished": [
                {
                  "name": "Overworld Attack Instance",
                  "onBattle": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier (OVERWORLD)",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1461700286\">ADV_Modifier_Maze_Yukong</a>"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": null,
                          "ID": "120701(SkillMaze)"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "failed": [
            "Deleted bullshit",
            {
              "name": "Shot Fired",
              "execute": [
                {
                  "name": "Overworld Attack Instance",
                  "onBattle": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier (OVERWORLD)",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1461700286\">ADV_Modifier_Maze_Yukong</a>"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": null,
                          "ID": "120701(SkillMaze)"
                        }
                      ]
                    }
                  ]
                }
              ],
              "projectileFinished": [
                {
                  "name": "Overworld Attack Instance",
                  "onBattle": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier (OVERWORLD)",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1461700286\">ADV_Modifier_Maze_Yukong</a>"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": null,
                          "ID": "120701(SkillMaze)"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "whenAdded": [],
      "onAbortReg": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Skill Point User(Or NONE)"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target"
      }
    },
    "Yukong_Yukong_TechniqueInLevel": {
      "fileName": "Yukong_Yukong_TechniqueInLevel",
      "childAbilityList": [
        "Yukong_Yukong_TechniqueInLevel"
      ],
      "skillTrigger": "SkillMaze",
      "abilityType": "Technique",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"446280574\">Yukong_YuKong_Maze_Modifier</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__446280574\">Yukong_YuKong_Maze_Modifier</a>",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "priorityLevel": -80,
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
                      "name": "Trigger Ability",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "ability": "Yukong_Ability02_AddFlower"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "Yukong_Yukong_PassiveAbility01": {
      "fileName": "Yukong_Yukong_PassiveAbility01",
      "childAbilityList": [
        "Yukong_Yukong_PassiveAbility01"
      ],
      "skillTrigger": "SkillP01",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2029608096\">Yukong_Passive_Bonus</a>[<span class=\"descriptionNumberColor\">Seven Layers, One Arrow</span>]",
          "valuePerStack": {
            "MDF_AddDamagePercentage": {
              "displayLines": "0.8"
            },
            "MDF_StanceBreakAddedRatio": {
              "displayLines": "1"
            }
          }
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": 0,
          "maximum": {
            "displayLines": "2"
          },
          "assignState": "True",
          "priorState": "Normal",
          "bar#": 3,
          "cooldown": 0
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"64466487\">Yukong_FlowerListen</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1947872588\">Yukong_ServantFlowerListen</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1947872588\">Yukong_ServantFlowerListen</a>",
          "execute": [
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Entity Type",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "entityType": "Memosprite"
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
                        "modifier": "<a class=\"gModGreen\" id=\"432670237\">Yukong_Flower_ATK</a>[<span class=\"descriptionNumberColor\">Roaring Bowstrings</span>]"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1617821492\">Yukong_Flower</a>",
                          "valuePerStack": {
                            "MDF_AttackAddedRatio": {
                              "displayLines": "0.8"
                            },
                            "MDF_Eidolon4AddedRatio": {
                              "displayLines": "0.3"
                            },
                            "MDF_PointB3Amount": {
                              "displayLines": "2"
                            },
                            "MDF_FromUltraMark": 0
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
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1097783562\">Yukong_Flower_ATK_Crit</a>[<span class=\"descriptionNumberColor\">Roaring Bowstrings</span>]"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1617821492\">Yukong_Flower</a>",
                          "valuePerStack": {
                            "MDF_AttackAddedRatio": {
                              "displayLines": "0.8"
                            },
                            "MDF_Eidolon4AddedRatio": {
                              "displayLines": "0.3"
                            },
                            "MDF_PointB3Amount": {
                              "displayLines": "2"
                            },
                            "MDF_FromUltraMark": 1
                          }
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Yukong's Flower Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1097783562\">Yukong_Flower_ATK_Crit</a>[<span class=\"descriptionNumberColor\">Roaring Bowstrings</span>]",
                          "valuePerStack": {
                            "MDF_RealAttack": {
                              "displayLines": "0.8"
                            },
                            "MDF_CritChanceUp": {
                              "displayLines": "0.28"
                            },
                            "MDF_CritDamageUpRatio": {
                              "displayLines": "0.65"
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
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "Yukong_Yukong_Ability03_AddFlower": {
      "fileName": "Yukong_Yukong_Ability03_AddFlower",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "YuKong_Flower_Count",
          "context": "TargetEntity",
          "value": {
            "displayLines": "1"
          },
          "max": {
            "displayLines": "2"
          }
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": {
            "displayLines": "YuKong_Flower_Count"
          },
          "maximum": {
            "displayLines": "2"
          },
          "assignState": "True",
          "priorState": "Active",
          "bar#": 3,
          "cooldown": 0
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "YuKong_Flower_Count",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1103490299\">Yukong_Ability02_FlowerFlag</a>"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members with Unselectables}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1617821492\">Yukong_Flower</a>",
                  "valuePerStack": {
                    "MDF_AttackAddedRatio": {
                      "displayLines": "0.8"
                    },
                    "MDF_Eidolon4AddedRatio": {
                      "displayLines": "0.3"
                    },
                    "MDF_PointB3Amount": {
                      "displayLines": "2"
                    }
                  }
                }
              ],
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members with Unselectables}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1617821492\">Yukong_Flower</a>",
                  "valuePerStack": {
                    "MDF_AttackAddedRatio": {
                      "displayLines": "0.8"
                    },
                    "MDF_Eidolon4AddedRatio": {
                      "displayLines": "0.3"
                    },
                    "MDF_PointB3Amount": {
                      "displayLines": "2"
                    },
                    "MDF_FromUltraMark": 1
                  }
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members with Unselectables}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1617821492\">Yukong_Flower</a>",
              "valuePerStack": {
                "MDF_AttackAddedRatio": {
                  "displayLines": "0.8"
                },
                "MDF_Eidolon4AddedRatio": {
                  "displayLines": "0.3"
                },
                "MDF_PointB3Amount": {
                  "displayLines": "2"
                }
              }
            }
          ]
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "Yukong_Yukong_Ability03_Part02": {
      "fileName": "Yukong_Yukong_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 6
          },
          "passed": [
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "ability": "Yukong_Ability03_AddFlower"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Yukong's Flower Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1097783562\">Yukong_Flower_ATK_Crit</a>[<span class=\"descriptionNumberColor\">Roaring Bowstrings</span>]",
          "valuePerStack": {
            "MDF_RealAttack": {
              "displayLines": "0.8"
            },
            "MDF_CritChanceUp": {
              "displayLines": "0.28"
            },
            "MDF_CritDamageUpRatio": {
              "displayLines": "0.65"
            }
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
            "DamageType": "Imaginary",
            "Damage": {
              "displayLines": "3.8"
            },
            "Toughness": {
              "displayLines": "ST Toughness Value"
            },
            "Tags": null,
            "attackType": "Ultimate",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        "Trigger: Skip Death Handling",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{All Team Members with Unselectables}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-476851750\">Yukong_Eidolon2_BonusCD</a>"
        },
        "Trigger: Ability End"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "Yukong_Yukong_Ability03_Part01": {
      "fileName": "Yukong_Yukong_Ability03_Part01",
      "childAbilityList": [
        "Yukong_Yukong_Ability03_Camera",
        "Yukong_Yukong_Ability03_EnterReady",
        "Yukong_Yukong_Ability03_Part01",
        "Yukong_Yukong_Ability03_Part02",
        "Yukong_Yukong_Ability03_AddFlower"
      ],
      "skillTrigger": "Skill03",
      "abilityType": "Ultimate",
      "energy": 5,
      "toughnessList": [
        30,
        0,
        0
      ],
      "parse": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Yukong_Ability03_Part02",
          "isTrigger": true
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target"
      }
    },
    "Yukong_Yukong_Ability03_EnterReady": {
      "fileName": "Yukong_Yukong_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "Yukong_Yukong_Ability02_CountDown": {
      "fileName": "Yukong_Yukong_Ability02_CountDown",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "YuKong_Flower_Count",
          "context": "TargetEntity",
          "value": -1,
          "max": {
            "displayLines": "2"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "YuKong_Flower_Count",
            "compareType": "=",
            "value2": 0,
            "contextScope": "TargetEntity"
          },
          "passed": [
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "displayLines": "YuKong_Flower_Count"
              },
              "maximum": {
                "displayLines": "2"
              },
              "assignState": "True",
              "priorState": "Normal",
              "bar#": 3,
              "cooldown": 0
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members with Unselectables}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1617821492\">Yukong_Flower</a>"
            }
          ],
          "failed": [
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "displayLines": "YuKong_Flower_Count"
              },
              "maximum": {
                "displayLines": "2"
              },
              "assignState": "True",
              "priorState": "Active",
              "bar#": 3,
              "cooldown": 0
            }
          ]
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "Yukong_Yukong_Ability02_AddFlower": {
      "fileName": "Yukong_Yukong_Ability02_AddFlower",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "YuKong_Flower_Count",
          "context": "TargetEntity",
          "value": {
            "displayLines": "2"
          },
          "max": {
            "displayLines": "2"
          }
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": {
            "displayLines": "YuKong_Flower_Count"
          },
          "maximum": {
            "displayLines": "2"
          },
          "assignState": "True",
          "priorState": "Active",
          "bar#": 3,
          "cooldown": 0
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{All Team Members with Unselectables}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1617821492\">Yukong_Flower</a>",
          "valuePerStack": {
            "MDF_AttackAddedRatio": {
              "displayLines": "0.8"
            },
            "MDF_Eidolon4AddedRatio": {
              "displayLines": "0.3"
            },
            "MDF_PointB3Amount": {
              "displayLines": "2"
            },
            "MDF_FromUltraMark": 0
          }
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "Yukong_Yukong_Ability02_Part02": {
      "fileName": "Yukong_Yukong_Ability02_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1103490299\">Yukong_Ability02_FlowerFlag</a>"
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Yukong_Ability02_AddFlower"
        },
        {
          "name": "Update Energy",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "valuePercent": 1,
          "ofAbilitySplit": true,
          "isFixed": "* ERR"
        },
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1103490299\">Yukong_Ability02_FlowerFlag</a>",
          "execute": [
            {
              "eventTrigger": "Turn [Anyone]: End",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "Yukong_Yukong_Ability02_Part01": {
      "fileName": "Yukong_Yukong_Ability02_Part01",
      "childAbilityList": [
        "Yukong_Yukong_Ability02_Camera",
        "Yukong_Yukong_Ability02_Part01",
        "Yukong_Yukong_Ability02_Part02",
        "Yukong_Yukong_Ability02_AddFlower",
        "Yukong_Yukong_Ability02_CountDown"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Skill",
      "energy": 30,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Yukong_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "Yukong_Yukong_Ability01_Part02": {
      "fileName": "Yukong_Yukong_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "NOT",
            "conditions": {
              "name": "Has Modifier",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1203634791\">Yukong_Passive_BonusCD</a>"
            }
          },
          "passed": [
            {
              "name": "Set Enhanced-State",
              "stateType": "YukongV2"
            }
          ],
          "failed": [
            "Set Enhanced-State"
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "NOT",
            "conditions": {
              "name": "Has Modifier",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1203634791\">Yukong_Passive_BonusCD</a>"
            }
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1203634791\">Yukong_Passive_BonusCD</a>",
              "duration": {
                "displayLines": "1"
              },
              "valuePerStack": {
                "MDF_AddDamagePercentage": {
                  "displayLines": "0.8"
                },
                "MDF_StanceBreakAddedRatio": {
                  "displayLines": "1"
                }
              }
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1583329525\">Yukong_Ability01_ShootV2</a>"
            }
          ],
          "failed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1033369969\">Yukong_Ability01_Shoot</a>"
            }
          ]
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "whenAdded": [
        {
          "name": "Set Enhanced-State",
          "stateType": "YukongV2"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-566337732\">Yukong_Ability01_Preshow</a>"
        }
      ],
      "functions": [
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-1033369969\">Yukong_Ability01_Shoot</a>",
          "parse": [
            {
              "name": "Shot Fired",
              "execute": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Imaginary",
                    "Damage": {
                      "displayLines": "1"
                    },
                    "Toughness": {
                      "displayLines": "ST Toughness Value"
                    },
                    "Tags": null,
                    "attackType": "Basic ATK",
                    "EnergyGainPercent": "100%"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-1583329525\">Yukong_Ability01_ShootV2</a>",
          "parse": [
            {
              "name": "Shot Fired",
              "execute": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Imaginary",
                    "Damage": {
                      "displayLines": "(1 + 0.8)"
                    },
                    "HitSplit": 0.2,
                    "Toughness": {
                      "displayLines": "(ST Toughness Value * (1 + 1))"
                    },
                    "Tags": null,
                    "attackType": "Basic ATK",
                    "EnergyGainPercent": "100%"
                  }
                }
              ]
            },
            {
              "name": "Shot Fired",
              "execute": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Imaginary",
                    "Damage": {
                      "displayLines": "(1 + 0.8)"
                    },
                    "HitSplit": 0.2,
                    "Toughness": {
                      "displayLines": "(ST Toughness Value * (1 + 1))"
                    },
                    "Tags": null,
                    "attackType": "Basic ATK",
                    "EnergyGainPercent": "100%"
                  }
                }
              ]
            },
            {
              "name": "Shot Fired",
              "execute": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Imaginary",
                    "Damage": {
                      "displayLines": "(1 + 0.8)"
                    },
                    "HitSplit": 0.6,
                    "Toughness": {
                      "displayLines": "(ST Toughness Value * (1 + 1))"
                    },
                    "Tags": null,
                    "attackType": "Basic ATK",
                    "EnergyGainPercent": "100%"
                  }
                }
              ]
            }
          ]
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-566337732\">Yukong_Ability01_Preshow</a>",
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "skillType": "Basic ATK",
            "conditions": {
              "name": "Has Modifier",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1203634791\">Yukong_Passive_BonusCD</a>",
              "invertCondition": true
            },
            "multiplier": {
              "displayLines": "(1 + 1)"
            }
          }
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "Yukong_Yukong_Ability01_Part01": {
      "fileName": "Yukong_Yukong_Ability01_Part01",
      "childAbilityList": [
        "Yukong_Yukong_Ability01_Camera",
        "Yukong_Yukong_Ability01_Camera_V2",
        "Yukong_Yukong_Ability01_Part01",
        "Yukong_Yukong_Ability01_Part02"
      ],
      "skillTrigger": "Skill01",
      "abilityType": "Basic ATK",
      "energy": 20,
      "toughnessList": [
        10,
        0,
        0
      ],
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "NOT",
            "conditions": {
              "name": "Has Modifier",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1203634791\">Yukong_Passive_BonusCD</a>"
            }
          },
          "passed": [
            "Deleted bullshit"
          ],
          "failed": [
            "Deleted bullshit"
          ]
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Yukong_Ability01_Part02",
          "isTrigger": true
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target"
      }
    }
  }
}