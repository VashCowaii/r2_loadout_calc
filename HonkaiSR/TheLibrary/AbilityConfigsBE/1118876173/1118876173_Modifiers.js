const configAbility = {
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
      "for": "Modifier_FantasticStory_BaseAbility_2160_Plus5AddOn_Servant[<span class=\"descriptionNumberColor\">Cinnabar Inscription</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "KeepOnDeathrattle"
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
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "Modifier_FantasticStory_BaseAbility_2160_Aura",
                    "invertCondition": true
                  }
                ]
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
                    "operator": "Variables[0] (DV_FantasticStory_BaseAbility_CountSum) || Variables[1] (DV_FantasticStory_PlusAbility_2165_ADF_3) || Variables[2] (DV_TargetCount) || MUL || ADD || RETURN",
                    "displayLines": "(DV_FantasticStory_BaseAbility_CountSum + (DV_FantasticStory_PlusAbility_2165_ADF_3 * DV_TargetCount))",
                    "constants": [],
                    "variables": [
                      "DV_FantasticStory_BaseAbility_CountSum",
                      "DV_FantasticStory_PlusAbility_2165_ADF_3",
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
                        "operator": "Variables[0] (DV_TargetCount) || Variables[1] (DV_FantasticStory_PlusAbility_2165_ADF_3) || MUL || RETURN",
                        "displayLines": "(DV_TargetCount * DV_FantasticStory_PlusAbility_2165_ADF_3)",
                        "constants": [],
                        "variables": [
                          "DV_TargetCount",
                          "DV_FantasticStory_PlusAbility_2165_ADF_3"
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
                        "operator": "Variables[0] (DV_TargetCount) || Variables[1] (DV_FantasticStory_PlusAbility_2165_ADF_3) || MUL || RETURN",
                        "displayLines": "(DV_TargetCount * DV_FantasticStory_PlusAbility_2165_ADF_3)",
                        "constants": [],
                        "variables": [
                          "DV_TargetCount",
                          "DV_FantasticStory_PlusAbility_2165_ADF_3"
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
      "description": "For each enemy target hit after an attack, additionally accumulates <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_2165_ADF_3</span> Grit Value for allies.",
      "type": "Buff",
      "statusName": "Cinnabar Inscription"
    },
    {
      "name": "Modifier Construction",
      "for": "Modifier_FantasticStory_BaseAbility_2160_Plus5AddOn",
      "stackType": "ReplaceByCaster",
      "stackData": [],
      "latentQueue": [
        "DV_FantasticStory_PlusAbility_2165",
        "DV_FantasticStory_PlusAbility_2162",
        "DV_FantasticStory_PlusAbility_2163",
        "DV_FantasticStory_PlusAbility_2164"
      ],
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}.[[getMemosprite]]"
          },
          "modifier": "Modifier_FantasticStory_BaseAbility_2160_Plus5AddOn_Servant[<span class=\"descriptionNumberColor\">Cinnabar Inscription</span>]",
          "haloStatus": true
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Modifier_FantasticStory_BaseAbility_2160_Plus4AddOn_ForShow[<span class=\"descriptionNumberColor\">Grit Mechanics: Torn Fabric</span>]",
      "stackType": "ReplaceByCaster",
      "description": "When a Weakness is Broken, additionally accumulates <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_2164_ADF_2</span> Grit Value for allies.",
      "type": "Debuff",
      "statusName": "Grit Mechanics: Torn Fabric"
    },
    {
      "name": "Modifier Construction",
      "for": "Modifier_FantasticStory_BaseAbility_2160_Plus4AddOn",
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
                    "modifier": "Modifier_FantasticStory_BaseAbility_2160_Aura",
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "DV_FantasticStory_BaseAbility_CountSum",
                  "value": {
                    "operator": "Variables[0] (DV_FantasticStory_BaseAbility_CountSum) || Variables[1] (DV_FantasticStory_PlusAbility_2164_ADF_2) || Variables[2] (DV_TargetCount) || MUL || ADD || RETURN",
                    "displayLines": "(DV_FantasticStory_BaseAbility_CountSum + (DV_FantasticStory_PlusAbility_2164_ADF_2 * DV_TargetCount))",
                    "constants": [],
                    "variables": [
                      "DV_FantasticStory_BaseAbility_CountSum",
                      "DV_FantasticStory_PlusAbility_2164_ADF_2",
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
                        "operator": "Variables[0] (DV_TargetCount) || Variables[1] (DV_FantasticStory_PlusAbility_2164_ADF_2) || MUL || RETURN",
                        "displayLines": "(DV_TargetCount * DV_FantasticStory_PlusAbility_2164_ADF_2)",
                        "constants": [],
                        "variables": [
                          "DV_TargetCount",
                          "DV_FantasticStory_PlusAbility_2164_ADF_2"
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
                        "operator": "Variables[0] (DV_TargetCount) || Variables[1] (DV_FantasticStory_PlusAbility_2164_ADF_2) || MUL || RETURN",
                        "displayLines": "(DV_TargetCount * DV_FantasticStory_PlusAbility_2164_ADF_2)",
                        "constants": [],
                        "variables": [
                          "DV_TargetCount",
                          "DV_FantasticStory_PlusAbility_2164_ADF_2"
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
        "DV_FantasticStory_PlusAbility_2165",
        "DV_FantasticStory_PlusAbility_2162",
        "DV_FantasticStory_PlusAbility_2163",
        "DV_FantasticStory_PlusAbility_2164"
      ],
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All(with Unselectable)}}"
          },
          "modifier": "Modifier_FantasticStory_BaseAbility_2160_Plus4AddOn_ForShow[<span class=\"descriptionNumberColor\">Grit Mechanics: Torn Fabric</span>]",
          "haloStatus": true
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Modifier_FantasticStory_BaseAbility_2160_Plus3AddOn_ForShow",
      "stackType": "ReplaceByCaster"
    },
    {
      "name": "Modifier Construction",
      "for": "Modifier_FantasticStory_BaseAbility_2160_Plus3AddOn[<span class=\"descriptionNumberColor\">Grit Mechanics: Misplacement</span>]",
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
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "Modifier_FantasticStory_BaseAbility_2160_Aura",
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "DV_FantasticStory_BaseAbility_CountSum",
                  "value": {
                    "operator": "Variables[0] (DV_FantasticStory_BaseAbility_CountSum) || Variables[1] (DV_FantasticStory_PlusAbility_2163_ADF_3) || ADD || RETURN",
                    "displayLines": "(DV_FantasticStory_BaseAbility_CountSum + DV_FantasticStory_PlusAbility_2163_ADF_3)",
                    "constants": [],
                    "variables": [
                      "DV_FantasticStory_BaseAbility_CountSum",
                      "DV_FantasticStory_PlusAbility_2163_ADF_3"
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
                        "operator": "Variables[0] (DV_FantasticStory_PlusAbility_2163_ADF_3) || RETURN",
                        "displayLines": "DV_FantasticStory_PlusAbility_2163_ADF_3",
                        "constants": [],
                        "variables": [
                          "DV_FantasticStory_PlusAbility_2163_ADF_3"
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
                        "operator": "Variables[0] (DV_FantasticStory_PlusAbility_2163_ADF_3) || RETURN",
                        "displayLines": "DV_FantasticStory_PlusAbility_2163_ADF_3",
                        "constants": [],
                        "variables": [
                          "DV_FantasticStory_PlusAbility_2163_ADF_3"
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
        "DV_FantasticStory_PlusAbility_2165",
        "DV_FantasticStory_PlusAbility_2162",
        "DV_FantasticStory_PlusAbility_2163"
      ],
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
          "modifier": "Modifier_FantasticStory_BaseAbility_2160_Plus3AddOn_ForShow",
          "haloStatus": true
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Modifier_FantasticStory_BaseAbility_2160_Plus2AddOn_ForShow",
      "stackType": "ReplaceByCaster"
    },
    {
      "name": "Modifier Construction",
      "for": "Modifier_FantasticStory_BaseAbility_2160_Plus2AddOn[<span class=\"descriptionNumberColor\">Grit Mechanics: Intertextuality</span>]",
      "stackType": "ReplaceByCaster",
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
                    "modifier": "Modifier_FantasticStory_BaseAbility_2160_Aura",
                    "invertCondition": true
                  }
                ]
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
                    "operator": "Variables[0] (DV_FantasticStory_BaseAbility_CountSum) || Variables[1] (DV_FantasticStory_PlusAbility_2162_ADF_3) || Variables[2] (DV_TargetCount) || MUL || ADD || RETURN",
                    "displayLines": "(DV_FantasticStory_BaseAbility_CountSum + (DV_FantasticStory_PlusAbility_2162_ADF_3 * DV_TargetCount))",
                    "constants": [],
                    "variables": [
                      "DV_FantasticStory_BaseAbility_CountSum",
                      "DV_FantasticStory_PlusAbility_2162_ADF_3",
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
                        "operator": "Variables[0] (DV_TargetCount) || Variables[1] (DV_FantasticStory_PlusAbility_2162_ADF_3) || MUL || RETURN",
                        "displayLines": "(DV_TargetCount * DV_FantasticStory_PlusAbility_2162_ADF_3)",
                        "constants": [],
                        "variables": [
                          "DV_TargetCount",
                          "DV_FantasticStory_PlusAbility_2162_ADF_3"
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
                        "operator": "Variables[0] (DV_TargetCount) || Variables[1] (DV_FantasticStory_PlusAbility_2162_ADF_3) || MUL || RETURN",
                        "displayLines": "(DV_TargetCount * DV_FantasticStory_PlusAbility_2162_ADF_3)",
                        "constants": [],
                        "variables": [
                          "DV_TargetCount",
                          "DV_FantasticStory_PlusAbility_2162_ADF_3"
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
        "DV_FantasticStory_PlusAbility_2165",
        "DV_FantasticStory_PlusAbility_2162"
      ],
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
          "modifier": "Modifier_FantasticStory_BaseAbility_2160_Plus2AddOn_ForShow",
          "haloStatus": true
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Modifier_FantasticStory_BaseAbility_2160_Plus5_ForShow[<span class=\"descriptionNumberColor\">Cinnabar Inscription</span>]",
      "stackType": "ReplaceByCaster",
      "stackData": [],
      "latentQueue": [
        "DV_FantasticStory_PlusAbility_2165"
      ],
      "description": "Each stack of \"Echo Enigma\" increases DMG taken by <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_2165_ADF_1</span>.",
      "type": "Debuff",
      "statusName": "Cinnabar Inscription"
    },
    {
      "name": "Modifier Construction",
      "for": "Modifier_FantasticStory_BaseAbility_2160_Plus5_Servant[<span class=\"descriptionNumberColor\">Cinnabar Inscription</span>]",
      "stackType": "Replace",
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
                  "modifier": "Modifier_FantasticStory_BaseAbility_2160_BeforeFever_DOT[<span class=\"descriptionNumberColor\">Echo Enigma</span>]",
                  "duration": {
                    "operator": "Variables[0] (DV_FantasticStory_BaseAbility_2160_BeforeFever_P4_LifeTime) || RETURN",
                    "displayLines": "DV_FantasticStory_BaseAbility_2160_BeforeFever_P4_LifeTime",
                    "constants": [],
                    "variables": [
                      "DV_FantasticStory_BaseAbility_2160_BeforeFever_P4_LifeTime"
                    ]
                  },
                  "stackLimit": {
                    "operator": "Variables[0] (DV_FantasticStory_BaseAbility_2160_BeforeFever_P3_MaxLayer) || RETURN",
                    "displayLines": "DV_FantasticStory_BaseAbility_2160_BeforeFever_P3_MaxLayer",
                    "constants": [],
                    "variables": [
                      "DV_FantasticStory_BaseAbility_2160_BeforeFever_P3_MaxLayer"
                    ]
                  },
                  "valuePerStack": {
                    "DV_FantasticStory_BaseAbility_2160_BeforeFever_P3_MaxLayer": {
                      "operator": "Variables[0] (DV_FantasticStory_BaseAbility_2160_BeforeFever_P3_MaxLayer) || RETURN",
                      "displayLines": "DV_FantasticStory_BaseAbility_2160_BeforeFever_P3_MaxLayer",
                      "constants": [],
                      "variables": [
                        "DV_FantasticStory_BaseAbility_2160_BeforeFever_P3_MaxLayer"
                      ]
                    },
                    "Modifier_FantasticStory_BaseAbility_2160_BeforeFever_DOT_DmgPercentage": {
                      "operator": "Variables[0] (DV_FantasticStory_BaseAbility_2160_BeforeFever_P5_DmgPercentage) || RETURN",
                      "displayLines": "DV_FantasticStory_BaseAbility_2160_BeforeFever_P5_DmgPercentage",
                      "constants": [],
                      "variables": [
                        "DV_FantasticStory_BaseAbility_2160_BeforeFever_P5_DmgPercentage"
                      ]
                    }
                  },
                  "addStacksPerTrigger": {
                    "operator": "Variables[0] (DV_FantasticStory_PlusAbility_2165_ADF_2) || RETURN",
                    "displayLines": "DV_FantasticStory_PlusAbility_2165_ADF_2",
                    "constants": [],
                    "variables": [
                      "DV_FantasticStory_PlusAbility_2165_ADF_2"
                    ]
                  }
                }
              ]
            }
          ]
        }
      ],
      "description": "After attacking, inflicts <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_2165_ADF_2</span> stacks of \"Echo Enigma\" on the target.",
      "type": "Buff",
      "statusName": "Cinnabar Inscription"
    },
    {
      "name": "Modifier Construction",
      "for": "Modifier_FantasticStory_BaseAbility_2160_Plus4_Sub[<span class=\"descriptionNumberColor\">Torn Fabric</span>]",
      "stackType": "ReplaceByCaster",
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
                "modifier": "Modifier_FantasticStory_BaseAbility_2160_BeforeFever_DOT[<span class=\"descriptionNumberColor\">Echo Enigma</span>]"
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
                  "modifierName": "Modifier_FantasticStory_BaseAbility_2160_BeforeFever_DOT[<span class=\"descriptionNumberColor\">Echo Enigma</span>]",
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
      ],
      "description": "When dealing DMG to targets afflicted with \"Echo Enigma,\" each stack of \"Echo Enigma\" increases Weakness Break Efficiency by <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_2164_ADF_1</span>.",
      "type": "Buff",
      "statusName": "Torn Fabric"
    },
    {
      "name": "Modifier Construction",
      "for": "Modifier_FantasticStory_BaseAbility_2160_Plus3_ForShow[<span class=\"descriptionNumberColor\">Misplacement</span>]",
      "stackType": "ReplaceByCaster",
      "description": "When entering combat and after taking an action, additionally becomes afflicted with <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_2163_ADF_2</span> stack(s) of \"Echo Enigma,\" where each stack of \"Echo Enigma\" increases DMG taken by <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_2163_ADF_1</span>.",
      "type": "Debuff",
      "statusName": "Misplacement"
    },
    {
      "name": "Modifier Construction",
      "for": "Modifier_FantasticStory_BaseAbility_2160_Plus2_Sub[<span class=\"descriptionNumberColor\">Intertextuality</span>]",
      "stackType": "ReplaceByCaster",
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
                    "modifier": "Modifier_FantasticStory_BaseAbility_2160_BeforeFever_DOT[<span class=\"descriptionNumberColor\">Echo Enigma</span>]"
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
                      "modifierName": "Modifier_FantasticStory_BaseAbility_2160_BeforeFever_DOT[<span class=\"descriptionNumberColor\">Echo Enigma</span>]",
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
      ],
      "description": "Increases Skill DMG dealt by <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_2162_ADF_1</span>. When attacking targets with \"Echo Enigma,\" each stack of \"Echo Enigma\" additionally increases Skill DMG by <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_2162_ADF_2</span>.",
      "type": "Buff",
      "statusName": "Intertextuality"
    },
    {
      "name": "Modifier Construction",
      "for": "Modifier_FantasticStory_BaseAbility_2160_Plus1_Sub_PLY[<span class=\"descriptionNumberColor\">DoT Boost</span>]",
      "stackType": "Replace",
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
      ],
      "description": "Each stack increases DoT dealt by <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_2161_ADF_2</span>.",
      "type": "Buff",
      "statusName": "DoT Boost",
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "Modifier_FantasticStory_BaseAbility_2160_Plus1_Sub_Enemy",
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
                  "modifier": "Modifier_FantasticStory_BaseAbility_2160_Plus1_Sub_PLY[<span class=\"descriptionNumberColor\">DoT Boost</span>]",
                  "stackLimit": {
                    "operator": "Variables[0] (DV_FantasticStory_PlusAbility_2161_ADF_3) || RETURN",
                    "displayLines": "DV_FantasticStory_PlusAbility_2161_ADF_3",
                    "constants": [],
                    "variables": [
                      "DV_FantasticStory_PlusAbility_2161_ADF_3"
                    ]
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
      "for": "Modifier_FantasticStory_BaseAbility_2160_Plus1_Sub[<span class=\"descriptionNumberColor\">Exposition</span>]",
      "stackType": "ReplaceByCaster",
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
      ],
      "description": "DoT dealt ignores <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_2161_ADF_1</span> of the target's All-Type RES.",
      "type": "Buff",
      "statusName": "Exposition"
    },
    {
      "name": "Modifier Construction",
      "for": "Modifier_FantasticStory_BaseAbility_2160_BaseAddOn_ForShow[<span class=\"descriptionNumberColor\">Grit Mechanics</span>]",
      "stackType": "ReplaceByCaster",
      "stackData": [
        "DV_FantasticStory_BaseAbility_2160_BaseAddOn_P1_Value"
      ],
      "latentQueue": [],
      "description": "After receiving DoT, additionally accumulates <span class=\"descriptionNumberColor\">DV_FantasticStory_BaseAbility_2160_BaseAddOn_P1_Value</span> Grit Value for allies.",
      "type": "Debuff",
      "statusName": "Grit Mechanics"
    },
    {
      "name": "Modifier Construction",
      "for": "Modifier_FantasticStory_BaseAbility_2160_BeforeFever_ForShow[<span class=\"descriptionNumberColor\">Concordant Truce</span>]",
      "stackType": "ReplaceByCaster",
      "stackData": [],
      "latentQueue": [],
      "description": "Upon entering combat, becomes afflicted with <span class=\"descriptionNumberColor\">DV_FantasticStory_BaseAbility_2160_BeforeFever_P1_EnterLayer</span> stack(s) of \"Echo Enigma.\" After taking action, becomes afflicted with <span class=\"descriptionNumberColor\">DV_FantasticStory_BaseAbility_2160_BeforeFever_P2_ActionLayer</span> stack(s) of \"Echo Enigma.\"",
      "type": "Debuff",
      "statusName": "Concordant Truce"
    },
    {
      "name": "Modifier Construction",
      "for": "Modifier_FantasticStory_BaseAbility_2160_EnterFever_Sub[<span class=\"descriptionNumberColor\">Surging Grit</span>]",
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
                "operator": "Variables[0] (DV_FantasticStory_BaseAbility_2160_EnterFever_P2_AllDamageTakenRatio) || RETURN",
                "displayLines": "DV_FantasticStory_BaseAbility_2160_EnterFever_P2_AllDamageTakenRatio",
                "constants": [],
                "variables": [
                  "DV_FantasticStory_BaseAbility_2160_EnterFever_P2_AllDamageTakenRatio"
                ]
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
                "operator": "Variables[0] (DV_FantasticStory_BaseAbility_2160_EnterFever_P3_DamageDownRatio) || RETURN",
                "displayLines": "DV_FantasticStory_BaseAbility_2160_EnterFever_P3_DamageDownRatio",
                "constants": [],
                "variables": [
                  "DV_FantasticStory_BaseAbility_2160_EnterFever_P3_DamageDownRatio"
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
                "operator": "Variables[0] (DV_FantasticStory_BaseAbility_2160_EnterFever_P4_SpeedUPRatio) || RETURN",
                "displayLines": "DV_FantasticStory_BaseAbility_2160_EnterFever_P4_SpeedUPRatio",
                "constants": [],
                "variables": [
                  "DV_FantasticStory_BaseAbility_2160_EnterFever_P4_SpeedUPRatio"
                ]
              }
            }
          ]
        }
      ],
      "description": "Increases DMG taken by <span class=\"descriptionNumberColor\">DV_FantasticStory_BaseAbility_2160_EnterFever_P2_AllDamageTakenRatio</span>, decreases DMG dealt by <span class=\"descriptionNumberColor\">DV_FantasticStory_BaseAbility_2160_EnterFever_P3_DamageDownRatio</span>, and increases SPD by <span class=\"descriptionNumberColor\">DV_FantasticStory_BaseAbility_2160_EnterFever_P4_SpeedUPRatio</span>.",
      "type": "Debuff",
      "statusName": "Surging Grit"
    },
    {
      "name": "Modifier Construction",
      "for": "Modifier_FantasticStory_BaseAbility_2160_Aura",
      "stackType": "ReplaceByCaster",
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
              "modifier": "Modifier_FantasticStory_BaseAbility_2160_Plus1_Sub_PLY[<span class=\"descriptionNumberColor\">DoT Boost</span>]"
            },
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
      "stackData": [
        "DV_FantasticStory_BaseAbility_2160_EnterFever_P2_AllDamageTakenRatio",
        "DV_FantasticStory_BaseAbility_2160_EnterFever_P3_DamageDownRatio",
        "DV_FantasticStory_BaseAbility_2160_EnterFever_P4_SpeedUPRatio"
      ],
      "latentQueue": [
        "DV_FantasticStory_BaseAbility_TriggerFlag"
      ],
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "modifier": "Modifier_FantasticStory_BaseAbility_2160_EnterFever_Sub[<span class=\"descriptionNumberColor\">Surging Grit</span>]",
          "haloStatus": true,
          "valuePerStack": {
            "DV_FantasticStory_BaseAbility_2160_EnterFever_P2_AllDamageTakenRatio": {
              "operator": "Variables[0] (DV_FantasticStory_BaseAbility_2160_EnterFever_P2_AllDamageTakenRatio) || RETURN",
              "displayLines": "DV_FantasticStory_BaseAbility_2160_EnterFever_P2_AllDamageTakenRatio",
              "constants": [],
              "variables": [
                "DV_FantasticStory_BaseAbility_2160_EnterFever_P2_AllDamageTakenRatio"
              ]
            },
            "DV_FantasticStory_BaseAbility_2160_EnterFever_P3_DamageDownRatio": {
              "operator": "Variables[0] (DV_FantasticStory_BaseAbility_2160_EnterFever_P3_DamageDownRatio) || RETURN",
              "displayLines": "DV_FantasticStory_BaseAbility_2160_EnterFever_P3_DamageDownRatio",
              "constants": [],
              "variables": [
                "DV_FantasticStory_BaseAbility_2160_EnterFever_P3_DamageDownRatio"
              ]
            },
            "DV_FantasticStory_BaseAbility_2160_EnterFever_P4_SpeedUPRatio": {
              "operator": "Variables[0] (DV_FantasticStory_BaseAbility_2160_EnterFever_P4_SpeedUPRatio) || RETURN",
              "displayLines": "DV_FantasticStory_BaseAbility_2160_EnterFever_P4_SpeedUPRatio",
              "constants": [],
              "variables": [
                "DV_FantasticStory_BaseAbility_2160_EnterFever_P4_SpeedUPRatio"
              ]
            }
          }
        },
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
          },
          "modifier": "Modifier_FantasticStory_BaseAbility_2160_Plus1_Sub[<span class=\"descriptionNumberColor\">Exposition</span>]",
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
          "modifier": "Modifier_FantasticStory_BaseAbility_2160_Plus1_Sub_Enemy",
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
          "modifier": "Modifier_FantasticStory_BaseAbility_2160_Plus2_Sub[<span class=\"descriptionNumberColor\">Intertextuality</span>]",
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
          "modifier": "Modifier_FantasticStory_BaseAbility_2160_Plus3_ForShow[<span class=\"descriptionNumberColor\">Misplacement</span>]",
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
          "modifier": "Modifier_FantasticStory_BaseAbility_2160_Plus4_Sub[<span class=\"descriptionNumberColor\">Torn Fabric</span>]",
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
          "modifier": "Modifier_FantasticStory_BaseAbility_2160_Plus5_Servant[<span class=\"descriptionNumberColor\">Cinnabar Inscription</span>]",
          "haloStatus": true,
          "conditions": {
            "name": "Compare: Variable",
            "value1": "DV_FantasticStory_PlusAbility_2165",
            "compareType": "=",
            "value2": 1
          }
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Modifier_FantasticStory_BaseAbility_2160_BeforeFever_DOT[<span class=\"descriptionNumberColor\">Echo Enigma</span>]",
      "stackType": "ReplaceByCaster",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "modifierFlags": [
        "STAT_DOT",
        "STAT_DOT_Poison"
      ],
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
          "eventTrigger": "Turn [Pre-action Phase]",
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
                  "operator": "Variables[0] (BattleEvent_BaseHP) || Variables[1] (Modifier_FantasticStory_BaseAbility_2160_BeforeFever_DOT_Layer) || MUL || Variables[2] (Modifier_FantasticStory_BaseAbility_2160_BeforeFever_DOT_DmgPercentage) || MUL || RETURN",
                  "displayLines": "((BattleEvent_BaseHP * Modifier_FantasticStory_BaseAbility_2160_BeforeFever_DOT_Layer) * Modifier_FantasticStory_BaseAbility_2160_BeforeFever_DOT_DmgPercentage)",
                  "constants": [],
                  "variables": [
                    "BattleEvent_BaseHP",
                    "Modifier_FantasticStory_BaseAbility_2160_BeforeFever_DOT_Layer",
                    "Modifier_FantasticStory_BaseAbility_2160_BeforeFever_DOT_DmgPercentage"
                  ]
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
                  "operator": "Variables[0] (BattleEvent_BaseHP) || Variables[1] (DOT_TriggerRatio) || MUL || Variables[2] (Modifier_FantasticStory_BaseAbility_2160_BeforeFever_DOT_Layer) || MUL || Variables[3] (Modifier_FantasticStory_BaseAbility_2160_BeforeFever_DOT_DmgPercentage) || MUL || RETURN",
                  "displayLines": "(((BattleEvent_BaseHP * DOT_TriggerRatio) * Modifier_FantasticStory_BaseAbility_2160_BeforeFever_DOT_Layer) * Modifier_FantasticStory_BaseAbility_2160_BeforeFever_DOT_DmgPercentage)",
                  "constants": [],
                  "variables": [
                    "BattleEvent_BaseHP",
                    "DOT_TriggerRatio",
                    "Modifier_FantasticStory_BaseAbility_2160_BeforeFever_DOT_Layer",
                    "Modifier_FantasticStory_BaseAbility_2160_BeforeFever_DOT_DmgPercentage"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "DOT"
              }
            }
          ]
        }
      ],
      "useEntitySnapshot": true,
      "stackData": [
        "DV_FantasticStory_BaseAbility_2160_BeforeFever_P3_MaxLayer",
        "Modifier_FantasticStory_BaseAbility_2160_BeforeFever_DOT_DmgPercentage"
      ],
      "latentQueue": [],
      "description": "Takes Wind DMG at the start of each turn for a certain number of turns. This effect has a limit of <span class=\"descriptionNumberColor\">DV_FantasticStory_BaseAbility_2160_BeforeFever_P3_MaxLayer</span> stack(s).",
      "type": "Debuff",
      "effectName": "Echo Enigma",
      "statusName": "Echo Enigma",
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "Modifier_FantasticStory_BaseAbility_2160_ListenBEDelay",
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
              "modifier": "Modifier_FantasticStory_BaseAbility_2160_Aura"
            }
          ]
        },
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
}