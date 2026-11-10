const entityPageType = "relic"
const compositeAbilityObject = {
  "fullCharacterName": "Cosmic Life Sciences Institute",
  "trimCharacterName": "CosmicLifeSciencesInstitute",
  "abilityList": [
    "CosmicLifeSciencesInstitute_Ability53281"
  ],
  "abilityObject": {
    "CosmicLifeSciencesInstitute_Ability53281": {
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
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "statValue": {
                    "displayLines": "_DamageAdd"
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
              "priorityLevel": -80,
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
                      "variableName": "_CasterMaxSP",
                      "readTarget": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "_CasterMaxSP",
                        "compareType": ">",
                        "value2": {
                          "displayLines": "200"
                        }
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "value": {
                            "displayLines": "((_CasterMaxSP - 200) * 0.0019999999)"
                          },
                          "variableName": "_DamageAdd"
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "_DamageAdd",
                            "compareType": ">",
                            "value2": {
                              "displayLines": "0.32"
                            }
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "value": {
                                "displayLines": "0.32"
                              },
                              "variableName": "_DamageAdd"
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
              ]
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
  },
  "fixedStats": {
    "2": {},
    "4": {}
  },
  "isLightcone": true,
  "isRelic": true,
  "noReader": false
}