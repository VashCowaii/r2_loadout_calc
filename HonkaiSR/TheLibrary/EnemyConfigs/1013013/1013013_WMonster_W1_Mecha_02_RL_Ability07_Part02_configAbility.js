const configAbility = {
  "fileName": "1013013_WMonster_W1_Mecha_02_RL_Ability07_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "<a class=\"gModGreen\" id=\"-785895523\">Monster_W1_Mecha03_RL_Enhance_Dormancy</a>[<span class=\"descriptionNumberColor\">Firepower Recovery</span>]",
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
          "modifier": "<a class=\"gModGreen\" id=\"-785895523\">Monster_W1_Mecha03_RL_Enhance_Dormancy</a>[<span class=\"descriptionNumberColor\">Firepower Recovery</span>]"
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
                "operator": "Variables[0] (MaxHPValue) || Variables[1] (UnusedUnderThisBase_49) || MUL || RETURN",
                "displayLines": "(MaxHPValue * UnusedUnderThisBase_49)",
                "constants": [],
                "variables": [
                  "MaxHPValue",
                  "UnusedUnderThisBase_49"
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
                "operator": "Variables[0] (MaxHPValue) || Variables[1] (UnusedUnderThisBase_54) || MUL || RETURN",
                "displayLines": "(MaxHPValue * UnusedUnderThisBase_54)",
                "constants": [],
                "variables": [
                  "MaxHPValue",
                  "UnusedUnderThisBase_54"
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1676987149\">Monster_W1_Mecha03_RL_Part02Effect</a>"
                }
              ],
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1629066392\">Monster_W1_Mecha03_RL_Part03Effect</a>"
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
            "value1": "<a class=\"gModGreen\" id=\"-785895523\">Monster_W1_Mecha03_RL_Enhance_Dormancy</a>[<span class=\"descriptionNumberColor\">Firepower Recovery</span>]",
            "compareType": "=",
            "value2": 2,
            "valueType": "LifeTime"
          },
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "<a class=\"gModGreen\" id=\"-785895523\">Monster_W1_Mecha03_RL_Enhance_Dormancy</a>[<span class=\"descriptionNumberColor\">Firepower Recovery</span>]",
                "compareType": "=",
                "value2": 3,
                "valueType": "LifeTime"
              },
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "<a class=\"gModGreen\" id=\"-785895523\">Monster_W1_Mecha03_RL_Enhance_Dormancy</a>[<span class=\"descriptionNumberColor\">Firepower Recovery</span>]",
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