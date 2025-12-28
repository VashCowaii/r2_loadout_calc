const configAbility = {
  "fileName": "TrailblazerDestruction_PlayerBoy_Ability11_Part02",
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
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "PlayerBoy_Eidolon1_Check_Modifier"
        }
      ]
    },
    {
      "name": "ATK Scaling DMG",
      "target": "Single Target (Primary)",
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Physical",
        "Damage": {
          "operator": "Variables[0] (4.5) || Constants[0] (1) || MUL || RETURN",
          "displayLines": "(4.5 * 1)",
          "constants": [
            1
          ],
          "variables": [
            4.5
          ]
        },
        "Toughness": {
          "operator": "Variables[0] (ST Toughness Value) || Constants[0] (1) || MUL || RETURN",
          "displayLines": "(ST Toughness Value * 1)",
          "constants": [
            1
          ],
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
        "name": "Eidolon Activated",
        "eidolon": 1
      },
      "passed": [
        {
          "name": "Remove Events/Bonuses",
          "to": "Caster",
          "modifier": "PlayerBoy_Eidolon1_Check_Modifier"
        }
      ]
    },
    {
      "name": "Remove Events/Bonuses",
      "to": "Caster",
      "modifier": "PlayerWarrior_Ultimate_Transform"
    },
    {
      "name": "Update Ult Alt Display"
    },
    "Trigger: Ability End"
  ],
  "references": []
}