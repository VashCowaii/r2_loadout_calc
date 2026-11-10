const configAbility = {
  "fileName": "50_BattleEventAbility_CocoliaP1_RL_Insert",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "UI Display Event",
      "popUpText": "Doomsday Ice Cascade"
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Ice",
        "Damage": {
          "displayLines": "(MDF_CocoliaP1_00_RL_BattleEvent_DamagePercentage * 0.2)"
        },
        "Toughness": null,
        "Tags": null,
        "attackType": "Additional DMG",
        "hitOwner": {
          "name": "Target Name",
          "target": "{{Enemy Teams}}"
        },
        "EnergyGainPercent": "33%"
      }
    },
    {
      "name": "Update Energy",
      "on": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "value": {
        "displayLines": "(MDF_CocoliaP1_00_RL_BattleEvent_SPAdd * 0.2)"
      },
      "isFixed": "* ERR"
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Ice",
        "Damage": {
          "displayLines": "(MDF_CocoliaP1_00_RL_BattleEvent_DamagePercentage * 0.2)"
        },
        "Toughness": null,
        "Tags": null,
        "attackType": "Additional DMG",
        "hitOwner": {
          "name": "Target Name",
          "target": "{{Enemy Teams}}"
        },
        "EnergyGainPercent": "33%"
      }
    },
    {
      "name": "Update Energy",
      "on": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "value": {
        "displayLines": "(MDF_CocoliaP1_00_RL_BattleEvent_SPAdd * 0.2)"
      },
      "isFixed": "* ERR"
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Ice",
        "Damage": {
          "displayLines": "(MDF_CocoliaP1_00_RL_BattleEvent_DamagePercentage * 0.2)"
        },
        "Toughness": null,
        "Tags": null,
        "attackType": "Additional DMG",
        "hitOwner": {
          "name": "Target Name",
          "target": "{{Enemy Teams}}"
        },
        "EnergyGainPercent": "34%"
      }
    },
    {
      "name": "Update Energy",
      "on": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "value": {
        "displayLines": "(MDF_CocoliaP1_00_RL_BattleEvent_SPAdd * 0.2)"
      },
      "isFixed": "* ERR"
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Ice",
        "Damage": {
          "displayLines": "(MDF_CocoliaP1_00_RL_BattleEvent_DamagePercentage * 0.2)"
        },
        "Toughness": null,
        "Tags": null,
        "attackType": "Additional DMG",
        "hitOwner": {
          "name": "Target Name",
          "target": "{{Enemy Teams}}"
        },
        "EnergyGainPercent": "33%"
      }
    },
    {
      "name": "Update Energy",
      "on": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "value": {
        "displayLines": "(MDF_CocoliaP1_00_RL_BattleEvent_SPAdd * 0.2)"
      },
      "isFixed": "* ERR"
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Ice",
        "Damage": {
          "displayLines": "(MDF_CocoliaP1_00_RL_BattleEvent_DamagePercentage * 0.2)"
        },
        "Toughness": null,
        "Tags": null,
        "attackType": "Additional DMG",
        "hitOwner": {
          "name": "Target Name",
          "target": "{{Enemy Teams}}"
        },
        "EnergyGainPercent": "33%"
      }
    },
    {
      "name": "Update Energy",
      "on": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "value": {
        "displayLines": "(MDF_CocoliaP1_00_RL_BattleEvent_SPAdd * 0.2)"
      },
      "isFixed": "* ERR"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "MDF_CocoliaP1_00_RL_BattleEvent_Count",
        "compareType": "=",
        "value2": 0
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "value": 1,
          "variableName": "MDF_CocoliaP1_00_RL_BattleEvent_Count"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "NOT",
            "conditions": {
              "name": "Has Flag",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "flagName": "STAT_CTRL_Frozen"
            }
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-298752594\">Standard_CTRL_Frozen</a>[<span class=\"descriptionNumberColor\">Frozen</span>]",
              "duration": 1,
              "baseChance": 1,
              "valuePerStack": {
                "Modifier_Frozen_DamagePercentage": {
                  "displayLines": "MDF_CocoliaP1_00_RL_BattleEvent_FrozenDamagePerTurn"
                }
              }
            }
          ]
        }
      ],
      "failed": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "NOT",
            "conditions": {
              "name": "Has Flag",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "flagName": "STAT_CTRL_Frozen"
            }
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-298752594\">Standard_CTRL_Frozen</a>[<span class=\"descriptionNumberColor\">Frozen</span>]",
              "duration": 1,
              "baseChance": 1,
              "valuePerStack": {
                "Modifier_Frozen_DamagePercentage": {
                  "displayLines": "MDF_CocoliaP1_00_RL_BattleEvent_FrozenDamagePerTurn"
                }
              }
            }
          ]
        }
      ]
    },
    "Trigger: Attack End"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  }
}