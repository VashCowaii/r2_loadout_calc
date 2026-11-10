const configAbility = {
  "fileName": "Kafkav0_Kafka_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
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
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Thorns"
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "(1 + 0.3)"
          },
          "variableName": "Skill03_P2_Chance"
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "1"
          },
          "variableName": "Skill03_P2_Chance"
        }
      ]
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
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Torture"
      },
      "passed": [
        {
          "name": "Trigger Modifier Event",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "variableName": "DOT_TriggerRatio",
          "eventType": "DOT",
          "value": {
            "displayLines": "1"
          }
        }
      ],
      "failed": [
        {
          "name": "Trigger Modifier Event",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "variableName": "DOT_TriggerRatio",
          "eventType": "DOT_Electric",
          "value": {
            "displayLines": "1"
          }
        }
      ]
    },
    "Trigger: Attack End",
    "Trigger: Skip Death Handling",
    "Trigger: Ability End"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  }
}