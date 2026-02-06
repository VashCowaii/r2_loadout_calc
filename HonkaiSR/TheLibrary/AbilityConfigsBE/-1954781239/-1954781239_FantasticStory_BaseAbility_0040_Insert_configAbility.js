const configAbility = {
  "fileName": "-1954781239_FantasticStory_BaseAbility_0040_Insert",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable",
      "variableName": "DV_FantasticStory_BaseAbility_0040_TriggerDamageFlag",
      "value": 0
    },
    "Deleted bullshit",
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "DV_FantasticStory_PlusAbility_0041",
        "compareType": "=",
        "value2": 1
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "ADF_2_get",
          "value": {
            "operator": "Variables[0] (ADF_2_get) || Variables[1] (DV_FantasticStory_PlusAbility_0041) || ADD || RETURN",
            "displayLines": "(ADF_2_get + DV_FantasticStory_PlusAbility_0041)",
            "constants": [],
            "variables": [
              "ADF_2_get",
              "DV_FantasticStory_PlusAbility_0041"
            ]
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "DV_FantasticStory_BaseAbility_0040_CountSum",
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
              "variableName": "DV_FantasticStory_BaseAbility_0040_CountSum",
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
              "variableName": "DV_FantasticStory_BaseAbility_0040_CountSum",
              "value": {
                "operator": "Variables[0] (DV_FantasticStory_BaseAbility_0040_CountSum) || Variables[1] (DV_RangeGap_3) || SUB || RETURN",
                "displayLines": "(DV_FantasticStory_BaseAbility_0040_CountSum - DV_RangeGap_3)",
                "constants": [],
                "variables": [
                  "DV_FantasticStory_BaseAbility_0040_CountSum",
                  "DV_RangeGap_3"
                ]
              }
            }
          ]
        },
        {
          "name": "Set Battle Track Progress",
          "progress": {
            "operator": "Variables[0] (DV_FantasticStory_BaseAbility_0040_CountSum) || Variables[1] (#ADF_1) || Variables[2] (DV_FantasticStory_PlusAbility_0041_ADF_1) || SUB || DIV || RETURN",
            "displayLines": "(DV_FantasticStory_BaseAbility_0040_CountSum / (#ADF_1 - DV_FantasticStory_PlusAbility_0041_ADF_1))",
            "constants": [],
            "variables": [
              "DV_FantasticStory_BaseAbility_0040_CountSum",
              "#ADF_1",
              "DV_FantasticStory_PlusAbility_0041_ADF_1"
            ]
          },
          "count": {
            "operator": "Variables[0] (DV_FantasticStory_BaseAbility_0040_CountSum) || Variables[1] (#ADF_1) || Variables[2] (DV_FantasticStory_PlusAbility_0041_ADF_1) || SUB || DIV || Constants[0] (100) || MUL || RETURN",
            "displayLines": "((DV_FantasticStory_BaseAbility_0040_CountSum / (#ADF_1 - DV_FantasticStory_PlusAbility_0041_ADF_1)) * 100)",
            "constants": [
              100
            ],
            "variables": [
              "DV_FantasticStory_BaseAbility_0040_CountSum",
              "#ADF_1",
              "DV_FantasticStory_PlusAbility_0041_ADF_1"
            ]
          }
        }
      ],
      "failed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "DV_FantasticStory_BaseAbility_0040_CountSum",
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
              "variableName": "DV_FantasticStory_BaseAbility_0040_CountSum",
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
              "variableName": "DV_FantasticStory_BaseAbility_0040_CountSum",
              "value": {
                "operator": "Variables[0] (DV_FantasticStory_BaseAbility_0040_CountSum) || Variables[1] (DV_RangeGap_3) || SUB || RETURN",
                "displayLines": "(DV_FantasticStory_BaseAbility_0040_CountSum - DV_RangeGap_3)",
                "constants": [],
                "variables": [
                  "DV_FantasticStory_BaseAbility_0040_CountSum",
                  "DV_RangeGap_3"
                ]
              }
            }
          ]
        },
        {
          "name": "Set Battle Track Progress",
          "progress": {
            "operator": "Variables[0] (DV_FantasticStory_BaseAbility_0040_CountSum) || Variables[1] (#ADF_1) || DIV || RETURN",
            "displayLines": "(DV_FantasticStory_BaseAbility_0040_CountSum / #ADF_1)",
            "constants": [],
            "variables": [
              "DV_FantasticStory_BaseAbility_0040_CountSum",
              "#ADF_1"
            ]
          },
          "count": {
            "operator": "Variables[0] (DV_FantasticStory_BaseAbility_0040_CountSum) || Variables[1] (#ADF_1) || DIV || Constants[0] (100) || MUL || RETURN",
            "displayLines": "((DV_FantasticStory_BaseAbility_0040_CountSum / #ADF_1) * 100)",
            "constants": [
              100
            ],
            "variables": [
              "DV_FantasticStory_BaseAbility_0040_CountSum",
              "#ADF_1"
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