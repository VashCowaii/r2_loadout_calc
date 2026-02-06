const configAbility = {
  "fileName": "4012076_Monster_W4_Pollux_IF_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
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
            "target": "{{Player Team All}}"
          },
          "searchRandom": true,
          "maxTargets": 3,
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Monster_W4_Pollux_Ability03_Mark"
            }
          ]
        }
      ],
      "failed": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemies by Aggro}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Monster_W4_Pollux_Ability03_Mark"
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "searchRandom": true,
          "maxTargets": 2,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "Monster_W4_Pollux_Ability03_Mark",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Monster_W4_Pollux_Ability03_Mark"
            }
          ]
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Target Count",
        "target": {
          "name": "Target Name",
          "target": "{{Pollox Mourning Departed Target}}"
        },
        "compareType": "=",
        "value2": 1,
        "livingTargets": true
      },
      "failed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target Count",
            "target": {
              "name": "Target Name",
              "target": "{{Pollox Mourning Departed Target}}"
            },
            "compareType": "=",
            "value2": 2,
            "livingTargets": true
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Target Count",
        "target": {
          "name": "Target Name",
          "target": "{{Pollox Mourning Departed Target}}"
        },
        "compareType": "=",
        "value2": 1,
        "livingTargets": true
      },
      "failed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target Count",
            "target": {
              "name": "Target Name",
              "target": "{{Pollox Mourning Departed Target}}"
            },
            "compareType": "=",
            "value2": 2,
            "livingTargets": true
          }
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Pollox Mourning Departed Target}}"
      },
      "ifTargetFound": [
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "variableName": "_MaxHP",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
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
              "operator": "Variables[0] (_MaxHP) || Variables[1] (UnusedUnderThisBase_64) || MUL || Constants[0] (0.15) || MUL || RETURN",
              "displayLines": "((_MaxHP * UnusedUnderThisBase_64) * 0.15)",
              "constants": [
                0.15
              ],
              "variables": [
                "_MaxHP",
                "UnusedUnderThisBase_64"
              ]
            },
            "dmgFormulaFinal": "Converted DMG Base",
            "Toughness": null,
            "Tags": null,
            "behaviorTag": "DirectlyLoseHpHit",
            "attackType": "Basic ATK",
            "EnergyGainPercent": "15%"
          }
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Pollox Mourning Departed Target}}"
      },
      "ifTargetFound": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Pollox Mourning Departed Target}}"
          }
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Pollox Mourning Departed Target}}"
      },
      "ifTargetFound": [
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "variableName": "_MaxHP",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
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
              "operator": "Variables[0] (_MaxHP) || Variables[1] (UnusedUnderThisBase_64) || MUL || Constants[0] (0.15) || MUL || RETURN",
              "displayLines": "((_MaxHP * UnusedUnderThisBase_64) * 0.15)",
              "constants": [
                0.15
              ],
              "variables": [
                "_MaxHP",
                "UnusedUnderThisBase_64"
              ]
            },
            "dmgFormulaFinal": "Converted DMG Base",
            "Toughness": null,
            "Tags": null,
            "behaviorTag": "DirectlyLoseHpHit",
            "attackType": "Basic ATK",
            "EnergyGainPercent": "15%"
          }
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Pollox Mourning Departed Target}}"
      }
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Pollox Mourning Departed Target}}"
      },
      "ifTargetFound": [
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "variableName": "_MaxHP",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
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
              "operator": "Variables[0] (_MaxHP) || Variables[1] (UnusedUnderThisBase_64) || MUL || Constants[0] (0.15) || MUL || RETURN",
              "displayLines": "((_MaxHP * UnusedUnderThisBase_64) * 0.15)",
              "constants": [
                0.15
              ],
              "variables": [
                "_MaxHP",
                "UnusedUnderThisBase_64"
              ]
            },
            "dmgFormulaFinal": "Converted DMG Base",
            "Toughness": null,
            "Tags": null,
            "behaviorTag": "DirectlyLoseHpHit",
            "attackType": "Basic ATK",
            "EnergyGainPercent": "15%"
          }
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Pollox Mourning Departed Target}}"
      },
      "ifTargetFound": [
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "variableName": "_MaxHP",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
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
              "operator": "Variables[0] (_MaxHP) || Variables[1] (UnusedUnderThisBase_64) || MUL || Constants[0] (0.15) || MUL || RETURN",
              "displayLines": "((_MaxHP * UnusedUnderThisBase_64) * 0.15)",
              "constants": [
                0.15
              ],
              "variables": [
                "_MaxHP",
                "UnusedUnderThisBase_64"
              ]
            },
            "dmgFormulaFinal": "Converted DMG Base",
            "Toughness": null,
            "Tags": null,
            "behaviorTag": "DirectlyLoseHpHit",
            "attackType": "Basic ATK",
            "EnergyGainPercent": "15%"
          }
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Pollox Mourning Departed Target}}"
      },
      "ifTargetFound": [
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "variableName": "_MaxHP",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
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
              "operator": "Variables[0] (_MaxHP) || Variables[1] (UnusedUnderThisBase_64) || MUL || Constants[0] (0.15) || MUL || RETURN",
              "displayLines": "((_MaxHP * UnusedUnderThisBase_64) * 0.15)",
              "constants": [
                0.15
              ],
              "variables": [
                "_MaxHP",
                "UnusedUnderThisBase_64"
              ]
            },
            "dmgFormulaFinal": "Converted DMG Base",
            "Toughness": null,
            "Tags": null,
            "behaviorTag": "DirectlyLoseHpHit",
            "attackType": "Basic ATK",
            "EnergyGainPercent": "15%"
          }
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Pollox Mourning Departed Target}}"
      },
      "ifTargetFound": [
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "variableName": "_MaxHP",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
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
              "operator": "Variables[0] (_MaxHP) || Variables[1] (UnusedUnderThisBase_64) || MUL || Constants[0] (0.25) || MUL || RETURN",
              "displayLines": "((_MaxHP * UnusedUnderThisBase_64) * 0.25)",
              "constants": [
                0.25
              ],
              "variables": [
                "_MaxHP",
                "UnusedUnderThisBase_64"
              ]
            },
            "dmgFormulaFinal": "Converted DMG Base",
            "Toughness": null,
            "Tags": null,
            "behaviorTag": "DirectlyLoseHpHit",
            "attackType": "Basic ATK",
            "EnergyGainPercent": "25%"
          }
        }
      ]
    },
    "Trigger: Attack End",
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Pollox Mourning Departed Target}}"
      },
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "Enemy_W4_Pollux_IF_ThirstBlood[<span class=\"descriptionNumberColor\">Hastened Death</span>]",
        "invertCondition": true
      },
      "ifTargetFound": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "Enemy_W4_Pollux_IF_ThirstBlood[<span class=\"descriptionNumberColor\">Hastened Death</span>]",
          "valuePerStack": {
            "MDF_DamagePercentage": {
              "operator": "Variables[0] (UnusedUnderThisBase_86) || RETURN",
              "displayLines": "UnusedUnderThisBase_86",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_86"
              ]
            },
            "MDF_DamageHpAddedRatio": {
              "operator": "Variables[0] (UnusedUnderThisBase_87) || RETURN",
              "displayLines": "UnusedUnderThisBase_87",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_87"
              ]
            }
          }
        }
      ]
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "TaskList_Monster_W4_Pollux_IF_Strengthen_EggAbsorb_FX"
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "TaskList_Monster_W4_Pollux_IF_Strengthen_EggAbsorb"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "modifier": "Monster_W4_Pollux_Ability03_Mark"
    },
    "Trigger: Ability End"
  ],
  "references": []
}