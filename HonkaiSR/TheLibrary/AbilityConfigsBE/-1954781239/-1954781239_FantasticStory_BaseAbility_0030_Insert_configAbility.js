const configAbility = {
  "fileName": "-1954781239_FantasticStory_BaseAbility_0030_Insert",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable",
      "value": 0,
      "variableName": "DV_FantasticStory_BaseAbility_0030_TriggerDamageFlag"
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
          "value": {
            "displayLines": "(ADF_2_get * (1 + DV_FantasticStory_PlusAbility_0034_ADF_2))"
          },
          "variableName": "ADF_2_get"
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
            "DamageFlat": {
              "displayLines": "(TempHP_get * ADF_2_get)"
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
          "modifier": "<a class=\"gModGreen\" id=\"-1329142430\">Modifier_FantasticStory_BaseAbility_0030_plus5_AddSP</a>",
          "valuePerStack": {
            "_AddSP": {
              "displayLines": "DV_FantasticStory_PlusAbility_0035_ADF_1"
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
          "modifier": "<a class=\"gModGreen\" id=\"1117415883\">Modifier_FantasticStory_BaseAbility_0030_plus5_AddStockedSP</a>",
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
          "displayLines": "(DV_RangeGap_3 * 2)"
        }
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "(DV_RangeGap_3 - 1)"
          },
          "variableName": "DV_FantasticStory_BaseAbility_0030_DamageSum"
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
              "value": {
                "displayLines": "(DV_FantasticStory_BaseAbility_0030_DamageSum - DV_RangeGap_3)"
              },
              "variableName": "DV_FantasticStory_BaseAbility_0030_DamageSum"
            }
          ]
        }
      ]
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  }
}