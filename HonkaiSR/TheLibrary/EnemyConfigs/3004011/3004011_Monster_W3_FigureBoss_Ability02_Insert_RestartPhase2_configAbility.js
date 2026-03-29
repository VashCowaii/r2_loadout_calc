const configAbility = {
  "fileName": "3004011_Monster_W3_FigureBoss_Ability02_Insert_RestartPhase2",
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
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "OR",
            "conditionList": [
              {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value": "W3_Figure_00"
              },
              {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value": "W3_Figure_01"
              },
              {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value": "W3_Figure_02"
              }
            ]
          },
          {
            "name": "OR",
            "conditionList": [
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "Break"
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "STAT_CTRL"
              }
            ]
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
          "modifier": "<a class=\"gModGreen\" id=\"979801477\">Monster_Standard_Endurance</a>"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Parameter Target List}}"
          },
          "searchRandom": true,
          "conditions": {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "flagName": "Break"
          },
          "ifTargetFound": [
            {
              "name": "Reset Toughness",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target List}}"
              }
            },
            {
              "name": "Exit Broken-State",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target List}}"
              }
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
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value": "W3_Figure_00"
                  },
                  {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value": "W3_Figure_01"
                  },
                  {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value": "W3_Figure_02"
                  }
                ]
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "STAT_CTRL"
              }
            ]
          },
          "ifTargetFound": [
            {
              "name": "Remove Modifier Behavior Flag(s)",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "flagNames": []
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target List}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"941590351\">Monster_W3_FigureBoss_Standard_TheChosenOne</a>[<span class=\"descriptionNumberColor\">Impresario</span>]",
          "valuePerStack": {
            "MDF_BreakDelayRatio": {
              "operator": "Variables[0] (P1_BreakDelayRatio) || RETURN",
              "displayLines": "P1_BreakDelayRatio",
              "constants": [],
              "variables": [
                "P1_BreakDelayRatio"
              ]
            },
            "MDF_ChosenOneSpeedUp": {
              "operator": "Variables[0] (P2_ChosenOneSpeedUp) || RETURN",
              "displayLines": "P2_ChosenOneSpeedUp",
              "constants": [],
              "variables": [
                "P2_ChosenOneSpeedUp"
              ]
            },
            "MDF_ExploreDamagePercentage": {
              "operator": "Variables[0] (P3_ExploreDamagePercentage) || RETURN",
              "displayLines": "P3_ExploreDamagePercentage",
              "constants": [],
              "variables": [
                "P3_ExploreDamagePercentage"
              ]
            },
            "MDF_ExploreDelayRatio": {
              "operator": "Variables[0] (P4_ExploreDelayRatio) || RETURN",
              "displayLines": "P4_ExploreDelayRatio",
              "constants": [],
              "variables": [
                "P4_ExploreDelayRatio"
              ]
            },
            "MDF_ExploreDamageUpRatio": {
              "operator": "Variables[0] (P5_ExploreDamageUpRatio) || RETURN",
              "displayLines": "P5_ExploreDamageUpRatio",
              "constants": [],
              "variables": [
                "P5_ExploreDamageUpRatio"
              ]
            }
          }
        },
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Target Sequence",
            "Sequence": [
              {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              {
                "name": "Target Filter",
                "conditions": {
                  "name": "Check Boolean Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "value": "W3_Figure_02"
                }
              }
            ]
          },
          "multiBase": 1.33
        },
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Target Sequence",
            "Sequence": [
              {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              {
                "name": "Target Filter",
                "conditions": {
                  "name": "Check Boolean Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "value": "W3_Figure_00"
                }
              }
            ]
          },
          "multiBase": 0.0009999999
        },
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Target Sequence",
            "Sequence": [
              {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              {
                "name": "Target Filter",
                "conditions": {
                  "name": "Check Boolean Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "value": "W3_Figure_01"
                }
              }
            ]
          },
          "multiBase": 0.667
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target List}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Sequence",
            "Sequence": [
              {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              {
                "name": "Target Filter",
                "conditions": {
                  "name": "Check Boolean Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "value": "W3_Figure_02"
                }
              }
            ]
          },
          "ability": "Monster_W3_Figure_02_RLElite_Ability07_Part00",
          "isTrigger": true
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1611594582\">Monster_W3_FigureBoss_Standard_TheChosenOneEffect</a>"
        },
        "Wait for Pending Ability Completions",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"979801477\">Monster_Standard_Endurance</a>"
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  },
  "references": []
}