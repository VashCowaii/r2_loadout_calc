const configAbility = {
  "fileName": "11309_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__-24245169\">Robin_AbilityEidolon6_ExtraRatioForShow</a>[<span class=\"descriptionNumberColor\">Moonless Midnight</span>]",
      "stackType": "ReplaceByCaster",
      "description": "Additionally increases the CRIT DMG for the Ultimate's Physical Additional DMG dealt by <span class=\"descriptionNumberColor\">SkillRank_Rank06_P2_ExtraRatio</span>. The remaining triggerable count is <span class=\"descriptionNumberColor\">_Rank06_BigDmgCount</span>.",
      "type": "Buff",
      "effectName": "CRIT DMG Boost",
      "statusName": "Moonless Midnight"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-893534812\">Robin_PassiveAbility_CritDmgUp</a>[<span class=\"descriptionNumberColor\">Tonal Resonance</span>]",
      "stackType": "ReplaceByCaster",
      "description": "CRIT DMG increases by <span class=\"descriptionNumberColor\">#SkillP01_P1_Ratio</span>.",
      "type": "Buff",
      "statusName": "Tonal Resonance",
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
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
              "statValue": {
                "displayLines": "UnusedUnderThisBase_15141"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1748268273\">Robin_PassiveAbility_UltraPreshow</a>",
      "stackType": "ReplaceByCaster",
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "target": {
          "name": "Target Name",
          "target": "{{All Team Members(Exclude Self)}}"
        },
        "skillType": [
          "Ultimate"
        ],
        "delayAdvancePreview": {
          "name": "Delay/Advance Preview",
          "previewValue": "0(Set AV)"
        }
      }
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-169791812\">Robin_Ability03_AtkUp_FriendForShow</a>[<span class=\"descriptionNumberColor\">Concerto</span>]",
      "stackType": "ReplaceByCaster",
      "description": "Increases ATK by <span class=\"descriptionNumberColor\">BaseAttack_Total</span>. Robin deals Additional DMG after attacking.",
      "type": "Buff",
      "effectName": "ATK Boost",
      "statusName": "Concerto",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1126110528\">Robin_Ability03_AtkUp_CasterForShow</a>[<span class=\"descriptionNumberColor\">Concerto</span>]",
      "stackType": "ReplaceByCaster",
      "description": "Increases ATK by <span class=\"descriptionNumberColor\">BaseAttack_Total</span> and becomes immune to Crowd Control debuffs.",
      "type": "Buff",
      "effectName": "ATK Boost, immune to Crowd Control debuffs",
      "statusName": "Concerto",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__601034929\">Robin_Ability02_DmgUpFriendListener</a>[<span class=\"descriptionNumberColor\">Aria</span>]",
      "stackType": "ReplaceByCaster",
      "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">Skill02_P1_DmgUpForShow</span>.",
      "type": "Buff",
      "effectName": "DMG Boost",
      "statusName": "Aria"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-341772219\">Robin_Ability02_DmgUpCasterListener</a>[<span class=\"descriptionNumberColor\">Aria</span>]",
      "stackType": "ReplaceByCaster",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">Skill02_P1_DmgUpForShow</span>.",
      "type": "Buff",
      "effectName": "DMG Boost",
      "statusName": "Aria",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"853884831\">Robin_Ability02_Aura</a>"
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-746794403\">Robin_Ability02_DmgUp</a>",
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
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
              "statValue": {
                "displayLines": "UnusedUnderThisBase_7310"
              }
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "UnusedUnderThisBase_7310"
              },
              "variableName": "Skill02_P1_DmgUpForShow"
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-418120914\">Robin_Ability03_BonusAction</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Action Advance/Delay",
              "advanceType": "Set",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "set": 0
            },
            "Modifier Deletes Itself"
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1181361675\">Robin_Ability03_PursuedDmg</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"1466558420\">PursuedDamage_PerformanceDelay</a>",
              "target": {
                "name": "Target Name",
                "target": "{{Attack Targets of Modifier Holder}}"
              }
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Attack Targets of Modifier Holder}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "ifTargetFound": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 6
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "(_Rank06_BigDmgCount - 1)"
                      },
                      "variableName": "_Rank06_BigDmgCount"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "_Rank06_BigDmgCount",
                        "compareType": "=",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-24245169\">Robin_AbilityEidolon6_ExtraRatioForShow</a>[<span class=\"descriptionNumberColor\">Moonless Midnight</span>]"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Physical",
                    "Damage": {
                      "displayLines": "Ability03_DmgRatio"
                    },
                    "Toughness": null,
                    "Tags": [
                      "Fixed-Crit Additional DMG(Robin)"
                    ],
                    "attackType": "Additional DMG"
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
      "for": "<a class=\"gModGreen\" id=\"mod__102391588\">Robin_Ability03_AtkUp</a>",
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
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">AttackConverted</span>&nbsp;",
              "statValue": {
                "displayLines": "Ability03_AtkUpValue"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1180409879\">Robin_Ability03Area_sub_disableAction</a>",
      "modifierFlags": [
        "DisableAction"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__505362608\">Robin_Ability03Area_sub</a>",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "Endurance",
        "CLEANSE_CONTROL_ANY"
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Set Hit-Class",
              "reset": true
            },
            {
              "name": "Change Entity Turn-State",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "phase": "Phase1"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1180409879\">Robin_Ability03Area_sub_disableAction</a>"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Add Battle Event",
              "teamName": "Player Team",
              "eventID": 11309,
              "variables": {
                "BattleEvent_Geji_BaseSpeed": {
                  "displayLines": "UnusedUnderThisBase_7306"
                }
              }
            },
            {
              "name": "Set Hit-Class"
            },
            {
              "name": "Change Entity Turn-State",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "phase": "Phase2"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1180409879\">Robin_Ability03Area_sub_disableAction</a>"
            }
          ]
        },
        {
          "eventTrigger": "When Modifier is Added [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "STAT_ForceControl"
              },
              "passed": [
                {
                  "name": "Force Entity Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Robin's Countdown Battle Event}}"
                  },
                  "ignoreHPLossTriggers": true,
                  "ignoreDeathTriggers": true
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"32210681\">Robin_Ability03Area</a>"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-184831783\">Robin_AbilityEidolon4_ResistAll</a>[<span class=\"descriptionNumberColor\">Raindrop Key</span>]",
      "stackType": "ReplaceByCaster",
      "description": "Increases Effect RES by <span class=\"descriptionNumberColor\">#SkillRank_Rank04_P1_Ratio</span>.",
      "type": "Buff",
      "effectName": "Effect RES Boost",
      "statusName": "Raindrop Key",
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
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">EffectRES</span>&nbsp;",
              "statValue": {
                "displayLines": "UnusedUnderThisBase_8376"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1430501646\">Robin_AbilityEidolon4_DispelControl</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Action Choice Window [Anyone]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        },
        {
          "eventTrigger": "Turn [Anyone]: End",
          "execute": [
            "Modifier Deletes Itself"
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Dispel Debuffs",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "dispelCount": 99,
              "toRemove": [
                "STAT_CTRL"
              ]
            },
            "Modifier Deletes Itself"
          ]
        },
        {
          "eventTrigger": "Ability Use [Anyone]: End",
          "execute": [
            "Modifier Deletes Itself"
          ]
        },
        {
          "eventTrigger": "Injected Ability Use [Anyone]: Start",
          "execute": [
            "Modifier Deletes Itself"
          ]
        },
        {
          "eventTrigger": "Injected Ability Use [Anyone]: End",
          "execute": [
            "Modifier Deletes Itself"
          ]
        },
        {
          "eventTrigger": "Injected Ability Use [Anyone]: Aborted",
          "execute": [
            "Modifier Deletes Itself"
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-644782265\">Robin_AbilityEidolon2_Bonus</a>[<span class=\"descriptionNumberColor\">Afternoon Tea For Two</span>]",
      "stackType": "Replace",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "modifierFlags": [
        "STAT_SpeedUp"
      ],
      "description": "SPD increases by <span class=\"descriptionNumberColor\">#SkillRank_Rank02_P1_ExtraRatio</span>.",
      "type": "Buff",
      "effectName": "SPD Boost",
      "statusName": "Afternoon Tea For Two",
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
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
              "statValue": {
                "displayLines": "UnusedUnderThisBase_7298"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__712086196\">Robin_AbilityEidolon1_Bonus</a>[<span class=\"descriptionNumberColor\">Land of Smiles</span>]",
      "stackType": "Replace",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "description": "Increases All-Type RES PEN by <span class=\"descriptionNumberColor\">#SkillRank_Rank01_P1_Ratio</span>.",
      "type": "Buff",
      "effectName": "All-Type RES PEN Boost",
      "statusName": "Land of Smiles",
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
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceAllPEN</span>&nbsp;",
              "statValue": {
                "displayLines": "UnusedUnderThisBase_8371"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__32210681\">Robin_Ability03Area</a>",
      "stackType": "ReplaceByCaster",
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{All Team Members with Unselectable Team Members(Exclude Self)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-169791812\">Robin_Ability03_AtkUp_FriendForShow</a>[<span class=\"descriptionNumberColor\">Concerto</span>]",
          "haloStatus": true,
          "valuePerStack": {
            "BaseAttack_Total": {
              "displayLines": "Skill03_BaseAttack_Total"
            }
          }
        },
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{All Team Members with Unselectables}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"102391588\">Robin_Ability03_AtkUp</a>",
          "haloStatus": true,
          "valuePerStack": {
            "Ability03_AtkUpValue": {
              "displayLines": "Skill03_BaseAttack_Total"
            }
          }
        },
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{All Team Members with Unselectables}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1181361675\">Robin_Ability03_PursuedDmg</a>",
          "haloStatus": true,
          "valuePerStack": {
            "Ability03_DmgRatio": {
              "displayLines": "UnusedUnderThisBase_7637"
            }
          }
        },
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{All Team Members with Unselectables}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1854203506\">Robin_Trace02_InsertDmgUp</a>[<span class=\"descriptionNumberColor\">Impromptu Flourish</span>]",
          "haloStatus": true,
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "PointB2"
          },
          "valuePerStack": {
            "Trace_PointB2_P1_Ratio": {
              "displayLines": "UnusedUnderThisBase_8190"
            }
          }
        },
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{All Team Members with Unselectables}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"712086196\">Robin_AbilityEidolon1_Bonus</a>[<span class=\"descriptionNumberColor\">Land of Smiles</span>]",
          "haloStatus": true,
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 1
          }
        },
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{All Team Members with Unselectables}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-644782265\">Robin_AbilityEidolon2_Bonus</a>[<span class=\"descriptionNumberColor\">Afternoon Tea For Two</span>]",
          "haloStatus": true,
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 2
          }
        },
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{All Team Members with Unselectables}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-184831783\">Robin_AbilityEidolon4_ResistAll</a>[<span class=\"descriptionNumberColor\">Raindrop Key</span>]",
          "haloStatus": true,
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 4
          }
        },
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-24245169\">Robin_AbilityEidolon6_ExtraRatioForShow</a>[<span class=\"descriptionNumberColor\">Moonless Midnight</span>]",
          "haloStatus": true,
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 6
          },
          "valuePerStack": {
            "AbilityRank_Eidolon6_P2_ExtraRatio": {
              "displayLines": "UnusedUnderThisBase_7307"
            }
          }
        }
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1126110528\">Robin_Ability03_AtkUp_CasterForShow</a>[<span class=\"descriptionNumberColor\">Concerto</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"505362608\">Robin_Ability03Area_sub</a>"
            },
            {
              "name": "Set Action-State",
              "on": null,
              "stateName": "Robin"
            }
          ]
        },
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Additional DMG"
                    ]
                  },
                  {
                    "name": "Has Damage Tags",
                    "damageTag": [
                      "Fixed-Crit Additional DMG(Robin)"
                    ]
                  }
                ]
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Eidolon Activated",
                        "eidolon": 6
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "_Rank06_BigDmgCount",
                        "compareType": ">=",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateFIXED</span>&nbsp;",
                          "value": "UnusedUnderThisBase_8459"
                        },
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageFIXED</span>&nbsp;",
                          "value": "(UnusedUnderThisBase_7304 + UnusedUnderThisBase_7307)"
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateFIXED</span>&nbsp;",
                          "value": "UnusedUnderThisBase_8459"
                        },
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageFIXED</span>&nbsp;",
                          "value": "UnusedUnderThisBase_7304"
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
          "eventTrigger": "Being Limbo [Owner]",
          "execute": [
            {
              "name": "Force Entity Death",
              "target": {
                "name": "Target Name",
                "target": "{{Robin's Countdown Battle Event}}"
              },
              "ignoreHPLossTriggers": true,
              "ignoreDeathTriggers": true
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1126110528\">Robin_Ability03_AtkUp_CasterForShow</a>[<span class=\"descriptionNumberColor\">Concerto</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"505362608\">Robin_Ability03Area_sub</a>"
            },
            "Modifier Deletes Itself"
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Set Action-State",
              "on": null,
              "stateName": "Robin",
              "state": false
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"505362608\">Robin_Ability03Area_sub</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members(Exclude Self)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-418120914\">Robin_Ability03_BonusAction</a>"
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
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1430501646\">Robin_AbilityEidolon4_DispelControl</a>"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 6
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "UnusedUnderThisBase_15335"
                  },
                  "variableName": "_Rank06_BigDmgCount"
                }
              ]
            },
            {
              "name": "Define Custom Variable with Stat",
              "variableName": "Skill03_BaseAttack",
              "readTarget": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "value": "&nbsp;<span class=\"descriptionNumberColor\">AttackSUM</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable with Stat",
              "variableName": "Skill03_BaseAttack_Convert",
              "readTarget": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "value": "&nbsp;<span class=\"descriptionNumberColor\">AttackConverted</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(Skill03_BaseAttack - Skill03_BaseAttack_Convert)"
              },
              "variableName": "Skill03_BaseAttack"
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "UnusedUnderThisBase_7312"
              },
              "variableName": "Skill03_BaseAttack_Total_Ratio"
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(Skill03_BaseAttack * Skill03_BaseAttack_Total_Ratio)"
              },
              "variableName": "Skill03_BaseAttack_Total"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Skill03_BaseAttack_Total",
                "compareType": "<",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "UnusedUnderThisBase_7300"
                  },
                  "variableName": "Skill03_BaseAttack_Total"
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(Skill03_BaseAttack_Total + UnusedUnderThisBase_7300)"
                  },
                  "variableName": "Skill03_BaseAttack_Total"
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1126110528\">Robin_Ability03_AtkUp_CasterForShow</a>[<span class=\"descriptionNumberColor\">Concerto</span>]",
              "valuePerStack": {
                "BaseAttack_Total": {
                  "displayLines": "Skill03_BaseAttack_Total"
                }
              }
            }
          ]
        },
        {
          "eventTrigger": "Pre-Death [Owner]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1126110528\">Robin_Ability03_AtkUp_CasterForShow</a>[<span class=\"descriptionNumberColor\">Concerto</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"505362608\">Robin_Ability03Area_sub</a>"
            },
            {
              "name": "Set Action-State",
              "on": null,
              "stateName": "Robin"
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__853884831\">Robin_Ability02_Aura</a>",
      "stackType": "ReplaceByCaster",
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{All Team Members with Unselectables}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-746794403\">Robin_Ability02_DmgUp</a>",
          "haloStatus": true
        },
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{All Team Members with Unselectable Team Members(Exclude Self)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"601034929\">Robin_Ability02_DmgUpFriendListener</a>[<span class=\"descriptionNumberColor\">Aria</span>]",
          "haloStatus": true
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1918215907\">Robin_PassiveAbility01_setSp</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 2
              },
              "passed": [
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "value": {
                    "displayLines": "(UnusedUnderThisBase_7297 + UnusedUnderThisBase_15138)"
                  },
                  "isFixed": "* ERR"
                }
              ],
              "failed": [
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "value": {
                    "displayLines": "UnusedUnderThisBase_7297"
                  },
                  "isFixed": "* ERR"
                }
              ]
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"9911415\">Robin_Passive_PassiveCharge</a>"
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__594877276\">Robin_PassiveAbility01_BattleEvent</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Turn [Owner]: Pre-action Phase",
          "execute": [
            {
              "name": "Set Action-State",
              "on": null,
              "stateName": "Robin"
            },
            {
              "name": "Action Advance/Delay",
              "advanceType": "Set",
              "target": {
                "name": "Target Name",
                "target": "{{Battle Event's Caster}}"
              },
              "set": 0
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Battle Event's Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"32210681\">Robin_Ability03Area</a>"
            },
            {
              "name": "Force Entity Death",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "ignoreHPLossTriggers": true,
              "ignoreDeathTriggers": true
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__9911415\">Robin_Passive_PassiveCharge</a>",
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
              "variableName": "MDF_CurrentActionCount",
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
                "value1": "<a class=\"gModGreen\" id=\"9911415\">Robin_Passive_PassiveCharge</a>",
                "compareType": "=",
                "value2": {
                  "displayLines": "MDF_CurrentActionCount"
                },
                "valueType": "Layer"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1918215907\">Robin_PassiveAbility01_setSp</a>"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1854203506\">Robin_Trace02_InsertDmgUp</a>[<span class=\"descriptionNumberColor\">Impromptu Flourish</span>]",
      "stackType": "ReplaceByCaster",
      "stackData": [
        "SkillTree_PointB2_P1_Ratio"
      ],
      "description": "Increases Follow-Up ATK CRIT DMG by <span class=\"descriptionNumberColor\">SkillTree_PointB2_P1_Ratio</span>.",
      "type": "Buff",
      "effectName": "CRIT DMG Boost",
      "statusName": "Impromptu Flourish",
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
                ]
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageSUM</span>&nbsp;",
                      "value": "SkillTree_PointB2_P1_Ratio"
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
      "for": "<a class=\"gModGreen\" id=\"mod__979681608\">Robin_Ability03AreaRefresh</a>",
      "stackType": "ReplaceByCaster",
      "abilityValueChange": [
        {
          "name": "Ability Value Changes",
          "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "onChange": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"32210681\">Robin_Ability03Area</a>"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "variableName": "Skill03_BaseAttack",
                      "readTarget": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">AttackSUM</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "variableName": "Skill03_BaseAttack_Convert",
                      "readTarget": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">AttackConverted</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "(Skill03_BaseAttack - Skill03_BaseAttack_Convert)"
                      },
                      "variableName": "Skill03_BaseAttack"
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "UnusedUnderThisBase_7312"
                      },
                      "variableName": "Skill03_BaseAttack_Total_Ratio"
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "(Skill03_BaseAttack * Skill03_BaseAttack_Total_Ratio)"
                      },
                      "variableName": "Skill03_BaseAttack_Total"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "Skill03_BaseAttack_Total",
                        "compareType": "<",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "value": {
                            "displayLines": "UnusedUnderThisBase_7300"
                          },
                          "variableName": "Skill03_BaseAttack_Total"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable",
                          "value": {
                            "displayLines": "(Skill03_BaseAttack_Total + UnusedUnderThisBase_7300)"
                          },
                          "variableName": "Skill03_BaseAttack_Total"
                        }
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1126110528\">Robin_Ability03_AtkUp_CasterForShow</a>[<span class=\"descriptionNumberColor\">Concerto</span>]",
                      "valuePerStack": {
                        "BaseAttack_Total": {
                          "displayLines": "Skill03_BaseAttack_Total"
                        }
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{All Team Members with Unselectable Team Members(Exclude Self)}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-169791812\">Robin_Ability03_AtkUp_FriendForShow</a>[<span class=\"descriptionNumberColor\">Concerto</span>]",
                      "valuePerStack": {
                        "BaseAttack_Total": {
                          "displayLines": "Skill03_BaseAttack_Total"
                        }
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{All Team Members with Unselectables}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"102391588\">Robin_Ability03_AtkUp</a>",
                      "valuePerStack": {
                        "Ability03_AtkUpValue": {
                          "displayLines": "Skill03_BaseAttack_Total"
                        },
                        "Ability03_DmgRatio": {
                          "displayLines": "UnusedUnderThisBase_7637"
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
          "name": "Ability Value Changes",
          "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">ATKFlat</span>&nbsp;",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "onChange": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"32210681\">Robin_Ability03Area</a>"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "variableName": "Skill03_BaseAttack",
                      "readTarget": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">AttackSUM</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "variableName": "Skill03_BaseAttack_Convert",
                      "readTarget": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">AttackConverted</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "(Skill03_BaseAttack - Skill03_BaseAttack_Convert)"
                      },
                      "variableName": "Skill03_BaseAttack"
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "UnusedUnderThisBase_7312"
                      },
                      "variableName": "Skill03_BaseAttack_Total_Ratio"
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "(Skill03_BaseAttack * Skill03_BaseAttack_Total_Ratio)"
                      },
                      "variableName": "Skill03_BaseAttack_Total"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "Skill03_BaseAttack_Total",
                        "compareType": "<",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "value": {
                            "displayLines": "UnusedUnderThisBase_7300"
                          },
                          "variableName": "Skill03_BaseAttack_Total"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable",
                          "value": {
                            "displayLines": "(Skill03_BaseAttack_Total + UnusedUnderThisBase_7300)"
                          },
                          "variableName": "Skill03_BaseAttack_Total"
                        }
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1126110528\">Robin_Ability03_AtkUp_CasterForShow</a>[<span class=\"descriptionNumberColor\">Concerto</span>]",
                      "valuePerStack": {
                        "BaseAttack_Total": {
                          "displayLines": "Skill03_BaseAttack_Total"
                        }
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{All Team Members with Unselectable Team Members(Exclude Self)}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-169791812\">Robin_Ability03_AtkUp_FriendForShow</a>[<span class=\"descriptionNumberColor\">Concerto</span>]",
                      "valuePerStack": {
                        "BaseAttack_Total": {
                          "displayLines": "Skill03_BaseAttack_Total"
                        }
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{All Team Members with Unselectables}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"102391588\">Robin_Ability03_AtkUp</a>",
                      "valuePerStack": {
                        "Ability03_AtkUpValue": {
                          "displayLines": "Skill03_BaseAttack_Total"
                        },
                        "Ability03_DmgRatio": {
                          "displayLines": "UnusedUnderThisBase_7637"
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
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1781438521\">Robin_Passive</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1748268273\">Robin_PassiveAbility_UltraPreshow</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-893534812\">Robin_PassiveAbility_CritDmgUp</a>[<span class=\"descriptionNumberColor\">Tonal Resonance</span>]"
            }
          ]
        },
        {
          "eventTrigger": "Action Phase Start [Owner][?]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-341772219\">Robin_Ability02_DmgUpCasterListener</a>[<span class=\"descriptionNumberColor\">Aria</span>]"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "LifeTime",
                  "variableName": "Skill02_EnergyBarCount",
                  "modifierName": "<a class=\"gModGreen\" id=\"-341772219\">Robin_Ability02_DmgUpCasterListener</a>[<span class=\"descriptionNumberColor\">Aria</span>]",
                  "multiplier": 1
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "value": 0,
                  "variableName": "Skill02_EnergyBarCount"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Skill02_EnergyBarCount",
                "compareType": ">",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "displayLines": "Skill02_EnergyBarCount"
                  },
                  "assignState": "True",
                  "priorState": "Active",
                  "bar#": 3,
                  "cooldown": 0
                }
              ],
              "failed": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": 0,
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
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1748268273\">Robin_PassiveAbility_UltraPreshow</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-893534812\">Robin_PassiveAbility_CritDmgUp</a>[<span class=\"descriptionNumberColor\">Tonal Resonance</span>]"
            },
            {
              "name": "Define Custom Variable",
              "value": 1,
              "variableName": "MDF_ActionCount"
            }
          ]
        },
        {
          "eventTrigger": "Entity Created [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of",
                "target1": {
                  "name": "Target Name",
                  "target": "{{Player Team All}}"
                },
                "target2": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                }
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-893534812\">Robin_PassiveAbility_CritDmgUp</a>[<span class=\"descriptionNumberColor\">Tonal Resonance</span>]"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Pre-Death [Owner]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1748268273\">Robin_PassiveAbility_UltraPreshow</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-893534812\">Robin_PassiveAbility_CritDmgUp</a>[<span class=\"descriptionNumberColor\">Tonal Resonance</span>]"
            }
          ]
        },
        {
          "eventTrigger": "Attack DMG End [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of",
                "target1": {
                  "name": "Target Name",
                  "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                },
                "target2": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                }
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"9911415\">Robin_Passive_PassiveCharge</a>",
                  "stackLimit": {
                    "displayLines": "MDF_CurrentActionCount"
                  },
                  "addStacksPerTrigger": 1
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Enter Battle",
          "priorityLevel": -80,
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Trace Activated",
                    "conditionList": "PointB1"
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
                  "name": "Action Advance/Delay",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "advanceType": "Set",
                  "multiAdd": "(0 - UnusedUnderThisBase_7313)"
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"979681608\">Robin_Ability03AreaRefresh</a>"
            }
          ]
        }
      ]
    }
  ],
  "references": []
}