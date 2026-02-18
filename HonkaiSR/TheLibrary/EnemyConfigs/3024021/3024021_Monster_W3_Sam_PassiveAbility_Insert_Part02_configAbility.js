const configAbility = {
  "fileName": "3024021_Monster_W3_Sam_PassiveAbility_Insert_Part02",
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
        "operator": "Variables[0] ({[Skill04[1]]}) || RETURN",
        "displayLines": "{[Skill04[1]]}",
        "constants": [],
        "variables": [
          "{[Skill04[1]]}"
        ]
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
          "operator": "Variables[0] ({[PassiveSkill01[3]]}) || RETURN",
          "displayLines": "{[PassiveSkill01[3]]}",
          "constants": [],
          "variables": [
            "{[PassiveSkill01[3]]}"
          ]
        },
        "MDF_SpeedUpRatio": {
          "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
          "displayLines": "{[Skill04[0]]}",
          "constants": [],
          "variables": [
            "{[Skill04[0]]}"
          ]
        },
        "MDF_ChangeHPRatio": {
          "operator": "Variables[0] ({[Skill04[3]]}) || RETURN",
          "displayLines": "{[Skill04[3]]}",
          "constants": [],
          "variables": [
            "{[Skill04[3]]}"
          ]
        }
      }
    }
  ],
  "references": []
}