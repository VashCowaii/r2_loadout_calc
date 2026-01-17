const configAbility = {
  "fileName": "Kafka_Advanced_Kafka_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 1
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "Advanced_Kafka_PassiveDotDamage_Eidolon1[<span class=\"descriptionNumberColor\">DoT Vulnerability</span>]",
          "duration": {
            "operator": "Variables[0] (2) || RETURN",
            "displayLines": "2",
            "constants": [],
            "variables": [
              2
            ]
          },
          "baseChance": {
            "operator": "Variables[0] (1) || RETURN",
            "displayLines": "1",
            "constants": [],
            "variables": [
              1
            ]
          },
          "valuePerStack": {
            "MDF_DotRatio": {
              "operator": "Variables[0] (0.3) || RETURN",
              "displayLines": "0.3",
              "constants": [],
              "variables": [
                0.3
              ]
            }
          }
        }
      ]
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Thunder",
        "Damage": {
          "operator": "Variables[0] (0.8) || RETURN",
          "displayLines": "0.8",
          "constants": [],
          "variables": [
            0.8
          ]
        },
        "Toughness": {
          "operator": "Variables[0] (AOE Toughness Value) || RETURN",
          "displayLines": "AOE Toughness Value",
          "constants": [],
          "variables": [
            "AOE Toughness Value"
          ]
        },
        "Tags": null,
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "Define Custom Variable",
      "variableName": "Skill03_P2_Chance",
      "value": {
        "operator": "Variables[0] (1) || RETURN",
        "displayLines": "1",
        "constants": [],
        "variables": [
          1
        ]
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 6
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "Skill03_P3_LifeTime",
          "value": {
            "operator": "Variables[0] (2) || Variables[1] (1) || ADD || RETURN",
            "displayLines": "(2 + 1)",
            "constants": [],
            "variables": [
              2,
              1
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Skill03_P4_DOTPercentage",
          "value": {
            "operator": "Variables[0] (2.9) || Variables[1] (1.56) || ADD || RETURN",
            "displayLines": "(2.9 + 1.56)",
            "constants": [],
            "variables": [
              2.9,
              1.56
            ]
          }
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "variableName": "Skill03_P3_LifeTime",
          "value": {
            "operator": "Variables[0] (2) || RETURN",
            "displayLines": "2",
            "constants": [],
            "variables": [
              2
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Skill03_P4_DOTPercentage",
          "value": {
            "operator": "Variables[0] (2.9) || RETURN",
            "displayLines": "2.9",
            "constants": [],
            "variables": [
              2.9
            ]
          }
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "modifier": "Standard_DOT_Electric[<span class=\"descriptionNumberColor\">Shock</span>]",
      "duration": {
        "operator": "Variables[0] (Skill03_P3_LifeTime) || RETURN",
        "displayLines": "Skill03_P3_LifeTime",
        "constants": [],
        "variables": [
          "Skill03_P3_LifeTime"
        ]
      },
      "baseChance": {
        "operator": "Variables[0] (Skill03_P2_Chance) || RETURN",
        "displayLines": "Skill03_P2_Chance",
        "constants": [],
        "variables": [
          "Skill03_P2_Chance"
        ]
      },
      "valuePerStack": {
        "Modifier_Electric_DamagePercentage": {
          "operator": "Variables[0] (Skill03_P4_DOTPercentage) || RETURN",
          "displayLines": "Skill03_P4_DOTPercentage",
          "constants": [],
          "variables": [
            "Skill03_P4_DOTPercentage"
          ]
        }
      },
      "stackFlag": "CharacterSkill"
    },
    {
      "name": "Trigger Modifier Event",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "variableName": "DOT_TriggerRatio",
      "eventType": "DOT",
      "value": {
        "operator": "Variables[0] (1.2) || RETURN",
        "displayLines": "1.2",
        "constants": [],
        "variables": [
          1.2
        ]
      }
    },
    "Trigger: Attack End",
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Thorns"
      },
      "passed": [
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "_InsertCount",
          "value": 1,
          "max": {
            "operator": "Variables[0] (2) || RETURN",
            "displayLines": "2",
            "constants": [],
            "variables": [
              2
            ]
          }
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": {
            "operator": "Variables[0] (_InsertCount) || RETURN",
            "displayLines": "_InsertCount",
            "constants": [],
            "variables": [
              "_InsertCount"
            ]
          },
          "maximum": {
            "operator": "Variables[0] (2) || RETURN",
            "displayLines": "2",
            "constants": [],
            "variables": [
              2
            ]
          },
          "assignState": "True",
          "priorState": "Active",
          "bar#": 3
        }
      ]
    },
    "Trigger: Skip Death Handling",
    "Trigger: Ability End"
  ],
  "references": []
}