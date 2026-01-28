const configAbility = {
  "fileName": "NetherwingPollux_Servant_CastoriceServant_Ability21_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
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
            "target": "{{Caster}}"
          },
          "modifier": "Memosprite_CastoriceServant_Eidolon6_ForceStanceDamage"
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "variableName": "CL_PlayTimes",
      "value": 1
    },
    {
      "name": "Define Custom Variable",
      "variableName": "CastoriceServant_BattleViewModeLevel",
      "value": 2
    },
    {
      "name": "Define Custom Variable",
      "variableName": "CL_EnterBattlePlayTimes",
      "value": 0
    },
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
            "modifier": "Memosprite_CastoriceServant_BPCost_3"
          },
          {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Summoner}}"
            },
            "value1": "Castorice_Rank02_Count",
            "compareType": "<=",
            "value2": 0,
            "contextScope": "TargetEntity"
          }
        ]
      },
      "passed": [
        {
          "name": "Force Auto-Battle on Target",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "enable": true
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Memosprite_CastoriceServant_BP_Explode"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Memosprite_CastoriceServant_Ability23Check"
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
        "modifier": "Memosprite_CastoriceServant_LifeTime",
        "invertCondition": true
      },
      "passed": [
        {
          "name": "Force Auto-Battle on Target",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "enable": true
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "variableName": "CastoriceServant_BPSkill_Level",
      "value": 2
    },
    {
      "name": "Define Custom Variable",
      "variableName": "CastoriceServant_UseSkill02_Flag",
      "value": 1
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "PointB3"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Castorice_PointB3_AllDamageTypeAddedRatio[<span class=\"descriptionNumberColor\">Where The West Wind Dwells</span>]",
          "stackLimit": {
            "operator": "Variables[0] (CastoriceServant_PointB3_MaxLayer) || RETURN",
            "displayLines": "CastoriceServant_PointB3_MaxLayer",
            "constants": [],
            "variables": [
              "CastoriceServant_PointB3_MaxLayer"
            ]
          },
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (CastoriceServant_PointB3_AllDamageTypeAddedRatio) || RETURN",
              "displayLines": "CastoriceServant_PointB3_AllDamageTypeAddedRatio",
              "constants": [],
              "variables": [
                "CastoriceServant_PointB3_AllDamageTypeAddedRatio"
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
        "name": "Eidolon Activated",
        "eidolon": 2
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Summoner}}"
            },
            "value1": "Castorice_Rank02_Count",
            "compareType": ">",
            "value2": 0,
            "contextScope": "TargetEntity"
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "CastoriceServant_Rank02_Count",
              "value": {
                "operator": "Variables[0] (CastoriceServant_Rank02_Count) || Constants[0] (1) || SUB || RETURN",
                "displayLines": "(CastoriceServant_Rank02_Count - 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "CastoriceServant_Rank02_Count"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "scope": "TargetEntity",
              "variableName": "Castorice_Rank02_Count",
              "value": {
                "operator": "Variables[0] (CastoriceServant_Rank02_Count) || RETURN",
                "displayLines": "CastoriceServant_Rank02_Count",
                "constants": [],
                "variables": [
                  "CastoriceServant_Rank02_Count"
                ]
              }
            },
            {
              "name": "Set Netherwing's Ardent Will Stacks",
              "display": {
                "operator": "Variables[0] (CastoriceServant_Rank02_Count) || RETURN",
                "displayLines": "CastoriceServant_Rank02_Count",
                "constants": [],
                "variables": [
                  "CastoriceServant_Rank02_Count"
                ]
              },
              "preview": 0
            }
          ],
          "failed": [
            {
              "name": "Consume",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "flatConsume": {
                "operator": "Variables[0] (CastoriceServant_SkillMaxHP) || Variables[1] (0.25) || MUL || RETURN",
                "displayLines": "(CastoriceServant_SkillMaxHP * 0.25)",
                "constants": [],
                "variables": [
                  "CastoriceServant_SkillMaxHP",
                  0.25
                ]
              },
              "consumeFloor": 1,
              "attackType": "Unknown"
            }
          ]
        }
      ],
      "failed": [
        {
          "name": "Consume",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "flatConsume": {
            "operator": "Variables[0] (CastoriceServant_SkillMaxHP) || Variables[1] (0.25) || MUL || RETURN",
            "displayLines": "(CastoriceServant_SkillMaxHP * 0.25)",
            "constants": [],
            "variables": [
              "CastoriceServant_SkillMaxHP",
              0.25
            ]
          },
          "consumeFloor": 1,
          "attackType": "Unknown"
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "variableName": "CastoriceBPLoopMax",
      "value": 10
    },
    {
      "name": "Looped Event",
      "maxLoops": {
        "operator": "Variables[0] (CastoriceBPLoopMax) || RETURN",
        "displayLines": "CastoriceBPLoopMax",
        "constants": [],
        "variables": [
          "CastoriceBPLoopMax"
        ]
      },
      "Event": [
        {
          "name": "Define Custom Variable",
          "variableName": "CastoriceBPLoop",
          "value": {
            "operator": "Variables[0] (CastoriceBPLoop) || Constants[0] (1) || ADD || RETURN",
            "displayLines": "(CastoriceBPLoop + 1)",
            "constants": [
              1
            ],
            "variables": [
              "CastoriceBPLoop"
            ]
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
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "includeDyingTargets": true,
              "ifTargetFound": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Servant_CastoriceServant_SetDamageRatio"
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Quantum",
                    "Damage": {
                      "operator": "Variables[0] (0.28) || Variables[1] (Castorice_Rank01_DamageRatio) || MUL || RETURN",
                      "displayLines": "(0.28 * Castorice_Rank01_DamageRatio)",
                      "constants": [],
                      "variables": [
                        0.28,
                        "Castorice_Rank01_DamageRatio"
                      ]
                    },
                    "dmgFormula": "[SUMMONER] Max HP Scaling",
                    "HitSplit": {
                      "operator": "Constants[0] (1) || Constants[0] (1) || Variables[0] (CastoriceBPLoopMax) || DIV || MUL || RETURN",
                      "displayLines": "(1 * (1 / CastoriceBPLoopMax))",
                      "constants": [
                        1
                      ],
                      "variables": [
                        "CastoriceBPLoopMax"
                      ]
                    },
                    "Toughness": {
                      "operator": "Variables[0] (AOE Toughness Value) || RETURN",
                      "displayLines": "AOE Toughness Value",
                      "constants": [],
                      "variables": [
                        "AOE Toughness Value"
                      ]
                    },
                    "Tags": null,
                    "attackType": "Memosprite",
                    "EnergyGainPercent": "100%"
                  }
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Quantum",
                "Damage": {
                  "operator": "Variables[0] (0.28) || RETURN",
                  "displayLines": "0.28",
                  "constants": [],
                  "variables": [
                    0.28
                  ]
                },
                "dmgFormula": "[SUMMONER] Max HP Scaling",
                "HitSplit": {
                  "operator": "Constants[0] (1) || Constants[0] (1) || Variables[0] (CastoriceBPLoopMax) || DIV || MUL || RETURN",
                  "displayLines": "(1 * (1 / CastoriceBPLoopMax))",
                  "constants": [
                    1
                  ],
                  "variables": [
                    "CastoriceBPLoopMax"
                  ]
                },
                "Toughness": {
                  "operator": "Variables[0] (AOE Toughness Value) || RETURN",
                  "displayLines": "AOE Toughness Value",
                  "constants": [],
                  "variables": [
                    "AOE Toughness Value"
                  ]
                },
                "Tags": null,
                "attackType": "Memosprite",
                "EnergyGainPercent": "100%"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "variableName": "CastoriceBPLoop",
      "value": 0
    },
    {
      "name": "Define Custom Variable",
      "variableName": "CastoriceServant_ReadyFlag",
      "value": {
        "operator": "Variables[0] (CastoriceServant_BattleViewModeLevel) || RETURN",
        "displayLines": "CastoriceServant_BattleViewModeLevel",
        "constants": [],
        "variables": [
          "CastoriceServant_BattleViewModeLevel"
        ]
      }
    },
    {
      "name": "Define Custom Variable",
      "variableName": "CastoriceServant_UseSkill02_Flag",
      "value": 0
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "Servant_CastoriceServant_BP_OneMore_AbilityChange"
    }
  ],
  "references": []
}