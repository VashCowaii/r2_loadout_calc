const configAbility = {
  "fileName": "2013020_Monster_W2_Valkyrie02_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
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
          "operator": "Variables[0] ({[Skill03[0]]}) || RETURN",
          "displayLines": "{[Skill03[0]]}",
          "constants": [],
          "variables": [
            "{[Skill03[0]]}"
          ]
        },
        "HitSplit": 0.5,
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "100%"
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
          "operator": "Variables[0] ({[Skill03[0]]}) || RETURN",
          "displayLines": "{[Skill03[0]]}",
          "constants": [],
          "variables": [
            "{[Skill03[0]]}"
          ]
        },
        "HitSplit": 0.5,
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "100%"
      }
    },
    "Trigger: Attack End",
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Target Name",
          "target": "{{Hostile Entities(AOE)}}"
        },
        "value1": "TeamCharacterCount",
        "compareType": ">=",
        "value2": 3,
        "conditions": {
          "name": "AND",
          "conditionList": [
            {
              "name": "Has Modifier",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"221482818\">Standard_Unstable</a>[<span class=\"descriptionNumberColor\">Reverberation</span>]",
              "invertCondition": true
            },
            {
              "name": "Has Modifier",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-315004140\">Standard_Shake</a>[<span class=\"descriptionNumberColor\">Strong Reverberation</span>]",
              "invertCondition": true
            }
          ]
        }
      },
      "passed": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "searchRandom": true,
          "maxTargets": 2,
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"221482818\">Standard_Unstable</a>[<span class=\"descriptionNumberColor\">Reverberation</span>]",
                "invertCondition": true
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-315004140\">Standard_Shake</a>[<span class=\"descriptionNumberColor\">Strong Reverberation</span>]",
                "invertCondition": true
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
              "modifier": "<a class=\"gModGreen\" id=\"221482818\">Standard_Unstable</a>[<span class=\"descriptionNumberColor\">Reverberation</span>]",
              "duration": {
                "operator": "Variables[0] ({[Skill03[2]]}) || RETURN",
                "displayLines": "{[Skill03[2]]}",
                "constants": [],
                "variables": [
                  "{[Skill03[2]]}"
                ]
              },
              "baseChance": {
                "operator": "Variables[0] ({[Skill03[1]]}) || RETURN",
                "displayLines": "{[Skill03[1]]}",
                "constants": [],
                "variables": [
                  "{[Skill03[1]]}"
                ]
              },
              "valuePerStack": {
                "MDF_Shake_ActionDelayRatio": 0.7
              }
            }
          ]
        }
      ],
      "failed": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"221482818\">Standard_Unstable</a>[<span class=\"descriptionNumberColor\">Reverberation</span>]",
                "invertCondition": true
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-315004140\">Standard_Shake</a>[<span class=\"descriptionNumberColor\">Strong Reverberation</span>]",
                "invertCondition": true
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
              "modifier": "<a class=\"gModGreen\" id=\"221482818\">Standard_Unstable</a>[<span class=\"descriptionNumberColor\">Reverberation</span>]",
              "duration": {
                "operator": "Variables[0] ({[Skill03[2]]}) || RETURN",
                "displayLines": "{[Skill03[2]]}",
                "constants": [],
                "variables": [
                  "{[Skill03[2]]}"
                ]
              },
              "baseChance": {
                "operator": "Variables[0] ({[Skill03[1]]}) || RETURN",
                "displayLines": "{[Skill03[1]]}",
                "constants": [],
                "variables": [
                  "{[Skill03[1]]}"
                ]
              },
              "valuePerStack": {
                "MDF_Shake_ActionDelayRatio": 0.7
              }
            }
          ]
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "references": []
}