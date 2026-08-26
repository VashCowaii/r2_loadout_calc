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
          "operator": "Variables[0] (UnusedUnderThisBase_13197) || RETURN",
          "displayLines": "UnusedUnderThisBase_13197",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_13197"
          ]
        },
        "MDF_Rally_HealPercentage": {
          "operator": "Variables[0] (UnusedUnderThisBase_13195) || RETURN",
          "displayLines": "UnusedUnderThisBase_13195",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_13195"
          ]
        },
        "MDF_Rally_HealUpRatio": {
          "operator": "Variables[0] (UnusedUnderThisBase_13198) || RETURN",
          "displayLines": "UnusedUnderThisBase_13198",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_13198"
          ]
        },
        "MDF_Rally_Strongth_AllDamageTypeAddedRatio": {
          "operator": "Variables[0] (UnusedUnderThisBase_13199) || RETURN",
          "displayLines": "UnusedUnderThisBase_13199",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_13199"
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
          "operator": "Variables[0] (UnusedUnderThisBase_14438) || RETURN",
          "displayLines": "UnusedUnderThisBase_14438",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_14438"
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
          "operator": "Variables[0] (UnusedUnderThisBase_11476) || RETURN",
          "displayLines": "UnusedUnderThisBase_11476",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_11476"
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