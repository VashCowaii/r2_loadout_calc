const configAbility = {
  "fileName": "2023031_Monster_XP_Elite02_02_RLElite_Ability05_Part02",
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
      "modifier": "Monster_XP_Elite02_02_RLElite_ChargeEffect[<span class=\"descriptionNumberColor\">Japa</span>]"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "modifier": "Monster_XP_Elite02_02_RLElite_DirtyHPListener",
      "valuePerStack": {
        "MDF_DirtyHPAddedRatio": {
          "operator": "Variables[0] ({[Skill05[0]]}) || RETURN",
          "displayLines": "{[Skill05[0]]}",
          "constants": [],
          "variables": [
            "{[Skill05[0]]}"
          ]
        }
      }
    },
    "Trigger: Ability End"
  ],
  "references": []
}