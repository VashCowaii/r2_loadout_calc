const configAbility = {
  "fileName": "8024011_Monster_SW_Boss_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Wind",
        "Damage": {
          "displayLines": "{[Skill03[0]]}"
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
        "target": "{{Hostile Entities(AOE)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"603194622\">Monster_SW_Boss_DOT_Poison</a>[<span class=\"descriptionNumberColor\">Wind Shear</span>]",
      "duration": {
        "displayLines": "{[Skill01[3]]}"
      },
      "baseChance": 1,
      "stackLimit": {
        "displayLines": "{[Skill01[4]]}"
      },
      "valuePerStack": {
        "Modifier_Poison_DamagePercentage": {
          "displayLines": "{[Skill01[2]]}"
        }
      },
      "addStacksPerTrigger": {
        "displayLines": "{[Skill03[1]]}"
      }
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "references": []
}