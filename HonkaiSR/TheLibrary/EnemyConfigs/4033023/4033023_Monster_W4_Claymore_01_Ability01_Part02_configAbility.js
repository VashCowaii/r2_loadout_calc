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
          "operator": "Variables[0] (UnusedUnderThisBase_13038) || RETURN",
          "displayLines": "UnusedUnderThisBase_13038",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_13038"
          ]
        },
        "MDF_Rally_HealPercentage": {
          "operator": "Variables[0] (UnusedUnderThisBase_13036) || RETURN",
          "displayLines": "UnusedUnderThisBase_13036",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_13036"
          ]
        },
        "MDF_Rally_HealUpRatio": {
          "operator": "Variables[0] (UnusedUnderThisBase_13039) || RETURN",
          "displayLines": "UnusedUnderThisBase_13039",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_13039"
          ]
        },
        "MDF_Rally_Strongth_AllDamageTypeAddedRatio": {
          "operator": "Variables[0] (UnusedUnderThisBase_13040) || RETURN",
          "displayLines": "UnusedUnderThisBase_13040",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_13040"
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
          "operator": "Variables[0] (UnusedUnderThisBase_14175) || RETURN",
          "displayLines": "UnusedUnderThisBase_14175",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_14175"
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
          "operator": "Variables[0] (UnusedUnderThisBase_11278) || RETURN",
          "displayLines": "UnusedUnderThisBase_11278",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_11278"
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