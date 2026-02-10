const configAbility = {
  "fileName": "8032031_Monster_W3_AventurinePart_Ability02_Part02_RL",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "searchRandom": true,
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-804462384\">Monster_W3_AventurinePart_OddsZero_RL</a>"
      },
      "ifTargetFound": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-804462384\">Monster_W3_AventurinePart_OddsZero_RL</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Add Target by Unique Identifier",
              "identifier": "W3_Aventurine_00"
            },
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1833952078\">Monster_W3_AventurinePart_Odds_RL</a>",
              "stackLimit": {
                "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
                "displayLines": "{[Skill05[1]]}",
                "constants": [],
                "variables": [
                  "{[Skill05[1]]}"
                ]
              },
              "addStacksPerTrigger": {
                "operator": "Variables[0] (GambleOdds) || RETURN",
                "displayLines": "GambleOdds",
                "constants": [],
                "variables": [
                  "GambleOdds"
                ]
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Add Target by Unique Identifier",
              "identifier": "W3_Aventurine_00"
            },
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 2
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1833952078\">Monster_W3_AventurinePart_Odds_RL</a>",
              "stackLimit": {
                "operator": "Variables[0] ({[Skill05[2]]}) || RETURN",
                "displayLines": "{[Skill05[2]]}",
                "constants": [],
                "variables": [
                  "{[Skill05[2]]}"
                ]
              },
              "addStacksPerTrigger": {
                "operator": "Variables[0] (GambleOdds) || RETURN",
                "displayLines": "GambleOdds",
                "constants": [],
                "variables": [
                  "GambleOdds"
                ]
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Add Target by Unique Identifier",
              "identifier": "W3_Aventurine_00"
            },
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 3
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1833952078\">Monster_W3_AventurinePart_Odds_RL</a>",
              "stackLimit": {
                "operator": "Variables[0] ({[Skill05[3]]}) || RETURN",
                "displayLines": "{[Skill05[3]]}",
                "constants": [],
                "variables": [
                  "{[Skill05[3]]}"
                ]
              },
              "addStacksPerTrigger": {
                "operator": "Variables[0] (GambleOdds) || RETURN",
                "displayLines": "GambleOdds",
                "constants": [],
                "variables": [
                  "GambleOdds"
                ]
              }
            }
          ]
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
        "name": "AND",
        "conditionList": [
          {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1833952078\">Monster_W3_AventurinePart_Odds_RL</a>"
          },
          {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "value1": "DiceGamblingInsertCheck_RL",
            "compareType": "=",
            "value2": 1
          }
        ]
      },
      "ifTargetFound": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Add Target by Unique Identifier",
              "identifier": "W3_Aventurine_00"
            },
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1833952078\">Monster_W3_AventurinePart_Odds_RL</a>",
              "stackLimit": {
                "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
                "displayLines": "{[Skill05[1]]}",
                "constants": [],
                "variables": [
                  "{[Skill05[1]]}"
                ]
              },
              "addStacksPerTrigger": {
                "operator": "Variables[0] (GambleOdds) || RETURN",
                "displayLines": "GambleOdds",
                "constants": [],
                "variables": [
                  "GambleOdds"
                ]
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Add Target by Unique Identifier",
              "identifier": "W3_Aventurine_00"
            },
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 2
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1833952078\">Monster_W3_AventurinePart_Odds_RL</a>",
              "stackLimit": {
                "operator": "Variables[0] ({[Skill05[2]]}) || RETURN",
                "displayLines": "{[Skill05[2]]}",
                "constants": [],
                "variables": [
                  "{[Skill05[2]]}"
                ]
              },
              "addStacksPerTrigger": {
                "operator": "Variables[0] (GambleOdds) || RETURN",
                "displayLines": "GambleOdds",
                "constants": [],
                "variables": [
                  "GambleOdds"
                ]
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Add Target by Unique Identifier",
              "identifier": "W3_Aventurine_00"
            },
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 3
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1833952078\">Monster_W3_AventurinePart_Odds_RL</a>",
              "stackLimit": {
                "operator": "Variables[0] ({[Skill05[3]]}) || RETURN",
                "displayLines": "{[Skill05[3]]}",
                "constants": [],
                "variables": [
                  "{[Skill05[3]]}"
                ]
              },
              "addStacksPerTrigger": {
                "operator": "Variables[0] (GambleOdds) || RETURN",
                "displayLines": "GambleOdds",
                "constants": [],
                "variables": [
                  "GambleOdds"
                ]
              }
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "scope": "TargetEntity",
          "variableName": "DiceGamblingInsertCheck_RL",
          "value": 0
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-1833952078\">Monster_W3_AventurinePart_Odds_RL</a>"
      }
    }
  ],
  "references": []
}