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
      "functionName": "<a class=\"gTempYellow\" id=\"fun__1142002606\">TheHerta_SKL02</a>",
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]",
          "stackLimit": {
            "displayLines": "DV_MarkMaxLayer"
          },
          "addStacksPerTrigger": {
            "displayLines": "DV_MarkAddLayer"
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
              "modifier": "<a class=\"gModGreen\" id=\"1985764523\">TheHerta_Trace03_ExtraDamage</a>[<span class=\"descriptionNumberColor\">Answer</span>]",
              "stackLimit": {
                "displayLines": "_SkillTree03_MaxCount"
              },
              "addStacksPerTrigger": {
                "displayLines": "DV_MarkAddLayer"
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
          "modifier": "<a class=\"gModGreen\" id=\"-696979317\">TheHerta_SKL02_Mark_Pre</a>"
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
              "displayLines": "DV_DamageRatio1"
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
            "TargetList": [
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
                  "modifier": "<a class=\"gModGreen\" id=\"-696979317\">TheHerta_SKL02_Mark_Pre</a>",
                  "includePreDeath": true
                }
              }
            ]
          },
          "modifier": "<a class=\"gModGreen\" id=\"1940766665\">TheHerta_SKL02_Mark</a>"
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
            "modifier": "<a class=\"gModGreen\" id=\"1940766665\">TheHerta_SKL02_Mark</a>",
            "includePreDeath": true
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Targets Adjacent to Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-696979317\">TheHerta_SKL02_Mark_Pre</a>"
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
            "modifier": "<a class=\"gModGreen\" id=\"1940766665\">TheHerta_SKL02_Mark</a>",
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
                      "displayLines": "DV_DamageRatio1"
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
                      "displayLines": "DV_DamageRatio1"
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
            "TargetList": [
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
                  "modifier": "<a class=\"gModGreen\" id=\"-696979317\">TheHerta_SKL02_Mark_Pre</a>",
                  "includePreDeath": true
                }
              }
            ]
          },
          "modifier": "<a class=\"gModGreen\" id=\"1940766665\">TheHerta_SKL02_Mark</a>"
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
            "modifier": "<a class=\"gModGreen\" id=\"1940766665\">TheHerta_SKL02_Mark</a>",
            "includePreDeath": true
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Targets Adjacent to Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-696979317\">TheHerta_SKL02_Mark_Pre</a>"
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
              "value": 0,
              "variableName": "DV_HitCount"
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
            "modifier": "<a class=\"gModGreen\" id=\"1940766665\">TheHerta_SKL02_Mark</a>",
            "includePreDeath": true
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "DV_DamageRatio1"
              },
              "variableName": "DV_MainTargetFinalDmgRatio"
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "DV_DamageRatio1"
              },
              "variableName": "DV_OtherTargetFinalDmgRatio"
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
                      "displayLines": "DV_MainTargetFinalDmgRatio"
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
                      "displayLines": "DV_OtherTargetFinalDmgRatio"
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