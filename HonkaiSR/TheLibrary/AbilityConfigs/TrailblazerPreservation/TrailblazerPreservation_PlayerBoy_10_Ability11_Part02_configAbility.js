const configAbility = {
  "fileName": "TrailblazerPreservation_PlayerBoy_10_Ability11_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Change Entity Turn-State",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "phase": "Phase1"
    },
    {
      "name": "Define Custom Variable with Stat",
      "variableName": "CasterDefence",
      "readTarget": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "value": "&nbsp;<span class=\"descriptionNumberColor\">DEFSUM</span>&nbsp;"
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Fire",
        "Damage": {
          "displayLines": "1.35"
        },
        "DamageExtra": {
          "displayLines": "Rank01_ExtraRatio"
        },
        "dmgFormulaExtra": "DEF Scaling",
        "HitSplit": 0.5,
        "Toughness": {
          "displayLines": "ST Toughness Value"
        },
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
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Fire",
        "Damage": {
          "displayLines": "1.35"
        },
        "DamageExtra": {
          "displayLines": "Rank01_ExtraRatio"
        },
        "dmgFormulaExtra": "DEF Scaling",
        "HitSplit": 0.5,
        "Toughness": {
          "displayLines": "ST Toughness Value"
        },
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
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Fire",
        "Damage": {
          "displayLines": "0.54"
        },
        "DamageExtra": {
          "displayLines": "Rank01_ExtraRatio"
        },
        "dmgFormulaExtra": "DEF Scaling",
        "Toughness": {
          "displayLines": "Blast Toughness Value"
        },
        "Tags": null
      }
    },
    "Trigger: Attack End",
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Unwavering Gallantry"
      },
      "passed": [
        {
          "name": "Heal",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "healPercent": {
            "displayLines": "0.05"
          },
          "formula": "Heal from Healer's MaxHP"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 6
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1564952013\">PlayerBoy_10_Eidolon6_Stack</a>[<span class=\"descriptionNumberColor\">DEF Boost</span>]",
          "stackLimit": {
            "displayLines": "3"
          },
          "valuePerStack": {
            "MDF_DefenceAddedRatio": {
              "displayLines": "0.1"
            }
          }
        }
      ]
    },
    {
      "name": "Define Custom Variable with Stat",
      "variableName": "CasterDefence",
      "readTarget": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "value": "&nbsp;<span class=\"descriptionNumberColor\">DEFSUM</span>&nbsp;"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{All Team Members}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1400516150\">MWPlayerBoy_10_Shield</a>[<span class=\"descriptionNumberColor\">Shield</span>]",
      "duration": {
        "displayLines": "2"
      },
      "valuePerStack": {
        "MWPlayerBoy_10_Shield_Value01": {
          "displayLines": "(((CasterDefence * (0.06 + Rank02_Ratio)) + 80) + Rank02_Value)"
        }
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-1196656931\">PlayerBoy_10_WeaponCharge_Free</a>[<span class=\"descriptionNumberColor\">War-Flaming Lance</span>]"
      },
      "passed": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1196656931\">PlayerBoy_10_WeaponCharge_Free</a>[<span class=\"descriptionNumberColor\">War-Flaming Lance</span>]"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "<a class=\"gModGreen\" id=\"-1043486589\">MWPlayerBoy_10_WeaponCharge</a>[<span class=\"descriptionNumberColor\">Magma Will</span>]",
            "compareType": ">",
            "value2": 3.5
          },
          "failed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1462404810\">PlayerBoy_10_ChangeAttack</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2059998112\">PlayerBoy_Weapon_Effect</a>"
            }
          ]
        }
      ],
      "failed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1043486589\">MWPlayerBoy_10_WeaponCharge</a>[<span class=\"descriptionNumberColor\">Magma Will</span>]"
          },
          "passed": [
            {
              "name": "Adjust Variable Value",
              "adjustmentType": "Add to Value (Default)",
              "variableName": "MDF_Energy_Count",
              "on": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "value": -4
            },
            {
              "name": "Define Modifier Variable",
              "modifierName": "<a class=\"gModGreen\" id=\"-1043486589\">MWPlayerBoy_10_WeaponCharge</a>[<span class=\"descriptionNumberColor\">Magma Will</span>]",
              "value": {
                "displayLines": "MDF_Energy_Count"
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "<a class=\"gModGreen\" id=\"-1043486589\">MWPlayerBoy_10_WeaponCharge</a>[<span class=\"descriptionNumberColor\">Magma Will</span>]",
                "compareType": ">",
                "value2": 3.5
              },
              "failed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1462404810\">PlayerBoy_10_ChangeAttack</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-2059998112\">PlayerBoy_Weapon_Effect</a>"
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1462404810\">PlayerBoy_10_ChangeAttack</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2059998112\">PlayerBoy_Weapon_Effect</a>"
            }
          ]
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "MDF_Energy_Count",
        "compareType": ">=",
        "value2": 4
      },
      "passed": [
        {
          "name": "Update Displayed Energy Bar",
          "value": {
            "displayLines": "MDF_Energy_Count"
          },
          "maximum": {
            "displayLines": "8"
          },
          "assignState": "True",
          "priorState": "Active",
          "bar#": 2,
          "cooldown": 0
        }
      ],
      "failed": [
        {
          "name": "Update Displayed Energy Bar",
          "value": {
            "displayLines": "MDF_Energy_Count"
          },
          "maximum": {
            "displayLines": "8"
          },
          "assignState": "True",
          "priorState": "Normal",
          "bar#": 2,
          "cooldown": 0
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1782998372\">MWPlayerBoy_10_DefenceUp</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
              "value": {
                "displayLines": "TB_PRES_OBJECT_UNUSED_2"
              }
            }
          ]
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  }
}