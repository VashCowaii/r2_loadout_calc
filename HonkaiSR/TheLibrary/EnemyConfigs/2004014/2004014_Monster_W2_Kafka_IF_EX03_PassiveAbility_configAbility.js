const configAbility = {
  "fileName": "2004014_Monster_W2_Kafka_IF_EX03_PassiveAbility",
  "skillTrigger": "SkillEX03",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "HardLevel",
        "compareType": ">=",
        "value2": 3
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1524558983\">Enemy_W2_Kafka_IF_EX03_Boss</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1727559793\">Enemy_W2_Kafka_IF_EnemyCount</a>",
          "valuePerStack": {
            "MDF_ShowValue1": {
              "operator": "Variables[0] ({[SkillEX03[0]]}) || RETURN",
              "displayLines": "{[SkillEX03[0]]}",
              "constants": [],
              "variables": [
                "{[SkillEX03[0]]}"
              ]
            },
            "MDF_ShowValue2": {
              "operator": "Variables[0] ({[SkillEX03[0]]}) || RETURN",
              "displayLines": "{[SkillEX03[0]]}",
              "constants": [],
              "variables": [
                "{[SkillEX03[0]]}"
              ]
            }
          }
        }
      ]
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1524558983\">Enemy_W2_Kafka_IF_EX03_Boss</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}