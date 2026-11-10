const configAbility = {
  "fileName": "4012021_Monster_W4_Scholar_Ability01_Part02",
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
      "modifier": "<a class=\"gModGreen\" id=\"-1765528423\">MModifier_Monster_W4_Scholar_BookTarget</a>[<span class=\"descriptionNumberColor\">Gleaned Instruction</span>]",
      "valuePerStack": {
        "MDF_SpeedUpRatio": {
          "displayLines": "{[Skill01[0]]}"
        },
        "MDF_DamageUpRatio": {
          "displayLines": "{[Skill01[1]]}"
        }
      },
      "casterAssign": "CasterSelf"
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  },
  "references": []
}