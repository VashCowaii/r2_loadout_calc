const configAbility = {
  "fileName": "4034013_Functions",
  "abilityType": "Char. Functions",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "length": 3,
  "parse": [
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-410869211\">TaskList_Monster_W4_FireProwler_IF_SummonIndexInitiate</a>",
      "parse": [
        {
          "name": "Define Custom Variable",
          "variableName": "CurrentSummonIndex",
          "value": 1
        },
        {
          "name": "Define Custom Variable",
          "variableName": "CurrentBounsIndex",
          "value": 2
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__359667306\">TaskList_Monster_W4_FireProwler_IF_SummonIndexChange</a>",
      "parse": [
        {
          "name": "SWITCH",
          "switchValue": {
            "operator": "Variables[0] (CurrentSummonIndex) || RETURN",
            "displayLines": "CurrentSummonIndex",
            "constants": [],
            "variables": [
              "CurrentSummonIndex"
            ]
          },
          "caseEvents": [
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 1,
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "CurrentSummonIndex",
                  "value": 2
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 2,
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "CurrentSummonIndex",
                  "value": 3
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 3,
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "CurrentSummonIndex",
                  "value": 1
                }
              ]
            }
          ],
          "defaultEvents": [
            {
              "name": "Define Custom Variable",
              "variableName": "CurrentSummonIndex",
              "value": 1
            }
          ]
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-1876357747\">TaskList_Monster_W4_FireProwler_IF_SummonBounsCheck</a>",
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "CurrentBounsIndex",
            "compareType": "<",
            "value2": {
              "operator": "Variables[0] ({[SkillP03[2]]}) || RETURN",
              "displayLines": "{[SkillP03[2]]}",
              "constants": [],
              "variables": [
                "{[SkillP03[2]]}"
              ]
            }
          },
          "passed": [
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "CurrentBounsIndex",
              "context": "TargetEntity",
              "value": 1,
              "max": 100
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1578257108\">Enemy_W4_FireProwler_01_IF_Bonus</a>[<span class=\"descriptionNumberColor\">Complete Vessel</span>]"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "CurrentBounsIndex",
              "value": 1
            }
          ]
        }
      ]
    }
  ],
  "references": []
}