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
      "variableName": "DV_FantasticStory_BaseAbility_2160_BeforeFever_P1_EnterLayer",
      "resetValue": {
        "displayLines": "ADF_1_Get"
      },
      "scope": "ContextCaster"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "DV_FantasticStory_BaseAbility_2160_BeforeFever_P2_ActionLayer",
      "resetValue": {
        "displayLines": "ADF_2_Get"
      },
      "scope": "ContextCaster"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "DV_FantasticStory_BaseAbility_2160_BeforeFever_P3_MaxLayer",
      "resetValue": {
        "displayLines": "ADF_3_Get"
      },
      "scope": "ContextCaster"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "DV_FantasticStory_BaseAbility_2160_BeforeFever_P4_LifeTime",
      "resetValue": {
        "displayLines": "ADF_4_Get"
      },
      "scope": "ContextCaster"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "DV_FantasticStory_BaseAbility_2160_BeforeFever_P5_DmgPercentage",
      "resetValue": {
        "displayLines": "ADF_5_Get"
      },
      "scope": "ContextCaster"
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
                        "displayLines": "DV_FantasticStory_BaseAbility_2160_BeforeFever_P4_LifeTime"
                      },
                      "stackLimit": {
                        "displayLines": "DV_FantasticStory_BaseAbility_2160_BeforeFever_P3_MaxLayer"
                      },
                      "valuePerStack": {
                        "DV_FantasticStory_BaseAbility_2160_BeforeFever_P3_MaxLayer": {
                          "displayLines": "DV_FantasticStory_BaseAbility_2160_BeforeFever_P3_MaxLayer"
                        },
                        "Modifier_FantasticStory_BaseAbility_2160_BeforeFever_DOT_DmgPercentage": {
                          "displayLines": "DV_FantasticStory_BaseAbility_2160_BeforeFever_P5_DmgPercentage"
                        }
                      },
                      "addStacksPerTrigger": {
                        "displayLines": "(DV_FantasticStory_BaseAbility_2160_BeforeFever_P1_EnterLayer + DV_FantasticStory_PlusAbility_2163_ADF_2)"
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
                        "displayLines": "DV_FantasticStory_BaseAbility_2160_BeforeFever_P4_LifeTime"
                      },
                      "stackLimit": {
                        "displayLines": "DV_FantasticStory_BaseAbility_2160_BeforeFever_P3_MaxLayer"
                      },
                      "valuePerStack": {
                        "DV_FantasticStory_BaseAbility_2160_BeforeFever_P3_MaxLayer": {
                          "displayLines": "DV_FantasticStory_BaseAbility_2160_BeforeFever_P3_MaxLayer"
                        },
                        "Modifier_FantasticStory_BaseAbility_2160_BeforeFever_DOT_DmgPercentage": {
                          "displayLines": "DV_FantasticStory_BaseAbility_2160_BeforeFever_P5_DmgPercentage"
                        }
                      },
                      "addStacksPerTrigger": {
                        "displayLines": "DV_FantasticStory_BaseAbility_2160_BeforeFever_P1_EnterLayer"
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
                        "displayLines": "DV_FantasticStory_BaseAbility_2160_BeforeFever_P4_LifeTime"
                      },
                      "stackLimit": {
                        "displayLines": "DV_FantasticStory_BaseAbility_2160_BeforeFever_P3_MaxLayer"
                      },
                      "valuePerStack": {
                        "DV_FantasticStory_BaseAbility_2160_BeforeFever_P3_MaxLayer": {
                          "displayLines": "DV_FantasticStory_BaseAbility_2160_BeforeFever_P3_MaxLayer"
                        },
                        "Modifier_FantasticStory_BaseAbility_2160_BeforeFever_DOT_DmgPercentage": {
                          "displayLines": "DV_FantasticStory_BaseAbility_2160_BeforeFever_P5_DmgPercentage"
                        }
                      },
                      "addStacksPerTrigger": {
                        "displayLines": "(DV_FantasticStory_BaseAbility_2160_BeforeFever_P2_ActionLayer + DV_FantasticStory_PlusAbility_2163_ADF_2)"
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
                        "displayLines": "DV_FantasticStory_BaseAbility_2160_BeforeFever_P4_LifeTime"
                      },
                      "stackLimit": {
                        "displayLines": "DV_FantasticStory_BaseAbility_2160_BeforeFever_P3_MaxLayer"
                      },
                      "valuePerStack": {
                        "DV_FantasticStory_BaseAbility_2160_BeforeFever_P3_MaxLayer": {
                          "displayLines": "DV_FantasticStory_BaseAbility_2160_BeforeFever_P3_MaxLayer"
                        },
                        "Modifier_FantasticStory_BaseAbility_2160_BeforeFever_DOT_DmgPercentage": {
                          "displayLines": "DV_FantasticStory_BaseAbility_2160_BeforeFever_P5_DmgPercentage"
                        }
                      },
                      "addStacksPerTrigger": {
                        "displayLines": "DV_FantasticStory_BaseAbility_2160_BeforeFever_P2_ActionLayer"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}