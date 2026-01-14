const compositeAbilityObject = {
  "fullCharacterName": "Welt",
  "trimCharacterName": "Welt",
  "abilityList": [
    "Welt_Welt_Trace03",
    "Welt_Welt_Trace02",
    "Welt_Welt_TechniqueInLevel",
    "Welt_Welt_PassiveAbility01",
    "Welt_Welt_Ability03_Part02",
    "Welt_Welt_Ability03_Part01",
    "Welt_Welt_Ability03_EnterReady",
    "Welt_Welt_Ability02_Part02",
    "Welt_Welt_Ability02_Part01",
    "Welt_Welt_Ability01_Part02",
    "Welt_Welt_Ability01_Part01",
    "Welt_Modifiers"
  ],
  "abilityObject": {
    "Welt_Welt_Trace03": {
      "fileName": "Welt_Welt_Trace03",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "M_Welt_Tree03"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "M_Welt_Tree03",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": "Target Receiving DMG",
                    "modifier": "StanceBreakState"
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                          "value": "0.2"
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
    "Welt_Welt_Trace02": {
      "fileName": "Welt_Welt_Trace02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "M_Ultimate_ExtraSP",
          "valuePerStack": {
            "MDF_AddValue": {
              "operator": "Variables[0] (10) || RETURN",
              "displayLines": "10",
              "constants": [],
              "variables": [
                10
              ]
            }
          }
        }
      ],
      "references": []
    },
    "Welt_Welt_TechniqueInLevel": {
      "fileName": "Welt_Welt_TechniqueInLevel",
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
          "to": "Caster",
          "modifier": "StageAbility_Maze_Welt_Modifier"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "StageAbility_Maze_Welt_Modifier",
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
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "All Hostile Entities (AOE)",
                      "modifier": "Standard_Confine[<span class=\"descriptionNumberColor\">Imprisonment</span>]",
                      "duration": 1,
                      "baseChance": {
                        "operator": "Variables[0] (1) || RETURN",
                        "displayLines": "1",
                        "constants": [],
                        "variables": [
                          1
                        ]
                      },
                      "immediateEffect": true,
                      "valuePerStack": {
                        "MDF_SpeedDownRatio": {
                          "operator": "Variables[0] (0.1) || RETURN",
                          "displayLines": "0.1",
                          "constants": [],
                          "variables": [
                            0.1
                          ]
                        },
                        "MDF_ActionDelayRatio": {
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
    "Welt_Welt_PassiveAbility01": {
      "fileName": "Welt_Welt_PassiveAbility01",
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
          "to": "Caster",
          "modifier": "Welt_Passive01Modifier"
        },
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "AbilityPreShowModifier"
        },
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "AbilityPreShowModifier2"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 6
          },
          "passed": [
            {
              "name": "Update Ability Description",
              "popUpText": "Deals minor Imaginary DMG to one enemy. This attack can Bounce 4 times, with a chance of Slowing hit enemies.",
              "skillTrigger": "Skill02"
            }
          ]
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Welt_Passive01Modifier",
          "execute": [
            {
              "eventTrigger": "Deal Damage End [Owner]: Hit",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": "Target Receiving DMG",
                    "flagName": "STAT_SpeedDown"
                  },
                  "passed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": "Target Receiving DMG",
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Imaginary",
                        "Damage": {
                          "operator": "Variables[0] (0.6) || RETURN",
                          "displayLines": "0.6",
                          "constants": [],
                          "variables": [
                            0.6
                          ]
                        },
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "Additional DMG"
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Eidolon Activated",
                        "eidolon": 2
                      },
                      "passed": [
                        {
                          "name": "Update Energy",
                          "on": "Caster",
                          "value": {
                            "operator": "Variables[0] (3) || RETURN",
                            "displayLines": "3",
                            "constants": [],
                            "variables": [
                              3
                            ]
                          },
                          "isFixed": "* ERR"
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
          "for": "AbilityPreShowModifier2",
          "stackData": [],
          "latentQueue": [],
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "target": [
              {
                "name": "Target List",
                "target": "All Hostile Entities (AOE)"
              },
              {
                "name": "Target Filter",
                "conditions": {
                  "name": "Has Modifier",
                  "target": "Use Prior Target(s) Defined",
                  "modifier": "Standard_Confine[<span class=\"descriptionNumberColor\">Imprisonment</span>]",
                  "casterFilter": "Caster"
                }
              }
            ],
            "skillType": [
              "Ultimate"
            ],
            "delayAdvancePreview": {
              "name": "Delay/Advance Preview",
              "previewValue": {
                "operator": "Variables[0] (0.4) || RETURN",
                "displayLines": "0.4",
                "constants": [],
                "variables": [
                  0.4
                ]
              }
            }
          }
        },
        {
          "name": "Modifier Construction",
          "for": "AbilityPreShowModifier",
          "stackData": [],
          "latentQueue": [],
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "target": [
              {
                "name": "Target List",
                "target": "All Hostile Entities (AOE)"
              },
              {
                "name": "Target Filter",
                "conditions": {
                  "name": "NOT",
                  "condition": {
                    "name": "Has Modifier",
                    "target": "Use Prior Target(s) Defined",
                    "modifier": "Standard_Confine[<span class=\"descriptionNumberColor\">Imprisonment</span>]",
                    "casterFilter": "Caster"
                  }
                }
              }
            ],
            "skillType": [
              "Ultimate"
            ],
            "delayAdvancePreview": {
              "name": "Delay/Advance Preview",
              "previewValue": {
                "operator": "Variables[0] (0.4) || RETURN",
                "displayLines": "0.4",
                "constants": [],
                "variables": [
                  0.4
                ]
              }
            }
          }
        }
      ]
    },
    "Welt_Welt_Ability03_Part02": {
      "fileName": "Welt_Welt_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Retribution"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": "All Hostile Entities (AOE)",
              "modifier": "Welt_Trace01_AllDamageTypeTakenRatio[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
              "duration": {
                "operator": "Variables[0] (2) || RETURN",
                "displayLines": "2",
                "constants": [],
                "variables": [
                  2
                ]
              },
              "baseChance": {
                "operator": "Variables[0] (1) || RETURN",
                "displayLines": "1",
                "constants": [],
                "variables": [
                  1
                ]
              },
              "valuePerStack": {
                "MDF_PropertyRatio": {
                  "operator": "Variables[0] (0.12) || RETURN",
                  "displayLines": "0.12",
                  "constants": [],
                  "variables": [
                    0.12
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "ATK Scaling DMG",
          "target": "All Hostile Entities (AOE)",
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] (1.5) || RETURN",
              "displayLines": "1.5",
              "constants": [],
              "variables": [
                1.5
              ]
            },
            "HitSplit": 0.1,
            "Toughness": {
              "operator": "Variables[0] (AOE Toughness Value) || RETURN",
              "displayLines": "AOE Toughness Value",
              "constants": [],
              "variables": [
                "AOE Toughness Value"
              ]
            },
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": "All Hostile Entities (AOE)",
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] (1.5) || RETURN",
              "displayLines": "1.5",
              "constants": [],
              "variables": [
                1.5
              ]
            },
            "HitSplit": 0.9,
            "Toughness": {
              "operator": "Variables[0] (AOE Toughness Value) || RETURN",
              "displayLines": "AOE Toughness Value",
              "constants": [],
              "variables": [
                "AOE Toughness Value"
              ]
            },
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Add Events/Bonuses",
          "to": "All Hostile Entities (AOE)",
          "modifier": "Standard_Confine[<span class=\"descriptionNumberColor\">Imprisonment</span>]",
          "duration": 1,
          "baseChance": {
            "operator": "Variables[0] (1) || RETURN",
            "displayLines": "1",
            "constants": [],
            "variables": [
              1
            ]
          },
          "immediateEffect": true,
          "valuePerStack": {
            "MDF_SpeedDownRatio": {
              "operator": "Variables[0] (0.1) || RETURN",
              "displayLines": "0.1",
              "constants": [],
              "variables": [
                0.1
              ]
            },
            "MDF_ActionDelayRatio": {
              "operator": "Variables[0] (0.4) || RETURN",
              "displayLines": "0.4",
              "constants": [],
              "variables": [
                0.4
              ]
            }
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 1
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": "Caster",
              "modifier": "Welt_Eidolon1_Enhance[<span class=\"descriptionNumberColor\">Legacy of Honor</span>]"
            },
            {
              "name": "Define Modifier Variable",
              "modifierName": "Welt_Eidolon1_Enhance[<span class=\"descriptionNumberColor\">Legacy of Honor</span>]",
              "value": {
                "operator": "Variables[0] (2) || RETURN",
                "displayLines": "2",
                "constants": [],
                "variables": [
                  2
                ]
              }
            }
          ]
        },
        "Trigger: Skip Death Handling",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Welt_Welt_Ability03_Part01": {
      "fileName": "Welt_Welt_Ability03_Part01",
      "abilityType": "Ultimate",
      "energy": 5,
      "toughnessList": [
        0,
        20,
        0
      ],
      "parse": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": "Caster",
          "ability": "Welt_Ability03_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "Welt_Welt_Ability03_EnterReady": {
      "fileName": "Welt_Welt_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "Welt_Welt_Ability02_Part02": {
      "fileName": "Welt_Welt_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Welt_Ability02_ListenModifier"
        },
        {
          "name": "ATK Scaling DMG",
          "target": "Single Target (Primary)",
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] (0.72) || RETURN",
              "displayLines": "0.72",
              "constants": [],
              "variables": [
                0.72
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": "Caster",
            "modifier": "Welt_Eidolon1_Enhance[<span class=\"descriptionNumberColor\">Legacy of Honor</span>]"
          },
          "passed": [
            {
              "name": "Define Modifier Variable",
              "target": "Caster",
              "modifierName": "Welt_Eidolon1_Enhance[<span class=\"descriptionNumberColor\">Legacy of Honor</span>]",
              "function": "Add"
            },
            {
              "name": "ATK Scaling DMG",
              "target": "Single Target (Primary)",
              "AttackScaling": {
                "DamageType": "Imaginary",
                "Damage": {
                  "operator": "Variables[0] (0.72) || Variables[1] (0.8) || MUL || RETURN",
                  "displayLines": "(0.72 * 0.8)",
                  "constants": [],
                  "variables": [
                    0.72,
                    0.8
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Additional DMG"
              }
            }
          ]
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Bounce_SelectTarget",
          "target": "All Hostile Entities (AOE)",
          "paramSequence": []
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Bounce_SelectTarget",
          "target": "All Hostile Entities (AOE)",
          "paramSequence": []
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 6
          },
          "passed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "Bounce_SelectTarget",
              "target": "All Hostile Entities (AOE)",
              "paramSequence": []
            },
            "Trigger: Attack End"
          ],
          "failed": [
            "Trigger: Attack End"
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": "Caster",
          "modifier": "Welt_Ability02_ListenModifier"
        },
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Welt_Ability02_ListenModifier",
          "execute": [
            {
              "eventTrigger": "Deal Damage End [Owner]: Hit",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 4
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Target Receiving DMG",
                      "modifier": "Welt_BPAbility_SpeedDown[<span class=\"descriptionNumberColor\">Slow</span>]",
                      "duration": {
                        "operator": "Variables[0] (2) || RETURN",
                        "displayLines": "2",
                        "constants": [],
                        "variables": [
                          2
                        ]
                      },
                      "baseChance": {
                        "operator": "Variables[0] (0.75) || Variables[1] (0.35) || ADD || RETURN",
                        "displayLines": "(0.75 + 0.35)",
                        "constants": [],
                        "variables": [
                          0.75,
                          0.35
                        ]
                      },
                      "valuePerStack": {
                        "MDF_PropertyRatio": {
                          "operator": "Variables[0] (0.1) || RETURN",
                          "displayLines": "0.1",
                          "constants": [],
                          "variables": [
                            0.1
                          ]
                        }
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Target Receiving DMG",
                      "modifier": "Welt_BPAbility_SpeedDown[<span class=\"descriptionNumberColor\">Slow</span>]",
                      "duration": {
                        "operator": "Variables[0] (2) || RETURN",
                        "displayLines": "2",
                        "constants": [],
                        "variables": [
                          2
                        ]
                      },
                      "baseChance": {
                        "operator": "Variables[0] (0.75) || RETURN",
                        "displayLines": "0.75",
                        "constants": [],
                        "variables": [
                          0.75
                        ]
                      },
                      "valuePerStack": {
                        "MDF_PropertyRatio": {
                          "operator": "Variables[0] (0.1) || RETURN",
                          "displayLines": "0.1",
                          "constants": [],
                          "variables": [
                            0.1
                          ]
                        }
                      }
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
    "Welt_Welt_Ability02_Part01": {
      "fileName": "Welt_Welt_Ability02_Part01",
      "abilityType": "Skill",
      "energy": 10,
      "toughnessList": [
        10,
        0,
        0
      ],
      "parse": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": "Caster",
          "ability": "Welt_Ability02_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "Welt_Welt_Ability01_Part02": {
      "fileName": "Welt_Welt_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": "Caster",
            "modifier": "Welt_Eidolon1_Enhance[<span class=\"descriptionNumberColor\">Legacy of Honor</span>]"
          },
          "passed": [
            {
              "name": "Define Modifier Variable",
              "target": "Caster",
              "modifierName": "Welt_Eidolon1_Enhance[<span class=\"descriptionNumberColor\">Legacy of Honor</span>]",
              "function": "Add"
            },
            {
              "name": "ATK Scaling DMG",
              "target": "Single Target (Primary)",
              "AttackScaling": {
                "DamageType": "Imaginary",
                "Damage": {
                  "operator": "Variables[0] (1) || Variables[1] (0.5) || MUL || RETURN",
                  "displayLines": "(1 * 0.5)",
                  "constants": [],
                  "variables": [
                    1,
                    0.5
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Additional DMG"
              }
            }
          ]
        },
        {
          "name": "ATK Scaling DMG",
          "target": "Single Target (Primary)",
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] (1) || RETURN",
              "displayLines": "1",
              "constants": [],
              "variables": [
                1
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Welt_Welt_Ability01_Part01": {
      "fileName": "Welt_Welt_Ability01_Part01",
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
          "from": "Caster",
          "ability": "Welt_Ability01_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "Welt_Modifiers": {
      "fileName": "Welt_Modifiers",
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
          "for": "Welt_Trace01_AllDamageTypeTakenRatio[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyRatio) || RETURN",
                    "displayLines": "MDF_PropertyRatio",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyRatio"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_PropertyRatio"
          ],
          "latentQueue": [],
          "description": "Increases DMG taken by <span class=\"descriptionNumberColor\">MDF_PropertyRatio</span>.",
          "type": "Debuff",
          "effectName": "Vulnerability",
          "statusName": "Vulnerability"
        },
        {
          "name": "Modifier Construction",
          "for": "Welt_BPAbility_SpeedDown[<span class=\"descriptionNumberColor\">Slow</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "STAT_SpeedDown"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
                  "value": {
                    "operator": "Constants[0] (0) || Variables[0] (MDF_PropertyRatio) || SUB || RETURN",
                    "displayLines": "(0 - MDF_PropertyRatio)",
                    "constants": [
                      0
                    ],
                    "variables": [
                      "MDF_PropertyRatio"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_PropertyRatio"
          ],
          "latentQueue": [],
          "description": "SPD -<span class=\"descriptionNumberColor\">MDF_PropertyRatio</span>.",
          "type": "Debuff",
          "effectName": "Slow",
          "statusName": "Slow"
        },
        {
          "name": "Modifier Construction",
          "for": "Welt_Eidolon1_Enhance[<span class=\"descriptionNumberColor\">Legacy of Honor</span>]",
          "counter": 2,
          "stackData": [],
          "latentQueue": [],
          "description": "Basic ATKs and Skills deal an extra hit.",
          "type": "Other",
          "statusName": "Legacy of Honor"
        }
      ],
      "references": []
    }
  }
}