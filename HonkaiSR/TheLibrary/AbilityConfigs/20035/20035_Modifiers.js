const configAbility = {
  "fileName": "20035_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__-630222072\">W4_Manta_LocalLegend_BattleScore1</a>",
      "execute": [
        {
          "eventTrigger": "Injected Ability Use [Anyone]: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Parameter String",
                "compareType": "=",
                "value2": "AvatarChange_W2_Mecha02_02_PassiveAbility_Insert"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "variableName": "_MonsterChangeCnt",
                  "context": "TargetEntity",
                  "value": 1
                },
                {
                  "name": "Achievement",
                  "matchTags": true,
                  "relatedAchievements": [
                    {
                      "title": "Siren Tears",
                      "desc": "Ally \"Hallucinogenic Mermaid\" takes fatal damage in a battle against Elegy Siren at any difficulty",
                      "rarity": "Low"
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
      "for": "<a class=\"gModGreen\" id=\"mod__1347964205\">Enemy_W4_Manta_LocalLegend_Charge</a>[<span class=\"descriptionNumberColor\">Yearning for a Shared Dance</span>]",
      "description": "Uses \"Embrace From the Waves\" in every action. Dispelled when Weakness is broken.",
      "type": "Other",
      "effectName": "Yearning for a Shared Dance",
      "statusName": "Yearning for a Shared Dance",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "AIFlag",
              "value": 1
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "AIFlag",
              "value": 5
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
            }
          ]
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__799207340\">Enemy_W4_Manta_LocalLegend_Virus_NightMare</a>[<span class=\"descriptionNumberColor\">Glacial Erosion</span>]",
      "stackType": "Replace",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "modifierFlags": [
        "STAT_DOT",
        "CanBeAddedToServant",
        "CanListenServantCallback"
      ],
      "useEntitySnapshot": true,
      "description": "At the start of the turn, receives Ice DoT equal to a percentage of this unit's Max HP. This DoT is stackable.",
      "type": "Debuff",
      "effectName": "Glacial Erosion",
      "statusName": "Glacial Erosion",
      "addStacksPerTrigger": 1,
      "execute": [
        {
          "eventTrigger": "Turn [Owner]: Pre-action Phase",
          "execute": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "MDF_MaxHp",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "Looped Event",
              "maxLoops": {
                "operator": "Variables[0] (MDF_Layer) || RETURN",
                "displayLines": "MDF_Layer",
                "constants": [],
                "variables": [
                  "MDF_Layer"
                ]
              },
              "Event": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Ice",
                    "Damage": {
                      "operator": "Variables[0] (MDF_DotDamageRatio) || RETURN",
                      "displayLines": "MDF_DotDamageRatio",
                      "constants": [],
                      "variables": [
                        "MDF_DotDamageRatio"
                      ]
                    },
                    "DamageFlat": {
                      "operator": "Variables[0] (MDF_DotHPRatio) || Variables[1] (MDF_MaxHp) || MUL || RETURN",
                      "displayLines": "(MDF_DotHPRatio * MDF_MaxHp)",
                      "constants": [],
                      "variables": [
                        "MDF_DotHPRatio",
                        "MDF_MaxHp"
                      ]
                    },
                    "dmgFormulaFinal": "Converted DMG Base",
                    "Toughness": null,
                    "Tags": [
                      "Manta's Virus"
                    ],
                    "attackType": "DOT",
                    "hitOwner": {
                      "name": "Target Name",
                      "target": "{{Enemy Teams}}"
                    }
                  }
                }
              ]
            }
          ],
          "priorityLevel": 90
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "Layer",
              "variableName": "MDF_Layer",
              "multiplier": 1
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
              "variableName": "MDF_MaxHp",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "Looped Event",
              "maxLoops": {
                "operator": "Variables[0] (MDF_Layer) || RETURN",
                "displayLines": "MDF_Layer",
                "constants": [],
                "variables": [
                  "MDF_Layer"
                ]
              },
              "Event": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Ice",
                    "Damage": {
                      "operator": "Variables[0] (MDF_DotDamageRatio) || RETURN",
                      "displayLines": "MDF_DotDamageRatio",
                      "constants": [],
                      "variables": [
                        "MDF_DotDamageRatio"
                      ]
                    },
                    "DamageFlat": {
                      "operator": "Variables[0] (DOT_TriggerRatio) || Variables[1] (MDF_DotHPRatio) || MUL || Variables[2] (MDF_MaxHp) || MUL || RETURN",
                      "displayLines": "((DOT_TriggerRatio * MDF_DotHPRatio) * MDF_MaxHp)",
                      "constants": [],
                      "variables": [
                        "DOT_TriggerRatio",
                        "MDF_DotHPRatio",
                        "MDF_MaxHp"
                      ]
                    },
                    "dmgFormulaFinal": "Converted DMG Base",
                    "Toughness": null,
                    "Tags": [
                      "Manta's Virus"
                    ],
                    "attackType": "DOT",
                    "hitOwner": {
                      "name": "Target Name",
                      "target": "{{Enemy Teams}}"
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
      "for": "<a class=\"gModGreen\" id=\"mod__1965379982\">Enemy_W4_Manta_LocalLegend_Virus_Avatar</a>[<span class=\"descriptionNumberColor\">Glacial Erosion</span>]",
      "stackType": "Replace",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "modifierFlags": [
        "STAT_DOT",
        "CanBeAddedToServant",
        "CanListenServantCallback"
      ],
      "useEntitySnapshot": true,
      "description": "At the start of the turn, receives Ice DoT equal to a percentage of this unit's Max HP. This DoT is stackable.",
      "type": "Debuff",
      "effectName": "Glacial Erosion",
      "statusName": "Glacial Erosion",
      "addStacksPerTrigger": 1,
      "execute": [
        {
          "eventTrigger": "Turn [Owner]: Pre-action Phase",
          "execute": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "MDF_MaxHp",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "Looped Event",
              "maxLoops": {
                "operator": "Variables[0] (MDF_Layer) || RETURN",
                "displayLines": "MDF_Layer",
                "constants": [],
                "variables": [
                  "MDF_Layer"
                ]
              },
              "Event": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Ice",
                    "Damage": {
                      "operator": "Variables[0] (MDF_DotDamageRatio) || RETURN",
                      "displayLines": "MDF_DotDamageRatio",
                      "constants": [],
                      "variables": [
                        "MDF_DotDamageRatio"
                      ]
                    },
                    "DamageFlat": {
                      "operator": "Variables[0] (MDF_DotHPRatio) || Variables[1] (MDF_MaxHp) || MUL || RETURN",
                      "displayLines": "(MDF_DotHPRatio * MDF_MaxHp)",
                      "constants": [],
                      "variables": [
                        "MDF_DotHPRatio",
                        "MDF_MaxHp"
                      ]
                    },
                    "dmgFormulaFinal": "Converted DMG Base",
                    "Toughness": null,
                    "Tags": [
                      "Manta's Virus"
                    ],
                    "attackType": "DOT",
                    "hitOwner": {
                      "name": "Target Name",
                      "target": "{{Enemy Teams}}"
                    }
                  }
                }
              ]
            }
          ],
          "priorityLevel": 90
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "Layer",
              "variableName": "MDF_Layer",
              "multiplier": 1
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
              "variableName": "MDF_MaxHp",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "Looped Event",
              "maxLoops": {
                "operator": "Variables[0] (MDF_Layer) || RETURN",
                "displayLines": "MDF_Layer",
                "constants": [],
                "variables": [
                  "MDF_Layer"
                ]
              },
              "Event": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Ice",
                    "Damage": {
                      "operator": "Variables[0] (MDF_DotDamageRatio) || RETURN",
                      "displayLines": "MDF_DotDamageRatio",
                      "constants": [],
                      "variables": [
                        "MDF_DotDamageRatio"
                      ]
                    },
                    "DamageFlat": {
                      "operator": "Variables[0] (DOT_TriggerRatio) || Variables[1] (MDF_DotHPRatio) || MUL || Variables[2] (MDF_MaxHp) || MUL || RETURN",
                      "displayLines": "((DOT_TriggerRatio * MDF_DotHPRatio) * MDF_MaxHp)",
                      "constants": [],
                      "variables": [
                        "DOT_TriggerRatio",
                        "MDF_DotHPRatio",
                        "MDF_MaxHp"
                      ]
                    },
                    "dmgFormulaFinal": "Converted DMG Base",
                    "Toughness": null,
                    "Tags": [
                      "Manta's Virus"
                    ],
                    "attackType": "DOT",
                    "hitOwner": {
                      "name": "Target Name",
                      "target": "{{Enemy Teams}}"
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
      "for": "<a class=\"gModGreen\" id=\"mod__-643353377\">Enemy_W4_Manta_LocalLegend_Virus_Monster</a>[<span class=\"descriptionNumberColor\">Glacial Erosion</span>]",
      "stackType": "Replace",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "modifierFlags": [
        "STAT_DOT",
        "CanBeAddedToServant",
        "CanListenServantCallback"
      ],
      "useEntitySnapshot": true,
      "description": "At the start of the turn, receives Ice DoT equal to a percentage of this unit's Max HP. This DoT is stackable.",
      "type": "Debuff",
      "effectName": "Glacial Erosion",
      "statusName": "Glacial Erosion",
      "addStacksPerTrigger": 1,
      "execute": [
        {
          "eventTrigger": "Turn [Owner]: Pre-action Phase",
          "execute": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "MDF_MaxHp",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "Looped Event",
              "maxLoops": {
                "operator": "Variables[0] (MDF_Layer) || RETURN",
                "displayLines": "MDF_Layer",
                "constants": [],
                "variables": [
                  "MDF_Layer"
                ]
              },
              "Event": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Ice",
                    "DamageFlat": {
                      "operator": "Variables[0] (MDF_DotHPRatio) || Variables[1] (MDF_MaxHp) || MUL || Constants[0] (1) || Variables[2] (MDF_DotDamageRatio) || ADD || MUL || RETURN",
                      "displayLines": "((MDF_DotHPRatio * MDF_MaxHp) * (1 + MDF_DotDamageRatio))",
                      "constants": [
                        1
                      ],
                      "variables": [
                        "MDF_DotHPRatio",
                        "MDF_MaxHp",
                        "MDF_DotDamageRatio"
                      ]
                    },
                    "dmgFormulaFinal": "Converted DMG Base",
                    "Toughness": null,
                    "Tags": [
                      "Manta's Virus"
                    ],
                    "attackType": "DOT",
                    "hitOwner": {
                      "name": "Target Name",
                      "target": "{{Enemy Teams}}"
                    }
                  }
                }
              ]
            }
          ],
          "priorityLevel": 90
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "Layer",
              "variableName": "MDF_Layer",
              "multiplier": 1
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
              "variableName": "MDF_MaxHp",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "Looped Event",
              "maxLoops": {
                "operator": "Variables[0] (MDF_Layer) || RETURN",
                "displayLines": "MDF_Layer",
                "constants": [],
                "variables": [
                  "MDF_Layer"
                ]
              },
              "Event": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Ice",
                    "DamageFlat": {
                      "operator": "Variables[0] (DOT_TriggerRatio) || Variables[1] (MDF_DotHPRatio) || MUL || Variables[2] (MDF_MaxHp) || MUL || Constants[0] (1) || Variables[3] (MDF_DotDamageRatio) || ADD || MUL || RETURN",
                      "displayLines": "(((DOT_TriggerRatio * MDF_DotHPRatio) * MDF_MaxHp) * (1 + MDF_DotDamageRatio))",
                      "constants": [
                        1
                      ],
                      "variables": [
                        "DOT_TriggerRatio",
                        "MDF_DotHPRatio",
                        "MDF_MaxHp",
                        "MDF_DotDamageRatio"
                      ]
                    },
                    "dmgFormulaFinal": "Converted DMG Base",
                    "Toughness": null,
                    "Tags": [
                      "Manta's Virus"
                    ],
                    "attackType": "DOT",
                    "hitOwner": {
                      "name": "Target Name",
                      "target": "{{Enemy Teams}}"
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
      "for": "<a class=\"gModGreen\" id=\"mod__-909971584\">Enemy_W4_Manta_LocalLegend_PickUpMessage</a>",
      "execute": [
        {
          "eventTrigger": "Ultimate Prep-Phase [Owner]"
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-24486186\">Enemy_W4_Manta_LocalLegend_TooManyFish_AIMark</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1575455810\">Enemy_W4_Manta_LocalLegend_Statues</a>[<span class=\"descriptionNumberColor\">Respite By The Waters</span>]",
      "description": "After receiving a certain number of attacks from the targets, immediately uses \"Psychedelic Elegy.\"",
      "type": "Other",
      "statusName": "Respite By The Waters",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Update Displayed Energy Bar",
              "value": 0,
              "entityClass": "Enemy",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "maximum": {
                "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                "displayLines": "MDF_MaxLayer",
                "constants": [],
                "variables": [
                  "MDF_MaxLayer"
                ]
              },
              "assignState": "True",
              "state": "Normal"
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
                    "team": "Player Team"
                  },
                  {
                    "name": "Character ID",
                    "ID": 6032,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": null
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Team Count",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Manta: Target 02}}"
                  },
                  "variableName": "MDF_CharacterCount",
                  "livingTargets": true
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_CharacterCount",
                    "compareType": "<",
                    "value2": 3
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Manta: Target 02}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-24486186\">Enemy_W4_Manta_LocalLegend_TooManyFish_AIMark</a>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Entity Created [Anyone]",
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
                    "team": "Player Team"
                  },
                  {
                    "name": "Character ID",
                    "ID": 6032,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": null
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Team Count",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Manta: Target 02}}"
                  },
                  "variableName": "MDF_CharacterCount",
                  "livingTargets": true
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_CharacterCount",
                    "compareType": ">=",
                    "value2": 3
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Manta: Target 02}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-24486186\">Enemy_W4_Manta_LocalLegend_TooManyFish_AIMark</a>"
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
                    "value1": "InsertCheck02",
                    "compareType": "=",
                    "value2": 0
                  },
                  {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Player Team"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "MDF_Count",
                  "value": 1,
                  "max": {
                    "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                    "displayLines": "MDF_MaxLayer",
                    "constants": [],
                    "variables": [
                      "MDF_MaxLayer"
                    ]
                  }
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
                "name": "Enemy ID",
                "ID": 405301100,
                "target": {
                  "name": "Target Name",
                  "target": "{{Manta: Event Target 01}}"
                },
                "characterName": null
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Attack Targets of Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"799207340\">Enemy_W4_Manta_LocalLegend_Virus_NightMare</a>[<span class=\"descriptionNumberColor\">Glacial Erosion</span>]",
                  "duration": {
                    "operator": "Variables[0] (UnusedUnderThisBase_11517) || RETURN",
                    "displayLines": "UnusedUnderThisBase_11517",
                    "constants": [],
                    "variables": [
                      "UnusedUnderThisBase_11517"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_DotHPRatio": {
                      "operator": "Variables[0] (UnusedUnderThisBase_11516) || RETURN",
                      "displayLines": "UnusedUnderThisBase_11516",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_11516"
                      ]
                    },
                    "MDF_DotDamageRatio": {
                      "operator": "Variables[0] (UnusedUnderThisBase_11504) || RETURN",
                      "displayLines": "UnusedUnderThisBase_11504",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_11504"
                      ]
                    }
                  }
                }
              ],
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Attack Targets of Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1965379982\">Enemy_W4_Manta_LocalLegend_Virus_Avatar</a>[<span class=\"descriptionNumberColor\">Glacial Erosion</span>]",
                  "duration": {
                    "operator": "Variables[0] (UnusedUnderThisBase_11517) || RETURN",
                    "displayLines": "UnusedUnderThisBase_11517",
                    "constants": [],
                    "variables": [
                      "UnusedUnderThisBase_11517"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_DotHPRatio": {
                      "operator": "Variables[0] (UnusedUnderThisBase_11516) || RETURN",
                      "displayLines": "UnusedUnderThisBase_11516",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_11516"
                      ]
                    },
                    "MDF_DotDamageRatio": {
                      "operator": "Variables[0] (UnusedUnderThisBase_11504) || RETURN",
                      "displayLines": "UnusedUnderThisBase_11504",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_11504"
                      ]
                    }
                  }
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
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "InsertCheck02",
                "compareType": "=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_MaxLayer",
                    "compareType": ">",
                    "value2": {
                      "operator": "Variables[0] (MDF_Count) || RETURN",
                      "displayLines": "MDF_Count",
                      "constants": [],
                      "variables": [
                        "MDF_Count"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (MDF_Count) || RETURN",
                        "displayLines": "MDF_Count",
                        "constants": [],
                        "variables": [
                          "MDF_Count"
                        ]
                      },
                      "entityClass": "Enemy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "maximum": {
                        "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                        "displayLines": "MDF_MaxLayer",
                        "constants": [],
                        "variables": [
                          "MDF_MaxLayer"
                        ]
                      },
                      "state": "Normal"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "InsertCheck02",
                      "value": 1
                    },
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                        "displayLines": "MDF_MaxLayer",
                        "constants": [],
                        "variables": [
                          "MDF_MaxLayer"
                        ]
                      },
                      "entityClass": "Enemy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "maximum": {
                        "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                        "displayLines": "MDF_MaxLayer",
                        "constants": [],
                        "variables": [
                          "MDF_MaxLayer"
                        ]
                      },
                      "state": "Active"
                    },
                    {
                      "name": "Remove Modifier Behavior Flag(s)",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "flagNames": []
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W4_Manta_LocalLegend_Ability03_Part01",
                      "priorityTag": "DefaultEnemy",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Departed State: Start [Owner]",
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
                    "team": "Player Team"
                  },
                  {
                    "name": "Character ID",
                    "ID": 6032,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": null
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Team Count",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Manta: Target 02}}"
                  },
                  "variableName": "MDF_CharacterCount",
                  "livingTargets": true
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_CharacterCount",
                    "compareType": "<",
                    "value2": 3
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Manta: Target 02}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-24486186\">Enemy_W4_Manta_LocalLegend_TooManyFish_AIMark</a>"
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
      "for": "<a class=\"gModGreen\" id=\"mod__668717750\">Enemy_W4_Manta_LocalLegend_PartController_LockHP</a>",
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
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Stage ID",
                        "ID": 4260130,
                        "compareType": ">=",
                        "characterName": "Synergy Duo: Bloodbound Dark Duelist"
                      },
                      {
                        "name": "Stage ID",
                        "ID": 4260136,
                        "compareType": "<=",
                        "characterName": "Synergy Duo: Bloodbound Dark Duelist"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "_BattleTarget_LocalLegend_S5_1_Check",
                      "value": 1
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Manta: Event Target 02}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "_ChangePhaseKill",
                  "value": 1
                },
                {
                  "name": "Force Entity Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster's Minions}}"
                  }
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
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W4_Manta_LocalLegend_PassiveAbility_Insert",
                  "priorityTag": "EnemyPhaseChange",
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
      ]
    }
  ],
  "references": []
}