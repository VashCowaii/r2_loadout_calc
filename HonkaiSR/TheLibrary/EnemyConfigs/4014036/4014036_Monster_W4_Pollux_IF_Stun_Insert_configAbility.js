const configAbility = {
  "fileName": "4014036_Monster_W4_Pollux_IF_Stun_Insert",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Deleted bullshit",
    {
      "name": "Consume",
      "consumeFrom": "MaxHP",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "consumePercent": {
        "operator": "Variables[0] ({[SkillP03[3]]}) || RETURN",
        "displayLines": "{[SkillP03[3]]}",
        "constants": [],
        "variables": [
          "{[SkillP03[3]]}"
        ]
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-2005725125\">Enemy_W4_Pollux_IF_Strengthen_Break</a>"
    }
  ],
  "references": []
}