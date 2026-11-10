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
          "modifier": "<a class=\"gModGreen\" id=\"1537350177\">Advanced_Kafka_PassiveDotDamage_Eidolon1</a>[<span class=\"descriptionNumberColor\">DoT Vulnerability</span>]",
          "duration": {
            "displayLines": "2"
          },
          "baseChance": {
            "displayLines": "1"
          },
          "valuePerStack": {
            "MDF_DotRatio": {
              "displayLines": "0.3"
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
          "displayLines": "0.8"
        },
        "Toughness": {
          "displayLines": "AOE Toughness Value"
        },
        "Tags": null,
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "Define Custom Variable",
      "value": {
        "displayLines": "1"
      },
      "variableName": "Skill03_P2_Chance"
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
          "value": {
            "displayLines": "(2 + 1)"
          },
          "variableName": "Skill03_P3_LifeTime"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "(2.9 + 1.56)"
          },
          "variableName": "Skill03_P4_DOTPercentage"
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "2"
          },
          "variableName": "Skill03_P3_LifeTime"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "2.9"
          },
          "variableName": "Skill03_P4_DOTPercentage"
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1935319413\">Standard_DOT_Electric</a>[<span class=\"descriptionNumberColor\">Shock</span>]",
      "duration": {
        "displayLines": "Skill03_P3_LifeTime"
      },
      "baseChance": {
        "displayLines": "Skill03_P2_Chance"
      },
      "valuePerStack": {
        "Modifier_Electric_DamagePercentage": {
          "displayLines": "Skill03_P4_DOTPercentage"
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
        "displayLines": "1.2"
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
            "displayLines": "2"
          }
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": {
            "displayLines": "_InsertCount"
          },
          "maximum": {
            "displayLines": "2"
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
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  }
}