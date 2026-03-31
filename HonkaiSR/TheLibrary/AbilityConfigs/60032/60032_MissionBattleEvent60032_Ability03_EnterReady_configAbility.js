const configAbility = {
  "fileName": "60032_MissionBattleEvent60032_Ability03_EnterReady",
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
            "value1": "#CL_First",
            "compareType": "=",
            "value2": 1
          },
          {
            "name": "Enemy ID",
            "ID": 4035011,
            "target": {
              "name": "Target Name",
              "target": "{{Irontomb: Core}}"
            },
            "characterName": "Anti-Creator, Hatred Inundate"
          }
        ]
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Compare: Variable",
            "value1": "#CL_First",
            "compareType": "=",
            "value2": 1
          },
          {
            "name": "OR",
            "conditionList": [
              {
                "name": "Enemy ID",
                "ID": 4035011,
                "target": {
                  "name": "Target Name",
                  "target": "{{Irontomb: Core}}"
                },
                "characterName": "Anti-Creator, Hatred Inundate"
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Irontomb: Core}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-493664803\">MScoring_30234_FirstTutorial</a>"
              }
            ]
          }
        ]
      }
    },
    {
      "name": "Define Custom Variable with Team Count",
      "target": {
        "name": "Target Name",
        "target": "{{Player Team(Exclude Memosprites)}} - BattleEvent60032_Avatar_1415"
      },
      "variableName": "#CL_CharacterCount",
      "livingTargets": true
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "#CL_CharacterCount",
        "compareType": "=",
        "value2": 4
      },
      "failed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "#CL_CharacterCount",
            "compareType": "=",
            "value2": 3
          },
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "#CL_CharacterCount",
                "compareType": "=",
                "value2": 2
              }
            }
          ]
        }
      ]
    },
    "Deleted bullshit",
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Compare: Variable",
            "value1": "#CL_First",
            "compareType": "=",
            "value2": 1
          },
          {
            "name": "OR",
            "conditionList": [
              {
                "name": "Enemy ID",
                "ID": 4035011,
                "target": {
                  "name": "Target Name",
                  "target": "{{Irontomb: Core}}"
                },
                "characterName": "Anti-Creator, Hatred Inundate"
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Irontomb: Core}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-493664803\">MScoring_30234_FirstTutorial</a>"
              }
            ]
          }
        ]
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "#CL_First",
          "value": 0
        }
      ]
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  }
}