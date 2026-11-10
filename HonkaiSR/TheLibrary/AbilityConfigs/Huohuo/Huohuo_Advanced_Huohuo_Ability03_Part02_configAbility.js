const configAbility = {
  "fileName": "Huohuo_Advanced_Huohuo_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Update Energy",
      "on": {
        "name": "Target Name",
        "target": "{{All Team Members(Exclude Memosprites and Self)}}"
      },
      "valuePercent": {
        "displayLines": "0.2"
      },
      "isFixed": "(Fixed)",
      "tag": "ActiveSkillAdd"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "The Cursed One"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Sequence",
            "TargetList": [
              {
                "name": "Target Name",
                "target": "{{All Team Members(Exclude Self)}}"
              },
              {
                "name": "Target Filter",
                "conditions": {
                  "name": "Compare: Ability Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "value1": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;",
                  "compareType": ">=",
                  "value2": {
                    "displayLines": "160"
                  }
                }
              }
            ]
          },
          "modifier": "<a class=\"gModGreen\" id=\"805273454\">Advanced_Huohuo_Ability03_AttackUP</a>[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
          "duration": {
            "displayLines": "2"
          },
          "valuePerStack": {
            "MDF_AttackUP": {
              "displayLines": "(0.4 + 0.24)"
            }
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Sequence",
            "TargetList": [
              {
                "name": "Target Name",
                "target": "{{All Team Members(Exclude Self)}}"
              },
              {
                "name": "Target Filter",
                "conditions": {
                  "name": "Compare: Ability Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "value1": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;",
                  "compareType": "<",
                  "value2": {
                    "displayLines": "160"
                  }
                }
              }
            ]
          },
          "modifier": "<a class=\"gModGreen\" id=\"805273454\">Advanced_Huohuo_Ability03_AttackUP</a>[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
          "duration": {
            "displayLines": "2"
          },
          "valuePerStack": {
            "MDF_AttackUP": {
              "displayLines": "0.4"
            }
          }
        }
      ],
      "failed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"805273454\">Advanced_Huohuo_Ability03_AttackUP</a>[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
          "duration": {
            "displayLines": "2"
          },
          "valuePerStack": {
            "MDF_AttackUP": {
              "displayLines": "0.4"
            }
          }
        }
      ]
    },
    {
      "name": "Update Energy",
      "on": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "valuePercent": 1,
      "ofAbilitySplit": true,
      "isFixed": "* ERR"
    },
    "Trigger: Ability End"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  }
}