const configAbility = {
  "fileName": "20002_BattleEventAbility_W2_Kafka_RL_Insert",
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
            "modifier": "<a class=\"gModGreen\" id=\"-1862927139\">Monster_W2_Kafka_RL_MindControl_True</a>[<span class=\"descriptionNumberColor\">Psychological Suggestion</span>]"
          },
          {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-2031893844\">Monster_W2_Kafka_RL_MindControl_TrueEffect</a>[<span class=\"descriptionNumberColor\">Psychological Suggestion Revelation</span>]"
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
          "modifier": "<a class=\"gModGreen\" id=\"-1862927139\">Monster_W2_Kafka_RL_MindControl_True</a>[<span class=\"descriptionNumberColor\">Psychological Suggestion</span>]"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2031893844\">Monster_W2_Kafka_RL_MindControl_TrueEffect</a>[<span class=\"descriptionNumberColor\">Psychological Suggestion Revelation</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1307984397\">Standard_MindControl</a>[<span class=\"descriptionNumberColor\">Dominated</span>]",
          "duration": {
            "operator": "Variables[0] (UnusedUnderThisBase_8792) || Constants[0] (1) || ADD || RETURN",
            "displayLines": "(UnusedUnderThisBase_8792 + 1)",
            "constants": [
              1
            ],
            "variables": [
              "UnusedUnderThisBase_8792"
            ]
          },
          "baseChance": {
            "operator": "Variables[0] (UnusedUnderThisBase_8786) || RETURN",
            "displayLines": "UnusedUnderThisBase_8786",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_8786"
            ]
          },
          "valuePerStack": {
            "MDF_MindControlDamagePercentage": {
              "operator": "Variables[0] (UnusedUnderThisBase_11882) || RETURN",
              "displayLines": "UnusedUnderThisBase_11882",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_11882"
              ]
            },
            "MDF_MaxDamageRatio": {
              "operator": "Variables[0] (UnusedUnderThisBase_8801) || RETURN",
              "displayLines": "UnusedUnderThisBase_8801",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_8801"
              ]
            },
            "MDF_MinDamageRatio": {
              "operator": "Variables[0] (UnusedUnderThisBase_8790) || RETURN",
              "displayLines": "UnusedUnderThisBase_8790",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_8790"
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
      "modifier": "<a class=\"gModGreen\" id=\"2054484016\">Monster_W2_Kafka_RL_MindControl_False</a>[<span class=\"descriptionNumberColor\">Psychological Suggestion</span>]"
    },
    {
      "name": "Define Custom Variable",
      "scope": "TargetEntity",
      "variableName": "BattleEventFlag",
      "value": 0
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  }
}