const entityPageType = "char"
const compositeAbilityObject = {
  "fullCharacterName": "Aglaea",
  "trimCharacterName": "Aglaea",
  "summonName": "Garmentmaker",
  "trimSummonName": "Garmentmaker",
  "abilityList": [
    "Aglaea_Modifiers",
    "Aglaea_LocalPlayer_Aglaea_TechniqueUsage_TriggerHitMonster",
    "Aglaea_LocalPlayer_StandardAbility_AttackBreak",
    "Aglaea_LocalPlayer_Aglaea_TechniqueUsage",
    "Aglaea_LocalPlayer_Aglaea_NormalAtk01",
    "Aglaea_Aglaea_TechniqueInLevel",
    "Aglaea_Aglaea_Bonus_Camera",
    "Aglaea_Aglaea_Bonus",
    "Aglaea_Aglaea_PassiveAbility01",
    "Aglaea_Aglaea_Ability11_Part02",
    "Aglaea_Aglaea_Ability11_Part01",
    "Aglaea_Aglaea_Ability21_Part02",
    "Aglaea_Aglaea_Ability21_Part01",
    "Aglaea_Aglaea_Ability03_Part02",
    "Aglaea_Aglaea_Ability03_Part01",
    "Aglaea_Aglaea_Ability03_EnterReady",
    "Aglaea_Aglaea_Ability02_Part02",
    "Aglaea_Aglaea_Ability02_Part01",
    "Aglaea_Aglaea_Ability01_Part02",
    "Aglaea_Aglaea_Ability01_Part01",
    "Aglaea_Functions",
    "Aglaea_BE_BattleEvents",
    "Garmentmaker_Modifiers",
    "Garmentmaker_Servant_AglaeaServant_DeathRattle",
    "Garmentmaker_Servant_AglaeaServant_BattleCry",
    "Garmentmaker_Servant_Aglaea_PassiveAbility01_ForceKill_Insert",
    "Garmentmaker_Servant_AglaeaServant_Ability11_Together_Part02",
    "Garmentmaker_Servant_AglaeaServant_Ability11_Together_Part01",
    "Garmentmaker_Servant_AglaeaServant_Passive",
    "Garmentmaker_Servant_AglaeaServant_Ability11_Part02",
    "Garmentmaker_Servant_AglaeaServant_Ability11_Part01"
  ],
  "abilityObject": {
    "Aglaea_Modifiers": {
      "fileName": "Aglaea_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__912484928\">ADV_StageAbility_Maze_AglaeaForEnemy</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-913552621\">ADV_StageAbility_Maze_Aglaea_Hit</a>",
          "counter": 1,
          "stackType": "Replace",
          "modifierFlags": [
            "LoopHit"
          ],
          "onApplication": [
            "Deleted bullshit"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-285871063\">ADV_StageAbility_Maze_Aglaea</a>",
          "counter": 1,
          "stackType": "Merge"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1330366864\">Aglaea_Eidolon6_Effect</a>[<span class=\"descriptionNumberColor\">Fluctuate in the Tapestry of Fates</span>]",
          "description": "Lightning RES PEN increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "statusName": "Fluctuate in the Tapestry of Fates",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Damage Tags",
                    "damageTag": [
                      "Joint-Attack"
                    ]
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1952576234\">Aglaea_Eidolon6_SpeedValue</a>"
                    },
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                          "value": "MDF_PropertyValue2"
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceLightningPEN</span>&nbsp;",
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
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1952576234\">Aglaea_Eidolon6_SpeedValue</a>"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_PropertyValue2",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Update Modifier Description",
                      "popUpText": "Increases Lightning RES PEN by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span> and DMG dealt by Joint ATK by <span class=\"descriptionNumberColor\">MDF_PropertyValue2</span>."
                    }
                  ],
                  "failed": [
                    {
                      "name": "Update Modifier Description",
                      "popUpText": "Lightning RES PEN increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>."
                    }
                  ]
                }
              ]
            }
          ],
          "abilityValueChange": [
            {
              "name": "Ability Value Changes",
              "variableName": "&nbsp;<span class=\"descriptionNumberColor\">Speed</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "whenValueChanges": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1952576234\">Aglaea_Eidolon6_SpeedValue</a>"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_PropertyValue2",
                        "compareType": ">",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Update Modifier Description",
                          "popUpText": "Increases Lightning RES PEN by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span> and DMG dealt by Joint ATK by <span class=\"descriptionNumberColor\">MDF_PropertyValue2</span>."
                        }
                      ],
                      "failed": [
                        {
                          "name": "Update Modifier Description",
                          "popUpText": "Lightning RES PEN increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>."
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "name": "Ability Value Changes",
              "variableName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "whenValueChanges": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1952576234\">Aglaea_Eidolon6_SpeedValue</a>"
                    }
                  ]
                }
              ]
            },
            {
              "name": "Ability Value Changes",
              "variableName": "&nbsp;<span class=\"descriptionNumberColor\">SPDFlat</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "whenValueChanges": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1952576234\">Aglaea_Eidolon6_SpeedValue</a>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1027471092\">Aglaea_Eidolon2_Effect</a>[<span class=\"descriptionNumberColor\">Sail on the Raft of Eyelids</span>]",
          "stackType": "Replace",
          "description": "When dealing DMG, ignores <span class=\"descriptionNumberColor\">_IgnoreDefenceRatioTotal</span> of the target's DEF.",
          "type": "Buff",
          "statusName": "Sail on the Raft of Eyelids",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Defender",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                      "value": "(-1 * _IgnoreDefenceRatioTotal)"
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
                  "valueType": "Layer",
                  "variableName": "_Layer",
                  "multiplier": 1
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_IgnoreDefenceRatioTotal",
                  "value": {
                    "operator": "Variables[0] (_Layer) || Variables[1] (_IgnoreDefenceRatio) || MUL || RETURN",
                    "displayLines": "(_Layer * _IgnoreDefenceRatio)",
                    "constants": [],
                    "variables": [
                      "_Layer",
                      "_IgnoreDefenceRatio"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-184277426\">Aglaea_Eidolon2_Listen</a>",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "ListenBattleEventSkill"
          ],
          "execute": [
            {
              "eventTrigger": "Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of",
                    "of": {
                      "name": "Target Name",
                      "target": "{{Caster}} + {{Caster's Memosprite}}"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "mustBeAlive2": true
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}} + {{Caster's Memosprite}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1027471092\">Aglaea_Eidolon2_Effect</a>[<span class=\"descriptionNumberColor\">Sail on the Raft of Eyelids</span>]",
                      "stackLimit": {
                        "operator": "Variables[0] (3) || RETURN",
                        "displayLines": "3",
                        "constants": [],
                        "variables": [
                          3
                        ]
                      },
                      "valuePerStack": {
                        "_IgnoreDefenceRatio": {
                          "operator": "Variables[0] (0.14) || RETURN",
                          "displayLines": "0.14",
                          "constants": [],
                          "variables": [
                            0.14
                          ]
                        }
                      },
                      "addStacksPerTrigger": 1
                    },
                    {
                      "name": "Define Custom Variable with Modifier Values",
                      "valueType": "Layer",
                      "variableName": "ModifierLayers",
                      "modifierName": "<a class=\"gModGreen\" id=\"-1027471092\">Aglaea_Eidolon2_Effect</a>[<span class=\"descriptionNumberColor\">Sail on the Raft of Eyelids</span>]",
                      "multiplier": 1
                    }
                  ],
                  "failed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}} + {{Caster's Memosprite}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1027471092\">Aglaea_Eidolon2_Effect</a>[<span class=\"descriptionNumberColor\">Sail on the Raft of Eyelids</span>]"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Injected Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of",
                    "of": {
                      "name": "Target Name",
                      "target": "{{Caster}} + {{Caster's Memosprite}}"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "mustBeAlive2": true
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}} + {{Caster's Memosprite}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1027471092\">Aglaea_Eidolon2_Effect</a>[<span class=\"descriptionNumberColor\">Sail on the Raft of Eyelids</span>]",
                      "stackLimit": {
                        "operator": "Variables[0] (3) || RETURN",
                        "displayLines": "3",
                        "constants": [],
                        "variables": [
                          3
                        ]
                      },
                      "valuePerStack": {
                        "_IgnoreDefenceRatio": {
                          "operator": "Variables[0] (0.14) || RETURN",
                          "displayLines": "0.14",
                          "constants": [],
                          "variables": [
                            0.14
                          ]
                        }
                      },
                      "addStacksPerTrigger": 1
                    },
                    {
                      "name": "Define Custom Variable with Modifier Values",
                      "valueType": "Layer",
                      "variableName": "ModifierLayers",
                      "modifierName": "<a class=\"gModGreen\" id=\"-1027471092\">Aglaea_Eidolon2_Effect</a>[<span class=\"descriptionNumberColor\">Sail on the Raft of Eyelids</span>]",
                      "multiplier": 1
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__66782842\">Memosprite_Aglaea_Ability03_Summon</a>",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "Endurance",
            500
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "AITag",
                  "variableName": "DamageCarry",
                  "value": 0
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1647958272\">Aglaea_Ability03_Servant_PointB3</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Got a Kill [Owner]"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1372388410\">Aglaea_Ability03_PointB3</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Got a Kill [Owner]"
            },
            {
              "eventTrigger": "Attack Action Completed [Owner]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster's Memosprite}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1647958272\">Aglaea_Ability03_Servant_PointB3</a>"
                },
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1389166029\">Aglaea_Ability03_PointB2</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-892037211\">Memosprite_Aglaea_Ability11_Mark</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Injected Ability Use [Owner]: End",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-952843319\">Aglaea_Ability11_Mark</a>",
          "stackType": "ReplaceByCaster"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-498968511\">Aglaea_Ability03_Sub</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_EnergyReduce",
                  "value": 0
                },
                {
                  "name": "Update Ability Enhance Button",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "display": "Hide",
                  "abilityName": "Basic ATK"
                },
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
                  "name": "Update Ability Binding",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster's Memosprite}}"
                  },
                  "abilityName": "Skill01",
                  "skillSlot": "Basic ATK"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster's Memosprite}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"66782842\">Memosprite_Aglaea_Ability03_Summon</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1725518252\">Aglaea_Ability03_ForbidSkill</a>"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster's Memosprite}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"66782842\">Memosprite_Aglaea_Ability03_Summon</a>"
                },
                {
                  "name": "Update Ability Binding",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityName": "Skill11",
                  "skillSlot": "Basic ATK"
                }
              ]
            },
            {
              "eventTrigger": "When Modifier is Added [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "flagName": "Charm"
                  },
                  "passed": [
                    {
                      "name": "Update Ability Binding",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "abilityName": "Skill01",
                      "skillSlot": "Basic ATK"
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
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "flagName": "Charm",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Update Ability Binding",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "abilityName": "Skill11",
                      "skillSlot": "Basic ATK"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__518821924\">Aglaea_Ability03</a>[<span class=\"descriptionNumberColor\">Supreme Stance</span>]",
          "stackType": "ReplaceByCaster",
          "description": "Basic ATK is enhanced to \"Slash by a Thousandfold Kiss.\"",
          "type": "Buff",
          "effectName": "Supreme Stance",
          "statusName": "Supreme Stance",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}} + {{Caster's Memosprite}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1681513510\">Aglaea_Ability03_Servant_PointB1</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}} + {{Caster's Memosprite}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2055277226\">Aglaea_Ability03_Servant_PointB1_AddAttack</a>[<span class=\"descriptionNumberColor\">The Myopic's Doom</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}} + {{Caster's Memosprite}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1330366864\">Aglaea_Eidolon6_Effect</a>[<span class=\"descriptionNumberColor\">Fluctuate in the Tapestry of Fates</span>]"
                },
                {
                  "name": "Define Custom Variable",
                  "scope": "AITag",
                  "variableName": "DamageCarry",
                  "value": 1
                }
              ]
            },
            {
              "eventTrigger": "Turn [Anyone]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"518821924\">Aglaea_Ability03</a>[<span class=\"descriptionNumberColor\">Supreme Stance</span>]"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "_Energy",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Constants[0] (1) || RETURN",
                          "displayLines": "1",
                          "constants": [
                            1
                          ],
                          "variables": []
                        }
                      }
                    ]
                  }
                }
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
                  "modifier": "<a class=\"gModGreen\" id=\"1374425540\">Memosprite_AglaeaServant_SummonerAddSpeed</a>[<span class=\"descriptionNumberColor\">A Body Brewed by Tears</span>]"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster's Memosprite}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-394991116\">Memosprite_AglaeaServant_AddSpeed</a>[<span class=\"descriptionNumberColor\">A Body Brewed by Tears</span>]"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Copy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster's Memosprite}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-394991116\">Memosprite_AglaeaServant_AddSpeed</a>[<span class=\"descriptionNumberColor\">A Body Brewed by Tears</span>]",
                      "variable": "_Layer",
                      "target2": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variable2": "_SpeedLayer"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1374425540\">Memosprite_AglaeaServant_SummonerAddSpeed</a>[<span class=\"descriptionNumberColor\">A Body Brewed by Tears</span>]",
                      "addStacksPerTrigger": {
                        "operator": "Variables[0] (_SpeedLayer) || RETURN",
                        "displayLines": "_SpeedLayer",
                        "constants": [],
                        "variables": [
                          "_SpeedLayer"
                        ]
                      }
                    }
                  ]
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
                  "name": "Change Character UI"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_EnergyReduce",
                  "value": 1
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Trace Activated",
                    "conditionList": "The Myopic's Doom"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}} + {{Caster's Memosprite}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1681513510\">Aglaea_Ability03_Servant_PointB1</a>"
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "scope": "AITag",
                  "variableName": "DamageCarry",
                  "value": 100
                }
              ]
            },
            {
              "eventTrigger": "Attack Action Completed [Anyone]",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-93298298\">Aglaea_SummonSpeedUp_Sub</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "MDF_Layer",
                  "multiplier": 1
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_PropertyValue",
                  "value": {
                    "operator": "Variables[0] (MDF_Layer) || Variables[1] (MDF_SpeedUp) || MUL || RETURN",
                    "displayLines": "(MDF_Layer * MDF_SpeedUp)",
                    "constants": [],
                    "variables": [
                      "MDF_Layer",
                      "MDF_SpeedUp"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__641156083\">Aglaea_SummonSpeedUp</a>",
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
                  "variableName": "MDF_Layer",
                  "multiplier": 1
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_PropertyValue",
                  "value": {
                    "operator": "Variables[0] (MDF_Layer) || Variables[1] (MDF_SpeedUp) || MUL || RETURN",
                    "displayLines": "(MDF_Layer * MDF_SpeedUp)",
                    "constants": [],
                    "variables": [
                      "MDF_Layer",
                      "MDF_SpeedUp"
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
          "for": "<a class=\"gModGreen\" id=\"mod__275138353\">Aglaea_HPAddedRatio</a>",
          "stackType": "ReplaceByCaster",
          "stackLimit": 3,
          "addStacksPerTrigger": 1,
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "_Layer",
                  "multiplier": 1
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">HP%</span>&nbsp;",
                  "value": {
                    "operator": "Constants[0] (0.5) || Variables[0] (_Layer) || MUL || RETURN",
                    "displayLines": "(0.5 * _Layer)",
                    "constants": [
                      0.5
                    ],
                    "variables": [
                      "_Layer"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__755493734\">Aglaea_Ability02_ChangeSkill</a>",
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
                  "abilityName": "Skill02",
                  "skillSlot": "Skill",
                  "enableSecondaryType": "ControlSkill02"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1390492215\">Aglaea_Ability02Preshow</a>"
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
                  "abilityName": "Skill21",
                  "skillSlot": "Skill",
                  "enableSecondaryType": "ControlSkill02"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1390492215\">Aglaea_Ability02Preshow</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__609645332\">Aglaea_Passive_SummonCount</a>",
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
          "for": "<a class=\"gModGreen\" id=\"mod__1511474386\">Aglaea_Passive_SummonCount2</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_PropertyValue2",
                  "value": {
                    "operator": "Variables[0] (MDF_AttackUp) || Variables[1] (MDF_Count2) || MUL || RETURN",
                    "displayLines": "(MDF_AttackUp * MDF_Count2)",
                    "constants": [],
                    "variables": [
                      "MDF_AttackUp",
                      "MDF_Count2"
                    ]
                  }
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
                        "name": "Is Entity Type",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "type": "Memosprite"
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
                      "name": "Define Custom Variable",
                      "variableName": "MDF_Count2",
                      "value": {
                        "operator": "Variables[0] (MDF_Count2) || Constants[0] (1) || SUB || RETURN",
                        "displayLines": "(MDF_Count2 - 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "MDF_Count2"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_PropertyValue2",
                      "value": {
                        "operator": "Variables[0] (MDF_AttackUp) || Variables[1] (MDF_Count2) || MUL || RETURN",
                        "displayLines": "(MDF_AttackUp * MDF_Count2)",
                        "constants": [],
                        "variables": [
                          "MDF_AttackUp",
                          "MDF_Count2"
                        ]
                      }
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
                        "name": "Is Entity Type",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "type": "Memosprite"
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
                      "name": "Define Custom Variable",
                      "variableName": "MDF_Count2",
                      "value": {
                        "operator": "Variables[0] (MDF_Count2) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(MDF_Count2 + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "MDF_Count2"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_PropertyValue2",
                      "value": {
                        "operator": "Variables[0] (MDF_AttackUp) || Variables[1] (MDF_Count2) || MUL || RETURN",
                        "displayLines": "(MDF_AttackUp * MDF_Count2)",
                        "constants": [],
                        "variables": [
                          "MDF_AttackUp",
                          "MDF_Count2"
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Battle Event/Summon Died [Anyone]",
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
                        "name": "Is Entity a Battle Event/Summon",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "expectedType": "Summon"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_Count2",
                      "value": {
                        "operator": "Variables[0] (MDF_Count2) || Constants[0] (1) || SUB || RETURN",
                        "displayLines": "(MDF_Count2 - 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "MDF_Count2"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_PropertyValue2",
                      "value": {
                        "operator": "Variables[0] (MDF_AttackUp) || Variables[1] (MDF_Count2) || MUL || RETURN",
                        "displayLines": "(MDF_AttackUp * MDF_Count2)",
                        "constants": [],
                        "variables": [
                          "MDF_AttackUp",
                          "MDF_Count2"
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
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__216440055\">Aglaea_GoldenSword_Mark</a>[<span class=\"descriptionNumberColor\">Seam Stitch</span>]",
          "stackType": "Replace",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "description": "After receiving Aglaea's attack, further takes Lightning Additional DMG equal to <span class=\"descriptionNumberColor\">MDF_PropertyValue</span> of Aglaea's ATK. Garmentmaker will prioritize this target to attack.",
          "type": "Debuff",
          "effectName": "Seam Stitch",
          "statusName": "Seam Stitch",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All(with Unselectable)}}"
                  },
                  "searchRandom": true,
                  "includeDyingTargets": true,
                  "maxTargets": 10,
                  "conditions": {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "invertCondition": true
                  },
                  "ifTargetFound": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"216440055\">Aglaea_GoldenSword_Mark</a>[<span class=\"descriptionNumberColor\">Seam Stitch</span>]"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 1,
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
                          "on": "Defender",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                          "value": "0.15"
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
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 1,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Update Modifier Description",
                      "popUpText": "DMG received increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue2</span>. After receiving Aglaea's attack, further takes Lightning Additional DMG equal to <span class=\"descriptionNumberColor\">MDF_PropertyValue</span> of Aglaea's ATK. Garmentmaker will prioritize this target to attack."
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Being Attacked [Owner]: End",
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
                      "target": "{{Caster's Memosprite}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-394991116\">Memosprite_AglaeaServant_AddSpeed</a>[<span class=\"descriptionNumberColor\">A Body Brewed by Tears</span>]",
                        "justAddedOrActive": true
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Eidolon Activated",
                        "eidolon": 1,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        }
                      },
                      "passed": [
                        {
                          "name": "Update Energy",
                          "on": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "value": {
                            "operator": "Variables[0] (20) || RETURN",
                            "displayLines": "20",
                            "constants": [],
                            "variables": [
                              20
                            ]
                          },
                          "isFixed": "* ERR"
                        }
                      ]
                    }
                  ],
                  "failed": [
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
                          "name": "IF",
                          "conditions": {
                            "name": "Eidolon Activated",
                            "eidolon": 4
                          },
                          "passed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}.[[getMemosprite]]"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"-394991116\">Memosprite_AglaeaServant_AddSpeed</a>[<span class=\"descriptionNumberColor\">A Body Brewed by Tears</span>]"
                              },
                              "passed": [
                                {
                                  "name": "Define Custom Variable with Copy",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}.[[getMemosprite]]"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-394991116\">Memosprite_AglaeaServant_AddSpeed</a>[<span class=\"descriptionNumberColor\">A Body Brewed by Tears</span>]",
                                  "variable": "_Layer",
                                  "target2": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "variable2": "_Layer"
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Eidolon Activated",
                            "eidolon": 1,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            }
                          },
                          "passed": [
                            {
                              "name": "Update Energy",
                              "on": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "value": {
                                "operator": "Variables[0] (20) || RETURN",
                                "displayLines": "20",
                                "constants": [],
                                "variables": [
                                  20
                                ]
                              },
                              "isFixed": "* ERR"
                            }
                          ]
                        },
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"1466558420\">PursuedDamage_PerformanceDelay</a>",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          }
                        },
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "canPhase": true,
                          "AttackScaling": {
                            "DamageType": "Thunder",
                            "Damage": {
                              "operator": "Variables[0] (BombDamagePercentage) || RETURN",
                              "displayLines": "BombDamagePercentage",
                              "constants": [],
                              "variables": [
                                "BombDamagePercentage"
                              ]
                            },
                            "Toughness": null,
                            "instanceTag": "AglaeaBomb",
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1725518252\">Aglaea_Ability03_ForbidSkill</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Disable Abilities",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityTypes": [
                    "Skill"
                  ],
                  "text": "Ability cannot be used"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1374425540\">Memosprite_AglaeaServant_SummonerAddSpeed</a>[<span class=\"descriptionNumberColor\">A Body Brewed by Tears</span>]",
          "stackType": "Replace",
          "description": "SPD increases by <span class=\"descriptionNumberColor\">SpeedAddTotal</span>.",
          "type": "Buff",
          "effectName": "SPD Boost",
          "statusName": "A Body Brewed by Tears",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "_Layer",
                  "multiplier": 1
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "SpeedAddTotal",
                  "value": {
                    "operator": "Variables[0] (_Layer) || Variables[1] (0.15) || MUL || RETURN",
                    "displayLines": "(_Layer * 0.15)",
                    "constants": [],
                    "variables": [
                      "_Layer",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (SpeedAddTotal) || RETURN",
                    "displayLines": "SpeedAddTotal",
                    "constants": [],
                    "variables": [
                      "SpeedAddTotal"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2055277226\">Aglaea_Ability03_Servant_PointB1_AddAttack</a>[<span class=\"descriptionNumberColor\">The Myopic's Doom</span>]",
          "stackType": "Replace",
          "description": "ATK increases by <span class=\"descriptionNumberColor\">_AttackConvert</span>.",
          "type": "Buff",
          "effectName": "ATK Boost",
          "statusName": "The Myopic's Doom",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "_CurrentSpeed",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">Speed</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "_CurrentSpeedConvert",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">SpeedConverted</span>&nbsp;"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Target Exists",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster's Memosprite}}"
                    },
                    "living": true
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster's Memosprite}}"
                      },
                      "variableName": "_ServantCurrentSpeed",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">Speed</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster's Memosprite}}"
                      },
                      "variableName": "_ServantCurrentSpeedConvert",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">SpeedConverted</span>&nbsp;"
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_CurrentSpeed",
                  "value": {
                    "operator": "Variables[0] (_CurrentSpeed) || Variables[1] (_CurrentSpeedConvert) || SUB || RETURN",
                    "displayLines": "(_CurrentSpeed - _CurrentSpeedConvert)",
                    "constants": [],
                    "variables": [
                      "_CurrentSpeed",
                      "_CurrentSpeedConvert"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_ServantCurrentSpeed",
                  "value": {
                    "operator": "Variables[0] (_ServantCurrentSpeed) || Variables[1] (_ServantCurrentSpeedConvert) || SUB || RETURN",
                    "displayLines": "(_ServantCurrentSpeed - _ServantCurrentSpeedConvert)",
                    "constants": [],
                    "variables": [
                      "_ServantCurrentSpeed",
                      "_ServantCurrentSpeedConvert"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_AttackConvert",
                  "value": {
                    "operator": "Variables[0] (_CurrentSpeed) || Variables[1] (7.2) || MUL || Variables[2] (_ServantCurrentSpeed) || Variables[3] (3.6) || MUL || ADD || RETURN",
                    "displayLines": "((_CurrentSpeed * 7.2) + (_ServantCurrentSpeed * 3.6))",
                    "constants": [],
                    "variables": [
                      "_CurrentSpeed",
                      7.2,
                      "_ServantCurrentSpeed",
                      3.6
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">AttackConverted</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (_AttackConvert) || RETURN",
                    "displayLines": "_AttackConvert",
                    "constants": [],
                    "variables": [
                      "_AttackConvert"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1681513510\">Aglaea_Ability03_Servant_PointB1</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}} + {{Caster's Memosprite}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2055277226\">Aglaea_Ability03_Servant_PointB1_AddAttack</a>[<span class=\"descriptionNumberColor\">The Myopic's Doom</span>]"
                }
              ]
            }
          ],
          "abilityValueChange": [
            {
              "name": "Ability Value Changes",
              "variableName": "&nbsp;<span class=\"descriptionNumberColor\">Speed</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "whenValueChanges": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}} + {{Caster's Memosprite}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"2055277226\">Aglaea_Ability03_Servant_PointB1_AddAttack</a>[<span class=\"descriptionNumberColor\">The Myopic's Doom</span>]"
                    }
                  ]
                }
              ]
            },
            {
              "name": "Ability Value Changes",
              "variableName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "whenValueChanges": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}} + {{Caster's Memosprite}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"2055277226\">Aglaea_Ability03_Servant_PointB1_AddAttack</a>[<span class=\"descriptionNumberColor\">The Myopic's Doom</span>]"
                    }
                  ]
                }
              ]
            },
            {
              "name": "Ability Value Changes",
              "variableName": "&nbsp;<span class=\"descriptionNumberColor\">SPDFlat</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "whenValueChanges": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}} + {{Caster's Memosprite}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"2055277226\">Aglaea_Ability03_Servant_PointB1_AddAttack</a>[<span class=\"descriptionNumberColor\">The Myopic's Doom</span>]"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__779865108\">Aglaea_Ability03Preshow</a>",
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "entityType": "Servant",
            "entityID": 11402,
            "skillType": [
              "Ultimate"
            ],
            "conditions": {
              "name": "Compare: Target Count",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Memosprite}}"
              },
              "compareType": "<=",
              "value2": 0,
              "livingTargets": true
            },
            "delayAdvancePreview": {
              "name": "Delay/Advance Preview",
              "previewValue": -1
            }
          }
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1390492215\">Aglaea_Ability02Preshow</a>",
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "target": {
              "name": "Target Name",
              "target": "{{Modifier Holder}}"
            },
            "skillType": [
              "Skill"
            ],
            "delayAdvancePreview": {
              "name": "Delay/Advance Preview",
              "previewValue": "0(Set AV)"
            }
          }
        }
      ],
      "references": []
    },
    "Aglaea_LocalPlayer_Aglaea_TechniqueUsage_TriggerHitMonster": {
      "fileName": "Aglaea_LocalPlayer_Aglaea_TechniqueUsage_TriggerHitMonster",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Overworld Attack Instance",
          "onBattle": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": null,
              "ID": "140201(SkillMaze)"
            }
          ]
        }
      ],
      "references": [],
      "triggerType": "Free",
      "targetObjectData": {
        "primaryTarget": "Skill Point User(Or NONE)"
      }
    },
    "Aglaea_LocalPlayer_StandardAbility_AttackBreak": {
      "fileName": "Aglaea_LocalPlayer_StandardAbility_AttackBreak",
      "skillTrigger": "MazeCommonPassve01",
      "abilityType": "Basic ATK",
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"951318209\">ADV_StageAbility_MazeStandard_OnStageEffect</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-247093964\">ADV_StageAbility_MazeStandard_ListenEnterBattle_Standard</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Element",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "DamageType": {
              "name": "Damage Type Source",
              "sourceType": "Physical"
            }
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"761715744\">ADV_StageAbility_MazeStandard_ListenEnterBattle_Physical</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Element",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "DamageType": {
              "name": "Damage Type Source",
              "sourceType": "Fire"
            }
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-380086631\">ADV_StageAbility_MazeStandard_ListenEnterBattle_Fire</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Element",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "DamageType": {
              "name": "Damage Type Source",
              "sourceType": "Ice"
            }
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-97518784\">ADV_StageAbility_MazeStandard_ListenEnterBattle_Ice</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Element",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "DamageType": {
              "name": "Damage Type Source",
              "sourceType": "Thunder"
            }
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1597144751\">ADV_StageAbility_MazeStandard_ListenEnterBattle_Thunder</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Element",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "DamageType": {
              "name": "Damage Type Source",
              "sourceType": "Wind"
            }
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1816746695\">ADV_StageAbility_MazeStandard_ListenEnterBattle_Wind</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Element",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "DamageType": {
              "name": "Damage Type Source",
              "sourceType": "Quantum"
            }
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-418599870\">ADV_StageAbility_MazeStandard_ListenEnterBattle_Quantum</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Element",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "DamageType": {
              "name": "Damage Type Source",
              "sourceType": "Imaginary"
            }
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1882459002\">ADV_StageAbility_MazeStandard_ListenEnterBattle_Imaginary</a>"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1927069485\">ADV_StageAbility_MazeStandard_ListenEnterBattle_TeamLeader</a>"
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "Aglaea_LocalPlayer_Aglaea_TechniqueUsage": {
      "fileName": "Aglaea_LocalPlayer_Aglaea_TechniqueUsage",
      "skillTrigger": "MazeSkill",
      "abilityType": "Basic ATK",
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": "Ability Has a Target",
          "passed": [
            "Deleted bullshit",
            {
              "name": "Create Overworld Entity",
              "summonID": 14021
            }
          ],
          "failed": [
            "Deleted bullshit",
            {
              "name": "Create Overworld Entity",
              "summonID": 14021
            }
          ]
        }
      ],
      "onAbortReg": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Skill Point User(Or NONE)"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target"
      }
    },
    "Aglaea_LocalPlayer_Aglaea_NormalAtk01": {
      "fileName": "Aglaea_LocalPlayer_Aglaea_NormalAtk01",
      "skillTrigger": "NormalAtk",
      "abilityType": "Basic ATK",
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": "Ability Has a Target",
          "passed": [
            "Deleted bullshit",
            {
              "name": "Overworld Attack Instance"
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "In Motion (Overworld)",
                "flag": "FastRun"
              },
              "passed": [
                "Deleted bullshit",
                {
                  "name": "Overworld Attack Instance"
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "In Motion (Overworld)",
                    "flag": "Run"
                  },
                  "passed": [
                    "Deleted bullshit",
                    {
                      "name": "Overworld Attack Instance"
                    }
                  ],
                  "failed": [
                    "Deleted bullshit",
                    {
                      "name": "Overworld Attack Instance"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "onAbortReg": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Skill Point User(Or NONE)"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target"
      }
    },
    "Aglaea_Aglaea_TechniqueInLevel": {
      "fileName": "Aglaea_Aglaea_TechniqueInLevel",
      "childAbilityList": [
        "Aglaea_Aglaea_TechniqueInLevel"
      ],
      "skillTrigger": "SkillMaze",
      "abilityType": "Technique",
      "energy": null,
      "toughnessList": [
        20,
        0,
        0
      ],
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Technique Modifies Current Wave"
              },
              {
                "name": "Compare: Variable",
                "value1": "Wave Count",
                "compareType": "=",
                "value2": 1
              }
            ]
          },
          "passed": [
            {
              "name": "Summon Memosprite",
              "memoID": 11402,
              "valuePerStack": {
                "_PointB3Layer": {
                  "operator": "Variables[0] (_EnergyReduce) || RETURN",
                  "displayLines": "_EnergyReduce",
                  "constants": [],
                  "variables": [
                    "_EnergyReduce"
                  ]
                },
                "Ability11_DamagePercentage": {
                  "operator": "Variables[0] (2) || RETURN",
                  "displayLines": "2",
                  "constants": [],
                  "variables": [
                    2
                  ]
                },
                "Ability11_DamagePercentageAD": {
                  "operator": "Variables[0] (0.9) || RETURN",
                  "displayLines": "0.9",
                  "constants": [],
                  "variables": [
                    0.9
                  ]
                }
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"755493734\">Aglaea_Ability02_ChangeSkill</a>"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1050397411\">StageAbility_Maze_Aglaea_Modifier</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1050397411\">StageAbility_Maze_Aglaea_Modifier</a>",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Technique Modifies Current Wave"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "Wave Count",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": {
                        "operator": "Variables[0] (30) || RETURN",
                        "displayLines": "30",
                        "constants": [],
                        "variables": [
                          30
                        ]
                      },
                      "isFixed": "* ERR"
                    },
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Thunder",
                        "Damage": {
                          "operator": "Variables[0] (1) || RETURN",
                          "displayLines": "1",
                          "constants": [],
                          "variables": [
                            1
                          ]
                        },
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "Technique",
                        "EnergyGainPercent": "100%"
                      }
                    },
                    "Trigger: Attack End",
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
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"216440055\">Aglaea_GoldenSword_Mark</a>[<span class=\"descriptionNumberColor\">Seam Stitch</span>]",
                          "valuePerStack": {
                            "BombDamagePercentage": {
                              "operator": "Variables[0] (0.3) || RETURN",
                              "displayLines": "0.3",
                              "constants": [],
                              "variables": [
                                0.3
                              ]
                            },
                            "_SpRecover": {
                              "operator": "Variables[0] (20) || RETURN",
                              "displayLines": "20",
                              "constants": [],
                              "variables": [
                                20
                              ]
                            },
                            "MDF_PropertyValue": {
                              "operator": "Variables[0] (0.3) || RETURN",
                              "displayLines": "0.3",
                              "constants": [],
                              "variables": [
                                0.3
                              ]
                            },
                            "MDF_PropertyValue2": {
                              "operator": "Variables[0] (0.15) || RETURN",
                              "displayLines": "0.15",
                              "constants": [],
                              "variables": [
                                0.15
                              ]
                            }
                          }
                        }
                      ]
                    }
                  ]
                }
              ],
              "priorityLevel": -60
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "Aglaea_Aglaea_Bonus_Camera": {
      "fileName": "Aglaea_Aglaea_Bonus_Camera",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "Aglaea_Aglaea_Bonus": {
      "fileName": "Aglaea_Aglaea_Bonus",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "Aglaea_Aglaea_PassiveAbility01": {
      "fileName": "Aglaea_Aglaea_PassiveAbility01",
      "childAbilityList": [
        "Aglaea_Aglaea_PassiveAbility01",
        "Aglaea_Aglaea_Bonus",
        "Aglaea_Aglaea_Bonus_Camera"
      ],
      "skillTrigger": "SkillP01",
      "abilityType": "Talent",
      "energy": 10,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Define Custom Variable",
          "scope": "AITag",
          "variableName": "DamageCarry",
          "value": 1
        },
        {
          "name": "Update Displayed Energy Bar",
          "displaySubType": "Fraction",
          "assignState": "False",
          "bar#": "Number"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1078632093\">Aglaea_Passive</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"779865108\">Aglaea_Ability03Preshow</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1390492215\">Aglaea_Ability02Preshow</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 2,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            }
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-184277426\">Aglaea_Eidolon2_Listen</a>"
            }
          ]
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1078632093\">Aglaea_Passive</a>",
          "stackType": "ReplaceByCaster",
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "entityType": "Servant",
            "entityID": 11402,
            "skillType": [
              "Skill"
            ],
            "conditions": {
              "name": "Compare: Target Count",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Memosprite}}"
              },
              "compareType": "<=",
              "value2": 0,
              "livingTargets": true
            },
            "delayAdvancePreview": {
              "name": "Delay/Advance Preview",
              "previewValue": -1
            }
          },
          "execute": [
            {
              "eventTrigger": "Entity Death [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of",
                    "of": {
                      "name": "Target Name",
                      "target": "{{Caster's Memosprite}}"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "mustBeAlive2": true
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_Energy",
                      "value": 0
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
                    "name": "Eidolon Activated",
                    "eidolon": 2,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-184277426\">Aglaea_Eidolon2_Listen</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "_SPvalue",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrent</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "_MaxSp",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_SPRatio",
                  "value": {
                    "operator": "Variables[0] (_SPvalue) || Variables[1] (_MaxSp) || DIV || RETURN",
                    "displayLines": "(_SPvalue / _MaxSp)",
                    "constants": [],
                    "variables": [
                      "_SPvalue",
                      "_MaxSp"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Trace Activated",
                        "conditionList": "The Speeding Sol"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "Wave Count",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "_SPRatio",
                        "compareType": "<=",
                        "value2": 0.5
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "valuePercent": 0.5,
                      "isFixed": "(Fixed)",
                      "isSetToValue": true
                    }
                  ]
                }
              ],
              "priorityLevel": -80
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "Aglaea_Aglaea_Ability11_Part02": {
      "fileName": "Aglaea_Aglaea_Ability11_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "_CurrentSpeed",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">Speed</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Memosprite}}"
          },
          "variableName": "_ServantCurrentSpeed",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">Speed</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_Rank06Ratio",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Memosprite}}"
          },
          "variableName": "_PairStanceDMG1",
          "value": {
            "operator": "Variables[0] (ST Toughness Value) || RETURN",
            "displayLines": "ST Toughness Value",
            "constants": [],
            "variables": [
              "ST Toughness Value"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Memosprite}}"
          },
          "variableName": "_PairStanceDMG2",
          "value": {
            "operator": "Variables[0] (Blast Toughness Value) || RETURN",
            "displayLines": "Blast Toughness Value",
            "constants": [],
            "variables": [
              "Blast Toughness Value"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_Energy",
          "value": {
            "operator": "Variables[0] (_Energy) || Constants[0] (1) || SUB || RETURN",
            "displayLines": "(_Energy - 1)",
            "constants": [
              1
            ],
            "variables": [
              "_Energy"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Skill11Count",
          "value": {
            "operator": "Variables[0] (Skill11Count) || Constants[0] (1) || ADD || RETURN",
            "displayLines": "(Skill11Count + 1)",
            "constants": [
              1
            ],
            "variables": [
              "Skill11Count"
            ]
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Target Exists",
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Memosprite}}"
            },
            "living": true
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"216440055\">Aglaea_GoldenSword_Mark</a>[<span class=\"descriptionNumberColor\">Seam Stitch</span>]",
              "valuePerStack": {
                "BombDamagePercentage": {
                  "operator": "Variables[0] (0.3) || RETURN",
                  "displayLines": "0.3",
                  "constants": [],
                  "variables": [
                    0.3
                  ]
                },
                "_SpRecover": {
                  "operator": "Variables[0] (20) || RETURN",
                  "displayLines": "20",
                  "constants": [],
                  "variables": [
                    20
                  ]
                },
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (0.3) || RETURN",
                  "displayLines": "0.3",
                  "constants": [],
                  "variables": [
                    0.3
                  ]
                },
                "MDF_PropertyValue2": {
                  "operator": "Variables[0] (0.15) || RETURN",
                  "displayLines": "0.15",
                  "constants": [],
                  "variables": [
                    0.15
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] (2) || Variables[1] (_Rank06Ratio) || ADD || RETURN",
              "displayLines": "(2 + _Rank06Ratio)",
              "constants": [],
              "variables": [
                2,
                "_Rank06Ratio"
              ]
            },
            "HitSplit": 0.25,
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || Constants[0] (0.5) || MUL || RETURN",
              "displayLines": "(ST Toughness Value * 0.5)",
              "constants": [
                0.5
              ],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "instanceTag": "AglasaPairsDamage",
            "Tags": [
              "Joint-Attack"
            ],
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] (0.9) || Variables[1] (_Rank06Ratio) || ADD || RETURN",
              "displayLines": "(0.9 + _Rank06Ratio)",
              "constants": [],
              "variables": [
                0.9,
                "_Rank06Ratio"
              ]
            },
            "HitSplit": 0.25,
            "Toughness": {
              "operator": "Variables[0] (Blast Toughness Value) || Constants[0] (0.5) || MUL || RETURN",
              "displayLines": "(Blast Toughness Value * 0.5)",
              "constants": [
                0.5
              ],
              "variables": [
                "Blast Toughness Value"
              ]
            },
            "instanceTag": "AglasaPairsDamage",
            "Tags": [
              "Joint-Attack"
            ]
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] (2) || Variables[1] (_Rank06Ratio) || ADD || RETURN",
              "displayLines": "(2 + _Rank06Ratio)",
              "constants": [],
              "variables": [
                2,
                "_Rank06Ratio"
              ]
            },
            "HitSplit": 0.25,
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || Constants[0] (0.5) || MUL || RETURN",
              "displayLines": "(ST Toughness Value * 0.5)",
              "constants": [
                0.5
              ],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "instanceTag": "AglasaPairsDamage",
            "Tags": [
              "Joint-Attack"
            ],
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] (0.9) || Variables[1] (_Rank06Ratio) || ADD || RETURN",
              "displayLines": "(0.9 + _Rank06Ratio)",
              "constants": [],
              "variables": [
                0.9,
                "_Rank06Ratio"
              ]
            },
            "HitSplit": 0.25,
            "Toughness": {
              "operator": "Variables[0] (Blast Toughness Value) || Constants[0] (0.5) || MUL || RETURN",
              "displayLines": "(Blast Toughness Value * 0.5)",
              "constants": [
                0.5
              ],
              "variables": [
                "Blast Toughness Value"
              ]
            },
            "instanceTag": "AglasaPairsDamage",
            "Tags": [
              "Joint-Attack"
            ]
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] (2) || Variables[1] (_Rank06Ratio) || ADD || RETURN",
              "displayLines": "(2 + _Rank06Ratio)",
              "constants": [],
              "variables": [
                2,
                "_Rank06Ratio"
              ]
            },
            "HitSplit": 0.25,
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || Constants[0] (0.5) || MUL || RETURN",
              "displayLines": "(ST Toughness Value * 0.5)",
              "constants": [
                0.5
              ],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "instanceTag": "AglasaPairsDamage",
            "Tags": [
              "Joint-Attack"
            ],
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] (0.9) || Variables[1] (_Rank06Ratio) || ADD || RETURN",
              "displayLines": "(0.9 + _Rank06Ratio)",
              "constants": [],
              "variables": [
                0.9,
                "_Rank06Ratio"
              ]
            },
            "HitSplit": 0.25,
            "Toughness": {
              "operator": "Variables[0] (Blast Toughness Value) || Constants[0] (0.5) || MUL || RETURN",
              "displayLines": "(Blast Toughness Value * 0.5)",
              "constants": [
                0.5
              ],
              "variables": [
                "Blast Toughness Value"
              ]
            },
            "instanceTag": "AglasaPairsDamage",
            "Tags": [
              "Joint-Attack"
            ]
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] (2) || Variables[1] (_Rank06Ratio) || ADD || RETURN",
              "displayLines": "(2 + _Rank06Ratio)",
              "constants": [],
              "variables": [
                2,
                "_Rank06Ratio"
              ]
            },
            "HitSplit": 0.25,
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || Constants[0] (0.5) || MUL || RETURN",
              "displayLines": "(ST Toughness Value * 0.5)",
              "constants": [
                0.5
              ],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "instanceTag": "AglasaPairsDamage",
            "Tags": [
              "Joint-Attack"
            ],
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] (0.9) || Variables[1] (_Rank06Ratio) || ADD || RETURN",
              "displayLines": "(0.9 + _Rank06Ratio)",
              "constants": [],
              "variables": [
                0.9,
                "_Rank06Ratio"
              ]
            },
            "HitSplit": 0.25,
            "Toughness": {
              "operator": "Variables[0] (Blast Toughness Value) || Constants[0] (0.5) || MUL || RETURN",
              "displayLines": "(Blast Toughness Value * 0.5)",
              "constants": [
                0.5
              ],
              "variables": [
                "Blast Toughness Value"
              ]
            },
            "instanceTag": "AglasaPairsDamage",
            "Tags": [
              "Joint-Attack"
            ]
          }
        },
        {
          "name": "Trigger: Attack End",
          "skipDeathSettle": true
        },
        "Trigger: Ability End"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "Aglaea_Aglaea_Ability11_Part01": {
      "fileName": "Aglaea_Aglaea_Ability11_Part01",
      "childAbilityList": [
        "Aglaea_Aglaea_Ability11_Camera",
        "Aglaea_Aglaea_Ability11_Part01",
        "Aglaea_Aglaea_Ability11_Part02"
      ],
      "skillTrigger": "Skill11",
      "abilityType": "Basic ATK",
      "energy": 20,
      "toughnessList": [
        20,
        0,
        10
      ],
      "parse": [
        {
          "name": "UI Display Event",
          "popUpText": "Slash by a Thousandfold Kiss"
        },
        "Deleted bullshit",
        {
          "name": "Trigger Joint-Attack Ability",
          "abilityList": [
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "inherentTarget": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "ability": "Aglaea_Ability11_Part02"
            },
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster's Memosprite}}"
              },
              "inherentTarget": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "ability": "Servant_AglaeaServant_Ability11_Together_Part01"
            }
          ]
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target",
        "subTarget": "Blast Targets"
      }
    },
    "Aglaea_Aglaea_Ability21_Part02": {
      "fileName": "Aglaea_Aglaea_Ability21_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "CasterBaseHP",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPBase</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Memosprite}}"
          },
          "variableName": "_CasterEnergy",
          "value": {
            "operator": "Variables[0] (_Energy) || RETURN",
            "displayLines": "_Energy",
            "constants": [],
            "variables": [
              "_Energy"
            ]
          }
        },
        {
          "name": "Heal",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Memosprite}}"
          },
          "healPercent": {
            "operator": "Variables[0] (0.5) || RETURN",
            "displayLines": "0.5",
            "constants": [],
            "variables": [
              0.5
            ]
          },
          "formula": "Heal from Target MaxHP"
        },
        {
          "name": "Update Energy",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "valuePercent": 1,
          "ofAbilitySplit": true,
          "isFixed": "* ERR"
        },
        "Trigger: Ability End"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "Aglaea_Aglaea_Ability21_Part01": {
      "fileName": "Aglaea_Aglaea_Ability21_Part01",
      "childAbilityList": [
        "Aglaea_Aglaea_Ability21_Camera",
        "Aglaea_Aglaea_Ability21_Part01",
        "Aglaea_Aglaea_Ability21_Part02"
      ],
      "skillTrigger": "Skill21",
      "abilityType": "Skill",
      "energy": 20,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Aglaea_Ability21_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        "Deleted bullshit"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster's Memosprite}}"
      }
    },
    "Aglaea_Aglaea_Ability03_Part02": {
      "fileName": "Aglaea_Aglaea_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Force Entity Death",
          "target": {
            "name": "Target Sequence",
            "Sequence": [
              {
                "name": "Target Name",
                "target": "{{Battle Event List}}"
              },
              {
                "name": "Target Filter",
                "conditions": {
                  "name": "Has Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1954638967\">Aglaea_PassiveAbility01_BattleEvent</a>"
                }
              }
            ]
          },
          "ignoreHPLossTriggers": true,
          "ignoreDeathTriggers": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target Count",
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Memosprite}}"
            },
            "compareType": "<=",
            "value2": 0,
            "livingTargets": true
          },
          "passed": [
            {
              "name": "Summon Memosprite",
              "memoID": 11402,
              "valuePerStack": {
                "_PointB3Layer": {
                  "operator": "Variables[0] (_EnergyReduce) || RETURN",
                  "displayLines": "_EnergyReduce",
                  "constants": [],
                  "variables": [
                    "_EnergyReduce"
                  ]
                },
                "Ability11_DamagePercentage": {
                  "operator": "Variables[0] (2) || RETURN",
                  "displayLines": "2",
                  "constants": [],
                  "variables": [
                    2
                  ]
                },
                "Ability11_DamagePercentageAD": {
                  "operator": "Variables[0] (0.9) || RETURN",
                  "displayLines": "0.9",
                  "constants": [],
                  "variables": [
                    0.9
                  ]
                }
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"755493734\">Aglaea_Ability02_ChangeSkill</a>"
            }
          ],
          "failed": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "ServantMaxHP"
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "ServantCurrentHP"
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "ServantHealValue"
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Memosprite}}"
              },
              "variableName": "ServantMaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Memosprite}}"
              },
              "variableName": "ServantCurrentHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "ServantHealValue",
              "value": {
                "operator": "Variables[0] (ServantMaxHP) || Variables[1] (ServantCurrentHP) || SUB || RETURN",
                "displayLines": "(ServantMaxHP - ServantCurrentHP)",
                "constants": [],
                "variables": [
                  "ServantMaxHP",
                  "ServantCurrentHP"
                ]
              }
            },
            {
              "name": "Heal",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Memosprite}}"
              },
              "healFlat": {
                "operator": "Variables[0] (ServantHealValue) || RETURN",
                "displayLines": "ServantHealValue",
                "constants": [],
                "variables": [
                  "ServantHealValue"
                ]
              },
              "formula": "Heal from Base Value"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"518821924\">Aglaea_Ability03</a>[<span class=\"descriptionNumberColor\">Supreme Stance</span>]"
        },
        {
          "name": "Add Battle Event",
          "teamName": "Player Team",
          "eventID": 11402,
          "variables": {
            "BattleEvent_Aglaea_BaseSpeed": {
              "operator": "Variables[0] (100) || RETURN",
              "displayLines": "100",
              "constants": [],
              "variables": [
                100
              ]
            }
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-498968511\">Aglaea_Ability03_Sub</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 6
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}} + {{Caster's Memosprite}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1330366864\">Aglaea_Eidolon6_Effect</a>[<span class=\"descriptionNumberColor\">Fluctuate in the Tapestry of Fates</span>]",
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (0.2) || RETURN",
                  "displayLines": "0.2",
                  "constants": [],
                  "variables": [
                    0.2
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1725518252\">Aglaea_Ability03_ForbidSkill</a>"
        },
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "set": 0
        },
        {
          "name": "Update Energy",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "valuePercent": 1,
          "ofAbilitySplit": true,
          "isFixed": "* ERR"
        },
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1349068502\">March7th_UltraTarget</a>"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "Aglaea_Aglaea_Ability03_Part01": {
      "fileName": "Aglaea_Aglaea_Ability03_Part01",
      "childAbilityList": [
        "Aglaea_Aglaea_Ability03_Camera",
        "Aglaea_Aglaea_Ability03_EnterReady",
        "Aglaea_Aglaea_Ability03_Part01",
        "Aglaea_Aglaea_Ability03_Part02"
      ],
      "skillTrigger": "Skill03",
      "abilityType": "Ultimate",
      "energy": 5,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Aglaea_Ability03_Part02",
          "isTrigger": true
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "Aglaea_Aglaea_Ability03_EnterReady": {
      "fileName": "Aglaea_Aglaea_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "Aglaea_Aglaea_Ability02_Part02": {
      "fileName": "Aglaea_Aglaea_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target Count",
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Memosprite}}"
            },
            "compareType": "<=",
            "value2": 0,
            "livingTargets": true
          },
          "passed": [
            {
              "name": "Summon Memosprite",
              "memoID": 11402,
              "valuePerStack": {
                "_PointB3Layer": {
                  "operator": "Variables[0] (_EnergyReduce) || RETURN",
                  "displayLines": "_EnergyReduce",
                  "constants": [],
                  "variables": [
                    "_EnergyReduce"
                  ]
                },
                "Ability11_DamagePercentage": {
                  "operator": "Variables[0] (2) || RETURN",
                  "displayLines": "2",
                  "constants": [],
                  "variables": [
                    2
                  ]
                },
                "Ability11_DamagePercentageAD": {
                  "operator": "Variables[0] (0.9) || RETURN",
                  "displayLines": "0.9",
                  "constants": [],
                  "variables": [
                    0.9
                  ]
                }
              }
            },
            {
              "name": "Action Advance/Delay",
              "advanceType": "Set",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "set": 0
            },
            {
              "name": "Assign Advance/Delay to Current Ability Use",
              "adjustmentValue": -1,
              "adjustmentType": "Advance"
            },
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Memosprite}}"
              },
              "variableName": "_CasterEnergy",
              "value": {
                "operator": "Variables[0] (_Energy) || RETURN",
                "displayLines": "_Energy",
                "constants": [],
                "variables": [
                  "_Energy"
                ]
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"755493734\">Aglaea_Ability02_ChangeSkill</a>"
            }
          ]
        },
        {
          "name": "Update Energy",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "valuePercent": 1,
          "ofAbilitySplit": true,
          "isFixed": "* ERR"
        },
        "Trigger: Ability End"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "Aglaea_Aglaea_Ability02_Part01": {
      "fileName": "Aglaea_Aglaea_Ability02_Part01",
      "childAbilityList": [
        "Aglaea_Aglaea_Ability02_Camera",
        "Aglaea_Aglaea_Ability02_Part01",
        "Aglaea_Aglaea_Ability02_Part02",
        "Aglaea_Aglaea_Ability02_Camera_Self"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Skill",
      "energy": 20,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Aglaea_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        "Deleted bullshit"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "Aglaea_Aglaea_Ability01_Part02": {
      "fileName": "Aglaea_Aglaea_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Target Exists",
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Memosprite}}"
            },
            "living": true
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"216440055\">Aglaea_GoldenSword_Mark</a>[<span class=\"descriptionNumberColor\">Seam Stitch</span>]",
              "valuePerStack": {
                "BombDamagePercentage": {
                  "operator": "Variables[0] (0.3) || RETURN",
                  "displayLines": "0.3",
                  "constants": [],
                  "variables": [
                    0.3
                  ]
                },
                "_SpRecover": {
                  "operator": "Variables[0] (20) || RETURN",
                  "displayLines": "20",
                  "constants": [],
                  "variables": [
                    20
                  ]
                },
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (0.3) || RETURN",
                  "displayLines": "0.3",
                  "constants": [],
                  "variables": [
                    0.3
                  ]
                },
                "MDF_PropertyValue2": {
                  "operator": "Variables[0] (0.15) || RETURN",
                  "displayLines": "0.15",
                  "constants": [],
                  "variables": [
                    0.15
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] (1) || RETURN",
              "displayLines": "1",
              "constants": [],
              "variables": [
                1
              ]
            },
            "HitSplit": 0.2,
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] (1) || RETURN",
              "displayLines": "1",
              "constants": [],
              "variables": [
                1
              ]
            },
            "HitSplit": 0.2,
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] (1) || RETURN",
              "displayLines": "1",
              "constants": [],
              "variables": [
                1
              ]
            },
            "HitSplit": 0.6,
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "Aglaea_Aglaea_Ability01_Part01": {
      "fileName": "Aglaea_Aglaea_Ability01_Part01",
      "childAbilityList": [
        "Aglaea_Aglaea_Ability01_Camera",
        "Aglaea_Aglaea_Ability01_Part01",
        "Aglaea_Aglaea_Ability01_Part02"
      ],
      "skillTrigger": "Skill01",
      "abilityType": "Basic ATK",
      "energy": 20,
      "toughnessList": [
        10,
        0,
        0
      ],
      "parse": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Aglaea_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2137422120\">Aglaea_SpecialMarkAdder</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1853055971\">Aglaea_SpecialMar</a>",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "ListenBattleEventSkill",
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Toggle Skill Mark"
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "Toggle Skill Mark"
                }
              ]
            },
            {
              "eventTrigger": "Injected Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "Toggle Skill Mark"
                }
              ]
            },
            {
              "eventTrigger": "Update Target Selected(UI) [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Target List Entities",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Player's Aim Primary-Target}}"
                        },
                        "conditions": {
                          "name": "Compare: Target",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "target2": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          }
                        }
                      },
                      {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Current Action Owner}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        }
                      },
                      {
                        "name": "Target Exists",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster's Memosprite}}"
                        },
                        "living": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Toggle Skill Mark",
                      "toggle": true,
                      "skillTypesAllow": [
                        "Basic ATK"
                      ],
                      "trigger": "State_Active"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Toggle Skill Mark"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2137422120\">Aglaea_SpecialMarkAdder</a>",
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE, with Unselectables)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1853055971\">Aglaea_SpecialMar</a>",
              "aliveOnly": "True",
              "haloStatus": true
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target"
      }
    },
    "Aglaea_Functions": {
      "fileName": "Aglaea_Functions",
      "abilityType": "Char. Functions",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "length": 1,
      "parse": [
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-1952576234\">Aglaea_Eidolon6_SpeedValue</a>",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Ability Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "&nbsp;<span class=\"descriptionNumberColor\">Speed</span>&nbsp;",
                "compareType": ">",
                "value2": 320
              },
              "passed": [
                {
                  "name": "Define Modifier-Specific Variable",
                  "modifierName": "<a class=\"gModGreen\" id=\"1330366864\">Aglaea_Eidolon6_Effect</a>[<span class=\"descriptionNumberColor\">Fluctuate in the Tapestry of Fates</span>]",
                  "variableName": "MDF_PropertyValue2",
                  "value": {
                    "operator": "Variables[0] (0.6) || RETURN",
                    "displayLines": "0.6",
                    "constants": [],
                    "variables": [
                      0.6
                    ]
                  }
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Ability Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "&nbsp;<span class=\"descriptionNumberColor\">Speed</span>&nbsp;",
                    "compareType": ">",
                    "value2": 240
                  },
                  "passed": [
                    {
                      "name": "Define Modifier-Specific Variable",
                      "modifierName": "<a class=\"gModGreen\" id=\"1330366864\">Aglaea_Eidolon6_Effect</a>[<span class=\"descriptionNumberColor\">Fluctuate in the Tapestry of Fates</span>]",
                      "variableName": "MDF_PropertyValue2",
                      "value": {
                        "operator": "Variables[0] (0.3) || RETURN",
                        "displayLines": "0.3",
                        "constants": [],
                        "variables": [
                          0.3
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Ability Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "&nbsp;<span class=\"descriptionNumberColor\">Speed</span>&nbsp;",
                        "compareType": ">",
                        "value2": 160
                      },
                      "passed": [
                        {
                          "name": "Define Modifier-Specific Variable",
                          "modifierName": "<a class=\"gModGreen\" id=\"1330366864\">Aglaea_Eidolon6_Effect</a>[<span class=\"descriptionNumberColor\">Fluctuate in the Tapestry of Fates</span>]",
                          "variableName": "MDF_PropertyValue2",
                          "value": {
                            "operator": "Variables[0] (0.1) || RETURN",
                            "displayLines": "0.1",
                            "constants": [],
                            "variables": [
                              0.1
                            ]
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Modifier-Specific Variable",
                          "modifierName": "<a class=\"gModGreen\" id=\"1330366864\">Aglaea_Eidolon6_Effect</a>[<span class=\"descriptionNumberColor\">Fluctuate in the Tapestry of Fates</span>]",
                          "variableName": "MDF_PropertyValue2",
                          "value": 0
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "references": []
    },
    "Aglaea_BE_BattleEvents": {
      "fileName": "Aglaea_BE_BattleEvents",
      "abilityType": "Char. B.Events",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Battle Event Construction",
          "ID": 11402,
          "team": "Player Team",
          "eventType": "Assist",
          "abilityList": [
            "Aglaea_PassiveAbility01_BattleEvent"
          ],
          "overridesArray": [
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;",
              "value": 100
            }
          ],
          "hardLevelEvent": true,
          "barType": 1,
          "actionDescription": "Aglaea is in the \"Supreme Stance\" state, gains the SPD Boost stacks from Garmentmaker's Memosprite Talent, enhances Basic ATK to \"Slash by a Thousandfold Kiss,\" and cannot use Skill. Garmentmaker is immune to Crowd Control debuffs."
        }
      ],
      "references": []
    },
    "Garmentmaker_Modifiers": {
      "fileName": "Garmentmaker_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__1355909707\">Memosprite_Aglaea_Eidolon4_Listen</a>",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}.[[getMemosprite]]"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"68059554\">Memosprite_AglaeaServant_Passive</a>"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Copy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}.[[getMemosprite]]"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"68059554\">Memosprite_AglaeaServant_Passive</a>",
                      "variable": "_MaxLayer",
                      "target2": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variable2": "_MaxLayer2"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}.[[getMemosprite]]"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-394991116\">Memosprite_AglaeaServant_AddSpeed</a>[<span class=\"descriptionNumberColor\">A Body Brewed by Tears</span>]",
                  "stackLimit": {
                    "operator": "Variables[0] (_MaxLayer2) || RETURN",
                    "displayLines": "_MaxLayer2",
                    "constants": [],
                    "variables": [
                      "_MaxLayer2"
                    ]
                  },
                  "addStacksPerTrigger": 1
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"518821924\">Aglaea_Ability03</a>[<span class=\"descriptionNumberColor\">Supreme Stance</span>]"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1374425540\">Memosprite_AglaeaServant_SummonerAddSpeed</a>[<span class=\"descriptionNumberColor\">A Body Brewed by Tears</span>]",
                      "stackLimit": {
                        "operator": "Variables[0] (_MaxLayer2) || RETURN",
                        "displayLines": "_MaxLayer2",
                        "constants": [],
                        "variables": [
                          "_MaxLayer2"
                        ]
                      },
                      "addStacksPerTrigger": 1,
                      "casterAssign": "TargetSelf"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1495039477\">Memosprite_AglaeaServant_Interwine_AdjoinMark</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1542962961\">Memosprite_AglaeaServant_Ability01_PurseDamage</a>",
          "stackType": "Replace",
          "modifierFlags": [
            "KeepOnDeathrattle",
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Toggle Skill Mark"
                }
              ]
            },
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Target is Pathstrider",
                        "path": [
                          "Remembrance"
                        ],
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
                      },
                      {
                        "name": "Attack Type",
                        "attackTypes": [
                          "Memosprite"
                        ],
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Defender",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                          "value": "SkillTree_PointB1_P1_DamageTaken1"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Being Limbo [Owner]"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "_Layer",
                  "multiplier": 1
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "SkillTree_PointB1_P1_DamageTaken1",
                  "value": {
                    "operator": "Variables[0] (AGLAEA_OBJECT_UNUSED_7) || RETURN",
                    "displayLines": "AGLAEA_OBJECT_UNUSED_7",
                    "constants": [],
                    "variables": [
                      "AGLAEA_OBJECT_UNUSED_7"
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "Being Attacked [Owner]: End",
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
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1466558420\">PursuedDamage_PerformanceDelay</a>",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      }
                    },
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Thunder",
                        "Damage": {
                          "operator": "Variables[0] (BombDamagePercentage) || Variables[1] (_Layer) || MUL || RETURN",
                          "displayLines": "(BombDamagePercentage * _Layer)",
                          "constants": [],
                          "variables": [
                            "BombDamagePercentage",
                            "_Layer"
                          ]
                        },
                        "Toughness": null,
                        "instanceTag": "AglaeaBomb",
                        "Tags": null,
                        "attackType": "Additional DMG"
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Skill Name",
                            "skillName": "Skill11"
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster's Summoner}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"518821924\">Aglaea_Ability03</a>[<span class=\"descriptionNumberColor\">Supreme Stance</span>]"
                          },
                          {
                            "name": "Eidolon Activated",
                            "eidolon": 6
                          }
                        ]
                      },
                      "failed": [
                        "Modifier Deletes Itself"
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "Toggle Skill Mark"
                }
              ]
            },
            {
              "eventTrigger": "Update Target Selected(UI) [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Current Action Owner}}"
                    },
                    "team": "Player Team"
                  },
                  "passed": [
                    {
                      "name": "Toggle Skill Mark",
                      "toggle": true,
                      "trigger": "States_Normal"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Toggle Skill Mark"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-394991116\">Memosprite_AglaeaServant_AddSpeed</a>[<span class=\"descriptionNumberColor\">A Body Brewed by Tears</span>]",
          "stackType": "Replace",
          "modifierFlags": [
            "STAT_SpeedUp"
          ],
          "description": "SPD increases by <span class=\"descriptionNumberColor\">SpeedAddTotal</span>.",
          "type": "Buff",
          "effectName": "SPD Boost",
          "statusName": "A Body Brewed by Tears",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": 0,
                  "displaySubType": "Fraction",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster's Summoner}}"
                  },
                  "maximum": {
                    "operator": "Variables[0] (_MaxLayer) || RETURN",
                    "displayLines": "_MaxLayer",
                    "constants": [],
                    "variables": [
                      "_MaxLayer"
                    ]
                  },
                  "assignState": "False",
                  "bar#": "Number"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "_Layer",
                  "multiplier": 1
                },
                {
                  "name": "Define Custom Variable with Copy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"68059554\">Memosprite_AglaeaServant_Passive</a>",
                  "variable": "_MaxLayer",
                  "target2": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variable2": "_MaxLayer"
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (_Layer) || RETURN",
                    "displayLines": "_Layer",
                    "constants": [],
                    "variables": [
                      "_Layer"
                    ]
                  },
                  "displaySubType": "Fraction",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster's Summoner}}"
                  },
                  "maximum": {
                    "operator": "Variables[0] (_MaxLayer) || RETURN",
                    "displayLines": "_MaxLayer",
                    "constants": [],
                    "variables": [
                      "_MaxLayer"
                    ]
                  },
                  "assignState": "True",
                  "bar#": "Number"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "SpeedAddTotal",
                  "value": {
                    "operator": "Variables[0] (_Layer) || Variables[1] (55) || MUL || RETURN",
                    "displayLines": "(_Layer * 55)",
                    "constants": [],
                    "variables": [
                      "_Layer",
                      55
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
                    "operator": "Variables[0] (SpeedAddTotal) || RETURN",
                    "displayLines": "SpeedAddTotal",
                    "constants": [],
                    "variables": [
                      "SpeedAddTotal"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1873179927\">Memosprite_Aglaea_HitDamageSplit</a>",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "NOT",
                    "condition": {
                      "name": "Is Joint-Attack",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      }
                    }
                  },
                  "passed": [
                    {
                      "name": "Share DMG Taken",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "state": "Mask_AliveOrLimbo",
                      "selfSplit": {
                        "operator": "Constants[0] (1) || Variables[0] (MDF_SplitPercentage) || SUB || RETURN",
                        "displayLines": "(1 - MDF_SplitPercentage)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "MDF_SplitPercentage"
                        ]
                      },
                      "targetSplit": {
                        "operator": "Variables[0] (MDF_SplitPercentage) || RETURN",
                        "displayLines": "MDF_SplitPercentage",
                        "constants": [],
                        "variables": [
                          "MDF_SplitPercentage"
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
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__783183170\">Memosprite_AglaeaServant_SummonerKeepSpeed</a>"
        }
      ],
      "references": []
    },
    "Garmentmaker_Servant_AglaeaServant_DeathRattle": {
      "fileName": "Garmentmaker_Servant_AglaeaServant_DeathRattle",
      "childAbilityList": [
        "Garmentmaker_Servant_AglaeaServant_DeathRattle"
      ],
      "skillTrigger": "SkillP04",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1556251146\">Memosprite_AglaeaServant_DeathRattle</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1556251146\">Memosprite_AglaeaServant_DeathRattle</a>",
          "modifierFlags": [
            "Deathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "Was Killed (Queued) [Owner]",
              "execute": [
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Caster's Summoner}}"
                  },
                  "value": {
                    "operator": "Variables[0] (20) || RETURN",
                    "displayLines": "20",
                    "constants": [],
                    "variables": [
                      20
                    ]
                  },
                  "isFixed": "* ERR"
                }
              ]
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "Garmentmaker_Servant_AglaeaServant_BattleCry": {
      "fileName": "Garmentmaker_Servant_AglaeaServant_BattleCry",
      "childAbilityList": [
        "Garmentmaker_Servant_AglaeaServant_BattleCry"
      ],
      "skillTrigger": "SkillP03",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1545439856\">Memosprite_AglaeaServant_BattleCry</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1545439856\">Memosprite_AglaeaServant_BattleCry</a>",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Action Advance/Delay",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "advanceType": "Set",
                  "multiAdd": "(0 - 1)"
                }
              ]
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "Garmentmaker_Servant_Aglaea_PassiveAbility01_ForceKill_Insert": {
      "fileName": "Garmentmaker_Servant_Aglaea_PassiveAbility01_ForceKill_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "Phase1"
        },
        {
          "name": "Force Entity Death",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ignoreHPLossTriggers": true,
          "ignoreDeathTriggers": true
        },
        {
          "name": "Mark Entity For Immediate Death",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"518821924\">Aglaea_Ability03</a>[<span class=\"descriptionNumberColor\">Supreme Stance</span>]"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-498968511\">Aglaea_Ability03_Sub</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1374425540\">Memosprite_AglaeaServant_SummonerAddSpeed</a>[<span class=\"descriptionNumberColor\">A Body Brewed by Tears</span>]"
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "Garmentmaker_Servant_AglaeaServant_Ability11_Together_Part02": {
      "fileName": "Garmentmaker_Servant_AglaeaServant_Ability11_Together_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "Garmentmaker_Servant_AglaeaServant_Ability11_Together_Part01": {
      "fileName": "Garmentmaker_Servant_AglaeaServant_Ability11_Together_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "variableName": "_CurrentSpeed",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">Speed</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "_ServantCurrentSpeed",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">Speed</span>&nbsp;"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-892037211\">Memosprite_Aglaea_Ability11_Mark</a>"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_Rank06Ratio",
          "value": 0
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1495039477\">Memosprite_AglaeaServant_Interwine_AdjoinMark</a>"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] (Ability11_DamagePercentage) || Variables[1] (_Rank06Ratio) || ADD || RETURN",
              "displayLines": "(Ability11_DamagePercentage + _Rank06Ratio)",
              "constants": [],
              "variables": [
                "Ability11_DamagePercentage",
                "_Rank06Ratio"
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (_PairStanceDMG1) || Constants[0] (0.5) || MUL || RETURN",
              "displayLines": "(_PairStanceDMG1 * 0.5)",
              "constants": [
                0.5
              ],
              "variables": [
                "_PairStanceDMG1"
              ]
            },
            "ToughnessDMGType": {
              "DamageType": "Thunder"
            },
            "instanceTag": "AglasaPairsDamage",
            "Tags": [
              "Joint-Attack"
            ],
            "attackType": "Basic ATK"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] (Ability11_DamagePercentageAD) || Variables[1] (_Rank06Ratio) || ADD || RETURN",
              "displayLines": "(Ability11_DamagePercentageAD + _Rank06Ratio)",
              "constants": [],
              "variables": [
                "Ability11_DamagePercentageAD",
                "_Rank06Ratio"
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (_PairStanceDMG2) || Constants[0] (0.5) || MUL || RETURN",
              "displayLines": "(_PairStanceDMG2 * 0.5)",
              "constants": [
                0.5
              ],
              "variables": [
                "_PairStanceDMG2"
              ]
            },
            "ToughnessDMGType": {
              "DamageType": "Thunder"
            },
            "instanceTag": "AglasaPairsDamage",
            "Tags": [
              "Joint-Attack"
            ],
            "attackType": "Basic ATK"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-892037211\">Memosprite_Aglaea_Ability11_Mark</a>"
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "Garmentmaker_Servant_AglaeaServant_Passive": {
      "fileName": "Garmentmaker_Servant_AglaeaServant_Passive",
      "childAbilityList": [
        "Garmentmaker_Servant_AglaeaServant_Passive",
        "Garmentmaker_Servant_AglaeaServant_Ability11_Together_Part01",
        "Garmentmaker_Servant_AglaeaServant_Ability11_Together_Part02",
        "Garmentmaker_Servant_Aglaea_PassiveAbility01_ForceKill_Insert"
      ],
      "skillTrigger": "SkillP01",
      "abilityType": "Talent",
      "energy": 10,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"68059554\">Memosprite_AglaeaServant_Passive</a>"
        },
        {
          "name": "Define Custom Variable",
          "scope": "AITag",
          "variableName": "DamageCarry",
          "value": 100
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 4,
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Summoner}}"
            }
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1355909707\">Memosprite_Aglaea_Eidolon4_Listen</a>"
            }
          ]
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1197305850\">Memosprite_AglaeaServantPassive_DamageAddedRatio</a>",
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
                    "operator": "Constants[0] (1) || Variables[0] (MDF_Property) || SUB || RETURN",
                    "displayLines": "(1 - MDF_Property)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "MDF_Property"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1555515053\">Memosprite_AglaeaServant_CritDmg</a>",
          "stackType": "Replace",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_CritDmg) || RETURN",
                    "displayLines": "MDF_CritDmg",
                    "constants": [],
                    "variables": [
                      "MDF_CritDmg"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__68059554\">Memosprite_AglaeaServant_Passive</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster's Summoner}}"
                  },
                  "scope": "SummonerEntity",
                  "variableName": "BattleEventCount",
                  "value": 0
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster's Summoner}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"518821924\">Aglaea_Ability03</a>[<span class=\"descriptionNumberColor\">Supreme Stance</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster's Summoner}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-498968511\">Aglaea_Ability03_Sub</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster's Summoner}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1374425540\">Memosprite_AglaeaServant_SummonerAddSpeed</a>[<span class=\"descriptionNumberColor\">A Body Brewed by Tears</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster's Summoner}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1289898164\">Servant_Aglaea_Summon_PursuedDamage</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster's Summoner}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1725518252\">Aglaea_Ability03_ForbidSkill</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster's Summoner}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"755493734\">Aglaea_Ability02_ChangeSkill</a>"
                }
              ]
            },
            {
              "eventTrigger": "Deal Damage End [Owner]: Hit",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"216440055\">Aglaea_GoldenSword_Mark</a>[<span class=\"descriptionNumberColor\">Seam Stitch</span>]",
                    "justAddedOrActive": true,
                    "includePreDeath": true
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Switch",
                      "value": 1
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
                    "name": "Eidolon Activated",
                    "eidolon": 4,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster's Summoner}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_MaxLayer",
                      "value": {
                        "operator": "Variables[0] (6) || Variables[1] (1) || ADD || RETURN",
                        "displayLines": "(6 + 1)",
                        "constants": [],
                        "variables": [
                          6,
                          1
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_MaxLayer",
                      "value": {
                        "operator": "Variables[0] (6) || RETURN",
                        "displayLines": "6",
                        "constants": [],
                        "variables": [
                          6
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": 0,
                  "displaySubType": "Fraction",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster's Summoner}}"
                  },
                  "maximum": {
                    "operator": "Variables[0] (_MaxLayer) || RETURN",
                    "displayLines": "_MaxLayer",
                    "constants": [],
                    "variables": [
                      "_MaxLayer"
                    ]
                  },
                  "assignState": "True",
                  "bar#": "Number"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Trace Activated",
                    "conditionList": "PointB2",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster's Summoner}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster's Summoner}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"783183170\">Memosprite_AglaeaServant_SummonerKeepSpeed</a>"
                      },
                      "passed": [
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "variableName": "_KeepSpeedLayer"
                        },
                        {
                          "name": "Define Custom Variable with Modifier Values",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster's Summoner}}"
                          },
                          "valueType": "Layer",
                          "variableName": "_KeepSpeedLayer",
                          "modifierName": "<a class=\"gModGreen\" id=\"783183170\">Memosprite_AglaeaServant_SummonerKeepSpeed</a>",
                          "multiplier": 1
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "_KeepSpeedLayer",
                            "compareType": ">=",
                            "value2": {
                              "operator": "Variables[0] (1) || RETURN",
                              "displayLines": "1",
                              "constants": [],
                              "variables": [
                                1
                              ]
                            }
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-394991116\">Memosprite_AglaeaServant_AddSpeed</a>[<span class=\"descriptionNumberColor\">A Body Brewed by Tears</span>]",
                              "stackLimit": {
                                "operator": "Variables[0] (_MaxLayer) || RETURN",
                                "displayLines": "_MaxLayer",
                                "constants": [],
                                "variables": [
                                  "_MaxLayer"
                                ]
                              },
                              "addStacksPerTrigger": {
                                "operator": "Variables[0] (1) || RETURN",
                                "displayLines": "1",
                                "constants": [],
                                "variables": [
                                  1
                                ]
                              }
                            }
                          ],
                          "failed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-394991116\">Memosprite_AglaeaServant_AddSpeed</a>[<span class=\"descriptionNumberColor\">A Body Brewed by Tears</span>]",
                              "stackLimit": {
                                "operator": "Variables[0] (_MaxLayer) || RETURN",
                                "displayLines": "_MaxLayer",
                                "constants": [],
                                "variables": [
                                  "_MaxLayer"
                                ]
                              },
                              "addStacksPerTrigger": {
                                "operator": "Variables[0] (_KeepSpeedLayer) || RETURN",
                                "displayLines": "_KeepSpeedLayer",
                                "constants": [],
                                "variables": [
                                  "_KeepSpeedLayer"
                                ]
                              }
                            }
                          ]
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster's Summoner}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"783183170\">Memosprite_AglaeaServant_SummonerKeepSpeed</a>"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Trace Activated",
                    "conditionList": "PointB2",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster's Summoner}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-394991116\">Memosprite_AglaeaServant_AddSpeed</a>[<span class=\"descriptionNumberColor\">A Body Brewed by Tears</span>]"
                      },
                      "passed": [
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "variableName": "_AddSpeedLayer"
                        },
                        {
                          "name": "Define Custom Variable with Modifier Values",
                          "valueType": "Layer",
                          "variableName": "_AddSpeedLayer",
                          "modifierName": "<a class=\"gModGreen\" id=\"-394991116\">Memosprite_AglaeaServant_AddSpeed</a>[<span class=\"descriptionNumberColor\">A Body Brewed by Tears</span>]",
                          "multiplier": 1
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster's Summoner}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"783183170\">Memosprite_AglaeaServant_SummonerKeepSpeed</a>",
                          "addStacksPerTrigger": {
                            "operator": "Variables[0] (_AddSpeedLayer) || RETURN",
                            "displayLines": "_AddSpeedLayer",
                            "constants": [],
                            "variables": [
                              "_AddSpeedLayer"
                            ]
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster's Summoner}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"755493734\">Aglaea_Ability02_ChangeSkill</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster's Summoner}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1984850438\">Aglaea_Eidolon6_Effect2</a>[<span class=\"descriptionNumberColor\">Fluctuate in the Tapestry of Fates</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster's Summoner}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1917871114\">Aglaea_Eidolon6_Listen</a>"
                },
                {
                  "name": "Change Character UI",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster's Summoner}}"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Target Exists",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Aglaea's Ult Countdown}}"
                    },
                    "living": true
                  },
                  "passed": [
                    {
                      "name": "Force Entity Death",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Aglaea's Ult Countdown}}"
                      },
                      "ignoreHPLossTriggers": true,
                      "ignoreDeathTriggers": true
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Attack Start [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "Switch",
                  "value": 0
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
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "Switch",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-394991116\">Memosprite_AglaeaServant_AddSpeed</a>[<span class=\"descriptionNumberColor\">A Body Brewed by Tears</span>]",
                      "stackLimit": {
                        "operator": "Variables[0] (_MaxLayer) || RETURN",
                        "displayLines": "_MaxLayer",
                        "constants": [],
                        "variables": [
                          "_MaxLayer"
                        ]
                      },
                      "addStacksPerTrigger": 1
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster's Summoner}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"518821924\">Aglaea_Ability03</a>[<span class=\"descriptionNumberColor\">Supreme Stance</span>]"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster's Summoner}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1374425540\">Memosprite_AglaeaServant_SummonerAddSpeed</a>[<span class=\"descriptionNumberColor\">A Body Brewed by Tears</span>]",
                          "stackLimit": {
                            "operator": "Variables[0] (_MaxLayer) || RETURN",
                            "displayLines": "_MaxLayer",
                            "constants": [],
                            "variables": [
                              "_MaxLayer"
                            ]
                          },
                          "addStacksPerTrigger": 1,
                          "casterAssign": "TargetSelf"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "Garmentmaker_Servant_AglaeaServant_Ability11_Part02": {
      "fileName": "Garmentmaker_Servant_AglaeaServant_Ability11_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] (1.1) || RETURN",
              "displayLines": "1.1",
              "constants": [],
              "variables": [
                1.1
              ]
            },
            "HitSplit": 0.3,
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "attackType": "Memosprite",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] (1.1) || RETURN",
              "displayLines": "1.1",
              "constants": [],
              "variables": [
                1.1
              ]
            },
            "HitSplit": 0.3,
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "attackType": "Memosprite",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "Looped Event",
          "maxLoops": 2,
          "Event": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "operator": "Variables[0] (1.1) || RETURN",
                  "displayLines": "1.1",
                  "constants": [],
                  "variables": [
                    1.1
                  ]
                },
                "HitSplit": 0.1,
                "Toughness": {
                  "operator": "Variables[0] (ST Toughness Value) || RETURN",
                  "displayLines": "ST Toughness Value",
                  "constants": [],
                  "variables": [
                    "ST Toughness Value"
                  ]
                },
                "Tags": null,
                "attackType": "Memosprite",
                "EnergyGainPercent": "100%"
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Targets Adjacent(Blast)}}"
              },
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "operator": "Variables[0] (0.66) || RETURN",
                  "displayLines": "0.66",
                  "constants": [],
                  "variables": [
                    0.66
                  ]
                },
                "HitSplit": 0.25,
                "Toughness": {
                  "operator": "Variables[0] (Blast Toughness Value) || RETURN",
                  "displayLines": "Blast Toughness Value",
                  "constants": [],
                  "variables": [
                    "Blast Toughness Value"
                  ]
                },
                "Tags": null,
                "attackType": "Memosprite"
              }
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1495039477\">Memosprite_AglaeaServant_Interwine_AdjoinMark</a>"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] (1.1) || RETURN",
              "displayLines": "1.1",
              "constants": [],
              "variables": [
                1.1
              ]
            },
            "HitSplit": 0.2,
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "attackType": "Memosprite",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] (0.66) || RETURN",
              "displayLines": "0.66",
              "constants": [],
              "variables": [
                0.66
              ]
            },
            "HitSplit": 0.5,
            "Toughness": {
              "operator": "Variables[0] (Blast Toughness Value) || RETURN",
              "displayLines": "Blast Toughness Value",
              "constants": [],
              "variables": [
                "Blast Toughness Value"
              ]
            },
            "Tags": null,
            "attackType": "Memosprite"
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "Garmentmaker_Servant_AglaeaServant_Ability11_Part01": {
      "fileName": "Garmentmaker_Servant_AglaeaServant_Ability11_Part01",
      "childAbilityList": [
        "Garmentmaker_Servant_AglaeaServant_Ability11_Part01",
        "Garmentmaker_Servant_AglaeaServant_Ability11_Part02",
        "Garmentmaker_Servant_AglaeaServant_Ability11_Camera",
        "Garmentmaker_Servant_AglaeaServant_Ability11_Camera_Charm"
      ],
      "skillTrigger": "Skill01",
      "abilityType": "Memosprite",
      "energy": 20,
      "toughnessList": [
        10,
        0,
        0
      ],
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "inherentTarget": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "ability": "Servant_AglaeaServant_Ability11_Part02",
          "isTrigger": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "flagName": "Charm"
          },
          "passed": [
            "Deleted bullshit"
          ],
          "failed": [
            "Deleted bullshit"
          ]
        },
        "Deleted bullshit"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target",
        "subTarget": "Blast Targets"
      }
    }
  }
}