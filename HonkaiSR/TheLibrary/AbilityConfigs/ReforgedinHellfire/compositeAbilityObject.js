const entityPageType = "lc"
const compositeAbilityObject = {
  "fullCharacterName": "Reforged in Hellfire",
  "trimCharacterName": "ReforgedinHellfire",
  "abilityList": [
    "ReforgedinHellfire_Ability23059"
  ],
  "fixedStats": {
    "1": {
      "HP%": 0.3
    },
    "2": {
      "HP%": 0.375
    },
    "3": {
      "HP%": 0.45
    },
    "4": {
      "HP%": 0.525
    },
    "5": {
      "HP%": 0.6
    }
  },
  "abilityObject": {
    "ReforgedinHellfire_Ability23059": {
      "fileName": "ReforgedinHellfire_Ability23059",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1705473452\">LC_23059_Main</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1204006037\">LC_23059_Debuff</a>[<span class=\"descriptionNumberColor\">Purgatory</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "description": "Increases CRIT DMG taken by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>. The CRIT DMG taken from the wearer's attack additionally increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue2</span>.",
          "type": "Debuff",
          "effectName": "CRIT Vulnerability",
          "statusName": "Purgatory",
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Player Team"
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageSUM</span>&nbsp;",
                          "value": "MDF_PropertyValue"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageSUM</span>&nbsp;",
                          "value": "MDF_PropertyValue2"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1705473452\">LC_23059_Main</a>",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_WaveConut",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "value": {
                        "operator": "Variables[0] (20) || RETURN",
                        "displayLines": "20",
                        "constants": [],
                        "variables": [
                          20
                        ]
                      },
                      "isFixed": "(Fixed)"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_WaveConut",
                      "value": 1
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Type",
                    "skillType": "Skill"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Attack Targets of Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1204006037\">LC_23059_Debuff</a>[<span class=\"descriptionNumberColor\">Purgatory</span>]",
                      "duration": {
                        "operator": "Variables[0] (2) || RETURN",
                        "displayLines": "2",
                        "constants": [],
                        "variables": [
                          2
                        ]
                      },
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (0.3) || RETURN",
                          "displayLines": "0.3",
                          "constants": [],
                          "variables": [
                            0.3
                          ]
                        },
                        "MDF_PropertyValue2": {
                          "operator": "Variables[0] (0.3) || RETURN",
                          "displayLines": "0.3",
                          "constants": [],
                          "variables": [
                            0.3
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_WaveConut",
                  "value": 0
                }
              ],
              "priorityLevel": -80
            }
          ]
        }
      ],
      "isLightcone": true,
      "desc": "Increases the wearer's Max HP by #1[i]%. At the start of the wearer's turn, regenerates a fixed amount of #2[i] Energy. This effect can trigger 1 time each wave. After the wearer uses Skill to attack, inflicts the target with the \"Purgatory\" state, lasting for #3[i] turn(s). While in the \"Purgatory\" state, the target receives #4[i]% increased CRIT DMG and #5[i]% additionally increased CRIT DMG from the wearer.",
      "params": [
        [
          0.3,
          20,
          2,
          0.3,
          0.3
        ],
        [
          0.375,
          20,
          2,
          0.375,
          0.375
        ],
        [
          0.45,
          20,
          2,
          0.45,
          0.45
        ],
        [
          0.525,
          20,
          2,
          0.525,
          0.525
        ],
        [
          0.6,
          20,
          2,
          0.6,
          0.6
        ]
      ]
    }
  },
  "isLightcone": true
}