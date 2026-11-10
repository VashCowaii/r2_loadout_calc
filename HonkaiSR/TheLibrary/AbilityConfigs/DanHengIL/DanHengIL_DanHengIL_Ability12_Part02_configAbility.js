const configAbility = {
  "fileName": "DanHengIL_DanHengIL_Ability12_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable",
      "value": 0,
      "variableName": "Flag_AttackCount"
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "AttackScaling": {
        "DamageType": "Imaginary",
        "Damage": {
          "displayLines": "(3.8 * 0.2)"
        },
        "Toughness": {
          "displayLines": "(ST Toughness Value * 0.2)"
        },
        "Tags": null,
        "EnergyGainPercent": "20%"
      }
    },
    {
      "name": "Define Custom Variable",
      "value": {
        "displayLines": "(Flag_AttackCount + 1)"
      },
      "variableName": "Flag_AttackCount"
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "AttackScaling": {
        "DamageType": "Imaginary",
        "Damage": {
          "displayLines": "(3.8 * 0.2)"
        },
        "Toughness": {
          "displayLines": "(ST Toughness Value * 0.2)"
        },
        "Tags": null,
        "EnergyGainPercent": "20%"
      }
    },
    {
      "name": "Define Custom Variable",
      "value": {
        "displayLines": "(Flag_AttackCount + 1)"
      },
      "variableName": "Flag_AttackCount"
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "AttackScaling": {
        "DamageType": "Imaginary",
        "Damage": {
          "displayLines": "(3.8 * 0.2)"
        },
        "Toughness": {
          "displayLines": "(ST Toughness Value * 0.2)"
        },
        "Tags": null,
        "EnergyGainPercent": "20%"
      }
    },
    {
      "name": "Define Custom Variable",
      "value": {
        "displayLines": "(Flag_AttackCount + 1)"
      },
      "variableName": "Flag_AttackCount"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1955464894\">DanHengIL_Ability02_CriticalDamage</a>[<span class=\"descriptionNumberColor\">Outroar</span>]",
      "duration": {
        "displayLines": "SkillRank_Rank04_LifeTime"
      },
      "immediateEffect": true,
      "stackLimit": {
        "displayLines": "4"
      },
      "valuePerStack": {
        "MDF_AddCriticalDamage": {
          "displayLines": "0.12"
        },
        "MDF_MaxLayer": {
          "displayLines": "4"
        }
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "AttackScaling": {
        "DamageType": "Imaginary",
        "Damage": {
          "displayLines": "(3.8 * 0.2)"
        },
        "Toughness": {
          "displayLines": "(ST Toughness Value * 0.2)"
        },
        "Tags": null,
        "EnergyGainPercent": "20%"
      }
    },
    {
      "name": "Looped Event",
      "maxLoops": 2,
      "execute": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "searchRandom": true,
          "includeDyingTargets": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-216777096\">DanHengIL_Ability12Target</a>",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Imaginary",
                "Damage": {
                  "displayLines": "0.6"
                },
                "HitSplit": 0.5,
                "Toughness": {
                  "displayLines": "Blast Toughness Value"
                },
                "Tags": null
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-216777096\">DanHengIL_Ability12Target</a>"
            }
          ]
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "value": {
        "displayLines": "(Flag_AttackCount + 1)"
      },
      "variableName": "Flag_AttackCount"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-216777096\">DanHengIL_Ability12Target</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1955464894\">DanHengIL_Ability02_CriticalDamage</a>[<span class=\"descriptionNumberColor\">Outroar</span>]",
      "duration": {
        "displayLines": "SkillRank_Rank04_LifeTime"
      },
      "immediateEffect": true,
      "stackLimit": {
        "displayLines": "4"
      },
      "valuePerStack": {
        "MDF_AddCriticalDamage": {
          "displayLines": "0.12"
        },
        "MDF_MaxLayer": {
          "displayLines": "4"
        }
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "AttackScaling": {
        "DamageType": "Imaginary",
        "Damage": {
          "displayLines": "(3.8 * 0.2)"
        },
        "Toughness": {
          "displayLines": "(ST Toughness Value * 0.2)"
        },
        "Tags": null,
        "EnergyGainPercent": "20%"
      }
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Ability Targets Adjacent(Blast)}}"
      },
      "searchRandom": true,
      "includeDyingTargets": true,
      "maxTargets": 1,
      "conditions": {
        "name": "NOT",
        "conditions": {
          "name": "Has Modifier",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-216777096\">DanHengIL_Ability12Target</a>"
        }
      },
      "ifTargetFound": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "displayLines": "0.6"
            },
            "HitSplit": 0.5,
            "Toughness": {
              "displayLines": "Blast Toughness Value"
            },
            "Tags": null
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-216777096\">DanHengIL_Ability12Target</a>"
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
      "includeDyingTargets": true,
      "maxTargets": 1,
      "conditions": {
        "name": "NOT",
        "conditions": {
          "name": "Has Modifier",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-216777096\">DanHengIL_Ability12Target</a>"
        }
      },
      "ifTargetFound": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "displayLines": "0.6"
            },
            "HitSplit": 0.5,
            "Toughness": {
              "displayLines": "Blast Toughness Value"
            },
            "Tags": null
          }
        }
      ]
    },
    "Trigger: Attack End",
    {
      "name": "Define Custom Variable",
      "value": {
        "displayLines": "(Flag_AttackCount + 1)"
      },
      "variableName": "Flag_AttackCount"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-216777096\">DanHengIL_Ability12Target</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1633577543\">DanHengIL_BPCost_1</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1683910400\">DanHengIL_BPCost_2</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1667132781\">DanHengIL_BPCost_3</a>"
    },
    {
      "name": "Define Custom Variable",
      "value": 0,
      "variableName": "EXSkill01"
    },
    "Trigger: Ability End"
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-216777096\">DanHengIL_Ability12Target</a>"
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  }
}