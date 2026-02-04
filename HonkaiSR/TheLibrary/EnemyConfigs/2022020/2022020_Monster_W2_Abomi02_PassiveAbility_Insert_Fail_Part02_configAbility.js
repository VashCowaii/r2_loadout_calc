const configAbility = {
  "fileName": "2022020_Monster_W2_Abomi02_PassiveAbility_Insert_Fail_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "TargetEntity",
      "variableName": "IsInDeathRattle",
      "value": 1
    },
    {
      "name": "Exit Broken-State",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      }
    },
    {
      "name": "Animation Event",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "state": "Skill03_Fail",
      "passed": [
        {
          "name": "Animation Task",
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "DeathrattleFlag",
                "compareType": "=",
                "value2": 1,
                "contextScope": "TargetEntity"
              }
            }
          ]
        }
      ]
    },
    "Trigger: Attack End",
    {
      "name": "Mark Entity For Immediate Death"
    }
  ],
  "references": []
}