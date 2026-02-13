const configAbility = {
  "fileName": "8022010_Monster_SW_Minion01_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "UI Display Event",
      "popUpText": "Meiotic Division"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-157441217\">Monster_SW_Minion01_SplitEffect</a>[<span class=\"descriptionNumberColor\">Propagation</span>]"
    },
    {
      "name": "Create Enemies",
      "delayPercent": 0.5,
      "enemyList": [
        {
          "name": "Enemy Entry",
          "enemyID": {
            "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__95) || RETURN",
            "displayLines": "ENEMIES_OBJECT_UNUSED__95",
            "constants": [],
            "variables": [
              "ENEMIES_OBJECT_UNUSED__95"
            ]
          },
          "locationType": "BeforeCaster"
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "searchRandom": true,
      "maxTargets": 1,
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"976017528\">Monster_SW_Minion01_Split_Old</a>",
        "invertCondition": true
      },
      "ifTargetFound": [
        {
          "name": "Shot Fired"
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
        "modifier": "<a class=\"gModGreen\" id=\"1620116974\">Monster_SW_Boss_DamageUp</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]"
      },
      "passed": [
        {
          "name": "Define Custom Variable with Modifier Values",
          "valueType": "Layer",
          "variableName": "DamageUpLayer",
          "modifierName": "<a class=\"gModGreen\" id=\"1620116974\">Monster_SW_Boss_DamageUp</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
          "multiplier": 1
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "searchRandom": true,
          "conditions": {
            "name": "NOT",
            "condition": {
              "name": "Has Modifier",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1620116974\">Monster_SW_Boss_DamageUp</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]"
            }
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1620116974\">Monster_SW_Boss_DamageUp</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
              "valuePerStack": {
                "MDF_DamageUpRatio_PerLayer": {
                  "operator": "Variables[0] (DamageUpRatio) || RETURN",
                  "displayLines": "DamageUpRatio",
                  "constants": [],
                  "variables": [
                    "DamageUpRatio"
                  ]
                }
              },
              "addStacksPerTrigger": {
                "operator": "Variables[0] (DamageUpLayer) || RETURN",
                "displayLines": "DamageUpLayer",
                "constants": [],
                "variables": [
                  "DamageUpLayer"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "scope": "TargetEntity",
      "variableName": "BossCount",
      "value": 0
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "searchRandom": true,
      "conditions": {
        "name": "OR",
        "conditionList": [
          {
            "name": "Enemy ID",
            "ID": 8024010,
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "characterName": "Swarm: True Sting (Complete)"
          },
          {
            "name": "Enemy ID",
            "ID": 8024012,
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "characterName": "Swarm: True Sting (Complete)"
          }
        ]
      },
      "ifTargetFound": [
        {
          "name": "Define Custom Variable",
          "scope": "TargetEntity",
          "variableName": "BossCount",
          "value": {
            "operator": "Variables[0] (BossCount) || Constants[0] (1) || ADD || RETURN",
            "displayLines": "(BossCount + 1)",
            "constants": [
              1
            ],
            "variables": [
              "BossCount"
            ]
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "BossCount",
        "compareType": ">",
        "value2": 0,
        "contextScope": "TargetEntity"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1620116974\">Monster_SW_Boss_DamageUp</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
          "valuePerStack": {
            "MDF_DamageUpRatio_PerLayer": {
              "operator": "Variables[0] (DamageUpRatio) || RETURN",
              "displayLines": "DamageUpRatio",
              "constants": [],
              "variables": [
                "DamageUpRatio"
              ]
            }
          }
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"976017528\">Monster_SW_Minion01_Split_Old</a>"
    },
    {
      "name": "Define Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "scope": "TargetEntity",
      "variableName": "DamageUpRatio",
      "value": {
        "operator": "Variables[0] (DamageUpRatio) || RETURN",
        "displayLines": "DamageUpRatio",
        "constants": [],
        "variables": [
          "DamageUpRatio"
        ]
      }
    }
  ],
  "references": []
}