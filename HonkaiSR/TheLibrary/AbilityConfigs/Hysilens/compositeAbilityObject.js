const entityPageType = "char"
const compositeAbilityObject = {
  "fullCharacterName": "Hysilens",
  "trimCharacterName": "Hysilens",
  "abilityList": [
    "Hysilens_Modifiers",
    "Hysilens_LocalPlayer_Harscyline_TechniqueUsage_TriggerHitMonster",
    "Hysilens_LocalPlayer_StandardAbility_AttackBreak",
    "Hysilens_LocalPlayer_Harscyline_TechniqueUsage",
    "Hysilens_LocalPlayer_Harscyline_NormalAtk01",
    "Hysilens_Harscyline_TechniqueInLevel",
    "Hysilens_Harscyline_PassiveAbility01",
    "Hysilens_Harscyline_Ability03_EnterReady",
    "Hysilens_Harscyline_Ability03_Part02",
    "Hysilens_Harscyline_Ability03_Part01",
    "Hysilens_Harscyline_Ability02_Part02",
    "Hysilens_Harscyline_Ability02_Part01",
    "Hysilens_Harscyline_Ability01_Part02",
    "Hysilens_Harscyline_Ability01_Part01",
    "Hysilens_StageAbility_MazeStandard_EnterBattle_Physical",
    "Hysilens_Functions"
  ],
  "abilityObject": {
    "Hysilens_Modifiers": {
      "fileName": "Hysilens_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__50915189\">ADV_StageAbility_Maze_Harscyline_Enemy_ForShow</a>",
          "counter": 1,
          "stackType": "Refresh",
          "modifierFlags": [
            "Enchanted"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1537124449\">ADV_StageAbility_Maze_Harscyline_00</a>",
          "counter": 1,
          "stackType": "Refresh"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__762236364\">Harscyline_Eidolon1_DamageUp</a>",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Anyone]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
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
                      },
                      {
                        "name": "Is Part Of",
                        "target1": {
                          "name": "Target Name",
                          "target": "{{All Team Members}}.[[addBattleEvents]]"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}.[[getSourceCreator]]"
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-446302809\">ModifyDamageData_IndependentDamageAddedRatio</a>",
                      "variables": {
                        "parameter[0]_IndependentDamageAddedRatio": {
                          "displayLines": "(MDF_PropertyRatio - 1)"
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
          "for": "<a class=\"gModGreen\" id=\"mod__1305457610\">Harscyline_DOTDamageUpPre</a>",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "priorityLevel": -80,
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"762236364\">Harscyline_Eidolon1_DamageUp</a>",
                  "valuePerStack": {
                    "MDF_PropertyRatio": {
                      "displayLines": "1.16"
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1978589432\">Harscyline_DOT_Poison2</a>[<span class=\"descriptionNumberColor\">Wind Shear</span>]",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "modifierFlags": [
            "STAT_DOT",
            "STAT_DOT_Poison",
            "CanBeAddedToServant",
            "CanListenServantCallback"
          ],
          "useEntitySnapshot": true,
          "description": "Takes Wind DMG at the start of each turn for a certain number of turns.",
          "type": "Debuff",
          "effectName": "Wind Shear",
          "statusName": "Wind Shear",
          "stackLimit": 5,
          "addStacksPerTrigger": 1,
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
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
                  "variableName": "Modifier_Poison_PoisonLayer",
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
                    "Damage": {
                      "displayLines": "(Modifier_Poison_DamagePercentage * Modifier_Poison_PoisonLayer)"
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "DOT"
                  }
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
                  "variableName": "Modifier_Poison_PoisonLayer",
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
                    "Damage": {
                      "displayLines": "((DOT_TriggerRatio * Modifier_Poison_DamagePercentage) * Modifier_Poison_PoisonLayer)"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1515140485\">Harscyline_DOT_Burn2</a>[<span class=\"descriptionNumberColor\">Burn</span>]",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "modifierFlags": [
            "STAT_DOT",
            "STAT_DOT_Burn",
            "CanBeAddedToServant",
            "CanListenServantCallback"
          ],
          "useEntitySnapshot": true,
          "description": "Takes Fire DMG at the start of each turn for a certain number of turns.",
          "type": "Debuff",
          "effectName": "Burn",
          "statusName": "Burn",
          "stackLimit": 1,
          "addStacksPerTrigger": 1,
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": "Is NOT in Auto-Battle State"
                }
              ]
            },
            {
              "eventTrigger": "Turn [Owner]: Pre-action Phase",
              "execute": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Fire",
                    "Damage": {
                      "displayLines": "(Modifier_Burn_DamagePercentage * _Layer)"
                    },
                    "DamageExtra": {
                      "displayLines": "(Modifier_Burn_DamagePercentage_Defence * _Layer)"
                    },
                    "DamageFlat": {
                      "displayLines": "(Modifier_Burn_DamageValue * _Layer)"
                    },
                    "dmgFormulaExtra": "DEF Scaling",
                    "Toughness": null,
                    "Tags": [
                      "Burn"
                    ],
                    "attackType": "DOT"
                  }
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
                  "variableName": "_Layer",
                  "multiplier": 1
                }
              ]
            },
            {
              "eventTrigger": "Custom Event",
              "execute": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Fire",
                    "Damage": {
                      "displayLines": "((DOT_TriggerRatio * Modifier_Burn_DamagePercentage) * _Layer)"
                    },
                    "DamageExtra": {
                      "displayLines": "((DOT_TriggerRatio * Modifier_Burn_DamagePercentage_Defence) * _Layer)"
                    },
                    "DamageFlat": {
                      "displayLines": "((DOT_TriggerRatio * Modifier_Burn_DamageValue) * _Layer)"
                    },
                    "dmgFormulaExtra": "DEF Scaling",
                    "Toughness": null,
                    "Tags": [
                      "Burn"
                    ],
                    "attackType": "DOT"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1970678013\">Harscyline_DOT_Electric2</a>[<span class=\"descriptionNumberColor\">Shock</span>]",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "modifierFlags": [
            "STAT_DOT",
            "STAT_DOT_Electric",
            "CanBeAddedToServant",
            "CanListenServantCallback"
          ],
          "useEntitySnapshot": true,
          "description": "Takes Lightning DMG at the start of each turn for a certain number of turns.",
          "type": "Debuff",
          "effectName": "Shock",
          "statusName": "Shock",
          "stackLimit": 1,
          "addStacksPerTrigger": 1,
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": "Is NOT in Auto-Battle State"
                }
              ]
            },
            {
              "eventTrigger": "Turn [Owner]: Pre-action Phase",
              "execute": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Thunder",
                    "Damage": {
                      "displayLines": "(Modifier_Electric_DamagePercentage * _Layer)"
                    },
                    "DamageFlat": {
                      "displayLines": "(Modifier_Electric_DamageValue * _Layer)"
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "DOT"
                  }
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
                  "variableName": "_Layer",
                  "multiplier": 1
                }
              ]
            },
            {
              "eventTrigger": "Custom Event",
              "execute": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Thunder",
                    "Damage": {
                      "displayLines": "((DOT_TriggerRatio * Modifier_Electric_DamagePercentage) * _Layer)"
                    },
                    "DamageFlat": {
                      "displayLines": "((DOT_TriggerRatio * Modifier_Electric_DamageValue) * _Layer)"
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
          "for": "<a class=\"gModGreen\" id=\"mod__2146839416\">Harscyline_DOT_Tear2</a>[<span class=\"descriptionNumberColor\">Bleed</span>]",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "modifierFlags": [
            "STAT_DOT",
            "STAT_DOT_Bleed",
            "CanBeAddedToServant",
            "CanListenServantCallback"
          ],
          "useEntitySnapshot": true,
          "description": "Takes Physical DMG at the start of each turn for a certain number of turns.",
          "type": "Debuff",
          "effectName": "Bleed",
          "statusName": "Bleed",
          "stackLimit": 1,
          "addStacksPerTrigger": 1,
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "variableName": "MDF_TargetMaxHP",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "variableName": "MDF_CasterAttack",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Snapshot Stat Source}}"
                  },
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">AttackSUM</span>&nbsp;"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_TargetMaxHP",
                    "compareType": ">=",
                    "value2": {
                      "displayLines": "((MDF_CasterAttack * Modifier_Tear_MaxPercentage) / Modifier_Tear_DamageRatio)"
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "(MDF_CasterAttack * Modifier_Tear_MaxPercentage)"
                      },
                      "variableName": "MDF_DamageValue"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "(MDF_TargetMaxHP * Modifier_Tear_DamageRatio)"
                      },
                      "variableName": "MDF_DamageValue"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Turn [Owner]: Pre-action Phase",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "variableName": "MDF_TargetMaxHP",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "variableName": "MDF_CasterAttack",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Snapshot Stat Source}}"
                  },
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">AttackSUM</span>&nbsp;"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_TargetMaxHP",
                    "compareType": ">=",
                    "value2": {
                      "displayLines": "((MDF_CasterAttack * Modifier_Tear_MaxPercentage) / Modifier_Tear_DamageRatio)"
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "(MDF_CasterAttack * Modifier_Tear_MaxPercentage)"
                      },
                      "variableName": "MDF_DamageValue"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "(MDF_TargetMaxHP * Modifier_Tear_DamageRatio)"
                      },
                      "variableName": "MDF_DamageValue"
                    }
                  ]
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Physical",
                    "DamageFlat": {
                      "displayLines": "MDF_DamageValue"
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "DOT"
                  }
                }
              ]
            },
            {
              "eventTrigger": "Custom Event",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "variableName": "MDF_TargetMaxHP",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "variableName": "MDF_CasterAttack",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Snapshot Stat Source}}"
                  },
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">AttackSUM</span>&nbsp;"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_TargetMaxHP",
                    "compareType": ">=",
                    "value2": {
                      "displayLines": "((MDF_CasterAttack * Modifier_Tear_MaxPercentage) / Modifier_Tear_DamageRatio)"
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "(MDF_CasterAttack * Modifier_Tear_MaxPercentage)"
                      },
                      "variableName": "MDF_DamageValue"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "(MDF_TargetMaxHP * Modifier_Tear_DamageRatio)"
                      },
                      "variableName": "MDF_DamageValue"
                    }
                  ]
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Physical",
                    "DamageFlat": {
                      "displayLines": "(DOT_TriggerRatio * MDF_DamageValue)"
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
          "for": "<a class=\"gModGreen\" id=\"mod__1250170394\">Harscyline_DOT_Poison</a>[<span class=\"descriptionNumberColor\">Wind Shear</span>]",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "modifierFlags": [
            "STAT_DOT",
            "STAT_DOT_Poison",
            "CanBeAddedToServant",
            "CanListenServantCallback"
          ],
          "useEntitySnapshot": true,
          "description": "Takes Wind DMG at the start of each turn for a certain number of turns.",
          "type": "Debuff",
          "effectName": "Wind Shear",
          "statusName": "Wind Shear",
          "stackLimit": 5,
          "addStacksPerTrigger": 1,
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
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
                  "variableName": "Modifier_Poison_PoisonLayer",
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
                    "Damage": {
                      "displayLines": "(Modifier_Poison_DamagePercentage * Modifier_Poison_PoisonLayer)"
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "DOT"
                  }
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
                  "variableName": "Modifier_Poison_PoisonLayer",
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
                    "Damage": {
                      "displayLines": "((DOT_TriggerRatio * Modifier_Poison_DamagePercentage) * Modifier_Poison_PoisonLayer)"
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
          "for": "<a class=\"gModGreen\" id=\"mod__566707275\">Harscyline_DOT_Burn</a>[<span class=\"descriptionNumberColor\">Burn</span>]",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "modifierFlags": [
            "STAT_DOT",
            "STAT_DOT_Burn",
            "CanBeAddedToServant",
            "CanListenServantCallback"
          ],
          "useEntitySnapshot": true,
          "description": "Takes Fire DMG at the start of each turn for a certain number of turns.",
          "type": "Debuff",
          "effectName": "Burn",
          "statusName": "Burn",
          "stackLimit": 1,
          "addStacksPerTrigger": 1,
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": "Is NOT in Auto-Battle State"
                }
              ]
            },
            {
              "eventTrigger": "Turn [Owner]: Pre-action Phase",
              "execute": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Fire",
                    "Damage": {
                      "displayLines": "(Modifier_Burn_DamagePercentage * _Layer)"
                    },
                    "DamageExtra": {
                      "displayLines": "(Modifier_Burn_DamagePercentage_Defence * _Layer)"
                    },
                    "DamageFlat": {
                      "displayLines": "(Modifier_Burn_DamageValue * _Layer)"
                    },
                    "dmgFormulaExtra": "DEF Scaling",
                    "Toughness": null,
                    "Tags": [
                      "Burn"
                    ],
                    "attackType": "DOT"
                  }
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
                  "variableName": "_Layer",
                  "multiplier": 1
                }
              ]
            },
            {
              "eventTrigger": "Custom Event",
              "execute": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Fire",
                    "Damage": {
                      "displayLines": "((DOT_TriggerRatio * Modifier_Burn_DamagePercentage) * _Layer)"
                    },
                    "DamageExtra": {
                      "displayLines": "((DOT_TriggerRatio * Modifier_Burn_DamagePercentage_Defence) * _Layer)"
                    },
                    "DamageFlat": {
                      "displayLines": "((DOT_TriggerRatio * Modifier_Burn_DamageValue) * _Layer)"
                    },
                    "dmgFormulaExtra": "DEF Scaling",
                    "Toughness": null,
                    "Tags": [
                      "Burn"
                    ],
                    "attackType": "DOT"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-593885923\">Harscyline_DOT_Electric</a>[<span class=\"descriptionNumberColor\">Shock</span>]",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "modifierFlags": [
            "STAT_DOT",
            "STAT_DOT_Electric",
            "CanBeAddedToServant",
            "CanListenServantCallback"
          ],
          "useEntitySnapshot": true,
          "description": "Takes Lightning DMG at the start of each turn for a certain number of turns.",
          "type": "Debuff",
          "effectName": "Shock",
          "statusName": "Shock",
          "stackLimit": 1,
          "addStacksPerTrigger": 1,
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": "Is NOT in Auto-Battle State"
                }
              ]
            },
            {
              "eventTrigger": "Turn [Owner]: Pre-action Phase",
              "execute": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Thunder",
                    "Damage": {
                      "displayLines": "(Modifier_Electric_DamagePercentage * _Layer)"
                    },
                    "DamageFlat": {
                      "displayLines": "(Modifier_Electric_DamageValue * _Layer)"
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "DOT"
                  }
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
                  "variableName": "_Layer",
                  "multiplier": 1
                }
              ]
            },
            {
              "eventTrigger": "Custom Event",
              "execute": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Thunder",
                    "Damage": {
                      "displayLines": "((DOT_TriggerRatio * Modifier_Electric_DamagePercentage) * _Layer)"
                    },
                    "DamageFlat": {
                      "displayLines": "((DOT_TriggerRatio * Modifier_Electric_DamageValue) * _Layer)"
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
          "for": "<a class=\"gModGreen\" id=\"mod__850932122\">Harscyline_DOT_Tear</a>[<span class=\"descriptionNumberColor\">Bleed</span>]",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "modifierFlags": [
            "STAT_DOT",
            "STAT_DOT_Bleed",
            "CanBeAddedToServant",
            "CanListenServantCallback"
          ],
          "useEntitySnapshot": true,
          "description": "Takes Physical DMG at the start of each turn for a certain number of turns.",
          "type": "Debuff",
          "effectName": "Bleed",
          "statusName": "Bleed",
          "stackLimit": 1,
          "addStacksPerTrigger": 1,
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "variableName": "MDF_TargetMaxHP",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "variableName": "MDF_CasterAttack",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Snapshot Stat Source}}"
                  },
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">AttackSUM</span>&nbsp;"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_TargetMaxHP",
                    "compareType": ">=",
                    "value2": {
                      "displayLines": "((MDF_CasterAttack * Modifier_Tear_MaxPercentage) / Modifier_Tear_DamageRatio)"
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "(MDF_CasterAttack * Modifier_Tear_MaxPercentage)"
                      },
                      "variableName": "MDF_DamageValue"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "(MDF_TargetMaxHP * Modifier_Tear_DamageRatio)"
                      },
                      "variableName": "MDF_DamageValue"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Turn [Owner]: Pre-action Phase",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "variableName": "MDF_TargetMaxHP",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "variableName": "MDF_CasterAttack",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Snapshot Stat Source}}"
                  },
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">AttackSUM</span>&nbsp;"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_TargetMaxHP",
                    "compareType": ">=",
                    "value2": {
                      "displayLines": "((MDF_CasterAttack * Modifier_Tear_MaxPercentage) / Modifier_Tear_DamageRatio)"
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "(MDF_CasterAttack * Modifier_Tear_MaxPercentage)"
                      },
                      "variableName": "MDF_DamageValue"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "(MDF_TargetMaxHP * Modifier_Tear_DamageRatio)"
                      },
                      "variableName": "MDF_DamageValue"
                    }
                  ]
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Physical",
                    "DamageFlat": {
                      "displayLines": "(MDF_DamageValue * _Layer)"
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "DOT"
                  }
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
                  "variableName": "_Layer",
                  "multiplier": 1
                }
              ]
            },
            {
              "eventTrigger": "Custom Event",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "variableName": "MDF_TargetMaxHP",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "variableName": "MDF_CasterAttack",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Snapshot Stat Source}}"
                  },
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">AttackSUM</span>&nbsp;"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_TargetMaxHP",
                    "compareType": ">=",
                    "value2": {
                      "displayLines": "((MDF_CasterAttack * Modifier_Tear_MaxPercentage) / Modifier_Tear_DamageRatio)"
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "(MDF_CasterAttack * Modifier_Tear_MaxPercentage)"
                      },
                      "variableName": "MDF_DamageValue"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "(MDF_TargetMaxHP * Modifier_Tear_DamageRatio)"
                      },
                      "variableName": "MDF_DamageValue"
                    }
                  ]
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Physical",
                    "DamageFlat": {
                      "displayLines": "((DOT_TriggerRatio * MDF_DamageValue) * _Layer)"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1604046093\">Harscyline_TriggerDotFlag</a>",
          "stackType": "Replace",
          "modifierFlags": [
            "RemoveWhenCasterDead",
            "KeepOnDeathrattle"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1653901942\">Harscyline_PassiveDot_Part1Listen</a>",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "Turn [Owner]: Pre-action Phase",
              "priorityLevel": 91,
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_TriggerEffectFlag",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "ContextModifier"
                  },
                  "passed": [
                    {
                      "name": "Looped Event",
                      "maxLoops": {
                        "displayLines": "MDF_DotHitCount"
                      },
                      "execute": [
                        {
                          "name": "Define Custom Variable",
                          "value": {
                            "displayLines": "(Scoring_Hars_Count + 1)"
                          },
                          "variableName": "Scoring_Hars_Count"
                        },
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Physical",
                            "Damage": {
                              "displayLines": "MDF_DOTDamagePercentage"
                            },
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "DOT"
                          }
                        }
                      ]
                    },
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
              "eventTrigger": "Pre-Death [Owner]"
            },
            {
              "eventTrigger": "Action Start [Owner]",
              "execute": [
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
                      "target": "{{Modifier Holder}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1604046093\">Harscyline_TriggerDotFlag</a>"
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": 0,
                      "variableName": "MDF_TriggerEffectFlag"
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": 0,
                      "variableName": "MDF_DotHitCount"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking Modifier Instance [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Modifier Was",
                        "modifier": "<a class=\"gModGreen\" id=\"-1604046093\">Harscyline_TriggerDotFlag</a>"
                      },
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
                        "value1": "MDF_DotHitCount",
                        "compareType": "<",
                        "value2": {
                          "displayLines": "MDF_MaxLimit"
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "(MDF_DotHitCount + 1)"
                      },
                      "variableName": "MDF_DotHitCount"
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": 1,
                      "variableName": "MDF_TriggerEffectFlag"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-716136231\">Harscyline_PassiveDot_Trigger</a>",
          "modifierFlags": [
            "RemoveWhenCasterDead",
            "ListenBattleEventSkill"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1604046093\">Harscyline_TriggerDotFlag</a>"
                },
                {
                  "name": "Define Custom Variable",
                  "value": 0,
                  "variableName": "MDF_isPhase1"
                },
                {
                  "name": "Define Custom Variable",
                  "value": 0,
                  "variableName": "MDF_DotHitCount"
                },
                {
                  "name": "Define Custom Variable",
                  "value": 1,
                  "variableName": "MDF_CanTriggerDot"
                }
              ]
            },
            {
              "eventTrigger": "Turn [Owner]: Pre-action Phase",
              "priorityLevel": -11,
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1604046093\">Harscyline_TriggerDotFlag</a>"
                },
                {
                  "name": "Define Custom Variable",
                  "value": 1,
                  "variableName": "MDF_isPhase1"
                },
                {
                  "name": "Define Custom Variable",
                  "value": 0,
                  "variableName": "MDF_DotHitCount"
                },
                {
                  "name": "Define Custom Variable",
                  "value": 1,
                  "variableName": "MDF_CanTriggerDot"
                }
              ]
            },
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "MDF_DotHitCount",
                        "compareType": "<",
                        "value2": {
                          "displayLines": "MDF_MaxLimit"
                        },
                        "contextScope": "ContextModifier"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "MDF_CanTriggerDot",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "ContextModifier"
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
                          },
                          {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"-716696180\">Memosprite_CyreneServant_AmazingBonus_Harscyline</a>[<span class=\"descriptionNumberColor\">Ode to Ocean</span>]"
                              },
                              {
                                "name": "Character ID",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "characterID": "1415 (Cyrene)"
                              }
                            ]
                          }
                        ]
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
                            "modifier": "<a class=\"gModGreen\" id=\"-1908768915\">Harscyline_Ability03_Flag</a>",
                            "invertCondition": true
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-1604046093\">Harscyline_TriggerDotFlag</a>",
                            "invertCondition": true
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "MDF_isPhase1",
                            "compareType": "=",
                            "value2": 1,
                            "contextScope": "ContextModifier"
                          }
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "value1": "MDF_isPhase1",
                            "compareType": "=",
                            "value2": 1,
                            "contextScope": "ContextModifier"
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
                          "modifier": "<a class=\"gModGreen\" id=\"-1604046093\">Harscyline_TriggerDotFlag</a>"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable",
                          "value": {
                            "displayLines": "(MDF_DotHitCount + 1)"
                          },
                          "variableName": "MDF_DotHitCount"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Being Attacked [Owner]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "MDF_DotHitCount",
                        "compareType": ">",
                        "value2": 0,
                        "contextScope": "ContextModifier"
                      },
                      {
                        "name": "Is Entity a Battle Event/Summon",
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
                        "name": "Compare: Variable",
                        "value1": "MDF_DotHitCount",
                        "compareType": ">",
                        "value2": {
                          "displayLines": "MDF_MaxLimit"
                        },
                        "contextScope": "ContextModifier"
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "value": {
                            "displayLines": "MDF_MaxLimit"
                          },
                          "variableName": "MDF_DotHitCount"
                        }
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
                        "modifier": "<a class=\"gModGreen\" id=\"-1908768915\">Harscyline_Ability03_Flag</a>",
                        "invertCondition": true
                      }
                    },
                    {
                      "name": "Looped Event",
                      "maxLoops": {
                        "displayLines": "MDF_DotHitCount"
                      },
                      "execute": [
                        {
                          "name": "Define Custom Variable",
                          "value": {
                            "displayLines": "(Scoring_Hars_Count + 1)"
                          },
                          "variableName": "Scoring_Hars_Count"
                        },
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Physical",
                            "Damage": {
                              "displayLines": "MDF_DOTDamagePercentage"
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
                  "name": "Define Custom Variable",
                  "value": 0,
                  "variableName": "MDF_DotHitCount"
                }
              ]
            },
            {
              "eventTrigger": "Action Start [Owner]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1604046093\">Harscyline_TriggerDotFlag</a>"
                },
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
                      "target": "{{Modifier Holder}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "value": 0,
                      "variableName": "MDF_isPhase1"
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": 0,
                      "variableName": "MDF_CanTriggerDot"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1604046093\">Harscyline_TriggerDotFlag</a>"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of",
                        "target1": {
                          "name": "Target Name",
                          "target": "{{All Team Members with Unselectables}}.[[addBattleEvents]]"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
                      },
                      {
                        "name": "Is Part Of",
                        "target1": {
                          "name": "Target Name",
                          "target": "{{Hostile Entities(AOE, with Unselectables)}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Parameter Target List}}"
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "value": 0,
                      "variableName": "MDF_isPhase1"
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": 0,
                      "variableName": "MDF_DotHitCount"
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": 1,
                      "variableName": "MDF_CanTriggerDot"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Anyone]: End",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1604046093\">Harscyline_TriggerDotFlag</a>"
                },
                {
                  "name": "Define Custom Variable",
                  "value": 0,
                  "variableName": "MDF_isPhase1"
                },
                {
                  "name": "Define Custom Variable",
                  "value": 0,
                  "variableName": "MDF_CanTriggerDot"
                }
              ]
            },
            {
              "eventTrigger": "Injected Ability Use [Anyone]: Start",
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
                          "target": "{{All Team Members with Unselectables}}.[[addBattleEvents]]"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
                      },
                      {
                        "name": "Is Part Of",
                        "target1": {
                          "name": "Target Name",
                          "target": "{{Hostile Entities(AOE, with Unselectables)}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Parameter Target List}}"
                        }
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
                      "modifier": "<a class=\"gModGreen\" id=\"-1604046093\">Harscyline_TriggerDotFlag</a>"
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": 0,
                      "variableName": "MDF_isPhase1"
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": 0,
                      "variableName": "MDF_DotHitCount"
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": 1,
                      "variableName": "MDF_CanTriggerDot"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Injected Ability Use [Anyone]: End",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1604046093\">Harscyline_TriggerDotFlag</a>"
                },
                {
                  "name": "Define Custom Variable",
                  "value": 0,
                  "variableName": "MDF_isPhase1"
                },
                {
                  "name": "Define Custom Variable",
                  "value": 0,
                  "variableName": "MDF_CanTriggerDot"
                },
                {
                  "name": "Define Custom Variable",
                  "value": 0,
                  "variableName": "MDF_DotHitCount"
                }
              ]
            },
            {
              "eventTrigger": "Injected Ability Use [Anyone]: Aborted",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1604046093\">Harscyline_TriggerDotFlag</a>"
                },
                {
                  "name": "Define Custom Variable",
                  "value": 0,
                  "variableName": "MDF_isPhase1"
                },
                {
                  "name": "Define Custom Variable",
                  "value": 0,
                  "variableName": "MDF_CanTriggerDot"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1957610629\">Harscyline_PointB3_DamageAdded</a>[<span class=\"descriptionNumberColor\">The Fiddle of Pearls</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_PropertyRatio</span>.",
          "type": "Buff",
          "statusName": "The Fiddle of Pearls",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": {
                    "displayLines": "MDF_PropertyRatio"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__389221010\">Harscyline_HaloDebuff</a>[<span class=\"descriptionNumberColor\">Maelstrom Rhapsody</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead",
            "DEF_DOWN"
          ],
          "description": "Enemy targets within the Zone have their ATK decreased by <span class=\"descriptionNumberColor\">MDF_AttackDownRatio</span> and DEF decreased by <span class=\"descriptionNumberColor\">MDF_DefenceDownRatio</span>. For every 1 instance of DoT they receive, they will take Physical DoT equal to <span class=\"descriptionNumberColor\">MDF_DOTDamagePercentage</span> of Hysilens's ATK. This damage triggers at the start of each turn or after one attack by an ally target, up to <span class=\"descriptionNumberColor\">MDF_TriggerDOTMaxCount</span> time(s). And it cannot repeatedly trigger this effect.",
          "type": "Debuff",
          "statusName": "Maelstrom Rhapsody",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                  "value": {
                    "displayLines": "(0 - MDF_DefenceDownRatio)"
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
                  "value": {
                    "displayLines": "(0 - MDF_AttackDownRatio)"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 4,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Stack Target Stat Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceAll</span>&nbsp;",
                      "value": {
                        "displayLines": "(0 - MDF_ResistanceDownRatio)"
                      }
                    },
                    {
                      "name": "Update Modifier Description",
                      "popUpText": "Enemy targets within the Zone have their ATK decreased by <span class=\"descriptionNumberColor\">MDF_AttackDownRatio</span>, DEF decreased by <span class=\"descriptionNumberColor\">MDF_DefenceDownRatio</span>, and All-Type RES decreased by <span class=\"descriptionNumberColor\">MDF_ResistanceDownRatio</span>. For every 1 instance of DoT they receive, they will take Physical DoT equal to <span class=\"descriptionNumberColor\">MDF_DOTDamagePercentage</span> of Hysilens's ATK. This damage triggers at the start of each turn or after one attack by an ally target, up to <span class=\"descriptionNumberColor\">MDF_TriggerDOTMaxCount</span> time(s). And it cannot repeatedly trigger this effect."
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__511580758\">Harscyline_AllDamageTypeTakenRatio</a>[<span class=\"descriptionNumberColor\">Overtone Hum: Chorus After Dark Tides</span>]",
          "stackType": "ReplaceByCaster",
          "description": "DMG taken increases by <span class=\"descriptionNumberColor\">MDF_PropertyRatio</span>.",
          "type": "Debuff",
          "effectName": "Vulnerability",
          "statusName": "Overtone Hum: Chorus After Dark Tides",
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
                    "displayLines": "MDF_PropertyRatio"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1815201624\">Harscyline_Maze_Flag</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1908768915\">Harscyline_Ability03_Flag</a>",
          "stackType": "Replace",
          "modifierFlags": [
            "RemoveWhenCasterDead",
            "KeepOnDeathrattle"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1383903101\">Harscyline_Ability03_HaloStatus</a>",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "modifierFlags": [
            "RemoveWhenCasterDead",
            "ListenBattleEventSkill"
          ],
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE, with Unselectables)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-716136231\">Harscyline_PassiveDot_Trigger</a>",
              "haloStatus": true,
              "valuePerStack": {
                "MDF_MaxLimit": {
                  "displayLines": "Skill03_TriggerDotMaxCount"
                },
                "MDF_DOTDamagePercentage": {
                  "displayLines": "MDF_DOTDamagePercentageTemp"
                }
              }
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE, with Unselectables)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1653901942\">Harscyline_PassiveDot_Part1Listen</a>",
              "haloStatus": true,
              "valuePerStack": {
                "MDF_MaxLimit": {
                  "displayLines": "Skill03_TriggerDotMaxCount"
                },
                "MDF_DOTDamagePercentage": {
                  "displayLines": "MDF_DOTDamagePercentageTemp"
                }
              }
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE, with Unselectables)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"389221010\">Harscyline_HaloDebuff</a>[<span class=\"descriptionNumberColor\">Maelstrom Rhapsody</span>]",
              "haloStatus": true,
              "valuePerStack": {
                "MDF_DOTDamagePercentage": {
                  "displayLines": "MDF_DOTDamagePercentageTemp"
                },
                "MDF_TriggerDOTMaxCount": {
                  "displayLines": "MDF_TriggerDOTMaxCountTemp"
                },
                "MDF_DefenceDownRatio": {
                  "displayLines": "MDF_DefenceDownRatioTemp"
                },
                "MDF_ResistanceDownRatio": {
                  "displayLines": "MDF_ResistanceDownRatioTemp"
                },
                "MDF_AttackDownRatio": {
                  "displayLines": "MDF_AttackDownRatioTemp"
                }
              }
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]] - {{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1957610629\">Harscyline_PointB3_DamageAdded</a>[<span class=\"descriptionNumberColor\">The Fiddle of Pearls</span>]",
              "haloStatus": true,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Trace Activated",
                    "conditionList": "The Fiddle of Pearls"
                  },
                  {
                    "name": "Eidolon Activated",
                    "eidolon": 2
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "SkillTree_PointB3_StatusProbabilityValue",
                    "compareType": ">",
                    "value2": 0
                  }
                ]
              },
              "valuePerStack": {
                "MDF_PropertyRatio": {
                  "displayLines": "SkillTree_PointB3_StatusProbabilityValue"
                }
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
                    "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]] - {{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1957610629\">Harscyline_PointB3_DamageAdded</a>[<span class=\"descriptionNumberColor\">The Fiddle of Pearls</span>]"
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": 0,
                  "maximum": {
                    "displayLines": "Skill03_HaloLifeTime"
                  },
                  "priorState": "Normal"
                }
              ]
            },
            {
              "eventTrigger": "Action Phase Start [Owner][?]",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "LifeTime",
                  "variableName": "MDF_Layer",
                  "modifierName": "<a class=\"gModGreen\" id=\"-1383903101\">Harscyline_Ability03_HaloStatus</a>",
                  "multiplier": 1
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "displayLines": "MDF_Layer"
                  },
                  "maximum": {
                    "displayLines": "Skill03_HaloLifeTime"
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Trace Activated",
                    "conditionList": "The Gladius of Conquest"
                  },
                  "passed": [
                    {
                      "name": "Skill Points Modification",
                      "adjustmentValue": {
                        "displayLines": "1"
                      },
                      "adjustmentType": "+"
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "LifeTime",
                  "variableName": "MDF_Layer",
                  "modifierName": "<a class=\"gModGreen\" id=\"-1383903101\">Harscyline_Ability03_HaloStatus</a>",
                  "multiplier": 1
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "displayLines": "MDF_Layer"
                  },
                  "maximum": {
                    "displayLines": "Skill03_HaloLifeTime"
                  },
                  "priorState": "Active",
                  "bar#": 3
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1815201624\">Harscyline_Maze_Flag</a>"
                  },
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Trace Activated",
                        "conditionList": "The Gladius of Conquest"
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1815201624\">Harscyline_Maze_Flag</a>"
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
    "Hysilens_LocalPlayer_Harscyline_TechniqueUsage_TriggerHitMonster": {
      "fileName": "Hysilens_LocalPlayer_Harscyline_TechniqueUsage_TriggerHitMonster",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Overworld Attack Instance",
          "onBattle": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": null,
              "ID": "1000111(StageAbility_MazeCommon_EnterBattle_Physical)"
            }
          ]
        }
      ],
      "references": [],
      "triggerType": "Free",
      "targetObjectData": {
        "primaryTarget": "Skill Point User(Or NONE)"
      }
    },
    "Hysilens_LocalPlayer_StandardAbility_AttackBreak": {
      "fileName": "Hysilens_LocalPlayer_StandardAbility_AttackBreak",
      "skillTrigger": "MazeCommonPassve01",
      "abilityType": "Basic ATK",
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"951318209\">ADV_StageAbility_MazeStandard_OnStageEffect</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-247093964\">ADV_StageAbility_MazeStandard_ListenEnterBattle_Standard</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Element",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "DamageType": "Physical"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"761715744\">ADV_StageAbility_MazeStandard_ListenEnterBattle_Physical</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Element",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "DamageType": "Fire"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-380086631\">ADV_StageAbility_MazeStandard_ListenEnterBattle_Fire</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Element",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "DamageType": "Ice"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-97518784\">ADV_StageAbility_MazeStandard_ListenEnterBattle_Ice</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Element",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "DamageType": "Thunder"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1597144751\">ADV_StageAbility_MazeStandard_ListenEnterBattle_Thunder</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Element",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "DamageType": "Wind"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1816746695\">ADV_StageAbility_MazeStandard_ListenEnterBattle_Wind</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Element",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "DamageType": "Quantum"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-418599870\">ADV_StageAbility_MazeStandard_ListenEnterBattle_Quantum</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Element",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "DamageType": "Imaginary"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1882459002\">ADV_StageAbility_MazeStandard_ListenEnterBattle_Imaginary</a>"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1927069485\">ADV_StageAbility_MazeStandard_ListenEnterBattle_TeamLeader</a>"
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "Hysilens_LocalPlayer_Harscyline_TechniqueUsage": {
      "fileName": "Hysilens_LocalPlayer_Harscyline_TechniqueUsage",
      "skillTrigger": "MazeSkill",
      "abilityType": "Basic ATK",
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove Overworld Entity",
          "targetSummonEntity": {
            "name": "Add Target by Summoned Units",
            "targetSummoner": {
              "name": "Target Name",
              "target": "{{Adventure Player}}"
            },
            "summonID": 1
          }
        },
        {
          "name": "IF",
          "conditions": "Ability Has a Target",
          "passed": [
            "Deleted bullshit",
            {
              "name": "Create Overworld Entity",
              "summonID": 14101
            }
          ],
          "failed": [
            "Deleted bullshit",
            {
              "name": "Create Overworld Entity",
              "summonID": 14101
            }
          ]
        }
      ],
      "onAbortReg": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Skill Point User(Or NONE)"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target"
      }
    },
    "Hysilens_LocalPlayer_Harscyline_NormalAtk01": {
      "fileName": "Hysilens_LocalPlayer_Harscyline_NormalAtk01",
      "skillTrigger": "NormalAtk",
      "abilityType": "Basic ATK",
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": "Ability Has a Target",
          "passed": [
            "Deleted bullshit",
            {
              "name": "Overworld Attack Instance"
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "In Motion (Overworld)",
                "flag": "FastRun"
              },
              "passed": [
                "Deleted bullshit"
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "In Motion (Overworld)",
                    "flag": "Run"
                  },
                  "passed": [
                    "Deleted bullshit"
                  ],
                  "failed": [
                    "Deleted bullshit"
                  ]
                }
              ]
            },
            {
              "name": "Overworld Attack Instance"
            }
          ]
        }
      ],
      "onAbortReg": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Skill Point User(Or NONE)"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target"
      }
    },
    "Hysilens_Harscyline_TechniqueInLevel": {
      "fileName": "Hysilens_Harscyline_TechniqueInLevel",
      "childAbilityList": [
        "Hysilens_Harscyline_TechniqueInLevel"
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
          "modifier": "<a class=\"gModGreen\" id=\"1754712944\">StageAbility_Maze_Harscyline_Modifier</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1754712944\">StageAbility_Maze_Harscyline_Modifier</a>",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "priorityLevel": -80,
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      "Technique Modifies Current Wave"
                    ]
                  },
                  "passed": [
                    {
                      "name": "Looped Event",
                      "maxLoops": {
                        "displayLines": "2"
                      },
                      "execute": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"1526500029\">Harscyline_RandomDOT_Maze</a>"
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
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      }
    },
    "Hysilens_Harscyline_PassiveAbility01": {
      "fileName": "Hysilens_Harscyline_PassiveAbility01",
      "childAbilityList": [
        "Hysilens_Harscyline_PassiveAbility01"
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
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "3"
          },
          "variableName": "Skill03_HaloLifeTime"
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": 0,
          "maximum": {
            "displayLines": "Skill03_HaloLifeTime"
          },
          "assignState": "True",
          "priorState": "Normal",
          "bar#": 3,
          "cooldown": 0
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 6
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "12"
              },
              "variableName": "Skill03_TriggerDotMaxCount"
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "8"
              },
              "variableName": "Skill03_TriggerDotMaxCount"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 6
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(0.8 + 0.2)"
              },
              "variableName": "Skill03_DOTDamagePercentage"
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "0.8"
              },
              "variableName": "Skill03_DOTDamagePercentage"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "The Gladius of Conquest"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"681243570\">Harscyline_Ability03_Halopre</a>"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"92976527\">Harscyline_PassiveRandomDOT</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "The Fiddle of Pearls"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"2109692643\">Harscyline_PointB3</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 1
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1305457610\">Harscyline_DOTDamageUpPre</a>",
              "valuePerStack": {
                "MDF_DamageUpRatio": {
                  "displayLines": "1.16"
                }
              }
            }
          ]
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2109692643\">Harscyline_PointB3</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "priorityLevel": -80,
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1047911609\">Harscyline_PointB3_Sub</a>"
                }
              ]
            }
          ],
          "modifierFunctions": [
            {
              "name": "CharacterFunctions",
              "functionName": "<a class=\"gTempYellow\" id=\"fun__-1047911609\">Harscyline_PointB3_Sub</a>",
              "parse": [
                {
                  "name": "Define Custom Variable with Stat",
                  "variableName": "SkillTree_PointB3_StatusProbabilityPlusConvertValue",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">EffectHitRateSUM</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "variableName": "SkillTree_PointB3_StatusProbabilityConvertValue",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">EffectHitRateConverted</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(SkillTree_PointB3_StatusProbabilityPlusConvertValue - SkillTree_PointB3_StatusProbabilityConvertValue)"
                  },
                  "variableName": "SkillTree_PointB3_StatusProbabilityValue"
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(&nbsp;<span class=\"descriptionFunctionColor\">WHOLE</span>(((SkillTree_PointB3_StatusProbabilityValue - 0.6) / 0.1)) * 0.15)"
                  },
                  "variableName": "SkillTree_PointB3_StatusProbabilityValue"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "SkillTree_PointB3_StatusProbabilityValue",
                    "compareType": "<=",
                    "value2": 0,
                    "contextScope": "ContextCaster"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "value": 0,
                      "variableName": "SkillTree_PointB3_StatusProbabilityValue"
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "SkillTree_PointB3_StatusProbabilityValue",
                        "compareType": ">=",
                        "value2": {
                          "displayLines": "0.9"
                        },
                        "contextScope": "ContextCaster"
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "value": {
                            "displayLines": "0.9"
                          },
                          "variableName": "SkillTree_PointB3_StatusProbabilityValue"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "SkillTree_PointB3_StatusProbabilityValue",
                    "compareType": "<=",
                    "value2": 0,
                    "contextScope": "ContextCaster"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1957610629\">Harscyline_PointB3_DamageAdded</a>[<span class=\"descriptionNumberColor\">The Fiddle of Pearls</span>]"
                    }
                  ],
                  "failed": [
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
                            "modifier": "<a class=\"gModGreen\" id=\"-1383903101\">Harscyline_Ability03_HaloStatus</a>"
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1957610629\">Harscyline_PointB3_DamageAdded</a>[<span class=\"descriptionNumberColor\">The Fiddle of Pearls</span>]",
                          "valuePerStack": {
                            "MDF_PropertyRatio": {
                              "displayLines": "SkillTree_PointB3_StatusProbabilityValue"
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
                          "modifier": "<a class=\"gModGreen\" id=\"1957610629\">Harscyline_PointB3_DamageAdded</a>[<span class=\"descriptionNumberColor\">The Fiddle of Pearls</span>]",
                          "valuePerStack": {
                            "MDF_PropertyRatio": {
                              "displayLines": "SkillTree_PointB3_StatusProbabilityValue"
                            }
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "abilityValueChange": [
            {
              "name": "Ability Value Changes",
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">EffectHitRateSUM</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "maxValue": 1000000000,
                  "enteringRange": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1047911609\">Harscyline_PointB3_Sub</a>"
                    }
                  ],
                  "onChange": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1047911609\">Harscyline_PointB3_Sub</a>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1905867121\">Harscyline_FirstHitFlag</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__92976527\">Harscyline_PassiveRandomDOT</a>",
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Anyone]: Hit",
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
                          "target": "{{Parameter Target 2}}"
                        },
                        "team": "Player Team"
                      },
                      {
                        "name": "Is Entity a Battle Event/Summon",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target 2}}"
                        },
                        "invertCondition": true
                      },
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
                        "modifier": "<a class=\"gModGreen\" id=\"-1905867121\">Harscyline_FirstHitFlag</a>",
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"824285103\">Harscyline_RandomDOT_PassiveRandomDOT</a>"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1905867121\">Harscyline_FirstHitFlag</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Attack DMG End [Anyone]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All(with Unselectable)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1905867121\">Harscyline_FirstHitFlag</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__681243570\">Harscyline_Ability03_Halopre</a>",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "priorityLevel": -80,
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
                      "modifier": "<a class=\"gModGreen\" id=\"-1383903101\">Harscyline_Ability03_HaloStatus</a>",
                      "duration": {
                        "displayLines": "3"
                      },
                      "valuePerStack": {
                        "MDF_DOTDamagePercentageTemp": {
                          "displayLines": "Skill03_DOTDamagePercentage"
                        },
                        "MDF_TriggerDOTMaxCountTemp": {
                          "displayLines": "Skill03_TriggerDotMaxCount"
                        },
                        "MDF_DefenceDownRatioTemp": {
                          "displayLines": "0.25"
                        },
                        "MDF_ResistanceDownRatioTemp": {
                          "displayLines": "0.2"
                        },
                        "MDF_AttackDownRatioTemp": {
                          "displayLines": "0.15"
                        }
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "Hysilens_Harscyline_Ability03_EnterReady": {
      "fileName": "Hysilens_Harscyline_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "Hysilens_Harscyline_Ability03_Part02": {
      "fileName": "Hysilens_Harscyline_Ability03_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1908768915\">Harscyline_Ability03_Flag</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1383903101\">Harscyline_Ability03_HaloStatus</a>",
          "duration": {
            "displayLines": "Skill03_HaloLifeTime"
          },
          "valuePerStack": {
            "MDF_DOTDamagePercentageTemp": {
              "displayLines": "Skill03_DOTDamagePercentage"
            },
            "MDF_TriggerDOTMaxCountTemp": {
              "displayLines": "Skill03_TriggerDotMaxCount"
            },
            "MDF_DefenceDownRatioTemp": {
              "displayLines": "0.25"
            },
            "MDF_ResistanceDownRatioTemp": {
              "displayLines": "0.2"
            },
            "MDF_AttackDownRatioTemp": {
              "displayLines": "0.15"
            }
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "displayLines": "2"
            },
            "Toughness": {
              "displayLines": "AOE Toughness Value"
            },
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Trace Activated",
                "conditionList": "The Bubble of Banquets"
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Hostile Entities(AOE)}}"
                },
                "flagName": "STAT_DOT"
              }
            ]
          },
          "passed": [
            {
              "name": "Trigger Modifier Event",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "variableName": "DOT_TriggerRatio",
              "eventType": "DOT",
              "value": {
                "displayLines": "1.5"
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
          "modifier": "<a class=\"gModGreen\" id=\"-1908768915\">Harscyline_Ability03_Flag</a>"
        },
        "Trigger: Skip Death Handling",
        "Trigger: Ability End"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      }
    },
    "Hysilens_Harscyline_Ability03_Part01": {
      "fileName": "Hysilens_Harscyline_Ability03_Part01",
      "childAbilityList": [
        "Hysilens_Harscyline_Ability03_Camera",
        "Hysilens_Harscyline_Ability03_Part01",
        "Hysilens_Harscyline_Ability03_Part02",
        "Hysilens_Harscyline_Ability03_EnterReady"
      ],
      "skillTrigger": "Skill03",
      "abilityType": "Ultimate",
      "energy": 5,
      "toughnessList": [
        0,
        20,
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
          "ability": "Harscyline_Ability03_Part02",
          "isTrigger": true
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      }
    },
    "Hysilens_Harscyline_Ability02_Part02": {
      "fileName": "Hysilens_Harscyline_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"511580758\">Harscyline_AllDamageTypeTakenRatio</a>[<span class=\"descriptionNumberColor\">Overtone Hum: Chorus After Dark Tides</span>]",
          "duration": {
            "displayLines": "3"
          },
          "baseChance": {
            "displayLines": "1"
          },
          "valuePerStack": {
            "MDF_PropertyRatio": {
              "displayLines": "0.2"
            }
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "displayLines": "1.4"
            },
            "Toughness": {
              "displayLines": "AOE Toughness Value"
            },
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "Hysilens_Harscyline_Ability02_Part01": {
      "fileName": "Hysilens_Harscyline_Ability02_Part01",
      "childAbilityList": [
        "Hysilens_Harscyline_Ability02_Camera",
        "Hysilens_Harscyline_Ability02_Part01",
        "Hysilens_Harscyline_Ability02_Part02"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Skill",
      "energy": 30,
      "toughnessList": [
        0,
        10,
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
          "ability": "Harscyline_Ability02_Part02",
          "isTrigger": true
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      }
    },
    "Hysilens_Harscyline_Ability01_Part02": {
      "fileName": "Hysilens_Harscyline_Ability01_Part02",
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
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "displayLines": "1"
            },
            "HitSplit": 0.5,
            "Toughness": {
              "displayLines": "ST Toughness Value"
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
              "displayLines": "1"
            },
            "HitSplit": 0.5,
            "Toughness": {
              "displayLines": "ST Toughness Value"
            },
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "Hysilens_Harscyline_Ability01_Part01": {
      "fileName": "Hysilens_Harscyline_Ability01_Part01",
      "childAbilityList": [
        "Hysilens_Harscyline_Ability01_Camera",
        "Hysilens_Harscyline_Ability01_Part01",
        "Hysilens_Harscyline_Ability01_Part02"
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
          "ability": "Harscyline_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        "Deleted bullshit"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target"
      }
    },
    "Hysilens_StageAbility_MazeStandard_EnterBattle_Physical": {
      "fileName": "Hysilens_StageAbility_MazeStandard_EnterBattle_Physical",
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
          "modifier": "<a class=\"gModGreen\" id=\"-857160721\">StageAbility_MazeStandard_EnterBattle_Physical_Modifier</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-857160721\">StageAbility_MazeStandard_EnterBattle_Physical_Modifier</a>",
          "modifierFlags": [
            "MazeUseSkillTrigger",
            "STAT_TriggerBattleCharacter"
          ],
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "priorityLevel": -70,
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1129499125\">StageTemplate_MazeStandard_EnterBattle_DamageStance</a>",
                  "dynamicStringsArray": [
                    {
                      "name": "HitEffectPath",
                      "value": "Effects/Eff_Prefab/Eff_Common/Eff_Hit_Common_Physical.prefab"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    "Hysilens_Functions": {
      "fileName": "Hysilens_Functions",
      "abilityType": "Char. Functions",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "length": 4,
      "parse": [
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-660722285\">Harscyline_DOT_MaskCheck</a>",
          "parse": [
            {
              "name": "Define Custom Variable",
              "value": 0,
              "variableName": "DOT_Tear_Mask"
            },
            {
              "name": "Define Custom Variable",
              "value": 0,
              "variableName": "DOT_Electric_Mask"
            },
            {
              "name": "Define Custom Variable",
              "value": 0,
              "variableName": "DOT_Burn_Mask"
            },
            {
              "name": "Define Custom Variable",
              "value": 0,
              "variableName": "DOT_Poison_Mask"
            },
            {
              "name": "Define Custom Variable",
              "value": 0,
              "variableName": "DOT_Mask"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"850932122\">Harscyline_DOT_Tear</a>[<span class=\"descriptionNumberColor\">Bleed</span>]",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "value": 1,
                  "variableName": "DOT_Tear_Mask"
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "value": 0,
                  "variableName": "DOT_Tear_Mask"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-593885923\">Harscyline_DOT_Electric</a>[<span class=\"descriptionNumberColor\">Shock</span>]",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "value": 1,
                  "variableName": "DOT_Electric_Mask"
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "value": 0,
                  "variableName": "DOT_Electric_Mask"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"566707275\">Harscyline_DOT_Burn</a>[<span class=\"descriptionNumberColor\">Burn</span>]",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "value": 1,
                  "variableName": "DOT_Burn_Mask"
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "value": 0,
                  "variableName": "DOT_Burn_Mask"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1250170394\">Harscyline_DOT_Poison</a>[<span class=\"descriptionNumberColor\">Wind Shear</span>]",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "value": 1,
                  "variableName": "DOT_Poison_Mask"
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "value": 0,
                  "variableName": "DOT_Poison_Mask"
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(((DOT_Tear_Mask + DOT_Electric_Mask) + DOT_Burn_Mask) + DOT_Poison_Mask)"
              },
              "variableName": "DOT_Mask"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "DOT_Mask",
                "compareType": "=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "value": 1,
                  "variableName": "DOT_Tear_Mask"
                },
                {
                  "name": "Define Custom Variable",
                  "value": 1,
                  "variableName": "DOT_Electric_Mask"
                },
                {
                  "name": "Define Custom Variable",
                  "value": 1,
                  "variableName": "DOT_Burn_Mask"
                },
                {
                  "name": "Define Custom Variable",
                  "value": 1,
                  "variableName": "DOT_Poison_Mask"
                }
              ]
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__1526500029\">Harscyline_RandomDOT_Maze</a>",
          "parse": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "ifTargetFound": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-660722285\">Harscyline_DOT_MaskCheck</a>"
                },
                {
                  "name": "Random Event",
                  "odds": [
                    {
                      "displayLines": "DOT_Tear_Mask"
                    },
                    {
                      "displayLines": "DOT_Electric_Mask"
                    },
                    {
                      "displayLines": "DOT_Burn_Mask"
                    },
                    {
                      "displayLines": "DOT_Poison_Mask"
                    }
                  ],
                  "execute": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Eidolon Activated",
                        "eidolon": 1
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"850932122\">Harscyline_DOT_Tear</a>[<span class=\"descriptionNumberColor\">Bleed</span>]",
                          "duration": {
                            "displayLines": "2"
                          },
                          "baseChance": {
                            "displayLines": "1"
                          },
                          "valuePerStack": {
                            "Modifier_Tear_DamageRatio": {
                              "displayLines": "0.2"
                            },
                            "Modifier_Tear_MaxPercentage": {
                              "displayLines": "0.25"
                            }
                          }
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"2146839416\">Harscyline_DOT_Tear2</a>[<span class=\"descriptionNumberColor\">Bleed</span>]",
                          "duration": {
                            "displayLines": "2"
                          },
                          "baseChance": {
                            "displayLines": "1"
                          },
                          "valuePerStack": {
                            "Modifier_Tear_DamageRatio": {
                              "displayLines": "0.2"
                            },
                            "Modifier_Tear_MaxPercentage": {
                              "displayLines": "0.25"
                            }
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
                          "modifier": "<a class=\"gModGreen\" id=\"850932122\">Harscyline_DOT_Tear</a>[<span class=\"descriptionNumberColor\">Bleed</span>]",
                          "duration": {
                            "displayLines": "2"
                          },
                          "baseChance": {
                            "displayLines": "1"
                          },
                          "valuePerStack": {
                            "Modifier_Tear_DamageRatio": {
                              "displayLines": "0.2"
                            },
                            "Modifier_Tear_MaxPercentage": {
                              "displayLines": "0.25"
                            }
                          }
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Eidolon Activated",
                        "eidolon": 1
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-593885923\">Harscyline_DOT_Electric</a>[<span class=\"descriptionNumberColor\">Shock</span>]",
                          "duration": {
                            "displayLines": "2"
                          },
                          "baseChance": {
                            "displayLines": "1"
                          },
                          "valuePerStack": {
                            "Modifier_Electric_DamagePercentage": {
                              "displayLines": "0.25"
                            }
                          }
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1970678013\">Harscyline_DOT_Electric2</a>[<span class=\"descriptionNumberColor\">Shock</span>]",
                          "duration": {
                            "displayLines": "2"
                          },
                          "baseChance": {
                            "displayLines": "1"
                          },
                          "valuePerStack": {
                            "Modifier_Electric_DamagePercentage": {
                              "displayLines": "0.25"
                            }
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
                          "modifier": "<a class=\"gModGreen\" id=\"-593885923\">Harscyline_DOT_Electric</a>[<span class=\"descriptionNumberColor\">Shock</span>]",
                          "duration": {
                            "displayLines": "2"
                          },
                          "baseChance": {
                            "displayLines": "1"
                          },
                          "valuePerStack": {
                            "Modifier_Electric_DamagePercentage": {
                              "displayLines": "0.25"
                            }
                          }
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Eidolon Activated",
                        "eidolon": 1
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"566707275\">Harscyline_DOT_Burn</a>[<span class=\"descriptionNumberColor\">Burn</span>]",
                          "duration": {
                            "displayLines": "2"
                          },
                          "baseChance": {
                            "displayLines": "1"
                          },
                          "valuePerStack": {
                            "Modifier_Burn_DamagePercentage": {
                              "displayLines": "0.25"
                            }
                          }
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1515140485\">Harscyline_DOT_Burn2</a>[<span class=\"descriptionNumberColor\">Burn</span>]",
                          "duration": {
                            "displayLines": "2"
                          },
                          "baseChance": {
                            "displayLines": "1"
                          },
                          "valuePerStack": {
                            "Modifier_Burn_DamagePercentage": {
                              "displayLines": "0.25"
                            }
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
                          "modifier": "<a class=\"gModGreen\" id=\"566707275\">Harscyline_DOT_Burn</a>[<span class=\"descriptionNumberColor\">Burn</span>]",
                          "duration": {
                            "displayLines": "2"
                          },
                          "baseChance": {
                            "displayLines": "1"
                          },
                          "valuePerStack": {
                            "Modifier_Burn_DamagePercentage": {
                              "displayLines": "0.25"
                            }
                          }
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Eidolon Activated",
                        "eidolon": 1
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1250170394\">Harscyline_DOT_Poison</a>[<span class=\"descriptionNumberColor\">Wind Shear</span>]",
                          "duration": {
                            "displayLines": "2"
                          },
                          "baseChance": {
                            "displayLines": "1"
                          },
                          "valuePerStack": {
                            "Modifier_Poison_DamagePercentage": {
                              "displayLines": "0.25"
                            }
                          }
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1978589432\">Harscyline_DOT_Poison2</a>[<span class=\"descriptionNumberColor\">Wind Shear</span>]",
                          "duration": {
                            "displayLines": "2"
                          },
                          "baseChance": {
                            "displayLines": "1"
                          },
                          "valuePerStack": {
                            "Modifier_Poison_DamagePercentage": {
                              "displayLines": "0.25"
                            }
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
                          "modifier": "<a class=\"gModGreen\" id=\"1250170394\">Harscyline_DOT_Poison</a>[<span class=\"descriptionNumberColor\">Wind Shear</span>]",
                          "duration": {
                            "displayLines": "2"
                          },
                          "baseChance": {
                            "displayLines": "1"
                          },
                          "valuePerStack": {
                            "Modifier_Poison_DamagePercentage": {
                              "displayLines": "0.25"
                            }
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
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__824285103\">Harscyline_RandomDOT_PassiveRandomDOT</a>",
          "parse": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-660722285\">Harscyline_DOT_MaskCheck</a>"
            },
            {
              "name": "Random Event",
              "odds": [
                {
                  "displayLines": "DOT_Tear_Mask"
                },
                {
                  "displayLines": "DOT_Electric_Mask"
                },
                {
                  "displayLines": "DOT_Burn_Mask"
                },
                {
                  "displayLines": "DOT_Poison_Mask"
                }
              ],
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 1
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"850932122\">Harscyline_DOT_Tear</a>[<span class=\"descriptionNumberColor\">Bleed</span>]",
                      "duration": {
                        "displayLines": "2"
                      },
                      "baseChance": {
                        "displayLines": "1"
                      },
                      "valuePerStack": {
                        "Modifier_Tear_DamageRatio": {
                          "displayLines": "0.2"
                        },
                        "Modifier_Tear_MaxPercentage": {
                          "displayLines": "0.25"
                        }
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"2146839416\">Harscyline_DOT_Tear2</a>[<span class=\"descriptionNumberColor\">Bleed</span>]",
                      "duration": {
                        "displayLines": "2"
                      },
                      "baseChance": {
                        "displayLines": "1"
                      },
                      "valuePerStack": {
                        "Modifier_Tear_DamageRatio": {
                          "displayLines": "0.2"
                        },
                        "Modifier_Tear_MaxPercentage": {
                          "displayLines": "0.25"
                        }
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
                      "modifier": "<a class=\"gModGreen\" id=\"850932122\">Harscyline_DOT_Tear</a>[<span class=\"descriptionNumberColor\">Bleed</span>]",
                      "duration": {
                        "displayLines": "2"
                      },
                      "baseChance": {
                        "displayLines": "1"
                      },
                      "valuePerStack": {
                        "Modifier_Tear_DamageRatio": {
                          "displayLines": "0.2"
                        },
                        "Modifier_Tear_MaxPercentage": {
                          "displayLines": "0.25"
                        }
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 1
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-593885923\">Harscyline_DOT_Electric</a>[<span class=\"descriptionNumberColor\">Shock</span>]",
                      "duration": {
                        "displayLines": "2"
                      },
                      "baseChance": {
                        "displayLines": "1"
                      },
                      "valuePerStack": {
                        "Modifier_Electric_DamagePercentage": {
                          "displayLines": "0.25"
                        }
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1970678013\">Harscyline_DOT_Electric2</a>[<span class=\"descriptionNumberColor\">Shock</span>]",
                      "duration": {
                        "displayLines": "2"
                      },
                      "baseChance": {
                        "displayLines": "1"
                      },
                      "valuePerStack": {
                        "Modifier_Electric_DamagePercentage": {
                          "displayLines": "0.25"
                        }
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
                      "modifier": "<a class=\"gModGreen\" id=\"-593885923\">Harscyline_DOT_Electric</a>[<span class=\"descriptionNumberColor\">Shock</span>]",
                      "duration": {
                        "displayLines": "2"
                      },
                      "baseChance": {
                        "displayLines": "1"
                      },
                      "valuePerStack": {
                        "Modifier_Electric_DamagePercentage": {
                          "displayLines": "0.25"
                        }
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 1
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"566707275\">Harscyline_DOT_Burn</a>[<span class=\"descriptionNumberColor\">Burn</span>]",
                      "duration": {
                        "displayLines": "2"
                      },
                      "baseChance": {
                        "displayLines": "1"
                      },
                      "valuePerStack": {
                        "Modifier_Burn_DamagePercentage": {
                          "displayLines": "0.25"
                        }
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1515140485\">Harscyline_DOT_Burn2</a>[<span class=\"descriptionNumberColor\">Burn</span>]",
                      "duration": {
                        "displayLines": "2"
                      },
                      "baseChance": {
                        "displayLines": "1"
                      },
                      "valuePerStack": {
                        "Modifier_Burn_DamagePercentage": {
                          "displayLines": "0.25"
                        }
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
                      "modifier": "<a class=\"gModGreen\" id=\"566707275\">Harscyline_DOT_Burn</a>[<span class=\"descriptionNumberColor\">Burn</span>]",
                      "duration": {
                        "displayLines": "2"
                      },
                      "baseChance": {
                        "displayLines": "1"
                      },
                      "valuePerStack": {
                        "Modifier_Burn_DamagePercentage": {
                          "displayLines": "0.25"
                        }
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 1
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1250170394\">Harscyline_DOT_Poison</a>[<span class=\"descriptionNumberColor\">Wind Shear</span>]",
                      "duration": {
                        "displayLines": "2"
                      },
                      "baseChance": {
                        "displayLines": "1"
                      },
                      "valuePerStack": {
                        "Modifier_Poison_DamagePercentage": {
                          "displayLines": "0.25"
                        }
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1978589432\">Harscyline_DOT_Poison2</a>[<span class=\"descriptionNumberColor\">Wind Shear</span>]",
                      "duration": {
                        "displayLines": "2"
                      },
                      "baseChance": {
                        "displayLines": "1"
                      },
                      "valuePerStack": {
                        "Modifier_Poison_DamagePercentage": {
                          "displayLines": "0.25"
                        }
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
                      "modifier": "<a class=\"gModGreen\" id=\"1250170394\">Harscyline_DOT_Poison</a>[<span class=\"descriptionNumberColor\">Wind Shear</span>]",
                      "duration": {
                        "displayLines": "2"
                      },
                      "baseChance": {
                        "displayLines": "1"
                      },
                      "valuePerStack": {
                        "Modifier_Poison_DamagePercentage": {
                          "displayLines": "0.25"
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
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-1129499125\">StageTemplate_MazeStandard_EnterBattle_DamageStance</a>",
          "parse": [
            {
              "name": "Set Current Turn-Action Entity",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              }
            },
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
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "searchRandom": true,
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "IsForceStanceDamage",
                        "compareType": ">=",
                        "value2": 1,
                        "contextScope": "ContextTaskTemplate"
                      },
                      {
                        "name": "Has Weakness",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "DamageType": {
                          "name": "Damage Type Source",
                          "sourceType": "ReadTargetType",
                          "readTarget": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          }
                        }
                      }
                    ]
                  },
                  "ignoreParallelWarning": true,
                  "ifTargetFound": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "IsForceStanceDamage",
                        "compareType": ">=",
                        "value2": 1,
                        "contextScope": "ContextTaskTemplate"
                      },
                      "passed": [
                        {
                          "name": "Deal Toughness DMG",
                          "value": {
                            "displayLines": "(check(value:(IsForceStanceDamage === 1), then:ENEMIES_OBJECT_UNUSED__310, else:ENEMIES_OBJECT_UNUSED__312) * (1 + ENEMIES_OBJECT_UNUSED__313))"
                          },
                          "attacker": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "forceReduction": true,
                          "canDelay": true,
                          "ToughnessDMGType": {
                            "name": "Damage Type Source",
                            "sourceType": "ReadTargetType",
                            "readTarget": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            }
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Deal Toughness DMG",
                          "value": {
                            "displayLines": "(check(value:(IsForceStanceDamage === 1), then:ENEMIES_OBJECT_UNUSED__310, else:ENEMIES_OBJECT_UNUSED__312) * (1 + ENEMIES_OBJECT_UNUSED__313))"
                          },
                          "attacker": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "canDelay": true,
                          "ToughnessDMGType": {
                            "name": "Damage Type Source",
                            "sourceType": "ReadTargetType",
                            "readTarget": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            }
                          }
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value1": "Target__Toughness",
                        "compareType": ">",
                        "value2": 0
                      }
                    }
                  ]
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