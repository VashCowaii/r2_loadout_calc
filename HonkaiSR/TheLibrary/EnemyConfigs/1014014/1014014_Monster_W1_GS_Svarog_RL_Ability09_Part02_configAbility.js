const configAbility = {
  "fileName": "1014014_Monster_W1_GS_Svarog_RL_Ability09_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "modifier": "Monster_W1_Svarog_RL_AttackUp[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
      "valuePerStack": {
        "MDF_DamageUpRatio_PerLayer": {
          "operator": "Variables[0] ({[Skill09[0]]}) || RETURN",
          "displayLines": "{[Skill09[0]]}",
          "constants": [],
          "variables": [
            "{[Skill09[0]]}"
          ]
        }
      }
    },
    "Trigger: Ability End"
  ],
  "references": []
}