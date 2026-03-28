const configAbility = {
  "fileName": "2024013_Monster_W2_Xuanlu_10_Ability14_Initiate",
  "childAbilityList": [
    "2024013_Monster_W2_Xuanlu_10_Ability14_Initiate"
  ],
  "skillTrigger": "Skill14",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1367728749\">Enemy_W2_Xuanlu_10_RL_RageHandler</a>",
      "valuePerStack": {
        "MDF_DamageUpRatio_PerLayer": {
          "operator": "Variables[0] ({[Skill14[0]]}) || RETURN",
          "displayLines": "{[Skill14[0]]}",
          "constants": [],
          "variables": [
            "{[Skill14[0]]}"
          ]
        }
      }
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}