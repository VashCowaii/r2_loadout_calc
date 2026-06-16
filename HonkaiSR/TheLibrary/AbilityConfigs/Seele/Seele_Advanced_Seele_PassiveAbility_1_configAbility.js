const configAbility = {
  "fileName": "Seele_Advanced_Seele_PassiveAbility_1",
  "childAbilityList": [
    "Seele_Advanced_Seele_Bonus_Camera",
    "Seele_Advanced_Seele_PassiveAbility_1",
    "Seele_Advanced_Seele_Bonus"
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
      "modifier": "<a class=\"gModGreen\" id=\"-1556942892\">Advanced_Seele_Ability02_AutoInsertListen</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Modifier Holder}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1622519523\">Advanced_Seele_Ability02InsertReady_ShowBonus</a>[<span class=\"descriptionNumberColor\">Sheathed Blade</span>]"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Rippling Waves"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1743016793\">Ability01PreShowModifier_Fixed</a>",
          "valuePerStack": {
            "MDF_Ability01_Delay": {
              "operator": "Variables[0] (0.2) || RETURN",
              "displayLines": "0.2",
              "constants": [],
              "variables": [
                0.2
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
      "modifier": "<a class=\"gModGreen\" id=\"-894890999\">Ability02PreShowModifier</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"959272575\">Local_Seele_ListenKill</a>",
      "valuePerStack": {
        "dmg_percent": {
          "operator": "Variables[0] (0.8) || RETURN",
          "displayLines": "0.8",
          "constants": [],
          "variables": [
            0.8
          ]
        }
      }
    },
    {
      "name": "Update Displayed Energy Bar",
      "assignState": "True",
      "priorState": "Normal",
      "bar#": 1,
      "cooldown": 0
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1556942892\">Advanced_Seele_Ability02_AutoInsertListen</a>",
      "execute": [
        {
          "eventTrigger": "Turn [Owner]: Pre-action Phase",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"627315963\">Advanced_Seele_Ability02InsertCheck</a>"
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
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1622519523\">Advanced_Seele_Ability02InsertReady_ShowBonus</a>[<span class=\"descriptionNumberColor\">Sheathed Blade</span>]"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Parameter Target's Attack Targets}}.[[sortByHPCurrent]]"
                  },
                  "includeDyingTargets": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value1": "CurrentHP%",
                        "compareType": "<=",
                        "value2": {
                          "operator": "Variables[0] (0.5) || RETURN",
                          "displayLines": "0.5",
                          "constants": [],
                          "variables": [
                            0.5
                          ]
                        }
                      },
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
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"497837059\">Advanced_Seele_Ability02InsertMuteSp</a>"
                    },
                    {
                      "name": "Inject Extra-Turn",
                      "actionTag": "Advanced_Seele_Ability02InsertCheck",
                      "skillType": "ControlSkill02",
                      "forceAction": true,
                      "conditions": {
                        "name": "Insert Ability Condition",
                        "type": "SameTagInsertUnusedCount",
                        "typeValue": 1
                      },
                      "castTarget": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "afterInjection": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"627315963\">Advanced_Seele_Ability02InsertCheck</a>"
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"497837059\">Advanced_Seele_Ability02InsertMuteSp</a>"
                        }
                      ],
                      "abortFlags": [
                        "STAT_CTRL",
                        "DisableAction"
                      ],
                      "ignoreCost": true
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
      "for": "<a class=\"gModGreen\" id=\"mod__1311778178\">Local_Seele_PassiveActionModifier</a>[<span class=\"descriptionNumberColor\">Resurgence</span>]",
      "description": "Currently in the extra turn provided by \"Resurgence\".",
      "type": "Other",
      "statusName": "Resurgence"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__959272575\">Local_Seele_ListenKill</a>",
      "stackData": [
        "dmg_percent"
      ],
      "execute": [
        {
          "eventTrigger": "Turn [Owner]: Pre-action Phase",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "InsertAction",
              "value": 0
            }
          ]
        },
        {
          "eventTrigger": "Turn [Anyone]: End",
          "execute": [
            {
              "name": "Update Displayed Energy Bar",
              "priorState": "Normal"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1311778178\">Local_Seele_PassiveActionModifier</a>[<span class=\"descriptionNumberColor\">Resurgence</span>]"
            }
          ]
        },
        {
          "eventTrigger": "Got a Kill [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "Seele_BonusInsertAction",
                    "compareType": "=",
                    "value2": 0
                  },
                  {
                    "name": "Is Ability Ongoing",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    }
                  },
                  {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Skill Type",
                        "skillType": "Basic ATK"
                      },
                      {
                        "name": "Skill Type",
                        "skillType": "Skill"
                      },
                      {
                        "name": "Skill Type",
                        "skillType": "Ultimate"
                      }
                    ]
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "InsertAction",
                  "value": 1
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-472499117\">Advanced_Seele_Passive_DamageUp</a>[<span class=\"descriptionNumberColor\">Amplification</span>]",
                  "duration": {
                    "operator": "Variables[0] (3) || RETURN",
                    "displayLines": "3",
                    "constants": [],
                    "variables": [
                      3
                    ]
                  },
                  "valuePerStack": {
                    "seele_dmg_percent": {
                      "operator": "Variables[0] (dmg_percent) || RETURN",
                      "displayLines": "dmg_percent",
                      "constants": [],
                      "variables": [
                        "dmg_percent"
                      ]
                    },
                    "MDF_Penetrate": {
                      "operator": "Variables[0] (0.25) || RETURN",
                      "displayLines": "0.25",
                      "constants": [],
                      "variables": [
                        0.25
                      ]
                    }
                  }
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
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1484506463\">Advanced_Seele_Eidolon6_Flag</a>[<span class=\"descriptionNumberColor\">Butterfly Flurry</span>]",
                "includePreDeath": true
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "Seele_BonusInsertActionCount",
                  "value": {
                    "operator": "Variables[0] (Seele_BonusInsertActionCount) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(Seele_BonusInsertActionCount + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "Seele_BonusInsertActionCount"
                    ]
                  }
                },
                {
                  "name": "Inject Extra-Turn",
                  "actionTag": "Seele_BonusInsertAction",
                  "abilityName": "Advanced_Seele_Bonus",
                  "afterInjection": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Seele_BonusInsertAction",
                      "value": 0
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Seele_BonusInsertActionCount",
                      "value": {
                        "operator": "Variables[0] (Seele_BonusInsertActionCount) || Constants[0] (1) || SUB || RETURN",
                        "displayLines": "(Seele_BonusInsertActionCount - 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "Seele_BonusInsertActionCount"
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "Seele_BonusInsertActionCount",
                        "compareType": "=",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "priorState": "Normal"
                        }
                      ]
                    }
                  ],
                  "condition": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"596149428\">Enemy_W5_Painter_Inferno</a>[<span class=\"descriptionNumberColor\">Grudge Ablaze</span>]",
                    "invertCondition": true
                  }
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "priorState": "Active"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-472499117\">Advanced_Seele_Passive_DamageUp</a>[<span class=\"descriptionNumberColor\">Amplification</span>]",
                  "duration": {
                    "operator": "Variables[0] (3) || RETURN",
                    "displayLines": "3",
                    "constants": [],
                    "variables": [
                      3
                    ]
                  },
                  "valuePerStack": {
                    "seele_dmg_percent": {
                      "operator": "Variables[0] (dmg_percent) || RETURN",
                      "displayLines": "dmg_percent",
                      "constants": [],
                      "variables": [
                        "dmg_percent"
                      ]
                    },
                    "MDF_Penetrate": {
                      "operator": "Variables[0] (0.25) || RETURN",
                      "displayLines": "0.25",
                      "constants": [],
                      "variables": [
                        0.25
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Got a Queued Kill [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "Seele_BonusInsertAction",
                    "compareType": "=",
                    "value2": 0
                  },
                  {
                    "name": "Is Ability Ongoing",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    }
                  },
                  {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Skill Type",
                        "skillType": "Basic ATK"
                      },
                      {
                        "name": "Skill Type",
                        "skillType": "Skill"
                      },
                      {
                        "name": "Skill Type",
                        "skillType": "Ultimate"
                      }
                    ]
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "InsertAction",
                  "value": 1
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-472499117\">Advanced_Seele_Passive_DamageUp</a>[<span class=\"descriptionNumberColor\">Amplification</span>]",
                  "duration": {
                    "operator": "Variables[0] (3) || RETURN",
                    "displayLines": "3",
                    "constants": [],
                    "variables": [
                      3
                    ]
                  },
                  "valuePerStack": {
                    "seele_dmg_percent": {
                      "operator": "Variables[0] (dmg_percent) || RETURN",
                      "displayLines": "dmg_percent",
                      "constants": [],
                      "variables": [
                        "dmg_percent"
                      ]
                    },
                    "MDF_Penetrate": {
                      "operator": "Variables[0] (0.25) || RETURN",
                      "displayLines": "0.25",
                      "constants": [],
                      "variables": [
                        0.25
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Owner]: End",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "Seele_BonusInsertAction",
              "value": 0
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "InsertAction",
                "compareType": ">",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "InsertAction",
                  "value": 0
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemies Still Alive",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "includeNonTargets": true
                  },
                  "passed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "priorState": "Active"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "priorState": "Normal"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1311778178\">Local_Seele_PassiveActionModifier</a>[<span class=\"descriptionNumberColor\">Resurgence</span>]"
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "Seele_BonusInsertActionCount",
                  "value": {
                    "operator": "Variables[0] (Seele_BonusInsertActionCount) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(Seele_BonusInsertActionCount + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "Seele_BonusInsertActionCount"
                    ]
                  }
                },
                {
                  "name": "Inject Extra-Turn",
                  "actionTag": "Seele_BonusInsertAction",
                  "abilityName": "Advanced_Seele_Bonus",
                  "afterInjection": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Seele_BonusInsertAction",
                      "value": 0
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Seele_BonusInsertActionCount",
                      "value": {
                        "operator": "Variables[0] (Seele_BonusInsertActionCount) || Constants[0] (1) || SUB || RETURN",
                        "displayLines": "(Seele_BonusInsertActionCount - 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "Seele_BonusInsertActionCount"
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "Seele_BonusInsertActionCount",
                        "compareType": "=",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "priorState": "Normal"
                        }
                      ]
                    }
                  ],
                  "condition": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"596149428\">Enemy_W5_Painter_Inferno</a>[<span class=\"descriptionNumberColor\">Grudge Ablaze</span>]",
                    "invertCondition": true
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Extra Turn Action Injection: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Parameter String",
                "compareType": "=",
                "value2": "Seele_BonusInsertAction"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1311778178\">Local_Seele_PassiveActionModifier</a>[<span class=\"descriptionNumberColor\">Resurgence</span>]"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Extra Action/Turn [Owner]: Start ",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Parameter String",
                "compareType": "=",
                "value2": "Seele_BonusInsertAction"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "Seele_BonusInsertAction",
                  "value": 1
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "Seele_BonusInsertActionCount",
                  "value": {
                    "operator": "Variables[0] (Seele_BonusInsertActionCount) || Constants[0] (1) || SUB || RETURN",
                    "displayLines": "(Seele_BonusInsertActionCount - 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "Seele_BonusInsertActionCount"
                    ]
                  }
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "Seele_BonusInsertAction",
                  "value": 0
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Extra Action/Turn [Owner]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Parameter String",
                "compareType": "=",
                "value2": "Seele_BonusInsertAction"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "Seele_BonusInsertAction",
                  "value": 0
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1311778178\">Local_Seele_PassiveActionModifier</a>[<span class=\"descriptionNumberColor\">Resurgence</span>]"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Seele_BonusInsertActionCount",
                "compareType": "=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Update Displayed Energy Bar",
                  "priorState": "Normal"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-894890999\">Ability02PreShowModifier</a>",
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "target": {
          "name": "Target Name",
          "target": "{{Modifier Holder}}"
        },
        "skillType": [
          "Skill"
        ],
        "conditions": {
          "name": "AND",
          "conditionList": [
            {
              "name": "NOT",
              "condition": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1301190315\">Advanced_Seele_BPAbility_SpeedUp</a>[<span class=\"descriptionNumberColor\">SPD Boost</span>]"
              }
            },
            {
              "name": "OR",
              "conditionList": [
                {
                  "name": "NOT",
                  "condition": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1818761365\">Advanced_Seele_BPAbility_SpeedUpEidolon2</a>[<span class=\"descriptionNumberColor\">SPD Boost</span>]"
                  }
                },
                {
                  "name": "Compare: Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "value1": "<a class=\"gModGreen\" id=\"1818761365\">Advanced_Seele_BPAbility_SpeedUpEidolon2</a>[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
                  "compareType": "<",
                  "value2": {
                    "operator": "Variables[0] (2) || RETURN",
                    "displayLines": "2",
                    "constants": [],
                    "variables": [
                      2
                    ]
                  },
                  "valueType": "Layer"
                }
              ]
            }
          ]
        },
        "delayAdvancePreview": {
          "name": "Delay/Advance Preview",
          "previewValue": "0.25(SPD Change)"
        }
      }
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1743016793\">Ability01PreShowModifier_Fixed</a>",
      "stackData": [
        "MDF_Skill01_Delay"
      ],
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "target": {
          "name": "Target Name",
          "target": "{{Modifier Holder}}"
        },
        "skillType": [
          "Basic ATK"
        ],
        "delayAdvancePreview": {
          "name": "Delay/Advance Preview",
          "previewValue": {
            "operator": "Variables[0] (MDF_Skill01_Delay) || INVERT || RETURN",
            "displayLines": "-MDF_Skill01_Delay",
            "constants": [],
            "variables": [
              "MDF_Skill01_Delay"
            ]
          }
        }
      }
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Caster}}"
  }
}