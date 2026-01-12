const configAbility = {
  "fileName": "Yukong_Yukong_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 6
      },
      "passed": [
        {
          "name": "Trigger Ability",
          "from": "Caster",
          "ability": "Yukong_Ability03_AddFlower"
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": "Yukong's Flower Target",
      "modifier": "Yukong_Flower_ATK_Crit[<span class=\"descriptionNumberColor\">Roaring Bowstrings</span>]",
      "valuePerStack": {
        "MDF_RealAttack": {
          "operator": "Variables[0] (0.8) || RETURN",
          "displayLines": "0.8",
          "constants": [],
          "variables": [
            0.8
          ]
        },
        "MDF_CritChanceUp": {
          "operator": "Variables[0] (0.28) || RETURN",
          "displayLines": "0.28",
          "constants": [],
          "variables": [
            0.28
          ]
        },
        "MDF_CritDamageUpRatio": {
          "operator": "Variables[0] (0.65) || RETURN",
          "displayLines": "0.65",
          "constants": [],
          "variables": [
            0.65
          ]
        }
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": "Single Target (Primary)",
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Imaginary",
        "Damage": {
          "operator": "Variables[0] (3.8) || RETURN",
          "displayLines": "3.8",
          "constants": [],
          "variables": [
            3.8
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
        "attackType": "Ultimate",
        "EnergyGainPercent": "100%"
      }
    },
    "Trigger: Attack End",
    "Trigger: Skip Death Handling",
    {
      "name": "Remove Events/Bonuses",
      "to": "All Team Members(In Context, with Untargetable)",
      "modifier": "Yukong_Eidolon2_BonusCD"
    },
    "Trigger: Ability End"
  ],
  "references": []
}