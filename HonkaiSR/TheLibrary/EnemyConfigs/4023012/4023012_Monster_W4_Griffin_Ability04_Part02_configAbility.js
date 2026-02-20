const configAbility = {
  "fileName": "4023012_Monster_W4_Griffin_Ability04_Part02",
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
      "modifier": "<a class=\"gModGreen\" id=\"1209574560\">Enemy_W4_Griffin_UltraReady</a>"
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "AttackScaling": {
        "DamageType": "Fire",
        "Damage": {
          "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
          "displayLines": "{[Skill04[0]]}",
          "constants": [],
          "variables": [
            "{[Skill04[0]]}"
          ]
        },
        "HitSplit": 0.25,
        "Toughness": null,
        "Tags": null,
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Targets Adjacent(Blast)}}"
      },
      "AttackScaling": {
        "DamageType": "Fire",
        "Damage": {
          "operator": "Variables[0] (UnusedUnderThisBase_387) || RETURN",
          "displayLines": "UnusedUnderThisBase_387",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_387"
          ]
        },
        "HitSplit": 0.25,
        "Toughness": null,
        "Tags": null,
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "AttackScaling": {
        "DamageType": "Fire",
        "Damage": {
          "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
          "displayLines": "{[Skill04[0]]}",
          "constants": [],
          "variables": [
            "{[Skill04[0]]}"
          ]
        },
        "HitSplit": 0.25,
        "Toughness": null,
        "Tags": null,
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Targets Adjacent(Blast)}}"
      },
      "AttackScaling": {
        "DamageType": "Fire",
        "Damage": {
          "operator": "Variables[0] (UnusedUnderThisBase_387) || RETURN",
          "displayLines": "UnusedUnderThisBase_387",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_387"
          ]
        },
        "HitSplit": 0.25,
        "Toughness": null,
        "Tags": null,
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "AttackScaling": {
        "DamageType": "Fire",
        "Damage": {
          "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
          "displayLines": "{[Skill04[0]]}",
          "constants": [],
          "variables": [
            "{[Skill04[0]]}"
          ]
        },
        "HitSplit": 0.25,
        "Toughness": null,
        "Tags": null,
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Targets Adjacent(Blast)}}"
      },
      "AttackScaling": {
        "DamageType": "Fire",
        "Damage": {
          "operator": "Variables[0] (UnusedUnderThisBase_387) || RETURN",
          "displayLines": "UnusedUnderThisBase_387",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_387"
          ]
        },
        "HitSplit": 0.25,
        "Toughness": null,
        "Tags": null,
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "searchRandom": true,
      "ifTargetFound": [
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1656896295\">Enemy_W4_Unicorn_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Oronyx's Mark</span>]",
                "invertCondition": true
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"26062276\">Enemy_W4_Griffin_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Aquila's Mark</span>]",
                "invertCondition": true
              }
            ]
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Fire",
                "Damage": {
                  "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
                  "displayLines": "{[Skill04[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill04[0]]}"
                  ]
                },
                "HitSplit": 0.25,
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
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Fire",
                "Damage": {
                  "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
                  "displayLines": "{[Skill04[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill04[0]]}"
                  ]
                },
                "HitSplit": 0.25,
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
            "name": "Check Boolean Value",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "value": "ENEMIES_OBJECT_UNUSED__181"
          },
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"26062276\">Enemy_W4_Griffin_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Aquila's Mark</span>]",
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
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Ability Targets Adjacent(Blast)}}"
      },
      "searchRandom": true,
      "ifTargetFound": [
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1656896295\">Enemy_W4_Unicorn_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Oronyx's Mark</span>]",
                "invertCondition": true
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"26062276\">Enemy_W4_Griffin_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Aquila's Mark</span>]",
                "invertCondition": true
              }
            ]
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Fire",
                "Damage": {
                  "operator": "Variables[0] (UnusedUnderThisBase_387) || RETURN",
                  "displayLines": "UnusedUnderThisBase_387",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_387"
                  ]
                },
                "HitSplit": 0.25,
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
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Fire",
                "Damage": {
                  "operator": "Variables[0] (UnusedUnderThisBase_387) || RETURN",
                  "displayLines": "UnusedUnderThisBase_387",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_387"
                  ]
                },
                "HitSplit": 0.25,
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
            "name": "Check Boolean Value",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "value": "ENEMIES_OBJECT_UNUSED__181"
          },
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"26062276\">Enemy_W4_Griffin_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Aquila's Mark</span>]",
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
    {
      "name": "IF",
      "conditions": {
        "name": "Check Boolean Value",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "value": "ENEMIES_OBJECT_UNUSED__181"
      },
      "passed": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{ST and Blast}}"
          },
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"263350627\">Enemy_XP_Elite01_Burn</a>[<span class=\"descriptionNumberColor\">Enkindle</span>]"
          },
          "ifTargetFound": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Fire",
                "Damage": {
                  "operator": "Variables[0] (UnusedUnderThisBase_378) || RETURN",
                  "displayLines": "UnusedUnderThisBase_378",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_378"
                  ]
                },
                "Toughness": null,
                "Tags": null
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
      "modifier": "<a class=\"gModGreen\" id=\"-2109418688\">Enemy_W4_Griffin_SignOnAvatar</a>[<span class=\"descriptionNumberColor\">Lock On</span>]",
      "onlyRemoveOwnersInstance": true
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
    },
    "Trigger: Ability End"
  ],
  "references": []
}