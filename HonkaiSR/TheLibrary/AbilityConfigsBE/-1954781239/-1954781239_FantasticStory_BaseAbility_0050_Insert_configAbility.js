const configAbility = {
  "fileName": "-1954781239_FantasticStory_BaseAbility_0050_Insert",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable",
      "variableName": "DV_FantasticStory_BaseAbility_0050_TriggerDamageFlag",
      "value": 0
    },
    "Deleted bullshit",
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "DV_FantasticStory_BaseAbility_0050_CountSum",
        "compareType": ">=",
        "value2": {
          "operator": "Variables[0] (DV_RangeGap_3) || Constants[0] (2) || MUL || RETURN",
          "displayLines": "(DV_RangeGap_3 * 2)",
          "constants": [
            2
          ],
          "variables": [
            "DV_RangeGap_3"
          ]
        }
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "DV_FantasticStory_BaseAbility_0050_CountSum",
          "value": {
            "operator": "Variables[0] (DV_RangeGap_3) || Constants[0] (1) || SUB || RETURN",
            "displayLines": "(DV_RangeGap_3 - 1)",
            "constants": [
              1
            ],
            "variables": [
              "DV_RangeGap_3"
            ]
          }
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "variableName": "DV_FantasticStory_BaseAbility_0050_CountSum",
          "value": {
            "operator": "Variables[0] (DV_FantasticStory_BaseAbility_0050_CountSum) || Variables[1] (DV_RangeGap_3) || SUB || RETURN",
            "displayLines": "(DV_FantasticStory_BaseAbility_0050_CountSum - DV_RangeGap_3)",
            "constants": [],
            "variables": [
              "DV_FantasticStory_BaseAbility_0050_CountSum",
              "DV_RangeGap_3"
            ]
          }
        }
      ]
    },
    {
      "name": "Looped Event",
      "maxLoops": {
        "operator": "Variables[0] (ADF_2_get) || RETURN",
        "displayLines": "ADF_2_get",
        "constants": [],
        "variables": [
          "ADF_2_get"
        ]
      },
      "Event": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "ifTargetFound": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Physical",
                "DamageFlat": {
                  "operator": "Variables[0] (TempHP_get) || Variables[1] (ADF_3_get) || MUL || RETURN",
                  "displayLines": "(TempHP_get * ADF_3_get)",
                  "constants": [],
                  "variables": [
                    "TempHP_get",
                    "ADF_3_get"
                  ]
                },
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "attackType": "DOT"
              }
            }
          ]
        }
      ]
    },
    "Trigger: Attack End"
  ],
  "references": []
}