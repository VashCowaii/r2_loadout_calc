const configAbility = {
  "fileName": "2004026_Monster_W2_Yanqing_Ability01_Part02_RL",
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
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Ice",
        "Damage": {
          "operator": "Variables[0] ({[Skill01[0]]}) || Constants[0] (0.5) || MUL || RETURN",
          "displayLines": "({[Skill01[0]]} * 0.5)",
          "constants": [
            0.5
          ],
          "variables": [
            "{[Skill01[0]]}"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "EnergyGainPercent": "50%"
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
        "DamageType": "Ice",
        "Damage": {
          "operator": "Variables[0] ({[Skill01[0]]}) || Constants[0] (0.5) || MUL || RETURN",
          "displayLines": "({[Skill01[0]]} * 0.5)",
          "constants": [
            0.5
          ],
          "variables": [
            "{[Skill01[0]]}"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "EnergyGainPercent": "50%"
      }
    },
    "Trigger: Attack End",
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{All Team Members}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1122230262\">Enemy_W2_Yanqing_Standard_Overdrive</a>[<span class=\"descriptionNumberColor\">Chilling Light</span>]",
      "valuePerStack": {
        "AllDamageTypeAddedRatioPerLayer": {
          "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
          "displayLines": "{[Skill01[1]]}",
          "constants": [],
          "variables": [
            "{[Skill01[1]]}"
          ]
        }
      },
      "addStacksPerTrigger": 1
    },
    "Trigger: Ability End"
  ],
  "references": []
}