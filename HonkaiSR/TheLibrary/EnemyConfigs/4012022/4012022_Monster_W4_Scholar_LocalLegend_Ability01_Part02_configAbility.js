const configAbility = {
  "fileName": "4012022_Monster_W4_Scholar_LocalLegend_Ability01_Part02",
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
      "modifier": "<a class=\"gModGreen\" id=\"2022021618\">MModifier_Monster_W4_Scholar_LocalLegend_BookTarget</a>[<span class=\"descriptionNumberColor\">Gleaned Instruction</span>]",
      "valuePerStack": {
        "MDF_SpeedUpRatio": {
          "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
          "displayLines": "{[Skill01[0]]}",
          "constants": [],
          "variables": [
            "{[Skill01[0]]}"
          ]
        }
      },
      "casterAssign": "CasterSelf"
    },
    "Trigger: Ability End"
  ],
  "references": []
}