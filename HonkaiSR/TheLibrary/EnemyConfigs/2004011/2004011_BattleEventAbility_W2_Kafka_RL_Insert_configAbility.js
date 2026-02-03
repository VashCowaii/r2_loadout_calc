const configAbility = {
  "fileName": "2004011_BattleEventAbility_W2_Kafka_RL_Insert",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "UI Display Event",
      "popUpText": "Revelation"
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "searchRandom": true,
      "conditions": {
        "name": "OR",
        "conditionList": [
          {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "Monster_W2_Kafka_RL_MindControl_True[<span class=\"descriptionNumberColor\">Psychological Suggestion</span>]"
          },
          {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "Monster_W2_Kafka_RL_MindControl_TrueEffect[<span class=\"descriptionNumberColor\">Psychological Suggestion Revelation</span>]"
          }
        ]
      },
      "ifTargetFound": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "Monster_W2_Kafka_RL_MindControl_True[<span class=\"descriptionNumberColor\">Psychological Suggestion</span>]"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "Monster_W2_Kafka_RL_MindControl_TrueEffect[<span class=\"descriptionNumberColor\">Psychological Suggestion Revelation</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "Standard_MindControl[<span class=\"descriptionNumberColor\">Dominated</span>]",
          "duration": {
            "operator": "Variables[0] ({[Skill07[1]]}) || Constants[0] (1) || ADD || RETURN",
            "displayLines": "({[Skill07[1]]} + 1)",
            "constants": [
              1
            ],
            "variables": [
              "{[Skill07[1]]}"
            ]
          },
          "baseChance": {
            "operator": "Variables[0] ({[Skill07[2]]}) || RETURN",
            "displayLines": "{[Skill07[2]]}",
            "constants": [],
            "variables": [
              "{[Skill07[2]]}"
            ]
          },
          "valuePerStack": {
            "MDF_MindControlDamagePercentage": {
              "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
              "displayLines": "{[Skill05[1]]}",
              "constants": [],
              "variables": [
                "{[Skill05[1]]}"
              ]
            },
            "MDF_MaxDamageRatio": {
              "operator": "Variables[0] ({[Skill05[2]]}) || RETURN",
              "displayLines": "{[Skill05[2]]}",
              "constants": [],
              "variables": [
                "{[Skill05[2]]}"
              ]
            },
            "MDF_MinDamageRatio": {
              "operator": "Variables[0] ({[Skill05[3]]}) || RETURN",
              "displayLines": "{[Skill05[3]]}",
              "constants": [],
              "variables": [
                "{[Skill05[3]]}"
              ]
            }
          },
          "success": [
            {
              "name": "Define Custom Variable",
              "scope": "TargetEntity",
              "variableName": "MindControlSuccess",
              "value": 1
            }
          ]
        },
        {
          "name": "Action Advance/Delay",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "advanceType": "Advance",
          "multiAdd": -1
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "MindControlSuccess",
        "compareType": "=",
        "value2": 1,
        "contextScope": "TargetEntity"
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "scope": "TargetEntity",
          "variableName": "MindControlSuccess",
          "value": 0
        }
      ]
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "modifier": "Monster_W2_Kafka_RL_MindControl_False[<span class=\"descriptionNumberColor\">Psychological Suggestion</span>]"
    },
    {
      "name": "Define Custom Variable",
      "scope": "TargetEntity",
      "variableName": "BattleEventFlag",
      "value": 0
    }
  ],
  "references": []
}