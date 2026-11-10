const configAbility = {
  "fileName": "60010_MissionBattleEvent60010_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Wind",
        "Damage": {
          "displayLines": "{[Skill03[0]]}"
        },
        "dmgFormula": "Max HP Scaling",
        "Toughness": {
          "displayLines": "{[Skill03[1]]}"
        },
        "ToughnessDMGType": {
          "DamageType": "Wind"
        },
        "Tags": null,
        "EnergyGainPercent": "100%"
      }
    },
    "Trigger: Attack End",
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"2037361233\">BlackSwan_DOT</a>[<span class=\"descriptionNumberColor\">Arcana</span>]",
      "stackLimit": 50,
      "valuePerStack": {
        "Basic_DamagePercentage": {
          "displayLines": "{[Skill03[4]]}"
        },
        "ExtraLayer_DamagePercentage": {
          "displayLines": "{[Skill03[5]]}"
        },
        "Spread_DamagePercentage": {
          "displayLines": "{[Skill03[6]]}"
        },
        "Cast_By_Level": 1
      },
      "addStacksPerTrigger": 3
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "searchRandom": true,
      "maxTargets": 5,
      "conditions": {
        "name": "Enemy ID",
        "ID": 3012031,
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "characterName": "Sombrous Sepulcher"
      },
      "ifTargetFound": [
        {
          "name": "Action Advance/Delay",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "advanceType": "Advance",
          "multiAdd": -1
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "All Enemy Team Members"
  }
}