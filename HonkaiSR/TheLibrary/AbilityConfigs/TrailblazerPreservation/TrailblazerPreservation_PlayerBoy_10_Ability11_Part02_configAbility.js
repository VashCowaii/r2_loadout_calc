const configAbility = {
  "fileName": "TrailblazerPreservation_PlayerBoy_10_Ability11_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Change Character Transformation",
      "target": "Caster",
      "phase": "Phase1"
    },
    {
      "name": "Define Custom Variable with Stat",
      "target": "Caster",
      "variableName": "CasterDefence",
      "value": "&nbsp;<span class=\"descriptionNumberColor\">DEFSUM</span>&nbsp;"
    },
    {
      "name": "ATK Scaling DMG",
      "target": "Single Target (Primary)",
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Fire",
        "Damage": {
          "operator": "Variables[0] (1.35) || RETURN",
          "displayLines": "1.35",
          "constants": [],
          "variables": [
            1.35
          ]
        },
        "DamageExtra": {
          "operator": "Variables[0] (Rank01_ExtraRatio) || RETURN",
          "displayLines": "Rank01_ExtraRatio",
          "constants": [],
          "variables": [
            "Rank01_ExtraRatio"
          ]
        },
        "dmgFormulaExtra": "DEF Scaling",
        "HitSplit": 0.5,
        "Toughness": {
          "operator": "Variables[0] (ST Toughness Value) || RETURN",
          "displayLines": "ST Toughness Value",
          "constants": [],
          "variables": [
            "ST Toughness Value"
          ]
        },
        "Tags": null,
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": "Single Target (Primary)",
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Fire",
        "Damage": {
          "operator": "Variables[0] (1.35) || RETURN",
          "displayLines": "1.35",
          "constants": [],
          "variables": [
            1.35
          ]
        },
        "DamageExtra": {
          "operator": "Variables[0] (Rank01_ExtraRatio) || RETURN",
          "displayLines": "Rank01_ExtraRatio",
          "constants": [],
          "variables": [
            "Rank01_ExtraRatio"
          ]
        },
        "dmgFormulaExtra": "DEF Scaling",
        "HitSplit": 0.5,
        "Toughness": {
          "operator": "Variables[0] (ST Toughness Value) || RETURN",
          "displayLines": "ST Toughness Value",
          "constants": [],
          "variables": [
            "ST Toughness Value"
          ]
        },
        "Tags": null,
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": "Blast (Adjacent)",
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Fire",
        "Damage": {
          "operator": "Variables[0] (0.54) || RETURN",
          "displayLines": "0.54",
          "constants": [],
          "variables": [
            0.54
          ]
        },
        "DamageExtra": {
          "operator": "Variables[0] (Rank01_ExtraRatio) || RETURN",
          "displayLines": "Rank01_ExtraRatio",
          "constants": [],
          "variables": [
            "Rank01_ExtraRatio"
          ]
        },
        "dmgFormulaExtra": "DEF Scaling",
        "Toughness": {
          "operator": "Variables[0] (Blast Toughness Value) || RETURN",
          "displayLines": "Blast Toughness Value",
          "constants": [],
          "variables": [
            "Blast Toughness Value"
          ]
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
          "target": "Caster",
          "healPercent": {
            "operator": "Variables[0] (0.05) || RETURN",
            "displayLines": "0.05",
            "constants": [],
            "variables": [
              0.05
            ]
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
          "to": "Caster",
          "modifier": "PlayerBoy_10_Eidolon6_Stack[<span class=\"descriptionNumberColor\">DEF Boost</span>]",
          "stackLimit": {
            "operator": "Variables[0] (3) || RETURN",
            "displayLines": "3",
            "constants": [],
            "variables": [
              3
            ]
          },
          "valuePerStack": {
            "MDF_DefenceAddedRatio": {
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
    {
      "name": "Define Custom Variable with Stat",
      "target": "Caster",
      "variableName": "CasterDefence",
      "value": "&nbsp;<span class=\"descriptionNumberColor\">DEFSUM</span>&nbsp;"
    },
    {
      "name": "Add Events/Bonuses",
      "to": "All Team Members(In Context)",
      "modifier": "MWPlayerBoy_10_Shield[<span class=\"descriptionNumberColor\">Shield</span>]",
      "duration": {
        "operator": "Variables[0] (2) || RETURN",
        "displayLines": "2",
        "constants": [],
        "variables": [
          2
        ]
      },
      "valuePerStack": {
        "MWPlayerBoy_10_Shield_Value01": {
          "operator": "Variables[0] (CasterDefence) || Variables[1] (0.06) || Variables[2] (Rank02_Ratio) || ADD || MUL || Variables[3] (80) || ADD || Variables[4] (Rank02_Value) || ADD || RETURN",
          "displayLines": "(((CasterDefence * (0.06 + Rank02_Ratio)) + 80) + Rank02_Value)",
          "constants": [],
          "variables": [
            "CasterDefence",
            0.06,
            "Rank02_Ratio",
            80,
            "Rank02_Value"
          ]
        }
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": "Caster",
        "modifier": "PlayerBoy_10_WeaponCharge_Free[<span class=\"descriptionNumberColor\">War-Flaming Lance</span>]"
      },
      "passed": [
        {
          "name": "Remove Events/Bonuses",
          "to": "Caster",
          "modifier": "PlayerBoy_10_WeaponCharge_Free[<span class=\"descriptionNumberColor\">War-Flaming Lance</span>]"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "MWPlayerBoy_10_WeaponCharge[<span class=\"descriptionNumberColor\">Magma Will</span>]",
            "compareType": ">",
            "value2": 3.5
          },
          "failed": [
            {
              "name": "Remove Events/Bonuses",
              "to": "Caster",
              "modifier": "PlayerBoy_10_ChangeAttack"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": "Caster",
              "modifier": "PlayerBoy_Weapon_Effect"
            }
          ]
        }
      ],
      "failed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": "Caster",
            "modifier": "MWPlayerBoy_10_WeaponCharge[<span class=\"descriptionNumberColor\">Magma Will</span>]"
          },
          "passed": [
            {
              "name": "Adjust Variable Value",
              "adjustmentType": "Add to Value (Default)",
              "variableName": "MDF_Energy_Count",
              "on": "Caster",
              "value": -4
            },
            {
              "name": "Define Modifier Variable",
              "modifierName": "MWPlayerBoy_10_WeaponCharge[<span class=\"descriptionNumberColor\">Magma Will</span>]",
              "value": {
                "operator": "Variables[0] (MDF_Energy_Count) || RETURN",
                "displayLines": "MDF_Energy_Count",
                "constants": [],
                "variables": [
                  "MDF_Energy_Count"
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MWPlayerBoy_10_WeaponCharge[<span class=\"descriptionNumberColor\">Magma Will</span>]",
                "compareType": ">",
                "value2": 3.5
              },
              "failed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Caster",
                  "modifier": "PlayerBoy_10_ChangeAttack"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Caster",
                  "modifier": "PlayerBoy_Weapon_Effect"
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Remove Events/Bonuses",
              "to": "Caster",
              "modifier": "PlayerBoy_10_ChangeAttack"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": "Caster",
              "modifier": "PlayerBoy_Weapon_Effect"
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
            "operator": "Variables[0] (MDF_Energy_Count) || RETURN",
            "displayLines": "MDF_Energy_Count",
            "constants": [],
            "variables": [
              "MDF_Energy_Count"
            ]
          },
          "maximum": {
            "operator": "Variables[0] (8) || RETURN",
            "displayLines": "8",
            "constants": [],
            "variables": [
              8
            ]
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
            "operator": "Variables[0] (MDF_Energy_Count) || RETURN",
            "displayLines": "MDF_Energy_Count",
            "constants": [],
            "variables": [
              "MDF_Energy_Count"
            ]
          },
          "maximum": {
            "operator": "Variables[0] (8) || RETURN",
            "displayLines": "8",
            "constants": [],
            "variables": [
              8
            ]
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
      "for": "MWPlayerBoy_10_DefenceUp",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": "Owner of this Modifier",
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (TB_PRES_OBJECT_UNUSED_2) || RETURN",
                "displayLines": "TB_PRES_OBJECT_UNUSED_2",
                "constants": [],
                "variables": [
                  "TB_PRES_OBJECT_UNUSED_2"
                ]
              }
            }
          ]
        }
      ]
    }
  ]
}