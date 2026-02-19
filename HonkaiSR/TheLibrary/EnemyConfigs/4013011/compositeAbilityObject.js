const compositeAbilityObject = {
  "fullCharacterName": 4013011,
  "trimCharacterName": 4013011,
  "abilityList": [
    "4013011_Monster_W4_Claymore_PassiveAbilityInitiate_FantasticStory",
    "4013011_Monster_W4_Claymore_PassiveAbilityInitiate",
    "4013011_Monster_W4_Claymore_Ability05_Part02",
    "4013011_Monster_W4_Claymore_Ability05_Part01",
    "4013011_Monster_W4_Claymore_Ability04_Part02",
    "4013011_Monster_W4_Claymore_Ability04_Part01",
    "4013011_Monster_W4_Claymore_Ability03_Part02",
    "4013011_Monster_W4_Claymore_Ability03_Part01",
    "4013011_Monster_W4_Claymore_Ability02_Part02",
    "4013011_Monster_W4_Claymore_Ability02_Part01",
    "4013011_Monster_W4_Claymore_Ability01_Part02",
    "4013011_Monster_W4_Claymore_Ability01_Part01",
    "4013011_Monster_W4_Claymore_314070",
    "4013011_Modifiers"
  ],
  "abilityObject": {
    "4013011_Monster_W4_Claymore_PassiveAbilityInitiate_FantasticStory": {
      "fileName": "4013011_Monster_W4_Claymore_PassiveAbilityInitiate_FantasticStory",
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
          "modifier": "<a class=\"gModGreen\" id=\"-551387398\">W4_Claymore_BattleScore1</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-568165017\">W4_Claymore_BattleScore2</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-133295283\">Enemy_W4_Claymore_FantasticStory</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1166907060\">Enemy_Standard_MuteHitFly</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1282910303\">Enemy_Heaven_StoneShieldController</a>",
          "valuePerStack": {
            "MDF_MaxLayer": {
              "operator": "Variables[0] ({[PassiveSkillInitiate[0]]}) || RETURN",
              "displayLines": "{[PassiveSkillInitiate[0]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkillInitiate[0]]}"
              ]
            },
            "MDF_CrackedEffect": {
              "operator": "Variables[0] ({[PassiveSkillInitiate[1]]}) || RETURN",
              "displayLines": "{[PassiveSkillInitiate[1]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkillInitiate[1]]}"
              ]
            },
            "MDF_CrackedDamage": {
              "operator": "Variables[0] ({[PassiveSkillInitiate[5]]}) || RETURN",
              "displayLines": "{[PassiveSkillInitiate[5]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkillInitiate[5]]}"
              ]
            },
            "MDF_DamageResistance": {
              "operator": "Variables[0] ({[PassiveSkillInitiate[2]]}) || RETURN",
              "displayLines": "{[PassiveSkillInitiate[2]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkillInitiate[2]]}"
              ]
            },
            "MDF_CrackedDamageAfter": {
              "operator": "Variables[0] ({[PassiveSkillInitiate[3]]}) || RETURN",
              "displayLines": "{[PassiveSkillInitiate[3]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkillInitiate[3]]}"
              ]
            },
            "MDF_ModifySP": {
              "operator": "Variables[0] ({[PassiveSkillInitiate[4]]}) || RETURN",
              "displayLines": "{[PassiveSkillInitiate[4]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkillInitiate[4]]}"
              ]
            }
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"446213578\">Enemy_Heaven_ModelController_Claymore_FantasticStory</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__446213578\">Enemy_Heaven_ModelController_Claymore_FantasticStory</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "When Modifier is Added [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]"
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Losing Modifier [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Modifier Was",
                        "modifier": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Living State",
                        "state": "Mask_AliveOnly",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking Modifier Instance [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Modifier Was",
                        "modifier": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                        "compareType": "=",
                        "value2": 0,
                        "valueType": "Layer"
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
                            "name": "Living State",
                            "state": "Mask_AliveOnly",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            }
                          },
                          {
                            "name": "Has Turn-State",
                            "invertCondition": true,
                            "states": [
                              "InsertAbilityActionPhase"
                            ]
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueType": "MaxLayer",
                  "variableName": "MDF_MaxLayer",
                  "modifierName": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                  "multiplier": 1
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Modifier Was",
                        "modifier": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                        "compareType": "=",
                        "value2": {
                          "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                          "displayLines": "MDF_MaxLayer",
                          "constants": [],
                          "variables": [
                            "MDF_MaxLayer"
                          ]
                        },
                        "valueType": "Layer"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "MDF_LastLayer",
                        "compareType": "=",
                        "value2": 0
                      }
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueType": "Layer",
                  "variableName": "MDF_LastLayer",
                  "modifierName": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                  "multiplier": 1
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "4013011_Monster_W4_Claymore_PassiveAbilityInitiate": {
      "fileName": "4013011_Monster_W4_Claymore_PassiveAbilityInitiate",
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
          "modifier": "<a class=\"gModGreen\" id=\"-551387398\">W4_Claymore_BattleScore1</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-568165017\">W4_Claymore_BattleScore2</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1166907060\">Enemy_Standard_MuteHitFly</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1282910303\">Enemy_Heaven_StoneShieldController</a>",
          "valuePerStack": {
            "MDF_MaxLayer": {
              "operator": "Variables[0] ({[PassiveSkillInitiate[0]]}) || RETURN",
              "displayLines": "{[PassiveSkillInitiate[0]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkillInitiate[0]]}"
              ]
            },
            "MDF_CrackedEffect": {
              "operator": "Variables[0] ({[PassiveSkillInitiate[1]]}) || RETURN",
              "displayLines": "{[PassiveSkillInitiate[1]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkillInitiate[1]]}"
              ]
            },
            "MDF_CrackedDamage": {
              "operator": "Variables[0] ({[PassiveSkillInitiate[5]]}) || RETURN",
              "displayLines": "{[PassiveSkillInitiate[5]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkillInitiate[5]]}"
              ]
            },
            "MDF_DamageResistance": {
              "operator": "Variables[0] ({[PassiveSkillInitiate[2]]}) || RETURN",
              "displayLines": "{[PassiveSkillInitiate[2]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkillInitiate[2]]}"
              ]
            },
            "MDF_CrackedDamageAfter": {
              "operator": "Variables[0] ({[PassiveSkillInitiate[3]]}) || RETURN",
              "displayLines": "{[PassiveSkillInitiate[3]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkillInitiate[3]]}"
              ]
            },
            "MDF_ModifySP": {
              "operator": "Variables[0] ({[PassiveSkillInitiate[4]]}) || RETURN",
              "displayLines": "{[PassiveSkillInitiate[4]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkillInitiate[4]]}"
              ]
            }
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2062098307\">Enemy_Heaven_ModelController_Claymore</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2062098307\">Enemy_Heaven_ModelController_Claymore</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "When Modifier is Added [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]"
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Losing Modifier [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Modifier Was",
                        "modifier": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Living State",
                        "state": "Mask_AliveOnly",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking Modifier Instance [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Modifier Was",
                        "modifier": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                        "compareType": "=",
                        "value2": 0,
                        "valueType": "Layer"
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
                            "name": "Living State",
                            "state": "Mask_AliveOnly",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            }
                          },
                          {
                            "name": "Has Turn-State",
                            "invertCondition": true,
                            "states": [
                              "InsertAbilityActionPhase"
                            ]
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueType": "MaxLayer",
                  "variableName": "MDF_MaxLayer",
                  "modifierName": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                  "multiplier": 1
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Modifier Was",
                        "modifier": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                        "compareType": "=",
                        "value2": {
                          "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                          "displayLines": "MDF_MaxLayer",
                          "constants": [],
                          "variables": [
                            "MDF_MaxLayer"
                          ]
                        },
                        "valueType": "Layer"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "MDF_LastLayer",
                        "compareType": "=",
                        "value2": 0
                      }
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueType": "Layer",
                  "variableName": "MDF_LastLayer",
                  "modifierName": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                  "multiplier": 1
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "4013011_Monster_W4_Claymore_Ability05_Part02": {
      "fileName": "4013011_Monster_W4_Claymore_Ability05_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{All Team Members}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": "<=",
            "value2": 3
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Enemy ID",
                "ID": 4013013,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Furiae Praetor (Bug)",
                "isBaseCompare": true
              },
              "passed": [
                {
                  "name": "Create Enemies",
                  "delayPercent": 0.5,
                  "enemyList": [
                    {
                      "name": "Enemy Entry",
                      "enemyID": {
                        "operator": "Variables[0] (SummonID) || RETURN",
                        "displayLines": "SummonID",
                        "constants": [],
                        "variables": [
                          "SummonID"
                        ]
                      },
                      "locationType": "KeepOnEdge"
                    },
                    {
                      "name": "Enemy Entry",
                      "enemyID": {
                        "operator": "Variables[0] (SummonID) || RETURN",
                        "displayLines": "SummonID",
                        "constants": [],
                        "variables": [
                          "SummonID"
                        ]
                      },
                      "locationType": "KeepOnEdge"
                    },
                    {
                      "name": "Enemy Entry",
                      "enemyID": {
                        "operator": "Variables[0] (SummonID) || RETURN",
                        "displayLines": "SummonID",
                        "constants": [],
                        "variables": [
                          "SummonID"
                        ]
                      },
                      "locationType": "KeepOnEdge"
                    },
                    {
                      "name": "Enemy Entry",
                      "enemyID": {
                        "operator": "Variables[0] (SummonID) || RETURN",
                        "displayLines": "SummonID",
                        "constants": [],
                        "variables": [
                          "SummonID"
                        ]
                      },
                      "locationType": "KeepOnEdge"
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Create Enemies",
                  "enemyList": [
                    {
                      "name": "Enemy Entry",
                      "enemyID": {
                        "operator": "Variables[0] (SummonID) || RETURN",
                        "displayLines": "SummonID",
                        "constants": [],
                        "variables": [
                          "SummonID"
                        ]
                      },
                      "locationType": "BeforeCaster"
                    },
                    {
                      "name": "Enemy Entry",
                      "enemyID": {
                        "operator": "Variables[0] (SummonID) || RETURN",
                        "displayLines": "SummonID",
                        "constants": [],
                        "variables": [
                          "SummonID"
                        ]
                      },
                      "locationType": "AfterCaster"
                    }
                  ]
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Recently Summoned Enemies}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{All Team Members}}"
                },
                "value1": "TeamCharacterCount",
                "compareType": "<=",
                "value2": 4
              },
              "passed": [
                {
                  "name": "Create Enemies",
                  "enemyList": [
                    {
                      "name": "Enemy Entry",
                      "enemyID": {
                        "operator": "Variables[0] (SummonID) || RETURN",
                        "displayLines": "SummonID",
                        "constants": [],
                        "variables": [
                          "SummonID"
                        ]
                      },
                      "locationType": "AroundCaster"
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster's Minions}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
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
              "target": "{{Recently Summoned Enemies}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1276555812\">MModifier_Monster_AML_Minion03_01_StoneShieldEnhance</a>[<span class=\"descriptionNumberColor\">Indomitable</span>]"
          }
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "4013011_Monster_W4_Claymore_Ability05_Part01": {
      "fileName": "4013011_Monster_W4_Claymore_Ability05_Part01",
      "childAbilityList": [
        "4013011_Monster_W4_Claymore_Ability05_Camera",
        "4013011_Monster_W4_Claymore_Ability05_Part01",
        "4013011_Monster_W4_Claymore_Ability05_Part02"
      ],
      "skillTrigger": "Skill05",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W4_Claymore_Ability05_Part02",
          "isTrigger": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Enemy ID",
            "ID": 4013013,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "Furiae Praetor (Bug)",
            "isBaseCompare": true
          },
          "passed": [
            "Deleted bullshit"
          ],
          "failed": [
            "Deleted bullshit"
          ]
        }
      ],
      "references": []
    },
    "4013011_Monster_W4_Claymore_Ability04_Part02": {
      "fileName": "4013011_Monster_W4_Claymore_Ability04_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "Phase1"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Enemy ID",
            "ID": 4013013,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "Furiae Praetor (Bug)",
            "isBaseCompare": true
          },
          "passed": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "MaxSummonCount",
              "value": 4
            }
          ],
          "failed": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "MaxSummonCount",
              "value": 2
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "searchRandom": true,
          "maxTargets": {
            "operator": "Variables[0] (MaxSummonCount) || RETURN",
            "displayLines": "MaxSummonCount",
            "constants": [],
            "variables": [
              "MaxSummonCount"
            ]
          },
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Enemy ID",
                "ID": 4013013,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Furiae Praetor (Bug)",
                "isBaseCompare": true
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target List}}"
                    },
                    "value1": "TeamCharacterCount",
                    "compareType": "<=",
                    "value2": 2
                  }
                }
              ]
            },
            {
              "name": "Define Custom Variable with Team Count",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target List}}"
              },
              "variableName": "SummonCount"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target List}}"
                },
                "value1": "TeamCharacterCount",
                "compareType": "=",
                "value2": 1
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target List}}"
                },
                "value1": "TeamCharacterCount",
                "compareType": "=",
                "value2": 2
              }
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-662328641\">MModifier_Monster_W4_Claymore_Ability03_WeaponEff</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target List}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"328409415\">MModifier_Monster_W4_Claymore_Ability03_Summon</a>"
            }
          ],
          "noTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Enemy ID",
                "ID": 4013013,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Furiae Praetor (Bug)",
                "isBaseCompare": true
              }
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-662328641\">MModifier_Monster_W4_Claymore_Ability03_WeaponEff</a>"
            }
          ]
        },
        {
          "name": "Define Custom Variable with Team Count",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "variableName": "TargetCount",
          "livingTargets": true
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] ({[Skill04[0]]}) || Variables[1] ({[Skill04[2]]}) || Variables[2] (SummonCount) || MUL || ADD || Variables[3] (TargetCount) || DIV || RETURN",
              "displayLines": "(({[Skill04[0]]} + ({[Skill04[2]]} * SummonCount)) / TargetCount)",
              "constants": [],
              "variables": [
                "{[Skill04[0]]}",
                "{[Skill04[2]]}",
                "SummonCount",
                "TargetCount"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"622644189\">MModifier_Monster_W4_Claymore_Ability03_Aim</a>[<span class=\"descriptionNumberColor\">Charging</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-351944820\">MModifier_Monster_W4_Claymore_Ability04_DamageTakenUp</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
          "duration": {
            "operator": "Variables[0] ({[Skill04[3]]}) || RETURN",
            "displayLines": "{[Skill04[3]]}",
            "constants": [],
            "variables": [
              "{[Skill04[3]]}"
            ]
          },
          "valuePerStack": {
            "MDF_DamageTakenUpRatio": {
              "operator": "Variables[0] ({[Skill04[1]]}) || Variables[1] (TargetCount) || DIV || RETURN",
              "displayLines": "({[Skill04[1]]} / TargetCount)",
              "constants": [],
              "variables": [
                "{[Skill04[1]]}",
                "TargetCount"
              ]
            }
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "SummonCount",
          "value": 0
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"328409415\">MModifier_Monster_W4_Claymore_Ability03_Summon</a>"
          },
          "ifTargetFound": [
            {
              "name": "Force Entity Death",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target List}}"
              }
            },
            {
              "name": "Mark Entity For Immediate Death",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target List}}"
              }
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
        },
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__328409415\">MModifier_Monster_W4_Claymore_Ability03_Summon</a>",
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "4013011_Monster_W4_Claymore_Ability04_Part01": {
      "fileName": "4013011_Monster_W4_Claymore_Ability04_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W4_Claymore_Ability04_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "4013011_Monster_W4_Claymore_Ability03_Part02": {
      "fileName": "4013011_Monster_W4_Claymore_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-662328641\">MModifier_Monster_W4_Claymore_Ability03_WeaponEff</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"622644189\">MModifier_Monster_W4_Claymore_Ability03_Aim</a>[<span class=\"descriptionNumberColor\">Charging</span>]"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-133295283\">Enemy_W4_Claymore_FantasticStory</a>"
          }
        },
        {
          "name": "Define Custom Variable with Team Count",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "variableName": "TargetCount",
          "livingTargets": true
        },
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "Phase2"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "4013011_Monster_W4_Claymore_Ability03_Part01": {
      "fileName": "4013011_Monster_W4_Claymore_Ability03_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W4_Claymore_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "4013011_Monster_W4_Claymore_Ability02_Part02": {
      "fileName": "4013011_Monster_W4_Claymore_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Target Right of Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
              "displayLines": "{[Skill02[0]]}",
              "constants": [],
              "variables": [
                "{[Skill02[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
              "displayLines": "{[Skill02[0]]}",
              "constants": [],
              "variables": [
                "{[Skill02[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Target Left of Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
              "displayLines": "{[Skill02[0]]}",
              "constants": [],
              "variables": [
                "{[Skill02[0]]}"
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
      "references": []
    },
    "4013011_Monster_W4_Claymore_Ability02_Part01": {
      "fileName": "4013011_Monster_W4_Claymore_Ability02_Part01",
      "childAbilityList": [
        "4013011_Monster_W4_Claymore_Ability02_Camera",
        "4013011_Monster_W4_Claymore_Ability02_Part01",
        "4013011_Monster_W4_Claymore_Ability02_Part02"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "inherentTarget": {
            "name": "Target Sequence",
            "Sequence": [
              {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              {
                "name": "Sort by Physical Positioning",
                "byHighest": true
              },
              {
                "name": "Filter by Life-State",
                "state": "Mask_AliveOnly"
              },
              {
                "name": "Target Index",
                "indexValue": 1
              }
            ]
          },
          "ability": "Monster_W4_Claymore_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "4013011_Monster_W4_Claymore_Ability01_Part02": {
      "fileName": "4013011_Monster_W4_Claymore_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Target Left of Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
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
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
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
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Target Right of Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
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
      "references": []
    },
    "4013011_Monster_W4_Claymore_Ability01_Part01": {
      "fileName": "4013011_Monster_W4_Claymore_Ability01_Part01",
      "childAbilityList": [
        "4013011_Monster_W4_Claymore_Ability01_Camera",
        "4013011_Monster_W4_Claymore_Ability01_Part01",
        "4013011_Monster_W4_Claymore_Ability01_Part02"
      ],
      "skillTrigger": "Skill01",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "inherentTarget": {
            "name": "Target Sequence",
            "Sequence": [
              {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              {
                "name": "Sort by Physical Positioning"
              },
              {
                "name": "Filter by Life-State",
                "state": "Mask_AliveOnly"
              },
              {
                "name": "Target Index",
                "indexValue": 1
              }
            ]
          },
          "ability": "Monster_W4_Claymore_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "4013011_Monster_W4_Claymore_314070": {
      "fileName": "4013011_Monster_W4_Claymore_314070",
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
          "modifier": "<a class=\"gModGreen\" id=\"870917356\">Enemy_W4_Claymore_314070</a>"
        }
      ],
      "references": []
    },
    "4013011_Modifiers": {
      "fileName": "4013011_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__1357314148\">W4_Claymore_BattleScore3_Mark</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-584942636\">W4_Claymore_BattleScore3</a>",
          "execute": [
            {
              "eventTrigger": "Attack Start [Anyone]",
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
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]"
                              },
                              {
                                "name": "Compare: Variable",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "value1": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                                "compareType": "=",
                                "value2": 1,
                                "valueType": "Layer"
                              }
                            ]
                          },
                          {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"318155284\">Monster_W4_Nikadory_Shield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]"
                              },
                              {
                                "name": "Compare: Variable",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "value1": "<a class=\"gModGreen\" id=\"318155284\">Monster_W4_Nikadory_Shield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                                "compareType": "=",
                                "value2": 1,
                                "valueType": "Layer"
                              }
                            ]
                          }
                        ]
                      },
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target List}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1357314148\">W4_Claymore_BattleScore3_Mark</a>"
                        },
                        {
                          "name": "Define Custom Variable with Team Count",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target List}}"
                          },
                          "variableName": "MDF_CountBefore",
                          "livingTargets": true
                        }
                      ]
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
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "MDF_CountBefore",
                        "compareType": ">=",
                        "value2": 4
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"1357314148\">W4_Claymore_BattleScore3_Mark</a>"
                              },
                              {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]"
                              },
                              {
                                "name": "Compare: Variable",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "value1": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                                "compareType": "=",
                                "value2": 1,
                                "valueType": "Layer"
                              }
                            ]
                          },
                          {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"1357314148\">W4_Claymore_BattleScore3_Mark</a>"
                              },
                              {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"318155284\">Monster_W4_Nikadory_Shield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]"
                              },
                              {
                                "name": "Compare: Variable",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "value1": "<a class=\"gModGreen\" id=\"318155284\">Monster_W4_Nikadory_Shield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                                "compareType": "=",
                                "value2": 1,
                                "valueType": "Layer"
                              }
                            ]
                          }
                        ]
                      },
                      "ifTargetFound": [
                        {
                          "name": "Define Custom Variable with Team Count",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target List}}"
                          },
                          "variableName": "MDF_CountAfter",
                          "livingTargets": true
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "MDF_CountBreak",
                      "value": {
                        "operator": "Variables[0] (MDF_CountBefore) || Variables[1] (MDF_CountAfter) || SUB || RETURN",
                        "displayLines": "(MDF_CountBefore - MDF_CountAfter)",
                        "constants": [],
                        "variables": [
                          "MDF_CountBefore",
                          "MDF_CountAfter"
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
                        "value1": "MDF_CountBreak",
                        "compareType": ">=",
                        "value2": 4
                      },
                      "passed": [
                        {
                          "name": "Achievement",
                          "relatedAchievements": [
                            {
                              "title": "Pankration's True Intention",
                              "desc": "Break at least #1 enemies' \"War Armor\" in a single attack",
                              "rarity": "Low",
                              "params": [
                                4
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
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1357314148\">W4_Claymore_BattleScore3_Mark</a>"
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_CountBefore",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_CountAfter",
                  "value": 0
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-120882999\">W4_Claymore_BattleScore2_Mark</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-568165017\">W4_Claymore_BattleScore2</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "W4_Claymore_00_BattleScore2_TargetCountBefore"
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "W4_Claymore_00_BattleScore2_TargetCountAfter"
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Owner]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Name",
                    "skillName": "Skill04"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Team Count",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "variableName": "W4_Claymore_00_BattleScore2_TargetCountBefore",
                      "livingTargets": true
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-120882999\">W4_Claymore_BattleScore2_Mark</a>"
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
                    "name": "Skill Name",
                    "skillName": "Skill04"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Team Count",
                      "target": {
                        "name": "Target Sequence",
                        "Sequence": [
                          {
                            "name": "Target Name",
                            "target": "{{Hostile Entities(AOE)}}"
                          },
                          {
                            "name": "Target Filter",
                            "conditions": {
                              "name": "Has Modifier",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-120882999\">W4_Claymore_BattleScore2_Mark</a>"
                            }
                          }
                        ]
                      },
                      "variableName": "W4_Claymore_00_BattleScore2_TargetCountAfter",
                      "livingTargets": true
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-120882999\">W4_Claymore_BattleScore2_Mark</a>"
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
                            "value1": "W4_Claymore_00_BattleScore2_TargetCountBefore",
                            "compareType": ">=",
                            "value2": 5
                          },
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "W4_Claymore_00_BattleScore2_TargetCountBefore",
                            "compareType": "=",
                            "value2": {
                              "operator": "Variables[0] (W4_Claymore_00_BattleScore2_TargetCountAfter) || RETURN",
                              "displayLines": "W4_Claymore_00_BattleScore2_TargetCountAfter",
                              "constants": [],
                              "variables": [
                                "W4_Claymore_00_BattleScore2_TargetCountAfter"
                              ]
                            }
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Achievement",
                          "relatedAchievements": [
                            {
                              "title": "Diagonal March",
                              "desc": "When facing Furiae Praetor in battle, have at least #1 ally target(s) Distribute the \"Drowned in the Crimson Sea\" DMG, with none of them being defeated after the Distribution is complete",
                              "rarity": "Low",
                              "params": [
                                5
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
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-551387398\">W4_Claymore_BattleScore1</a>",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "W4_Claymore_00_BattleScore1_StoneShieldBreak"
                }
              ]
            },
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "W4_Claymore_00_BattleScore1_StoneShieldBreak",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Achievement",
                      "relatedAchievements": [
                        {
                          "title": "Eternal Lance",
                          "desc": "In the battle against Furiae Praetor, deal the finishing blow as you destroy its \"War Armor\"",
                          "rarity": "Low"
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
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                        "compareType": "=",
                        "value2": 1,
                        "valueType": "Layer"
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "W4_Claymore_00_BattleScore1_StoneShieldBreak",
                          "value": 1
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Being Attacked Completed [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "W4_Claymore_00_BattleScore1_StoneShieldBreak",
                  "value": 0
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__870917356\">Enemy_W4_Claymore_314070</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}.[[getMemosprite]]"
                  },
                  "conditions": {
                    "name": "Character ID",
                    "ID": 1407,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}.[[getSummoner]]"
                    },
                    "characterName": "Castorice"
                  },
                  "noTargetFound": [
                    {
                      "name": "Reconstruct Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}.[[addBattleEvents]]"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1108004202\">GlobalAbility_Castorice_CD</a>",
                      "includeTargetsInLimbo": true,
                      "execute": [],
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1809875879\">Enemy_W4_Claymore_314070_Sub</a>"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Entity Death [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Character ID",
                    "ID": 1407,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}.[[getSummoner]]"
                    },
                    "characterName": "Castorice"
                  },
                  "passed": [
                    {
                      "name": "Reconstruct Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}.[[addBattleEvents]]"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1108004202\">GlobalAbility_Castorice_CD</a>",
                      "includeTargetsInLimbo": true,
                      "execute": [],
                      "failed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_Key",
                          "value": 1
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
                            "value1": "MDF_Key",
                            "compareType": "=",
                            "value2": 1
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"622644189\">MModifier_Monster_W4_Claymore_Ability03_Aim</a>[<span class=\"descriptionNumberColor\">Charging</span>]",
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
                          "modifier": "<a class=\"gModGreen\" id=\"-1809875879\">Enemy_W4_Claymore_314070_Sub</a>"
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
                    "name": "Character ID",
                    "ID": 1407,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}.[[getSummoner]]"
                    },
                    "characterName": "Castorice"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_Key",
                      "value": 0
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1809875879\">Enemy_W4_Claymore_314070_Sub</a>"
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
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "MDF_Key",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Modifier Was",
                        "modifier": "<a class=\"gModGreen\" id=\"622644189\">MModifier_Monster_W4_Claymore_Ability03_Aim</a>[<span class=\"descriptionNumberColor\">Charging</span>]"
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
                      "modifier": "<a class=\"gModGreen\" id=\"-1809875879\">Enemy_W4_Claymore_314070_Sub</a>"
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
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "MDF_Key",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Modifier Was",
                        "modifier": "<a class=\"gModGreen\" id=\"622644189\">MModifier_Monster_W4_Claymore_Ability03_Aim</a>[<span class=\"descriptionNumberColor\">Charging</span>]"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_Key",
                      "value": 0
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1809875879\">Enemy_W4_Claymore_314070_Sub</a>",
          "modifierFlags": [],
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
                    "modifier": "<a class=\"gModGreen\" id=\"622644189\">MModifier_Monster_W4_Claymore_Ability03_Aim</a>[<span class=\"descriptionNumberColor\">Charging</span>]",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 4
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "AIFlag",
                          "value": 5
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Turn Start [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        }
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 4,
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "AIFlag",
                      "value": 1
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
                  "value": 1.3
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDFlat</span>&nbsp;",
                  "value": 150
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Name",
                    "invertCondition": true,
                    "skillName": "Skill04"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "AIFlag",
                      "value": 4
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
                    "modifier": "<a class=\"gModGreen\" id=\"-1108004202\">GlobalAbility_Castorice_CD</a>"
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "MDF_Key"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "MDF_Layer",
                  "multiplier": 1
                },
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "MaxLayer",
                  "variableName": "MDF_MaxLayer",
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
                    "value1": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                    "compareType": "=",
                    "value2": 0,
                    "valueType": "Layer"
                  },
                  "failed": [
                    {
                      "name": "Stack Target Stat Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
                      "value": {
                        "operator": "Variables[0] (MDF_DamageResistance) || RETURN",
                        "displayLines": "MDF_DamageResistance",
                        "constants": [],
                        "variables": [
                          "MDF_DamageResistance"
                        ]
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
                    "modifier": "<a class=\"gModGreen\" id=\"1276555812\">MModifier_Monster_AML_Minion03_01_StoneShieldEnhance</a>[<span class=\"descriptionNumberColor\">Indomitable</span>]"
                  },
                  "passed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (MDF_Layer) || RETURN",
                        "displayLines": "MDF_Layer",
                        "constants": [],
                        "variables": [
                          "MDF_Layer"
                        ]
                      },
                      "entityClass": "Enemy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "maximum": {
                        "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                        "displayLines": "MDF_MaxLayer",
                        "constants": [],
                        "variables": [
                          "MDF_MaxLayer"
                        ]
                      },
                      "assignState": "True",
                      "state": "Active"
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
                        "value1": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                        "compareType": "=",
                        "value2": 0,
                        "valueType": "Layer"
                      },
                      "passed": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "value": {
                            "operator": "Variables[0] (MDF_Layer) || RETURN",
                            "displayLines": "MDF_Layer",
                            "constants": [],
                            "variables": [
                              "MDF_Layer"
                            ]
                          },
                          "entityClass": "Enemy",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "maximum": {
                            "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                            "displayLines": "MDF_MaxLayer",
                            "constants": [],
                            "variables": [
                              "MDF_MaxLayer"
                            ]
                          },
                          "assignState": "True",
                          "state": "CoolDown"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "value": {
                            "operator": "Variables[0] (MDF_Layer) || RETURN",
                            "displayLines": "MDF_Layer",
                            "constants": [],
                            "variables": [
                              "MDF_Layer"
                            ]
                          },
                          "entityClass": "Enemy",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "maximum": {
                            "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                            "displayLines": "MDF_MaxLayer",
                            "constants": [],
                            "variables": [
                              "MDF_MaxLayer"
                            ]
                          },
                          "assignState": "True",
                          "state": "Active"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "description": "Decreases DMG taken by <span class=\"descriptionNumberColor\">MDF_DamageResistance</span>. Loses 1 stack of \"War Armor\" after being attacked. When at 0 stacks, \"War Armor\" will be destroyed, dealing massive Imaginary DMG to this unit and delaying their action. The ally unit that destroyed the \"War Armor\" will regenerate Energy. After \"War Armor\" is destroyed, this unit will also additionally take minor Imaginary DMG when attacked. \"War Armor\" will be restored to maximum stacks at the end of this unit's turn.",
          "type": "Other",
          "statusName": "War Armor",
          "addStacksPerTrigger": -1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1282910303\">Enemy_Heaven_StoneShieldController</a>",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "Turn [Action-End Phase]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "STAT_CTRL",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "DisableAction",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "Break",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>",
                        "invertCondition": true
                      }
                    ]
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
                        "modifier": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                        "invertCondition": true
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
                            "modifier": "<a class=\"gModGreen\" id=\"-1511774920\">Monster_W4_Nikadory_EnhanceShield</a>[<span class=\"descriptionNumberColor\">Titanic Corpus</span>]",
                            "invertCondition": true
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                              "stackLimit": {
                                "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                                "displayLines": "MDF_MaxLayer",
                                "constants": [],
                                "variables": [
                                  "MDF_MaxLayer"
                                ]
                              },
                              "valuePerStack": {
                                "MDF_DamageResistance": {
                                  "operator": "Variables[0] (MDF_DamageResistance) || RETURN",
                                  "displayLines": "MDF_DamageResistance",
                                  "constants": [],
                                  "variables": [
                                    "MDF_DamageResistance"
                                  ]
                                },
                                "MDF_CrackedEffect": {
                                  "operator": "Variables[0] (MDF_CrackedEffect) || RETURN",
                                  "displayLines": "MDF_CrackedEffect",
                                  "constants": [],
                                  "variables": [
                                    "MDF_CrackedEffect"
                                  ]
                                },
                                "MDF_CrackedDamage": {
                                  "operator": "Variables[0] (MDF_CrackedDamage) || RETURN",
                                  "displayLines": "MDF_CrackedDamage",
                                  "constants": [],
                                  "variables": [
                                    "MDF_CrackedDamage"
                                  ]
                                }
                              },
                              "addStacksPerTrigger": {
                                "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                                "displayLines": "MDF_MaxLayer",
                                "constants": [],
                                "variables": [
                                  "MDF_MaxLayer"
                                ]
                              }
                            }
                          ]
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
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "value1": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                                "compareType": ">",
                                "value2": 0,
                                "valueType": "Layer"
                              },
                              {
                                "name": "Compare: Variable",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "value1": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                                "compareType": "<",
                                "value2": {
                                  "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                                  "displayLines": "MDF_MaxLayer",
                                  "constants": [],
                                  "variables": [
                                    "MDF_MaxLayer"
                                  ]
                                },
                                "valueType": "Layer"
                              }
                            ]
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
                                "modifier": "<a class=\"gModGreen\" id=\"-1511774920\">Monster_W4_Nikadory_EnhanceShield</a>[<span class=\"descriptionNumberColor\">Titanic Corpus</span>]",
                                "invertCondition": true
                              },
                              "passed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                                  "stackLimit": {
                                    "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                                    "displayLines": "MDF_MaxLayer",
                                    "constants": [],
                                    "variables": [
                                      "MDF_MaxLayer"
                                    ]
                                  },
                                  "valuePerStack": {
                                    "MDF_DamageResistance": {
                                      "operator": "Variables[0] (MDF_DamageResistance) || RETURN",
                                      "displayLines": "MDF_DamageResistance",
                                      "constants": [],
                                      "variables": [
                                        "MDF_DamageResistance"
                                      ]
                                    },
                                    "MDF_CrackedEffect": {
                                      "operator": "Variables[0] (MDF_CrackedEffect) || RETURN",
                                      "displayLines": "MDF_CrackedEffect",
                                      "constants": [],
                                      "variables": [
                                        "MDF_CrackedEffect"
                                      ]
                                    },
                                    "MDF_CrackedDamage": {
                                      "operator": "Variables[0] (MDF_CrackedDamage) || RETURN",
                                      "displayLines": "MDF_CrackedDamage",
                                      "constants": [],
                                      "variables": [
                                        "MDF_CrackedDamage"
                                      ]
                                    }
                                  },
                                  "addStacksPerTrigger": {
                                    "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                                    "displayLines": "MDF_MaxLayer",
                                    "constants": [],
                                    "variables": [
                                      "MDF_MaxLayer"
                                    ]
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
                                "modifier": "<a class=\"gModGreen\" id=\"965106610\">Monster_W4_Nikadory_Passive</a>",
                                "invertCondition": true
                              }
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"1276555812\">MModifier_Monster_AML_Minion03_01_StoneShieldEnhance</a>[<span class=\"descriptionNumberColor\">Indomitable</span>]",
                                "invertCondition": true
                              }
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
                                "value1": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                                "compareType": "=",
                                "value2": 0,
                                "valueType": "Layer"
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
                                    "modifier": "<a class=\"gModGreen\" id=\"-1511774920\">Monster_W4_Nikadory_EnhanceShield</a>[<span class=\"descriptionNumberColor\">Titanic Corpus</span>]",
                                    "invertCondition": true
                                  },
                                  "passed": [
                                    {
                                      "name": "Add Events/Bonuses",
                                      "to": {
                                        "name": "Target Name",
                                        "target": "{{Modifier Holder}}"
                                      },
                                      "modifier": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                                      "stackLimit": {
                                        "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                                        "displayLines": "MDF_MaxLayer",
                                        "constants": [],
                                        "variables": [
                                          "MDF_MaxLayer"
                                        ]
                                      },
                                      "valuePerStack": {
                                        "MDF_DamageResistance": {
                                          "operator": "Variables[0] (MDF_DamageResistance) || RETURN",
                                          "displayLines": "MDF_DamageResistance",
                                          "constants": [],
                                          "variables": [
                                            "MDF_DamageResistance"
                                          ]
                                        },
                                        "MDF_CrackedEffect": {
                                          "operator": "Variables[0] (MDF_CrackedEffect) || RETURN",
                                          "displayLines": "MDF_CrackedEffect",
                                          "constants": [],
                                          "variables": [
                                            "MDF_CrackedEffect"
                                          ]
                                        },
                                        "MDF_CrackedDamage": {
                                          "operator": "Variables[0] (MDF_CrackedDamage) || RETURN",
                                          "displayLines": "MDF_CrackedDamage",
                                          "constants": [],
                                          "variables": [
                                            "MDF_CrackedDamage"
                                          ]
                                        }
                                      },
                                      "addStacksPerTrigger": {
                                        "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                                        "displayLines": "MDF_MaxLayer",
                                        "constants": [],
                                        "variables": [
                                          "MDF_MaxLayer"
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
                  "modifier": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                  "stackLimit": {
                    "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                    "displayLines": "MDF_MaxLayer",
                    "constants": [],
                    "variables": [
                      "MDF_MaxLayer"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_DamageResistance": {
                      "operator": "Variables[0] (MDF_DamageResistance) || RETURN",
                      "displayLines": "MDF_DamageResistance",
                      "constants": [],
                      "variables": [
                        "MDF_DamageResistance"
                      ]
                    },
                    "MDF_CrackedEffect": {
                      "operator": "Variables[0] (MDF_CrackedEffect) || RETURN",
                      "displayLines": "MDF_CrackedEffect",
                      "constants": [],
                      "variables": [
                        "MDF_CrackedEffect"
                      ]
                    },
                    "MDF_CrackedDamage": {
                      "operator": "Variables[0] (MDF_CrackedDamage) || RETURN",
                      "displayLines": "MDF_CrackedDamage",
                      "constants": [],
                      "variables": [
                        "MDF_CrackedDamage"
                      ]
                    }
                  },
                  "addStacksPerTrigger": {
                    "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                    "displayLines": "MDF_MaxLayer",
                    "constants": [],
                    "variables": [
                      "MDF_MaxLayer"
                    ]
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-584942636\">W4_Claymore_BattleScore3</a>",
                  "casterAssign": "TargetSelf"
                }
              ]
            },
            {
              "eventTrigger": "Pre-Death [Owner]"
            },
            {
              "eventTrigger": "Being Attacked End [Owner]",
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
                        "modifier": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                        "compareType": ">",
                        "value2": 0,
                        "valueType": "Layer"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                        "compareType": "=",
                        "value2": 1,
                        "valueType": "Layer"
                      },
                      "passed": [
                        {
                          "name": "Update Energy",
                          "on": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "valuePercent": {
                            "operator": "Variables[0] (MDF_ModifySP) || RETURN",
                            "displayLines": "MDF_ModifySP",
                            "constants": [],
                            "variables": [
                              "MDF_ModifySP"
                            ]
                          },
                          "isFixed": "* ERR"
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"965106610\">Monster_W4_Nikadory_Passive</a>"
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-95825091\">Monster_W4_Nikadory_BattleScore2Count1</a>"
                            }
                          ]
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Living State",
                            "state": "Mask_AliveOnly",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            }
                          },
                          "failed": [
                            {
                              "name": "UI Display Event (On Entity)",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "popUpText": "Energy Regenerated",
                              "living": true
                            }
                          ]
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
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"1735610792\">MModifier_Monster_AML_Minion03_01_Halo</a>[<span class=\"descriptionNumberColor\">War Song</span>]"
                              }
                            }
                          ]
                        },
                        {
                          "name": "Update Displayed Energy Bar",
                          "value": 0,
                          "entityClass": "Enemy",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "assignState": "True",
                          "state": "CoolDown"
                        },
                        {
                          "name": "Action Advance/Delay",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "advanceType": "Set",
                          "multiAdd": "MDF_CrackedEffect"
                        },
                        {
                          "name": "Define Custom Variable with Stat",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "MDF_MaxHP",
                          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]"
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Monster Rank",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "compareType": "<",
                            "value2": 3
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
                                "DamageType": "Imaginary",
                                "Damage": {
                                  "operator": "Variables[0] (MDF_CrackedDamage) || RETURN",
                                  "displayLines": "MDF_CrackedDamage",
                                  "constants": [],
                                  "variables": [
                                    "MDF_CrackedDamage"
                                  ]
                                },
                                "dmgFormula": "Max HP Scaling",
                                "dmgFormulaFinal": "Converted DMG Base",
                                "Toughness": null,
                                "Tags": null,
                                "attackType": "Additional DMG"
                              },
                              "attackType": "Additional DMG"
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
                                "DamageType": "Imaginary",
                                "Damage": {
                                  "operator": "Variables[0] (MDF_CrackedDamage) || RETURN",
                                  "displayLines": "MDF_CrackedDamage",
                                  "constants": [],
                                  "variables": [
                                    "MDF_CrackedDamage"
                                  ]
                                },
                                "dmgFormula": "Max HP Scaling",
                                "dmgFormulaFinal": "Converted DMG Base",
                                "Toughness": null,
                                "Tags": null,
                                "attackType": "Additional DMG"
                              },
                              "attackType": "Additional DMG"
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
                            "value1": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                            "compareType": "<=",
                            "value2": 0,
                            "valueType": "Layer"
                          },
                          "failed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]"
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
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                        "compareType": "=",
                        "value2": 0,
                        "valueType": "Layer"
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Monster Rank",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "compareType": "<",
                            "value2": 3
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
                                "DamageType": "Imaginary",
                                "Damage": {
                                  "operator": "Variables[0] (MDF_CrackedDamageAfter) || RETURN",
                                  "displayLines": "MDF_CrackedDamageAfter",
                                  "constants": [],
                                  "variables": [
                                    "MDF_CrackedDamageAfter"
                                  ]
                                },
                                "dmgFormula": "Max HP Scaling",
                                "dmgFormulaFinal": "Converted DMG Base",
                                "Toughness": null,
                                "Tags": null,
                                "attackType": "Additional DMG"
                              },
                              "attackType": "Additional DMG"
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
                                "DamageType": "Imaginary",
                                "Damage": {
                                  "operator": "Variables[0] (MDF_CrackedDamageAfter) || RETURN",
                                  "displayLines": "MDF_CrackedDamageAfter",
                                  "constants": [],
                                  "variables": [
                                    "MDF_CrackedDamageAfter"
                                  ]
                                },
                                "dmgFormula": "Max HP Scaling",
                                "dmgFormulaFinal": "Converted DMG Base",
                                "Toughness": null,
                                "Tags": null,
                                "attackType": "Additional DMG"
                              },
                              "attackType": "Additional DMG"
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
              "eventTrigger": "When Losing Modifier [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Modifier Was",
                        "modifier": "<a class=\"gModGreen\" id=\"1276555812\">MModifier_Monster_AML_Minion03_01_StoneShieldEnhance</a>[<span class=\"descriptionNumberColor\">Indomitable</span>]"
                      },
                      {
                        "name": "Modifier Was",
                        "modifier": "<a class=\"gModGreen\" id=\"1631457444\">MModifier_Monster_AML_Minion03_01_StoneShieldEnhance_Nikadory</a>[<span class=\"descriptionNumberColor\">Indomitable</span>]"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_MaxLayer",
                      "value": {
                        "operator": "Variables[0] (MDF_OriginalMaxLayer) || RETURN",
                        "displayLines": "MDF_OriginalMaxLayer",
                        "constants": [],
                        "variables": [
                          "MDF_OriginalMaxLayer"
                        ]
                      }
                    },
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
                            "modifier": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]"
                          },
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                            "compareType": ">",
                            "value2": 0,
                            "valueType": "Layer"
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
                          "variableName": "MDF_CurLayer",
                          "modifierName": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
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
                            "value1": "MDF_AddMaxLayer",
                            "compareType": "<",
                            "value2": {
                              "operator": "Variables[0] (MDF_CurLayer) || Constants[0] (1) || SUB || RETURN",
                              "displayLines": "(MDF_CurLayer - 1)",
                              "constants": [
                                1
                              ],
                              "variables": [
                                "MDF_CurLayer"
                              ]
                            }
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                              "stackLimit": {
                                "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                                "displayLines": "MDF_MaxLayer",
                                "constants": [],
                                "variables": [
                                  "MDF_MaxLayer"
                                ]
                              },
                              "valuePerStack": {
                                "MDF_DamageResistance": {
                                  "operator": "Variables[0] (MDF_DamageResistance) || RETURN",
                                  "displayLines": "MDF_DamageResistance",
                                  "constants": [],
                                  "variables": [
                                    "MDF_DamageResistance"
                                  ]
                                },
                                "MDF_CrackedEffect": {
                                  "operator": "Variables[0] (MDF_CrackedEffect) || RETURN",
                                  "displayLines": "MDF_CrackedEffect",
                                  "constants": [],
                                  "variables": [
                                    "MDF_CrackedEffect"
                                  ]
                                },
                                "MDF_CrackedDamage": {
                                  "operator": "Variables[0] (MDF_CrackedDamage) || RETURN",
                                  "displayLines": "MDF_CrackedDamage",
                                  "constants": [],
                                  "variables": [
                                    "MDF_CrackedDamage"
                                  ]
                                }
                              },
                              "addStacksPerTrigger": {
                                "operator": "Variables[0] (MDF_AddMaxLayer) || INVERT || RETURN",
                                "displayLines": "-MDF_AddMaxLayer",
                                "constants": [],
                                "variables": [
                                  "MDF_AddMaxLayer"
                                ]
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
                              "modifier": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                              "stackLimit": {
                                "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                                "displayLines": "MDF_MaxLayer",
                                "constants": [],
                                "variables": [
                                  "MDF_MaxLayer"
                                ]
                              },
                              "valuePerStack": {
                                "MDF_DamageResistance": {
                                  "operator": "Variables[0] (MDF_DamageResistance) || RETURN",
                                  "displayLines": "MDF_DamageResistance",
                                  "constants": [],
                                  "variables": [
                                    "MDF_DamageResistance"
                                  ]
                                },
                                "MDF_CrackedEffect": {
                                  "operator": "Variables[0] (MDF_CrackedEffect) || RETURN",
                                  "displayLines": "MDF_CrackedEffect",
                                  "constants": [],
                                  "variables": [
                                    "MDF_CrackedEffect"
                                  ]
                                },
                                "MDF_CrackedDamage": {
                                  "operator": "Variables[0] (MDF_CrackedDamage) || RETURN",
                                  "displayLines": "MDF_CrackedDamage",
                                  "constants": [],
                                  "variables": [
                                    "MDF_CrackedDamage"
                                  ]
                                }
                              },
                              "addStacksPerTrigger": {
                                "operator": "Constants[0] (1) || Variables[0] (MDF_CurLayer) || SUB || RETURN",
                                "displayLines": "(1 - MDF_CurLayer)",
                                "constants": [
                                  1
                                ],
                                "variables": [
                                  "MDF_CurLayer"
                                ]
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
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-1511774920\">Monster_W4_Nikadory_EnhanceShield</a>[<span class=\"descriptionNumberColor\">Titanic Corpus</span>]",
                            "invertCondition": true
                          },
                          "passed": [
                            {
                              "name": "Update Displayed Energy Bar",
                              "entityClass": "Enemy",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "maximum": {
                                "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                                "displayLines": "MDF_MaxLayer",
                                "constants": [],
                                "variables": [
                                  "MDF_MaxLayer"
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
              "eventTrigger": "When Stacking Modifier Instance [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"1276555812\">MModifier_Monster_AML_Minion03_01_StoneShieldEnhance</a>[<span class=\"descriptionNumberColor\">Indomitable</span>]"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_OriginalMaxLayer",
                      "value": {
                        "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                        "displayLines": "MDF_MaxLayer",
                        "constants": [],
                        "variables": [
                          "MDF_MaxLayer"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable with Copy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1276555812\">MModifier_Monster_AML_Minion03_01_StoneShieldEnhance</a>[<span class=\"descriptionNumberColor\">Indomitable</span>]",
                      "variable": "MDF_AddMaxLayer",
                      "target2": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variable2": "MDF_AddMaxLayer"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_MaxLayer",
                      "value": {
                        "operator": "Variables[0] (MDF_MaxLayer) || Variables[1] (MDF_AddMaxLayer) || ADD || RETURN",
                        "displayLines": "(MDF_MaxLayer + MDF_AddMaxLayer)",
                        "constants": [],
                        "variables": [
                          "MDF_MaxLayer",
                          "MDF_AddMaxLayer"
                        ]
                      }
                    },
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
                            "modifier": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]"
                          },
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                            "compareType": ">",
                            "value2": 0,
                            "valueType": "Layer"
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
                          "modifier": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                          "stackLimit": {
                            "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                            "displayLines": "MDF_MaxLayer",
                            "constants": [],
                            "variables": [
                              "MDF_MaxLayer"
                            ]
                          },
                          "valuePerStack": {
                            "MDF_DamageResistance": {
                              "operator": "Variables[0] (MDF_DamageResistance) || RETURN",
                              "displayLines": "MDF_DamageResistance",
                              "constants": [],
                              "variables": [
                                "MDF_DamageResistance"
                              ]
                            },
                            "MDF_CrackedEffect": {
                              "operator": "Variables[0] (MDF_CrackedEffect) || RETURN",
                              "displayLines": "MDF_CrackedEffect",
                              "constants": [],
                              "variables": [
                                "MDF_CrackedEffect"
                              ]
                            },
                            "MDF_CrackedDamage": {
                              "operator": "Variables[0] (MDF_CrackedDamage) || RETURN",
                              "displayLines": "MDF_CrackedDamage",
                              "constants": [],
                              "variables": [
                                "MDF_CrackedDamage"
                              ]
                            }
                          },
                          "addStacksPerTrigger": {
                            "operator": "Variables[0] (MDF_AddMaxLayer) || RETURN",
                            "displayLines": "MDF_AddMaxLayer",
                            "constants": [],
                            "variables": [
                              "MDF_AddMaxLayer"
                            ]
                          }
                        },
                        {
                          "name": "Update Displayed Energy Bar",
                          "entityClass": "Enemy",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "entityClass": "Enemy",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "maximum": {
                            "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                            "displayLines": "MDF_MaxLayer",
                            "constants": [],
                            "variables": [
                              "MDF_MaxLayer"
                            ]
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"1631457444\">MModifier_Monster_AML_Minion03_01_StoneShieldEnhance_Nikadory</a>[<span class=\"descriptionNumberColor\">Indomitable</span>]"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_OriginalMaxLayer",
                      "value": {
                        "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                        "displayLines": "MDF_MaxLayer",
                        "constants": [],
                        "variables": [
                          "MDF_MaxLayer"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable with Copy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1631457444\">MModifier_Monster_AML_Minion03_01_StoneShieldEnhance_Nikadory</a>[<span class=\"descriptionNumberColor\">Indomitable</span>]",
                      "variable": "MDF_AddMaxLayer",
                      "target2": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variable2": "MDF_AddMaxLayer"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_MaxLayer",
                      "value": {
                        "operator": "Variables[0] (MDF_MaxLayer) || Variables[1] (MDF_AddMaxLayer) || ADD || RETURN",
                        "displayLines": "(MDF_MaxLayer + MDF_AddMaxLayer)",
                        "constants": [],
                        "variables": [
                          "MDF_MaxLayer",
                          "MDF_AddMaxLayer"
                        ]
                      }
                    },
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
                            "modifier": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]"
                          },
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                            "compareType": ">",
                            "value2": 0,
                            "valueType": "Layer"
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
                          "modifier": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]",
                          "stackLimit": {
                            "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                            "displayLines": "MDF_MaxLayer",
                            "constants": [],
                            "variables": [
                              "MDF_MaxLayer"
                            ]
                          },
                          "valuePerStack": {
                            "MDF_DamageResistance": {
                              "operator": "Variables[0] (MDF_DamageResistance) || RETURN",
                              "displayLines": "MDF_DamageResistance",
                              "constants": [],
                              "variables": [
                                "MDF_DamageResistance"
                              ]
                            },
                            "MDF_CrackedEffect": {
                              "operator": "Variables[0] (MDF_CrackedEffect) || RETURN",
                              "displayLines": "MDF_CrackedEffect",
                              "constants": [],
                              "variables": [
                                "MDF_CrackedEffect"
                              ]
                            },
                            "MDF_CrackedDamage": {
                              "operator": "Variables[0] (MDF_CrackedDamage) || RETURN",
                              "displayLines": "MDF_CrackedDamage",
                              "constants": [],
                              "variables": [
                                "MDF_CrackedDamage"
                              ]
                            }
                          },
                          "addStacksPerTrigger": {
                            "operator": "Variables[0] (MDF_AddMaxLayer) || RETURN",
                            "displayLines": "MDF_AddMaxLayer",
                            "constants": [],
                            "variables": [
                              "MDF_AddMaxLayer"
                            ]
                          }
                        },
                        {
                          "name": "Update Displayed Energy Bar",
                          "entityClass": "Enemy",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
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
                              "target": "{{Modifier Holder}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-1511774920\">Monster_W4_Nikadory_EnhanceShield</a>[<span class=\"descriptionNumberColor\">Titanic Corpus</span>]",
                            "invertCondition": true
                          },
                          "passed": [
                            {
                              "name": "Update Displayed Energy Bar",
                              "entityClass": "Enemy",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "maximum": {
                                "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                                "displayLines": "MDF_MaxLayer",
                                "constants": [],
                                "variables": [
                                  "MDF_MaxLayer"
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
            }
          ],
          "stackData": [
            "MDF_MaxLayer",
            "MDF_CrackedEffect",
            "MDF_CrackedDamage",
            "MDF_DamageResistance",
            "MDF_CrackedDamageAfter",
            "MDF_ModifySP"
          ],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-351944820\">MModifier_Monster_W4_Claymore_Ability04_DamageTakenUp</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
          "stackType": "Replace",
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
                    "operator": "Variables[0] (MDF_DamageTakenUpRatio) || RETURN",
                    "displayLines": "MDF_DamageTakenUpRatio",
                    "constants": [],
                    "variables": [
                      "MDF_DamageTakenUpRatio"
                    ]
                  }
                }
              ]
            }
          ],
          "useEntitySnapshot": true,
          "stackData": [
            "MDF_DamageTakenUpRatio"
          ],
          "latentQueue": [],
          "description": "DMG taken increases by <span class=\"descriptionNumberColor\">MDF_DamageTakenUpRatio</span>.",
          "type": "Debuff",
          "effectName": "Vulnerability",
          "statusName": "Vulnerability"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1423108848\">MModifier_Monster_W4_Claymore_Ability03_Target_UI</a>[<span class=\"descriptionNumberColor\">Forthcoming Strife</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead",
            "RemoveWhenOwnerUnselectable"
          ],
          "description": "Furiae Praetor's \"Drowned in the Crimson Sea\" attack.",
          "type": "Other",
          "effectName": "Distributed Attack",
          "statusName": "Forthcoming Strife"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1690906483\">MModifier_Monster_W4_Claymore_Ability03_Target</a>",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1423108848\">MModifier_Monster_W4_Claymore_Ability03_Target_UI</a>[<span class=\"descriptionNumberColor\">Forthcoming Strife</span>]",
                  "onlyRemoveOwnersInstance": true
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
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
                        "modifier": "<a class=\"gModGreen\" id=\"-1423108848\">MModifier_Monster_W4_Claymore_Ability03_Target_UI</a>[<span class=\"descriptionNumberColor\">Forthcoming Strife</span>]",
                        "invertCondition": true,
                        "casterFilter": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        }
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "Stealth",
                        "invertCondition": true
                      },
                      {
                        "name": "Target is Unselectable",
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
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1423108848\">MModifier_Monster_W4_Claymore_Ability03_Target_UI</a>[<span class=\"descriptionNumberColor\">Forthcoming Strife</span>]"
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
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1423108848\">MModifier_Monster_W4_Claymore_Ability03_Target_UI</a>[<span class=\"descriptionNumberColor\">Forthcoming Strife</span>]",
                        "casterFilter": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        }
                      },
                      {
                        "name": "Modifier Has Flag",
                        "flagName": "Stealth"
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "Stealth"
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
                      "modifier": "<a class=\"gModGreen\" id=\"-1423108848\">MModifier_Monster_W4_Claymore_Ability03_Target_UI</a>[<span class=\"descriptionNumberColor\">Forthcoming Strife</span>]",
                      "onlyRemoveOwnersInstance": true
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
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1423108848\">MModifier_Monster_W4_Claymore_Ability03_Target_UI</a>[<span class=\"descriptionNumberColor\">Forthcoming Strife</span>]",
                        "invertCondition": true,
                        "casterFilter": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        }
                      },
                      {
                        "name": "Modifier Has Flag",
                        "flagName": "Stealth"
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "Stealth",
                        "invertCondition": true
                      },
                      {
                        "name": "Target is Unselectable",
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
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1423108848\">MModifier_Monster_W4_Claymore_Ability03_Target_UI</a>[<span class=\"descriptionNumberColor\">Forthcoming Strife</span>]"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Unselectable Adjustment [Owner]: End",
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
                        "modifier": "<a class=\"gModGreen\" id=\"-1423108848\">MModifier_Monster_W4_Claymore_Ability03_Target_UI</a>[<span class=\"descriptionNumberColor\">Forthcoming Strife</span>]",
                        "invertCondition": true,
                        "casterFilter": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        }
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "Stealth",
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
                      "modifier": "<a class=\"gModGreen\" id=\"-1423108848\">MModifier_Monster_W4_Claymore_Ability03_Target_UI</a>[<span class=\"descriptionNumberColor\">Forthcoming Strife</span>]"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-195062538\">MModifier_Monster_W4_Claymore_Ability03_Aim_EndBreak</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "phase": "Phase3"
                }
              ]
            },
            {
              "eventTrigger": "End Broken State [Owner]",
              "execute": [
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "phase": "Phase1"
                },
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__622644189\">MModifier_Monster_W4_Claymore_Ability03_Aim</a>[<span class=\"descriptionNumberColor\">Charging</span>]",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
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
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1690906483\">MModifier_Monster_W4_Claymore_Ability03_Target</a>",
                  "onlyRemoveOwnersInstance": true
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
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "AIFlag",
                  "value": 1
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-195062538\">MModifier_Monster_W4_Claymore_Ability03_Aim_EndBreak</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-662328641\">MModifier_Monster_W4_Claymore_Ability03_WeaponEff</a>"
                },
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "Charging. Dispelled upon Weakness Break.",
          "type": "Other",
          "effectName": "Charging",
          "statusName": "Charging",
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1690906483\">MModifier_Monster_W4_Claymore_Ability03_Target</a>",
              "aliveOnly": "True",
              "haloStatus": true
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-662328641\">MModifier_Monster_W4_Claymore_Ability03_WeaponEff</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-133295283\">Enemy_W4_Claymore_FantasticStory</a>",
          "stackData": [],
          "latentQueue": []
        }
      ],
      "references": []
    }
  }
}