const configAbility = {
  "fileName": "8012142_Monster_AML_Boss_Part3_Ability06_Part02",
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
          "operator": "Variables[0] ({[Skill06[0]]}) || Constants[0] (0.5) || MUL || RETURN",
          "displayLines": "({[Skill06[0]]} * 0.5)",
          "constants": [
            0.5
          ],
          "variables": [
            "{[Skill06[0]]}"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "50%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "AttackScaling": {
        "DamageType": "Quantum",
        "Damage": {
          "operator": "Variables[0] ({[Skill06[0]]}) || Constants[0] (0.5) || MUL || RETURN",
          "displayLines": "({[Skill06[0]]} * 0.5)",
          "constants": [
            0.5
          ],
          "variables": [
            "{[Skill06[0]]}"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "50%"
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
        "operator": "Variables[0] ({[Skill06[2]]}) || RETURN",
        "displayLines": "{[Skill06[2]]}",
        "constants": [],
        "variables": [
          "{[Skill06[2]]}"
        ]
      },
      "baseChance": {
        "operator": "Variables[0] ({[Skill06[1]]}) || RETURN",
        "displayLines": "{[Skill06[1]]}",
        "constants": [],
        "variables": [
          "{[Skill06[1]]}"
        ]
      },
      "valuePerStack": {
        "MDF_ActionDelayRatio": {
          "operator": "Variables[0] ({[Skill06[3]]}) || RETURN",
          "displayLines": "{[Skill06[3]]}",
          "constants": [],
          "variables": [
            "{[Skill06[3]]}"
          ]
        },
        "Modifier_Entangle_DamagePercentage": {
          "operator": "Variables[0] ({[Skill06[4]]}) || RETURN",
          "displayLines": "{[Skill06[4]]}",
          "constants": [],
          "variables": [
            "{[Skill06[4]]}"
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