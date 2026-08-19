const configAbility = {
  "fileName": "CosmicLifeSciencesInstitute_Ability53281",
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
      "modifier": "<a class=\"gModGreen\" id=\"-1107374371\">Relic_328_Main</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1431959058\">Relic_328_Sub</a>[<span class=\"descriptionNumberColor\">Cosmic Life Sciences Institute</span>]",
      "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">_DamageAdd</span>.",
      "type": "Buff",
      "statusName": "Cosmic Life Sciences Institute",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (_DamageAdd) || RETURN",
                "displayLines": "_DamageAdd",
                "constants": [],
                "variables": [
                  "_DamageAdd"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1107374371\">Relic_328_Main</a>",
      "execute": [
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Wave Count",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_CasterMaxSP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_CasterMaxSP",
                    "compareType": ">",
                    "value2": {
                      "operator": "Variables[0] (200) || RETURN",
                      "displayLines": "200",
                      "constants": [],
                      "variables": [
                        200
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_DamageAdd",
                      "value": {
                        "operator": "Variables[0] (_CasterMaxSP) || Variables[1] (200) || SUB || Variables[2] (0.0019999999) || MUL || RETURN",
                        "displayLines": "((_CasterMaxSP - 200) * 0.0019999999)",
                        "constants": [],
                        "variables": [
                          "_CasterMaxSP",
                          200,
                          0.0019999999
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "_DamageAdd",
                        "compareType": ">",
                        "value2": {
                          "operator": "Variables[0] (0.32) || RETURN",
                          "displayLines": "0.32",
                          "constants": [],
                          "variables": [
                            0.32
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_DamageAdd",
                          "value": {
                            "operator": "Variables[0] (0.32) || RETURN",
                            "displayLines": "0.32",
                            "constants": [],
                            "variables": [
                              0.32
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1431959058\">Relic_328_Sub</a>[<span class=\"descriptionNumberColor\">Cosmic Life Sciences Institute</span>]"
                    }
                  ]
                }
              ]
            }
          ],
          "priorityLevel": -80
        }
      ]
    }
  ],
  "isLightcone": true,
  "isRelic": true,
  "desc": [
    "When entering combat, if the wearer's Max Energy is greater than or equal to 200, for every 1 excess point, increases the wearer's DMG dealt by 0.2%, up to a max increase of 32%."
  ],
  "params": [
    [
      200,
      0.0019999999,
      0.32
    ],
    []
  ]
}