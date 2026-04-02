const configAbility = {
  "fileName": "60008_MissionBattleEvent60008_Ability02_Part01",
  "childAbilityList": [
    "60008_MissionBattleEvent60008_Ability02_Camera",
    "60008_MissionBattleEvent60008_Ability02_Part01",
    "60008_MissionBattleEvent60008_Ability02_Part02"
  ],
  "skillTrigger": "Skill02",
  "abilityType": "Skill",
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "TalkCount",
        "compareType": "=",
        "value2": 0
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "TalkCount",
          "value": 1
        }
      ],
      "failed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "TalkCount",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "TalkCount",
              "value": 2
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "TalkCount",
                "compareType": "=",
                "value2": 2
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "TalkCount",
                  "value": 0
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "MissionBattleEvent60008_Ability02_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "whenAdded": [
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "TargetEntity",
      "variableName": "TalkCount"
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "All Player Team Members"
  },
  "realTargetData": {
    "primaryTarget": "All Player Team"
  }
}