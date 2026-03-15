const configAbility = {
  "fileName": "5014011_Functions",
  "abilityType": "Char. Functions",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "length": 2,
  "parse": [
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__57556268\">Monster_W5_Vtuber_SwitchInField</a>",
      "parse": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{@Sparxiecon: Sub-Field Targets}}"
          },
          "includeDyingTargets": true,
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of Team",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team"
              },
              "passed": [
                {
                  "name": "Remove from Team Target Grouping",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "stayInTeam": true
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of Team",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Player Team"
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{@Sparxiecon: Prime-Field Targets}}"
          },
          "includeDyingTargets": true,
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of Team",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team"
              },
              "passed": [
                {
                  "name": "Add to Team Target Grouping",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of Team",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Player Team"
              }
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Add Target by Unique Identifier",
            "identifier": "W5_Vtuber_00"
          },
          "modifier": "<a class=\"gModGreen\" id=\"593882743\">Enemy_W5_Vtuber_Screen01</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Add Target by Unique Identifier",
            "identifier": "W5_Vtuber_00"
          },
          "modifier": "<a class=\"gModGreen\" id=\"610660362\">Enemy_W5_Vtuber_Screen02</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Unique Effect Name",
            "uniqueName": "Eff_Monster_W5_Vtuber_00_Skill03_ScreenUITransition_02",
            "invertCondition": true,
            "allowUnReady": true
          }
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__1056767111\">Monster_W5_Vtuber_SwitchOutField</a>",
      "parse": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{@Sparxiecon: Prime-Field Targets}}"
          },
          "includeDyingTargets": true,
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of Team",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team"
              },
              "passed": [
                {
                  "name": "Remove from Team Target Grouping",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "stayInTeam": true
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of Team",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Player Team"
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{@Sparxiecon: Sub-Field Targets}}"
          },
          "includeDyingTargets": true,
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of Team",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team"
              },
              "passed": [
                {
                  "name": "Add to Team Target Grouping",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of Team",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Player Team"
              }
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Add Target by Unique Identifier",
            "identifier": "W5_Vtuber_00"
          },
          "modifier": "<a class=\"gModGreen\" id=\"593882743\">Enemy_W5_Vtuber_Screen01</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Add Target by Unique Identifier",
            "identifier": "W5_Vtuber_00"
          },
          "modifier": "<a class=\"gModGreen\" id=\"610660362\">Enemy_W5_Vtuber_Screen02</a>"
        }
      ]
    }
  ],
  "references": []
}