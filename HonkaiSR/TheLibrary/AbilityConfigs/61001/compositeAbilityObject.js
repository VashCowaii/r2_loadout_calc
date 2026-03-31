const entityPageType = "misc"
const compositeAbilityObject = {
  "fullCharacterName": 61001,
  "trimCharacterName": 61001,
  "abilityList": [
    "61001_ActionEventAbility_Camera_AllLightTeam",
    "61001_ActionEventAbility_Camera_AllDarkTeam",
    "61001_ActionEventAbility_Standard_PassiveAbility",
    "61001_ActionEventAbility_Standard_StatusUp",
    "61001_Heliobus_Action_Ability",
    "61001_HeliobusActionAbilityForceBreak_Ability03_Part02",
    "61001_HeliobusActionAbilityForceBreak_Ability03_Part01",
    "61001_HeliobusActionAbilityForceBreak_Ability03_EnterReady",
    "61001_BE_BattleEvents"
  ],
  "abilityObject": {
    "61001_ActionEventAbility_Camera_AllLightTeam": {
      "fileName": "61001_ActionEventAbility_Camera_AllLightTeam",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "61001_ActionEventAbility_Camera_AllDarkTeam": {
      "fileName": "61001_ActionEventAbility_Camera_AllDarkTeam",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "61001_ActionEventAbility_Standard_PassiveAbility": {
      "fileName": "61001_ActionEventAbility_Standard_PassiveAbility",
      "childAbilityList": [
        "61001_ActionEventAbility_Standard_PassiveAbility"
      ],
      "skillTrigger": "SkillP01",
      "abilityType": "Talent",
      "toughnessList": null,
      "parse": [
        {
          "name": "Show BattleEvent Button",
          "show": true
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1945570590\">Modifier_AutoUseUltraAbility</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1945570590\">Modifier_AutoUseUltraAbility</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Automatically use Ultimate",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "61001_ActionEventAbility_Standard_StatusUp": {
      "fileName": "61001_ActionEventAbility_Standard_StatusUp",
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
          "modifier": "<a class=\"gModGreen\" id=\"1324948483\">Modifier_ActionEventAbility_Standard_StatusUp</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1109634181\">Modifier_ActionEventAbility_Standard_StatusUp_Character</a>[<span class=\"descriptionNumberColor\">Vessel Benediction</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
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
                  "variableName": "_Layer",
                  "multiplier": 1
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (#ADF_1) || Variables[1] (_Layer) || MUL || RETURN",
                    "displayLines": "(#ADF_1 * _Layer)",
                    "constants": [],
                    "variables": [
                      "#ADF_1",
                      "_Layer"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (#ADF_2) || Variables[1] (_Layer) || MUL || RETURN",
                    "displayLines": "(#ADF_2 * _Layer)",
                    "constants": [],
                    "variables": [
                      "#ADF_2",
                      "_Layer"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "Each stack increases ATK by <span class=\"descriptionNumberColor\">#ADF_1</span> and DEF by <span class=\"descriptionNumberColor\">#ADF_2</span>.",
          "type": "Buff",
          "effectName": "Vessel Benediction",
          "statusName": "Vessel Benediction",
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1324948483\">Modifier_ActionEventAbility_Standard_StatusUp</a>",
          "modifierFlags": [
            "ListenBattleEventSkill"
          ],
          "execute": [
            {
              "eventTrigger": "Ability Use [Anyone]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Battle Event ID",
                        "ID": 61001,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
                      },
                      {
                        "name": "Battle Event ID",
                        "ID": 61002,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
                      },
                      {
                        "name": "Battle Event ID",
                        "ID": 61003,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
                      },
                      {
                        "name": "Battle Event ID",
                        "ID": 61004,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
                      },
                      {
                        "name": "Battle Event ID",
                        "ID": 61005,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
                      },
                      {
                        "name": "Battle Event ID",
                        "ID": 61006,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
                      },
                      {
                        "name": "Battle Event ID",
                        "ID": 61007,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
                      },
                      {
                        "name": "Battle Event ID",
                        "ID": 61008,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1109634181\">Modifier_ActionEventAbility_Standard_StatusUp_Character</a>[<span class=\"descriptionNumberColor\">Vessel Benediction</span>]"
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
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "61001_Heliobus_Action_Ability": {
      "fileName": "61001_Heliobus_Action_Ability",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Add Battle Event",
          "teamName": "Player Team",
          "eventID": {
            "operator": "Variables[0] (#ADF_1) || RETURN",
            "displayLines": "#ADF_1",
            "constants": [],
            "variables": [
              "#ADF_1"
            ]
          },
          "variables": null
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1448807942\">Modifier_Heliobus_Action_Ability</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Stage Type",
            "stageType": "Heliobus"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Level Entity}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"117507254\">Modifier_Achievement30067</a>"
            },
            {
              "name": "Define Custom Variable with Varying Data",
              "target": null,
              "variableName": "_TurnLimit"
            }
          ]
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-493482030\">Modifier_ExtraSP</a>",
          "execute": [
            {
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_MaxSP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;"
                },
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "value": {
                    "operator": "Variables[0] (MDF_MaxSP) || Variables[1] (#ADF_2) || DIV || RETURN",
                    "displayLines": "(MDF_MaxSP / #ADF_2)",
                    "constants": [],
                    "variables": [
                      "MDF_MaxSP",
                      "#ADF_2"
                    ]
                  },
                  "isFixed": "* ERR"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-493482030\">Modifier_ExtraSP</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1448807942\">Modifier_Heliobus_Action_Ability</a>",
          "modifierFlags": [
            "ListenBattleEventSkill"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "$type": "RPG.GameCore.ChangeIncomingActionCountDown",
                  "Offset": {
                    "IsDynamic": false,
                    "FixedValue": {
                      "Value": 0
                    }
                  }
                },
                {
                  "$type": "RPG.GameCore.ActionCountDownPreview",
                  "Mode": "TurnWithUltra"
                }
              ]
            },
            {
              "eventTrigger": "Action End [Anyone]",
              "execute": [
                {
                  "$type": "RPG.GameCore.SetDynamicValueByActionCountDown",
                  "DynamicKey": "_CurrentCountDown"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "_CountFlag",
                        "compareType": "=",
                        "value2": 0
                      },
                      {
                        "name": "Has Queued Ult"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "flagName": "OneMore",
                            "invertCondition": true
                          }
                        ]
                      },
                      "passed": [
                        {
                          "$type": "RPG.GameCore.ConsumeActionCountDown"
                        },
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "_CountFlag",
                          "value": 1
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Compare: Variable",
                                "value1": "_CurrentCountDown",
                                "compareType": "=",
                                "value2": 1
                              }
                            ]
                          },
                          "passed": [
                            {
                              "$type": "RPG.GameCore.ChangeIncomingActionCountDown",
                              "Offset": {
                                "IsDynamic": true,
                                "PostfixExpr": {
                                  "OpCodes": "AQAAAAIR",
                                  "FixedValues": [
                                    {
                                      "Value": 1
                                    }
                                  ],
                                  "DynamicHashes": [
                                    1020727647
                                  ]
                                }
                              }
                            },
                            {
                              "$type": "RPG.GameCore.ConsumeActionCountDown"
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
              "eventTrigger": "Turn End [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "_CountFlag",
                        "compareType": "=",
                        "value2": 0
                      },
                      {
                        "name": "NOT",
                        "condition": {
                          "name": "Is Entity a Battle Event/Summon",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Current Turn Owner}}"
                          },
                          "expectedType": "Challenge Event"
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "$type": "RPG.GameCore.ConsumeActionCountDown"
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_CountFlag",
                  "value": 0
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Anyone]: End",
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
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "$type": "RPG.GameCore.ByHasInsertAbilityPending",
                            "Inverse": true
                          }
                        ]
                      },
                      "passed": [
                        {
                          "$type": "RPG.GameCore.ConsumeActionCountDown"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "_InsertWaitFlag",
                          "value": 1
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Ultimate [Anyone]: Start[?]",
              "execute": [
                {
                  "$type": "RPG.GameCore.SetDynamicValueByWaitUltraCount",
                  "DynamicKey": "_CurrentUltraWait"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_CurrentUltraWait",
                  "value": {
                    "operator": "Variables[0] (_CurrentUltraWait) || Constants[0] (1) || SUB || RETURN",
                    "displayLines": "(_CurrentUltraWait - 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "_CurrentUltraWait"
                    ]
                  }
                },
                {
                  "$type": "RPG.GameCore.SetDynamicValueByActionCountDown",
                  "DynamicKey": "_CurrentCountDown"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "_CurrentUltraWait",
                        "compareType": "=",
                        "value2": {
                          "operator": "Variables[0] (_InsertWaitFlag) || Constants[0] (1) || SUB || RETURN",
                          "displayLines": "(_InsertWaitFlag - 1)",
                          "constants": [
                            1
                          ],
                          "variables": [
                            "_InsertWaitFlag"
                          ]
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Looped Event",
                      "maxLoops": {
                        "operator": "Variables[0] (_CurrentUltraWait) || RETURN",
                        "displayLines": "_CurrentUltraWait",
                        "constants": [],
                        "variables": [
                          "_CurrentUltraWait"
                        ]
                      },
                      "Event": [
                        {
                          "$type": "RPG.GameCore.ConsumeActionCountDown"
                        }
                      ]
                    },
                    {
                      "$type": "RPG.GameCore.ChangeIncomingActionCountDown",
                      "Offset": {
                        "IsDynamic": true,
                        "PostfixExpr": {
                          "OpCodes": "AQAR",
                          "FixedValues": [],
                          "DynamicHashes": [
                            1020727647
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Injected Ability Use [Anyone]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "$type": "RPG.GameCore.ByHasInsertAbilityPending",
                        "Inverse": true
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "_InsertWaitFlag",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "$type": "RPG.GameCore.ConsumeActionCountDown"
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "_InsertWaitFlag",
                      "value": 0
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Action Countdown Active [Anyone][?]",
              "execute": [
                {
                  "$type": "RPG.GameCore.ChangeIncomingActionCountDown",
                  "Offset": {
                    "IsDynamic": false,
                    "FixedValue": {
                      "Value": 0
                    }
                  }
                },
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
                      "name": "IF",
                      "conditions": {
                        "name": "Battle Event ID",
                        "ID": "#ADF_1",
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
                          "modifier": "<a class=\"gModGreen\" id=\"-493482030\">Modifier_ExtraSP</a>"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Battle Event List}}"
                          },
                          "searchRandom": true,
                          "conditions": {
                            "name": "Battle Event ID",
                            "ID": "#ADF_1",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            }
                          },
                          "ifTargetFound": [
                            {
                              "name": "Define Custom Variable with Stat",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "variableName": "MDF_MaxSP",
                              "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;"
                            },
                            {
                              "name": "Update Energy",
                              "on": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "value": {
                                "operator": "Variables[0] (MDF_MaxSP) || Variables[1] (#ADF_2) || DIV || RETURN",
                                "displayLines": "(MDF_MaxSP / #ADF_2)",
                                "constants": [],
                                "variables": [
                                  "MDF_MaxSP",
                                  "#ADF_2"
                                ]
                              },
                              "isFixed": "* ERR"
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
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__117507254\">Modifier_Achievement30067</a>",
          "execute": [
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
                      "modifier": "<a class=\"gModGreen\" id=\"1858063914\">Modifier_Achievement30067_Character</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Leave Battle",
              "execute": [
                {
                  "name": "IF",
                  "conditions": "Battle was Victory",
                  "passed": [
                    {
                      "name": "Achievement",
                      "relatedAchievements": [
                        {
                          "title": "The Real Exorcist",
                          "desc": "Complete any Exorcismal Chronicle stages without taking DMG",
                          "rarity": "Low",
                          "type": "Hidden until Completion"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1858063914\">Modifier_Achievement30067_Character</a>",
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "Define Custom Variable with Damage Data",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "DamageAmount"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "DamageAmount",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"117507254\">Modifier_Achievement30067</a>"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1858063914\">Modifier_Achievement30067_Character</a>"
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
    "61001_HeliobusActionAbilityForceBreak_Ability03_Part02": {
      "fileName": "61001_HeliobusActionAbilityForceBreak_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
        {
          "name": "UI Display Event",
          "popUpText": "Edict: Evil Cleanse"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Target Has Lowest/Highest Value",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "partOf": {
              "name": "Target Name",
              "target": "{{Player Team All}}"
            },
            "compareValue": "&nbsp;<span class=\"descriptionNumberColor\">AttackSUM</span>&nbsp;",
            "minOrMax": "Max"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_MaxAttack",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">AttackSUM</span>&nbsp;"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"177587233\">HeliobusActionAbilityForceBreak_Ability03_BreakListener</a>"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "searchRandom": true,
          "ifTargetFound": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_MaxStance"
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_MaxStance",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;",
              "warningType": "MaxToughness"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1936406658\">HeliobusActionAbilityForceBreak_Ability03_DamageUp</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
              "duration": {
                "operator": "Variables[0] (#BattleEvent_P3_ADF) || RETURN",
                "displayLines": "#BattleEvent_P3_ADF",
                "constants": [],
                "variables": [
                  "#BattleEvent_P3_ADF"
                ]
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "dmgFormula": "Max HP Scaling",
                "Toughness": {
                  "operator": "Variables[0] (_MaxStance) || RETURN",
                  "displayLines": "_MaxStance",
                  "constants": [],
                  "variables": [
                    "_MaxStance"
                  ]
                },
                "ToughnessDMGType": {
                  "DamageType": "AllType"
                },
                "Tags": null,
                "attackType": "Level"
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "DamageFlat": {
                  "operator": "Variables[0] (_MaxAttack) || Variables[1] (#BattleEvent_P2_ADF) || MUL || RETURN",
                  "displayLines": "(_MaxAttack * #BattleEvent_P2_ADF)",
                  "constants": [],
                  "variables": [
                    "_MaxAttack",
                    "#BattleEvent_P2_ADF"
                  ]
                },
                "dmgFormula": "Max HP Scaling",
                "Toughness": {
                  "operator": "Variables[0] (_MaxStance) || RETURN",
                  "displayLines": "_MaxStance",
                  "constants": [],
                  "variables": [
                    "_MaxStance"
                  ]
                },
                "ToughnessDMGType": {
                  "DamageType": "AllType"
                },
                "Tags": null,
                "attackType": "Level"
              }
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"177587233\">HeliobusActionAbilityForceBreak_Ability03_BreakListener</a>"
        },
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__177587233\">HeliobusActionAbilityForceBreak_Ability03_BreakListener</a>",
          "execute": [
            {
              "eventTrigger": "Weakness Break [Anyone]",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "TargetStance",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;",
                  "warningType": "MaxToughness"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-576412017\">Standard_Element_Entangle</a>[<span class=\"descriptionNumberColor\">Entanglement</span>]",
                  "duration": 1,
                  "baseChance": 1.5,
                  "valuePerStack": {
                    "MDF_ActionDelayRatio": 0,
                    "MDF_DamagePercentage": {
                      "operator": "Constants[0] (0.6) || Constants[1] (2) || Variables[0] (TargetStance) || Constants[2] (30) || DIV || ADD || MUL || Constants[3] (4) || DIV || RETURN",
                      "displayLines": "((0.6 * (2 + (TargetStance / 30))) / 4)",
                      "constants": [
                        0.6,
                        2,
                        30,
                        4
                      ],
                      "variables": [
                        "TargetStance"
                      ]
                    }
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
                    "DamageType": "Quantum",
                    "DamageBreak": {
                      "operator": "Constants[0] (0.5) || Constants[1] (2) || Variables[0] (TargetStance) || Constants[2] (30) || DIV || ADD || MUL || Constants[3] (4) || DIV || RETURN",
                      "displayLines": "((0.5 * (2 + (TargetStance / 30))) / 4)",
                      "constants": [
                        0.5,
                        2,
                        30,
                        4
                      ],
                      "variables": [
                        "TargetStance"
                      ]
                    },
                    "dmgFormula": "Break DMG Scaling",
                    "dmgFormulaFinal": "Pure (No DMG%)",
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Break DMG"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1936406658\">HeliobusActionAbilityForceBreak_Ability03_DamageUp</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
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
                    "operator": "Variables[0] (#BattleEvent_P1_ADF) || RETURN",
                    "displayLines": "#BattleEvent_P1_ADF",
                    "constants": [],
                    "variables": [
                      "#BattleEvent_P1_ADF"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "Increases DMG taken by <span class=\"descriptionNumberColor\">#BattleEvent_P1_ADF</span>.",
          "type": "Debuff",
          "effectName": "Vulnerability",
          "statusName": "Vulnerability"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "All Enemy Team Members"
      }
    },
    "61001_HeliobusActionAbilityForceBreak_Ability03_Part01": {
      "fileName": "61001_HeliobusActionAbilityForceBreak_Ability03_Part01",
      "childAbilityList": [
        "61001_HeliobusActionAbilityForceBreak_Ability03_EnterReady",
        "61001_HeliobusActionAbilityForceBreak_Ability03_Part01",
        "61001_HeliobusActionAbilityForceBreak_Ability03_Part02",
        "61001_ActionEventAbility_Camera_AllDarkTeam"
      ],
      "skillTrigger": "Skill03",
      "abilityType": "Ultimate",
      "energy": null,
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
          "ability": "HeliobusActionAbilityForceBreak_Ability03_Part02",
          "isTrigger": true
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "All Enemy Team Members"
      },
      "realTargetData": {
        "primaryTarget": "All Enemy Team"
      }
    },
    "61001_HeliobusActionAbilityForceBreak_Ability03_EnterReady": {
      "fileName": "61001_HeliobusActionAbilityForceBreak_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "61001_BE_BattleEvents": {
      "fileName": "61001_BE_BattleEvents",
      "abilityType": "Char. B.Events",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [],
      "references": []
    }
  },
  "enemyData": {
    "Skill03": {
      "skillID": 6100101,
      "trigger": "Skill03",
      "name": "Edict: Evil Cleanse",
      "type": "AoE",
      "slot": "Ultimate",
      "desc": "Depletes all enemies' Toughness and inflicts Weakness Break equal to the effects of Quantum Break. Based on the highest ATK on the team, deals Quantum DMG equal to #2[i]% of ATK to all enemies and increases enemies' DMG received by #1[i]% for #3[i] turn(s).",
      "energyCost": 100,
      "energyRegen": null,
      "energyRate": 0.5,
      "toughnessReductionDisplayed": null,
      "skillPointCost": 0,
      "skillPointGain": 0,
      "params": {
        "1": [
          0
        ]
      },
      "skillEffect": "AoEAttack",
      "maxLevel": 1,
      "configAbilityList": [
        "Avatar_HeliobusActionAbilityForceBreak_Skill03_EnterReady",
        "Avatar_HeliobusActionAbilityForceBreak_Skill03_Phase01",
        "Avatar_HeliobusActionAbilityForceBreak_Skill03_Phase02",
        "ActionEventAbility_Camera_AllDarkTeam"
      ],
      "toughnessList": [
        0,
        0,
        0
      ],
      "hitSplits": []
    }
  },
  "isBattleEvent": true
}