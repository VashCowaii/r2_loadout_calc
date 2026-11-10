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
      "variableName": "DV_BattleEventAbility_Challenge_Month_22_plus1",
      "scope": "ContextCaster"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "DV_BattleEventAbility_Challenge_Month_22_plus2",
      "scope": "ContextCaster"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "DV_BattleEventAbility_Challenge_Month_22_plus3",
      "scope": "ContextCaster"
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
      "variableName": "BattleEvent_BaseHP",
      "readTarget": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
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
              "displayLines": "#BattleEvent_P1_ADF"
            },
            "BattleEvent_P2_ADF": {
              "displayLines": "(#BattleEvent_P2_ADF * 2)"
            },
            "TempHP": {
              "displayLines": "BattleEvent_BaseHP"
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
              "displayLines": "#BattleEvent_P1_ADF"
            },
            "BattleEvent_P2_ADF": {
              "displayLines": "#BattleEvent_P2_ADF"
            },
            "TempHP": {
              "displayLines": "BattleEvent_BaseHP"
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
              "value": {
                "displayLines": "(DV_BattleEventAbility_Challenge_Month_22_plus3_layerDmg * 0.1)"
              },
              "variableName": "DV_BattleEventAbility_Challenge_Month_22_plus3_layerDmg"
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
          "eventTrigger": "Turn [Owner]: Pre-action Phase",
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
                  "displayLines": "Bomb_Damage"
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
                "displayLines": "Bomb_MaxLayer"
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
                "displayLines": "Bomb_Layer"
              },
              "entityClass": "Enemy",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "maximum": {
                "displayLines": "Bomb_MaxLayer"
              },
              "assignState": "True"
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(Bomb_Damage * Bomb_Layer)"
              },
              "variableName": "Bomb_Damage"
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
                  "value": {
                    "displayLines": "(Bomb_Damage * 1.5)"
                  },
                  "variableName": "Bomb_Damage"
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
              "priorityTag": "EnemyDeathEffect",
              "ownerState": "Mask_AliveOrLimbo",
              "targetState": "Mask_AliveOrLimbo",
              "canHitNonTargets": true,
              "showInActionOrder": true,
              "valuePerStack": {
                "Bomb_Damage_get": {
                  "displayLines": "Bomb_Damage"
                },
                "DV_plus3_get": {
                  "displayLines": "DV_BattleEventAbility_Challenge_Month_22_plus3"
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
                "displayLines": "Bomb_MaxLayer"
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
          "eventTrigger": "Turn [Owner]: Pre-action Phase",
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
                                "displayLines": "TempLayer_get"
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
                                "displayLines": "ENEMIES_OBJECT_UNUSED__51"
                              },
                              "valuePerStack": {
                                "Bomb_Damage": {
                                  "displayLines": "(TempHP_get * ENEMIES_OBJECT_UNUSED__49)"
                                },
                                "Bomb_MaxLayer": {
                                  "displayLines": "ENEMIES_OBJECT_UNUSED__51"
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
                        "displayLines": "ENEMIES_OBJECT_UNUSED__51"
                      },
                      "valuePerStack": {
                        "Bomb_Damage": {
                          "displayLines": "(TempHP_get * ENEMIES_OBJECT_UNUSED__49)"
                        },
                        "Bomb_MaxLayer": {
                          "displayLines": "ENEMIES_OBJECT_UNUSED__51"
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
      "stackData": [
        "BattleEvent_P1_ADF",
        "BattleEvent_P2_ADF",
        "TempHP"
      ],
      "latentQueue": [
        "DV_BattleEventAbility_Challenge_Month_22_plus1",
        "DV_BattleEventAbility_Challenge_Month_22_plus2"
      ],
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
                  "displayLines": "TempHP"
                },
                "BattleEvent_P1_ADF_get": {
                  "displayLines": "BattleEvent_P1_ADF"
                },
                "BattleEvent_P2_ADF_get": {
                  "displayLines": "BattleEvent_P2_ADF"
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
                      "displayLines": "TempHP"
                    },
                    "BattleEvent_P1_ADF_get": {
                      "displayLines": "BattleEvent_P1_ADF"
                    },
                    "BattleEvent_P2_ADF_get": {
                      "displayLines": "BattleEvent_P2_ADF"
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
}