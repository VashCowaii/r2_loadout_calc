const configAbility = {
  "fileName": "4033030_Monster_W4_Shooter_01_Ability01_Part02_Insert",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Modifier-Specific Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Level Entity}}"
      },
      "modifierName": "<a class=\"gModGreen\" id=\"-534426566\">W4_Griffin_01_BattleScore1</a>",
      "variableName": "AchievementFlag_W4_Griffin_01",
      "value": 0
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
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
    {
      "name": "Update Energy",
      "on": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "value": 10,
      "isFixed": "* ERR"
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
    "Trigger: Attack End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "references": []
}