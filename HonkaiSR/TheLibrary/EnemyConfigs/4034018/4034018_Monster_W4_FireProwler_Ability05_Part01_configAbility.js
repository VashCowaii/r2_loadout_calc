const configAbility = {
  "fileName": "4034018_Monster_W4_FireProwler_Ability05_Part01",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "<a class=\"gModGreen\" id=\"33624492\">Enemy_W4_FireProwler_TimePower</a>[<span class=\"descriptionNumberColor\">Calamity Power</span>]",
        "compareType": ">",
        "value2": 0,
        "valueType": "Layer"
      },
      "passed": [
        "Deleted bullshit",
        {
          "name": "Define Custom Variable with Modifier Values",
          "valueType": "Layer",
          "variableName": "AttackCount",
          "modifierName": "<a class=\"gModGreen\" id=\"33624492\">Enemy_W4_FireProwler_TimePower</a>[<span class=\"descriptionNumberColor\">Calamity Power</span>]",
          "multiplier": {
            "operator": "Variables[0] ({[Skill05[0]]}) || RETURN",
            "displayLines": "{[Skill05[0]]}",
            "constants": [],
            "variables": [
              "{[Skill05[0]]}"
            ]
          }
        },
        {
          "name": "SWITCH",
          "switchValue": {
            "operator": "Variables[0] (AttackCount) || RETURN",
            "displayLines": "AttackCount",
            "constants": [],
            "variables": [
              "AttackCount"
            ]
          },
          "caseEvents": [
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 2
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 4
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 6
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 8
            }
          ],
          "defaultEvents": []
        }
      ],
      "failed": [
        "Deleted bullshit",
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Stage Type",
                "stageType": "EvolveBuildActivity"
              }
            ]
          }
        }
      ]
    },
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Monster_W4_FireProwler_Ability05_Part02",
      "isTrigger": true
    }
  ],
  "references": []
}