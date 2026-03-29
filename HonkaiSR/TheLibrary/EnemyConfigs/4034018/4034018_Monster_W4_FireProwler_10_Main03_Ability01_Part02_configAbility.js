const configAbility = {
  "fileName": "4034018_Monster_W4_FireProwler_10_Main03_Ability01_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "AttackScaling": {
        "DamageType": "Physical",
        "Damage": {
          "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
          "displayLines": "{[Skill01[0]]}",
          "constants": [],
          "variables": [
            "{[Skill01[0]]}"
          ]
        },
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
        "target": "{{Ability Targets Adjacent(Blast)}}"
      },
      "AttackScaling": {
        "DamageType": "Physical",
        "Damage": {
          "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
          "displayLines": "{[Skill01[1]]}",
          "constants": [],
          "variables": [
            "{[Skill01[1]]}"
          ]
        },
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
        "value1": "AIFlag",
        "compareType": "=",
        "value2": 1,
        "contextScope": "TargetEntity"
      },
      "failed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Minions}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": "=",
            "value2": 0,
            "conditions": {
              "name": "Enemy ID",
              "ID": {
                "operator": "Variables[0] (SummonID_1) || RETURN",
                "displayLines": "SummonID_1",
                "constants": [],
                "variables": [
                  "SummonID_1"
                ]
              },
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "characterName": null
            }
          },
          "passed": [
            {
              "name": "Create Enemies",
              "refreshPositions": false,
              "enemyList": [
                {
                  "name": "Create Enemy from Custom",
                  "value": "SummonID_1",
                  "summonLocation": "KeepOnFirst"
                },
                {
                  "name": "Create Enemy from Custom",
                  "value": "SummonID_1",
                  "summonLocation": "KeepOnLast"
                }
              ]
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"670740905\">Enemy_W4_FireProwler_10_Main03_Limit</a>[<span class=\"descriptionNumberColor\">Shackle Shatter</span>]",
            "invertCondition": true
          },
          "passed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "conditions": {
                "name": "Enemy ID",
                "ID": {
                  "operator": "Variables[0] (SummonID_1) || RETURN",
                  "displayLines": "SummonID_1",
                  "constants": [],
                  "variables": [
                    "SummonID_1"
                  ]
                },
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "characterName": null
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
                },
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "phase": "Phase01_Still"
                },
                "Deleted bullshit"
              ]
            }
          ],
          "failed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "conditions": {
                "name": "Enemy ID",
                "ID": {
                  "operator": "Variables[0] (SummonID_1) || RETURN",
                  "displayLines": "SummonID_1",
                  "constants": [],
                  "variables": [
                    "SummonID_1"
                  ]
                },
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "characterName": null
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
                },
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "phase": "Phase01"
                },
                "Deleted bullshit",
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1810803535\">Enemy_W4_FireProwler_11_Main03_Activated01</a>[<span class=\"descriptionNumberColor\">Mutual Sacrifice</span>]"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-781486647\">Enemy_W4_FireProwler_11_Main03_NextWave</a>"
                }
              ]
            }
          ]
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "references": []
}