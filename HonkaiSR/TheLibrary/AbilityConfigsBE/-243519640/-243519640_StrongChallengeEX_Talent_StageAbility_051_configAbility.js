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
      "modifier": "MStrongChallengeEX_Talent_StageAbility_LE_051"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "MStrongChallengeEX_Talent_StageAbility_PLY_051",
      "execute": [
        {
          "eventTrigger": "Turn End [Anyone]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_HealedHP",
              "value": 0
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
                      "variableName": "MDF_ChangeValue",
                      "value": {
                        "operator": "Variables[0] (#ADF_1) || Variables[1] (MDF_HealedHP) || MUL || Constants[0] (1) || INVERT || MUL || RETURN",
                        "displayLines": "((#ADF_1 * MDF_HealedHP) * -1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "#ADF_1",
                          "MDF_HealedHP"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "MDF_MaxHP",
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
                          "operator": "Variables[0] (#ADF_2) || Variables[1] (MDF_MaxHP) || MUL || Variables[2] (MDF_ChangeValue) || SUB || RETURN",
                          "displayLines": "((#ADF_2 * MDF_MaxHP) - MDF_ChangeValue)",
                          "constants": [],
                          "variables": [
                            "#ADF_2",
                            "MDF_MaxHP",
                            "MDF_ChangeValue"
                          ]
                        }
                      },
                      "failed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_ChangeValue",
                          "value": {
                            "operator": "Variables[0] (#ADF_2) || Variables[1] (MDF_MaxHP) || MUL || Variables[2] (MDF_ChangeValue) || SUB || RETURN",
                            "displayLines": "((#ADF_2 * MDF_MaxHP) - MDF_ChangeValue)",
                            "constants": [],
                            "variables": [
                              "#ADF_2",
                              "MDF_MaxHP",
                              "MDF_ChangeValue"
                            ]
                          }
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
                        "operator": "Variables[0] (MDF_HealedHP) || RETURN",
                        "displayLines": "MDF_HealedHP",
                        "constants": [],
                        "variables": [
                          "MDF_HealedHP"
                        ]
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
                        "operator": "Variables[0] (MDF_HealedHP) || RETURN",
                        "displayLines": "MDF_HealedHP",
                        "constants": [],
                        "variables": [
                          "MDF_HealedHP"
                        ]
                      },
                      "max": {
                        "operator": "Variables[0] (#ADF_2) || Variables[1] (MDF_MaxHP) || MUL || RETURN",
                        "displayLines": "(#ADF_2 * MDF_MaxHP)",
                        "constants": [],
                        "variables": [
                          "#ADF_2",
                          "MDF_MaxHP"
                        ]
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
      "for": "MStrongChallengeEX_Talent_StageAbility_LE_051",
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
                  "modifier": "MStrongChallengeEX_Talent_StageAbility_PLY_051"
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}