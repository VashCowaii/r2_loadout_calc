const configAbility = {
  "fileName": "1023011_Monster_W1_Mecha_Fire_Ability01_Part02",
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
      "modifier": "<a class=\"gModGreen\" id=\"188036182\">Monster_W1_Mecha_Fire_Burning</a>[<span class=\"descriptionNumberColor\">Mania</span>]",
      "valuePerStack": {
        "Modifier_AttackAddedRatio": {
          "displayLines": "{[Skill01[0]]}"
        },
        "Modifier_SpeedDelta": {
          "displayLines": "{[Skill01[1]]}"
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