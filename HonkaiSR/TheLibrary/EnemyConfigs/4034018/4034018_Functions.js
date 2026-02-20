const configAbility = {
  "fileName": "4034018_Functions",
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
      "functionName": "<a class=\"gTempYellow\" id=\"fun__1996501401\">TaskList_Monster_W4_FireProwler_10_Main03_SummonIndexInitiate</a>",
      "parse": [
        {
          "name": "Define Custom Variable",
          "variableName": "CurrentSummonIndex",
          "value": 1
        },
        {
          "name": "Define Custom Variable",
          "variableName": "CurrentBounsIndex",
          "value": 1
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-702678026\">TaskList_Monster_W4_FireProwler_10_Main03_SummonIndexChange</a>",
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
      "functionName": "<a class=\"gTempYellow\" id=\"fun__338570417\">TaskList_Monster_W4_FireProwler_10_Main03_SummonBounsCheck</a>",
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
              "modifier": "<a class=\"gModGreen\" id=\"-986774268\">Enemy_W4_FireProwler_11_Main03_Bonus</a>[<span class=\"descriptionNumberColor\">Complete Vessel</span>]"
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