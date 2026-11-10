const configAbility = {
  "fileName": "2024012_Monster_W2_Xuanlu_10_Ability09_Part02",
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
          "displayLines": "{[Skill09[0]]}"
        },
        "Enemy_W2_Xuanlu_10_EnergyDrain_TurnHealRatio": {
          "displayLines": "{[Skill09[1]]}"
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