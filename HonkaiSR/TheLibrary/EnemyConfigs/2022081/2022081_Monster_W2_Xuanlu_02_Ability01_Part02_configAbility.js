const configAbility = {
  "fileName": "2022081_Monster_W2_Xuanlu_02_Ability01_Part02",
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
        "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
        "displayLines": "{[Skill01[1]]}",
        "constants": [],
        "variables": [
          "{[Skill01[1]]}"
        ]
      },
      "valuePerStack": {
        "MDF_AttackAddedRatio_PerLayer": {
          "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
          "displayLines": "{[Skill01[0]]}",
          "constants": [],
          "variables": [
            "{[Skill01[0]]}"
          ]
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
                "operator": "Variables[0] (MDF_AttackAddedRatio_PerLayer) || RETURN",
                "displayLines": "MDF_AttackAddedRatio_PerLayer",
                "constants": [],
                "variables": [
                  "MDF_AttackAddedRatio_PerLayer"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_AttackAddedRatio_PerLayer"
      ],
      "latentQueue": [],
      "description": "Increases ATK.",
      "type": "Buff",
      "effectName": "ATK Boost",
      "statusName": "Engender"
    }
  ]
}