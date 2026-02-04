const configAbility = {
  "fileName": "2023030_Monster_XP_Elite02_02_Ability05_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Monster_XP_Elite02_02_ChargeEffect[<span class=\"descriptionNumberColor\">Japa</span>]"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "modifier": "Standard_BlackBlood[<span class=\"descriptionNumberColor\">Prana-Siphoned</span>]",
      "duration": {
        "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
        "displayLines": "{[Skill05[1]]}",
        "constants": [],
        "variables": [
          "{[Skill05[1]]}"
        ]
      },
      "baseChance": {
        "operator": "Variables[0] ({[Skill05[2]]}) || RETURN",
        "displayLines": "{[Skill05[2]]}",
        "constants": [],
        "variables": [
          "{[Skill05[2]]}"
        ]
      },
      "valuePerStack": {
        "MDF_DirtyHPRatio": {
          "operator": "Variables[0] ({[Skill05[0]]}) || RETURN",
          "displayLines": "{[Skill05[0]]}",
          "constants": [],
          "variables": [
            "{[Skill05[0]]}"
          ]
        }
      },
      "success": []
    },
    "Trigger: Ability End"
  ],
  "references": []
}