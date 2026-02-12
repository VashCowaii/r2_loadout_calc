const configAbility = {
  "fileName": "4043010_Monster_W3_TV_01_PassiveAbility",
  "skillTrigger": "PassiveSkill02",
  "abilityType": "Basic ATK",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Target Name",
          "target": "{{Level Entity}}"
        },
        "value1": "TV_01_GroupFlag",
        "compareType": "=",
        "value2": 0,
        "contextScope": "TargetEntity"
      },
      "passed": [
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "scope": "TargetEntity",
          "variableName": "TV_01_GroupFlag"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Target Name",
          "target": "{{Level Entity}}"
        },
        "value1": "TV_01_EliteFlag",
        "compareType": "=",
        "value2": 0,
        "contextScope": "TargetEntity"
      },
      "passed": [
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "scope": "TargetEntity",
          "variableName": "TV_01_EliteFlag"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "OR",
        "conditionList": [
          {
            "name": "Compare: Variable",
            "value1": "TV_01_EliteChance",
            "compareType": "<",
            "value2": 0
          },
          {
            "name": "Compare: Variable",
            "value1": "TV_01_EliteChance",
            "compareType": ">",
            "value2": 100
          }
        ]
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "TV_01_EliteChance",
          "value": {
            "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
            "displayLines": "{[Skill01[0]]}",
            "constants": [],
            "variables": [
              "{[Skill01[0]]}"
            ]
          }
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "variableName": "TV_01_EliteChance",
          "value": {
            "operator": "Variables[0] (TV_01_EliteChance) || Constants[0] (100) || DIV || RETURN",
            "displayLines": "(TV_01_EliteChance / 100)",
            "constants": [
              100
            ],
            "variables": [
              "TV_01_EliteChance"
            ]
          }
        }
      ]
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "RandomFlagTemp"
    },
    {
      "name": "Action Advance/Delay",
      "advanceType": "Set",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "multiBase": 0
    }
  ],
  "references": []
}