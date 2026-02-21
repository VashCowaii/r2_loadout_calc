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
          "operator": "Variables[0] (UnusedUnderThisBase_391) || RETURN",
          "displayLines": "UnusedUnderThisBase_391",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_391"
          ]
        },
        "MDF_Rally_HealPercentage": {
          "operator": "Variables[0] (UnusedUnderThisBase_392) || RETURN",
          "displayLines": "UnusedUnderThisBase_392",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_392"
          ]
        },
        "MDF_Rally_HealUpRatio": {
          "operator": "Variables[0] (UnusedUnderThisBase_393) || RETURN",
          "displayLines": "UnusedUnderThisBase_393",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_393"
          ]
        },
        "MDF_Rally_Strongth_AllDamageTypeAddedRatio": {
          "operator": "Variables[0] (UnusedUnderThisBase_394) || RETURN",
          "displayLines": "UnusedUnderThisBase_394",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_394"
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
          "operator": "Variables[0] (UnusedUnderThisBase_3) || RETURN",
          "displayLines": "UnusedUnderThisBase_3",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_3"
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
          "operator": "Variables[0] (UnusedUnderThisBase_482) || RETURN",
          "displayLines": "UnusedUnderThisBase_482",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_482"
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
  "references": []
}