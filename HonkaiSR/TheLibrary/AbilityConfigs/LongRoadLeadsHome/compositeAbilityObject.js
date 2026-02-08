const compositeAbilityObject = {
  "fullCharacterName": "Long Road Leads Home",
  "trimCharacterName": "LongRoadLeadsHome",
  "abilityList": [
    "LongRoadLeadsHome_Ability23035"
  ],
  "fixedStats": {
    "1": {
      "DamageBreak": 0.6
    },
    "2": {
      "DamageBreak": 0.7
    },
    "3": {
      "DamageBreak": 0.8
    },
    "4": {
      "DamageBreak": 0.9
    },
    "5": {
      "DamageBreak": 1
    }
  },
  "abilityObject": {
    "LongRoadLeadsHome_Ability23035": {
      "fileName": "LongRoadLeadsHome_Ability23035",
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
          "modifier": "<a class=\"gModGreen\" id=\"1492393142\">LC_23035_Main</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-662975105\">LC_23035_ListenBreak</a>",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "Being Weakness Broken: Start [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"833308356\">LC_23035_BreakDebuff</a>",
                  "baseChance": {
                    "operator": "Variables[0] (LC_23035_Chance) || RETURN",
                    "displayLines": "LC_23035_Chance",
                    "constants": [],
                    "variables": [
                      "LC_23035_Chance"
                    ]
                  },
                  "stackLimit": {
                    "operator": "Variables[0] (LC_23035_MaxLayer) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(LC_23035_MaxLayer + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "LC_23035_MaxLayer"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_PropertyValue1": {
                      "operator": "Variables[0] (LC_23035_PropertyRatio) || RETURN",
                      "displayLines": "LC_23035_PropertyRatio",
                      "constants": [],
                      "variables": [
                        "LC_23035_PropertyRatio"
                      ]
                    }
                  },
                  "addStacksPerTrigger": 1,
                  "success": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-2009182373\">LC_23035_Sub</a>[<span class=\"descriptionNumberColor\">Charring</span>]",
                      "duration": {
                        "operator": "Variables[0] (LC_23035_LifeTime) || RETURN",
                        "displayLines": "LC_23035_LifeTime",
                        "constants": [],
                        "variables": [
                          "LC_23035_LifeTime"
                        ]
                      },
                      "stackLimit": {
                        "operator": "Variables[0] (LC_23035_MaxLayer) || RETURN",
                        "displayLines": "LC_23035_MaxLayer",
                        "constants": [],
                        "variables": [
                          "LC_23035_MaxLayer"
                        ]
                      },
                      "valuePerStack": {
                        "MDF_PropertyValue1": {
                          "operator": "Variables[0] (LC_23035_PropertyRatio) || RETURN",
                          "displayLines": "LC_23035_PropertyRatio",
                          "constants": [],
                          "variables": [
                            "LC_23035_PropertyRatio"
                          ]
                        },
                        "MDF_PropertyValue2": {
                          "operator": "Variables[0] (LC_23035_MaxLayer) || RETURN",
                          "displayLines": "LC_23035_MaxLayer",
                          "constants": [],
                          "variables": [
                            "LC_23035_MaxLayer"
                          ]
                        }
                      },
                      "addStacksPerTrigger": 1
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2009182373\">LC_23035_Sub</a>[<span class=\"descriptionNumberColor\">Charring</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ],
          "stackData": [
            "MDF_PropertyValue1",
            "MDF_PropertyValue2"
          ],
          "latentQueue": [],
          "description": "Each stack increases the Break DMG taken by <span class=\"descriptionNumberColor\">MDF_PropertyValue1</span>. This effect can stack up to <span class=\"descriptionNumberColor\">MDF_PropertyValue2</span> time(s).",
          "type": "Debuff",
          "effectName": "Charring",
          "statusName": "Charring"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__833308356\">LC_23035_BreakDebuff</a>",
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
                          "value": "MDF_PropertyValue1"
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
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueType": "Layer",
                  "variableName": "MDF_Layer",
                  "modifierName": "<a class=\"gModGreen\" id=\"833308356\">LC_23035_BreakDebuff</a>",
                  "multiplier": 1
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_PropertyValue1",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValue1) || Variables[1] (MDF_Layer) || Constants[0] (1) || SUB || MUL || RETURN",
                    "displayLines": "(MDF_PropertyValue1 * (MDF_Layer - 1))",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "MDF_PropertyValue1",
                      "MDF_Layer"
                    ]
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
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"-2009182373\">LC_23035_Sub</a>[<span class=\"descriptionNumberColor\">Charring</span>]"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_PropertyValue1",
                      "value": 0
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Living State",
                        "state": "Mask_AliveOrRevivable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "invertCondition": true
                      },
                      "passed": [
                        "Modifier Deletes Itself"
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable with Modifier Values",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "scope": "ContextModifier",
                          "valueType": "Layer",
                          "variableName": "Layer_Count",
                          "multiplier": 1
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"833308356\">LC_23035_BreakDebuff</a>",
                          "addStacksPerTrigger": {
                            "operator": "Constants[0] (1) || Variables[0] (Layer_Count) || SUB || RETURN",
                            "displayLines": "(1 - Layer_Count)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "Layer_Count"
                            ]
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_PropertyValue1"
          ],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1492393142\">LC_23035_Main</a>",
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
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"833308356\">LC_23035_BreakDebuff</a>",
                        "invertCondition": true,
                        "casterFilter": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        }
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
                      "modifier": "<a class=\"gModGreen\" id=\"833308356\">LC_23035_BreakDebuff</a>",
                      "stackLimit": {
                        "operator": "Variables[0] (2) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(2 + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          2
                        ]
                      },
                      "valuePerStack": {
                        "MDF_PropertyValue1": 0,
                        "MDF_PropertyValue2": 0,
                        "MDF_Layer": 0
                      },
                      "addStacksPerTrigger": 1
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
                    "team": "Enemy Team"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All(with Unselectable)}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-662975105\">LC_23035_ListenBreak</a>",
                      "valuePerStack": {
                        "LC_23035_MaxLayer": {
                          "operator": "Variables[0] (2) || RETURN",
                          "displayLines": "2",
                          "constants": [],
                          "variables": [
                            2
                          ]
                        },
                        "LC_23035_LifeTime": {
                          "operator": "Variables[0] (2) || RETURN",
                          "displayLines": "2",
                          "constants": [],
                          "variables": [
                            2
                          ]
                        },
                        "LC_23035_PropertyRatio": {
                          "operator": "Variables[0] (0.18) || RETURN",
                          "displayLines": "0.18",
                          "constants": [],
                          "variables": [
                            0.18
                          ]
                        },
                        "LC_23035_Chance": {
                          "operator": "Variables[0] (1) || RETURN",
                          "displayLines": "1",
                          "constants": [],
                          "variables": [
                            1
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
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All(with Unselectable)}}"
                  },
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"833308356\">LC_23035_BreakDebuff</a>",
                    "invertCondition": true,
                    "casterFilter": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    }
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"833308356\">LC_23035_BreakDebuff</a>",
                      "stackLimit": {
                        "operator": "Variables[0] (2) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(2 + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          2
                        ]
                      },
                      "valuePerStack": {
                        "MDF_PropertyValue1": 0,
                        "MDF_PropertyValue2": 0
                      },
                      "addStacksPerTrigger": 1
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All(with Unselectable)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-662975105\">LC_23035_ListenBreak</a>",
                  "valuePerStack": {
                    "LC_23035_MaxLayer": {
                      "operator": "Variables[0] (2) || RETURN",
                      "displayLines": "2",
                      "constants": [],
                      "variables": [
                        2
                      ]
                    },
                    "LC_23035_LifeTime": {
                      "operator": "Variables[0] (2) || RETURN",
                      "displayLines": "2",
                      "constants": [],
                      "variables": [
                        2
                      ]
                    },
                    "LC_23035_PropertyRatio": {
                      "operator": "Variables[0] (0.18) || RETURN",
                      "displayLines": "0.18",
                      "constants": [],
                      "variables": [
                        0.18
                      ]
                    },
                    "LC_23035_Chance": {
                      "operator": "Variables[0] (1) || RETURN",
                      "displayLines": "1",
                      "constants": [],
                      "variables": [
                        1
                      ]
                    }
                  }
                }
              ],
              "priorityLevel": -80
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ],
      "isLightcone": true,
      "desc": "Increases the wearer's Break Effect by #1[i]%. When an enemy target's Weakness gets broken, there is a #2[i]% base chance to inflict the \"Charring\" state on it, which increases its Break DMG taken by #3[i]%, lasting for #4[i] turn(s). This effect can stack #5[i] time(s).",
      "params": [
        [
          0.6,
          1,
          0.18,
          2,
          2
        ],
        [
          0.7,
          1,
          0.21,
          2,
          2
        ],
        [
          0.8,
          1,
          0.24,
          2,
          2
        ],
        [
          0.9,
          1,
          0.27,
          2,
          2
        ],
        [
          1,
          1,
          0.3,
          2,
          2
        ]
      ]
    }
  },
  "isLightcone": true
}