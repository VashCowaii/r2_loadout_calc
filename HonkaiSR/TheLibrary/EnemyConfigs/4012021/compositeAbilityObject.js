const compositeAbilityObject = {
  "fullCharacterName": 4012021,
  "trimCharacterName": 4012021,
  "abilityList": [
    "4012021_Monster_W4_Scholar_Ability02_Part02",
    "4012021_Monster_W4_Scholar_Ability02_Part01",
    "4012021_Monster_W4_Scholar_Ability01_Part02",
    "4012021_Monster_W4_Scholar_Ability01_Part01",
    "4012021_Monster_W4_Scholar_PassiveAbility02",
    "4012021_Monster_W4_Scholar_PassiveAbilityInitiate",
    "4012021_Modifiers"
  ],
  "abilityObject": {
    "4012021_Monster_W4_Scholar_Ability02_Part02": {
      "fileName": "4012021_Monster_W4_Scholar_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
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
    "4012021_Monster_W4_Scholar_Ability02_Part01": {
      "fileName": "4012021_Monster_W4_Scholar_Ability02_Part01",
      "childAbilityList": [
        "4012021_Monster_W4_Scholar_Ability02_Camera",
        "4012021_Monster_W4_Scholar_Ability02_Part01",
        "4012021_Monster_W4_Scholar_Ability02_Part02"
      ],
      "skillTrigger": "Skill02",
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
          "ability": "Monster_W4_Scholar_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        "Deleted bullshit"
      ],
      "references": []
    },
    "4012021_Monster_W4_Scholar_Ability01_Part02": {
      "fileName": "4012021_Monster_W4_Scholar_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1765528423\">MModifier_Monster_W4_Scholar_BookTarget</a>[<span class=\"descriptionNumberColor\">Gleaned Instruction</span>]",
          "valuePerStack": {
            "MDF_SpeedUpRatio": {
              "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
              "displayLines": "{[Skill01[0]]}",
              "constants": [],
              "variables": [
                "{[Skill01[0]]}"
              ]
            },
            "MDF_DamageUpRatio": {
              "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
              "displayLines": "{[Skill01[1]]}",
              "constants": [],
              "variables": [
                "{[Skill01[1]]}"
              ]
            }
          },
          "casterAssign": "CasterSelf"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "4012021_Monster_W4_Scholar_Ability01_Part01": {
      "fileName": "4012021_Monster_W4_Scholar_Ability01_Part01",
      "childAbilityList": [
        "4012021_Monster_W4_Scholar_Ability01_Camera",
        "4012021_Monster_W4_Scholar_Ability01_Part01",
        "4012021_Monster_W4_Scholar_Ability01_Part02"
      ],
      "skillTrigger": "Skill01",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1765528423\">MModifier_Monster_W4_Scholar_BookTarget</a>[<span class=\"descriptionNumberColor\">Gleaned Instruction</span>]",
                "invertCondition": true
              },
              {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value": "MonsterType_W4_Scholar_00",
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
              "ability": "Monster_W4_Scholar_Ability01_Part02",
              "isTrigger": true
            },
            "Deleted bullshit"
          ]
        }
      ],
      "references": []
    },
    "4012021_Monster_W4_Scholar_PassiveAbility02": {
      "fileName": "4012021_Monster_W4_Scholar_PassiveAbility02",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1310429689\">MModifier_Monster_W4_Scholar_BookKillerListener</a>",
          "valuePerStack": {
            "MDF_SpeedUpRatio": {
              "operator": "Variables[0] ({[PassiveSkill02[0]]}) || RETURN",
              "displayLines": "{[PassiveSkill02[0]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkill02[0]]}"
              ]
            },
            "MDF_DamageUpRatio": {
              "operator": "Variables[0] ({[PassiveSkill02[1]]}) || RETURN",
              "displayLines": "{[PassiveSkill02[1]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkill02[1]]}"
              ]
            },
            "MDF_LifeTime": {
              "operator": "Variables[0] ({[PassiveSkill02[2]]}) || RETURN",
              "displayLines": "{[PassiveSkill02[2]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkill02[2]]}"
              ]
            }
          }
        }
      ],
      "references": []
    },
    "4012021_Monster_W4_Scholar_PassiveAbilityInitiate": {
      "fileName": "4012021_Monster_W4_Scholar_PassiveAbilityInitiate",
      "skillTrigger": "PassiveSkillInitiate",
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
          "modifier": "<a class=\"gModGreen\" id=\"1011820483\">Enemy_Heaven_ModelController_Scholar</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1681000669\">Enemy_W4_Scholar_ConfineHit_Controller</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1011820483\">Enemy_Heaven_ModelController_Scholar</a>",
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
    "4012021_Modifiers": {
      "fileName": "4012021_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1681000669\">Enemy_W4_Scholar_ConfineHit_Controller</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "phase": "Phase1"
                }
              ]
            },
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "flagName": "STAT_Confine"
                  },
                  "passed": [
                    {
                      "name": "Change Character Transformation",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "phase": "Phase0"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Change Character Transformation",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "phase": "Phase1"
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
          "for": "<a class=\"gModGreen\" id=\"mod__1075754631\">MModifier_Monster_W4_Scholar_BookKiller</a>[<span class=\"descriptionNumberColor\">Ignited Flame</span>]",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_SpeedUpRatio) || RETURN",
                    "displayLines": "MDF_SpeedUpRatio",
                    "constants": [],
                    "variables": [
                      "MDF_SpeedUpRatio"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_DamageUpRatio) || RETURN",
                    "displayLines": "MDF_DamageUpRatio",
                    "constants": [],
                    "variables": [
                      "MDF_DamageUpRatio"
                    ]
                  }
                }
              ]
            }
          ],
          "useEntitySnapshot": true,
          "description": "Increases SPD by <span class=\"descriptionNumberColor\">MDF_SpeedUpRatio</span>, and DMG dealt by <span class=\"descriptionNumberColor\">MDF_DamageUpRatio</span>.",
          "type": "Buff",
          "effectName": "Ignited Flame",
          "statusName": "Ignited Flame"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1310429689\">MModifier_Monster_W4_Scholar_BookKillerListener</a>",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "Pre-Death [Owner]",
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
                      "modifier": "<a class=\"gModGreen\" id=\"1075754631\">MModifier_Monster_W4_Scholar_BookKiller</a>[<span class=\"descriptionNumberColor\">Ignited Flame</span>]",
                      "duration": {
                        "operator": "Variables[0] (MDF_LifeTime) || RETURN",
                        "displayLines": "MDF_LifeTime",
                        "constants": [],
                        "variables": [
                          "MDF_LifeTime"
                        ]
                      },
                      "valuePerStack": {
                        "MDF_SpeedUpRatio": {
                          "operator": "Variables[0] (MDF_SpeedUpRatio) || RETURN",
                          "displayLines": "MDF_SpeedUpRatio",
                          "constants": [],
                          "variables": [
                            "MDF_SpeedUpRatio"
                          ]
                        },
                        "MDF_DamageUpRatio": {
                          "operator": "Variables[0] (MDF_DamageUpRatio) || RETURN",
                          "displayLines": "MDF_DamageUpRatio",
                          "constants": [],
                          "variables": [
                            "MDF_DamageUpRatio"
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_SpeedUpRatio",
            "MDF_DamageUpRatio",
            "MDF_LifeTime"
          ],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1765528423\">MModifier_Monster_W4_Scholar_BookTarget</a>[<span class=\"descriptionNumberColor\">Gleaned Instruction</span>]",
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
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1513370696\">MModifier_Monster_W4_Scholar_BookController</a>[<span class=\"descriptionNumberColor\">Proselytize</span>]"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Set Target Parameter",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "paramTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MModifier_Monster_W4_Scholar_00_BookController_DynamicTarget"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1513370696\">MModifier_Monster_W4_Scholar_BookController</a>[<span class=\"descriptionNumberColor\">Proselytize</span>]"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1282910303\">Enemy_Heaven_StoneShieldController</a>"
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
                    "operator": "Variables[0] (MDF_SpeedUpRatio) || RETURN",
                    "displayLines": "MDF_SpeedUpRatio",
                    "constants": [],
                    "variables": [
                      "MDF_SpeedUpRatio"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_DamageUpRatio) || RETURN",
                    "displayLines": "MDF_DamageUpRatio",
                    "constants": [],
                    "variables": [
                      "MDF_DamageUpRatio"
                    ]
                  }
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
                    "modifier": "<a class=\"gModGreen\" id=\"-1513370696\">MModifier_Monster_W4_Scholar_BookController</a>[<span class=\"descriptionNumberColor\">Proselytize</span>]"
                  },
                  "passed": [
                    {
                      "name": "Reconstruct Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "casterFilter": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "counter": 1,
                      "modifier": "<a class=\"gModGreen\" id=\"-1513370696\">MModifier_Monster_W4_Scholar_BookController</a>[<span class=\"descriptionNumberColor\">Proselytize</span>]",
                      "execute": [],
                      "failed": [
                        "Modifier Deletes Itself"
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_SpeedUpRatio",
            "MDF_DamageUpRatio"
          ],
          "latentQueue": [],
          "description": "Increases SPD by <span class=\"descriptionNumberColor\">MDF_SpeedUpRatio</span> and DMG dealt by <span class=\"descriptionNumberColor\">MDF_DamageUpRatio</span>. Dispelled when %CasterName's \"War Armor\" is destroyed.",
          "type": "Buff",
          "effectName": "Gleaned Instruction",
          "statusName": "Gleaned Instruction"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1513370696\">MModifier_Monster_W4_Scholar_BookController</a>[<span class=\"descriptionNumberColor\">Proselytize</span>]",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "When Losing Modifier [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"-655488173\">Enemy_Heaven_StoneShield</a>[<span class=\"descriptionNumberColor\">War Armor</span>]"
                  },
                  "passed": [
                    {
                      "name": "Reconstruct Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "casterFilter": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "counter": 1,
                      "modifier": "<a class=\"gModGreen\" id=\"-1765528423\">MModifier_Monster_W4_Scholar_BookTarget</a>[<span class=\"descriptionNumberColor\">Gleaned Instruction</span>]",
                      "modifierType": "Buff",
                      "execute": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-228290033\">ParamModifier</a>"
                        }
                      ]
                    },
                    "Modifier Deletes Itself"
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
                      "name": "Reconstruct Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "casterFilter": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "counter": 1,
                      "modifier": "<a class=\"gModGreen\" id=\"-1765528423\">MModifier_Monster_W4_Scholar_BookTarget</a>[<span class=\"descriptionNumberColor\">Gleaned Instruction</span>]",
                      "modifierType": "Buff",
                      "execute": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-228290033\">ParamModifier</a>"
                        }
                      ]
                    },
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "Causes %DynamicTargetName to enter the \"Gleaned Instruction\" state. Dispelled when this unit's \"War Armor\" is destroyed.",
          "type": "Other",
          "effectName": "Proselytize",
          "statusName": "Proselytize"
        }
      ],
      "references": []
    }
  }
}