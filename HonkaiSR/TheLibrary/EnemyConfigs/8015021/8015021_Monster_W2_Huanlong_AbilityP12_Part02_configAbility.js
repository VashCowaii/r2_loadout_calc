const configAbility = {
  "fileName": "8015021_Monster_W2_Huanlong_AbilityP12_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Is Part Of Team Location",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "team": "Enemy Team",
        "location": "Left"
      },
      "passed": [
        {
          "name": "Create Enemies",
          "delayPercent": {
            "operator": "Variables[0] ({[Skill12[0]]}) || RETURN",
            "displayLines": "{[Skill12[0]]}",
            "constants": [],
            "variables": [
              "{[Skill12[0]]}"
            ]
          },
          "enemyList": [
            {
              "name": "Enemy Entry",
              "enemyID": {
                "operator": "Variables[0] (SummonID3) || RETURN",
                "displayLines": "SummonID3",
                "constants": [],
                "variables": [
                  "SummonID3"
                ]
              },
              "locationType": "BeforeCaster"
            }
          ]
        }
      ],
      "failed": [
        {
          "name": "Create Enemies",
          "delayPercent": {
            "operator": "Variables[0] ({[Skill12[0]]}) || RETURN",
            "displayLines": "{[Skill12[0]]}",
            "constants": [],
            "variables": [
              "{[Skill12[0]]}"
            ]
          },
          "enemyList": [
            {
              "name": "Enemy Entry",
              "enemyID": {
                "operator": "Variables[0] (SummonID3) || RETURN",
                "displayLines": "SummonID3",
                "constants": [],
                "variables": [
                  "SummonID3"
                ]
              },
              "locationType": "AfterCaster"
            }
          ]
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Is Part Of Team Location",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "team": "Enemy Team",
        "location": "Left"
      },
      "passed": [
        {
          "name": "Create Enemies",
          "delayPercent": {
            "operator": "Variables[0] ({[Skill12[1]]}) || RETURN",
            "displayLines": "{[Skill12[1]]}",
            "constants": [],
            "variables": [
              "{[Skill12[1]]}"
            ]
          },
          "enemyList": [
            {
              "name": "Enemy Entry",
              "enemyID": {
                "operator": "Variables[0] (SummonID3) || RETURN",
                "displayLines": "SummonID3",
                "constants": [],
                "variables": [
                  "SummonID3"
                ]
              },
              "locationType": "BeforeCaster"
            }
          ]
        }
      ],
      "failed": [
        {
          "name": "Create Enemies",
          "delayPercent": {
            "operator": "Variables[0] ({[Skill12[1]]}) || RETURN",
            "displayLines": "{[Skill12[1]]}",
            "constants": [],
            "variables": [
              "{[Skill12[1]]}"
            ]
          },
          "enemyList": [
            {
              "name": "Enemy Entry",
              "enemyID": {
                "operator": "Variables[0] (SummonID3) || RETURN",
                "displayLines": "SummonID3",
                "constants": [],
                "variables": [
                  "SummonID3"
                ]
              },
              "locationType": "AfterCaster"
            }
          ]
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "searchRandom": true,
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Enemy ID",
            "ID": {
              "operator": "Variables[0] (SummonID3) || RETURN",
              "displayLines": "SummonID3",
              "constants": [],
              "variables": [
                "SummonID3"
              ]
            },
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "characterName": null
          },
          {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1755050981\">Monster_W2_Huanlong_Ability12Mark</a>",
            "invertCondition": true
          }
        ]
      }
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "searchRandom": true,
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Enemy ID",
            "ID": {
              "operator": "Variables[0] (SummonID3) || RETURN",
              "displayLines": "SummonID3",
              "constants": [],
              "variables": [
                "SummonID3"
              ]
            },
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "characterName": null
          },
          {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1755050981\">Monster_W2_Huanlong_Ability12Mark</a>",
            "invertCondition": true
          }
        ]
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1755050981\">Monster_W2_Huanlong_Ability12Mark</a>"
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "searchRandom": true,
      "ifTargetFound": [
        {
          "name": "Heal",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "healPercent": 1,
          "formula": "Heal from Target MaxHP"
        }
      ]
    },
    {
      "name": "Inject Ability Use",
      "abilityName": "Monster_W2_Huanlong_Part3Start_Camera2_Insert",
      "priorityTag": "MonsterChangePhase",
      "ownerState": "Mask_AliveOrLimbo",
      "targetState": "Mask_AliveOrLimbo",
      "canHitNonTargets": true,
      "showInActionOrder": true,
      "allowAbilityTriggers": false
    }
  ],
  "references": []
}