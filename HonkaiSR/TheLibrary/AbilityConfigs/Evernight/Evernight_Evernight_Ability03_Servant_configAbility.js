const configAbility = {
  "fileName": "Evernight_Evernight_Ability03_Servant",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"294638745\">function_Evernight_Group_SizeControl_Perf</a>"
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"-1711321550\">function_Evernight_Group_FollowControl_00</a>"
    },
    "Deleted bullshit",
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"-1551336747\">function_Evernight_Group_FollowControl_STB</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster's Summoner}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1950285194\">Evernight_S03</a>"
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"-1551336747\">function_Evernight_Group_FollowControl_STB</a>"
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
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-367389928\">Evernight_Ability03_TriggerAnim_Man</a>",
      "parse": []
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__431919247\">Evernight_Ability03_TriggerAnim_01</a>",
      "parse": [
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-1551336747\">function_Evernight_Group_FollowControl_STB</a>"
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__448696866\">Evernight_Ability03_TriggerAnim_02</a>",
      "parse": []
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__465474485\">Evernight_Ability03_TriggerAnim_03</a>",
      "parse": []
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__348031152\">Evernight_Ability03_TriggerAnim_04</a>",
      "parse": []
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__364808771\">Evernight_Ability03_TriggerAnim_05</a>",
      "parse": []
    }
  ],
  "references": []
}