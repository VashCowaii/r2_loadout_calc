const configAbility = {
  "fileName": "8034010_Monster_W3_Aventurine_Ability06_Part02",
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
        "DamageType": "Imaginary",
        "Damage": {
          "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
          "displayLines": "{[Skill06[0]]}",
          "constants": [],
          "variables": [
            "{[Skill06[0]]}"
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
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1997760414\">Standard_Confine</a>[<span class=\"descriptionNumberColor\">Imprisonment</span>]",
      "duration": 1,
      "baseChance": {
        "operator": "Variables[0] ({[Skill06[1]]}) || RETURN",
        "displayLines": "{[Skill06[1]]}",
        "constants": [],
        "variables": [
          "{[Skill06[1]]}"
        ]
      },
      "immediateEffect": true,
      "valuePerStack": {
        "MDF_ActionDelayRatio": {
          "operator": "Variables[0] ({[Skill06[2]]}) || RETURN",
          "displayLines": "{[Skill06[2]]}",
          "constants": [],
          "variables": [
            "{[Skill06[2]]}"
          ]
        }
      }
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-245963951\">Monster_W3_Aventurine_Sign</a>"
    }
  ],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  },
  "references": []
}