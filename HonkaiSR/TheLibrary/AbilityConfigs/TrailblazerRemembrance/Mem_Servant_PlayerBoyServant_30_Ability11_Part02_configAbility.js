const configAbility = {
  "fileName": "Mem_Servant_PlayerBoyServant_30_Ability11_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable",
      "variableName": "CurEnergy",
      "value": 0
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "M_PlayerBoyServant_30_EnableAbility"
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
          "multi": "(0 - 1)"
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "Memosprite_PlayerBoyServant_30_UltraBonus[<span class=\"descriptionNumberColor\">Mem's Support</span>]",
      "duration": {
        "operator": "Variables[0] (3) || RETURN",
        "displayLines": "3",
        "constants": [],
        "variables": [
          3
        ]
      },
      "valuePerStack": {
        "MDF_PropertyRatio": {
          "operator": "Variables[0] (0.1) || RETURN",
          "displayLines": "0.1",
          "constants": [],
          "variables": [
            0.1
          ]
        },
        "MDF_BasicDamagePercentage": {
          "operator": "Variables[0] (0.28) || RETURN",
          "displayLines": "0.28",
          "constants": [],
          "variables": [
            0.28
          ]
        },
        "MDF_PointB3_P1_Basic": {
          "operator": "Variables[0] (100) || RETURN",
          "displayLines": "100",
          "constants": [],
          "variables": [
            100
          ]
        },
        "MDF_PointB3_P2_Delta": {
          "operator": "Variables[0] (10) || RETURN",
          "displayLines": "10",
          "constants": [],
          "variables": [
            10
          ]
        },
        "MDF_PointB3_P3_Ratio": {
          "operator": "Variables[0] (0.02) || RETURN",
          "displayLines": "0.02",
          "constants": [],
          "variables": [
            0.02
          ]
        },
        "MDF_PointB3_P4_Max": {
          "operator": "Variables[0] (0.2) || RETURN",
          "displayLines": "0.2",
          "constants": [],
          "variables": [
            0.2
          ]
        },
        "MDF_Eidolon4_P2_ExtraDamagePercentage": {
          "operator": "Variables[0] (0.06) || RETURN",
          "displayLines": "0.06",
          "constants": [],
          "variables": [
            0.06
          ]
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
      "modifier": "M_PlayerBoy_30_BE_Ability02_Preshow"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "M_PlayerBoy_30_BE_Ability02_Preshow",
      "stackData": [],
      "latentQueue": [],
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
              "modifier": "M_PlayerBoyServant_30_EnableAbility"
            },
            {
              "name": "Is Part Of",
              "of": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "mustBeAlive2": true,
              "invertCondition": true
            }
          ]
        },
        "delayAdvancePreview": {
          "name": "Delay/Advance Preview",
          "previewValue": {
            "operator": "Constants[0] (0) || Variables[0] (1) || SUB || RETURN",
            "displayLines": "(0 - 1)",
            "constants": [
              0
            ],
            "variables": [
              1
            ]
          }
        }
      }
    }
  ]
}