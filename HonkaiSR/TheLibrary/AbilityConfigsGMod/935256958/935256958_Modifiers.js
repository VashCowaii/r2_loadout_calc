const configAbility = {
  "fileName": "935256958_Modifiers",
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
      "for": "MWPassiveHeal_Speedup",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "STAT_SpeedUp"
      ],
      "execute": [
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
              "variableName": "SpeedupLayer",
              "multiplier": 1
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDFlat</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_PropertyValue) || Variables[1] (SpeedupLayer) || MUL || RETURN",
                "displayLines": "(MDF_PropertyValue * SpeedupLayer)",
                "constants": [],
                "variables": [
                  "MDF_PropertyValue",
                  "SpeedupLayer"
                ]
              }
            }
          ]
        }
      ],
      "stackLimit": 3,
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "MWNormalAttack_Ultimate_Concentrate",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "ConcentrateLayer",
              "value": 0
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "Layer",
              "variableName": "ConcentrateLayer",
              "multiplier": 1
            }
          ]
        }
      ],
      "stackLimit": 5,
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "MWCriticalShaman_Passive_StatusProbability",
      "stackType": "Replace",
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
              "variableName": "Passive02_PropertyValue",
              "value": 0
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "Passive02_PropertyValue",
              "value": {
                "operator": "Variables[0] (Passive02Add) || Variables[1] (Passive02_PropertyValue) || ADD || RETURN",
                "displayLines": "(Passive02Add + Passive02_PropertyValue)",
                "constants": [],
                "variables": [
                  "Passive02Add",
                  "Passive02_PropertyValue"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "MWSetsugekka_Passive02_Modifier",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceAll</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                "displayLines": "MDF_PropertyValue",
                "constants": [],
                "variables": [
                  "MDF_PropertyValue"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "MWHana_Ultimate_DamageUp",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "Hana",
              "value": 0
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                "displayLines": "MDF_PropertyValue",
                "constants": [],
                "variables": [
                  "MDF_PropertyValue"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "Hana",
              "value": 1
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "MWTsuki_BPAbility_DamageUp",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "Tsuki",
              "value": 0
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                "displayLines": "MDF_PropertyValue",
                "constants": [],
                "variables": [
                  "MDF_PropertyValue"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "Tsuki",
              "value": 1
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "MWYuki_Normal_DamageUp",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "Yuki",
              "value": 0
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                "displayLines": "MDF_PropertyValue",
                "constants": [],
                "variables": [
                  "MDF_PropertyValue"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "Yuki",
              "value": 1
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "MWZaika_Passive_UltraDamageUp",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "Layer",
              "variableName": "_MDF_Layer",
              "multiplier": 1
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_Zaika_Pass01_DamageUp",
              "value": {
                "operator": "Variables[0] (_MDF_Layer) || Variables[1] (MDF_DamageUpPerKill) || MUL || RETURN",
                "displayLines": "(_MDF_Layer * MDF_DamageUpPerKill)",
                "constants": [],
                "variables": [
                  "_MDF_Layer",
                  "MDF_DamageUpPerKill"
                ]
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_Zaika_Pass01_DamageUp) || RETURN",
                "displayLines": "MDF_Zaika_Pass01_DamageUp",
                "constants": [],
                "variables": [
                  "MDF_Zaika_Pass01_DamageUp"
                ]
              }
            }
          ]
        }
      ],
      "stackLimit": 5,
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "MWZaika_Passive_DamageUpByTargetCount",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_Zaika_Pass02_AttackUp) || RETURN",
                "displayLines": "MDF_Zaika_Pass02_AttackUp",
                "constants": [],
                "variables": [
                  "MDF_Zaika_Pass02_AttackUp"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "SpeedAtk_Speedup_Modifier",
      "modifierFlags": [
        "STAT_SpeedUp"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDFlat</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_SpeedValue) || RETURN",
                "displayLines": "MDF_SpeedValue",
                "constants": [],
                "variables": [
                  "MDF_SpeedValue"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "MWController_Passive",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">EffectHitRate</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                "displayLines": "MDF_PropertyValue",
                "constants": [],
                "variables": [
                  "MDF_PropertyValue"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "MWCourier_Ultimate_Delivery",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "STAT_SpeedUp"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "Layer",
              "variableName": "DeliveryNumber",
              "modifierName": "MWCourier_Ultimate_Delivery",
              "multiplier": 1
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_CriticalDamage) || Variables[1] (DeliveryNumber) || MUL || RETURN",
                "displayLines": "(MDF_CriticalDamage * DeliveryNumber)",
                "constants": [],
                "variables": [
                  "MDF_CriticalDamage",
                  "DeliveryNumber"
                ]
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDFlat</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_Speed) || Variables[1] (DeliveryNumber) || MUL || RETURN",
                "displayLines": "(MDF_Speed * DeliveryNumber)",
                "constants": [],
                "variables": [
                  "MDF_Speed",
                  "DeliveryNumber"
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "DeliveryNumber",
                "compareType": "=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "MWCourier_Ultimate_Delivery"
                }
              ]
            }
          ]
        }
      ],
      "stackLimit": 6,
      "addStacksPerTrigger": {
        "operator": "Variables[0] (StackModifierLayers) || RETURN",
        "displayLines": "StackModifierLayers",
        "constants": [],
        "variables": [
          "StackModifierLayers"
        ]
      }
    },
    {
      "name": "Modifier Construction",
      "for": "SqueeAndBros_BigBomb_Modifier",
      "stackType": "ReplaceByCaster",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "modifierFlags": [],
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": null,
                "compareType": ">",
                "value2": 1,
                "valueType": "LifeTime"
              },
              "failed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Fire",
                    "Damage": {
                      "operator": "Variables[0] (Modifier_SqueeBigBomb_DamagePercentage) || RETURN",
                      "displayLines": "Modifier_SqueeBigBomb_DamagePercentage",
                      "constants": [],
                      "variables": [
                        "Modifier_SqueeBigBomb_DamagePercentage"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Additional DMG"
                  }
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Targets Adjacent(Blast)}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Fire",
                    "Damage": {
                      "operator": "Variables[0] (Modifier_SqueeBigBomb_Spread_DamagePercentage) || RETURN",
                      "displayLines": "Modifier_SqueeBigBomb_Spread_DamagePercentage",
                      "constants": [],
                      "variables": [
                        "Modifier_SqueeBigBomb_Spread_DamagePercentage"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Additional DMG"
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
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Targets Adjacent(Blast)}}"
              },
              "AttackScaling": {
                "DamageType": "Fire",
                "Damage": {
                  "operator": "Variables[0] (Modifier_SqueeBigBomb_Spread_DamagePercentage) || RETURN",
                  "displayLines": "Modifier_SqueeBigBomb_Spread_DamagePercentage",
                  "constants": [],
                  "variables": [
                    "Modifier_SqueeBigBomb_Spread_DamagePercentage"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Additional DMG"
              }
            }
          ]
        }
      ],
      "useEntitySnapshot": true
    },
    {
      "name": "Modifier Construction",
      "for": "MWSqueeAndBros_Ultimate_SmallBomb",
      "stackType": "ReplaceByCaster",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "modifierFlags": [],
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": null,
                "compareType": ">",
                "value2": 1,
                "valueType": "LifeTime"
              },
              "failed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Fire",
                    "Damage": {
                      "operator": "Variables[0] (Modifier_SqueeSmallBomb_DamagePercentage) || RETURN",
                      "displayLines": "Modifier_SqueeSmallBomb_DamagePercentage",
                      "constants": [],
                      "variables": [
                        "Modifier_SqueeSmallBomb_DamagePercentage"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Additional DMG"
                  }
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Targets Adjacent(Blast)}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Fire",
                    "Damage": {
                      "operator": "Variables[0] (Modifier_SqueeSmallBomb_Spread_DamagePercentage) || RETURN",
                      "displayLines": "Modifier_SqueeSmallBomb_Spread_DamagePercentage",
                      "constants": [],
                      "variables": [
                        "Modifier_SqueeSmallBomb_Spread_DamagePercentage"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Additional DMG"
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
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Targets Adjacent(Blast)}}"
              },
              "AttackScaling": {
                "DamageType": "Fire",
                "Damage": {
                  "operator": "Variables[0] (Modifier_SqueeSmallBomb_Spread_DamagePercentage) || RETURN",
                  "displayLines": "Modifier_SqueeSmallBomb_Spread_DamagePercentage",
                  "constants": [],
                  "variables": [
                    "Modifier_SqueeSmallBomb_Spread_DamagePercentage"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Additional DMG"
              }
            }
          ]
        }
      ],
      "useEntitySnapshot": true
    },
    {
      "name": "Modifier Construction",
      "for": "WB_IceShield_IceBlast_Modifier",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "modifierFlags": [],
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "AttackScaling": {
                "DamageType": "Ice",
                "Damage": {
                  "operator": "Variables[0] (STANDARDSPECIFIC_OBJECT_UNUSED_17) || RETURN",
                  "displayLines": "STANDARDSPECIFIC_OBJECT_UNUSED_17",
                  "constants": [],
                  "variables": [
                    "STANDARDSPECIFIC_OBJECT_UNUSED_17"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Additional DMG"
              }
            }
          ]
        }
      ],
      "useEntitySnapshot": true
    },
    {
      "name": "Modifier Construction",
      "for": "MWWB_Ultimate_IceShield",
      "stackType": "Replace",
      "modifierFlags": [
        "Shield"
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Shield",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              }
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "_Caster_MaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "Create Shield",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "value": {
                "operator": "Variables[0] (_Caster_MaxHP) || Variables[1] (Modifier_IceShield_ShieldPercentage) || MUL || RETURN",
                "displayLines": "(_Caster_MaxHP * Modifier_IceShield_ShieldPercentage)",
                "constants": [],
                "variables": [
                  "_Caster_MaxHP",
                  "Modifier_IceShield_ShieldPercentage"
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "Being Attacked End [Owner]",
          "execute": [
            {
              "name": "Inject Ability Use",
              "abilityName": "IceShield_Insert01_Part01",
              "abilitySource": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "abilityTarget": {
                "name": "Target Name",
                "target": "{{Ability Target DEALING DMG}}"
              },
              "priorityTag": "AvatarInsertAttackSelf",
              "canHitNonTargets": true,
              "allowAbilityTriggers": false
            }
          ]
        }
      ],
      "duration": 1
    },
    {
      "name": "Modifier Construction",
      "for": "MWLaTiao_Passive_WindDamageUp",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageWind</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (Modifier_LaTiaoPassiveWindRatio) || RETURN",
                "displayLines": "Modifier_LaTiaoPassiveWindRatio",
                "constants": [],
                "variables": [
                  "Modifier_LaTiaoPassiveWindRatio"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "MWTuiTiao_Ultimate_Caculator",
      "stackType": "ReplaceByCaster",
      "stackLimit": 10,
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "MWTuiTiao_Passive_Electric",
      "execute": [
        {
          "eventTrigger": "Take Damage Start [Owner]: Hit",
          "execute": [
            {
              "name": "Action Advance/Delay",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "advanceType": "Set",
              "multiAdd": "MDF_ActionDelay_Ratio"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "operator": "Variables[0] (MDF_DamagePercantage) || RETURN",
                  "displayLines": "MDF_DamagePercantage",
                  "constants": [],
                  "variables": [
                    "MDF_DamagePercantage"
                  ]
                },
                "indirectDMG": true,
                "Toughness": null,
                "Tags": null,
                "attackType": "Additional DMG"
              }
            },
            "Modifier Deletes Itself"
          ]
        }
      ],
      "useEntitySnapshot": true
    },
    {
      "name": "Modifier Construction",
      "for": "MWAOETuiTiao_SuperAbility1_Modifier",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        }
      ]
    }
  ],
  "references": []
}