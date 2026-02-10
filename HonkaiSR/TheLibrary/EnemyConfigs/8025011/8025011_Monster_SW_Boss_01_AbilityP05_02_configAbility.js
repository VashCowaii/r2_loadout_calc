const configAbility = {
  "fileName": "8025011_Monster_SW_Boss_01_AbilityP05_02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "value1": "Target__Toughness",
        "compareType": "=",
        "value2": 0
      },
      "passed": [
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "scope": "ContextAbility",
          "variableName": "Ability_Count"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "includeDyingTargets": true,
          "maxTargets": 5,
          "conditions": {
            "name": "Is Part Of Team",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "team": "Enemy Team"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "Ability_Count",
              "context": "ContextAbility",
              "value": 1,
              "max": 5
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
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "Ability_Count",
                "compareType": "<",
                "value2": 5
              },
              {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "CurrentHP",
                "compareType": ">",
                "value2": 0
              }
            ]
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Phase2FirstTurn",
                "compareType": "=",
                "value2": 1,
                "contextScope": "TargetEntity"
              },
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1940595812\">RandomSummonDelay</a>"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1730193233\">Enemy_SW_Boss_01_SummonMinion</a>",
                      "valuePerStack": {
                        "MDF_SummonID": {
                          "operator": "Variables[0] (SummonMonsterID01) || RETURN",
                          "displayLines": "SummonMonsterID01",
                          "constants": [],
                          "variables": [
                            "SummonMonsterID01"
                          ]
                        },
                        "MDF_SummonDelay": {
                          "operator": "Variables[0] (SummonDelayRatioPhase2) || RETURN",
                          "displayLines": "SummonDelayRatioPhase2",
                          "constants": [],
                          "variables": [
                            "SummonDelayRatioPhase2"
                          ]
                        }
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1940595812\">RandomSummonDelay</a>"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1730193233\">Enemy_SW_Boss_01_SummonMinion</a>",
                      "valuePerStack": {
                        "MDF_SummonID": {
                          "operator": "Variables[0] (SummonMonsterID01) || RETURN",
                          "displayLines": "SummonMonsterID01",
                          "constants": [],
                          "variables": [
                            "SummonMonsterID01"
                          ]
                        },
                        "MDF_SummonDelay": {
                          "operator": "Variables[0] (SummonDelayRatioPhase2) || RETURN",
                          "displayLines": "SummonDelayRatioPhase2",
                          "constants": [],
                          "variables": [
                            "SummonDelayRatioPhase2"
                          ]
                        }
                      }
                    },
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1940595812\">RandomSummonDelay</a>"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1730193233\">Enemy_SW_Boss_01_SummonMinion</a>",
                      "valuePerStack": {
                        "MDF_SummonID": {
                          "operator": "Variables[0] (SummonMonsterID01) || RETURN",
                          "displayLines": "SummonMonsterID01",
                          "constants": [],
                          "variables": [
                            "SummonMonsterID01"
                          ]
                        },
                        "MDF_SummonDelay": {
                          "operator": "Variables[0] (SummonDelayRatioPhase2) || RETURN",
                          "displayLines": "SummonDelayRatioPhase2",
                          "constants": [],
                          "variables": [
                            "SummonDelayRatioPhase2"
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
                    "target": "{{Caster's Minions}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
                }
              ]
            }
          ]
        },
        "Deleted bullshit",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-850302516\">Monster_SW_Boss_01_DamageReduce</a>[<span class=\"descriptionNumberColor\">Multiply</span>]"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"259450291\">Monster_SW_Boss_01_Ability05Charge</a>"
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "MaxStance",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;",
          "warningType": "MaxToughness"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 1
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
              "displayLines": "{[Skill05[1]]}",
              "constants": [],
              "variables": [
                "{[Skill05[1]]}"
              ]
            },
            "dmgFormula": "Max HP Scaling",
            "Toughness": {
              "operator": "Variables[0] (MaxStance) || RETURN",
              "displayLines": "MaxStance",
              "constants": [],
              "variables": [
                "MaxStance"
              ]
            },
            "ToughnessDMGType": {},
            "Tags": null,
            "attackType": "Additional DMG"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-658511969\">Monster_SW_Boss_DamageTakenUp</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
          "duration": {
            "operator": "Variables[0] ({[Skill04[3]]}) || RETURN",
            "displayLines": "{[Skill04[3]]}",
            "constants": [],
            "variables": [
              "{[Skill04[3]]}"
            ]
          },
          "stackLimit": {
            "operator": "Variables[0] ({[Skill04[4]]}) || RETURN",
            "displayLines": "{[Skill04[4]]}",
            "constants": [],
            "variables": [
              "{[Skill04[4]]}"
            ]
          },
          "valuePerStack": {
            "MDF_DamageTakenUpRatio_PerLayer": {
              "operator": "Variables[0] ({[Skill04[2]]}) || RETURN",
              "displayLines": "{[Skill04[2]]}",
              "constants": [],
              "variables": [
                "{[Skill04[2]]}"
              ]
            }
          },
          "addStacksPerTrigger": {
            "operator": "Variables[0] ({[Skill04[1]]}) || RETURN",
            "displayLines": "{[Skill04[1]]}",
            "constants": [],
            "variables": [
              "{[Skill04[1]]}"
            ]
          }
        },
        {
          "name": "Action Advance/Delay",
          "target": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "advanceType": "Set",
          "multiAdd": "{[Skill04[5]]}"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "BreakEndFlag",
          "value": 1
        }
      ]
    }
  ],
  "functions": [
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-1940595812\">RandomSummonDelay</a>",
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Random Chance",
            "chance": 0.4
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "SummonDelayRatio1",
              "value": {
                "operator": "Variables[0] (SummonDelayRatio1Random2) || RETURN",
                "displayLines": "SummonDelayRatio1Random2",
                "constants": [],
                "variables": [
                  "SummonDelayRatio1Random2"
                ]
              }
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Random Chance",
                "chance": 0.5
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "SummonDelayRatio1",
                  "value": {
                    "operator": "Variables[0] (SummonDelayRatio1Random3) || RETURN",
                    "displayLines": "SummonDelayRatio1Random3",
                    "constants": [],
                    "variables": [
                      "SummonDelayRatio1Random3"
                    ]
                  }
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "SummonDelayRatio1",
                  "value": {
                    "operator": "Variables[0] (SummonDelayRatio1Random1) || RETURN",
                    "displayLines": "SummonDelayRatio1Random1",
                    "constants": [],
                    "variables": [
                      "SummonDelayRatio1Random1"
                    ]
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "references": []
}