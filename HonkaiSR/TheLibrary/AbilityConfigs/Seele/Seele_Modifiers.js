const configAbility = {
  "fileName": "Seele_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__1119246325\">ADV_Modifier_MazeEffect_Stealth</a>",
      "counter": 1,
      "stackType": "Refresh",
      "duration": 1.5
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__2022324518\">ADV_Modifier_MazeEffect_Seele</a>",
      "counter": 1,
      "stackType": "Refresh",
      "modifierFlags": [
        "Stealth"
      ],
      "duration": 20,
      "onCreation": [
        {
          "name": "Overworld Filter Enemies",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Task Action Target}}"
              },
              "modifier": null,
              "ID": "1000118()"
            }
          ]
        }
      ],
      "onStageExit": [
        "Modifier Deletes Itself"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__156399431\">ADV_Modifier_Maze_Seele</a>",
      "counter": 1,
      "stackType": "Refresh",
      "duration": 20,
      "onStageExit": [
        "Modifier Deletes Itself"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-451187688\">ADV_StageAbility_Maze_Seele</a>",
      "counter": 1,
      "stackType": "Refresh"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1484506463\">Advanced_Seele_Eidolon6_Flag</a>[<span class=\"descriptionNumberColor\">Butterfly Flurry</span>]",
      "stackType": "Replace",
      "modifierFlags": [
        "RemoveWhenCasterDead",
        "KeepOnDeathrattle"
      ],
      "description": "After being attacked, additionally receives 1 instance of True DMG from Seele. Triggers Seele's Talent effect when defeated by any unit.",
      "type": "Debuff",
      "effectName": "Butterfly Flurry",
      "statusName": "Butterfly Flurry",
      "execute": [
        {
          "eventTrigger": "Being Attacked [Owner]: End",
          "execute": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "AttackScaling": {
                "DamageType": {
                  "name": "Damage Type Source",
                  "sourceType": {}
                },
                "DamageFlat": {
                  "operator": "Variables[0] (MDF_Eidolon6_DamageValue) || RETURN",
                  "displayLines": "MDF_Eidolon6_DamageValue",
                  "constants": [],
                  "variables": [
                    "MDF_Eidolon6_DamageValue"
                  ]
                },
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "attackType": "True DMG"
              },
              "isConvertedDMG": true
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-346740579\">Advanced_Seele_Ability02InsertMuteSp_Clean</a>",
      "execute": [
        {
          "eventTrigger": "Ability Use [Owner]: End",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"497837059\">Advanced_Seele_Ability02InsertMuteSp</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1788349187\">Advanced_Seele_Ability02InsertCD_ShowBonus</a>[<span class=\"descriptionNumberColor\">Sheathed Blade</span>]"
            },
            "Modifier Deletes Itself"
          ]
        },
        {
          "eventTrigger": "Extra Action/Turn [Owner]: End",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"497837059\">Advanced_Seele_Ability02InsertMuteSp</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1788349187\">Advanced_Seele_Ability02InsertCD_ShowBonus</a>[<span class=\"descriptionNumberColor\">Sheathed Blade</span>]"
            },
            "Modifier Deletes Itself"
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__497837059\">Advanced_Seele_Ability02InsertMuteSp</a>",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        },
        {
          "eventTrigger": "Extra Action/Turn [Owner]: Start ",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Parameter String",
                "compareType": "=",
                "value2": "Advanced_Seele_Ability02InsertCheck"
              },
              "passed": [
                {
                  "name": "Update Ability Properties",
                  "abilityTypeList": [
                    "Skill"
                  ],
                  "propertyList": [
                    {
                      "name": "Ability Property Action",
                      "propertyName": "Energy Base",
                      "propertyAction": "Remove"
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-346740579\">Advanced_Seele_Ability02InsertMuteSp_Clean</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1622519523\">Advanced_Seele_Ability02InsertReady_ShowBonus</a>[<span class=\"descriptionNumberColor\">Sheathed Blade</span>]"
                },
                {
                  "name": "UI Display Event",
                  "popUpText": "Sheathed Blade"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"627315963\">Advanced_Seele_Ability02InsertCheck</a>"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1622519523\">Advanced_Seele_Ability02InsertReady_ShowBonus</a>[<span class=\"descriptionNumberColor\">Sheathed Blade</span>]",
      "description": "Can trigger the auto-use effect of the Skill \"Sheathed Blade.\"",
      "type": "Other",
      "statusName": "Sheathed Blade"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1788349187\">Advanced_Seele_Ability02InsertCD_ShowBonus</a>[<span class=\"descriptionNumberColor\">Sheathed Blade</span>]",
      "description": "The auto-use effect of Skill \"Sheathed Blade\" cannot be triggered yet.",
      "type": "Other",
      "statusName": "Sheathed Blade",
      "execute": [
        {
          "eventTrigger": "Turn [Owner]: Pre-action Phase",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1622519523\">Advanced_Seele_Ability02InsertReady_ShowBonus</a>[<span class=\"descriptionNumberColor\">Sheathed Blade</span>]"
            },
            "Modifier Deletes Itself"
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1622519523\">Advanced_Seele_Ability02InsertReady_ShowBonus</a>[<span class=\"descriptionNumberColor\">Sheathed Blade</span>]"
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1550591182\">Advanced_Seele_Trace01_KillDamageRatio</a>[<span class=\"descriptionNumberColor\">Nightshade</span>]",
      "stackType": "ReplaceByCaster",
      "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_FinalDamageRatio</span>.",
      "type": "Buff",
      "effectName": "DMG Boost",
      "statusName": "Nightshade",
      "stackLimit": 2,
      "addStacksPerTrigger": 1,
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "Layer",
              "variableName": "MDF_ModifierLayers",
              "multiplier": 1
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_FinalDamageRatio",
              "value": {
                "operator": "Variables[0] (MDF_DamageRatio) || Variables[1] (MDF_ModifierLayers) || MUL || RETURN",
                "displayLines": "(MDF_DamageRatio * MDF_ModifierLayers)",
                "constants": [],
                "variables": [
                  "MDF_DamageRatio",
                  "MDF_ModifierLayers"
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
                "operator": "Variables[0] (MDF_FinalDamageRatio) || RETURN",
                "displayLines": "MDF_FinalDamageRatio",
                "constants": [],
                "variables": [
                  "MDF_FinalDamageRatio"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__627315963\">Advanced_Seele_Ability02InsertCheck</a>",
      "modifierFlags": [
        "CustomEvent_InfiniteRefresh"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-2047905336\">Seele_Ability02ReInsert</a>"
            }
          ]
        },
        {
          "eventTrigger": "Action Choice Window [Anyone]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        },
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-2047905336\">Seele_Ability02ReInsert</a>"
            }
          ],
          "priorityLevel": -55
        },
        {
          "eventTrigger": "Custom Event",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-2047905336\">Seele_Ability02ReInsert</a>"
            }
          ]
        },
        {
          "eventTrigger": "Batch: Enemy Arrival",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-2047905336\">Seele_Ability02ReInsert</a>"
            }
          ]
        },
        {
          "eventTrigger": "Injected Ability Use [Anyone]: End",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-2047905336\">Seele_Ability02ReInsert</a>"
            }
          ]
        }
      ],
      "modifierFunctions": [
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-2047905336\">Seele_Ability02ReInsert</a>",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1622519523\">Advanced_Seele_Ability02InsertReady_ShowBonus</a>[<span class=\"descriptionNumberColor\">Sheathed Blade</span>]"
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}.[[sortByHPCurrent]]"
                  },
                  "maxTargets": 1,
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
              ],
              "failed": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1818761365\">Advanced_Seele_BPAbility_SpeedUpEidolon2</a>[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "STAT_SpeedUp"
      ],
      "description": "Each stack increases SPD by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>, up to 2 stacks.",
      "type": "Buff",
      "effectName": "SPD Boost",
      "statusName": "SPD Boost",
      "stackLimit": 3,
      "addStacksPerTrigger": 1,
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
              "variableName": "SpeedUp_Count",
              "multiplier": 1
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_PropertyValue) || Variables[1] (SpeedUp_Count) || MUL || RETURN",
                "displayLines": "(MDF_PropertyValue * SpeedUp_Count)",
                "constants": [],
                "variables": [
                  "MDF_PropertyValue",
                  "SpeedUp_Count"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1301190315\">Advanced_Seele_BPAbility_SpeedUp</a>[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "STAT_SpeedUp"
      ],
      "description": "SPD increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "effectName": "SPD Boost",
      "statusName": "SPD Boost",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
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
      "for": "<a class=\"gModGreen\" id=\"mod__-472499117\">Advanced_Seele_Passive_DamageUp</a>[<span class=\"descriptionNumberColor\">Amplification</span>]",
      "stackType": "ReplaceByCaster",
      "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">seele_dmg_percent</span>.",
      "type": "Buff",
      "effectName": "DMG Boost",
      "statusName": "Amplification",
      "duration": 1,
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (seele_dmg_percent) || RETURN",
                "displayLines": "seele_dmg_percent",
                "constants": [],
                "variables": [
                  "seele_dmg_percent"
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Trace Activated",
                "conditionList": "Lacerate"
              },
              "passed": [
                {
                  "name": "Update Modifier Description",
                  "popUpText": "DMG dealt increases by <span class=\"descriptionNumberColor\">seele_dmg_percent</span>, and Quantum RES PEN +<span class=\"descriptionNumberColor\">MDF_Penetrate</span>."
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceQuantumPEN</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_Penetrate) || RETURN",
                    "displayLines": "MDF_Penetrate",
                    "constants": [],
                    "variables": [
                      "MDF_Penetrate"
                    ]
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Skill Type",
                    "skillType": "Ultimate"
                  }
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Skill Type",
                    "skillType": "Ultimate"
                  }
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Owner]: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Skill Type",
                    "skillType": "Ultimate"
                  }
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1935199494\">Advanced_Seele_Eidolon6_Ability03Damage</a>",
      "execute": [
        {
          "eventTrigger": "Deal Damage End [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has DMG Instance Tag",
                "tag": "SeeleUltraDamage"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Damage Data",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "AddUltraDamage",
                  "value": "Result_FinalDamageBase"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "FinalUltraDamage",
                  "value": {
                    "operator": "Variables[0] (FinalUltraDamage) || Variables[1] (AddUltraDamage) || ADD || RETURN",
                    "displayLines": "(FinalUltraDamage + AddUltraDamage)",
                    "constants": [],
                    "variables": [
                      "FinalUltraDamage",
                      "AddUltraDamage"
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
  "references": []
}