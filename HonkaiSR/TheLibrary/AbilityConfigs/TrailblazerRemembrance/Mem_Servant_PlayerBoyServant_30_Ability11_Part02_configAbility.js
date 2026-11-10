const configAbility = {
  "fileName": "Mem_Servant_PlayerBoyServant_30_Ability11_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable",
      "value": 0,
      "variableName": "CurEnergy"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"2058264520\">M_PlayerBoyServant_30_EnableAbility</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Target",
        "target": {
          "name": "Target Name",
          "target": "{{Ability Target(ST)}}"
        },
        "target2": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "invertCondition": true
      },
      "passed": [
        {
          "name": "Action Advance/Delay",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "advanceType": "Set",
          "multiAdd": "(0 - 1)"
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-745710374\">Memosprite_PlayerBoyServant_30_UltraBonus</a>[<span class=\"descriptionNumberColor\">Mem's Support</span>]",
      "duration": {
        "displayLines": "3"
      },
      "valuePerStack": {
        "MDF_PropertyRatio": {
          "displayLines": "0.1"
        },
        "MDF_BasicDamagePercentage": {
          "displayLines": "0.28"
        },
        "MDF_PointB3_P1_Basic": {
          "displayLines": "100"
        },
        "MDF_PointB3_P2_Delta": {
          "displayLines": "10"
        },
        "MDF_PointB3_P3_Ratio": {
          "displayLines": "0.02"
        },
        "MDF_PointB3_P4_Max": {
          "displayLines": "0.2"
        },
        "MDF_Eidolon4_P2_ExtraDamagePercentage": {
          "displayLines": "0.06"
        }
      }
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
    "Trigger: Ability End"
  ],
  "whenAdded": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-2111079333\">M_PlayerBoy_30_BE_Ability02_Preshow</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-2111079333\">M_PlayerBoy_30_BE_Ability02_Preshow</a>",
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "target": {
          "name": "Target Name",
          "target": "{{Player's Aim Target List}}"
        },
        "skillType": [
          "Memosprite"
        ],
        "conditions": {
          "name": "AND",
          "conditionList": [
            {
              "name": "Has Modifier",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"2058264520\">M_PlayerBoyServant_30_EnableAbility</a>"
            },
            {
              "name": "Is Part Of",
              "target1": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "target2": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "invertCondition": true
            }
          ]
        },
        "delayAdvancePreview": {
          "name": "Delay/Advance Preview",
          "previewValue": {
            "displayLines": "(0 - 1)"
          }
        }
      }
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  }
}