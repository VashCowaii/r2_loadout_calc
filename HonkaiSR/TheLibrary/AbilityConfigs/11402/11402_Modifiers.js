const configAbility = {
  "fileName": "11402_Modifiers",
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
                    "operator": "Variables[0] (UnusedUnderThisBase_4077) || RETURN",
                    "displayLines": "UnusedUnderThisBase_4077",
                    "constants": [],
                    "variables": [
                      "UnusedUnderThisBase_4077"
                    ]
                  },
                  "valuePerStack": {
                    "_IgnoreDefenceRatio": {
                      "operator": "Variables[0] (UnusedUnderThisBase_4054) || RETURN",
                      "displayLines": "UnusedUnderThisBase_4054",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_4054"
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
                    "operator": "Variables[0] (UnusedUnderThisBase_4077) || RETURN",
                    "displayLines": "UnusedUnderThisBase_4077",
                    "constants": [],
                    "variables": [
                      "UnusedUnderThisBase_4077"
                    ]
                  },
                  "valuePerStack": {
                    "_IgnoreDefenceRatio": {
                      "operator": "Variables[0] (UnusedUnderThisBase_4054) || RETURN",
                      "displayLines": "UnusedUnderThisBase_4054",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_4054"
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
          "eventTrigger": "Turn End [Anyone]",
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
                "conditionList": "PointB1"
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
              "skillSlot": "Basic ATK",
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
              "skillSlot": "Basic ATK",
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
                      "value": "UnusedUnderThisBase_6496"
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
          "eventTrigger": "Being Attacked End [Owner]",
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
                        "operator": "Variables[0] (UnusedUnderThisBase_4053) || RETURN",
                        "displayLines": "UnusedUnderThisBase_4053",
                        "constants": [],
                        "variables": [
                          "UnusedUnderThisBase_4053"
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
                            "operator": "Variables[0] (UnusedUnderThisBase_4053) || RETURN",
                            "displayLines": "UnusedUnderThisBase_4053",
                            "constants": [],
                            "variables": [
                              "UnusedUnderThisBase_4053"
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
                "operator": "Variables[0] (_Layer) || Variables[1] (UnusedUnderThisBase_12254) || MUL || RETURN",
                "displayLines": "(_Layer * UnusedUnderThisBase_12254)",
                "constants": [],
                "variables": [
                  "_Layer",
                  "UnusedUnderThisBase_12254"
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
                "operator": "Variables[0] (_CurrentSpeed) || Variables[1] (UnusedUnderThisBase_13089) || MUL || Variables[2] (_ServantCurrentSpeed) || Variables[3] (UnusedUnderThisBase_13090) || MUL || ADD || RETURN",
                "displayLines": "((_CurrentSpeed * UnusedUnderThisBase_13089) + (_ServantCurrentSpeed * UnusedUnderThisBase_13090))",
                "constants": [],
                "variables": [
                  "_CurrentSpeed",
                  "UnusedUnderThisBase_13089",
                  "_ServantCurrentSpeed",
                  "UnusedUnderThisBase_13090"
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
}