const configAbility = {
  "fileName": "March7thTH_Mar_7th_10_Ability11_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable",
      "variableName": "_have_gain_sp",
      "value": 0
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "Skill11_HitCount",
        "compareType": ">",
        "value2": {
          "operator": "Constants[0] (4) || Variables[0] (Skill11_BasicCount) || SUB || RETURN",
          "displayLines": "(4 - Skill11_BasicCount)",
          "constants": [
            4
          ],
          "variables": [
            "Skill11_BasicCount"
          ]
        },
        "contextScope": "ContextCaster"
      },
      "passed": [
        {
          "name": "Update Energy",
          "on": "Caster",
          "valuePercent": 1,
          "ofAbilitySplit": true,
          "isFixed": "* ERR"
        },
        {
          "name": "Shot Fired",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "Deal_Single_Hit",
              "variables": {
                "parameter[1]_IsFinalHit": 0
              }
            }
          ]
        },
        {
          "name": "Shot Fired",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "Deal_Single_Hit",
              "variables": {
                "parameter[1]_IsFinalHit": 0
              }
            }
          ]
        },
        {
          "name": "Shot Fired",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "Deal_Single_Hit",
              "variables": {
                "parameter[1]_IsFinalHit": 0
              }
            }
          ]
        },
        {
          "name": "Shot Fired",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "Deal_Single_Hit",
              "variables": {
                "parameter[1]_IsFinalHit": 1
              }
            }
          ]
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Shoot_Effect"
        },
        {
          "name": "Shot Fired"
        },
        {
          "name": "Looped Event",
          "maxLoops": {
            "operator": "Variables[0] (Skill11_BasicCount) || Variables[1] (Skill11_HitCount) || ADD || Constants[0] (5) || SUB || RETURN",
            "displayLines": "((Skill11_BasicCount + Skill11_HitCount) - 5)",
            "constants": [
              5
            ],
            "variables": [
              "Skill11_BasicCount",
              "Skill11_HitCount"
            ]
          },
          "Event": [
            {
              "name": "Use Custom Character Function",
              "functionName": "Deal_Loop_Hit"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Skill11_HitCount",
            "compareType": ">",
            "value2": {
              "operator": "Constants[0] (5) || Variables[0] (Skill11_BasicCount) || SUB || RETURN",
              "displayLines": "(5 - Skill11_BasicCount)",
              "constants": [
                5
              ],
              "variables": [
                "Skill11_BasicCount"
              ]
            },
            "contextScope": "ContextCaster"
          }
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Deal_Loop_Hit_Final"
        }
      ],
      "failed": [
        {
          "name": "Update Energy",
          "on": "Caster",
          "valuePercent": 1,
          "ofAbilitySplit": true,
          "isFixed": "* ERR"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Shoot_Effect"
        },
        {
          "name": "Shot Fired"
        },
        {
          "name": "Looped Event",
          "maxLoops": {
            "operator": "Variables[0] (Skill11_BasicCount) || Variables[1] (Skill11_HitCount) || ADD || Constants[0] (1) || SUB || RETURN",
            "displayLines": "((Skill11_BasicCount + Skill11_HitCount) - 1)",
            "constants": [
              1
            ],
            "variables": [
              "Skill11_BasicCount",
              "Skill11_HitCount"
            ]
          },
          "Event": [
            {
              "name": "Use Custom Character Function",
              "functionName": "Deal_Loop_Hit"
            }
          ]
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Deal_Loop_Hit_Final"
        }
      ]
    },
    "Trigger: Attack End",
    {
      "name": "Use Custom Character Function",
      "functionName": "Mar_7th_10_GainEnergyWithCheck",
      "variables": {
        "parameter[0]_AddValue": {
          "operator": "Constants[0] (0) || Variables[0] (EnergyBar_MaxEnergy) || SUB || RETURN",
          "displayLines": "(0 - EnergyBar_MaxEnergy)",
          "constants": [
            0
          ],
          "variables": [
            "EnergyBar_MaxEnergy"
          ]
        }
      }
    },
    {
      "name": "Remove Events/Bonuses",
      "to": "Caster",
      "modifier": "Mar_7th_10_Ability03_Enhance_Normal[<span class=\"descriptionNumberColor\">March 7th, the Apex Heroine</span>]"
    },
    "Trigger: Ability End"
  ],
  "whenAdded": [
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "M_Mar_7th_10_Ability11_Preshow"
    }
  ],
  "functions": [
    {
      "name": "CharacterFunctions",
      "functionName": "Shoot_Effect",
      "parse": []
    },
    {
      "name": "CharacterFunctions",
      "functionName": "Deal_Single_Hit",
      "parse": [
        {
          "name": "Define Custom Variable with Stat",
          "target": "Single Target (Primary)",
          "variableName": "_target_stance_before_attack",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Compare: Target Count SUM",
                "target": "All Teammates + Unselectable (Excluding Owner)",
                "conditions": {
                  "name": "Has Modifier",
                  "target": "Use Prior Target(s) Defined",
                  "modifier": "Mar_7th_10_Ability02_Master[<span class=\"descriptionNumberColor\">Shifu</span>]"
                }
              },
              {
                "name": "Target is Pathstrider",
                "path": [
                  "Destruction",
                  "Erudition",
                  "The Hunt",
                  "Harmony",
                  "Nihility",
                  "Preservation",
                  "Abundance",
                  "Remembrance"
                ],
                "target": "March 7th's Shifu"
              }
            ]
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Target is Pathstrider",
                "path": [
                  "Destruction",
                  "Erudition",
                  "The Hunt",
                  "Remembrance"
                ],
                "target": "March 7th's Shifu"
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Arg1_IsFinalHit",
            "compareType": ">=",
            "value2": 1
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": "Single Target (Primary)",
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Imaginary",
                "Damage": {
                  "operator": "Variables[0] (Skill11_DamagePercatage) || RETURN",
                  "displayLines": "Skill11_DamagePercatage",
                  "constants": [],
                  "variables": [
                    "Skill11_DamagePercatage"
                  ]
                },
                "Toughness": {
                  "operator": "Variables[0] (ST Toughness Value) || Variables[1] (Normal_StanceRatio) || MUL || RETURN",
                  "displayLines": "(ST Toughness Value * Normal_StanceRatio)",
                  "constants": [],
                  "variables": [
                    "ST Toughness Value",
                    "Normal_StanceRatio"
                  ]
                },
                "Tags": null
              }
            }
          ],
          "failed": [
            {
              "name": "ATK Scaling DMG",
              "target": "Single Target (Primary)",
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Imaginary",
                "Damage": {
                  "operator": "Variables[0] (Skill11_DamagePercatage) || RETURN",
                  "displayLines": "Skill11_DamagePercatage",
                  "constants": [],
                  "variables": [
                    "Skill11_DamagePercatage"
                  ]
                },
                "Toughness": {
                  "operator": "Variables[0] (ST Toughness Value) || Variables[1] (Normal_StanceRatio) || MUL || RETURN",
                  "displayLines": "(ST Toughness Value * Normal_StanceRatio)",
                  "constants": [],
                  "variables": [
                    "ST Toughness Value",
                    "Normal_StanceRatio"
                  ]
                },
                "Tags": null
              }
            }
          ]
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Mar_7th_10_Jianshi",
          "variables": {
            "parameter[00]_IsAbility11": 1
          }
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "Deal_Loop_Hit",
      "parse": [
        {
          "name": "Define Custom Variable with Stat",
          "target": "Single Target (Primary)",
          "variableName": "_target_stance_before_attack",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Compare: Target Count SUM",
                "target": "All Teammates + Unselectable (Excluding Owner)",
                "conditions": {
                  "name": "Has Modifier",
                  "target": "Use Prior Target(s) Defined",
                  "modifier": "Mar_7th_10_Ability02_Master[<span class=\"descriptionNumberColor\">Shifu</span>]"
                }
              },
              {
                "name": "Target is Pathstrider",
                "path": [
                  "Destruction",
                  "Erudition",
                  "The Hunt",
                  "Harmony",
                  "Nihility",
                  "Preservation",
                  "Abundance",
                  "Remembrance"
                ],
                "target": "March 7th's Shifu"
              }
            ]
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Target is Pathstrider",
                "path": [
                  "Destruction",
                  "Erudition",
                  "The Hunt",
                  "Remembrance"
                ],
                "target": "March 7th's Shifu"
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
              "operator": "Variables[0] (Skill11_DamagePercatage) || RETURN",
              "displayLines": "Skill11_DamagePercatage",
              "constants": [],
              "variables": [
                "Skill11_DamagePercatage"
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || Variables[1] (Normal_StanceRatio) || MUL || RETURN",
              "displayLines": "(ST Toughness Value * Normal_StanceRatio)",
              "constants": [],
              "variables": [
                "ST Toughness Value",
                "Normal_StanceRatio"
              ]
            },
            "Tags": null
          }
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Mar_7th_10_Jianshi",
          "variables": {
            "parameter[00]_IsAbility11": 1
          }
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "Deal_Loop_Hit_Final",
      "parse": [
        {
          "name": "Define Custom Variable with Stat",
          "target": "Single Target (Primary)",
          "variableName": "_target_stance_before_attack",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Compare: Target Count SUM",
                "target": "All Teammates + Unselectable (Excluding Owner)",
                "conditions": {
                  "name": "Has Modifier",
                  "target": "Use Prior Target(s) Defined",
                  "modifier": "Mar_7th_10_Ability02_Master[<span class=\"descriptionNumberColor\">Shifu</span>]"
                }
              },
              {
                "name": "Target is Pathstrider",
                "path": [
                  "Destruction",
                  "Erudition",
                  "The Hunt",
                  "Harmony",
                  "Nihility",
                  "Preservation",
                  "Abundance",
                  "Remembrance"
                ],
                "target": "March 7th's Shifu"
              }
            ]
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Target is Pathstrider",
                "path": [
                  "Destruction",
                  "Erudition",
                  "The Hunt",
                  "Remembrance"
                ],
                "target": "March 7th's Shifu"
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
              "operator": "Variables[0] (Skill11_DamagePercatage) || RETURN",
              "displayLines": "Skill11_DamagePercatage",
              "constants": [],
              "variables": [
                "Skill11_DamagePercatage"
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || Variables[1] (Normal_StanceRatio) || MUL || RETURN",
              "displayLines": "(ST Toughness Value * Normal_StanceRatio)",
              "constants": [],
              "variables": [
                "ST Toughness Value",
                "Normal_StanceRatio"
              ]
            },
            "Tags": null
          }
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Mar_7th_10_Jianshi",
          "variables": {
            "parameter[00]_IsAbility11": 1
          }
        }
      ]
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "M_Mar_7th_10_Ability11_Preshow",
      "stackData": [],
      "latentQueue": [
        "_have_gain_sp"
      ],
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "skillType": "Basic ATK",
        "conditions": {
          "name": "Has Modifier",
          "target": "Owner of this Modifier",
          "modifier": "Mar_7th_10_Enhance"
        },
        "multiplier": {
          "operator": "Variables[0] (Normal_StanceRatio) || Variables[1] (Skill11_BasicCount) || MUL || RETURN",
          "displayLines": "(Normal_StanceRatio * Skill11_BasicCount)",
          "constants": [],
          "variables": [
            "Normal_StanceRatio",
            "Skill11_BasicCount"
          ]
        }
      }
    }
  ]
}