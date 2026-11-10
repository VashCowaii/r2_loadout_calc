const configAbility = {
  "fileName": "-1954781239_FantasticStory_BaseAbility_0030",
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
      "variableName": "DV_FantasticStory_BaseAbility_0030_DamageSum",
      "scope": "ContextCaster"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "DV_FantasticStory_PlusAbility_0031",
      "scope": "ContextCaster"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "DV_FantasticStory_PlusAbility_0032",
      "scope": "ContextCaster"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "DV_FantasticStory_PlusAbility_0033",
      "scope": "ContextCaster"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "DV_FantasticStory_PlusAbility_0034",
      "scope": "ContextCaster"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "DV_FantasticStory_PlusAbility_0035",
      "scope": "ContextCaster"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "DV_FantasticStory_PlusAbility_0036",
      "scope": "ContextCaster"
    },
    {
      "name": "Define Custom Variable with Stat",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent%</span>&nbsp;",
      "variableName": "BattleEvent_BaseHP"
    },
    {
      "name": "Define Custom Variable",
      "value": {
        "operator": "Variables[0] (BattleEvent_BaseHP) || Constants[0] (90) || MUL || RETURN",
        "displayLines": "(BattleEvent_BaseHP * 90)",
        "constants": [
          90
        ],
        "variables": [
          "BattleEvent_BaseHP"
        ]
      },
      "variableName": "BattleEvent_BaseHP"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "DV_FantasticStory_BaseAbility_0030_TriggerDamageFlag",
      "scope": "ContextCaster"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "DV_FantasticStory_PlusAbility_0031_TriggerDamageFlag",
      "scope": "ContextCaster"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "DV_RangeGap_1",
      "resetValue": {
        "operator": "Variables[0] (BattleEvent_BaseHP) || Variables[1] (#ADF_1) || MUL || Constants[0] (0.33) || MUL || RETURN",
        "displayLines": "((BattleEvent_BaseHP * #ADF_1) * 0.33)",
        "constants": [
          0.33
        ],
        "variables": [
          "BattleEvent_BaseHP",
          "#ADF_1"
        ]
      },
      "scope": "ContextCaster"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "DV_RangeGap_2",
      "resetValue": {
        "operator": "Variables[0] (BattleEvent_BaseHP) || Variables[1] (#ADF_1) || MUL || Constants[0] (0.67) || MUL || RETURN",
        "displayLines": "((BattleEvent_BaseHP * #ADF_1) * 0.67)",
        "constants": [
          0.67
        ],
        "variables": [
          "BattleEvent_BaseHP",
          "#ADF_1"
        ]
      },
      "scope": "ContextCaster"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "DV_RangeGap_3",
      "resetValue": {
        "operator": "Variables[0] (BattleEvent_BaseHP) || Variables[1] (#ADF_1) || MUL || RETURN",
        "displayLines": "(BattleEvent_BaseHP * #ADF_1)",
        "constants": [],
        "variables": [
          "BattleEvent_BaseHP",
          "#ADF_1"
        ]
      },
      "scope": "ContextCaster"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1973742977\">Modifier_FantasticStory_BaseAbility_0030</a>",
      "valuePerStack": {
        "ADF_1": {
          "operator": "Variables[0] (#ADF_1) || RETURN",
          "displayLines": "#ADF_1",
          "constants": [],
          "variables": [
            "#ADF_1"
          ]
        },
        "ADF_2": {
          "operator": "Variables[0] (#ADF_2) || RETURN",
          "displayLines": "#ADF_2",
          "constants": [],
          "variables": [
            "#ADF_2"
          ]
        },
        "TempHP": {
          "operator": "Variables[0] (BattleEvent_BaseHP) || RETURN",
          "displayLines": "BattleEvent_BaseHP",
          "constants": [],
          "variables": [
            "BattleEvent_BaseHP"
          ]
        }
      }
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__357438024\">Modifier_FantasticStory_BaseAbility_0030_sub</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
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
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "DV_FantasticStory_PlusAbility_0031",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAllTypes</span>&nbsp;",
                          "value": "DV_FantasticStory_PlusAbility_0031_ADF_1"
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
          "eventTrigger": "Deal Damage End [Owner]: Any",
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
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "DV_FantasticStory_PlusAbility_0034",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "_InsertDamageFlag",
                        "compareType": "=",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "value": {
                            "operator": "Constants[0] (1) || Variables[0] (DV_FantasticStory_PlusAbility_0034_InsertAtkCount) || ADD || RETURN",
                            "displayLines": "(1 + DV_FantasticStory_PlusAbility_0034_InsertAtkCount)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "DV_FantasticStory_PlusAbility_0034_InsertAtkCount"
                            ]
                          },
                          "variableName": "DV_FantasticStory_PlusAbility_0034_InsertAtkCount"
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable with Damage Data",
                      "variableName": "_DamageSum",
                      "scope": "ContextModifier",
                      "readTarget": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "operator": "Variables[0] (_DamageSum) || Variables[1] (DV_FantasticStory_BaseAbility_0030_DamageSum) || ADD || RETURN",
                        "displayLines": "(_DamageSum + DV_FantasticStory_BaseAbility_0030_DamageSum)",
                        "constants": [],
                        "variables": [
                          "_DamageSum",
                          "DV_FantasticStory_BaseAbility_0030_DamageSum"
                        ]
                      },
                      "variableName": "DV_FantasticStory_BaseAbility_0030_DamageSum"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "value1": "DV_FantasticStory_PlusAbility_0033",
                            "compareType": "=",
                            "value2": 1
                          },
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "_InsertDamageFlag",
                            "compareType": "=",
                            "value2": 0
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Action Advance/Delay",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Player Team All}}"
                          },
                          "advanceType": "Set",
                          "multiAdd": "(0 - DV_FantasticStory_PlusAbility_0033_ADF_1)"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "value": 1,
                  "variableName": "_InsertDamageFlag"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "DV_FantasticStory_PlusAbility_0032",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Attack-Type Extension",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "typeToExtend": "Ultimate",
                  "extendTypeTo": "Follow-up"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "value": 0,
              "variableName": "_InsertDamageFlag"
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1973742977\">Modifier_FantasticStory_BaseAbility_0030</a>",
      "stackType": "ReplaceByCaster",
      "stackData": [
        "ADF_1",
        "ADF_2",
        "TempHP"
      ],
      "latentQueue": [
        "DV_FantasticStory_PlusAbility_0031",
        "DV_FantasticStory_PlusAbility_0032",
        "DV_FantasticStory_PlusAbility_0033",
        "DV_FantasticStory_PlusAbility_0034",
        "DV_FantasticStory_PlusAbility_0035",
        "DV_FantasticStory_PlusAbility_0036",
        "DV_FantasticStory_BaseAbility_0030_TriggerDamageFlag",
        "DV_FantasticStory_PlusAbility_0031_TriggerDamageFlag"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Add Ability",
              "abilityName": "FantasticStory_BaseAbility_0030_Insert_Camera"
            },
            {
              "name": "Add Ability",
              "abilityName": "FantasticStory_BaseAbility_0030_Insert"
            },
            {
              "name": "Add Ability",
              "abilityName": "FantasticStory_PlusAbility_0031_Insert"
            }
          ]
        },
        {
          "eventTrigger": "Entity Created [Anyone]",
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
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"357438024\">Modifier_FantasticStory_BaseAbility_0030_sub</a>"
                }
              ]
            },
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
                    "name": "Compare: Variable",
                    "value1": "DV_FantasticStory_BaseAbility_0030_TriggerDamageFlag",
                    "compareType": "=",
                    "value2": 1
                  }
                ]
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "ifTargetFound": [
                    {
                      "name": "Inject Ability Use",
                      "condition": {
                        "name": "Insert Ability Condition",
                        "type": "AbilityOwnerInsertUnusedCount",
                        "typeValue": 1
                      },
                      "abilityName": "FantasticStory_BaseAbility_0030_Insert",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "priorityTag": "CharacterAttackFromSelf",
                      "ownerState": "Anyone",
                      "canHitNonTargets": true,
                      "valuePerStack": {
                        "TempHP_get": {
                          "operator": "Variables[0] (TempHP) || RETURN",
                          "displayLines": "TempHP",
                          "constants": [],
                          "variables": [
                            "TempHP"
                          ]
                        },
                        "ADF_2_get": {
                          "operator": "Variables[0] (ADF_2) || RETURN",
                          "displayLines": "ADF_2",
                          "constants": [],
                          "variables": [
                            "ADF_2"
                          ]
                        }
                      },
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ]
            },
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
                    "name": "Compare: Variable",
                    "value1": "DV_FantasticStory_PlusAbility_0031_TriggerDamageFlag",
                    "compareType": "=",
                    "value2": 1
                  }
                ]
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "ifTargetFound": [
                    {
                      "name": "Inject Ability Use",
                      "condition": {
                        "name": "Insert Ability Condition",
                        "type": "AbilityOwnerInsertUnusedCount",
                        "typeValue": 1
                      },
                      "abilityName": "FantasticStory_PlusAbility_0031_Insert",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "priorityTag": "CharacterAttackFromSelf",
                      "ownerState": "Anyone",
                      "canHitNonTargets": true,
                      "valuePerStack": {
                        "TempHP_get": {
                          "operator": "Variables[0] (TempHP) || RETURN",
                          "displayLines": "TempHP",
                          "constants": [],
                          "variables": [
                            "TempHP"
                          ]
                        },
                        "ADF_2_get": {
                          "operator": "Variables[0] (ADF_2) || RETURN",
                          "displayLines": "ADF_2",
                          "constants": [],
                          "variables": [
                            "ADF_2"
                          ]
                        }
                      },
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ]
            },
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
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "DV_FantasticStory_PlusAbility_0036",
                    "compareType": "=",
                    "value2": 1
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1083847243\">Modifier_FantasticStory_BaseAbility_0030_plus6_sub</a>",
                  "valuePerStack": {
                    "_DamageSumRatio": {
                      "operator": "Variables[0] (DV_FantasticStory_PlusAbility_0036_ADF_1) || RETURN",
                      "displayLines": "DV_FantasticStory_PlusAbility_0036_ADF_1",
                      "constants": [],
                      "variables": [
                        "DV_FantasticStory_PlusAbility_0036_ADF_1"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Attack DMG End [Anyone]",
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
                  },
                  {
                    "name": "Enemies Still Alive",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "includeUnselectable": true
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "DV_FantasticStory_BaseAbility_0030_TriggerDamageFlag",
                    "compareType": "=",
                    "value2": 1
                  }
                ]
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "ifTargetFound": [
                    {
                      "name": "Inject Ability Use",
                      "condition": {
                        "name": "Insert Ability Condition",
                        "type": "AbilityOwnerInsertUnusedCount",
                        "typeValue": 1
                      },
                      "abilityName": "FantasticStory_BaseAbility_0030_Insert",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "priorityTag": "CharacterAttackFromSelf",
                      "ownerState": "Anyone",
                      "canHitNonTargets": true,
                      "valuePerStack": {
                        "TempHP_get": {
                          "operator": "Variables[0] (TempHP) || RETURN",
                          "displayLines": "TempHP",
                          "constants": [],
                          "variables": [
                            "TempHP"
                          ]
                        },
                        "ADF_2_get": {
                          "operator": "Variables[0] (ADF_2) || RETURN",
                          "displayLines": "ADF_2",
                          "constants": [],
                          "variables": [
                            "ADF_2"
                          ]
                        }
                      },
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ]
            },
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
                  },
                  {
                    "name": "Enemies Still Alive",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "includeUnselectable": true
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "DV_FantasticStory_PlusAbility_0031_TriggerDamageFlag",
                    "compareType": "=",
                    "value2": 1
                  }
                ]
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "ifTargetFound": [
                    {
                      "name": "Inject Ability Use",
                      "condition": {
                        "name": "Insert Ability Condition",
                        "type": "AbilityOwnerInsertUnusedCount",
                        "typeValue": 1
                      },
                      "abilityName": "FantasticStory_PlusAbility_0031_Insert",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "priorityTag": "CharacterAttackFromSelf",
                      "ownerState": "Anyone",
                      "canHitNonTargets": true,
                      "valuePerStack": {
                        "TempHP_get": {
                          "operator": "Variables[0] (TempHP) || RETURN",
                          "displayLines": "TempHP",
                          "constants": [],
                          "variables": [
                            "TempHP"
                          ]
                        },
                        "ADF_2_get": {
                          "operator": "Variables[0] (ADF_2) || RETURN",
                          "displayLines": "ADF_2",
                          "constants": [],
                          "variables": [
                            "ADF_2"
                          ]
                        }
                      },
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ]
            }
          ]
        },
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
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"357438024\">Modifier_FantasticStory_BaseAbility_0030_sub</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}.[[getBattleEvents]]"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"357438024\">Modifier_FantasticStory_BaseAbility_0030_sub</a>"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "DV_FantasticStory_PlusAbility_0034",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "ContextCaster"
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "DV_FantasticStory_PlusAbility_0034_InsertAtkCount",
                      "scope": "ContextCaster"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "DV_FantasticStory_PlusAbility_0035",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "ContextCaster"
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Player Team(Exclude Memosprites)v2}}"
                      },
                      "variableName": "EntityCurrentSP",
                      "scope": "TargetEntity"
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Player Team(Exclude Memosprites)v2}}"
                      },
                      "variableName": "EntityStockSP",
                      "scope": "TargetEntity"
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Player Team(Exclude Memosprites)v2}}"
                      },
                      "variableName": "EntityMaxSP",
                      "scope": "TargetEntity"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "DV_FantasticStory_PlusAbility_0036",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1083847243\">Modifier_FantasticStory_BaseAbility_0030_plus6_sub</a>",
                      "valuePerStack": {
                        "_DamageSumRatio": {
                          "operator": "Variables[0] (DV_FantasticStory_PlusAbility_0036_ADF_1) || RETURN",
                          "displayLines": "DV_FantasticStory_PlusAbility_0036_ADF_1",
                          "constants": [],
                          "variables": [
                            "DV_FantasticStory_PlusAbility_0036_ADF_1"
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
          "eventTrigger": "Batch: Enemy Arrival",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Enemies Still Alive",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Player Team All}}"
                    },
                    "includeUnselectable": true
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "DV_FantasticStory_BaseAbility_0030_TriggerDamageFlag",
                    "compareType": "=",
                    "value2": 1
                  }
                ]
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "ifTargetFound": [
                    {
                      "name": "Inject Ability Use",
                      "condition": {
                        "name": "Insert Ability Condition",
                        "type": "AbilityOwnerInsertUnusedCount",
                        "typeValue": 1
                      },
                      "abilityName": "FantasticStory_BaseAbility_0030_Insert",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "priorityTag": "CharacterAttackFromSelf",
                      "ownerState": "Anyone",
                      "canHitNonTargets": true,
                      "valuePerStack": {
                        "TempHP_get": {
                          "operator": "Variables[0] (TempHP) || RETURN",
                          "displayLines": "TempHP",
                          "constants": [],
                          "variables": [
                            "TempHP"
                          ]
                        },
                        "ADF_2_get": {
                          "operator": "Variables[0] (ADF_2) || RETURN",
                          "displayLines": "ADF_2",
                          "constants": [],
                          "variables": [
                            "ADF_2"
                          ]
                        }
                      },
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Enemies Still Alive",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Player Team All}}"
                    },
                    "includeUnselectable": true
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "DV_FantasticStory_PlusAbility_0031_TriggerDamageFlag",
                    "compareType": "=",
                    "value2": 1
                  }
                ]
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "ifTargetFound": [
                    {
                      "name": "Inject Ability Use",
                      "condition": {
                        "name": "Insert Ability Condition",
                        "type": "AbilityOwnerInsertUnusedCount",
                        "typeValue": 1
                      },
                      "abilityName": "FantasticStory_PlusAbility_0031_Insert",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "priorityTag": "CharacterAttackFromSelf",
                      "ownerState": "Anyone",
                      "canHitNonTargets": true,
                      "valuePerStack": {
                        "TempHP_get": {
                          "operator": "Variables[0] (TempHP) || RETURN",
                          "displayLines": "TempHP",
                          "constants": [],
                          "variables": [
                            "TempHP"
                          ]
                        },
                        "ADF_2_get": {
                          "operator": "Variables[0] (ADF_2) || RETURN",
                          "displayLines": "ADF_2",
                          "constants": [],
                          "variables": [
                            "ADF_2"
                          ]
                        }
                      },
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "variableValueChange": [
        {
          "name": "Variable Value Changes",
          "variableName": "DV_FantasticStory_BaseAbility_0030_DamageSum",
          "scope": "ContextOwner",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": 1,
              "maxValue": {
                "operator": "Variables[0] (DV_RangeGap_1) || RETURN",
                "displayLines": "DV_RangeGap_1",
                "constants": [],
                "variables": [
                  "DV_RangeGap_1"
                ]
              },
              "includeMaxValueInRange": true
            },
            {
              "name": "Variable Value Range Conditions",
              "minValue": {
                "operator": "Variables[0] (DV_RangeGap_1) || RETURN",
                "displayLines": "DV_RangeGap_1",
                "constants": [],
                "variables": [
                  "DV_RangeGap_1"
                ]
              },
              "maxValue": {
                "operator": "Variables[0] (DV_RangeGap_2) || RETURN",
                "displayLines": "DV_RangeGap_2",
                "constants": [],
                "variables": [
                  "DV_RangeGap_2"
                ]
              },
              "includeMaxValueInRange": true,
              "enteringRange": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "DV_FantasticStory_BaseAbility_0030_TriggerDamageFlag",
                    "compareType": "=",
                    "value2": 1
                  }
                }
              ]
            },
            {
              "name": "Variable Value Range Conditions",
              "minValue": {
                "operator": "Variables[0] (DV_RangeGap_2) || RETURN",
                "displayLines": "DV_RangeGap_2",
                "constants": [],
                "variables": [
                  "DV_RangeGap_2"
                ]
              },
              "maxValue": {
                "operator": "Variables[0] (DV_RangeGap_3) || RETURN",
                "displayLines": "DV_RangeGap_3",
                "constants": [],
                "variables": [
                  "DV_RangeGap_3"
                ]
              },
              "includeMaxValueInRange": true,
              "enteringRange": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "DV_FantasticStory_BaseAbility_0030_TriggerDamageFlag",
                    "compareType": "=",
                    "value2": 1
                  }
                }
              ]
            },
            {
              "name": "Variable Value Range Conditions",
              "minValue": {
                "operator": "Variables[0] (DV_RangeGap_3) || RETURN",
                "displayLines": "DV_RangeGap_3",
                "constants": [],
                "variables": [
                  "DV_RangeGap_3"
                ]
              },
              "maxValue": 1000000000,
              "includeMaxValueInRange": true,
              "enteringRange": [
                {
                  "name": "Define Custom Variable",
                  "value": 1,
                  "variableName": "DV_FantasticStory_BaseAbility_0030_TriggerDamageFlag"
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "ifTargetFound": [
                    {
                      "name": "Inject Ability Use",
                      "condition": {
                        "name": "Insert Ability Condition",
                        "type": "AbilityOwnerInsertUnusedCount",
                        "typeValue": 1
                      },
                      "abilityName": "FantasticStory_BaseAbility_0030_Insert",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "priorityTag": "CharacterAttackFromSelf",
                      "ownerState": "Anyone",
                      "canHitNonTargets": true,
                      "valuePerStack": {
                        "TempHP_get": {
                          "operator": "Variables[0] (TempHP) || RETURN",
                          "displayLines": "TempHP",
                          "constants": [],
                          "variables": [
                            "TempHP"
                          ]
                        },
                        "ADF_2_get": {
                          "operator": "Variables[0] (ADF_2) || RETURN",
                          "displayLines": "ADF_2",
                          "constants": [],
                          "variables": [
                            "ADF_2"
                          ]
                        }
                      },
                      "allowAbilityTriggers": false
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "DV_FantasticStory_PlusAbility_0031",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "value": 1,
                      "variableName": "DV_FantasticStory_PlusAbility_0031_TriggerDamageFlag"
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "ifTargetFound": [
                        {
                          "name": "Inject Ability Use",
                          "condition": {
                            "name": "Insert Ability Condition",
                            "type": "AbilityOwnerInsertUnusedCount",
                            "typeValue": 1
                          },
                          "abilityName": "FantasticStory_PlusAbility_0031_Insert",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "priorityTag": "CharacterAttackFromSelf",
                          "ownerState": "Anyone",
                          "canHitNonTargets": true,
                          "valuePerStack": {
                            "TempHP_get": {
                              "operator": "Variables[0] (TempHP) || RETURN",
                              "displayLines": "TempHP",
                              "constants": [],
                              "variables": [
                                "TempHP"
                              ]
                            },
                            "ADF_2_get": {
                              "operator": "Variables[0] (ADF_2) || RETURN",
                              "displayLines": "ADF_2",
                              "constants": [],
                              "variables": [
                                "ADF_2"
                              ]
                            }
                          },
                          "allowAbilityTriggers": false
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
          "name": "Variable Value Changes",
          "variableName": "DV_FantasticStory_PlusAbility_0034_InsertAtkCount",
          "scope": "ContextOwner",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": 1,
              "maxValue": 1,
              "includeMaxValueInRange": true
            },
            {
              "name": "Variable Value Range Conditions",
              "minValue": 2,
              "maxValue": 2,
              "includeMaxValueInRange": true
            },
            {
              "name": "Variable Value Range Conditions",
              "minValue": 3,
              "maxValue": 3,
              "includeMaxValueInRange": true,
              "enteringRange": [
                {
                  "name": "Define Custom Variable",
                  "value": 0,
                  "variableName": "DV_FantasticStory_PlusAbility_0034_InsertAtkCount"
                },
                {
                  "name": "Define Custom Variable",
                  "value": 1,
                  "variableName": "DV_FantasticStory_BaseAbility_0030_TriggerDamageFlag"
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "ifTargetFound": [
                    {
                      "name": "Inject Ability Use",
                      "condition": {
                        "name": "Insert Ability Condition",
                        "type": "AbilityOwnerInsertUnusedCount",
                        "typeValue": 1
                      },
                      "abilityName": "FantasticStory_BaseAbility_0030_Insert",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "priorityTag": "CharacterAttackFromSelf",
                      "ownerState": "Anyone",
                      "canHitNonTargets": true,
                      "valuePerStack": {
                        "TempHP_get": {
                          "operator": "Variables[0] (TempHP) || RETURN",
                          "displayLines": "TempHP",
                          "constants": [],
                          "variables": [
                            "TempHP"
                          ]
                        },
                        "ADF_2_get": {
                          "operator": "Variables[0] (ADF_2) || RETURN",
                          "displayLines": "ADF_2",
                          "constants": [],
                          "variables": [
                            "ADF_2"
                          ]
                        }
                      },
                      "allowAbilityTriggers": false
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