const configAbility = {
  "fileName": "Misha_Misha_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Interlock"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Misha_Ability03_StatusProbabilityUp[<span class=\"descriptionNumberColor\">Interlock</span>]",
          "valuePerStack": {
            "MDF_PropertyRatio": {
              "operator": "Variables[0] (0.6) || RETURN",
              "displayLines": "0.6",
              "constants": [],
              "variables": [
                0.6
              ]
            }
          }
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "variableName": "_current_hit_count",
      "value": 0
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 1
      },
      "passed": [
        {
          "name": "Define Custom Variable with Team Count",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "variableName": "Skill03_Hit_Count",
          "livingTargets": true,
          "context": "ContextCaster"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Skill03_Hit_Count",
          "value": {
            "operator": "Variables[0] (MIN) || Variables[1] (1) || Variables[2] (Skill03_Hit_Count) || MUL || Variables[3] (5) || PARAM_2 || FUNCTION || RETURN",
            "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MIN</span>((1 * Skill03_Hit_Count), 5)",
            "constants": [],
            "variables": [
              "MIN",
              1,
              "Skill03_Hit_Count",
              5
            ]
          }
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "variableName": "Skill03_Hit_Count",
          "value": 0
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "variableName": "Skill03_Hit_Count",
      "value": {
        "operator": "Variables[0] (Skill03_Hit_Count) || Variables[1] (EnergyBar_BasicUltraAttack) || ADD || Variables[2] (EnergyBar_ExtraUltraAttack) || ADD || RETURN",
        "displayLines": "((Skill03_Hit_Count + EnergyBar_BasicUltraAttack) + EnergyBar_ExtraUltraAttack)",
        "constants": [],
        "variables": [
          "Skill03_Hit_Count",
          "EnergyBar_BasicUltraAttack",
          "EnergyBar_ExtraUltraAttack"
        ]
      }
    },
    {
      "name": "Define Custom Variable",
      "variableName": "_delta_ntime",
      "value": {
        "operator": "Variables[0] (MISHA_OBJECT_UNUSED_2) || Variables[1] (MISHA_OBJECT_UNUSED_1) || SUB || Variables[2] (MAX) || Constants[0] (1) || Variables[3] (Skill03_Hit_Count) || Constants[1] (2) || SUB || PARAM_2 || FUNCTION || DIV || RETURN",
        "displayLines": "((MISHA_OBJECT_UNUSED_2 - MISHA_OBJECT_UNUSED_1) / &nbsp;<span class=\"descriptionFunctionColor\">MAX</span>(1, (Skill03_Hit_Count - 2)))",
        "constants": [
          1,
          2
        ],
        "variables": [
          "MISHA_OBJECT_UNUSED_2",
          "MISHA_OBJECT_UNUSED_1",
          "MAX",
          "Skill03_Hit_Count"
        ]
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Release"
      },
      "passed": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "ifTargetFound": [
            {
              "name": "Use Custom Character Function",
              "functionName": "Misha_Ability03_SingleAttack",
              "variables": {
                "parameter[01]_StanceRatio": 1,
                "parameter[02]_Frozen_Chance": {
                  "operator": "Variables[0] (0.2) || Variables[1] (0.8) || ADD || RETURN",
                  "displayLines": "(0.2 + 0.8)",
                  "constants": [],
                  "variables": [
                    0.2,
                    0.8
                  ]
                }
              }
            }
          ]
        }
      ],
      "failed": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "ifTargetFound": [
            {
              "name": "Use Custom Character Function",
              "functionName": "Misha_Ability03_SingleAttack",
              "variables": {
                "parameter[01]_StanceRatio": 1,
                "parameter[02]_Frozen_Chance": {
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
      ]
    },
    {
      "name": "Looped Event",
      "maxLoops": {
        "operator": "Variables[0] (MAX) || Constants[0] (0) || Variables[1] (Skill03_Hit_Count) || Constants[1] (2) || SUB || PARAM_2 || FUNCTION || RETURN",
        "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MAX</span>(0, (Skill03_Hit_Count - 2))",
        "constants": [
          0,
          2
        ],
        "variables": [
          "MAX",
          "Skill03_Hit_Count"
        ]
      },
      "Event": [
        {
          "name": "Define Custom Variable",
          "variableName": "_current_hit_count",
          "value": {
            "operator": "Variables[0] (_current_hit_count) || Constants[0] (1) || ADD || RETURN",
            "displayLines": "(_current_hit_count + 1)",
            "constants": [
              1
            ],
            "variables": [
              "_current_hit_count"
            ]
          }
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Bounce_SelectTarget",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "paramSequence": [
            {
              "name": "Use Custom Character Function",
              "functionName": "Misha_Ability03_SingleAttack",
              "variables": {
                "parameter[01]_StanceRatio": 0.5,
                "parameter[02]_Frozen_Chance": {
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
      ]
    },
    {
      "name": "Define Custom Variable",
      "variableName": "_current_hit_count",
      "value": {
        "operator": "Variables[0] (_current_hit_count) || Constants[0] (1) || ADD || RETURN",
        "displayLines": "(_current_hit_count + 1)",
        "constants": [
          1
        ],
        "variables": [
          "_current_hit_count"
        ]
      }
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "Bounce_SelectTarget",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "paramSequence": [
        {
          "name": "Use Custom Character Function",
          "functionName": "Misha_Ability03_SingleAttack",
          "variables": {
            "parameter[01]_StanceRatio": 0.5,
            "parameter[02]_Frozen_Chance": {
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
    "Trigger: Attack End",
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
      "name": "Define Custom Variable",
      "variableName": "EnergyBar_ExtraUltraAttack",
      "value": 0
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Misha_Ability03_StatusProbabilityUp[<span class=\"descriptionNumberColor\">Interlock</span>]"
    },
    "Trigger: Ability End"
  ],
  "functions": [
    {
      "name": "CharacterFunctions",
      "functionName": "Misha_Ability03_SingleAttack",
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 2
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Misha_Eidolon2_DefenceDown[<span class=\"descriptionNumberColor\">Yearning of Youth</span>]",
              "duration": {
                "operator": "Variables[0] (3) || RETURN",
                "displayLines": "3",
                "constants": [],
                "variables": [
                  3
                ]
              },
              "baseChance": {
                "operator": "Variables[0] (0.24) || RETURN",
                "displayLines": "0.24",
                "constants": [],
                "variables": [
                  0.24
                ]
              },
              "valuePerStack": {
                "MDF_PropertyRatio": {
                  "operator": "Variables[0] (0.16) || RETURN",
                  "displayLines": "0.16",
                  "constants": [],
                  "variables": [
                    0.16
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
            "target": "{{Parameter Target}}"
          },
          "modifier": "Standard_CTRL_Frozen[<span class=\"descriptionNumberColor\">Frozen</span>]",
          "duration": 1,
          "baseChance": {
            "operator": "Variables[0] (parameter[02]_Frozen_Chance) || RETURN",
            "displayLines": "parameter[02]_Frozen_Chance",
            "constants": [],
            "variables": [
              "parameter[02]_Frozen_Chance"
            ]
          },
          "valuePerStack": {
            "Modifier_Frozen_DamagePercentage": {
              "operator": "Variables[0] (0.3) || RETURN",
              "displayLines": "0.3",
              "constants": [],
              "variables": [
                0.3
              ]
            }
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
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] (Skill03_DamagePercentage) || RETURN",
              "displayLines": "Skill03_DamagePercentage",
              "constants": [],
              "variables": [
                "Skill03_DamagePercentage"
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || Variables[1] (parameter[01]_StanceRatio) || MUL || RETURN",
              "displayLines": "(ST Toughness Value * parameter[01]_StanceRatio)",
              "constants": [],
              "variables": [
                "ST Toughness Value",
                "parameter[01]_StanceRatio"
              ]
            },
            "Tags": null
          }
        }
      ]
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Misha_Eidolon2_DefenceDown[<span class=\"descriptionNumberColor\">Yearning of Youth</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "STAT_DefenceDown"
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
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
      "latentQueue": [
        "_delta_ntime"
      ],
      "description": "Reduces DEF by <span class=\"descriptionNumberColor\">MDF_PropertyRatio</span>.",
      "type": "Debuff",
      "effectName": "DEF Reduction",
      "statusName": "Yearning of Youth"
    },
    {
      "name": "Modifier Construction",
      "for": "Misha_Ability03_StatusProbabilityUp[<span class=\"descriptionNumberColor\">Interlock</span>]",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">EffectHitRate</span>&nbsp;",
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
        },
        {
          "eventTrigger": "Ability Use [Owner]: End",
          "execute": [
            "Modifier Deletes Itself"
          ]
        }
      ],
      "stackData": [
        "MDF_PropertyRatio"
      ],
      "latentQueue": [],
      "description": "Increases Effect Hit Rate by <span class=\"descriptionNumberColor\">MDF_PropertyRatio</span>.",
      "type": "Buff",
      "effectName": "Effect Hit Rate Boost",
      "statusName": "Interlock"
    }
  ]
}