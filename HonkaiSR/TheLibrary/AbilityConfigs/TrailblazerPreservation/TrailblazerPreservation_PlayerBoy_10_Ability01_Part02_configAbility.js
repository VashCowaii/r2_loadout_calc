const configAbility = {
  "fileName": "TrailblazerPreservation_PlayerBoy_10_Ability01_Part02",
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
          "operator": "Variables[0] (1) || RETURN",
          "displayLines": "1",
          "constants": [],
          "variables": [
            1
          ]
        },
        "DamageExtra": {
          "operator": "Variables[0] (Rank01_Ratio) || RETURN",
          "displayLines": "Rank01_Ratio",
          "constants": [],
          "variables": [
            "Rank01_Ratio"
          ]
        },
        "dmgFormulaExtra": "DEF Scaling",
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
    "Trigger: Attack End",
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": "Caster",
        "modifier": "MWPlayerBoy_10_WeaponCharge[<span class=\"descriptionNumberColor\">Magma Will</span>]"
      },
      "passed": [
        {
          "name": "Define Modifier Variable",
          "target": "Caster",
          "modifierName": "MWPlayerBoy_10_WeaponCharge[<span class=\"descriptionNumberColor\">Magma Will</span>]",
          "function": "Add",
          "value": 1
        },
        {
          "name": "Adjust Variable Value",
          "adjustmentType": "Add to Value (Default)",
          "variableName": "MDF_Energy_Count",
          "on": "Caster",
          "value": 1
        },
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "PlayerBoy_Weapon_Effect"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "MWPlayerBoy_10_WeaponCharge[<span class=\"descriptionNumberColor\">Magma Will</span>]",
            "compareType": ">=",
            "value2": {
              "operator": "Variables[0] (8) || RETURN",
              "displayLines": "8",
              "constants": [],
              "variables": [
                8
              ]
            }
          },
          "passed": [
            {
              "name": "Define Modifier Variable",
              "modifierName": "MWPlayerBoy_10_WeaponCharge[<span class=\"descriptionNumberColor\">Magma Will</span>]",
              "value": {
                "operator": "Variables[0] (8) || RETURN",
                "displayLines": "8",
                "constants": [],
                "variables": [
                  8
                ]
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "MWPlayerBoy_10_WeaponCharge[<span class=\"descriptionNumberColor\">Magma Will</span>]",
            "compareType": ">",
            "value2": 3.5
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": "Caster",
              "modifier": "PlayerBoy_10_ChangeAttack"
            }
          ]
        }
      ],
      "failed": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "MWPlayerBoy_10_WeaponCharge[<span class=\"descriptionNumberColor\">Magma Will</span>]"
        },
        {
          "name": "Adjust Variable Value",
          "adjustmentType": "Overwrite Value",
          "variableName": "MDF_Energy_Count",
          "on": "Caster",
          "value": 1
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
          "bar#": 2,
          "cooldown": 0
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
    "Trigger: Ability End"
  ],
  "references": []
}