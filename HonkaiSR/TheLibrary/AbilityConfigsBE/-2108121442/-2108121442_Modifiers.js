const configAbility = {
  "fileName": "-2108121442_Modifiers",
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
      "for": "MDF_NoScore",
      "modifierFlags": [
        "KeepOnDeathrattle"
      ],
      "stackData": [],
      "latentQueue": [
        "DV_FantasticStory_BaseAbility_2010_TriggerFlag",
        "DV_FantasticStory_PlusAbility_2018",
        "DV_FantasticStory_PlusAbility_2017",
        "DV_FantasticStory_PlusAbility_2016",
        "DV_FantasticStory_PlusAbility_2015",
        "DV_FantasticStory_PlusAbility_2014",
        "DV_FantasticStory_PlusAbility_2013",
        "DV_FantasticStory_PlusAbility_2012",
        "DV_FantasticStory_PlusAbility_2011"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Modifier_FantasticStory_BaseAbility_2010_Plus8AddOn_ForShow[<span class=\"descriptionNumberColor\">Grit Mechanics_Ravings</span>]",
      "stackType": "ReplaceByCaster",
      "description": "After attacking enemy targets, every enemy target who has their Weakness Broken additionally accumulates <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_2018_ADF_3</span> Grit Value.",
      "type": "Buff",
      "statusName": "Grit Mechanics_Ravings"
    },
    {
      "name": "Modifier Construction",
      "for": "Modifier_FantasticStory_BaseAbility_2010_Plus8AddOn",
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
                    "modifier": "Modifier_FantasticStory_BaseAbility_2010_aura",
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
                        "operator": "Variables[0] (DV_TargetCount) || Variables[1] (DV_FantasticStory_PlusAbility_2018_ADF_3) || MUL || RETURN",
                        "displayLines": "(DV_TargetCount * DV_FantasticStory_PlusAbility_2018_ADF_3)",
                        "constants": [],
                        "variables": [
                          "DV_TargetCount",
                          "DV_FantasticStory_PlusAbility_2018_ADF_3"
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
      ],
      "stackData": [],
      "latentQueue": [
        "DV_FantasticStory_PlusAbility_2011",
        "DV_FantasticStory_PlusAbility_2012",
        "DV_FantasticStory_PlusAbility_2013",
        "DV_FantasticStory_PlusAbility_2014",
        "DV_FantasticStory_PlusAbility_2015",
        "DV_FantasticStory_PlusAbility_2016",
        "DV_FantasticStory_PlusAbility_2018"
      ],
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
          },
          "modifier": "Modifier_FantasticStory_BaseAbility_2010_Plus8AddOn_ForShow[<span class=\"descriptionNumberColor\">Grit Mechanics_Ravings</span>]",
          "haloStatus": true
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Modifier_FantasticStory_BaseAbility_2010_Plus6AddOn_ForShow[<span class=\"descriptionNumberColor\">Grit Mechanics: Euphony</span>]",
      "stackType": "ReplaceByCaster",
      "description": "After receiving DoT, additionally accumulates <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_2016_ADF_3</span> Grit Value for allies.",
      "type": "Debuff",
      "statusName": "Grit Mechanics: Euphony"
    },
    {
      "name": "Modifier Construction",
      "for": "Modifier_FantasticStory_BaseAbility_2010_Plus6AddOn",
      "stackType": "ReplaceByCaster",
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
                    "modifier": "Modifier_FantasticStory_BaseAbility_2010_aura",
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
                        "operator": "Variables[0] (DV_FantasticStory_PlusAbility_2016_ADF_3) || RETURN",
                        "displayLines": "DV_FantasticStory_PlusAbility_2016_ADF_3",
                        "constants": [],
                        "variables": [
                          "DV_FantasticStory_PlusAbility_2016_ADF_3"
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
        "DV_FantasticStory_PlusAbility_2011",
        "DV_FantasticStory_PlusAbility_2012",
        "DV_FantasticStory_PlusAbility_2013",
        "DV_FantasticStory_PlusAbility_2014",
        "DV_FantasticStory_PlusAbility_2015",
        "DV_FantasticStory_PlusAbility_2016"
      ],
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "modifier": "Modifier_FantasticStory_BaseAbility_2010_Plus6AddOn_ForShow[<span class=\"descriptionNumberColor\">Grit Mechanics: Euphony</span>]",
          "haloStatus": true
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Modifier_FantasticStory_BaseAbility_2010_Plus5AddOn[<span class=\"descriptionNumberColor\">Grit Mechanics: Ballad</span>]",
      "stackType": "ReplaceByCaster",
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
                "modifier": "Modifier_FantasticStory_BaseAbility_2010_aura",
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
                        "operator": "Variables[0] (DV_FantasticStory_PlusAbility_2015_ADF_3) || Variables[1] (DV_TargetCount) || MUL || RETURN",
                        "displayLines": "(DV_FantasticStory_PlusAbility_2015_ADF_3 * DV_TargetCount)",
                        "constants": [],
                        "variables": [
                          "DV_FantasticStory_PlusAbility_2015_ADF_3",
                          "DV_TargetCount"
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
        "DV_FantasticStory_PlusAbility_2011",
        "DV_FantasticStory_PlusAbility_2012",
        "DV_FantasticStory_PlusAbility_2013",
        "DV_FantasticStory_PlusAbility_2014",
        "DV_FantasticStory_PlusAbility_2015",
        "DV_FantasticStory_PlusAbility_2016",
        "DV_FantasticStory_PlusAbility_2018"
      ],
      "description": "For each enemy target hit after an attack, additionally accumulates <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_2015_ADF_3</span> Grit Value for allies.",
      "type": "Buff",
      "statusName": "Grit Mechanics: Ballad"
    },
    {
      "name": "Modifier Construction",
      "for": "Modifier_FantasticStory_BaseAbility_2010_Plus4AddOn_ForShow[<span class=\"descriptionNumberColor\">Grit Mechanics: Hierophany</span>]",
      "stackType": "ReplaceByCaster",
      "description": "When receiving an attack or losing HP, allies will additionally accumulate <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_2014_ADF_3</span> Grit Value.",
      "type": "Buff",
      "statusName": "Grit Mechanics: Hierophany"
    },
    {
      "name": "Modifier Construction",
      "for": "Modifier_FantasticStory_BaseAbility_2010_Plus4AddOn",
      "stackType": "ReplaceByCaster",
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
                    "modifier": "Modifier_FantasticStory_BaseAbility_2010_aura",
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
                        "operator": "Variables[0] (DV_FantasticStory_PlusAbility_2014_ADF_3) || RETURN",
                        "displayLines": "DV_FantasticStory_PlusAbility_2014_ADF_3",
                        "constants": [],
                        "variables": [
                          "DV_FantasticStory_PlusAbility_2014_ADF_3"
                        ]
                      },
                      "type": "Special"
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
                "modifier": "Modifier_FantasticStory_BaseAbility_2010_aura",
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
                        "operator": "Variables[0] (DV_FantasticStory_PlusAbility_2014_ADF_3) || RETURN",
                        "displayLines": "DV_FantasticStory_PlusAbility_2014_ADF_3",
                        "constants": [],
                        "variables": [
                          "DV_FantasticStory_PlusAbility_2014_ADF_3"
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
        "DV_FantasticStory_PlusAbility_2011",
        "DV_FantasticStory_PlusAbility_2012",
        "DV_FantasticStory_PlusAbility_2013",
        "DV_FantasticStory_PlusAbility_2014"
      ],
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "modifier": "Modifier_FantasticStory_BaseAbility_2010_Plus4AddOn_ForShow[<span class=\"descriptionNumberColor\">Grit Mechanics: Hierophany</span>]",
          "haloStatus": true
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Modifier_FantasticStory_BaseAbility_2010_Plus3AddOn_ForShow[<span class=\"descriptionNumberColor\">Grit Mechanics: Hollow Hope</span>]",
      "stackType": "ReplaceByCaster",
      "description": "After attacking enemy targets, every enemy target who has their Weakness Broken additionally accumulates <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_2013_ADF_3</span> Grit Value.",
      "type": "Buff",
      "statusName": "Grit Mechanics: Hollow Hope"
    },
    {
      "name": "Modifier Construction",
      "for": "Modifier_FantasticStory_BaseAbility_2010_Plus3AddOn",
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
                    "modifier": "Modifier_FantasticStory_BaseAbility_2010_aura",
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
                        "operator": "Variables[0] (DV_TargetCount) || Variables[1] (DV_FantasticStory_PlusAbility_2013_ADF_3) || MUL || RETURN",
                        "displayLines": "(DV_TargetCount * DV_FantasticStory_PlusAbility_2013_ADF_3)",
                        "constants": [],
                        "variables": [
                          "DV_TargetCount",
                          "DV_FantasticStory_PlusAbility_2013_ADF_3"
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
      ],
      "stackData": [],
      "latentQueue": [
        "DV_FantasticStory_PlusAbility_2011",
        "DV_FantasticStory_PlusAbility_2012",
        "DV_FantasticStory_PlusAbility_2013"
      ],
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
          },
          "modifier": "Modifier_FantasticStory_BaseAbility_2010_Plus3AddOn_ForShow[<span class=\"descriptionNumberColor\">Grit Mechanics: Hollow Hope</span>]",
          "haloStatus": true
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Modifier_FantasticStory_BaseAbility_2010_Plus2AddOn_ForShow[<span class=\"descriptionNumberColor\">Grit Mechanics: False Promises</span>]",
      "stackType": "ReplaceByCaster",
      "description": "After launching a Follow-Up ATK, every enemy target attacked additionally accumulates <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_2012_ADF_3</span> Grit Value.",
      "type": "Buff",
      "statusName": "Grit Mechanics: False Promises"
    },
    {
      "name": "Modifier Construction",
      "for": "Modifier_FantasticStory_BaseAbility_2010_Plus2AddOn",
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
                    "modifier": "Modifier_FantasticStory_BaseAbility_2010_aura",
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
                        "operator": "Variables[0] (DV_TargetCount) || Variables[1] (DV_FantasticStory_PlusAbility_2012_ADF_3) || MUL || RETURN",
                        "displayLines": "(DV_TargetCount * DV_FantasticStory_PlusAbility_2012_ADF_3)",
                        "constants": [],
                        "variables": [
                          "DV_TargetCount",
                          "DV_FantasticStory_PlusAbility_2012_ADF_3"
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
        "DV_FantasticStory_PlusAbility_2011",
        "DV_FantasticStory_PlusAbility_2012"
      ],
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
          },
          "modifier": "Modifier_FantasticStory_BaseAbility_2010_Plus2AddOn_ForShow[<span class=\"descriptionNumberColor\">Grit Mechanics: False Promises</span>]",
          "haloStatus": true
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Modifier_FantasticStory_BaseAbility_2010_Plus1AddOn_ForShow[<span class=\"descriptionNumberColor\">Grit Mechanics: Empty Air</span>]",
      "stackType": "ReplaceByCaster",
      "description": "After using Ultimate to attack enemy targets, every enemy target attacked additionally accumulates <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_2011_ADF_4</span> Grit Value.",
      "type": "Buff",
      "statusName": "Grit Mechanics: Empty Air"
    },
    {
      "name": "Modifier Construction",
      "for": "Modifier_FantasticStory_BaseAbility_2010_Plus1AddOn",
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
                    "name": "Skill Type",
                    "skillType": "Ultimate"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "Modifier_FantasticStory_BaseAbility_2010_aura",
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
                        "operator": "Variables[0] (DV_TargetCount) || Variables[1] (DV_FantasticStory_PlusAbility_2011_ADF_4) || MUL || RETURN",
                        "displayLines": "(DV_TargetCount * DV_FantasticStory_PlusAbility_2011_ADF_4)",
                        "constants": [],
                        "variables": [
                          "DV_TargetCount",
                          "DV_FantasticStory_PlusAbility_2011_ADF_4"
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
        "DV_FantasticStory_PlusAbility_2011"
      ],
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
          },
          "modifier": "Modifier_FantasticStory_BaseAbility_2010_Plus1AddOn_ForShow[<span class=\"descriptionNumberColor\">Grit Mechanics: Empty Air</span>]",
          "haloStatus": true
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Modifier_FantasticStory_BaseAbility_2010_plus8_sub[<span class=\"descriptionNumberColor\">Ravings</span>]",
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
                      "value": "DV_FantasticStory_PlusAbility_2018_ADF_2"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "description": "Increases Break DMG taken by <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_2018_ADF_2</span>.",
      "type": "Debuff",
      "statusName": "Ravings"
    },
    {
      "name": "Modifier Construction",
      "for": "Modifier_FantasticStory_BaseAbility_2010_Plus7_Sub_Enemy",
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
                    "Damage": {
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
      "for": "Modifier_FantasticStory_BaseAbility_2010_Plus7_Sub",
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
                    "modifier": "Modifier_FantasticStory_BaseAbility_2010_Plus7_Sub_Enemy"
                  },
                  "passed": [
                    {
                      "name": "Define Modifier-Specific Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifierName": "Modifier_FantasticStory_BaseAbility_2010_Plus7_Sub_Enemy",
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
                      "modifier": "Modifier_FantasticStory_BaseAbility_2010_Plus7_Sub_Enemy",
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
              "modifier": "Modifier_FantasticStory_BaseAbility_2010_Plus7_Sub_Enemy"
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
              "modifier": "Modifier_FantasticStory_BaseAbility_2010_Plus7_Sub_Enemy"
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Modifier_FantasticStory_BaseAbility_2010_Plus6_Sub[<span class=\"descriptionNumberColor\">Euphony</span>]",
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
      ],
      "description": "Increases DoT taken by <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_2016_ADF_2</span>.",
      "type": "Debuff",
      "statusName": "Euphony"
    },
    {
      "name": "Modifier Construction",
      "for": "Modifier_FantasticStory_BaseAbility_2010_Plus5_Sub[<span class=\"descriptionNumberColor\">Ballad</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "KeepOnDeathrattle"
      ],
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
                    "modifier": "Modifier_FantasticStory_BaseAbility_2010_aura"
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
      ],
      "description": "Increases DMG by <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_2015_ADF_1</span>, and memomaster's action advances by <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_2015_ADF_2</span> when it disappears.",
      "type": "Buff",
      "statusName": "Ballad"
    },
    {
      "name": "Modifier Construction",
      "for": "Modifier_FantasticStory_BaseAbility_2010_plus4_sub[<span class=\"descriptionNumberColor\">Hierophany</span>]",
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
      ],
      "description": "Using Skill consumes HP equal to <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_2014_ADF_1</span> of this unit's Max HP. Additionally, after using Skill, restores HP equal to <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_2014_ADF_2</span> of this unit's Max HP.",
      "type": "Buff",
      "statusName": "Hierophany"
    },
    {
      "name": "Modifier Construction",
      "for": "Modifier_FantasticStory_BaseAbility_2010_plus3_sub2",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Caused Weakness Break [Owner]",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "ReduceActionDelay",
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
      ],
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
      }
    },
    {
      "name": "Modifier Construction",
      "for": "Modifier_FantasticStory_BaseAbility_2010_plus3_sub[<span class=\"descriptionNumberColor\">Hollow Hope</span>]",
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
                      "value": "DV_FantasticStory_PlusAbility_2013_ADF_1"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "description": "Break DMG taken increases by <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_2013_ADF_1</span>. When Weakness is Broken, the attacker's action advances by <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_2013_ADF_2</span>.",
      "type": "Debuff",
      "statusName": "Hollow Hope"
    },
    {
      "name": "Modifier Construction",
      "for": "Modifier_FantasticStory_BaseAbility_2010_plus2_sub[<span class=\"descriptionNumberColor\">False Promises</span>]",
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
                        "Damage": {
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
                        "Damage": {
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
      ],
      "description": "Follow-Up ATK DMG dealt increases by <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_2012_ADF_1</span>. After launching a Follow-Up ATK, deals a set amount of DMG to every attacked enemy target and adjacent target.",
      "type": "Buff",
      "statusName": "False Promises"
    },
    {
      "name": "Modifier Construction",
      "for": "Modifier_FantasticStory_BaseAbility_2010_plus1_sub2[<span class=\"descriptionNumberColor\">Feverish Surge</span>]",
      "stackType": "ReplaceByCaster",
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
      ],
      "description": "Skill and Ultimate DMG dealt increase by <span class=\"descriptionNumberColor\">_BP_Dmgup_Ratio</span> and SPD increases by <span class=\"descriptionNumberColor\">_Speedup_Ratio</span>.",
      "type": "Buff",
      "statusName": "Feverish Surge"
    },
    {
      "name": "Modifier Construction",
      "for": "Modifier_FantasticStory_BaseAbility_2010_plus1_sub[<span class=\"descriptionNumberColor\">Empty Air</span>]",
      "stackType": "ReplaceByCaster",
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
              "modifier": "Modifier_FantasticStory_BaseAbility_2010_plus1_sub2[<span class=\"descriptionNumberColor\">Feverish Surge</span>]"
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
                  "modifierName": "Modifier_FantasticStory_BaseAbility_2010_plus1_sub2[<span class=\"descriptionNumberColor\">Feverish Surge</span>]",
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
                      "modifier": "Modifier_FantasticStory_BaseAbility_2010_plus1_sub2[<span class=\"descriptionNumberColor\">Feverish Surge</span>]",
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
      ],
      "description": "Using Skill does not consume Skill Points.",
      "type": "Buff",
      "statusName": "Empty Air"
    },
    {
      "name": "Modifier Construction",
      "for": "Modifier_FantasticStory_BaseAbility_2010_BaseAddOn_ForShow[<span class=\"descriptionNumberColor\">Grit Mechanics</span>]",
      "stackType": "ReplaceByCaster",
      "stackData": [
        "DV_Ratio"
      ],
      "latentQueue": [],
      "description": "After using Skill to attack enemy targets, every enemy target attacked additionally accumulates <span class=\"descriptionNumberColor\">DV_Ratio</span> Grit Value.",
      "type": "Buff",
      "statusName": "Grit Mechanics"
    },
    {
      "name": "Modifier Construction",
      "for": "Modifier_FantasticStory_BaseAbility_2010_EnterFever_ForShow[<span class=\"descriptionNumberColor\">Surging Grit</span>]",
      "stackType": "ReplaceByCaster",
      "stackData": [],
      "latentQueue": [],
      "description": "After using Skill to attack an enemy target, deals a set amount of DMG to the targets adjacent to the attacked target.",
      "type": "Buff",
      "statusName": "Surging Grit"
    },
    {
      "name": "Modifier Construction",
      "for": "Modifier_FantasticStory_BaseAbility_2010_BeforeFever_ForShow[<span class=\"descriptionNumberColor\">Concordant Truce</span>]",
      "stackType": "ReplaceByCaster",
      "stackData": [],
      "latentQueue": [],
      "description": "After using Skill to attack an enemy target, deals a set amount of DMG to the targets.",
      "type": "Buff",
      "statusName": "Concordant Truce"
    },
    {
      "name": "Modifier Construction",
      "for": "Modifier_FantasticStory_BaseAbility_2010_EnterFever_sub[<span class=\"descriptionNumberColor\">Surging Grit</span>]",
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
      "description": "DMG taken increases by <span class=\"descriptionNumberColor\">DV_Ratio_Get</span>.",
      "type": "Debuff",
      "effectName": "Vulnerability",
      "statusName": "Surging Grit"
    },
    {
      "name": "Modifier Construction",
      "for": "Modifier_FantasticStory_BaseAbility_2010_aura",
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
      ],
      "stackData": [],
      "latentQueue": [
        "DV_FantasticStory_BaseAbility_2010_TriggerFlag"
      ],
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
          },
          "modifier": "Modifier_FantasticStory_BaseAbility_2010_plus1_sub[<span class=\"descriptionNumberColor\">Empty Air</span>]",
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
          "modifier": "Modifier_FantasticStory_BaseAbility_2010_plus2_sub[<span class=\"descriptionNumberColor\">False Promises</span>]",
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
          "modifier": "Modifier_FantasticStory_BaseAbility_2010_plus3_sub[<span class=\"descriptionNumberColor\">Hollow Hope</span>]",
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
          "modifier": "Modifier_FantasticStory_BaseAbility_2010_plus3_sub2",
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
          "modifier": "Modifier_FantasticStory_BaseAbility_2010_plus4_sub[<span class=\"descriptionNumberColor\">Hierophany</span>]",
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
          "modifier": "Modifier_FantasticStory_BaseAbility_2010_Plus5_Sub[<span class=\"descriptionNumberColor\">Ballad</span>]",
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
          "modifier": "Modifier_FantasticStory_BaseAbility_2010_Plus6_Sub[<span class=\"descriptionNumberColor\">Euphony</span>]",
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
          "modifier": "Modifier_FantasticStory_BaseAbility_2010_Plus7_Sub",
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
          "modifier": "Modifier_FantasticStory_BaseAbility_2010_plus8_sub[<span class=\"descriptionNumberColor\">Ravings</span>]",
          "haloStatus": true,
          "conditions": {
            "name": "Compare: Variable",
            "value1": "DV_FantasticStory_PlusAbility_2018",
            "compareType": "=",
            "value2": 1
          }
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Modifier_FantasticStory_BaseAbility_2010_ListenBEDelay",
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
}