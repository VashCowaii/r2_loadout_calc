const configAbility = {
  "fileName": "-243519640_StrongChallengeEX_Talent_StageAbility_051",
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
      "modifier": "<a class=\"gModGreen\" id=\"-401138412\">MStrongChallengeEX_Talent_StageAbility_LE_051</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1090643140\">MStrongChallengeEX_Talent_StageAbility_PLY_051</a>",
      "execute": [
        {
          "eventTrigger": "Turn [Anyone]: End",
          "execute": [
            {
              "name": "Define Custom Variable",
              "value": 0,
              "variableName": "MDF_HealedHP"
            }
          ]
        },
        {
          "eventTrigger": "HP Change [Owner]",
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
                  "name": "Define Custom Variable with Changes to Stats",
                  "variableName": "MDF_ChangeValue"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_ChangeValue",
                    "compareType": "<",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "((#ADF_1 * MDF_HealedHP) * -1)"
                      },
                      "variableName": "MDF_ChangeValue"
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "variableName": "MDF_MaxHP",
                      "readTarget": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "MDF_ChangeValue",
                        "compareType": "<",
                        "value2": {
                          "displayLines": "((#ADF_2 * MDF_MaxHP) - MDF_ChangeValue)"
                        }
                      },
                      "failed": [
                        {
                          "name": "Define Custom Variable",
                          "value": {
                            "displayLines": "((#ADF_2 * MDF_MaxHP) - MDF_ChangeValue)"
                          },
                          "variableName": "MDF_ChangeValue"
                        }
                      ]
                    },
                    {
                      "name": "Heal",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "healFlat": {
                        "displayLines": "MDF_HealedHP"
                      },
                      "formula": "Heal from Base Value"
                    },
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "MDF_HealedHP",
                      "value": {
                        "displayLines": "MDF_HealedHP"
                      },
                      "max": {
                        "displayLines": "(#ADF_2 * MDF_MaxHP)"
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
      "for": "<a class=\"gModGreen\" id=\"mod__-401138412\">MStrongChallengeEX_Talent_StageAbility_LE_051</a>",
      "execute": [
        {
          "eventTrigger": "Entity Created [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Player Team"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1090643140\">MStrongChallengeEX_Talent_StageAbility_PLY_051</a>"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}