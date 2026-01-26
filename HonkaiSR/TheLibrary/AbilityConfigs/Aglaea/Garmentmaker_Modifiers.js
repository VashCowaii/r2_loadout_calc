const configAbility = {
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