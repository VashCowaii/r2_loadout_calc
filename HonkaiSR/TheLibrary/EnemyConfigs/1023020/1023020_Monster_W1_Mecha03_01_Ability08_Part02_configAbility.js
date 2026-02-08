const configAbility = {
  "fileName": "1023020_Monster_W1_Mecha03_01_Ability08_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Target Name",
          "target": "{{All Team Members}}"
        },
        "value1": "TeamCharacterCount",
        "compareType": "<=",
        "value2": 1
      }
    },
    "Ability Start",
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"2015116315\">Monster_W1_Mecha03_01_Overheat</a>[<span class=\"descriptionNumberColor\">DEF Reduction</span>]",
      "valuePerStack": {
        "MDF_DefenceAddedRatio": {
          "operator": "Variables[0] ({[Skill08[0]]}) || RETURN",
          "displayLines": "{[Skill08[0]]}",
          "constants": [],
          "variables": [
            "{[Skill08[0]]}"
          ]
        }
      }
    },
    {
      "name": "Achievement",
      "matchTags": true,
      "relatedAchievements": [
        {
          "title": "Regurgitation",
          "desc": "Cause Frigid Prowler to fail to use Devour Otherling",
          "rarity": "Mid"
        }
      ]
    },
    {
      "name": "Change Character Transformation",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "phase": "Phase1"
    },
    "Trigger: Ability End"
  ],
  "references": []
}