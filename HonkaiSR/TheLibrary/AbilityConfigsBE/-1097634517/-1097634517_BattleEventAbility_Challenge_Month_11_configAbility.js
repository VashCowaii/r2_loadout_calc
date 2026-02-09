const configAbility = {
  "fileName": "-1097634517_BattleEventAbility_Challenge_Month_11",
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
      "modifier": "<a class=\"gModGreen\" id=\"1136900241\">Modifier_BattleEventAbility_Challenge_Month_11</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-527545365\">MLevel_BattleEventAbility_Challenge_Month_11</a>",
      "execute": [
        {
          "eventTrigger": "Deal Damage End [Owner]: Hit",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Attack Type",
                "attackTypes": [
                  "Follow-up"
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "Insert_Flag",
                  "value": 1
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Attack Start [Owner]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "Insert_Flag",
              "value": 0
            }
          ]
        },
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Insert_Flag",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "Insert_Flag",
                  "value": 0
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Attack Targets of Modifier Holder}}"
                  },
                  "searchRandom": true,
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"541957737\">Standard_AllDamageTypeResistanceDown</a>[<span class=\"descriptionNumberColor\">All-Type RES Reduction</span>]",
                      "duration": {
                        "operator": "Variables[0] (#BattleEvent_P2_ADF) || RETURN",
                        "displayLines": "#BattleEvent_P2_ADF",
                        "constants": [],
                        "variables": [
                          "#BattleEvent_P2_ADF"
                        ]
                      },
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (#BattleEvent_P1_ADF) || RETURN",
                          "displayLines": "#BattleEvent_P1_ADF",
                          "constants": [],
                          "variables": [
                            "#BattleEvent_P1_ADF"
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1136900241\">Modifier_BattleEventAbility_Challenge_Month_11</a>",
      "execute": [
        {
          "eventTrigger": "Entity Created [Anyone]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-527545365\">MLevel_BattleEventAbility_Challenge_Month_11</a>"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}