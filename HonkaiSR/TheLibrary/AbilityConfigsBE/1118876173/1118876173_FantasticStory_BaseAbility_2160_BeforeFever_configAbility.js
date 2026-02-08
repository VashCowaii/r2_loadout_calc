const configAbility = {
  "fileName": "1118876173_FantasticStory_BaseAbility_2160_BeforeFever",
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
      "variableName": "DV_FantasticStory_BaseAbility_2160_BeforeFever_P1_EnterLayer",
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
      "variableName": "DV_FantasticStory_BaseAbility_2160_BeforeFever_P2_ActionLayer",
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
      "variableName": "DV_FantasticStory_BaseAbility_2160_BeforeFever_P3_MaxLayer",
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
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "ContextCaster",
      "variableName": "DV_FantasticStory_BaseAbility_2160_BeforeFever_P4_LifeTime",
      "value": {
        "operator": "Variables[0] (ADF_4_Get) || RETURN",
        "displayLines": "ADF_4_Get",
        "constants": [],
        "variables": [
          "ADF_4_Get"
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
      "variableName": "DV_FantasticStory_BaseAbility_2160_BeforeFever_P5_DmgPercentage",
      "value": {
        "operator": "Variables[0] (ADF_5_Get) || RETURN",
        "displayLines": "ADF_5_Get",
        "constants": [],
        "variables": [
          "ADF_5_Get"
        ]
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"660002093\">Modifier_FantasticStory_BaseAbility_2160_BeforeFever</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__660002093\">Modifier_FantasticStory_BaseAbility_2160_BeforeFever</a>",
      "stackType": "ReplaceByCaster",
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
                    "name": "Target is Unselectable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-898765267\">Modifier_FantasticStory_BaseAbility_2160_Aura</a>"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_PlusAbility_2163_ADF_2",
                        "compareType": ">",
                        "value2": 0,
                        "contextScope": "TargetEntity"
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
                      "modifier": "<a class=\"gModGreen\" id=\"1010904189\">Modifier_FantasticStory_BaseAbility_2160_BeforeFever_DOT</a>[<span class=\"descriptionNumberColor\">Echo Enigma</span>]",
                      "duration": {
                        "operator": "Variables[0] (DV_FantasticStory_BaseAbility_2160_BeforeFever_P4_LifeTime) || RETURN",
                        "displayLines": "DV_FantasticStory_BaseAbility_2160_BeforeFever_P4_LifeTime",
                        "constants": [],
                        "variables": [
                          "DV_FantasticStory_BaseAbility_2160_BeforeFever_P4_LifeTime"
                        ]
                      },
                      "stackLimit": {
                        "operator": "Variables[0] (DV_FantasticStory_BaseAbility_2160_BeforeFever_P3_MaxLayer) || RETURN",
                        "displayLines": "DV_FantasticStory_BaseAbility_2160_BeforeFever_P3_MaxLayer",
                        "constants": [],
                        "variables": [
                          "DV_FantasticStory_BaseAbility_2160_BeforeFever_P3_MaxLayer"
                        ]
                      },
                      "valuePerStack": {
                        "DV_FantasticStory_BaseAbility_2160_BeforeFever_P3_MaxLayer": {
                          "operator": "Variables[0] (DV_FantasticStory_BaseAbility_2160_BeforeFever_P3_MaxLayer) || RETURN",
                          "displayLines": "DV_FantasticStory_BaseAbility_2160_BeforeFever_P3_MaxLayer",
                          "constants": [],
                          "variables": [
                            "DV_FantasticStory_BaseAbility_2160_BeforeFever_P3_MaxLayer"
                          ]
                        },
                        "Modifier_FantasticStory_BaseAbility_2160_BeforeFever_DOT_DmgPercentage": {
                          "operator": "Variables[0] (DV_FantasticStory_BaseAbility_2160_BeforeFever_P5_DmgPercentage) || RETURN",
                          "displayLines": "DV_FantasticStory_BaseAbility_2160_BeforeFever_P5_DmgPercentage",
                          "constants": [],
                          "variables": [
                            "DV_FantasticStory_BaseAbility_2160_BeforeFever_P5_DmgPercentage"
                          ]
                        }
                      },
                      "addStacksPerTrigger": {
                        "operator": "Variables[0] (DV_FantasticStory_BaseAbility_2160_BeforeFever_P1_EnterLayer) || Variables[1] (DV_FantasticStory_PlusAbility_2163_ADF_2) || ADD || RETURN",
                        "displayLines": "(DV_FantasticStory_BaseAbility_2160_BeforeFever_P1_EnterLayer + DV_FantasticStory_PlusAbility_2163_ADF_2)",
                        "constants": [],
                        "variables": [
                          "DV_FantasticStory_BaseAbility_2160_BeforeFever_P1_EnterLayer",
                          "DV_FantasticStory_PlusAbility_2163_ADF_2"
                        ]
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
                      "modifier": "<a class=\"gModGreen\" id=\"1010904189\">Modifier_FantasticStory_BaseAbility_2160_BeforeFever_DOT</a>[<span class=\"descriptionNumberColor\">Echo Enigma</span>]",
                      "duration": {
                        "operator": "Variables[0] (DV_FantasticStory_BaseAbility_2160_BeforeFever_P4_LifeTime) || RETURN",
                        "displayLines": "DV_FantasticStory_BaseAbility_2160_BeforeFever_P4_LifeTime",
                        "constants": [],
                        "variables": [
                          "DV_FantasticStory_BaseAbility_2160_BeforeFever_P4_LifeTime"
                        ]
                      },
                      "stackLimit": {
                        "operator": "Variables[0] (DV_FantasticStory_BaseAbility_2160_BeforeFever_P3_MaxLayer) || RETURN",
                        "displayLines": "DV_FantasticStory_BaseAbility_2160_BeforeFever_P3_MaxLayer",
                        "constants": [],
                        "variables": [
                          "DV_FantasticStory_BaseAbility_2160_BeforeFever_P3_MaxLayer"
                        ]
                      },
                      "valuePerStack": {
                        "DV_FantasticStory_BaseAbility_2160_BeforeFever_P3_MaxLayer": {
                          "operator": "Variables[0] (DV_FantasticStory_BaseAbility_2160_BeforeFever_P3_MaxLayer) || RETURN",
                          "displayLines": "DV_FantasticStory_BaseAbility_2160_BeforeFever_P3_MaxLayer",
                          "constants": [],
                          "variables": [
                            "DV_FantasticStory_BaseAbility_2160_BeforeFever_P3_MaxLayer"
                          ]
                        },
                        "Modifier_FantasticStory_BaseAbility_2160_BeforeFever_DOT_DmgPercentage": {
                          "operator": "Variables[0] (DV_FantasticStory_BaseAbility_2160_BeforeFever_P5_DmgPercentage) || RETURN",
                          "displayLines": "DV_FantasticStory_BaseAbility_2160_BeforeFever_P5_DmgPercentage",
                          "constants": [],
                          "variables": [
                            "DV_FantasticStory_BaseAbility_2160_BeforeFever_P5_DmgPercentage"
                          ]
                        }
                      },
                      "addStacksPerTrigger": {
                        "operator": "Variables[0] (DV_FantasticStory_BaseAbility_2160_BeforeFever_P1_EnterLayer) || RETURN",
                        "displayLines": "DV_FantasticStory_BaseAbility_2160_BeforeFever_P1_EnterLayer",
                        "constants": [],
                        "variables": [
                          "DV_FantasticStory_BaseAbility_2160_BeforeFever_P1_EnterLayer"
                        ]
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Action Completed [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of Team",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-898765267\">Modifier_FantasticStory_BaseAbility_2160_Aura</a>"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_PlusAbility_2163_ADF_2",
                        "compareType": ">",
                        "value2": 0,
                        "contextScope": "TargetEntity"
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
                      "modifier": "<a class=\"gModGreen\" id=\"1010904189\">Modifier_FantasticStory_BaseAbility_2160_BeforeFever_DOT</a>[<span class=\"descriptionNumberColor\">Echo Enigma</span>]",
                      "duration": {
                        "operator": "Variables[0] (DV_FantasticStory_BaseAbility_2160_BeforeFever_P4_LifeTime) || RETURN",
                        "displayLines": "DV_FantasticStory_BaseAbility_2160_BeforeFever_P4_LifeTime",
                        "constants": [],
                        "variables": [
                          "DV_FantasticStory_BaseAbility_2160_BeforeFever_P4_LifeTime"
                        ]
                      },
                      "stackLimit": {
                        "operator": "Variables[0] (DV_FantasticStory_BaseAbility_2160_BeforeFever_P3_MaxLayer) || RETURN",
                        "displayLines": "DV_FantasticStory_BaseAbility_2160_BeforeFever_P3_MaxLayer",
                        "constants": [],
                        "variables": [
                          "DV_FantasticStory_BaseAbility_2160_BeforeFever_P3_MaxLayer"
                        ]
                      },
                      "valuePerStack": {
                        "DV_FantasticStory_BaseAbility_2160_BeforeFever_P3_MaxLayer": {
                          "operator": "Variables[0] (DV_FantasticStory_BaseAbility_2160_BeforeFever_P3_MaxLayer) || RETURN",
                          "displayLines": "DV_FantasticStory_BaseAbility_2160_BeforeFever_P3_MaxLayer",
                          "constants": [],
                          "variables": [
                            "DV_FantasticStory_BaseAbility_2160_BeforeFever_P3_MaxLayer"
                          ]
                        },
                        "Modifier_FantasticStory_BaseAbility_2160_BeforeFever_DOT_DmgPercentage": {
                          "operator": "Variables[0] (DV_FantasticStory_BaseAbility_2160_BeforeFever_P5_DmgPercentage) || RETURN",
                          "displayLines": "DV_FantasticStory_BaseAbility_2160_BeforeFever_P5_DmgPercentage",
                          "constants": [],
                          "variables": [
                            "DV_FantasticStory_BaseAbility_2160_BeforeFever_P5_DmgPercentage"
                          ]
                        }
                      },
                      "addStacksPerTrigger": {
                        "operator": "Variables[0] (DV_FantasticStory_BaseAbility_2160_BeforeFever_P2_ActionLayer) || Variables[1] (DV_FantasticStory_PlusAbility_2163_ADF_2) || ADD || RETURN",
                        "displayLines": "(DV_FantasticStory_BaseAbility_2160_BeforeFever_P2_ActionLayer + DV_FantasticStory_PlusAbility_2163_ADF_2)",
                        "constants": [],
                        "variables": [
                          "DV_FantasticStory_BaseAbility_2160_BeforeFever_P2_ActionLayer",
                          "DV_FantasticStory_PlusAbility_2163_ADF_2"
                        ]
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
                      "modifier": "<a class=\"gModGreen\" id=\"1010904189\">Modifier_FantasticStory_BaseAbility_2160_BeforeFever_DOT</a>[<span class=\"descriptionNumberColor\">Echo Enigma</span>]",
                      "duration": {
                        "operator": "Variables[0] (DV_FantasticStory_BaseAbility_2160_BeforeFever_P4_LifeTime) || RETURN",
                        "displayLines": "DV_FantasticStory_BaseAbility_2160_BeforeFever_P4_LifeTime",
                        "constants": [],
                        "variables": [
                          "DV_FantasticStory_BaseAbility_2160_BeforeFever_P4_LifeTime"
                        ]
                      },
                      "stackLimit": {
                        "operator": "Variables[0] (DV_FantasticStory_BaseAbility_2160_BeforeFever_P3_MaxLayer) || RETURN",
                        "displayLines": "DV_FantasticStory_BaseAbility_2160_BeforeFever_P3_MaxLayer",
                        "constants": [],
                        "variables": [
                          "DV_FantasticStory_BaseAbility_2160_BeforeFever_P3_MaxLayer"
                        ]
                      },
                      "valuePerStack": {
                        "DV_FantasticStory_BaseAbility_2160_BeforeFever_P3_MaxLayer": {
                          "operator": "Variables[0] (DV_FantasticStory_BaseAbility_2160_BeforeFever_P3_MaxLayer) || RETURN",
                          "displayLines": "DV_FantasticStory_BaseAbility_2160_BeforeFever_P3_MaxLayer",
                          "constants": [],
                          "variables": [
                            "DV_FantasticStory_BaseAbility_2160_BeforeFever_P3_MaxLayer"
                          ]
                        },
                        "Modifier_FantasticStory_BaseAbility_2160_BeforeFever_DOT_DmgPercentage": {
                          "operator": "Variables[0] (DV_FantasticStory_BaseAbility_2160_BeforeFever_P5_DmgPercentage) || RETURN",
                          "displayLines": "DV_FantasticStory_BaseAbility_2160_BeforeFever_P5_DmgPercentage",
                          "constants": [],
                          "variables": [
                            "DV_FantasticStory_BaseAbility_2160_BeforeFever_P5_DmgPercentage"
                          ]
                        }
                      },
                      "addStacksPerTrigger": {
                        "operator": "Variables[0] (DV_FantasticStory_BaseAbility_2160_BeforeFever_P2_ActionLayer) || RETURN",
                        "displayLines": "DV_FantasticStory_BaseAbility_2160_BeforeFever_P2_ActionLayer",
                        "constants": [],
                        "variables": [
                          "DV_FantasticStory_BaseAbility_2160_BeforeFever_P2_ActionLayer"
                        ]
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1710887068\">Modifier_FantasticStory_BaseAbility_2160_BeforeFever_ForShow</a>[<span class=\"descriptionNumberColor\">Concordant Truce</span>]",
          "haloStatus": true
        }
      ]
    }
  ]
}