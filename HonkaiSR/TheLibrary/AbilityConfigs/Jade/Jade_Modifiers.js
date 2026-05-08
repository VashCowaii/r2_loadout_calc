const configAbility = {
  "fileName": "Jade_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__-842574102\">ADV_StageAbility_Maze_Jade</a>",
      "counter": 1,
      "stackType": "Replace",
      "modifierFlags": [
        "Blind"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1106061455\">ADV_StageAbility_Maze_Jade_Flag</a>",
      "counter": 1,
      "stackType": "Merge"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1900960567\">ADV_StageAbility_Maze_Jade_TiggerExit</a>",
      "stackType": "Merge",
      "onCreation": [
        {
          "name": "IF",
          "conditions": {
            "name": "Is Team Leader",
            "target": {
              "name": "Target Name",
              "target": "{{Modifier Holder}}"
            }
          },
          "passed": [
            {
              "name": "Create Overworld Entity",
              "summonID": 13141
            }
          ]
        }
      ],
      "onRemoval": [
        {
          "name": "Remove Overworld Entity",
          "summon": {
            "name": "Add Target by Summoned Units",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "summonID": 13141
          }
        }
      ],
      "onStageEntry": [
        {
          "name": "Create Overworld Entity",
          "summonID": 13141
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__68476876\">Jade_Eidolon6_QuantumPenetrate</a>",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceQuantumPEN</span>&nbsp;",
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
      "for": "<a class=\"gModGreen\" id=\"mod__-1189146824\">Jade_Eidolon4_DefPenetrate</a>[<span class=\"descriptionNumberColor\">Sincerity? Put Option Only</span>]",
      "stackType": "ReplaceByCaster",
      "description": "Ignores <span class=\"descriptionNumberColor\">MDF_PropertyValue</span> of enemy targets' DEF.",
      "type": "Buff",
      "effectName": "Sincerity? Put Option Only",
      "statusName": "Sincerity? Put Option Only",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 4
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Defender",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                      "value": "-MDF_PropertyValue"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-759179558\">Jade_Eidolon2_CriticalChance</a>[<span class=\"descriptionNumberColor\">Morality? Herein Authenticated</span>]",
      "description": "Increases CRIT Rate by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "effectName": "CRIT Rate Boost",
      "statusName": "Morality? Herein Authenticated",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateBase</span>&nbsp;",
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
      "for": "<a class=\"gModGreen\" id=\"mod__-1701847025\">Jade_Eidolon1_InsertDamageRatio</a>",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Attack Type",
                "attackTypes": [
                  "Follow-up"
                ],
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                }
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                      "value": "MDF_PropertyValue"
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
      "for": "<a class=\"gModGreen\" id=\"mod__477418814\">Jade_Passive_contract</a>",
      "modifierFlags": [
        "KeepOnDeathrattle",
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "Take Damage End [Owner]: Hit",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_AttackFlag",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-1749110767\">Jade_BPAbility</a>[<span class=\"descriptionNumberColor\">Debt Collector</span>]"
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"119818662\">Jade_Eidolon6_BPAbility</a>[<span class=\"descriptionNumberColor\">Debt Collector</span>]"
                          }
                        ]
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "_HitFlag",
                        "compareType": "=",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_HitFlag",
                      "value": 1
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_RateLayer",
                      "value": {
                        "operator": "Variables[0] (_RateLayer) || Variables[1] (Jade_Passive_BPBuffAddLayer) || ADD || RETURN",
                        "displayLines": "(_RateLayer + Jade_Passive_BPBuffAddLayer)",
                        "constants": [],
                        "variables": [
                          "_RateLayer",
                          "Jade_Passive_BPBuffAddLayer"
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
          "eventTrigger": "Being Attacked Start [Owner]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "_AttackFlag",
              "value": 1
            }
          ]
        },
        {
          "eventTrigger": "Being Attacked End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1749110767\">Jade_BPAbility</a>[<span class=\"descriptionNumberColor\">Debt Collector</span>]"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"119818662\">Jade_Eidolon6_BPAbility</a>[<span class=\"descriptionNumberColor\">Debt Collector</span>]"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_AttackFlag",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_HitFlag",
                  "value": 0
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-2143808418\">Jade_Passive_Rate</a>[<span class=\"descriptionNumberColor\">Pawned Asset</span>]",
      "stackType": "ReplaceByCaster",
      "description": "Each stack increases CRIT DMG by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "effectName": "Pawned Asset",
      "statusName": "Pawned Asset",
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
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Eidolon Activated",
                    "eidolon": 2
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "MDF_Layer",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (15) || RETURN",
                      "displayLines": "15",
                      "constants": [],
                      "variables": [
                        15
                      ]
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
                  "modifier": "<a class=\"gModGreen\" id=\"-759179558\">Jade_Eidolon2_CriticalChance</a>[<span class=\"descriptionNumberColor\">Morality? Herein Authenticated</span>]",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (0.18) || RETURN",
                      "displayLines": "0.18",
                      "constants": [],
                      "variables": [
                        0.18
                      ]
                    }
                  }
                }
              ]
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_PropertyValue) || Variables[1] (MDF_Layer) || MUL || RETURN",
                "displayLines": "(MDF_PropertyValue * MDF_Layer)",
                "constants": [],
                "variables": [
                  "MDF_PropertyValue",
                  "MDF_Layer"
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Trace Activated",
                "conditionList": "Asset Forfeiture"
              },
              "passed": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValue2) || Variables[1] (MDF_Layer) || MUL || RETURN",
                    "displayLines": "(MDF_PropertyValue2 * MDF_Layer)",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue2",
                      "MDF_Layer"
                    ]
                  }
                },
                {
                  "name": "Update Modifier Description",
                  "popUpText": "Every stack increases CRIT DMG by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span> and ATK by <span class=\"descriptionNumberColor\">MDF_PropertyValue2</span>."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1339849421\">Jade_Passive_Count</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ]
    }
  ],
  "references": []
}