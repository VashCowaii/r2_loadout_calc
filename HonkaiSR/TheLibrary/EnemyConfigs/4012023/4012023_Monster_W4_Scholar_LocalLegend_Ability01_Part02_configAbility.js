const configAbility = {
  "fileName": "4012023_Monster_W4_Scholar_LocalLegend_Ability01_Part02",
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
          "operator": "Variables[0] ([object Object]) || RETURN",
          "displayLines": "[object Object]",
          "constants": [],
          "variables": [
            {}
          ]
        }
      },
      "casterAssign": "CasterSelf"
    },
    "Trigger: Ability End"
  ],
  "references": []
}