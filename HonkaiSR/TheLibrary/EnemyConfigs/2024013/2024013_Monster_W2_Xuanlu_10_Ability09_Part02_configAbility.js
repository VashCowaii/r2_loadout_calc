const configAbility = {
  "fileName": "2024013_Monster_W2_Xuanlu_10_Ability09_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"938780665\">Enemy_W2_Xuanlu_10_EnergyDrain</a>[<span class=\"descriptionNumberColor\">Synwood Renewal</span>]",
      "valuePerStack": {
        "Enemy_W2_Xuanlu_10_EnergyDrain_TriggerHealRatio": {
          "operator": "Variables[0] ({[Skill09[0]]}) || RETURN",
          "displayLines": "{[Skill09[0]]}",
          "constants": [],
          "variables": [
            "{[Skill09[0]]}"
          ]
        },
        "Enemy_W2_Xuanlu_10_EnergyDrain_TurnHealRatio": {
          "operator": "Variables[0] ({[Skill09[1]]}) || RETURN",
          "displayLines": "{[Skill09[1]]}",
          "constants": [],
          "variables": [
            "{[Skill09[1]]}"
          ]
        }
      }
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}