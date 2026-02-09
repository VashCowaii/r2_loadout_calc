const configAbility = {
  "fileName": "-1097634517_BattleEventAbility_RogueDLCAbundance_Insert",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Deleted bullshit",
    {
      "name": "UI Display Event"
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "searchRandom": true,
      "conditions": {
        "name": "Compare: Monster Rank",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "compareType": ">=",
        "value2": 3
      },
      "ifTargetFound": [
        {
          "name": "Heal",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "healPercent": {
            "operator": "Variables[0] (EliteRatio) || RETURN",
            "displayLines": "EliteRatio",
            "constants": [],
            "variables": [
              "EliteRatio"
            ]
          },
          "formula": "Heal from Target MaxHP"
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
        "name": "NOT",
        "condition": {
          "name": "Compare: Monster Rank",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "compareType": ">=",
          "value2": 3
        }
      },
      "ifTargetFound": [
        {
          "name": "Heal",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "healPercent": {
            "operator": "Variables[0] (Ratio) || RETURN",
            "displayLines": "Ratio",
            "constants": [],
            "variables": [
              "Ratio"
            ]
          },
          "formula": "Heal from Target MaxHP"
        }
      ]
    }
  ],
  "references": []
}