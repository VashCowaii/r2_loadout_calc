const configAbility = {
  "fileName": "3025015_Monster_W3_Sunday_Ability09_Part01",
  "childAbilityList": [
    "3025015_Monster_W3_Sunday_Ability09_Part01",
    "3025015_Monster_W3_Sunday_Ability09_Part02",
    "3025015_Monster_W3_Sunday_Ability09_Camera01",
    "3025015_Monster_W3_Sunday_Ability09_Camera02",
    "3025015_Monster_W3_Sunday_Ability09_Camera03",
    "3025015_Monster_W3_Sunday_Ability09_Camera04",
    "3025015_Monster_W3_Sunday_Ability09_Camera05",
    "3025015_Monster_W3_Sunday_Ability09_Camera06",
    "3025015_Monster_W3_Sunday_Ability09_Camera07"
  ],
  "skillTrigger": "Skill09",
  "abilityType": "Skill",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Monster_W3_Sunday_Ability09_Part02",
      "isTrigger": true
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"1481304918\">Enemy_W3_Sunday_Ability08_TheWorld_V4</a>[<span class=\"descriptionNumberColor\">Im Anfang war die Kraft</span>]",
        "invertCondition": true
      },
      "passed": [
        "Deleted bullshit"
      ],
      "failed": [
        {
          "name": "SWITCH",
          "switchValue": {
            "operator": "Variables[0] (MDF_Skill10_TurnCount) || RETURN",
            "displayLines": "MDF_Skill10_TurnCount",
            "constants": [],
            "variables": [
              "MDF_Skill10_TurnCount"
            ]
          },
          "caseEvents": [
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 7,
              "execute": [
                "Deleted bullshit"
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 6,
              "execute": [
                "Deleted bullshit"
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 5,
              "execute": [
                "Deleted bullshit"
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 4,
              "execute": [
                "Deleted bullshit"
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 3,
              "execute": [
                "Deleted bullshit"
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 2,
              "execute": [
                "Deleted bullshit"
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 1,
              "execute": [
                "Deleted bullshit"
              ]
            }
          ],
          "defaultEvents": []
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "W3_Sunday_00_TimePause_ActionCounter",
        "compareType": "=",
        "value2": 5,
        "contextScope": "TargetEntity"
      },
      "failed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "W3_Sunday_00_TimePause_ActionCounter",
            "compareType": "=",
            "value2": 3,
            "contextScope": "TargetEntity"
          }
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}