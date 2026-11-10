const configAbility = {
  "fileName": "TrailblazerPreservation_PlayerBoy_10_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
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
        "target": "{{Hostile Entities(AOE)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Fire",
        "Damage": {
          "displayLines": "1"
        },
        "DamageExtra": {
          "displayLines": "1.5"
        },
        "dmgFormulaExtra": "DEF Scaling",
        "Toughness": {
          "displayLines": "AOE Toughness Value"
        },
        "Tags": null,
        "EnergyGainPercent": "100%"
      }
    },
    "Trigger: Attack End",
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1196656931\">PlayerBoy_10_WeaponCharge_Free</a>[<span class=\"descriptionNumberColor\">War-Flaming Lance</span>]"
    },
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
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1462404810\">PlayerBoy_10_ChangeAttack</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-2059998112\">PlayerBoy_Weapon_Effect</a>"
    },
    "Trigger: Skip Death Handling",
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
    "Trigger: Ability End"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  }
}