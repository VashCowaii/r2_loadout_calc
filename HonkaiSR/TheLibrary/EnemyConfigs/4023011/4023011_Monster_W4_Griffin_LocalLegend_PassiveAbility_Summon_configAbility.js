const configAbility = {
  "fileName": "4023011_Monster_W4_Griffin_LocalLegend_PassiveAbility_Summon",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "WAIT FOR",
      "condition": {
        "name": "Death Animation Completed",
        "team": "Enemy Team",
        "type": "Team Characters"
      }
    },
    {
      "name": "Looped Event",
      "maxLoops": {
        "operator": "Variables[0] (FREEVAR) || RETURN",
        "displayLines": "FREEVAR",
        "constants": [],
        "variables": [
          "FREEVAR"
        ]
      },
      "Event": [
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"1587865992\">W4_Griffin_LocalLegend_Summon</a>"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "_DieSumsCheck",
        "compareType": "<",
        "value2": {
          "operator": "Variables[0] (FREEVAR) || RETURN",
          "displayLines": "FREEVAR",
          "constants": [],
          "variables": [
            "FREEVAR"
          ]
        }
      }
    },
    {
      "name": "Define Custom Variable",
      "variableName": "_DieSumsCheck",
      "value": {
        "operator": "Variables[0] (_DieSumsCheck) || RETURN",
        "displayLines": "_DieSumsCheck",
        "constants": [],
        "variables": [
          "_DieSumsCheck"
        ]
      }
    },
    {
      "name": "Define Custom Variable",
      "variableName": "InsertCheck02",
      "value": 0
    },
    {
      "name": "Define Custom Variable",
      "variableName": "_SummonCounts",
      "value": 0
    }
  ],
  "references": []
}