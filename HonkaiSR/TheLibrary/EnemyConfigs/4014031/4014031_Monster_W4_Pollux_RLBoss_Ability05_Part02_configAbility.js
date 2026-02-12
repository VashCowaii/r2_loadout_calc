const configAbility = {
  "fileName": "4014031_Monster_W4_Pollux_RLBoss_Ability05_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "HP_Bars_Remaining",
        "compareType": "=",
        "value2": 3
      },
      "passed": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2034261592\">Monster_W4_PolluxPart_Shield</a>[<span class=\"descriptionNumberColor\">Overdue Obituary</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2034261592\">Monster_W4_PolluxPart_Shield</a>[<span class=\"descriptionNumberColor\">Overdue Obituary</span>]"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "HP_Bars_Remaining",
        "compareType": ">=",
        "value2": 2
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "AIFlag",
          "value": 7
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "variableName": "AIFlag",
          "value": {
            "operator": "Variables[0] (_TempAIFlag) || RETURN",
            "displayLines": "_TempAIFlag",
            "constants": [],
            "variables": [
              "_TempAIFlag"
            ]
          }
        }
      ]
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
            "DamageFlat": {
              "operator": "Variables[0] (_TargetCurrentHp) || Variables[1] ({[Skill05[1]]}) || MUL || Constants[0] (4) || DIV || RETURN",
              "displayLines": "((_TargetCurrentHp * {[Skill05[1]]}) / 4)",
              "constants": [
                4
              ],
              "variables": [
                "_TargetCurrentHp",
                "{[Skill05[1]]}"
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
            "DamageFlat": {
              "operator": "Variables[0] (_TargetCurrentHp) || Variables[1] ({[Skill05[1]]}) || MUL || Constants[0] (4) || DIV || RETURN",
              "displayLines": "((_TargetCurrentHp * {[Skill05[1]]}) / 4)",
              "constants": [
                4
              ],
              "variables": [
                "_TargetCurrentHp",
                "{[Skill05[1]]}"
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
            "DamageFlat": {
              "operator": "Variables[0] (_TargetCurrentHp) || Variables[1] ({[Skill05[1]]}) || MUL || Constants[0] (3) || DIV || RETURN",
              "displayLines": "((_TargetCurrentHp * {[Skill05[1]]}) / 3)",
              "constants": [
                3
              ],
              "variables": [
                "_TargetCurrentHp",
                "{[Skill05[1]]}"
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
            "DamageFlat": {
              "operator": "Variables[0] (_TargetCurrentHp) || Variables[1] ({[Skill05[1]]}) || MUL || Constants[0] (3) || DIV || RETURN",
              "displayLines": "((_TargetCurrentHp * {[Skill05[1]]}) / 3)",
              "constants": [
                3
              ],
              "variables": [
                "_TargetCurrentHp",
                "{[Skill05[1]]}"
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
            "DamageFlat": {
              "operator": "Variables[0] (_TargetCurrentHp) || Variables[1] ({[Skill05[1]]}) || MUL || Constants[0] (2) || DIV || RETURN",
              "displayLines": "((_TargetCurrentHp * {[Skill05[1]]}) / 2)",
              "constants": [
                2
              ],
              "variables": [
                "_TargetCurrentHp",
                "{[Skill05[1]]}"
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
            "DamageFlat": {
              "operator": "Variables[0] (_TargetCurrentHp) || Variables[1] ({[Skill05[1]]}) || MUL || Constants[0] (2) || DIV || RETURN",
              "displayLines": "((_TargetCurrentHp * {[Skill05[1]]}) / 2)",
              "constants": [
                2
              ],
              "variables": [
                "_TargetCurrentHp",
                "{[Skill05[1]]}"
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
            "DamageFlat": {
              "operator": "Variables[0] (_TargetCurrentHp) || Variables[1] ({[Skill05[1]]}) || MUL || RETURN",
              "displayLines": "(_TargetCurrentHp * {[Skill05[1]]})",
              "constants": [],
              "variables": [
                "_TargetCurrentHp",
                "{[Skill05[1]]}"
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
            "DamageFlat": {
              "operator": "Variables[0] (_TargetCurrentHp) || Variables[1] ({[Skill05[1]]}) || MUL || RETURN",
              "displayLines": "(_TargetCurrentHp * {[Skill05[1]]})",
              "constants": [],
              "variables": [
                "_TargetCurrentHp",
                "{[Skill05[1]]}"
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
        "modifier": "<a class=\"gModGreen\" id=\"-2024056044\">Monster_W4_Pollux_ThirstBlood</a>[<span class=\"descriptionNumberColor\">Hastened Death</span>]",
        "invertCondition": true
      },
      "ifTargetFound": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2024056044\">Monster_W4_Pollux_ThirstBlood</a>[<span class=\"descriptionNumberColor\">Hastened Death</span>]",
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
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team(Exclude Memosprites)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-84648127\">Monster_W4_Pollux_BloodRange</a>[<span class=\"descriptionNumberColor\">Indulging Slumber</span>]",
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
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1709215218\">Monster_W4_Pollux_Strengthen</a>[<span class=\"descriptionNumberColor\">Fragrance of Death</span>]",
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
        },
        "MDF_DamageUpRatio": {
          "operator": "Variables[0] ({[PassiveSkill03[4]]}) || RETURN",
          "displayLines": "{[PassiveSkill03[4]]}",
          "constants": [],
          "variables": [
            "{[PassiveSkill03[4]]}"
          ]
        }
      }
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
    "Trigger: Ability End"
  ],
  "references": []
}