const configAbility = {
  "fileName": "Yukong_Yukong_Ability03_AddFlower",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable with Added Value",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "YuKong_Flower_Count",
      "context": "TargetEntity",
      "value": {
        "displayLines": "1"
      },
      "max": {
        "displayLines": "2"
      }
    },
    {
      "name": "Update Displayed Energy Bar",
      "value": {
        "displayLines": "YuKong_Flower_Count"
      },
      "maximum": {
        "displayLines": "2"
      },
      "assignState": "True",
      "priorState": "Active",
      "bar#": 3,
      "cooldown": 0
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "YuKong_Flower_Count",
        "compareType": "=",
        "value2": 1
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1103490299\">Yukong_Ability02_FlowerFlag</a>"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members with Unselectables}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1617821492\">Yukong_Flower</a>",
              "valuePerStack": {
                "MDF_AttackAddedRatio": {
                  "displayLines": "0.8"
                },
                "MDF_Eidolon4AddedRatio": {
                  "displayLines": "0.3"
                },
                "MDF_PointB3Amount": {
                  "displayLines": "2"
                }
              }
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members with Unselectables}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1617821492\">Yukong_Flower</a>",
              "valuePerStack": {
                "MDF_AttackAddedRatio": {
                  "displayLines": "0.8"
                },
                "MDF_Eidolon4AddedRatio": {
                  "displayLines": "0.3"
                },
                "MDF_PointB3Amount": {
                  "displayLines": "2"
                },
                "MDF_FromUltraMark": 1
              }
            }
          ]
        }
      ],
      "failed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{All Team Members with Unselectables}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1617821492\">Yukong_Flower</a>",
          "valuePerStack": {
            "MDF_AttackAddedRatio": {
              "displayLines": "0.8"
            },
            "MDF_Eidolon4AddedRatio": {
              "displayLines": "0.3"
            },
            "MDF_PointB3Amount": {
              "displayLines": "2"
            }
          }
        }
      ]
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  }
}