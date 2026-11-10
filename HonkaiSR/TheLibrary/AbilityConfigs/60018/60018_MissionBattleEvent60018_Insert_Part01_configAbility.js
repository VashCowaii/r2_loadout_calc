const configAbility = {
  "fileName": "60018_MissionBattleEvent60018_Insert_Part01",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "_FirstTalk",
        "compareType": "=",
        "value2": 0
      },
      "passed": [
        {
          "name": "IF",
          "conditions": "Active: Fast-Forward Animations"
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "value": 1,
      "variableName": "_FirstTalk"
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "conditions": {
        "name": "Has Flag",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "flagName": "Break",
        "invertCondition": true
      },
      "ifTargetFound": [
        {
          "name": "Define Custom Variable with Stat",
          "variableName": "_CurrentStance",
          "readTarget": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Ice",
            "DamageExtra": {
              "displayLines": 2
            },
            "dmgFormulaExtra": "Max HP Scaling",
            "Toughness": {
              "operator": "Variables[0] (_CurrentStance) || RETURN",
              "displayLines": "_CurrentStance",
              "constants": [],
              "variables": [
                "_CurrentStance"
              ]
            },
            "Tags": null,
            "attackType": "Additional DMG",
            "EnergyGainPercent": "100%"
          }
        }
      ]
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  }
}