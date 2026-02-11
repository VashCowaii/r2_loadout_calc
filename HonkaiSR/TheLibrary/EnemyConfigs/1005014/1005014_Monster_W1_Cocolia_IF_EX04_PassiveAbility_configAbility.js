const configAbility = {
  "fileName": "1005014_Monster_W1_Cocolia_IF_EX04_PassiveAbility",
  "skillTrigger": "SkillEX04",
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
        "value2": 4
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1416123680\">Enemy_W1_Cocolia_IF_EX04_Boss</a>"
        }
      ]
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1416123680\">Enemy_W1_Cocolia_IF_EX04_Boss</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-146543153\">Enemy_W2_Cocolia_IF_WeaknessCount</a>",
              "valuePerStack": {
                "MDF_TokenDamageReduceRatio": {
                  "operator": "Variables[0] ({[SkillEX04[0]]}) || RETURN",
                  "displayLines": "{[SkillEX04[0]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillEX04[0]]}"
                  ]
                },
                "MDF_TokenDamageAddRatioPerlayer": {
                  "operator": "Variables[0] ({[SkillEX04[1]]}) || RETURN",
                  "displayLines": "{[SkillEX04[1]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillEX04[1]]}"
                  ]
                }
              }
            }
          ]
        },
        {
          "eventTrigger": "Entity Created [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of Team",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-146543153\">Enemy_W2_Cocolia_IF_WeaknessCount</a>",
                  "valuePerStack": {
                    "MDF_TokenDamageReduceRatio": {
                      "operator": "Variables[0] ({[SkillEX04[0]]}) || RETURN",
                      "displayLines": "{[SkillEX04[0]]}",
                      "constants": [],
                      "variables": [
                        "{[SkillEX04[0]]}"
                      ]
                    },
                    "MDF_TokenDamageAddRatioPerlayer": {
                      "operator": "Variables[0] ({[SkillEX04[1]]}) || RETURN",
                      "displayLines": "{[SkillEX04[1]]}",
                      "constants": [],
                      "variables": [
                        "{[SkillEX04[1]]}"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}