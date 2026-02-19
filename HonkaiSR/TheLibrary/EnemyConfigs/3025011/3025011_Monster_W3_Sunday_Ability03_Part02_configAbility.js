const configAbility = {
  "fileName": "3025011_Monster_W3_Sunday_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"2144716663\">Standard_CTRL_Sleep</a>[<span class=\"descriptionNumberColor\">Alien Dream</span>]",
      "duration": {
        "operator": "Variables[0] ({[Skill03[1]]}) || RETURN",
        "displayLines": "{[Skill03[1]]}",
        "constants": [],
        "variables": [
          "{[Skill03[1]]}"
        ]
      },
      "baseChance": {
        "operator": "Variables[0] ({[Skill03[0]]}) || RETURN",
        "displayLines": "{[Skill03[0]]}",
        "constants": [],
        "variables": [
          "{[Skill03[0]]}"
        ]
      },
      "valuePerStack": {
        "MDF_AllDamageAddedRatio": 0.5
      }
    },
    "Trigger: Ability End"
  ],
  "references": []
}