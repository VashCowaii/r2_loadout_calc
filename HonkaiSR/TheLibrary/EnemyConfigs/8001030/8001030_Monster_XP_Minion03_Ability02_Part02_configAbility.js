const configAbility = {
  "fileName": "8001030_Monster_XP_Minion03_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{All Team Members}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1727496698\">Monster_XP_Minion03_Attack</a>[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
      "duration": {
        "displayLines": "{[Skill02[1]]}"
      },
      "valuePerStack": {
        "MDF_AttackAddedRatio": {
          "displayLines": "{[Skill02[0]]}"
        }
      }
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{All Team Members}}"
  },
  "references": []
}