const configAbility = {
  "fileName": "4053011_Modifiers",
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
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1347964205\">Enemy_W4_Manta_LocalLegend_Charge</a>[<span class=\"descriptionNumberColor\">Yearning for a Shared Dance</span>]",
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
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "Uses \"Embrace From the Waves\" in every action. Dispelled when Weakness is broken.",
      "type": "Other",
      "effectName": "Yearning for a Shared Dance",
      "statusName": "Yearning for a Shared Dance"
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
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
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
                      "operator": "Variables[0] (MDF_MaxHp) || Variables[1] (MDF_DotHPRatio) || MUL || RETURN",
                      "displayLines": "(MDF_MaxHp * MDF_DotHPRatio)",
                      "constants": [],
                      "variables": [
                        "MDF_MaxHp",
                        "MDF_DotHPRatio"
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
                      "operator": "Variables[0] (DOT_TriggerRatio) || Variables[1] (MDF_MaxHp) || MUL || Variables[2] (MDF_DotHPRatio) || MUL || RETURN",
                      "displayLines": "((DOT_TriggerRatio * MDF_MaxHp) * MDF_DotHPRatio)",
                      "constants": [],
                      "variables": [
                        "DOT_TriggerRatio",
                        "MDF_MaxHp",
                        "MDF_DotHPRatio"
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
      ],
      "useEntitySnapshot": true,
      "description": "At the start of the turn, receives Ice DoT equal to a percentage of this unit's Max HP. This DoT is stackable.",
      "type": "Debuff",
      "effectName": "Glacial Erosion",
      "statusName": "Glacial Erosion",
      "addStacksPerTrigger": 1
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
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
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
                      "operator": "Variables[0] (MDF_MaxHp) || Variables[1] (MDF_DotHPRatio) || MUL || RETURN",
                      "displayLines": "(MDF_MaxHp * MDF_DotHPRatio)",
                      "constants": [],
                      "variables": [
                        "MDF_MaxHp",
                        "MDF_DotHPRatio"
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
                      "operator": "Variables[0] (DOT_TriggerRatio) || Variables[1] (MDF_MaxHp) || MUL || Variables[2] (MDF_DotHPRatio) || MUL || RETURN",
                      "displayLines": "((DOT_TriggerRatio * MDF_MaxHp) * MDF_DotHPRatio)",
                      "constants": [],
                      "variables": [
                        "DOT_TriggerRatio",
                        "MDF_MaxHp",
                        "MDF_DotHPRatio"
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
      ],
      "useEntitySnapshot": true,
      "description": "At the start of the turn, receives Ice DoT equal to a percentage of this unit's Max HP. This DoT is stackable.",
      "type": "Debuff",
      "effectName": "Glacial Erosion",
      "statusName": "Glacial Erosion",
      "addStacksPerTrigger": 1
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
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
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
                      "operator": "Variables[0] (MDF_MaxHp) || Variables[1] (MDF_DotHPRatio) || MUL || Constants[0] (1) || Variables[2] (MDF_DotDamageRatio) || ADD || MUL || RETURN",
                      "displayLines": "((MDF_MaxHp * MDF_DotHPRatio) * (1 + MDF_DotDamageRatio))",
                      "constants": [
                        1
                      ],
                      "variables": [
                        "MDF_MaxHp",
                        "MDF_DotHPRatio",
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
                      "operator": "Variables[0] (DOT_TriggerRatio) || Variables[1] (MDF_MaxHp) || MUL || Variables[2] (MDF_DotHPRatio) || MUL || Constants[0] (1) || Variables[3] (MDF_DotDamageRatio) || ADD || MUL || RETURN",
                      "displayLines": "(((DOT_TriggerRatio * MDF_MaxHp) * MDF_DotHPRatio) * (1 + MDF_DotDamageRatio))",
                      "constants": [
                        1
                      ],
                      "variables": [
                        "DOT_TriggerRatio",
                        "MDF_MaxHp",
                        "MDF_DotHPRatio",
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
      ],
      "useEntitySnapshot": true,
      "description": "At the start of the turn, receives Ice DoT equal to a percentage of this unit's Max HP. This DoT is stackable.",
      "type": "Debuff",
      "effectName": "Glacial Erosion",
      "statusName": "Glacial Erosion",
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-909971584\">Enemy_W4_Manta_LocalLegend_PickUpMessage</a>",
      "execute": [
        {
          "eventTrigger": "Ultimate Prep-Phase [Owner]"
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-24486186\">Enemy_W4_Manta_LocalLegend_TooManyFish_AIMark</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1575455810\">Enemy_W4_Manta_LocalLegend_Statues</a>[<span class=\"descriptionNumberColor\">Respite By The Waters</span>]",
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
                    "operator": "Variables[0] ({[PassiveSkill02[5]]}) || RETURN",
                    "displayLines": "{[PassiveSkill02[5]]}",
                    "constants": [],
                    "variables": [
                      "{[PassiveSkill02[5]]}"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_DotHPRatio": {
                      "operator": "Variables[0] ({[PassiveSkill02[4]]}) || RETURN",
                      "displayLines": "{[PassiveSkill02[4]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill02[4]]}"
                      ]
                    },
                    "MDF_DotDamageRatio": {
                      "operator": "Variables[0] ({[PassiveSkill02[6]]}) || RETURN",
                      "displayLines": "{[PassiveSkill02[6]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill02[6]]}"
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
                    "operator": "Variables[0] ({[PassiveSkill02[5]]}) || RETURN",
                    "displayLines": "{[PassiveSkill02[5]]}",
                    "constants": [],
                    "variables": [
                      "{[PassiveSkill02[5]]}"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_DotHPRatio": {
                      "operator": "Variables[0] ({[PassiveSkill02[4]]}) || RETURN",
                      "displayLines": "{[PassiveSkill02[4]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill02[4]]}"
                      ]
                    },
                    "MDF_DotDamageRatio": {
                      "operator": "Variables[0] ({[PassiveSkill02[6]]}) || RETURN",
                      "displayLines": "{[PassiveSkill02[6]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill02[6]]}"
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
                      "priorityTag": "PROG_MonsterLowest",
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
      ],
      "stackData": [
        "MDF_MaxLayer"
      ],
      "latentQueue": [],
      "description": "After receiving a certain number of attacks from the targets, immediately uses \"Psychedelic Elegy.\"",
      "type": "Other",
      "statusName": "Respite By The Waters"
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
      "for": "<a class=\"gModGreen\" id=\"mod__1846479482\">W4_Manta_BattleScore2</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Achievement",
              "relatedAchievements": [
                {
                  "title": "Prevention Is the Best Medicine",
                  "desc": "When allies are inflicted with \"Black Tide Fever,\" remove the state before its negative effects trigger",
                  "rarity": "Low"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1829701863\">W4_Manta_BattleScore1</a>",
      "execute": [
        {
          "eventTrigger": "Action Choice Window [Owner]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        },
        {
          "eventTrigger": "Turn [Action-End Phase]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        },
        {
          "eventTrigger": "Pre-Death [Owner]",
          "execute": [
            {
              "name": "Achievement",
              "relatedAchievements": [
                {
                  "title": "Revelry Comes to a Halt",
                  "desc": "While the \"Lady of Crashing Waves\" is in the \"Revel in Destruction\" state, triggers her action advance effect and defeats her before this action",
                  "rarity": "Low"
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "Manta_Passive"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1447914838\">Enemy_W4_Manta_Virus_Monster</a>[<span class=\"descriptionNumberColor\">Black Tide Fever</span>]",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "modifierFlags": [
        "STAT_DOT",
        "CanBeAddedToServant",
        "CanListenServantCallback"
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "UI Display Event (On Entity)",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "popUpText": "\"Black Tide Fever\" dispelled"
            }
          ]
        },
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "BattleScore_Damage",
              "value": 1
            },
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1261127743\">Enemy_W2_Mecha02_02_TimeSlow</a>"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1670308834\">Enemy_W4_Manta_TimeSlow</a>"
                  }
                ]
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Fire",
                    "DamageFlat": {
                      "operator": "Variables[0] (MDF_TotalDamageValue) || Variables[1] (MDF_TriggerRatio) || MUL || Constants[0] (4) || DIV || RETURN",
                      "displayLines": "((MDF_TotalDamageValue * MDF_TriggerRatio) / 4)",
                      "constants": [
                        4
                      ],
                      "variables": [
                        "MDF_TotalDamageValue",
                        "MDF_TriggerRatio"
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
                      "target": "{{Player Teams}}"
                    }
                  }
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Wind",
                    "DamageFlat": {
                      "operator": "Variables[0] (MDF_TotalDamageValue) || Variables[1] (MDF_TriggerRatio) || MUL || Constants[0] (4) || DIV || RETURN",
                      "displayLines": "((MDF_TotalDamageValue * MDF_TriggerRatio) / 4)",
                      "constants": [
                        4
                      ],
                      "variables": [
                        "MDF_TotalDamageValue",
                        "MDF_TriggerRatio"
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
                      "target": "{{Player Teams}}"
                    }
                  }
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Thunder",
                    "DamageFlat": {
                      "operator": "Variables[0] (MDF_TotalDamageValue) || Variables[1] (MDF_TriggerRatio) || MUL || Constants[0] (4) || DIV || RETURN",
                      "displayLines": "((MDF_TotalDamageValue * MDF_TriggerRatio) / 4)",
                      "constants": [
                        4
                      ],
                      "variables": [
                        "MDF_TotalDamageValue",
                        "MDF_TriggerRatio"
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
                      "target": "{{Player Teams}}"
                    }
                  }
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
                      "operator": "Variables[0] (MDF_TotalDamageValue) || Variables[1] (MDF_TriggerRatio) || MUL || Constants[0] (4) || DIV || RETURN",
                      "displayLines": "((MDF_TotalDamageValue * MDF_TriggerRatio) / 4)",
                      "constants": [
                        4
                      ],
                      "variables": [
                        "MDF_TotalDamageValue",
                        "MDF_TriggerRatio"
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
                      "target": "{{Player Teams}}"
                    }
                  }
                }
              ],
              "failed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Fire",
                    "DamageFlat": {
                      "operator": "Variables[0] (MDF_TotalDamageValue) || Variables[1] (MDF_TriggerRatio) || MUL || Constants[0] (4) || DIV || RETURN",
                      "displayLines": "((MDF_TotalDamageValue * MDF_TriggerRatio) / 4)",
                      "constants": [
                        4
                      ],
                      "variables": [
                        "MDF_TotalDamageValue",
                        "MDF_TriggerRatio"
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
                      "target": "{{Player Teams}}"
                    }
                  }
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Wind",
                    "DamageFlat": {
                      "operator": "Variables[0] (MDF_TotalDamageValue) || Variables[1] (MDF_TriggerRatio) || MUL || Constants[0] (4) || DIV || RETURN",
                      "displayLines": "((MDF_TotalDamageValue * MDF_TriggerRatio) / 4)",
                      "constants": [
                        4
                      ],
                      "variables": [
                        "MDF_TotalDamageValue",
                        "MDF_TriggerRatio"
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
                      "target": "{{Player Teams}}"
                    }
                  }
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Thunder",
                    "DamageFlat": {
                      "operator": "Variables[0] (MDF_TotalDamageValue) || Variables[1] (MDF_TriggerRatio) || MUL || Constants[0] (4) || DIV || RETURN",
                      "displayLines": "((MDF_TotalDamageValue * MDF_TriggerRatio) / 4)",
                      "constants": [
                        4
                      ],
                      "variables": [
                        "MDF_TotalDamageValue",
                        "MDF_TriggerRatio"
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
                      "target": "{{Player Teams}}"
                    }
                  }
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
                      "operator": "Variables[0] (MDF_TotalDamageValue) || Variables[1] (MDF_TriggerRatio) || MUL || Constants[0] (4) || DIV || RETURN",
                      "displayLines": "((MDF_TotalDamageValue * MDF_TriggerRatio) / 4)",
                      "constants": [
                        4
                      ],
                      "variables": [
                        "MDF_TotalDamageValue",
                        "MDF_TriggerRatio"
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
                      "target": "{{Player Teams}}"
                    }
                  }
                }
              ]
            }
          ],
          "priorityLevel": 90
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        },
        {
          "eventTrigger": "Custom Event",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "BattleScore_Damage",
              "value": 1
            },
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1261127743\">Enemy_W2_Mecha02_02_TimeSlow</a>"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1670308834\">Enemy_W4_Manta_TimeSlow</a>"
                  }
                ]
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Fire",
                    "DamageFlat": {
                      "operator": "Variables[0] (MDF_TotalDamageValue) || Variables[1] (MDF_TriggerRatio) || MUL || Constants[0] (4) || DIV || RETURN",
                      "displayLines": "((MDF_TotalDamageValue * MDF_TriggerRatio) / 4)",
                      "constants": [
                        4
                      ],
                      "variables": [
                        "MDF_TotalDamageValue",
                        "MDF_TriggerRatio"
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
                      "target": "{{Player Teams}}"
                    }
                  }
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Wind",
                    "DamageFlat": {
                      "operator": "Variables[0] (MDF_TotalDamageValue) || Variables[1] (MDF_TriggerRatio) || MUL || Constants[0] (4) || DIV || RETURN",
                      "displayLines": "((MDF_TotalDamageValue * MDF_TriggerRatio) / 4)",
                      "constants": [
                        4
                      ],
                      "variables": [
                        "MDF_TotalDamageValue",
                        "MDF_TriggerRatio"
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
                      "target": "{{Player Teams}}"
                    }
                  }
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Thunder",
                    "DamageFlat": {
                      "operator": "Variables[0] (MDF_TotalDamageValue) || Variables[1] (MDF_TriggerRatio) || MUL || Constants[0] (4) || DIV || RETURN",
                      "displayLines": "((MDF_TotalDamageValue * MDF_TriggerRatio) / 4)",
                      "constants": [
                        4
                      ],
                      "variables": [
                        "MDF_TotalDamageValue",
                        "MDF_TriggerRatio"
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
                      "target": "{{Player Teams}}"
                    }
                  }
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
                      "operator": "Variables[0] (MDF_TotalDamageValue) || Variables[1] (MDF_TriggerRatio) || MUL || Constants[0] (4) || DIV || RETURN",
                      "displayLines": "((MDF_TotalDamageValue * MDF_TriggerRatio) / 4)",
                      "constants": [
                        4
                      ],
                      "variables": [
                        "MDF_TotalDamageValue",
                        "MDF_TriggerRatio"
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
                      "target": "{{Player Teams}}"
                    }
                  }
                }
              ],
              "failed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Fire",
                    "DamageFlat": {
                      "operator": "Variables[0] (DOT_TriggerRatio) || Variables[1] (MDF_TotalDamageValue) || MUL || Constants[0] (4) || DIV || RETURN",
                      "displayLines": "((DOT_TriggerRatio * MDF_TotalDamageValue) / 4)",
                      "constants": [
                        4
                      ],
                      "variables": [
                        "DOT_TriggerRatio",
                        "MDF_TotalDamageValue"
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
                      "target": "{{Player Teams}}"
                    }
                  }
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Thunder",
                    "DamageFlat": {
                      "operator": "Variables[0] (DOT_TriggerRatio) || Variables[1] (MDF_TotalDamageValue) || MUL || Constants[0] (4) || DIV || RETURN",
                      "displayLines": "((DOT_TriggerRatio * MDF_TotalDamageValue) / 4)",
                      "constants": [
                        4
                      ],
                      "variables": [
                        "DOT_TriggerRatio",
                        "MDF_TotalDamageValue"
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
                      "target": "{{Player Teams}}"
                    }
                  }
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Wind",
                    "DamageFlat": {
                      "operator": "Variables[0] (DOT_TriggerRatio) || Variables[1] (MDF_TotalDamageValue) || MUL || Constants[0] (4) || DIV || RETURN",
                      "displayLines": "((DOT_TriggerRatio * MDF_TotalDamageValue) / 4)",
                      "constants": [
                        4
                      ],
                      "variables": [
                        "DOT_TriggerRatio",
                        "MDF_TotalDamageValue"
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
                      "target": "{{Player Teams}}"
                    }
                  }
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
                      "operator": "Variables[0] (DOT_TriggerRatio) || Variables[1] (MDF_TotalDamageValue) || MUL || Constants[0] (4) || DIV || RETURN",
                      "displayLines": "((DOT_TriggerRatio * MDF_TotalDamageValue) / 4)",
                      "constants": [
                        4
                      ],
                      "variables": [
                        "DOT_TriggerRatio",
                        "MDF_TotalDamageValue"
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
                      "target": "{{Player Teams}}"
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Modifier is Added [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "<a class=\"gModGreen\" id=\"1476575085\">Enemy_W4_Manta_Virus_Mark</a>"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Copy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1476575085\">Enemy_W4_Manta_Virus_Mark</a>",
                  "variable": "MDF_AddDamageValue",
                  "target2": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variable2": "MDF_AddDamageValue"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-228290033\">ParamModifier</a>"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_TotalDamageValue",
                  "value": {
                    "operator": "Variables[0] (MDF_TotalDamageValue) || Variables[1] (MDF_AddDamageValue) || ADD || RETURN",
                    "displayLines": "(MDF_TotalDamageValue + MDF_AddDamageValue)",
                    "constants": [],
                    "variables": [
                      "MDF_TotalDamageValue",
                      "MDF_AddDamageValue"
                    ]
                  }
                },
                {
                  "name": "Define Modifier Variable",
                  "modifierName": null,
                  "value": {
                    "operator": "Variables[0] (MDF_LifeTime) || RETURN",
                    "displayLines": "MDF_LifeTime",
                    "constants": [],
                    "variables": [
                      "MDF_LifeTime"
                    ]
                  },
                  "valueType": "Duration"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "New Enemy Wave",
          "execute": [
            "Modifier Deletes Itself"
          ]
        },
        {
          "eventTrigger": "On Dispel/Cleanse",
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
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "BattleScore_Damage",
                    "compareType": "=",
                    "value2": 0
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1846479482\">W4_Manta_BattleScore2</a>"
                }
              ]
            }
          ]
        }
      ],
      "useEntitySnapshot": true,
      "description": "<span class=\"descriptionNumberColor\">MDF_TotalDamageValue</span> DMG is taken in the form of DoT over a certain number of turns. Wind Shear, Burn, Shock, and Bleed DoTs are received at the start of every turn. Immediately dispelled for this unit when \"Revel in Destruction\" state ends, negating this DoT.",
      "type": "Debuff",
      "effectName": "Black Tide Fever",
      "statusName": "Black Tide Fever"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1491117859\">Enemy_W4_Manta_Virus_Avatar</a>[<span class=\"descriptionNumberColor\">Black Tide Fever</span>]",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "modifierFlags": [
        "STAT_DOT",
        "CanBeAddedToServant",
        "CanListenServantCallback"
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "UI Display Event (On Entity)",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "popUpText": "\"Black Tide Fever\" dispelled"
            }
          ]
        },
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "BattleScore_Damage",
              "value": 1
            },
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1261127743\">Enemy_W2_Mecha02_02_TimeSlow</a>"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1670308834\">Enemy_W4_Manta_TimeSlow</a>"
                  }
                ]
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Fire",
                    "DamageFlat": {
                      "operator": "Variables[0] (MDF_TotalDamageValue) || Variables[1] (MDF_TriggerRatio) || MUL || Constants[0] (4) || DIV || RETURN",
                      "displayLines": "((MDF_TotalDamageValue * MDF_TriggerRatio) / 4)",
                      "constants": [
                        4
                      ],
                      "variables": [
                        "MDF_TotalDamageValue",
                        "MDF_TriggerRatio"
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
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Wind",
                    "DamageFlat": {
                      "operator": "Variables[0] (MDF_TotalDamageValue) || Variables[1] (MDF_TriggerRatio) || MUL || Constants[0] (4) || DIV || RETURN",
                      "displayLines": "((MDF_TotalDamageValue * MDF_TriggerRatio) / 4)",
                      "constants": [
                        4
                      ],
                      "variables": [
                        "MDF_TotalDamageValue",
                        "MDF_TriggerRatio"
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
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Thunder",
                    "DamageFlat": {
                      "operator": "Variables[0] (MDF_TotalDamageValue) || Variables[1] (MDF_TriggerRatio) || MUL || Constants[0] (4) || DIV || RETURN",
                      "displayLines": "((MDF_TotalDamageValue * MDF_TriggerRatio) / 4)",
                      "constants": [
                        4
                      ],
                      "variables": [
                        "MDF_TotalDamageValue",
                        "MDF_TriggerRatio"
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
                      "operator": "Variables[0] (MDF_TotalDamageValue) || Variables[1] (MDF_TriggerRatio) || MUL || Constants[0] (4) || DIV || RETURN",
                      "displayLines": "((MDF_TotalDamageValue * MDF_TriggerRatio) / 4)",
                      "constants": [
                        4
                      ],
                      "variables": [
                        "MDF_TotalDamageValue",
                        "MDF_TriggerRatio"
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
              ],
              "failed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Fire",
                    "DamageFlat": {
                      "operator": "Variables[0] (MDF_TotalDamageValue) || Variables[1] (MDF_TriggerRatio) || MUL || Constants[0] (4) || DIV || RETURN",
                      "displayLines": "((MDF_TotalDamageValue * MDF_TriggerRatio) / 4)",
                      "constants": [
                        4
                      ],
                      "variables": [
                        "MDF_TotalDamageValue",
                        "MDF_TriggerRatio"
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
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Wind",
                    "DamageFlat": {
                      "operator": "Variables[0] (MDF_TotalDamageValue) || Variables[1] (MDF_TriggerRatio) || MUL || Constants[0] (4) || DIV || RETURN",
                      "displayLines": "((MDF_TotalDamageValue * MDF_TriggerRatio) / 4)",
                      "constants": [
                        4
                      ],
                      "variables": [
                        "MDF_TotalDamageValue",
                        "MDF_TriggerRatio"
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
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Thunder",
                    "DamageFlat": {
                      "operator": "Variables[0] (MDF_TotalDamageValue) || Variables[1] (MDF_TriggerRatio) || MUL || Constants[0] (4) || DIV || RETURN",
                      "displayLines": "((MDF_TotalDamageValue * MDF_TriggerRatio) / 4)",
                      "constants": [
                        4
                      ],
                      "variables": [
                        "MDF_TotalDamageValue",
                        "MDF_TriggerRatio"
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
                      "operator": "Variables[0] (MDF_TotalDamageValue) || Variables[1] (MDF_TriggerRatio) || MUL || Constants[0] (4) || DIV || RETURN",
                      "displayLines": "((MDF_TotalDamageValue * MDF_TriggerRatio) / 4)",
                      "constants": [
                        4
                      ],
                      "variables": [
                        "MDF_TotalDamageValue",
                        "MDF_TriggerRatio"
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
          "eventTrigger": "Receiving Heal End [Owner]",
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
                "compareType": ">=",
                "value2": 1
              },
              "passed": [
                "Modifier Deletes Itself",
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Entity Type",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "type": "Enemy"
                  },
                  "failed": [
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
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "BattleScore_Damage",
                            "compareType": "=",
                            "value2": 0
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Level Entity}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1846479482\">W4_Manta_BattleScore2</a>"
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
          "eventTrigger": "When Stacking/Receiving Modifier"
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
                    "compareType": ">",
                    "value2": 0
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": ">=",
                    "value2": 1
                  }
                ]
              },
              "passed": [
                "Modifier Deletes Itself",
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Entity Type",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "type": "Enemy"
                  },
                  "failed": [
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
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "BattleScore_Damage",
                            "compareType": "=",
                            "value2": 0
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Level Entity}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1846479482\">W4_Manta_BattleScore2</a>"
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
          "eventTrigger": "Custom Event",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "BattleScore_Damage",
              "value": 1
            },
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1261127743\">Enemy_W2_Mecha02_02_TimeSlow</a>"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1670308834\">Enemy_W4_Manta_TimeSlow</a>"
                  }
                ]
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Fire",
                    "DamageFlat": {
                      "operator": "Variables[0] (MDF_TotalDamageValue) || Variables[1] (MDF_TriggerRatio) || MUL || Constants[0] (4) || DIV || RETURN",
                      "displayLines": "((MDF_TotalDamageValue * MDF_TriggerRatio) / 4)",
                      "constants": [
                        4
                      ],
                      "variables": [
                        "MDF_TotalDamageValue",
                        "MDF_TriggerRatio"
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
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Wind",
                    "DamageFlat": {
                      "operator": "Variables[0] (MDF_TotalDamageValue) || Variables[1] (MDF_TriggerRatio) || MUL || Constants[0] (4) || DIV || RETURN",
                      "displayLines": "((MDF_TotalDamageValue * MDF_TriggerRatio) / 4)",
                      "constants": [
                        4
                      ],
                      "variables": [
                        "MDF_TotalDamageValue",
                        "MDF_TriggerRatio"
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
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Thunder",
                    "DamageFlat": {
                      "operator": "Variables[0] (MDF_TotalDamageValue) || Variables[1] (MDF_TriggerRatio) || MUL || Constants[0] (4) || DIV || RETURN",
                      "displayLines": "((MDF_TotalDamageValue * MDF_TriggerRatio) / 4)",
                      "constants": [
                        4
                      ],
                      "variables": [
                        "MDF_TotalDamageValue",
                        "MDF_TriggerRatio"
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
                      "operator": "Variables[0] (MDF_TotalDamageValue) || Variables[1] (MDF_TriggerRatio) || MUL || Constants[0] (4) || DIV || RETURN",
                      "displayLines": "((MDF_TotalDamageValue * MDF_TriggerRatio) / 4)",
                      "constants": [
                        4
                      ],
                      "variables": [
                        "MDF_TotalDamageValue",
                        "MDF_TriggerRatio"
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
              ],
              "failed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Fire",
                    "DamageFlat": {
                      "operator": "Variables[0] (DOT_TriggerRatio) || Variables[1] (MDF_TotalDamageValue) || MUL || Constants[0] (4) || DIV || RETURN",
                      "displayLines": "((DOT_TriggerRatio * MDF_TotalDamageValue) / 4)",
                      "constants": [
                        4
                      ],
                      "variables": [
                        "DOT_TriggerRatio",
                        "MDF_TotalDamageValue"
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
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Thunder",
                    "DamageFlat": {
                      "operator": "Variables[0] (DOT_TriggerRatio) || Variables[1] (MDF_TotalDamageValue) || MUL || Constants[0] (4) || DIV || RETURN",
                      "displayLines": "((DOT_TriggerRatio * MDF_TotalDamageValue) / 4)",
                      "constants": [
                        4
                      ],
                      "variables": [
                        "DOT_TriggerRatio",
                        "MDF_TotalDamageValue"
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
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Wind",
                    "DamageFlat": {
                      "operator": "Variables[0] (DOT_TriggerRatio) || Variables[1] (MDF_TotalDamageValue) || MUL || Constants[0] (4) || DIV || RETURN",
                      "displayLines": "((DOT_TriggerRatio * MDF_TotalDamageValue) / 4)",
                      "constants": [
                        4
                      ],
                      "variables": [
                        "DOT_TriggerRatio",
                        "MDF_TotalDamageValue"
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
                      "operator": "Variables[0] (DOT_TriggerRatio) || Variables[1] (MDF_TotalDamageValue) || MUL || Constants[0] (4) || DIV || RETURN",
                      "displayLines": "((DOT_TriggerRatio * MDF_TotalDamageValue) / 4)",
                      "constants": [
                        4
                      ],
                      "variables": [
                        "DOT_TriggerRatio",
                        "MDF_TotalDamageValue"
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
        },
        {
          "eventTrigger": "When Modifier is Added [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "<a class=\"gModGreen\" id=\"1476575085\">Enemy_W4_Manta_Virus_Mark</a>"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Copy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1476575085\">Enemy_W4_Manta_Virus_Mark</a>",
                  "variable": "MDF_AddDamageValue",
                  "target2": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variable2": "MDF_AddDamageValue"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-228290033\">ParamModifier</a>"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_TotalDamageValue",
                  "value": {
                    "operator": "Variables[0] (MDF_TotalDamageValue) || Variables[1] (MDF_AddDamageValue) || ADD || RETURN",
                    "displayLines": "(MDF_TotalDamageValue + MDF_AddDamageValue)",
                    "constants": [],
                    "variables": [
                      "MDF_TotalDamageValue",
                      "MDF_AddDamageValue"
                    ]
                  }
                },
                {
                  "name": "Define Modifier Variable",
                  "modifierName": null,
                  "value": {
                    "operator": "Variables[0] (MDF_LifeTime) || RETURN",
                    "displayLines": "MDF_LifeTime",
                    "constants": [],
                    "variables": [
                      "MDF_LifeTime"
                    ]
                  },
                  "valueType": "Duration"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "New Enemy Wave",
          "execute": [
            "Modifier Deletes Itself"
          ]
        },
        {
          "eventTrigger": "On Dispel/Cleanse",
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
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "BattleScore_Damage",
                    "compareType": "=",
                    "value2": 0
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1846479482\">W4_Manta_BattleScore2</a>"
                }
              ]
            }
          ]
        }
      ],
      "useEntitySnapshot": true,
      "description": "<span class=\"descriptionNumberColor\">MDF_TotalDamageValue</span> DMG is taken in the form of DoT over a certain number of turns. Wind Shear, Burn, Shock, and Bleed DoTs are received at the start of every turn. Immediately dispelled for this unit when HP is fully restored, negating this DoT.",
      "type": "Debuff",
      "effectName": "Black Tide Fever",
      "statusName": "Black Tide Fever"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1476575085\">Enemy_W4_Manta_Virus_Mark</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1053900391\">Enemy_W4_Manta_Virus_Transfer</a>",
      "execute": [
        {
          "eventTrigger": "Take Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Damage Tags",
                    "damageTag": [
                      "Manta's Virus"
                    ],
                    "invertCondition": true
                  },
                  {
                    "name": "Attack Type",
                    "attackTypes": [
                      "True DMG"
                    ],
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
                  "name": "Define Custom Variable with Damage Data",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "MDF_ConstFinalDamage",
                  "value": "AttackData_ConstFinalDamage",
                  "context": "ContextModifier"
                },
                {
                  "name": "Define Custom Variable with Damage Data",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "MDF_FinalDamageMax",
                  "value": "AttackData_FinalDamageMax",
                  "context": "ContextModifier"
                },
                {
                  "name": "Define Custom Variable with Damage Data",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "MDF_FinalDamage",
                  "context": "ContextModifier"
                },
                {
                  "name": "Define Custom Variable with Damage Data",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "MDF_ShieldDamage",
                  "value": "Result_ShieldDamage",
                  "context": "ContextModifier"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_FinalDamageMax",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_TransferDamage",
                      "value": {
                        "operator": "Variables[0] (MDF_ConstFinalDamage) || Variables[1] (MDF_ShieldDamage) || ADD || Constants[0] (1) || Variables[2] (MDF_TransferRatio) || SUB || DIV || Variables[0] (MDF_ConstFinalDamage) || Variables[1] (MDF_ShieldDamage) || ADD || SUB || RETURN",
                        "displayLines": "(((MDF_ConstFinalDamage + MDF_ShieldDamage) / (1 - MDF_TransferRatio)) - (MDF_ConstFinalDamage + MDF_ShieldDamage))",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "MDF_ConstFinalDamage",
                          "MDF_ShieldDamage",
                          "MDF_TransferRatio"
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_TransferDamage",
                      "value": {
                        "operator": "Variables[0] (MIN) || Variables[1] (MDF_ConstFinalDamage) || Variables[2] (MDF_ShieldDamage) || ADD || Constants[0] (1) || Variables[3] (MDF_TransferRatio) || SUB || DIV || Variables[4] (MDF_FinalDamageMax) || PARAM_2 || FUNCTION || Variables[1] (MDF_ConstFinalDamage) || Variables[2] (MDF_ShieldDamage) || ADD || SUB || RETURN",
                        "displayLines": "(&nbsp;<span class=\"descriptionFunctionColor\">MIN</span>(((MDF_ConstFinalDamage + MDF_ShieldDamage) / (1 - MDF_TransferRatio)), MDF_FinalDamageMax) - (MDF_ConstFinalDamage + MDF_ShieldDamage))",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "MIN",
                          "MDF_ConstFinalDamage",
                          "MDF_ShieldDamage",
                          "MDF_TransferRatio",
                          "MDF_FinalDamageMax"
                        ]
                      }
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
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "MDF_ConstFinalDamage",
                        "compareType": "<",
                        "value2": 0
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "MDF_TransferDamage",
                        "compareType": ">",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-1491117859\">Enemy_W4_Manta_Virus_Avatar</a>[<span class=\"descriptionNumberColor\">Black Tide Fever</span>]"
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-1447914838\">Enemy_W4_Manta_Virus_Monster</a>[<span class=\"descriptionNumberColor\">Black Tide Fever</span>]"
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
                          "modifier": "<a class=\"gModGreen\" id=\"1476575085\">Enemy_W4_Manta_Virus_Mark</a>",
                          "valuePerStack": {
                            "MDF_AddDamageValue": {
                              "operator": "Variables[0] (MDF_TransferDamage) || RETURN",
                              "displayLines": "MDF_TransferDamage",
                              "constants": [],
                              "variables": [
                                "MDF_TransferDamage"
                              ]
                            },
                            "MDF_TriggerRatio": {
                              "operator": "Variables[0] (MDF_TriggerRatio) || RETURN",
                              "displayLines": "MDF_TriggerRatio",
                              "constants": [],
                              "variables": [
                                "MDF_TriggerRatio"
                              ]
                            }
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Is Entity Type",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "type": "Enemy"
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-1447914838\">Enemy_W4_Manta_Virus_Monster</a>[<span class=\"descriptionNumberColor\">Black Tide Fever</span>]",
                              "duration": {
                                "operator": "Variables[0] (MDF_LifeTime) || RETURN",
                                "displayLines": "MDF_LifeTime",
                                "constants": [],
                                "variables": [
                                  "MDF_LifeTime"
                                ]
                              },
                              "valuePerStack": {
                                "MDF_TotalDamageValue": {
                                  "operator": "Variables[0] (MDF_TransferDamage) || RETURN",
                                  "displayLines": "MDF_TransferDamage",
                                  "constants": [],
                                  "variables": [
                                    "MDF_TransferDamage"
                                  ]
                                },
                                "MDF_LifeTime": {
                                  "operator": "Variables[0] (MDF_LifeTime) || RETURN",
                                  "displayLines": "MDF_LifeTime",
                                  "constants": [],
                                  "variables": [
                                    "MDF_LifeTime"
                                  ]
                                },
                                "MDF_TriggerRatio": {
                                  "operator": "Variables[0] (MDF_TriggerRatio) || RETURN",
                                  "displayLines": "MDF_TriggerRatio",
                                  "constants": [],
                                  "variables": [
                                    "MDF_TriggerRatio"
                                  ]
                                }
                              },
                              "casterAssign": "TargetSelf"
                            }
                          ],
                          "failed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-1491117859\">Enemy_W4_Manta_Virus_Avatar</a>[<span class=\"descriptionNumberColor\">Black Tide Fever</span>]",
                              "duration": {
                                "operator": "Variables[0] (MDF_LifeTime) || RETURN",
                                "displayLines": "MDF_LifeTime",
                                "constants": [],
                                "variables": [
                                  "MDF_LifeTime"
                                ]
                              },
                              "valuePerStack": {
                                "MDF_TotalDamageValue": {
                                  "operator": "Variables[0] (MDF_TransferDamage) || RETURN",
                                  "displayLines": "MDF_TransferDamage",
                                  "constants": [],
                                  "variables": [
                                    "MDF_TransferDamage"
                                  ]
                                },
                                "MDF_LifeTime": {
                                  "operator": "Variables[0] (MDF_LifeTime) || RETURN",
                                  "displayLines": "MDF_LifeTime",
                                  "constants": [],
                                  "variables": [
                                    "MDF_LifeTime"
                                  ]
                                },
                                "MDF_TriggerRatio": {
                                  "operator": "Variables[0] (MDF_TriggerRatio) || RETURN",
                                  "displayLines": "MDF_TriggerRatio",
                                  "constants": [],
                                  "variables": [
                                    "MDF_TriggerRatio"
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
              ]
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_TransferRatio) || RETURN",
                "displayLines": "MDF_TransferRatio",
                "constants": [],
                "variables": [
                  "MDF_TransferRatio"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_TransferRatio",
        "MDF_LifeTime",
        "MDF_TriggerRatio"
      ],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1741196770\">Enemy_W4_Manta_Charge</a>[<span class=\"descriptionNumberColor\">Yearning for a Shared Dance</span>]",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "AIFlag",
              "value": 1
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
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
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "Uses \"Embrace From the Waves\" in every action. Dispelled when Weakness is broken.",
      "type": "Other",
      "effectName": "Yearning for a Shared Dance",
      "statusName": "Yearning for a Shared Dance"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__233383223\">Enemy_W4_Manta_PassiveUp_Sub</a>[<span class=\"descriptionNumberColor\">Revel in Destruction</span>]",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1447914838\">Enemy_W4_Manta_Virus_Monster</a>[<span class=\"descriptionNumberColor\">Black Tide Fever</span>]"
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1447914838\">Enemy_W4_Manta_Virus_Monster</a>[<span class=\"descriptionNumberColor\">Black Tide Fever</span>]"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Entity Type",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "type": "Enemy"
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value": "SW_Minion01_03"
                  },
                  {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value": "RLElite"
                  }
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Owner]: Start"
        },
        {
          "eventTrigger": "Ability Use [Owner]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value": "SW_Minion01_03"
                  },
                  {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value": "RLElite"
                  }
                ]
              }
            }
          ]
        }
      ],
      "description": "Number of hits to advance action decreases. When taking DMG or using certain abilities to deal DMG, some DMG will be taken in the form of \"Black Tide Fever\" over a specific number of turns. When the \"Revel in Destruction\" countdown's turn begins, all enemy units will have their \"Revel in Destruction\" state dispelled.",
      "type": "Other",
      "effectName": "Revel in Destruction",
      "statusName": "Revel in Destruction"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-431422946\">Enemy_W4_Manta_PassiveUp</a>",
      "stackData": [
        "MDF_NewMaxLayer",
        "MDF_TransferRatio",
        "MDF_LifeTime",
        "MDF_TriggerRatio"
      ],
      "latentQueue": [],
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Sequence",
            "Sequence": [
              {
                "name": "Target Name",
                "target": "{{Enemy Team All(with Unselectable)}}"
              },
              {
                "name": "Target Filter",
                "conditions": {
                  "name": "Has Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1650122283\">Enemy_W4_Manta_Passive</a>[<span class=\"descriptionNumberColor\">Respite By The Waters</span>]"
                }
              }
            ]
          },
          "modifier": "<a class=\"gModGreen\" id=\"233383223\">Enemy_W4_Manta_PassiveUp_Sub</a>[<span class=\"descriptionNumberColor\">Revel in Destruction</span>]",
          "haloStatus": true,
          "valuePerStack": {
            "MDF_NewMaxLayer": {
              "operator": "Variables[0] (MDF_NewMaxLayer) || RETURN",
              "displayLines": "MDF_NewMaxLayer",
              "constants": [],
              "variables": [
                "MDF_NewMaxLayer"
              ]
            }
          }
        },
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Sequence",
            "Sequence": [
              {
                "name": "Target Name",
                "target": "{{Enemy Team All(with Unselectable)}}"
              },
              {
                "name": "Target Filter",
                "conditions": {
                  "name": "Has Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1650122283\">Enemy_W4_Manta_Passive</a>[<span class=\"descriptionNumberColor\">Respite By The Waters</span>]"
                }
              }
            ]
          },
          "modifier": "<a class=\"gModGreen\" id=\"1053900391\">Enemy_W4_Manta_Virus_Transfer</a>",
          "haloStatus": true,
          "valuePerStack": {
            "MDF_TransferRatio": {
              "operator": "Variables[0] (MDF_TransferRatio) || RETURN",
              "displayLines": "MDF_TransferRatio",
              "constants": [],
              "variables": [
                "MDF_TransferRatio"
              ]
            },
            "MDF_LifeTime": {
              "operator": "Variables[0] (MDF_LifeTime) || RETURN",
              "displayLines": "MDF_LifeTime",
              "constants": [],
              "variables": [
                "MDF_LifeTime"
              ]
            },
            "MDF_TriggerRatio": {
              "operator": "Variables[0] (MDF_TriggerRatio) || RETURN",
              "displayLines": "MDF_TriggerRatio",
              "constants": [],
              "variables": [
                "MDF_TriggerRatio"
              ]
            }
          }
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1079670411\">Enemy_W4_Manta_Passive_Insert_Mark</a>",
      "stackData": [],
      "latentQueue": [
        "Manta_Passive"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1823230905\">Enemy_W4_Manta_Passive_Insert</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Add Ability",
              "abilityName": "Monster_W4_Manta_Passive_Insert"
            },
            {
              "name": "Inject Ability Use",
              "condition": {
                "name": "Insert Ability Condition",
                "type": "AbilityOwnerInsertUnusedCount",
                "typeValue": 1
              },
              "conditionActive": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1823230905\">Enemy_W4_Manta_Passive_Insert</a>"
              },
              "abilityName": "Monster_W4_Manta_Passive_Insert",
              "priorityTag": "MonsterBuffSelf",
              "canHitNonTargets": true,
              "allowAbilityTriggers": false
            }
          ]
        },
        {
          "eventTrigger": "Entity Death [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1650122283\">Enemy_W4_Manta_Passive</a>[<span class=\"descriptionNumberColor\">Respite By The Waters</span>]"
              },
              "passed": [
                {
                  "name": "Reconstruct Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All(with Unselectable)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1650122283\">Enemy_W4_Manta_Passive</a>[<span class=\"descriptionNumberColor\">Respite By The Waters</span>]",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Modifier_Callback_Variable",
                    "compareType": "=",
                    "value2": 1
                  },
                  "execute": [],
                  "failed": [
                    "Modifier Deletes Itself"
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
      "for": "<a class=\"gModGreen\" id=\"mod__1650122283\">Enemy_W4_Manta_Passive</a>[<span class=\"descriptionNumberColor\">Respite By The Waters</span>]",
      "stackType": "Replace",
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
          "eventTrigger": "When Modifier Destroyed/Removed"
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "Layer",
              "variableName": "MDF_Count",
              "multiplier": 1
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": null,
                "compareType": ">",
                "value2": {
                  "operator": "Variables[0] (MDF_Count) || Constants[0] (1) || ADD || RETURN",
                  "displayLines": "(MDF_Count + 1)",
                  "constants": [
                    1
                  ],
                  "variables": [
                    "MDF_Count"
                  ]
                },
                "valueType": "MaxLayer"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"233383223\">Enemy_W4_Manta_PassiveUp_Sub</a>[<span class=\"descriptionNumberColor\">Revel in Destruction</span>]"
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
                        "operator": "Variables[0] (MDF_NewMaxLayer) || RETURN",
                        "displayLines": "MDF_NewMaxLayer",
                        "constants": [],
                        "variables": [
                          "MDF_NewMaxLayer"
                        ]
                      },
                      "state": "Normal"
                    }
                  ],
                  "failed": [
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
                  ]
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": null,
                    "compareType": "=",
                    "value2": {
                      "operator": "Variables[0] (MDF_Count) || Constants[0] (1) || ADD || RETURN",
                      "displayLines": "(MDF_Count + 1)",
                      "constants": [
                        1
                      ],
                      "variables": [
                        "MDF_Count"
                      ]
                    },
                    "valueType": "MaxLayer"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"233383223\">Enemy_W4_Manta_PassiveUp_Sub</a>[<span class=\"descriptionNumberColor\">Revel in Destruction</span>]"
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
                            "operator": "Variables[0] (MDF_NewMaxLayer) || RETURN",
                            "displayLines": "MDF_NewMaxLayer",
                            "constants": [],
                            "variables": [
                              "MDF_NewMaxLayer"
                            ]
                          },
                          "state": "Normal"
                        }
                      ],
                      "failed": [
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
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Monster Rank",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "compareType": "=",
                        "value2": 3
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Check Boolean Value",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value": "RLElite"
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Check Boolean Value",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value": "SW_Minion01_03"
                          }
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_Trigger",
                      "value": 1
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1823230905\">Enemy_W4_Manta_Passive_Insert</a>"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"233383223\">Enemy_W4_Manta_PassiveUp_Sub</a>[<span class=\"descriptionNumberColor\">Revel in Destruction</span>]"
                      },
                      "passed": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "value": {
                            "operator": "Variables[0] (MDF_NewMaxLayer) || RETURN",
                            "displayLines": "MDF_NewMaxLayer",
                            "constants": [],
                            "variables": [
                              "MDF_NewMaxLayer"
                            ]
                          },
                          "entityClass": "Enemy",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "maximum": {
                            "operator": "Variables[0] (MDF_NewMaxLayer) || RETURN",
                            "displayLines": "MDF_NewMaxLayer",
                            "constants": [],
                            "variables": [
                              "MDF_NewMaxLayer"
                            ]
                          },
                          "state": "Active"
                        }
                      ],
                      "failed": [
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
                    "value1": "MDF_Trigger",
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
                  },
                  {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Skill Type",
                        "skillType": "Basic ATK"
                      },
                      {
                        "name": "Skill Type",
                        "skillType": "Skill"
                      },
                      {
                        "name": "Skill Type",
                        "skillType": "Ultimate"
                      },
                      {
                        "name": "Skill Type",
                        "skillType": "Memosprite"
                      }
                    ]
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1035214462\">Enemy_SW_Minion01_03_CommandMark</a>[<span class=\"descriptionNumberColor\">Mirage Rush</span>]",
                    "invertCondition": true
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
                  "modifier": "<a class=\"gModGreen\" id=\"1650122283\">Enemy_W4_Manta_Passive</a>[<span class=\"descriptionNumberColor\">Respite By The Waters</span>]"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Modifier is Added [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"1079670411\">Enemy_W4_Manta_Passive_Insert_Mark</a>"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1035214462\">Enemy_SW_Minion01_03_CommandMark</a>[<span class=\"descriptionNumberColor\">Mirage Rush</span>]",
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Update Displayed Energy Bar",
                  "entityClass": "Enemy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "trigger": "SpEff_Trigger"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_Trigger",
                  "value": 0
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"233383223\">Enemy_W4_Manta_PassiveUp_Sub</a>[<span class=\"descriptionNumberColor\">Revel in Destruction</span>]"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1650122283\">Enemy_W4_Manta_Passive</a>[<span class=\"descriptionNumberColor\">Respite By The Waters</span>]",
                      "addStacksPerTrigger": {
                        "operator": "Variables[0] (MDF_NewMaxLayer) || INVERT || RETURN",
                        "displayLines": "-MDF_NewMaxLayer",
                        "constants": [],
                        "variables": [
                          "MDF_NewMaxLayer"
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1650122283\">Enemy_W4_Manta_Passive</a>[<span class=\"descriptionNumberColor\">Respite By The Waters</span>]",
                      "addStacksPerTrigger": {
                        "operator": "Variables[0] (MDF_MaxLayer) || INVERT || RETURN",
                        "displayLines": "-MDF_MaxLayer",
                        "constants": [],
                        "variables": [
                          "MDF_MaxLayer"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-228290033\">ParamModifier</a>"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "<a class=\"gModGreen\" id=\"233383223\">Enemy_W4_Manta_PassiveUp_Sub</a>[<span class=\"descriptionNumberColor\">Revel in Destruction</span>]"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Copy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"233383223\">Enemy_W4_Manta_PassiveUp_Sub</a>[<span class=\"descriptionNumberColor\">Revel in Destruction</span>]",
                  "variable": "MDF_NewMaxLayer",
                  "target2": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variable2": "MDF_NewMaxLayer"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_NewMaxLayer",
                  "value": {
                    "operator": "Variables[0] (MDF_MaxLayer) || Variables[1] (MDF_NewMaxLayer) || SUB || RETURN",
                    "displayLines": "(MDF_MaxLayer - MDF_NewMaxLayer)",
                    "constants": [],
                    "variables": [
                      "MDF_MaxLayer",
                      "MDF_NewMaxLayer"
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
                    "value1": null,
                    "compareType": "<",
                    "value2": {
                      "operator": "Variables[0] (MDF_NewMaxLayer) || RETURN",
                      "displayLines": "MDF_NewMaxLayer",
                      "constants": [],
                      "variables": [
                        "MDF_NewMaxLayer"
                      ]
                    },
                    "valueType": "Layer"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1650122283\">Enemy_W4_Manta_Passive</a>[<span class=\"descriptionNumberColor\">Respite By The Waters</span>]",
                      "stackLimit": {
                        "operator": "Variables[0] (MDF_NewMaxLayer) || RETURN",
                        "displayLines": "MDF_NewMaxLayer",
                        "constants": [],
                        "variables": [
                          "MDF_NewMaxLayer"
                        ]
                      },
                      "addStacksPerTrigger": 0
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1650122283\">Enemy_W4_Manta_Passive</a>[<span class=\"descriptionNumberColor\">Respite By The Waters</span>]",
                      "stackLimit": {
                        "operator": "Variables[0] (MDF_NewMaxLayer) || RETURN",
                        "displayLines": "MDF_NewMaxLayer",
                        "constants": [],
                        "variables": [
                          "MDF_NewMaxLayer"
                        ]
                      },
                      "addStacksPerTrigger": {
                        "operator": "Variables[0] (MDF_Count) || Variables[1] (MDF_NewMaxLayer) || SUB || RETURN",
                        "displayLines": "(MDF_Count - MDF_NewMaxLayer)",
                        "constants": [],
                        "variables": [
                          "MDF_Count",
                          "MDF_NewMaxLayer"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "entityClass": "Enemy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"1035214462\">Enemy_SW_Minion01_03_CommandMark</a>[<span class=\"descriptionNumberColor\">Mirage Rush</span>]"
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
                  "modifier": "<a class=\"gModGreen\" id=\"1650122283\">Enemy_W4_Manta_Passive</a>[<span class=\"descriptionNumberColor\">Respite By The Waters</span>]",
                  "addStacksPerTrigger": {
                    "operator": "Variables[0] (MDF_Count) || INVERT || RETURN",
                    "displayLines": "-MDF_Count",
                    "constants": [],
                    "variables": [
                      "MDF_Count"
                    ]
                  }
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "entityClass": "Enemy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "assignState": "True",
                  "state": "Disable"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Losing Modifier [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "<a class=\"gModGreen\" id=\"233383223\">Enemy_W4_Manta_PassiveUp_Sub</a>[<span class=\"descriptionNumberColor\">Revel in Destruction</span>]"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1650122283\">Enemy_W4_Manta_Passive</a>[<span class=\"descriptionNumberColor\">Respite By The Waters</span>]",
                  "stackLimit": {
                    "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                    "displayLines": "MDF_MaxLayer",
                    "constants": [],
                    "variables": [
                      "MDF_MaxLayer"
                    ]
                  },
                  "addStacksPerTrigger": 0
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "entityClass": "Enemy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_MaxLayer"
      ],
      "latentQueue": [],
      "description": "Advances action after taking a certain number of attacks from Basic ATK, Skill, Ultimate, or Memosprite Skill.",
      "type": "Other",
      "statusName": "Respite By The Waters",
      "addStacksPerTrigger": 1
    }
  ],
  "references": []
}