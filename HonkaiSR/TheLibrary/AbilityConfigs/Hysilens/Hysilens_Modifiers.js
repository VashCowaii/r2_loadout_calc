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
      "for": "Harscyline_Eidolon1_DamageUp",
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
                    "target": "Use Prior Target(s) Defined"
                  },
                  {
                    "name": "Is Part Of",
                    "of": "All Team Members(In Context, with Battle Events/Summon)",
                    "target": "Use [REAL SUMMONER OF] Prior Target(s) Defined",
                    "mustBeAlive2": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "ModifyDamageData_IndependentDamageAddedRatio",
                  "variables": {
                    "parameter[0]_IndependentDamageAddedRatio": {
                      "operator": "Variables[0] (MDF_PropertyRatio) || Constants[0] (1) || SUB || RETURN",
                      "displayLines": "(MDF_PropertyRatio - 1)",
                      "constants": [
                        1
                      ],
                      "variables": [
                        "MDF_PropertyRatio"
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
      "name": "Modifier Construction",
      "for": "Harscyline_DOTDamageUpPre",
      "execute": [
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": "Caster",
              "modifier": "Harscyline_Eidolon1_DamageUp",
              "valuePerStack": {
                "MDF_PropertyRatio": {
                  "operator": "Variables[0] (1.16) || RETURN",
                  "displayLines": "1.16",
                  "constants": [],
                  "variables": [
                    1.16
                  ]
                }
              }
            }
          ],
          "priorityLevel": -80
        }
      ],
      "stackData": [
        "MDF_DamageUpRatio"
      ],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Harscyline_DOT_Poison2[<span class=\"descriptionNumberColor\">Wind Shear</span>]",
      "stackType": "ReplaceByCaster",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "modifierFlags": [
        "STAT_DOT",
        "STAT_DOT_Poison",
        "CanBeAddedToServant",
        "CanListenServantCallback"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        },
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": "Owner of this Modifier",
              "valueType": "Layer",
              "variableName": "Modifier_Poison_PoisonLayer",
              "multiplier": 1
            },
            {
              "name": "ATK Scaling DMG",
              "target": "Owner of this Modifier",
              "AttackScaling": {
                "DamageType": "Wind",
                "Damage": {
                  "operator": "Variables[0] (Modifier_Poison_DamagePercentage) || Variables[1] (Modifier_Poison_PoisonLayer) || MUL || RETURN",
                  "displayLines": "(Modifier_Poison_DamagePercentage * Modifier_Poison_PoisonLayer)",
                  "constants": [],
                  "variables": [
                    "Modifier_Poison_DamagePercentage",
                    "Modifier_Poison_PoisonLayer"
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
          "eventTrigger": "Custom Event",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": "Owner of this Modifier",
              "valueType": "Layer",
              "variableName": "Modifier_Poison_PoisonLayer",
              "multiplier": 1
            },
            {
              "name": "ATK Scaling DMG",
              "target": "Owner of this Modifier",
              "AttackScaling": {
                "DamageType": "Wind",
                "Damage": {
                  "operator": "Variables[0] (DOT_TriggerRatio) || Variables[1] (Modifier_Poison_DamagePercentage) || MUL || Variables[2] (Modifier_Poison_PoisonLayer) || MUL || RETURN",
                  "displayLines": "((DOT_TriggerRatio * Modifier_Poison_DamagePercentage) * Modifier_Poison_PoisonLayer)",
                  "constants": [],
                  "variables": [
                    "DOT_TriggerRatio",
                    "Modifier_Poison_DamagePercentage",
                    "Modifier_Poison_PoisonLayer"
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
      "description": "Takes Wind DMG at the start of each turn for a certain number of turns.",
      "type": "Debuff",
      "effectName": "Wind Shear",
      "statusName": "Wind Shear",
      "stackLimit": 5,
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "Harscyline_DOT_Burn2[<span class=\"descriptionNumberColor\">Burn</span>]",
      "stackType": "ReplaceByCaster",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "modifierFlags": [
        "STAT_DOT",
        "STAT_DOT_Burn",
        "CanBeAddedToServant",
        "CanListenServantCallback"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is NOT in Auto-Battle State"
              }
            }
          ]
        },
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "ATK Scaling DMG",
              "target": "Owner of this Modifier",
              "AttackScaling": {
                "DamageType": "Fire",
                "Damage": {
                  "operator": "Variables[0] (Modifier_Burn_DamageValue) || Variables[1] (_Layer) || MUL || RETURN",
                  "displayLines": "(Modifier_Burn_DamageValue * _Layer)",
                  "constants": [],
                  "variables": [
                    "Modifier_Burn_DamageValue",
                    "_Layer"
                  ]
                },
                "DamageExtra": {
                  "operator": "Variables[0] (Modifier_Burn_DamagePercentage_Defence) || Variables[1] (_Layer) || MUL || RETURN",
                  "displayLines": "(Modifier_Burn_DamagePercentage_Defence * _Layer)",
                  "constants": [],
                  "variables": [
                    "Modifier_Burn_DamagePercentage_Defence",
                    "_Layer"
                  ]
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
              "target": "Owner of this Modifier",
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
              "target": "Owner of this Modifier",
              "AttackScaling": {
                "DamageType": "Fire",
                "Damage": {
                  "operator": "Variables[0] (DOT_TriggerRatio) || Variables[1] (Modifier_Burn_DamageValue) || MUL || Variables[2] (_Layer) || MUL || RETURN",
                  "displayLines": "((DOT_TriggerRatio * Modifier_Burn_DamageValue) * _Layer)",
                  "constants": [],
                  "variables": [
                    "DOT_TriggerRatio",
                    "Modifier_Burn_DamageValue",
                    "_Layer"
                  ]
                },
                "DamageExtra": {
                  "operator": "Variables[0] (DOT_TriggerRatio) || Variables[1] (Modifier_Burn_DamagePercentage_Defence) || MUL || Variables[2] (_Layer) || MUL || RETURN",
                  "displayLines": "((DOT_TriggerRatio * Modifier_Burn_DamagePercentage_Defence) * _Layer)",
                  "constants": [],
                  "variables": [
                    "DOT_TriggerRatio",
                    "Modifier_Burn_DamagePercentage_Defence",
                    "_Layer"
                  ]
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
      ],
      "useEntitySnapshot": true,
      "description": "Takes Fire DMG at the start of each turn for a certain number of turns.",
      "type": "Debuff",
      "effectName": "Burn",
      "statusName": "Burn",
      "stackLimit": 1,
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "Harscyline_DOT_Electric2[<span class=\"descriptionNumberColor\">Shock</span>]",
      "stackType": "ReplaceByCaster",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "modifierFlags": [
        "STAT_DOT",
        "STAT_DOT_Electric",
        "CanBeAddedToServant",
        "CanListenServantCallback"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is NOT in Auto-Battle State"
              }
            }
          ]
        },
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "ATK Scaling DMG",
              "target": "Owner of this Modifier",
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "operator": "Variables[0] (Modifier_Electric_DamageValue) || Variables[1] (_Layer) || MUL || RETURN",
                  "displayLines": "(Modifier_Electric_DamageValue * _Layer)",
                  "constants": [],
                  "variables": [
                    "Modifier_Electric_DamageValue",
                    "_Layer"
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
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": "Owner of this Modifier",
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
              "target": "Owner of this Modifier",
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "operator": "Variables[0] (DOT_TriggerRatio) || Variables[1] (Modifier_Electric_DamageValue) || MUL || Variables[2] (_Layer) || MUL || RETURN",
                  "displayLines": "((DOT_TriggerRatio * Modifier_Electric_DamageValue) * _Layer)",
                  "constants": [],
                  "variables": [
                    "DOT_TriggerRatio",
                    "Modifier_Electric_DamageValue",
                    "_Layer"
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
      "description": "Takes Lightning DMG at the start of each turn for a certain number of turns.",
      "type": "Debuff",
      "effectName": "Shock",
      "statusName": "Shock",
      "stackLimit": 1,
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "Harscyline_DOT_Tear2[<span class=\"descriptionNumberColor\">Bleed</span>]",
      "stackType": "ReplaceByCaster",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "modifierFlags": [
        "STAT_DOT",
        "STAT_DOT_Bleed",
        "CanBeAddedToServant",
        "CanListenServantCallback"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Stat",
              "target": "Owner of this Modifier",
              "variableName": "MDF_TargetMaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": "Prior Snapshot Entity",
              "variableName": "MDF_CasterAttack",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">AttackSUM</span>&nbsp;"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_TargetMaxHP",
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] (MDF_CasterAttack) || Variables[1] (Modifier_Tear_MaxPercentage) || MUL || Variables[2] (Modifier_Tear_DamageRatio) || DIV || RETURN",
                  "displayLines": "((MDF_CasterAttack * Modifier_Tear_MaxPercentage) / Modifier_Tear_DamageRatio)",
                  "constants": [],
                  "variables": [
                    "MDF_CasterAttack",
                    "Modifier_Tear_MaxPercentage",
                    "Modifier_Tear_DamageRatio"
                  ]
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_DamageValue",
                  "value": {
                    "operator": "Variables[0] (MDF_CasterAttack) || Variables[1] (Modifier_Tear_MaxPercentage) || MUL || RETURN",
                    "displayLines": "(MDF_CasterAttack * Modifier_Tear_MaxPercentage)",
                    "constants": [],
                    "variables": [
                      "MDF_CasterAttack",
                      "Modifier_Tear_MaxPercentage"
                    ]
                  }
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_DamageValue",
                  "value": {
                    "operator": "Variables[0] (MDF_TargetMaxHP) || Variables[1] (Modifier_Tear_DamageRatio) || MUL || RETURN",
                    "displayLines": "(MDF_TargetMaxHP * Modifier_Tear_DamageRatio)",
                    "constants": [],
                    "variables": [
                      "MDF_TargetMaxHP",
                      "Modifier_Tear_DamageRatio"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "Define Custom Variable with Stat",
              "target": "Owner of this Modifier",
              "variableName": "MDF_TargetMaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": "Prior Snapshot Entity",
              "variableName": "MDF_CasterAttack",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">AttackSUM</span>&nbsp;"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_TargetMaxHP",
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] (MDF_CasterAttack) || Variables[1] (Modifier_Tear_MaxPercentage) || MUL || Variables[2] (Modifier_Tear_DamageRatio) || DIV || RETURN",
                  "displayLines": "((MDF_CasterAttack * Modifier_Tear_MaxPercentage) / Modifier_Tear_DamageRatio)",
                  "constants": [],
                  "variables": [
                    "MDF_CasterAttack",
                    "Modifier_Tear_MaxPercentage",
                    "Modifier_Tear_DamageRatio"
                  ]
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_DamageValue",
                  "value": {
                    "operator": "Variables[0] (MDF_CasterAttack) || Variables[1] (Modifier_Tear_MaxPercentage) || MUL || RETURN",
                    "displayLines": "(MDF_CasterAttack * Modifier_Tear_MaxPercentage)",
                    "constants": [],
                    "variables": [
                      "MDF_CasterAttack",
                      "Modifier_Tear_MaxPercentage"
                    ]
                  }
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_DamageValue",
                  "value": {
                    "operator": "Variables[0] (MDF_TargetMaxHP) || Variables[1] (Modifier_Tear_DamageRatio) || MUL || RETURN",
                    "displayLines": "(MDF_TargetMaxHP * Modifier_Tear_DamageRatio)",
                    "constants": [],
                    "variables": [
                      "MDF_TargetMaxHP",
                      "Modifier_Tear_DamageRatio"
                    ]
                  }
                }
              ]
            },
            {
              "name": "ATK Scaling DMG",
              "target": "Owner of this Modifier",
              "AttackScaling": {
                "DamageType": "Physical",
                "Damage": {
                  "operator": "Variables[0] (MDF_DamageValue) || RETURN",
                  "displayLines": "MDF_DamageValue",
                  "constants": [],
                  "variables": [
                    "MDF_DamageValue"
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
          "eventTrigger": "Custom Event",
          "execute": [
            {
              "name": "Define Custom Variable with Stat",
              "target": "Owner of this Modifier",
              "variableName": "MDF_TargetMaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": "Prior Snapshot Entity",
              "variableName": "MDF_CasterAttack",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">AttackSUM</span>&nbsp;"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_TargetMaxHP",
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] (MDF_CasterAttack) || Variables[1] (Modifier_Tear_MaxPercentage) || MUL || Variables[2] (Modifier_Tear_DamageRatio) || DIV || RETURN",
                  "displayLines": "((MDF_CasterAttack * Modifier_Tear_MaxPercentage) / Modifier_Tear_DamageRatio)",
                  "constants": [],
                  "variables": [
                    "MDF_CasterAttack",
                    "Modifier_Tear_MaxPercentage",
                    "Modifier_Tear_DamageRatio"
                  ]
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_DamageValue",
                  "value": {
                    "operator": "Variables[0] (MDF_CasterAttack) || Variables[1] (Modifier_Tear_MaxPercentage) || MUL || RETURN",
                    "displayLines": "(MDF_CasterAttack * Modifier_Tear_MaxPercentage)",
                    "constants": [],
                    "variables": [
                      "MDF_CasterAttack",
                      "Modifier_Tear_MaxPercentage"
                    ]
                  }
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_DamageValue",
                  "value": {
                    "operator": "Variables[0] (MDF_TargetMaxHP) || Variables[1] (Modifier_Tear_DamageRatio) || MUL || RETURN",
                    "displayLines": "(MDF_TargetMaxHP * Modifier_Tear_DamageRatio)",
                    "constants": [],
                    "variables": [
                      "MDF_TargetMaxHP",
                      "Modifier_Tear_DamageRatio"
                    ]
                  }
                }
              ]
            },
            {
              "name": "ATK Scaling DMG",
              "target": "Owner of this Modifier",
              "AttackScaling": {
                "DamageType": "Physical",
                "Damage": {
                  "operator": "Variables[0] (DOT_TriggerRatio) || Variables[1] (MDF_DamageValue) || MUL || RETURN",
                  "displayLines": "(DOT_TriggerRatio * MDF_DamageValue)",
                  "constants": [],
                  "variables": [
                    "DOT_TriggerRatio",
                    "MDF_DamageValue"
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
      "description": "Takes Physical DMG at the start of each turn for a certain number of turns.",
      "type": "Debuff",
      "effectName": "Bleed",
      "statusName": "Bleed",
      "stackLimit": 1,
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "Harscyline_DOT_Poison[<span class=\"descriptionNumberColor\">Wind Shear</span>]",
      "stackType": "ReplaceByCaster",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "modifierFlags": [
        "STAT_DOT",
        "STAT_DOT_Poison",
        "CanBeAddedToServant",
        "CanListenServantCallback"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        },
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": "Owner of this Modifier",
              "valueType": "Layer",
              "variableName": "Modifier_Poison_PoisonLayer",
              "multiplier": 1
            },
            {
              "name": "ATK Scaling DMG",
              "target": "Owner of this Modifier",
              "AttackScaling": {
                "DamageType": "Wind",
                "Damage": {
                  "operator": "Variables[0] (Modifier_Poison_DamagePercentage) || Variables[1] (Modifier_Poison_PoisonLayer) || MUL || RETURN",
                  "displayLines": "(Modifier_Poison_DamagePercentage * Modifier_Poison_PoisonLayer)",
                  "constants": [],
                  "variables": [
                    "Modifier_Poison_DamagePercentage",
                    "Modifier_Poison_PoisonLayer"
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
          "eventTrigger": "Custom Event",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": "Owner of this Modifier",
              "valueType": "Layer",
              "variableName": "Modifier_Poison_PoisonLayer",
              "multiplier": 1
            },
            {
              "name": "ATK Scaling DMG",
              "target": "Owner of this Modifier",
              "AttackScaling": {
                "DamageType": "Wind",
                "Damage": {
                  "operator": "Variables[0] (DOT_TriggerRatio) || Variables[1] (Modifier_Poison_DamagePercentage) || MUL || Variables[2] (Modifier_Poison_PoisonLayer) || MUL || RETURN",
                  "displayLines": "((DOT_TriggerRatio * Modifier_Poison_DamagePercentage) * Modifier_Poison_PoisonLayer)",
                  "constants": [],
                  "variables": [
                    "DOT_TriggerRatio",
                    "Modifier_Poison_DamagePercentage",
                    "Modifier_Poison_PoisonLayer"
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
      "description": "Takes Wind DMG at the start of each turn for a certain number of turns.",
      "type": "Debuff",
      "effectName": "Wind Shear",
      "statusName": "Wind Shear",
      "stackLimit": 5,
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "Harscyline_DOT_Burn[<span class=\"descriptionNumberColor\">Burn</span>]",
      "stackType": "ReplaceByCaster",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "modifierFlags": [
        "STAT_DOT",
        "STAT_DOT_Burn",
        "CanBeAddedToServant",
        "CanListenServantCallback"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is NOT in Auto-Battle State"
              }
            }
          ]
        },
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "ATK Scaling DMG",
              "target": "Owner of this Modifier",
              "AttackScaling": {
                "DamageType": "Fire",
                "Damage": {
                  "operator": "Variables[0] (Modifier_Burn_DamageValue) || Variables[1] (_Layer) || MUL || RETURN",
                  "displayLines": "(Modifier_Burn_DamageValue * _Layer)",
                  "constants": [],
                  "variables": [
                    "Modifier_Burn_DamageValue",
                    "_Layer"
                  ]
                },
                "DamageExtra": {
                  "operator": "Variables[0] (Modifier_Burn_DamagePercentage_Defence) || Variables[1] (_Layer) || MUL || RETURN",
                  "displayLines": "(Modifier_Burn_DamagePercentage_Defence * _Layer)",
                  "constants": [],
                  "variables": [
                    "Modifier_Burn_DamagePercentage_Defence",
                    "_Layer"
                  ]
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
              "target": "Owner of this Modifier",
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
              "target": "Owner of this Modifier",
              "AttackScaling": {
                "DamageType": "Fire",
                "Damage": {
                  "operator": "Variables[0] (DOT_TriggerRatio) || Variables[1] (Modifier_Burn_DamageValue) || MUL || Variables[2] (_Layer) || MUL || RETURN",
                  "displayLines": "((DOT_TriggerRatio * Modifier_Burn_DamageValue) * _Layer)",
                  "constants": [],
                  "variables": [
                    "DOT_TriggerRatio",
                    "Modifier_Burn_DamageValue",
                    "_Layer"
                  ]
                },
                "DamageExtra": {
                  "operator": "Variables[0] (DOT_TriggerRatio) || Variables[1] (Modifier_Burn_DamagePercentage_Defence) || MUL || Variables[2] (_Layer) || MUL || RETURN",
                  "displayLines": "((DOT_TriggerRatio * Modifier_Burn_DamagePercentage_Defence) * _Layer)",
                  "constants": [],
                  "variables": [
                    "DOT_TriggerRatio",
                    "Modifier_Burn_DamagePercentage_Defence",
                    "_Layer"
                  ]
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
      ],
      "useEntitySnapshot": true,
      "description": "Takes Fire DMG at the start of each turn for a certain number of turns.",
      "type": "Debuff",
      "effectName": "Burn",
      "statusName": "Burn",
      "stackLimit": 1,
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "Harscyline_DOT_Electric[<span class=\"descriptionNumberColor\">Shock</span>]",
      "stackType": "ReplaceByCaster",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "modifierFlags": [
        "STAT_DOT",
        "STAT_DOT_Electric",
        "CanBeAddedToServant",
        "CanListenServantCallback"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is NOT in Auto-Battle State"
              }
            }
          ]
        },
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "ATK Scaling DMG",
              "target": "Owner of this Modifier",
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "operator": "Variables[0] (Modifier_Electric_DamageValue) || Variables[1] (_Layer) || MUL || RETURN",
                  "displayLines": "(Modifier_Electric_DamageValue * _Layer)",
                  "constants": [],
                  "variables": [
                    "Modifier_Electric_DamageValue",
                    "_Layer"
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
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": "Owner of this Modifier",
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
              "target": "Owner of this Modifier",
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "operator": "Variables[0] (DOT_TriggerRatio) || Variables[1] (Modifier_Electric_DamageValue) || MUL || Variables[2] (_Layer) || MUL || RETURN",
                  "displayLines": "((DOT_TriggerRatio * Modifier_Electric_DamageValue) * _Layer)",
                  "constants": [],
                  "variables": [
                    "DOT_TriggerRatio",
                    "Modifier_Electric_DamageValue",
                    "_Layer"
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
      "description": "Takes Lightning DMG at the start of each turn for a certain number of turns.",
      "type": "Debuff",
      "effectName": "Shock",
      "statusName": "Shock",
      "stackLimit": 1,
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "Harscyline_DOT_Tear[<span class=\"descriptionNumberColor\">Bleed</span>]",
      "stackType": "ReplaceByCaster",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "modifierFlags": [
        "STAT_DOT",
        "STAT_DOT_Bleed",
        "CanBeAddedToServant",
        "CanListenServantCallback"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Stat",
              "target": "Owner of this Modifier",
              "variableName": "MDF_TargetMaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": "Prior Snapshot Entity",
              "variableName": "MDF_CasterAttack",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">AttackSUM</span>&nbsp;"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_TargetMaxHP",
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] (MDF_CasterAttack) || Variables[1] (Modifier_Tear_MaxPercentage) || MUL || Variables[2] (Modifier_Tear_DamageRatio) || DIV || RETURN",
                  "displayLines": "((MDF_CasterAttack * Modifier_Tear_MaxPercentage) / Modifier_Tear_DamageRatio)",
                  "constants": [],
                  "variables": [
                    "MDF_CasterAttack",
                    "Modifier_Tear_MaxPercentage",
                    "Modifier_Tear_DamageRatio"
                  ]
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_DamageValue",
                  "value": {
                    "operator": "Variables[0] (MDF_CasterAttack) || Variables[1] (Modifier_Tear_MaxPercentage) || MUL || RETURN",
                    "displayLines": "(MDF_CasterAttack * Modifier_Tear_MaxPercentage)",
                    "constants": [],
                    "variables": [
                      "MDF_CasterAttack",
                      "Modifier_Tear_MaxPercentage"
                    ]
                  }
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_DamageValue",
                  "value": {
                    "operator": "Variables[0] (MDF_TargetMaxHP) || Variables[1] (Modifier_Tear_DamageRatio) || MUL || RETURN",
                    "displayLines": "(MDF_TargetMaxHP * Modifier_Tear_DamageRatio)",
                    "constants": [],
                    "variables": [
                      "MDF_TargetMaxHP",
                      "Modifier_Tear_DamageRatio"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "Define Custom Variable with Stat",
              "target": "Owner of this Modifier",
              "variableName": "MDF_TargetMaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": "Prior Snapshot Entity",
              "variableName": "MDF_CasterAttack",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">AttackSUM</span>&nbsp;"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_TargetMaxHP",
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] (MDF_CasterAttack) || Variables[1] (Modifier_Tear_MaxPercentage) || MUL || Variables[2] (Modifier_Tear_DamageRatio) || DIV || RETURN",
                  "displayLines": "((MDF_CasterAttack * Modifier_Tear_MaxPercentage) / Modifier_Tear_DamageRatio)",
                  "constants": [],
                  "variables": [
                    "MDF_CasterAttack",
                    "Modifier_Tear_MaxPercentage",
                    "Modifier_Tear_DamageRatio"
                  ]
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_DamageValue",
                  "value": {
                    "operator": "Variables[0] (MDF_CasterAttack) || Variables[1] (Modifier_Tear_MaxPercentage) || MUL || RETURN",
                    "displayLines": "(MDF_CasterAttack * Modifier_Tear_MaxPercentage)",
                    "constants": [],
                    "variables": [
                      "MDF_CasterAttack",
                      "Modifier_Tear_MaxPercentage"
                    ]
                  }
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_DamageValue",
                  "value": {
                    "operator": "Variables[0] (MDF_TargetMaxHP) || Variables[1] (Modifier_Tear_DamageRatio) || MUL || RETURN",
                    "displayLines": "(MDF_TargetMaxHP * Modifier_Tear_DamageRatio)",
                    "constants": [],
                    "variables": [
                      "MDF_TargetMaxHP",
                      "Modifier_Tear_DamageRatio"
                    ]
                  }
                }
              ]
            },
            {
              "name": "ATK Scaling DMG",
              "target": "Owner of this Modifier",
              "AttackScaling": {
                "DamageType": "Physical",
                "Damage": {
                  "operator": "Variables[0] (MDF_DamageValue) || Variables[1] (_Layer) || MUL || RETURN",
                  "displayLines": "(MDF_DamageValue * _Layer)",
                  "constants": [],
                  "variables": [
                    "MDF_DamageValue",
                    "_Layer"
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
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": "Owner of this Modifier",
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
              "target": "Owner of this Modifier",
              "variableName": "MDF_TargetMaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": "Prior Snapshot Entity",
              "variableName": "MDF_CasterAttack",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">AttackSUM</span>&nbsp;"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_TargetMaxHP",
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] (MDF_CasterAttack) || Variables[1] (Modifier_Tear_MaxPercentage) || MUL || Variables[2] (Modifier_Tear_DamageRatio) || DIV || RETURN",
                  "displayLines": "((MDF_CasterAttack * Modifier_Tear_MaxPercentage) / Modifier_Tear_DamageRatio)",
                  "constants": [],
                  "variables": [
                    "MDF_CasterAttack",
                    "Modifier_Tear_MaxPercentage",
                    "Modifier_Tear_DamageRatio"
                  ]
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_DamageValue",
                  "value": {
                    "operator": "Variables[0] (MDF_CasterAttack) || Variables[1] (Modifier_Tear_MaxPercentage) || MUL || RETURN",
                    "displayLines": "(MDF_CasterAttack * Modifier_Tear_MaxPercentage)",
                    "constants": [],
                    "variables": [
                      "MDF_CasterAttack",
                      "Modifier_Tear_MaxPercentage"
                    ]
                  }
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_DamageValue",
                  "value": {
                    "operator": "Variables[0] (MDF_TargetMaxHP) || Variables[1] (Modifier_Tear_DamageRatio) || MUL || RETURN",
                    "displayLines": "(MDF_TargetMaxHP * Modifier_Tear_DamageRatio)",
                    "constants": [],
                    "variables": [
                      "MDF_TargetMaxHP",
                      "Modifier_Tear_DamageRatio"
                    ]
                  }
                }
              ]
            },
            {
              "name": "ATK Scaling DMG",
              "target": "Owner of this Modifier",
              "AttackScaling": {
                "DamageType": "Physical",
                "Damage": {
                  "operator": "Variables[0] (DOT_TriggerRatio) || Variables[1] (MDF_DamageValue) || MUL || Variables[2] (_Layer) || MUL || RETURN",
                  "displayLines": "((DOT_TriggerRatio * MDF_DamageValue) * _Layer)",
                  "constants": [],
                  "variables": [
                    "DOT_TriggerRatio",
                    "MDF_DamageValue",
                    "_Layer"
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
      "description": "Takes Physical DMG at the start of each turn for a certain number of turns.",
      "type": "Debuff",
      "effectName": "Bleed",
      "statusName": "Bleed",
      "stackLimit": 1,
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "Harscyline_TriggerDotFlag",
      "stackType": "Replace",
      "modifierFlags": [
        "RemoveWhenCasterDead",
        "KeepOnDeathrattle"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Harscyline_PassiveDot_Part1Listen",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
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
                    "operator": "Variables[0] (MDF_DotHitCount) || RETURN",
                    "displayLines": "MDF_DotHitCount",
                    "constants": [],
                    "variables": [
                      "MDF_DotHitCount"
                    ]
                  },
                  "Event": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Scoring_Hars_Count",
                      "value": {
                        "operator": "Variables[0] (Scoring_Hars_Count) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(Scoring_Hars_Count + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "Scoring_Hars_Count"
                        ]
                      }
                    },
                    {
                      "name": "ATK Scaling DMG",
                      "target": "Owner of this Modifier",
                      "AttackScaling": {
                        "DamageType": "Physical",
                        "Damage": {
                          "operator": "Variables[0] (MDF_DOTDamagePercentage) || RETURN",
                          "displayLines": "MDF_DOTDamagePercentage",
                          "constants": [],
                          "variables": [
                            "MDF_DOTDamagePercentage"
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
                  "name": "IF",
                  "conditions": {
                    "name": "Living State",
                    "state": "Mask_AliveOnly",
                    "target": "Owner of this Modifier"
                  }
                }
              ]
            }
          ],
          "priorityLevel": 91
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
                "target": "Use Prior Target(s) Defined",
                "target2": "Owner of this Modifier"
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "Harscyline_TriggerDotFlag"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_TriggerEffectFlag",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_DotHitCount",
                  "value": 0
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
                    "modifier": "Harscyline_TriggerDotFlag"
                  },
                  {
                    "name": "Compare: Target",
                    "target": "Use Prior Target(s) Defined",
                    "target2": "Owner of this Modifier"
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "MDF_DotHitCount",
                    "compareType": "<",
                    "value2": {
                      "operator": "Variables[0] (MDF_MaxLimit) || RETURN",
                      "displayLines": "MDF_MaxLimit",
                      "constants": [],
                      "variables": [
                        "MDF_MaxLimit"
                      ]
                    }
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_DotHitCount",
                  "value": {
                    "operator": "Variables[0] (MDF_DotHitCount) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(MDF_DotHitCount + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "MDF_DotHitCount"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_TriggerEffectFlag",
                  "value": 1
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Harscyline_PassiveDot_Trigger",
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
              "to": "Owner of this Modifier",
              "modifier": "Harscyline_TriggerDotFlag"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_isPhase1",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_DotHitCount",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_CanTriggerDot",
              "value": 1
            }
          ]
        },
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": "Owner of this Modifier",
              "modifier": "Harscyline_TriggerDotFlag"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_isPhase1",
              "value": 1
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_DotHitCount",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_CanTriggerDot",
              "value": 1
            }
          ],
          "priorityLevel": -11
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
                      "operator": "Variables[0] (MDF_MaxLimit) || RETURN",
                      "displayLines": "MDF_MaxLimit",
                      "constants": [],
                      "variables": [
                        "MDF_MaxLimit"
                      ]
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
                        "target": "Use Prior Target(s) Defined"
                      },
                      {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Has Modifier",
                            "target": "Caster",
                            "modifier": "Memosprite_CyreneServant_AmazingBonus_Harscyline[<span class=\"descriptionNumberColor\">Ode to Ocean</span>]"
                          },
                          {
                            "name": "Character ID",
                            "ID": 1415,
                            "target": "Use Prior Target(s) Defined",
                            "characterName": "Cyrene"
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
                        "target": "Caster",
                        "modifier": "Harscyline_Ability03_Flag",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Modifier",
                        "target": "Owner of this Modifier",
                        "modifier": "Harscyline_TriggerDotFlag",
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
                      "to": "Owner of this Modifier",
                      "modifier": "Harscyline_TriggerDotFlag"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_DotHitCount",
                      "value": {
                        "operator": "Variables[0] (MDF_DotHitCount) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(MDF_DotHitCount + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "MDF_DotHitCount"
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
          "eventTrigger": "Being Attacked End [Owner]",
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
                    "target": "Use Prior Target(s) Defined",
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
                      "operator": "Variables[0] (MDF_MaxLimit) || RETURN",
                      "displayLines": "MDF_MaxLimit",
                      "constants": [],
                      "variables": [
                        "MDF_MaxLimit"
                      ]
                    },
                    "contextScope": "ContextModifier"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_DotHitCount",
                      "value": {
                        "operator": "Variables[0] (MDF_MaxLimit) || RETURN",
                        "displayLines": "MDF_MaxLimit",
                        "constants": [],
                        "variables": [
                          "MDF_MaxLimit"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": "Caster",
                    "modifier": "Harscyline_Ability03_Flag",
                    "invertCondition": true
                  }
                },
                {
                  "name": "Looped Event",
                  "maxLoops": {
                    "operator": "Variables[0] (MDF_DotHitCount) || RETURN",
                    "displayLines": "MDF_DotHitCount",
                    "constants": [],
                    "variables": [
                      "MDF_DotHitCount"
                    ]
                  },
                  "Event": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Scoring_Hars_Count",
                      "value": {
                        "operator": "Variables[0] (Scoring_Hars_Count) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(Scoring_Hars_Count + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "Scoring_Hars_Count"
                        ]
                      }
                    },
                    {
                      "name": "ATK Scaling DMG",
                      "target": "Owner of this Modifier",
                      "AttackScaling": {
                        "DamageType": "Physical",
                        "Damage": {
                          "operator": "Variables[0] (MDF_DOTDamagePercentage) || RETURN",
                          "displayLines": "MDF_DOTDamagePercentage",
                          "constants": [],
                          "variables": [
                            "MDF_DOTDamagePercentage"
                          ]
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
              "variableName": "MDF_DotHitCount",
              "value": 0
            }
          ]
        },
        {
          "eventTrigger": "Action Start [Owner]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": "Owner of this Modifier",
              "modifier": "Harscyline_TriggerDotFlag"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target",
                "target": "Use Prior Target(s) Defined",
                "target2": "Owner of this Modifier"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_isPhase1",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_CanTriggerDot",
                  "value": 0
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
              "to": "Owner of this Modifier",
              "modifier": "Harscyline_TriggerDotFlag"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Is Part Of",
                    "of": "All Team Members(In Context, with Untargetable + Battle Events)",
                    "target": "Use Prior Target(s) Defined",
                    "mustBeAlive2": true
                  },
                  {
                    "name": "Is Part Of",
                    "of": "All Hostile Entities (AOE)(ALL)",
                    "target": "Use [LIST OF] Prior Target(s) Defined",
                    "mustBeAlive2": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_isPhase1",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_DotHitCount",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_CanTriggerDot",
                  "value": 1
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
              "to": "Owner of this Modifier",
              "modifier": "Harscyline_TriggerDotFlag"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_isPhase1",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_CanTriggerDot",
              "value": 0
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
                    "of": "All Team Members(In Context, with Untargetable + Battle Events)",
                    "target": "Use Prior Target(s) Defined",
                    "mustBeAlive2": true
                  },
                  {
                    "name": "Is Part Of",
                    "of": "All Hostile Entities (AOE)(ALL)",
                    "target": "Use [LIST OF] Prior Target(s) Defined",
                    "mustBeAlive2": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "Harscyline_TriggerDotFlag"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_isPhase1",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_DotHitCount",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_CanTriggerDot",
                  "value": 1
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
              "to": "Owner of this Modifier",
              "modifier": "Harscyline_TriggerDotFlag"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_isPhase1",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_CanTriggerDot",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_DotHitCount",
              "value": 0
            }
          ]
        },
        {
          "eventTrigger": "Injected Ability Use [Anyone]: Aborted",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": "Owner of this Modifier",
              "modifier": "Harscyline_TriggerDotFlag"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_isPhase1",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_CanTriggerDot",
              "value": 0
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Harscyline_PointB3_DamageAdded[<span class=\"descriptionNumberColor\">The Fiddle of Pearls</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": "Owner of this Modifier",
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
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
      "stackData": [
        "MDF_PropertyRatio"
      ],
      "latentQueue": [],
      "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_PropertyRatio</span>.",
      "type": "Buff",
      "statusName": "The Fiddle of Pearls"
    },
    {
      "name": "Modifier Construction",
      "for": "Harscyline_HaloDebuff[<span class=\"descriptionNumberColor\">Maelstrom Rhapsody</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "RemoveWhenCasterDead",
        "STAT_DefenceDown"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": "Owner of this Modifier",
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
              "value": {
                "operator": "Constants[0] (0) || Variables[0] (MDF_DefenceDownRatio) || SUB || RETURN",
                "displayLines": "(0 - MDF_DefenceDownRatio)",
                "constants": [
                  0
                ],
                "variables": [
                  "MDF_DefenceDownRatio"
                ]
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": "Owner of this Modifier",
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
              "value": {
                "operator": "Constants[0] (0) || Variables[0] (MDF_AttackDownRatio) || SUB || RETURN",
                "displayLines": "(0 - MDF_AttackDownRatio)",
                "constants": [
                  0
                ],
                "variables": [
                  "MDF_AttackDownRatio"
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 4,
                "target": "Caster"
              },
              "passed": [
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceAll</span>&nbsp;",
                  "value": {
                    "operator": "Constants[0] (0) || Variables[0] (MDF_ResistanceDownRatio) || SUB || RETURN",
                    "displayLines": "(0 - MDF_ResistanceDownRatio)",
                    "constants": [
                      0
                    ],
                    "variables": [
                      "MDF_ResistanceDownRatio"
                    ]
                  }
                },
                {
                  "name": "Update Modifier Description",
                  "popUpText": "Enemy targets within the Zone have their ATK decreased by #5[f1]%, DEF decreased by #3[f1]%, and All-Type RES decreased by #4[i]%. For every 1 instance of DoT they receive, they will take Physical DoT equal to #1[i]% of Hysilens's ATK. This damage triggers at the start of each turn or after one attack by an ally target, up to #2[i] time(s). And it cannot repeatedly trigger this effect."
                }
              ]
            }
          ]
        }
      ],
      "description": "Enemy targets within the Zone have their ATK decreased by <span class=\"descriptionNumberColor\">MDF_AttackDownRatio</span> and DEF decreased by <span class=\"descriptionNumberColor\">MDF_DefenceDownRatio</span>. For every 1 instance of DoT they receive, they will take Physical DoT equal to <span class=\"descriptionNumberColor\">MDF_DOTDamagePercentage</span> of Hysilens's ATK. This damage triggers at the start of each turn or after one attack by an ally target, up to <span class=\"descriptionNumberColor\">MDF_TriggerDOTMaxCount</span> time(s). And it cannot repeatedly trigger this effect.",
      "type": "Debuff",
      "statusName": "Maelstrom Rhapsody"
    },
    {
      "name": "Modifier Construction",
      "for": "Harscyline_AllDamageTypeTakenRatio[<span class=\"descriptionNumberColor\">Overtone Hum: Chorus After Dark Tides</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": "Owner of this Modifier",
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
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
      "stackData": [
        "MDF_PropertyRatio"
      ],
      "latentQueue": [],
      "description": "DMG taken increases by <span class=\"descriptionNumberColor\">MDF_PropertyRatio</span>.",
      "type": "Debuff",
      "effectName": "Vulnerability",
      "statusName": "Overtone Hum: Chorus After Dark Tides"
    },
    {
      "name": "Modifier Construction",
      "for": "Harscyline_Maze_Flag"
    },
    {
      "name": "Modifier Construction",
      "for": "Harscyline_Ability03_Flag",
      "stackType": "Replace",
      "modifierFlags": [
        "RemoveWhenCasterDead",
        "KeepOnDeathrattle"
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Harscyline_Ability03_HaloStatus",
      "stackType": "ReplaceByCaster",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "modifierFlags": [
        "RemoveWhenCasterDead",
        "ListenBattleEventSkill"
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": "Allied Team(ALL, exclude Owner) [Exclude battle mechanics]",
              "modifier": "Harscyline_PointB3_DamageAdded[<span class=\"descriptionNumberColor\">The Fiddle of Pearls</span>]"
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": 0,
              "maximum": {
                "operator": "Variables[0] (Skill03_HaloLifeTime) || RETURN",
                "displayLines": "Skill03_HaloLifeTime",
                "constants": [],
                "variables": [
                  "Skill03_HaloLifeTime"
                ]
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
              "modifierName": "Harscyline_Ability03_HaloStatus",
              "multiplier": 1
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (MDF_Layer) || RETURN",
                "displayLines": "MDF_Layer",
                "constants": [],
                "variables": [
                  "MDF_Layer"
                ]
              },
              "maximum": {
                "operator": "Variables[0] (Skill03_HaloLifeTime) || RETURN",
                "displayLines": "Skill03_HaloLifeTime",
                "constants": [],
                "variables": [
                  "Skill03_HaloLifeTime"
                ]
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
                    "operator": "Variables[0] (1) || RETURN",
                    "displayLines": "1",
                    "constants": [],
                    "variables": [
                      1
                    ]
                  },
                  "adjustmentType": "+"
                }
              ]
            },
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "LifeTime",
              "variableName": "MDF_Layer",
              "modifierName": "Harscyline_Ability03_HaloStatus",
              "multiplier": 1
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (MDF_Layer) || RETURN",
                "displayLines": "MDF_Layer",
                "constants": [],
                "variables": [
                  "MDF_Layer"
                ]
              },
              "maximum": {
                "operator": "Variables[0] (Skill03_HaloLifeTime) || RETURN",
                "displayLines": "Skill03_HaloLifeTime",
                "constants": [],
                "variables": [
                  "Skill03_HaloLifeTime"
                ]
              },
              "priorState": "Active",
              "bar#": 3
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": "Caster",
                "modifier": "Harscyline_Maze_Flag"
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
                  "to": "Caster",
                  "modifier": "Harscyline_Maze_Flag"
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_DOTDamagePercentageTemp",
        "MDF_TriggerDOTMaxCountTemp",
        "MDF_DefenceDownRatioTemp",
        "MDF_ResistanceDownRatioTemp",
        "MDF_AttackDownRatioTemp"
      ],
      "latentQueue": [],
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": "All Hostile Entities (AOE)(ALL)",
          "modifier": "Harscyline_PassiveDot_Trigger",
          "haloStatus": true,
          "valuePerStack": {
            "MDF_MaxLimit": {
              "operator": "Variables[0] (Skill03_TriggerDotMaxCount) || RETURN",
              "displayLines": "Skill03_TriggerDotMaxCount",
              "constants": [],
              "variables": [
                "Skill03_TriggerDotMaxCount"
              ]
            },
            "MDF_DOTDamagePercentage": {
              "operator": "Variables[0] (MDF_DOTDamagePercentageTemp) || RETURN",
              "displayLines": "MDF_DOTDamagePercentageTemp",
              "constants": [],
              "variables": [
                "MDF_DOTDamagePercentageTemp"
              ]
            }
          }
        },
        {
          "name": "Add Sub-Events/Bonuses",
          "to": "All Hostile Entities (AOE)(ALL)",
          "modifier": "Harscyline_PassiveDot_Part1Listen",
          "haloStatus": true,
          "valuePerStack": {
            "MDF_MaxLimit": {
              "operator": "Variables[0] (Skill03_TriggerDotMaxCount) || RETURN",
              "displayLines": "Skill03_TriggerDotMaxCount",
              "constants": [],
              "variables": [
                "Skill03_TriggerDotMaxCount"
              ]
            },
            "MDF_DOTDamagePercentage": {
              "operator": "Variables[0] (MDF_DOTDamagePercentageTemp) || RETURN",
              "displayLines": "MDF_DOTDamagePercentageTemp",
              "constants": [],
              "variables": [
                "MDF_DOTDamagePercentageTemp"
              ]
            }
          }
        },
        {
          "name": "Add Sub-Events/Bonuses",
          "to": "All Hostile Entities (AOE)(ALL)",
          "modifier": "Harscyline_HaloDebuff[<span class=\"descriptionNumberColor\">Maelstrom Rhapsody</span>]",
          "haloStatus": true,
          "valuePerStack": {
            "MDF_DOTDamagePercentage": {
              "operator": "Variables[0] (MDF_DOTDamagePercentageTemp) || RETURN",
              "displayLines": "MDF_DOTDamagePercentageTemp",
              "constants": [],
              "variables": [
                "MDF_DOTDamagePercentageTemp"
              ]
            },
            "MDF_TriggerDOTMaxCount": {
              "operator": "Variables[0] (MDF_TriggerDOTMaxCountTemp) || RETURN",
              "displayLines": "MDF_TriggerDOTMaxCountTemp",
              "constants": [],
              "variables": [
                "MDF_TriggerDOTMaxCountTemp"
              ]
            },
            "MDF_DefenceDownRatio": {
              "operator": "Variables[0] (MDF_DefenceDownRatioTemp) || RETURN",
              "displayLines": "MDF_DefenceDownRatioTemp",
              "constants": [],
              "variables": [
                "MDF_DefenceDownRatioTemp"
              ]
            },
            "MDF_ResistanceDownRatio": {
              "operator": "Variables[0] (MDF_ResistanceDownRatioTemp) || RETURN",
              "displayLines": "MDF_ResistanceDownRatioTemp",
              "constants": [],
              "variables": [
                "MDF_ResistanceDownRatioTemp"
              ]
            },
            "MDF_AttackDownRatio": {
              "operator": "Variables[0] (MDF_AttackDownRatioTemp) || RETURN",
              "displayLines": "MDF_AttackDownRatioTemp",
              "constants": [],
              "variables": [
                "MDF_AttackDownRatioTemp"
              ]
            }
          }
        },
        {
          "name": "Add Sub-Events/Bonuses",
          "to": "Allied Team(ALL, exclude Owner) [Exclude battle mechanics]",
          "modifier": "Harscyline_PointB3_DamageAdded[<span class=\"descriptionNumberColor\">The Fiddle of Pearls</span>]",
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
              "operator": "Variables[0] (SkillTree_PointB3_StatusProbabilityValue) || RETURN",
              "displayLines": "SkillTree_PointB3_StatusProbabilityValue",
              "constants": [],
              "variables": [
                "SkillTree_PointB3_StatusProbabilityValue"
              ]
            }
          }
        }
      ]
    }
  ],
  "references": []
}