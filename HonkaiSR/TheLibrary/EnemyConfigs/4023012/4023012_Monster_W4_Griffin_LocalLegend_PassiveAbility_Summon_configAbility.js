const configAbility = {
  "fileName": "4023012_Monster_W4_Griffin_LocalLegend_PassiveAbility_Summon",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "WAIT FOR",
      "conditions": {
        "name": "Death Animation Completed",
        "team": "Enemy Team",
        "entityType": "Team Characters"
      }
    },
    {
      "name": "Looped Event",
      "maxLoops": {
        "displayLines": "FREEVAR"
      },
      "execute": [
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
          "displayLines": "_DieSums"
        }
      }
    },
    {
      "name": "Define Custom Variable",
      "value": {
        "displayLines": "_DieSums"
      },
      "variableName": "_DieSumsCheck"
    },
    {
      "name": "Define Custom Variable",
      "value": 0,
      "variableName": "InsertCheck02"
    },
    {
      "name": "Define Custom Variable",
      "value": 0,
      "variableName": "_SummonCounts"
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}