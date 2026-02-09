const compositeAbilityObject = {
  "fullCharacterName": -1285159557,
  "trimCharacterName": -1285159557,
  "abilityList": [
    "-1285159557_CommonActiveAbility_Fire_Single_Part02",
    "-1285159557_Standard_LockHP",
    "-1285159557_Standard_Servant_Forcekill"
  ],
  "abilityObject": {
    "-1285159557_CommonActiveAbility_Fire_Single_Part02": {
      "fileName": "-1285159557_CommonActiveAbility_Fire_Single_Part02",
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
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__48) || RETURN",
              "displayLines": "ENEMIES_OBJECT_UNUSED__48",
              "constants": [],
              "variables": [
                "ENEMIES_OBJECT_UNUSED__48"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "-1285159557_Standard_LockHP": {
      "fileName": "-1285159557_Standard_LockHP",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1845786667\">Standard_LockHP</a>"
        }
      ],
      "references": []
    },
    "-1285159557_Standard_Servant_Forcekill": {
      "fileName": "-1285159557_Standard_Servant_Forcekill",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Force Entity Death",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "abortInsertedAbilities": true
        }
      ],
      "references": []
    }
  }
}