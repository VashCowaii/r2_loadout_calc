const compositeAbilityObject = {
  "fullCharacterName": "Topaz & Numby",
  "trimCharacterName": "TopazNumby",
  "abilityList": [
    "TopazNumby_Topaz_BE_CheckStun",
    "TopazNumby_Topaz_BE_Hit",
    "TopazNumby_Topaz_BE_Ability03Ready",
    "TopazNumby_Topaz_BE_Ability01Ready",
    "TopazNumby_Topaz_BE_Ability02Ready",
    "TopazNumby_Topaz_BE_UltraAttackDamage",
    "TopazNumby_Topaz_BE_NormalAttackDamage",
    "TopazNumby_Topaz_BE_LaterAttack",
    "TopazNumby_Topaz_BE_FirstAttack",
    "TopazNumby_Topaz_BE_RefreshEnhance",
    "TopazNumby_Topaz_BE_DelayLimbo",
    "TopazNumby_Topaz_BE_DelayDeath",
    "TopazNumby_Topaz_BE_PassiveAbility",
    "TopazNumby_Topaz_TechniqueInLevel",
    "TopazNumby_Topaz_PassiveAbility01",
    "TopazNumby_Topaz_Ability03_Part02",
    "TopazNumby_Topaz_Ability03_Part01",
    "TopazNumby_Topaz_Ability03_EnterReady",
    "TopazNumby_Topaz_Ability02_Part02",
    "TopazNumby_Topaz_Ability02_Part01",
    "TopazNumby_Topaz_Ability01_Part02",
    "TopazNumby_Topaz_Ability01_Part01",
    "TopazNumby_Topaz_Eidolon4_ReduceDelay",
    "TopazNumby_Modifiers",
    "TopazNumby_BE_BattleEvents"
  ],
  "abilityObject": {
    "TopazNumby_Topaz_BE_CheckStun": {
      "fileName": "TopazNumby_Topaz_BE_CheckStun",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "TopazNumby_Topaz_BE_Hit": {
      "fileName": "TopazNumby_Topaz_BE_Hit",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1899526189\">Topaz_BE_HitEffect</a>"
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "HasHitEffect",
              "value": 1
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1899526189\">Topaz_BE_HitEffect</a>"
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "HasHitEffect",
              "value": 0
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "HasHitEffect",
            "compareType": ">",
            "value2": 0
          }
        }
      ],
      "references": []
    },
    "TopazNumby_Topaz_BE_Ability03Ready": {
      "fileName": "TopazNumby_Topaz_BE_Ability03Ready",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "TopazNumby_Topaz_BE_Ability01Ready": {
      "fileName": "TopazNumby_Topaz_BE_Ability01Ready",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "TopazNumby_Topaz_BE_Ability02Ready": {
      "fileName": "TopazNumby_Topaz_BE_Ability02Ready",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "TopazNumby_Topaz_BE_UltraAttackDamage": {
      "fileName": "TopazNumby_Topaz_BE_UltraAttackDamage",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable with Modifier Values",
          "variableName": "CurEnhance",
          "modifierName": "<a class=\"gModGreen\" id=\"1203060420\">Topaz_UltraEnhance</a>[<span class=\"descriptionNumberColor\">Windfall Bonanza!</span>]",
          "multiplier": 1
        },
        {
          "name": "Define Custom Variable",
          "variableName": "CurEnhance",
          "value": {
            "operator": "Variables[0] (CurEnhance) || Constants[0] (1) || SUB || RETURN",
            "displayLines": "(CurEnhance - 1)",
            "constants": [
              1
            ],
            "variables": [
              "CurEnhance"
            ]
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "CurEnhance",
            "compareType": ">=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (CurEnhance) || RETURN",
                "displayLines": "CurEnhance",
                "constants": [],
                "variables": [
                  "CurEnhance"
                ]
              },
              "maximum": {
                "operator": "Variables[0] (MaxEnhance) || RETURN",
                "displayLines": "MaxEnhance",
                "constants": [],
                "variables": [
                  "MaxEnhance"
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
              "maximum": {
                "operator": "Variables[0] (MaxEnhance) || RETURN",
                "displayLines": "MaxEnhance",
                "constants": [],
                "variables": [
                  "MaxEnhance"
                ]
              },
              "assignState": "True",
              "priorState": "Normal",
              "bar#": 3,
              "cooldown": 0
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1213282515\">Topaz_BE_CriticalChance</a>"
        },
        {
          "name": "Looped Event",
          "maxLoops": 7,
          "Event": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Fire",
                "Damage": {
                  "operator": "Variables[0] (1.5) || Variables[1] (1.5) || ADD || RETURN",
                  "displayLines": "(1.5 + 1.5)",
                  "constants": [],
                  "variables": [
                    1.5,
                    1.5
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
                "Tags": [
                  "Summon-Tag DMG"
                ],
                "attackType": "Follow-up"
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
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] (1.5) || Variables[1] (1.5) || ADD || RETURN",
              "displayLines": "(1.5 + 1.5)",
              "constants": [],
              "variables": [
                1.5,
                1.5
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
            "Tags": [
              "Summon-Tag DMG"
            ],
            "attackType": "Follow-up"
          }
        },
        {
          "name": "Trigger: Attack End",
          "fakeCharacterAttack": true
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
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Stonks Market"
          },
          "passed": [
            {
              "name": "Update Energy",
              "on": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "value": {
                "operator": "Variables[0] (10) || RETURN",
                "displayLines": "10",
                "constants": [],
                "variables": [
                  10
                ]
              },
              "isFixed": "* ERR"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"285365186\">Topaz_Bonus</a>"
          },
          "passed": [
            {
              "name": "Update Energy",
              "on": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "value": {
                "operator": "Variables[0] (60) || RETURN",
                "displayLines": "60",
                "constants": [],
                "variables": [
                  60
                ]
              },
              "isFixed": "* ERR"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"285365186\">Topaz_Bonus</a>"
            }
          ]
        },
        {
          "name": "Define Modifier Variable",
          "modifierName": "<a class=\"gModGreen\" id=\"1203060420\">Topaz_UltraEnhance</a>[<span class=\"descriptionNumberColor\">Windfall Bonanza!</span>]",
          "function": "Add"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "CurEnhance",
            "compareType": ">=",
            "value2": 1,
            "contextScope": "ContextCaster"
          },
          "passed": [
            {
              "name": "Show Attack Time",
              "enhanced": {
                "operator": "Variables[0] (CurEnhance) || RETURN",
                "displayLines": "CurEnhance",
                "constants": [],
                "variables": [
                  "CurEnhance"
                ]
              },
              "on": null,
              "show": true
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Numby}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1361568506\">Topaz_BE_UltraEnhance_ShowText</a>",
              "valuePerStack": {
                "ATKCount": {
                  "operator": "Variables[0] (CurEnhance) || RETURN",
                  "displayLines": "CurEnhance",
                  "constants": [],
                  "variables": [
                    "CurEnhance"
                  ]
                }
              }
            }
          ],
          "failed": [
            {
              "name": "Show Attack Time",
              "on": null,
              "show": false
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Numby}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1361568506\">Topaz_BE_UltraEnhance_ShowText</a>"
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1213282515\">Topaz_BE_CriticalChance</a>"
        }
      ],
      "references": []
    },
    "TopazNumby_Topaz_BE_NormalAttackDamage": {
      "fileName": "TopazNumby_Topaz_BE_NormalAttackDamage",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Looped Event",
          "maxLoops": 7,
          "Event": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Fire",
                "Damage": {
                  "operator": "Variables[0] (1.5) || Constants[0] (7) || DIV || RETURN",
                  "displayLines": "(1.5 / 7)",
                  "constants": [
                    7
                  ],
                  "variables": [
                    1.5
                  ]
                },
                "Toughness": {
                  "operator": "Variables[0] (ST Toughness Value) || Constants[0] (7) || DIV || RETURN",
                  "displayLines": "(ST Toughness Value / 7)",
                  "constants": [
                    7
                  ],
                  "variables": [
                    "ST Toughness Value"
                  ]
                },
                "Tags": [
                  "Summon-Tag DMG"
                ],
                "attackType": "Follow-up"
              }
            }
          ]
        },
        {
          "name": "Trigger: Attack End",
          "fakeCharacterAttack": true
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
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"285365186\">Topaz_Bonus</a>"
          },
          "passed": [
            {
              "name": "Update Energy",
              "on": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "value": {
                "operator": "Variables[0] (60) || RETURN",
                "displayLines": "60",
                "constants": [],
                "variables": [
                  60
                ]
              },
              "isFixed": "* ERR"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"285365186\">Topaz_Bonus</a>"
            }
          ]
        }
      ],
      "references": []
    },
    "TopazNumby_Topaz_BE_LaterAttack": {
      "fileName": "TopazNumby_Topaz_BE_LaterAttack",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Battle Event's Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1203060420\">Topaz_UltraEnhance</a>[<span class=\"descriptionNumberColor\">Windfall Bonanza!</span>]"
          },
          "passed": [
            "Deleted bullshit"
          ],
          "failed": [
            "Deleted bullshit"
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Battle Event's Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1203060420\">Topaz_UltraEnhance</a>[<span class=\"descriptionNumberColor\">Windfall Bonanza!</span>]"
          },
          "passed": [
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Battle Event's Caster}}"
              },
              "inherentTarget": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "ability": "Topaz_BE_UltraAttackDamage",
              "isTrigger": true
            }
          ],
          "failed": [
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Battle Event's Caster}}"
              },
              "inherentTarget": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "ability": "Topaz_BE_NormalAttackDamage",
              "isTrigger": true
            }
          ]
        }
      ],
      "onAbort": [
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Battle Event's Caster}}"
                },
                "flagName": "STAT_CTRL"
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Battle Event's Caster}}"
                },
                "flagName": "STAT_CTRL_Frozen"
              }
            ]
          }
        }
      ],
      "references": []
    },
    "TopazNumby_Topaz_BE_FirstAttack": {
      "fileName": "TopazNumby_Topaz_BE_FirstAttack",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Battle Event's Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1203060420\">Topaz_UltraEnhance</a>[<span class=\"descriptionNumberColor\">Windfall Bonanza!</span>]"
          },
          "passed": [
            "Deleted bullshit",
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Battle Event's Caster}}"
              },
              "scope": "ContextCaster",
              "variableName": "_damageStart",
              "value": 1
            }
          ],
          "failed": [
            "Deleted bullshit",
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Battle Event's Caster}}"
              },
              "scope": "ContextCaster",
              "variableName": "_damageStart",
              "value": 1
            }
          ]
        }
      ],
      "references": []
    },
    "TopazNumby_Topaz_BE_RefreshEnhance": {
      "fileName": "TopazNumby_Topaz_BE_RefreshEnhance",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "TopazNumby_Topaz_BE_DelayLimbo": {
      "fileName": "TopazNumby_Topaz_BE_DelayLimbo",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "TopazNumby_Topaz_BE_DelayDeath": {
      "fileName": "TopazNumby_Topaz_BE_DelayDeath",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Force Entity Death",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ignoreHPLossTriggers": true,
          "ignoreDeathTriggers": true
        }
      ],
      "references": []
    },
    "TopazNumby_Topaz_BE_PassiveAbility": {
      "fileName": "TopazNumby_Topaz_BE_PassiveAbility",
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
          "modifier": "<a class=\"gModGreen\" id=\"1529971415\">Topaz_BETag</a>"
        },
        {
          "name": "Set Action-State",
          "on": null,
          "stateName": "TopazBE",
          "state": false
        },
        {
          "name": "Set Action-State",
          "on": null,
          "stateName": "TopazBE"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1529971415\">Topaz_BETag</a>",
          "modifierFlags": [
            "BlockDamage",
            "Stealth"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                "Mark Entity as Non-Target(Unselectable)"
              ]
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-182734853\">Topaz_BE_ReduceDelay</a>"
                  },
                  "passed": [
                    {
                      "name": "Trigger Ability",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Battle Event's Caster}}"
                      },
                      "ability": "Topaz_Eidolon4_ReduceDelay"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target Count SUM",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Enemy Team All}}.[[living]]"
                    },
                    "conditions": {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1833842659\">Topaz_BETargetTag</a>[<span class=\"descriptionNumberColor\">Proof of Debt</span>]"
                    }
                  },
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-93497222\">Topaz_BE_FindNoTargetFlag</a>"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target Count SUM",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Enemy Team All}}.[[living]]"
                    },
                    "conditions": {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1833842659\">Topaz_BETargetTag</a>[<span class=\"descriptionNumberColor\">Proof of Debt</span>]"
                    }
                  },
                  "passed": [
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Topaz_BE_LaterAttack",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "abilityTarget": {
                        "name": "Target Sequence",
                        "Sequence": [
                          {
                            "name": "Target Name",
                            "target": "{{Enemy Team All}}.[[living]]"
                          },
                          {
                            "name": "Target Filter",
                            "conditions": {
                              "name": "Has Modifier",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-1833842659\">Topaz_BETargetTag</a>[<span class=\"descriptionNumberColor\">Proof of Debt</span>]"
                            }
                          }
                        ]
                      },
                      "priorityTag": "LevelPerformAvatar",
                      "canHitNonTargets": true,
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Turn End [Anyone]"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
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
                    "modifier": "<a class=\"gModGreen\" id=\"-1965719686\">Topaz_Passive</a>"
                  }
                }
              ]
            },
            {
              "eventTrigger": "Entity Put Into Limbo [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1965719686\">Topaz_Passive</a>"
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Modifier is Added [Owner]"
            },
            {
              "eventTrigger": "Injected Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Battle Event's Caster}}"
                        },
                        "flagName": "STAT_CTRL"
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Battle Event's Caster}}"
                        },
                        "flagName": "STAT_CTRL_Frozen"
                      }
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "Get Revived [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1965719686\">Topaz_Passive</a>"
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
    "TopazNumby_Topaz_TechniqueInLevel": {
      "fileName": "TopazNumby_Topaz_TechniqueInLevel",
      "childAbilityList": [
        "TopazNumby_Topaz_TechniqueInLevel"
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
          "modifier": "<a class=\"gModGreen\" id=\"520958214\">Technique_Topaz_Modifier</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__285365186\">Topaz_Bonus</a>",
          "stackType": "ReplaceByCaster"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__520958214\">Technique_Topaz_Modifier</a>",
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
                      "modifier": "<a class=\"gModGreen\" id=\"285365186\">Topaz_Bonus</a>"
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
    "TopazNumby_Topaz_PassiveAbility01": {
      "fileName": "TopazNumby_Topaz_PassiveAbility01",
      "childAbilityList": [
        "TopazNumby_Topaz_PassiveAbility01",
        "TopazNumby_Topaz_Eidolon4_ReduceDelay",
        "TopazNumby_Topaz_BE_NormalAttackDamage",
        "TopazNumby_Topaz_BE_UltraAttackDamage"
      ],
      "skillTrigger": "SkillP01",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": [
        20,
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
          "modifier": "<a class=\"gModGreen\" id=\"-1965719686\">Topaz_Passive</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1550373829\">Topaz_Passive_Sub_ListenAction</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1586235241\">Topaz_BPAbility_ModifyBEAction</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"633100540\">Topaz_Ultimate_Normal_ModifyBEAction</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1215069030\">Topaz_Ultimate_BPAbility_ModifyBEAction</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Overdraft"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1158310225\">Topaz_Normal_ModifyBEAction</a>"
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
              "variableName": "MaxEnhance",
              "value": {
                "operator": "Variables[0] (2) || Variables[1] (1) || ADD || RETURN",
                "displayLines": "(2 + 1)",
                "constants": [],
                "variables": [
                  2,
                  1
                ]
              }
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "MaxEnhance",
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
        {
          "name": "Add Battle Event",
          "teamName": "Player Team",
          "eventID": 11216,
          "variables": null
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Numby}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1168141322\">Topaz_BE_BaseSpeed</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Financial Turmoil"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"828054091\">Topaz_PointB2Effect</a>"
            }
          ]
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
                "target": "{{Numby}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-182734853\">Topaz_BE_ReduceDelay</a>"
            }
          ]
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": 0,
          "maximum": {
            "operator": "Variables[0] (MaxEnhance) || RETURN",
            "displayLines": "MaxEnhance",
            "constants": [],
            "variables": [
              "MaxEnhance"
            ]
          },
          "assignState": "True",
          "priorState": "Normal",
          "bar#": 3,
          "cooldown": 0
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1550373829\">Topaz_Passive_Sub_ListenAction</a>",
          "modifierFlags": [
            "ListenBattleEventSkill"
          ],
          "execute": [
            {
              "eventTrigger": "Action Phase Start [Anyone][?]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{All Team Members with Unselectables}}.[[addBattleEvents]]"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "mustBeAlive2": true
                      },
                      {
                        "name": "Compare: Target Count SUM",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Enemy Team All}}.[[living]]"
                        },
                        "conditions": {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1833842659\">Topaz_BETargetTag</a>[<span class=\"descriptionNumberColor\">Proof of Debt</span>]"
                        },
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
                      "modifier": "<a class=\"gModGreen\" id=\"-93497222\">Topaz_BE_FindNoTargetFlag</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Ultimate Prep-Phase [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{All Team Members with Unselectables}}.[[addBattleEvents]]"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "mustBeAlive2": true
                      },
                      {
                        "name": "Compare: Target Count SUM",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Enemy Team All}}.[[living]]"
                        },
                        "conditions": {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1833842659\">Topaz_BETargetTag</a>[<span class=\"descriptionNumberColor\">Proof of Debt</span>]"
                        },
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
                      "modifier": "<a class=\"gModGreen\" id=\"-373546697\">Topaz_BE_FindNoTargetFlagOnUltraOrExtraTurn</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Extra Action/Turn [Anyone]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{All Team Members with Unselectables}}.[[addBattleEvents]]"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "mustBeAlive2": true
                      },
                      {
                        "name": "Compare: Target Count SUM",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Enemy Team All}}.[[living]]"
                        },
                        "conditions": {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1833842659\">Topaz_BETargetTag</a>[<span class=\"descriptionNumberColor\">Proof of Debt</span>]"
                        },
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
                      "modifier": "<a class=\"gModGreen\" id=\"-373546697\">Topaz_BE_FindNoTargetFlagOnUltraOrExtraTurn</a>"
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
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{All Team Members with Unselectables}}.[[addBattleEvents]]"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "mustBeAlive2": true
                      },
                      {
                        "name": "Compare: Target Count SUM",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Enemy Team All}}.[[living]]"
                        },
                        "conditions": {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1833842659\">Topaz_BETargetTag</a>[<span class=\"descriptionNumberColor\">Proof of Debt</span>]"
                        },
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
                      "modifier": "<a class=\"gModGreen\" id=\"-93497222\">Topaz_BE_FindNoTargetFlag</a>"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1965719686\">Topaz_Passive</a>",
          "modifierFlags": [
            "ListenBattleEventSkill"
          ],
          "execute": [
            {
              "eventTrigger": "Take Damage End [Owner]: Hit",
              "execute": [
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Numby}}"
                  },
                  "ability": "Topaz_BE_Hit"
                }
              ]
            },
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Player Team"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"786181068\">Topaz_Ultimate_Listen_ModifyBEAction</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Being Attacked Start [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Numby}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1899526189\">Topaz_BE_HitEffect</a>"
                }
              ]
            },
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members(Exclude Self)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"786181068\">Topaz_Ultimate_Listen_ModifyBEAction</a>"
                }
              ],
              "priorityLevel": -80
            },
            {
              "eventTrigger": "When Modifier is Added [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"-93497222\">Topaz_BE_FindNoTargetFlag</a>"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-93497222\">Topaz_BE_FindNoTargetFlag</a>"
                    },
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
                          "modifier": "<a class=\"gModGreen\" id=\"-1833842659\">Topaz_BETargetTag</a>[<span class=\"descriptionNumberColor\">Proof of Debt</span>]",
                          "valuePerStack": {
                            "MDF_PropertyValue1_DamageAdd": {
                              "operator": "Variables[0] (0.5) || RETURN",
                              "displayLines": "0.5",
                              "constants": [],
                              "variables": [
                                0.5
                              ]
                            },
                            "MDF_PropertyValue3_InsertCriticalDamageAddRatio": {
                              "operator": "Variables[0] (0.25) || RETURN",
                              "displayLines": "0.25",
                              "constants": [],
                              "variables": [
                                0.25
                              ]
                            },
                            "MDF_PropertyValue4_InsertCriticalDamageAddLayer": 0,
                            "MDF_PropertyValue5_InsertCriticalDamageAddMaxLayer": {
                              "operator": "Variables[0] (2) || RETURN",
                              "displayLines": "2",
                              "constants": [],
                              "variables": [
                                2
                              ]
                            },
                            "ShowSpecialMarkOnCreate": 0
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"-373546697\">Topaz_BE_FindNoTargetFlagOnUltraOrExtraTurn</a>"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-373546697\">Topaz_BE_FindNoTargetFlagOnUltraOrExtraTurn</a>"
                    },
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
                          "modifier": "<a class=\"gModGreen\" id=\"-1833842659\">Topaz_BETargetTag</a>[<span class=\"descriptionNumberColor\">Proof of Debt</span>]",
                          "valuePerStack": {
                            "MDF_PropertyValue1_DamageAdd": {
                              "operator": "Variables[0] (0.5) || RETURN",
                              "displayLines": "0.5",
                              "constants": [],
                              "variables": [
                                0.5
                              ]
                            },
                            "MDF_PropertyValue3_InsertCriticalDamageAddRatio": {
                              "operator": "Variables[0] (0.25) || RETURN",
                              "displayLines": "0.25",
                              "constants": [],
                              "variables": [
                                0.25
                              ]
                            },
                            "MDF_PropertyValue4_InsertCriticalDamageAddLayer": 0,
                            "MDF_PropertyValue5_InsertCriticalDamageAddMaxLayer": {
                              "operator": "Variables[0] (2) || RETURN",
                              "displayLines": "2",
                              "constants": [],
                              "variables": [
                                2
                              ]
                            },
                            "ShowSpecialMarkOnCreate": 1
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"1594870654\">Topaz_BETargetTagHitFlag</a>"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1594870654\">Topaz_BETargetTagHitFlag</a>"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1203060420\">Topaz_UltraEnhance</a>[<span class=\"descriptionNumberColor\">Windfall Bonanza!</span>]"
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Current Turn Is",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Numby}}"
                            },
                            "invertCondition": true
                          },
                          "passed": [
                            {
                              "name": "Action Advance/Delay",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Numby}}"
                              },
                              "advanceType": "Advance",
                              "multiAdd": "-0.5"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"-1346057059\">Topaz_BETargetTagInsertHitFlag</a>"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1346057059\">Topaz_BETargetTagInsertHitFlag</a>"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Current Turn Is",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Numby}}"
                        },
                        "invertCondition": true
                      },
                      "passed": [
                        {
                          "name": "Action Advance/Delay",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Numby}}"
                          },
                          "advanceType": "Advance",
                          "multiAdd": "-0.5"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Active Ability Chosen [Anyone]",
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
                      "target": "{{Caster}}"
                    }
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__828054091\">Topaz_PointB2Effect</a>",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Weakness",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "DamageType": "Fire"
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                          "value": "0.15"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-182734853\">Topaz_BE_ReduceDelay</a>",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1168141322\">Topaz_BE_BaseSpeed</a>",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDBase</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (80) || RETURN",
                    "displayLines": "80",
                    "constants": [],
                    "variables": [
                      80
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__786181068\">Topaz_Ultimate_Listen_ModifyBEAction</a>",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "stackData": [],
          "latentQueue": [],
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "target": {
              "name": "Target Name",
              "target": "{{Numby}}"
            },
            "skillType": [
              "Basic ATK",
              "Skill",
              "Ultimate"
            ],
            "conditions": {
              "name": "AND",
              "conditionList": [
                {
                  "name": "Compare: Target Count SUM",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Player's Aim Target List}}"
                  },
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1833842659\">Topaz_BETargetTag</a>[<span class=\"descriptionNumberColor\">Proof of Debt</span>]"
                  }
                },
                {
                  "name": "Has Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1203060420\">Topaz_UltraEnhance</a>[<span class=\"descriptionNumberColor\">Windfall Bonanza!</span>]"
                },
                {
                  "name": "Current Turn Is",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Numby}}"
                  },
                  "invertCondition": true
                }
              ]
            },
            "delayAdvancePreview": {
              "name": "Delay/Advance Preview",
              "previewValue": {
                "operator": "Variables[0] (0.5) || INVERT || RETURN",
                "displayLines": "-0.5",
                "constants": [],
                "variables": [
                  0.5
                ]
              }
            }
          }
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1215069030\">Topaz_Ultimate_BPAbility_ModifyBEAction</a>",
          "stackData": [],
          "latentQueue": [],
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "target": {
              "name": "Target Name",
              "target": "{{Numby}}"
            },
            "skillType": [
              "Skill"
            ],
            "conditions": {
              "name": "AND",
              "conditionList": [
                {
                  "name": "Has Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1203060420\">Topaz_UltraEnhance</a>[<span class=\"descriptionNumberColor\">Windfall Bonanza!</span>]"
                },
                {
                  "name": "Current Turn Is",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Numby}}"
                  },
                  "invertCondition": true
                }
              ]
            },
            "delayAdvancePreview": {
              "name": "Delay/Advance Preview",
              "previewValue": {
                "operator": "Variables[0] (0.5) || INVERT || RETURN",
                "displayLines": "-0.5",
                "constants": [],
                "variables": [
                  0.5
                ]
              }
            }
          }
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__633100540\">Topaz_Ultimate_Normal_ModifyBEAction</a>",
          "stackData": [],
          "latentQueue": [],
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "target": {
              "name": "Target Name",
              "target": "{{Numby}}"
            },
            "skillType": [
              "Basic ATK"
            ],
            "conditions": {
              "name": "AND",
              "conditionList": [
                {
                  "name": "Has Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Player Team Ability Target Lock}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1833842659\">Topaz_BETargetTag</a>[<span class=\"descriptionNumberColor\">Proof of Debt</span>]"
                },
                {
                  "name": "Has Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1203060420\">Topaz_UltraEnhance</a>[<span class=\"descriptionNumberColor\">Windfall Bonanza!</span>]"
                },
                {
                  "name": "Current Turn Is",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Numby}}"
                  },
                  "invertCondition": true
                }
              ]
            },
            "delayAdvancePreview": {
              "name": "Delay/Advance Preview",
              "previewValue": {
                "operator": "Variables[0] (0.5) || INVERT || RETURN",
                "displayLines": "-0.5",
                "constants": [],
                "variables": [
                  0.5
                ]
              }
            }
          }
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1586235241\">Topaz_BPAbility_ModifyBEAction</a>",
          "stackData": [],
          "latentQueue": [],
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "target": {
              "name": "Target Name",
              "target": "{{Numby}}"
            },
            "skillType": [
              "Skill"
            ],
            "conditions": {
              "name": "Current Turn Is",
              "target": {
                "name": "Target Name",
                "target": "{{Numby}}"
              },
              "invertCondition": true
            },
            "delayAdvancePreview": {
              "name": "Delay/Advance Preview",
              "previewValue": {
                "operator": "Variables[0] (0.5) || INVERT || RETURN",
                "displayLines": "-0.5",
                "constants": [],
                "variables": [
                  0.5
                ]
              }
            }
          }
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1158310225\">Topaz_Normal_ModifyBEAction</a>",
          "stackData": [],
          "latentQueue": [],
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "target": {
              "name": "Target Name",
              "target": "{{Numby}}"
            },
            "skillType": [
              "Basic ATK"
            ],
            "conditions": {
              "name": "AND",
              "conditionList": [
                {
                  "name": "Has Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Player Team Ability Target Lock}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1833842659\">Topaz_BETargetTag</a>[<span class=\"descriptionNumberColor\">Proof of Debt</span>]"
                },
                {
                  "name": "Current Turn Is",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Numby}}"
                  },
                  "invertCondition": true
                }
              ]
            },
            "delayAdvancePreview": {
              "name": "Delay/Advance Preview",
              "previewValue": {
                "operator": "Variables[0] (0.5) || INVERT || RETURN",
                "displayLines": "-0.5",
                "constants": [],
                "variables": [
                  0.5
                ]
              }
            }
          }
        }
      ]
    },
    "TopazNumby_Topaz_Ability03_Part02": {
      "fileName": "TopazNumby_Topaz_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Numby}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1524167625\">Topaz_BE_UltraEnhance_Text</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Numby}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1524167625\">Topaz_BE_UltraEnhance_Text</a>"
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
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Numby}}"
          },
          "ability": "Topaz_BE_RefreshEnhance"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1203060420\">Topaz_UltraEnhance</a>[<span class=\"descriptionNumberColor\">Windfall Bonanza!</span>]",
          "counter": {
            "operator": "Variables[0] (MaxEnhance) || RETURN",
            "displayLines": "MaxEnhance",
            "constants": [],
            "variables": [
              "MaxEnhance"
            ]
          },
          "valuePerStack": {
            "Ability03_P1_BEDamageRatio": {
              "operator": "Variables[0] (1.5) || RETURN",
              "displayLines": "1.5",
              "constants": [],
              "variables": [
                1.5
              ]
            },
            "Ability03_P2_CriticalChance": {
              "operator": "Variables[0] (0.25) || RETURN",
              "displayLines": "0.25",
              "constants": [],
              "variables": [
                0.25
              ]
            },
            "Ability03_P3_DelayRatio": {
              "operator": "Variables[0] (0.5) || RETURN",
              "displayLines": "0.5",
              "constants": [],
              "variables": [
                0.5
              ]
            },
            "Eidolon6_P2_PenRatio": {
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
          "name": "Define Custom Variable",
          "variableName": "CurEnhance",
          "value": {
            "operator": "Variables[0] (MaxEnhance) || RETURN",
            "displayLines": "MaxEnhance",
            "constants": [],
            "variables": [
              "MaxEnhance"
            ]
          }
        },
        {
          "name": "Show Attack Time",
          "enhanced": {
            "operator": "Variables[0] (MaxEnhance) || RETURN",
            "displayLines": "MaxEnhance",
            "constants": [],
            "variables": [
              "MaxEnhance"
            ]
          },
          "on": null,
          "show": true
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Numby}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1361568506\">Topaz_BE_UltraEnhance_ShowText</a>",
          "valuePerStack": {
            "ATKCount": {
              "operator": "Variables[0] (MaxEnhance) || RETURN",
              "displayLines": "MaxEnhance",
              "constants": [],
              "variables": [
                "MaxEnhance"
              ]
            }
          }
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": {
            "operator": "Variables[0] (MaxEnhance) || RETURN",
            "displayLines": "MaxEnhance",
            "constants": [],
            "variables": [
              "MaxEnhance"
            ]
          },
          "maximum": {
            "operator": "Variables[0] (MaxEnhance) || RETURN",
            "displayLines": "MaxEnhance",
            "constants": [],
            "variables": [
              "MaxEnhance"
            ]
          },
          "assignState": "True",
          "priorState": "Active",
          "bar#": 3,
          "cooldown": 0
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "TopazNumby_Topaz_Ability03_Part01": {
      "fileName": "TopazNumby_Topaz_Ability03_Part01",
      "childAbilityList": [
        "TopazNumby_Topaz_Ability03_Camera",
        "TopazNumby_Topaz_Ability03_EnterReady",
        "TopazNumby_Topaz_Ability03_Part01",
        "TopazNumby_Topaz_Ability03_Part02",
        "TopazNumby_Klara_Ability03_EnterReady",
        "TopazNumby_Klara_Ability03_Part01"
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
          "ability": "Topaz_Ability03_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "TopazNumby_Topaz_Ability03_EnterReady": {
      "fileName": "TopazNumby_Topaz_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "TopazNumby_Topaz_Ability02_Part02": {
      "fileName": "TopazNumby_Topaz_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable",
          "variableName": "_damageStart",
          "value": 0
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-934416652\">M_Topaz_BPAbility_AddRegardAsAttackType</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Numby}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-934416652\">M_Topaz_BPAbility_AddRegardAsAttackType</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1833842659\">Topaz_BETargetTag</a>[<span class=\"descriptionNumberColor\">Proof of Debt</span>]",
          "valuePerStack": {
            "MDF_PropertyValue1_DamageAdd": {
              "operator": "Variables[0] (0.5) || RETURN",
              "displayLines": "0.5",
              "constants": [],
              "variables": [
                0.5
              ]
            },
            "MDF_PropertyValue3_InsertCriticalDamageAddRatio": {
              "operator": "Variables[0] (0.25) || RETURN",
              "displayLines": "0.25",
              "constants": [],
              "variables": [
                0.25
              ]
            },
            "MDF_PropertyValue4_InsertCriticalDamageAddLayer": 0,
            "MDF_PropertyValue5_InsertCriticalDamageAddMaxLayer": {
              "operator": "Variables[0] (2) || RETURN",
              "displayLines": "2",
              "constants": [],
              "variables": [
                2
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
            "modifier": "<a class=\"gModGreen\" id=\"1203060420\">Topaz_UltraEnhance</a>[<span class=\"descriptionNumberColor\">Windfall Bonanza!</span>]"
          }
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
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Numby}}"
          },
          "inherentTarget": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "ability": "Topaz_BE_FirstAttack",
          "isTrigger": true
        },
        {
          "name": "WAIT FOR",
          "condition": {
            "name": "Compare: Variable",
            "value1": "_damageStart",
            "compareType": ">=",
            "value2": 1,
            "contextScope": "ContextCaster"
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
            "modifier": "<a class=\"gModGreen\" id=\"1203060420\">Topaz_UltraEnhance</a>[<span class=\"descriptionNumberColor\">Windfall Bonanza!</span>]"
          },
          "passed": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "variableName": "CurEnhance",
              "modifierName": "<a class=\"gModGreen\" id=\"1203060420\">Topaz_UltraEnhance</a>[<span class=\"descriptionNumberColor\">Windfall Bonanza!</span>]",
              "multiplier": 1
            },
            {
              "name": "Define Custom Variable",
              "variableName": "CurEnhance",
              "value": {
                "operator": "Variables[0] (CurEnhance) || Constants[0] (1) || SUB || RETURN",
                "displayLines": "(CurEnhance - 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "CurEnhance"
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "CurEnhance",
                "compareType": ">=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (CurEnhance) || RETURN",
                    "displayLines": "CurEnhance",
                    "constants": [],
                    "variables": [
                      "CurEnhance"
                    ]
                  },
                  "maximum": {
                    "operator": "Variables[0] (MaxEnhance) || RETURN",
                    "displayLines": "MaxEnhance",
                    "constants": [],
                    "variables": [
                      "MaxEnhance"
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
                  "maximum": {
                    "operator": "Variables[0] (MaxEnhance) || RETURN",
                    "displayLines": "MaxEnhance",
                    "constants": [],
                    "variables": [
                      "MaxEnhance"
                    ]
                  },
                  "assignState": "True",
                  "priorState": "Normal",
                  "bar#": 3,
                  "cooldown": 0
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1213282515\">Topaz_BE_CriticalChance</a>"
            },
            {
              "name": "Looped Event",
              "maxLoops": 7,
              "Event": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Fire",
                    "Damage": {
                      "operator": "Variables[0] (1.5) || Variables[1] (1.5) || ADD || RETURN",
                      "displayLines": "(1.5 + 1.5)",
                      "constants": [],
                      "variables": [
                        1.5,
                        1.5
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
                    "Tags": [
                      "Summon-Tag DMG"
                    ],
                    "attackType": "Skill"
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
                "DamageType": "Fire",
                "Damage": {
                  "operator": "Variables[0] (1.5) || Variables[1] (1.5) || ADD || RETURN",
                  "displayLines": "(1.5 + 1.5)",
                  "constants": [],
                  "variables": [
                    1.5,
                    1.5
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
                "Tags": [
                  "Summon-Tag DMG"
                ],
                "attackType": "Skill"
              }
            },
            {
              "name": "Trigger: Attack End",
              "fakeCharacterAttack": true
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Trace Activated",
                "conditionList": "Stonks Market"
              },
              "passed": [
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "value": {
                    "operator": "Variables[0] (10) || RETURN",
                    "displayLines": "10",
                    "constants": [],
                    "variables": [
                      10
                    ]
                  },
                  "isFixed": "* ERR"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"285365186\">Topaz_Bonus</a>"
              },
              "passed": [
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "value": {
                    "operator": "Variables[0] (60) || RETURN",
                    "displayLines": "60",
                    "constants": [],
                    "variables": [
                      60
                    ]
                  },
                  "isFixed": "* ERR"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"285365186\">Topaz_Bonus</a>"
                }
              ]
            },
            {
              "name": "Define Modifier Variable",
              "modifierName": "<a class=\"gModGreen\" id=\"1203060420\">Topaz_UltraEnhance</a>[<span class=\"descriptionNumberColor\">Windfall Bonanza!</span>]",
              "function": "Add"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "CurEnhance",
                "compareType": ">=",
                "value2": 1,
                "contextScope": "ContextCaster"
              },
              "passed": [
                {
                  "name": "Show Attack Time",
                  "enhanced": {
                    "operator": "Variables[0] (CurEnhance) || RETURN",
                    "displayLines": "CurEnhance",
                    "constants": [],
                    "variables": [
                      "CurEnhance"
                    ]
                  },
                  "on": null,
                  "show": true
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Numby}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1361568506\">Topaz_BE_UltraEnhance_ShowText</a>",
                  "valuePerStack": {
                    "ATKCount": {
                      "operator": "Variables[0] (CurEnhance) || RETURN",
                      "displayLines": "CurEnhance",
                      "constants": [],
                      "variables": [
                        "CurEnhance"
                      ]
                    }
                  }
                }
              ],
              "failed": [
                {
                  "name": "Show Attack Time",
                  "on": null,
                  "show": false
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Numby}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1361568506\">Topaz_BE_UltraEnhance_ShowText</a>"
                }
              ]
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1213282515\">Topaz_BE_CriticalChance</a>"
            }
          ],
          "failed": [
            {
              "name": "Looped Event",
              "maxLoops": 7,
              "Event": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Fire",
                    "Damage": {
                      "operator": "Variables[0] (1.5) || Constants[0] (7) || DIV || RETURN",
                      "displayLines": "(1.5 / 7)",
                      "constants": [
                        7
                      ],
                      "variables": [
                        1.5
                      ]
                    },
                    "Toughness": {
                      "operator": "Variables[0] (ST Toughness Value) || Constants[0] (7) || DIV || RETURN",
                      "displayLines": "(ST Toughness Value / 7)",
                      "constants": [
                        7
                      ],
                      "variables": [
                        "ST Toughness Value"
                      ]
                    },
                    "Tags": [
                      "Summon-Tag DMG"
                    ],
                    "attackType": "Skill"
                  }
                }
              ]
            },
            {
              "name": "Trigger: Attack End",
              "fakeCharacterAttack": true
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"285365186\">Topaz_Bonus</a>"
              },
              "passed": [
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "value": {
                    "operator": "Variables[0] (60) || RETURN",
                    "displayLines": "60",
                    "constants": [],
                    "variables": [
                      60
                    ]
                  },
                  "isFixed": "* ERR"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"285365186\">Topaz_Bonus</a>"
                }
              ]
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1891120358\">Topaz_Ability02_SpecialMarkAdder</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__264491546\">Topaz_BETargetTagActive_BP</a>",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "ListenBattleEventSkill",
            "RemoveWhenCasterDead"
          ],
          "execute": [
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
                          "target": "{{Player's Aim Target List}}"
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
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Toggle Skill Mark",
                      "toggle": true,
                      "skillTypesAllow": [
                        "Skill"
                      ]
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
          "for": "<a class=\"gModGreen\" id=\"mod__1891120358\">Topaz_Ability02_SpecialMarkAdder</a>",
          "stackData": [],
          "latentQueue": [
            "_damageStart"
          ],
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE, with Unselectables)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"264491546\">Topaz_BETargetTagActive_BP</a>",
              "aliveOnly": "True",
              "haloStatus": true
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-934416652\">M_Topaz_BPAbility_AddRegardAsAttackType</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Attack-Type Extension",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "typeToExtend": "Skill",
                  "isRemove": true
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Attack-Type Extension",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "typeToExtend": "Skill",
                  "extendTypeTo": "Follow-up"
                }
              ]
            },
            {
              "eventTrigger": "Attack DMG End [Anyone]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-934416652\">M_Topaz_BPAbility_AddRegardAsAttackType</a>"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "_damageStart"
          ],
          "duration": 1
        }
      ]
    },
    "TopazNumby_Topaz_Ability02_Part01": {
      "fileName": "TopazNumby_Topaz_Ability02_Part01",
      "childAbilityList": [
        "TopazNumby_Topaz_Ability02_Camera",
        "TopazNumby_Topaz_Ability02_Part01",
        "TopazNumby_Topaz_Ability02_Part02"
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
          "ability": "Topaz_Ability02_Part02",
          "isTrigger": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1203060420\">Topaz_UltraEnhance</a>[<span class=\"descriptionNumberColor\">Windfall Bonanza!</span>]"
          }
        }
      ],
      "references": []
    },
    "TopazNumby_Topaz_Ability01_Part02": {
      "fileName": "TopazNumby_Topaz_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Overdraft"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2051023932\">M_Topaz_Normal_AddRegardAsAttackType</a>"
            }
          ]
        },
        {
          "name": "Shot Fired",
          "execute": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Fire",
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
            }
          ]
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2051023932\">M_Topaz_Normal_AddRegardAsAttackType</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Attack-Type Extension",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "typeToExtend": "Basic ATK",
                  "isRemove": true
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Attack-Type Extension",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "typeToExtend": "Basic ATK",
                  "extendTypeTo": "Follow-up"
                }
              ]
            },
            {
              "eventTrigger": "Attack DMG End [Anyone]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-2051023932\">M_Topaz_Normal_AddRegardAsAttackType</a>"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "duration": 1
        }
      ]
    },
    "TopazNumby_Topaz_Ability01_Part01": {
      "fileName": "TopazNumby_Topaz_Ability01_Part01",
      "childAbilityList": [
        "TopazNumby_Topaz_Ability01_Camera",
        "TopazNumby_Topaz_Ability01_Part01",
        "TopazNumby_Topaz_Ability01_Part02"
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
          "ability": "Topaz_Ability01_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "TopazNumby_Topaz_Eidolon4_ReduceDelay": {
      "fileName": "TopazNumby_Topaz_Eidolon4_ReduceDelay",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Action Advance/Delay",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "advanceType": "Set",
          "multiAdd": "(0 - 0.2)"
        }
      ],
      "references": []
    },
    "TopazNumby_Modifiers": {
      "fileName": "TopazNumby_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__1361568506\">Topaz_BE_UltraEnhance_ShowText</a>",
          "stackType": "ReplaceByCaster",
          "stackData": [
            "ATKCount"
          ],
          "latentQueue": [
            "_damageStart"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1350976023\">Topaz_BETargetTagActive</a>",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "ListenBattleEventSkill",
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
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
                        "value1": "ShowSpecialMarkOnCreate",
                        "compareType": ">=",
                        "value2": 1,
                        "contextScope": "ContextModifier"
                      },
                      {
                        "name": "Compare: Target Count SUM",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Player's Aim Target List}}"
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
                        "name": "OR",
                        "conditionList": [
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
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Is Part Of Team",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Current Action Owner}}"
                                },
                                "team": "Player Team"
                              },
                              {
                                "name": "Compare: Variable",
                                "value1": "CurEnhance",
                                "compareType": ">=",
                                "value2": 1,
                                "contextScope": "ContextCaster"
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Toggle Skill Mark",
                      "toggle": true
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
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1203060420\">Topaz_UltraEnhance</a>[<span class=\"descriptionNumberColor\">Windfall Bonanza!</span>]"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Target Count SUM",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Player's Aim Target List}}"
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
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
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
                          "passed": [
                            {
                              "name": "Toggle Skill Mark",
                              "toggle": true,
                              "skillTypesAllow": [
                                "Basic ATK",
                                "Ultimate"
                              ]
                            }
                          ],
                          "failed": [
                            {
                              "name": "Toggle Skill Mark",
                              "toggle": true
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "Toggle Skill Mark"
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Target Count SUM",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Player's Aim Target List}}"
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
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Trace Activated",
                            "conditionList": "Overdraft"
                          },
                          "passed": [
                            {
                              "name": "Toggle Skill Mark",
                              "toggle": true,
                              "skillTypesAllow": [
                                "Basic ATK",
                                "Ultimate"
                              ]
                            }
                          ],
                          "failed": [
                            {
                              "name": "Toggle Skill Mark"
                            }
                          ]
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
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1982768595\">Topaz_BE_FiretakenRatio</a>",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">FireVulnerability</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (TOPAZ_OBJECT_UNUSED_1) || RETURN",
                    "displayLines": "TOPAZ_OBJECT_UNUSED_1",
                    "constants": [],
                    "variables": [
                      "TOPAZ_OBJECT_UNUSED_1"
                    ]
                  }
                }
              ]
            }
          ],
          "duration": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1899526189\">Topaz_BE_HitEffect</a>",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1524167625\">Topaz_BE_UltraEnhance_Text</a>",
          "stackType": "ReplaceByCaster",
          "stackData": [],
          "latentQueue": [],
          "type": "Buff",
          "effectName": "DMG multiplier, CRIT DMG Boost",
          "duration": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1203060420\">Topaz_UltraEnhance</a>[<span class=\"descriptionNumberColor\">Windfall Bonanza!</span>]",
          "counter": 1,
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Numby}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1182113181\">BE_ExtraSpeedModifier</a>"
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
                    "eidolon": 6
                  },
                  "passed": [
                    {
                      "name": "Update Modifier Description",
                      "popUpText": "Numby's DMG multiplier increases by <span class=\"descriptionNumberColor\">Skill03_P1_BEDamageRatio</span>, CRIT DMG increases by <span class=\"descriptionNumberColor\">Skill03_P2_CriticalChance</span>, and Fire RES PEN increases by <span class=\"descriptionNumberColor\">Rank06_P2_PenRatio</span>. When enemies with Proof of Debt receive attacks from allies' Basic ATK, Skill, or Ultimate, Numby's action is Advanced Forward by <span class=\"descriptionNumberColor\">Skill03_P3_DelayRatio</span>."
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "Skill03_P1_BEDamageRatio",
            "Skill03_P2_CriticalChance",
            "Skill03_P3_DelayRatio",
            "Rank06_P2_PenRatio"
          ],
          "latentQueue": [],
          "description": "Numby's DMG multiplier increases by <span class=\"descriptionNumberColor\">Skill03_P1_BEDamageRatio</span>, CRIT DMG increases by <span class=\"descriptionNumberColor\">Skill03_P2_CriticalChance</span>. When enemies with Proof of Debt receive attacks from allies' Basic ATK, Skill, or Ultimate, Numby's action is Advanced Forward by <span class=\"descriptionNumberColor\">Skill03_P3_DelayRatio</span>.",
          "type": "Buff",
          "statusName": "Windfall Bonanza!"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1213282515\">Topaz_BE_CriticalChance</a>",
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
                    "operator": "Variables[0] (0.25) || RETURN",
                    "displayLines": "0.25",
                    "constants": [],
                    "variables": [
                      0.25
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 6
                  },
                  "passed": [
                    {
                      "name": "Stack Target Stat Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceFirePEN</span>&nbsp;",
                      "value": {
                        "operator": "Variables[0] (0.1) || RETURN",
                        "displayLines": "0.1",
                        "constants": [],
                        "variables": [
                          0.1
                        ]
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "_damageStart"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1322510639\">Topaz_BETargetTag_CriticalDamageUp</a>[<span class=\"descriptionNumberColor\">Debtor</span>]",
          "stackType": "ReplaceByCaster",
          "description": "Increases CRIT DMG received from Follow-Up ATKs by <span class=\"descriptionNumberColor\">MDF_PropertyValue1_InsertCriticalDamageAddRatio</span>, stacking up to <span class=\"descriptionNumberColor\">MDF_PropertyValue2_InsertCriticalDamageAddMaxLayer</span> time(s).",
          "type": "Debuff",
          "effectName": "Debtor",
          "statusName": "Debtor",
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-373546697\">Topaz_BE_FindNoTargetFlagOnUltraOrExtraTurn</a>",
          "stackType": "Replace",
          "stackData": [],
          "latentQueue": [],
          "duration": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-93497222\">Topaz_BE_FindNoTargetFlag</a>",
          "stackType": "Replace",
          "stackData": [],
          "latentQueue": [],
          "duration": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1346057059\">Topaz_BETargetTagInsertHitFlag</a>",
          "stackType": "Replace",
          "duration": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1594870654\">Topaz_BETargetTagHitFlag</a>",
          "stackType": "Replace",
          "duration": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1833842659\">Topaz_BETargetTag</a>[<span class=\"descriptionNumberColor\">Proof of Debt</span>]",
          "modifierFlags": [
            "RemoveWhenCasterDead",
            "ListenBattleEventSkill"
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
                      "modifier": "<a class=\"gModGreen\" id=\"-1833842659\">Topaz_BETargetTag</a>[<span class=\"descriptionNumberColor\">Proof of Debt</span>]"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1350976023\">Topaz_BETargetTagActive</a>"
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_PropertyValue4_InsertCriticalDamageAddLayer",
                  "value": {
                    "operator": "Constants[0] (0) || RETURN",
                    "displayLines": "0",
                    "constants": [
                      0
                    ],
                    "variables": []
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1350976023\">Topaz_BETargetTagActive</a>",
                  "valuePerStack": {
                    "ShowSpecialMarkOnCreate": {
                      "operator": "Variables[0] (ShowSpecialMarkOnCreate) || RETURN",
                      "displayLines": "ShowSpecialMarkOnCreate",
                      "constants": [],
                      "variables": [
                        "ShowSpecialMarkOnCreate"
                      ]
                    }
                  }
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
                        "value1": "ShowSpecialMarkOnCreate",
                        "compareType": ">=",
                        "value2": 1,
                        "contextScope": "ContextModifier"
                      },
                      {
                        "name": "Compare: Target Count SUM",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Player's Aim Target List}}"
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
                        },
                        "invertCondition": true
                      },
                      {
                        "name": "OR",
                        "conditionList": [
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
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Is Part Of Team",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Current Action Owner}}"
                                },
                                "team": "Player Team"
                              },
                              {
                                "name": "Compare: Variable",
                                "value1": "CurEnhance",
                                "compareType": ">=",
                                "value2": 1,
                                "contextScope": "ContextCaster"
                              }
                            ]
                          }
                        ]
                      }
                    ]
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
                        "value1": "_isShowSpecialMark",
                        "compareType": "<=",
                        "value2": 0,
                        "contextScope": "ContextModifier"
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_isShowSpecialMark",
                          "value": 1
                        },
                        {
                          "name": "Toggle Skill Mark",
                          "toggle": true
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1322510639\">Topaz_BETargetTag_CriticalDamageUp</a>[<span class=\"descriptionNumberColor\">Debtor</span>]"
                },
                {
                  "name": "Toggle Skill Mark"
                }
              ]
            },
            {
              "eventTrigger": "Turn End [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "_isShowSpecialMark",
                    "compareType": ">=",
                    "value2": 1,
                    "contextScope": "ContextModifier"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_isShowSpecialMark",
                      "value": 0
                    },
                    {
                      "name": "Toggle Skill Mark"
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
                    "name": "Attack Type",
                    "attackTypes": [
                      "Follow-up"
                    ],
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Defender",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                          "value": "MDF_PropertyValue1_DamageAdd"
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Eidolon Activated",
                        "eidolon": 1
                      },
                      "passed": [
                        {
                          "name": "Adjust Target Stats",
                          "modifiedValuesArray": [
                            {
                              "on": "Attacker",
                              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageSUM</span>&nbsp;",
                              "value": "(MDF_PropertyValue4_InsertCriticalDamageAddLayer * MDF_PropertyValue3_InsertCriticalDamageAddRatio)"
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
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 1,
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_PropertyValue4_InsertCriticalDamageAddLayer",
                      "value": 0
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1322510639\">Topaz_BETargetTag_CriticalDamageUp</a>[<span class=\"descriptionNumberColor\">Debtor</span>]"
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
                        "name": "Attack Type",
                        "attackTypes": [
                          "Basic ATK",
                          "Skill",
                          "Ultimate"
                        ],
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
                      },
                      {
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{All Team Members}}.[[addBattleEvents]]"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "mustBeAlive2": true
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
                      "modifier": "<a class=\"gModGreen\" id=\"1594870654\">Topaz_BETargetTagHitFlag</a>"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Follow-up"
                    ],
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{All Team Members with Unselectables}}.[[addBattleEvents]]"
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
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1346057059\">Topaz_BETargetTagInsertHitFlag</a>"
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Eidolon Activated",
                        "eidolon": 1
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
                            "value1": "MDF_PropertyValue4_InsertCriticalDamageAddLayer",
                            "compareType": "<",
                            "value2": {
                              "operator": "Variables[0] (MDF_PropertyValue5_InsertCriticalDamageAddMaxLayer) || RETURN",
                              "displayLines": "MDF_PropertyValue5_InsertCriticalDamageAddMaxLayer",
                              "constants": [],
                              "variables": [
                                "MDF_PropertyValue5_InsertCriticalDamageAddMaxLayer"
                              ]
                            },
                            "contextScope": "ContextModifier"
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "MDF_PropertyValue4_InsertCriticalDamageAddLayer",
                              "value": {
                                "operator": "Constants[0] (1) || Variables[0] (MDF_PropertyValue4_InsertCriticalDamageAddLayer) || ADD || RETURN",
                                "displayLines": "(1 + MDF_PropertyValue4_InsertCriticalDamageAddLayer)",
                                "constants": [
                                  1
                                ],
                                "variables": [
                                  "MDF_PropertyValue4_InsertCriticalDamageAddLayer"
                                ]
                              }
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1322510639\">Topaz_BETargetTag_CriticalDamageUp</a>[<span class=\"descriptionNumberColor\">Debtor</span>]",
                              "valuePerStack": {
                                "MDF_PropertyValue1_InsertCriticalDamageAddRatio": {
                                  "operator": "Variables[0] (MDF_PropertyValue3_InsertCriticalDamageAddRatio) || RETURN",
                                  "displayLines": "MDF_PropertyValue3_InsertCriticalDamageAddRatio",
                                  "constants": [],
                                  "variables": [
                                    "MDF_PropertyValue3_InsertCriticalDamageAddRatio"
                                  ]
                                },
                                "MDF_PropertyValue2_InsertCriticalDamageAddMaxLayer": {
                                  "operator": "Variables[0] (MDF_PropertyValue5_InsertCriticalDamageAddMaxLayer) || RETURN",
                                  "displayLines": "MDF_PropertyValue5_InsertCriticalDamageAddMaxLayer",
                                  "constants": [],
                                  "variables": [
                                    "MDF_PropertyValue5_InsertCriticalDamageAddMaxLayer"
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
              "eventTrigger": "Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "_isShowSpecialMark",
                    "compareType": ">=",
                    "value2": 1,
                    "contextScope": "ContextModifier"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_isShowSpecialMark",
                      "value": 0
                    },
                    {
                      "name": "Toggle Skill Mark"
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
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "_isShowSpecialMark",
                    "compareType": ">=",
                    "value2": 1,
                    "contextScope": "ContextModifier"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_isShowSpecialMark",
                      "value": 0
                    },
                    {
                      "name": "Toggle Skill Mark"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Update Target Selected(UI) [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1203060420\">Topaz_UltraEnhance</a>[<span class=\"descriptionNumberColor\">Windfall Bonanza!</span>]"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Target Count SUM",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Player's Aim Target List}}"
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
                      "passed": [
                        {
                          "name": "Toggle Skill Mark"
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
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
                          "passed": [
                            {
                              "name": "Toggle Skill Mark",
                              "toggle": true,
                              "skillTypesAllow": [
                                "Basic ATK",
                                "Ultimate"
                              ]
                            }
                          ],
                          "failed": [
                            {
                              "name": "Toggle Skill Mark",
                              "toggle": true
                            }
                          ]
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
                          "target": "{{Current Action Owner}}"
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
                            "name": "Compare: Target Count SUM",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Player's Aim Target List}}"
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
                          "passed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Trace Activated",
                                "conditionList": "Overdraft"
                              },
                              "passed": [
                                {
                                  "name": "Toggle Skill Mark"
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Toggle Skill Mark",
                                  "toggle": true,
                                  "skillTypesAllow": [
                                    "Basic ATK"
                                  ]
                                }
                              ]
                            }
                          ],
                          "failed": [
                            {
                              "name": "Toggle Skill Mark",
                              "toggle": true,
                              "skillTypesAllow": [
                                "Basic ATK"
                              ]
                            }
                          ]
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
              "eventTrigger": "Active Ability Chosen [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
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
                      {
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
                            "name": "Compare: Variable",
                            "value1": "CurEnhance",
                            "compareType": ">=",
                            "value2": 1,
                            "contextScope": "ContextCaster"
                          }
                        ]
                      }
                    ]
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
                        "value1": "_isShowSpecialMark",
                        "compareType": "<=",
                        "value2": 0,
                        "contextScope": "ContextModifier"
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable (VFX)",
                          "variableName": "_isShowSpecialMark",
                          "value": 1
                        },
                        {
                          "name": "Toggle Skill Mark",
                          "toggle": true
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable (VFX)",
                      "variableName": "_isShowSpecialMark",
                      "value": 0
                    },
                    {
                      "name": "Toggle Skill Mark"
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_PropertyValue1_DamageAdd",
            "MDF_PropertyValue3_InsertCriticalDamageAddRatio",
            "MDF_PropertyValue4_InsertCriticalDamageAddLayer",
            "MDF_PropertyValue5_InsertCriticalDamageAddMaxLayer"
          ],
          "latentQueue": [
            "_damageStart"
          ],
          "description": "Increases Follow-Up ATK DMG received by <span class=\"descriptionNumberColor\">MDF_PropertyValue1_DamageAdd</span>. Numby will target this unit as its attack target.",
          "type": "Debuff",
          "effectName": "Proof of Debt",
          "statusName": "Proof of Debt"
        }
      ],
      "references": []
    },
    "TopazNumby_BE_BattleEvents": {
      "fileName": "TopazNumby_BE_BattleEvents",
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
          "ID": 11216,
          "team": "Player Team",
          "eventType": "Summon",
          "abilityList": null,
          "overridesArray": [
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;",
              "value": 100
            },
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATKFlat</span>&nbsp;"
            },
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;"
            },
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateSUM</span>&nbsp;"
            },
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageSUM</span>&nbsp;"
            },
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceFirePEN</span>&nbsp;"
            },
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">EffectHitRateSUM</span>&nbsp;"
            },
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageFire</span>&nbsp;"
            },
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;"
            }
          ],
          "hardLevelEvent": true
        }
      ],
      "references": []
    }
  }
}