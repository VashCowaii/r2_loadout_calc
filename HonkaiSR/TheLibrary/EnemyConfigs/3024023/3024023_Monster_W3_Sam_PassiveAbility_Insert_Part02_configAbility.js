const configAbility = {
  "fileName": "3024023_Monster_W3_Sam_PassiveAbility_Insert_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"671626404\">Monster_W3_Sam_MainEnd</a>"
    },
    {
      "name": "Consume",
      "consumeFrom": "MaxHP",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "consumePercent": {
        "displayLines": "{[Skill04[1]]}"
      },
      "consumeFloor": 1
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-909732184\">Monster_W3_Sam_Enhance</a>[<span class=\"descriptionNumberColor\">Secondary Combustion</span>]",
      "valuePerStack": {
        "MDF_DamagePercentage": {
          "displayLines": "{[PassiveSkill01[3]]}"
        },
        "MDF_SpeedUpRatio": {
          "displayLines": "{[Skill04[0]]}"
        },
        "MDF_ChangeHPRatio": {
          "displayLines": "{[Skill04[3]]}"
        }
      }
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}