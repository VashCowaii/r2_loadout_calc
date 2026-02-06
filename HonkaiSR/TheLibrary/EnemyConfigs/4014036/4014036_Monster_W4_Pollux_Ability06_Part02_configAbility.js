const configAbility = {
  "fileName": "4014036_Monster_W4_Pollux_Ability06_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
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
            "value1": "_StorySetSpeed",
            "compareType": "=",
            "value2": 0
          }
        ]
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "_StorySimulationSpeed",
          "value": 1
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "variableName": "IsNeedFade",
      "value": 1
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Monster_W4_Pollux_FX_Ground"
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
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
              "operator": "Variables[0] (_MaxHP) || Variables[1] (IsNeedFade) || MUL || Constants[0] (4) || DIV || RETURN",
              "displayLines": "((_MaxHP * IsNeedFade) / 4)",
              "constants": [
                4
              ],
              "variables": [
                "_MaxHP",
                "IsNeedFade"
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
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
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
              "operator": "Variables[0] (_MaxHP) || Variables[1] (IsNeedFade) || MUL || Constants[0] (4) || DIV || RETURN",
              "displayLines": "((_MaxHP * IsNeedFade) / 4)",
              "constants": [
                4
              ],
              "variables": [
                "_MaxHP",
                "IsNeedFade"
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
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
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
              "operator": "Variables[0] (_MaxHP) || Variables[1] (IsNeedFade) || MUL || Constants[0] (4) || DIV || RETURN",
              "displayLines": "((_MaxHP * IsNeedFade) / 4)",
              "constants": [
                4
              ],
              "variables": [
                "_MaxHP",
                "IsNeedFade"
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
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
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
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "Monster_W4_Pollux_BloodRange[<span class=\"descriptionNumberColor\">Indulging Slumber</span>]"
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "DamageFlat": {
                  "operator": "Variables[0] (_MaxHP) || Variables[1] (_StorySimulationSpeed) || MUL || Variables[0] (_MaxHP) || Variables[2] (IsNeedFade) || MUL || Constants[0] (4) || DIV || ADD || RETURN",
                  "displayLines": "((_MaxHP * _StorySimulationSpeed) + ((_MaxHP * IsNeedFade) / 4))",
                  "constants": [
                    4
                  ],
                  "variables": [
                    "_MaxHP",
                    "_StorySimulationSpeed",
                    "IsNeedFade"
                  ]
                },
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "behaviorTag": "DirectlyLoseHpHit",
                "attackType": "Basic ATK",
                "EnergyGainPercent": "25%"
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Standard_Entangle[<span class=\"descriptionNumberColor\">Entanglement</span>]",
              "duration": {
                "operator": "Variables[0] (UnusedUnderThisBase_128) || RETURN",
                "displayLines": "UnusedUnderThisBase_128",
                "constants": [],
                "variables": [
                  "UnusedUnderThisBase_128"
                ]
              },
              "baseChance": 1,
              "valuePerStack": {
                "MDF_ActionDelayRatio": {
                  "operator": "Variables[0] (UnusedUnderThisBase_129) || RETURN",
                  "displayLines": "UnusedUnderThisBase_129",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_129"
                  ]
                },
                "Modifier_Entangle_DamagePercentage": {
                  "operator": "Variables[0] (UnusedUnderThisBase_130) || RETURN",
                  "displayLines": "UnusedUnderThisBase_130",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_130"
                  ]
                },
                "Modifier_Entangle_DamageValue": 0
              }
            }
          ],
          "failed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "DamageFlat": {
                  "operator": "Variables[0] (_MaxHP) || Variables[1] (IsNeedFade) || MUL || Constants[0] (4) || DIV || RETURN",
                  "displayLines": "((_MaxHP * IsNeedFade) / 4)",
                  "constants": [
                    4
                  ],
                  "variables": [
                    "_MaxHP",
                    "IsNeedFade"
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
        }
      ]
    },
    "Trigger: Attack End",
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
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
              "operator": "Variables[0] (UnusedUnderThisBase_124) || RETURN",
              "displayLines": "UnusedUnderThisBase_124",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_124"
              ]
            },
            "MDF_DamageHpAddedRatio": {
              "operator": "Variables[0] (UnusedUnderThisBase_123) || RETURN",
              "displayLines": "UnusedUnderThisBase_123",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_123"
              ]
            }
          }
        }
      ]
    },
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
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Monster_W4_Pollux_FX_Ground"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Monster_APShow"
    },
    {
      "name": "Define Custom Variable",
      "variableName": "IsNeedFade",
      "value": 0
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "StoryMode",
        "compareType": "=",
        "value2": 1
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "_StorySimulationSpeed",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_StorySetSpeed",
          "value": 1
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "references": []
}