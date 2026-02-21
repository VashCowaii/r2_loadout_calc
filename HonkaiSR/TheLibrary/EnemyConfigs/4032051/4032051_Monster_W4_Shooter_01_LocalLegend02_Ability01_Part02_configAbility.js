const configAbility = {
  "fileName": "4032051_Monster_W4_Shooter_01_LocalLegend02_Ability01_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{EVENT[RoT] Dark Praetor: Dark Characters}}"
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
        "target": "{{EVENT[RoT] Dark Praetor: Dark Characters}}"
      },
      "AttackScaling": {
        "DamageType": "Physical",
        "Damage": {
          "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
          "displayLines": "{[Skill01[0]]}",
          "constants": [],
          "variables": [
            "{[Skill01[0]]}"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "EnergyGainPercent": "100%"
      }
    },
    "Trigger: Attack End",
    "Trigger: Ability End"
  ],
  "references": []
}