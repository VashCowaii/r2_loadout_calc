const configAbility = {
  "fileName": "4033023_Monster_W4_Claymore_01_Ability01_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{ST and Blast}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1028185089\">Enemy_AML_Minion02_01_RallyHP_Controller_V2</a>",
      "valuePerStack": {
        "MDF_RallyTransferRatio": {
          "operator": "Variables[0] (UnusedUnderThisBase_12308) || RETURN",
          "displayLines": "UnusedUnderThisBase_12308",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_12308"
          ]
        },
        "MDF_Rally_HealPercentage": {
          "operator": "Variables[0] (UnusedUnderThisBase_12306) || RETURN",
          "displayLines": "UnusedUnderThisBase_12306",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_12306"
          ]
        },
        "MDF_Rally_HealUpRatio": {
          "operator": "Variables[0] (UnusedUnderThisBase_12309) || RETURN",
          "displayLines": "UnusedUnderThisBase_12309",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_12309"
          ]
        },
        "MDF_Rally_Strongth_AllDamageTypeAddedRatio": {
          "operator": "Variables[0] (UnusedUnderThisBase_12310) || RETURN",
          "displayLines": "UnusedUnderThisBase_12310",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_12310"
          ]
        }
      }
    },
    "Ability Start",
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "AttackScaling": {
        "DamageType": "Physical",
        "Damage": {
          "operator": "Variables[0] (UnusedUnderThisBase_13321) || RETURN",
          "displayLines": "UnusedUnderThisBase_13321",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_13321"
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
        "DamageType": "Physical",
        "Damage": {
          "operator": "Variables[0] (UnusedUnderThisBase_10674) || RETURN",
          "displayLines": "UnusedUnderThisBase_10674",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_10674"
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
    "primaryTarget": "{{Ability Target List}}"
  },
  "references": []
}