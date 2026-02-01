const compositeAbilityObject = {
  "fullCharacterName": "Aglaea",
  "trimCharacterName": "Aglaea",
  "summonName": "Garmentmaker",
  "trimSummonName": "Garmentmaker",
  "abilityList": [
    "Aglaea_Aglaea_Trace03",
    "Aglaea_Aglaea_Trace02",
    "Aglaea_Aglaea_TechniqueInLevel",
    "Aglaea_Aglaea_PassiveAbility01",
    "Aglaea_Aglaea_PassiveAbility01_BattleEvent",
    "Aglaea_Aglaea_Ability03_Part02",
    "Aglaea_Aglaea_Ability03_Part01",
    "Aglaea_Aglaea_Ability03_EnterReady",
    "Aglaea_Aglaea_Bonus_Camera",
    "Aglaea_Aglaea_Bonus",
    "Aglaea_Aglaea_Ability11_Part02",
    "Aglaea_Aglaea_Ability11_Part01",
    "Aglaea_Aglaea_Ability21_Part02",
    "Aglaea_Aglaea_Ability21_Part01",
    "Aglaea_Aglaea_Ability02_Part02",
    "Aglaea_Aglaea_Ability02_Part01",
    "Aglaea_Aglaea_Ability01_Part02",
    "Aglaea_Aglaea_Ability01_Part01",
    "Aglaea_Modifiers",
    "Aglaea_Functions",
    "Aglaea_BE_BattleEvents",
    "Garmentmaker_Servant_AglaeaServant_DeathRattle",
    "Garmentmaker_Servant_AglaeaServant_BattleCry",
    "Garmentmaker_Servant_Aglaea_PassiveAbility01_ForceKill_Insert",
    "Garmentmaker_Servant_AglaeaServant_Passive",
    "Garmentmaker_Servant_AglaeaServant_Ability11_Part02",
    "Garmentmaker_Servant_AglaeaServant_Ability11_Part01",
    "Garmentmaker_Servant_AglaeaServant_Ability11_Together_Part02",
    "Garmentmaker_Servant_AglaeaServant_Ability11_Together_Part01",
    "Garmentmaker_Modifiers"
  ],
  "abilityObject": {
    "Aglaea_Aglaea_Trace03": {
      "fileName": "Aglaea_Aglaea_Trace03",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "Aglaea_Aglaea_Trace02": {
      "fileName": "Aglaea_Aglaea_Trace02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
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
              "modifier": "Aglaea_Ability02_ChangeSkill"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "StageAbility_Maze_Aglaea_Modifier"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "StageAbility_Maze_Aglaea_Modifier",
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
                          "modifier": "Aglaea_GoldenSword_Mark[<span class=\"descriptionNumberColor\">Seam Stitch</span>]",
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
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
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
          "modifier": "Aglaea_Passive"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Aglaea_Ability03Preshow"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Aglaea_Ability02Preshow"
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
              "modifier": "Aglaea_Eidolon2_Listen"
            }
          ]
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Aglaea_Passive",
          "stackType": "ReplaceByCaster",
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
                      "modifier": "Aglaea_Eidolon2_Listen"
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
          ],
          "stackData": [],
          "latentQueue": [],
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
          }
        }
      ]
    },
    "Aglaea_Aglaea_PassiveAbility01_BattleEvent": {
      "fileName": "Aglaea_Aglaea_PassiveAbility01_BattleEvent",
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
          "modifier": "Aglaea_PassiveAbility01_BattleEvent"
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
          "for": "Aglaea_PassiveAbility01_BattleEvent",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Change Character UI",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}.[[getSummoner]]"
                  }
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "Memosprite_AglaeaServant_Passive"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Servant_Aglaea_PassiveAbility01_ForceKill_Insert",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "priorityTag": "AvatarBuffOthers",
                      "ownerState": "Anyone",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
                    }
                  ]
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Battle Event's Caster}}"
                  },
                  "modifier": "Aglaea_Ability03[<span class=\"descriptionNumberColor\">Supreme Stance</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Battle Event's Caster}}"
                  },
                  "modifier": "Aglaea_Ability03_Sub"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Battle Event's Caster}}"
                  },
                  "modifier": "Aglaea_Ability02_ChangeSkill"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Battle Event's Caster}}"
                  },
                  "modifier": "Aglaea_Ability03_ForbidSkill"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Battle Event's Caster}}"
                  },
                  "modifier": "Memosprite_AglaeaServant_SummonerAddSpeed[<span class=\"descriptionNumberColor\">A Body Brewed by Tears</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}} + {{Caster's Memosprite}}"
                  },
                  "modifier": "Aglaea_Eidolon6_Effect[<span class=\"descriptionNumberColor\">Fluctuate in the Tapestry of Fates</span>]"
                },
                {
                  "name": "Force Entity Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "ignoreHPLossTriggers": true,
                  "ignoreDeathTriggers": true
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
                    "target": "{{Caster}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDBase</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (BattleEvent_Aglaea_BaseSpeed) || RETURN",
                    "displayLines": "BattleEvent_Aglaea_BaseSpeed",
                    "constants": [],
                    "variables": [
                      "BattleEvent_Aglaea_BaseSpeed"
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
                  "modifier": "Aglaea_PassiveAbility01_BattleEvent"
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
              "modifier": "Aglaea_Ability02_ChangeSkill"
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
          "modifier": "Aglaea_Ability03[<span class=\"descriptionNumberColor\">Supreme Stance</span>]"
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
          "modifier": "Aglaea_Ability03_Sub"
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
              "modifier": "Aglaea_Eidolon6_Effect[<span class=\"descriptionNumberColor\">Fluctuate in the Tapestry of Fates</span>]",
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
          "modifier": "Aglaea_Ability03_ForbidSkill"
        },
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": 0
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
          "for": "March7th_UltraTarget"
        }
      ]
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
      "references": []
    },
    "Aglaea_Aglaea_Ability03_EnterReady": {
      "fileName": "Aglaea_Aglaea_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "Aglaea_Aglaea_Bonus_Camera": {
      "fileName": "Aglaea_Aglaea_Bonus_Camera",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "Aglaea_Aglaea_Bonus": {
      "fileName": "Aglaea_Aglaea_Bonus",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit"
      ],
      "references": []
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
              "modifier": "Aglaea_GoldenSword_Mark[<span class=\"descriptionNumberColor\">Seam Stitch</span>]",
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
      "references": []
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
      "references": []
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
      "references": []
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
      "references": []
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
              "value": 0
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
              "modifier": "Aglaea_Ability02_ChangeSkill"
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
      "references": []
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
      "references": []
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
              "modifier": "Aglaea_GoldenSword_Mark[<span class=\"descriptionNumberColor\">Seam Stitch</span>]",
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
      "references": []
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
        }
      ],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Aglaea_SpecialMarkAdder"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Aglaea_SpecialMar",
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
                        "name": "Compare: Target Count SUM",
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
          "for": "Aglaea_SpecialMarkAdder",
          "stackData": [],
          "latentQueue": [],
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE, with Unselectables)}}"
              },
              "modifier": "Aglaea_SpecialMar",
              "aliveOnly": "True",
              "haloStatus": true
            }
          ]
        }
      ]
    },
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
          "for": "Aglaea_Eidolon6_Effect[<span class=\"descriptionNumberColor\">Fluctuate in the Tapestry of Fates</span>]",
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
                      "functionName": "Aglaea_Eidolon6_SpeedValue"
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
                  "functionName": "Aglaea_Eidolon6_SpeedValue"
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
                      "functionName": "Aglaea_Eidolon6_SpeedValue"
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
                      "functionName": "Aglaea_Eidolon6_SpeedValue"
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
                      "functionName": "Aglaea_Eidolon6_SpeedValue"
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_PropertyValue"
          ],
          "latentQueue": [],
          "description": "Lightning RES PEN increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "statusName": "Fluctuate in the Tapestry of Fates"
        },
        {
          "name": "Modifier Construction",
          "for": "Aglaea_Eidolon2_Effect[<span class=\"descriptionNumberColor\">Sail on the Raft of Eyelids</span>]",
          "stackType": "Replace",
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
          ],
          "description": "When dealing DMG, ignores <span class=\"descriptionNumberColor\">_IgnoreDefenceRatioTotal</span> of the target's DEF.",
          "type": "Buff",
          "statusName": "Sail on the Raft of Eyelids"
        },
        {
          "name": "Modifier Construction",
          "for": "Aglaea_Eidolon2_Listen",
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
                      "modifier": "Aglaea_Eidolon2_Effect[<span class=\"descriptionNumberColor\">Sail on the Raft of Eyelids</span>]",
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
                      "modifierName": "Aglaea_Eidolon2_Effect[<span class=\"descriptionNumberColor\">Sail on the Raft of Eyelids</span>]",
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
                      "modifier": "Aglaea_Eidolon2_Effect[<span class=\"descriptionNumberColor\">Sail on the Raft of Eyelids</span>]"
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
                      "modifier": "Aglaea_Eidolon2_Effect[<span class=\"descriptionNumberColor\">Sail on the Raft of Eyelids</span>]",
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
                      "modifierName": "Aglaea_Eidolon2_Effect[<span class=\"descriptionNumberColor\">Sail on the Raft of Eyelids</span>]",
                      "multiplier": 1
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
          "for": "Memosprite_Aglaea_Ability03_Summon",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "Endurance"
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
          "for": "Aglaea_Ability03_Servant_PointB3",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Got a Kill [Owner]"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Aglaea_Ability03_PointB3",
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
                  "modifier": "Aglaea_Ability03_Servant_PointB3"
                },
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Aglaea_Ability03_PointB2",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Memosprite_Aglaea_Ability11_Mark",
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
          "for": "Aglaea_Ability11_Mark",
          "stackType": "ReplaceByCaster"
        },
        {
          "name": "Modifier Construction",
          "for": "Aglaea_Ability03_Sub",
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
                  "modifier": "Memosprite_Aglaea_Ability03_Summon"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Aglaea_Ability03_ForbidSkill"
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
                  "modifier": "Memosprite_Aglaea_Ability03_Summon"
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
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Aglaea_Ability03[<span class=\"descriptionNumberColor\">Supreme Stance</span>]",
          "stackType": "ReplaceByCaster",
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
                  "modifier": "Aglaea_Ability03_Servant_PointB1"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}} + {{Caster's Memosprite}}"
                  },
                  "modifier": "Aglaea_Ability03_Servant_PointB1_AddAttack[<span class=\"descriptionNumberColor\">The Myopic's Doom</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}} + {{Caster's Memosprite}}"
                  },
                  "modifier": "Aglaea_Eidolon6_Effect[<span class=\"descriptionNumberColor\">Fluctuate in the Tapestry of Fates</span>]"
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
                        "modifier": "Aglaea_Ability03[<span class=\"descriptionNumberColor\">Supreme Stance</span>]"
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
                  "modifier": "Memosprite_AglaeaServant_SummonerAddSpeed[<span class=\"descriptionNumberColor\">A Body Brewed by Tears</span>]"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster's Memosprite}}"
                    },
                    "modifier": "Memosprite_AglaeaServant_AddSpeed[<span class=\"descriptionNumberColor\">A Body Brewed by Tears</span>]"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Copy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster's Memosprite}}"
                      },
                      "modifier": "Memosprite_AglaeaServant_AddSpeed[<span class=\"descriptionNumberColor\">A Body Brewed by Tears</span>]",
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
                      "modifier": "Memosprite_AglaeaServant_SummonerAddSpeed[<span class=\"descriptionNumberColor\">A Body Brewed by Tears</span>]",
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
                      "modifier": "Aglaea_Ability03_Servant_PointB1"
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
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "Basic ATK is enhanced to \"Slash by a Thousandfold Kiss.\"",
          "type": "Buff",
          "effectName": "Supreme Stance",
          "statusName": "Supreme Stance"
        },
        {
          "name": "Modifier Construction",
          "for": "Aglaea_SummonSpeedUp_Sub",
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
          "for": "Aglaea_SummonSpeedUp",
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
          "for": "Aglaea_HPAddedRatio",
          "stackType": "ReplaceByCaster",
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
          ],
          "stackLimit": 3,
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "Aglaea_Ability02_ChangeSkill",
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
                  "modifier": "Aglaea_Ability02Preshow"
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
                  "modifier": "Aglaea_Ability02Preshow"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "_CasterEnergy"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Aglaea_Passive_SummonCount",
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
          "for": "Aglaea_Passive_SummonCount2",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_PropertyValue2",
                  "value": {
                    "operator": "Variables[0] (BattleEventCount) || Variables[1] (MDF_Count2) || MUL || RETURN",
                    "displayLines": "(BattleEventCount * MDF_Count2)",
                    "constants": [],
                    "variables": [
                      "BattleEventCount",
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
                        "operator": "Variables[0] (BattleEventCount) || Variables[1] (MDF_Count2) || MUL || RETURN",
                        "displayLines": "(BattleEventCount * MDF_Count2)",
                        "constants": [],
                        "variables": [
                          "BattleEventCount",
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
                        "operator": "Variables[0] (BattleEventCount) || Variables[1] (MDF_Count2) || MUL || RETURN",
                        "displayLines": "(BattleEventCount * MDF_Count2)",
                        "constants": [],
                        "variables": [
                          "BattleEventCount",
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
                        "operator": "Variables[0] (BattleEventCount) || Variables[1] (MDF_Count2) || MUL || RETURN",
                        "displayLines": "(BattleEventCount * MDF_Count2)",
                        "constants": [],
                        "variables": [
                          "BattleEventCount",
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
          "for": "Aglaea_GoldenSword_Mark[<span class=\"descriptionNumberColor\">Seam Stitch</span>]",
          "stackType": "Replace",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
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
                      "modifier": "Aglaea_GoldenSword_Mark[<span class=\"descriptionNumberColor\">Seam Stitch</span>]"
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
                        "modifier": "Memosprite_AglaeaServant_AddSpeed[<span class=\"descriptionNumberColor\">A Body Brewed by Tears</span>]",
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
                                "modifier": "Memosprite_AglaeaServant_AddSpeed[<span class=\"descriptionNumberColor\">A Body Brewed by Tears</span>]"
                              },
                              "passed": [
                                {
                                  "name": "Define Custom Variable with Copy",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}.[[getMemosprite]]"
                                  },
                                  "modifier": "Memosprite_AglaeaServant_AddSpeed[<span class=\"descriptionNumberColor\">A Body Brewed by Tears</span>]",
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
                          "functionName": "PursuedDamage_PerformanceDelay",
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
          ],
          "stackData": [
            "BombDamagePercentage",
            "_SpRecover",
            "MDF_PropertyValue",
            "MDF_PropertyValue2"
          ],
          "latentQueue": [],
          "description": "After receiving Aglaea's attack, further takes Lightning Additional DMG equal to <span class=\"descriptionNumberColor\">MDF_PropertyValue</span> of Aglaea's ATK. Garmentmaker will prioritize this target to attack.",
          "type": "Debuff",
          "effectName": "Seam Stitch",
          "statusName": "Seam Stitch"
        },
        {
          "name": "Modifier Construction",
          "for": "Aglaea_Ability03_ForbidSkill",
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
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Memosprite_AglaeaServant_SummonerAddSpeed[<span class=\"descriptionNumberColor\">A Body Brewed by Tears</span>]",
          "stackType": "Replace",
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
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "SPD increases by <span class=\"descriptionNumberColor\">SpeedAddTotal</span>.",
          "type": "Buff",
          "effectName": "SPD Boost",
          "statusName": "A Body Brewed by Tears"
        },
        {
          "name": "Modifier Construction",
          "for": "Aglaea_Ability03_Servant_PointB1_AddAttack[<span class=\"descriptionNumberColor\">The Myopic's Doom</span>]",
          "stackType": "Replace",
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
          ],
          "description": "ATK increases by <span class=\"descriptionNumberColor\">_AttackConvert</span>.",
          "type": "Buff",
          "effectName": "ATK Boost",
          "statusName": "The Myopic's Doom"
        },
        {
          "name": "Modifier Construction",
          "for": "Aglaea_Ability03_Servant_PointB1",
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
                  "modifier": "Aglaea_Ability03_Servant_PointB1_AddAttack[<span class=\"descriptionNumberColor\">The Myopic's Doom</span>]"
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
                      "modifier": "Aglaea_Ability03_Servant_PointB1_AddAttack[<span class=\"descriptionNumberColor\">The Myopic's Doom</span>]"
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
                      "modifier": "Aglaea_Ability03_Servant_PointB1_AddAttack[<span class=\"descriptionNumberColor\">The Myopic's Doom</span>]"
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
                      "modifier": "Aglaea_Ability03_Servant_PointB1_AddAttack[<span class=\"descriptionNumberColor\">The Myopic's Doom</span>]"
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
          "for": "Aglaea_Ability03Preshow",
          "stackData": [],
          "latentQueue": [],
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
          "for": "Aglaea_Ability02Preshow",
          "stackData": [],
          "latentQueue": [
            "_CasterEnergy"
          ],
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
          "functionName": "Aglaea_Eidolon6_SpeedValue",
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
                  "modifierName": "Aglaea_Eidolon6_Effect[<span class=\"descriptionNumberColor\">Fluctuate in the Tapestry of Fates</span>]",
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
                      "modifierName": "Aglaea_Eidolon6_Effect[<span class=\"descriptionNumberColor\">Fluctuate in the Tapestry of Fates</span>]",
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
                          "modifierName": "Aglaea_Eidolon6_Effect[<span class=\"descriptionNumberColor\">Fluctuate in the Tapestry of Fates</span>]",
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
                          "modifierName": "Aglaea_Eidolon6_Effect[<span class=\"descriptionNumberColor\">Fluctuate in the Tapestry of Fates</span>]",
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
          "modifier": "Memosprite_AglaeaServant_DeathRattle"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Memosprite_AglaeaServant_DeathRattle",
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
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
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
          "modifier": "Memosprite_AglaeaServant_BattleCry"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Memosprite_AglaeaServant_BattleCry",
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
                  "value": "(0 - 1)"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
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
          "modifier": "Aglaea_Ability03[<span class=\"descriptionNumberColor\">Supreme Stance</span>]"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "modifier": "Aglaea_Ability03_Sub"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "modifier": "Memosprite_AglaeaServant_SummonerAddSpeed[<span class=\"descriptionNumberColor\">A Body Brewed by Tears</span>]"
        }
      ],
      "references": []
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
          "modifier": "Memosprite_AglaeaServant_Passive"
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
              "modifier": "Memosprite_Aglaea_Eidolon4_Listen"
            }
          ]
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Memosprite_AglaeaServantPassive_DamageAddedRatio",
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
          "for": "Memosprite_AglaeaServant_CritDmg",
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
          "for": "Memosprite_AglaeaServant_Passive",
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
                  "modifier": "Aglaea_Ability03[<span class=\"descriptionNumberColor\">Supreme Stance</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster's Summoner}}"
                  },
                  "modifier": "Aglaea_Ability03_Sub"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster's Summoner}}"
                  },
                  "modifier": "Memosprite_AglaeaServant_SummonerAddSpeed[<span class=\"descriptionNumberColor\">A Body Brewed by Tears</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster's Summoner}}"
                  },
                  "modifier": "Servant_Aglaea_Summon_PursuedDamage"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster's Summoner}}"
                  },
                  "modifier": "Aglaea_Ability03_ForbidSkill"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster's Summoner}}"
                  },
                  "modifier": "Aglaea_Ability02_ChangeSkill"
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
                    "modifier": "Aglaea_GoldenSword_Mark[<span class=\"descriptionNumberColor\">Seam Stitch</span>]",
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
                        "modifier": "Memosprite_AglaeaServant_SummonerKeepSpeed"
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
                          "modifierName": "Memosprite_AglaeaServant_SummonerKeepSpeed",
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
                              "modifier": "Memosprite_AglaeaServant_AddSpeed[<span class=\"descriptionNumberColor\">A Body Brewed by Tears</span>]",
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
                              "modifier": "Memosprite_AglaeaServant_AddSpeed[<span class=\"descriptionNumberColor\">A Body Brewed by Tears</span>]",
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
                          "modifier": "Memosprite_AglaeaServant_SummonerKeepSpeed"
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
                        "modifier": "Memosprite_AglaeaServant_AddSpeed[<span class=\"descriptionNumberColor\">A Body Brewed by Tears</span>]"
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
                          "modifierName": "Memosprite_AglaeaServant_AddSpeed[<span class=\"descriptionNumberColor\">A Body Brewed by Tears</span>]",
                          "multiplier": 1
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster's Summoner}}"
                          },
                          "modifier": "Memosprite_AglaeaServant_SummonerKeepSpeed",
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
                  "modifier": "Aglaea_Ability02_ChangeSkill"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster's Summoner}}"
                  },
                  "modifier": "Aglaea_Eidolon6_Effect2[<span class=\"descriptionNumberColor\">Fluctuate in the Tapestry of Fates</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster's Summoner}}"
                  },
                  "modifier": "Aglaea_Eidolon6_Listen"
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
                      "modifier": "Memosprite_AglaeaServant_AddSpeed[<span class=\"descriptionNumberColor\">A Body Brewed by Tears</span>]",
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
                        "modifier": "Aglaea_Ability03[<span class=\"descriptionNumberColor\">Supreme Stance</span>]"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster's Summoner}}"
                          },
                          "modifier": "Memosprite_AglaeaServant_SummonerAddSpeed[<span class=\"descriptionNumberColor\">A Body Brewed by Tears</span>]",
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
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
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
          "modifier": "Memosprite_AglaeaServant_Interwine_AdjoinMark"
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
      "references": []
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
        }
      ],
      "references": []
    },
    "Garmentmaker_Servant_AglaeaServant_Ability11_Together_Part02": {
      "fileName": "Garmentmaker_Servant_AglaeaServant_Ability11_Together_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
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
          "modifier": "Memosprite_Aglaea_Ability11_Mark"
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
          "modifier": "Memosprite_AglaeaServant_Interwine_AdjoinMark"
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
          "modifier": "Memosprite_Aglaea_Ability11_Mark"
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
          "for": "Memosprite_Aglaea_Eidolon4_Listen",
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
                    "modifier": "Memosprite_AglaeaServant_Passive"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Copy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}.[[getMemosprite]]"
                      },
                      "modifier": "Memosprite_AglaeaServant_Passive",
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
                  "modifier": "Memosprite_AglaeaServant_AddSpeed[<span class=\"descriptionNumberColor\">A Body Brewed by Tears</span>]",
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
                    "modifier": "Aglaea_Ability03[<span class=\"descriptionNumberColor\">Supreme Stance</span>]"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Memosprite_AglaeaServant_SummonerAddSpeed[<span class=\"descriptionNumberColor\">A Body Brewed by Tears</span>]",
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
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Memosprite_AglaeaServant_Interwine_AdjoinMark",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Memosprite_AglaeaServant_Ability01_PurseDamage",
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
              "eventTrigger": "When Put in Deathstate Limbo"
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
              "eventTrigger": "Being Attacked End [Owner]",
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
                      "functionName": "PursuedDamage_PerformanceDelay",
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
                            "modifier": "Aglaea_Ability03[<span class=\"descriptionNumberColor\">Supreme Stance</span>]"
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
          "for": "Memosprite_AglaeaServant_AddSpeed[<span class=\"descriptionNumberColor\">A Body Brewed by Tears</span>]",
          "stackType": "Replace",
          "modifierFlags": [
            "STAT_SpeedUp"
          ],
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
                  "modifier": "Memosprite_AglaeaServant_Passive",
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
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "SPD increases by <span class=\"descriptionNumberColor\">SpeedAddTotal</span>.",
          "type": "Buff",
          "effectName": "SPD Boost",
          "statusName": "A Body Brewed by Tears"
        },
        {
          "name": "Modifier Construction",
          "for": "Memosprite_Aglaea_HitDamageSplit",
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
          "for": "Memosprite_AglaeaServant_SummonerKeepSpeed",
          "stackData": [],
          "latentQueue": []
        }
      ],
      "references": []
    }
  }
}