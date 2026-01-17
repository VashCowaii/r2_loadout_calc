const configAbility = {
  "fileName": "BlackSwan_BlackSwan_Ability01_Part02",
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
        "DamageType": "Wind",
        "Damage": {
          "operator": "Variables[0] (0.6) || RETURN",
          "displayLines": "0.6",
          "constants": [],
          "variables": [
            0.6
          ]
        },
        "Toughness": {
          "operator": "Variables[0] (ST Toughness Value) || RETURN",
          "displayLines": "ST Toughness Value",
          "constants": [],
          "variables": [
            "ST Toughness Value"
          ]
        },
        "ToughnessDMGType": {
          "DamageType": "Wind"
        },
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "100%"
      }
    },
    "Trigger: Attack End",
    {
      "name": "IF",
      "conditions": {
        "name": "Is Part Of Team",
        "target": {
          "name": "Target Name",
          "target": "{{Ability Target(ST)}}"
        },
        "team": "TeamDark"
      },
      "passed": [
        {
          "name": "Use Custom Character Function",
          "functionName": "AddDot",
          "variables": {
            "Arg01": {
              "operator": "Variables[0] (0.65) || RETURN",
              "displayLines": "0.65",
              "constants": [],
              "variables": [
                0.65
              ]
            }
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "flagName": "STAT_DOT_Poison"
          },
          "passed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "AddDot",
              "variables": {
                "Arg01": {
                  "operator": "Variables[0] (0.65) || RETURN",
                  "displayLines": "0.65",
                  "constants": [],
                  "variables": [
                    0.65
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "flagName": "STAT_DOT_Bleed"
          },
          "passed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "AddDot",
              "variables": {
                "Arg01": {
                  "operator": "Variables[0] (0.65) || RETURN",
                  "displayLines": "0.65",
                  "constants": [],
                  "variables": [
                    0.65
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "flagName": "STAT_DOT_Burn"
          },
          "passed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "AddDot",
              "variables": {
                "Arg01": {
                  "operator": "Variables[0] (0.65) || RETURN",
                  "displayLines": "0.65",
                  "constants": [],
                  "variables": [
                    0.65
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "flagName": "STAT_DOT_Electric"
          },
          "passed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "AddDot",
              "variables": {
                "Arg01": {
                  "operator": "Variables[0] (0.65) || RETURN",
                  "displayLines": "0.65",
                  "constants": [],
                  "variables": [
                    0.65
                  ]
                }
              }
            }
          ]
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "functions": [
    {
      "name": "CharacterFunctions",
      "functionName": "AddDot",
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Random Chance",
            "chance": {
              "operator": "Variables[0] (Rank06_Chance) || RETURN",
              "displayLines": "Rank06_Chance",
              "constants": [],
              "variables": [
                "Rank06_Chance"
              ]
            }
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "Rank06_Weighted_Stack_Layer",
              "value": {
                "operator": "Constants[0] (1) || Variables[0] (Rank06_Extra_Layer) || ADD || RETURN",
                "displayLines": "(1 + Rank06_Extra_Layer)",
                "constants": [
                  1
                ],
                "variables": [
                  "Rank06_Extra_Layer"
                ]
              }
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "Rank06_Weighted_Stack_Layer",
              "value": {
                "operator": "Constants[0] (1) || RETURN",
                "displayLines": "1",
                "constants": [
                  1
                ],
                "variables": []
              }
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "BlackSwan_DOT[<span class=\"descriptionNumberColor\">Arcana</span>]",
          "baseChance": {
            "operator": "Variables[0] (Arg01) || RETURN",
            "displayLines": "Arg01",
            "constants": [],
            "variables": [
              "Arg01"
            ]
          },
          "stackLimit": {
            "operator": "Variables[0] (Max_DOT_Layer) || RETURN",
            "displayLines": "Max_DOT_Layer",
            "constants": [],
            "variables": [
              "Max_DOT_Layer"
            ]
          },
          "valuePerStack": {
            "Basic_DamagePercentage": {
              "operator": "Variables[0] (2.4) || RETURN",
              "displayLines": "2.4",
              "constants": [],
              "variables": [
                2.4
              ]
            },
            "ExtraLayer_DamagePercentage": {
              "operator": "Variables[0] (0.12) || RETURN",
              "displayLines": "0.12",
              "constants": [],
              "variables": [
                0.12
              ]
            },
            "SecondLayer": {
              "operator": "Variables[0] (3) || RETURN",
              "displayLines": "3",
              "constants": [],
              "variables": [
                3
              ]
            },
            "Spread_DamagePercentage": {
              "operator": "Variables[0] (1.8) || RETURN",
              "displayLines": "1.8",
              "constants": [],
              "variables": [
                1.8
              ]
            },
            "ThirdLayer": {
              "operator": "Variables[0] (7) || RETURN",
              "displayLines": "7",
              "constants": [],
              "variables": [
                7
              ]
            },
            "DefenceIgnore": {
              "operator": "Variables[0] (0.2) || RETURN",
              "displayLines": "0.2",
              "constants": [],
              "variables": [
                0.2
              ]
            },
            "Cast_By_Level": 0
          },
          "addStacksPerTrigger": {
            "operator": "Variables[0] (Rank06_Weighted_Stack_Layer) || RETURN",
            "displayLines": "Rank06_Weighted_Stack_Layer",
            "constants": [],
            "variables": [
              "Rank06_Weighted_Stack_Layer"
            ]
          }
        }
      ]
    }
  ],
  "references": []
}