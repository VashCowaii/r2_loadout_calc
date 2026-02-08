const compositeAbilityObject = {
  "fullCharacterName": "Robin",
  "trimCharacterName": "Robin",
  "abilityList": [
    "Robin_Robin_TechniqueInLevel",
    "Robin_Robin_PassiveAbility01",
    "Robin_BattleEventAbility_Robin_Ability03",
    "Robin_Robin_Ability03_Part02",
    "Robin_Robin_Ability03_Part01",
    "Robin_Robin_Ability03_EnterReady",
    "Robin_Robin_Ability02_FriendAttack",
    "Robin_Robin_Ability02_Part02",
    "Robin_Robin_Ability02_Part01",
    "Robin_Robin_Ability01_Part02",
    "Robin_Robin_Ability01_Part01",
    "Robin_Modifiers",
    "Robin_BE_BattleEvents"
  ],
  "abilityObject": {
    "Robin_Robin_TechniqueInLevel": {
      "fileName": "Robin_Robin_TechniqueInLevel",
      "childAbilityList": [
        "Robin_Robin_TechniqueInLevel"
      ],
      "skillTrigger": "SkillMaze",
      "abilityType": "Technique",
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
          "modifier": "<a class=\"gModGreen\" id=\"1129624601\">StageAbility_Maze_Robin_Modifier</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1129624601\">StageAbility_Maze_Robin_Modifier</a>",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "value": {
                    "operator": "Variables[0] (5) || RETURN",
                    "displayLines": "5",
                    "constants": [],
                    "variables": [
                      5
                    ]
                  },
                  "isFixed": "* ERR"
                }
              ],
              "priorityLevel": -80
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "Robin_Robin_PassiveAbility01": {
      "fileName": "Robin_Robin_PassiveAbility01",
      "childAbilityList": [
        "Robin_Robin_PassiveAbility01"
      ],
      "skillTrigger": "SkillP01",
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
          "modifier": "<a class=\"gModGreen\" id=\"1781438521\">Robin_Passive</a>"
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": 0,
          "maximum": {
            "operator": "Variables[0] (3) || RETURN",
            "displayLines": "3",
            "constants": [],
            "variables": [
              3
            ]
          },
          "assignState": "True",
          "priorState": "Normal",
          "bar#": 3,
          "cooldown": 0
        }
      ],
      "references": []
    },
    "Robin_BattleEventAbility_Robin_Ability03": {
      "fileName": "Robin_BattleEventAbility_Robin_Ability03",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"594877276\">Robin_PassiveAbility01_BattleEvent</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"906631439\">Robin_PassiveAbility01_BattleEvent_BaseSpeed</a>"
        },
        {
          "name": "Block Advance/Delay Effects",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "whitelist": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "whitelistTag": "Mask_TurnBasedAdvance"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__906631439\">Robin_PassiveAbility01_BattleEvent_BaseSpeed</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDBase</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (BattleEvent_Geji_BaseSpeed) || RETURN",
                    "displayLines": "BattleEvent_Geji_BaseSpeed",
                    "constants": [],
                    "variables": [
                      "BattleEvent_Geji_BaseSpeed"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "Robin_Robin_Ability03_Part02": {
      "fileName": "Robin_Robin_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"32210681\">Robin_Ability03Area</a>"
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
      "references": []
    },
    "Robin_Robin_Ability03_Part01": {
      "fileName": "Robin_Robin_Ability03_Part01",
      "childAbilityList": [
        "Robin_Robin_Ability03_Camera",
        "Robin_Robin_Ability03_EnterReady",
        "Robin_Robin_Ability03_Part01",
        "Robin_Robin_Ability03_Part02"
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
        {
          "name": "IF",
          "conditions": {
            "name": "Active: Fast-Forward Animations"
          }
        },
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Robin_Ability03_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "Robin_Robin_Ability03_EnterReady": {
      "fileName": "Robin_Robin_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "Robin_Robin_Ability02_FriendAttack": {
      "fileName": "Robin_Robin_Ability02_FriendAttack",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-341772219\">Robin_Ability02_DmgUpCasterListener</a>[<span class=\"descriptionNumberColor\">Aria</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"853884831\">Robin_Ability02_Aura</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-341772219\">Robin_Ability02_DmgUpCasterListener</a>[<span class=\"descriptionNumberColor\">Aria</span>]",
          "duration": {
            "operator": "Variables[0] (3) || RETURN",
            "displayLines": "3",
            "constants": [],
            "variables": [
              3
            ]
          }
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": {
            "operator": "Variables[0] (3) || RETURN",
            "displayLines": "3",
            "constants": [],
            "variables": [
              3
            ]
          },
          "assignState": "True",
          "priorState": "Active",
          "bar#": 3,
          "cooldown": 0
        }
      ],
      "references": []
    },
    "Robin_Robin_Ability02_Part02": {
      "fileName": "Robin_Robin_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Sequential Passage"
          },
          "passed": [
            {
              "name": "Update Energy",
              "on": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "value": {
                "operator": "Variables[0] (5) || RETURN",
                "displayLines": "5",
                "constants": [],
                "variables": [
                  5
                ]
              },
              "isFixed": "* ERR"
            }
          ]
        },
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
          "ability": "Robin_Ability02_FriendAttack"
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
      "references": []
    },
    "Robin_Robin_Ability02_Part01": {
      "fileName": "Robin_Robin_Ability02_Part01",
      "childAbilityList": [
        "Robin_Robin_Ability02_Camera",
        "Robin_Robin_Ability02_Part01",
        "Robin_Robin_Ability02_Part02",
        "Robin_Robin_Ability02_FriendAttack"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Skill",
      "energy": 30,
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
          "ability": "Robin_Ability02_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "Robin_Robin_Ability01_Part02": {
      "fileName": "Robin_Robin_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Shot Fired",
          "caster": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] (1) || RETURN",
              "displayLines": "1",
              "constants": [],
              "variables": [
                1
              ]
            },
            "HitSplit": 0.33,
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
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] (1) || RETURN",
              "displayLines": "1",
              "constants": [],
              "variables": [
                1
              ]
            },
            "HitSplit": 0.33,
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
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] (1) || RETURN",
              "displayLines": "1",
              "constants": [],
              "variables": [
                1
              ]
            },
            "HitSplit": 0.34,
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
      "references": []
    },
    "Robin_Robin_Ability01_Part01": {
      "fileName": "Robin_Robin_Ability01_Part01",
      "childAbilityList": [
        "Robin_Robin_Ability01_Camera",
        "Robin_Robin_Ability01_Part01",
        "Robin_Robin_Ability01_Part02"
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
          "ability": "Robin_Ability01_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "Robin_Modifiers": {
      "fileName": "Robin_Modifiers",
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
                    "operator": "Variables[0] (0.2) || RETURN",
                    "displayLines": "0.2",
                    "constants": [],
                    "variables": [
                      0.2
                    ]
                  }
                }
              ]
            }
          ],
          "description": "CRIT DMG increases by <span class=\"descriptionNumberColor\">#SkillP01_P1_Ratio</span>.",
          "type": "Buff",
          "statusName": "Tonal Resonance"
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
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ],
          "description": "Increases ATK by <span class=\"descriptionNumberColor\">BaseAttack_Total</span>. Robin deals Additional DMG after attacking.",
          "type": "Buff",
          "effectName": "ATK Boost",
          "statusName": "Concerto"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1126110528\">Robin_Ability03_AtkUp_CasterForShow</a>[<span class=\"descriptionNumberColor\">Concerto</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ],
          "description": "Increases ATK by <span class=\"descriptionNumberColor\">BaseAttack_Total</span> and becomes immune to Crowd Control debuffs.",
          "type": "Buff",
          "effectName": "ATK Boost, immune to Crowd Control debuffs",
          "statusName": "Concerto"
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
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">Skill02_P1_DmgUpForShow</span>.",
          "type": "Buff",
          "effectName": "DMG Boost",
          "statusName": "Aria"
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (0.5) || RETURN",
                    "displayLines": "0.5",
                    "constants": [],
                    "variables": [
                      0.5
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "Skill02_P1_DmgUpForShow",
                  "value": {
                    "operator": "Variables[0] (0.5) || RETURN",
                    "displayLines": "0.5",
                    "constants": [],
                    "variables": [
                      0.5
                    ]
                  }
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
                          "variableName": "_Rank06_BigDmgCount",
                          "value": {
                            "operator": "Variables[0] (_Rank06_BigDmgCount) || Constants[0] (1) || SUB || RETURN",
                            "displayLines": "(_Rank06_BigDmgCount - 1)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "_Rank06_BigDmgCount"
                            ]
                          }
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
                          "operator": "Variables[0] (Ability03_DmgRatio) || RETURN",
                          "displayLines": "Ability03_DmgRatio",
                          "constants": [],
                          "variables": [
                            "Ability03_DmgRatio"
                          ]
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">AttackConverted</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (Ability03_AtkUpValue) || RETURN",
                    "displayLines": "Ability03_AtkUpValue",
                    "constants": [],
                    "variables": [
                      "Ability03_AtkUpValue"
                    ]
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
            "Endurance"
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
                  "name": "Change Character Transformation",
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
                      "operator": "Variables[0] (90) || RETURN",
                      "displayLines": "90",
                      "constants": [],
                      "variables": [
                        90
                      ]
                    }
                  }
                },
                {
                  "name": "Set Hit-Class"
                },
                {
                  "name": "Change Character Transformation",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">EffectRES</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (0.5) || RETURN",
                    "displayLines": "0.5",
                    "constants": [],
                    "variables": [
                      0.5
                    ]
                  }
                }
              ]
            }
          ],
          "description": "Increases Effect RES by <span class=\"descriptionNumberColor\">#SkillRank_Rank04_P1_Ratio</span>.",
          "type": "Buff",
          "effectName": "Effect RES Boost",
          "statusName": "Raindrop Key"
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
              "eventTrigger": "Turn End [Anyone]",
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
                    "operator": "Variables[0] (0.16) || RETURN",
                    "displayLines": "0.16",
                    "constants": [],
                    "variables": [
                      0.16
                    ]
                  }
                }
              ]
            }
          ],
          "description": "SPD increases by <span class=\"descriptionNumberColor\">#SkillRank_Rank02_P1_ExtraRatio</span>.",
          "type": "Buff",
          "effectName": "SPD Boost",
          "statusName": "Afternoon Tea For Two"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__712086196\">Robin_AbilityEidolon1_Bonus</a>[<span class=\"descriptionNumberColor\">Land of Smiles</span>]",
          "stackType": "Replace",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceAllPEN</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (0.24) || RETURN",
                    "displayLines": "0.24",
                    "constants": [],
                    "variables": [
                      0.24
                    ]
                  }
                }
              ]
            }
          ],
          "description": "Increases All-Type RES PEN by <span class=\"descriptionNumberColor\">#SkillRank_Rank01_P1_Ratio</span>.",
          "type": "Buff",
          "effectName": "All-Type RES PEN Boost",
          "statusName": "Land of Smiles"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__32210681\">Robin_Ability03Area</a>",
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
                              "value": "1"
                            },
                            {
                              "on": "Attacker",
                              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageFIXED</span>&nbsp;",
                              "value": "(1.5 + 4.5)"
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
                              "value": "1"
                            },
                            {
                              "on": "Attacker",
                              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageFIXED</span>&nbsp;",
                              "value": "1.5"
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
              "eventTrigger": "When Put in Deathstate Limbo",
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
                      "variableName": "_Rank06_BigDmgCount",
                      "value": {
                        "operator": "Variables[0] (8) || RETURN",
                        "displayLines": "8",
                        "constants": [],
                        "variables": [
                          8
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "Skill03_BaseAttack",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">AttackSUM</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "Skill03_BaseAttack_Convert",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">AttackConverted</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "Skill03_BaseAttack",
                  "value": {
                    "operator": "Variables[0] (Skill03_BaseAttack) || Variables[1] (Skill03_BaseAttack_Convert) || SUB || RETURN",
                    "displayLines": "(Skill03_BaseAttack - Skill03_BaseAttack_Convert)",
                    "constants": [],
                    "variables": [
                      "Skill03_BaseAttack",
                      "Skill03_BaseAttack_Convert"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "Skill03_BaseAttack_Total_Ratio",
                  "value": {
                    "operator": "Variables[0] (0.228) || RETURN",
                    "displayLines": "0.228",
                    "constants": [],
                    "variables": [
                      0.228
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "Skill03_BaseAttack_Total",
                  "value": {
                    "operator": "Variables[0] (Skill03_BaseAttack) || Variables[1] (Skill03_BaseAttack_Total_Ratio) || MUL || RETURN",
                    "displayLines": "(Skill03_BaseAttack * Skill03_BaseAttack_Total_Ratio)",
                    "constants": [],
                    "variables": [
                      "Skill03_BaseAttack",
                      "Skill03_BaseAttack_Total_Ratio"
                    ]
                  }
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
                      "variableName": "Skill03_BaseAttack_Total",
                      "value": {
                        "operator": "Variables[0] (200) || RETURN",
                        "displayLines": "200",
                        "constants": [],
                        "variables": [
                          200
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Skill03_BaseAttack_Total",
                      "value": {
                        "operator": "Variables[0] (Skill03_BaseAttack_Total) || Variables[1] (200) || ADD || RETURN",
                        "displayLines": "(Skill03_BaseAttack_Total + 200)",
                        "constants": [],
                        "variables": [
                          "Skill03_BaseAttack_Total",
                          200
                        ]
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
                  "modifier": "<a class=\"gModGreen\" id=\"1126110528\">Robin_Ability03_AtkUp_CasterForShow</a>[<span class=\"descriptionNumberColor\">Concerto</span>]",
                  "valuePerStack": {
                    "BaseAttack_Total": {
                      "operator": "Variables[0] (Skill03_BaseAttack_Total) || RETURN",
                      "displayLines": "Skill03_BaseAttack_Total",
                      "constants": [],
                      "variables": [
                        "Skill03_BaseAttack_Total"
                      ]
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
          ],
          "stackData": [],
          "latentQueue": [],
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
                  "operator": "Variables[0] (Skill03_BaseAttack_Total) || RETURN",
                  "displayLines": "Skill03_BaseAttack_Total",
                  "constants": [],
                  "variables": [
                    "Skill03_BaseAttack_Total"
                  ]
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
                  "operator": "Variables[0] (Skill03_BaseAttack_Total) || RETURN",
                  "displayLines": "Skill03_BaseAttack_Total",
                  "constants": [],
                  "variables": [
                    "Skill03_BaseAttack_Total"
                  ]
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
                  "operator": "Variables[0] (1.2) || RETURN",
                  "displayLines": "1.2",
                  "constants": [],
                  "variables": [
                    1.2
                  ]
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
                "conditionList": "Impromptu Flourish"
              },
              "valuePerStack": {
                "Trace_PointB2_P1_Ratio": {
                  "operator": "Variables[0] (0.25) || RETURN",
                  "displayLines": "0.25",
                  "constants": [],
                  "variables": [
                    0.25
                  ]
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
                  "operator": "Variables[0] (4.5) || RETURN",
                  "displayLines": "4.5",
                  "constants": [],
                  "variables": [
                    4.5
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__853884831\">Robin_Ability02_Aura</a>",
          "stackType": "ReplaceByCaster",
          "stackData": [],
          "latentQueue": [],
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
                        "operator": "Variables[0] (2) || Variables[1] (1) || ADD || RETURN",
                        "displayLines": "(2 + 1)",
                        "constants": [],
                        "variables": [
                          2,
                          1
                        ]
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
                        "operator": "Variables[0] (2) || RETURN",
                        "displayLines": "2",
                        "constants": [],
                        "variables": [
                          2
                        ]
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
              "eventTrigger": "Turn [Pre-action Phase]",
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
          ],
          "stackData": [],
          "latentQueue": []
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
                      "operator": "Variables[0] (MDF_CurrentActionCount) || RETURN",
                      "displayLines": "MDF_CurrentActionCount",
                      "constants": [],
                      "variables": [
                        "MDF_CurrentActionCount"
                      ]
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
          ],
          "stackData": [
            "SkillTree_PointB2_P1_Ratio"
          ],
          "latentQueue": [],
          "description": "Increases Follow-Up ATK CRIT DMG by <span class=\"descriptionNumberColor\">SkillTree_PointB2_P1_Ratio</span>.",
          "type": "Buff",
          "effectName": "CRIT DMG Boost",
          "statusName": "Impromptu Flourish"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__979681608\">Robin_Ability03AreaRefresh</a>",
          "stackType": "ReplaceByCaster",
          "abilityValueChange": [
            {
              "name": "Ability Value Changes",
              "variableName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "whenValueChanges": [
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
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "variableName": "Skill03_BaseAttack",
                          "value": "&nbsp;<span class=\"descriptionNumberColor\">AttackSUM</span>&nbsp;"
                        },
                        {
                          "name": "Define Custom Variable with Stat",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "variableName": "Skill03_BaseAttack_Convert",
                          "value": "&nbsp;<span class=\"descriptionNumberColor\">AttackConverted</span>&nbsp;"
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "Skill03_BaseAttack",
                          "value": {
                            "operator": "Variables[0] (Skill03_BaseAttack) || Variables[1] (Skill03_BaseAttack_Convert) || SUB || RETURN",
                            "displayLines": "(Skill03_BaseAttack - Skill03_BaseAttack_Convert)",
                            "constants": [],
                            "variables": [
                              "Skill03_BaseAttack",
                              "Skill03_BaseAttack_Convert"
                            ]
                          }
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "Skill03_BaseAttack_Total_Ratio",
                          "value": {
                            "operator": "Variables[0] (0.228) || RETURN",
                            "displayLines": "0.228",
                            "constants": [],
                            "variables": [
                              0.228
                            ]
                          }
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "Skill03_BaseAttack_Total",
                          "value": {
                            "operator": "Variables[0] (Skill03_BaseAttack) || Variables[1] (Skill03_BaseAttack_Total_Ratio) || MUL || RETURN",
                            "displayLines": "(Skill03_BaseAttack * Skill03_BaseAttack_Total_Ratio)",
                            "constants": [],
                            "variables": [
                              "Skill03_BaseAttack",
                              "Skill03_BaseAttack_Total_Ratio"
                            ]
                          }
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
                              "variableName": "Skill03_BaseAttack_Total",
                              "value": {
                                "operator": "Variables[0] (200) || RETURN",
                                "displayLines": "200",
                                "constants": [],
                                "variables": [
                                  200
                                ]
                              }
                            }
                          ],
                          "failed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "Skill03_BaseAttack_Total",
                              "value": {
                                "operator": "Variables[0] (Skill03_BaseAttack_Total) || Variables[1] (200) || ADD || RETURN",
                                "displayLines": "(Skill03_BaseAttack_Total + 200)",
                                "constants": [],
                                "variables": [
                                  "Skill03_BaseAttack_Total",
                                  200
                                ]
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
                          "modifier": "<a class=\"gModGreen\" id=\"1126110528\">Robin_Ability03_AtkUp_CasterForShow</a>[<span class=\"descriptionNumberColor\">Concerto</span>]",
                          "valuePerStack": {
                            "BaseAttack_Total": {
                              "operator": "Variables[0] (Skill03_BaseAttack_Total) || RETURN",
                              "displayLines": "Skill03_BaseAttack_Total",
                              "constants": [],
                              "variables": [
                                "Skill03_BaseAttack_Total"
                              ]
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
                              "operator": "Variables[0] (Skill03_BaseAttack_Total) || RETURN",
                              "displayLines": "Skill03_BaseAttack_Total",
                              "constants": [],
                              "variables": [
                                "Skill03_BaseAttack_Total"
                              ]
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
                              "operator": "Variables[0] (Skill03_BaseAttack_Total) || RETURN",
                              "displayLines": "Skill03_BaseAttack_Total",
                              "constants": [],
                              "variables": [
                                "Skill03_BaseAttack_Total"
                              ]
                            },
                            "Ability03_DmgRatio": {
                              "operator": "Variables[0] (1.2) || RETURN",
                              "displayLines": "1.2",
                              "constants": [],
                              "variables": [
                                1.2
                              ]
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
              "variableName": "&nbsp;<span class=\"descriptionNumberColor\">ATKFlat</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "whenValueChanges": [
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
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "variableName": "Skill03_BaseAttack",
                          "value": "&nbsp;<span class=\"descriptionNumberColor\">AttackSUM</span>&nbsp;"
                        },
                        {
                          "name": "Define Custom Variable with Stat",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "variableName": "Skill03_BaseAttack_Convert",
                          "value": "&nbsp;<span class=\"descriptionNumberColor\">AttackConverted</span>&nbsp;"
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "Skill03_BaseAttack",
                          "value": {
                            "operator": "Variables[0] (Skill03_BaseAttack) || Variables[1] (Skill03_BaseAttack_Convert) || SUB || RETURN",
                            "displayLines": "(Skill03_BaseAttack - Skill03_BaseAttack_Convert)",
                            "constants": [],
                            "variables": [
                              "Skill03_BaseAttack",
                              "Skill03_BaseAttack_Convert"
                            ]
                          }
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "Skill03_BaseAttack_Total_Ratio",
                          "value": {
                            "operator": "Variables[0] (0.228) || RETURN",
                            "displayLines": "0.228",
                            "constants": [],
                            "variables": [
                              0.228
                            ]
                          }
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "Skill03_BaseAttack_Total",
                          "value": {
                            "operator": "Variables[0] (Skill03_BaseAttack) || Variables[1] (Skill03_BaseAttack_Total_Ratio) || MUL || RETURN",
                            "displayLines": "(Skill03_BaseAttack * Skill03_BaseAttack_Total_Ratio)",
                            "constants": [],
                            "variables": [
                              "Skill03_BaseAttack",
                              "Skill03_BaseAttack_Total_Ratio"
                            ]
                          }
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
                              "variableName": "Skill03_BaseAttack_Total",
                              "value": {
                                "operator": "Variables[0] (200) || RETURN",
                                "displayLines": "200",
                                "constants": [],
                                "variables": [
                                  200
                                ]
                              }
                            }
                          ],
                          "failed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "Skill03_BaseAttack_Total",
                              "value": {
                                "operator": "Variables[0] (Skill03_BaseAttack_Total) || Variables[1] (200) || ADD || RETURN",
                                "displayLines": "(Skill03_BaseAttack_Total + 200)",
                                "constants": [],
                                "variables": [
                                  "Skill03_BaseAttack_Total",
                                  200
                                ]
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
                          "modifier": "<a class=\"gModGreen\" id=\"1126110528\">Robin_Ability03_AtkUp_CasterForShow</a>[<span class=\"descriptionNumberColor\">Concerto</span>]",
                          "valuePerStack": {
                            "BaseAttack_Total": {
                              "operator": "Variables[0] (Skill03_BaseAttack_Total) || RETURN",
                              "displayLines": "Skill03_BaseAttack_Total",
                              "constants": [],
                              "variables": [
                                "Skill03_BaseAttack_Total"
                              ]
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
                              "operator": "Variables[0] (Skill03_BaseAttack_Total) || RETURN",
                              "displayLines": "Skill03_BaseAttack_Total",
                              "constants": [],
                              "variables": [
                                "Skill03_BaseAttack_Total"
                              ]
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
                              "operator": "Variables[0] (Skill03_BaseAttack_Total) || RETURN",
                              "displayLines": "Skill03_BaseAttack_Total",
                              "constants": [],
                              "variables": [
                                "Skill03_BaseAttack_Total"
                              ]
                            },
                            "Ability03_DmgRatio": {
                              "operator": "Variables[0] (1.2) || RETURN",
                              "displayLines": "1.2",
                              "constants": [],
                              "variables": [
                                1.2
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
                      "variableName": "Skill02_EnergyBarCount",
                      "value": 0
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
                        "operator": "Variables[0] (Skill02_EnergyBarCount) || RETURN",
                        "displayLines": "Skill02_EnergyBarCount",
                        "constants": [],
                        "variables": [
                          "Skill02_EnergyBarCount"
                        ]
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
                  "variableName": "MDF_ActionCount",
                  "value": 1
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
                    "of": {
                      "name": "Target Name",
                      "target": "{{Player Team All}}"
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
                    "of": {
                      "name": "Target Name",
                      "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
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
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"9911415\">Robin_Passive_PassiveCharge</a>",
                      "stackLimit": {
                        "operator": "Variables[0] (MDF_CurrentActionCount) || RETURN",
                        "displayLines": "MDF_CurrentActionCount",
                        "constants": [],
                        "variables": [
                          "MDF_CurrentActionCount"
                        ]
                      },
                      "addStacksPerTrigger": 1
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Trace Activated",
                        "conditionList": "Coloratura Cadenza"
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
                      "multiAdd": "(0 - 0.25)"
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
              ],
              "priorityLevel": -80
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ],
      "references": []
    },
    "Robin_BE_BattleEvents": {
      "fileName": "Robin_BE_BattleEvents",
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
          "ID": 11309,
          "team": "Player Team",
          "eventType": "Assist",
          "abilityList": [
            "BattleEventAbility_Robin_Ability03"
          ],
          "overridesArray": [
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;",
              "value": 100
            }
          ],
          "hardLevelEvent": true,
          "barType": 1,
          "actionDescription": "While Robin is in the \"Concerto\" state, increases all allies' ATK. After an attack, Robin deals Physical Additional DMG. While \"Concerto\" lasts, Robin is immune to Crowd Control debuffs. Before \"Concerto\" ends, Robin won't take a turn or action, lasting until the \"Concerto\" countdown turn begins."
        }
      ],
      "references": []
    }
  }
}