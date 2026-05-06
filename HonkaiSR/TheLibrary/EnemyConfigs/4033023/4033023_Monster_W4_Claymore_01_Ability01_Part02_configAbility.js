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
          "operator": "Variables[0] (UnusedUnderThisBase_12234) || RETURN",
          "displayLines": "UnusedUnderThisBase_12234",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_12234"
          ]
        },
        "MDF_Rally_HealPercentage": {
          "operator": "Variables[0] (UnusedUnderThisBase_12232) || RETURN",
          "displayLines": "UnusedUnderThisBase_12232",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_12232"
          ]
        },
        "MDF_Rally_HealUpRatio": {
          "operator": "Variables[0] (UnusedUnderThisBase_12235) || RETURN",
          "displayLines": "UnusedUnderThisBase_12235",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_12235"
          ]
        },
        "MDF_Rally_Strongth_AllDamageTypeAddedRatio": {
          "operator": "Variables[0] (UnusedUnderThisBase_12236) || RETURN",
          "displayLines": "UnusedUnderThisBase_12236",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_12236"
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
          "operator": "Variables[0] (UnusedUnderThisBase_13212) || RETURN",
          "displayLines": "UnusedUnderThisBase_13212",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_13212"
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
          "operator": "Variables[0] (UnusedUnderThisBase_10638) || RETURN",
          "displayLines": "UnusedUnderThisBase_10638",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_10638"
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