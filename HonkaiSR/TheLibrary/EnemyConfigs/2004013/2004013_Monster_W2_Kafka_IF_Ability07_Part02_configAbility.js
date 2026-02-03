const configAbility = {
  "fileName": "2004013_Monster_W2_Kafka_IF_Ability07_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "TargetEntity",
      "variableName": "MindControlCount"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "modifier": "Monster_W2_Kafka_IF_MindControl_True"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "modifier": "Monster_W2_Kafka_IF_MindControl_TrueEffect"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "modifier": "Monster_W2_Kafka_IF_MindControl_False"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "modifier": "Standard_MindControl[<span class=\"descriptionNumberColor\">Dominated</span>]"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "TargetEntity",
      "variableName": "ShowHint04"
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "searchRandom": true,
      "ifTargetFound": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "FinalPhase",
            "compareType": "=",
            "value2": 1,
            "contextScope": "TargetEntity"
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MindControlCount",
                "compareType": "<",
                "value2": 4,
                "contextScope": "TargetEntity"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Monster_W2_Kafka_IF_MindControl_True"
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 3
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MindControlCount",
                    "compareType": "<",
                    "value2": 3,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Monster_W2_Kafka_IF_MindControl_True"
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MindControlCount",
                    "compareType": "<",
                    "value2": 2,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Monster_W2_Kafka_IF_MindControl_True"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "MindControlCount",
          "context": "TargetEntity",
          "value": 1,
          "max": 4
        }
      ]
    },
    {
      "name": "Define Custom Variable with Stat",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "BaseSpeed",
      "value": "&nbsp;<span class=\"descriptionNumberColor\">SPDBase</span>&nbsp;"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "FinalPhase",
        "compareType": "=",
        "value2": 1,
        "contextScope": "TargetEntity"
      },
      "passed": [
        {
          "name": "Add Battle Event",
          "teamName": "Enemy Team",
          "eventID": 20002,
          "statSource": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variables": {
            "MDF_W2_Kafka_RL_BattleEvent_ActionDelay": {
              "operator": "Variables[0] ({[PassiveSkill02[2]]}) || RETURN",
              "displayLines": "{[PassiveSkill02[2]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkill02[2]]}"
              ]
            },
            "MDF_W2_Kafka_RL_BattleEvent_BaseSpeed": {
              "operator": "Variables[0] (BaseSpeed) || RETURN",
              "displayLines": "BaseSpeed",
              "constants": [],
              "variables": [
                "BaseSpeed"
              ]
            }
          }
        }
      ],
      "failed": [
        {
          "name": "Add Battle Event",
          "teamName": "Enemy Team",
          "eventID": 20002,
          "statSource": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variables": {
            "MDF_W2_Kafka_RL_BattleEvent_ActionDelay": {
              "operator": "Variables[0] ({[Skill07[0]]}) || RETURN",
              "displayLines": "{[Skill07[0]]}",
              "constants": [],
              "variables": [
                "{[Skill07[0]]}"
              ]
            },
            "MDF_W2_Kafka_RL_BattleEvent_BaseSpeed": {
              "operator": "Variables[0] (BaseSpeed) || RETURN",
              "displayLines": "BaseSpeed",
              "constants": [],
              "variables": [
                "BaseSpeed"
              ]
            }
          }
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "references": []
}