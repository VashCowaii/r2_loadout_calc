const configAbility = {
  "fileName": "8012140_Monster_AML_Boss_Part1_Ability02_Part02",
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
      "AttackScaling": {
        "DamageType": "Imaginary",
        "Damage": {
          "displayLines": "{[Skill02[0]]}"
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
        "target": "{{Hostile Entities(AOE)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1997760414\">Standard_Confine</a>[<span class=\"descriptionNumberColor\">Imprisonment</span>]",
      "duration": {
        "displayLines": "{[Skill02[2]]}"
      },
      "baseChance": {
        "displayLines": "{[Skill02[1]]}"
      },
      "immediateEffect": true,
      "valuePerStack": {
        "MDF_SpeedDownRatio": {
          "displayLines": "{[Skill02[3]]}"
        },
        "MDF_ActionDelayRatio": {
          "displayLines": "{[Skill02[4]]}"
        }
      }
    },
    "Trigger: Attack End",
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "references": []
}