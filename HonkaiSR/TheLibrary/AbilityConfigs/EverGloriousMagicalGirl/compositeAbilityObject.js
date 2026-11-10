const entityPageType = "relic"
const compositeAbilityObject = {
  "fullCharacterName": "Ever-Glorious Magical Girl",
  "trimCharacterName": "EverGloriousMagicalGirl",
  "abilityList": [
    "EverGloriousMagicalGirl_Ability51291"
  ],
  "abilityObject": {
    "EverGloriousMagicalGirl_Ability51291": {
      "fileName": "EverGloriousMagicalGirl_Ability51291",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"153004230\">Relic_129_Main</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-971304181\">Relic_129_Sub</a>[<span class=\"descriptionNumberColor\">Ever-Glorious Magical Girl</span>]",
          "stackType": "ReplaceByCaster",
          "description": "Elation DMG dealt ignores <span class=\"descriptionNumberColor\">_DefenceAddRatio</span> of the target's DEF.",
          "type": "Buff",
          "statusName": "Ever-Glorious Magical Girl",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Elation DMG"
                    ]
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Defender",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                          "value": "(-1 * _DefenceAddRatio)"
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
          "for": "<a class=\"gModGreen\" id=\"mod__153004230\">Relic_129_Main</a>",
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}} +{{Caster's Memosprite}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-971304181\">Relic_129_Sub</a>[<span class=\"descriptionNumberColor\">Ever-Glorious Magical Girl</span>]",
              "haloStatus": true
            }
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "variableName": "Temp_ChangeValue"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Temp_ChangeValue",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "(All_ChangeValue + Temp_ChangeValue)"
                      },
                      "variableName": "All_ChangeValue"
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>((All_ChangeValue / 5))"
                      },
                      "variableName": "Add_Layer"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Add_Layer",
                    "compareType": ">",
                    "value2": {
                      "displayLines": "10"
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "10"
                      },
                      "variableName": "Add_Layer"
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": 1,
                      "variableName": "_MaxFlag"
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(0.1 + (0.01 * Add_Layer))"
                  },
                  "variableName": "_DefenceAddRatio"
                }
              ]
            }
          ],
          "elationValueChange": [
            {
              "name": "Variable Value Range Conditions",
              "onChange": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_MaxFlag",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Changes to Stats",
                      "variableName": "Temp_ChangeValue"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "Temp_ChangeValue",
                        "compareType": ">",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "value": {
                            "displayLines": "(All_ChangeValue + Temp_ChangeValue)"
                          },
                          "variableName": "All_ChangeValue"
                        },
                        {
                          "name": "Define Custom Variable",
                          "value": {
                            "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>((All_ChangeValue / 5))"
                          },
                          "variableName": "Add_Layer"
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "Add_Layer",
                        "compareType": ">",
                        "value2": {
                          "displayLines": "10"
                        }
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "value": {
                            "displayLines": "10"
                          },
                          "variableName": "Add_Layer"
                        },
                        {
                          "name": "Define Custom Variable",
                          "value": 1,
                          "variableName": "_MaxFlag"
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "(0.1 + (0.01 * Add_Layer))"
                      },
                      "variableName": "_DefenceAddRatio"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "isLightcone": true,
      "isRelic": true,
      "desc": [
        "Increases CRIT DMG by 16%.",
        "The Elation DMG dealt by the wearer and their memosprites ignores 10% of targets' DEF. For every 5 accumulated Punchline allies gain, the Elation DMG dealt additionally ignores 1% of targets' DEF, stacking up to 10 time(s)."
      ],
      "params": [
        [
          0.16
        ],
        [
          0.1,
          5,
          0.01,
          10
        ]
      ]
    }
  },
  "fixedStats": {
    "2": {
      "CritDamageBase": 0.16
    },
    "4": {}
  },
  "isLightcone": true,
  "isRelic": true,
  "noReader": false
}