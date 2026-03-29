const configAbility = {
  "fileName": "2004023_Monster_W2_Yanqing_IF_Ability02_Insert_Change01",
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
      "maxTargets": 1,
      "conditions": {
        "name": "Compare: Monster Rank",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "compareType": ">=",
        "value2": 4
      },
      "ifTargetFound": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "scope": "ContextAbility",
              "variableName": "MonsterPhase",
              "value": 1
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "scope": "ContextAbility",
              "variableName": "MonsterPhase",
              "value": 2
            }
          ]
        }
      ]
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "ContextAbility",
      "variableName": "BreakDarkTeamFlag"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Compare: Variable",
            "value1": "MonsterPhase",
            "compareType": "=",
            "value2": 2,
            "contextScope": "ContextAbility"
          },
          {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-284432064\">Enemy_W2_Yanqing_IF_Ability02_PartTag01</a>"
          }
        ]
      },
      "failed": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "searchRandom": true,
          "maxTargets": 4,
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
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "scope": "ContextAbility",
              "variableName": "BreakDarkTeamFlag",
              "value": 1
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "BreakDarkTeamFlag",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-284432064\">Enemy_W2_Yanqing_IF_Ability02_PartTag01</a>"
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "searchRandom": true,
              "maxTargets": 4,
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
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"153779397\">Enemy_W2_Yanqing_01_StandByEffect</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-770732625\">Enemy_W2_Yanqing_01_SwordPowerUp_StandByEffect</a>"
                },
                {
                  "name": "Remove Modifier Behavior Flag(s)",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "flagNames": []
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-237425029\">StanceBreakState_Effect</a>"
                },
                {
                  "name": "Deal Toughness DMG",
                  "value": 60,
                  "defender": {
                    "name": "Target Name",
                    "target": "{{Summoner of Parameter Target}}"
                  },
                  "canDelay": true,
                  "ToughnessDMGType": {
                    "name": "Damage Type Source",
                    "sourceType": {}
                  }
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-543718560\">Enemy_W2_Yanqing_IF_Ability02_SwitchWeakPoint</a>"
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "searchRandom": true,
              "maxTargets": 4,
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
                  "name": "Mark Entity For Immediate Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                },
                {
                  "name": "Force Entity Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                },
                {
                  "name": "Remove from Team Target Grouping",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "stayInTeam": false
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target Count",
                "target": {
                  "name": "Target Name",
                  "target": "{{Enemy Team All}}"
                },
                "compareType": ">",
                "value2": 1,
                "livingTargets": true
              }
            }
          ]
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}