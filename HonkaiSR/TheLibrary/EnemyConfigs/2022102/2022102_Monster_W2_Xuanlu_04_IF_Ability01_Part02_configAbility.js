const configAbility = {
  "fileName": "2022102_Monster_W2_Xuanlu_04_IF_Ability01_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "Define Custom Variable with Copy",
      "target": {
        "name": "Target Name",
        "target": "{{Caster's Summoner}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"225051539\">Enemy_W2_Xuanlu_IF_Ability08Controller</a>",
      "variable": "_CurrentChargeCount",
      "target2": null,
      "variable2": "Xuanlu_Skill08_CurrentChargeCount"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "Xuanlu_Skill08_CurrentChargeCount",
        "compareType": "<=",
        "value2": 1
      }
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}