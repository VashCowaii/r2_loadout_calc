const configAbility = {
  "fileName": "Luka_Modifiers",
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
      "for": "Luka_DOT_Tear[<span class=\"descriptionNumberColor\">Bleed</span>]",
      "stackType": "ReplaceByCaster",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "modifierFlags": [
        "STAT_DOT",
        "STAT_DOT_Bleed"
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
              "variableName": "MDF_TargetMaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Snapshot Stat Source}}"
              },
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
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "MDF_TargetMaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Snapshot Stat Source}}"
              },
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
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
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
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "MDF_TargetMaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Snapshot Stat Source}}"
              },
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
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
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
      "stackData": [
        "Modifier_Tear_DamageRatio",
        "Modifier_Tear_MaxPercentage"
      ],
      "latentQueue": [],
      "description": "Takes Physical DMG at the start of each turn for a certain number of turns.",
      "type": "Debuff",
      "effectName": "Bleed",
      "statusName": "Bleed",
      "stackLimit": 1,
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "Luka_MazeBullet",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Adjust Variable Value",
              "adjustmentType": "Overwrite Value",
              "variableName": "BulletCount",
              "on": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "value": 2
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (BulletCount) || RETURN",
                "displayLines": "BulletCount",
                "constants": [],
                "variables": [
                  "BulletCount"
                ]
              },
              "maximum": {
                "operator": "Constants[0] (4) || RETURN",
                "displayLines": "4",
                "constants": [
                  4
                ],
                "variables": []
              },
              "assignState": "True",
              "priorState": "Normal",
              "bar#": 3,
              "cooldown": 0
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Luka_Eidolon4[<span class=\"descriptionNumberColor\">Never Turning Back</span>]",
      "stackType": "ReplaceByCaster",
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
              "variableName": "MDF_Layer",
              "multiplier": 1
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_AttackAdded",
              "value": {
                "operator": "Variables[0] (0.05) || Variables[1] (MDF_Layer) || MUL || RETURN",
                "displayLines": "(0.05 * MDF_Layer)",
                "constants": [],
                "variables": [
                  0.05,
                  "MDF_Layer"
                ]
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_AttackAdded) || RETURN",
                "displayLines": "MDF_AttackAdded",
                "constants": [],
                "variables": [
                  "MDF_AttackAdded"
                ]
              }
            }
          ]
        }
      ],
      "description": "ATK +<span class=\"descriptionNumberColor\">MDF_AttackAdded</span>.",
      "type": "Buff",
      "effectName": "ATK Boost",
      "statusName": "Never Turning Back",
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "Luka_Eidolon2",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Hit",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Weakness",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "DamageType": "Physical"
                  },
                  {
                    "name": "Skill Type",
                    "skillType": "Skill"
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
                  "modifier": "Luka_ReloadBullet",
                  "valuePerStack": {
                    "MDF_AddValue": {
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
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Luka_Eidolon1_Sub[<span class=\"descriptionNumberColor\">Fighting Endlessly</span>]",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
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
      ],
      "stackData": [
        "MDF_PropertyValue"
      ],
      "latentQueue": [],
      "description": "Increases DMG dealt by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "effectName": "DMG Boost",
      "statusName": "Fighting Endlessly"
    },
    {
      "name": "Modifier Construction",
      "for": "Luka_ReloadBullet",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "BulletCount",
                "compareType": ">=",
                "value2": 3
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_AddValue",
                  "value": {
                    "operator": "Constants[0] (4) || Variables[0] (BulletCount) || SUB || RETURN",
                    "displayLines": "(4 - BulletCount)",
                    "constants": [
                      4
                    ],
                    "variables": [
                      "BulletCount"
                    ]
                  }
                }
              ]
            },
            {
              "name": "Looped Event",
              "maxLoops": {
                "operator": "Variables[0] (MDF_AddValue) || RETURN",
                "displayLines": "MDF_AddValue",
                "constants": [],
                "variables": [
                  "MDF_AddValue"
                ]
              },
              "Event": [
                {
                  "name": "Adjust Variable Value",
                  "adjustmentType": "Add to Value (Default)",
                  "variableName": "BulletCount",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "value": 1
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
                      "modifier": "Luka_Eidolon4[<span class=\"descriptionNumberColor\">Never Turning Back</span>]",
                      "stackLimit": {
                        "operator": "Variables[0] (4) || RETURN",
                        "displayLines": "4",
                        "constants": [],
                        "variables": [
                          4
                        ]
                      },
                      "valuePerStack": {
                        "MDF_PropertyValue2": {
                          "operator": "Variables[0] (0.05) || RETURN",
                          "displayLines": "0.05",
                          "constants": [],
                          "variables": [
                            0.05
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Trace Activated",
                "conditionList": "Cycle Braking"
              },
              "passed": [
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "value": {
                    "operator": "Variables[0] (3) || Variables[1] (MDF_AddValue) || MUL || RETURN",
                    "displayLines": "(3 * MDF_AddValue)",
                    "constants": [],
                    "variables": [
                      3,
                      "MDF_AddValue"
                    ]
                  },
                  "isFixed": "* ERR"
                }
              ]
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (BulletCount) || RETURN",
                "displayLines": "BulletCount",
                "constants": [],
                "variables": [
                  "BulletCount"
                ]
              },
              "maximum": {
                "operator": "Constants[0] (4) || RETURN",
                "displayLines": "4",
                "constants": [
                  4
                ],
                "variables": []
              },
              "assignState": "True",
              "priorState": "Normal",
              "bar#": 3,
              "cooldown": 0
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "BulletCount",
                "compareType": "<",
                "value2": 2
              },
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Luka_ChangeAttack"
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (BulletCount) || RETURN",
                    "displayLines": "BulletCount",
                    "constants": [],
                    "variables": [
                      "BulletCount"
                    ]
                  },
                  "maximum": {
                    "operator": "Constants[0] (4) || RETURN",
                    "displayLines": "4",
                    "constants": [
                      4
                    ],
                    "variables": []
                  },
                  "assignState": "True",
                  "priorState": "Active",
                  "bar#": 3,
                  "cooldown": 0
                }
              ]
            },
            "Modifier Deletes Itself"
          ]
        }
      ],
      "stackData": [
        "MDF_AddValue"
      ],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Luka_AllDamageTypeTakenRatio[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
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
      ],
      "stackData": [
        "MDF_PropertyValue"
      ],
      "latentQueue": [],
      "description": "Increases DMG taken by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Debuff",
      "effectName": "Vulnerability",
      "statusName": "Vulnerability"
    },
    {
      "name": "Modifier Construction",
      "for": "Luka_ChangeAttack",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Update Ability Binding",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "abilityName": "Skill01",
              "skillSlot": "Basic ATK"
            },
            {
              "name": "Update Ability Enhance Button",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "display": "Hide",
              "abilityName": "Basic ATK"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Update Ability Binding",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "abilityName": "Skill11",
              "skillSlot": "Basic ATK"
            },
            {
              "name": "Update Ability Enhance Button",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "display": "Show",
              "abilityName": "Basic ATK"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Luka_Passive",
      "execute": [
        {
          "eventTrigger": "Action Choice Window [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "BulletCount",
                "compareType": "<",
                "value2": 2
              },
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Luka_ChangeAttack"
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (BulletCount) || RETURN",
                    "displayLines": "BulletCount",
                    "constants": [],
                    "variables": [
                      "BulletCount"
                    ]
                  },
                  "maximum": {
                    "operator": "Constants[0] (4) || RETURN",
                    "displayLines": "4",
                    "constants": [
                      4
                    ],
                    "variables": []
                  },
                  "assignState": "True",
                  "priorState": "Active",
                  "bar#": 3,
                  "cooldown": 0
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