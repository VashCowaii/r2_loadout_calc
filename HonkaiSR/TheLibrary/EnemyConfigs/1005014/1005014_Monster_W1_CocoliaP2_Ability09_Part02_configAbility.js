const configAbility = {
  "fileName": "1005014_Monster_W1_CocoliaP2_Ability09_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1681589484\">Enemy_W1_CocoliaP2_Ability08_Charge</a>[<span class=\"descriptionNumberColor\">The Creation's Prelude</span>]"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Imaginary",
        "Damage": {
          "operator": "Variables[0] ({[Skill09[0]]}) || Constants[0] (0.1) || MUL || RETURN",
          "displayLines": "({[Skill09[0]]} * 0.1)",
          "constants": [
            0.1
          ],
          "variables": [
            "{[Skill09[0]]}"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "EnergyGainPercent": "10%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Imaginary",
        "Damage": {
          "operator": "Variables[0] ({[Skill09[0]]}) || Constants[0] (0.1) || MUL || RETURN",
          "displayLines": "({[Skill09[0]]} * 0.1)",
          "constants": [
            0.1
          ],
          "variables": [
            "{[Skill09[0]]}"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "EnergyGainPercent": "10%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Imaginary",
        "Damage": {
          "operator": "Variables[0] ({[Skill09[0]]}) || Constants[0] (0.1) || MUL || RETURN",
          "displayLines": "({[Skill09[0]]} * 0.1)",
          "constants": [
            0.1
          ],
          "variables": [
            "{[Skill09[0]]}"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "EnergyGainPercent": "10%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Imaginary",
        "Damage": {
          "operator": "Variables[0] ({[Skill09[0]]}) || Constants[0] (0.1) || MUL || RETURN",
          "displayLines": "({[Skill09[0]]} * 0.1)",
          "constants": [
            0.1
          ],
          "variables": [
            "{[Skill09[0]]}"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "EnergyGainPercent": "10%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Imaginary",
        "Damage": {
          "operator": "Variables[0] ({[Skill09[0]]}) || Constants[0] (0.1) || MUL || RETURN",
          "displayLines": "({[Skill09[0]]} * 0.1)",
          "constants": [
            0.1
          ],
          "variables": [
            "{[Skill09[0]]}"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "EnergyGainPercent": "10%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Imaginary",
        "Damage": {
          "operator": "Variables[0] ({[Skill09[0]]}) || Constants[0] (0.1) || MUL || RETURN",
          "displayLines": "({[Skill09[0]]} * 0.1)",
          "constants": [
            0.1
          ],
          "variables": [
            "{[Skill09[0]]}"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "EnergyGainPercent": "10%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Imaginary",
        "Damage": {
          "operator": "Variables[0] ({[Skill09[0]]}) || Constants[0] (0.4) || MUL || RETURN",
          "displayLines": "({[Skill09[0]]} * 0.4)",
          "constants": [
            0.4
          ],
          "variables": [
            "{[Skill09[0]]}"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "EnergyGainPercent": "40%"
      }
    },
    {
      "name": "Change Character Transformation",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "phase": "PhaseNormal"
    },
    "Trigger: Attack End",
    "Trigger: Ability End"
  ],
  "references": []
}