const configAbility = {
  "fileName": "4023021_Monster_W4_Unicorn_Ability04_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "Define Custom Variable with Team Count",
      "target": {
        "name": "Target Name",
        "target": "{{Moonlit Pegasus: Skill04 Target}}"
      },
      "variableName": "_TargetCount",
      "livingTargets": true
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
      "target": {
        "name": "Target Name",
        "target": "{{Moonlit Pegasus: Skill04 Target}}"
      },
      "variableName": "_TargetCount",
      "livingTargets": true
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
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{Moonlit Pegasus: Skill04 Target}}"
                  },
                  {
                    "name": "Sort by Physical Positioning"
                  },
                  {
                    "name": "Return Target",
                    "value": 1
                  }
                ]
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Quantum",
                "Damage": {
                  "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
                  "displayLines": "{[Skill04[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill04[0]]}"
                  ]
                },
                "HitSplit": {
                  "operator": "Variables[0] (_TargetCount) || Constants[0] (6) || DIV || RETURN",
                  "displayLines": "(_TargetCount / 6)",
                  "constants": [
                    6
                  ],
                  "variables": [
                    "_TargetCount"
                  ]
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
                  "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
                  "displayLines": "{[Skill04[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill04[0]]}"
                  ]
                },
                "HitSplit": {
                  "operator": "Constants[0] (1) || Constants[1] (6) || DIV || RETURN",
                  "displayLines": "(1 / 6)",
                  "constants": [
                    1,
                    6
                  ],
                  "variables": []
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
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{Moonlit Pegasus: Skill04 Target}}"
                  },
                  {
                    "name": "Sort by Physical Positioning",
                    "byHighest": true
                  },
                  {
                    "name": "Return Target",
                    "value": 1
                  }
                ]
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Quantum",
                "Damage": {
                  "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
                  "displayLines": "{[Skill04[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill04[0]]}"
                  ]
                },
                "HitSplit": {
                  "operator": "Variables[0] (_TargetCount) || Constants[0] (6) || DIV || RETURN",
                  "displayLines": "(_TargetCount / 6)",
                  "constants": [
                    6
                  ],
                  "variables": [
                    "_TargetCount"
                  ]
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
                  "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
                  "displayLines": "{[Skill04[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill04[0]]}"
                  ]
                },
                "HitSplit": {
                  "operator": "Constants[0] (1) || Constants[1] (6) || DIV || RETURN",
                  "displayLines": "(1 / 6)",
                  "constants": [
                    1,
                    6
                  ],
                  "variables": []
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
                "operator": "Constants[0] (2) || Variables[0] (_TargetCount) || DIV || RETURN",
                "displayLines": "(2 / _TargetCount)",
                "constants": [
                  2
                ],
                "variables": [
                  "_TargetCount"
                ]
              },
              "Event": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Sequence",
                    "Sequence": [
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
                      "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
                      "displayLines": "{[Skill04[0]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill04[0]]}"
                      ]
                    },
                    "HitSplit": {
                      "operator": "Variables[0] (_TargetCount) || Constants[0] (6) || DIV || RETURN",
                      "displayLines": "(_TargetCount / 6)",
                      "constants": [
                        6
                      ],
                      "variables": [
                        "_TargetCount"
                      ]
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
              "Event": [
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
                      "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
                      "displayLines": "{[Skill04[0]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill04[0]]}"
                      ]
                    },
                    "HitSplit": {
                      "operator": "Constants[0] (1) || Constants[1] (6) || DIV || RETURN",
                      "displayLines": "(1 / 6)",
                      "constants": [
                        1,
                        6
                      ],
                      "variables": []
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
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{Moonlit Pegasus: Skill04 Target}}"
                  },
                  {
                    "name": "Sort by Physical Positioning"
                  },
                  {
                    "name": "Return Target",
                    "value": 1
                  }
                ]
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Quantum",
                "Damage": {
                  "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
                  "displayLines": "{[Skill04[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill04[0]]}"
                  ]
                },
                "HitSplit": {
                  "operator": "Variables[0] (_TargetCount) || Constants[0] (6) || DIV || RETURN",
                  "displayLines": "(_TargetCount / 6)",
                  "constants": [
                    6
                  ],
                  "variables": [
                    "_TargetCount"
                  ]
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
                  "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
                  "displayLines": "{[Skill04[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill04[0]]}"
                  ]
                },
                "HitSplit": {
                  "operator": "Constants[0] (1) || Constants[1] (6) || DIV || RETURN",
                  "displayLines": "(1 / 6)",
                  "constants": [
                    1,
                    6
                  ],
                  "variables": []
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
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{Moonlit Pegasus: Skill04 Target}}"
                  },
                  {
                    "name": "Sort by Physical Positioning",
                    "byHighest": true
                  },
                  {
                    "name": "Return Target",
                    "value": 1
                  }
                ]
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Quantum",
                "Damage": {
                  "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
                  "displayLines": "{[Skill04[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill04[0]]}"
                  ]
                },
                "HitSplit": {
                  "operator": "Variables[0] (_TargetCount) || Constants[0] (6) || DIV || RETURN",
                  "displayLines": "(_TargetCount / 6)",
                  "constants": [
                    6
                  ],
                  "variables": [
                    "_TargetCount"
                  ]
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
                  "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
                  "displayLines": "{[Skill04[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill04[0]]}"
                  ]
                },
                "HitSplit": {
                  "operator": "Constants[0] (1) || Constants[1] (6) || DIV || RETURN",
                  "displayLines": "(1 / 6)",
                  "constants": [
                    1,
                    6
                  ],
                  "variables": []
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
                      "operator": "Variables[0] (UnusedUnderThisBase_379) || RETURN",
                      "displayLines": "UnusedUnderThisBase_379",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_379"
                      ]
                    },
                    "_GriffinMark_DamagePercentage": {
                      "operator": "Variables[0] (UnusedUnderThisBase_380) || RETURN",
                      "displayLines": "UnusedUnderThisBase_380",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_380"
                      ]
                    },
                    "_MixedMark_LoseHpRatio": {
                      "operator": "Variables[0] (UnusedUnderThisBase_381) || RETURN",
                      "displayLines": "UnusedUnderThisBase_381",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_381"
                      ]
                    },
                    "_UnicornMark_Chance": {
                      "operator": "Variables[0] (UnusedUnderThisBase_382) || RETURN",
                      "displayLines": "UnusedUnderThisBase_382",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_382"
                      ]
                    },
                    "_UnicornMark_LifeTime": {
                      "operator": "Variables[0] (UnusedUnderThisBase_383) || RETURN",
                      "displayLines": "UnusedUnderThisBase_383",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_383"
                      ]
                    },
                    "_UnicornMark_ActionDelayRatio": {
                      "operator": "Variables[0] (UnusedUnderThisBase_384) || RETURN",
                      "displayLines": "UnusedUnderThisBase_384",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_384"
                      ]
                    },
                    "_UnicornMark_DebuffDamagePercentage": {
                      "operator": "Variables[0] (UnusedUnderThisBase_385) || RETURN",
                      "displayLines": "UnusedUnderThisBase_385",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_385"
                      ]
                    },
                    "_UnicornMark_DamagePercentage": {
                      "operator": "Variables[0] (UnusedUnderThisBase_386) || RETURN",
                      "displayLines": "UnusedUnderThisBase_386",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_386"
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
                      "operator": "Variables[0] (UnusedUnderThisBase_379) || RETURN",
                      "displayLines": "UnusedUnderThisBase_379",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_379"
                      ]
                    },
                    "_GriffinMark_DamagePercentage": {
                      "operator": "Variables[0] (UnusedUnderThisBase_380) || RETURN",
                      "displayLines": "UnusedUnderThisBase_380",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_380"
                      ]
                    },
                    "_MixedMark_LoseHpRatio": {
                      "operator": "Variables[0] (UnusedUnderThisBase_381) || RETURN",
                      "displayLines": "UnusedUnderThisBase_381",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_381"
                      ]
                    },
                    "_UnicornMark_Chance": {
                      "operator": "Variables[0] (UnusedUnderThisBase_382) || RETURN",
                      "displayLines": "UnusedUnderThisBase_382",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_382"
                      ]
                    },
                    "_UnicornMark_LifeTime": {
                      "operator": "Variables[0] (UnusedUnderThisBase_383) || RETURN",
                      "displayLines": "UnusedUnderThisBase_383",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_383"
                      ]
                    },
                    "_UnicornMark_ActionDelayRatio": {
                      "operator": "Variables[0] (UnusedUnderThisBase_384) || RETURN",
                      "displayLines": "UnusedUnderThisBase_384",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_384"
                      ]
                    },
                    "_UnicornMark_DebuffDamagePercentage": {
                      "operator": "Variables[0] (UnusedUnderThisBase_385) || RETURN",
                      "displayLines": "UnusedUnderThisBase_385",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_385"
                      ]
                    },
                    "_UnicornMark_DamagePercentage": {
                      "operator": "Variables[0] (UnusedUnderThisBase_386) || RETURN",
                      "displayLines": "UnusedUnderThisBase_386",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_386"
                      ]
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
  "references": []
}