const configAbility = {
  "fileName": "Serval_Serval_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "searchRandom": true,
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "NOT",
            "condition": {
              "name": "Has Flag",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "flagName": "STAT_DOT_Electric"
            }
          },
          {
            "name": "Eidolon Activated",
            "eidolon": 4
          }
        ]
      },
      "ifTargetFound": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "Standard_DOT_Electric[<span class=\"descriptionNumberColor\">Shock</span>]",
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
            "Modifier_Electric_DamagePercentage": {
              "operator": "Variables[0] (1.04) || RETURN",
              "displayLines": "1.04",
              "constants": [],
              "variables": [
                1.04
              ]
            }
          },
          "stackFlag": "CharacterSkill"
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
          "operator": "Variables[0] (1.8) || RETURN",
          "displayLines": "1.8",
          "constants": [],
          "variables": [
            1.8
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
    "Trigger: Attack End",
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "searchRandom": true,
      "conditions": {
        "name": "Has Flag",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "flagName": "STAT_DOT_Electric"
      },
      "ifTargetFound": [
        {
          "name": "Define Modifier Variable with Flag",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "flagName": [
            "STAT_DOT_Electric"
          ],
          "function": "Add",
          "value": {
            "operator": "Variables[0] (2) || RETURN",
            "displayLines": "2",
            "constants": [],
            "variables": [
              2
            ]
          },
          "valueType": "Duration"
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "references": []
}