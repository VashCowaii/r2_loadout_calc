const configAbility = {
  "fileName": "-1954781239_FantasticStory_BaseAbility_0010",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [],
  "whenAdded": [
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "ContextCaster",
      "variableName": "DV_FantasticStory_PlusAbility_0011"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "ContextCaster",
      "variableName": "DV_FantasticStory_PlusAbility_0012"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "ContextCaster",
      "variableName": "DV_FantasticStory_PlusAbility_0013"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "ContextCaster",
      "variableName": "DV_FantasticStory_PlusAbility_0014"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "ContextCaster",
      "variableName": "DV_FantasticStory_PlusAbility_0015"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "ContextCaster",
      "variableName": "DV_FantasticStory_PlusAbility_0016"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "ContextCaster",
      "variableName": "DV_FantasticStory_PlusAbility_0017"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "ContextCaster",
      "variableName": "DV_FantasticStory_PlusAbility_0018"
    },
    {
      "name": "Define Custom Variable with Stat",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "BattleEvent_BaseHP",
      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent%</span>&nbsp;"
    },
    {
      "name": "Define Custom Variable",
      "variableName": "BattleEvent_BaseHP",
      "value": {
        "operator": "Variables[0] (BattleEvent_BaseHP) || Constants[0] (90) || MUL || RETURN",
        "displayLines": "(BattleEvent_BaseHP * 90)",
        "constants": [
          90
        ],
        "variables": [
          "BattleEvent_BaseHP"
        ]
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Modifier_FantasticStory_BaseAbility_0010",
      "valuePerStack": {
        "ADF_1": {
          "operator": "Variables[0] (#ADF_1) || RETURN",
          "displayLines": "#ADF_1",
          "constants": [],
          "variables": [
            "#ADF_1"
          ]
        },
        "ADF_2": {
          "operator": "Variables[0] (#ADF_2) || RETURN",
          "displayLines": "#ADF_2",
          "constants": [],
          "variables": [
            "#ADF_2"
          ]
        },
        "TempHP": {
          "operator": "Variables[0] (BattleEvent_BaseHP) || RETURN",
          "displayLines": "BattleEvent_BaseHP",
          "constants": [],
          "variables": [
            "BattleEvent_BaseHP"
          ]
        }
      }
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Modifier_FantasticStory_BaseAbility_0010_plus6_ultraDmgUp[<span class=\"descriptionNumberColor\">Splash</span>]",
      "stackType": "Replace",
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
                "operator": "Variables[0] (DmgAddedRatio) || RETURN",
                "displayLines": "DmgAddedRatio",
                "constants": [],
                "variables": [
                  "DmgAddedRatio"
                ]
              }
            }
          ]
        }
      ],
      "description": "Increases DMG dealt by <span class=\"descriptionNumberColor\">DmgAddedRatio</span>.",
      "type": "Buff",
      "effectName": "DMG Boost",
      "statusName": "Splash"
    },
    {
      "name": "Modifier Construction",
      "for": "Modifier_FantasticStory_BaseAbility_0010_plus3_ultraDmgUp[<span class=\"descriptionNumberColor\">Rupture</span>]",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Type",
                "skillType": "Ultimate"
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                      "value": "DV_FantasticStory_PlusAbility_0013_layerDmg"
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
              "name": "Define Custom Variable with Modifier Values",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "valueType": "Layer",
              "variableName": "DV_FantasticStory_PlusAbility_0013_layer",
              "multiplier": 1
            },
            {
              "name": "Define Custom Variable",
              "variableName": "DV_FantasticStory_PlusAbility_0013_layerDmg",
              "value": {
                "operator": "Variables[0] (DV_FantasticStory_PlusAbility_0013_layer) || Variables[1] (DmgAddedRatio) || MUL || RETURN",
                "displayLines": "(DV_FantasticStory_PlusAbility_0013_layer * DmgAddedRatio)",
                "constants": [],
                "variables": [
                  "DV_FantasticStory_PlusAbility_0013_layer",
                  "DmgAddedRatio"
                ]
              }
            }
          ]
        }
      ],
      "description": "Ultimate deals <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_0013_layerDmg</span> more DMG.",
      "type": "Buff",
      "effectName": "Ultimate DMG Boost",
      "statusName": "Rupture"
    },
    {
      "name": "Modifier Construction",
      "for": "Modifier_FantasticStory_BaseAbility_0010_sub2[<span class=\"descriptionNumberColor\">Shatter</span>]",
      "stackType": "Replace",
      "modifierFlags": [
        "Deathrattle"
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
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "DV_FantasticStory_PlusAbility_0015",
                "compareType": "=",
                "value2": 1,
                "contextScope": "ContextCaster"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueType": "Layer",
                  "variableName": "Plus5_Layer",
                  "modifierName": "Modifier_FantasticStory_BaseAbility_0010_plus5_ReceiveDmgUp[<span class=\"descriptionNumberColor\">Scalded</span>]",
                  "multiplier": 1
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "Plus5_Bomb_Damage",
                  "value": {
                    "operator": "Variables[0] (Bomb_Damage) || Constants[0] (1) || Variables[1] (Plus5_Layer) || Variables[2] (DV_FantasticStory_PlusAbility_0015_ADF_1) || MUL || ADD || MUL || RETURN",
                    "displayLines": "(Bomb_Damage * (1 + (Plus5_Layer * DV_FantasticStory_PlusAbility_0015_ADF_1)))",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "Bomb_Damage",
                      "Plus5_Layer",
                      "DV_FantasticStory_PlusAbility_0015_ADF_1"
                    ]
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
                    "DamageType": "Physical",
                    "DamageFlat": {
                      "operator": "Variables[0] (Plus5_Bomb_Damage) || RETURN",
                      "displayLines": "Plus5_Bomb_Damage",
                      "constants": [],
                      "variables": [
                        "Plus5_Bomb_Damage"
                      ]
                    },
                    "dmgFormulaFinal": "Converted DMG Base",
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "DOT"
                  }
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Targets Adjacent to Modifier Holder(v2)}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 2,
                  "ifTargetFound": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "Modifier_FantasticStory_BaseAbility_0010_plus5_ReceiveDmgUp[<span class=\"descriptionNumberColor\">Scalded</span>]"
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable with Modifier Values",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "valueType": "Layer",
                          "variableName": "Plus5_Layer",
                          "modifierName": "Modifier_FantasticStory_BaseAbility_0010_plus5_ReceiveDmgUp[<span class=\"descriptionNumberColor\">Scalded</span>]",
                          "multiplier": 1
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "Plus5_Layer",
                          "value": 0
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Plus5_Bomb_Damage",
                      "value": {
                        "operator": "Variables[0] (Bomb_Damage) || Constants[0] (1) || Variables[1] (Plus5_Layer) || Variables[2] (DV_FantasticStory_PlusAbility_0015_ADF_1) || MUL || ADD || MUL || RETURN",
                        "displayLines": "(Bomb_Damage * (1 + (Plus5_Layer * DV_FantasticStory_PlusAbility_0015_ADF_1)))",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "Bomb_Damage",
                          "Plus5_Layer",
                          "DV_FantasticStory_PlusAbility_0015_ADF_1"
                        ]
                      }
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
                        "DamageFlat": {
                          "operator": "Variables[0] (Plus5_Bomb_Damage) || RETURN",
                          "displayLines": "Plus5_Bomb_Damage",
                          "constants": [],
                          "variables": [
                            "Plus5_Bomb_Damage"
                          ]
                        },
                        "dmgFormulaFinal": "Converted DMG Base",
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "DOT"
                      }
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "DV_FantasticStory_PlusAbility_0017",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "ContextCaster"
                  },
                  "passed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder and Adjacent Targets}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Physical",
                        "DamageFlat": {
                          "operator": "Variables[0] (Bomb_Damage) || Constants[0] (1) || Variables[1] (DV_FantasticStory_PlusAbility_0017_ADF_1) || ADD || MUL || RETURN",
                          "displayLines": "(Bomb_Damage * (1 + DV_FantasticStory_PlusAbility_0017_ADF_1))",
                          "constants": [
                            1
                          ],
                          "variables": [
                            "Bomb_Damage",
                            "DV_FantasticStory_PlusAbility_0017_ADF_1"
                          ]
                        },
                        "dmgFormulaFinal": "Converted DMG Base",
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "DOT"
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Targets Adjacent to Modifier Holder}}"
                      },
                      "modifier": "Modifier_FantasticStory_BaseAbility_0010_sub2[<span class=\"descriptionNumberColor\">Shatter</span>]",
                      "stackLimit": {
                        "operator": "Variables[0] (Bomb_MaxLayer) || RETURN",
                        "displayLines": "Bomb_MaxLayer",
                        "constants": [],
                        "variables": [
                          "Bomb_MaxLayer"
                        ]
                      },
                      "valuePerStack": {
                        "Bomb_Damage": {
                          "operator": "Variables[0] (Bomb_Damage_Initial) || RETURN",
                          "displayLines": "Bomb_Damage_Initial",
                          "constants": [],
                          "variables": [
                            "Bomb_Damage_Initial"
                          ]
                        },
                        "Bomb_MaxLayer": {
                          "operator": "Variables[0] (Bomb_MaxLayer) || RETURN",
                          "displayLines": "Bomb_MaxLayer",
                          "constants": [],
                          "variables": [
                            "Bomb_MaxLayer"
                          ]
                        }
                      },
                      "addStacksPerTrigger": 1
                    }
                  ],
                  "failed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder and Adjacent Targets}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Physical",
                        "DamageFlat": {
                          "operator": "Variables[0] (Bomb_Damage) || RETURN",
                          "displayLines": "Bomb_Damage",
                          "constants": [],
                          "variables": [
                            "Bomb_Damage"
                          ]
                        },
                        "dmgFormulaFinal": "Converted DMG Base",
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "DOT"
                      }
                    }
                  ]
                }
              ]
            },
            "Modifier Deletes Itself"
          ]
        },
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
              "variableName": "Bomb_Layer",
              "multiplier": 1
            },
            {
              "name": "Define Custom Variable",
              "variableName": "Bomb_Damage_Initial",
              "value": {
                "operator": "Variables[0] (Bomb_Damage) || RETURN",
                "displayLines": "Bomb_Damage",
                "constants": [],
                "variables": [
                  "Bomb_Damage"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "Bomb_Damage",
              "value": {
                "operator": "Variables[0] (Bomb_Damage) || Variables[1] (Bomb_Layer) || MUL || RETURN",
                "displayLines": "(Bomb_Damage * Bomb_Layer)",
                "constants": [],
                "variables": [
                  "Bomb_Damage",
                  "Bomb_Layer"
                ]
              }
            },
            {
              "name": "Add Ability",
              "abilityName": "FantasticStory_BaseAbility_0010_Deathrattle_Camera"
            },
            {
              "name": "Add Ability",
              "abilityName": "Modifier_FantasticStory_BaseAbility_0010_Insert"
            }
          ]
        },
        {
          "eventTrigger": "Was Killed (Queued) [Owner]",
          "execute": [
            {
              "name": "Dispel Debuffs",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "silent": true
            },
            {
              "name": "Mark Entity For Immediate Death"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "DV_FantasticStory_PlusAbility_0013",
                "compareType": "=",
                "value2": 1,
                "contextScope": "ContextCaster"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "Modifier_FantasticStory_BaseAbility_0010_plus3_ultraDmgUp[<span class=\"descriptionNumberColor\">Rupture</span>]",
                  "stackLimit": {
                    "operator": "Variables[0] (DV_FantasticStory_PlusAbility_0013_ADF_2) || RETURN",
                    "displayLines": "DV_FantasticStory_PlusAbility_0013_ADF_2",
                    "constants": [],
                    "variables": [
                      "DV_FantasticStory_PlusAbility_0013_ADF_2"
                    ]
                  },
                  "valuePerStack": {
                    "DmgAddedRatio": {
                      "operator": "Variables[0] (DV_FantasticStory_PlusAbility_0013_ADF_1) || RETURN",
                      "displayLines": "DV_FantasticStory_PlusAbility_0013_ADF_1",
                      "constants": [],
                      "variables": [
                        "DV_FantasticStory_PlusAbility_0013_ADF_1"
                      ]
                    }
                  },
                  "addStacksPerTrigger": 1
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "DV_FantasticStory_PlusAbility_0015",
                "compareType": "=",
                "value2": 1,
                "contextScope": "ContextCaster"
              },
              "passed": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Modifier_FantasticStory_BaseAbility_0010_Insert",
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "priorityTag": "MonsterChangePhase",
                  "ownerState": "Mask_AliveOrLimbo",
                  "targetState": "Mask_AliveOrLimbo",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "valuePerStack": {
                    "Bomb_Damage_get": {
                      "operator": "Variables[0] (Bomb_Damage) || RETURN",
                      "displayLines": "Bomb_Damage",
                      "constants": [],
                      "variables": [
                        "Bomb_Damage"
                      ]
                    },
                    "DV_plus5_get": {
                      "operator": "Variables[0] (DV_FantasticStory_PlusAbility_0015) || RETURN",
                      "displayLines": "DV_FantasticStory_PlusAbility_0015",
                      "constants": [],
                      "variables": [
                        "DV_FantasticStory_PlusAbility_0015"
                      ]
                    },
                    "DV_plus5_ADF_1_get": {
                      "operator": "Variables[0] (DV_FantasticStory_PlusAbility_0015_ADF_1) || RETURN",
                      "displayLines": "DV_FantasticStory_PlusAbility_0015_ADF_1",
                      "constants": [],
                      "variables": [
                        "DV_FantasticStory_PlusAbility_0015_ADF_1"
                      ]
                    },
                    "DV_plus5_ADF_2_get": {
                      "operator": "Variables[0] (DV_FantasticStory_PlusAbility_0015_ADF_2) || RETURN",
                      "displayLines": "DV_FantasticStory_PlusAbility_0015_ADF_2",
                      "constants": [],
                      "variables": [
                        "DV_FantasticStory_PlusAbility_0015_ADF_2"
                      ]
                    }
                  },
                  "allowAbilityTriggers": false
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "DV_FantasticStory_PlusAbility_0017",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "ContextCaster"
                  },
                  "passed": [
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Modifier_FantasticStory_BaseAbility_0010_Insert",
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "priorityTag": "MonsterChangePhase",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "valuePerStack": {
                        "Bomb_Damage_get": {
                          "operator": "Variables[0] (Bomb_Damage) || RETURN",
                          "displayLines": "Bomb_Damage",
                          "constants": [],
                          "variables": [
                            "Bomb_Damage"
                          ]
                        },
                        "DV_plus7_get": {
                          "operator": "Variables[0] (DV_FantasticStory_PlusAbility_0017) || RETURN",
                          "displayLines": "DV_FantasticStory_PlusAbility_0017",
                          "constants": [],
                          "variables": [
                            "DV_FantasticStory_PlusAbility_0017"
                          ]
                        },
                        "DV_plus7_ADF_1_get": {
                          "operator": "Variables[0] (DV_FantasticStory_PlusAbility_0017_ADF_1) || RETURN",
                          "displayLines": "DV_FantasticStory_PlusAbility_0017_ADF_1",
                          "constants": [],
                          "variables": [
                            "DV_FantasticStory_PlusAbility_0017_ADF_1"
                          ]
                        }
                      },
                      "allowAbilityTriggers": false
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Targets Adjacent to Modifier Holder}}"
                      },
                      "modifier": "Modifier_FantasticStory_BaseAbility_0010_sub2[<span class=\"descriptionNumberColor\">Shatter</span>]",
                      "stackLimit": {
                        "operator": "Variables[0] (Bomb_MaxLayer) || RETURN",
                        "displayLines": "Bomb_MaxLayer",
                        "constants": [],
                        "variables": [
                          "Bomb_MaxLayer"
                        ]
                      },
                      "valuePerStack": {
                        "Bomb_Damage": {
                          "operator": "Variables[0] (Bomb_Damage_Initial) || RETURN",
                          "displayLines": "Bomb_Damage_Initial",
                          "constants": [],
                          "variables": [
                            "Bomb_Damage_Initial"
                          ]
                        }
                      },
                      "addStacksPerTrigger": 1
                    }
                  ],
                  "failed": [
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Modifier_FantasticStory_BaseAbility_0010_Insert",
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "priorityTag": "MonsterChangePhase",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "valuePerStack": {
                        "Bomb_Damage_get": {
                          "operator": "Variables[0] (Bomb_Damage) || RETURN",
                          "displayLines": "Bomb_Damage",
                          "constants": [],
                          "variables": [
                            "Bomb_Damage"
                          ]
                        }
                      },
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ]
            },
            "Modifier Deletes Itself"
          ]
        },
        {
          "eventTrigger": "Ability Use [Anyone]: Start",
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
              },
              "passed": [
                {
                  "name": "Toggle Skill Mark",
                  "toggle": true
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
      ],
      "description": "When this unit's turn starts or when this unit is defeated, this unit and adjacent targets take a set amount of DMG based on the active number of Shatter stacks.",
      "type": "Debuff",
      "effectName": "Shatter",
      "statusName": "Shatter"
    },
    {
      "name": "Modifier Construction",
      "for": "Modifier_FantasticStory_BaseAbility_0010_sub2_pre",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "Take Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "DV_FantasticStory_PlusAbility_0011",
                "compareType": "=",
                "value2": 1,
                "contextScope": "ContextCaster"
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
                    "value1": "DV_BeingHitCount",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Modifier_FantasticStory_BaseAbility_0010_sub2[<span class=\"descriptionNumberColor\">Shatter</span>]",
                      "stackLimit": {
                        "operator": "Variables[0] (ADF_2_get_pre) || RETURN",
                        "displayLines": "ADF_2_get_pre",
                        "constants": [],
                        "variables": [
                          "ADF_2_get_pre"
                        ]
                      },
                      "valuePerStack": {
                        "Bomb_Damage": {
                          "operator": "Variables[0] (TempHP_get_pre) || Variables[1] (ADF_1_get_pre) || MUL || RETURN",
                          "displayLines": "(TempHP_get_pre * ADF_1_get_pre)",
                          "constants": [],
                          "variables": [
                            "TempHP_get_pre",
                            "ADF_1_get_pre"
                          ]
                        },
                        "Bomb_MaxLayer": {
                          "operator": "Variables[0] (ADF_2_get_pre) || RETURN",
                          "displayLines": "ADF_2_get_pre",
                          "constants": [],
                          "variables": [
                            "ADF_2_get_pre"
                          ]
                        }
                      },
                      "addStacksPerTrigger": 2
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "DV_BeingHitCount",
                      "value": 0
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
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_PlusAbility_0014",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "ContextCaster"
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
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "DV_BeingHitCount",
                            "compareType": "=",
                            "value2": 1
                          },
                          {
                            "name": "Random Chance",
                            "chance": {
                              "operator": "Variables[0] (DV_FantasticStory_PlusAbility_0018) || RETURN",
                              "displayLines": "DV_FantasticStory_PlusAbility_0018",
                              "constants": [],
                              "variables": [
                                "DV_FantasticStory_PlusAbility_0018"
                              ]
                            }
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
                          "modifier": "Modifier_FantasticStory_BaseAbility_0010_sub2[<span class=\"descriptionNumberColor\">Shatter</span>]",
                          "stackLimit": {
                            "operator": "Variables[0] (ADF_2_get_pre) || RETURN",
                            "displayLines": "ADF_2_get_pre",
                            "constants": [],
                            "variables": [
                              "ADF_2_get_pre"
                            ]
                          },
                          "valuePerStack": {
                            "Bomb_Damage": {
                              "operator": "Variables[0] (TempHP_get_pre) || Variables[1] (ADF_1_get_pre) || MUL || RETURN",
                              "displayLines": "(TempHP_get_pre * ADF_1_get_pre)",
                              "constants": [],
                              "variables": [
                                "TempHP_get_pre",
                                "ADF_1_get_pre"
                              ]
                            },
                            "Bomb_MaxLayer": {
                              "operator": "Variables[0] (ADF_2_get_pre) || RETURN",
                              "displayLines": "ADF_2_get_pre",
                              "constants": [],
                              "variables": [
                                "ADF_2_get_pre"
                              ]
                            }
                          },
                          "addStacksPerTrigger": 1
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DV_BeingHitCount",
                          "value": 0
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_PlusAbility_0018",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "ContextCaster"
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
                            "value1": "DV_BeingHitCount",
                            "compareType": "=",
                            "value2": 1
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DV_BeingHitCount",
                              "value": 0
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Random Chance",
                                "chance": {
                                  "operator": "Variables[0] (DV_BeingHitCount) || RETURN",
                                  "displayLines": "DV_BeingHitCount",
                                  "constants": [],
                                  "variables": [
                                    "DV_BeingHitCount"
                                  ]
                                }
                              },
                              "passed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "Modifier_FantasticStory_BaseAbility_0010_sub2[<span class=\"descriptionNumberColor\">Shatter</span>]",
                                  "stackLimit": {
                                    "operator": "Variables[0] (ADF_2_get_pre) || RETURN",
                                    "displayLines": "ADF_2_get_pre",
                                    "constants": [],
                                    "variables": [
                                      "ADF_2_get_pre"
                                    ]
                                  },
                                  "valuePerStack": {
                                    "Bomb_Damage": {
                                      "operator": "Variables[0] (TempHP_get_pre) || Variables[1] (ADF_1_get_pre) || MUL || RETURN",
                                      "displayLines": "(TempHP_get_pre * ADF_1_get_pre)",
                                      "constants": [],
                                      "variables": [
                                        "TempHP_get_pre",
                                        "ADF_1_get_pre"
                                      ]
                                    },
                                    "Bomb_MaxLayer": {
                                      "operator": "Variables[0] (ADF_2_get_pre) || RETURN",
                                      "displayLines": "ADF_2_get_pre",
                                      "constants": [],
                                      "variables": [
                                        "ADF_2_get_pre"
                                      ]
                                    }
                                  },
                                  "addStacksPerTrigger": 1
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
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "DV_BeingHitCount",
                            "compareType": "=",
                            "value2": 1
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "Modifier_FantasticStory_BaseAbility_0010_sub2[<span class=\"descriptionNumberColor\">Shatter</span>]",
                              "stackLimit": {
                                "operator": "Variables[0] (ADF_2_get_pre) || RETURN",
                                "displayLines": "ADF_2_get_pre",
                                "constants": [],
                                "variables": [
                                  "ADF_2_get_pre"
                                ]
                              },
                              "valuePerStack": {
                                "Bomb_Damage": {
                                  "operator": "Variables[0] (TempHP_get_pre) || Variables[1] (ADF_1_get_pre) || MUL || RETURN",
                                  "displayLines": "(TempHP_get_pre * ADF_1_get_pre)",
                                  "constants": [],
                                  "variables": [
                                    "TempHP_get_pre",
                                    "ADF_1_get_pre"
                                  ]
                                },
                                "Bomb_MaxLayer": {
                                  "operator": "Variables[0] (ADF_2_get_pre) || RETURN",
                                  "displayLines": "ADF_2_get_pre",
                                  "constants": [],
                                  "variables": [
                                    "ADF_2_get_pre"
                                  ]
                                }
                              },
                              "addStacksPerTrigger": 1
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DV_BeingHitCount",
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
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Modifier_FantasticStory_BaseAbility_0010_sub",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Attack Start [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Type",
                "skillType": "Ultimate"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "Modifier_FantasticStory_BaseAbility_0010_sub2_pre",
                  "valuePerStack": {
                    "TempHP_get_pre": {
                      "operator": "Variables[0] (TempHP_get) || RETURN",
                      "displayLines": "TempHP_get",
                      "constants": [],
                      "variables": [
                        "TempHP_get"
                      ]
                    },
                    "ADF_1_get_pre": {
                      "operator": "Variables[0] (ADF_1_get) || RETURN",
                      "displayLines": "ADF_1_get",
                      "constants": [],
                      "variables": [
                        "ADF_1_get"
                      ]
                    },
                    "ADF_2_get_pre": {
                      "operator": "Variables[0] (ADF_2_get) || RETURN",
                      "displayLines": "ADF_2_get",
                      "constants": [],
                      "variables": [
                        "ADF_2_get"
                      ]
                    }
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
                    "value1": "DV_FantasticStory_PlusAbility_0014",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "ContextCaster"
                  },
                  {
                    "name": "Skill Type",
                    "skillType": "Skill"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "Modifier_FantasticStory_BaseAbility_0010_sub2_pre",
                  "valuePerStack": {
                    "TempHP_get_pre": {
                      "operator": "Variables[0] (TempHP_get) || RETURN",
                      "displayLines": "TempHP_get",
                      "constants": [],
                      "variables": [
                        "TempHP_get"
                      ]
                    },
                    "ADF_1_get_pre": {
                      "operator": "Variables[0] (ADF_1_get) || RETURN",
                      "displayLines": "ADF_1_get",
                      "constants": [],
                      "variables": [
                        "ADF_1_get"
                      ]
                    },
                    "ADF_2_get_pre": {
                      "operator": "Variables[0] (ADF_2_get) || RETURN",
                      "displayLines": "ADF_2_get",
                      "constants": [],
                      "variables": [
                        "ADF_2_get"
                      ]
                    }
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
                    "value1": "DV_FantasticStory_PlusAbility_0018",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "ContextCaster"
                  },
                  {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Follow-up"
                    ]
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "Modifier_FantasticStory_BaseAbility_0010_sub2_pre",
                  "valuePerStack": {
                    "TempHP_get_pre": {
                      "operator": "Variables[0] (TempHP_get) || RETURN",
                      "displayLines": "TempHP_get",
                      "constants": [],
                      "variables": [
                        "TempHP_get"
                      ]
                    },
                    "ADF_1_get_pre": {
                      "operator": "Variables[0] (ADF_1_get) || RETURN",
                      "displayLines": "ADF_1_get",
                      "constants": [],
                      "variables": [
                        "ADF_1_get"
                      ]
                    },
                    "ADF_2_get_pre": {
                      "operator": "Variables[0] (ADF_2_get) || RETURN",
                      "displayLines": "ADF_2_get",
                      "constants": [],
                      "variables": [
                        "ADF_2_get"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Attack Action Completed [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Enemy Team All}}"
                },
                "modifier": "Modifier_FantasticStory_BaseAbility_0010_sub2_pre"
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "Modifier_FantasticStory_BaseAbility_0010_sub2_pre"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Modifier_FantasticStory_BaseAbility_0010",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "modifier": "Modifier_FantasticStory_BaseAbility_0010_sub",
              "valuePerStack": {
                "TempHP_get": {
                  "operator": "Variables[0] (TempHP) || RETURN",
                  "displayLines": "TempHP",
                  "constants": [],
                  "variables": [
                    "TempHP"
                  ]
                },
                "ADF_1_get": {
                  "operator": "Variables[0] (ADF_1) || RETURN",
                  "displayLines": "ADF_1",
                  "constants": [],
                  "variables": [
                    "ADF_1"
                  ]
                },
                "ADF_2_get": {
                  "operator": "Variables[0] (ADF_2) || RETURN",
                  "displayLines": "ADF_2",
                  "constants": [],
                  "variables": [
                    "ADF_2"
                  ]
                }
              }
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
                  "modifier": "Modifier_FantasticStory_BaseAbility_0010_sub",
                  "valuePerStack": {
                    "TempHP_get": {
                      "operator": "Variables[0] (TempHP) || RETURN",
                      "displayLines": "TempHP",
                      "constants": [],
                      "variables": [
                        "TempHP"
                      ]
                    },
                    "ADF_1_get": {
                      "operator": "Variables[0] (ADF_1) || RETURN",
                      "displayLines": "ADF_1",
                      "constants": [],
                      "variables": [
                        "ADF_1"
                      ]
                    },
                    "ADF_2_get": {
                      "operator": "Variables[0] (ADF_2) || RETURN",
                      "displayLines": "ADF_2",
                      "constants": [],
                      "variables": [
                        "ADF_2"
                      ]
                    }
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "DV_FantasticStory_PlusAbility_0016",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "ContextCaster"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Modifier_FantasticStory_BaseAbility_0010_plus6_sub"
                    }
                  ]
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
                    "value1": "DV_FantasticStory_PlusAbility_0012",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "ContextCaster"
                  },
                  {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Enemy Team"
                  },
                  {
                    "name": "Random Chance",
                    "chance": {
                      "operator": "Variables[0] (DV_FantasticStory_PlusAbility_0011) || RETURN",
                      "displayLines": "DV_FantasticStory_PlusAbility_0011",
                      "constants": [],
                      "variables": [
                        "DV_FantasticStory_PlusAbility_0011"
                      ]
                    }
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Modifier_FantasticStory_BaseAbility_0010_sub2[<span class=\"descriptionNumberColor\">Shatter</span>]",
                  "stackLimit": {
                    "operator": "Variables[0] (ADF_2) || RETURN",
                    "displayLines": "ADF_2",
                    "constants": [],
                    "variables": [
                      "ADF_2"
                    ]
                  },
                  "valuePerStack": {
                    "Bomb_Damage": {
                      "operator": "Variables[0] (TempHP) || Variables[1] (ADF_1) || MUL || RETURN",
                      "displayLines": "(TempHP * ADF_1)",
                      "constants": [],
                      "variables": [
                        "TempHP",
                        "ADF_1"
                      ]
                    },
                    "Bomb_MaxLayer": {
                      "operator": "Variables[0] (ADF_2) || RETURN",
                      "displayLines": "ADF_2",
                      "constants": [],
                      "variables": [
                        "ADF_2"
                      ]
                    }
                  },
                  "addStacksPerTrigger": 1
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
                    "value1": "DV_FantasticStory_PlusAbility_0015",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "ContextCaster"
                  },
                  {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Enemy Team"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "Modifier_FantasticStory_BaseAbility_0010_plus5_sub"
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
                    "name": "Compare: Variable",
                    "value1": "DV_FantasticStory_PlusAbility_0012",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "ContextCaster"
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
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 5,
                  "ifTargetFound": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Random Chance",
                        "chance": {
                          "operator": "Variables[0] (DV_FantasticStory_PlusAbility_0011) || RETURN",
                          "displayLines": "DV_FantasticStory_PlusAbility_0011",
                          "constants": [],
                          "variables": [
                            "DV_FantasticStory_PlusAbility_0011"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "Modifier_FantasticStory_BaseAbility_0010_sub2[<span class=\"descriptionNumberColor\">Shatter</span>]",
                          "stackLimit": {
                            "operator": "Variables[0] (ADF_2) || RETURN",
                            "displayLines": "ADF_2",
                            "constants": [],
                            "variables": [
                              "ADF_2"
                            ]
                          },
                          "valuePerStack": {
                            "Bomb_Damage": {
                              "operator": "Variables[0] (TempHP) || Variables[1] (ADF_1) || MUL || RETURN",
                              "displayLines": "(TempHP * ADF_1)",
                              "constants": [],
                              "variables": [
                                "TempHP",
                                "ADF_1"
                              ]
                            },
                            "Bomb_MaxLayer": {
                              "operator": "Variables[0] (ADF_2) || RETURN",
                              "displayLines": "ADF_2",
                              "constants": [],
                              "variables": [
                                "ADF_2"
                              ]
                            }
                          },
                          "addStacksPerTrigger": 1
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
                "name": "Compare: Variable",
                "value1": "DV_FantasticStory_PlusAbility_0015",
                "compareType": "=",
                "value2": 1,
                "contextScope": "ContextCaster"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "Modifier_FantasticStory_BaseAbility_0010_plus5_sub"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "DV_FantasticStory_PlusAbility_0016",
                "compareType": "=",
                "value2": 1,
                "contextScope": "ContextCaster"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                  },
                  "modifier": "Modifier_FantasticStory_BaseAbility_0010_plus6_sub"
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "ADF_1",
        "ADF_2",
        "TempHP"
      ],
      "latentQueue": [
        "DV_FantasticStory_PlusAbility_0011",
        "DV_FantasticStory_PlusAbility_0012",
        "DV_FantasticStory_PlusAbility_0013",
        "DV_FantasticStory_PlusAbility_0014",
        "DV_FantasticStory_PlusAbility_0016",
        "DV_FantasticStory_PlusAbility_0018"
      ]
    }
  ]
}