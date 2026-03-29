const configAbility = {
  "fileName": "3025013_Monster_W3_Sunday_IF_EX04_PassiveAbility",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1419235277\">Enemy_W3_Sunday_IF_EX04_Boss</a>"
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1506063698\">Enemy_W3_Sunday_EX04_Stance</a>",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_IF_BOSS_Stance) || RETURN",
                "displayLines": "MDF_IF_BOSS_Stance",
                "constants": [],
                "variables": [
                  "MDF_IF_BOSS_Stance"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1419235277\">Enemy_W3_Sunday_IF_EX04_Boss</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1506063698\">Enemy_W3_Sunday_EX04_Stance</a>",
              "valuePerStack": {
                "MDF_IF_BOSS_Stance": {
                  "operator": "Variables[0] ({[SkillEX04[0]]}) || Constants[0] (3) || MUL || RETURN",
                  "displayLines": "({[SkillEX04[0]]} * 3)",
                  "constants": [
                    3
                  ],
                  "variables": [
                    "{[SkillEX04[0]]}"
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
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Caster's Minions}}"
                    }
                  },
                  {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Enemy Team"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1506063698\">Enemy_W3_Sunday_EX04_Stance</a>",
                  "valuePerStack": {
                    "MDF_IF_BOSS_Stance": {
                      "operator": "Variables[0] ({[SkillEX04[0]]}) || Constants[0] (3) || MUL || RETURN",
                      "displayLines": "({[SkillEX04[0]]} * 3)",
                      "constants": [
                        3
                      ],
                      "variables": [
                        "{[SkillEX04[0]]}"
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