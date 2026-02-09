const configAbility = {
  "fileName": "1490374940_BattleEventAbility_Challenge_Month_22",
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
      "variableName": "DV_BattleEventAbility_Challenge_Month_22_plus1"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "ContextCaster",
      "variableName": "DV_BattleEventAbility_Challenge_Month_22_plus2"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "ContextCaster",
      "variableName": "DV_BattleEventAbility_Challenge_Month_22_plus3"
    },
    {
      "name": "Add Ability",
      "abilityName": "BattleEventAbility_Challenge_Month_22_plus1"
    },
    {
      "name": "Add Ability",
      "abilityName": "BattleEventAbility_Challenge_Month_22_plus2"
    },
    {
      "name": "Add Ability",
      "abilityName": "BattleEventAbility_Challenge_Month_22_plus3"
    },
    {
      "name": "Define Custom Variable with Stat",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "BattleEvent_BaseHP",
      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPBase</span>&nbsp;"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "DV_BattleEventAbility_Challenge_Month_22_plus1",
        "compareType": "=",
        "value2": 1,
        "contextScope": "ContextCaster"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"985754575\">Modifier_BattleEventAbility_Challenge_Month_22</a>",
          "valuePerStack": {
            "BattleEvent_P1_ADF": {
              "operator": "Variables[0] (#BattleEvent_P1_ADF) || RETURN",
              "displayLines": "#BattleEvent_P1_ADF",
              "constants": [],
              "variables": [
                "#BattleEvent_P1_ADF"
              ]
            },
            "BattleEvent_P2_ADF": {
              "operator": "Variables[0] (#BattleEvent_P2_ADF) || Constants[0] (2) || MUL || RETURN",
              "displayLines": "(#BattleEvent_P2_ADF * 2)",
              "constants": [
                2
              ],
              "variables": [
                "#BattleEvent_P2_ADF"
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
      "failed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"985754575\">Modifier_BattleEventAbility_Challenge_Month_22</a>",
          "valuePerStack": {
            "BattleEvent_P1_ADF": {
              "operator": "Variables[0] (#BattleEvent_P1_ADF) || RETURN",
              "displayLines": "#BattleEvent_P1_ADF",
              "constants": [],
              "variables": [
                "#BattleEvent_P1_ADF"
              ]
            },
            "BattleEvent_P2_ADF": {
              "operator": "Variables[0] (#BattleEvent_P2_ADF) || RETURN",
              "displayLines": "#BattleEvent_P2_ADF",
              "constants": [],
              "variables": [
                "#BattleEvent_P2_ADF"
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
      ]
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1522391139\">Modifier_BattleEventAbility_Challenge_Month_22_plus3_ultraDmgUp</a>",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Hit",
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
                      "value": "DV_BattleEventAbility_Challenge_Month_22_plus3_layerDmg"
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
              "variableName": "DV_BattleEventAbility_Challenge_Month_22_plus3_layerDmg",
              "multiplier": 1
            },
            {
              "name": "Define Custom Variable",
              "variableName": "DV_BattleEventAbility_Challenge_Month_22_plus3_layerDmg",
              "value": {
                "operator": "Variables[0] (DV_BattleEventAbility_Challenge_Month_22_plus3_layerDmg) || Constants[0] (0.1) || MUL || RETURN",
                "displayLines": "(DV_BattleEventAbility_Challenge_Month_22_plus3_layerDmg * 0.1)",
                "constants": [
                  0.1
                ],
                "variables": [
                  "DV_BattleEventAbility_Challenge_Month_22_plus3_layerDmg"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-180423488\">Modifier_BattleEventAbility_Challenge_Month_22_sub2</a>",
      "stackType": "Replace",
      "modifierFlags": [
        "Deathrattle"
      ],
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
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
                "attackType": "Additional DMG"
              }
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": 0,
              "entityClass": "Enemy",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "maximum": {
                "operator": "Variables[0] (Bomb_MaxLayer) || RETURN",
                "displayLines": "Bomb_MaxLayer",
                "constants": [],
                "variables": [
                  "Bomb_MaxLayer"
                ]
              },
              "assignState": "False"
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
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (Bomb_Layer) || RETURN",
                "displayLines": "Bomb_Layer",
                "constants": [],
                "variables": [
                  "Bomb_Layer"
                ]
              },
              "entityClass": "Enemy",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "maximum": {
                "operator": "Variables[0] (Bomb_MaxLayer) || RETURN",
                "displayLines": "Bomb_MaxLayer",
                "constants": [],
                "variables": [
                  "Bomb_MaxLayer"
                ]
              },
              "assignState": "True"
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
              "abilityName": "BattleEventAbility_Challenge_Deathrattle_Camera"
            },
            {
              "name": "Add Ability",
              "abilityName": "Modifier_BattleEventAbility_Challenge_Month_22_Insert"
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
                "value1": "DV_BattleEventAbility_Challenge_Month_22_plus3",
                "compareType": "=",
                "value2": 1,
                "contextScope": "ContextCaster"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "Bomb_Damage",
                  "value": {
                    "operator": "Variables[0] (Bomb_Damage) || Constants[0] (1.5) || MUL || RETURN",
                    "displayLines": "(Bomb_Damage * 1.5)",
                    "constants": [
                      1.5
                    ],
                    "variables": [
                      "Bomb_Damage"
                    ]
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1522391139\">Modifier_BattleEventAbility_Challenge_Month_22_plus3_ultraDmgUp</a>",
                  "stackLimit": 20,
                  "addStacksPerTrigger": 1
                }
              ]
            },
            {
              "name": "Inject Ability Use",
              "abilityName": "Modifier_BattleEventAbility_Challenge_Month_22_Insert",
              "abilityTarget": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "priorityTag": "MonsterDeathRattle",
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
                "DV_plus3_get": {
                  "operator": "Variables[0] (DV_BattleEventAbility_Challenge_Month_22_plus3) || RETURN",
                  "displayLines": "DV_BattleEventAbility_Challenge_Month_22_plus3",
                  "constants": [],
                  "variables": [
                    "DV_BattleEventAbility_Challenge_Month_22_plus3"
                  ]
                }
              },
              "allowAbilityTriggers": false
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": 0,
              "entityClass": "Enemy",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "maximum": {
                "operator": "Variables[0] (Bomb_MaxLayer) || RETURN",
                "displayLines": "Bomb_MaxLayer",
                "constants": [],
                "variables": [
                  "Bomb_MaxLayer"
                ]
              },
              "assignState": "False"
            },
            "Modifier Deletes Itself"
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__2023621930\">Modifier_BattleEventAbility_Challenge_Month_22_plus2_recoverSP</a>",
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "UI Display Event (On Entity)",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              }
            },
            {
              "name": "Update Energy",
              "on": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "value": 60,
              "isFixed": "(Fixed)"
            },
            "Modifier Deletes Itself"
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__455159922\">Modifier_BattleEventAbility_Challenge_Month_22_sub</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Type",
                "skillType": "Ultimate"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "DV_BattleEventAbility_Challenge_Month_22_plus1",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "ContextCaster"
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Attack Targets of Modifier Holder}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 5,
                      "ifTargetFound": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-180423488\">Modifier_BattleEventAbility_Challenge_Month_22_sub2</a>"
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable with Modifier Values",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "valueType": "Layer",
                              "variableName": "TempLayer_get",
                              "modifierName": "<a class=\"gModGreen\" id=\"-180423488\">Modifier_BattleEventAbility_Challenge_Month_22_sub2</a>",
                              "multiplier": 1
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-180423488\">Modifier_BattleEventAbility_Challenge_Month_22_sub2</a>",
                              "addStacksPerTrigger": {
                                "operator": "Variables[0] (TempLayer_get) || RETURN",
                                "displayLines": "TempLayer_get",
                                "constants": [],
                                "variables": [
                                  "TempLayer_get"
                                ]
                              }
                            }
                          ],
                          "failed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-180423488\">Modifier_BattleEventAbility_Challenge_Month_22_sub2</a>",
                              "stackLimit": {
                                "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__51) || RETURN",
                                "displayLines": "ENEMIES_OBJECT_UNUSED__51",
                                "constants": [],
                                "variables": [
                                  "ENEMIES_OBJECT_UNUSED__51"
                                ]
                              },
                              "valuePerStack": {
                                "Bomb_Damage": {
                                  "operator": "Variables[0] (TempHP_get) || Variables[1] (ENEMIES_OBJECT_UNUSED__49) || MUL || RETURN",
                                  "displayLines": "(TempHP_get * ENEMIES_OBJECT_UNUSED__49)",
                                  "constants": [],
                                  "variables": [
                                    "TempHP_get",
                                    "ENEMIES_OBJECT_UNUSED__49"
                                  ]
                                },
                                "Bomb_MaxLayer": {
                                  "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__51) || RETURN",
                                  "displayLines": "ENEMIES_OBJECT_UNUSED__51",
                                  "constants": [],
                                  "variables": [
                                    "ENEMIES_OBJECT_UNUSED__51"
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
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Attack Targets of Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-180423488\">Modifier_BattleEventAbility_Challenge_Month_22_sub2</a>",
                      "stackLimit": {
                        "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__51) || RETURN",
                        "displayLines": "ENEMIES_OBJECT_UNUSED__51",
                        "constants": [],
                        "variables": [
                          "ENEMIES_OBJECT_UNUSED__51"
                        ]
                      },
                      "valuePerStack": {
                        "Bomb_Damage": {
                          "operator": "Variables[0] (TempHP_get) || Variables[1] (ENEMIES_OBJECT_UNUSED__49) || MUL || RETURN",
                          "displayLines": "(TempHP_get * ENEMIES_OBJECT_UNUSED__49)",
                          "constants": [],
                          "variables": [
                            "TempHP_get",
                            "ENEMIES_OBJECT_UNUSED__49"
                          ]
                        },
                        "Bomb_MaxLayer": {
                          "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__51) || RETURN",
                          "displayLines": "ENEMIES_OBJECT_UNUSED__51",
                          "constants": [],
                          "variables": [
                            "ENEMIES_OBJECT_UNUSED__51"
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
                    "value1": "DV_BattleEventAbility_Challenge_Month_22_plus2",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "ContextCaster"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"2023621930\">Modifier_BattleEventAbility_Challenge_Month_22_plus2_recoverSP</a>"
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
      "for": "<a class=\"gModGreen\" id=\"mod__985754575\">Modifier_BattleEventAbility_Challenge_Month_22</a>",
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
              "modifier": "<a class=\"gModGreen\" id=\"455159922\">Modifier_BattleEventAbility_Challenge_Month_22_sub</a>",
              "valuePerStack": {
                "TempHP_get": {
                  "operator": "Variables[0] (TempHP) || RETURN",
                  "displayLines": "TempHP",
                  "constants": [],
                  "variables": [
                    "TempHP"
                  ]
                },
                "BattleEvent_P1_ADF_get": {
                  "operator": "Variables[0] (BattleEvent_P1_ADF) || RETURN",
                  "displayLines": "BattleEvent_P1_ADF",
                  "constants": [],
                  "variables": [
                    "BattleEvent_P1_ADF"
                  ]
                },
                "BattleEvent_P2_ADF_get": {
                  "operator": "Variables[0] (BattleEvent_P2_ADF) || RETURN",
                  "displayLines": "BattleEvent_P2_ADF",
                  "constants": [],
                  "variables": [
                    "BattleEvent_P2_ADF"
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
                  "modifier": "<a class=\"gModGreen\" id=\"455159922\">Modifier_BattleEventAbility_Challenge_Month_22_sub</a>",
                  "valuePerStack": {
                    "TempHP_get": {
                      "operator": "Variables[0] (TempHP) || RETURN",
                      "displayLines": "TempHP",
                      "constants": [],
                      "variables": [
                        "TempHP"
                      ]
                    },
                    "BattleEvent_P1_ADF_get": {
                      "operator": "Variables[0] (BattleEvent_P1_ADF) || RETURN",
                      "displayLines": "BattleEvent_P1_ADF",
                      "constants": [],
                      "variables": [
                        "BattleEvent_P1_ADF"
                      ]
                    },
                    "BattleEvent_P2_ADF_get": {
                      "operator": "Variables[0] (BattleEvent_P2_ADF) || RETURN",
                      "displayLines": "BattleEvent_P2_ADF",
                      "constants": [],
                      "variables": [
                        "BattleEvent_P2_ADF"
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
        "BattleEvent_P1_ADF",
        "BattleEvent_P2_ADF",
        "TempHP"
      ],
      "latentQueue": [
        "DV_BattleEventAbility_Challenge_Month_22_plus1",
        "DV_BattleEventAbility_Challenge_Month_22_plus2"
      ]
    }
  ]
}