const configAbility = {
  "fileName": "4033022_Monster_W4_Claymore_01_LocalLegend_Ability01_Part02",
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
          "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
          "displayLines": "{[PassiveSkill01[0]]}",
          "constants": [],
          "variables": [
            "{[PassiveSkill01[0]]}"
          ]
        },
        "MDF_Rally_HealPercentage": {
          "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
          "displayLines": "{[PassiveSkill01[1]]}",
          "constants": [],
          "variables": [
            "{[PassiveSkill01[1]]}"
          ]
        },
        "MDF_Rally_HealUpRatio": {
          "operator": "Variables[0] ({[PassiveSkill01[2]]}) || RETURN",
          "displayLines": "{[PassiveSkill01[2]]}",
          "constants": [],
          "variables": [
            "{[PassiveSkill01[2]]}"
          ]
        },
        "MDF_Rally_Strongth_AllDamageTypeAddedRatio": {
          "operator": "Variables[0] ({[PassiveSkill01[3]]}) || RETURN",
          "displayLines": "{[PassiveSkill01[3]]}",
          "constants": [],
          "variables": [
            "{[PassiveSkill01[3]]}"
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