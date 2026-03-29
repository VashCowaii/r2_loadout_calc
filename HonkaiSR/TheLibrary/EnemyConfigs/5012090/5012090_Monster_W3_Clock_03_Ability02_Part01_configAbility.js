const configAbility = {
  "fileName": "5012090_Monster_W3_Clock_03_Ability02_Part01",
  "childAbilityList": [
    "5012090_Monster_W3_Clock_03_Ability02_Camera",
    "5012090_Monster_W3_Clock_03_Ability02_Part01",
    "5012090_Monster_W3_Clock_03_Ability02_Part02",
    "5012090_Monster_W3_Clock_03_Ability02_Part03",
    "5012090_Monster_W3_Clock_03_Ability02_Camera_02",
    "5012090_Monster_W3_Clock_03_Ability02_Camera_03"
  ],
  "skillTrigger": "Skill02",
  "abilityType": "Skill",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "Is_Traitor",
        "compareType": ">=",
        "value2": 1
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "TraitorChace",
          "value": 1
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Is_Traitor",
          "value": 0
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "variableName": "TraitorChace",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Is_Traitor",
          "value": 0
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Compare: Variable",
            "value1": "Is_BeingAttacked",
            "compareType": ">=",
            "value2": 1
          },
          {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Enemy Team All}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": ">=",
            "value2": 2
          },
          {
            "name": "Random Chance",
            "chance": {
              "operator": "Variables[0] (TraitorChace) || RETURN",
              "displayLines": "TraitorChace",
              "constants": [],
              "variables": [
                "TraitorChace"
              ]
            }
          }
        ]
      },
      "passed": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Targets Adjacent to Caster}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "ifTargetFound": [
            "Deleted bullshit",
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "inherentTarget": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "ability": "Monster_W3_Clock_03_Ability02_Part03",
              "isTrigger": true
            }
          ]
        }
      ],
      "failed": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W3_Clock_03_Ability02_Part02",
          "isTrigger": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Is_BeingAttacked",
            "compareType": ">=",
            "value2": 1
          },
          "passed": [
            "Deleted bullshit"
          ],
          "failed": [
            "Deleted bullshit"
          ]
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "realTargetData": {
    "primaryTarget": "Select Hostile Target"
  },
  "references": []
}