const configAbility = {
  "fileName": "JingYuan_JingYuan_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"2081826421\">JingYuan_BattleEvent_ATKCount</a>[<span class=\"descriptionNumberColor\">Prana Extirpated</span>]",
      "stackLimit": {
        "operator": "Variables[0] (10) || RETURN",
        "displayLines": "10",
        "constants": [],
        "variables": [
          10
        ]
      },
      "addStacksPerTrigger": {
        "operator": "Variables[0] (2) || RETURN",
        "displayLines": "2",
        "constants": [],
        "variables": [
          2
        ]
      }
    },
    {
      "name": "Define Custom Variable with Modifier Values",
      "valueType": "Layer",
      "variableName": "EnergyBar_ATKCount",
      "modifierName": "<a class=\"gModGreen\" id=\"2081826421\">JingYuan_BattleEvent_ATKCount</a>[<span class=\"descriptionNumberColor\">Prana Extirpated</span>]",
      "multiplier": 1
    },
    {
      "name": "Define Custom Variable",
      "variableName": "EnergyBar_ATKCountSum",
      "value": {
        "operator": "Variables[0] (EnergyBar_ATKCount) || Variables[1] (EnergyBar_UltraATKCount) || ADD || RETURN",
        "displayLines": "(EnergyBar_ATKCount + EnergyBar_UltraATKCount)",
        "constants": [],
        "variables": [
          "EnergyBar_ATKCount",
          "EnergyBar_UltraATKCount"
        ]
      }
    },
    {
      "name": "Update Displayed Energy Bar",
      "value": {
        "operator": "Variables[0] (EnergyBar_ATKCountSum) || RETURN",
        "displayLines": "EnergyBar_ATKCountSum",
        "constants": [],
        "variables": [
          "EnergyBar_ATKCountSum"
        ]
      },
      "maximum": {
        "operator": "Variables[0] (10) || RETURN",
        "displayLines": "10",
        "constants": [],
        "variables": [
          10
        ]
      },
      "assignState": "True",
      "priorState": "Normal",
      "bar#": 4,
      "cooldown": 0
    },
    {
      "name": "Show Attack Time",
      "time": {
        "operator": "Variables[0] (EnergyBar_ATKCount) || RETURN",
        "displayLines": "EnergyBar_ATKCount",
        "constants": [],
        "variables": [
          "EnergyBar_ATKCount"
        ]
      },
      "enhanced": {
        "operator": "Variables[0] (EnergyBar_UltraATKCount) || RETURN",
        "displayLines": "EnergyBar_UltraATKCount",
        "constants": [],
        "variables": [
          "EnergyBar_UltraATKCount"
        ]
      },
      "on": null,
      "show": true
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster's Self-Made Battle-Events}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1141770667\">JingYuan_BattleEvent_ATKCountShowText</a>",
      "valuePerStack": {
        "ATKCount": {
          "operator": "Variables[0] (EnergyBar_ATKCount) || RETURN",
          "displayLines": "EnergyBar_ATKCount",
          "constants": [],
          "variables": [
            "EnergyBar_ATKCount"
          ]
        }
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster's Self-Made Battle-Events}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1762822846\">JingYuan_BattleEvent_SpeedUp</a>",
      "stackLimit": {
        "operator": "Variables[0] (10) || Variables[1] (3) || SUB || RETURN",
        "displayLines": "(10 - 3)",
        "constants": [],
        "variables": [
          10,
          3
        ]
      },
      "valuePerStack": {
        "MDF_PropertyValue": {
          "operator": "Variables[0] (10) || RETURN",
          "displayLines": "10",
          "constants": [],
          "variables": [
            10
          ]
        }
      },
      "addStacksPerTrigger": {
        "operator": "Variables[0] (2) || RETURN",
        "displayLines": "2",
        "constants": [],
        "variables": [
          2
        ]
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "AttackScaling": {
        "DamageType": "Thunder",
        "Damage": {
          "operator": "Variables[0] (1) || RETURN",
          "displayLines": "1",
          "constants": [],
          "variables": [
            1
          ]
        },
        "HitSplit": 0.4,
        "Toughness": {
          "operator": "Variables[0] (AOE Toughness Value) || RETURN",
          "displayLines": "AOE Toughness Value",
          "constants": [],
          "variables": [
            "AOE Toughness Value"
          ]
        },
        "Tags": null,
        "attackType": "Skill",
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "searchRandom": true,
      "includeDyingTargets": true,
      "ifTargetFound": [
        {
          "name": "Random Event",
          "odds": [
            0.33,
            0.33,
            0.34
          ],
          "execute": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "operator": "Variables[0] (1) || RETURN",
                  "displayLines": "1",
                  "constants": [],
                  "variables": [
                    1
                  ]
                },
                "HitSplit": 0.3,
                "Toughness": {
                  "operator": "Variables[0] (AOE Toughness Value) || RETURN",
                  "displayLines": "AOE Toughness Value",
                  "constants": [],
                  "variables": [
                    "AOE Toughness Value"
                  ]
                },
                "Tags": null,
                "attackType": "Skill"
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "operator": "Variables[0] (1) || RETURN",
                  "displayLines": "1",
                  "constants": [],
                  "variables": [
                    1
                  ]
                },
                "HitSplit": 0.3,
                "Toughness": {
                  "operator": "Variables[0] (AOE Toughness Value) || RETURN",
                  "displayLines": "AOE Toughness Value",
                  "constants": [],
                  "variables": [
                    "AOE Toughness Value"
                  ]
                },
                "Tags": null,
                "attackType": "Skill"
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "operator": "Variables[0] (1) || RETURN",
                  "displayLines": "1",
                  "constants": [],
                  "variables": [
                    1
                  ]
                },
                "HitSplit": 0.3,
                "Toughness": {
                  "operator": "Variables[0] (AOE Toughness Value) || RETURN",
                  "displayLines": "AOE Toughness Value",
                  "constants": [],
                  "variables": [
                    "AOE Toughness Value"
                  ]
                },
                "Tags": null,
                "attackType": "Skill"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Update Energy",
      "on": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "valuePercent": 0.3,
      "ofAbilitySplit": true,
      "isFixed": "* ERR"
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "searchRandom": true,
      "includeDyingTargets": true,
      "ifTargetFound": [
        {
          "name": "Random Event",
          "odds": [
            0.33,
            0.33,
            0.34
          ],
          "execute": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "operator": "Variables[0] (1) || RETURN",
                  "displayLines": "1",
                  "constants": [],
                  "variables": [
                    1
                  ]
                },
                "HitSplit": 0.3,
                "Toughness": {
                  "operator": "Variables[0] (AOE Toughness Value) || RETURN",
                  "displayLines": "AOE Toughness Value",
                  "constants": [],
                  "variables": [
                    "AOE Toughness Value"
                  ]
                },
                "Tags": null,
                "attackType": "Skill"
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "operator": "Variables[0] (1) || RETURN",
                  "displayLines": "1",
                  "constants": [],
                  "variables": [
                    1
                  ]
                },
                "HitSplit": 0.3,
                "Toughness": {
                  "operator": "Variables[0] (AOE Toughness Value) || RETURN",
                  "displayLines": "AOE Toughness Value",
                  "constants": [],
                  "variables": [
                    "AOE Toughness Value"
                  ]
                },
                "Tags": null,
                "attackType": "Skill"
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "operator": "Variables[0] (1) || RETURN",
                  "displayLines": "1",
                  "constants": [],
                  "variables": [
                    1
                  ]
                },
                "HitSplit": 0.3,
                "Toughness": {
                  "operator": "Variables[0] (AOE Toughness Value) || RETURN",
                  "displayLines": "AOE Toughness Value",
                  "constants": [],
                  "variables": [
                    "AOE Toughness Value"
                  ]
                },
                "Tags": null,
                "attackType": "Skill"
              }
            }
          ]
        }
      ]
    },
    "Trigger: Attack End",
    {
      "name": "Update Energy",
      "on": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "valuePercent": 0.3,
      "ofAbilitySplit": true,
      "isFixed": "* ERR"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "War Marshal"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-110303717\">JingYuan_Tree03_CriticalChanceUp</a>[<span class=\"descriptionNumberColor\">CRIT Rate Boost</span>]",
          "duration": {
            "operator": "Variables[0] (2) || RETURN",
            "displayLines": "2",
            "constants": [],
            "variables": [
              2
            ]
          },
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (0.1) || RETURN",
              "displayLines": "0.1",
              "constants": [],
              "variables": [
                0.1
              ]
            }
          }
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "references": []
}