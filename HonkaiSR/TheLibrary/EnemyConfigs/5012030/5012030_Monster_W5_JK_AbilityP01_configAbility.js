const configAbility = {
  "fileName": "5012030_Monster_W5_JK_AbilityP01",
  "skillTrigger": "SkillP01",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Level Entity}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"56977717\">Enemy_W5_JK_ElationPointListener</a>",
      "valuePerStack": {
        "MDF_ThresholdValue": {
          "displayLines": "{[SkillP01[2]]}"
        }
      },
      "casterAssign": "TargetSelf"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"256670650\">Enemy_W5_JK_Power</a>[<span class=\"descriptionNumberColor\">Book-Smart</span>]",
      "valuePerStack": {
        "MDF_AllDamageTypeAddedRatio": {
          "displayLines": "{[SkillP01[0]]}"
        },
        "MDF_AllDamageReduce": {
          "displayLines": "{[SkillP01[1]]}"
        },
        "MDF_ThresholdValue": {
          "displayLines": "{[SkillP01[2]]}"
        }
      }
    }
  ],
  "whenAdded": [
    {
      "name": "Random Event",
      "odds": [
        1,
        1,
        1
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}