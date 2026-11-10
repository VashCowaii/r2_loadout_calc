const entityPageType = "enemy"
const compositeAbilityObject = {
  "fullCharacterName": 4012020,
  "trimCharacterName": 4012020,
  "abilityList": [
    "4012020_Modifiers",
    "4012020_Monster_W4_Scholar_PassiveAbility02",
    "4012020_Monster_W4_Scholar_PassiveAbilityInitiate",
    "4012020_Monster_W4_Scholar_Ability02_Part02",
    "4012020_Monster_W4_Scholar_Ability02_Part01",
    "4012020_Monster_W4_Scholar_Ability01_Part02",
    "4012020_Monster_W4_Scholar_Ability01_Part01",
    "4012020_Handling"
  ],
  "abilityObject": {
    "4012020_Modifiers": {
      "fileName": "4012020_Modifiers",
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
                  "name": "Change Entity Turn-State",
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
                      "name": "Change Entity Turn-State",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "phase": "Phase0"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Change Entity Turn-State",
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
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1075754631\">MModifier_Monster_W4_Scholar_BookKiller</a>[<span class=\"descriptionNumberColor\">Ignited Flame</span>]",
          "stackType": "Replace",
          "useEntitySnapshot": true,
          "description": "Increases SPD by <span class=\"descriptionNumberColor\">MDF_SpeedUpRatio</span>, and DMG dealt by <span class=\"descriptionNumberColor\">MDF_DamageUpRatio</span>.",
          "type": "Buff",
          "effectName": "Ignited Flame",
          "statusName": "Ignited Flame",
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
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
                  "statValue": {
                    "displayLines": "MDF_SpeedUpRatio"
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "statValue": {
                    "displayLines": "MDF_DamageUpRatio"
                  }
                }
              ]
            }
          ]
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
                        "displayLines": "MDF_LifeTime"
                      },
                      "valuePerStack": {
                        "MDF_SpeedUpRatio": {
                          "displayLines": "MDF_SpeedUpRatio"
                        },
                        "MDF_DamageUpRatio": {
                          "displayLines": "MDF_DamageUpRatio"
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
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1765528423\">MModifier_Monster_W4_Scholar_BookTarget</a>[<span class=\"descriptionNumberColor\">Gleaned Instruction</span>]",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "description": "Increases SPD by <span class=\"descriptionNumberColor\">MDF_SpeedUpRatio</span> and DMG dealt by <span class=\"descriptionNumberColor\">MDF_DamageUpRatio</span>. Dispelled when %CasterName's \"War Armor\" is destroyed.",
          "type": "Buff",
          "effectName": "Gleaned Instruction",
          "statusName": "Gleaned Instruction",
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
                  "variableName": "MModifier_Monster_W4_Scholar_00_BookController_DynamicTarget",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "paramTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
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
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
                  "statValue": {
                    "displayLines": "MDF_SpeedUpRatio"
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "statValue": {
                    "displayLines": "MDF_DamageUpRatio"
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
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1513370696\">MModifier_Monster_W4_Scholar_BookController</a>[<span class=\"descriptionNumberColor\">Proselytize</span>]",
          "latentQueue": [
            "MModifier_Monster_W4_Scholar_00_BookController_DynamicTarget"
          ],
          "description": "Causes %DynamicTargetName to enter the \"Gleaned Instruction\" state. Dispelled when this unit's \"War Armor\" is destroyed.",
          "type": "Other",
          "effectName": "Proselytize",
          "statusName": "Proselytize",
          "execute": [
            {
              "eventTrigger": "Turn [Owner]: Pre-action Phase",
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
          ]
        }
      ],
      "references": []
    },
    "4012020_Monster_W4_Scholar_PassiveAbility02": {
      "fileName": "4012020_Monster_W4_Scholar_PassiveAbility02",
      "skillTrigger": "PassiveSkill02",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1310429689\">MModifier_Monster_W4_Scholar_BookKillerListener</a>",
          "valuePerStack": {
            "MDF_SpeedUpRatio": {
              "displayLines": "{[PassiveSkill02[0]]}"
            },
            "MDF_DamageUpRatio": {
              "displayLines": "{[PassiveSkill02[1]]}"
            },
            "MDF_LifeTime": {
              "displayLines": "{[PassiveSkill02[2]]}"
            }
          }
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "4012020_Monster_W4_Scholar_PassiveAbilityInitiate": {
      "fileName": "4012020_Monster_W4_Scholar_PassiveAbilityInitiate",
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
              "displayLines": "{[PassiveSkillInitiate[0]]}"
            },
            "MDF_CrackedEffect": {
              "displayLines": "{[PassiveSkillInitiate[1]]}"
            },
            "MDF_CrackedDamage": {
              "displayLines": "{[PassiveSkillInitiate[5]]}"
            },
            "MDF_DamageResistance": {
              "displayLines": "{[PassiveSkillInitiate[2]]}"
            },
            "MDF_CrackedDamageAfter": {
              "displayLines": "{[PassiveSkillInitiate[3]]}"
            },
            "MDF_ModifySP": {
              "displayLines": "{[PassiveSkillInitiate[4]]}"
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
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
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
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "livingState": "Mask_AliveOnly"
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
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "livingState": "Mask_AliveOnly"
                          },
                          {
                            "name": "Has Turn-State",
                            "turnState": [
                              "InsertAbilityActionPhase"
                            ],
                            "invertCondition": true
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
                          "displayLines": "MDF_MaxLayer"
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
          ]
        }
      ]
    },
    "4012020_Monster_W4_Scholar_Ability02_Part02": {
      "fileName": "4012020_Monster_W4_Scholar_Ability02_Part02",
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
              "displayLines": "{[Skill02[0]]}"
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
    "4012020_Monster_W4_Scholar_Ability02_Part01": {
      "fileName": "4012020_Monster_W4_Scholar_Ability02_Part01",
      "childAbilityList": [
        "4012020_Monster_W4_Scholar_Ability02_Camera",
        "4012020_Monster_W4_Scholar_Ability02_Part01",
        "4012020_Monster_W4_Scholar_Ability02_Part02"
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
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target"
      },
      "references": []
    },
    "4012020_Monster_W4_Scholar_Ability01_Part02": {
      "fileName": "4012020_Monster_W4_Scholar_Ability01_Part02",
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
              "displayLines": "{[Skill01[0]]}"
            },
            "MDF_DamageUpRatio": {
              "displayLines": "{[Skill01[1]]}"
            }
          },
          "casterAssign": "CasterSelf"
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "references": []
    },
    "4012020_Monster_W4_Scholar_Ability01_Part01": {
      "fileName": "4012020_Monster_W4_Scholar_Ability01_Part01",
      "childAbilityList": [
        "4012020_Monster_W4_Scholar_Ability01_Camera",
        "4012020_Monster_W4_Scholar_Ability01_Part01",
        "4012020_Monster_W4_Scholar_Ability01_Part02"
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
                "variableName": "MonsterType_W4_Scholar_00",
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
      "targetObjectData": {
        "primaryTarget": "{{Skill Point User}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Ally Target"
      },
      "references": []
    },
    "4012020_Handling": {
      "fileName": "4012020_Handling",
      "abilityType": "Handling",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Action Handling",
          "values": [
            {
              "name": "Define Handler Boolean",
              "variableName": "ForbidClearSkillUseRecord",
              "value": true
            }
          ],
          "options": [
            {
              "name": "HANDLER OPTION",
              "optionName": "UseSkill02",
              "optionGoal": {
                "name": "Sequence Event",
                "execute": [
                  {
                    "name": "Use Ability Option",
                    "skillName": "Skill02"
                  }
                ]
              },
              "scoreType": "DefaultDSE",
              "optionWeight": 0.8,
              "optionCheck": [
                {
                  "name": "Check Ability Use Value",
                  "skillName": "Skill02",
                  "firstCD": 1,
                  "regCD": 1,
                  "valueCheck": 0.1
                }
              ]
            },
            {
              "name": "HANDLER OPTION",
              "optionName": "UseSkill01",
              "optionGoal": {
                "name": "Sequence Event",
                "execute": [
                  {
                    "name": "Choose Ability Target",
                    "skillName": "Skill01",
                    "target": {
                      "name": "Create Selection List",
                      "passed": [
                        {
                          "name": "Select by Target Pool",
                          "target": {
                            "name": "Target Name",
                            "target": "{{All Team Members(Exclude Self)}}"
                          }
                        }
                      ]
                    }
                  },
                  {
                    "name": "Use Ability Option",
                    "skillName": "Skill01"
                  }
                ]
              },
              "scoreType": "DefaultDSE",
              "optionWeight": 0.9,
              "optionCheck": [
                {
                  "name": "Check Ability Use Condition",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{All Team Members(Exclude Self)}}"
                    },
                    "value1": "TeamCharacterCount",
                    "compareType": ">=",
                    "value2": 1,
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
                          "variableName": "MonsterType_W4_Scholar_00",
                          "invertCondition": true
                        }
                      ]
                    }
                  },
                  "passedValue": 0.9
                },
                {
                  "name": "Check Ability Use Value",
                  "skillName": "Skill01",
                  "firstCD": 1,
                  "regCD": 1,
                  "valueCheck": 1
                }
              ]
            }
          ]
        }
      ],
      "references": []
    }
  }
}