const configAbility = {
  "fileName": "2024013_Monster_W2_Xuanlu_Ability07_Part02",
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
      "modifier": "<a class=\"gModGreen\" id=\"-2023283041\">Enemy_W2_Xuanlu_Ability07_NoWeakness</a>[<span class=\"descriptionNumberColor\">Hardy Leaf Sheath</span>]",
      "duration": {
        "operator": "Variables[0] ({[Skill07[1]]}) || RETURN",
        "displayLines": "{[Skill07[1]]}",
        "constants": [],
        "variables": [
          "{[Skill07[1]]}"
        ]
      },
      "valuePerStack": {
        "MDF_DefenceAddedRatio": {
          "operator": "Variables[0] ({[Skill07[0]]}) || RETURN",
          "displayLines": "{[Skill07[0]]}",
          "constants": [],
          "variables": [
            "{[Skill07[0]]}"
          ]
        }
      }
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-2023283041\">Enemy_W2_Xuanlu_Ability07_NoWeakness</a>[<span class=\"descriptionNumberColor\">Hardy Leaf Sheath</span>]",
      "stackType": "Replace",
      "modifierFlags": [
        "MuteBreak"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Modify Weaknesses",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "action": "Protected",
              "valueList": [
                "Physical",
                "Fire",
                "Ice",
                "Thunder",
                "Wind",
                "Quantum",
                "Imaginary"
              ]
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_DefenceAddedRatio) || RETURN",
                "displayLines": "MDF_DefenceAddedRatio",
                "constants": [],
                "variables": [
                  "MDF_DefenceAddedRatio"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_DefenceAddedRatio"
      ],
      "latentQueue": [],
      "description": "DEF increases. Toughness cannot be reduced.",
      "type": "Buff",
      "effectName": "DEF Boost",
      "statusName": "Hardy Leaf Sheath"
    }
  ]
}