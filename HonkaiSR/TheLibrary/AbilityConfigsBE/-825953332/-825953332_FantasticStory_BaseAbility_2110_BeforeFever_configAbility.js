const configAbility = {
  "fileName": "-825953332_FantasticStory_BaseAbility_2110_BeforeFever",
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
      "variableName": "DV_FantasticStory_BaseAbility_2110_BeforeFever_P1_MaxLayer",
      "value": {
        "operator": "Variables[0] (ADF_1_Get) || RETURN",
        "displayLines": "ADF_1_Get",
        "constants": [],
        "variables": [
          "ADF_1_Get"
        ]
      }
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "ContextCaster",
      "variableName": "DV_FantasticStory_BaseAbility_2110_BeforeFever_P2_Ratio",
      "value": {
        "operator": "Variables[0] (ADF_2_Get) || RETURN",
        "displayLines": "ADF_2_Get",
        "constants": [],
        "variables": [
          "ADF_2_Get"
        ]
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1473014214\">Modifier_FantasticStory_BaseAbility_2110_BeforeFever</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-2132571309\">Modifier_FantasticStory_BaseAbility_2110_BeforeFever_sub2</a>[<span class=\"descriptionNumberColor\">Shatter</span>]",
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
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1923363748\">Modifier_FantasticStory_BaseAbility_2110_aura</a>"
              },
              "passed": [
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
                      "operator": "Variables[0] (Bomb_Damage) || RETURN",
                      "displayLines": "Bomb_Damage",
                      "constants": [],
                      "variables": [
                        "Bomb_Damage"
                      ]
                    },
                    "dmgFormulaFinal": "Converted DMG Base",
                    "Toughness": null,
                    "Tags": [
                      "Bomb DMG"
                    ],
                    "attackType": "True DMG"
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "Bomb_Damage_Adjoin",
                  "value": {
                    "operator": "Variables[0] (BattleEvent_BaseHP) || Variables[1] (DV_FantasticStory_BaseAbility_2110_EnterFever_P3_Ratio) || MUL || Variables[2] (Bomb_Layer) || MUL || RETURN",
                    "displayLines": "((BattleEvent_BaseHP * DV_FantasticStory_BaseAbility_2110_EnterFever_P3_Ratio) * Bomb_Layer)",
                    "constants": [],
                    "variables": [
                      "BattleEvent_BaseHP",
                      "DV_FantasticStory_BaseAbility_2110_EnterFever_P3_Ratio",
                      "Bomb_Layer"
                    ]
                  }
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Targets Adjacent to Modifier Holder}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Physical",
                    "DamageFlat": {
                      "operator": "Variables[0] (Bomb_Damage_Adjoin) || RETURN",
                      "displayLines": "Bomb_Damage_Adjoin",
                      "constants": [],
                      "variables": [
                        "Bomb_Damage_Adjoin"
                      ]
                    },
                    "dmgFormulaFinal": "Converted DMG Base",
                    "Toughness": null,
                    "Tags": [
                      "Bomb DMG"
                    ],
                    "attackType": "True DMG"
                  }
                }
              ],
              "failed": [
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
                      "operator": "Variables[0] (Bomb_Damage) || RETURN",
                      "displayLines": "Bomb_Damage",
                      "constants": [],
                      "variables": [
                        "Bomb_Damage"
                      ]
                    },
                    "dmgFormulaFinal": "Converted DMG Base",
                    "Toughness": null,
                    "Tags": [
                      "Bomb DMG"
                    ],
                    "attackType": "True DMG"
                  }
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
              "variableName": "Bomb_Damage",
              "value": {
                "operator": "Variables[0] (BattleEvent_BaseHP) || Variables[1] (DV_FantasticStory_BaseAbility_2110_BeforeFever_P2_Ratio) || MUL || Variables[2] (Bomb_Layer) || MUL || RETURN",
                "displayLines": "((BattleEvent_BaseHP * DV_FantasticStory_BaseAbility_2110_BeforeFever_P2_Ratio) * Bomb_Layer)",
                "constants": [],
                "variables": [
                  "BattleEvent_BaseHP",
                  "DV_FantasticStory_BaseAbility_2110_BeforeFever_P2_Ratio",
                  "Bomb_Layer"
                ]
              }
            },
            {
              "name": "Add Ability",
              "abilityName": "FantasticStory_BaseAbility_2110_Insert_Camera_Enemy"
            },
            {
              "name": "Add Ability",
              "abilityName": "FantasticStory_BaseAbility_2110_Insert_Enemy"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1923363748\">Modifier_FantasticStory_BaseAbility_2110_aura</a>"
              },
              "passed": [
                {
                  "name": "Update Modifier Description"
                }
              ]
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
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1923363748\">Modifier_FantasticStory_BaseAbility_2110_aura</a>"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "Bomb_Damage_Adjoin",
                  "value": {
                    "operator": "Variables[0] (BattleEvent_BaseHP) || Variables[1] (DV_FantasticStory_BaseAbility_2110_EnterFever_P3_Ratio) || MUL || Variables[2] (Bomb_Layer) || MUL || RETURN",
                    "displayLines": "((BattleEvent_BaseHP * DV_FantasticStory_BaseAbility_2110_EnterFever_P3_Ratio) * Bomb_Layer)",
                    "constants": [],
                    "variables": [
                      "BattleEvent_BaseHP",
                      "DV_FantasticStory_BaseAbility_2110_EnterFever_P3_Ratio",
                      "Bomb_Layer"
                    ]
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
                    "modifier": "<a class=\"gModGreen\" id=\"-1595223290\">Modifier_FantasticStory_BaseAbility_2110_plus2_sub</a>"
                  },
                  "passed": [
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "FantasticStory_BaseAbility_2110_Insert_Enemy",
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
                        "Bomb_Damage_Adjoin_get": {
                          "operator": "Variables[0] (Bomb_Damage_Adjoin) || RETURN",
                          "displayLines": "Bomb_Damage_Adjoin",
                          "constants": [],
                          "variables": [
                            "Bomb_Damage_Adjoin"
                          ]
                        },
                        "Plus2_DamgeStance": {
                          "operator": "Variables[0] (DV_FantasticStory_PlusAbility_2112_ADF_1) || RETURN",
                          "displayLines": "DV_FantasticStory_PlusAbility_2112_ADF_1",
                          "constants": [],
                          "variables": [
                            "DV_FantasticStory_PlusAbility_2112_ADF_1"
                          ]
                        }
                      },
                      "allowAbilityTriggers": false
                    }
                  ],
                  "failed": [
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "FantasticStory_BaseAbility_2110_Insert_Enemy",
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
                        "Bomb_Damage_Adjoin_get": {
                          "operator": "Variables[0] (Bomb_Damage_Adjoin) || RETURN",
                          "displayLines": "Bomb_Damage_Adjoin",
                          "constants": [],
                          "variables": [
                            "Bomb_Damage_Adjoin"
                          ]
                        }
                      },
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "FantasticStory_BaseAbility_2110_Insert_Enemy",
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
          "eventTrigger": "When Modifier is Added [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "<a class=\"gModGreen\" id=\"1923363748\">Modifier_FantasticStory_BaseAbility_2110_aura</a>"
              },
              "passed": [
                {
                  "name": "Update Modifier Description"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Losing Modifier [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "<a class=\"gModGreen\" id=\"1923363748\">Modifier_FantasticStory_BaseAbility_2110_aura</a>"
              },
              "passed": [
                {
                  "name": "Update Modifier Description"
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
      "description": "When this unit's turn starts or when defeated by any unit, this unit takes a set amount of DMG based on the number of \"Shatter\" stacks.",
      "type": "Debuff",
      "statusName": "Shatter"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1873057933\">Modifier_FantasticStory_BaseAbility_2110_BeforeFever_sub</a>",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "Take Damage End [Owner]: Hit",
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
                    "value1": "DV_BeingHitCount",
                    "compareType": "=",
                    "value2": 1
                  },
                  {
                    "name": "Has Damage Tags",
                    "damageTag": [
                      "Bomb DMG"
                    ],
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
                  "modifier": "<a class=\"gModGreen\" id=\"-2132571309\">Modifier_FantasticStory_BaseAbility_2110_BeforeFever_sub2</a>[<span class=\"descriptionNumberColor\">Shatter</span>]",
                  "stackLimit": {
                    "operator": "Variables[0] (DV_FantasticStory_BaseAbility_2110_BeforeFever_P1_MaxLayer) || RETURN",
                    "displayLines": "DV_FantasticStory_BaseAbility_2110_BeforeFever_P1_MaxLayer",
                    "constants": [],
                    "variables": [
                      "DV_FantasticStory_BaseAbility_2110_BeforeFever_P1_MaxLayer"
                    ]
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
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1473014214\">Modifier_FantasticStory_BaseAbility_2110_BeforeFever</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Attack Start [Anyone]",
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
                      "target": "{{Player Team All}}"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "mustBeAlive2": true
                  },
                  {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Skill Type",
                        "skillType": "Basic ATK"
                      },
                      {
                        "name": "Skill Type",
                        "skillType": "Ultimate"
                      }
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1873057933\">Modifier_FantasticStory_BaseAbility_2110_BeforeFever_sub</a>"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Attack Action Completed [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Enemy Team All}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1873057933\">Modifier_FantasticStory_BaseAbility_2110_BeforeFever_sub</a>"
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1873057933\">Modifier_FantasticStory_BaseAbility_2110_BeforeFever_sub</a>"
                }
              ]
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
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1102093119\">Modifier_FantasticStory_BaseAbility_2110_BeforeFever_ForShow</a>[<span class=\"descriptionNumberColor\">Concordant Truce</span>]",
          "haloStatus": true
        }
      ]
    }
  ]
}