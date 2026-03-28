const configAbility = {
  "fileName": "4032022_Monster_W4_FireProwler_01_Ability02_Part02_FantasticStory",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1028185089\">Enemy_AML_Minion02_01_RallyHP_Controller_V2</a>",
      "valuePerStack": {
        "MDF_RallyTransferRatio": {
          "operator": "Variables[0] (UnusedUnderThisBase_345) || RETURN",
          "displayLines": "UnusedUnderThisBase_345",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_345"
          ]
        },
        "MDF_Rally_HealPercentage": {
          "operator": "Variables[0] (UnusedUnderThisBase_346) || RETURN",
          "displayLines": "UnusedUnderThisBase_346",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_346"
          ]
        },
        "MDF_Rally_Strongth_AllDamageTypeAddedRatio": {
          "operator": "Variables[0] (UnusedUnderThisBase_347) || RETURN",
          "displayLines": "UnusedUnderThisBase_347",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_347"
          ]
        }
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "AttackScaling": {
        "DamageType": "Physical",
        "Damage": {
          "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
          "displayLines": "{[Skill02[0]]}",
          "constants": [],
          "variables": [
            "{[Skill02[0]]}"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "100%"
      }
    },
    "Trigger: Attack End",
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "references": []
}