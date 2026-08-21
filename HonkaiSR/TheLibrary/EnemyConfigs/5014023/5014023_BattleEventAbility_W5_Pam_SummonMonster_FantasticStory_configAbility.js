const configAbility = {
  "fileName": "5014023_BattleEventAbility_W5_Pam_SummonMonster_FantasticStory",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Compare: Variable",
            "value1": "MDF_BEAlive",
            "compareType": "=",
            "value2": 0
          }
        ]
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Check Boolean Value",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "value": "GridFightBoss"
          },
          "passed": [
            {
              "name": "Add Battle Event",
              "teamName": "Player Team",
              "eventID": 20049,
              "assignOwner": {
                "name": "Target Name",
                "target": "{{Level Entity}}"
              },
              "variables": {
                "PassiveAbility01_P6_SpeedRatio": {
                  "operator": "Variables[0] ({[PassiveSkill01[5]]}) || RETURN",
                  "displayLines": "{[PassiveSkill01[5]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill01[5]]}"
                  ]
                }
              },
              "whenCreated": [
                {
                  "name": "Assign Unique Name",
                  "uniqueName": "Pamu_Robot",
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
            }
          ],
          "failed": [
            {
              "name": "Add Battle Event",
              "teamName": "Player Team",
              "eventID": 20049,
              "assignOwner": {
                "name": "Target Name",
                "target": "{{Level Entity}}"
              },
              "variables": null,
              "whenCreated": [
                {
                  "name": "Assign Unique Name",
                  "uniqueName": "Pamu_Robot",
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
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "MDF_BEAlive",
          "value": 1
        }
      ],
      "failed": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Battle Event List}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Battle Event ID",
            "ID": 20049,
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            }
          },
          "ifTargetFound": [
            {
              "name": "Remove from Team Target Grouping",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "stayInTeam": false
            }
          ]
        }
      ]
    },
    "Deleted bullshit",
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Battle Event List}}"
      },
      "maxTargets": 1,
      "conditions": {
        "name": "Battle Event ID",
        "ID": 20049,
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        }
      },
      "ifTargetFound": [
        {
          "name": "Remove from Team Target Grouping",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "stayInTeam": false
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  },
  "references": []
}