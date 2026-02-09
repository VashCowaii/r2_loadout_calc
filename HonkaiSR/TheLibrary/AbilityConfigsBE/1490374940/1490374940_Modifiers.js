const configAbility = {
  "fileName": "1490374940_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__-1189881261\">BAttleEventAbility_Weakness_Imaginary</a>",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "STAT_AttachWeakness"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Override Modifier Name",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifierName": "<a class=\"gModGreen\" id=\"-1189881261\">BAttleEventAbility_Weakness_Imaginary</a>",
              "modifierNameUpdate": "<a class=\"gModGreen\" id=\"-1118024096\">Standard_WeakType_Imaginary</a>[<span class=\"descriptionNumberColor\">Additional Imaginary Weakness</span>]"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Weakness",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "DamageType": "Imaginary",
                "invertCondition": true,
                "weaknessFilter": "AllDefault"
              },
              "passed": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceImaginaryBonus</span>&nbsp;",
                  "value": {
                    "operator": "Constants[0] (0) || Variables[0] (MDF_PropertyValue) || SUB || RETURN",
                    "displayLines": "(0 - MDF_PropertyValue)",
                    "constants": [
                      0
                    ],
                    "variables": [
                      "MDF_PropertyValue"
                    ]
                  }
                }
              ]
            },
            {
              "name": "Modify Weaknesses",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "action": "Attach",
              "valueList": [
                "Imaginary"
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1163813471\">BAttleEventAbility_Weakness_Quantum</a>",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "STAT_AttachWeakness"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Override Modifier Name",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifierName": "<a class=\"gModGreen\" id=\"1163813471\">BAttleEventAbility_Weakness_Quantum</a>",
              "modifierNameUpdate": "<a class=\"gModGreen\" id=\"1012677236\">Standard_WeakType_Quantum</a>[<span class=\"descriptionNumberColor\">Additional Quantum Weakness</span>]"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Weakness",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "DamageType": "Quantum",
                "invertCondition": true,
                "weaknessFilter": "AllDefault"
              },
              "passed": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceQuantumBonus</span>&nbsp;",
                  "value": {
                    "operator": "Constants[0] (0) || Variables[0] (MDF_PropertyValue) || SUB || RETURN",
                    "displayLines": "(0 - MDF_PropertyValue)",
                    "constants": [
                      0
                    ],
                    "variables": [
                      "MDF_PropertyValue"
                    ]
                  }
                }
              ]
            },
            {
              "name": "Modify Weaknesses",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "action": "Attach",
              "valueList": [
                "Quantum"
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__436644401\">BAttleEventAbility_Weakness_Ice</a>",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "STAT_AttachWeakness"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Override Modifier Name",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifierName": "<a class=\"gModGreen\" id=\"436644401\">BAttleEventAbility_Weakness_Ice</a>",
              "modifierNameUpdate": "<a class=\"gModGreen\" id=\"1497676034\">Standard_WeakType_Ice</a>[<span class=\"descriptionNumberColor\">Additional Ice Weakness</span>]"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Weakness",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "DamageType": "Ice",
                "invertCondition": true,
                "weaknessFilter": "AllDefault"
              },
              "passed": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceIceBonus</span>&nbsp;",
                  "value": {
                    "operator": "Constants[0] (0) || Variables[0] (MDF_PropertyValue) || SUB || RETURN",
                    "displayLines": "(0 - MDF_PropertyValue)",
                    "constants": [
                      0
                    ],
                    "variables": [
                      "MDF_PropertyValue"
                    ]
                  }
                }
              ]
            },
            {
              "name": "Modify Weaknesses",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "action": "Attach",
              "valueList": [
                "Ice"
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__89731232\">BAttleEventAbility_Weakness_Thunder</a>",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "STAT_AttachWeakness"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Override Modifier Name",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifierName": "<a class=\"gModGreen\" id=\"89731232\">BAttleEventAbility_Weakness_Thunder</a>",
              "modifierNameUpdate": "<a class=\"gModGreen\" id=\"1930557999\">Standard_WeakType_Thunder</a>[<span class=\"descriptionNumberColor\">Additional Lightning Weakness</span>]"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Weakness",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "DamageType": "Thunder",
                "invertCondition": true,
                "weaknessFilter": "AllDefault"
              },
              "passed": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceLightningBonus</span>&nbsp;",
                  "value": {
                    "operator": "Constants[0] (0) || Variables[0] (MDF_PropertyValue) || SUB || RETURN",
                    "displayLines": "(0 - MDF_PropertyValue)",
                    "constants": [
                      0
                    ],
                    "variables": [
                      "MDF_PropertyValue"
                    ]
                  }
                }
              ]
            },
            {
              "name": "Modify Weaknesses",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "action": "Attach",
              "valueList": [
                "Thunder"
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-944583698\">BAttleEventAbility_Weakness_Fire</a>",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "STAT_AttachWeakness"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Override Modifier Name",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifierName": "<a class=\"gModGreen\" id=\"-944583698\">BAttleEventAbility_Weakness_Fire</a>",
              "modifierNameUpdate": "<a class=\"gModGreen\" id=\"-2009288629\">Standard_WeakType_Fire</a>[<span class=\"descriptionNumberColor\">Additional Fire Weakness</span>]"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Weakness",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "DamageType": "Fire",
                "invertCondition": true,
                "weaknessFilter": "AllDefault"
              },
              "passed": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceFireBonus</span>&nbsp;",
                  "value": {
                    "operator": "Constants[0] (0) || Variables[0] (MDF_PropertyValue) || SUB || RETURN",
                    "displayLines": "(0 - MDF_PropertyValue)",
                    "constants": [
                      0
                    ],
                    "variables": [
                      "MDF_PropertyValue"
                    ]
                  }
                }
              ]
            },
            {
              "name": "Modify Weaknesses",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "action": "Attach",
              "valueList": [
                "Fire"
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1329707912\">BAttleEventAbility_Weakness_Wind</a>",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "STAT_AttachWeakness"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Override Modifier Name",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifierName": "<a class=\"gModGreen\" id=\"-1329707912\">BAttleEventAbility_Weakness_Wind</a>",
              "modifierNameUpdate": "<a class=\"gModGreen\" id=\"-1938125975\">Standard_WeakType_Wind</a>[<span class=\"descriptionNumberColor\">Additional Wind Weakness</span>]"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Weakness",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "DamageType": "Wind",
                "invertCondition": true,
                "weaknessFilter": "AllDefault"
              },
              "passed": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceWindBonus</span>&nbsp;",
                  "value": {
                    "operator": "Constants[0] (0) || Variables[0] (MDF_PropertyValue) || SUB || RETURN",
                    "displayLines": "(0 - MDF_PropertyValue)",
                    "constants": [
                      0
                    ],
                    "variables": [
                      "MDF_PropertyValue"
                    ]
                  }
                }
              ]
            },
            {
              "name": "Modify Weaknesses",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "action": "Attach",
              "valueList": [
                "Wind"
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__853477559\">BAttleEventAbility_Weakness_Physical</a>",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "STAT_AttachWeakness"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Override Modifier Name",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifierName": "<a class=\"gModGreen\" id=\"853477559\">BAttleEventAbility_Weakness_Physical</a>",
              "modifierNameUpdate": "<a class=\"gModGreen\" id=\"-1724958950\">Standard_WeakType_Physical</a>[<span class=\"descriptionNumberColor\">Additional Physical Weakness</span>]"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Weakness",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "DamageType": "Physical",
                "invertCondition": true,
                "weaknessFilter": "AllDefault"
              },
              "passed": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistancePhysicalBonus</span>&nbsp;",
                  "value": {
                    "operator": "Constants[0] (0) || Variables[0] (MDF_PropertyValue) || SUB || RETURN",
                    "displayLines": "(0 - MDF_PropertyValue)",
                    "constants": [
                      0
                    ],
                    "variables": [
                      "MDF_PropertyValue"
                    ]
                  }
                }
              ]
            },
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
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-10562366\">BossInfiniteWave_BlockDamage</a>[<span class=\"descriptionNumberColor\">DMG Immunity</span>]",
      "modifierFlags": [
        "BlockDamage"
      ],
      "description": "Immune to taking any form of DMG. Dispelled after all other friendly units are defeated.",
      "type": "Buff",
      "effectName": "DMG Immunity",
      "statusName": "DMG Immunity"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1773885775\">BossInfiniteWave_HPLock_Modifier</a>",
      "execute": [
        {
          "eventTrigger": "Receiving Heal End [Owner]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-10562366\">BossInfiniteWave_BlockDamage</a>[<span class=\"descriptionNumberColor\">DMG Immunity</span>]"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Lock HP",
              "threshold": 0.0009999999
            }
          ]
        },
        {
          "eventTrigger": "Locked HP Floor Reached [Owner]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-10562366\">BossInfiniteWave_BlockDamage</a>[<span class=\"descriptionNumberColor\">DMG Immunity</span>]"
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__537567377\">BossInfiniteWave_Boss_Modifier</a>[<span class=\"descriptionNumberColor\">Eloquence</span>]",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Add Ability",
              "abilityName": "BossInfiniteWave_Boss_Camera"
            },
            {
              "name": "Add Ability",
              "abilityName": "BossInfiniteWave_Boss_Insert"
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
                      "name": "Check Boolean Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "value": "W1_SvarogPart"
                    }
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_Count",
                  "value": {
                    "operator": "Variables[0] (MDF_Count) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(MDF_Count + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "MDF_Count"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_Count",
                    "compareType": "=",
                    "value2": {
                      "operator": "Variables[0] (Monster_Number) || RETURN",
                      "displayLines": "Monster_Number",
                      "constants": [],
                      "variables": [
                        "Monster_Number"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_Count",
                      "value": 0
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1773885775\">BossInfiniteWave_HPLock_Modifier</a>"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-10562366\">BossInfiniteWave_BlockDamage</a>[<span class=\"descriptionNumberColor\">DMG Immunity</span>]"
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "BossInfiniteWave_Boss_Insert",
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "priorityTag": "MonsterInsertAttackSelf",
                      "canHitNonTargets": true,
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "description": "The target can only be defeated after a certain number of enemies have been eliminated. At the same time, the target will take significantly more DMG.",
      "type": "Other",
      "effectName": "Eloquence",
      "statusName": "Eloquence"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-14605930\">Modifier_BattleEventAbility_Challenge_Month_34_ExceedSP</a>[<span class=\"descriptionNumberColor\">Energy Overflow</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ],
      "stackData": [
        "EntityStockSPForShow"
      ],
      "latentQueue": [],
      "description": "<span class=\"descriptionNumberColor\">EntityStockSPForShow</span> extra Energy. This will be consumed first when unleashing Ultimate.",
      "type": "Other",
      "effectName": "Energy Overflow",
      "statusName": "Energy Overflow"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__655892805\">Modifier_BattleEventAbility_Challenge_Month_28_Sub3</a>",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "KeepOnDeathrattle"
      ],
      "execute": [
        {
          "eventTrigger": "Caused Weakness Break [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Enemy ID",
                    "ID": 800205060,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": "Sequence Trotter"
                  },
                  {
                    "name": "Enemy ID",
                    "ID": 800205060,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": "Sequence Trotter"
                  },
                  {
                    "name": "Enemy ID",
                    "ID": 800205060,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": "Sequence Trotter"
                  },
                  {
                    "name": "Enemy ID",
                    "ID": 800205060,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": "Sequence Trotter"
                  },
                  {
                    "name": "Enemy ID",
                    "ID": 800205060,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": "Sequence Trotter"
                  },
                  {
                    "name": "Enemy ID",
                    "ID": 800205060,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": "Sequence Trotter"
                  },
                  {
                    "name": "Enemy ID",
                    "ID": 800205060,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": "Sequence Trotter"
                  },
                  {
                    "name": "Enemy ID",
                    "ID": 800205060,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": "Sequence Trotter"
                  },
                  {
                    "name": "Enemy ID",
                    "ID": 800205060,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": "Sequence Trotter"
                  },
                  {
                    "name": "Enemy ID",
                    "ID": 800205060,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": "Sequence Trotter"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Force Entity Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "killer": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "deathSourceType": "KilledByOthers"
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
      "for": "<a class=\"gModGreen\" id=\"mod__639115186\">Modifier_BattleEventAbility_Challenge_Month_28_Sub2</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Got a Queued Kill [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Enemy ID",
                    "ID": 800205060,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": "Sequence Trotter"
                  },
                  {
                    "name": "Enemy ID",
                    "ID": 800205060,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": "Sequence Trotter"
                  },
                  {
                    "name": "Enemy ID",
                    "ID": 800205060,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": "Sequence Trotter"
                  },
                  {
                    "name": "Enemy ID",
                    "ID": 800205060,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": "Sequence Trotter"
                  },
                  {
                    "name": "Enemy ID",
                    "ID": 800205060,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": "Sequence Trotter"
                  },
                  {
                    "name": "Enemy ID",
                    "ID": 800205060,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": "Sequence Trotter"
                  },
                  {
                    "name": "Enemy ID",
                    "ID": 800205060,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": "Sequence Trotter"
                  },
                  {
                    "name": "Enemy ID",
                    "ID": 800205060,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": "Sequence Trotter"
                  },
                  {
                    "name": "Enemy ID",
                    "ID": 800205060,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": "Sequence Trotter"
                  },
                  {
                    "name": "Enemy ID",
                    "ID": 800205060,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": "Sequence Trotter"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-537679168\">ReduceActionDelay</a>",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variables": {
                    "parameter[0]_NormalizedValue": {
                      "operator": "Variables[0] (_ActionDelayRatio) || RETURN",
                      "displayLines": "_ActionDelayRatio",
                      "constants": [],
                      "variables": [
                        "_ActionDelayRatio"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Caused Weakness Break [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Enemy ID",
                    "ID": 800205060,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": "Sequence Trotter"
                  },
                  {
                    "name": "Enemy ID",
                    "ID": 800205060,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": "Sequence Trotter"
                  },
                  {
                    "name": "Enemy ID",
                    "ID": 800205060,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": "Sequence Trotter"
                  },
                  {
                    "name": "Enemy ID",
                    "ID": 800205060,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": "Sequence Trotter"
                  },
                  {
                    "name": "Enemy ID",
                    "ID": 800205060,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": "Sequence Trotter"
                  },
                  {
                    "name": "Enemy ID",
                    "ID": 800205060,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": "Sequence Trotter"
                  },
                  {
                    "name": "Enemy ID",
                    "ID": 800205060,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": "Sequence Trotter"
                  },
                  {
                    "name": "Enemy ID",
                    "ID": 800205060,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": "Sequence Trotter"
                  },
                  {
                    "name": "Enemy ID",
                    "ID": 800205060,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": "Sequence Trotter"
                  },
                  {
                    "name": "Enemy ID",
                    "ID": 800205060,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": "Sequence Trotter"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Force Entity Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "killer": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "deathSourceType": "KilledByOthers"
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-537679168\">ReduceActionDelay</a>",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variables": {
                    "parameter[0]_NormalizedValue": {
                      "operator": "Variables[0] (_ActionDelayRatio) || RETURN",
                      "displayLines": "_ActionDelayRatio",
                      "constants": [],
                      "variables": [
                        "_ActionDelayRatio"
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
        "_ActionDelayRatio"
      ],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__63496923\">BossInfiniteWave_Modifier</a>",
      "execute": [
        {
          "eventTrigger": "Entity Created [Anyone]",
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
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Monster Rank",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "compareType": ">=",
                    "value2": 4
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"537567377\">BossInfiniteWave_Boss_Modifier</a>[<span class=\"descriptionNumberColor\">Eloquence</span>]",
                      "valuePerStack": {
                        "Monster_Number": {
                          "operator": "Variables[0] (Monster_Number) || RETURN",
                          "displayLines": "Monster_Number",
                          "constants": [],
                          "variables": [
                            "Monster_Number"
                          ]
                        }
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1773885775\">BossInfiniteWave_HPLock_Modifier</a>"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "Monster_Number"
      ],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__389361840\">Modifier_BattleEventAbility_Challenge_Month_31_Sub2</a>",
      "stackType": "ReplaceByCaster",
      "stackData": [
        "ActionDelayRatio"
      ],
      "latentQueue": [],
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "target": {
          "name": "Target Name",
          "target": "{{Player's Aim Target List}}"
        },
        "conditions": {
          "name": "Has Toughness Reduction Preview",
          "caster": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          }
        },
        "delayAdvancePreview": {
          "name": "Delay/Advance Preview",
          "previewValue": {
            "operator": "Variables[0] (ActionDelayRatio) || RETURN",
            "displayLines": "ActionDelayRatio",
            "constants": [],
            "variables": [
              "ActionDelayRatio"
            ]
          }
        }
      }
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1231239842\">Modifier_BattleEventAbility_Challenge_Month_31_Sub</a>[<span class=\"descriptionNumberColor\">Exo-Toughness</span>]",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "TargetStance",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;",
              "warningType": "MaxToughness"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "TargetStance",
              "value": {
                "operator": "Variables[0] (TargetStance) || Variables[1] (MDF_RedStanceRatio) || MUL || RETURN",
                "displayLines": "(TargetStance * MDF_RedStanceRatio)",
                "constants": [],
                "variables": [
                  "TargetStance",
                  "MDF_RedStanceRatio"
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
                "value1": "TargetStance",
                "compareType": "<",
                "value2": {
                  "operator": "Variables[0] (MDF_MinStance) || RETURN",
                  "displayLines": "MDF_MinStance",
                  "constants": [],
                  "variables": [
                    "MDF_MinStance"
                  ]
                }
              },
              "passed": [
                {
                  "name": "Stack Exo-Toughness",
                  "exoFlat": {
                    "operator": "Variables[0] (MDF_MinStance) || RETURN",
                    "displayLines": "MDF_MinStance",
                    "constants": [],
                    "variables": [
                      "MDF_MinStance"
                    ]
                  }
                }
              ],
              "failed": [
                {
                  "name": "Stack Exo-Toughness",
                  "exoPercent": {
                    "operator": "Variables[0] (MDF_RedStanceRatio) || RETURN",
                    "displayLines": "MDF_RedStanceRatio",
                    "constants": [],
                    "variables": [
                      "MDF_RedStanceRatio"
                    ]
                  }
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_RedStanceRatio",
        "MDF_MinStance"
      ],
      "latentQueue": [],
      "description": "Triggers Weakness Break when the enemy's initial Weakness is reduced to 0. Then, their temporary Weakness can continue to be reduced. When temporary Weakness is reduced to 0, Weakness Break will be triggered again. The effect will be removed after this occurs.",
      "type": "Other",
      "statusName": "Exo-Toughness"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1682404281\">Modifier_BattleEventAbility_Challenge_Month_30_sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "_DmgUp_Ratio_get",
              "value": {
                "operator": "Variables[0] (_DmgUp_Ratio_get) || Variables[1] (_Current_Layer) || MUL || RETURN",
                "displayLines": "(_DmgUp_Ratio_get * _Current_Layer)",
                "constants": [],
                "variables": [
                  "_DmgUp_Ratio_get",
                  "_Current_Layer"
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
                "operator": "Variables[0] (_DmgUp_Ratio_get) || RETURN",
                "displayLines": "_DmgUp_Ratio_get",
                "constants": [],
                "variables": [
                  "_DmgUp_Ratio_get"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "_DmgUp_Ratio_get"
      ],
      "latentQueue": [
        "_Trigger_Effect_Flag"
      ],
      "description": "Increases DMG dealt by <span class=\"descriptionNumberColor\">_DmgUp_Ratio_get</span>. After attacking, increases stacks by 1. When <span class=\"descriptionNumberColor\">_Init_Layer</span> stack(s) are reached, deals 1 instance of DMG to all enemies based on a certain percentage of their respective Max HP.",
      "type": "Buff",
      "effectName": "Memory Imprint",
      "statusName": "Memory Imprint"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1584083368\">Modifier_BattleEventAbility_Challenge_Month_27_Sub5</a>[<span class=\"descriptionNumberColor\">Energy Overflow</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ],
      "description": "<span class=\"descriptionNumberColor\">EntityStockSPForShow</span> extra Energy. This will be consumed first when unleashing Ultimate.",
      "type": "Other",
      "effectName": "Energy Overflow",
      "statusName": "Energy Overflow"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1567305749\">Modifier_BattleEventAbility_Challenge_Month_27_Sub4</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Ability Use [Owner]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Type",
                "skillType": "Ultimate"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_CurrentSP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrent</span>&nbsp;"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "EntityStockSP",
                    "compareType": "<=",
                    "value2": {
                      "operator": "Variables[0] (EntityMaxSP) || Variables[1] (_CurrentSP) || SUB || RETURN",
                      "displayLines": "(EntityMaxSP - _CurrentSP)",
                      "constants": [],
                      "variables": [
                        "EntityMaxSP",
                        "_CurrentSP"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "value": {
                        "operator": "Variables[0] (EntityStockSP) || RETURN",
                        "displayLines": "EntityStockSP",
                        "constants": [],
                        "variables": [
                          "EntityStockSP"
                        ]
                      },
                      "isFixed": "(Fixed)"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "EntityStockSP",
                      "value": 0
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1584083368\">Modifier_BattleEventAbility_Challenge_Month_27_Sub5</a>[<span class=\"descriptionNumberColor\">Energy Overflow</span>]"
                    },
                    "Modifier Deletes Itself"
                  ],
                  "failed": [
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "value": {
                        "operator": "Variables[0] (EntityMaxSP) || Variables[1] (_CurrentSP) || SUB || RETURN",
                        "displayLines": "(EntityMaxSP - _CurrentSP)",
                        "constants": [],
                        "variables": [
                          "EntityMaxSP",
                          "_CurrentSP"
                        ]
                      },
                      "isFixed": "(Fixed)"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "EntityStockSP",
                      "value": {
                        "operator": "Variables[0] (EntityStockSP) || Variables[1] (EntityMaxSP) || SUB || Variables[2] (_CurrentSP) || ADD || RETURN",
                        "displayLines": "((EntityStockSP - EntityMaxSP) + _CurrentSP)",
                        "constants": [],
                        "variables": [
                          "EntityStockSP",
                          "EntityMaxSP",
                          "_CurrentSP"
                        ]
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1584083368\">Modifier_BattleEventAbility_Challenge_Month_27_Sub5</a>[<span class=\"descriptionNumberColor\">Energy Overflow</span>]",
                      "valuePerStack": {
                        "EntityStockSPForShow": {
                          "operator": "Variables[0] (EntityStockSP) || RETURN",
                          "displayLines": "EntityStockSP",
                          "constants": [],
                          "variables": [
                            "EntityStockSP"
                          ]
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
      "stackData": [],
      "latentQueue": [
        "_Trigger_Effect_Flag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1483417654\">Modifier_BattleEventAbility_Challenge_Month_27_Sub3</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
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
                      "target": "{{Modifier Holder}}"
                    },
                    "team": "Player Team"
                  },
                  {
                    "name": "Is Entity a Battle Event/Summon",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "EntityCurrentSP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrent</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "EntityMaxSP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "EntityCurrentSP",
                  "value": {
                    "operator": "Variables[0] (EntityCurrentSP) || Variables[1] (EntityMaxSP) || Variables[2] (_SP_Ratio_get) || MUL || ADD || RETURN",
                    "displayLines": "(EntityCurrentSP + (EntityMaxSP * _SP_Ratio_get))",
                    "constants": [],
                    "variables": [
                      "EntityCurrentSP",
                      "EntityMaxSP",
                      "_SP_Ratio_get"
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
                    "value1": "EntityCurrentSP",
                    "compareType": "<=",
                    "value2": {
                      "operator": "Variables[0] (EntityMaxSP) || RETURN",
                      "displayLines": "EntityMaxSP",
                      "constants": [],
                      "variables": [
                        "EntityMaxSP"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "value": {
                        "operator": "Variables[0] (EntityMaxSP) || Variables[1] (_SP_Ratio_get) || MUL || RETURN",
                        "displayLines": "(EntityMaxSP * _SP_Ratio_get)",
                        "constants": [],
                        "variables": [
                          "EntityMaxSP",
                          "_SP_Ratio_get"
                        ]
                      },
                      "isFixed": "(Fixed)"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "valuePercent": 1,
                      "isFixed": "(Fixed)"
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "EntityStockSP",
                      "value": {
                        "operator": "Variables[0] (EntityStockSP) || Variables[1] (EntityCurrentSP) || ADD || Variables[2] (EntityMaxSP) || SUB || RETURN",
                        "displayLines": "((EntityStockSP + EntityCurrentSP) - EntityMaxSP)",
                        "constants": [],
                        "variables": [
                          "EntityStockSP",
                          "EntityCurrentSP",
                          "EntityMaxSP"
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Is Entity Type",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "type": "Character"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1584083368\">Modifier_BattleEventAbility_Challenge_Month_27_Sub5</a>[<span class=\"descriptionNumberColor\">Energy Overflow</span>]",
                          "valuePerStack": {
                            "EntityStockSPForShow": {
                              "operator": "Variables[0] (EntityStockSP) || RETURN",
                              "displayLines": "EntityStockSP",
                              "constants": [],
                              "variables": [
                                "EntityStockSP"
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
                  "variableName": "EntityCurrentSP",
                  "value": 0
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "_SP_Ratio_get"
      ],
      "latentQueue": [
        "_Trigger_Effect_Flag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1232252899\">Modifier_BattleEventAbility_Challenge_Month_27_sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "_DmgUp_Ratio_get",
              "value": {
                "operator": "Variables[0] (_DmgUp_Ratio_get) || Variables[1] (_Current_Layer) || MUL || RETURN",
                "displayLines": "(_DmgUp_Ratio_get * _Current_Layer)",
                "constants": [],
                "variables": [
                  "_DmgUp_Ratio_get",
                  "_Current_Layer"
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
                "operator": "Variables[0] (_DmgUp_Ratio_get) || RETURN",
                "displayLines": "_DmgUp_Ratio_get",
                "constants": [],
                "variables": [
                  "_DmgUp_Ratio_get"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "_DmgUp_Ratio_get"
      ],
      "latentQueue": [
        "_Trigger_Effect_Flag"
      ],
      "description": "Increases DMG dealt by <span class=\"descriptionNumberColor\">_DmgUp_Ratio_get</span>. After attacking, increases stacks by 1. When <span class=\"descriptionNumberColor\">_Init_Layer</span> stacks are reached, all allies regenerate Energy.",
      "type": "Buff",
      "effectName": "Memory Imprint",
      "statusName": "Memory Imprint"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__701462759\">Modifier_BattleEventAbility_Challenge_Month_28_Insert</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "Layer",
              "variableName": "_CurrentLayer",
              "multiplier": 1
            },
            {
              "name": "Define Custom Variable",
              "variableName": "DV_DmgUpRatio_Get",
              "value": {
                "operator": "Variables[0] (_CurrentLayer) || Variables[1] (DV_DmgUpRatio_Get) || MUL || RETURN",
                "displayLines": "(_CurrentLayer * DV_DmgUpRatio_Get)",
                "constants": [],
                "variables": [
                  "_CurrentLayer",
                  "DV_DmgUpRatio_Get"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "DV_AtkUpRatio_Get",
              "value": {
                "operator": "Variables[0] (_CurrentLayer) || Variables[1] (DV_AtkUpRatio_Get) || MUL || RETURN",
                "displayLines": "(_CurrentLayer * DV_AtkUpRatio_Get)",
                "constants": [],
                "variables": [
                  "_CurrentLayer",
                  "DV_AtkUpRatio_Get"
                ]
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreak</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (DV_DmgUpRatio_Get) || RETURN",
                "displayLines": "DV_DmgUpRatio_Get",
                "constants": [],
                "variables": [
                  "DV_DmgUpRatio_Get"
                ]
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
                "operator": "Variables[0] (DV_AtkUpRatio_Get) || RETURN",
                "displayLines": "DV_AtkUpRatio_Get",
                "constants": [],
                "variables": [
                  "DV_AtkUpRatio_Get"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "DV_DmgUpRatio_Get",
        "DV_AtkUpRatio_Get"
      ],
      "latentQueue": [],
      "description": "Increases ATK by <span class=\"descriptionNumberColor\">DV_AtkUpRatio_Get</span> and Break Effect by <span class=\"descriptionNumberColor\">DV_DmgUpRatio_Get</span>.",
      "type": "Buff",
      "effectName": "Memory Imprint",
      "statusName": "Memory Imprint"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-595048974\">Modifier_BattleEventAbility_Challenge_Month_28_preshow</a>",
      "stackType": "ReplaceByCaster",
      "stackData": [
        "ActionDelayRatio"
      ],
      "latentQueue": [],
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "target": {
          "name": "Target Name",
          "target": "{{Ability Attack Source}}"
        },
        "skillType": [
          "Ultimate",
          "Skill",
          "Basic ATK"
        ],
        "conditions": {
          "name": "Has Toughness Reduction Preview",
          "caster": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "target": {
            "name": "Compute Targets",
            "type": "Intersect",
            "TargetList": [
              {
                "name": "Target Name",
                "target": "{{Player's Aim Target List}}"
              },
              {
                "name": "Join Targets",
                "TargetList": [
                  {
                    "name": "Add Target by Enemy ID",
                    "ID": 800205045,
                    "characterName": "Sequence Trotter"
                  },
                  {
                    "name": "Add Target by Enemy ID",
                    "ID": 800205046,
                    "characterName": "Sequence Trotter"
                  },
                  {
                    "name": "Add Target by Enemy ID",
                    "ID": 800205047,
                    "characterName": "Sequence Trotter"
                  },
                  {
                    "name": "Add Target by Enemy ID",
                    "ID": 800205048,
                    "characterName": "Sequence Trotter"
                  },
                  {
                    "name": "Add Target by Enemy ID",
                    "ID": 800205049,
                    "characterName": "Sequence Trotter"
                  },
                  {
                    "name": "Add Target by Enemy ID",
                    "ID": 800205050,
                    "characterName": "Sequence Trotter"
                  },
                  {
                    "name": "Add Target by Enemy ID",
                    "ID": 800205051,
                    "characterName": "Sequence Trotter"
                  },
                  {
                    "name": "Add Target by Enemy ID",
                    "ID": 800205052,
                    "characterName": "Sequence Trotter"
                  },
                  {
                    "name": "Add Target by Enemy ID",
                    "ID": 800205064,
                    "characterName": "Sequence Trotter"
                  },
                  {
                    "name": "Add Target by Enemy ID",
                    "ID": 800205065,
                    "characterName": "Sequence Trotter"
                  }
                ]
              }
            ]
          }
        },
        "delayAdvancePreview": {
          "name": "Delay/Advance Preview",
          "previewValue": {
            "operator": "Constants[0] (0) || Variables[0] (ActionDelayRatio) || SUB || RETURN",
            "displayLines": "(0 - ActionDelayRatio)",
            "constants": [
              0
            ],
            "variables": [
              "ActionDelayRatio"
            ]
          }
        }
      }
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1736106961\">Modifier_BattleEventAbility_Challenge_Month_30_sub2</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
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
                    "value1": "Boss_ChangePhase_Flag",
                    "compareType": "=",
                    "value2": 1
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "_Trigger_Effect_Flag",
                    "compareType": "=",
                    "value2": 1
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "Boss_ChangePhase_Flag",
                  "value": 0
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "ifTargetFound": [
                    {
                      "name": "Inject Ability Use",
                      "condition": {
                        "name": "Insert Ability Condition",
                        "type": "AbilityOwnerInsertUnusedCount",
                        "typeValue": 1
                      },
                      "abilityName": "BattleEventAbility_Challenge_Month_30_Insert",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "priorityTag": "AvatarInsertAttackSelf",
                      "ownerState": "Anyone",
                      "canHitNonTargets": true,
                      "valuePerStack": {
                        "_Damage_Ratio_get": {
                          "operator": "Variables[0] (_Damage_Ratio) || RETURN",
                          "displayLines": "_Damage_Ratio",
                          "constants": [],
                          "variables": [
                            "_Damage_Ratio"
                          ]
                        },
                        "_Damage_Ratio_2_get": {
                          "operator": "Variables[0] (_Damage_Ratio_2) || RETURN",
                          "displayLines": "_Damage_Ratio_2",
                          "constants": [],
                          "variables": [
                            "_Damage_Ratio_2"
                          ]
                        }
                      },
                      "allowAbilityTriggers": false
                    }
                  ]
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
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "CurrentHP%",
                "compareType": "=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "Boss_ChangePhase_Flag",
                  "value": 1
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "_Trigger_Effect_Flag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__319313068\">Modifier_BattleEventAbility_Challenge_Month_26_sub2</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
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
                    "value1": "Boss_ChangePhase_Flag",
                    "compareType": "=",
                    "value2": 1
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "_Trigger_Damage_Flag",
                    "compareType": "=",
                    "value2": 1
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "Boss_ChangePhase_Flag",
                  "value": 0
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "ifTargetFound": [
                    {
                      "name": "Inject Ability Use",
                      "condition": {
                        "name": "Insert Ability Condition",
                        "type": "AbilityOwnerInsertUnusedCount",
                        "typeValue": 1
                      },
                      "abilityName": "BattleEventAbility_Challenge_Month_26_Insert",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "priorityTag": "AvatarInsertAttackSelf",
                      "ownerState": "Anyone",
                      "canHitNonTargets": true,
                      "valuePerStack": {
                        "_Damage_Ratio_get": {
                          "operator": "Variables[0] (_Damage_Ratio) || RETURN",
                          "displayLines": "_Damage_Ratio",
                          "constants": [],
                          "variables": [
                            "_Damage_Ratio"
                          ]
                        },
                        "_Damage_Ratio_2_get": {
                          "operator": "Variables[0] (_Damage_Ratio_2) || RETURN",
                          "displayLines": "_Damage_Ratio_2",
                          "constants": [],
                          "variables": [
                            "_Damage_Ratio_2"
                          ]
                        }
                      },
                      "allowAbilityTriggers": false
                    }
                  ]
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
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "CurrentHP%",
                "compareType": "=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "Boss_ChangePhase_Flag",
                  "value": 1
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "_Trigger_Damage_Flag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-245828586\">Modifier_BattleEventAbility_Challenge_Month_26_sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Take Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "Adjust Target Stats",
              "modifiedValuesArray": [
                {
                  "on": "Defender",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                  "value": "_DamageUp_Ratio_Sum"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "_DamageUp_Ratio_Sum",
              "value": {
                "operator": "Variables[0] (_Current_Layer) || Variables[1] (_DamageUp_Ratio) || MUL || RETURN",
                "displayLines": "(_Current_Layer * _DamageUp_Ratio)",
                "constants": [],
                "variables": [
                  "_Current_Layer",
                  "_DamageUp_Ratio"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "_Trigger_Damage_Flag"
      ],
      "description": "Receive <span class=\"descriptionNumberColor\">_DamageUp_Ratio_Sum</span> more DMG. Increase 1 stack every time this unit receives an attack. Receive additional DMG when stacks reach <span class=\"descriptionNumberColor\">_Init_Layer</span>.",
      "type": "Debuff",
      "effectName": "Memory Imprint",
      "statusName": "Memory Imprint"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__164417274\">Modifier_BattleEventAbility_Challenge_Month_25_Insert</a>",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "ifTargetFound": [
                {
                  "name": "Trigger Modifier Event",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "DOT_TriggerRatio",
                  "eventType": "DOT_Electric",
                  "value": {
                    "operator": "Variables[0] (BattleEvent_P5_ADF_DotTriggerRatio) || RETURN",
                    "displayLines": "BattleEvent_P5_ADF_DotTriggerRatio",
                    "constants": [],
                    "variables": [
                      "BattleEvent_P5_ADF_DotTriggerRatio"
                    ]
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1935319413\">Standard_DOT_Electric</a>[<span class=\"descriptionNumberColor\">Shock</span>]",
                  "duration": {
                    "operator": "Variables[0] (BattleEvent_P3_ADF_LifeTime) || RETURN",
                    "displayLines": "BattleEvent_P3_ADF_LifeTime",
                    "constants": [],
                    "variables": [
                      "BattleEvent_P3_ADF_LifeTime"
                    ]
                  },
                  "baseChance": {
                    "operator": "Variables[0] (BattleEvent_P2_ADF_Chance) || RETURN",
                    "displayLines": "BattleEvent_P2_ADF_Chance",
                    "constants": [],
                    "variables": [
                      "BattleEvent_P2_ADF_Chance"
                    ]
                  },
                  "valuePerStack": {
                    "Modifier_Electric_DamagePercentage": {
                      "operator": "Variables[0] (BattleEvent_P4_ADF_DamagePercentage) || Constants[0] (1.5) || MUL || RETURN",
                      "displayLines": "(BattleEvent_P4_ADF_DamagePercentage * 1.5)",
                      "constants": [
                        1.5
                      ],
                      "variables": [
                        "BattleEvent_P4_ADF_DamagePercentage"
                      ]
                    }
                  },
                  "stackFlag": "Level"
                }
              ]
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "ifTargetFound": [
                {
                  "name": "Trigger Modifier Event",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "DOT_TriggerRatio",
                  "eventType": "DOT_Poison",
                  "value": {
                    "operator": "Variables[0] (BattleEvent_P5_ADF_DotTriggerRatio) || RETURN",
                    "displayLines": "BattleEvent_P5_ADF_DotTriggerRatio",
                    "constants": [],
                    "variables": [
                      "BattleEvent_P5_ADF_DotTriggerRatio"
                    ]
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-868837614\">Standard_DOT_Poison</a>[<span class=\"descriptionNumberColor\">Wind Shear</span>]",
                  "duration": {
                    "operator": "Variables[0] (BattleEvent_P3_ADF_LifeTime) || RETURN",
                    "displayLines": "BattleEvent_P3_ADF_LifeTime",
                    "constants": [],
                    "variables": [
                      "BattleEvent_P3_ADF_LifeTime"
                    ]
                  },
                  "baseChance": {
                    "operator": "Variables[0] (BattleEvent_P2_ADF_Chance) || RETURN",
                    "displayLines": "BattleEvent_P2_ADF_Chance",
                    "constants": [],
                    "variables": [
                      "BattleEvent_P2_ADF_Chance"
                    ]
                  },
                  "valuePerStack": {
                    "Modifier_Poison_DamagePercentage": {
                      "operator": "Variables[0] (BattleEvent_P4_ADF_DamagePercentage) || Constants[0] (1) || MUL || RETURN",
                      "displayLines": "(BattleEvent_P4_ADF_DamagePercentage * 1)",
                      "constants": [
                        1
                      ],
                      "variables": [
                        "BattleEvent_P4_ADF_DamagePercentage"
                      ]
                    }
                  },
                  "stackFlag": "Level"
                }
              ]
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "ifTargetFound": [
                {
                  "name": "Trigger Modifier Event",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "DOT_TriggerRatio",
                  "eventType": "DOT_Burn",
                  "value": {
                    "operator": "Variables[0] (BattleEvent_P5_ADF_DotTriggerRatio) || RETURN",
                    "displayLines": "BattleEvent_P5_ADF_DotTriggerRatio",
                    "constants": [],
                    "variables": [
                      "BattleEvent_P5_ADF_DotTriggerRatio"
                    ]
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1990407757\">Standard_DOT_Burn</a>[<span class=\"descriptionNumberColor\">Burn</span>]",
                  "duration": {
                    "operator": "Variables[0] (BattleEvent_P3_ADF_LifeTime) || RETURN",
                    "displayLines": "BattleEvent_P3_ADF_LifeTime",
                    "constants": [],
                    "variables": [
                      "BattleEvent_P3_ADF_LifeTime"
                    ]
                  },
                  "baseChance": {
                    "operator": "Variables[0] (BattleEvent_P2_ADF_Chance) || RETURN",
                    "displayLines": "BattleEvent_P2_ADF_Chance",
                    "constants": [],
                    "variables": [
                      "BattleEvent_P2_ADF_Chance"
                    ]
                  },
                  "valuePerStack": {
                    "Modifier_Burn_DamagePercentage": {
                      "operator": "Variables[0] (BattleEvent_P4_ADF_DamagePercentage) || Constants[0] (1) || MUL || RETURN",
                      "displayLines": "(BattleEvent_P4_ADF_DamagePercentage * 1)",
                      "constants": [
                        1
                      ],
                      "variables": [
                        "BattleEvent_P4_ADF_DamagePercentage"
                      ]
                    }
                  },
                  "stackFlag": "Level"
                }
              ]
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "ifTargetFound": [
                {
                  "name": "Trigger Modifier Event",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "DOT_TriggerRatio",
                  "eventType": "DOT_Bleed",
                  "value": {
                    "operator": "Variables[0] (BattleEvent_P5_ADF_DotTriggerRatio) || RETURN",
                    "displayLines": "BattleEvent_P5_ADF_DotTriggerRatio",
                    "constants": [],
                    "variables": [
                      "BattleEvent_P5_ADF_DotTriggerRatio"
                    ]
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"227784370\">Standard_DOT_Tear</a>[<span class=\"descriptionNumberColor\">Bleed</span>]",
                  "duration": {
                    "operator": "Variables[0] (BattleEvent_P3_ADF_LifeTime) || RETURN",
                    "displayLines": "BattleEvent_P3_ADF_LifeTime",
                    "constants": [],
                    "variables": [
                      "BattleEvent_P3_ADF_LifeTime"
                    ]
                  },
                  "baseChance": {
                    "operator": "Variables[0] (BattleEvent_P2_ADF_Chance) || RETURN",
                    "displayLines": "BattleEvent_P2_ADF_Chance",
                    "constants": [],
                    "variables": [
                      "BattleEvent_P2_ADF_Chance"
                    ]
                  },
                  "valuePerStack": {
                    "Modifier_Tear_DamageRatio": 0.1,
                    "Modifier_Tear_MaxPercentage": {
                      "operator": "Variables[0] (BattleEvent_P4_ADF_DamagePercentage) || Constants[0] (2.5) || MUL || RETURN",
                      "displayLines": "(BattleEvent_P4_ADF_DamagePercentage * 2.5)",
                      "constants": [
                        2.5
                      ],
                      "variables": [
                        "BattleEvent_P4_ADF_DamagePercentage"
                      ]
                    }
                  },
                  "stackFlag": "Level"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-691475768\">Modifier_BattleEventAbility_Challenge_Month_25_Insert_pre</a>",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"164417274\">Modifier_BattleEventAbility_Challenge_Month_25_Insert</a>",
              "valuePerStack": {
                "BattleEvent_P2_ADF_Chance": {
                  "operator": "Variables[0] (BattleEvent_P2_ADF_Chance) || RETURN",
                  "displayLines": "BattleEvent_P2_ADF_Chance",
                  "constants": [],
                  "variables": [
                    "BattleEvent_P2_ADF_Chance"
                  ]
                },
                "BattleEvent_P3_ADF_LifeTime": {
                  "operator": "Variables[0] (BattleEvent_P3_ADF_LifeTime) || RETURN",
                  "displayLines": "BattleEvent_P3_ADF_LifeTime",
                  "constants": [],
                  "variables": [
                    "BattleEvent_P3_ADF_LifeTime"
                  ]
                },
                "BattleEvent_P4_ADF_DamagePercentage": {
                  "operator": "Variables[0] (BattleEvent_P4_ADF_DamagePercentage) || RETURN",
                  "displayLines": "BattleEvent_P4_ADF_DamagePercentage",
                  "constants": [],
                  "variables": [
                    "BattleEvent_P4_ADF_DamagePercentage"
                  ]
                },
                "BattleEvent_P5_ADF_DotTriggerRatio": {
                  "operator": "Variables[0] (BattleEvent_P5_ADF_DotTriggerRatio) || RETURN",
                  "displayLines": "BattleEvent_P5_ADF_DotTriggerRatio",
                  "constants": [],
                  "variables": [
                    "BattleEvent_P5_ADF_DotTriggerRatio"
                  ]
                }
              }
            }
          ]
        }
      ],
      "stackData": [
        "BattleEvent_P2_ADF_Chance",
        "BattleEvent_P3_ADF_LifeTime",
        "BattleEvent_P4_ADF_DamagePercentage",
        "BattleEvent_P5_ADF_DotTriggerRatio"
      ],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1260413696\">Modifier_BattleEventAbility_Challenge_Month_24_sub</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Attack Type",
                "attackTypes": [
                  "Basic ATK",
                  "Skill"
                ]
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                      "value": "BattleEvent_P1_ADF_Get"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "BattleEvent_P1_ADF_Get"
      ],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1571276631\">Modifier_BattleEventAbility_Challenge_Month_23_RandomDebuff5</a>[<span class=\"descriptionNumberColor\">Follow-Up ATK Vulnerability</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Take Damage Start [Owner]: Any",
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
                  "target": "{{Parameter Target}}"
                }
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                      "value": "BattleEvent_P5_ADF_Get"
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
              "name": "Define Custom Variable with Modifier Values",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "valueType": "Layer",
              "variableName": "BattleEvent_P5_ADF_Layer",
              "multiplier": 1
            },
            {
              "name": "Define Custom Variable",
              "variableName": "BattleEvent_P5_ADF_Get",
              "value": {
                "operator": "Variables[0] (BattleEvent_P5_ADF_Layer) || Variables[1] (BattleEvent_P5_ADF_Get) || MUL || RETURN",
                "displayLines": "(BattleEvent_P5_ADF_Layer * BattleEvent_P5_ADF_Get)",
                "constants": [],
                "variables": [
                  "BattleEvent_P5_ADF_Layer",
                  "BattleEvent_P5_ADF_Get"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "BattleEvent_P5_ADF_Get"
      ],
      "latentQueue": [],
      "description": "Follow-Up ATK DMG taken increases by <span class=\"descriptionNumberColor\">BattleEvent_P5_ADF_Get</span>.",
      "type": "Debuff",
      "effectName": "Follow-Up ATK Vulnerability",
      "statusName": "Follow-Up ATK Vulnerability"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1554499012\">Modifier_BattleEventAbility_Challenge_Month_23_RandomDebuff4</a>[<span class=\"descriptionNumberColor\">Effect RES Reduction</span>]",
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
              "variableName": "BattleEvent_P2_ADF_Layer",
              "multiplier": 1
            },
            {
              "name": "Define Custom Variable",
              "variableName": "BattleEvent_P2_ADF_Get",
              "value": {
                "operator": "Variables[0] (BattleEvent_P2_ADF_Layer) || Variables[1] (BattleEvent_P2_ADF_Get) || MUL || RETURN",
                "displayLines": "(BattleEvent_P2_ADF_Layer * BattleEvent_P2_ADF_Get)",
                "constants": [],
                "variables": [
                  "BattleEvent_P2_ADF_Layer",
                  "BattleEvent_P2_ADF_Get"
                ]
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">EffectRES</span>&nbsp;",
              "value": {
                "operator": "Constants[0] (0) || Variables[0] (BattleEvent_P2_ADF_Get) || SUB || RETURN",
                "displayLines": "(0 - BattleEvent_P2_ADF_Get)",
                "constants": [
                  0
                ],
                "variables": [
                  "BattleEvent_P2_ADF_Get"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "BattleEvent_P2_ADF_Get"
      ],
      "latentQueue": [],
      "description": "Effect RES decreases by <span class=\"descriptionNumberColor\">BattleEvent_P2_ADF_Get</span>.",
      "type": "Debuff",
      "effectName": "Effect RES Reduction",
      "statusName": "Effect RES Reduction"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1537721393\">Modifier_BattleEventAbility_Challenge_Month_23_RandomDebuff3</a>[<span class=\"descriptionNumberColor\">SPD Reduction</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "STAT_SpeedDown"
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
              "variableName": "BattleEvent_P2_ADF_Layer",
              "multiplier": 1
            },
            {
              "name": "Define Custom Variable",
              "variableName": "BattleEvent_P2_ADF_Get",
              "value": {
                "operator": "Variables[0] (BattleEvent_P2_ADF_Layer) || Variables[1] (BattleEvent_P2_ADF_Get) || MUL || RETURN",
                "displayLines": "(BattleEvent_P2_ADF_Layer * BattleEvent_P2_ADF_Get)",
                "constants": [],
                "variables": [
                  "BattleEvent_P2_ADF_Layer",
                  "BattleEvent_P2_ADF_Get"
                ]
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
              "value": {
                "operator": "Constants[0] (0) || Variables[0] (BattleEvent_P2_ADF_Get) || SUB || RETURN",
                "displayLines": "(0 - BattleEvent_P2_ADF_Get)",
                "constants": [
                  0
                ],
                "variables": [
                  "BattleEvent_P2_ADF_Get"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "BattleEvent_P2_ADF_Get"
      ],
      "latentQueue": [],
      "description": "Decreases SPD by <span class=\"descriptionNumberColor\">BattleEvent_P2_ADF_Get</span>.",
      "type": "Debuff",
      "effectName": "SPD Reduction",
      "statusName": "SPD Reduction"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1520943774\">Modifier_BattleEventAbility_Challenge_Month_23_RandomDebuff2</a>[<span class=\"descriptionNumberColor\">DEF Reduction</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "STAT_DefenceDown"
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
              "variableName": "BattleEvent_P2_ADF_Layer",
              "multiplier": 1
            },
            {
              "name": "Define Custom Variable",
              "variableName": "BattleEvent_P2_ADF_Get",
              "value": {
                "operator": "Variables[0] (BattleEvent_P2_ADF_Layer) || Variables[1] (BattleEvent_P2_ADF_Get) || MUL || RETURN",
                "displayLines": "(BattleEvent_P2_ADF_Layer * BattleEvent_P2_ADF_Get)",
                "constants": [],
                "variables": [
                  "BattleEvent_P2_ADF_Layer",
                  "BattleEvent_P2_ADF_Get"
                ]
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
              "value": {
                "operator": "Constants[0] (0) || Variables[0] (BattleEvent_P2_ADF_Get) || SUB || RETURN",
                "displayLines": "(0 - BattleEvent_P2_ADF_Get)",
                "constants": [
                  0
                ],
                "variables": [
                  "BattleEvent_P2_ADF_Get"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "BattleEvent_P2_ADF_Get"
      ],
      "latentQueue": [],
      "description": "Reduces DEF by <span class=\"descriptionNumberColor\">BattleEvent_P2_ADF_Get</span>.",
      "type": "Debuff",
      "effectName": "DEF Reduction",
      "statusName": "DEF Reduction"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1504166155\">Modifier_BattleEventAbility_Challenge_Month_23_RandomDebuff1</a>[<span class=\"descriptionNumberColor\">ATK Reduction</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "STAT_AttackDown"
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
              "variableName": "BattleEvent_P2_ADF_Layer",
              "multiplier": 1
            },
            {
              "name": "Define Custom Variable",
              "variableName": "BattleEvent_P2_ADF_Get",
              "value": {
                "operator": "Variables[0] (BattleEvent_P2_ADF_Layer) || Variables[1] (BattleEvent_P2_ADF_Get) || MUL || RETURN",
                "displayLines": "(BattleEvent_P2_ADF_Layer * BattleEvent_P2_ADF_Get)",
                "constants": [],
                "variables": [
                  "BattleEvent_P2_ADF_Layer",
                  "BattleEvent_P2_ADF_Get"
                ]
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
                "operator": "Constants[0] (0) || Variables[0] (BattleEvent_P2_ADF_Get) || SUB || RETURN",
                "displayLines": "(0 - BattleEvent_P2_ADF_Get)",
                "constants": [
                  0
                ],
                "variables": [
                  "BattleEvent_P2_ADF_Get"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "BattleEvent_P2_ADF_Get"
      ],
      "latentQueue": [],
      "description": "ATK decreases by <span class=\"descriptionNumberColor\">BattleEvent_P2_ADF_Get</span>.",
      "type": "Debuff",
      "effectName": "ATK Reduction",
      "statusName": "ATK Reduction"
    }
  ],
  "references": []
}