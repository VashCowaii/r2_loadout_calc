const configAbility = {
  "fileName": "1687681259_FantasticStory_BaseAbility_2310_EnterFever",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [],
  "whenAdded": [
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "ContextCaster",
      "variableName": "DV_FantasticStory_BaseAbility_2310_EnterFever_P1_SP",
      "value": {
        "operator": "Variables[0] (ADF_1_Get) || RETURN",
        "displayLines": "ADF_1_Get",
        "constants": [],
        "variables": [
          "ADF_1_Get"
        ]
      }
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "ContextCaster",
      "variableName": "DV_FantasticStory_BaseAbility_2310_EnterFever_P2_DmgTakenUp",
      "value": {
        "operator": "Variables[0] (ADF_2_Get) || RETURN",
        "displayLines": "ADF_2_Get",
        "constants": [],
        "variables": [
          "ADF_2_Get"
        ]
      }
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "ContextCaster",
      "variableName": "DV_FantasticStory_BaseAbility_2310_EnterFever_P3_AddDmgUp",
      "value": {
        "operator": "Variables[0] (ADF_3_Get) || RETURN",
        "displayLines": "ADF_3_Get",
        "constants": [],
        "variables": [
          "ADF_3_Get"
        ]
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1720909249\">Modifier_FantasticStory_BaseAbility_2310_EnterFever</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1720909249\">Modifier_FantasticStory_BaseAbility_2310_EnterFever</a>",
      "stackType": "ReplaceByCaster",
      "latentQueue": [
        "DV_FantasticStory_BaseAbility_2310_EnterFever_P1_SP",
        "DV_FantasticStory_BaseAbility_2310_EnterFever_P3_AddDmgUp"
      ],
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
                    "team": "Enemy Team"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-728983354\">Modifier_FantasticStory_BaseAbility_2310_aura</a>"
                  }
                ]
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "DV_FantasticStory_PlusAbility_2313",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1377474696\">Modifier_FantasticStory_BaseAbility_2310_EnterFever_sub</a>[<span class=\"descriptionNumberColor\">Surging Grit</span>]",
                      "valuePerStack": {
                        "DV_Ratio_Get": {
                          "operator": "Variables[0] (DV_FantasticStory_BaseAbility_2310_EnterFever_P2_DmgTakenUp) || Variables[1] (DV_FantasticStory_PlusAbility_2313) || ADD || RETURN",
                          "displayLines": "(DV_FantasticStory_BaseAbility_2310_EnterFever_P2_DmgTakenUp + DV_FantasticStory_PlusAbility_2313)",
                          "constants": [],
                          "variables": [
                            "DV_FantasticStory_BaseAbility_2310_EnterFever_P2_DmgTakenUp",
                            "DV_FantasticStory_PlusAbility_2313"
                          ]
                        }
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1377474696\">Modifier_FantasticStory_BaseAbility_2310_EnterFever_sub</a>[<span class=\"descriptionNumberColor\">Surging Grit</span>]",
                      "valuePerStack": {
                        "DV_Ratio_Get": {
                          "operator": "Variables[0] (DV_FantasticStory_BaseAbility_2310_EnterFever_P2_DmgTakenUp) || RETURN",
                          "displayLines": "DV_FantasticStory_BaseAbility_2310_EnterFever_P2_DmgTakenUp",
                          "constants": [],
                          "variables": [
                            "DV_FantasticStory_BaseAbility_2310_EnterFever_P2_DmgTakenUp"
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Modifier is Added [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "<a class=\"gModGreen\" id=\"-728983354\">Modifier_FantasticStory_BaseAbility_2310_aura</a>"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "DV_FantasticStory_PlusAbility_2313",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1377474696\">Modifier_FantasticStory_BaseAbility_2310_EnterFever_sub</a>[<span class=\"descriptionNumberColor\">Surging Grit</span>]",
                      "valuePerStack": {
                        "DV_Ratio_Get": {
                          "operator": "Variables[0] (DV_FantasticStory_BaseAbility_2310_EnterFever_P2_DmgTakenUp) || Variables[1] (DV_FantasticStory_PlusAbility_2313) || ADD || RETURN",
                          "displayLines": "(DV_FantasticStory_BaseAbility_2310_EnterFever_P2_DmgTakenUp + DV_FantasticStory_PlusAbility_2313)",
                          "constants": [],
                          "variables": [
                            "DV_FantasticStory_BaseAbility_2310_EnterFever_P2_DmgTakenUp",
                            "DV_FantasticStory_PlusAbility_2313"
                          ]
                        }
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1377474696\">Modifier_FantasticStory_BaseAbility_2310_EnterFever_sub</a>[<span class=\"descriptionNumberColor\">Surging Grit</span>]",
                      "valuePerStack": {
                        "DV_Ratio_Get": {
                          "operator": "Variables[0] (DV_FantasticStory_BaseAbility_2310_EnterFever_P2_DmgTakenUp) || RETURN",
                          "displayLines": "DV_FantasticStory_BaseAbility_2310_EnterFever_P2_DmgTakenUp",
                          "constants": [],
                          "variables": [
                            "DV_FantasticStory_BaseAbility_2310_EnterFever_P2_DmgTakenUp"
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Losing Modifier [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "<a class=\"gModGreen\" id=\"-728983354\">Modifier_FantasticStory_BaseAbility_2310_aura</a>"
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All(with Unselectable)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1377474696\">Modifier_FantasticStory_BaseAbility_2310_EnterFever_sub</a>[<span class=\"descriptionNumberColor\">Surging Grit</span>]"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}