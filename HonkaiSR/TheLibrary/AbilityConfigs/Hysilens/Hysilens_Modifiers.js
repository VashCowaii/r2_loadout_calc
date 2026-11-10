const configAbility = {
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
}