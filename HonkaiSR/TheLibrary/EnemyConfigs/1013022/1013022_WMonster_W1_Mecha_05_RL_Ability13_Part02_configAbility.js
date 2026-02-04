const configAbility = {
  "fileName": "1013022_WMonster_W1_Mecha_05_RL_Ability13_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "Monster_W1_Mecha04_RL_Enhance_Dormancy[<span class=\"descriptionNumberColor\">Speedy Recovery</span>]",
        "compareType": "=",
        "value2": 1,
        "valueType": "LifeTime"
      },
      "passed": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W1_Mecha04_RL_Enhance_Dormancy[<span class=\"descriptionNumberColor\">Speedy Recovery</span>]"
        },
        {
          "name": "Dispel Debuffs",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "silent": true
        },
        {
          "name": "Exit Broken-State",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "MaxHPValue",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Modifier Holder}}"
            },
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 2
          },
          "passed": [
            {
              "name": "Set HP Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "setValue": {
                "operator": "Variables[0] (MaxHPValue) || Variables[1] ({[Skill13[1]]}) || MUL || RETURN",
                "displayLines": "(MaxHPValue * {[Skill13[1]]})",
                "constants": [],
                "variables": [
                  "MaxHPValue",
                  "{[Skill13[1]]}"
                ]
              }
            }
          ],
          "failed": [
            {
              "name": "Set HP Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "setValue": {
                "operator": "Variables[0] (MaxHPValue) || Variables[1] ({[Skill13[3]]}) || MUL || RETURN",
                "displayLines": "(MaxHPValue * {[Skill13[3]]})",
                "constants": [],
                "variables": [
                  "MaxHPValue",
                  "{[Skill13[3]]}"
                ]
              }
            }
          ]
        },
        {
          "name": "Reset Toughness",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 1
          },
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 2
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 1
          },
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 2
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Monster_W1_Mecha04_RL_Part02Effect"
                }
              ],
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Monster_W1_Mecha04_RL_Part03Effect"
                }
              ]
            }
          ]
        }
      ],
      "failed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Monster_W1_Mecha04_RL_Enhance_Dormancy[<span class=\"descriptionNumberColor\">Speedy Recovery</span>]",
            "compareType": "=",
            "value2": 2,
            "valueType": "LifeTime"
          },
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Monster_W1_Mecha04_RL_Enhance_Dormancy[<span class=\"descriptionNumberColor\">Speedy Recovery</span>]",
                "compareType": "=",
                "value2": 3,
                "valueType": "LifeTime"
              },
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Monster_W1_Mecha04_RL_Enhance_Dormancy[<span class=\"descriptionNumberColor\">Speedy Recovery</span>]",
                    "compareType": "=",
                    "value2": 4,
                    "valueType": "LifeTime"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "references": []
}