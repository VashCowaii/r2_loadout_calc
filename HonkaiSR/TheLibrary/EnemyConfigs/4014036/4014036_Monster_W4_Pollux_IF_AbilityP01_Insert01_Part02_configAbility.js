const configAbility = {
  "fileName": "4014036_Monster_W4_Pollux_IF_AbilityP01_Insert01_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-2037214572\">Enemy_W4_Pollux_IF_AbilityP01_NegativeBlood_Controller</a>",
      "valuePerStack": {
        "MDF_NegativeBlood_Target_DeathCountDown": {
          "operator": "Variables[0] ({[SkillP01[0]]}) || RETURN",
          "displayLines": "{[SkillP01[0]]}",
          "constants": [],
          "variables": [
            "{[SkillP01[0]]}"
          ]
        },
        "MDF_NegativeBlood_Target_FatigueRatio": {
          "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
          "displayLines": "{[SkillP01[1]]}",
          "constants": [],
          "variables": [
            "{[SkillP01[1]]}"
          ]
        },
        "MDF_NegativeBlood_Target_StanceBreakDownRatio": {
          "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
          "displayLines": "{[SkillP01[2]]}",
          "constants": [],
          "variables": [
            "{[SkillP01[2]]}"
          ]
        }
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1112261788\">Enemy_W4_PolluxPart_IF_Reflex</a>[<span class=\"descriptionNumberColor\">Corrosive Retaliation</span>]",
      "valuePerStack": {
        "MDF_ReflexDamageValue": {
          "operator": "Variables[0] ({[SkillP04[0]]}) || RETURN",
          "displayLines": "{[SkillP04[0]]}",
          "constants": [],
          "variables": [
            "{[SkillP04[0]]}"
          ]
        }
      }
    }
  ],
  "references": []
}