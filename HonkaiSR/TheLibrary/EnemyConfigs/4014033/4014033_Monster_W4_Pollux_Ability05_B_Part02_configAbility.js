const configAbility = {
  "fileName": "4014033_Monster_W4_Pollux_Ability05_B_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Modifier_Monster_W4_Pollux_B_HardLockHp_BFAbility05"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "Monster_W4_Pollux_Strengthen[<span class=\"descriptionNumberColor\">Fragrance of Death</span>]",
        "invertCondition": true
      }
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Pollux Slumber Target 1}} + {{Pollux Slumber Target 3}}"
      },
      "ifTargetFound": [
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "variableName": "_TargetCurrentHp",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_TargetCurrentHp",
          "value": {
            "operator": "Variables[0] (_TargetCurrentHp) || Constants[0] (1) || SUB || RETURN",
            "displayLines": "(_TargetCurrentHp - 1)",
            "constants": [
              1
            ],
            "variables": [
              "_TargetCurrentHp"
            ]
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (_TargetCurrentHp) || Variables[1] (_Skill05_LoseHpRatio) || MUL || Constants[0] (4) || DIV || RETURN",
              "displayLines": "((_TargetCurrentHp * _Skill05_LoseHpRatio) / 4)",
              "constants": [
                4
              ],
              "variables": [
                "_TargetCurrentHp",
                "_Skill05_LoseHpRatio"
              ]
            },
            "cantKill": true,
            "dmgFormulaFinal": "Converted DMG Base",
            "HitSplit": 0.25,
            "Toughness": null,
            "Tags": null,
            "behaviorTag": "DirectlyLoseHpHit",
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Pollux Slumber Target 2}} + {{Pollux Slumber Target 4}}"
      },
      "ifTargetFound": [
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "variableName": "_TargetCurrentHp",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_TargetCurrentHp",
          "value": {
            "operator": "Variables[0] (_TargetCurrentHp) || Constants[0] (1) || SUB || RETURN",
            "displayLines": "(_TargetCurrentHp - 1)",
            "constants": [
              1
            ],
            "variables": [
              "_TargetCurrentHp"
            ]
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (_TargetCurrentHp) || Variables[1] (_Skill05_LoseHpRatio) || MUL || Constants[0] (4) || DIV || RETURN",
              "displayLines": "((_TargetCurrentHp * _Skill05_LoseHpRatio) / 4)",
              "constants": [
                4
              ],
              "variables": [
                "_TargetCurrentHp",
                "_Skill05_LoseHpRatio"
              ]
            },
            "cantKill": true,
            "dmgFormulaFinal": "Converted DMG Base",
            "HitSplit": 0.25,
            "Toughness": null,
            "Tags": null,
            "behaviorTag": "DirectlyLoseHpHit",
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Pollux Slumber Target 1}} + {{Pollux Slumber Target 4}}"
      },
      "ifTargetFound": [
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "variableName": "_TargetCurrentHp",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_TargetCurrentHp",
          "value": {
            "operator": "Variables[0] (_TargetCurrentHp) || Constants[0] (1) || SUB || RETURN",
            "displayLines": "(_TargetCurrentHp - 1)",
            "constants": [
              1
            ],
            "variables": [
              "_TargetCurrentHp"
            ]
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (_TargetCurrentHp) || Variables[1] (_Skill05_LoseHpRatio) || MUL || Constants[0] (3) || DIV || RETURN",
              "displayLines": "((_TargetCurrentHp * _Skill05_LoseHpRatio) / 3)",
              "constants": [
                3
              ],
              "variables": [
                "_TargetCurrentHp",
                "_Skill05_LoseHpRatio"
              ]
            },
            "cantKill": true,
            "dmgFormulaFinal": "Converted DMG Base",
            "HitSplit": 0.25,
            "Toughness": null,
            "Tags": null,
            "behaviorTag": "DirectlyLoseHpHit",
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Pollux Slumber Target 2}} + {{Pollux Slumber Target 3}}"
      },
      "ifTargetFound": [
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "variableName": "_TargetCurrentHp",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_TargetCurrentHp",
          "value": {
            "operator": "Variables[0] (_TargetCurrentHp) || Constants[0] (1) || SUB || RETURN",
            "displayLines": "(_TargetCurrentHp - 1)",
            "constants": [
              1
            ],
            "variables": [
              "_TargetCurrentHp"
            ]
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (_TargetCurrentHp) || Variables[1] (_Skill05_LoseHpRatio) || MUL || Constants[0] (3) || DIV || RETURN",
              "displayLines": "((_TargetCurrentHp * _Skill05_LoseHpRatio) / 3)",
              "constants": [
                3
              ],
              "variables": [
                "_TargetCurrentHp",
                "_Skill05_LoseHpRatio"
              ]
            },
            "cantKill": true,
            "dmgFormulaFinal": "Converted DMG Base",
            "HitSplit": 0.25,
            "Toughness": null,
            "Tags": null,
            "behaviorTag": "DirectlyLoseHpHit",
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Pollux Slumber Target 3}} + {{Pollux Slumber Target 4}}"
      },
      "ifTargetFound": [
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "variableName": "_TargetCurrentHp",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_TargetCurrentHp",
          "value": {
            "operator": "Variables[0] (_TargetCurrentHp) || Constants[0] (1) || SUB || RETURN",
            "displayLines": "(_TargetCurrentHp - 1)",
            "constants": [
              1
            ],
            "variables": [
              "_TargetCurrentHp"
            ]
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (_TargetCurrentHp) || Variables[1] (_Skill05_LoseHpRatio) || MUL || Constants[0] (2) || DIV || RETURN",
              "displayLines": "((_TargetCurrentHp * _Skill05_LoseHpRatio) / 2)",
              "constants": [
                2
              ],
              "variables": [
                "_TargetCurrentHp",
                "_Skill05_LoseHpRatio"
              ]
            },
            "cantKill": true,
            "dmgFormulaFinal": "Converted DMG Base",
            "HitSplit": 0.25,
            "Toughness": null,
            "Tags": null,
            "behaviorTag": "DirectlyLoseHpHit",
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Pollux Slumber Target 1}} + {{Pollux Slumber Target 2}}"
      },
      "ifTargetFound": [
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "variableName": "_TargetCurrentHp",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_TargetCurrentHp",
          "value": {
            "operator": "Variables[0] (_TargetCurrentHp) || Constants[0] (1) || SUB || RETURN",
            "displayLines": "(_TargetCurrentHp - 1)",
            "constants": [
              1
            ],
            "variables": [
              "_TargetCurrentHp"
            ]
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (_TargetCurrentHp) || Variables[1] (_Skill05_LoseHpRatio) || MUL || Constants[0] (2) || DIV || RETURN",
              "displayLines": "((_TargetCurrentHp * _Skill05_LoseHpRatio) / 2)",
              "constants": [
                2
              ],
              "variables": [
                "_TargetCurrentHp",
                "_Skill05_LoseHpRatio"
              ]
            },
            "cantKill": true,
            "dmgFormulaFinal": "Converted DMG Base",
            "HitSplit": 0.25,
            "Toughness": null,
            "Tags": null,
            "behaviorTag": "DirectlyLoseHpHit",
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Pollux Slumber Target 2}} + {{Pollux Slumber Target 3}}"
      },
      "ifTargetFound": [
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "variableName": "_TargetCurrentHp",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_TargetCurrentHp",
          "value": {
            "operator": "Variables[0] (_TargetCurrentHp) || Constants[0] (1) || SUB || RETURN",
            "displayLines": "(_TargetCurrentHp - 1)",
            "constants": [
              1
            ],
            "variables": [
              "_TargetCurrentHp"
            ]
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (_TargetCurrentHp) || Variables[1] (_Skill05_LoseHpRatio) || MUL || RETURN",
              "displayLines": "(_TargetCurrentHp * _Skill05_LoseHpRatio)",
              "constants": [],
              "variables": [
                "_TargetCurrentHp",
                "_Skill05_LoseHpRatio"
              ]
            },
            "cantKill": true,
            "dmgFormulaFinal": "Converted DMG Base",
            "HitSplit": 0.25,
            "Toughness": null,
            "Tags": null,
            "behaviorTag": "DirectlyLoseHpHit",
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Pollux Slumber Target 1}} + {{Pollux Slumber Target 4}}"
      },
      "ifTargetFound": [
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "variableName": "_TargetCurrentHp",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_TargetCurrentHp",
          "value": {
            "operator": "Variables[0] (_TargetCurrentHp) || Constants[0] (1) || SUB || RETURN",
            "displayLines": "(_TargetCurrentHp - 1)",
            "constants": [
              1
            ],
            "variables": [
              "_TargetCurrentHp"
            ]
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (_TargetCurrentHp) || Variables[1] (_Skill05_LoseHpRatio) || MUL || RETURN",
              "displayLines": "(_TargetCurrentHp * _Skill05_LoseHpRatio)",
              "constants": [],
              "variables": [
                "_TargetCurrentHp",
                "_Skill05_LoseHpRatio"
              ]
            },
            "cantKill": true,
            "dmgFormulaFinal": "Converted DMG Base",
            "HitSplit": 0.25,
            "Toughness": null,
            "Tags": null,
            "behaviorTag": "DirectlyLoseHpHit",
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        }
      ]
    },
    "Trigger: Attack End",
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Player Team(Exclude Memosprites)}}"
      },
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "Monster_W4_Pollux_ThirstBlood[<span class=\"descriptionNumberColor\">Hastened Death</span>]",
        "invertCondition": true
      },
      "ifTargetFound": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "Monster_W4_Pollux_ThirstBlood[<span class=\"descriptionNumberColor\">Hastened Death</span>]",
          "valuePerStack": {
            "MDF_DamagePercentage": {
              "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
              "displayLines": "{[PassiveSkill01[1]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkill01[1]]}"
              ]
            },
            "MDF_DamageHpAddedRatio": {
              "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
              "displayLines": "{[PassiveSkill01[0]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkill01[0]]}"
              ]
            }
          }
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
        "modifier": "Monster_W4_Pollux_Strengthen[<span class=\"descriptionNumberColor\">Fragrance of Death</span>]",
        "invertCondition": true
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team(Exclude Memosprites)}}"
          },
          "modifier": "Monster_W4_Pollux_BloodRange[<span class=\"descriptionNumberColor\">Indulging Slumber</span>]",
          "valuePerStack": {
            "_HpLimitRatio": {
              "operator": "Variables[0] ({[Skill05[4]]}) || RETURN",
              "displayLines": "{[Skill05[4]]}",
              "constants": [],
              "variables": [
                "{[Skill05[4]]}"
              ]
            },
            "_FatigueRatio": {
              "operator": "Variables[0] ({[Skill05[5]]}) || RETURN",
              "displayLines": "{[Skill05[5]]}",
              "constants": [],
              "variables": [
                "{[Skill05[5]]}"
              ]
            }
          }
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
        "modifier": "Monster_W4_Pollux_Strengthen[<span class=\"descriptionNumberColor\">Fragrance of Death</span>]",
        "invertCondition": true
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W4_Pollux_Strengthen[<span class=\"descriptionNumberColor\">Fragrance of Death</span>]",
          "valuePerStack": {
            "MDF_ShowValue1": {
              "operator": "Variables[0] ({[Skill05[0]]}) || RETURN",
              "displayLines": "{[Skill05[0]]}",
              "constants": [],
              "variables": [
                "{[Skill05[0]]}"
              ]
            },
            "MDF_SpeedUpRatio": {
              "operator": "Variables[0] ({[Skill05[0]]}) || RETURN",
              "displayLines": "{[Skill05[0]]}",
              "constants": [],
              "variables": [
                "{[Skill05[0]]}"
              ]
            }
          }
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "whenAdded": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Modifier_Monster_W4_Pollux_B_HardLockHp_BFAbility05",
      "valuePerStack": {
        "MDF_LockHp": {
          "operator": "Variables[0] (MIN) || Constants[0] (0.9) || Variables[1] ({[PassiveSkill02[5]]}) || Constants[1] (1.2) || MUL || PARAM_2 || FUNCTION || RETURN",
          "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MIN</span>(0.9, ({[PassiveSkill02[5]]} * 1.2))",
          "constants": [
            0.9,
            1.2
          ],
          "variables": [
            "MIN",
            "{[PassiveSkill02[5]]}"
          ]
        }
      }
    }
  ],
  "references": []
}