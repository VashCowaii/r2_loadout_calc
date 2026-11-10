const configAbility = {
  "fileName": "4023020_Monster_W4_Unicorn_Ability04_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "Define Custom Variable with Team Count",
      "variableName": "_TargetCount",
      "readTarget": {
        "name": "Target Name",
        "target": "{{Moonlit Pegasus: Skill04 Target}}"
      },
      "living": true
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "_TargetCount",
        "compareType": "=",
        "value2": 0
      },
      "passed": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "searchRandom": true,
          "maxTargets": 2,
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1429596060\">Enemy_W4_Unicorn_OtherSignOnAvatar</a>"
            }
          ]
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Flag",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "flagName": "Taunt",
        "invertCondition": true
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target Count",
            "target": {
              "name": "Target Name",
              "target": "{{Moonlit Pegasus: Skill04 Target}}"
            },
            "compareType": ">",
            "value2": 1,
            "livingTargets": true
          }
        }
      ]
    },
    {
      "name": "Define Custom Variable with Team Count",
      "variableName": "_TargetCount",
      "readTarget": {
        "name": "Target Name",
        "target": "{{Moonlit Pegasus: Skill04 Target}}"
      },
      "living": true
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "_TargetCount",
        "compareType": ">",
        "value2": 0
      },
      "passed": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1995047428\">Enemy_W4_Unicorn_UltraReady</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1402132221\">Enemy_W4_Unicorn_UltraReady_02</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "flagName": "Taunt",
            "invertCondition": true
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Sequence",
                "TargetList": [
                  {
                    "name": "Target Name",
                    "target": "{{Moonlit Pegasus: Skill04 Target}}"
                  },
                  "Sort by Physical Positioning",
                  {
                    "name": "Return Target",
                    "count": 1
                  }
                ]
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Quantum",
                "Damage": {
                  "displayLines": "{[Skill04[0]]}"
                },
                "HitSplit": {
                  "displayLines": "(_TargetCount / 6)"
                },
                "Toughness": null,
                "Tags": null,
                "EnergyGainPercent": "100%"
              }
            }
          ],
          "failed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Quantum",
                "Damage": {
                  "displayLines": "{[Skill04[0]]}"
                },
                "HitSplit": {
                  "displayLines": "(1 / 6)"
                },
                "Toughness": null,
                "Tags": null,
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "flagName": "Taunt",
            "invertCondition": true
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Sequence",
                "TargetList": [
                  {
                    "name": "Target Name",
                    "target": "{{Moonlit Pegasus: Skill04 Target}}"
                  },
                  {
                    "name": "Sort by Physical Positioning",
                    "sortByHighest": true
                  },
                  {
                    "name": "Return Target",
                    "count": 1
                  }
                ]
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Quantum",
                "Damage": {
                  "displayLines": "{[Skill04[0]]}"
                },
                "HitSplit": {
                  "displayLines": "(_TargetCount / 6)"
                },
                "Toughness": null,
                "Tags": null,
                "EnergyGainPercent": "100%"
              }
            }
          ],
          "failed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Quantum",
                "Damage": {
                  "displayLines": "{[Skill04[0]]}"
                },
                "HitSplit": {
                  "displayLines": "(1 / 6)"
                },
                "Toughness": null,
                "Tags": null,
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "flagName": "Taunt",
            "invertCondition": true
          },
          "passed": [
            {
              "name": "Looped Event",
              "maxLoops": {
                "displayLines": "(2 / _TargetCount)"
              },
              "execute": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Sequence",
                    "TargetList": [
                      {
                        "name": "Target Name",
                        "target": "{{Moonlit Pegasus: Skill04 Target}}"
                      }
                    ]
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Quantum",
                    "Damage": {
                      "displayLines": "{[Skill04[0]]}"
                    },
                    "HitSplit": {
                      "displayLines": "(_TargetCount / 6)"
                    },
                    "Toughness": null,
                    "Tags": null,
                    "EnergyGainPercent": "100%"
                  }
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Looped Event",
              "maxLoops": 2,
              "execute": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Quantum",
                    "Damage": {
                      "displayLines": "{[Skill04[0]]}"
                    },
                    "HitSplit": {
                      "displayLines": "(1 / 6)"
                    },
                    "Toughness": null,
                    "Tags": null,
                    "EnergyGainPercent": "100%"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "flagName": "Taunt",
            "invertCondition": true
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Sequence",
                "TargetList": [
                  {
                    "name": "Target Name",
                    "target": "{{Moonlit Pegasus: Skill04 Target}}"
                  },
                  "Sort by Physical Positioning",
                  {
                    "name": "Return Target",
                    "count": 1
                  }
                ]
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Quantum",
                "Damage": {
                  "displayLines": "{[Skill04[0]]}"
                },
                "HitSplit": {
                  "displayLines": "(_TargetCount / 6)"
                },
                "Toughness": null,
                "Tags": null,
                "EnergyGainPercent": "100%"
              }
            }
          ],
          "failed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Quantum",
                "Damage": {
                  "displayLines": "{[Skill04[0]]}"
                },
                "HitSplit": {
                  "displayLines": "(1 / 6)"
                },
                "Toughness": null,
                "Tags": null,
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "flagName": "Taunt",
            "invertCondition": true
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Sequence",
                "TargetList": [
                  {
                    "name": "Target Name",
                    "target": "{{Moonlit Pegasus: Skill04 Target}}"
                  },
                  {
                    "name": "Sort by Physical Positioning",
                    "sortByHighest": true
                  },
                  {
                    "name": "Return Target",
                    "count": 1
                  }
                ]
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Quantum",
                "Damage": {
                  "displayLines": "{[Skill04[0]]}"
                },
                "HitSplit": {
                  "displayLines": "(_TargetCount / 6)"
                },
                "Toughness": null,
                "Tags": null,
                "EnergyGainPercent": "100%"
              }
            }
          ],
          "failed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Quantum",
                "Damage": {
                  "displayLines": "{[Skill04[0]]}"
                },
                "HitSplit": {
                  "displayLines": "(1 / 6)"
                },
                "Toughness": null,
                "Tags": null,
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "flagName": "Taunt",
            "invertCondition": true
          },
          "passed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Moonlit Pegasus: Skill04 Target}}"
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1656896295\">Enemy_W4_Unicorn_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Oronyx's Mark</span>]",
                  "valuePerStack": {
                    "_GriffinMark_SPCost": {
                      "displayLines": "{[PassiveSkill01[0]]}"
                    },
                    "_GriffinMark_DamagePercentage": {
                      "displayLines": "{[PassiveSkill01[1]]}"
                    },
                    "_MixedMark_LoseHpRatio": {
                      "displayLines": "{[PassiveSkill01[2]]}"
                    },
                    "_UnicornMark_Chance": {
                      "displayLines": "{[PassiveSkill02[0]]}"
                    },
                    "_UnicornMark_LifeTime": {
                      "displayLines": "{[PassiveSkill02[1]]}"
                    },
                    "_UnicornMark_ActionDelayRatio": {
                      "displayLines": "{[PassiveSkill02[2]]}"
                    },
                    "_UnicornMark_DebuffDamagePercentage": {
                      "displayLines": "{[PassiveSkill02[3]]}"
                    },
                    "_UnicornMark_DamagePercentage": {
                      "displayLines": "{[PassiveSkill02[4]]}"
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
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1656896295\">Enemy_W4_Unicorn_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Oronyx's Mark</span>]",
                  "valuePerStack": {
                    "_GriffinMark_SPCost": {
                      "displayLines": "{[PassiveSkill01[0]]}"
                    },
                    "_GriffinMark_DamagePercentage": {
                      "displayLines": "{[PassiveSkill01[1]]}"
                    },
                    "_MixedMark_LoseHpRatio": {
                      "displayLines": "{[PassiveSkill01[2]]}"
                    },
                    "_UnicornMark_Chance": {
                      "displayLines": "{[PassiveSkill02[0]]}"
                    },
                    "_UnicornMark_LifeTime": {
                      "displayLines": "{[PassiveSkill02[1]]}"
                    },
                    "_UnicornMark_ActionDelayRatio": {
                      "displayLines": "{[PassiveSkill02[2]]}"
                    },
                    "_UnicornMark_DebuffDamagePercentage": {
                      "displayLines": "{[PassiveSkill02[3]]}"
                    },
                    "_UnicornMark_DamagePercentage": {
                      "displayLines": "{[PassiveSkill02[4]]}"
                    }
                  }
                }
              ]
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-820453556\">Enemy_W4_Unicorn_SignOnAvatar</a>[<span class=\"descriptionNumberColor\">Lock On</span>]",
          "onlyRemoveOwnersInstance": true
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2111319206\">Enemy_W4_Unicorn_SignOnAvatar2</a>[<span class=\"descriptionNumberColor\">Lock On</span>]",
          "onlyRemoveOwnersInstance": true
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1429596060\">Enemy_W4_Unicorn_OtherSignOnAvatar</a>",
          "onlyRemoveOwnersInstance": true
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-777597987\">Enemy_W4_Unicorn_Ability03_Mark</a>",
          "onlyRemoveOwnersInstance": true
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "references": []
}