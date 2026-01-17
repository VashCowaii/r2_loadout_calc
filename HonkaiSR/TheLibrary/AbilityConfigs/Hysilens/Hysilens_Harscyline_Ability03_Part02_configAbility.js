const configAbility = {
  "fileName": "Hysilens_Harscyline_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Harscyline_Ability03_Flag"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Harscyline_Ability03_HaloStatus",
      "duration": {
        "operator": "Variables[0] (Skill03_HaloLifeTime) || RETURN",
        "displayLines": "Skill03_HaloLifeTime",
        "constants": [],
        "variables": [
          "Skill03_HaloLifeTime"
        ]
      },
      "valuePerStack": {
        "MDF_DOTDamagePercentageTemp": {
          "operator": "Variables[0] (Skill03_DOTDamagePercentage) || RETURN",
          "displayLines": "Skill03_DOTDamagePercentage",
          "constants": [],
          "variables": [
            "Skill03_DOTDamagePercentage"
          ]
        },
        "MDF_TriggerDOTMaxCountTemp": {
          "operator": "Variables[0] (Skill03_TriggerDotMaxCount) || RETURN",
          "displayLines": "Skill03_TriggerDotMaxCount",
          "constants": [],
          "variables": [
            "Skill03_TriggerDotMaxCount"
          ]
        },
        "MDF_DefenceDownRatioTemp": {
          "operator": "Variables[0] (0.25) || RETURN",
          "displayLines": "0.25",
          "constants": [],
          "variables": [
            0.25
          ]
        },
        "MDF_ResistanceDownRatioTemp": {
          "operator": "Variables[0] (0.2) || RETURN",
          "displayLines": "0.2",
          "constants": [],
          "variables": [
            0.2
          ]
        },
        "MDF_AttackDownRatioTemp": {
          "operator": "Variables[0] (0.15) || RETURN",
          "displayLines": "0.15",
          "constants": [],
          "variables": [
            0.15
          ]
        }
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Physical",
        "Damage": {
          "operator": "Variables[0] (2) || RETURN",
          "displayLines": "2",
          "constants": [],
          "variables": [
            2
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
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Trace Activated",
            "conditionList": "The Bubble of Banquets"
          },
          {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Hostile Entities(AOE)}}"
            },
            "flagName": "STAT_DOT"
          }
        ]
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
            "operator": "Variables[0] (1.5) || RETURN",
            "displayLines": "1.5",
            "constants": [],
            "variables": [
              1.5
            ]
          }
        }
      ]
    },
    "Trigger: Attack End",
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Harscyline_Ability03_Flag"
    },
    "Trigger: Skip Death Handling",
    "Trigger: Ability End"
  ],
  "references": []
}