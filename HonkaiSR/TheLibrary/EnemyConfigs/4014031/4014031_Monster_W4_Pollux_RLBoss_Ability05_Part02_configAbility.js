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
              "displayLines": "((_TargetCurrentHp * {[Skill05[1]]}) / 4)"
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
              "displayLines": "((_TargetCurrentHp * {[Skill05[1]]}) / 4)"
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
              "displayLines": "((_TargetCurrentHp * {[Skill05[1]]}) / 3)"
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
              "displayLines": "((_TargetCurrentHp * {[Skill05[1]]}) / 3)"
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
              "displayLines": "((_TargetCurrentHp * {[Skill05[1]]}) / 2)"
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
              "displayLines": "((_TargetCurrentHp * {[Skill05[1]]}) / 2)"
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
              "displayLines": "(_TargetCurrentHp * {[Skill05[1]]})"
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
              "displayLines": "(_TargetCurrentHp * {[Skill05[1]]})"
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
          "displayLines": "{[Skill05[0]]}"
        },
        "MDF_SpeedUpRatio": {
          "displayLines": "{[Skill05[0]]}"
        },
        "MDF_DamageUpRatio": {
          "displayLines": "{[PassiveSkill03[4]]}"
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
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}