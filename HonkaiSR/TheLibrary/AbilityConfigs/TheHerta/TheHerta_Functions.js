const configAbility = {
  "fileName": "TheHerta_Functions",
  "abilityType": "Char. Functions",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "length": 1,
  "parse": [
    {
      "name": "CharacterFunctions",
      "functionName": "TheHerta_SKL02",
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "TheHerta_Passive_MagicMark[<span class=\"descriptionNumberColor\">Interpretation</span>]",
          "stackLimit": {
            "operator": "Variables[0] (DV_MarkMaxLayer) || RETURN",
            "displayLines": "DV_MarkMaxLayer",
            "constants": [],
            "variables": [
              "DV_MarkMaxLayer"
            ]
          },
          "addStacksPerTrigger": {
            "operator": "Variables[0] (DV_MarkAddLayer) || RETURN",
            "displayLines": "DV_MarkAddLayer",
            "constants": [],
            "variables": [
              "DV_MarkAddLayer"
            ]
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Starved Landscape of Vacua"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "TheHerta_Trace03_ExtraDamage[<span class=\"descriptionNumberColor\">Answer</span>]",
              "stackLimit": {
                "operator": "Variables[0] (_SkillTree03_MaxCount) || RETURN",
                "displayLines": "_SkillTree03_MaxCount",
                "constants": [],
                "variables": [
                  "_SkillTree03_MaxCount"
                ]
              },
              "addStacksPerTrigger": {
                "operator": "Variables[0] (DV_MarkAddLayer) || RETURN",
                "displayLines": "DV_MarkAddLayer",
                "constants": [],
                "variables": [
                  "DV_MarkAddLayer"
                ]
              }
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{ST and Blast}}"
          },
          "modifier": "TheHerta_SKL02_Mark_Pre"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] (DV_DamageRatio1) || RETURN",
              "displayLines": "DV_DamageRatio1",
              "constants": [],
              "variables": [
                "DV_DamageRatio1"
              ]
            },
            "Toughness": {
              "displayLines": 15
            },
            "Tags": null,
            "hitOwner": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "EnergyGainPercent": "30%"
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Sequence",
            "Sequence": [
              {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              {
                "name": "Target Filter",
                "conditions": {
                  "name": "Has Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "TheHerta_SKL02_Mark_Pre",
                  "includePreDeath": true
                }
              }
            ]
          },
          "modifier": "TheHerta_SKL02_Mark"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "searchRandom": true,
          "includeDyingTargets": true,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "TheHerta_SKL02_Mark",
            "includePreDeath": true
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Targets Adjacent to Parameter Target}}"
              },
              "modifier": "TheHerta_SKL02_Mark_Pre"
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "searchRandom": true,
          "includeDyingTargets": true,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "TheHerta_SKL02_Mark",
            "includePreDeath": true
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Copy",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variable": "DV_HitCount",
              "target2": null,
              "variable2": "DV_OnHitCount"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "target2": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                }
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Ice",
                    "Damage": {
                      "operator": "Variables[0] (DV_DamageRatio1) || RETURN",
                      "displayLines": "DV_DamageRatio1",
                      "constants": [],
                      "variables": [
                        "DV_DamageRatio1"
                      ]
                    },
                    "Toughness": {
                      "displayLines": 15
                    },
                    "Tags": null,
                    "hitOwner": {
                      "name": "Target Name",
                      "target": "{{Ability Target(ST)}}"
                    },
                    "EnergyGainPercent": "30%"
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
                    "DamageType": "Ice",
                    "Damage": {
                      "operator": "Variables[0] (DV_DamageRatio1) || RETURN",
                      "displayLines": "DV_DamageRatio1",
                      "constants": [],
                      "variables": [
                        "DV_DamageRatio1"
                      ]
                    },
                    "Toughness": {
                      "displayLines": 15
                    },
                    "Tags": null,
                    "hitOwner": {
                      "name": "Target Name",
                      "target": "{{Ability Target(ST)}}"
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Sequence",
            "Sequence": [
              {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              {
                "name": "Target Filter",
                "conditions": {
                  "name": "Has Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "TheHerta_SKL02_Mark_Pre",
                  "includePreDeath": true
                }
              }
            ]
          },
          "modifier": "TheHerta_SKL02_Mark"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "searchRandom": true,
          "includeDyingTargets": true,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "TheHerta_SKL02_Mark",
            "includePreDeath": true
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Targets Adjacent to Parameter Target}}"
              },
              "modifier": "TheHerta_SKL02_Mark_Pre"
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "maxTargets": 5,
          "ifTargetFound": [
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "scope": "TargetEntity",
              "variableName": "DV_HitCount",
              "value": 0
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "searchRandom": true,
          "includeDyingTargets": true,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "TheHerta_SKL02_Mark",
            "includePreDeath": true
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable",
              "variableName": "DV_MainTargetFinalDmgRatio",
              "value": {
                "operator": "Variables[0] (DV_DamageRatio1) || RETURN",
                "displayLines": "DV_DamageRatio1",
                "constants": [],
                "variables": [
                  "DV_DamageRatio1"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "DV_OtherTargetFinalDmgRatio",
              "value": {
                "operator": "Variables[0] (DV_DamageRatio1) || RETURN",
                "displayLines": "DV_DamageRatio1",
                "constants": [],
                "variables": [
                  "DV_DamageRatio1"
                ]
              }
            },
            {
              "name": "Define Custom Variable with Copy",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variable": "DV_HitCount",
              "target2": null,
              "variable2": "DV_OnHitCount"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "target2": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                }
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Ice",
                    "Damage": {
                      "operator": "Variables[0] (DV_MainTargetFinalDmgRatio) || RETURN",
                      "displayLines": "DV_MainTargetFinalDmgRatio",
                      "constants": [],
                      "variables": [
                        "DV_MainTargetFinalDmgRatio"
                      ]
                    },
                    "Toughness": {
                      "displayLines": 15
                    },
                    "Tags": null,
                    "hitOwner": {
                      "name": "Target Name",
                      "target": "{{Ability Target(ST)}}"
                    },
                    "EnergyGainPercent": "40%"
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
                    "DamageType": "Ice",
                    "Damage": {
                      "operator": "Variables[0] (DV_OtherTargetFinalDmgRatio) || RETURN",
                      "displayLines": "DV_OtherTargetFinalDmgRatio",
                      "constants": [],
                      "variables": [
                        "DV_OtherTargetFinalDmgRatio"
                      ]
                    },
                    "Toughness": {
                      "displayLines": 15
                    },
                    "Tags": null,
                    "hitOwner": {
                      "name": "Target Name",
                      "target": "{{Ability Target(ST)}}"
                    }
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "references": []
}