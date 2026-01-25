const configAbility = {
  "fileName": "Jiaoqiu_Jiaoqiu_Ability01_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 1
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "Rank01_Stack_Layer",
          "value": {
            "operator": "Constants[0] (1) || Variables[0] (1) || ADD || RETURN",
            "displayLines": "(1 + 1)",
            "constants": [
              1
            ],
            "variables": [
              1
            ]
          }
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "variableName": "Rank01_Stack_Layer",
          "value": {
            "operator": "Constants[0] (1) || RETURN",
            "displayLines": "1",
            "constants": [
              1
            ],
            "variables": []
          }
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "Jiaoqiu_Debuff_Flavor[<span class=\"descriptionNumberColor\">Ashen Roast</span>]",
      "duration": {
        "operator": "Variables[0] (2) || RETURN",
        "displayLines": "2",
        "constants": [],
        "variables": [
          2
        ]
      },
      "baseChance": {
        "operator": "Variables[0] (1) || RETURN",
        "displayLines": "1",
        "constants": [],
        "variables": [
          1
        ]
      },
      "stackLimit": {
        "operator": "Variables[0] (_MaxLayer) || RETURN",
        "displayLines": "_MaxLayer",
        "constants": [],
        "variables": [
          "_MaxLayer"
        ]
      },
      "valuePerStack": {
        "DOT_Ratio": {
          "operator": "Variables[0] (SkillP01_DotRatio) || RETURN",
          "displayLines": "SkillP01_DotRatio",
          "constants": [],
          "variables": [
            "SkillP01_DotRatio"
          ]
        },
        "AbilityRank_Eidolon2_P1_Ratio": {
          "operator": "Variables[0] (3) || RETURN",
          "displayLines": "3",
          "constants": [],
          "variables": [
            3
          ]
        },
        "AbilityRank_Eidolon6_P3_DownRatio": {
          "operator": "Variables[0] (0.03) || RETURN",
          "displayLines": "0.03",
          "constants": [],
          "variables": [
            0.03
          ]
        },
        "MDF_PropertyValue": {
          "operator": "Variables[0] (0.15) || RETURN",
          "displayLines": "0.15",
          "constants": [],
          "variables": [
            0.15
          ]
        },
        "MDF_PropertyValue_2": {
          "operator": "Variables[0] (0.05) || RETURN",
          "displayLines": "0.05",
          "constants": [],
          "variables": [
            0.05
          ]
        }
      },
      "addStacksPerTrigger": {
        "operator": "Variables[0] (Rank01_Stack_Layer) || RETURN",
        "displayLines": "Rank01_Stack_Layer",
        "constants": [],
        "variables": [
          "Rank01_Stack_Layer"
        ]
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
          "operator": "Variables[0] (1) || RETURN",
          "displayLines": "1",
          "constants": [],
          "variables": [
            1
          ]
        },
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
    "Trigger: Ability End"
  ],
  "references": []
}