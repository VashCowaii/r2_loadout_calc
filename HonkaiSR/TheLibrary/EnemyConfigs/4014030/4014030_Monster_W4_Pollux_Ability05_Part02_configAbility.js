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
          "value": 7,
          "variableName": "AIFlag"
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "_TempAIFlag"
          },
          "variableName": "AIFlag"
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
          "variableName": "_TargetCurrentHp",
          "readTarget": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "(_TargetCurrentHp - 1)"
          },
          "variableName": "_TargetCurrentHp"
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
              "displayLines": "((_TargetCurrentHp * _Skill05_LoseHpRatio) / 4)"
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
          "variableName": "_TargetCurrentHp",
          "readTarget": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "(_TargetCurrentHp - 1)"
          },
          "variableName": "_TargetCurrentHp"
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
              "displayLines": "((_TargetCurrentHp * _Skill05_LoseHpRatio) / 4)"
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
          "variableName": "_TargetCurrentHp",
          "readTarget": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "(_TargetCurrentHp - 1)"
          },
          "variableName": "_TargetCurrentHp"
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
              "displayLines": "((_TargetCurrentHp * _Skill05_LoseHpRatio) / 3)"
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
          "variableName": "_TargetCurrentHp",
          "readTarget": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "(_TargetCurrentHp - 1)"
          },
          "variableName": "_TargetCurrentHp"
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
              "displayLines": "((_TargetCurrentHp * _Skill05_LoseHpRatio) / 3)"
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
          "variableName": "_TargetCurrentHp",
          "readTarget": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "(_TargetCurrentHp - 1)"
          },
          "variableName": "_TargetCurrentHp"
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
              "displayLines": "((_TargetCurrentHp * _Skill05_LoseHpRatio) / 2)"
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
          "variableName": "_TargetCurrentHp",
          "readTarget": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "(_TargetCurrentHp - 1)"
          },
          "variableName": "_TargetCurrentHp"
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
              "displayLines": "((_TargetCurrentHp * _Skill05_LoseHpRatio) / 2)"
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
          "variableName": "_TargetCurrentHp",
          "readTarget": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "(_TargetCurrentHp - 1)"
          },
          "variableName": "_TargetCurrentHp"
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
              "displayLines": "(_TargetCurrentHp * _Skill05_LoseHpRatio)"
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
          "variableName": "_TargetCurrentHp",
          "readTarget": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "(_TargetCurrentHp - 1)"
          },
          "variableName": "_TargetCurrentHp"
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
              "displayLines": "(_TargetCurrentHp * _Skill05_LoseHpRatio)"
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
              "displayLines": "{[PassiveSkill01[1]]}"
            },
            "MDF_DamageHpAddedRatio": {
              "displayLines": "{[PassiveSkill01[0]]}"
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
              "displayLines": "UnusedUnderThisBase_12838"
            },
            "_FatigueRatio": {
              "displayLines": "UnusedUnderThisBase_12871"
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
              "displayLines": "{[Skill05[4]]}"
            },
            "_FatigueRatio": {
              "displayLines": "{[Skill05[5]]}"
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
              "displayLines": "UnusedUnderThisBase_12837"
            },
            "MDF_SpeedUpRatio": {
              "displayLines": "UnusedUnderThisBase_12837"
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
              "displayLines": "{[Skill05[0]]}"
            },
            "MDF_SpeedUpRatio": {
              "displayLines": "{[Skill05[0]]}"
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
            "isBaseCompare": true,
            "invertCondition": true
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
          "value": 0,
          "variableName": "_StorySimulationSpeed"
        },
        {
          "name": "Define Custom Variable",
          "value": 1,
          "variableName": "_StoryMsg"
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}