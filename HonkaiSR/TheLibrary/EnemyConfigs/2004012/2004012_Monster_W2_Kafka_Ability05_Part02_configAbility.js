const configAbility = {
  "fileName": "2004012_Monster_W2_Kafka_Ability05_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "UI Display Event",
      "popUpText": "Spirit Whisper"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1307984397\">Standard_MindControl</a>[<span class=\"descriptionNumberColor\">Dominated</span>]",
      "duration": {
        "operator": "Variables[0] ({[Skill05[0]]}) || Constants[0] (1) || ADD || RETURN",
        "displayLines": "({[Skill05[0]]} + 1)",
        "constants": [
          1
        ],
        "variables": [
          "{[Skill05[0]]}"
        ]
      },
      "baseChance": {
        "operator": "Variables[0] ({[Skill05[4]]}) || RETURN",
        "displayLines": "{[Skill05[4]]}",
        "constants": [],
        "variables": [
          "{[Skill05[4]]}"
        ]
      },
      "valuePerStack": {
        "MDF_MindControlDamagePercentage": {
          "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
          "displayLines": "{[Skill05[1]]}",
          "constants": [],
          "variables": [
            "{[Skill05[1]]}"
          ]
        },
        "MDF_MaxDamageRatio": {
          "operator": "Variables[0] ({[Skill05[2]]}) || RETURN",
          "displayLines": "{[Skill05[2]]}",
          "constants": [],
          "variables": [
            "{[Skill05[2]]}"
          ]
        },
        "MDF_MinDamageRatio": {
          "operator": "Variables[0] ({[Skill05[3]]}) || RETURN",
          "displayLines": "{[Skill05[3]]}",
          "constants": [],
          "variables": [
            "{[Skill05[3]]}"
          ]
        }
      },
      "success": []
    },
    {
      "name": "Action Advance/Delay",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "advanceType": "Advance",
      "multiAdd": -1
    },
    "Trigger: Ability End"
  ],
  "references": []
}