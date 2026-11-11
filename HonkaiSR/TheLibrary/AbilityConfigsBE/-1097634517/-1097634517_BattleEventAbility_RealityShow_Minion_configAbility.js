const configAbility = {
  "fileName": "-1097634517_BattleEventAbility_RealityShow_Minion",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [],
  "whenAdded": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1479241382\">BattleEventAbility_RealityShow_Minion_Modifier</a>"
    }
  ],
  "functions": [
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-1468583066\">RealityShow_TryWinByAllShieldBreak</a>",
      "parse": [
        {
          "name": "Define Custom Variable with Infinite Waves Info",
          "variableName": "_RS_InfiniteSummonProgress",
          "scope": "ContextAbility"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Compare: Variable",
                "value1": "Wave Count",
                "compareType": "=",
                "compareWithMax": true
              },
              {
                "name": "Compare: Variable",
                "value1": "_RS_InfiniteSummonProgress",
                "compareType": ">=",
                "value2": 1,
                "contextScope": "ContextAbility"
              }
            ]
          },
          "passed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-942439146\">StageAbility_RealityShow_Monster01_DamageShield</a>[<span class=\"descriptionNumberColor\">Melt-Cast</span>]"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1507418663\">StageAbility_RealityShow_Monster02_DamageShield</a>[<span class=\"descriptionNumberColor\">Psychic Energy</span>]"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"398227992\">StageAbility_RealityShow_Monster03_DamageShield</a>[<span class=\"descriptionNumberColor\">Refraction</span>]"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1911123757\">StageAbility_RealityShow_Monster04_DamageShield</a>[<span class=\"descriptionNumberColor\">Impediment</span>]"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-55058230\">StageAbility_RealityShow_Monster05_DamageShield</a>[<span class=\"descriptionNumberColor\">Desolation</span>]"
                      }
                    ]
                  },
                  {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "invertCondition": true
                  }
                ]
              },
              "noTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1538147578\">RealityShow_WinPending</a>"
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1623146454\">RealityShow_WinSkipAction</a>",
      "modifierFlags": [
        "DisableAction"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1538147578\">RealityShow_WinPending</a>",
      "latentQueue": [
        "_RS_InfiniteSummonProgress"
      ],
      "execute": [
        {
          "eventTrigger": "Action Phase Start [Anyone][?]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1623146454\">RealityShow_WinSkipAction</a>"
            },
            "Modifier Deletes Itself"
          ]
        },
        {
          "eventTrigger": "Action Choice Window [Anyone]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        },
        {
          "eventTrigger": "Action End [Anyone]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        },
        {
          "eventTrigger": "Turn [Anyone]: End",
          "execute": [
            "Modifier Deletes Itself"
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1479241382\">BattleEventAbility_RealityShow_Minion_Modifier</a>",
      "execute": [
        {
          "eventTrigger": "Entity Death [Anyone]",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1468583066\">RealityShow_TryWinByAllShieldBreak</a>"
            }
          ]
        },
        {
          "eventTrigger": "Entity Left Battle [Anyone]",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1468583066\">RealityShow_TryWinByAllShieldBreak</a>"
            }
          ]
        },
        {
          "eventTrigger": "Enter Battle",
          "priorityLevel": -90
        }
      ]
    }
  ]
}