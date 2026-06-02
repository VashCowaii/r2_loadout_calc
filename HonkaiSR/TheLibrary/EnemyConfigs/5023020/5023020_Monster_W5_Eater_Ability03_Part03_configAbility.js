const configAbility = {
  "fileName": "5023020_Monster_W5_Eater_Ability03_Part03",
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
      "modifier": "<a class=\"gModGreen\" id=\"555908682\">Enemy_W5_Eater_Ability03_Attack</a>[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
      "duration": {
        "operator": "Variables[0] (Skill03_LifeTime) || RETURN",
        "displayLines": "Skill03_LifeTime",
        "constants": [],
        "variables": [
          "Skill03_LifeTime"
        ]
      },
      "valuePerStack": {
        "MDF_Attack": {
          "operator": "Variables[0] (Skill03_Attack) || RETURN",
          "displayLines": "Skill03_Attack",
          "constants": [],
          "variables": [
            "Skill03_Attack"
          ]
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