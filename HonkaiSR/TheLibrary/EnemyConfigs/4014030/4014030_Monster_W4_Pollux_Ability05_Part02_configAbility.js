const configAbility = {
  "fileName": "4014030_Monster_W4_Pollux_Ability05_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "IF",
      "conditions": {
        "name": "OR",
        "conditionList": [
          {
            "name": "Compare: Variable",
            "value1": "HP_Bars_Remaining",
            "compareType": ">=",
            "value2": 2
          },
          {
            "name": "Enemy ID",
            "ID": 4014033,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "Castorice, Hand of Shadow",
            "isBaseCompare": true
          }
        ]
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
            "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__41) || RETURN",
            "displayLines": "ENEMIES_OBJECT_UNUSED__41",
            "constants": [],
            "variables": [
              "ENEMIES_OBJECT_UNUSED__41"
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
            "DamageFlat": {
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
            "DamageFlat": {
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
            "DamageFlat": {
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
            "DamageFlat": {
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
            "DamageFlat": {
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
            "DamageFlat": {
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
            "DamageFlat": {
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
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Enemy ID",
            "ID": 4014032,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "Pollux, Netherwing Husk, Ferry of Souls"
          },
          {
            "name": "Compare: Variable",
            "value1": "_WorldLevel",
            "compareType": "<",
            "value2": 6
          }
        ]
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team(Exclude Memosprites)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-84648127\">Monster_W4_Pollux_BloodRange</a>[<span class=\"descriptionNumberColor\">Indulging Slumber</span>]",
          "valuePerStack": {
            "_HpLimitRatio": {
              "operator": "Variables[0] (UnusedUnderThisBase_74) || RETURN",
              "displayLines": "UnusedUnderThisBase_74",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_74"
              ]
            },
            "_FatigueRatio": {
              "operator": "Variables[0] (UnusedUnderThisBase_75) || RETURN",
              "displayLines": "UnusedUnderThisBase_75",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_75"
              ]
            }
          }
        }
      ],
      "failed": [
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
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Enemy ID",
            "ID": 4014032,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "Pollux, Netherwing Husk, Ferry of Souls"
          },
          {
            "name": "Compare: Variable",
            "value1": "_WorldLevel",
            "compareType": "<",
            "value2": 6
          }
        ]
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1709215218\">Monster_W4_Pollux_Strengthen</a>[<span class=\"descriptionNumberColor\">Fragrance of Death</span>]",
          "valuePerStack": {
            "MDF_ShowValue1": {
              "operator": "Variables[0] (UnusedUnderThisBase_82) || RETURN",
              "displayLines": "UnusedUnderThisBase_82",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_82"
              ]
            },
            "MDF_SpeedUpRatio": {
              "operator": "Variables[0] (UnusedUnderThisBase_82) || RETURN",
              "displayLines": "UnusedUnderThisBase_82",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_82"
              ]
            }
          }
        }
      ],
      "failed": [
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
            }
          }
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
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 1
          },
          {
            "name": "Enemy ID",
            "ID": 4014033,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "Castorice, Hand of Shadow",
            "isBaseCompare": true
          }
        ]
      },
      "failed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "StoryMode",
            "compareType": "=",
            "value2": 1
          }
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
            "value1": "StoryMode",
            "compareType": "=",
            "value2": 1
          },
          {
            "name": "Compare: Variable",
            "value1": "_StoryMsg",
            "compareType": "=",
            "value2": 0
          }
        ]
      },
      "passed": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1061433740\">Monster_W4_Pollux_StoryMode_SpecailAbility05</a>"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_StorySimulationSpeed",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_StoryMsg",
          "value": 1
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "references": []
}