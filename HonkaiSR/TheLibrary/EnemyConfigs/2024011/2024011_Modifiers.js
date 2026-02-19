const configAbility = {
  "fileName": "2024011_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__163974997\">Monster_W2_Xuanlu_10_RL_LowHP</a>",
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
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": "<=",
                    "value2": {
                      "operator": "Variables[0] (MDF_LowHPRatio) || RETURN",
                      "displayLines": "MDF_LowHPRatio",
                      "constants": [],
                      "variables": [
                        "MDF_LowHPRatio"
                      ]
                    }
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 3
                  }
                ]
              },
              "passed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "FinalPhase",
                  "value": 1
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "AIFlag",
                  "value": 1
                },
                {
                  "name": "Action Advance/Delay",
                  "advanceType": "Set",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "multiBase": 0
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": "<=",
                    "value2": 0
                  }
                },
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_LowHPRatio"
      ],
      "latentQueue": [
        "InsertCheck"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__113542848\">Enemy_W2_Xuanlu_10_SecondPhase</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ],
      "stackData": [],
      "latentQueue": [
        "AIFlag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-106618190\">Enemy_W2_Xuanlu_10_PartController_LockHP</a>",
      "execute": [
        {
          "eventTrigger": "Waiting for Healing in Limbo",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "InsertCheck",
                "compareType": "=",
                "value2": 1,
                "contextScope": "TargetEntity"
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1794338335\">Standard_CTRL_Crazy</a>[<span class=\"descriptionNumberColor\">Outrage</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-924806619\">Enemy_W2_Xuanlu_02_Bonus</a>[<span class=\"descriptionNumberColor\">Engender</span>]"
                },
                {
                  "name": "Dispel Debuffs",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "silent": true
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-585027897\">Enemy_W2_Xuanlu_Endurance</a>"
                },
                {
                  "name": "Define Custom Variable",
                  "scope": "TargetEntity",
                  "variableName": "InsertCheck",
                  "value": 0
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"113542848\">Enemy_W2_Xuanlu_10_SecondPhase</a>"
                },
                {
                  "name": "Set Enemy Phase",
                  "mode": "Inc"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster's Minions}}"
                    },
                    "value1": "TeamCharacterCount",
                    "compareType": ">=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster's Minions}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-514199936\">Enemy_W2_Xuanlu_DisableAction</a>"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 2
                  },
                  "passed": [
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W2_Xuanlu_10_ChangePhase2",
                      "priorityTag": "MonsterChangePhase",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 3
                  },
                  "passed": [
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W2_Xuanlu_10_ChangePhase3",
                      "priorityTag": "MonsterChangePhase",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ]
            }
          ],
          "priorityLevel": -90
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1146705485\">Enemy_W2_Xuanlu_10_MinionMark_4</a>",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Summoner of Modifier Holder}}"
              },
              "variableName": "MinionCount",
              "context": "TargetEntity",
              "value": -1,
              "max": {
                "operator": "Variables[0] (MDF_MaxMinionCount) || RETURN",
                "displayLines": "MDF_MaxMinionCount",
                "constants": [],
                "variables": [
                  "MDF_MaxMinionCount"
                ]
              }
            },
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Summoner of Modifier Holder}}"
              },
              "variableName": "MinionState_4",
              "context": "TargetEntity",
              "value": -1,
              "max": {
                "operator": "Variables[0] (MDF_MaxMinionCount) || RETURN",
                "displayLines": "MDF_MaxMinionCount",
                "constants": [],
                "variables": [
                  "MDF_MaxMinionCount"
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Summoner of Modifier Holder}}"
              },
              "variableName": "MinionCount",
              "context": "TargetEntity",
              "value": 1,
              "max": {
                "operator": "Variables[0] (MDF_MaxMinionCount) || RETURN",
                "displayLines": "MDF_MaxMinionCount",
                "constants": [],
                "variables": [
                  "MDF_MaxMinionCount"
                ]
              }
            },
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Summoner of Modifier Holder}}"
              },
              "variableName": "MinionState_4",
              "context": "TargetEntity",
              "value": 1,
              "max": {
                "operator": "Variables[0] (MDF_MaxMinionCount) || RETURN",
                "displayLines": "MDF_MaxMinionCount",
                "constants": [],
                "variables": [
                  "MDF_MaxMinionCount"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_MaxMinionCount"
      ],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1029262152\">Enemy_W2_Xuanlu_10_MinionMark_3</a>",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Summoner of Modifier Holder}}"
              },
              "variableName": "MinionCount",
              "context": "TargetEntity",
              "value": -1,
              "max": {
                "operator": "Variables[0] (MDF_MaxMinionCount) || RETURN",
                "displayLines": "MDF_MaxMinionCount",
                "constants": [],
                "variables": [
                  "MDF_MaxMinionCount"
                ]
              }
            },
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Summoner of Modifier Holder}}"
              },
              "variableName": "MinionState_3",
              "context": "TargetEntity",
              "value": -1,
              "max": {
                "operator": "Variables[0] (MDF_MaxMinionCount) || RETURN",
                "displayLines": "MDF_MaxMinionCount",
                "constants": [],
                "variables": [
                  "MDF_MaxMinionCount"
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Summoner of Modifier Holder}}"
              },
              "variableName": "MinionCount",
              "context": "TargetEntity",
              "value": 1,
              "max": {
                "operator": "Variables[0] (MDF_MaxMinionCount) || RETURN",
                "displayLines": "MDF_MaxMinionCount",
                "constants": [],
                "variables": [
                  "MDF_MaxMinionCount"
                ]
              }
            },
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Summoner of Modifier Holder}}"
              },
              "variableName": "MinionState_3",
              "context": "TargetEntity",
              "value": 1,
              "max": {
                "operator": "Variables[0] (MDF_MaxMinionCount) || RETURN",
                "displayLines": "MDF_MaxMinionCount",
                "constants": [],
                "variables": [
                  "MDF_MaxMinionCount"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_MaxMinionCount"
      ],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1046039771\">Enemy_W2_Xuanlu_10_MinionMark_2</a>",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Summoner of Modifier Holder}}"
              },
              "variableName": "MinionCount",
              "context": "TargetEntity",
              "value": -1,
              "max": {
                "operator": "Variables[0] (MDF_MaxMinionCount) || RETURN",
                "displayLines": "MDF_MaxMinionCount",
                "constants": [],
                "variables": [
                  "MDF_MaxMinionCount"
                ]
              }
            },
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Summoner of Modifier Holder}}"
              },
              "variableName": "MinionState_2",
              "context": "TargetEntity",
              "value": -1,
              "max": {
                "operator": "Variables[0] (MDF_MaxMinionCount) || RETURN",
                "displayLines": "MDF_MaxMinionCount",
                "constants": [],
                "variables": [
                  "MDF_MaxMinionCount"
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Summoner of Modifier Holder}}"
              },
              "variableName": "MinionCount",
              "context": "TargetEntity",
              "value": 1,
              "max": {
                "operator": "Variables[0] (MDF_MaxMinionCount) || RETURN",
                "displayLines": "MDF_MaxMinionCount",
                "constants": [],
                "variables": [
                  "MDF_MaxMinionCount"
                ]
              }
            },
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Summoner of Modifier Holder}}"
              },
              "variableName": "MinionState_2",
              "context": "TargetEntity",
              "value": 1,
              "max": {
                "operator": "Variables[0] (MDF_MaxMinionCount) || RETURN",
                "displayLines": "MDF_MaxMinionCount",
                "constants": [],
                "variables": [
                  "MDF_MaxMinionCount"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_MaxMinionCount"
      ],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1062817390\">Enemy_W2_Xuanlu_10_MinionMark_1</a>",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Summoner of Modifier Holder}}"
              },
              "variableName": "MinionCount",
              "context": "TargetEntity",
              "value": -1,
              "max": {
                "operator": "Variables[0] (MDF_MaxMinionCount) || RETURN",
                "displayLines": "MDF_MaxMinionCount",
                "constants": [],
                "variables": [
                  "MDF_MaxMinionCount"
                ]
              }
            },
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Summoner of Modifier Holder}}"
              },
              "variableName": "MinionState_1",
              "context": "TargetEntity",
              "value": -1,
              "max": {
                "operator": "Variables[0] (MDF_MaxMinionCount) || RETURN",
                "displayLines": "MDF_MaxMinionCount",
                "constants": [],
                "variables": [
                  "MDF_MaxMinionCount"
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Summoner of Modifier Holder}}"
              },
              "variableName": "MinionCount",
              "context": "TargetEntity",
              "value": 1,
              "max": {
                "operator": "Variables[0] (MDF_MaxMinionCount) || RETURN",
                "displayLines": "MDF_MaxMinionCount",
                "constants": [],
                "variables": [
                  "MDF_MaxMinionCount"
                ]
              }
            },
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Summoner of Modifier Holder}}"
              },
              "variableName": "MinionState_1",
              "context": "TargetEntity",
              "value": 1,
              "max": {
                "operator": "Variables[0] (MDF_MaxMinionCount) || RETURN",
                "displayLines": "MDF_MaxMinionCount",
                "constants": [],
                "variables": [
                  "MDF_MaxMinionCount"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_MaxMinionCount"
      ],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__938780665\">Enemy_W2_Xuanlu_10_EnergyDrain</a>[<span class=\"descriptionNumberColor\">Synwood Renewal</span>]",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "Heal",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "healPercent": {
                "operator": "Variables[0] (MMonster_W2_Xuanlu_10_EnergyDrain_TriggerHealRatio) || RETURN",
                "displayLines": "MMonster_W2_Xuanlu_10_EnergyDrain_TriggerHealRatio",
                "constants": [],
                "variables": [
                  "MMonster_W2_Xuanlu_10_EnergyDrain_TriggerHealRatio"
                ]
              },
              "formula": "Heal from Healer's MaxHP"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "Layer",
              "variableName": "MMonster_W2_Xuanlu_10_EnergyDrain_Layer",
              "modifierName": "<a class=\"gModGreen\" id=\"938780665\">Enemy_W2_Xuanlu_10_EnergyDrain</a>[<span class=\"descriptionNumberColor\">Synwood Renewal</span>]",
              "multiplier": 1
            },
            {
              "name": "Heal",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "healPercent": {
                "operator": "Variables[0] (MMonster_W2_Xuanlu_10_EnergyDrain_TurnHealRatio) || RETURN",
                "displayLines": "MMonster_W2_Xuanlu_10_EnergyDrain_TurnHealRatio",
                "constants": [],
                "variables": [
                  "MMonster_W2_Xuanlu_10_EnergyDrain_TurnHealRatio"
                ]
              },
              "formula": "Heal from Healer's MaxHP"
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MMonster_W2_Xuanlu_10_EnergyDrain_Layer) || Variables[1] (MMonster_W2_Xuanlu_10_EnergyDrain_ATKUpDelta) || MUL || RETURN",
                "displayLines": "(MMonster_W2_Xuanlu_10_EnergyDrain_Layer * MMonster_W2_Xuanlu_10_EnergyDrain_ATKUpDelta)",
                "constants": [],
                "variables": [
                  "MMonster_W2_Xuanlu_10_EnergyDrain_Layer",
                  "MMonster_W2_Xuanlu_10_EnergyDrain_ATKUpDelta"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MMonster_W2_Xuanlu_10_EnergyDrain_TriggerHealRatio",
        "MMonster_W2_Xuanlu_10_EnergyDrain_TurnHealRatio"
      ],
      "latentQueue": [],
      "description": "In every turn, restores HP equal to <span class=\"descriptionNumberColor\">MMonster_W2_Xuanlu_10_EnergyDrain_TurnHealRatio</span> of the unit's Max HP.",
      "type": "Buff",
      "effectName": "Synwood Renewal",
      "statusName": "Synwood Renewal",
      "stackLimit": 5,
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-536192328\">Enemy_W2_Xuanlu_10_RL_DamageUp</a>[<span class=\"descriptionNumberColor\">Vigor Overflow</span>]",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "Layer",
              "variableName": "ModifierLayers",
              "multiplier": 1
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_DamageUpRatio_PerLayer) || Variables[1] (ModifierLayers) || MUL || RETURN",
                "displayLines": "(MDF_DamageUpRatio_PerLayer * ModifierLayers)",
                "constants": [],
                "variables": [
                  "MDF_DamageUpRatio_PerLayer",
                  "ModifierLayers"
                ]
              }
            }
          ]
        }
      ],
      "description": "Increases DMG dealt by <span class=\"descriptionNumberColor\">MDF_DamageUpRatio_PerLayer</span>. This effect is stackable.",
      "type": "Buff",
      "effectName": "DMG Boost",
      "statusName": "Vigor Overflow",
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1367728749\">Enemy_W2_Xuanlu_10_RL_RageHandler</a>",
      "execute": [
        {
          "eventTrigger": "Entity Created [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Related Summoned Entity",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "target2": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "Monster_W2_Xuanlu_10_Skill14_RageLayer",
                  "modifierName": "<a class=\"gModGreen\" id=\"-536192328\">Enemy_W2_Xuanlu_10_RL_DamageUp</a>[<span class=\"descriptionNumberColor\">Vigor Overflow</span>]",
                  "multiplier": 1
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Monster_W2_Xuanlu_10_Skill14_RageLayer",
                    "compareType": ">=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-536192328\">Enemy_W2_Xuanlu_10_RL_DamageUp</a>[<span class=\"descriptionNumberColor\">Vigor Overflow</span>]",
                      "valuePerStack": {
                        "MDF_DamageUpRatio_PerLayer": {
                          "operator": "Variables[0] (MDF_DamageUpRatio_PerLayer) || RETURN",
                          "displayLines": "MDF_DamageUpRatio_PerLayer",
                          "constants": [],
                          "variables": [
                            "MDF_DamageUpRatio_PerLayer"
                          ]
                        }
                      },
                      "addStacksPerTrigger": {
                        "operator": "Variables[0] (Monster_W2_Xuanlu_10_Skill14_RageLayer) || RETURN",
                        "displayLines": "Monster_W2_Xuanlu_10_Skill14_RageLayer",
                        "constants": [],
                        "variables": [
                          "Monster_W2_Xuanlu_10_Skill14_RageLayer"
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
          "eventTrigger": "When Stacking Modifier Instance [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Modifier Status Type",
                    "statusType": "Buff"
                  },
                  {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target 2}}"
                    },
                    "team": "Enemy Team"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-536192328\">Enemy_W2_Xuanlu_10_RL_DamageUp</a>[<span class=\"descriptionNumberColor\">Vigor Overflow</span>]",
                  "valuePerStack": {
                    "MDF_DamageUpRatio_PerLayer": {
                      "operator": "Variables[0] (MDF_DamageUpRatio_PerLayer) || RETURN",
                      "displayLines": "MDF_DamageUpRatio_PerLayer",
                      "constants": [],
                      "variables": [
                        "MDF_DamageUpRatio_PerLayer"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_DamageUpRatio_PerLayer"
      ],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-514199936\">Enemy_W2_Xuanlu_DisableAction</a>",
      "modifierFlags": [
        "DisableAction"
      ],
      "stackData": [],
      "latentQueue": [
        "InsertCheck"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-561335331\">Enemy_W2_Xuanlu_SecondPhase</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ],
      "stackData": [],
      "latentQueue": [
        "AIFlag",
        "TurnFlag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-585027897\">Enemy_W2_Xuanlu_Endurance</a>",
      "modifierFlags": [
        "Endurance"
      ],
      "stackData": [],
      "latentQueue": [
        "InsertCheck"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-776504343\">Enemy_W2_Xuanlu_PartController_LockHP</a>",
      "execute": [
        {
          "eventTrigger": "Waiting for Healing in Limbo",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "InsertCheck",
                "compareType": "=",
                "value2": 1,
                "contextScope": "TargetEntity"
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1794338335\">Standard_CTRL_Crazy</a>[<span class=\"descriptionNumberColor\">Outrage</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-924806619\">Enemy_W2_Xuanlu_02_Bonus</a>[<span class=\"descriptionNumberColor\">Engender</span>]"
                },
                {
                  "name": "Dispel Debuffs",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "silent": true
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-585027897\">Enemy_W2_Xuanlu_Endurance</a>"
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "InsertCheck"
                },
                {
                  "name": "Set Enemy Phase",
                  "mode": "Inc"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster's Minions}}"
                    },
                    "value1": "TeamCharacterCount",
                    "compareType": ">=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster's Minions}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-514199936\">Enemy_W2_Xuanlu_DisableAction</a>"
                    }
                  ]
                },
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W2_Xuanlu_PassiveAbility_Insert",
                  "priorityTag": "MonsterChangePhase",
                  "ownerState": "Mask_AliveOrLimbo",
                  "targetState": "Mask_AliveOrLimbo",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "allowAbilityTriggers": false
                }
              ]
            }
          ],
          "priorityLevel": -90
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1142936642\">Enemy_W2_Xuanlu_Mainline_Final</a>",
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
                    "name": "Compare: Variable",
                    "value1": "ParameterValue",
                    "compareType": "<",
                    "value2": 0
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 2
                  },
                  {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "value1": "CurrentHP%",
                            "compareType": "<",
                            "value2": 0.3
                          },
                          {
                            "name": "Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "flagName": "Break"
                          }
                        ]
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "value1": "CurrentHP%",
                        "compareType": "<",
                        "value2": 0.1
                      }
                    ]
                  }
                ]
              }
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-897449444\">Enemy_W2_Xuanlu_Mainline_HealHP</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Lock HP",
              "threshold": 0.00010000006
            }
          ]
        },
        {
          "eventTrigger": "Action End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Current Turn Is",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                }
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "SummonMinionTime",
                    "compareType": "=",
                    "value2": 3,
                    "contextScope": "TargetEntity"
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Turn End [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Current Turn Is",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "HealHPTurn",
                  "context": "TargetEntity",
                  "value": 1,
                  "max": 99
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "HP Change [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "ParameterValue",
                    "compareType": "<",
                    "value2": 0
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "HealHPCheck",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  },
                  {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "HealHPTurn",
                        "compareType": ">=",
                        "value2": 2,
                        "contextScope": "TargetEntity"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "value1": "CurrentHP%",
                        "compareType": "<",
                        "value2": 0.7
                      }
                    ]
                  }
                ]
              },
              "passed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "HealHPCheck"
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "HealHPTurn"
                },
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W2_Xuanlu_Ability09_Part01",
                  "priorityTag": "LevelPerformMonster",
                  "ownerState": "Mask_AliveOrLimbo",
                  "targetState": "Mask_AliveOrLimbo",
                  "canHitNonTargets": true,
                  "allowAbilityTriggers": false
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