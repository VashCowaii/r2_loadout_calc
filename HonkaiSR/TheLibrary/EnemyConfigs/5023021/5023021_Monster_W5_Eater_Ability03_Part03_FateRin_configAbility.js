const configAbility = {
  "fileName": "5023021_Monster_W5_Eater_Ability03_Part03_FateRin",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-2066845206\">Enemy_W5_Eater_Ability03_Attack_FateRin</a>[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
      "duration": {
        "displayLines": "Skill03_LifeTime"
      },
      "valuePerStack": {
        "MDF_Attack": {
          "displayLines": "Skill03_Attack"
        }
      },
      "casterAssign": "TargetSelf"
    }
  ],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  },
  "references": []
}