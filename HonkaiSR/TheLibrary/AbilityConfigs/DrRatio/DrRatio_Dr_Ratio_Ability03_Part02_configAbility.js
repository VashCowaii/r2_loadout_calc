const configAbility = {
  "fileName": "DrRatio_Dr_Ratio_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable",
      "variableName": "_Dr_RatioAttack",
      "value": 0
    },
    {
      "name": "Define Custom Variable",
      "variableName": "_Dr_Ratio_00_EnergyBar_Flag",
      "value": 0
    },
    {
      "name": "Remove Events/Bonuses",
      "to": "Caster",
      "modifier": "Dr_Ratio_Insert_Flag_Caster"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": "All Enemies(All)",
      "modifier": "Dr_Ratio_Insert_Flag"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": "All Enemies(All)",
      "modifier": "Dr_Ratio_Ability03_TheFool[<span class=\"descriptionNumberColor\">Wiseman's Folly</span>]"
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
          "to": "Single Target (Primary)",
          "modifier": "Dr_Ratio_Ability03_TheFool[<span class=\"descriptionNumberColor\">Wiseman's Folly</span>]",
          "valuePerStack": {
            "MDF_Ability03_InsertMaxCount": {
              "operator": "Variables[0] (2) || Variables[1] (1) || ADD || RETURN",
              "displayLines": "(2 + 1)",
              "constants": [],
              "variables": [
                2,
                1
              ]
            }
          }
        }
      ],
      "failed": [
        {
          "name": "Add Events/Bonuses",
          "to": "Single Target (Primary)",
          "modifier": "Dr_Ratio_Ability03_TheFool[<span class=\"descriptionNumberColor\">Wiseman's Folly</span>]",
          "valuePerStack": {
            "MDF_Ability03_InsertMaxCount": {
              "operator": "Variables[0] (2) || RETURN",
              "displayLines": "2",
              "constants": [],
              "variables": [
                2
              ]
            }
          }
        }
      ]
    },
    {
      "name": "ATK Scaling DMG",
      "target": "Single Target (Primary)",
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Imaginary",
        "Damage": {
          "operator": "Variables[0] (2.4) || RETURN",
          "displayLines": "2.4",
          "constants": [],
          "variables": [
            2.4
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