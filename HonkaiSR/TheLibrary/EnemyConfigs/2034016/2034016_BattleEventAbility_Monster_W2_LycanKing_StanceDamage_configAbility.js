const configAbility = {
  "fileName": "2034016_BattleEventAbility_Monster_W2_LycanKing_StanceDamage",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "searchRandom": true,
      "conditions": {
        "name": "Compare: Monster Rank",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "compareType": ">=",
        "value2": 4
      },
      "ifTargetFound": [
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "scope": "TargetEntity",
          "variableName": "WolfBoss_BloodRageCount",
          "value": {
            "operator": "Variables[0] (ResetBloodRageCount) || RETURN",
            "displayLines": "ResetBloodRageCount",
            "constants": [],
            "variables": [
              "ResetBloodRageCount"
            ]
          }
        },
        {
          "name": "Action Advance/Delay",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "advanceType": "Set",
          "multiAdd": "DelayRatio"
        },
        {
          "name": "Deal Toughness DMG",
          "value": {
            "operator": "Variables[0] (StanceDamage) || RETURN",
            "displayLines": "StanceDamage",
            "constants": [],
            "variables": [
              "StanceDamage"
            ]
          },
          "forceReduction": true,
          "canDelay": true,
          "ToughnessDMGType": {
            "name": "Damage Type Source",
            "sourceType": {}
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "flagName": "Break"
          },
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"563066245\">Enemy_W2_LycanKing_BloodRageMark</a>[<span class=\"descriptionNumberColor\">Irate</span>]",
              "addStacksPerTrigger": {
                "operator": "Variables[0] (ResetBloodRageCount) || RETURN",
                "displayLines": "ResetBloodRageCount",
                "constants": [],
                "variables": [
                  "ResetBloodRageCount"
                ]
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"435779874\">Monster_W2_LycanKing_RefreshEnergyBar</a>",
              "casterAssign": "TargetSelf"
            }
          ]
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  },
  "references": []
}