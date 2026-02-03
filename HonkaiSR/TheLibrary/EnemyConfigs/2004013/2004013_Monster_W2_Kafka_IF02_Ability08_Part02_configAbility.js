const configAbility = {
  "fileName": "2004013_Monster_W2_Kafka_IF02_Ability08_Part02",
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
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "Monster_W2_Kafka_IF02_Ability08_ExecuteTag"
      },
      "ifTargetFound": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "Monster_W2_Kafka_IF_SummonRotation"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "MDF_StackCount",
          "value": {
            "operator": "Variables[0] (MDF_StackCount) || Constants[0] (1) || ADD || RETURN",
            "displayLines": "(MDF_StackCount + 1)",
            "constants": [
              1
            ],
            "variables": [
              "MDF_StackCount"
            ]
          }
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "searchRandom": true,
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "Monster_W2_Kafka_IF02_Ability08_ExecuteTag"
      }
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "searchRandom": true,
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "Monster_W2_Kafka_IF02_Ability08_ExecuteTag"
      },
      "ifTargetFound": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "Monster_Company_Coin[<span class=\"descriptionNumberColor\">Performance Points</span>]"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "Monster_Company_Coin_Elite[<span class=\"descriptionNumberColor\">Performance Points</span>]"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "Monster_W2_Kafka_IF02_LeftMonsterTag"
          }
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "searchRandom": true,
      "maxTargets": 2,
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "Monster_W2_Kafka_IF02_Ability08_ExecuteTag"
      },
      "ifTargetFound": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "Monster_W2_Kafka_IF02_LeftMonsterTag"
          },
          "passed": [
            {
              "name": "Shot Fired"
            }
          ],
          "failed": [
            {
              "name": "Shot Fired"
            }
          ]
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Monster_Company_Coin_Elite[<span class=\"descriptionNumberColor\">Performance Points</span>]",
      "valuePerStack": {
        "MDF_DamageUpRatio_PerLayer": {
          "operator": "Variables[0] ({[Skill08[0]]}) || RETURN",
          "displayLines": "{[Skill08[0]]}",
          "constants": [],
          "variables": [
            "{[Skill08[0]]}"
          ]
        },
        "Shield_InitValue": 0
      }
    },
    {
      "name": "Define Modifier Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifierName": "Monster_Company_Coin_Elite[<span class=\"descriptionNumberColor\">Performance Points</span>]",
      "value": {
        "operator": "Variables[0] (MDF_StackCount) || RETURN",
        "displayLines": "MDF_StackCount",
        "constants": [],
        "variables": [
          "MDF_StackCount"
        ]
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "OR",
        "conditionList": [
          {
            "name": "Compare: Variable",
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 1
          },
          {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "Monster_W2_Kafka_IF02_P2ShieldBrokenTag"
          }
        ]
      },
      "passed": [
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "AIFlag",
          "value": 3
        }
      ],
      "failed": [
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "AIFlag",
          "value": 6
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "MDF_StackCount",
        "compareType": "=",
        "value2": 1
      }
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "modifier": "Monster_W2_Kafka_IF02_Ability08_ExecuteTag"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "modifier": "Monster_W2_Kafka_IF_SummonRotation"
    },
    {
      "name": "Define Custom Variable",
      "variableName": "MDF_StackCount",
      "value": 0
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Monster_W2_Kafka_IF02_MonsterCoinTag"
    }
  ]
}