const configAbility = {
  "fileName": "-1954781239_FantasticStory_BaseAbility_0030_Insert",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable",
      "variableName": "DV_FantasticStory_BaseAbility_0030_TriggerDamageFlag",
      "value": 0
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "DV_FantasticStory_PlusAbility_0034",
        "compareType": "=",
        "value2": 1
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "ADF_2_get",
          "value": {
            "operator": "Variables[0] (ADF_2_get) || Constants[0] (1) || Variables[1] (DV_FantasticStory_PlusAbility_0034_ADF_2) || ADD || MUL || RETURN",
            "displayLines": "(ADF_2_get * (1 + DV_FantasticStory_PlusAbility_0034_ADF_2))",
            "constants": [
              1
            ],
            "variables": [
              "ADF_2_get",
              "DV_FantasticStory_PlusAbility_0034_ADF_2"
            ]
          }
        }
      ]
    },
    "Deleted bullshit",
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "searchRandom": true,
      "includeDyingTargets": true,
      "maxTargets": 5,
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
            "Damage": {
              "operator": "Variables[0] (TempHP_get) || Variables[1] (ADF_2_get) || MUL || RETURN",
              "displayLines": "(TempHP_get * ADF_2_get)",
              "constants": [],
              "variables": [
                "TempHP_get",
                "ADF_2_get"
              ]
            },
            "dmgFormulaFinal": "Converted DMG Base",
            "Toughness": null,
            "Tags": null,
            "attackType": "DOT"
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "DV_FantasticStory_PlusAbility_0035",
        "compareType": "=",
        "value2": 1
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]].[[removeMemosprite]]"
          },
          "modifier": "Modifier_FantasticStory_BaseAbility_0030_plus5_AddSP",
          "valuePerStack": {
            "_AddSP": {
              "operator": "Variables[0] (DV_FantasticStory_PlusAbility_0035_ADF_1) || RETURN",
              "displayLines": "DV_FantasticStory_PlusAbility_0035_ADF_1",
              "constants": [],
              "variables": [
                "DV_FantasticStory_PlusAbility_0035_ADF_1"
              ]
            }
          },
          "casterAssign": "TargetSelf"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]].[[removeMemosprite]]"
          },
          "modifier": "Modifier_FantasticStory_BaseAbility_0030_plus5_AddStockedSP",
          "casterAssign": "TargetSelf"
        }
      ]
    },
    "Trigger: Attack End",
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "DV_FantasticStory_BaseAbility_0030_DamageSum",
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
          "variableName": "DV_FantasticStory_BaseAbility_0030_DamageSum",
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
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "DV_FantasticStory_PlusAbility_0034",
            "compareType": "=",
            "value2": 1
          },
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "DV_FantasticStory_BaseAbility_0030_DamageSum",
              "value": {
                "operator": "Variables[0] (DV_FantasticStory_BaseAbility_0030_DamageSum) || Variables[1] (DV_RangeGap_3) || SUB || RETURN",
                "displayLines": "(DV_FantasticStory_BaseAbility_0030_DamageSum - DV_RangeGap_3)",
                "constants": [],
                "variables": [
                  "DV_FantasticStory_BaseAbility_0030_DamageSum",
                  "DV_RangeGap_3"
                ]
              }
            }
          ]
        }
      ]
    }
  ],
  "references": []
}