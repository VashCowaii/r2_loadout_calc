const configAbility = {
  "fileName": "BlackSwanv0_BlackSwan_Ability01_Part02",
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
          "displayLines": "0.6"
        },
        "Toughness": {
          "displayLines": "ST Toughness Value"
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
        "team": "Enemy Team"
      },
      "passed": [
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"1367341755\">AddDot</a>",
          "variables": {
            "Arg01": {
              "displayLines": "0.65"
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
              "functionName": "<a class=\"gTempYellow\" id=\"1367341755\">AddDot</a>",
              "variables": {
                "Arg01": {
                  "displayLines": "0.65"
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
              "functionName": "<a class=\"gTempYellow\" id=\"1367341755\">AddDot</a>",
              "variables": {
                "Arg01": {
                  "displayLines": "0.65"
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
              "functionName": "<a class=\"gTempYellow\" id=\"1367341755\">AddDot</a>",
              "variables": {
                "Arg01": {
                  "displayLines": "0.65"
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
              "functionName": "<a class=\"gTempYellow\" id=\"1367341755\">AddDot</a>",
              "variables": {
                "Arg01": {
                  "displayLines": "0.65"
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
      "functionName": "<a class=\"gTempYellow\" id=\"fun__1367341755\">AddDot</a>",
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Random Chance",
            "chance": {
              "displayLines": "Rank06_Chance"
            }
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(1 + Rank06_Extra_Layer)"
              },
              "variableName": "Rank06_Weighted_Stack_Layer"
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "1"
              },
              "variableName": "Rank06_Weighted_Stack_Layer"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2037361233\">BlackSwan_DOT</a>[<span class=\"descriptionNumberColor\">Arcana</span>]",
          "baseChance": {
            "displayLines": "Arg01"
          },
          "stackLimit": {
            "displayLines": "Max_DOT_Layer"
          },
          "valuePerStack": {
            "Basic_DamagePercentage": {
              "displayLines": "2.4"
            },
            "ExtraLayer_DamagePercentage": {
              "displayLines": "0.12"
            },
            "SecondLayer": {
              "displayLines": "3"
            },
            "Spread_DamagePercentage": {
              "displayLines": "1.8"
            },
            "ThirdLayer": {
              "displayLines": "7"
            },
            "DefenceIgnore": {
              "displayLines": "0.2"
            },
            "Cast_By_Level": 0
          },
          "addStacksPerTrigger": {
            "displayLines": "Rank06_Weighted_Stack_Layer"
          }
        }
      ]
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  }
}