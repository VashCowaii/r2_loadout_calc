const compositeAbilityObject = {
  "fullCharacterName": "Boothill",
  "trimCharacterName": "Boothill",
  "abilityList": [
    "Boothill_Boothill_Eidolon6",
    "Boothill_Boothill_Eidolon1",
    "Boothill_Boothill_Trace02",
    "Boothill_Boothill_Trace01",
    "Boothill_Boothill_TechniqueInLevel_GainEnhance",
    "Boothill_Boothill_TechniqueInLevel",
    "Boothill_Boothill_PassiveAbility01",
    "Boothill_Boothill_Ability03_Part02",
    "Boothill_Boothill_Ability03_Part01",
    "Boothill_Boothill_Ability03_EnterReady",
    "Boothill_Boothill_Bonus",
    "Boothill_Boothill_Ability02_Part02",
    "Boothill_Boothill_Ability02_Part01",
    "Boothill_Boothill_Ability11_Part02",
    "Boothill_Boothill_Ability11_Part01",
    "Boothill_Boothill_Ability01_Part02",
    "Boothill_Boothill_Ability01_Part01",
    "Boothill_Modifiers"
  ],
  "abilityObject": {
    "Boothill_Boothill_Eidolon6": {
      "fileName": "Boothill_Boothill_Eidolon6",
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
          "modifier": "<a class=\"gModGreen\" id=\"841247203\">Boothill_Eidolon6</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__841247203\">Boothill_Eidolon6</a>",
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "Boothill_Boothill_Eidolon1": {
      "fileName": "Boothill_Boothill_Eidolon1",
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
          "modifier": "<a class=\"gModGreen\" id=\"925135298\">Boothill_Eidolon1</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__925135298\">Boothill_Eidolon1</a>",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
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
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Defender",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                          "value": "(0 - 0.16)"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "Wave Count",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Eidolon Activated",
                        "eidolon": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MaxEnhance",
                      "value": {
                        "operator": "Variables[0] (3) || RETURN",
                        "displayLines": "3",
                        "constants": [],
                        "variables": [
                          3
                        ]
                      }
                    },
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (CurEnhance) || RETURN",
                        "displayLines": "CurEnhance",
                        "constants": [],
                        "variables": [
                          "CurEnhance"
                        ]
                      },
                      "maximum": {
                        "operator": "Variables[0] (MaxEnhance) || RETURN",
                        "displayLines": "MaxEnhance",
                        "constants": [],
                        "variables": [
                          "MaxEnhance"
                        ]
                      },
                      "assignState": "False",
                      "bar#": 6,
                      "cooldown": 0
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1894494257\">Boothill_SelfModification</a>[<span class=\"descriptionNumberColor\">Pocket Trickshot</span>]",
                      "stackLimit": {
                        "operator": "Variables[0] (3) || RETURN",
                        "displayLines": "3",
                        "constants": [],
                        "variables": [
                          3
                        ]
                      },
                      "valuePerStack": {
                        "MDF_MaxLayer": {
                          "operator": "Variables[0] (3) || RETURN",
                          "displayLines": "3",
                          "constants": [],
                          "variables": [
                            3
                          ]
                        },
                        "MDF_StanceAdded": {
                          "operator": "Variables[0] (0.5) || RETURN",
                          "displayLines": "0.5",
                          "constants": [],
                          "variables": [
                            0.5
                          ]
                        },
                        "MDF_GainFromPassive": 0
                      },
                      "addStacksPerTrigger": 1
                    }
                  ]
                }
              ],
              "priorityLevel": -80
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "Boothill_Boothill_Trace02": {
      "fileName": "Boothill_Boothill_Trace02",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1030918601\">M_Boothill_Trace02</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1030918601\">M_Boothill_Trace02</a>",
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
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
                        "modifier": "<a class=\"gModGreen\" id=\"1542670262\">Boothill_DuelState</a>[<span class=\"descriptionNumberColor\">Standoff</span>]"
                      },
                      {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-476363000\">Boothill_DuelTarget</a>[<span class=\"descriptionNumberColor\">Standoff</span>]"
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target's Source Owner}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-476363000\">Boothill_DuelTarget</a>[<span class=\"descriptionNumberColor\">Standoff</span>]"
                          }
                        ],
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Defender",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
                          "value": "0.3"
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
        }
      ]
    },
    "Boothill_Boothill_Trace01": {
      "fileName": "Boothill_Boothill_Trace01",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1014140982\">M_Boothill_Trace01</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-314049053\">M_Boothill_Trace01_Sub2</a>",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageConverted</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_ConvertPropertyRatio) || RETURN",
                    "displayLines": "MDF_ConvertPropertyRatio",
                    "constants": [],
                    "variables": [
                      "MDF_ConvertPropertyRatio"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2136671299\">M_Boothill_Trace01_Sub</a>",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateConverted</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_ConvertPropertyRatio) || RETURN",
                    "displayLines": "MDF_ConvertPropertyRatio",
                    "constants": [],
                    "variables": [
                      "MDF_ConvertPropertyRatio"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1014140982\">M_Boothill_Trace01</a>",
          "modifierFlags": [
            "ListenBattleEventSkill"
          ],
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "CasterBreakDamageAdded",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreak</span>&nbsp;"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2136671299\">M_Boothill_Trace01_Sub</a>",
                  "valuePerStack": {
                    "MDF_ConvertPropertyRatio": {
                      "operator": "Variables[0] (MIN) || Variables[1] (CasterBreakDamageAdded) || Variables[2] (0.1) || MUL || Variables[3] (0.3) || PARAM_2 || FUNCTION || RETURN",
                      "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MIN</span>((CasterBreakDamageAdded * 0.1), 0.3)",
                      "constants": [],
                      "variables": [
                        "MIN",
                        "CasterBreakDamageAdded",
                        0.1,
                        0.3
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
                  "modifier": "<a class=\"gModGreen\" id=\"-314049053\">M_Boothill_Trace01_Sub2</a>",
                  "valuePerStack": {
                    "MDF_ConvertPropertyRatio": {
                      "operator": "Variables[0] (MIN) || Variables[1] (CasterBreakDamageAdded) || Variables[2] (0.5) || MUL || Variables[3] (1.5) || PARAM_2 || FUNCTION || RETURN",
                      "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MIN</span>((CasterBreakDamageAdded * 0.5), 1.5)",
                      "constants": [],
                      "variables": [
                        "MIN",
                        "CasterBreakDamageAdded",
                        0.5,
                        1.5
                      ]
                    }
                  }
                }
              ],
              "priorityLevel": -80
            }
          ],
          "abilityValueChange": [
            {
              "name": "Ability Value Changes",
              "variableName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreak</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": -999,
                  "maxValue": 999,
                  "whenValueChanges": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "CasterBreakDamageAdded",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreak</span>&nbsp;"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"2136671299\">M_Boothill_Trace01_Sub</a>",
                      "valuePerStack": {
                        "MDF_ConvertPropertyRatio": {
                          "operator": "Variables[0] (MIN) || Variables[1] (CasterBreakDamageAdded) || Variables[2] (0.1) || MUL || Variables[3] (0.3) || PARAM_2 || FUNCTION || RETURN",
                          "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MIN</span>((CasterBreakDamageAdded * 0.1), 0.3)",
                          "constants": [],
                          "variables": [
                            "MIN",
                            "CasterBreakDamageAdded",
                            0.1,
                            0.3
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
                      "modifier": "<a class=\"gModGreen\" id=\"-314049053\">M_Boothill_Trace01_Sub2</a>",
                      "valuePerStack": {
                        "MDF_ConvertPropertyRatio": {
                          "operator": "Variables[0] (MIN) || Variables[1] (CasterBreakDamageAdded) || Variables[2] (0.5) || MUL || Variables[3] (1.5) || PARAM_2 || FUNCTION || RETURN",
                          "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MIN</span>((CasterBreakDamageAdded * 0.5), 1.5)",
                          "constants": [],
                          "variables": [
                            "MIN",
                            "CasterBreakDamageAdded",
                            0.5,
                            1.5
                          ]
                        }
                      }
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
    "Boothill_Boothill_TechniqueInLevel_GainEnhance": {
      "fileName": "Boothill_Boothill_TechniqueInLevel_GainEnhance",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-951211001\">M_Boothill_GainEnhance</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-951211001\">M_Boothill_GainEnhance</a>",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
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
                      "name": "Define Custom Variable",
                      "variableName": "MaxEnhance",
                      "value": {
                        "operator": "Variables[0] (3) || RETURN",
                        "displayLines": "3",
                        "constants": [],
                        "variables": [
                          3
                        ]
                      }
                    },
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (CurEnhance) || RETURN",
                        "displayLines": "CurEnhance",
                        "constants": [],
                        "variables": [
                          "CurEnhance"
                        ]
                      },
                      "maximum": {
                        "operator": "Variables[0] (MaxEnhance) || RETURN",
                        "displayLines": "MaxEnhance",
                        "constants": [],
                        "variables": [
                          "MaxEnhance"
                        ]
                      },
                      "assignState": "False",
                      "bar#": 6,
                      "cooldown": 0
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1894494257\">Boothill_SelfModification</a>[<span class=\"descriptionNumberColor\">Pocket Trickshot</span>]",
                      "stackLimit": {
                        "operator": "Variables[0] (3) || RETURN",
                        "displayLines": "3",
                        "constants": [],
                        "variables": [
                          3
                        ]
                      },
                      "valuePerStack": {
                        "MDF_MaxLayer": {
                          "operator": "Variables[0] (3) || RETURN",
                          "displayLines": "3",
                          "constants": [],
                          "variables": [
                            3
                          ]
                        },
                        "MDF_StanceAdded": {
                          "operator": "Variables[0] (0.5) || RETURN",
                          "displayLines": "0.5",
                          "constants": [],
                          "variables": [
                            0.5
                          ]
                        },
                        "MDF_GainFromPassive": 0
                      },
                      "addStacksPerTrigger": {
                        "operator": "Variables[0] (#ADF_1) || RETURN",
                        "displayLines": "#ADF_1",
                        "constants": [],
                        "variables": [
                          "#ADF_1"
                        ]
                      }
                    }
                  ]
                }
              ],
              "priorityLevel": -80
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "Boothill_Boothill_TechniqueInLevel": {
      "fileName": "Boothill_Boothill_TechniqueInLevel",
      "childAbilityList": [
        "Boothill_Boothill_TechniqueInLevel"
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
          "modifier": "<a class=\"gModGreen\" id=\"773572399\">M_Boothill_Maze</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1740127883\">Boothill_TechniqueUsage_Ability02</a>[<span class=\"descriptionNumberColor\">3-9× Smile</span>]",
          "description": "The first time the Skill is used in a battle, applies the same Physical Weakness to one designated enemy target as the one induced by the Ultimate, lasting for <span class=\"descriptionNumberColor\">MDF_Lifetime</span> turn(s).",
          "type": "Other",
          "statusName": "3-9× Smile",
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "skillType": "Skill",
            "addedDisplayWeakness": {
              "DamageType": "Physical"
            }
          }
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__773572399\">M_Boothill_Maze</a>",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
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
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1740127883\">Boothill_TechniqueUsage_Ability02</a>[<span class=\"descriptionNumberColor\">3-9× Smile</span>]",
                      "valuePerStack": {
                        "MDF_Lifetime": {
                          "operator": "Variables[0] (2) || RETURN",
                          "displayLines": "2",
                          "constants": [],
                          "variables": [
                            2
                          ]
                        }
                      }
                    }
                  ]
                }
              ],
              "priorityLevel": -80
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "Boothill_Boothill_PassiveAbility01": {
      "fileName": "Boothill_Boothill_PassiveAbility01",
      "childAbilityList": [
        "Boothill_Boothill_PassiveAbility01"
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
          "modifier": "<a class=\"gModGreen\" id=\"909277085\">Boothill_StancePreview</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-748622640\">Boothill_Passive</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "MaxEnhance",
            "compareType": "=",
            "value2": {
              "operator": "Variables[0] (3) || RETURN",
              "displayLines": "3",
              "constants": [],
              "variables": [
                3
              ]
            },
            "invertCondition": true
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "CurEnhance",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MaxEnhance",
              "value": {
                "operator": "Variables[0] (3) || RETURN",
                "displayLines": "3",
                "constants": [],
                "variables": [
                  3
                ]
              }
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (CurEnhance) || RETURN",
                "displayLines": "CurEnhance",
                "constants": [],
                "variables": [
                  "CurEnhance"
                ]
              },
              "maximum": {
                "operator": "Variables[0] (MaxEnhance) || RETURN",
                "displayLines": "MaxEnhance",
                "constants": [],
                "variables": [
                  "MaxEnhance"
                ]
              },
              "assignState": "False",
              "bar#": 6,
              "cooldown": 0
            }
          ]
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-748622640\">Boothill_Passive</a>",
          "execute": [
            {
              "eventTrigger": "Entity Death [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Target Exists",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target 2}}"
                    }
                  },
                  "passed": [
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
                            "name": "NOT",
                            "condition": {
                              "name": "Is Part Of Team",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target 2}}"
                              },
                              "team": "Enemy Team"
                            }
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-476363000\">Boothill_DuelTarget</a>[<span class=\"descriptionNumberColor\">Standoff</span>]"
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"837506667\">M_Boothill_AutoWinDuelTag</a>",
                          "addStacksPerTrigger": 1
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "Assign Value to Stat",
                  "variableName": "Avatar_1315_Enhance",
                  "value": 0
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
                        "modifier": "<a class=\"gModGreen\" id=\"837506667\">M_Boothill_AutoWinDuelTag</a>"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1542670262\">Boothill_DuelState</a>[<span class=\"descriptionNumberColor\">Standoff</span>]"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1894494257\">Boothill_SelfModification</a>[<span class=\"descriptionNumberColor\">Pocket Trickshot</span>]",
                      "stackLimit": {
                        "operator": "Variables[0] (3) || RETURN",
                        "displayLines": "3",
                        "constants": [],
                        "variables": [
                          3
                        ]
                      },
                      "valuePerStack": {
                        "MDF_MaxLayer": {
                          "operator": "Variables[0] (3) || RETURN",
                          "displayLines": "3",
                          "constants": [],
                          "variables": [
                            3
                          ]
                        },
                        "MDF_StanceAdded": {
                          "operator": "Variables[0] (0.5) || RETURN",
                          "displayLines": "0.5",
                          "constants": [],
                          "variables": [
                            0.5
                          ]
                        },
                        "MDF_GainFromPassive": 1
                      },
                      "addStacksPerTrigger": 1
                    }
                  ]
                }
              ]
            }
          ],
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "CurEnhance",
              "from": "ContextOwner",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "maxValue": {
                    "operator": "Variables[0] (MaxEnhance) || RETURN",
                    "displayLines": "MaxEnhance",
                    "constants": [],
                    "variables": [
                      "MaxEnhance"
                    ]
                  },
                  "includeMaxValueInRange": true,
                  "whenValueChanges": [
                    {
                      "name": "Assign Value to Stat",
                      "variableName": "Avatar_1315_Enhance",
                      "value": {
                        "operator": "Variables[0] (CurEnhance) || RETURN",
                        "displayLines": "CurEnhance",
                        "constants": [],
                        "variables": [
                          "CurEnhance"
                        ]
                      }
                    },
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (CurEnhance) || RETURN",
                        "displayLines": "CurEnhance",
                        "constants": [],
                        "variables": [
                          "CurEnhance"
                        ]
                      },
                      "maximum": {
                        "operator": "Variables[0] (MaxEnhance) || RETURN",
                        "displayLines": "MaxEnhance",
                        "constants": [],
                        "variables": [
                          "MaxEnhance"
                        ]
                      },
                      "assignState": "False",
                      "bar#": 6,
                      "cooldown": 0
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "value1": "_show_badge_01",
                            "compareType": "<=",
                            "value2": 0,
                            "contextScope": "ContextModifier"
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "CurEnhance",
                            "compareType": ">=",
                            "value2": 1,
                            "contextScope": "ContextCaster"
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "scope": "ContextModifier",
                          "variableName": "_show_badge_01",
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
                            "value1": "_show_badge_02",
                            "compareType": "<=",
                            "value2": 0,
                            "contextScope": "ContextModifier"
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "CurEnhance",
                            "compareType": ">=",
                            "value2": 2,
                            "contextScope": "ContextCaster"
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "scope": "ContextModifier",
                          "variableName": "_show_badge_02",
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
                            "value1": "_show_badge_03",
                            "compareType": "<=",
                            "value2": 0,
                            "contextScope": "ContextModifier"
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "CurEnhance",
                            "compareType": ">=",
                            "value2": 3,
                            "contextScope": "ContextCaster"
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "scope": "ContextModifier",
                          "variableName": "_show_badge_03",
                          "value": 1
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
          "for": "<a class=\"gModGreen\" id=\"mod__909277085\">Boothill_StancePreview</a>",
          "stackData": [],
          "latentQueue": [],
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "skillType": "Ultimate",
            "addedDisplayWeakness": {
              "DamageType": "Physical"
            }
          }
        }
      ]
    },
    "Boothill_Boothill_Ability03_Part02": {
      "fileName": "Boothill_Boothill_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Shot Fired",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1234556186\">Boothill_Ultimate_PhysicalWeakness</a>[<span class=\"descriptionNumberColor\">Extra Physical Weakness</span>]",
              "duration": {
                "operator": "Variables[0] (2) || RETURN",
                "displayLines": "2",
                "constants": [],
                "variables": [
                  2
                ]
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
                "DamageType": "Physical",
                "Damage": {
                  "operator": "Variables[0] (4) || RETURN",
                  "displayLines": "4",
                  "constants": [],
                  "variables": [
                    4
                  ]
                },
                "HitSplit": 0.2,
                "Toughness": {
                  "operator": "Variables[0] (ST Toughness Value) || RETURN",
                  "displayLines": "ST Toughness Value",
                  "constants": [],
                  "variables": [
                    "ST Toughness Value"
                  ]
                },
                "Tags": null,
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] (4) || RETURN",
              "displayLines": "4",
              "constants": [],
              "variables": [
                4
              ]
            },
            "HitSplit": 0.8,
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Action Advance/Delay",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "advanceType": "Delay",
          "multiAdd": "0.4"
        },
        "Trigger: Skip Death Handling",
        "Trigger: Ability End"
      ],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-913559917\">Boothill_Ability03PreShowModifierTarget</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-913559917\">Boothill_Ability03PreShowModifierTarget</a>",
          "stackData": [],
          "latentQueue": [],
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "target": {
              "name": "Target Name",
              "target": "{{Player's Aim Target List}}"
            },
            "skillType": [
              "Ultimate"
            ],
            "delayAdvancePreview": {
              "name": "Delay/Advance Preview",
              "previewValue": {
                "operator": "Variables[0] (0.4) || RETURN",
                "displayLines": "0.4",
                "constants": [],
                "variables": [
                  0.4
                ]
              }
            }
          }
        }
      ]
    },
    "Boothill_Boothill_Ability03_Part01": {
      "fileName": "Boothill_Boothill_Ability03_Part01",
      "childAbilityList": [
        "Boothill_Boothill_Ability03_Camera",
        "Boothill_Boothill_Ability03_Part01",
        "Boothill_Boothill_Ability03_Part02",
        "Boothill_Boothill_Ability03_EnterReady"
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
          "ability": "Boothill_Ability03_Part02",
          "isTrigger": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Is Entity a Part/Body Extension",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            }
          }
        }
      ],
      "references": []
    },
    "Boothill_Boothill_Ability03_EnterReady": {
      "fileName": "Boothill_Boothill_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "Boothill_Boothill_Bonus": {
      "fileName": "Boothill_Boothill_Bonus",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1542670262\">Boothill_DuelState</a>[<span class=\"descriptionNumberColor\">Standoff</span>]"
          }
        }
      ],
      "references": []
    },
    "Boothill_Boothill_Ability02_Part02": {
      "fileName": "Boothill_Boothill_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1740127883\">Boothill_TechniqueUsage_Ability02</a>[<span class=\"descriptionNumberColor\">3-9× Smile</span>]"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1234556186\">Boothill_Ultimate_PhysicalWeakness</a>[<span class=\"descriptionNumberColor\">Extra Physical Weakness</span>]",
              "duration": {
                "operator": "Variables[0] (2) || RETURN",
                "displayLines": "2",
                "constants": [],
                "variables": [
                  2
                ]
              }
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1740127883\">Boothill_TechniqueUsage_Ability02</a>[<span class=\"descriptionNumberColor\">3-9× Smile</span>]"
            }
          ]
        },
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
              "modifier": "<a class=\"gModGreen\" id=\"1542670262\">Boothill_DuelState</a>[<span class=\"descriptionNumberColor\">Standoff</span>]",
              "duration": {
                "operator": "Variables[0] (2) || RETURN",
                "displayLines": "2",
                "constants": [],
                "variables": [
                  2
                ]
              },
              "valuePerStack": {
                "MDF_PropertyRatio": {
                  "operator": "Variables[0] (0.15) || Variables[1] (0.12) || SUB || RETURN",
                  "displayLines": "(0.15 - 0.12)",
                  "constants": [],
                  "variables": [
                    0.15,
                    0.12
                  ]
                }
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-476363000\">Boothill_DuelTarget</a>[<span class=\"descriptionNumberColor\">Standoff</span>]",
              "valuePerStack": {
                "MDF_PropertyRatio": {
                  "operator": "Variables[0] (0.3) || Variables[1] (0.12) || ADD || RETURN",
                  "displayLines": "(0.3 + 0.12)",
                  "constants": [],
                  "variables": [
                    0.3,
                    0.12
                  ]
                }
              }
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1542670262\">Boothill_DuelState</a>[<span class=\"descriptionNumberColor\">Standoff</span>]",
              "duration": {
                "operator": "Variables[0] (2) || RETURN",
                "displayLines": "2",
                "constants": [],
                "variables": [
                  2
                ]
              },
              "valuePerStack": {
                "MDF_PropertyRatio": {
                  "operator": "Variables[0] (0.15) || RETURN",
                  "displayLines": "0.15",
                  "constants": [],
                  "variables": [
                    0.15
                  ]
                }
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-476363000\">Boothill_DuelTarget</a>[<span class=\"descriptionNumberColor\">Standoff</span>]",
              "valuePerStack": {
                "MDF_PropertyRatio": {
                  "operator": "Variables[0] (0.3) || RETURN",
                  "displayLines": "0.3",
                  "constants": [],
                  "variables": [
                    0.3
                  ]
                }
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
          "modifier": "<a class=\"gModGreen\" id=\"-1862582819\">M_Boothill_Ability02_ContinuousCheck</a>"
        },
        {
          "name": "Inject Extra-Turn",
          "actionTag": null,
          "canInjectUltimates": true,
          "abilityName": "Boothill_Bonus",
          "cancelIfDelayed": true,
          "afterInjection": []
        },
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1604810561\">Boothill_Eidolon4_DamageReduce</a>",
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_is_active",
                    "compareType": ">=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Defender",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
                          "value": "MDF_PropertyRatio"
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
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-476363000\">Boothill_DuelTarget</a>[<span class=\"descriptionNumberColor\">Standoff</span>]"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "scope": "ContextModifier",
                      "variableName": "_is_active",
                      "value": 1
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Being Attacked End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_is_active",
                    "compareType": ">=",
                    "value2": 1
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1862582819\">M_Boothill_Ability02_ContinuousCheck</a>",
          "execute": [
            {
              "eventTrigger": "Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"1884487363\">Boothill_Ability02_NotContinuous</a>"
                }
              ]
            },
            {
              "eventTrigger": "Ultimate Prep-Phase [Anyone]",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"1884487363\">Boothill_Ability02_NotContinuous</a>"
                }
              ]
            },
            {
              "eventTrigger": "Extra Action/Turn [Anyone]: Start",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"1884487363\">Boothill_Ability02_NotContinuous</a>"
                }
              ]
            },
            {
              "eventTrigger": "Injected Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"1884487363\">Boothill_Ability02_NotContinuous</a>"
                }
              ]
            }
          ],
          "modifierFunctions": [
            {
              "name": "CharacterFunctions",
              "functionName": "<a class=\"gTempYellow\" id=\"fun__1884487363\">Boothill_Ability02_NotContinuous</a>",
              "parse": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    }
                  },
                  "passed": [
                    "Modifier Deletes Itself"
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
    "Boothill_Boothill_Ability02_Part01": {
      "fileName": "Boothill_Boothill_Ability02_Part01",
      "childAbilityList": [
        "Boothill_Boothill_Ability02_Camera",
        "Boothill_Boothill_Ability02_Part01",
        "Boothill_Boothill_Ability02_Part02",
        "Boothill_Boothill_Bonus",
        "Boothill_Boothill_Bonus_Camera",
        "Boothill_Boothill_Bonus_Camera_Cut"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Skill",
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
          "ability": "Boothill_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "Boothill_Boothill_Ability11_Part02": {
      "fileName": "Boothill_Boothill_Ability11_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable",
          "variableName": "_enhance_before_attack",
          "value": {
            "operator": "Variables[0] (CurEnhance) || RETURN",
            "displayLines": "CurEnhance",
            "constants": [],
            "variables": [
              "CurEnhance"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Skill11_Bonus_Check",
          "value": 0
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"1166126384\">One_Shot</a>"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"1166126384\">One_Shot</a>"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"1166126384\">One_Shot</a>"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"1166126384\">One_Shot</a>"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"1166126384\">One_Shot</a>"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-824172561\">One_Shot_Final</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                },
                "flagName": "Break"
              },
              {
                "name": "Compare: Variable",
                "value1": "_enhance_before_attack",
                "compareType": ">=",
                "value2": 1
              }
            ]
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "Skill11_Bonus_Check",
              "value": 1
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "variableName": "_maxStance",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;",
              "warningType": "MaxToughness"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_maxStance",
              "value": {
                "operator": "Variables[0] (MIN) || Variables[1] (_maxStance) || Constants[0] (30) || Variables[2] (16) || MUL || PARAM_2 || FUNCTION || RETURN",
                "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MIN</span>(_maxStance, (30 * 16))",
                "constants": [
                  30
                ],
                "variables": [
                  "MIN",
                  "_maxStance",
                  16
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_enhance_before_attack",
                "compareType": ">=",
                "value2": 3
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "Skill11_BreakDamagePercentage",
                  "value": {
                    "operator": "Variables[0] (1.7) || RETURN",
                    "displayLines": "1.7",
                    "constants": [],
                    "variables": [
                      1.7
                    ]
                  }
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_enhance_before_attack",
                    "compareType": ">=",
                    "value2": 2
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Skill11_BreakDamagePercentage",
                      "value": {
                        "operator": "Variables[0] (1.2) || RETURN",
                        "displayLines": "1.2",
                        "constants": [],
                        "variables": [
                          1.2
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Skill11_BreakDamagePercentage",
                      "value": {
                        "operator": "Variables[0] (0.7) || RETURN",
                        "displayLines": "0.7",
                        "constants": [],
                        "variables": [
                          0.7
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Physical",
                "DamageBreak": {
                  "operator": "Constants[0] (0.2) || Constants[1] (2) || MUL || Variables[0] (_maxStance) || Constants[2] (30) || DIV || Constants[1] (2) || ADD || MUL || Constants[3] (4) || DIV || Variables[1] (Skill11_BreakDamagePercentage) || MUL || RETURN",
                  "displayLines": "((((0.2 * 2) * ((_maxStance / 30) + 2)) / 4) * Skill11_BreakDamagePercentage)",
                  "constants": [
                    0.2,
                    2,
                    30,
                    4
                  ],
                  "variables": [
                    "_maxStance",
                    "Skill11_BreakDamagePercentage"
                  ]
                },
                "dmgFormula": "Break DMG Scaling",
                "dmgFormulaFinal": "Pure (No DMG%)",
                "Toughness": null,
                "Tags": null,
                "attackType": "Break DMG"
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 6
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Physical",
                    "DamageBreak": {
                      "operator": "Constants[0] (0.2) || Constants[1] (2) || MUL || Variables[0] (_maxStance) || Constants[2] (30) || DIV || Constants[1] (2) || ADD || MUL || Constants[3] (4) || DIV || Variables[1] (Skill11_BreakDamagePercentage) || MUL || Variables[2] (0.4) || MUL || RETURN",
                      "displayLines": "(((((0.2 * 2) * ((_maxStance / 30) + 2)) / 4) * Skill11_BreakDamagePercentage) * 0.4)",
                      "constants": [
                        0.2,
                        2,
                        30,
                        4
                      ],
                      "variables": [
                        "_maxStance",
                        "Skill11_BreakDamagePercentage",
                        0.4
                      ]
                    },
                    "dmgFormula": "Break DMG Scaling",
                    "dmgFormulaFinal": "Pure (No DMG%)",
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Break DMG"
                  }
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Targets Adjacent(Blast)}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Physical",
                    "DamageBreak": {
                      "operator": "Constants[0] (0.2) || Constants[1] (2) || MUL || Variables[0] (_maxStance) || Constants[2] (30) || DIV || Constants[1] (2) || ADD || MUL || Constants[3] (4) || DIV || Variables[1] (Skill11_BreakDamagePercentage) || MUL || Variables[2] (0.7) || MUL || RETURN",
                      "displayLines": "(((((0.2 * 2) * ((_maxStance / 30) + 2)) / 4) * Skill11_BreakDamagePercentage) * 0.7)",
                      "constants": [
                        0.2,
                        2,
                        30,
                        4
                      ],
                      "variables": [
                        "_maxStance",
                        "Skill11_BreakDamagePercentage",
                        0.7
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
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Physical",
                "DamageBreak": {
                  "operator": "Constants[0] (0.2) || Constants[1] (2) || MUL || Variables[0] (_maxStance) || Constants[2] (30) || DIV || Constants[1] (2) || ADD || MUL || Constants[3] (4) || DIV || Variables[1] (Skill11_BreakDamagePercentage) || MUL || RETURN",
                  "displayLines": "((((0.2 * 2) * ((_maxStance / 30) + 2)) / 4) * Skill11_BreakDamagePercentage)",
                  "constants": [
                    0.2,
                    2,
                    30,
                    4
                  ],
                  "variables": [
                    "_maxStance",
                    "Skill11_BreakDamagePercentage"
                  ]
                },
                "dmgFormula": "Break DMG Scaling",
                "dmgFormulaFinal": "Pure (No DMG%)",
                "Toughness": null,
                "Tags": null,
                "attackType": "Break DMG"
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 6
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Physical",
                    "DamageBreak": {
                      "operator": "Constants[0] (0.2) || Constants[1] (2) || MUL || Variables[0] (_maxStance) || Constants[2] (30) || DIV || Constants[1] (2) || ADD || MUL || Constants[3] (4) || DIV || Variables[1] (Skill11_BreakDamagePercentage) || MUL || Variables[2] (0.4) || MUL || RETURN",
                      "displayLines": "(((((0.2 * 2) * ((_maxStance / 30) + 2)) / 4) * Skill11_BreakDamagePercentage) * 0.4)",
                      "constants": [
                        0.2,
                        2,
                        30,
                        4
                      ],
                      "variables": [
                        "_maxStance",
                        "Skill11_BreakDamagePercentage",
                        0.4
                      ]
                    },
                    "dmgFormula": "Break DMG Scaling",
                    "dmgFormulaFinal": "Pure (No DMG%)",
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Break DMG"
                  }
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Targets Adjacent(Blast)}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Physical",
                    "DamageBreak": {
                      "operator": "Constants[0] (0.2) || Constants[1] (2) || MUL || Variables[0] (_maxStance) || Constants[2] (30) || DIV || Constants[1] (2) || ADD || MUL || Constants[3] (4) || DIV || Variables[1] (Skill11_BreakDamagePercentage) || MUL || Variables[2] (0.7) || MUL || RETURN",
                      "displayLines": "(((((0.2 * 2) * ((_maxStance / 30) + 2)) / 4) * Skill11_BreakDamagePercentage) * 0.7)",
                      "constants": [
                        0.2,
                        2,
                        30,
                        4
                      ],
                      "variables": [
                        "_maxStance",
                        "Skill11_BreakDamagePercentage",
                        0.7
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
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Physical",
                "DamageBreak": {
                  "operator": "Constants[0] (0.6) || Constants[1] (2) || MUL || Variables[0] (_maxStance) || Constants[2] (30) || DIV || Constants[1] (2) || ADD || MUL || Constants[3] (4) || DIV || Variables[1] (Skill11_BreakDamagePercentage) || MUL || RETURN",
                  "displayLines": "((((0.6 * 2) * ((_maxStance / 30) + 2)) / 4) * Skill11_BreakDamagePercentage)",
                  "constants": [
                    0.6,
                    2,
                    30,
                    4
                  ],
                  "variables": [
                    "_maxStance",
                    "Skill11_BreakDamagePercentage"
                  ]
                },
                "dmgFormula": "Break DMG Scaling",
                "dmgFormulaFinal": "Pure (No DMG%)",
                "Toughness": null,
                "Tags": null,
                "attackType": "Break DMG"
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 6
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Physical",
                    "DamageBreak": {
                      "operator": "Constants[0] (0.6) || Constants[1] (2) || MUL || Variables[0] (_maxStance) || Constants[2] (30) || DIV || Constants[1] (2) || ADD || MUL || Constants[3] (4) || DIV || Variables[1] (Skill11_BreakDamagePercentage) || MUL || Variables[2] (0.4) || MUL || RETURN",
                      "displayLines": "(((((0.6 * 2) * ((_maxStance / 30) + 2)) / 4) * Skill11_BreakDamagePercentage) * 0.4)",
                      "constants": [
                        0.6,
                        2,
                        30,
                        4
                      ],
                      "variables": [
                        "_maxStance",
                        "Skill11_BreakDamagePercentage",
                        0.4
                      ]
                    },
                    "dmgFormula": "Break DMG Scaling",
                    "dmgFormulaFinal": "Pure (No DMG%)",
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Break DMG"
                  }
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Targets Adjacent(Blast)}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Physical",
                    "DamageBreak": {
                      "operator": "Constants[0] (0.6) || Constants[1] (2) || MUL || Variables[0] (_maxStance) || Constants[2] (30) || DIV || Constants[1] (2) || ADD || MUL || Constants[3] (4) || DIV || Variables[1] (Skill11_BreakDamagePercentage) || MUL || Variables[2] (0.7) || MUL || RETURN",
                      "displayLines": "(((((0.6 * 2) * ((_maxStance / 30) + 2)) / 4) * Skill11_BreakDamagePercentage) * 0.7)",
                      "constants": [
                        0.6,
                        2,
                        30,
                        4
                      ],
                      "variables": [
                        "_maxStance",
                        "Skill11_BreakDamagePercentage",
                        0.7
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
            },
            "Trigger: Attack End"
          ],
          "failed": [
            "Trigger: Attack End",
            {
              "name": "Define Custom Variable",
              "variableName": "Skill11_Bonus_Check",
              "value": -1
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1599304772\">M_Boothill_Ability11_StancePreview</a>"
        }
      ],
      "functions": [
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__1166126384\">One_Shot</a>",
          "parse": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Physical",
                "Damage": {
                  "operator": "Variables[0] (2.2) || RETURN",
                  "displayLines": "2.2",
                  "constants": [],
                  "variables": [
                    2.2
                  ]
                },
                "HitSplit": {
                  "operator": "Constants[0] (1) || Constants[1] (6) || DIV || RETURN",
                  "displayLines": "(1 / 6)",
                  "constants": [
                    1,
                    6
                  ],
                  "variables": []
                },
                "Toughness": {
                  "operator": "Constants[0] (1) || Variables[0] (CurEnhance) || Variables[1] (0.5) || MUL || ADD || Variables[2] (ST Toughness Value) || MUL || RETURN",
                  "displayLines": "((1 + (CurEnhance * 0.5)) * ST Toughness Value)",
                  "constants": [
                    1
                  ],
                  "variables": [
                    "CurEnhance",
                    0.5,
                    "ST Toughness Value"
                  ]
                },
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-824172561\">One_Shot_Final</a>",
          "parse": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Physical",
                "Damage": {
                  "operator": "Variables[0] (2.2) || RETURN",
                  "displayLines": "2.2",
                  "constants": [],
                  "variables": [
                    2.2
                  ]
                },
                "HitSplit": {
                  "operator": "Constants[0] (1) || Constants[1] (6) || DIV || RETURN",
                  "displayLines": "(1 / 6)",
                  "constants": [
                    1,
                    6
                  ],
                  "variables": []
                },
                "Toughness": {
                  "operator": "Constants[0] (1) || Variables[0] (CurEnhance) || Variables[1] (0.5) || MUL || ADD || Variables[2] (ST Toughness Value) || MUL || RETURN",
                  "displayLines": "((1 + (CurEnhance * 0.5)) * ST Toughness Value)",
                  "constants": [
                    1
                  ],
                  "variables": [
                    "CurEnhance",
                    0.5,
                    "ST Toughness Value"
                  ]
                },
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            }
          ]
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1599304772\">M_Boothill_Ability11_StancePreview</a>",
          "stackData": [],
          "latentQueue": [
            "_enhance_before_attack",
            "Skill11_Bonus_Check"
          ],
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "skillType": "Basic ATK",
            "conditions": {
              "name": "Has Modifier",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1542670262\">Boothill_DuelState</a>[<span class=\"descriptionNumberColor\">Standoff</span>]"
            },
            "multiplier": {
              "operator": "Constants[0] (1) || Variables[0] (CurEnhance) || Variables[1] (0.5) || MUL || ADD || RETURN",
              "displayLines": "(1 + (CurEnhance * 0.5))",
              "constants": [
                1
              ],
              "variables": [
                "CurEnhance",
                0.5
              ]
            }
          }
        }
      ]
    },
    "Boothill_Boothill_Ability11_Part01": {
      "fileName": "Boothill_Boothill_Ability11_Part01",
      "childAbilityList": [
        "Boothill_Boothill_Ability11_Camera",
        "Boothill_Boothill_Ability11_End_Camera",
        "Boothill_Boothill_Ability11_Bonus_Camera",
        "Boothill_Boothill_Ability11_Part01",
        "Boothill_Boothill_Ability11_Part02"
      ],
      "skillTrigger": "Skill11",
      "abilityType": "Basic ATK",
      "energy": 30,
      "toughnessList": [
        20,
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
          "ability": "Boothill_Ability11_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        {
          "name": "WAIT FOR",
          "condition": {
            "name": "Compare: Variable",
            "value1": "Skill11_Bonus_Check",
            "compareType": "NOT=",
            "value2": 0
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Skill11_Bonus_Check",
            "compareType": ">",
            "value2": 0
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Active: Fast-Forward Animations"
              }
            },
            "Deleted bullshit",
            {
              "name": "Clear DMG Numbers(UI)",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Active: Fast-Forward Animations"
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Living State",
                "state": "Mask_AliveOrLimbo",
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                },
                "invertCondition": true
              }
            }
          ],
          "failed": [
            "Deleted bullshit"
          ]
        }
      ],
      "references": []
    },
    "Boothill_Boothill_Ability01_Part02": {
      "fileName": "Boothill_Boothill_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable",
          "variableName": "_loop_count",
          "value": 0
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] (1) || RETURN",
              "displayLines": "1",
              "constants": [],
              "variables": [
                1
              ]
            },
            "HitSplit": 0.3,
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "EnergyGainPercent": "100%"
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
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] (1) || RETURN",
              "displayLines": "1",
              "constants": [],
              "variables": [
                1
              ]
            },
            "HitSplit": 0.7,
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Boothill_Boothill_Ability01_Part01": {
      "fileName": "Boothill_Boothill_Ability01_Part01",
      "childAbilityList": [
        "Boothill_Boothill_Ability01_Camera",
        "Boothill_Boothill_Ability01_Part01",
        "Boothill_Boothill_Ability01_Part02"
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
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Boothill_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        "Deleted bullshit"
      ],
      "references": []
    },
    "Boothill_Modifiers": {
      "fileName": "Boothill_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__827570007\">Boothill_Eidolon2_CD</a>[<span class=\"descriptionNumberColor\">Milestonemonger</span>]",
          "execute": [
            {
              "eventTrigger": "Turn End [Anyone]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ],
          "description": "Milestonemonger's effect cannot be triggered yet.",
          "type": "Other",
          "statusName": "Milestonemonger"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__455996650\">Boothill_Eidolon2_Enhance</a>[<span class=\"descriptionNumberColor\">Milestonemonger</span>]",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreak</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyRatio) || RETURN",
                    "displayLines": "MDF_PropertyRatio",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyRatio"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "Increases Break Effect by <span class=\"descriptionNumberColor\">MDF_PropertyRatio</span>.",
          "type": "Buff",
          "statusName": "Milestonemonger"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1894494257\">Boothill_SelfModification</a>[<span class=\"descriptionNumberColor\">Pocket Trickshot</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "ContextOwner",
                  "variableName": "CurEnhance",
                  "value": 0
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
                  "variableName": "_layer",
                  "multiplier": 1
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1542670262\">Boothill_DuelState</a>[<span class=\"descriptionNumberColor\">Standoff</span>]"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Trace Activated",
                        "conditionList": "Point Blank"
                      },
                      "passed": [
                        {
                          "name": "Update Energy",
                          "on": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "value": {
                            "operator": "Variables[0] (10) || RETURN",
                            "displayLines": "10",
                            "constants": [],
                            "variables": [
                              10
                            ]
                          },
                          "isFixed": "* ERR"
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Eidolon Activated",
                            "eidolon": 2
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"827570007\">Boothill_Eidolon2_CD</a>[<span class=\"descriptionNumberColor\">Milestonemonger</span>]",
                            "invertCondition": true
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"827570007\">Boothill_Eidolon2_CD</a>[<span class=\"descriptionNumberColor\">Milestonemonger</span>]"
                        },
                        {
                          "name": "Skill Points Modification",
                          "adjustmentValue": {
                            "operator": "Variables[0] (1) || RETURN",
                            "displayLines": "1",
                            "constants": [],
                            "variables": [
                              1
                            ]
                          },
                          "adjustmentType": "+"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"455996650\">Boothill_Eidolon2_Enhance</a>[<span class=\"descriptionNumberColor\">Milestonemonger</span>]",
                          "duration": {
                            "operator": "Variables[0] (2) || RETURN",
                            "displayLines": "2",
                            "constants": [],
                            "variables": [
                              2
                            ]
                          },
                          "valuePerStack": {
                            "MDF_PropertyRatio": {
                              "operator": "Variables[0] (0.3) || RETURN",
                              "displayLines": "0.3",
                              "constants": [],
                              "variables": [
                                0.3
                              ]
                            }
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
                  "scope": "ContextOwner",
                  "variableName": "CurEnhance",
                  "value": {
                    "operator": "Variables[0] (_layer) || RETURN",
                    "displayLines": "_layer",
                    "constants": [],
                    "variables": [
                      "_layer"
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
                    "value1": "_layer",
                    "compareType": "<",
                    "value2": 1,
                    "contextScope": "ContextModifier"
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_MaxLayer",
            "MDF_StanceAdded",
            "MDF_GainFromPassive"
          ],
          "latentQueue": [
            "Avatar_1315_Enhance"
          ],
          "description": "Every stack increases the Toughness Reduction of the Enhanced Basic Attack by <span class=\"descriptionNumberColor\">MDF_StanceAdded</span>. If the target is Weakness Broken while the Enhanced Basic ATK is being used, deals additional Physical Break DMG based on the number of Pocket Trickshot stacks. This effect can stack up to <span class=\"descriptionNumberColor\">MDF_MaxLayer</span> time(s).",
          "type": "Other",
          "effectName": "Pocket Trickshot",
          "statusName": "Pocket Trickshot",
          "stackLimit": 4,
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1234556186\">Boothill_Ultimate_PhysicalWeakness</a>[<span class=\"descriptionNumberColor\">Extra Physical Weakness</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "STAT_AttachWeakness"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "action": "Attach",
                  "valueList": [
                    "Physical"
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "Implanted with extra Physical Weakness.",
          "type": "Debuff",
          "effectName": "Implant Weakness: Physical",
          "statusName": "Extra Physical Weakness"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__837506667\">M_Boothill_AutoWinDuelTag</a>",
          "stackType": "ReplaceByCaster",
          "stackData": [],
          "latentQueue": [],
          "stackLimit": 999,
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1876667790\">M_Boothill_EnemySpecialMark</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Toggle Skill Mark"
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "Toggle Skill Mark"
                }
              ]
            },
            {
              "eventTrigger": "Active Ability Chosen [Anyone]",
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
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Toggle Skill Mark",
                      "toggle": true
                    }
                  ],
                  "failed": [
                    {
                      "name": "Toggle Skill Mark"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1727126810\">M_Boothill_DuelEndFollowingListener</a>",
          "execute": [
            {
              "eventTrigger": "Action Choice Window [Anyone]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Target Exists",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Is Part Of Team",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "team": "Enemy Team"
                          },
                          {
                            "name": "NOT",
                            "condition": {
                              "name": "Is Part Of Team",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "team": "Enemy Team"
                            }
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1894494257\">Boothill_SelfModification</a>[<span class=\"descriptionNumberColor\">Pocket Trickshot</span>]",
                          "stackLimit": {
                            "operator": "Variables[0] (3) || RETURN",
                            "displayLines": "3",
                            "constants": [],
                            "variables": [
                              3
                            ]
                          },
                          "valuePerStack": {
                            "MDF_MaxLayer": {
                              "operator": "Variables[0] (3) || RETURN",
                              "displayLines": "3",
                              "constants": [],
                              "variables": [
                                3
                              ]
                            },
                            "MDF_StanceAdded": {
                              "operator": "Variables[0] (0.5) || RETURN",
                              "displayLines": "0.5",
                              "constants": [],
                              "variables": [
                                0.5
                              ]
                            },
                            "MDF_GainFromPassive": 1
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
              "eventTrigger": "Action Start [Anyone]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "Ultimate Prep-Phase [Anyone]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "Extra Action/Turn [Anyone]: Start",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-588085300\">M_Boothill_OnDuelEndCheck</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-476363000\">Boothill_DuelTarget</a>[<span class=\"descriptionNumberColor\">Standoff</span>]",
          "stackType": "ReplaceByCaster",
          "targetRestriction": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "targetRestrictionFor": "EnemySelect",
          "modifierFlags": [
            "Taunt",
            "RemoveWhenCasterDead",
            "KeepOnDeathrattle"
          ],
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1876667790\">M_Boothill_EnemySpecialMark</a>"
                }
              ]
            },
            {
              "eventTrigger": "Action Choice Window [Anyone]",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"2020667561\">Duel_Win_Check</a>"
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
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "_is_attacked_by_target",
                    "compareType": ">=",
                    "value2": 1,
                    "contextScope": "ContextModifier"
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Defender",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                          "value": "MDF_PropertyRatio"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-229259724\">Duel_Break_Check</a>"
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
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1542670262\">Boothill_DuelState</a>[<span class=\"descriptionNumberColor\">Standoff</span>]"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_is_attacked_by_target",
                      "value": 1
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_is_attacked_by_target",
                      "value": 0
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Being Attacked End [Owner]",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-229259724\">Duel_Break_Check</a>"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_is_attacked_by_target",
                  "value": 0
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_break_count",
                  "context": "ContextModifier",
                  "value": 1
                }
              ]
            },
            {
              "eventTrigger": "Ultimate Prep-Phase [Anyone]",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"2020667561\">Duel_Win_Check</a>"
                }
              ]
            },
            {
              "eventTrigger": "Extra Action/Turn [Anyone]: Start",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"2020667561\">Duel_Win_Check</a>"
                }
              ]
            },
            {
              "eventTrigger": "When Modifier is Added [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"-588085300\">M_Boothill_OnDuelEndCheck</a>"
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-229259724\">Duel_Break_Check</a>"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-588085300\">M_Boothill_OnDuelEndCheck</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Injected Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"2020667561\">Duel_Win_Check</a>"
                }
              ]
            }
          ],
          "modifierFunctions": [
            {
              "name": "CharacterFunctions",
              "functionName": "<a class=\"gTempYellow\" id=\"fun__2020667561\">Duel_Win_Check</a>",
              "parse": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1542670262\">Boothill_DuelState</a>[<span class=\"descriptionNumberColor\">Standoff</span>]",
                    "invertCondition": true
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            },
            {
              "name": "CharacterFunctions",
              "functionName": "<a class=\"gTempYellow\" id=\"fun__-229259724\">Duel_Break_Check</a>",
              "parse": [
                {
                  "name": "Looped Event",
                  "maxLoops": {
                    "operator": "Variables[0] (_break_count) || RETURN",
                    "displayLines": "_break_count",
                    "constants": [],
                    "variables": [
                      "_break_count"
                    ]
                  },
                  "Event": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"837506667\">M_Boothill_AutoWinDuelTag</a>",
                      "addStacksPerTrigger": 1
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_break_count",
                  "value": 0
                }
              ]
            }
          ],
          "stackData": [
            "MDF_PropertyRatio"
          ],
          "latentQueue": [],
          "description": "This is considered a Taunt state and only %CasterName can be selected as the attack target. Increases DMG received by <span class=\"descriptionNumberColor\">MDF_PropertyRatio</span> when attacked by %CasterName.",
          "type": "Debuff",
          "effectName": "Standoff",
          "statusName": "Standoff"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1542670262\">Boothill_DuelState</a>[<span class=\"descriptionNumberColor\">Standoff</span>]",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "modifierFlags": [
            "ListenBattleEventSkill"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All(with Unselectable)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-476363000\">Boothill_DuelTarget</a>[<span class=\"descriptionNumberColor\">Standoff</span>]"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"837506667\">M_Boothill_AutoWinDuelTag</a>"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"837506667\">M_Boothill_AutoWinDuelTag</a>"
                    }
                  ]
                },
                {
                  "name": "Update Ability Enhance Button",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "display": "Hide",
                  "abilityName": "Basic ATK"
                },
                {
                  "name": "Update Ability Binding",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "abilityName": "Skill01",
                  "skillSlot": "Basic ATK"
                }
              ]
            },
            {
              "eventTrigger": "Action Choice Window [Anyone]",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1682994070\">Duel_End_Check</a>"
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
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "_is_attacked_by_target",
                    "compareType": ">=",
                    "value2": 1,
                    "contextScope": "ContextModifier"
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Defender",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                          "value": "MDF_PropertyRatio"
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
                  "name": "Disable Abilities",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "abilityTypes": [
                    "Skill"
                  ]
                },
                {
                  "name": "Update Ability Enhance Button",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "display": "Show",
                  "abilityName": "Basic ATK"
                },
                {
                  "name": "Update Ability Binding",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "abilityName": "Skill11",
                  "skillSlot": "Basic ATK"
                }
              ]
            },
            {
              "eventTrigger": "Entity Death [Anyone]",
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
                        "modifier": "<a class=\"gModGreen\" id=\"837506667\">M_Boothill_AutoWinDuelTag</a>"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-476363000\">Boothill_DuelTarget</a>[<span class=\"descriptionNumberColor\">Standoff</span>]"
                      },
                      {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Living State",
                            "state": "Mask_LimboOnly",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            }
                          },
                          {
                            "name": "Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "flagName": "Deathrattle"
                          }
                        ],
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    "Modifier Deletes Itself"
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
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-476363000\">Boothill_DuelTarget</a>[<span class=\"descriptionNumberColor\">Standoff</span>]"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_is_attacked_by_target",
                      "value": 1
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_is_attacked_by_target",
                      "value": 0
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Being Attacked End [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_is_attacked_by_target",
                  "value": 0
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Anyone]: End",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1682994070\">Duel_End_Check</a>"
                }
              ]
            },
            {
              "eventTrigger": "Ultimate Prep-Phase [Anyone]",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1682994070\">Duel_End_Check</a>"
                }
              ]
            },
            {
              "eventTrigger": "Extra Action/Turn [Anyone]: Start",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1682994070\">Duel_End_Check</a>"
                }
              ]
            },
            {
              "eventTrigger": "Injected Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1682994070\">Duel_End_Check</a>"
                }
              ]
            },
            {
              "eventTrigger": "Injected Ability Use [Anyone]: End",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1682994070\">Duel_End_Check</a>"
                }
              ]
            },
            {
              "eventTrigger": "Injected Ability Use [Anyone]: Aborted",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1682994070\">Duel_End_Check</a>"
                }
              ]
            }
          ],
          "modifierFunctions": [
            {
              "name": "CharacterFunctions",
              "functionName": "<a class=\"gTempYellow\" id=\"fun__-1682994070\">Duel_End_Check</a>",
              "parse": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "includeDyingTargets": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-476363000\">Boothill_DuelTarget</a>[<span class=\"descriptionNumberColor\">Standoff</span>]"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-588085300\">M_Boothill_OnDuelEndCheck</a>"
                    }
                  ],
                  "noTargetFound": [
                    "Modifier Deletes Itself"
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"837506667\">M_Boothill_AutoWinDuelTag</a>"
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "searchRandom": true,
                      "includeDyingTargets": true,
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
                            "modifier": "<a class=\"gModGreen\" id=\"-476363000\">Boothill_DuelTarget</a>[<span class=\"descriptionNumberColor\">Standoff</span>]"
                          },
                          {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Living State",
                                "state": "Mask_LimboOnly",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                }
                              },
                              {
                                "name": "Has Flag",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "flagName": "Deathrattle",
                                "invertCondition": true
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
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1727126810\">M_Boothill_DuelEndFollowingListener</a>",
                          "duration": 1,
                          "silentAdd": true
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
                      "includeDyingTargets": true,
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
                            "modifier": "<a class=\"gModGreen\" id=\"-476363000\">Boothill_DuelTarget</a>[<span class=\"descriptionNumberColor\">Standoff</span>]"
                          },
                          {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Living State",
                                "state": "Mask_LimboOnly",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                }
                              },
                              {
                                "name": "Has Flag",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "flagName": "Deathrattle"
                              }
                            ],
                            "invertCondition": true
                          }
                        ]
                      },
                      "ifTargetFound": [
                        "Modifier Deletes Itself"
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_PropertyRatio"
          ],
          "latentQueue": [],
          "description": "When getting attacked by the target in the Standoff, increases the DMG received by <span class=\"descriptionNumberColor\">MDF_PropertyRatio</span>. The Basic ATK becomes Enhanced.",
          "type": "Other",
          "effectName": "Standoff",
          "statusName": "Standoff",
          "duration": 2
        }
      ],
      "references": []
    }
  }
}