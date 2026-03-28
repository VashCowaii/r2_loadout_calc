const configAbility = {
  "fileName": "3014021_Monster_W3_Death_Ability08_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Target Name",
          "target": "{{All Team Members}}"
        },
        "value1": "TeamCharacterCount",
        "compareType": "<=",
        "value2": 4
      },
      "passed": [
        {
          "name": "Define Custom Variable with Team Count",
          "target": {
            "name": "Target Name",
            "target": "{{All Unselectable Targets}}"
          },
          "variableName": "LightTeamCount",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"387549983\">M_Death_CTRL</a>[<span class=\"descriptionNumberColor\">Morbid Dream</span>]"
          }
        },
        {
          "name": "Looped Event",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster's Minions}}.[[removeUnselectable]]"
                },
                "value1": "TeamCharacterCount",
                "compareType": "<",
                "value2": {
                  "operator": "Variables[0] (LightTeamCount) || RETURN",
                  "displayLines": "LightTeamCount",
                  "constants": [],
                  "variables": [
                    "LightTeamCount"
                  ]
                }
              }
            ]
          },
          "Event": [
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
                    "operator": "Variables[0] ({[Skill08[0]]}) || RETURN",
                    "displayLines": "{[Skill08[0]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill08[0]]}"
                    ]
                  },
                  "refreshPositions": false,
                  "enemyList": [
                    {
                      "name": "Create Enemy from Custom",
                      "value": "SummonID01",
                      "summonLocation": "First"
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Create Enemies",
                  "delayPercent": {
                    "operator": "Variables[0] ({[Skill08[0]]}) || RETURN",
                    "displayLines": "{[Skill08[0]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill08[0]]}"
                    ]
                  },
                  "refreshPositions": false,
                  "enemyList": [
                    {
                      "name": "Create Enemy from Custom",
                      "value": "SummonID01",
                      "summonLocation": "Last"
                    }
                  ]
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Enemy ID",
                "ID": 3014022,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Memory Zone Meme \"Something Unto Death\" (Complete)"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster's Minions}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Owner_MaxHPCount",
                  "value": {
                    "operator": "Variables[0] (DeathPartMaxHPCount) || RETURN",
                    "displayLines": "DeathPartMaxHPCount",
                    "constants": [],
                    "variables": [
                      "DeathPartMaxHPCount"
                    ]
                  }
                }
              ]
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
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1295202561\">W3_Death_AddMoifierSuccess</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
      },
      "modifier": "<a class=\"gModGreen\" id=\"2048900042\">W3_Death_AddDeathSuccess</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1562873953\">Monster_W3_Death_BattleAlert</a>"
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}