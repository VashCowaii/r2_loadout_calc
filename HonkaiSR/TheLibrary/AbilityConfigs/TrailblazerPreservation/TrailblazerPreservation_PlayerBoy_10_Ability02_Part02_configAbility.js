const configAbility = {
  "fileName": "TrailblazerPreservation_PlayerBoy_10_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "MWPlayerBoy_10_DamageResistance[<span class=\"descriptionNumberColor\">DMG Mitigation</span>]",
      "duration": {
        "operator": "Variables[0] (1) || RETURN",
        "displayLines": "1",
        "constants": [],
        "variables": [
          1
        ]
      },
      "valuePerStack": {
        "MWPlayerBoy_10_DamageResistance_Value01": {
          "operator": "Variables[0] (0.5) || RETURN",
          "displayLines": "0.5",
          "constants": [],
          "variables": [
            0.5
          ]
        }
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "The Strong Defend the Weak"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": "Allied Team",
          "modifier": "PlayerBoy_10_DamageResistance_Team[<span class=\"descriptionNumberColor\">DMG Mitigation</span>]",
          "duration": {
            "operator": "Variables[0] (1) || RETURN",
            "displayLines": "1",
            "constants": [],
            "variables": [
              1
            ]
          },
          "valuePerStack": {
            "PlayerBoy_10_DamageResistance_Team_Value01": {
              "operator": "Variables[0] (0.15) || RETURN",
              "displayLines": "0.15",
              "constants": [],
              "variables": [
                0.15
              ]
            }
          }
        }
      ]
    },
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
          "value": 1
        },
        {
          "name": "Define Modifier Variable",
          "target": "Caster",
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
      "name": "Update Energy",
      "on": "Caster",
      "valuePercent": 1,
      "ofAbilitySplit": true,
      "isFixed": "* ERR"
    },
    {
      "name": "Change Character Transformation",
      "target": "Caster",
      "phase": "Phase2"
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
      "name": "Add Events/Bonuses",
      "to": "All Hostile Entities (AOE)",
      "modifier": "Standard_CTRL_Taunt[<span class=\"descriptionNumberColor\">Taunt</span>]",
      "duration": {
        "operator": "Variables[0] (1) || RETURN",
        "displayLines": "1",
        "constants": [],
        "variables": [
          1
        ]
      },
      "baseChance": {
        "operator": "Variables[0] (1) || RETURN",
        "displayLines": "1",
        "constants": [],
        "variables": [
          1
        ]
      }
    },
    "Trigger: Ability End"
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "MWPlayerBoy_10_NullifyAggro",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Stat",
              "target": "Owner of this Modifier",
              "variableName": "Target_AggroAddedRatio",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">Aggro%</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": "Owner of this Modifier",
              "variableName": "Target_AggroDelta",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">AggroFlat</span>&nbsp;"
            },
            {
              "name": "Stack Target Stat Value",
              "target": "Owner of this Modifier",
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">Aggro%</span>&nbsp;",
              "value": {
                "operator": "Constants[0] (1) || Variables[0] (Target_AggroAddedRatio) || ADD || INVERT || RETURN",
                "displayLines": "-(1 + Target_AggroAddedRatio)",
                "constants": [
                  1
                ],
                "variables": [
                  "Target_AggroAddedRatio"
                ]
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": "Owner of this Modifier",
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">AggroFlat</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (Target_AggroDelta) || RETURN",
                "displayLines": "Target_AggroDelta",
                "constants": [],
                "variables": [
                  "Target_AggroDelta"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "MWPlayerBoy_10_NullifyAggro_Aura",
      "stackType": "ReplaceByCaster",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": [
                {
                  "name": "Target List",
                  "target": "All Team Members(In Context)"
                },
                {
                  "name": "Target List",
                  "target": "All Untargetable"
                }
              ],
              "modifier": "MWPlayerBoy_10_NullifyAggro"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": "All Teammates (Excluding Owner)",
              "modifier": "MWPlayerBoy_10_NullifyAggro"
            }
          ]
        }
      ]
    }
  ]
}