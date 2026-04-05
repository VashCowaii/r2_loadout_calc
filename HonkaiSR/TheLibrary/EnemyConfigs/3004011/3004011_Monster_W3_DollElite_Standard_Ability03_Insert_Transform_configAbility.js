const configAbility = {
  "fileName": "3004011_Monster_W3_DollElite_Standard_Ability03_Insert_Transform",
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
      "maxTargets": 1,
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "OR",
            "conditionList": [
              {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value": "W3_Figure_00"
              },
              {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value": "W3_Figure_01"
              },
              {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value": "W3_Figure_02"
              }
            ]
          },
          {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "flagName": "Break",
            "invertCondition": true
          }
        ]
      },
      "ifTargetFound": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-607059020\">Enemy_W3_DollElite_Commnon_TheChosenOne</a>[<span class=\"descriptionNumberColor\">Impresario</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-607059020\">Enemy_W3_DollElite_Commnon_TheChosenOne</a>[<span class=\"descriptionNumberColor\">Impresario</span>]",
          "valuePerStack": {
            "MDF_BreakDelayRatio": {
              "operator": "Variables[0] (P1_BreakDelayRatio) || RETURN",
              "displayLines": "P1_BreakDelayRatio",
              "constants": [],
              "variables": [
                "P1_BreakDelayRatio"
              ]
            },
            "MDF_ChosenOneSpeedUp": {
              "operator": "Variables[0] (P2_ChosenOneSpeedUp) || RETURN",
              "displayLines": "P2_ChosenOneSpeedUp",
              "constants": [],
              "variables": [
                "P2_ChosenOneSpeedUp"
              ]
            },
            "MDF_ExploreDamagePercentage": {
              "operator": "Variables[0] (P3_ExploreDamagePercentage) || RETURN",
              "displayLines": "P3_ExploreDamagePercentage",
              "constants": [],
              "variables": [
                "P3_ExploreDamagePercentage"
              ]
            },
            "MDF_ExploreDelayRatio": {
              "operator": "Variables[0] (P4_ExploreDelayRatio) || RETURN",
              "displayLines": "P4_ExploreDelayRatio",
              "constants": [],
              "variables": [
                "P4_ExploreDelayRatio"
              ]
            },
            "MDF_ExploreDamageUpRatio": {
              "operator": "Variables[0] (P5_ExploreDamageUpRatio) || RETURN",
              "displayLines": "P5_ExploreDamageUpRatio",
              "constants": [],
              "variables": [
                "P5_ExploreDamageUpRatio"
              ]
            }
          }
        }
      ],
      "noTargetFound": [
        {
          "name": "Inject Ability Use",
          "condition": {
            "name": "Insert Ability Condition",
            "type": "AbilityOwnerInsertCount",
            "typeValue": 1
          },
          "abilityName": "Monster_W3_DollElite_Standard_Ability04_Insert_Explode",
          "abilitySource": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "abilityTarget": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "priorityTag": "EnemyChangeState",
          "canHitNonTargets": true,
          "valuePerStack": {
            "P1_BreakDelayRatio": {
              "operator": "Variables[0] (P1_BreakDelayRatio) || RETURN",
              "displayLines": "P1_BreakDelayRatio",
              "constants": [],
              "variables": [
                "P1_BreakDelayRatio"
              ]
            },
            "P2_ChosenOneSpeedUp": {
              "operator": "Variables[0] (P2_ChosenOneSpeedUp) || RETURN",
              "displayLines": "P2_ChosenOneSpeedUp",
              "constants": [],
              "variables": [
                "P2_ChosenOneSpeedUp"
              ]
            },
            "P3_ExploreDamagePercentage": {
              "operator": "Variables[0] (P3_ExploreDamagePercentage) || RETURN",
              "displayLines": "P3_ExploreDamagePercentage",
              "constants": [],
              "variables": [
                "P3_ExploreDamagePercentage"
              ]
            },
            "P4_ExploreDelayRatio": {
              "operator": "Variables[0] (P4_ExploreDelayRatio) || RETURN",
              "displayLines": "P4_ExploreDelayRatio",
              "constants": [],
              "variables": [
                "P4_ExploreDelayRatio"
              ]
            },
            "P5_ExploreDamageUpRatio": {
              "operator": "Variables[0] (P5_ExploreDamageUpRatio) || RETURN",
              "displayLines": "P5_ExploreDamageUpRatio",
              "constants": [],
              "variables": [
                "P5_ExploreDamageUpRatio"
              ]
            }
          },
          "allowAbilityTriggers": false
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  },
  "references": []
}