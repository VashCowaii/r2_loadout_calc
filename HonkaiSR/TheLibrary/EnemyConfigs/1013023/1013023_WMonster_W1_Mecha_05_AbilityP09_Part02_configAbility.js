const configAbility = {
  "fileName": "1013023_WMonster_W1_Mecha_05_AbilityP09_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "AttackScaling": {
        "DamageType": "Physical",
        "Damage": {
          "operator": "Variables[0] ({[Skill09[0]]}) || RETURN",
          "displayLines": "{[Skill09[0]]}",
          "constants": [],
          "variables": [
            "{[Skill09[0]]}"
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
      "modifier": "W1_Mecha02_ThunderDOT[<span class=\"descriptionNumberColor\">Bleed</span>]",
      "duration": 2,
      "baseChance": 1,
      "stackLimit": {
        "operator": "Variables[0] ({[Skill06[3]]}) || RETURN",
        "displayLines": "{[Skill06[3]]}",
        "constants": [],
        "variables": [
          "{[Skill06[3]]}"
        ]
      },
      "valuePerStack": {
        "Modifier_Bleed_DamagePercentage": {
          "operator": "Variables[0] ({[Skill06[1]]}) || RETURN",
          "displayLines": "{[Skill06[1]]}",
          "constants": [],
          "variables": [
            "{[Skill06[1]]}"
          ]
        },
        "MDF_MaxLayer": {
          "operator": "Variables[0] ({[Skill06[3]]}) || RETURN",
          "displayLines": "{[Skill06[3]]}",
          "constants": [],
          "variables": [
            "{[Skill06[3]]}"
          ]
        }
      }
    },
    "Trigger: Attack End"
  ],
  "references": []
}