const configAbility = {
  "fileName": "Asta_Asta_Ability01_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Sparks"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "Standard_DOT_Burn[<span class=\"descriptionNumberColor\">Burn</span>]",
          "duration": {
            "operator": "Variables[0] (3) || RETURN",
            "displayLines": "3",
            "constants": [],
            "variables": [
              3
            ]
          },
          "baseChance": {
            "operator": "Variables[0] (0.8) || RETURN",
            "displayLines": "0.8",
            "constants": [],
            "variables": [
              0.8
            ]
          },
          "valuePerStack": {
            "Modifier_Burn_DamagePercentage": {
              "operator": "Variables[0] (1) || Variables[1] (0.5) || MUL || RETURN",
              "displayLines": "(1 * 0.5)",
              "constants": [],
              "variables": [
                1,
                0.5
              ]
            }
          },
          "stackFlag": "CharacterSkill"
        }
      ]
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