const configAbility = {
  "fileName": "2022080_Monster_W2_Xuanlu_02_Ability01_Part02",
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
      "modifier": "<a class=\"gModGreen\" id=\"-924806619\">Enemy_W2_Xuanlu_02_Bonus</a>[<span class=\"descriptionNumberColor\">Engender</span>]",
      "duration": {
        "displayLines": "{[Skill01[1]]}"
      },
      "valuePerStack": {
        "MDF_AttackAddedRatio_PerLayer": {
          "displayLines": "{[Skill01[0]]}"
        }
      }
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-924806619\">Enemy_W2_Xuanlu_02_Bonus</a>[<span class=\"descriptionNumberColor\">Engender</span>]",
      "stackType": "Replace",
      "stackData": [
        "MDF_AttackAddedRatio_PerLayer"
      ],
      "description": "Increases ATK.",
      "type": "Buff",
      "effectName": "ATK Boost",
      "statusName": "Engender",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
              "value": {
                "displayLines": "MDF_AttackAddedRatio_PerLayer"
              }
            }
          ]
        }
      ]
    }
  ]
}