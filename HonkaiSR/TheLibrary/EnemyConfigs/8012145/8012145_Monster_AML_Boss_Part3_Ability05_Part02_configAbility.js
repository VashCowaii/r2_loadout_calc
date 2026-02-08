const configAbility = {
  "fileName": "8012145_Monster_AML_Boss_Part3_Ability05_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "AttackScaling": {
        "DamageType": "Quantum",
        "Damage": {
          "operator": "Variables[0] ({[Skill05[0]]}) || RETURN",
          "displayLines": "{[Skill05[0]]}",
          "constants": [],
          "variables": [
            "{[Skill05[0]]}"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"2065489118\">Standard_Entangle</a>[<span class=\"descriptionNumberColor\">Entanglement</span>]",
      "duration": {
        "operator": "Variables[0] ({[Skill05[2]]}) || RETURN",
        "displayLines": "{[Skill05[2]]}",
        "constants": [],
        "variables": [
          "{[Skill05[2]]}"
        ]
      },
      "baseChance": {
        "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
        "displayLines": "{[Skill05[1]]}",
        "constants": [],
        "variables": [
          "{[Skill05[1]]}"
        ]
      },
      "valuePerStack": {
        "MDF_ActionDelayRatio": {
          "operator": "Variables[0] ({[Skill05[3]]}) || RETURN",
          "displayLines": "{[Skill05[3]]}",
          "constants": [],
          "variables": [
            "{[Skill05[3]]}"
          ]
        },
        "Modifier_Entangle_DamagePercentage": {
          "operator": "Variables[0] ({[Skill05[4]]}) || RETURN",
          "displayLines": "{[Skill05[4]]}",
          "constants": [],
          "variables": [
            "{[Skill05[4]]}"
          ]
        },
        "Modifier_Entangle_DamageValue": 0
      }
    },
    "Trigger: Attack End",
    "Trigger: Ability End"
  ],
  "references": []
}