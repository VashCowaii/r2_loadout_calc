const configAbility = {
  "fileName": "1012011_Monster_W1_CWMecha_03_Alter01_Ability06_Part02",
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
          "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__30) || RETURN",
          "displayLines": "ENEMIES_OBJECT_UNUSED__30",
          "constants": [],
          "variables": [
            "ENEMIES_OBJECT_UNUSED__30"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "Standard_FireTakenRatio[<span class=\"descriptionNumberColor\">Fire Vulnerability</span>]",
      "duration": 3,
      "baseChance": 1,
      "valuePerStack": {
        "MDF_PropertyValue": 0.1
      }
    },
    "Trigger: Ability End"
  ],
  "references": []
}