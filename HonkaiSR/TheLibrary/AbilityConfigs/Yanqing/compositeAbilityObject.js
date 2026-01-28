const compositeAbilityObject = {
  "fullCharacterName": "Yanqing",
  "trimCharacterName": "Yanqing",
  "abilityList": [
    "Yanqing_Yanqing_Eidolon4",
    "Yanqing_Yanqing_Eidolon1",
    "Yanqing_YanQing_Trace03",
    "Yanqing_YanQing_Trace01",
    "Yanqing_Yanqing_TechniqueInLevel",
    "Yanqing_Yanqing_PassiveAbility01_InsertAbilityPhase02",
    "Yanqing_Yanqing_PassiveAbility01_InsertAbility",
    "Yanqing_Yanqing_PassiveAbility01",
    "Yanqing_Yanqing_Ability03_Part02",
    "Yanqing_Yanqing_Ability03_Part01",
    "Yanqing_Yanqing_Ability03_EnterReady",
    "Yanqing_Yanqing_Ability02_Part02",
    "Yanqing_Yanqing_Ability02_Part01",
    "Yanqing_Yanqing_Ability01_Part02",
    "Yanqing_Yanqing_Ability01_Part01",
    "Yanqing_Modifiers"
  ],
  "abilityObject": {
    "Yanqing_Yanqing_Eidolon4": {
      "fileName": "Yanqing_Yanqing_Eidolon4",
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
          "modifier": "Yanqing_Eidolon4"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Yanqing_Eidolon4_IcePenetrate[<span class=\"descriptionNumberColor\">Searing Sting</span>]",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceIcePEN</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_IcePenetrate) || RETURN",
                    "displayLines": "MDF_IcePenetrate",
                    "constants": [],
                    "variables": [
                      "MDF_IcePenetrate"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "Ice RES PEN +<span class=\"descriptionNumberColor\">MDF_IcePenetrate</span>.",
          "type": "Buff",
          "effectName": "Ice RES PEN",
          "statusName": "Searing Sting"
        },
        {
          "name": "Modifier Construction",
          "for": "Yanqing_Eidolon4",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (0.8) || RETURN",
                      "displayLines": "0.8",
                      "constants": [],
                      "variables": [
                        0.8
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
                      "modifier": "Yanqing_Eidolon4_IcePenetrate[<span class=\"descriptionNumberColor\">Searing Sting</span>]",
                      "valuePerStack": {
                        "MDF_IcePenetrate": {
                          "operator": "Variables[0] (0.12) || RETURN",
                          "displayLines": "0.12",
                          "constants": [],
                          "variables": [
                            0.12
                          ]
                        }
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Yanqing_Eidolon4_IcePenetrate[<span class=\"descriptionNumberColor\">Searing Sting</span>]"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "HP Change [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (0.8) || RETURN",
                      "displayLines": "0.8",
                      "constants": [],
                      "variables": [
                        0.8
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
                      "modifier": "Yanqing_Eidolon4_IcePenetrate[<span class=\"descriptionNumberColor\">Searing Sting</span>]",
                      "valuePerStack": {
                        "MDF_IcePenetrate": {
                          "operator": "Variables[0] (0.12) || RETURN",
                          "displayLines": "0.12",
                          "constants": [],
                          "variables": [
                            0.12
                          ]
                        }
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Yanqing_Eidolon4_IcePenetrate[<span class=\"descriptionNumberColor\">Searing Sting</span>]"
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
    "Yanqing_Yanqing_Eidolon1": {
      "fileName": "Yanqing_Yanqing_Eidolon1",
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
          "modifier": "Yanqing_Eidolon1",
          "valuePerStack": {
            "MDF_DamageRatio": {
              "operator": "Variables[0] (0.6) || RETURN",
              "displayLines": "0.6",
              "constants": [],
              "variables": [
                0.6
              ]
            }
          }
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Yanqing_Eidolon1_TargetMark"
        },
        {
          "name": "Modifier Construction",
          "for": "Yanqing_Eidolon1",
          "execute": [
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Attack Targets of Modifier Holder}}"
                    },
                    "flagName": "STAT_CTRL_Frozen"
                  },
                  "passed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Attack Targets of Modifier Holder}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Ice",
                        "Damage": {
                          "operator": "Variables[0] (MDF_DamageRatio) || RETURN",
                          "displayLines": "MDF_DamageRatio",
                          "constants": [],
                          "variables": [
                            "MDF_DamageRatio"
                          ]
                        },
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "Additional DMG"
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_DamageRatio"
          ],
          "latentQueue": []
        }
      ]
    },
    "Yanqing_YanQing_Trace03": {
      "fileName": "Yanqing_YanQing_Trace03",
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
          "modifier": "M_Yanqing_Tree03",
          "valuePerStack": {
            "MDF_SpeedValue": {
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
      "references": [
        {
          "name": "Modifier Construction",
          "for": "M_Yanqing_Tree03SpeedUP[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
          "stackType": "ReplaceByCaster",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_SpeedValue) || RETURN",
                    "displayLines": "MDF_SpeedValue",
                    "constants": [],
                    "variables": [
                      "MDF_SpeedValue"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "SPD +<span class=\"descriptionNumberColor\">MDF_SpeedValue</span>.",
          "type": "Buff",
          "effectName": "SPD Boost",
          "statusName": "SPD Boost",
          "duration": 1
        },
        {
          "name": "Modifier Construction",
          "for": "M_Yanqing_Tree03",
          "execute": [
            {
              "eventTrigger": "Deal Damage End [Owner]: Hit",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is a Crit"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "M_Yanqing_Tree03SpeedUP[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
                      "duration": {
                        "operator": "Variables[0] (2) || RETURN",
                        "displayLines": "2",
                        "constants": [],
                        "variables": [
                          2
                        ]
                      },
                      "valuePerStack": {
                        "MDF_SpeedValue": {
                          "operator": "Variables[0] (MDF_SpeedValue) || RETURN",
                          "displayLines": "MDF_SpeedValue",
                          "constants": [],
                          "variables": [
                            "MDF_SpeedValue"
                          ]
                        },
                        "MDF_LifeTime": {
                          "operator": "Variables[0] (2) || RETURN",
                          "displayLines": "2",
                          "constants": [],
                          "variables": [
                            2
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
            "MDF_SpeedValue"
          ],
          "latentQueue": []
        }
      ]
    },
    "Yanqing_YanQing_Trace01": {
      "fileName": "Yanqing_YanQing_Trace01",
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
          "modifier": "M_Yanqing_Tree01",
          "valuePerStack": {
            "MDF_DamageRatio": {
              "operator": "Variables[0] (0.3) || RETURN",
              "displayLines": "0.3",
              "constants": [],
              "variables": [
                0.3
              ]
            }
          }
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "M_Yanqing_Tree01",
          "execute": [
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Weakness",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Skill Point User}}"
                    },
                    "DamageType": "Ice"
                  },
                  "passed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Skill Point User}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Ice",
                        "Damage": {
                          "operator": "Variables[0] (MDF_DamageRatio) || RETURN",
                          "displayLines": "MDF_DamageRatio",
                          "constants": [],
                          "variables": [
                            "MDF_DamageRatio"
                          ]
                        },
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "Additional DMG"
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_DamageRatio"
          ],
          "latentQueue": []
        }
      ]
    },
    "Yanqing_Yanqing_TechniqueInLevel": {
      "fileName": "Yanqing_Yanqing_TechniqueInLevel",
      "childAbilityList": [
        "Yanqing_Yanqing_TechniqueInLevel"
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
          "modifier": "Technique_Yanqing_Modifier"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Yanqing_TechniqueUsage_AttackRatioUp[<span class=\"descriptionNumberColor\">The One True Sword</span>]",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (MDF_HPRatio) || RETURN",
                      "displayLines": "MDF_HPRatio",
                      "constants": [],
                      "variables": [
                        "MDF_HPRatio"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                          "value": "MDF_PropertyValue"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "description": "Increases DMG dealt to enemies whose current HP percentage is higher than or equal to <span class=\"descriptionNumberColor\">MDF_HPRatio</span> by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "effectName": "DMG Boost",
          "statusName": "The One True Sword"
        },
        {
          "name": "Modifier Construction",
          "for": "Technique_Yanqing_Modifier",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Wave Count",
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
                      "modifier": "Yanqing_TechniqueUsage_AttackRatioUp[<span class=\"descriptionNumberColor\">The One True Sword</span>]",
                      "duration": {
                        "operator": "Variables[0] (2) || RETURN",
                        "displayLines": "2",
                        "constants": [],
                        "variables": [
                          2
                        ]
                      },
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (0.3) || RETURN",
                          "displayLines": "0.3",
                          "constants": [],
                          "variables": [
                            0.3
                          ]
                        },
                        "MDF_HPRatio": {
                          "operator": "Variables[0] (0.5) || RETURN",
                          "displayLines": "0.5",
                          "constants": [],
                          "variables": [
                            0.5
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
    "Yanqing_Yanqing_PassiveAbility01_InsertAbilityPhase02": {
      "fileName": "Yanqing_Yanqing_PassiveAbility01_InsertAbilityPhase02",
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
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] (0.5) || RETURN",
              "displayLines": "0.5",
              "constants": [],
              "variables": [
                0.5
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
            "attackType": "Follow-up",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] (0.5) || RETURN",
              "displayLines": "0.5",
              "constants": [],
              "variables": [
                0.5
              ]
            },
            "HitSplit": 0.7,
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "attackType": "Follow-up",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "Standard_CTRL_Frozen[<span class=\"descriptionNumberColor\">Frozen</span>]",
          "duration": 1,
          "baseChance": {
            "operator": "Variables[0] (0.65) || RETURN",
            "displayLines": "0.65",
            "constants": [],
            "variables": [
              0.65
            ]
          },
          "valuePerStack": {
            "Modifier_Frozen_DamagePercentage": {
              "operator": "Variables[0] (0.5) || RETURN",
              "displayLines": "0.5",
              "constants": [],
              "variables": [
                0.5
              ]
            }
          }
        }
      ],
      "references": []
    },
    "Yanqing_Yanqing_PassiveAbility01_InsertAbility": {
      "fileName": "Yanqing_Yanqing_PassiveAbility01_InsertAbility",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "UI Display Event",
          "popUpText": "One With the Sword"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "Yanqing_BonusTargetMark"
        },
        "Deleted bullshit",
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
          "ability": "Yanqing_PassiveAbility01_InsertAbilityPhase02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "Yanqing_Yanqing_PassiveAbility01": {
      "fileName": "Yanqing_Yanqing_PassiveAbility01",
      "childAbilityList": [
        "Yanqing_Yanqing_PassiveAbility01_InsertAbility_Camera",
        "Yanqing_Yanqing_PassiveAbility01",
        "Yanqing_Yanqing_PassiveAbility01_InsertAbility",
        "Yanqing_Yanqing_PassiveAbility01_InsertAbilityPhase02"
      ],
      "skillTrigger": "SkillP01",
      "abilityType": "Talent",
      "energy": 10,
      "toughnessList": [
        10,
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
          "modifier": "Yanqing_PassiveAbility_Modifier",
          "valuePerStack": {
            "MDF_CriticalBoost": {
              "operator": "Variables[0] (0.2) || RETURN",
              "displayLines": "0.2",
              "constants": [],
              "variables": [
                0.2
              ]
            },
            "MDF_CriticaDamage": {
              "operator": "Variables[0] (0.3) || RETURN",
              "displayLines": "0.3",
              "constants": [],
              "variables": [
                0.3
              ]
            },
            "MDF_StatusResistance": {
              "operator": "Variables[0] (0.2) || RETURN",
              "displayLines": "0.2",
              "constants": [],
              "variables": [
                0.2
              ]
            },
            "MDF_AddSPRatio": {
              "operator": "Variables[0] (0.1) || RETURN",
              "displayLines": "0.1",
              "constants": [],
              "variables": [
                0.1
              ]
            }
          }
        },
        {
          "name": "Update Displayed Energy Bar",
          "assignState": "True",
          "priorState": "Normal",
          "bar#": 1,
          "cooldown": 0
        }
      ],
      "references": []
    },
    "Yanqing_Yanqing_Ability03_Part02": {
      "fileName": "Yanqing_Yanqing_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "Yanqing_BonusTargetMark"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Yanqing_Ability03_Bonus[<span class=\"descriptionNumberColor\">Amidst the Raining Bliss</span>]",
          "duration": 1,
          "immediateEffect": true,
          "valuePerStack": {
            "MDF_CriticalBoost": {
              "operator": "Variables[0] (0.6) || RETURN",
              "displayLines": "0.6",
              "constants": [],
              "variables": [
                0.6
              ]
            }
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "Yanqing_FrozenMark[<span class=\"descriptionNumberColor\">Soulsteel Sync</span>]"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Yanqing_FrozenMark[<span class=\"descriptionNumberColor\">Soulsteel Sync</span>]",
              "duration": 1,
              "immediateEffect": true,
              "valuePerStack": {
                "MDF_CriticalBoost": {
                  "operator": "Variables[0] (0.2) || RETURN",
                  "displayLines": "0.2",
                  "constants": [],
                  "variables": [
                    0.2
                  ]
                },
                "MDF_CriticaDamage": {
                  "operator": "Variables[0] (0.3) || RETURN",
                  "displayLines": "0.3",
                  "constants": [],
                  "variables": [
                    0.3
                  ]
                },
                "MDF_AddCriticalDamage": {
                  "operator": "Variables[0] (0.5) || RETURN",
                  "displayLines": "0.5",
                  "constants": [],
                  "variables": [
                    0.5
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
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] (3.5) || RETURN",
              "displayLines": "3.5",
              "constants": [],
              "variables": [
                3.5
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
        "Trigger: Skip Death Handling",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Yanqing_Yanqing_Ability03_Part01": {
      "fileName": "Yanqing_Yanqing_Ability03_Part01",
      "childAbilityList": [
        "Yanqing_Yanqing_Ability03_Camera",
        "Yanqing_Yanqing_Ability03_EnterReady",
        "Yanqing_Yanqing_Ability03_Part01",
        "Yanqing_Yanqing_Ability03_Part02"
      ],
      "skillTrigger": "Skill03",
      "abilityType": "Ultimate",
      "energy": 5,
      "toughnessList": [
        30,
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
          "ability": "Yanqing_Ability03_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "Yanqing_Yanqing_Ability03_EnterReady": {
      "fileName": "Yanqing_Yanqing_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "Yanqing_Yanqing_Ability02_Part02": {
      "fileName": "Yanqing_Yanqing_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "Yanqing_BonusTargetMark"
        },
        {
          "name": "Shot Fired",
          "caster": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "Looped Event",
          "maxLoops": 3,
          "Event": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Ice",
                "Damage": {
                  "operator": "Variables[0] (2.2) || RETURN",
                  "displayLines": "2.2",
                  "constants": [],
                  "variables": [
                    2.2
                  ]
                },
                "HitSplit": 0.25,
                "Toughness": {
                  "operator": "Variables[0] (ST Toughness Value) || RETURN",
                  "displayLines": "ST Toughness Value",
                  "constants": [],
                  "variables": [
                    "ST Toughness Value"
                  ]
                },
                "Tags": null,
                "attackType": "Skill",
                "EnergyGainPercent": "100%"
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
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] (2.2) || RETURN",
              "displayLines": "2.2",
              "constants": [],
              "variables": [
                2.2
              ]
            },
            "HitSplit": 0.25,
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "attackType": "Skill",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Yanqing_Yanqing_Ability02_Part01": {
      "fileName": "Yanqing_Yanqing_Ability02_Part01",
      "childAbilityList": [
        "Yanqing_Yanqing_Ability02_Camera",
        "Yanqing_Yanqing_Ability02_Part01",
        "Yanqing_Yanqing_Ability02_Part02"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Skill",
      "energy": 30,
      "toughnessList": [
        20,
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
          "ability": "Yanqing_Ability02_Part02",
          "isTrigger": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "modifier": "Yanqing_BonusTargetMark"
          }
        }
      ],
      "references": []
    },
    "Yanqing_Yanqing_Ability01_Part02": {
      "fileName": "Yanqing_Yanqing_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "Yanqing_BonusTargetMark"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] (1) || RETURN",
              "displayLines": "1",
              "constants": [],
              "variables": [
                1
              ]
            },
            "HitSplit": 0.5,
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
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] (1) || RETURN",
              "displayLines": "1",
              "constants": [],
              "variables": [
                1
              ]
            },
            "HitSplit": 0.25,
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
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] (1) || RETURN",
              "displayLines": "1",
              "constants": [],
              "variables": [
                1
              ]
            },
            "HitSplit": 0.25,
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
    "Yanqing_Yanqing_Ability01_Part01": {
      "fileName": "Yanqing_Yanqing_Ability01_Part01",
      "childAbilityList": [
        "Yanqing_Yanqing_Ability01_Camera",
        "Yanqing_Yanqing_Ability01_Part01",
        "Yanqing_Yanqing_Ability01_Part02"
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
          "ability": "Yanqing_Ability01_Part02",
          "isTrigger": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "modifier": "Yanqing_BonusTargetMark"
          }
        }
      ],
      "references": []
    },
    "Yanqing_Modifiers": {
      "fileName": "Yanqing_Modifiers",
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
          "for": "Yanqing_Ability03_Bonus[<span class=\"descriptionNumberColor\">Amidst the Raining Bliss</span>]",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateBase</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_CriticalBoost) || RETURN",
                    "displayLines": "MDF_CriticalBoost",
                    "constants": [],
                    "variables": [
                      "MDF_CriticalBoost"
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "Got a Kill [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 6
                  },
                  "passed": [
                    {
                      "name": "Define Modifier Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifierName": "Yanqing_Ability03_Bonus[<span class=\"descriptionNumberColor\">Amidst the Raining Bliss</span>]",
                      "function": "Add",
                      "value": 1,
                      "valueType": "Duration"
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_CriticalBoost"
          ],
          "latentQueue": [],
          "description": "CRIT Rate +<span class=\"descriptionNumberColor\">MDF_CriticalBoost</span>.",
          "type": "Buff",
          "effectName": "CRIT Rate Boost",
          "statusName": "Amidst the Raining Bliss"
        },
        {
          "name": "Modifier Construction",
          "for": "Yanqing_BonusTargetMark",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Yanqing_FrozenMark[<span class=\"descriptionNumberColor\">Soulsteel Sync</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Update Displayed Energy Bar",
                  "priorState": "Normal"
                }
              ]
            },
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_isBeingHit",
                  "value": 1
                }
              ]
            },
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_isBeingHit",
                  "value": 0
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Update Displayed Energy Bar",
                  "priorState": "Active"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Trace Activated",
                    "conditionList": "Frost Favors the Brave"
                  },
                  "passed": [
                    {
                      "name": "Update Modifier Description",
                      "popUpText": "Increases CRIT Rate by <span class=\"descriptionNumberColor\">MDF_CriticalBoost</span>, CRIT DMG by <span class=\"descriptionNumberColor\">MDF_ALLCriticalDamage</span>, and Effect RES by <span class=\"descriptionNumberColor\">MDF_StatusResistance</span>."
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "Avatar_Yanqing_AggroBase",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">BaseAggroValue</span>&nbsp;"
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">BaseAggroValue</span>&nbsp;",
                  "value": {
                    "operator": "Constants[0] (1) || INVERT || Variables[0] (Avatar_Yanqing_AggroBase) || MUL || Constants[1] (0.6) || MUL || RETURN",
                    "displayLines": "((-1 * Avatar_Yanqing_AggroBase) * 0.6)",
                    "constants": [
                      1,
                      0.6
                    ],
                    "variables": [
                      "Avatar_Yanqing_AggroBase"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateBase</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_CriticalBoost) || RETURN",
                    "displayLines": "MDF_CriticalBoost",
                    "constants": [],
                    "variables": [
                      "MDF_CriticalBoost"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_ALLCriticalDamage",
                  "value": {
                    "operator": "Variables[0] (MDF_CriticaDamage) || Variables[1] (MDF_AddCriticalDamage) || ADD || RETURN",
                    "displayLines": "(MDF_CriticaDamage + MDF_AddCriticalDamage)",
                    "constants": [],
                    "variables": [
                      "MDF_CriticaDamage",
                      "MDF_AddCriticalDamage"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_ALLCriticalDamage) || RETURN",
                    "displayLines": "MDF_ALLCriticalDamage",
                    "constants": [],
                    "variables": [
                      "MDF_ALLCriticalDamage"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_AddCriticalDamage",
                  "value": 0
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Trace Activated",
                    "conditionList": "Frost Favors the Brave"
                  },
                  "passed": [
                    {
                      "name": "Stack Target Stat Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">EffectRES</span>&nbsp;",
                      "value": {
                        "operator": "Variables[0] (MDF_StatusResistance) || RETURN",
                        "displayLines": "MDF_StatusResistance",
                        "constants": [],
                        "variables": [
                          "MDF_StatusResistance"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 2
                  },
                  "passed": [
                    {
                      "name": "Stack Target Stat Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">EnergyRegenRate</span>&nbsp;",
                      "value": {
                        "operator": "Variables[0] (MDF_AddSPRatio) || RETURN",
                        "displayLines": "MDF_AddSPRatio",
                        "constants": [],
                        "variables": [
                          "MDF_AddSPRatio"
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Got a Kill [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 6
                  },
                  "passed": [
                    {
                      "name": "Define Modifier Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifierName": "Yanqing_FrozenMark[<span class=\"descriptionNumberColor\">Soulsteel Sync</span>]",
                      "function": "Add",
                      "value": 1,
                      "valueType": "Duration"
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
                    "value1": "ParameterValue",
                    "compareType": ">",
                    "value2": 0
                  },
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_isBeingHit",
                        "compareType": "=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "priorState": "Normal"
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "Yanqing_FrozenMark[<span class=\"descriptionNumberColor\">Soulsteel Sync</span>]"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Attack Start [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Basic ATK",
                      "Skill",
                      "Ultimate"
                    ],
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Random Chance",
                        "chance": {
                          "operator": "Variables[0] (0.6) || Variables[1] (YANQING_OBJECT_UNUSED_1) || ADD || RETURN",
                          "displayLines": "(0.6 + YANQING_OBJECT_UNUSED_1)",
                          "constants": [],
                          "variables": [
                            0.6,
                            "YANQING_OBJECT_UNUSED_1"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Ability Target List}}"
                          },
                          "modifier": "Yanqing_BonusTargetMark"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "Yanqing_BonusTargetMark"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Yanqing_PassiveAbility01_InsertAbility",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "priorityTag": "AvatarInsertAttackSelf",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "abortFlags": [
                        "STAT_CTRL",
                        "DisableAction"
                      ],
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Modifier is Added [Owner]"
            }
          ],
          "stackData": [
            "MDF_CriticalBoost",
            "MDF_CriticaDamage",
            "MDF_AddCriticalDamage"
          ],
          "latentQueue": [],
          "description": "Increases CRIT Rate by <span class=\"descriptionNumberColor\">MDF_CriticalBoost</span> and CRIT DMG by <span class=\"descriptionNumberColor\">MDF_ALLCriticalDamage</span>.",
          "type": "Buff",
          "effectName": "CRIT Rate Boost",
          "statusName": "Soulsteel Sync"
        },
        {
          "name": "Modifier Construction",
          "for": "Yanqing_PassiveAbility_Modifier",
          "execute": [
            {
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Type",
                    "skillType": "Skill"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Yanqing_FrozenMark[<span class=\"descriptionNumberColor\">Soulsteel Sync</span>]",
                      "duration": 1,
                      "valuePerStack": {
                        "MDF_CriticalBoost": {
                          "operator": "Variables[0] (MDF_CriticalBoost) || RETURN",
                          "displayLines": "MDF_CriticalBoost",
                          "constants": [],
                          "variables": [
                            "MDF_CriticalBoost"
                          ]
                        },
                        "MDF_CriticaDamage": {
                          "operator": "Variables[0] (MDF_CriticaDamage) || RETURN",
                          "displayLines": "MDF_CriticaDamage",
                          "constants": [],
                          "variables": [
                            "MDF_CriticaDamage"
                          ]
                        },
                        "MDF_StatusResistance": {
                          "operator": "Variables[0] (MDF_StatusResistance) || RETURN",
                          "displayLines": "MDF_StatusResistance",
                          "constants": [],
                          "variables": [
                            "MDF_StatusResistance"
                          ]
                        },
                        "MDF_AddSPRatio": {
                          "operator": "Variables[0] (MDF_AddSPRatio) || RETURN",
                          "displayLines": "MDF_AddSPRatio",
                          "constants": [],
                          "variables": [
                            "MDF_AddSPRatio"
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
            "MDF_CriticalBoost",
            "MDF_CriticaDamage",
            "MDF_StatusResistance",
            "MDF_AddSPRatio"
          ],
          "latentQueue": []
        }
      ],
      "references": []
    }
  }
}