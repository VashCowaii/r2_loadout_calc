const configAbility = {
  "fileName": "4044011_Monster_W4_Theoroi_Ability11_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1233101616\">Monster_W4_Theoroi_Ability01_Mark</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Targets Adjacent(Blast)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1233101616\">Monster_W4_Theoroi_Ability01_Mark</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Is Part Of",
        "of": {
          "name": "Target Name",
          "target": "{{Ability Target(ST)}}"
        },
        "target": {
          "name": "Target Name",
          "target": "{{Far Left Player Entity}}"
        },
        "mustBeAlive2": true
      }
    },
    "Ability Start",
    {
      "name": "Shot Fired"
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
          "operator": "Variables[0] ({[Skill11[0]]}) || RETURN",
          "displayLines": "{[Skill11[0]]}",
          "constants": [],
          "variables": [
            "{[Skill11[0]]}"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Targets Adjacent(Blast)}}"
      },
      "AttackScaling": {
        "DamageType": "Quantum",
        "Damage": {
          "operator": "Variables[0] ({[Skill11[1]]}) || RETURN",
          "displayLines": "{[Skill11[1]]}",
          "constants": [],
          "variables": [
            "{[Skill11[1]]}"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "100%"
      }
    },
    "Trigger: Attack End",
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1233101616\">Monster_W4_Theoroi_Ability01_Mark</a>"
    },
    "Trigger: Ability End"
  ],
  "references": []
}