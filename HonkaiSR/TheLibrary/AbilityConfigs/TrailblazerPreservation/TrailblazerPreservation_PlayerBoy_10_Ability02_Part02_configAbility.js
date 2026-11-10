const configAbility = {
  "fileName": "TrailblazerPreservation_PlayerBoy_10_Ability02_Part02",
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
      "modifier": "<a class=\"gModGreen\" id=\"-356032349\">MWPlayerBoy_10_DamageResistance</a>[<span class=\"descriptionNumberColor\">DMG Mitigation</span>]",
      "duration": {
        "displayLines": "1"
      },
      "valuePerStack": {
        "MWPlayerBoy_10_DamageResistance_Value01": {
          "displayLines": "0.5"
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
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-670613406\">PlayerBoy_10_DamageResistance_Team</a>[<span class=\"descriptionNumberColor\">DMG Mitigation</span>]",
          "duration": {
            "displayLines": "1"
          },
          "valuePerStack": {
            "PlayerBoy_10_DamageResistance_Team_Value01": {
              "displayLines": "0.15"
            }
          }
        }
      ]
    },
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
          "value": 1
        },
        {
          "name": "Define Modifier Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifierName": "<a class=\"gModGreen\" id=\"-1043486589\">MWPlayerBoy_10_WeaponCharge</a>[<span class=\"descriptionNumberColor\">Magma Will</span>]",
          "value": {
            "displayLines": "MDF_Energy_Count"
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2059998112\">PlayerBoy_Weapon_Effect</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "<a class=\"gModGreen\" id=\"-1043486589\">MWPlayerBoy_10_WeaponCharge</a>[<span class=\"descriptionNumberColor\">Magma Will</span>]",
            "compareType": ">=",
            "value2": {
              "displayLines": "8"
            }
          },
          "passed": [
            {
              "name": "Define Modifier Variable",
              "modifierName": "<a class=\"gModGreen\" id=\"-1043486589\">MWPlayerBoy_10_WeaponCharge</a>[<span class=\"descriptionNumberColor\">Magma Will</span>]",
              "value": {
                "displayLines": "8"
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "<a class=\"gModGreen\" id=\"-1043486589\">MWPlayerBoy_10_WeaponCharge</a>[<span class=\"descriptionNumberColor\">Magma Will</span>]",
            "compareType": ">",
            "value2": 3.5
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1462404810\">PlayerBoy_10_ChangeAttack</a>"
            }
          ]
        }
      ],
      "failed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1043486589\">MWPlayerBoy_10_WeaponCharge</a>[<span class=\"descriptionNumberColor\">Magma Will</span>]"
        },
        {
          "name": "Adjust Variable Value",
          "adjustmentType": "Overwrite Value",
          "variableName": "MDF_Energy_Count",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
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
          "bar#": 2,
          "cooldown": 0
        }
      ]
    },
    {
      "name": "Update Energy",
      "on": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "valuePercent": 1,
      "ofAbilitySplit": true,
      "isFixed": "* ERR"
    },
    {
      "name": "Change Entity Turn-State",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "phase": "Phase2"
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
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1488319040\">Standard_CTRL_Taunt</a>[<span class=\"descriptionNumberColor\">Taunt</span>]",
      "duration": {
        "displayLines": "1"
      },
      "baseChance": {
        "displayLines": "1"
      }
    },
    "Trigger: Ability End"
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1443538518\">MWPlayerBoy_10_NullifyAggro</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Stat",
              "variableName": "Target_AggroAddedRatio",
              "readTarget": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "value": "&nbsp;<span class=\"descriptionNumberColor\">Aggro%</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable with Stat",
              "variableName": "Target_AggroDelta",
              "readTarget": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "value": "&nbsp;<span class=\"descriptionNumberColor\">AggroFlat</span>&nbsp;"
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">Aggro%</span>&nbsp;",
              "statValue": {
                "displayLines": "-(1 + Target_AggroAddedRatio)"
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">AggroFlat</span>&nbsp;",
              "statValue": {
                "displayLines": "Target_AggroDelta"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__2070546020\">MWPlayerBoy_10_NullifyAggro_Aura</a>",
      "stackType": "ReplaceByCaster",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Join Targets",
                "TargetList": [
                  {
                    "name": "Target Name",
                    "target": "{{All Team Members}}"
                  },
                  {
                    "name": "Target Name",
                    "target": "{{All Unselectable Targets}}"
                  }
                ]
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1443538518\">MWPlayerBoy_10_NullifyAggro</a>"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members(Exclude Self)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1443538518\">MWPlayerBoy_10_NullifyAggro</a>"
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