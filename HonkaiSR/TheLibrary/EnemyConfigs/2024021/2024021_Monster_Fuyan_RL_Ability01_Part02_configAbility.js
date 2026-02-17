const configAbility = {
  "fileName": "2024021_Monster_Fuyan_RL_Ability01_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "HP_Bars_Remaining",
        "compareType": "=",
        "value2": 1
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1230803206\">Monster_Fuyan_RL_DamageUp</a>[<span class=\"descriptionNumberColor\">Slay Move</span>]",
          "valuePerStack": {
            "MDF_DamageUpRatio_PerLayer": {
              "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
              "displayLines": "{[Skill01[0]]}",
              "constants": [],
              "variables": [
                "{[Skill01[0]]}"
              ]
            }
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "DamageUpCount",
          "value": {
            "operator": "Variables[0] (DamageUpCount) || Constants[0] (1) || ADD || RETURN",
            "displayLines": "(DamageUpCount + 1)",
            "constants": [
              1
            ],
            "variables": [
              "DamageUpCount"
            ]
          }
        }
      ],
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
                "target": "{{All Team Members(Exclude Self)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1579371120\">Monster_Fuyan_RL_SpeedUp</a>[<span class=\"descriptionNumberColor\">Transfer Move</span>]",
              "valuePerStack": {
                "MDF_SpeedAddedRatio_PerLayer": {
                  "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
                  "displayLines": "{[Skill01[1]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill01[1]]}"
                  ]
                }
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "SpeedAddCount",
              "value": {
                "operator": "Variables[0] (SpeedAddCount) || Constants[0] (1) || ADD || RETURN",
                "displayLines": "(SpeedAddCount + 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "SpeedAddCount"
                ]
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
              "modifier": "<a class=\"gModGreen\" id=\"-1230803206\">Monster_Fuyan_RL_DamageUp</a>[<span class=\"descriptionNumberColor\">Slay Move</span>]",
              "valuePerStack": {
                "MDF_DamageUpRatio_PerLayer": {
                  "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
                  "displayLines": "{[Skill01[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill01[0]]}"
                  ]
                }
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members(Exclude Self)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1579371120\">Monster_Fuyan_RL_SpeedUp</a>[<span class=\"descriptionNumberColor\">Transfer Move</span>]",
              "valuePerStack": {
                "MDF_SpeedAddedRatio_PerLayer": {
                  "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
                  "displayLines": "{[Skill01[1]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill01[1]]}"
                  ]
                }
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "DamageUpCount",
              "value": {
                "operator": "Variables[0] (DamageUpCount) || Constants[0] (1) || ADD || RETURN",
                "displayLines": "(DamageUpCount + 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "DamageUpCount"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "SpeedAddCount",
              "value": {
                "operator": "Variables[0] (SpeedAddCount) || Constants[0] (1) || ADD || RETURN",
                "displayLines": "(SpeedAddCount + 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "SpeedAddCount"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Action Advance/Delay",
      "advanceType": "Set",
      "target": {
        "name": "Target Name",
        "target": "{{All Team Members(Exclude Self)}}"
      },
      "set": 0
    },
    {
      "name": "UI Display Event (On Entity)",
      "target": {
        "name": "Target Name",
        "target": "{{All Team Members(Exclude Self)}}"
      },
      "popUpText": "Action Advanced"
    },
    "Trigger: Ability End"
  ],
  "references": []
}