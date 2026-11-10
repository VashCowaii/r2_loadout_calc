const entityPageType = "misc"
const compositeAbilityObject = {
  "fullCharacterName": 1118876173,
  "trimCharacterName": 1118876173,
  "abilityList": [
    "1118876173_Modifiers",
    "1118876173_FantasticStory_PlusAbility_2165",
    "1118876173_FantasticStory_PlusAbility_2164",
    "1118876173_FantasticStory_PlusAbility_2163",
    "1118876173_FantasticStory_PlusAbility_2162",
    "1118876173_FantasticStory_PlusAbility_2161",
    "1118876173_FantasticStory_BaseAbility_2160_Insert",
    "1118876173_FantasticStory_BaseAbility_2160_EnterFever",
    "1118876173_FantasticStory_BaseAbility_2160_BeforeFever",
    "1118876173_FantasticStory_BaseAbility_2160_BaseAddOn",
    "1118876173_FantasticStory_BaseAbility_2160",
    "1118876173_FantasticStory_BaseAbility_2150",
    "1118876173_FantasticStory_BaseAbility_AllDarkTeam_Insert_Camera",
    "1118876173_BE_BattleEvents"
  ],
  "abilityObject": {
    "1118876173_Modifiers": {
      "fileName": "1118876173_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1360922097\">Modifier_FantasticStory_BaseAbility_2160_Plus5AddOn_Servant</a>[<span class=\"descriptionNumberColor\">Cinnabar Inscription</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "description": "For each enemy target hit after an attack, additionally accumulates <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_2165_ADF_3</span> Grit Value for allies.",
          "type": "Buff",
          "statusName": "Cinnabar Inscription",
          "execute": [
            {
              "eventTrigger": "Attack DMG End [Owner]",
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
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-898765267\">Modifier_FantasticStory_BaseAbility_2160_Aura</a>",
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Attack Targets",
                      "variableName": "DV_TargetCount",
                      "targetAttacker": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "(DV_FantasticStory_BaseAbility_CountSum + (DV_FantasticStory_PlusAbility_2165_ADF_3 * DV_TargetCount))"
                      },
                      "variableName": "DV_FantasticStory_BaseAbility_CountSum"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_BaseAbility_CountSum",
                        "compareType": ">=",
                        "value2": {
                          "displayLines": "DV_EnterFeverValue"
                        }
                      },
                      "passed": [
                        {
                          "name": "Update Surging Grit[PF]",
                          "current": 100,
                          "max": 100,
                          "delta": {
                            "displayLines": "(DV_TargetCount * DV_FantasticStory_PlusAbility_2165_ADF_3)"
                          },
                          "type": "Special",
                          "phaseType": "P1"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Update Surging Grit[PF]",
                          "current": {
                            "displayLines": "DV_FantasticStory_BaseAbility_CountSum"
                          },
                          "max": {
                            "displayLines": "DV_EnterFeverValue"
                          },
                          "delta": {
                            "displayLines": "(DV_TargetCount * DV_FantasticStory_PlusAbility_2165_ADF_3)"
                          },
                          "type": "Special"
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": 0,
                      "variableName": "DV_TargetCount"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1986033123\">Modifier_FantasticStory_BaseAbility_2160_Plus5AddOn</a>",
          "stackType": "ReplaceByCaster",
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}.[[getMemosprite]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1360922097\">Modifier_FantasticStory_BaseAbility_2160_Plus5AddOn_Servant</a>[<span class=\"descriptionNumberColor\">Cinnabar Inscription</span>]",
              "haloStatus": true
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-354244179\">Modifier_FantasticStory_BaseAbility_2160_Plus4AddOn_ForShow</a>[<span class=\"descriptionNumberColor\">Grit Mechanics: Torn Fabric</span>]",
          "stackType": "ReplaceByCaster",
          "description": "When a Weakness is Broken, additionally accumulates <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_2164_ADF_2</span> Grit Value for allies.",
          "type": "Debuff",
          "statusName": "Grit Mechanics: Torn Fabric"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1797276940\">Modifier_FantasticStory_BaseAbility_2160_Plus4AddOn</a>",
          "stackType": "ReplaceByCaster",
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All(with Unselectable)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-354244179\">Modifier_FantasticStory_BaseAbility_2160_Plus4AddOn_ForShow</a>[<span class=\"descriptionNumberColor\">Grit Mechanics: Torn Fabric</span>]",
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
                        "target1": {
                          "name": "Target Name",
                          "target": "{{Player Team All}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "value": 0,
                      "variableName": "DV_TargetCount"
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
                        "target1": {
                          "name": "Target Name",
                          "target": "{{Player Team All}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
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
                        "modifier": "<a class=\"gModGreen\" id=\"-898765267\">Modifier_FantasticStory_BaseAbility_2160_Aura</a>",
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "(DV_FantasticStory_BaseAbility_CountSum + (DV_FantasticStory_PlusAbility_2164_ADF_2 * DV_TargetCount))"
                      },
                      "variableName": "DV_FantasticStory_BaseAbility_CountSum"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_BaseAbility_CountSum",
                        "compareType": ">=",
                        "value2": {
                          "displayLines": "DV_EnterFeverValue"
                        }
                      },
                      "passed": [
                        {
                          "name": "Update Surging Grit[PF]",
                          "current": 100,
                          "max": 100,
                          "delta": {
                            "displayLines": "(DV_TargetCount * DV_FantasticStory_PlusAbility_2164_ADF_2)"
                          },
                          "type": "Special",
                          "phaseType": "P1"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Update Surging Grit[PF]",
                          "current": {
                            "displayLines": "DV_FantasticStory_BaseAbility_CountSum"
                          },
                          "max": {
                            "displayLines": "DV_EnterFeverValue"
                          },
                          "delta": {
                            "displayLines": "(DV_TargetCount * DV_FantasticStory_PlusAbility_2164_ADF_2)"
                          },
                          "type": "Special"
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": 0,
                      "variableName": "DV_TargetCount"
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
                    "target1": {
                      "name": "Target Name",
                      "target": "{{Enemy Team All}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "(DV_TargetCount + 1)"
                      },
                      "variableName": "DV_TargetCount"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Batch: Enemy Arrival",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "value": 0,
                  "variableName": "DV_TargetCount"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-490455822\">Modifier_FantasticStory_BaseAbility_2160_Plus3AddOn_ForShow</a>",
          "stackType": "ReplaceByCaster"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-273250865\">Modifier_FantasticStory_BaseAbility_2160_Plus3AddOn</a>[<span class=\"descriptionNumberColor\">Grit Mechanics: Misplacement</span>]",
          "stackType": "ReplaceByCaster",
          "description": "After being defeated, additionally accumulates <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_2163_ADF_3</span> Grit Value for allies.",
          "type": "Debuff",
          "statusName": "Grit Mechanics: Misplacement",
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-490455822\">Modifier_FantasticStory_BaseAbility_2160_Plus3AddOn_ForShow</a>",
              "haloStatus": true
            }
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
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-898765267\">Modifier_FantasticStory_BaseAbility_2160_Aura</a>",
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "(DV_FantasticStory_BaseAbility_CountSum + DV_FantasticStory_PlusAbility_2163_ADF_3)"
                      },
                      "variableName": "DV_FantasticStory_BaseAbility_CountSum"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_BaseAbility_CountSum",
                        "compareType": ">=",
                        "value2": {
                          "displayLines": "DV_EnterFeverValue"
                        }
                      },
                      "passed": [
                        {
                          "name": "Update Surging Grit[PF]",
                          "current": 100,
                          "max": 100,
                          "delta": {
                            "displayLines": "DV_FantasticStory_PlusAbility_2163_ADF_3"
                          },
                          "type": "Special",
                          "phaseType": "P1"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Update Surging Grit[PF]",
                          "current": {
                            "displayLines": "DV_FantasticStory_BaseAbility_CountSum"
                          },
                          "max": {
                            "displayLines": "DV_EnterFeverValue"
                          },
                          "delta": {
                            "displayLines": "DV_FantasticStory_PlusAbility_2163_ADF_3"
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
          "for": "<a class=\"gModGreen\" id=\"mod__1386471387\">Modifier_FantasticStory_BaseAbility_2160_Plus2AddOn_ForShow</a>",
          "stackType": "ReplaceByCaster"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__596697214\">Modifier_FantasticStory_BaseAbility_2160_Plus2AddOn</a>[<span class=\"descriptionNumberColor\">Grit Mechanics: Intertextuality</span>]",
          "stackType": "ReplaceByCaster",
          "description": "For each enemy target hit with Skill, additionally accumulates <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_2162_ADF_3</span> Grit Value for allies.",
          "type": "Buff",
          "statusName": "Grit Mechanics: Intertextuality",
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All(with Unselectable)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1386471387\">Modifier_FantasticStory_BaseAbility_2160_Plus2AddOn_ForShow</a>",
              "haloStatus": true
            }
          ],
          "execute": [
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Skill Type",
                        "skillType": "Skill"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-898765267\">Modifier_FantasticStory_BaseAbility_2160_Aura</a>",
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Attack Targets",
                      "variableName": "DV_TargetCount",
                      "targetAttacker": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "(DV_FantasticStory_BaseAbility_CountSum + (DV_FantasticStory_PlusAbility_2162_ADF_3 * DV_TargetCount))"
                      },
                      "variableName": "DV_FantasticStory_BaseAbility_CountSum"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_BaseAbility_CountSum",
                        "compareType": ">=",
                        "value2": {
                          "displayLines": "DV_EnterFeverValue"
                        }
                      },
                      "passed": [
                        {
                          "name": "Update Surging Grit[PF]",
                          "current": 100,
                          "max": 100,
                          "delta": {
                            "displayLines": "(DV_TargetCount * DV_FantasticStory_PlusAbility_2162_ADF_3)"
                          },
                          "type": "Special",
                          "phaseType": "P1"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Update Surging Grit[PF]",
                          "current": {
                            "displayLines": "DV_FantasticStory_BaseAbility_CountSum"
                          },
                          "max": {
                            "displayLines": "DV_EnterFeverValue"
                          },
                          "delta": {
                            "displayLines": "(DV_TargetCount * DV_FantasticStory_PlusAbility_2162_ADF_3)"
                          },
                          "type": "Special"
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": 0,
                      "variableName": "DV_TargetCount"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1172490940\">Modifier_FantasticStory_BaseAbility_2160_Plus5_ForShow</a>[<span class=\"descriptionNumberColor\">Cinnabar Inscription</span>]",
          "stackType": "ReplaceByCaster",
          "description": "Each stack of \"Echo Enigma\" increases DMG taken by <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_2165_ADF_1</span>.",
          "type": "Debuff",
          "statusName": "Cinnabar Inscription"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1127959511\">Modifier_FantasticStory_BaseAbility_2160_Plus5_Servant</a>[<span class=\"descriptionNumberColor\">Cinnabar Inscription</span>]",
          "stackType": "Replace",
          "description": "After attacking, inflicts <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_2165_ADF_2</span> stacks of \"Echo Enigma\" on the target.",
          "type": "Buff",
          "statusName": "Cinnabar Inscription",
          "execute": [
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Attack Targets of Modifier Holder}}"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1010904189\">Modifier_FantasticStory_BaseAbility_2160_BeforeFever_DOT</a>[<span class=\"descriptionNumberColor\">Echo Enigma</span>]",
                      "duration": {
                        "displayLines": "DV_FantasticStory_BaseAbility_2160_BeforeFever_P4_LifeTime"
                      },
                      "stackLimit": {
                        "displayLines": "DV_FantasticStory_BaseAbility_2160_BeforeFever_P3_MaxLayer"
                      },
                      "valuePerStack": {
                        "DV_FantasticStory_BaseAbility_2160_BeforeFever_P3_MaxLayer": {
                          "displayLines": "DV_FantasticStory_BaseAbility_2160_BeforeFever_P3_MaxLayer"
                        },
                        "Modifier_FantasticStory_BaseAbility_2160_BeforeFever_DOT_DmgPercentage": {
                          "displayLines": "DV_FantasticStory_BaseAbility_2160_BeforeFever_P5_DmgPercentage"
                        }
                      },
                      "addStacksPerTrigger": {
                        "displayLines": "DV_FantasticStory_PlusAbility_2165_ADF_2"
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
          "for": "<a class=\"gModGreen\" id=\"mod__2135566331\">Modifier_FantasticStory_BaseAbility_2160_Plus4_Sub</a>[<span class=\"descriptionNumberColor\">Torn Fabric</span>]",
          "stackType": "ReplaceByCaster",
          "description": "When dealing DMG to targets afflicted with \"Echo Enigma,\" each stack of \"Echo Enigma\" increases Weakness Break Efficiency by <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_2164_ADF_1</span>.",
          "type": "Buff",
          "statusName": "Torn Fabric",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1010904189\">Modifier_FantasticStory_BaseAbility_2160_BeforeFever_DOT</a>[<span class=\"descriptionNumberColor\">Echo Enigma</span>]"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Modifier Values",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "valueType": "Layer",
                      "variableName": "MDF_Layer",
                      "modifierName": "<a class=\"gModGreen\" id=\"1010904189\">Modifier_FantasticStory_BaseAbility_2160_BeforeFever_DOT</a>[<span class=\"descriptionNumberColor\">Echo Enigma</span>]",
                      "multiplier": 1
                    },
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakEfficiency</span>&nbsp;",
                          "value": "(DV_FantasticStory_PlusAbility_2164_ADF_1 * MDF_Layer)"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-187538002\">Modifier_FantasticStory_BaseAbility_2160_Plus3_ForShow</a>[<span class=\"descriptionNumberColor\">Misplacement</span>]",
          "stackType": "ReplaceByCaster",
          "description": "When entering combat and after taking an action, additionally becomes afflicted with <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_2163_ADF_2</span> stack(s) of \"Echo Enigma,\" where each stack of \"Echo Enigma\" increases DMG taken by <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_2163_ADF_1</span>.",
          "type": "Debuff",
          "statusName": "Misplacement"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1668876339\">Modifier_FantasticStory_BaseAbility_2160_Plus2_Sub</a>[<span class=\"descriptionNumberColor\">Intertextuality</span>]",
          "stackType": "ReplaceByCaster",
          "description": "Increases Skill DMG dealt by <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_2162_ADF_1</span>. When attacking targets with \"Echo Enigma,\" each stack of \"Echo Enigma\" additionally increases Skill DMG by <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_2162_ADF_2</span>.",
          "type": "Buff",
          "statusName": "Intertextuality",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Skill"
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1010904189\">Modifier_FantasticStory_BaseAbility_2160_BeforeFever_DOT</a>[<span class=\"descriptionNumberColor\">Echo Enigma</span>]"
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable with Modifier Values",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "valueType": "Layer",
                          "variableName": "DOT_Layer",
                          "modifierName": "<a class=\"gModGreen\" id=\"1010904189\">Modifier_FantasticStory_BaseAbility_2160_BeforeFever_DOT</a>[<span class=\"descriptionNumberColor\">Echo Enigma</span>]",
                          "multiplier": 1
                        },
                        {
                          "name": "Adjust Target Stats",
                          "modifiedValuesArray": [
                            {
                              "on": "Attacker",
                              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                              "value": "(DV_FantasticStory_PlusAbility_2162_ADF_1 + (DOT_Layer * DV_FantasticStory_PlusAbility_2162_ADF_2))"
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "Adjust Target Stats",
                          "modifiedValuesArray": [
                            {
                              "on": "Attacker",
                              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                              "value": "DV_FantasticStory_PlusAbility_2162_ADF_1"
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
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-397579384\">Modifier_FantasticStory_BaseAbility_2160_Plus1_Sub_PLY</a>[<span class=\"descriptionNumberColor\">DoT Boost</span>]",
          "stackType": "Replace",
          "description": "Each stack increases DoT dealt by <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_2161_ADF_2</span>.",
          "type": "Buff",
          "statusName": "DoT Boost",
          "addStacksPerTrigger": 1,
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "DOT"
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Modifier Values",
                      "valueType": "Layer",
                      "variableName": "MDF_Layer",
                      "multiplier": 1
                    },
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                          "value": "(MDF_Layer * DV_FantasticStory_PlusAbility_2161_ADF_2)"
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
          "for": "<a class=\"gModGreen\" id=\"mod__1037601571\">Modifier_FantasticStory_BaseAbility_2160_Plus1_Sub_Enemy</a>",
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
                      "DOT"
                    ],
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
                        "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-397579384\">Modifier_FantasticStory_BaseAbility_2160_Plus1_Sub_PLY</a>[<span class=\"descriptionNumberColor\">DoT Boost</span>]",
                      "stackLimit": {
                        "displayLines": "DV_FantasticStory_PlusAbility_2161_ADF_3"
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
          "for": "<a class=\"gModGreen\" id=\"mod__871276272\">Modifier_FantasticStory_BaseAbility_2160_Plus1_Sub</a>[<span class=\"descriptionNumberColor\">Exposition</span>]",
          "stackType": "ReplaceByCaster",
          "description": "DoT dealt ignores <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_2161_ADF_1</span> of the target's All-Type RES.",
          "type": "Buff",
          "statusName": "Exposition",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
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
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceAll</span>&nbsp;",
                          "value": "(-1 * DV_FantasticStory_PlusAbility_2161_ADF_1)"
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
          "for": "<a class=\"gModGreen\" id=\"mod__1418148626\">Modifier_FantasticStory_BaseAbility_2160_BaseAddOn_ForShow</a>[<span class=\"descriptionNumberColor\">Grit Mechanics</span>]",
          "stackType": "ReplaceByCaster",
          "description": "After receiving DoT, additionally accumulates <span class=\"descriptionNumberColor\">DV_FantasticStory_BaseAbility_2160_BaseAddOn_P1_Value</span> Grit Value for allies.",
          "type": "Debuff",
          "statusName": "Grit Mechanics"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1710887068\">Modifier_FantasticStory_BaseAbility_2160_BeforeFever_ForShow</a>[<span class=\"descriptionNumberColor\">Concordant Truce</span>]",
          "stackType": "ReplaceByCaster",
          "description": "Upon entering combat, becomes afflicted with <span class=\"descriptionNumberColor\">DV_FantasticStory_BaseAbility_2160_BeforeFever_P1_EnterLayer</span> stack(s) of \"Echo Enigma.\" After taking action, becomes afflicted with <span class=\"descriptionNumberColor\">DV_FantasticStory_BaseAbility_2160_BeforeFever_P2_ActionLayer</span> stack(s) of \"Echo Enigma.\"",
          "type": "Debuff",
          "statusName": "Concordant Truce"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__297114355\">Modifier_FantasticStory_BaseAbility_2160_EnterFever_Sub</a>[<span class=\"descriptionNumberColor\">Surging Grit</span>]",
          "stackType": "ReplaceByCaster",
          "description": "Increases DMG taken by <span class=\"descriptionNumberColor\">DV_FantasticStory_BaseAbility_2160_EnterFever_P2_AllDamageTakenRatio</span>, decreases DMG dealt by <span class=\"descriptionNumberColor\">DV_FantasticStory_BaseAbility_2160_EnterFever_P3_DamageDownRatio</span>, and increases SPD by <span class=\"descriptionNumberColor\">DV_FantasticStory_BaseAbility_2160_EnterFever_P4_SpeedUPRatio</span>.",
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
                    "displayLines": "DV_FantasticStory_BaseAbility_2160_EnterFever_P2_AllDamageTakenRatio"
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">Weaken%</span>&nbsp;",
                  "value": {
                    "displayLines": "DV_FantasticStory_BaseAbility_2160_EnterFever_P3_DamageDownRatio"
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
                    "displayLines": "DV_FantasticStory_BaseAbility_2160_EnterFever_P4_SpeedUPRatio"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-898765267\">Modifier_FantasticStory_BaseAbility_2160_Aura</a>",
          "stackType": "ReplaceByCaster",
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"297114355\">Modifier_FantasticStory_BaseAbility_2160_EnterFever_Sub</a>[<span class=\"descriptionNumberColor\">Surging Grit</span>]",
              "haloStatus": true,
              "valuePerStack": {
                "DV_FantasticStory_BaseAbility_2160_EnterFever_P2_AllDamageTakenRatio": {
                  "displayLines": "DV_FantasticStory_BaseAbility_2160_EnterFever_P2_AllDamageTakenRatio"
                },
                "DV_FantasticStory_BaseAbility_2160_EnterFever_P3_DamageDownRatio": {
                  "displayLines": "DV_FantasticStory_BaseAbility_2160_EnterFever_P3_DamageDownRatio"
                },
                "DV_FantasticStory_BaseAbility_2160_EnterFever_P4_SpeedUPRatio": {
                  "displayLines": "DV_FantasticStory_BaseAbility_2160_EnterFever_P4_SpeedUPRatio"
                }
              }
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"871276272\">Modifier_FantasticStory_BaseAbility_2160_Plus1_Sub</a>[<span class=\"descriptionNumberColor\">Exposition</span>]",
              "haloStatus": true,
              "conditions": {
                "name": "Compare: Variable",
                "value1": "DV_FantasticStory_PlusAbility_2161",
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
              "modifier": "<a class=\"gModGreen\" id=\"1037601571\">Modifier_FantasticStory_BaseAbility_2160_Plus1_Sub_Enemy</a>",
              "haloStatus": true,
              "conditions": {
                "name": "Compare: Variable",
                "value1": "DV_FantasticStory_PlusAbility_2161",
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
              "modifier": "<a class=\"gModGreen\" id=\"-1668876339\">Modifier_FantasticStory_BaseAbility_2160_Plus2_Sub</a>[<span class=\"descriptionNumberColor\">Intertextuality</span>]",
              "haloStatus": true,
              "conditions": {
                "name": "Compare: Variable",
                "value1": "DV_FantasticStory_PlusAbility_2162",
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
              "modifier": "<a class=\"gModGreen\" id=\"-187538002\">Modifier_FantasticStory_BaseAbility_2160_Plus3_ForShow</a>[<span class=\"descriptionNumberColor\">Misplacement</span>]",
              "haloStatus": true,
              "conditions": {
                "name": "Compare: Variable",
                "value1": "DV_FantasticStory_PlusAbility_2163",
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
              "modifier": "<a class=\"gModGreen\" id=\"2135566331\">Modifier_FantasticStory_BaseAbility_2160_Plus4_Sub</a>[<span class=\"descriptionNumberColor\">Torn Fabric</span>]",
              "haloStatus": true,
              "conditions": {
                "name": "Compare: Variable",
                "value1": "DV_FantasticStory_PlusAbility_2164",
                "compareType": "=",
                "value2": 1
              }
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}.[[getMemosprite]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1127959511\">Modifier_FantasticStory_BaseAbility_2160_Plus5_Servant</a>[<span class=\"descriptionNumberColor\">Cinnabar Inscription</span>]",
              "haloStatus": true,
              "conditions": {
                "name": "Compare: Variable",
                "value1": "DV_FantasticStory_PlusAbility_2165",
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
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-397579384\">Modifier_FantasticStory_BaseAbility_2160_Plus1_Sub_PLY</a>[<span class=\"descriptionNumberColor\">DoT Boost</span>]"
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "DV_FantasticStory_BaseAbility_CountSumTemp"
                  },
                  "variableName": "DV_FantasticStory_BaseAbility_CountSum"
                },
                {
                  "name": "Update Surging Grit[PF]",
                  "current": {
                    "displayLines": "DV_FantasticStory_BaseAbility_CountSum"
                  },
                  "max": {
                    "displayLines": "DV_EnterFeverValue"
                  },
                  "delta": {
                    "displayLines": "DV_FantasticStory_BaseAbility_CountSum"
                  },
                  "type": "FeverBack"
                },
                {
                  "name": "Define Custom Variable",
                  "value": 0,
                  "variableName": "DV_FantasticStory_BaseAbility_CountSumTemp"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1010904189\">Modifier_FantasticStory_BaseAbility_2160_BeforeFever_DOT</a>[<span class=\"descriptionNumberColor\">Echo Enigma</span>]",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "modifierFlags": [
            "STAT_DOT",
            "STAT_DOT_Poison"
          ],
          "useEntitySnapshot": true,
          "stackData": [
            "DV_FantasticStory_BaseAbility_2160_BeforeFever_P3_MaxLayer",
            "Modifier_FantasticStory_BaseAbility_2160_BeforeFever_DOT_DmgPercentage"
          ],
          "description": "Takes Wind DMG at the start of each turn for a certain number of turns. This effect has a limit of <span class=\"descriptionNumberColor\">DV_FantasticStory_BaseAbility_2160_BeforeFever_P3_MaxLayer</span> stack(s).",
          "type": "Debuff",
          "effectName": "Echo Enigma",
          "statusName": "Echo Enigma",
          "addStacksPerTrigger": 1,
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent%</span>&nbsp;",
                  "variableName": "BattleEvent_BaseHP"
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(BattleEvent_BaseHP * 90)"
                  },
                  "variableName": "BattleEvent_BaseHP"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Level Entity}}"
                    },
                    "value1": "DV_FantasticStory_PlusAbility_2163",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Copy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "variable": "DV_FantasticStory_PlusAbility_2163_ADF_1",
                      "target2": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variable2": "DV_FantasticStory_PlusAbility_2163_ADF_1"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Level Entity}}"
                    },
                    "value1": "DV_FantasticStory_PlusAbility_2165",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Copy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "variable": "DV_FantasticStory_PlusAbility_2165_ADF_1",
                      "target2": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variable2": "DV_FantasticStory_PlusAbility_2165_ADF_1"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Turn [Owner]: Pre-action Phase",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueType": "Layer",
                  "variableName": "Modifier_FantasticStory_BaseAbility_2160_BeforeFever_DOT_Layer",
                  "multiplier": 1
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
                      "displayLines": "((BattleEvent_BaseHP * Modifier_FantasticStory_BaseAbility_2160_BeforeFever_DOT_Layer) * Modifier_FantasticStory_BaseAbility_2160_BeforeFever_DOT_DmgPercentage)"
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "DOT"
                  }
                }
              ]
            },
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Level Entity}}"
                    },
                    "value1": "DV_FantasticStory_PlusAbility_2163",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Copy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "variable": "DV_FantasticStory_PlusAbility_2163_ADF_1",
                      "target2": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variable2": "DV_FantasticStory_PlusAbility_2163_ADF_1"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Level Entity}}"
                    },
                    "value1": "DV_FantasticStory_PlusAbility_2165",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Copy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "variable": "DV_FantasticStory_PlusAbility_2165_ADF_1",
                      "target2": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variable2": "DV_FantasticStory_PlusAbility_2165_ADF_1"
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
                    "value1": "DV_FantasticStory_PlusAbility_2163_ADF_1",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Modifier Values",
                      "valueType": "Layer",
                      "variableName": "MDF_Layer",
                      "multiplier": 1
                    },
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Defender",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                          "value": "(MDF_Layer * DV_FantasticStory_PlusAbility_2163_ADF_1)"
                        }
                      ]
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
                    "value1": "DV_FantasticStory_PlusAbility_2165_ADF_1",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Modifier Values",
                      "valueType": "Layer",
                      "variableName": "MDF_Layer",
                      "multiplier": 1
                    },
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Defender",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                          "value": "(MDF_Layer * DV_FantasticStory_PlusAbility_2165_ADF_1)"
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
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueType": "Layer",
                  "variableName": "Modifier_FantasticStory_BaseAbility_2160_BeforeFever_DOT_Layer",
                  "multiplier": 1
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
                      "displayLines": "(((BattleEvent_BaseHP * DOT_TriggerRatio) * Modifier_FantasticStory_BaseAbility_2160_BeforeFever_DOT_Layer) * Modifier_FantasticStory_BaseAbility_2160_BeforeFever_DOT_DmgPercentage)"
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "DOT"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1851952501\">Modifier_FantasticStory_BaseAbility_2160_ListenBEDelay</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-898765267\">Modifier_FantasticStory_BaseAbility_2160_Aura</a>"
                }
              ]
            },
            {
              "eventTrigger": "AV Forcibly Changed [Global]",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "variableName": "DV_CurrentDelay",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">ActionDelay</span>&nbsp;"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "DV_FantasticStory_BaseAbility_CountSumTemp",
                    "compareType": ">=",
                    "value2": {
                      "displayLines": "DV_FantasticStory_BaseAbility_CountSumTempMax"
                    }
                  },
                  "passed": [
                    {
                      "name": "Update Surging Grit[PF]",
                      "current": {
                        "displayLines": "(DV_CurrentDelay * 10)"
                      },
                      "max": 100,
                      "extra": {
                        "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>(DV_FantasticStory_BaseAbility_CountSumTemp)"
                      },
                      "phaseType": "P1",
                      "reachedLimit": true
                    }
                  ],
                  "failed": [
                    {
                      "name": "Update Surging Grit[PF]",
                      "current": {
                        "displayLines": "(DV_CurrentDelay * 10)"
                      },
                      "max": 100,
                      "extra": {
                        "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>(DV_FantasticStory_BaseAbility_CountSumTemp)"
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
    "1118876173_FantasticStory_PlusAbility_2165": {
      "fileName": "1118876173_FantasticStory_PlusAbility_2165",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Define Custom Variable",
          "value": 1,
          "variableName": "DV_FantasticStory_PlusAbility_2165"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_PlusAbility_2165_ADF_1",
          "resetValue": {
            "displayLines": "#ADF_1"
          },
          "scope": "ContextCaster"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_PlusAbility_2165_ADF_2",
          "resetValue": {
            "displayLines": "#ADF_2"
          },
          "scope": "ContextCaster"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_PlusAbility_2165_ADF_3",
          "resetValue": {
            "displayLines": "#ADF_3"
          },
          "scope": "ContextCaster"
        }
      ],
      "references": []
    },
    "1118876173_FantasticStory_PlusAbility_2164": {
      "fileName": "1118876173_FantasticStory_PlusAbility_2164",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Define Custom Variable",
          "value": 1,
          "variableName": "DV_FantasticStory_PlusAbility_2164"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_PlusAbility_2164_ADF_1",
          "resetValue": {
            "displayLines": "#ADF_1"
          },
          "scope": "ContextCaster"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_PlusAbility_2164_ADF_2",
          "resetValue": {
            "displayLines": "#ADF_2"
          },
          "scope": "ContextCaster"
        }
      ],
      "references": []
    },
    "1118876173_FantasticStory_PlusAbility_2163": {
      "fileName": "1118876173_FantasticStory_PlusAbility_2163",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Define Custom Variable",
          "value": 1,
          "variableName": "DV_FantasticStory_PlusAbility_2163"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_PlusAbility_2163_ADF_1",
          "resetValue": {
            "displayLines": "#ADF_1"
          },
          "scope": "ContextCaster"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_PlusAbility_2163_ADF_2",
          "resetValue": {
            "displayLines": "#ADF_2"
          },
          "scope": "ContextCaster"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_PlusAbility_2163_ADF_3",
          "resetValue": {
            "displayLines": "#ADF_3"
          },
          "scope": "ContextCaster"
        }
      ],
      "references": []
    },
    "1118876173_FantasticStory_PlusAbility_2162": {
      "fileName": "1118876173_FantasticStory_PlusAbility_2162",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Define Custom Variable",
          "value": 1,
          "variableName": "DV_FantasticStory_PlusAbility_2162"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_PlusAbility_2162_ADF_1",
          "resetValue": {
            "displayLines": "#ADF_1"
          },
          "scope": "ContextCaster"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_PlusAbility_2162_ADF_2",
          "resetValue": {
            "displayLines": "#ADF_2"
          },
          "scope": "ContextCaster"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_PlusAbility_2162_ADF_3",
          "resetValue": {
            "displayLines": "#ADF_3"
          },
          "scope": "ContextCaster"
        }
      ],
      "references": []
    },
    "1118876173_FantasticStory_PlusAbility_2161": {
      "fileName": "1118876173_FantasticStory_PlusAbility_2161",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Define Custom Variable",
          "value": 1,
          "variableName": "DV_FantasticStory_PlusAbility_2161"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_PlusAbility_2161_ADF_1",
          "resetValue": {
            "displayLines": "#ADF_1"
          },
          "scope": "ContextCaster"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_PlusAbility_2161_ADF_2",
          "resetValue": {
            "displayLines": "#ADF_2"
          },
          "scope": "ContextCaster"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_PlusAbility_2161_ADF_3",
          "resetValue": {
            "displayLines": "#ADF_3"
          },
          "scope": "ContextCaster"
        }
      ],
      "references": []
    },
    "1118876173_FantasticStory_BaseAbility_2160_Insert": {
      "fileName": "1118876173_FantasticStory_BaseAbility_2160_Insert",
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
                  "displayLines": "DV_FeverBESpeed"
                }
              },
              "whenCreated": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1851952501\">Modifier_FantasticStory_BaseAbility_2160_ListenBEDelay</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "value": 0,
          "variableName": "DV_FantasticStory_BaseAbility_TriggerFlag"
        },
        "Deleted bullshit",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1010904189\">Modifier_FantasticStory_BaseAbility_2160_BeforeFever_DOT</a>[<span class=\"descriptionNumberColor\">Echo Enigma</span>]",
          "duration": {
            "displayLines": "DV_FantasticStory_BaseAbility_2160_BeforeFever_P4_LifeTime"
          },
          "stackLimit": {
            "displayLines": "DV_FantasticStory_BaseAbility_2160_BeforeFever_P3_MaxLayer"
          },
          "valuePerStack": {
            "DV_FantasticStory_BaseAbility_2160_BeforeFever_P3_MaxLayer": {
              "displayLines": "DV_FantasticStory_BaseAbility_2160_BeforeFever_P3_MaxLayer"
            },
            "Modifier_FantasticStory_BaseAbility_2160_BeforeFever_DOT_DmgPercentage": {
              "displayLines": "DV_FantasticStory_BaseAbility_2160_BeforeFever_P5_DmgPercentage"
            }
          },
          "addStacksPerTrigger": {
            "displayLines": "DV_FantasticStory_BaseAbility_2160_EnterFever_P5_EnterFeverLayer"
          }
        },
        {
          "name": "Trigger Modifier Event",
          "target": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "variableName": "DOT_TriggerRatio",
          "eventType": "DOT",
          "value": {
            "displayLines": "DV_FantasticStory_BaseAbility_2160_EnterFever_P1_DotTriggerRatio"
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-898765267\">Modifier_FantasticStory_BaseAbility_2160_Aura</a>",
          "valuePerStack": {
            "DV_FantasticStory_BaseAbility_2160_EnterFever_P2_AllDamageTakenRatio": {
              "displayLines": "DV_FantasticStory_BaseAbility_2160_EnterFever_P2_AllDamageTakenRatio"
            },
            "DV_FantasticStory_BaseAbility_2160_EnterFever_P3_DamageDownRatio": {
              "displayLines": "DV_FantasticStory_BaseAbility_2160_EnterFever_P3_DamageDownRatio"
            },
            "DV_FantasticStory_BaseAbility_2160_EnterFever_P4_SpeedUPRatio": {
              "displayLines": "DV_FantasticStory_BaseAbility_2160_EnterFever_P4_SpeedUPRatio"
            }
          }
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "0"
          },
          "variableName": "DV_FantasticStory_BaseAbility_CountSum"
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "1118876173_FantasticStory_BaseAbility_2160_EnterFever": {
      "fileName": "1118876173_FantasticStory_BaseAbility_2160_EnterFever",
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
          "variableName": "DV_FantasticStory_BaseAbility_2160_EnterFever_P1_DotTriggerRatio",
          "resetValue": {
            "displayLines": "ADF_1_Get"
          },
          "scope": "ContextCaster"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_BaseAbility_2160_EnterFever_P2_AllDamageTakenRatio",
          "resetValue": {
            "displayLines": "ADF_2_Get"
          },
          "scope": "ContextCaster"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_BaseAbility_2160_EnterFever_P3_DamageDownRatio",
          "resetValue": {
            "displayLines": "ADF_3_Get"
          },
          "scope": "ContextCaster"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_BaseAbility_2160_EnterFever_P4_SpeedUPRatio",
          "resetValue": {
            "displayLines": "ADF_4_Get"
          },
          "scope": "ContextCaster"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_BaseAbility_2160_EnterFever_P5_EnterFeverLayer",
          "resetValue": {
            "displayLines": "ADF_5_Get"
          },
          "scope": "ContextCaster"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"29425370\">Modifier_FantasticStory_BaseAbility_2160_EnterFever</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__29425370\">Modifier_FantasticStory_BaseAbility_2160_EnterFever</a>",
          "stackType": "ReplaceByCaster"
        }
      ]
    },
    "1118876173_FantasticStory_BaseAbility_2160_BeforeFever": {
      "fileName": "1118876173_FantasticStory_BaseAbility_2160_BeforeFever",
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
          "variableName": "DV_FantasticStory_BaseAbility_2160_BeforeFever_P1_EnterLayer",
          "resetValue": {
            "displayLines": "ADF_1_Get"
          },
          "scope": "ContextCaster"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_BaseAbility_2160_BeforeFever_P2_ActionLayer",
          "resetValue": {
            "displayLines": "ADF_2_Get"
          },
          "scope": "ContextCaster"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_BaseAbility_2160_BeforeFever_P3_MaxLayer",
          "resetValue": {
            "displayLines": "ADF_3_Get"
          },
          "scope": "ContextCaster"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_BaseAbility_2160_BeforeFever_P4_LifeTime",
          "resetValue": {
            "displayLines": "ADF_4_Get"
          },
          "scope": "ContextCaster"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_BaseAbility_2160_BeforeFever_P5_DmgPercentage",
          "resetValue": {
            "displayLines": "ADF_5_Get"
          },
          "scope": "ContextCaster"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"660002093\">Modifier_FantasticStory_BaseAbility_2160_BeforeFever</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__660002093\">Modifier_FantasticStory_BaseAbility_2160_BeforeFever</a>",
          "stackType": "ReplaceByCaster",
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1710887068\">Modifier_FantasticStory_BaseAbility_2160_BeforeFever_ForShow</a>[<span class=\"descriptionNumberColor\">Concordant Truce</span>]",
              "haloStatus": true
            }
          ],
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
                        "name": "Target is Unselectable",
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
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-898765267\">Modifier_FantasticStory_BaseAbility_2160_Aura</a>"
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "DV_FantasticStory_PlusAbility_2163_ADF_2",
                            "compareType": ">",
                            "value2": 0,
                            "contextScope": "TargetEntity"
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
                          "modifier": "<a class=\"gModGreen\" id=\"1010904189\">Modifier_FantasticStory_BaseAbility_2160_BeforeFever_DOT</a>[<span class=\"descriptionNumberColor\">Echo Enigma</span>]",
                          "duration": {
                            "displayLines": "DV_FantasticStory_BaseAbility_2160_BeforeFever_P4_LifeTime"
                          },
                          "stackLimit": {
                            "displayLines": "DV_FantasticStory_BaseAbility_2160_BeforeFever_P3_MaxLayer"
                          },
                          "valuePerStack": {
                            "DV_FantasticStory_BaseAbility_2160_BeforeFever_P3_MaxLayer": {
                              "displayLines": "DV_FantasticStory_BaseAbility_2160_BeforeFever_P3_MaxLayer"
                            },
                            "Modifier_FantasticStory_BaseAbility_2160_BeforeFever_DOT_DmgPercentage": {
                              "displayLines": "DV_FantasticStory_BaseAbility_2160_BeforeFever_P5_DmgPercentage"
                            }
                          },
                          "addStacksPerTrigger": {
                            "displayLines": "(DV_FantasticStory_BaseAbility_2160_BeforeFever_P1_EnterLayer + DV_FantasticStory_PlusAbility_2163_ADF_2)"
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
                          "modifier": "<a class=\"gModGreen\" id=\"1010904189\">Modifier_FantasticStory_BaseAbility_2160_BeforeFever_DOT</a>[<span class=\"descriptionNumberColor\">Echo Enigma</span>]",
                          "duration": {
                            "displayLines": "DV_FantasticStory_BaseAbility_2160_BeforeFever_P4_LifeTime"
                          },
                          "stackLimit": {
                            "displayLines": "DV_FantasticStory_BaseAbility_2160_BeforeFever_P3_MaxLayer"
                          },
                          "valuePerStack": {
                            "DV_FantasticStory_BaseAbility_2160_BeforeFever_P3_MaxLayer": {
                              "displayLines": "DV_FantasticStory_BaseAbility_2160_BeforeFever_P3_MaxLayer"
                            },
                            "Modifier_FantasticStory_BaseAbility_2160_BeforeFever_DOT_DmgPercentage": {
                              "displayLines": "DV_FantasticStory_BaseAbility_2160_BeforeFever_P5_DmgPercentage"
                            }
                          },
                          "addStacksPerTrigger": {
                            "displayLines": "DV_FantasticStory_BaseAbility_2160_BeforeFever_P1_EnterLayer"
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Action Completed [Anyone]",
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
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-898765267\">Modifier_FantasticStory_BaseAbility_2160_Aura</a>"
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "DV_FantasticStory_PlusAbility_2163_ADF_2",
                            "compareType": ">",
                            "value2": 0,
                            "contextScope": "TargetEntity"
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
                          "modifier": "<a class=\"gModGreen\" id=\"1010904189\">Modifier_FantasticStory_BaseAbility_2160_BeforeFever_DOT</a>[<span class=\"descriptionNumberColor\">Echo Enigma</span>]",
                          "duration": {
                            "displayLines": "DV_FantasticStory_BaseAbility_2160_BeforeFever_P4_LifeTime"
                          },
                          "stackLimit": {
                            "displayLines": "DV_FantasticStory_BaseAbility_2160_BeforeFever_P3_MaxLayer"
                          },
                          "valuePerStack": {
                            "DV_FantasticStory_BaseAbility_2160_BeforeFever_P3_MaxLayer": {
                              "displayLines": "DV_FantasticStory_BaseAbility_2160_BeforeFever_P3_MaxLayer"
                            },
                            "Modifier_FantasticStory_BaseAbility_2160_BeforeFever_DOT_DmgPercentage": {
                              "displayLines": "DV_FantasticStory_BaseAbility_2160_BeforeFever_P5_DmgPercentage"
                            }
                          },
                          "addStacksPerTrigger": {
                            "displayLines": "(DV_FantasticStory_BaseAbility_2160_BeforeFever_P2_ActionLayer + DV_FantasticStory_PlusAbility_2163_ADF_2)"
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
                          "modifier": "<a class=\"gModGreen\" id=\"1010904189\">Modifier_FantasticStory_BaseAbility_2160_BeforeFever_DOT</a>[<span class=\"descriptionNumberColor\">Echo Enigma</span>]",
                          "duration": {
                            "displayLines": "DV_FantasticStory_BaseAbility_2160_BeforeFever_P4_LifeTime"
                          },
                          "stackLimit": {
                            "displayLines": "DV_FantasticStory_BaseAbility_2160_BeforeFever_P3_MaxLayer"
                          },
                          "valuePerStack": {
                            "DV_FantasticStory_BaseAbility_2160_BeforeFever_P3_MaxLayer": {
                              "displayLines": "DV_FantasticStory_BaseAbility_2160_BeforeFever_P3_MaxLayer"
                            },
                            "Modifier_FantasticStory_BaseAbility_2160_BeforeFever_DOT_DmgPercentage": {
                              "displayLines": "DV_FantasticStory_BaseAbility_2160_BeforeFever_P5_DmgPercentage"
                            }
                          },
                          "addStacksPerTrigger": {
                            "displayLines": "DV_FantasticStory_BaseAbility_2160_BeforeFever_P2_ActionLayer"
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
    "1118876173_FantasticStory_BaseAbility_2160_BaseAddOn": {
      "fileName": "1118876173_FantasticStory_BaseAbility_2160_BaseAddOn",
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
          "variableName": "DV_FantasticStory_BaseAbility_2160_BaseAddOn_P1_Value",
          "resetValue": {
            "displayLines": "ADF_1_Get"
          },
          "scope": "ContextCaster"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1465238703\">Modifier_FantasticStory_BaseAbility_2160_BaseAddOn</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1465238703\">Modifier_FantasticStory_BaseAbility_2160_BaseAddOn</a>",
          "stackType": "ReplaceByCaster",
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1418148626\">Modifier_FantasticStory_BaseAbility_2160_BaseAddOn_ForShow</a>[<span class=\"descriptionNumberColor\">Grit Mechanics</span>]",
              "haloStatus": true,
              "valuePerStack": {
                "DV_FantasticStory_BaseAbility_2160_BaseAddOn_P1_Value": {
                  "displayLines": "DV_FantasticStory_BaseAbility_2160_BaseAddOn_P1_Value"
                }
              }
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
                        "modifier": "<a class=\"gModGreen\" id=\"-898765267\">Modifier_FantasticStory_BaseAbility_2160_Aura</a>",
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Attack Targets",
                      "variableName": "DV_TargetCount",
                      "targetAttacker": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "(DV_FantasticStory_BaseAbility_CountSum + DV_FantasticStory_BaseAbility_2160_BaseAddOn_P1_Value)"
                      },
                      "variableName": "DV_FantasticStory_BaseAbility_CountSum"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_BaseAbility_CountSum",
                        "compareType": ">=",
                        "value2": {
                          "displayLines": "DV_EnterFeverValue"
                        }
                      },
                      "passed": [
                        {
                          "name": "Update Surging Grit[PF]",
                          "current": 100,
                          "max": 100,
                          "delta": {
                            "displayLines": "DV_FantasticStory_BaseAbility_2160_BaseAddOn_P1_Value"
                          },
                          "type": "FeverSpecial",
                          "phaseType": "P1"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Update Surging Grit[PF]",
                          "current": {
                            "displayLines": "DV_FantasticStory_BaseAbility_CountSum"
                          },
                          "max": {
                            "displayLines": "DV_EnterFeverValue"
                          },
                          "delta": {
                            "displayLines": "DV_FantasticStory_BaseAbility_2160_BaseAddOn_P1_Value"
                          },
                          "type": "FeverSpecial"
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
    "1118876173_FantasticStory_BaseAbility_2160": {
      "fileName": "1118876173_FantasticStory_BaseAbility_2160",
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
          "variableName": "DV_FantasticStory_BaseAbility_CountSum",
          "scope": "ContextCaster"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_BaseAbility_CountSumTemp",
          "scope": "ContextCaster"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_EnterFeverValue",
          "resetValue": {
            "displayLines": "ADF_1_Get"
          },
          "scope": "ContextCaster"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_BeforeFeverEliteDmgRatio",
          "resetValue": {
            "displayLines": "ADF_3_Get"
          },
          "scope": "ContextCaster"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_BeforeFeverKillChargeRatio",
          "resetValue": {
            "displayLines": "ADF_4_Get"
          },
          "scope": "ContextCaster"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FeverKillReturnRatio",
          "resetValue": {
            "displayLines": "ADF_5_Get"
          },
          "scope": "ContextCaster"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FeverBESpeed",
          "resetValue": {
            "displayLines": "ADF_6_Get"
          },
          "scope": "ContextCaster"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_BaseAbility_CountSumTempMax",
          "resetValue": {
            "displayLines": "(ADF_1_Get * ADF_2_Get)"
          },
          "scope": "ContextCaster"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_PlusAbility_2161",
          "scope": "ContextCaster"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_PlusAbility_2162",
          "scope": "ContextCaster"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_PlusAbility_2163",
          "scope": "ContextCaster"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_PlusAbility_2164",
          "scope": "ContextCaster"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_PlusAbility_2165",
          "scope": "ContextCaster"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "BattleEvent_BaseHP",
          "scope": "ContextCaster"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DV_FantasticStory_BaseAbility_TriggerFlag",
          "scope": "ContextCaster"
        },
        {
          "name": "Update Surging Grit[PF]",
          "max": {
            "displayLines": "DV_EnterFeverValue"
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"535245381\">Modifier_FantasticStory_BaseAbility_2160</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1718410596\">Modifier_FantasticStory_BaseAbility_2160_sub</a>",
          "stackType": "ReplaceByCaster",
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1172490940\">Modifier_FantasticStory_BaseAbility_2160_Plus5_ForShow</a>[<span class=\"descriptionNumberColor\">Cinnabar Inscription</span>]",
              "haloStatus": true,
              "conditions": {
                "name": "Compare: Variable",
                "value1": "DV_FantasticStory_PlusAbility_2165",
                "compareType": "=",
                "value2": 1
              }
            }
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Ability",
                  "abilityName": "FantasticStory_BaseAbility_AllDarkTeam_Insert_Camera"
                },
                {
                  "name": "Add Ability",
                  "abilityName": "FantasticStory_BaseAbility_2160_Insert"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "DV_FantasticStory_PlusAbility_2162",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"596697214\">Modifier_FantasticStory_BaseAbility_2160_Plus2AddOn</a>[<span class=\"descriptionNumberColor\">Grit Mechanics: Intertextuality</span>]"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "DV_FantasticStory_PlusAbility_2163",
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
                      "modifier": "<a class=\"gModGreen\" id=\"-273250865\">Modifier_FantasticStory_BaseAbility_2160_Plus3AddOn</a>[<span class=\"descriptionNumberColor\">Grit Mechanics: Misplacement</span>]"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "DV_FantasticStory_PlusAbility_2164",
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
                      "modifier": "<a class=\"gModGreen\" id=\"-1797276940\">Modifier_FantasticStory_BaseAbility_2160_Plus4AddOn</a>"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "DV_FantasticStory_PlusAbility_2165",
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
                      "modifier": "<a class=\"gModGreen\" id=\"-1986033123\">Modifier_FantasticStory_BaseAbility_2160_Plus5AddOn</a>"
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
                        "team": "Enemy Team"
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
                        "target": "{{Enemy Team All}}"
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
                          "abilityName": "FantasticStory_BaseAbility_2160_Insert",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "priorityTag": "CharacterAttackFromSelf",
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
                        "includeUnselectable": true
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
                        "target": "{{Enemy Team All}}"
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
                          "abilityName": "FantasticStory_BaseAbility_2160_Insert",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "priorityTag": "CharacterAttackFromSelf",
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
              "eventTrigger": "Batch: Enemy Arrival",
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
                        "includeUnselectable": true
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
                        "target": "{{Enemy Team All}}"
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
                          "abilityName": "FantasticStory_BaseAbility_2160_Insert",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "priorityTag": "CharacterAttackFromSelf",
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
              "scope": "ContextOwner",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": {
                    "displayLines": "DV_EnterFeverValue"
                  },
                  "maxValue": 1000000000,
                  "includeMaxValueInRange": true,
                  "enteringRange": [
                    {
                      "name": "Define Custom Variable",
                      "value": 1,
                      "variableName": "DV_FantasticStory_BaseAbility_TriggerFlag"
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
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
                          "abilityName": "FantasticStory_BaseAbility_2160_Insert",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "priorityTag": "CharacterAttackFromSelf",
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
          "for": "<a class=\"gModGreen\" id=\"mod__535245381\">Modifier_FantasticStory_BaseAbility_2160</a>",
          "stackType": "ReplaceByCaster",
          "latentQueue": [
            "DV_FantasticStory_PlusAbility_2161",
            "DV_FantasticStory_PlusAbility_2162",
            "DV_FantasticStory_PlusAbility_2163",
            "DV_FantasticStory_PlusAbility_2164",
            "DV_FantasticStory_PlusAbility_2165",
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
                                "modifier": "<a class=\"gModGreen\" id=\"-898765267\">Modifier_FantasticStory_BaseAbility_2160_Aura</a>"
                              },
                              "passed": [
                                {
                                  "name": "Define Custom Variable with Stat",
                                  "variableName": "DV_Delay",
                                  "readTarget": {
                                    "name": "Target Sequence",
                                    "TargetList": [
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
                                          "modifier": "<a class=\"gModGreen\" id=\"-1851952501\">Modifier_FantasticStory_BaseAbility_2160_ListenBEDelay</a>"
                                        }
                                      }
                                    ]
                                  },
                                  "value": "&nbsp;<span class=\"descriptionNumberColor\">ActionDelay</span>&nbsp;"
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "value": {
                                    "displayLines": "(DV_FantasticStory_BaseAbility_CountSumTemp + (DV_EnterFeverValue * DV_BeforeFeverKillChargeRatio))"
                                  },
                                  "variableName": "DV_FantasticStory_BaseAbility_CountSumTemp"
                                },
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Compare: Variable",
                                    "value1": "DV_FantasticStory_BaseAbility_CountSumTemp",
                                    "compareType": ">=",
                                    "value2": {
                                      "displayLines": "DV_FantasticStory_BaseAbility_CountSumTempMax"
                                    }
                                  },
                                  "passed": [
                                    {
                                      "name": "Define Custom Variable",
                                      "value": {
                                        "displayLines": "DV_FantasticStory_BaseAbility_CountSumTempMax"
                                      },
                                      "variableName": "DV_FantasticStory_BaseAbility_CountSumTemp"
                                    },
                                    {
                                      "name": "Update Surging Grit[PF]",
                                      "current": {
                                        "displayLines": "(DV_Delay * 10)"
                                      },
                                      "max": 100,
                                      "extra": {
                                        "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>(DV_FantasticStory_BaseAbility_CountSumTemp)"
                                      },
                                      "phaseType": "P1",
                                      "reachedLimit": true
                                    }
                                  ],
                                  "failed": [
                                    {
                                      "name": "Update Surging Grit[PF]",
                                      "current": {
                                        "displayLines": "(DV_Delay * 10)"
                                      },
                                      "max": 100,
                                      "extra": {
                                        "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>(DV_FantasticStory_BaseAbility_CountSumTemp)"
                                      },
                                      "phaseType": "P1"
                                    }
                                  ]
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Define Custom Variable",
                                  "value": {
                                    "displayLines": "(DV_FantasticStory_BaseAbility_CountSum + (DV_EnterFeverValue * DV_FeverKillReturnRatio))"
                                  },
                                  "variableName": "DV_FantasticStory_BaseAbility_CountSum"
                                },
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Compare: Variable",
                                    "value1": "DV_FantasticStory_BaseAbility_CountSum",
                                    "compareType": ">=",
                                    "value2": {
                                      "displayLines": "DV_EnterFeverValue"
                                    }
                                  },
                                  "passed": [
                                    {
                                      "name": "Update Surging Grit[PF]",
                                      "current": 100,
                                      "max": 100,
                                      "delta": {
                                        "displayLines": "(DV_EnterFeverValue * DV_FeverKillReturnRatio)"
                                      },
                                      "type": "Normal",
                                      "phaseType": "P1"
                                    }
                                  ],
                                  "failed": [
                                    {
                                      "name": "Update Surging Grit[PF]",
                                      "current": {
                                        "displayLines": "DV_FantasticStory_BaseAbility_CountSum"
                                      },
                                      "max": {
                                        "displayLines": "DV_EnterFeverValue"
                                      },
                                      "delta": {
                                        "displayLines": "(DV_EnterFeverValue * DV_FeverKillReturnRatio)"
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
                                  "variableName": "DV_maxHP",
                                  "readTarget": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
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
                                      "displayLines": "(DV_maxHP * DV_BeforeFeverEliteDmgRatio)"
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
                                      "variableName": "DV_maxHP",
                                      "readTarget": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
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
                                          "displayLines": "((DV_maxHP / 20) + 0.0009999999)"
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
              "priorityLevel": -90,
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1718410596\">Modifier_FantasticStory_BaseAbility_2160_sub</a>"
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
                      "show": true
                    }
                  ]
                }
              ]
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
            "DV_FantasticStory_PlusAbility_2165",
            "DV_FantasticStory_PlusAbility_2164",
            "DV_FantasticStory_PlusAbility_2163",
            "DV_FantasticStory_PlusAbility_2162",
            "DV_FantasticStory_PlusAbility_2161"
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
    "1118876173_FantasticStory_BaseAbility_2150": {
      "fileName": "1118876173_FantasticStory_BaseAbility_2150",
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
              "value": 2
            },
            {
              "name": "ADF_8",
              "value": 1
            },
            {
              "name": "ADF_9",
              "value": 1
            },
            {
              "name": "ADF_10",
              "value": 10
            },
            {
              "name": "ADF_11",
              "value": 3
            },
            {
              "name": "ADF_12",
              "value": 0.6
            },
            {
              "name": "ADF_13",
              "value": 1
            },
            {
              "name": "ADF_14",
              "value": 0.5
            },
            {
              "name": "ADF_15",
              "value": 0.35
            },
            {
              "name": "ADF_16",
              "value": 0.5
            },
            {
              "name": "ADF_17",
              "value": 5
            }
          ]
        },
        {
          "name": "Add Ability",
          "abilityName": "FantasticStory_BaseAbility_2160",
          "parameters": {
            "ADF_1_Get": {
              "displayLines": "ADF_1"
            },
            "ADF_2_Get": {
              "displayLines": "ADF_2"
            },
            "ADF_3_Get": {
              "displayLines": "ADF_3"
            },
            "ADF_4_Get": {
              "displayLines": "ADF_4"
            },
            "ADF_5_Get": {
              "displayLines": "ADF_5"
            },
            "ADF_6_Get": {
              "displayLines": "ADF_6"
            }
          }
        },
        {
          "name": "Add Ability",
          "abilityName": "FantasticStory_BaseAbility_2160_BaseAddOn",
          "parameters": {
            "ADF_1_Get": {
              "displayLines": "ADF_7"
            }
          }
        },
        {
          "name": "Add Ability",
          "abilityName": "FantasticStory_BaseAbility_2160_BeforeFever",
          "parameters": {
            "ADF_1_Get": {
              "displayLines": "ADF_8"
            },
            "ADF_2_Get": {
              "displayLines": "ADF_9"
            },
            "ADF_3_Get": {
              "displayLines": "ADF_10"
            },
            "ADF_4_Get": {
              "displayLines": "ADF_11"
            },
            "ADF_5_Get": {
              "displayLines": "ADF_12"
            }
          }
        },
        {
          "name": "Add Ability",
          "abilityName": "FantasticStory_BaseAbility_2160_EnterFever",
          "parameters": {
            "ADF_1_Get": {
              "displayLines": "ADF_13"
            },
            "ADF_2_Get": {
              "displayLines": "ADF_14"
            },
            "ADF_3_Get": {
              "displayLines": "ADF_15"
            },
            "ADF_4_Get": {
              "displayLines": "ADF_16"
            },
            "ADF_5_Get": {
              "displayLines": "ADF_17"
            }
          }
        }
      ],
      "references": []
    },
    "1118876173_FantasticStory_BaseAbility_AllDarkTeam_Insert_Camera": {
      "fileName": "1118876173_FantasticStory_BaseAbility_AllDarkTeam_Insert_Camera",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "1118876173_BE_BattleEvents": {
      "fileName": "1118876173_BE_BattleEvents",
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
          "beID": 30501,
          "team": "Player Team",
          "eventType": "Assist",
          "barType": 3,
          "icon": "ChallengeStory_Fever.png",
          "abilityList": [
            "BattleEvent_FantasticStory_BaseAbility_Standard"
          ],
          "statOverrides": [
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;",
              "value": 100
            }
          ],
          "hardLevel": true
        }
      ],
      "references": []
    }
  }
}