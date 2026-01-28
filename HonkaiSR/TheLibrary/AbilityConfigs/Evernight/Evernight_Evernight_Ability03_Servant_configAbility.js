const configAbility = {
  "fileName": "Evernight_Evernight_Ability03_Servant",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Use Custom Character Function",
      "functionName": "function_Evernight_Group_SizeControl_Perf"
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "function_Evernight_Group_FollowControl_00"
    },
    "Deleted bullshit",
    {
      "name": "Use Custom Character Function",
      "functionName": "function_Evernight_Group_FollowControl_STB"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster's Summoner}}"
      },
      "modifier": "Evernight_S03"
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "function_Evernight_Group_FollowControl_STB"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "_Partner_Count",
        "compareType": "<",
        "value2": {
          "operator": "Variables[0] (_Partner_CountThresHold) || Constants[0] (4) || MUL || RETURN",
          "displayLines": "(_Partner_CountThresHold * 4)",
          "constants": [
            4
          ],
          "variables": [
            "_Partner_CountThresHold"
          ]
        }
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "_Partner_Count",
        "compareType": "<",
        "value2": {
          "operator": "Variables[0] (_Partner_CountThresHold) || Constants[0] (3) || MUL || RETURN",
          "displayLines": "(_Partner_CountThresHold * 3)",
          "constants": [
            3
          ],
          "variables": [
            "_Partner_CountThresHold"
          ]
        }
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "_Partner_Count",
        "compareType": "<",
        "value2": {
          "operator": "Variables[0] (_Partner_CountThresHold) || Constants[0] (2) || MUL || RETURN",
          "displayLines": "(_Partner_CountThresHold * 2)",
          "constants": [
            2
          ],
          "variables": [
            "_Partner_CountThresHold"
          ]
        }
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "_Partner_Count",
        "compareType": "<",
        "value2": {
          "operator": "Variables[0] (_Partner_CountThresHold) || Constants[0] (1) || MUL || RETURN",
          "displayLines": "(_Partner_CountThresHold * 1)",
          "constants": [
            1
          ],
          "variables": [
            "_Partner_CountThresHold"
          ]
        }
      }
    }
  ],
  "functions": [
    {
      "name": "CharacterFunctions",
      "functionName": "Evernight_Ability03_TriggerAnim_Man",
      "parse": []
    },
    {
      "name": "CharacterFunctions",
      "functionName": "Evernight_Ability03_TriggerAnim_01",
      "parse": [
        {
          "name": "Use Custom Character Function",
          "functionName": "function_Evernight_Group_FollowControl_STB"
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "Evernight_Ability03_TriggerAnim_02",
      "parse": []
    },
    {
      "name": "CharacterFunctions",
      "functionName": "Evernight_Ability03_TriggerAnim_03",
      "parse": []
    },
    {
      "name": "CharacterFunctions",
      "functionName": "Evernight_Ability03_TriggerAnim_04",
      "parse": []
    },
    {
      "name": "CharacterFunctions",
      "functionName": "Evernight_Ability03_TriggerAnim_05",
      "parse": []
    }
  ],
  "references": []
}