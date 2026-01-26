const configAbility = {
  "fileName": "Bladev0_Modifiers",
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
      "for": "MWRen_LoseHPPreShow",
      "execute": [
        {
          "eventTrigger": "Update Target Selected(UI) [Owner]",
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
                  "target": "{{Caster}}"
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "MDF_MaxHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "Update UI Preview",
                  "show": "Show",
                  "skillType": [
                    "Skill"
                  ],
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "previewType": null,
                  "previewValue": {
                    "operator": "Variables[0] (MDF_MaxHP) || Variables[1] (0.3) || MUL || RETURN",
                    "displayLines": "(MDF_MaxHP * 0.3)",
                    "constants": [],
                    "variables": [
                      "MDF_MaxHP",
                      0.3
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "MWRen_Attack_Transfer[<span class=\"descriptionNumberColor\">Hellscape</span>]"
                  },
                  "passed": [
                    {
                      "name": "Update UI Preview",
                      "show": "Show",
                      "skillType": [
                        "Basic ATK"
                      ],
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "previewType": null,
                      "previewValue": {
                        "operator": "Variables[0] (MDF_MaxHP) || Variables[1] (0.1) || MUL || RETURN",
                        "displayLines": "(MDF_MaxHP * 0.1)",
                        "constants": [],
                        "variables": [
                          "MDF_MaxHP",
                          0.1
                        ]
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
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": ">=",
                    "value2": 0.5
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "MDF_CurrentHP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
                    },
                    {
                      "name": "Update UI Preview",
                      "show": "Show",
                      "skillType": [
                        "Ultimate"
                      ],
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "previewType": null,
                      "previewValue": {
                        "operator": "Variables[0] (MDF_CurrentHP) || Variables[1] (MDF_MaxHP) || Constants[0] (0.5) || MUL || SUB || RETURN",
                        "displayLines": "(MDF_CurrentHP - (MDF_MaxHP * 0.5))",
                        "constants": [
                          0.5
                        ],
                        "variables": [
                          "MDF_CurrentHP",
                          "MDF_MaxHP"
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
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "MWRen_Eidolon2[<span class=\"descriptionNumberColor\">Grievous Penitence</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_CriticalIncrease",
              "value": {
                "operator": "Variables[0] (0.15) || RETURN",
                "displayLines": "0.15",
                "constants": [],
                "variables": [
                  0.15
                ]
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateBase</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_CriticalIncrease) || RETURN",
                "displayLines": "MDF_CriticalIncrease",
                "constants": [],
                "variables": [
                  "MDF_CriticalIncrease"
                ]
              }
            }
          ]
        }
      ],
      "description": "CRIT Rate +<span class=\"descriptionNumberColor\">MDF_CriticalIncrease</span>.",
      "type": "Buff",
      "effectName": "CRIT Rate Boost",
      "statusName": "Grievous Penitence"
    },
    {
      "name": "Modifier Construction",
      "for": "MWRen_Eidolon4_Add",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "MWRen_Eidolon4[<span class=\"descriptionNumberColor\">Heal All Bones</span>]",
              "stackLimit": {
                "operator": "Variables[0] (2) || RETURN",
                "displayLines": "2",
                "constants": [],
                "variables": [
                  2
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MwRen_isNeedHpAdded",
              "value": 0
            },
            "Modifier Deletes Itself"
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "MwRen_isHeal",
        "MwRen_isCharmAttack",
        "MwRen_isAttack",
        "MwRen_AttackStart",
        "MwRen_isOverHalf"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "MWRen_Eidolon4[<span class=\"descriptionNumberColor\">Heal All Bones</span>]",
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
              "variableName": "MDF_Rank04_Layer",
              "multiplier": 1
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_HPIncrease",
              "value": {
                "operator": "Variables[0] (0.2) || Variables[1] (MDF_Rank04_Layer) || MUL || RETURN",
                "displayLines": "(0.2 * MDF_Rank04_Layer)",
                "constants": [],
                "variables": [
                  0.2,
                  "MDF_Rank04_Layer"
                ]
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">HP%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_HPIncrease) || RETURN",
                "displayLines": "MDF_HPIncrease",
                "constants": [],
                "variables": [
                  "MDF_HPIncrease"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "MwRen_isOverHalf",
        "MwRen_AttackStart",
        "MwRen_isAttack",
        "MwRen_isCharmAttack",
        "MwRen_isHeal"
      ],
      "description": "Max HP +<span class=\"descriptionNumberColor\">MDF_HPIncrease</span>.",
      "type": "Buff",
      "effectName": "Max HP Boost",
      "statusName": "Heal All Bones",
      "stackLimit": 2,
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "MWRen_Trace03",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Hit",
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
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                      "value": "0.2"
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
        "MwRen_isAttack"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "MWRen_Trace02",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Deal Damage End [Owner]: Hit",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target TAKING DMG}}"
                },
                "flagName": "Break"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_Breaked",
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
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_Breaked",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Heal",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "healPercent": {
                    "operator": "Variables[0] (0.25) || RETURN",
                    "displayLines": "0.25",
                    "constants": [],
                    "variables": [
                      0.25
                    ]
                  },
                  "healFlat": {
                    "operator": "Variables[0] (0.2) || RETURN",
                    "displayLines": "0.2",
                    "constants": [],
                    "variables": [
                      0.2
                    ]
                  },
                  "formula": "Heal from Target MaxHP"
                }
              ]
            },
            "Modifier Deletes Itself"
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "MWRen_Trace01[<span class=\"descriptionNumberColor\">Vita Infinita</span>]",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">HealingIncoming</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_HealEnhanceRatio) || RETURN",
                "displayLines": "MDF_HealEnhanceRatio",
                "constants": [],
                "variables": [
                  "MDF_HealEnhanceRatio"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_HealEnhanceRatio"
      ],
      "latentQueue": [
        "MwRen_isHeal",
        "MwRen_isCharmAttack",
        "MwRen_isAttack",
        "MwRen_AttackStart",
        "MwRen_isOverHalf"
      ],
      "description": "Incoming Healing +<span class=\"descriptionNumberColor\">MDF_HealEnhanceRatio</span>.",
      "type": "Buff",
      "effectName": "Outgoing Healing Boost",
      "statusName": "Vita Infinita",
      "stackLimit": 1
    },
    {
      "name": "Modifier Construction",
      "for": "MWRen_Ability03_Listen[<span class=\"descriptionNumberColor\">Death Sentence</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ],
      "stackData": [
        "MDF_PropertyValue"
      ],
      "latentQueue": [
        "MwRen_isHeal",
        "MwRen_isCharmAttack",
        "MwRen_isAttack",
        "MwRen_AttackStart",
        "MwRen_isOverHalf"
      ],
      "description": "HP Lost: <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>",
      "type": "Other",
      "statusName": "Death Sentence",
      "stackLimit": 1
    },
    {
      "name": "Modifier Construction",
      "for": "MWRen_Qi[<span class=\"descriptionNumberColor\">Charge</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Constants[0] (0) || RETURN",
                "displayLines": "0",
                "constants": [
                  0
                ],
                "variables": []
              },
              "maximum": {
                "operator": "Variables[0] (MWRen_Qi_MaxLayer) || RETURN",
                "displayLines": "MWRen_Qi_MaxLayer",
                "constants": [],
                "variables": [
                  "MWRen_Qi_MaxLayer"
                ]
              },
              "assignState": "True",
              "priorState": "Normal",
              "bar#": 2,
              "cooldown": 0
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "Layer",
              "variableName": "MWRen_Qi_Layer",
              "multiplier": 1
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MWRen_Qi_Layer",
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] (MWRen_Qi_MaxLayer) || RETURN",
                  "displayLines": "MWRen_Qi_MaxLayer",
                  "constants": [],
                  "variables": [
                    "MWRen_Qi_MaxLayer"
                  ]
                }
              },
              "passed": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (MWRen_Qi_Layer) || RETURN",
                    "displayLines": "MWRen_Qi_Layer",
                    "constants": [],
                    "variables": [
                      "MWRen_Qi_Layer"
                    ]
                  },
                  "maximum": {
                    "operator": "Variables[0] (MWRen_Qi_MaxLayer) || RETURN",
                    "displayLines": "MWRen_Qi_MaxLayer",
                    "constants": [],
                    "variables": [
                      "MWRen_Qi_MaxLayer"
                    ]
                  },
                  "assignState": "True",
                  "priorState": "Active",
                  "bar#": 2,
                  "cooldown": 0
                }
              ],
              "failed": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (MWRen_Qi_Layer) || RETURN",
                    "displayLines": "MWRen_Qi_Layer",
                    "constants": [],
                    "variables": [
                      "MWRen_Qi_Layer"
                    ]
                  },
                  "maximum": {
                    "operator": "Variables[0] (MWRen_Qi_MaxLayer) || RETURN",
                    "displayLines": "MWRen_Qi_MaxLayer",
                    "constants": [],
                    "variables": [
                      "MWRen_Qi_MaxLayer"
                    ]
                  },
                  "assignState": "True",
                  "priorState": "Normal",
                  "bar#": 2,
                  "cooldown": 0
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
                    "value1": "MWRen_Qi[<span class=\"descriptionNumberColor\">Charge</span>]",
                    "compareType": ">=",
                    "value2": 1,
                    "valueType": "Layer"
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "MWRen_Qi[<span class=\"descriptionNumberColor\">Charge</span>]",
                    "compareType": "<=",
                    "value2": 2,
                    "valueType": "Layer"
                  }
                ]
              },
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "MWRen_Qi[<span class=\"descriptionNumberColor\">Charge</span>]",
                        "compareType": ">=",
                        "value2": 3,
                        "valueType": "Layer"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "MWRen_Qi[<span class=\"descriptionNumberColor\">Charge</span>]",
                        "compareType": "<=",
                        "value2": {
                          "operator": "Variables[0] (MWRen_Qi_MaxLayer) || Constants[0] (1) || SUB || RETURN",
                          "displayLines": "(MWRen_Qi_MaxLayer - 1)",
                          "constants": [
                            1
                          ],
                          "variables": [
                            "MWRen_Qi_MaxLayer"
                          ]
                        },
                        "valueType": "Layer"
                      }
                    ]
                  },
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MWRen_Qi[<span class=\"descriptionNumberColor\">Charge</span>]",
                        "compareType": "=",
                        "value2": {
                          "operator": "Variables[0] (MWRen_Qi_MaxLayer) || RETURN",
                          "displayLines": "MWRen_Qi_MaxLayer",
                          "constants": [],
                          "variables": [
                            "MWRen_Qi_MaxLayer"
                          ]
                        },
                        "valueType": "Layer"
                      }
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
        "MwRen_isHeal",
        "MwRen_isCharmAttack",
        "MwRen_isAttack",
        "MwRen_AttackStart"
      ],
      "description": "At maximum Charge stacks, expends all stacks and immediately deals 1 instance of Follow-Up ATK to all enemies.",
      "type": "Other",
      "statusName": "Charge",
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "MWRen_Attack[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
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
      "statusName": "DMG Boost",
      "stackLimit": 1
    },
    {
      "name": "Modifier Construction",
      "for": "MWRen_Attack_Transfer[<span class=\"descriptionNumberColor\">Hellscape</span>]",
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
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "MWRen_Attack[<span class=\"descriptionNumberColor\">DMG Boost</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "MWRen_Eidolon2[<span class=\"descriptionNumberColor\">Grievous Penitence</span>]"
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
            },
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
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 2
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "MWRen_Eidolon2[<span class=\"descriptionNumberColor\">Grievous Penitence</span>]"
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "Basic ATK \"Shard Sword\" is enhanced, becoming \"Forest of Swords\" and dealing Blast DMG.",
      "type": "Other",
      "effectName": "Enhanced Basic ATK",
      "statusName": "Hellscape"
    }
  ],
  "references": []
}