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
      "modifier": "<a class=\"gModGreen\" id=\"-1908768915\">Harscyline_Ability03_Flag</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1383903101\">Harscyline_Ability03_HaloStatus</a>",
      "duration": {
        "displayLines": "Skill03_HaloLifeTime"
      },
      "valuePerStack": {
        "MDF_DOTDamagePercentageTemp": {
          "displayLines": "Skill03_DOTDamagePercentage"
        },
        "MDF_TriggerDOTMaxCountTemp": {
          "displayLines": "Skill03_TriggerDotMaxCount"
        },
        "MDF_DefenceDownRatioTemp": {
          "displayLines": "0.25"
        },
        "MDF_ResistanceDownRatioTemp": {
          "displayLines": "0.2"
        },
        "MDF_AttackDownRatioTemp": {
          "displayLines": "0.15"
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
          "displayLines": "2"
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
            "displayLines": "1.5"
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
      "modifier": "<a class=\"gModGreen\" id=\"-1908768915\">Harscyline_Ability03_Flag</a>"
    },
    "Trigger: Skip Death Handling",
    "Trigger: Ability End"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  }
}