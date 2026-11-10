const configAbility = {
  "fileName": "-1954781239_FantasticStory_BaseAbility_0050_Insert",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable",
      "value": 0,
      "variableName": "DV_FantasticStory_BaseAbility_0050_TriggerDamageFlag"
    },
    "Deleted bullshit",
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "DV_FantasticStory_BaseAbility_0050_CountSum",
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
          "variableName": "DV_FantasticStory_BaseAbility_0050_CountSum"
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "(DV_FantasticStory_BaseAbility_0050_CountSum - DV_RangeGap_3)"
          },
          "variableName": "DV_FantasticStory_BaseAbility_0050_CountSum"
        }
      ]
    },
    {
      "name": "Looped Event",
      "maxLoops": {
        "displayLines": "ADF_2_get"
      },
      "execute": [
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
                  "displayLines": "(TempHP_get * ADF_3_get)"
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
  "references": [],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  }
}