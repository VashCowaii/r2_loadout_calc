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
          "value": 1,
          "variableName": "CurrentSummonIndex"
        },
        {
          "name": "Define Custom Variable",
          "value": 2,
          "variableName": "CurrentBounsIndex"
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
            "displayLines": "CurrentSummonIndex"
          },
          "caseTasks": [
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 1,
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "value": 2,
                  "variableName": "CurrentSummonIndex"
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 2,
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "value": 3,
                  "variableName": "CurrentSummonIndex"
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 3,
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "value": 1,
                  "variableName": "CurrentSummonIndex"
                }
              ]
            }
          ],
          "defaultTasks": [
            {
              "name": "Define Custom Variable",
              "value": 1,
              "variableName": "CurrentSummonIndex"
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
              "displayLines": "{[SkillP03[2]]}"
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
              "value": 1,
              "variableName": "CurrentBounsIndex"
            }
          ]
        }
      ]
    }
  ],
  "references": []
}