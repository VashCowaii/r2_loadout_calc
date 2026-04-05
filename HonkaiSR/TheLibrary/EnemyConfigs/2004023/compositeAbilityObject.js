const entityPageType = "enemy"
const compositeAbilityObject = {
  "fullCharacterName": 2004023,
  "trimCharacterName": 2004023,
  "abilityList": [
    "2004023_Monster_W2_Yanqing_PassiveAbilityInitiate_RL",
    "2004023_Monster_W2_Yanqing_AbilityP01_Insert_Part02to03",
    "2004023_Monster_W2_Yanqing_AbilityP01_Insert_Part01to02",
    "2004023_Monster_W2_Yanqing_AbilityP01_RL",
    "2004023_Monster_W2_Yanqing_Ability08_Part02_RL",
    "2004023_Monster_W2_Yanqing_Ability08_Part01_RL",
    "2004023_Monster_W2_Yanqing_Ability07_Part02_RL",
    "2004023_Monster_W2_Yanqing_Ability07_Part01_RL",
    "2004023_Monster_W2_Yanqing_Ability05_Part02_RL",
    "2004023_Monster_W2_Yanqing_Ability05_Part01_RL",
    "2004023_Monster_W2_Yanqing_Ability02_Insert_Over_RL",
    "2004023_Monster_W2_Yanqing_Ability02_Part02_RL",
    "2004023_Monster_W2_Yanqing_Ability02_Part01_RL",
    "2004023_Monster_W2_Yanqing_Ability01_Part02_RL",
    "2004023_Monster_W2_Yanqing_Ability01_Part01_RL",
    "2004023_Monster_W2_Yanqing_IF_Ability02_Insert_Change01",
    "2004023_Monster_W2_Yanqing_IF_AbilityP01_Insert_Part01to02",
    "2004023_Monster_W2_Yanqing_IF_PartChange",
    "2004023_Monster_W2_Yanqing_IF_Ability08_Part02",
    "2004023_Monster_W2_Yanqing_IF_Ability08_Part01",
    "2004023_Monster_W2_Yanqing_IF_Ability06_Part02",
    "2004023_Monster_W2_Yanqing_IF_Ability06_Part01",
    "2004023_Monster_W2_Yanqing_IF_Ability02_TeamFormation",
    "2004023_Monster_W2_Yanqing_IF_Ability02_RevealedDie",
    "2004023_Monster_W2_Yanqing_IF_Ability02_Insert_Over",
    "2004023_Monster_W2_Yanqing_IF_Ability02_Part02",
    "2004023_Monster_W2_Yanqing_IF_Ability02_Part01",
    "2004023_Monster_W2_Yanqing_IF_Ability01_Effect",
    "2004023_Monster_W2_Yanqing_IF_Ability01_Perform",
    "2004023_Monster_W2_Yanqing_IF_Ability01_Logic",
    "2004023_Monster_W2_Yanqing_IF_Ability01_AssistInit",
    "2004023_Monster_W2_Yanqing_01_IF_AssistAbility01_Effect",
    "2004023_Monster_W2_Yanqing_01_IF_AssistAbility01_Perform",
    "2004023_Monster_W2_Yanqing_01_IF_AssistAbility01_Logic",
    "2004023_Monster_W2_Yanqing_IF_PassiveAbilityInitiate",
    "2004023_Monster_W2_Yanqing_IF_PassiveAbilityInitiate_MaxPhase2",
    "2004023_Monster_W2_Yanqing_AbilityP01",
    "2004023_Monster_W2_Yanqing_PassiveAbilityMainBattle",
    "2004023_Monster_W2_Yanqing_PassiveAbilityInitiate",
    "2004023_Monster_W2_Yanqing_Ability06_Part02",
    "2004023_Monster_W2_Yanqing_Ability06_Part01",
    "2004023_Monster_W2_Yanqing_Ability05_Part02",
    "2004023_Monster_W2_Yanqing_Ability05_Part01",
    "2004023_Monster_W2_Yanqing_Ability04_Part02",
    "2004023_Monster_W2_Yanqing_Ability04_Part01",
    "2004023_Monster_W2_Yanqing_Ability03_Part02",
    "2004023_Monster_W2_Yanqing_Ability03_Part01",
    "2004023_Monster_W2_Yanqing_Ability02_TeamFormation",
    "2004023_Monster_W2_Yanqing_Ability02_RevealedDie",
    "2004023_Monster_W2_Yanqing_Ability02_Insert_Over",
    "2004023_Monster_W2_Yanqing_Ability02_Part02",
    "2004023_Monster_W2_Yanqing_Ability02_Part01",
    "2004023_Monster_W2_Yanqing_Ability01_Part02",
    "2004023_Monster_W2_Yanqing_Ability01_Part01",
    "2004023_Monster_W2_Yanqing_PassiveAbility_BGM",
    "2004023_Modifiers"
  ],
  "abilityObject": {
    "2004023_Monster_W2_Yanqing_PassiveAbilityInitiate_RL": {
      "fileName": "2004023_Monster_W2_Yanqing_PassiveAbilityInitiate_RL",
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
          "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"882585926\">Enemy_W2_Yanqing_RemoveOneMore_RL</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1166907060\">Enemy_Standard_MuteHitFly</a>"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "W2_Yanqing_00_AICounter",
          "value": 1
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "W2_Yanqing_00_AIPhase",
          "value": 1
        },
        {
          "name": "Set Enemy Phase"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "W2_Yanqing_00_WeakPointState"
        },
        {
          "name": "Boss Bar Display",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "display": true
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "W2_Yanqing_00_MaxPhaseNum",
          "value": 3
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-355399980\">Monster_W2_Yanqing_RL_LowHP</a>",
          "valuePerStack": {
            "MDF_LowHPRatio": {
              "operator": "Variables[0] (W2_Yanqing_00_WeakPointState) || RETURN",
              "displayLines": "W2_Yanqing_00_WeakPointState",
              "constants": [],
              "variables": [
                "W2_Yanqing_00_WeakPointState"
              ]
            }
          }
        }
      ],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1051510305\">W2_YanQing_BattleScore1</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1034732686\">W2_YanQing_BattleScore2</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1017955067\">W2_YanQing_BattleScore3</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1135398400\">W2_YanQing_BattleScore4</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1118620781\">W2_YanQing_BattleScore5</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1101843162\">W2_YanQing_BattleScore6</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1085065543\">W2_YanQing_BattleScore7</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-63015955\">Enemy_W2_Yanqing_StandBySwordEffect</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1466013786\">Enemy_W2_Yanqing_StandBySwordEffect_Controller</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"684006930\">Enemy_W2_Yanqing_StandByEffect</a>"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__882585926\">Enemy_W2_Yanqing_RemoveOneMore_RL</a>",
          "execute": [
            {
              "eventTrigger": "Action End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "HP_Bars_Remaining",
                            "compareType": "=",
                            "value2": 1
                          },
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "W2_Yanqing_00_AICounter",
                            "compareType": "=",
                            "value2": 7,
                            "contextScope": "TargetEntity"
                          }
                        ]
                      },
                      {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "HP_Bars_Remaining",
                            "compareType": "=",
                            "value2": 2
                          },
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "W2_Yanqing_00_AICounter",
                            "compareType": "=",
                            "value2": 9,
                            "contextScope": "TargetEntity"
                          }
                        ]
                      },
                      {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "HP_Bars_Remaining",
                            "compareType": "=",
                            "value2": 3
                          },
                          {
                            "name": "OR",
                            "conditionList": [
                              {
                                "name": "Compare: Variable",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "value1": "W2_Yanqing_00_AICounter",
                                "compareType": "=",
                                "value2": 5,
                                "contextScope": "TargetEntity"
                              },
                              {
                                "name": "Compare: Variable",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "value1": "W2_Yanqing_00_AICounter",
                                "compareType": "=",
                                "value2": 10,
                                "contextScope": "TargetEntity"
                              },
                              {
                                "name": "Compare: Variable",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "value1": "W2_Yanqing_00_AICounter",
                                "compareType": "=",
                                "value2": 13,
                                "contextScope": "TargetEntity"
                              },
                              {
                                "name": "Compare: Variable",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "value1": "W2_Yanqing_00_AICounter",
                                "compareType": "=",
                                "value2": 18,
                                "contextScope": "TargetEntity"
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                      },
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "AIFlag",
                  "value": 1
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "W2_Yanqing_00_AICounter",
                            "compareType": "=",
                            "value2": 2,
                            "contextScope": "TargetEntity"
                          },
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "W2_Yanqing_00_AICounter",
                            "compareType": "=",
                            "value2": 4,
                            "contextScope": "TargetEntity"
                          },
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "W2_Yanqing_00_AICounter",
                            "compareType": "=",
                            "value2": 6,
                            "contextScope": "TargetEntity"
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable with Added Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "W2_Yanqing_00_AICounter",
                          "context": "TargetEntity",
                          "value": -1,
                          "max": 20
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 2
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "W2_Yanqing_00_AICounter",
                            "compareType": "=",
                            "value2": 2,
                            "contextScope": "TargetEntity"
                          },
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "W2_Yanqing_00_AICounter",
                            "compareType": "=",
                            "value2": 4,
                            "contextScope": "TargetEntity"
                          },
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "W2_Yanqing_00_AICounter",
                            "compareType": "=",
                            "value2": 6,
                            "contextScope": "TargetEntity"
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable with Added Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "W2_Yanqing_00_AICounter",
                          "context": "TargetEntity",
                          "value": -1,
                          "max": 20
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "W2_Yanqing_00_AICounter",
                        "compareType": "=",
                        "value2": 8,
                        "contextScope": "TargetEntity"
                      },
                      "passed": [
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "W2_Yanqing_00_AICounter",
                          "value": 20
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 3
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "W2_Yanqing_00_AICounter",
                            "compareType": "=",
                            "value2": 2,
                            "contextScope": "TargetEntity"
                          },
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "W2_Yanqing_00_AICounter",
                            "compareType": "=",
                            "value2": 4,
                            "contextScope": "TargetEntity"
                          },
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "W2_Yanqing_00_AICounter",
                            "compareType": "=",
                            "value2": 7,
                            "contextScope": "TargetEntity"
                          },
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "W2_Yanqing_00_AICounter",
                            "compareType": "=",
                            "value2": 9,
                            "contextScope": "TargetEntity"
                          },
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "W2_Yanqing_00_AICounter",
                            "compareType": "=",
                            "value2": 15,
                            "contextScope": "TargetEntity"
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable with Added Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "W2_Yanqing_00_AICounter",
                          "context": "TargetEntity",
                          "value": -1,
                          "max": 20
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "W2_Yanqing_00_AICounter",
                            "compareType": "=",
                            "value2": 12,
                            "contextScope": "TargetEntity"
                          },
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "W2_Yanqing_00_AICounter",
                            "compareType": "=",
                            "value2": 17,
                            "contextScope": "TargetEntity"
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "W2_Yanqing_00_AICounter",
                          "value": 20
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 3
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "W2_Yanqing_00_AICounter",
                            "compareType": "=",
                            "value2": 5,
                            "contextScope": "TargetEntity"
                          },
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "W2_Yanqing_00_AICounter",
                            "compareType": "=",
                            "value2": 10,
                            "contextScope": "TargetEntity"
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                          },
                          "failed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                            }
                          ]
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                      },
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                        }
                      ]
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
    },
    "2004023_Monster_W2_Yanqing_AbilityP01_Insert_Part02to03": {
      "fileName": "2004023_Monster_W2_Yanqing_AbilityP01_Insert_Part02to03",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Dispel Debuffs",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "silent": true
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1389810309\">Enemy_W2_Yanqing_Ability02_UnknownWeakPoint_Core_RL</a>[<span class=\"descriptionNumberColor\">Sword Formation</span>]"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Minions}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": ">=",
            "value2": 1
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Minions}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": ">=",
            "value2": 1
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Minions}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": ">=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1328693800\">Enemy_W2_Yanqing_Ability02_DuringSkill</a>"
            },
            {
              "name": "Mark Entity For Immediate Death",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              }
            },
            {
              "name": "Force Entity Death",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              }
            },
            {
              "name": "Remove from Team Target Grouping",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "stayInTeam": false
            }
          ]
        },
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "multiBase": 0
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"262387731\">Enemy_W2_Yanqing_AbilityP01_Part03SpeedUp</a>",
          "valuePerStack": {
            "MDF_SpeedDelta": {
              "operator": "Variables[0] (UnusedUnderThisBase_299) || RETURN",
              "displayLines": "UnusedUnderThisBase_299",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_299"
              ]
            }
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
          },
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-290755256\">Enemy_W2_Yanqing_Ability05_Charge_RL</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-356149908\">Enemy_W2_Yanqing_Ability05_Charge_CharacterChangePhase</a>"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"542143301\">Monster_ChangePhase</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-63015955\">Enemy_W2_Yanqing_StandBySwordEffect</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"684006930\">Enemy_W2_Yanqing_StandByEffect</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1198782929\">Enemy_W2_Yanqing_StandByEffect_Part03</a>"
        },
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "PhaseNormal"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1404590263\">Standard_Endurance</a>"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "W2_Yanqing_00_SkillP01_InsertFlag"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "W2_Yanqing_00_Skill02_InsertFlag"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "W2_Yanqing_00_AICounter",
          "value": 1
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2018294690\">Enemy_W2_Yanqing_AbilityP01_ChangePhaseController</a>"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "2004023_Monster_W2_Yanqing_AbilityP01_Insert_Part01to02": {
      "fileName": "2004023_Monster_W2_Yanqing_AbilityP01_Insert_Part01to02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Dispel Debuffs",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "silent": true
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1389810309\">Enemy_W2_Yanqing_Ability02_UnknownWeakPoint_Core_RL</a>[<span class=\"descriptionNumberColor\">Sword Formation</span>]"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Minions}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": ">=",
            "value2": 1
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Minions}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": ">=",
            "value2": 1
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Minions}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": ">=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1328693800\">Enemy_W2_Yanqing_Ability02_DuringSkill</a>"
            },
            {
              "name": "Mark Entity For Immediate Death",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              }
            },
            {
              "name": "Force Entity Death",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              }
            },
            {
              "name": "Remove from Team Target Grouping",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "stayInTeam": false
            }
          ]
        },
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "multiBase": 0
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
          },
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-290755256\">Enemy_W2_Yanqing_Ability05_Charge_RL</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-356149908\">Enemy_W2_Yanqing_Ability05_Charge_CharacterChangePhase</a>"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"542143301\">Monster_ChangePhase</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-63015955\">Enemy_W2_Yanqing_StandBySwordEffect</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"684006930\">Enemy_W2_Yanqing_StandByEffect</a>"
        },
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "PhaseNormal"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1404590263\">Standard_Endurance</a>"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "W2_Yanqing_00_SkillP01_InsertFlag"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "W2_Yanqing_00_Skill02_InsertFlag"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "W2_Yanqing_00_AICounter",
          "value": 1
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Check Boolean Value",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "value": "BattleScore_Yanqing"
          },
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"2018294690\">Enemy_W2_Yanqing_AbilityP01_ChangePhaseController</a>"
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "2004023_Monster_W2_Yanqing_AbilityP01_RL": {
      "fileName": "2004023_Monster_W2_Yanqing_AbilityP01_RL",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "W2_Yanqing_00_SkillP01_InsertFlag"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-794932920\">Enemy_W2_Yanqing_AbilityP01_EnterBattleToast</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2018294690\">Enemy_W2_Yanqing_AbilityP01_ChangePhaseController</a>"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "2004023_Monster_W2_Yanqing_Ability08_Part02_RL": {
      "fileName": "2004023_Monster_W2_Yanqing_Ability08_Part02_RL",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{All Team Members(Exclude Self)}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": ">=",
            "value2": 1
          }
        },
        "Ability Start",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1389810309\">Enemy_W2_Yanqing_Ability02_UnknownWeakPoint_Core_RL</a>[<span class=\"descriptionNumberColor\">Sword Formation</span>]"
        },
        {
          "name": "Define Custom Variable with Team Count",
          "target": {
            "name": "Target Name",
            "target": "{{All Team Members}}"
          },
          "variableName": "W2_Yanqing_00_Skill07_AllTeamMemberNumber",
          "livingTargets": true
        },
        {
          "name": "Define Custom Variable with Team Count",
          "target": {
            "name": "Target Name",
            "target": "{{All Team Members}}"
          },
          "variableName": "ExtraDamageTimes",
          "livingTargets": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Add Target by Unique Identifier",
              "identifier": "W2_Yanqing_00_Skill02_SummonMinion_Pos_1"
            },
            "value1": "TeamCharacterCount",
            "compareType": ">=",
            "value2": 1
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Add Target by Unique Identifier",
              "identifier": "W2_Yanqing_00_Skill02_SummonMinion_Pos_2"
            },
            "value1": "TeamCharacterCount",
            "compareType": ">=",
            "value2": 1
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Add Target by Unique Identifier",
              "identifier": "W2_Yanqing_00_Skill02_SummonMinion_Pos_4"
            },
            "value1": "TeamCharacterCount",
            "compareType": ">=",
            "value2": 1
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Add Target by Unique Identifier",
              "identifier": "W2_Yanqing_00_Skill02_SummonMinion_Pos_5"
            },
            "value1": "TeamCharacterCount",
            "compareType": ">=",
            "value2": 1
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Minions}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": ">=",
            "value2": 1
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Minions}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": ">=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"153779397\">Enemy_W2_Yanqing_01_StandByEffect</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-770732625\">Enemy_W2_Yanqing_01_SwordPowerUp_StandByEffect</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Minions}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": ">=",
            "value2": 1
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Minions}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": ">=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1328693800\">Enemy_W2_Yanqing_Ability02_DuringSkill</a>"
            },
            {
              "name": "Mark Entity For Immediate Death",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              }
            },
            {
              "name": "Force Entity Death",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              }
            },
            {
              "name": "Remove from Team Target Grouping",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "stayInTeam": false
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-63015955\">Enemy_W2_Yanqing_StandBySwordEffect</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "W2_Yanqing_00_Skill07_AllTeamMemberNumber",
            "compareType": ">",
            "value2": 0
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "W2_Yanqing_00_Skill07_AllTeamMemberNumber",
              "value": {
                "operator": "Variables[0] (W2_Yanqing_00_Skill07_AllTeamMemberNumber) || Constants[0] (1) || SUB || RETURN",
                "displayLines": "(W2_Yanqing_00_Skill07_AllTeamMemberNumber - 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "W2_Yanqing_00_Skill07_AllTeamMemberNumber"
                ]
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Ice",
                "Damage": {
                  "operator": "Constants[0] (0.4) || Constants[1] (0.15) || Variables[0] (ExtraDamageTimes) || Constants[2] (1) || SUB || MUL || ADD || Variables[1] ({[Skill08[0]]}) || MUL || RETURN",
                  "displayLines": "((0.4 + (0.15 * (ExtraDamageTimes - 1))) * {[Skill08[0]]})",
                  "constants": [
                    0.4,
                    0.15,
                    1
                  ],
                  "variables": [
                    "ExtraDamageTimes",
                    "{[Skill08[0]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "EnergyGainPercent": "40%"
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "W2_Yanqing_00_Skill07_AllTeamMemberNumber",
            "compareType": ">",
            "value2": 0
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "W2_Yanqing_00_Skill07_AllTeamMemberNumber",
              "value": {
                "operator": "Variables[0] (W2_Yanqing_00_Skill07_AllTeamMemberNumber) || Constants[0] (1) || SUB || RETURN",
                "displayLines": "(W2_Yanqing_00_Skill07_AllTeamMemberNumber - 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "W2_Yanqing_00_Skill07_AllTeamMemberNumber"
                ]
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Ice",
                "Damage": {
                  "operator": "Constants[0] (0.7) || Variables[0] ({[Skill08[0]]}) || MUL || RETURN",
                  "displayLines": "(0.7 * {[Skill08[0]]})",
                  "constants": [
                    0.7
                  ],
                  "variables": [
                    "{[Skill08[0]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "W2_Yanqing_00_Skill07_AllTeamMemberNumber",
            "compareType": ">",
            "value2": 0
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "W2_Yanqing_00_Skill07_AllTeamMemberNumber",
              "value": {
                "operator": "Variables[0] (W2_Yanqing_00_Skill07_AllTeamMemberNumber) || Constants[0] (1) || SUB || RETURN",
                "displayLines": "(W2_Yanqing_00_Skill07_AllTeamMemberNumber - 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "W2_Yanqing_00_Skill07_AllTeamMemberNumber"
                ]
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Ice",
                "Damage": {
                  "operator": "Constants[0] (0.7) || Variables[0] ({[Skill08[0]]}) || MUL || RETURN",
                  "displayLines": "(0.7 * {[Skill08[0]]})",
                  "constants": [
                    0.7
                  ],
                  "variables": [
                    "{[Skill08[0]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "W2_Yanqing_00_Skill07_AllTeamMemberNumber",
            "compareType": ">",
            "value2": 0
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "W2_Yanqing_00_Skill07_AllTeamMemberNumber",
              "value": {
                "operator": "Variables[0] (W2_Yanqing_00_Skill07_AllTeamMemberNumber) || Constants[0] (1) || SUB || RETURN",
                "displayLines": "(W2_Yanqing_00_Skill07_AllTeamMemberNumber - 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "W2_Yanqing_00_Skill07_AllTeamMemberNumber"
                ]
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Ice",
                "Damage": {
                  "operator": "Constants[0] (0.7) || Variables[0] ({[Skill08[0]]}) || MUL || RETURN",
                  "displayLines": "(0.7 * {[Skill08[0]]})",
                  "constants": [
                    0.7
                  ],
                  "variables": [
                    "{[Skill08[0]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "W2_Yanqing_00_Skill07_AllTeamMemberNumber",
            "compareType": ">",
            "value2": 0
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "W2_Yanqing_00_Skill07_AllTeamMemberNumber",
              "value": {
                "operator": "Variables[0] (W2_Yanqing_00_Skill07_AllTeamMemberNumber) || Constants[0] (1) || SUB || RETURN",
                "displayLines": "(W2_Yanqing_00_Skill07_AllTeamMemberNumber - 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "W2_Yanqing_00_Skill07_AllTeamMemberNumber"
                ]
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Ice",
                "Damage": {
                  "operator": "Constants[0] (0.7) || Variables[0] ({[Skill08[0]]}) || MUL || RETURN",
                  "displayLines": "(0.7 * {[Skill08[0]]})",
                  "constants": [
                    0.7
                  ],
                  "variables": [
                    "{[Skill08[0]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null
              }
            }
          ]
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Constants[0] (0.6) || Constants[1] (0.15) || Variables[0] (ExtraDamageTimes) || Constants[2] (1) || SUB || MUL || ADD || Variables[1] ({[Skill08[0]]}) || MUL || RETURN",
              "displayLines": "((0.6 + (0.15 * (ExtraDamageTimes - 1))) * {[Skill08[0]]})",
              "constants": [
                0.6,
                0.15,
                1
              ],
              "variables": [
                "ExtraDamageTimes",
                "{[Skill08[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "60%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1560182165\">Enemy_W2_Yanqing_Ability02_Mark</a>[<span class=\"descriptionNumberColor\">Lock On</span>]"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1666789092\">Enemy_W2_Yanqing_Ability02_MarkingCountDown_1</a>[<span class=\"descriptionNumberColor\">Ready for Battle</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-63015955\">Enemy_W2_Yanqing_StandBySwordEffect</a>"
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "2004023_Monster_W2_Yanqing_Ability08_Part01_RL": {
      "fileName": "2004023_Monster_W2_Yanqing_Ability08_Part01_RL",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W2_Yanqing_Ability08_Part02_RL",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "2004023_Monster_W2_Yanqing_Ability07_Part02_RL": {
      "fileName": "2004023_Monster_W2_Yanqing_Ability07_Part02_RL",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1560182165\">Enemy_W2_Yanqing_Ability02_Mark</a>[<span class=\"descriptionNumberColor\">Lock On</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1616456235\">Enemy_W2_Yanqing_Ability02_MarkingCountDown_2</a>[<span class=\"descriptionNumberColor\">Ready for Battle</span>]"
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "2004023_Monster_W2_Yanqing_Ability07_Part01_RL": {
      "fileName": "2004023_Monster_W2_Yanqing_Ability07_Part01_RL",
      "childAbilityList": [
        "2004023_Monster_W2_Yanqing_Ability07_Part01_RL",
        "2004023_Monster_W2_Yanqing_Ability07_Part02_RL",
        "2004023_Monster_W2_Yanqing_Ability07_Camera"
      ],
      "skillTrigger": "Skill07",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W2_Yanqing_Ability07_Part02_RL",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target"
      },
      "references": []
    },
    "2004023_Monster_W2_Yanqing_Ability05_Part02_RL": {
      "fileName": "2004023_Monster_W2_Yanqing_Ability05_Part02_RL",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-290755256\">Enemy_W2_Yanqing_Ability05_Charge_RL</a>"
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "2004023_Monster_W2_Yanqing_Ability05_Part01_RL": {
      "fileName": "2004023_Monster_W2_Yanqing_Ability05_Part01_RL",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W2_Yanqing_Ability05_Part02_RL",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "2004023_Monster_W2_Yanqing_Ability02_Insert_Over_RL": {
      "fileName": "2004023_Monster_W2_Yanqing_Ability02_Insert_Over_RL",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1389810309\">Enemy_W2_Yanqing_Ability02_UnknownWeakPoint_Core_RL</a>[<span class=\"descriptionNumberColor\">Sword Formation</span>]"
        },
        {
          "name": "Consume",
          "consumeFrom": "MaxHP",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "consumePercent": {
            "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
            "displayLines": "{[Skill02[1]]}",
            "constants": [],
            "variables": [
              "{[Skill02[1]]}"
            ]
          },
          "consumeFloor": 1
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-204617197\">Enemy_W2_Yanqing_Ability02_UnknownWeakPoint_Toast_Controller</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Minions}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": ">=",
            "value2": 1
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Minions}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": ">=",
            "value2": 1
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Minions}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": ">=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Mark Entity For Immediate Death",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              }
            },
            {
              "name": "Force Entity Death",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              }
            },
            {
              "name": "Remove from Team Target Grouping",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "stayInTeam": false
            }
          ]
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "W2_Yanqing_00_Skill02_InsertFlag"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "2004023_Monster_W2_Yanqing_Ability02_Part02_RL": {
      "fileName": "2004023_Monster_W2_Yanqing_Ability02_Part02_RL",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1666789092\">Enemy_W2_Yanqing_Ability02_MarkingCountDown_1</a>[<span class=\"descriptionNumberColor\">Ready for Battle</span>]"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1616456235\">Enemy_W2_Yanqing_Ability02_MarkingCountDown_2</a>[<span class=\"descriptionNumberColor\">Ready for Battle</span>]"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Minions}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": ">=",
            "value2": 1
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Minions}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": ">=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1328693800\">Enemy_W2_Yanqing_Ability02_DuringSkill</a>"
            },
            {
              "name": "Mark Entity For Immediate Death",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              }
            },
            {
              "name": "Force Entity Death",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              }
            },
            {
              "name": "Remove from Team Target Grouping",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "stayInTeam": false
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1560182165\">Enemy_W2_Yanqing_Ability02_Mark</a>[<span class=\"descriptionNumberColor\">Lock On</span>]"
            }
          ]
        },
        {
          "name": "WAIT FOR",
          "condition": {
            "name": "Death Animation Completed",
            "team": "Enemy Team",
            "type": "Team Characters"
          }
        },
        {
          "name": "Create Enemies",
          "refreshPositions": false,
          "enemyList": [
            {
              "name": "Create Enemy from Custom",
              "value": "W2_Yanqing_00_Skill02_SummonID01",
              "summonLocation": "BeforeCaster"
            },
            {
              "name": "Create Enemy from Custom",
              "value": "W2_Yanqing_00_Skill02_SummonID01",
              "summonLocation": "AfterCaster"
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Team Members}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Is Part Of Team Location",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "team": "Enemy Team"
          },
          "ifTargetFound": [
            {
              "name": "Assign Unique Name",
              "uniqueName": "W2_Yanqing_00_Skill02_SummonMinion_Pos_2",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Team Members}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Is Part Of Team Location",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "team": "Enemy Team",
            "location": "Max"
          },
          "ifTargetFound": [
            {
              "name": "Assign Unique Name",
              "uniqueName": "W2_Yanqing_00_Skill02_SummonMinion_Pos_4",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              }
            }
          ]
        },
        {
          "name": "Create Enemies",
          "enemyList": [
            {
              "name": "Create Enemy from Custom",
              "value": "W2_Yanqing_00_Skill02_SummonID02",
              "summonLocation": "First"
            },
            {
              "name": "Create Enemy from Custom",
              "value": "W2_Yanqing_00_Skill02_SummonID02",
              "summonLocation": "Last"
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Team Members}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Is Part Of Team Location",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "team": "Enemy Team"
          },
          "ifTargetFound": [
            {
              "name": "Assign Unique Name",
              "uniqueName": "W2_Yanqing_00_Skill02_SummonMinion_Pos_1",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Team Members}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Is Part Of Team Location",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "team": "Enemy Team",
            "location": "Max"
          },
          "ifTargetFound": [
            {
              "name": "Assign Unique Name",
              "uniqueName": "W2_Yanqing_00_Skill02_SummonMinion_Pos_5",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              }
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1389810309\">Enemy_W2_Yanqing_Ability02_UnknownWeakPoint_Core_RL</a>[<span class=\"descriptionNumberColor\">Sword Formation</span>]",
          "valuePerStack": {
            "MDF_SpeedDelta": {
              "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
              "displayLines": "{[Skill02[0]]}",
              "constants": [],
              "variables": [
                "{[Skill02[0]]}"
              ]
            }
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Random Chance",
            "chance": 0.33
          },
          "passed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "searchRandom": true,
              "maxTargets": 2,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"2095309040\">Enemy_W2_Yanqing_Ability02_UnknownWeakPoint_Unrevealed</a>",
                "invertCondition": true
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2051112248\">Enemy_W2_Yanqing_Ability02_UnknownWeakPoint_01</a>[<span class=\"descriptionNumberColor\">Formation Core</span>]"
                }
              ]
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"2095309040\">Enemy_W2_Yanqing_Ability02_UnknownWeakPoint_Unrevealed</a>",
                "invertCondition": true
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2101445105\">Enemy_W2_Yanqing_Ability02_UnknownWeakPoint_02</a>[<span class=\"descriptionNumberColor\">Formation Core</span>]"
                }
              ]
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"2095309040\">Enemy_W2_Yanqing_Ability02_UnknownWeakPoint_Unrevealed</a>",
                "invertCondition": true
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2084667486\">Enemy_W2_Yanqing_Ability02_UnknownWeakPoint_03</a>[<span class=\"descriptionNumberColor\">Formation Core</span>]"
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Random Chance",
                "chance": 0.5
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster's Minions}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 2,
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"2095309040\">Enemy_W2_Yanqing_Ability02_UnknownWeakPoint_Unrevealed</a>",
                    "invertCondition": true
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"2101445105\">Enemy_W2_Yanqing_Ability02_UnknownWeakPoint_02</a>[<span class=\"descriptionNumberColor\">Formation Core</span>]"
                    }
                  ]
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster's Minions}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"2095309040\">Enemy_W2_Yanqing_Ability02_UnknownWeakPoint_Unrevealed</a>",
                    "invertCondition": true
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"2084667486\">Enemy_W2_Yanqing_Ability02_UnknownWeakPoint_03</a>[<span class=\"descriptionNumberColor\">Formation Core</span>]"
                    }
                  ]
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster's Minions}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"2095309040\">Enemy_W2_Yanqing_Ability02_UnknownWeakPoint_Unrevealed</a>",
                    "invertCondition": true
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"2051112248\">Enemy_W2_Yanqing_Ability02_UnknownWeakPoint_01</a>[<span class=\"descriptionNumberColor\">Formation Core</span>]"
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster's Minions}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 2,
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"2095309040\">Enemy_W2_Yanqing_Ability02_UnknownWeakPoint_Unrevealed</a>",
                    "invertCondition": true
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"2084667486\">Enemy_W2_Yanqing_Ability02_UnknownWeakPoint_03</a>[<span class=\"descriptionNumberColor\">Formation Core</span>]"
                    }
                  ]
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster's Minions}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"2095309040\">Enemy_W2_Yanqing_Ability02_UnknownWeakPoint_Unrevealed</a>",
                    "invertCondition": true
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"2051112248\">Enemy_W2_Yanqing_Ability02_UnknownWeakPoint_01</a>[<span class=\"descriptionNumberColor\">Formation Core</span>]"
                    }
                  ]
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster's Minions}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"2095309040\">Enemy_W2_Yanqing_Ability02_UnknownWeakPoint_Unrevealed</a>",
                    "invertCondition": true
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"2101445105\">Enemy_W2_Yanqing_Ability02_UnknownWeakPoint_02</a>[<span class=\"descriptionNumberColor\">Formation Core</span>]"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "W2_Yanqing_00_Skill02_AccumulateRevealed",
          "value": 0
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-204617197\">Enemy_W2_Yanqing_Ability02_UnknownWeakPoint_Toast_Controller</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1501512671\">Enemy_W2_Yanqing_Ability02_WindToast</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"504784023\">Enemy_W2_Yanqing_Ability02_ThunderToast</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1106896946\">Enemy_W2_Yanqing_Ability02_ImaginaryToast</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"805504301\">Enemy_W2_Yanqing_Ability02_AdditiveToast</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1075172229\">HeiShengBei_PreAddBEModifier</a>"
          },
          "passed": [
            {
              "name": "Action Advance/Delay",
              "advanceType": "Set",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "set": 0
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 3
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "FinalPhase",
                "compareType": "=",
                "value2": 1,
                "contextScope": "TargetEntity"
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster's Minions}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-2068860507\">Enemy_W2_Yanqing_SwordPowerUp</a>[<span class=\"descriptionNumberColor\">Ordeal</span>]",
                        "invertCondition": true
                      },
                      {
                        "name": "Character ID",
                        "ID": "W2_Yanqing_00_Skill02_SummonID01",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": null
                      }
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "Action Advance/Delay",
                      "advanceType": "Set",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "multiBase": 0
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-2068860507\">Enemy_W2_Yanqing_SwordPowerUp</a>[<span class=\"descriptionNumberColor\">Ordeal</span>]"
                    }
                  ]
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster's Minions}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-2068860507\">Enemy_W2_Yanqing_SwordPowerUp</a>[<span class=\"descriptionNumberColor\">Ordeal</span>]",
                        "invertCondition": true
                      },
                      {
                        "name": "Character ID",
                        "ID": "W2_Yanqing_00_Skill02_SummonID01",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": null
                      }
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "Action Advance/Delay",
                      "advanceType": "Set",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "multiBase": 0.5
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-2068860507\">Enemy_W2_Yanqing_SwordPowerUp</a>[<span class=\"descriptionNumberColor\">Ordeal</span>]"
                    }
                  ]
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster's Minions}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-2068860507\">Enemy_W2_Yanqing_SwordPowerUp</a>[<span class=\"descriptionNumberColor\">Ordeal</span>]",
                    "invertCondition": true
                  },
                  "ifTargetFound": [
                    {
                      "name": "Action Advance/Delay",
                      "advanceType": "Set",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "multiBase": 1.5
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-2068860507\">Enemy_W2_Yanqing_SwordPowerUp</a>[<span class=\"descriptionNumberColor\">Ordeal</span>]"
                    }
                  ]
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster's Minions}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-2068860507\">Enemy_W2_Yanqing_SwordPowerUp</a>[<span class=\"descriptionNumberColor\">Ordeal</span>]",
                    "invertCondition": true
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-2068860507\">Enemy_W2_Yanqing_SwordPowerUp</a>[<span class=\"descriptionNumberColor\">Ordeal</span>]"
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster's Minions}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-2068860507\">Enemy_W2_Yanqing_SwordPowerUp</a>[<span class=\"descriptionNumberColor\">Ordeal</span>]",
                        "invertCondition": true
                      },
                      {
                        "name": "Character ID",
                        "ID": "W2_Yanqing_00_Skill02_SummonID01",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": null
                      }
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "Action Advance/Delay",
                      "advanceType": "Set",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "multiBase": 0
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-2068860507\">Enemy_W2_Yanqing_SwordPowerUp</a>[<span class=\"descriptionNumberColor\">Ordeal</span>]"
                    }
                  ]
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster's Minions}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-2068860507\">Enemy_W2_Yanqing_SwordPowerUp</a>[<span class=\"descriptionNumberColor\">Ordeal</span>]",
                        "invertCondition": true
                      },
                      {
                        "name": "Character ID",
                        "ID": "W2_Yanqing_00_Skill02_SummonID01",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": null
                      }
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "Action Advance/Delay",
                      "advanceType": "Set",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "multiBase": 0.5
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-2068860507\">Enemy_W2_Yanqing_SwordPowerUp</a>[<span class=\"descriptionNumberColor\">Ordeal</span>]"
                    }
                  ]
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster's Minions}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-2068860507\">Enemy_W2_Yanqing_SwordPowerUp</a>[<span class=\"descriptionNumberColor\">Ordeal</span>]",
                    "invertCondition": true
                  },
                  "ifTargetFound": [
                    {
                      "name": "Action Advance/Delay",
                      "advanceType": "Set",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "multiBase": 1.5
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"153779397\">Enemy_W2_Yanqing_01_StandByEffect</a>"
        },
        {
          "name": "Define Custom Variable with Modifier Values",
          "valueType": "Layer",
          "variableName": "OverdriveLayer",
          "modifierName": "<a class=\"gModGreen\" id=\"-1122230262\">Enemy_W2_Yanqing_Standard_Overdrive</a>[<span class=\"descriptionNumberColor\">Chilling Light</span>]",
          "multiplier": 1
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "OverdriveLayer",
            "compareType": ">=",
            "value2": 1,
            "contextScope": "TargetEntity"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1122230262\">Enemy_W2_Yanqing_Standard_Overdrive</a>[<span class=\"descriptionNumberColor\">Chilling Light</span>]",
              "valuePerStack": {
                "AllDamageTypeAddedRatioPerLayer": {
                  "operator": "Variables[0] (UnusedUnderThisBase_297) || RETURN",
                  "displayLines": "UnusedUnderThisBase_297",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_297"
                  ]
                }
              },
              "addStacksPerTrigger": {
                "operator": "Variables[0] (OverdriveLayer) || RETURN",
                "displayLines": "OverdriveLayer",
                "constants": [],
                "variables": [
                  "OverdriveLayer"
                ]
              }
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "2004023_Monster_W2_Yanqing_Ability02_Part01_RL": {
      "fileName": "2004023_Monster_W2_Yanqing_Ability02_Part01_RL",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W2_Yanqing_Ability02_Part02_RL",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "2004023_Monster_W2_Yanqing_Ability01_Part02_RL": {
      "fileName": "2004023_Monster_W2_Yanqing_Ability01_Part02_RL",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] ({[Skill01[0]]}) || Constants[0] (0.5) || MUL || RETURN",
              "displayLines": "({[Skill01[0]]} * 0.5)",
              "constants": [
                0.5
              ],
              "variables": [
                "{[Skill01[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "50%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] ({[Skill01[0]]}) || Constants[0] (0.5) || MUL || RETURN",
              "displayLines": "({[Skill01[0]]} * 0.5)",
              "constants": [
                0.5
              ],
              "variables": [
                "{[Skill01[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "50%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{All Team Members}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1122230262\">Enemy_W2_Yanqing_Standard_Overdrive</a>[<span class=\"descriptionNumberColor\">Chilling Light</span>]",
          "valuePerStack": {
            "AllDamageTypeAddedRatioPerLayer": {
              "operator": "Variables[0] (UnusedUnderThisBase_297) || RETURN",
              "displayLines": "UnusedUnderThisBase_297",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_297"
              ]
            }
          },
          "addStacksPerTrigger": 1
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "2004023_Monster_W2_Yanqing_Ability01_Part01_RL": {
      "fileName": "2004023_Monster_W2_Yanqing_Ability01_Part01_RL",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W2_Yanqing_Ability01_Part02_RL",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "2004023_Monster_W2_Yanqing_IF_Ability02_Insert_Change01": {
      "fileName": "2004023_Monster_W2_Yanqing_IF_Ability02_Insert_Change01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Compare: Monster Rank",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "compareType": ">=",
            "value2": 4
          },
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "scope": "ContextAbility",
                  "variableName": "MonsterPhase",
                  "value": 1
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "scope": "ContextAbility",
                  "variableName": "MonsterPhase",
                  "value": 2
                }
              ]
            }
          ]
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextAbility",
          "variableName": "BreakDarkTeamFlag"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Compare: Variable",
                "value1": "MonsterPhase",
                "compareType": "=",
                "value2": 2,
                "contextScope": "ContextAbility"
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-284432064\">Enemy_W2_Yanqing_IF_Ability02_PartTag01</a>"
              }
            ]
          },
          "failed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "searchRandom": true,
              "maxTargets": 4,
              "conditions": {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "Break"
              },
              "ifTargetFound": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "ContextAbility",
                  "variableName": "BreakDarkTeamFlag",
                  "value": 1
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "BreakDarkTeamFlag",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-284432064\">Enemy_W2_Yanqing_IF_Ability02_PartTag01</a>"
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 4,
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "Break"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"153779397\">Enemy_W2_Yanqing_01_StandByEffect</a>"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-770732625\">Enemy_W2_Yanqing_01_SwordPowerUp_StandByEffect</a>"
                    },
                    {
                      "name": "Remove Modifier Behavior Flag(s)",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "flagNames": []
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-237425029\">StanceBreakState_Effect</a>"
                    },
                    {
                      "name": "Deal Toughness DMG",
                      "value": 60,
                      "defender": {
                        "name": "Target Name",
                        "target": "{{Summoner of Parameter Target}}"
                      },
                      "canDelay": true,
                      "ToughnessDMGType": {
                        "name": "Damage Type Source",
                        "sourceType": {}
                      }
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-543718560\">Enemy_W2_Yanqing_IF_Ability02_SwitchWeakPoint</a>"
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 4,
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "Break"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Mark Entity For Immediate Death",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      }
                    },
                    {
                      "name": "Force Entity Death",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      }
                    },
                    {
                      "name": "Remove from Team Target Grouping",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "stayInTeam": false
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target Count",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Enemy Team All}}"
                    },
                    "compareType": ">",
                    "value2": 1,
                    "livingTargets": true
                  }
                }
              ]
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "2004023_Monster_W2_Yanqing_IF_AbilityP01_Insert_Part01to02": {
      "fileName": "2004023_Monster_W2_Yanqing_IF_AbilityP01_Insert_Part01to02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
        },
        {
          "name": "Dispel Debuffs",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "silent": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Minions}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": ">=",
            "value2": 1
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Minions}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": ">=",
            "value2": 1
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Minions}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": ">=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1328693800\">Enemy_W2_Yanqing_Ability02_DuringSkill</a>"
            },
            {
              "name": "Mark Entity For Immediate Death",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              }
            },
            {
              "name": "Force Entity Death",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              }
            },
            {
              "name": "Remove from Team Target Grouping",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "stayInTeam": false
            }
          ]
        },
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "multiBase": 0
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-273389019\">Enemy_W2_Yanqing_Ability05_Charge</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-356149908\">Enemy_W2_Yanqing_Ability05_Charge_CharacterChangePhase</a>"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"542143301\">Monster_ChangePhase</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-63015955\">Enemy_W2_Yanqing_StandBySwordEffect</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"684006930\">Enemy_W2_Yanqing_StandByEffect</a>"
        },
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "PhaseNormal"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1404590263\">Standard_Endurance</a>"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "W2_Yanqing_00_SkillP01_InsertFlag"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "W2_Yanqing_00_Skill02_InsertFlag"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "AIFlag",
          "value": 1
        },
        {
          "name": "Modify Weaknesses",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "action": "Protected",
          "valueList": [
            "Physical",
            "Fire",
            "Ice",
            "Thunder",
            "Wind",
            "Quantum",
            "Imaginary"
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "2004023_Monster_W2_Yanqing_IF_PartChange": {
      "fileName": "2004023_Monster_W2_Yanqing_IF_PartChange",
      "skillTrigger": "SkillP01",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "W2_Yanqing_00_SkillP01_InsertFlag"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-794932920\">Enemy_W2_Yanqing_AbilityP01_EnterBattleToast</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2138840050\">Enemy_W2_Yanqing_IF_AbilityP01_ChangePhaseController</a>"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "2004023_Monster_W2_Yanqing_IF_Ability08_Part02": {
      "fileName": "2004023_Monster_W2_Yanqing_IF_Ability08_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{All Team Members(Exclude Self)}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": ">=",
            "value2": 1
          }
        },
        "Ability Start",
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Minions}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": ">=",
            "value2": 1
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Minions}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": ">=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1328693800\">Enemy_W2_Yanqing_Ability02_DuringSkill</a>"
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-63015955\">Enemy_W2_Yanqing_StandBySwordEffect</a>"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Constants[0] (0.5) || Variables[0] ({[Skill08[0]]}) || MUL || RETURN",
              "displayLines": "(0.5 * {[Skill08[0]]})",
              "constants": [
                0.5
              ],
              "variables": [
                "{[Skill08[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "40%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Constants[0] (0.5) || Variables[0] ({[Skill08[0]]}) || MUL || RETURN",
              "displayLines": "(0.5 * {[Skill08[0]]})",
              "constants": [
                0.5
              ],
              "variables": [
                "{[Skill08[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "W2_Yanqing_00_Skill07_AllTeamMemberNumber",
          "value": {
            "operator": "Variables[0] (W2_Yanqing_00_Skill07_AllTeamMemberNumber) || Constants[0] (1) || SUB || RETURN",
            "displayLines": "(W2_Yanqing_00_Skill07_AllTeamMemberNumber - 1)",
            "constants": [
              1
            ],
            "variables": [
              "W2_Yanqing_00_Skill07_AllTeamMemberNumber"
            ]
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Constants[0] (0.5) || Variables[0] ({[Skill08[0]]}) || MUL || RETURN",
              "displayLines": "(0.5 * {[Skill08[0]]})",
              "constants": [
                0.5
              ],
              "variables": [
                "{[Skill08[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "W2_Yanqing_00_Skill07_AllTeamMemberNumber",
          "value": {
            "operator": "Variables[0] (W2_Yanqing_00_Skill07_AllTeamMemberNumber) || Constants[0] (1) || SUB || RETURN",
            "displayLines": "(W2_Yanqing_00_Skill07_AllTeamMemberNumber - 1)",
            "constants": [
              1
            ],
            "variables": [
              "W2_Yanqing_00_Skill07_AllTeamMemberNumber"
            ]
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Constants[0] (0.5) || Variables[0] ({[Skill08[0]]}) || MUL || RETURN",
              "displayLines": "(0.5 * {[Skill08[0]]})",
              "constants": [
                0.5
              ],
              "variables": [
                "{[Skill08[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "W2_Yanqing_00_Skill07_AllTeamMemberNumber",
          "value": {
            "operator": "Variables[0] (W2_Yanqing_00_Skill07_AllTeamMemberNumber) || Constants[0] (1) || SUB || RETURN",
            "displayLines": "(W2_Yanqing_00_Skill07_AllTeamMemberNumber - 1)",
            "constants": [
              1
            ],
            "variables": [
              "W2_Yanqing_00_Skill07_AllTeamMemberNumber"
            ]
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Constants[0] (0.5) || Variables[0] ({[Skill08[0]]}) || MUL || RETURN",
              "displayLines": "(0.5 * {[Skill08[0]]})",
              "constants": [
                0.5
              ],
              "variables": [
                "{[Skill08[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Constants[0] (0.5) || Variables[0] ({[Skill08[0]]}) || MUL || RETURN",
              "displayLines": "(0.5 * {[Skill08[0]]})",
              "constants": [
                0.5
              ],
              "variables": [
                "{[Skill08[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "60%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1560182165\">Enemy_W2_Yanqing_Ability02_Mark</a>[<span class=\"descriptionNumberColor\">Lock On</span>]"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1666789092\">Enemy_W2_Yanqing_Ability02_MarkingCountDown_1</a>[<span class=\"descriptionNumberColor\">Ready for Battle</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-63015955\">Enemy_W2_Yanqing_StandBySwordEffect</a>"
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "2004023_Monster_W2_Yanqing_IF_Ability08_Part01": {
      "fileName": "2004023_Monster_W2_Yanqing_IF_Ability08_Part01",
      "childAbilityList": [
        "2004023_Monster_W2_Yanqing_IF_Ability08_Part01",
        "2004023_Monster_W2_Yanqing_IF_Ability08_Part02",
        "2004023_Monster_W2_Yanqing_Ability08_Camera"
      ],
      "skillTrigger": "Skill08",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W2_Yanqing_IF_Ability08_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target"
      },
      "references": []
    },
    "2004023_Monster_W2_Yanqing_IF_Ability06_Part02": {
      "fileName": "2004023_Monster_W2_Yanqing_IF_Ability06_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-273389019\">Enemy_W2_Yanqing_Ability05_Charge</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-356149908\">Enemy_W2_Yanqing_Ability05_Charge_CharacterChangePhase</a>"
        },
        "Ability Start",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-63015955\">Enemy_W2_Yanqing_StandBySwordEffect</a>"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
              "displayLines": "{[Skill06[0]]}",
              "constants": [],
              "variables": [
                "{[Skill06[0]]}"
              ]
            },
            "HitSplit": 0.15,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
              "displayLines": "{[Skill06[0]]}",
              "constants": [],
              "variables": [
                "{[Skill06[0]]}"
              ]
            },
            "HitSplit": 0.15,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
              "displayLines": "{[Skill06[0]]}",
              "constants": [],
              "variables": [
                "{[Skill06[0]]}"
              ]
            },
            "HitSplit": 0.15,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
              "displayLines": "{[Skill06[0]]}",
              "constants": [],
              "variables": [
                "{[Skill06[0]]}"
              ]
            },
            "HitSplit": 0.15,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
              "displayLines": "{[Skill06[0]]}",
              "constants": [],
              "variables": [
                "{[Skill06[0]]}"
              ]
            },
            "HitSplit": 0.15,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
              "displayLines": "{[Skill06[0]]}",
              "constants": [],
              "variables": [
                "{[Skill06[0]]}"
              ]
            },
            "HitSplit": 0.25,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-63015955\">Enemy_W2_Yanqing_StandBySwordEffect</a>"
        },
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
                "modifier": "<a class=\"gModGreen\" id=\"1108547427\">Enemy_W2_Yanqing_PassiveAbilityMainBattle</a>"
              },
              {
                "name": "Compare: Variable",
                "value1": "W2_Yanqing_00_MainBattle_Flag",
                "compareType": "=",
                "value2": 0,
                "contextScope": "TargetEntity"
              }
            ]
          },
          "passed": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "scope": "TargetEntity",
              "variableName": "W2_Yanqing_00_MainBattle_Flag",
              "value": 1
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "2004023_Monster_W2_Yanqing_IF_Ability06_Part01": {
      "fileName": "2004023_Monster_W2_Yanqing_IF_Ability06_Part01",
      "childAbilityList": [
        "2004023_Monster_W2_Yanqing_IF_Ability06_Part01",
        "2004023_Monster_W2_Yanqing_IF_Ability06_Part02",
        "2004023_Monster_W2_Yanqing_Ability06_Camera"
      ],
      "skillTrigger": "Skill06",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W2_Yanqing_IF_Ability06_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "2004023_Monster_W2_Yanqing_IF_Ability02_TeamFormation": {
      "fileName": "2004023_Monster_W2_Yanqing_IF_Ability02_TeamFormation",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "2004023_Monster_W2_Yanqing_IF_Ability02_RevealedDie": {
      "fileName": "2004023_Monster_W2_Yanqing_IF_Ability02_RevealedDie",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Summoner}}"
            },
            "value1": "W2_Yanqing_00_SummonMinionsPerformFlag",
            "compareType": "=",
            "value2": 0,
            "contextScope": "TargetEntity"
          },
          "passed": [
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "ability": "Monster_W2_Yanqing_IF_Ability02_TeamFormation",
              "isTrigger": true
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "scope": "TargetEntity",
              "variableName": "W2_Yanqing_00_SummonMinionsPerformFlag",
              "value": 1
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"153779397\">Enemy_W2_Yanqing_01_StandByEffect</a>"
        },
        {
          "name": "Remove Modifier Behavior Flag(s)",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "flagNames": []
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-237425029\">StanceBreakState_Effect</a>"
        },
        {
          "name": "Mark Entity For Immediate Death",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "Force Entity Death",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "Remove from Team Target Grouping",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "stayInTeam": false
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Enemy Team All}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": "=",
            "value2": 0,
            "conditions": {
              "name": "Has Flag",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "flagName": "Break"
            }
          },
          "passed": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "scope": "TargetEntity",
              "variableName": "W2_Yanqing_00_SummonMinionsPerformFlag"
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "2004023_Monster_W2_Yanqing_IF_Ability02_Insert_Over": {
      "fileName": "2004023_Monster_W2_Yanqing_IF_Ability02_Insert_Over",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"480566743\">Enemy_W2_Yanqing_IF_Ability02_WeakPointProtect_Core</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-316265097\">Enemy_W2_Yanqing_IF_Ability02_UnknownWeakPoint_Toast_Controller</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Minions}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": ">=",
            "value2": 1
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Minions}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": ">=",
            "value2": 1
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Minions}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": ">=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Mark Entity For Immediate Death",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              }
            },
            {
              "name": "Force Entity Death",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              }
            },
            {
              "name": "Remove from Team Target Grouping",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "stayInTeam": false
            }
          ]
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "W2_Yanqing_00_Skill02_InsertFlag"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "2004023_Monster_W2_Yanqing_IF_Ability02_Part02": {
      "fileName": "2004023_Monster_W2_Yanqing_IF_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Define Custom Variable",
          "variableName": "W2_Yanqing_00_SwordStep",
          "value": 1
        },
        {
          "name": "WAIT FOR",
          "condition": {
            "name": "Death Animation Completed",
            "team": "Enemy Team",
            "type": "Team Characters"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Create Enemies",
              "delayPercent": 0.5,
              "refreshPositions": false,
              "enemyList": [
                {
                  "name": "Create Enemy from Custom",
                  "value": "W2_Yanqing_00_Skill02_SummonID01",
                  "summonLocation": "BeforeCaster"
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Recently Summoned Enemies}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-418365649\">Enemy_W2_Yanqing_IF_Ability02_SwordWeakPointTag02</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Recently Summoned Enemies}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-171629456\">Enemy_W2_Yanqing_IF_Ability02_SwordWeakPointLogic01</a>",
              "valuePerStack": {
                "CurrentWeakPoint": 1,
                "MDF_SwordDelayP2": {
                  "operator": "Variables[0] ({[Skill02[2]]}) || RETURN",
                  "displayLines": "{[Skill02[2]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill02[2]]}"
                  ]
                }
              }
            },
            {
              "name": "Create Enemies",
              "delayPercent": 0.5,
              "refreshPositions": false,
              "enemyList": [
                {
                  "name": "Create Enemy from Custom",
                  "value": "W2_Yanqing_00_Skill02_SummonID01",
                  "summonLocation": "AfterCaster"
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Recently Summoned Enemies}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-435143268\">Enemy_W2_Yanqing_IF_Ability02_SwordWeakPointTag03</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Recently Summoned Enemies}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-171629456\">Enemy_W2_Yanqing_IF_Ability02_SwordWeakPointLogic01</a>",
              "valuePerStack": {
                "CurrentWeakPoint": 2,
                "MDF_SwordDelayP2": {
                  "operator": "Variables[0] ({[Skill02[2]]}) || RETURN",
                  "displayLines": "{[Skill02[2]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill02[2]]}"
                  ]
                }
              }
            },
            {
              "name": "Create Enemies",
              "enemyList": [
                {
                  "name": "Create Enemy from Custom",
                  "value": "W2_Yanqing_00_Skill02_SummonID02",
                  "summonLocation": "First"
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Recently Summoned Enemies}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-401588030\">Enemy_W2_Yanqing_IF_Ability02_SwordWeakPointTag01</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Recently Summoned Enemies}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-171629456\">Enemy_W2_Yanqing_IF_Ability02_SwordWeakPointLogic01</a>",
              "valuePerStack": {
                "CurrentWeakPoint": 0,
                "MDF_SwordDelayP2": {
                  "operator": "Variables[0] ({[Skill02[2]]}) || RETURN",
                  "displayLines": "{[Skill02[2]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill02[2]]}"
                  ]
                }
              }
            },
            {
              "name": "Create Enemies",
              "enemyList": [
                {
                  "name": "Create Enemy from Custom",
                  "value": "W2_Yanqing_00_Skill02_SummonID02",
                  "summonLocation": "Last"
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Recently Summoned Enemies}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-451920887\">Enemy_W2_Yanqing_IF_Ability02_SwordWeakPointTag04</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Recently Summoned Enemies}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-171629456\">Enemy_W2_Yanqing_IF_Ability02_SwordWeakPointLogic01</a>",
              "valuePerStack": {
                "CurrentWeakPoint": 3,
                "MDF_SwordDelayP2": {
                  "operator": "Variables[0] ({[Skill02[2]]}) || RETURN",
                  "displayLines": "{[Skill02[2]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill02[2]]}"
                  ]
                }
              }
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "scope": "ContextAbility",
              "variableName": "SwordNumber",
              "value": 1
            },
            {
              "name": "Create Enemies",
              "delayPercent": 0.5,
              "refreshPositions": false,
              "enemyList": [
                {
                  "name": "Create Enemy from Custom",
                  "value": "W2_Yanqing_00_Skill02_SummonID01",
                  "summonLocation": "BeforeCaster"
                }
              ]
            },
            {
              "name": "Create Enemies",
              "delayPercent": 0.5,
              "refreshPositions": false,
              "enemyList": [
                {
                  "name": "Create Enemy from Custom",
                  "value": "W2_Yanqing_00_Skill02_SummonID01",
                  "summonLocation": "AfterCaster"
                }
              ]
            },
            {
              "name": "Create Enemies",
              "enemyList": [
                {
                  "name": "Create Enemy from Custom",
                  "value": "W2_Yanqing_00_Skill02_SummonID02",
                  "summonLocation": "First"
                }
              ]
            },
            {
              "name": "Create Enemies",
              "enemyList": [
                {
                  "name": "Create Enemy from Custom",
                  "value": "W2_Yanqing_00_Skill02_SummonID02",
                  "summonLocation": "Last"
                }
              ]
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "searchRandom": true,
              "maxTargets": 4,
              "conditions": {
                "name": "Compare: Monster Rank",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "compareType": "<=",
                "value2": 2
              },
              "ifTargetFound": [
                {
                  "name": "SWITCH",
                  "switchValue": {
                    "operator": "Variables[0] (SwordNumber) || RETURN",
                    "displayLines": "SwordNumber",
                    "constants": [],
                    "variables": [
                      "SwordNumber"
                    ]
                  },
                  "caseEvents": [
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 1,
                      "execute": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1210540257\">Enemy_W2_Yanqing_IF_Ability02_SwordWeakPointTag01_Secret</a>"
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 2,
                      "execute": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-32322596\">Enemy_W2_Yanqing_IF_Ability02_SwordWeakPointTag02_Secret</a>"
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 3,
                      "execute": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1561049731\">Enemy_W2_Yanqing_IF_Ability02_SwordWeakPointTag03_Secret</a>"
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 4,
                      "execute": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-886573966\">Enemy_W2_Yanqing_IF_Ability02_SwordWeakPointTag04_Secret</a>"
                        }
                      ]
                    }
                  ],
                  "defaultEvents": []
                },
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "SwordNumber",
                  "context": "ContextAbility",
                  "value": 1,
                  "max": 5
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"633075881\">Enemy_W2_Yanqing_IF_Ability02_SwordWeakPointLogic01_Secret</a>",
              "valuePerStack": {
                "CurrentWeakPoint": 3,
                "MDF_SwordDelayP2": {
                  "operator": "Variables[0] ({[Skill02[2]]}) || RETURN",
                  "displayLines": "{[Skill02[2]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill02[2]]}"
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members(Exclude Self)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"536339724\">Enemy_W2_Yanqing_IF_Ability02_SwordWeakPoint01</a>"
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members(Exclude Self)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"536339724\">Enemy_W2_Yanqing_IF_Ability02_SwordWeakPoint01</a>"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"480566743\">Enemy_W2_Yanqing_IF_Ability02_WeakPointProtect_Core</a>",
          "valuePerStack": {
            "MDF_SpeedDelta": {
              "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
              "displayLines": "{[Skill02[0]]}",
              "constants": [],
              "variables": [
                "{[Skill02[0]]}"
              ]
            },
            "MDF_StanceDamage": {
              "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
              "displayLines": "{[Skill02[1]]}",
              "constants": [],
              "variables": [
                "{[Skill02[1]]}"
              ]
            }
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"640085401\">Enemy_W2_Yanqing_IF_Ability02_AdditiveToast</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2056400991\">Enemy_W2_Yanqing_IF_Ability02_SwordEnhance</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"153779397\">Enemy_W2_Yanqing_01_StandByEffect</a>"
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "2004023_Monster_W2_Yanqing_IF_Ability02_Part01": {
      "fileName": "2004023_Monster_W2_Yanqing_IF_Ability02_Part01",
      "childAbilityList": [
        "2004023_Monster_W2_Yanqing_IF_Ability02_Part01",
        "2004023_Monster_W2_Yanqing_IF_Ability02_Part02",
        "2004023_Monster_W2_Yanqing_Ability02_Camera",
        "2004023_Monster_W2_Yanqing_IF_Ability02_Insert_Over",
        "2004023_Monster_W2_Yanqing_IF_Ability02_TeamFormation"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W2_Yanqing_IF_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "2004023_Monster_W2_Yanqing_IF_Ability01_Effect": {
      "fileName": "2004023_Monster_W2_Yanqing_IF_Ability01_Effect",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "references": []
    },
    "2004023_Monster_W2_Yanqing_IF_Ability01_Perform": {
      "fileName": "2004023_Monster_W2_Yanqing_IF_Ability01_Perform",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "inherentTarget": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "ability": "Monster_W2_Yanqing_IF_Ability01_Effect",
          "isTrigger": true
        }
      ],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "references": []
    },
    "2004023_Monster_W2_Yanqing_IF_Ability01_Logic": {
      "fileName": "2004023_Monster_W2_Yanqing_IF_Ability01_Logic",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "inherentTarget": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "ability": "Monster_W2_Yanqing_IF_Ability01_Perform",
          "isTrigger": true
        },
        "Deleted bullshit",
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] ({[Skill01[0]]}) || Constants[0] (0.5) || MUL || RETURN",
              "displayLines": "({[Skill01[0]]} * 0.5)",
              "constants": [
                0.5
              ],
              "variables": [
                "{[Skill01[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "50%"
          }
        },
        {
          "name": "Looped Event",
          "maxLoops": {
            "operator": "Variables[0] (Monster_W2_Yanqing_00_IF_Skill01_AssistMark01) || RETURN",
            "displayLines": "Monster_W2_Yanqing_00_IF_Skill01_AssistMark01",
            "constants": [],
            "variables": [
              "Monster_W2_Yanqing_00_IF_Skill01_AssistMark01"
            ]
          },
          "Event": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Ice",
                "Damage": {
                  "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
                  "displayLines": "{[Skill01[1]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill01[1]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null
              }
            }
          ]
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] ({[Skill01[0]]}) || Constants[0] (0.5) || MUL || RETURN",
              "displayLines": "({[Skill01[0]]} * 0.5)",
              "constants": [
                0.5
              ],
              "variables": [
                "{[Skill01[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "50%"
          }
        },
        {
          "name": "Looped Event",
          "maxLoops": {
            "operator": "Variables[0] (Monster_W2_Yanqing_00_IF_Skill01_AssistMark02) || RETURN",
            "displayLines": "Monster_W2_Yanqing_00_IF_Skill01_AssistMark02",
            "constants": [],
            "variables": [
              "Monster_W2_Yanqing_00_IF_Skill01_AssistMark02"
            ]
          },
          "Event": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Ice",
                "Damage": {
                  "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
                  "displayLines": "{[Skill01[1]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill01[1]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null
              }
            }
          ]
        },
        {
          "name": "Looped Event",
          "maxLoops": {
            "operator": "Variables[0] (Monster_W2_Yanqing_00_IF_Skill01_AssistMark03) || RETURN",
            "displayLines": "Monster_W2_Yanqing_00_IF_Skill01_AssistMark03",
            "constants": [],
            "variables": [
              "Monster_W2_Yanqing_00_IF_Skill01_AssistMark03"
            ]
          },
          "Event": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Ice",
                "Damage": {
                  "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
                  "displayLines": "{[Skill01[1]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill01[1]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null
              }
            }
          ]
        },
        "Trigger: Attack End"
      ],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "tag": "DOT",
      "references": []
    },
    "2004023_Monster_W2_Yanqing_IF_Ability01_AssistInit": {
      "fileName": "2004023_Monster_W2_Yanqing_IF_Ability01_AssistInit",
      "childAbilityList": [
        "2004023_Monster_W2_Yanqing_IF_Ability01_AssistInit",
        "2004023_Monster_W2_Yanqing_IF_Ability01_Logic",
        "2004023_Monster_W2_Yanqing_IF_Ability01_Perform",
        "2004023_Monster_W2_Yanqing_IF_Ability01_Effect",
        "2004023_Monster_W2_Yanqing_IF_Ability01_Camera"
      ],
      "skillTrigger": "Skill01",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "Monster_W2_Yanqing_00_IF_Skill01_AssistMark01"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "Monster_W2_Yanqing_00_IF_Skill01_AssistMark02"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "Monster_W2_Yanqing_00_IF_Skill01_AssistMark03"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "searchRandom": true,
          "maxTargets": 2,
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "STAT_CTRL",
                "invertCondition": true
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "Break",
                "invertCondition": true
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "DisableAction",
                "invertCondition": true
              }
            ]
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"2039253924\">Monster_W2_Yanqing_IF_AssistMark01</a>"
            },
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "Monster_W2_Yanqing_00_IF_Skill01_AssistMark01",
              "context": "TargetEntity",
              "value": 1,
              "max": 2
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "STAT_CTRL",
                "invertCondition": true
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "Break",
                "invertCondition": true
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "DisableAction",
                "invertCondition": true
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"2039253924\">Monster_W2_Yanqing_IF_AssistMark01</a>",
                "invertCondition": true
              }
            ]
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"2089586781\">Monster_W2_Yanqing_IF_AssistMark02</a>"
            },
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "Monster_W2_Yanqing_00_IF_Skill01_AssistMark02",
              "context": "TargetEntity",
              "value": 1,
              "max": 1
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "searchRandom": true,
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "STAT_CTRL",
                "invertCondition": true
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "Break",
                "invertCondition": true
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "DisableAction",
                "invertCondition": true
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"2039253924\">Monster_W2_Yanqing_IF_AssistMark01</a>",
                "invertCondition": true
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"2089586781\">Monster_W2_Yanqing_IF_AssistMark02</a>",
                "invertCondition": true
              }
            ]
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"2072809162\">Monster_W2_Yanqing_IF_AssistMark03</a>"
            },
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "Monster_W2_Yanqing_00_IF_Skill01_AssistMark03",
              "context": "TargetEntity",
              "value": 1,
              "max": 4
            }
          ]
        },
        {
          "name": "Trigger Joint-Attack Ability",
          "abilityList": [
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "inherentTarget": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "ability": "Monster_W2_Yanqing_IF_Ability01_Logic"
            },
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{All Team Members(Exclude Self)}}"
                  },
                  {
                    "name": "Target Filter",
                    "conditions": {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"2039253924\">Monster_W2_Yanqing_IF_AssistMark01</a>"
                    }
                  },
                  "Shuffle Targets",
                  {
                    "name": "Return Target",
                    "value": 2
                  }
                ]
              },
              "inherentTarget": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "Shuffle Targets",
                  {
                    "name": "Return Target",
                    "value": 1
                  }
                ]
              },
              "behaviorTag": "AssistAttack1",
              "abortFlags": [
                "STAT_CTRL",
                "Break",
                "DisableAction"
              ],
              "ability": "MISSING NAME OBJECT(Or implicit from Context)"
            },
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{All Team Members(Exclude Self)}}"
                  },
                  {
                    "name": "Target Filter",
                    "conditions": {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"2089586781\">Monster_W2_Yanqing_IF_AssistMark02</a>"
                    }
                  },
                  "Shuffle Targets",
                  {
                    "name": "Return Target",
                    "value": 1
                  }
                ]
              },
              "inherentTarget": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "Shuffle Targets",
                  {
                    "name": "Return Target",
                    "value": 1
                  }
                ]
              },
              "delay": 0.5,
              "behaviorTag": "AssistAttack1",
              "abortFlags": [
                "STAT_CTRL",
                "Break",
                "DisableAction"
              ],
              "ability": "MISSING NAME OBJECT(Or implicit from Context)"
            },
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{All Team Members(Exclude Self)}}"
                  },
                  {
                    "name": "Target Filter",
                    "conditions": {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"2072809162\">Monster_W2_Yanqing_IF_AssistMark03</a>"
                    }
                  },
                  "Shuffle Targets",
                  {
                    "name": "Return Target",
                    "value": 4
                  }
                ]
              },
              "inherentTarget": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "Shuffle Targets",
                  {
                    "name": "Return Target",
                    "value": 1
                  }
                ]
              },
              "delay": 1,
              "behaviorTag": "AssistAttack1",
              "abortFlags": [
                "STAT_CTRL",
                "Break",
                "DisableAction"
              ],
              "ability": "MISSING NAME OBJECT(Or implicit from Context)"
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2039253924\">Monster_W2_Yanqing_IF_AssistMark01</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2089586781\">Monster_W2_Yanqing_IF_AssistMark02</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2072809162\">Monster_W2_Yanqing_IF_AssistMark03</a>"
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2072809162\">Monster_W2_Yanqing_IF_AssistMark03</a>",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2089586781\">Monster_W2_Yanqing_IF_AssistMark02</a>",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2039253924\">Monster_W2_Yanqing_IF_AssistMark01</a>",
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "2004023_Monster_W2_Yanqing_01_IF_AssistAbility01_Effect": {
      "fileName": "2004023_Monster_W2_Yanqing_01_IF_AssistAbility01_Effect",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"153779397\">Enemy_W2_Yanqing_01_StandByEffect</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-770732625\">Enemy_W2_Yanqing_01_SwordPowerUp_StandByEffect</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-2068860507\">Enemy_W2_Yanqing_SwordPowerUp</a>[<span class=\"descriptionNumberColor\">Ordeal</span>]"
          },
          "passed": [
            {
              "name": "Shot Fired"
            }
          ],
          "failed": [
            {
              "name": "Shot Fired"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-2068860507\">Enemy_W2_Yanqing_SwordPowerUp</a>[<span class=\"descriptionNumberColor\">Ordeal</span>]"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-298752594\">Standard_CTRL_Frozen</a>[<span class=\"descriptionNumberColor\">Frozen</span>]",
              "duration": {
                "operator": "Variables[0] (UnusedUnderThisBase_295) || RETURN",
                "displayLines": "UnusedUnderThisBase_295",
                "constants": [],
                "variables": [
                  "UnusedUnderThisBase_295"
                ]
              },
              "baseChance": {
                "operator": "Variables[0] (UnusedUnderThisBase_296) || RETURN",
                "displayLines": "UnusedUnderThisBase_296",
                "constants": [],
                "variables": [
                  "UnusedUnderThisBase_296"
                ]
              },
              "valuePerStack": {
                "Modifier_Frozen_DamagePercentage": {
                  "operator": "Variables[0] (UnusedUnderThisBase_294) || RETURN",
                  "displayLines": "UnusedUnderThisBase_294",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_294"
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"153779397\">Enemy_W2_Yanqing_01_StandByEffect</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-2068860507\">Enemy_W2_Yanqing_SwordPowerUp</a>[<span class=\"descriptionNumberColor\">Ordeal</span>]"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-770732625\">Enemy_W2_Yanqing_01_SwordPowerUp_StandByEffect</a>"
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "references": []
    },
    "2004023_Monster_W2_Yanqing_01_IF_AssistAbility01_Perform": {
      "fileName": "2004023_Monster_W2_Yanqing_01_IF_AssistAbility01_Perform",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "inherentTarget": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "ability": "Monster_W2_Yanqing_01_IF_AssistAbility01_Effect",
          "isTrigger": true
        }
      ],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "references": []
    },
    "2004023_Monster_W2_Yanqing_01_IF_AssistAbility01_Logic": {
      "fileName": "2004023_Monster_W2_Yanqing_01_IF_AssistAbility01_Logic",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "inherentTarget": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "ability": "Monster_W2_Yanqing_01_IF_AssistAbility01_Perform",
          "isTrigger": true
        }
      ],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "tag": "DOT_Burn",
      "references": []
    },
    "2004023_Monster_W2_Yanqing_IF_PassiveAbilityInitiate": {
      "fileName": "2004023_Monster_W2_Yanqing_IF_PassiveAbilityInitiate",
      "childAbilityList": [
        "2004023_Monster_W2_Yanqing_IF_PassiveAbilityInitiate"
      ],
      "skillTrigger": "SkillP03",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1795073899\">Monster_W2_Yanqing_BOSS_PowerUp</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-259584521\">Monster_W2_Yanqing_BOSS_IceDamage</a>",
          "valuePerStack": {
            "MDF_IceDamageTakenUpRatio_PerLayer": {
              "operator": "Variables[0] ({[SkillP03[4]]}) || RETURN",
              "displayLines": "{[SkillP03[4]]}",
              "constants": [],
              "variables": [
                "{[SkillP03[4]]}"
              ]
            }
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1992404777\">Monster_W2_Yanqing_BOSS_AssistAbility</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1368237020\">Enemy_W2_Yanqing_IF_Ability02_SwitchInit</a>"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1907558545\">Monster_W2_Yanqing_Sword_AssistAbility</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Ability",
                  "abilityName": "Monster_W2_Yanqing_01_IF_AssistAbility01_Logic"
                },
                {
                  "name": "Add Ability",
                  "abilityName": "Monster_W2_Yanqing_01_IF_AssistAbility01_Perform"
                },
                {
                  "name": "Add Ability",
                  "abilityName": "Monster_W2_Yanqing_01_IF_AssistAbility01_Effect"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-944817604\">Monster_W2_Yanqing_BOSS_AssistAbilityTarget</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1992404777\">Monster_W2_Yanqing_BOSS_AssistAbility</a>",
          "execute": [
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1907558545\">Monster_W2_Yanqing_Sword_AssistAbility</a>"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-640160839\">Monster_W2_Yanqing_Sword_IceDamage</a>",
          "execute": [
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Attack Targets of Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1004973880\">Enemy_W2_Yanqing_Standard_IceDamageTakenUp</a>",
                  "valuePerStack": {
                    "IceTakenRatioPerLayer": {
                      "operator": "Variables[0] (MDF_IceDamageTakenUpRatio_PerLayer) || RETURN",
                      "displayLines": "MDF_IceDamageTakenUpRatio_PerLayer",
                      "constants": [],
                      "variables": [
                        "MDF_IceDamageTakenUpRatio_PerLayer"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-259584521\">Monster_W2_Yanqing_BOSS_IceDamage</a>",
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
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 2
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
                      "modifier": "<a class=\"gModGreen\" id=\"-640160839\">Monster_W2_Yanqing_Sword_IceDamage</a>",
                      "valuePerStack": {
                        "MDF_IceDamageTakenUpRatio_PerLayer": {
                          "operator": "Variables[0] (MDF_IceDamageTakenUpRatio_PerLayer) || RETURN",
                          "displayLines": "MDF_IceDamageTakenUpRatio_PerLayer",
                          "constants": [],
                          "variables": [
                            "MDF_IceDamageTakenUpRatio_PerLayer"
                          ]
                        }
                      }
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
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 2
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Attack Targets of Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1004973880\">Enemy_W2_Yanqing_Standard_IceDamageTakenUp</a>",
                      "valuePerStack": {
                        "IceTakenRatioPerLayer": {
                          "operator": "Variables[0] (MDF_IceDamageTakenUpRatio_PerLayer) || RETURN",
                          "displayLines": "MDF_IceDamageTakenUpRatio_PerLayer",
                          "constants": [],
                          "variables": [
                            "MDF_IceDamageTakenUpRatio_PerLayer"
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_IceDamageTakenUpRatio_PerLayer"
          ],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1795073899\">Monster_W2_Yanqing_BOSS_PowerUp</a>",
          "modifierFlags": [
            "MuteBreak"
          ],
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "W2_Yanqing_00_SwordStep",
                      "value": 0
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "AIFlag",
                      "value": 1
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "action": "Protected",
                  "valueList": [
                    "Physical",
                    "Fire",
                    "Ice",
                    "Thunder",
                    "Wind",
                    "Quantum",
                    "Imaginary"
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"651865792\">Monster_IF_BOSS_Standard_BreakBonus</a>",
                  "valuePerStack": {
                    "MDF_IF_BOSS_BreakDelay": 1.5
                  }
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "W2_Yanqing_00_SwordStep",
                  "value": 0
                }
              ]
            },
            {
              "eventTrigger": "End Broken State [Owner]",
              "execute": [
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "action": "Protected",
                  "valueList": [
                    "Physical",
                    "Fire",
                    "Ice",
                    "Thunder",
                    "Wind",
                    "Quantum",
                    "Imaginary"
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "2004023_Monster_W2_Yanqing_IF_PassiveAbilityInitiate_MaxPhase2": {
      "fileName": "2004023_Monster_W2_Yanqing_IF_PassiveAbilityInitiate_MaxPhase2",
      "skillTrigger": "PassiveSkillInitiate",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1166907060\">Enemy_Standard_MuteHitFly</a>"
        },
        {
          "name": "Boss Bar Display",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "display": true
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "W2_Yanqing_00_MaxPhaseNum",
          "value": 2
        }
      ],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1051510305\">W2_YanQing_BattleScore1</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1034732686\">W2_YanQing_BattleScore2</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1017955067\">W2_YanQing_BattleScore3</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1135398400\">W2_YanQing_BattleScore4</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1118620781\">W2_YanQing_BattleScore5</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1101843162\">W2_YanQing_BattleScore6</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1085065543\">W2_YanQing_BattleScore7</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-63015955\">Enemy_W2_Yanqing_StandBySwordEffect</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1466013786\">Enemy_W2_Yanqing_StandBySwordEffect_Controller</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"684006930\">Enemy_W2_Yanqing_StandByEffect</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-881909644\">Enemy_W2_Yanqing_IF_Ability02_AIController</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"210061459\">Enemy_W2_Yanqing_IF_Part2_OneMoreController</a>"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__210061459\">Enemy_W2_Yanqing_IF_Part2_OneMoreController</a>",
          "execute": [
            {
              "eventTrigger": "Turn End [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 2
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "value1": "AIFlag",
                            "compareType": "=",
                            "value2": 11
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "AIFlag",
                            "compareType": "=",
                            "value2": 111
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "AIFlag",
                            "compareType": "=",
                            "value2": 141
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "AIFlag",
                            "compareType": "=",
                            "value2": 151
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-129923965\">MoreOneMorePerTurn</a>"
                          },
                          "passed": [
                            {
                              "name": "Remove Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-129923965\">MoreOneMorePerTurn</a>"
                            }
                          ]
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>",
                            "invertCondition": true
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "value1": "AIFlag",
                            "compareType": "=",
                            "value2": 1
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "AIFlag",
                            "compareType": "=",
                            "value2": 101
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "AIFlag",
                            "compareType": "=",
                            "value2": 121
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "AIFlag",
                            "compareType": "=",
                            "value2": 131
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                          },
                          "passed": [
                            {
                              "name": "Remove Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                            }
                          ]
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-129923965\">MoreOneMorePerTurn</a>",
                            "invertCondition": true
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-129923965\">MoreOneMorePerTurn</a>"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "value1": "AIFlag",
                            "compareType": "=",
                            "value2": 51
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                          },
                          "passed": [
                            {
                              "name": "Remove Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                            }
                          ]
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-129923965\">MoreOneMorePerTurn</a>"
                          },
                          "passed": [
                            {
                              "name": "Remove Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-129923965\">MoreOneMorePerTurn</a>"
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
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "2004023_Monster_W2_Yanqing_AbilityP01": {
      "fileName": "2004023_Monster_W2_Yanqing_AbilityP01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "2004023_Monster_W2_Yanqing_PassiveAbilityMainBattle": {
      "fileName": "2004023_Monster_W2_Yanqing_PassiveAbilityMainBattle",
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
          "modifier": "<a class=\"gModGreen\" id=\"1108547427\">Enemy_W2_Yanqing_PassiveAbilityMainBattle</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"39736655\">Enemy_W2_Yanqing_MainBattle_PerformController</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"605967688\">Enemy_W2_Yanqing_MainBattle_FrozenResistanceUp</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1881028391\">Enemy_W2_Yanqing_MainBattle_Fatigue</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-814773132\">Enemy_W2_Yanqing_MainBattle_SpecialDieEffect</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Trial: Blade}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1296940882\">Enemy_W2_Yanqing_MainBattle_ChangeRenSpeed</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-403510377\">Enemy_W2_Yanqing_RemoveOneMoreAfterAbility01</a>"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "searchRandom": true,
          "conditions": {
            "name": "Character ID",
            "ID": 7213,
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "characterName": null
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"2005715939\">Enemy_W2_Yanqing_MainBattle_DanhengIL_Counter</a>"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1596688101\">Enemy_W2_Yanqing_MainBattle_LockHP</a>"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-814773132\">Enemy_W2_Yanqing_MainBattle_SpecialDieEffect</a>",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "phase": "Phase_SpecialDieEffect"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__39736655\">Enemy_W2_Yanqing_MainBattle_PerformController</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "searchRandom": true,
                  "conditions": {
                    "name": "Character ID",
                    "ID": 7213,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": null
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1288559368\">Enemy_W2_Yanqing_MainBattle_Perform01</a>"
                    }
                  ]
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "searchRandom": true,
                  "conditions": {
                    "name": "Character ID",
                    "ID": 7205,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": null
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1338892225\">Enemy_W2_Yanqing_MainBattle_Perform02</a>"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1881028391\">Enemy_W2_Yanqing_MainBattle_Fatigue</a>"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1928823293\">Enemy_W2_Yanqing_MainBattle_MuteUltra</a>"
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1322114606\">Enemy_W2_Yanqing_MainBattle_Perform03</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1372447463\">Enemy_W2_Yanqing_MainBattle_Perform04</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1355669844\">Enemy_W2_Yanqing_MainBattle_Perform05</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-696439078\">Enemy_W2_Yanqing_MainBattle_jiaobianzhici</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1319803673\">Enemy_W2_Yanqing_MainBattle_susutouxiang</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1240130161\">Enemy_W2_Yanqing_MainBattle_shutup_you_not_leave</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1089294259\">Enemy_W2_Yanqing_MainBattle_zhenyanshoua</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Trial: Blade}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"551998134\">Enemy_W2_Yanqing_MainBattle_zunming</a>"
                }
              ]
            },
            {
              "eventTrigger": "When Put in Deathstate Limbo"
            },
            {
              "eventTrigger": "Ability Use [Owner]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Name",
                    "skillName": "Skill05"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Leave Battle"
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1108547427\">Enemy_W2_Yanqing_PassiveAbilityMainBattle</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "W2_Yanqing_00_MainBattle_Flag"
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "searchRandom": true,
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Character ID",
                        "ID": 7213,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": null
                      }
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"141000625\">DanhengIL_EXAbility01_LV1</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Put in Deathstate Limbo"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Mute Last Kill",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__914198168\">DanhengIL_EXAbility01_LV3_DamageUp</a>",
          "stackType": "ReplaceByCaster",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">StageFinalDMG</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                    "displayLines": "MDF_PropertyValue",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateBase</span>&nbsp;",
                  "value": 1
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2005715939\">Enemy_W2_Yanqing_MainBattle_DanhengIL_Counter</a>",
          "execute": [
            {
              "eventTrigger": "Action Choice Window [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "DanhengIL_MainBattle_Counter",
                    "compareType": "=",
                    "value2": 4,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1596688101\">Enemy_W2_Yanqing_MainBattle_LockHP</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Action End [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "DanhengIL_MainBattle_Counter",
                  "context": "TargetEntity",
                  "value": 1,
                  "max": 9
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "DanhengIL_MainBattle_Counter",
                  "value": 1
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "DanhengIL_MainBattle_Counter",
                    "compareType": "=",
                    "value2": 2,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"141000625\">DanhengIL_EXAbility01_LV1</a>"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"90667768\">DanhengIL_EXAbility01_LV2</a>"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "DanhengIL_MainBattle_Counter",
                    "compareType": "=",
                    "value2": 3,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"90667768\">DanhengIL_EXAbility01_LV2</a>"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"141000625\">DanhengIL_EXAbility01_LV1</a>"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"124223006\">DanhengIL_EXAbility01_LV0</a>"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1554946856\">DanHengIL_BPCost_2_Special</a>"
                    },
                    {
                      "name": "Skill Points Modification",
                      "adjustmentValue": 5,
                      "adjustmentType": "+",
                      "silent": true
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"310423138\">DanhengIL_EXAbility01_Diable_Ultra</a>"
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "searchRandom": true,
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Character ID",
                            "ID": 7213,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "characterName": null
                          }
                        ]
                      },
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"914198168\">DanhengIL_EXAbility01_LV3_DamageUp</a>",
                          "valuePerStack": {
                            "MDF_PropertyValue": {
                              "operator": "Variables[0] (DanhengIL_MainBattle_Counter) || RETURN",
                              "displayLines": "DanhengIL_MainBattle_Counter",
                              "constants": [],
                              "variables": [
                                "DanhengIL_MainBattle_Counter"
                              ]
                            }
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
          "latentQueue": []
        }
      ]
    },
    "2004023_Monster_W2_Yanqing_PassiveAbilityInitiate": {
      "fileName": "2004023_Monster_W2_Yanqing_PassiveAbilityInitiate",
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
          "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-130476025\">Enemy_W2_Yanqing_RemoveOneMore</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1166907060\">Enemy_Standard_MuteHitFly</a>"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "W2_Yanqing_00_AICounter",
          "value": 1
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "W2_Yanqing_00_AIPhase",
          "value": 1
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "W2_Yanqing_00_WeakPointState"
        },
        {
          "name": "Boss Bar Display",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "display": true
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "W2_Yanqing_00_MaxPhaseNum",
          "value": 1
        }
      ],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1051510305\">W2_YanQing_BattleScore1</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1034732686\">W2_YanQing_BattleScore2</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1017955067\">W2_YanQing_BattleScore3</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1135398400\">W2_YanQing_BattleScore4</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1118620781\">W2_YanQing_BattleScore5</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1101843162\">W2_YanQing_BattleScore6</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1085065543\">W2_YanQing_BattleScore7</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-63015955\">Enemy_W2_Yanqing_StandBySwordEffect</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1466013786\">Enemy_W2_Yanqing_StandBySwordEffect_Controller</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"684006930\">Enemy_W2_Yanqing_StandByEffect</a>"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-130476025\">Enemy_W2_Yanqing_RemoveOneMore</a>",
          "execute": [
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "W2_Yanqing_00_AICounter",
                        "compareType": "=",
                        "value2": 2,
                        "contextScope": "TargetEntity"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "W2_Yanqing_00_AICounter",
                        "compareType": "=",
                        "value2": 4,
                        "contextScope": "TargetEntity"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "W2_Yanqing_00_AICounter",
                        "compareType": "=",
                        "value2": 6,
                        "contextScope": "TargetEntity"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "W2_Yanqing_00_AICounter",
                        "compareType": "=",
                        "value2": 8,
                        "contextScope": "TargetEntity"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "W2_Yanqing_00_AICounter",
                      "context": "TargetEntity",
                      "value": -1,
                      "max": 14
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
    },
    "2004023_Monster_W2_Yanqing_Ability06_Part02": {
      "fileName": "2004023_Monster_W2_Yanqing_Ability06_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-273389019\">Enemy_W2_Yanqing_Ability05_Charge</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1372447463\">Enemy_W2_Yanqing_MainBattle_Perform04</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-356149908\">Enemy_W2_Yanqing_Ability05_Charge_CharacterChangePhase</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-290755256\">Enemy_W2_Yanqing_Ability05_Charge_RL</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
        },
        "Ability Start",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-63015955\">Enemy_W2_Yanqing_StandBySwordEffect</a>"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
              "displayLines": "{[Skill06[0]]}",
              "constants": [],
              "variables": [
                "{[Skill06[0]]}"
              ]
            },
            "HitSplit": 0.15,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
              "displayLines": "{[Skill06[0]]}",
              "constants": [],
              "variables": [
                "{[Skill06[0]]}"
              ]
            },
            "HitSplit": 0.15,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
              "displayLines": "{[Skill06[0]]}",
              "constants": [],
              "variables": [
                "{[Skill06[0]]}"
              ]
            },
            "HitSplit": 0.15,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
              "displayLines": "{[Skill06[0]]}",
              "constants": [],
              "variables": [
                "{[Skill06[0]]}"
              ]
            },
            "HitSplit": 0.15,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
              "displayLines": "{[Skill06[0]]}",
              "constants": [],
              "variables": [
                "{[Skill06[0]]}"
              ]
            },
            "HitSplit": 0.15,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
              "displayLines": "{[Skill06[0]]}",
              "constants": [],
              "variables": [
                "{[Skill06[0]]}"
              ]
            },
            "HitSplit": 0.25,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-63015955\">Enemy_W2_Yanqing_StandBySwordEffect</a>"
        },
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
                "modifier": "<a class=\"gModGreen\" id=\"1108547427\">Enemy_W2_Yanqing_PassiveAbilityMainBattle</a>"
              },
              {
                "name": "Compare: Variable",
                "value1": "W2_Yanqing_00_MainBattle_Flag",
                "compareType": "=",
                "value2": 0,
                "contextScope": "TargetEntity"
              }
            ]
          },
          "passed": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "scope": "TargetEntity",
              "variableName": "W2_Yanqing_00_MainBattle_Flag",
              "value": 1
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "2004023_Monster_W2_Yanqing_Ability06_Part01": {
      "fileName": "2004023_Monster_W2_Yanqing_Ability06_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W2_Yanqing_Ability06_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "2004023_Monster_W2_Yanqing_Ability05_Part02": {
      "fileName": "2004023_Monster_W2_Yanqing_Ability05_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1322114606\">Enemy_W2_Yanqing_MainBattle_Perform03</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-273389019\">Enemy_W2_Yanqing_Ability05_Charge</a>"
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "2004023_Monster_W2_Yanqing_Ability05_Part01": {
      "fileName": "2004023_Monster_W2_Yanqing_Ability05_Part01",
      "childAbilityList": [
        "2004023_Monster_W2_Yanqing_Ability05_Part01",
        "2004023_Monster_W2_Yanqing_Ability05_Part02",
        "2004023_Monster_W2_Yanqing_Ability05_Camera"
      ],
      "skillTrigger": "Skill05",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W2_Yanqing_Ability05_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "2004023_Monster_W2_Yanqing_Ability04_Part02": {
      "fileName": "2004023_Monster_W2_Yanqing_Ability04_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-63015955\">Enemy_W2_Yanqing_StandBySwordEffect</a>"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] ({[Skill04[0]]}) || Constants[0] (0.3) || MUL || RETURN",
              "displayLines": "({[Skill04[0]]} * 0.3)",
              "constants": [
                0.3
              ],
              "variables": [
                "{[Skill04[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "30%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] ({[Skill04[1]]}) || Constants[0] (0.3) || MUL || RETURN",
              "displayLines": "({[Skill04[1]]} * 0.3)",
              "constants": [
                0.3
              ],
              "variables": [
                "{[Skill04[1]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "30%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] ({[Skill04[0]]}) || Constants[0] (0.3) || MUL || RETURN",
              "displayLines": "({[Skill04[0]]} * 0.3)",
              "constants": [
                0.3
              ],
              "variables": [
                "{[Skill04[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "30%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] ({[Skill04[1]]}) || Constants[0] (0.3) || MUL || RETURN",
              "displayLines": "({[Skill04[1]]} * 0.3)",
              "constants": [
                0.3
              ],
              "variables": [
                "{[Skill04[1]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "30%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] ({[Skill04[0]]}) || Constants[0] (0.4) || MUL || RETURN",
              "displayLines": "({[Skill04[0]]} * 0.4)",
              "constants": [
                0.4
              ],
              "variables": [
                "{[Skill04[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "40%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] ({[Skill04[1]]}) || Constants[0] (0.4) || MUL || RETURN",
              "displayLines": "({[Skill04[1]]} * 0.4)",
              "constants": [
                0.4
              ],
              "variables": [
                "{[Skill04[1]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "40%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1616456235\">Enemy_W2_Yanqing_Ability02_MarkingCountDown_2</a>[<span class=\"descriptionNumberColor\">Ready for Battle</span>]"
          },
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1616456235\">Enemy_W2_Yanqing_Ability02_MarkingCountDown_2</a>[<span class=\"descriptionNumberColor\">Ready for Battle</span>]"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1666789092\">Enemy_W2_Yanqing_Ability02_MarkingCountDown_1</a>[<span class=\"descriptionNumberColor\">Ready for Battle</span>]"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-63015955\">Enemy_W2_Yanqing_StandBySwordEffect</a>"
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "2004023_Monster_W2_Yanqing_Ability04_Part01": {
      "fileName": "2004023_Monster_W2_Yanqing_Ability04_Part01",
      "childAbilityList": [
        "2004023_Monster_W2_Yanqing_Ability04_Part01",
        "2004023_Monster_W2_Yanqing_Ability04_Part02",
        "2004023_Monster_W2_Yanqing_Ability04_Camera"
      ],
      "skillTrigger": "Skill04",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W2_Yanqing_Ability04_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target",
        "subTarget": "Blast Targets"
      },
      "references": []
    },
    "2004023_Monster_W2_Yanqing_Ability03_Part02": {
      "fileName": "2004023_Monster_W2_Yanqing_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-63015955\">Enemy_W2_Yanqing_StandBySwordEffect</a>"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] ({[Skill03[0]]}) || Constants[0] (0.2) || MUL || RETURN",
              "displayLines": "({[Skill03[0]]} * 0.2)",
              "constants": [
                0.2
              ],
              "variables": [
                "{[Skill03[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "20%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] ({[Skill03[0]]}) || Constants[0] (0.2) || MUL || RETURN",
              "displayLines": "({[Skill03[0]]} * 0.2)",
              "constants": [
                0.2
              ],
              "variables": [
                "{[Skill03[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "20%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] ({[Skill03[0]]}) || Constants[0] (0.2) || MUL || RETURN",
              "displayLines": "({[Skill03[0]]} * 0.2)",
              "constants": [
                0.2
              ],
              "variables": [
                "{[Skill03[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "20%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] ({[Skill03[0]]}) || Constants[0] (0.2) || MUL || RETURN",
              "displayLines": "({[Skill03[0]]} * 0.2)",
              "constants": [
                0.2
              ],
              "variables": [
                "{[Skill03[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "20%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] ({[Skill03[0]]}) || Constants[0] (0.2) || MUL || RETURN",
              "displayLines": "({[Skill03[0]]} * 0.2)",
              "constants": [
                0.2
              ],
              "variables": [
                "{[Skill03[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "20%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-298752594\">Standard_CTRL_Frozen</a>[<span class=\"descriptionNumberColor\">Frozen</span>]",
          "duration": {
            "operator": "Variables[0] ({[Skill03[2]]}) || RETURN",
            "displayLines": "{[Skill03[2]]}",
            "constants": [],
            "variables": [
              "{[Skill03[2]]}"
            ]
          },
          "baseChance": {
            "operator": "Variables[0] ({[Skill03[1]]}) || RETURN",
            "displayLines": "{[Skill03[1]]}",
            "constants": [],
            "variables": [
              "{[Skill03[1]]}"
            ]
          },
          "valuePerStack": {
            "Modifier_Frozen_DamagePercentage": {
              "operator": "Variables[0] ({[Skill03[3]]}) || RETURN",
              "displayLines": "{[Skill03[3]]}",
              "constants": [],
              "variables": [
                "{[Skill03[3]]}"
              ]
            }
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-63015955\">Enemy_W2_Yanqing_StandBySwordEffect</a>"
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "2004023_Monster_W2_Yanqing_Ability03_Part01": {
      "fileName": "2004023_Monster_W2_Yanqing_Ability03_Part01",
      "childAbilityList": [
        "2004023_Monster_W2_Yanqing_Ability03_Part01",
        "2004023_Monster_W2_Yanqing_Ability03_Part02",
        "2004023_Monster_W2_Yanqing_Ability03_Camera"
      ],
      "skillTrigger": "Skill03",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W2_Yanqing_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target"
      },
      "references": []
    },
    "2004023_Monster_W2_Yanqing_Ability02_TeamFormation": {
      "fileName": "2004023_Monster_W2_Yanqing_Ability02_TeamFormation",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "2004023_Monster_W2_Yanqing_Ability02_RevealedDie": {
      "fileName": "2004023_Monster_W2_Yanqing_Ability02_RevealedDie",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Summoner}}"
            },
            "value1": "W2_Yanqing_00_SummonMinionsPerformFlag",
            "compareType": "=",
            "value2": 0,
            "contextScope": "TargetEntity"
          },
          "passed": [
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "ability": "Monster_W2_Yanqing_Ability02_TeamFormation",
              "isTrigger": true
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "scope": "TargetEntity",
              "variableName": "W2_Yanqing_00_SummonMinionsPerformFlag",
              "value": 1
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"153779397\">Enemy_W2_Yanqing_01_StandByEffect</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-770732625\">Enemy_W2_Yanqing_01_SwordPowerUp_StandByEffect</a>"
        },
        {
          "name": "Remove Modifier Behavior Flag(s)",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "flagNames": []
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-237425029\">StanceBreakState_Effect</a>"
        },
        {
          "name": "Mark Entity For Immediate Death",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "Force Entity Death",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "Remove from Team Target Grouping",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "stayInTeam": false
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Enemy Team All}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": "=",
            "value2": 0,
            "conditions": {
              "name": "Has Flag",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "flagName": "Break"
            }
          },
          "passed": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "scope": "TargetEntity",
              "variableName": "W2_Yanqing_00_SummonMinionsPerformFlag"
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "2004023_Monster_W2_Yanqing_Ability02_Insert_Over": {
      "fileName": "2004023_Monster_W2_Yanqing_Ability02_Insert_Over",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"194045592\">Enemy_W2_Yanqing_Ability02_UnknownWeakPoint_Core</a>[<span class=\"descriptionNumberColor\">Sword Formation</span>]"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-242524526\">Enemy_W2_Yanqing_Ability02_UnknownWeakPoint_Core_MainBattle</a>[<span class=\"descriptionNumberColor\">Sword Formation</span>]"
        },
        {
          "name": "Consume",
          "consumeFrom": "MaxHP",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "consumePercent": {
            "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
            "displayLines": "{[Skill02[1]]}",
            "constants": [],
            "variables": [
              "{[Skill02[1]]}"
            ]
          },
          "consumeFloor": 1
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-204617197\">Enemy_W2_Yanqing_Ability02_UnknownWeakPoint_Toast_Controller</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Minions}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": ">=",
            "value2": 1
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Minions}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": ">=",
            "value2": 1
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Minions}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": ">=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Mark Entity For Immediate Death",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              }
            },
            {
              "name": "Force Entity Death",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              }
            },
            {
              "name": "Remove from Team Target Grouping",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "stayInTeam": false
            }
          ]
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "W2_Yanqing_00_Skill02_InsertFlag"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "2004023_Monster_W2_Yanqing_Ability02_Part02": {
      "fileName": "2004023_Monster_W2_Yanqing_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Minions}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": ">=",
            "value2": 1
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Minions}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": ">=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1328693800\">Enemy_W2_Yanqing_Ability02_DuringSkill</a>"
            },
            {
              "name": "Mark Entity For Immediate Death",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              }
            },
            {
              "name": "Force Entity Death",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              }
            },
            {
              "name": "Remove from Team Target Grouping",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "stayInTeam": false
            }
          ]
        },
        {
          "name": "WAIT FOR",
          "condition": {
            "name": "Death Animation Completed",
            "team": "Enemy Team",
            "type": "Team Characters"
          }
        },
        {
          "name": "Create Enemies",
          "delayPercent": 0,
          "refreshPositions": false,
          "enemyList": [
            {
              "name": "Create Enemy from Custom",
              "value": "W2_Yanqing_00_Skill02_SummonID01",
              "summonLocation": "BeforeCaster"
            },
            {
              "name": "Create Enemy from Custom",
              "value": "W2_Yanqing_00_Skill02_SummonID01",
              "summonLocation": "AfterCaster"
            }
          ]
        },
        {
          "name": "Create Enemies",
          "delayPercent": 0.5,
          "enemyList": [
            {
              "name": "Create Enemy from Custom",
              "value": "W2_Yanqing_00_Skill02_SummonID02",
              "summonLocation": "First"
            },
            {
              "name": "Create Enemy from Custom",
              "value": "W2_Yanqing_00_Skill02_SummonID02",
              "summonLocation": "Last"
            }
          ]
        },
        {
          "name": "Define Custom Variable with Team Count",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "variableName": "W2_Yanqing_00_Skill02_SummonNumber",
          "livingTargets": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1108547427\">Enemy_W2_Yanqing_PassiveAbilityMainBattle</a>"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-242524526\">Enemy_W2_Yanqing_Ability02_UnknownWeakPoint_Core_MainBattle</a>[<span class=\"descriptionNumberColor\">Sword Formation</span>]"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1881028391\">Enemy_W2_Yanqing_MainBattle_Fatigue</a>"
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"194045592\">Enemy_W2_Yanqing_Ability02_UnknownWeakPoint_Core</a>[<span class=\"descriptionNumberColor\">Sword Formation</span>]",
              "valuePerStack": {
                "MDF_SpeedDelta": {
                  "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
                  "displayLines": "{[Skill02[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill02[0]]}"
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1108547427\">Enemy_W2_Yanqing_PassiveAbilityMainBattle</a>"
          },
          "passed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "searchRandom": true,
              "maxTargets": 2,
              "conditions": {
                "name": "Character ID",
                "ID": "W2_Yanqing_00_Skill02_SummonID01",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "characterName": null
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2051112248\">Enemy_W2_Yanqing_Ability02_UnknownWeakPoint_01</a>[<span class=\"descriptionNumberColor\">Formation Core</span>]"
                }
              ]
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "searchRandom": true,
              "maxTargets": 2,
              "conditions": {
                "name": "Character ID",
                "ID": "W2_Yanqing_00_Skill02_SummonID02",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "characterName": null
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2084667486\">Enemy_W2_Yanqing_Ability02_UnknownWeakPoint_03</a>[<span class=\"descriptionNumberColor\">Formation Core</span>]"
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Random Chance",
                "chance": 0.33
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster's Minions}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"2095309040\">Enemy_W2_Yanqing_Ability02_UnknownWeakPoint_Unrevealed</a>",
                    "invertCondition": true
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"2051112248\">Enemy_W2_Yanqing_Ability02_UnknownWeakPoint_01</a>[<span class=\"descriptionNumberColor\">Formation Core</span>]"
                    }
                  ]
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster's Minions}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"2095309040\">Enemy_W2_Yanqing_Ability02_UnknownWeakPoint_Unrevealed</a>",
                    "invertCondition": true
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"2101445105\">Enemy_W2_Yanqing_Ability02_UnknownWeakPoint_02</a>[<span class=\"descriptionNumberColor\">Formation Core</span>]"
                    }
                  ]
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster's Minions}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 2,
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"2095309040\">Enemy_W2_Yanqing_Ability02_UnknownWeakPoint_Unrevealed</a>",
                    "invertCondition": true
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"2084667486\">Enemy_W2_Yanqing_Ability02_UnknownWeakPoint_03</a>[<span class=\"descriptionNumberColor\">Formation Core</span>]"
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Random Chance",
                    "chance": 0.5
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Caster's Minions}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"2095309040\">Enemy_W2_Yanqing_Ability02_UnknownWeakPoint_Unrevealed</a>",
                        "invertCondition": true
                      },
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"2101445105\">Enemy_W2_Yanqing_Ability02_UnknownWeakPoint_02</a>[<span class=\"descriptionNumberColor\">Formation Core</span>]"
                        }
                      ]
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Caster's Minions}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"2095309040\">Enemy_W2_Yanqing_Ability02_UnknownWeakPoint_Unrevealed</a>",
                        "invertCondition": true
                      },
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"2084667486\">Enemy_W2_Yanqing_Ability02_UnknownWeakPoint_03</a>[<span class=\"descriptionNumberColor\">Formation Core</span>]"
                        }
                      ]
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Caster's Minions}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 2,
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"2095309040\">Enemy_W2_Yanqing_Ability02_UnknownWeakPoint_Unrevealed</a>",
                        "invertCondition": true
                      },
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"2051112248\">Enemy_W2_Yanqing_Ability02_UnknownWeakPoint_01</a>[<span class=\"descriptionNumberColor\">Formation Core</span>]"
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Caster's Minions}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"2095309040\">Enemy_W2_Yanqing_Ability02_UnknownWeakPoint_Unrevealed</a>",
                        "invertCondition": true
                      },
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"2084667486\">Enemy_W2_Yanqing_Ability02_UnknownWeakPoint_03</a>[<span class=\"descriptionNumberColor\">Formation Core</span>]"
                        }
                      ]
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Caster's Minions}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"2095309040\">Enemy_W2_Yanqing_Ability02_UnknownWeakPoint_Unrevealed</a>",
                        "invertCondition": true
                      },
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"2051112248\">Enemy_W2_Yanqing_Ability02_UnknownWeakPoint_01</a>[<span class=\"descriptionNumberColor\">Formation Core</span>]"
                        }
                      ]
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Caster's Minions}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 2,
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"2095309040\">Enemy_W2_Yanqing_Ability02_UnknownWeakPoint_Unrevealed</a>",
                        "invertCondition": true
                      },
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"2101445105\">Enemy_W2_Yanqing_Ability02_UnknownWeakPoint_02</a>[<span class=\"descriptionNumberColor\">Formation Core</span>]"
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
          "name": "Define Custom Variable",
          "variableName": "W2_Yanqing_00_Skill02_AccumulateRevealed",
          "value": 0
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1108547427\">Enemy_W2_Yanqing_PassiveAbilityMainBattle</a>"
          },
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-204617197\">Enemy_W2_Yanqing_Ability02_UnknownWeakPoint_Toast_Controller</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1501512671\">Enemy_W2_Yanqing_Ability02_WindToast</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"504784023\">Enemy_W2_Yanqing_Ability02_ThunderToast</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1106896946\">Enemy_W2_Yanqing_Ability02_ImaginaryToast</a>"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"805504301\">Enemy_W2_Yanqing_Ability02_AdditiveToast</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"153779397\">Enemy_W2_Yanqing_01_StandByEffect</a>"
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "2004023_Monster_W2_Yanqing_Ability02_Part01": {
      "fileName": "2004023_Monster_W2_Yanqing_Ability02_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W2_Yanqing_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "2004023_Monster_W2_Yanqing_Ability01_Part02": {
      "fileName": "2004023_Monster_W2_Yanqing_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] ({[Skill01[0]]}) || Constants[0] (0.5) || MUL || RETURN",
              "displayLines": "({[Skill01[0]]} * 0.5)",
              "constants": [
                0.5
              ],
              "variables": [
                "{[Skill01[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "50%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] ({[Skill01[0]]}) || Constants[0] (0.5) || MUL || RETURN",
              "displayLines": "({[Skill01[0]]} * 0.5)",
              "constants": [
                0.5
              ],
              "variables": [
                "{[Skill01[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "50%"
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "2004023_Monster_W2_Yanqing_Ability01_Part01": {
      "fileName": "2004023_Monster_W2_Yanqing_Ability01_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W2_Yanqing_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "2004023_Monster_W2_Yanqing_PassiveAbility_BGM": {
      "fileName": "2004023_Monster_W2_Yanqing_PassiveAbility_BGM",
      "childAbilityList": [
        "2004023_Monster_W2_Yanqing_PassiveAbility_BGM"
      ],
      "skillTrigger": "Passive_BGM",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Stage Type",
                "stageType": "Challenge"
              },
              {
                "name": "Stage Type",
                "stageType": "VerseSimulation"
              },
              {
                "name": "Stage Type",
                "stageType": "StrongChallengeActivity"
              },
              {
                "name": "Stage Type",
                "stageType": "RogueRelic"
              },
              {
                "name": "Stage Type",
                "stageType": "GridFightActivity"
              }
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1298343121\">Enemy_W2_Yanqing_ResetStageBGM</a>"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1298343121\">Enemy_W2_Yanqing_ResetStageBGM</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Varying Data",
                  "target": null,
                  "variableName": "MDF_WaveIndex",
                  "value": "CurWaveIndex"
                }
              ]
            },
            {
              "eventTrigger": "New Enemy Wave",
              "execute": [
                {
                  "name": "Define Custom Variable with Varying Data",
                  "target": null,
                  "variableName": "MDF_WaveIndex2",
                  "value": "CurWaveIndex"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_WaveIndex",
                    "compareType": "NOT=",
                    "value2": {
                      "operator": "Variables[0] (MDF_WaveIndex2) || RETURN",
                      "displayLines": "MDF_WaveIndex2",
                      "constants": [],
                      "variables": [
                        "MDF_WaveIndex2"
                      ]
                    }
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "2004023_Modifiers": {
      "fileName": "2004023_Modifiers",
      "abilityType": "Char. Modifiers",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-355399980\">Monster_W2_Yanqing_RL_LowHP</a>",
          "execute": [
            {
              "eventTrigger": "HP Change [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "CurrentHP%",
                        "compareType": "<=",
                        "value2": {
                          "operator": "Variables[0] (MDF_LowHPRatio) || RETURN",
                          "displayLines": "MDF_LowHPRatio",
                          "constants": [],
                          "variables": [
                            "MDF_LowHPRatio"
                          ]
                        }
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 3
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "FinalPhase",
                      "value": 1
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "AIFlag",
                      "value": 1
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "W2_Yanqing_00_AICounter",
                      "value": 1
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                    },
                    {
                      "name": "Action Advance/Delay",
                      "advanceType": "Set",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "multiBase": 0
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "CurrentHP%",
                        "compareType": "<=",
                        "value2": 0
                      }
                    },
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_LowHPRatio"
          ],
          "latentQueue": [
            "W2_Yanqing_00_AICounter",
            "W2_Yanqing_00_AIPhase"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1982647452\">Enemy_W2_Yanqing_01_ChangePhaseDestroy</a>",
          "modifierFlags": [
            "STAT_MonsterChangePhase"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "phase": "PhaseDieSpecial"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__262387731\">Enemy_W2_Yanqing_AbilityP01_Part03SpeedUp</a>",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDFlat</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_SpeedDelta) || RETURN",
                    "displayLines": "MDF_SpeedDelta",
                    "constants": [],
                    "variables": [
                      "MDF_SpeedDelta"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_SpeedDelta"
          ],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2101491428\">Enemy_W2_Yanqing_IceDot</a>",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "modifierFlags": [
            "STAT_DOT"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is NOT in Auto-Battle State"
                  }
                }
              ]
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Ice",
                    "Damage": {
                      "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__138) || RETURN",
                      "displayLines": "ENEMIES_OBJECT_UNUSED__138",
                      "constants": [],
                      "variables": [
                        "ENEMIES_OBJECT_UNUSED__138"
                      ]
                    },
                    "DamageFlat": {
                      "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__140) || RETURN",
                      "displayLines": "ENEMIES_OBJECT_UNUSED__140",
                      "constants": [],
                      "variables": [
                        "ENEMIES_OBJECT_UNUSED__140"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "DOT"
                  }
                }
              ]
            },
            {
              "eventTrigger": "Custom Event",
              "execute": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Ice",
                    "Damage": {
                      "operator": "Variables[0] (DOT_TriggerRatio) || Variables[1] (ENEMIES_OBJECT_UNUSED__138) || MUL || RETURN",
                      "displayLines": "(DOT_TriggerRatio * ENEMIES_OBJECT_UNUSED__138)",
                      "constants": [],
                      "variables": [
                        "DOT_TriggerRatio",
                        "ENEMIES_OBJECT_UNUSED__138"
                      ]
                    },
                    "DamageFlat": {
                      "operator": "Variables[0] (DOT_TriggerRatio) || Variables[1] (ENEMIES_OBJECT_UNUSED__140) || MUL || RETURN",
                      "displayLines": "(DOT_TriggerRatio * ENEMIES_OBJECT_UNUSED__140)",
                      "constants": [],
                      "variables": [
                        "DOT_TriggerRatio",
                        "ENEMIES_OBJECT_UNUSED__140"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "DOT"
                  }
                }
              ]
            }
          ],
          "useEntitySnapshot": true,
          "stackLimit": 1,
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2018294690\">Enemy_W2_Yanqing_AbilityP01_ChangePhaseController</a>",
          "execute": [
            {
              "eventTrigger": "Waiting for Healing in Limbo",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-290755256\">Enemy_W2_Yanqing_Ability05_Charge_RL</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"684006930\">Enemy_W2_Yanqing_StandByEffect</a>"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "HP_Bars_Remaining",
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
                        "value1": "W2_Yanqing_00_SkillP01_InsertFlag",
                        "compareType": "=",
                        "value2": 0,
                        "contextScope": "TargetEntity"
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster's Minions}}"
                            },
                            "value1": "TeamCharacterCount",
                            "compareType": ">=",
                            "value2": 1
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster's Minions}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1982647452\">Enemy_W2_Yanqing_01_ChangePhaseDestroy</a>"
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster's Minions}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-1328693800\">Enemy_W2_Yanqing_Ability02_DuringSkill</a>"
                            },
                            {
                              "name": "Force Entity Death",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster's Minions}}"
                              }
                            }
                          ]
                        },
                        {
                          "name": "Dispel Debuffs",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "silent": true
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1404590263\">Standard_Endurance</a>"
                        },
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "W2_Yanqing_00_SkillP01_InsertFlag",
                          "value": 1
                        },
                        {
                          "name": "Set Enemy Phase",
                          "mode": "Inc"
                        },
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Monster_W2_Yanqing_AbilityP01_Insert_Part01to02",
                          "priorityTag": "EnemyPhaseChange",
                          "ownerState": "Mask_AliveOrLimbo",
                          "targetState": "Mask_AliveOrLimbo",
                          "canHitNonTargets": true,
                          "showInActionOrder": true,
                          "allowAbilityTriggers": false
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "W2_Yanqing_00_SkillP01_InsertFlag",
                        "compareType": "=",
                        "value2": 0,
                        "contextScope": "TargetEntity"
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster's Minions}}"
                            },
                            "value1": "TeamCharacterCount",
                            "compareType": ">=",
                            "value2": 1
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster's Minions}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1982647452\">Enemy_W2_Yanqing_01_ChangePhaseDestroy</a>"
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster's Minions}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-1328693800\">Enemy_W2_Yanqing_Ability02_DuringSkill</a>"
                            },
                            {
                              "name": "Force Entity Death",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster's Minions}}"
                              }
                            }
                          ]
                        },
                        {
                          "name": "Dispel Debuffs",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "silent": true
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1404590263\">Standard_Endurance</a>"
                        },
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "W2_Yanqing_00_SkillP01_InsertFlag",
                          "value": 1
                        },
                        {
                          "name": "Set Enemy Phase",
                          "mode": "Inc"
                        },
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Monster_W2_Yanqing_AbilityP01_Insert_Part02to03",
                          "priorityTag": "EnemyPhaseChange",
                          "ownerState": "Mask_AliveOrLimbo",
                          "targetState": "Mask_AliveOrLimbo",
                          "canHitNonTargets": true,
                          "showInActionOrder": true,
                          "allowAbilityTriggers": false
                        }
                      ]
                    }
                  ]
                }
              ],
              "priorityLevel": -90
            }
          ],
          "stackData": [],
          "latentQueue": [
            "W2_Yanqing_00_SkillP01_InsertFlag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-794932920\">Enemy_W2_Yanqing_AbilityP01_EnterBattleToast</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            }
          ],
          "stackData": [],
          "latentQueue": [
            "W2_Yanqing_00_SkillP01_InsertFlag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-770732625\">Enemy_W2_Yanqing_01_SwordPowerUp_StandByEffect</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2068860507\">Enemy_W2_Yanqing_SwordPowerUp</a>[<span class=\"descriptionNumberColor\">Ordeal</span>]",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-770732625\">Enemy_W2_Yanqing_01_SwordPowerUp_StandByEffect</a>"
                }
              ]
            },
            {
              "eventTrigger": "When Put in Deathstate Limbo"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;",
                  "value": 30
                },
                {
                  "name": "Reset Toughness",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "skipTeamLock": true,
                  "constantValue": 60
                }
              ]
            }
          ],
          "useEntitySnapshot": true,
          "stackData": [],
          "latentQueue": [
            "FinalPhase"
          ],
          "description": "This summon receives an enhancement and increases Max Toughness. After attacking, there is a high chance of Freezing the target.",
          "type": "Other",
          "effectName": "Ordeal",
          "statusName": "Ordeal"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-290755256\">Enemy_W2_Yanqing_Ability05_Charge_RL</a>",
          "modifierFlags": [
            "MuteHitH"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Set Hit-Class",
                  "class": "D"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-356149908\">Enemy_W2_Yanqing_Ability05_Charge_CharacterChangePhase</a>"
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Set Hit-Class",
                  "reset": true
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "W2_Yanqing_00_AICounter",
                      "value": 5
                    }
                  ],
                  "failed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "W2_Yanqing_00_AICounter",
                      "value": 20
                    }
                  ]
                },
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1666789092\">Enemy_W2_Yanqing_Ability02_MarkingCountDown_1</a>[<span class=\"descriptionNumberColor\">Ready for Battle</span>]",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "Use Aethereal Dreamflux in the next turn.",
          "type": "Other",
          "statusName": "Ready for Battle"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1616456235\">Enemy_W2_Yanqing_Ability02_MarkingCountDown_2</a>[<span class=\"descriptionNumberColor\">Ready for Battle</span>]",
          "stackData": [],
          "latentQueue": [],
          "description": "Use Aethereal Dreamflux after 2 turns",
          "type": "Other",
          "statusName": "Ready for Battle"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1560182165\">Enemy_W2_Yanqing_Ability02_Mark</a>[<span class=\"descriptionNumberColor\">Lock On</span>]",
          "modifierFlags": [
            "AttackSign",
            "RemoveWhenCasterDead"
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "Locked on by %CasterName and is the target of Aethereal Dreamflux.",
          "type": "Other",
          "effectName": "Lock On",
          "statusName": "Lock On"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1389810309\">Enemy_W2_Yanqing_Ability02_UnknownWeakPoint_Core_RL</a>[<span class=\"descriptionNumberColor\">Sword Formation</span>]",
          "modifierFlags": [
            "MuteBreak",
            "MuteHitH"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "Take Damage End [Owner]: Hit"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "action": "Protected",
                  "valueList": [
                    "Physical",
                    "Fire",
                    "Ice",
                    "Thunder",
                    "Wind",
                    "Quantum",
                    "Imaginary"
                  ]
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDFlat</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_SpeedDelta) || RETURN",
                    "displayLines": "MDF_SpeedDelta",
                    "constants": [],
                    "variables": [
                      "MDF_SpeedDelta"
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "Entity Death [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Related Summoned Entity",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1328693800\">Enemy_W2_Yanqing_Ability02_DuringSkill</a>",
                        "invertCondition": true
                      }
                    ]
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
                        "value1": "W2_Yanqing_00_Skill02_AccumulateRevealed",
                        "compareType": "<",
                        "value2": 4
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "W2_Yanqing_00_Skill02_AccumulateRevealed",
                          "value": {
                            "operator": "Variables[0] (W2_Yanqing_00_Skill02_AccumulateRevealed) || Constants[0] (1) || ADD || RETURN",
                            "displayLines": "(W2_Yanqing_00_Skill02_AccumulateRevealed + 1)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "W2_Yanqing_00_Skill02_AccumulateRevealed"
                            ]
                          }
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
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "W2_Yanqing_00_Skill02_InsertFlag",
                        "compareType": "=",
                        "value2": 0,
                        "contextScope": "TargetEntity"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "W2_Yanqing_00_Skill02_AccumulateRevealed",
                        "compareType": "=",
                        "value2": 4
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "W2_Yanqing_00_Skill02_InsertFlag",
                      "value": 1
                    },
                    {
                      "name": "Inject Ability Use",
                      "checkOverride": {
                        "name": "Condition Priority",
                        "overridePriority": "MonsterForceKill",
                        "condition": {
                          "name": "Compare: Ability Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "value1": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                          "compareType": "<=",
                          "value2": 0
                        }
                      },
                      "abilityName": "Monster_W2_Yanqing_Ability02_Insert_Over_RL",
                      "priorityTag": "EnemyChangeState",
                      "canHitNonTargets": true,
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_SpeedDelta"
          ],
          "latentQueue": [],
          "description": "Yanqing's Toughness cannot be reduced, and his SPD increases by <span class=\"descriptionNumberColor\">MDF_SpeedDelta</span>. Destroy all of Yanqing's Flying Swords to dispel this effect and cause DMG to Yanqing.",
          "type": "Other",
          "effectName": "Sword Formation",
          "statusName": "Sword Formation"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1004973880\">Enemy_W2_Yanqing_Standard_IceDamageTakenUp</a>",
          "stackType": "Replace",
          "modifierFlags": [],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "ModifierLayers",
                  "multiplier": 1
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_IceTakenRatio",
                  "value": {
                    "operator": "Variables[0] (IceTakenRatioPerLayer) || Variables[1] (ModifierLayers) || MUL || RETURN",
                    "displayLines": "(IceTakenRatioPerLayer * ModifierLayers)",
                    "constants": [],
                    "variables": [
                      "IceTakenRatioPerLayer",
                      "ModifierLayers"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">IceVulnerability</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_IceTakenRatio) || RETURN",
                    "displayLines": "MDF_IceTakenRatio",
                    "constants": [],
                    "variables": [
                      "MDF_IceTakenRatio"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "IceTakenRatioPerLayer"
          ],
          "latentQueue": [],
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1122230262\">Enemy_W2_Yanqing_Standard_Overdrive</a>[<span class=\"descriptionNumberColor\">Chilling Light</span>]",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "ModifierLayers",
                  "multiplier": 1
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_AllDamageTypeAddedRatio",
                  "value": {
                    "operator": "Variables[0] (AllDamageTypeAddedRatioPerLayer) || Variables[1] (ModifierLayers) || MUL || RETURN",
                    "displayLines": "(AllDamageTypeAddedRatioPerLayer * ModifierLayers)",
                    "constants": [],
                    "variables": [
                      "AllDamageTypeAddedRatioPerLayer",
                      "ModifierLayers"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_AllDamageTypeAddedRatio) || RETURN",
                    "displayLines": "MDF_AllDamageTypeAddedRatio",
                    "constants": [],
                    "variables": [
                      "MDF_AllDamageTypeAddedRatio"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "AllDamageTypeAddedRatioPerLayer"
          ],
          "latentQueue": [],
          "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_AllDamageTypeAddedRatio</span>. This effect can stack.",
          "type": "Buff",
          "effectName": "Chilling Light",
          "statusName": "Chilling Light",
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1198782929\">Enemy_W2_Yanqing_StandByEffect_Part03</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__640085401\">Enemy_W2_Yanqing_IF_Ability02_AdditiveToast</a>",
          "execute": [
            {
              "eventTrigger": "Action Choice Window [Owner]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"640085401\">Enemy_W2_Yanqing_IF_Ability02_AdditiveToast</a>"
                },
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "W2_Yanqing_00_SwordStep"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1771417156\">Enemy_W2_Yanqing_IF_Ability02_DuringSkill</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-881909644\">Enemy_W2_Yanqing_IF_Ability02_AIController</a>",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1616456235\">Enemy_W2_Yanqing_Ability02_MarkingCountDown_2</a>[<span class=\"descriptionNumberColor\">Ready for Battle</span>]"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1616456235\">Enemy_W2_Yanqing_Ability02_MarkingCountDown_2</a>[<span class=\"descriptionNumberColor\">Ready for Battle</span>]"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1666789092\">Enemy_W2_Yanqing_Ability02_MarkingCountDown_1</a>[<span class=\"descriptionNumberColor\">Ready for Battle</span>]"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "AIFlag",
                  "value": 1
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-129923965\">MoreOneMorePerTurn</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1560182165\">Enemy_W2_Yanqing_Ability02_Mark</a>[<span class=\"descriptionNumberColor\">Lock On</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1666789092\">Enemy_W2_Yanqing_Ability02_MarkingCountDown_1</a>[<span class=\"descriptionNumberColor\">Ready for Battle</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1616456235\">Enemy_W2_Yanqing_Ability02_MarkingCountDown_2</a>[<span class=\"descriptionNumberColor\">Ready for Battle</span>]"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__480566743\">Enemy_W2_Yanqing_IF_Ability02_WeakPointProtect_Core</a>",
          "modifierFlags": [
            "MuteBreak",
            "MuteHitH"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "Take Damage End [Owner]: Hit"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "action": "Protected",
                  "valueList": [
                    "Physical",
                    "Fire",
                    "Ice",
                    "Thunder",
                    "Wind",
                    "Quantum",
                    "Imaginary"
                  ]
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDFlat</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_SpeedDelta) || RETURN",
                    "displayLines": "MDF_SpeedDelta",
                    "constants": [],
                    "variables": [
                      "MDF_SpeedDelta"
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "Entity Death [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target Count",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Enemy Team All}}"
                    },
                    "compareType": "=",
                    "value2": 1,
                    "livingTargets": true
                  },
                  "passed": [
                    {
                      "name": "Clear Weaknesses",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "action": "Protected",
                      "valueList": [
                        "Physical",
                        "Fire",
                        "Ice",
                        "Thunder",
                        "Wind",
                        "Quantum",
                        "Imaginary"
                      ]
                    },
                    {
                      "name": "Action Advance/Delay",
                      "advanceType": "Set",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "multiBase": 0
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "AIFlag",
                      "value": 101
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 2
                      },
                      "passed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-129923965\">MoreOneMorePerTurn</a>"
                        }
                      ]
                    },
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_SpeedDelta",
            "MDF_StanceDamage"
          ],
          "latentQueue": [
            "W2_Yanqing_00_SwordStep"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-121296599\">Enemy_W2_Yanqing_IF_Ability02_SwordWeakPointLogic02</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Lock HP",
                  "threshold": 1
                },
                {
                  "name": "Clear Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueList": [
                    "Physical",
                    "Fire",
                    "Ice",
                    "Thunder",
                    "Wind",
                    "Quantum",
                    "Imaginary"
                  ]
                },
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueList": []
                },
                {
                  "name": "Clear Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "action": "Attach",
                  "valueList": [
                    "Physical",
                    "Fire",
                    "Ice",
                    "Thunder",
                    "Wind",
                    "Quantum",
                    "Imaginary"
                  ]
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1068759103\">SwitchWeakPoint</a>"
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "W2_Yanqing_W2_Yanqing_IF_AttackFlag"
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "W2_Yanqing_IF_SwordNumber",
                  "value": 4
                }
              ]
            },
            {
              "eventTrigger": "Being Attacked End [Owner]",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "W2_Yanqing_W2_Yanqing_IF_AttackFlag",
                  "value": 1
                }
              ]
            },
            {
              "eventTrigger": "Attack Action Completed [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "W2_Yanqing_IF_SwordNumber",
                    "compareType": "=",
                    "value2": 0,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster's Summoner}}"
                      },
                      "variableName": "W2_Yanqing_00_SwordStep",
                      "value": 2
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W2_Yanqing_Ability02_RevealedDie",
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "priorityTag": "EnemyChangeState",
                      "canHitNonTargets": true,
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "W2_Yanqing_W2_Yanqing_IF_AttackFlag"
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Anyone]: End",
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
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "W2_Yanqing_W2_Yanqing_IF_AttackFlag",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "TargetEntity"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "W2_Yanqing_W2_Yanqing_IF_AttackFlag"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "W2_Yanqing_IF_SwordNumber",
                        "compareType": ">",
                        "value2": 0,
                        "contextScope": "TargetEntity"
                      },
                      "passed": [
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Player Team All}}"
                          },
                          "searchRandom": true,
                          "maxTargets": 1,
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-1368237020\">Enemy_W2_Yanqing_IF_Ability02_SwitchInit</a>"
                          },
                          "ifTargetFound": [
                            {
                              "name": "Inject Ability Use",
                              "abilityName": "Monster_W2_Yanqing_IF_Ability02_Insert_Change01",
                              "abilitySource": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "abilityTarget": {
                                "name": "Target Name",
                                "target": "{{Summoner of Modifier Holder}}"
                              },
                              "priorityTag": "EnemyChangeState",
                              "canHitNonTargets": true,
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
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Summoner of Modifier Holder}}"
                    },
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Action Advance/Delay",
                      "advanceType": "Set",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "multiBase": 999
                    }
                  ],
                  "failed": [
                    {
                      "name": "Action Advance/Delay",
                      "advanceType": "Set",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "multiBase": 999
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All(with Unselectable)}}"
                  },
                  "variableName": "W2_Yanqing_IF_SwordNumber",
                  "context": "TargetEntity",
                  "value": -1,
                  "max": 4
                }
              ]
            },
            {
              "eventTrigger": "End Broken State [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All(with Unselectable)}}"
                  },
                  "variableName": "W2_Yanqing_IF_SwordNumber",
                  "context": "TargetEntity",
                  "value": 1,
                  "max": 4
                }
              ]
            },
            {
              "eventTrigger": "When Modifier is Added [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Modifier Was",
                        "modifier": "<a class=\"gModGreen\" id=\"-1604800448\">Enemy_W2_Yanqing_IF_Ability02_SwitchWeakPoint00</a>"
                      },
                      {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-522583383\">SwitchWeakPoint00</a>"
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "W2_Yanqing_W2_Yanqing_IF_AttackFlag"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1604800448\">Enemy_W2_Yanqing_IF_Ability02_SwitchWeakPoint00</a>"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Modifier Was",
                        "modifier": "<a class=\"gModGreen\" id=\"-1588022829\">Enemy_W2_Yanqing_IF_Ability02_SwitchWeakPoint01</a>"
                      },
                      {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-539361002\">SwitchWeakPoint01</a>"
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "W2_Yanqing_W2_Yanqing_IF_AttackFlag"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1588022829\">Enemy_W2_Yanqing_IF_Ability02_SwitchWeakPoint01</a>"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Modifier Was",
                        "modifier": "<a class=\"gModGreen\" id=\"-1554467591\">Enemy_W2_Yanqing_IF_Ability02_SwitchWeakPoint03</a>"
                      },
                      {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-572916240\">SwitchWeakPoint03</a>"
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "W2_Yanqing_W2_Yanqing_IF_AttackFlag"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1554467591\">Enemy_W2_Yanqing_IF_Ability02_SwitchWeakPoint03</a>"
                    }
                  ]
                }
              ]
            }
          ],
          "modifierFunctions": [
            {
              "name": "CharacterFunctions",
              "functionName": "<a class=\"gTempYellow\" id=\"fun__-1068759103\">SwitchWeakPoint</a>",
              "parse": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target Count",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Enemy Team All}}"
                    },
                    "compareType": ">=",
                    "value2": 1,
                    "livingTargets": true
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "ContextModifier",
                      "variableName": "CurrentWeakPoint",
                      "value": {
                        "operator": "Variables[0] (CurrentWeakPoint) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(CurrentWeakPoint + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "CurrentWeakPoint"
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "CurrentWeakPoint",
                        "compareType": "=",
                        "value2": 4,
                        "contextScope": "ContextModifier"
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "scope": "ContextModifier",
                          "variableName": "CurrentWeakPoint",
                          "value": 0
                        }
                      ]
                    },
                    {
                      "name": "Clear Weaknesses",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "action": "Attach",
                      "valueList": [
                        "Thunder",
                        "Wind",
                        "Imaginary",
                        "Quantum"
                      ]
                    },
                    {
                      "name": "SWITCH",
                      "switchValue": {
                        "operator": "Variables[0] (CurrentWeakPoint) || RETURN",
                        "displayLines": "CurrentWeakPoint",
                        "constants": [],
                        "variables": [
                          "CurrentWeakPoint"
                        ]
                      },
                      "caseEvents": [
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 0,
                          "execute": [
                            {
                              "name": "Implant Weaknesses",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "element": "Wind"
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 1,
                          "execute": [
                            {
                              "name": "Implant Weaknesses",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "element": "Lightning"
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 2,
                          "execute": [
                            {
                              "name": "Implant Weaknesses",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "element": "Imaginary"
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 3,
                          "execute": [
                            {
                              "name": "Implant Weaknesses",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "element": "Quantum"
                            }
                          ]
                        }
                      ],
                      "defaultEvents": []
                    }
                  ]
                }
              ]
            },
            {
              "name": "CharacterFunctions",
              "functionName": "<a class=\"gTempYellow\" id=\"fun__-522583383\">SwitchWeakPoint00</a>",
              "parse": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target Count",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Enemy Team All}}"
                    },
                    "compareType": ">=",
                    "value2": 1,
                    "livingTargets": true
                  },
                  "passed": [
                    {
                      "name": "SWITCH",
                      "switchValue": {
                        "operator": "Variables[0] (CurrentWeakPoint) || RETURN",
                        "displayLines": "CurrentWeakPoint",
                        "constants": [],
                        "variables": [
                          "CurrentWeakPoint"
                        ]
                      },
                      "caseEvents": [
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 0,
                          "execute": [
                            {
                              "name": "Clear Weaknesses",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "action": "Attach",
                              "valueList": [
                                "Wind"
                              ]
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 1,
                          "execute": [
                            {
                              "name": "Clear Weaknesses",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "action": "Attach",
                              "valueList": [
                                "Thunder"
                              ]
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 2,
                          "execute": [
                            {
                              "name": "Clear Weaknesses",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "action": "Attach",
                              "valueList": [
                                "Imaginary"
                              ]
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 3,
                          "execute": [
                            {
                              "name": "Clear Weaknesses",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "action": "Attach",
                              "valueList": [
                                "Quantum"
                              ]
                            }
                          ]
                        }
                      ],
                      "defaultEvents": []
                    }
                  ]
                }
              ]
            },
            {
              "name": "CharacterFunctions",
              "functionName": "<a class=\"gTempYellow\" id=\"fun__-539361002\">SwitchWeakPoint01</a>",
              "parse": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target Count",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Enemy Team All}}"
                    },
                    "compareType": ">=",
                    "value2": 1,
                    "livingTargets": true
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "ContextModifier",
                      "variableName": "CurrentWeakPoint",
                      "value": {
                        "operator": "Variables[0] (CurrentWeakPoint) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(CurrentWeakPoint + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "CurrentWeakPoint"
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "CurrentWeakPoint",
                        "compareType": "=",
                        "value2": 4,
                        "contextScope": "ContextModifier"
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "scope": "ContextModifier",
                          "variableName": "CurrentWeakPoint",
                          "value": 0
                        }
                      ]
                    },
                    {
                      "name": "SWITCH",
                      "switchValue": {
                        "operator": "Variables[0] (CurrentWeakPoint) || RETURN",
                        "displayLines": "CurrentWeakPoint",
                        "constants": [],
                        "variables": [
                          "CurrentWeakPoint"
                        ]
                      },
                      "caseEvents": [
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 0,
                          "execute": [
                            {
                              "name": "Clear Weaknesses",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "action": "Attach",
                              "valueList": [
                                "Quantum"
                              ]
                            },
                            {
                              "name": "Implant Weaknesses",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "element": "Wind"
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 1,
                          "execute": [
                            {
                              "name": "Clear Weaknesses",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "action": "Attach",
                              "valueList": [
                                "Wind"
                              ]
                            },
                            {
                              "name": "Implant Weaknesses",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "element": "Lightning"
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 2,
                          "execute": [
                            {
                              "name": "Clear Weaknesses",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "action": "Attach",
                              "valueList": [
                                "Thunder"
                              ]
                            },
                            {
                              "name": "Implant Weaknesses",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "element": "Imaginary"
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 3,
                          "execute": [
                            {
                              "name": "Clear Weaknesses",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "action": "Attach",
                              "valueList": [
                                "Imaginary"
                              ]
                            },
                            {
                              "name": "Implant Weaknesses",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "element": "Quantum"
                            }
                          ]
                        }
                      ],
                      "defaultEvents": []
                    }
                  ]
                }
              ]
            },
            {
              "name": "CharacterFunctions",
              "functionName": "<a class=\"gTempYellow\" id=\"fun__-572916240\">SwitchWeakPoint03</a>",
              "parse": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target Count",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Enemy Team All}}"
                    },
                    "compareType": ">=",
                    "value2": 1,
                    "livingTargets": true
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "ContextModifier",
                      "variableName": "CurrentWeakPoint",
                      "value": {
                        "operator": "Variables[0] (CurrentWeakPoint) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(CurrentWeakPoint + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "CurrentWeakPoint"
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "CurrentWeakPoint",
                        "compareType": "=",
                        "value2": 4,
                        "contextScope": "ContextModifier"
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "scope": "ContextModifier",
                          "variableName": "CurrentWeakPoint",
                          "value": 0
                        }
                      ]
                    },
                    {
                      "name": "SWITCH",
                      "switchValue": {
                        "operator": "Variables[0] (CurrentWeakPoint) || RETURN",
                        "displayLines": "CurrentWeakPoint",
                        "constants": [],
                        "variables": [
                          "CurrentWeakPoint"
                        ]
                      },
                      "caseEvents": [
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 0,
                          "execute": [
                            {
                              "name": "Implant Weaknesses",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "element": "Wind"
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 1,
                          "execute": [
                            {
                              "name": "Implant Weaknesses",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "element": "Lightning"
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 2,
                          "execute": [
                            {
                              "name": "Implant Weaknesses",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "element": "Imaginary"
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 3,
                          "execute": [
                            {
                              "name": "Implant Weaknesses",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "element": "Quantum"
                            }
                          ]
                        }
                      ],
                      "defaultEvents": []
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__586672581\">Enemy_W2_Yanqing_IF_Ability02_SwordWeakPoint02</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-60247690\">Enemy_W2_Yanqing_IF_Ability02_SwordWeakPointTag_Secret_Show</a>",
          "execute": [
            {
              "eventTrigger": "When Losing Modifier [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1210540257\">Enemy_W2_Yanqing_IF_Ability02_SwordWeakPointTag01_Secret</a>"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-32322596\">Enemy_W2_Yanqing_IF_Ability02_SwordWeakPointTag02_Secret</a>"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1561049731\">Enemy_W2_Yanqing_IF_Ability02_SwordWeakPointTag03_Secret</a>"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-886573966\">Enemy_W2_Yanqing_IF_Ability02_SwordWeakPointTag04_Secret</a>"
                      }
                    ],
                    "invertCondition": true
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-886573966\">Enemy_W2_Yanqing_IF_Ability02_SwordWeakPointTag04_Secret</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-60247690\">Enemy_W2_Yanqing_IF_Ability02_SwordWeakPointTag_Secret_Show</a>"
                }
              ]
            },
            {
              "eventTrigger": "Take Damage Start [Owner]: Hit",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Damage Type/Element",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "list": [
                          "Quantum"
                        ]
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Clear Weaknesses",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "action": "Secret",
                      "valueList": [
                        "Quantum"
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-451920887\">Enemy_W2_Yanqing_IF_Ability02_SwordWeakPointTag04</a>"
                    },
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "W2_Yanqing_00_SwordStep"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1561049731\">Enemy_W2_Yanqing_IF_Ability02_SwordWeakPointTag03_Secret</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-60247690\">Enemy_W2_Yanqing_IF_Ability02_SwordWeakPointTag_Secret_Show</a>"
                }
              ]
            },
            {
              "eventTrigger": "Take Damage Start [Owner]: Hit",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Damage Type/Element",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "list": [
                          "Imaginary"
                        ]
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Clear Weaknesses",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "action": "Secret",
                      "valueList": [
                        "Imaginary"
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-435143268\">Enemy_W2_Yanqing_IF_Ability02_SwordWeakPointTag03</a>"
                    },
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "W2_Yanqing_00_SwordStep"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-32322596\">Enemy_W2_Yanqing_IF_Ability02_SwordWeakPointTag02_Secret</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-60247690\">Enemy_W2_Yanqing_IF_Ability02_SwordWeakPointTag_Secret_Show</a>"
                }
              ]
            },
            {
              "eventTrigger": "Take Damage Start [Owner]: Hit",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Damage Type/Element",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "list": [
                          "Lightning"
                        ]
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Clear Weaknesses",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "action": "Secret",
                      "valueList": [
                        "Thunder"
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-418365649\">Enemy_W2_Yanqing_IF_Ability02_SwordWeakPointTag02</a>"
                    },
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "W2_Yanqing_00_SwordStep"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1210540257\">Enemy_W2_Yanqing_IF_Ability02_SwordWeakPointTag01_Secret</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-60247690\">Enemy_W2_Yanqing_IF_Ability02_SwordWeakPointTag_Secret_Show</a>"
                }
              ]
            },
            {
              "eventTrigger": "Take Damage Start [Owner]: Hit",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Damage Type/Element",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "list": [
                          "Wind"
                        ]
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Clear Weaknesses",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "action": "Secret",
                      "valueList": [
                        "Wind"
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-401588030\">Enemy_W2_Yanqing_IF_Ability02_SwordWeakPointTag01</a>"
                    },
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "W2_Yanqing_00_SwordStep"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-451920887\">Enemy_W2_Yanqing_IF_Ability02_SwordWeakPointTag04</a>",
          "stackData": [],
          "latentQueue": [
            "W2_Yanqing_00_SwordStep"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-435143268\">Enemy_W2_Yanqing_IF_Ability02_SwordWeakPointTag03</a>",
          "stackData": [],
          "latentQueue": [
            "W2_Yanqing_00_SwordStep"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-418365649\">Enemy_W2_Yanqing_IF_Ability02_SwordWeakPointTag02</a>",
          "stackData": [],
          "latentQueue": [
            "W2_Yanqing_00_SwordStep"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-401588030\">Enemy_W2_Yanqing_IF_Ability02_SwordWeakPointTag01</a>",
          "stackData": [],
          "latentQueue": [
            "W2_Yanqing_00_SwordStep"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-234099207\">Enemy_W2_Yanqing_IF_Ability02_PartTag02</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-284432064\">Enemy_W2_Yanqing_IF_Ability02_PartTag01</a>",
          "execute": [
            {
              "eventTrigger": "Ability Use [Anyone]: Start",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__633075881\">Enemy_W2_Yanqing_IF_Ability02_SwordWeakPointLogic01_Secret</a>",
          "stackType": "Multiple",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Lock HP",
                  "threshold": 1
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1068759103\">SwitchWeakPoint</a>"
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "W2_Yanqing_W2_Yanqing_IF_AttackFlag"
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "W2_Yanqing_IF_SwordNumber",
                  "value": 4
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All(with Unselectable)}}"
                  },
                  "variableName": "W2_Yanqing_IF_SwordNumber",
                  "context": "TargetEntity",
                  "value": -1,
                  "max": 4
                },
                {
                  "name": "Clear Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueList": [
                    "Physical",
                    "Fire",
                    "Ice",
                    "Thunder",
                    "Wind",
                    "Quantum",
                    "Imaginary"
                  ]
                },
                {
                  "name": "Clear Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "action": "Attach",
                  "valueList": [
                    "Physical",
                    "Fire",
                    "Ice",
                    "Thunder",
                    "Wind",
                    "Quantum",
                    "Imaginary"
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "scope": "ContextModifier",
                  "variableName": "ChangeWeakPointFlag",
                  "value": 1
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "W2_Yanqing_IF_SwordNumber",
                    "compareType": "=",
                    "value2": 0,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster's Summoner}}"
                      },
                      "variableName": "W2_Yanqing_00_SwordStep",
                      "value": 2
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1368237020\">Enemy_W2_Yanqing_IF_Ability02_SwitchInit</a>"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Monster_W2_Yanqing_IF_Ability02_Insert_Change01",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Summoner of Modifier Holder}}"
                          },
                          "priorityTag": "EnemyChangeState",
                          "canHitNonTargets": true,
                          "allowAbilityTriggers": false
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1368237020\">Enemy_W2_Yanqing_IF_Ability02_SwitchInit</a>"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Monster_W2_Yanqing_IF_Ability02_Insert_Change01",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Summoner of Modifier Holder}}"
                          },
                          "priorityTag": "EnemyChangeState",
                          "canHitNonTargets": true,
                          "allowAbilityTriggers": false
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "End Broken State [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "variableName": "W2_Yanqing_IF_SwordNumber",
                  "context": "TargetEntity",
                  "value": 1,
                  "max": 4
                }
              ]
            },
            {
              "eventTrigger": "When Modifier is Added [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Modifier Was",
                        "modifier": "<a class=\"gModGreen\" id=\"-543718560\">Enemy_W2_Yanqing_IF_Ability02_SwitchWeakPoint</a>"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "ChangeWeakPointFlag",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "ContextModifier"
                      },
                      {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "scope": "ContextModifier",
                      "variableName": "ChangeWeakPointFlag",
                      "value": 0
                    },
                    {
                      "name": "Clear Weaknesses",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "valueList": [
                        "Physical",
                        "Fire",
                        "Ice",
                        "Thunder",
                        "Wind",
                        "Quantum",
                        "Imaginary"
                      ]
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{All Team Members(Exclude Self)}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Monster Rank",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "compareType": "<=",
                            "value2": 2
                          },
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "value1": "Target__Toughness",
                            "compareType": ">",
                            "value2": 0
                          }
                        ]
                      },
                      "ifTargetFound": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-401588030\">Enemy_W2_Yanqing_IF_Ability02_SwordWeakPointTag01</a>"
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-401588030\">Enemy_W2_Yanqing_IF_Ability02_SwordWeakPointTag01</a>"
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"209334766\">Enemy_W2_Yanqing_IF_Ability02_NewWeakPoint</a>"
                            }
                          ]
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-418365649\">Enemy_W2_Yanqing_IF_Ability02_SwordWeakPointTag02</a>"
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-418365649\">Enemy_W2_Yanqing_IF_Ability02_SwordWeakPointTag02</a>"
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"209334766\">Enemy_W2_Yanqing_IF_Ability02_NewWeakPoint</a>"
                            }
                          ]
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-435143268\">Enemy_W2_Yanqing_IF_Ability02_SwordWeakPointTag03</a>"
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-435143268\">Enemy_W2_Yanqing_IF_Ability02_SwordWeakPointTag03</a>"
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"209334766\">Enemy_W2_Yanqing_IF_Ability02_NewWeakPoint</a>"
                            }
                          ]
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-451920887\">Enemy_W2_Yanqing_IF_Ability02_SwordWeakPointTag04</a>"
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-451920887\">Enemy_W2_Yanqing_IF_Ability02_SwordWeakPointTag04</a>"
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"209334766\">Enemy_W2_Yanqing_IF_Ability02_NewWeakPoint</a>"
                            }
                          ]
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-1210540257\">Enemy_W2_Yanqing_IF_Ability02_SwordWeakPointTag01_Secret</a>"
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-1210540257\">Enemy_W2_Yanqing_IF_Ability02_SwordWeakPointTag01_Secret</a>"
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"209334766\">Enemy_W2_Yanqing_IF_Ability02_NewWeakPoint</a>"
                            }
                          ]
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-32322596\">Enemy_W2_Yanqing_IF_Ability02_SwordWeakPointTag02_Secret</a>"
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-32322596\">Enemy_W2_Yanqing_IF_Ability02_SwordWeakPointTag02_Secret</a>"
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"209334766\">Enemy_W2_Yanqing_IF_Ability02_NewWeakPoint</a>"
                            }
                          ]
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-1561049731\">Enemy_W2_Yanqing_IF_Ability02_SwordWeakPointTag03_Secret</a>"
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-1561049731\">Enemy_W2_Yanqing_IF_Ability02_SwordWeakPointTag03_Secret</a>"
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"209334766\">Enemy_W2_Yanqing_IF_Ability02_NewWeakPoint</a>"
                            }
                          ]
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-886573966\">Enemy_W2_Yanqing_IF_Ability02_SwordWeakPointTag04_Secret</a>"
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-886573966\">Enemy_W2_Yanqing_IF_Ability02_SwordWeakPointTag04_Secret</a>"
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"209334766\">Enemy_W2_Yanqing_IF_Ability02_NewWeakPoint</a>"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Summoner of Modifier Holder}}"
                        },
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Action Advance/Delay",
                          "advanceType": "Set",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "multiBase": 999
                        }
                      ],
                      "failed": [
                        {
                          "name": "Action Advance/Delay",
                          "advanceType": "Set",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "multiBase": 999
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"209334766\">Enemy_W2_Yanqing_IF_Ability02_NewWeakPoint</a>"
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1068759103\">SwitchWeakPoint</a>"
                    }
                  ]
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-543718560\">Enemy_W2_Yanqing_IF_Ability02_SwitchWeakPoint</a>"
                }
              ]
            }
          ],
          "modifierFunctions": [
            {
              "name": "CharacterFunctions",
              "functionName": "<a class=\"gTempYellow\" id=\"fun__-1068759103\">SwitchWeakPoint</a>",
              "parse": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target Count",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Enemy Team All}}"
                    },
                    "compareType": ">=",
                    "value2": 1,
                    "livingTargets": true
                  },
                  "passed": [
                    {
                      "name": "Clear Weaknesses",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "action": "Attach",
                      "valueList": [
                        "Thunder",
                        "Wind",
                        "Imaginary",
                        "Quantum"
                      ]
                    },
                    {
                      "name": "Clear Weaknesses",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "valueList": [
                        "Thunder",
                        "Wind",
                        "Imaginary",
                        "Quantum"
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-401588030\">Enemy_W2_Yanqing_IF_Ability02_SwordWeakPointTag01</a>"
                      },
                      "passed": [
                        {
                          "name": "Implant Weaknesses",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "element": "Wind"
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-418365649\">Enemy_W2_Yanqing_IF_Ability02_SwordWeakPointTag02</a>"
                      },
                      "passed": [
                        {
                          "name": "Implant Weaknesses",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "element": "Lightning"
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-435143268\">Enemy_W2_Yanqing_IF_Ability02_SwordWeakPointTag03</a>"
                      },
                      "passed": [
                        {
                          "name": "Implant Weaknesses",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "element": "Imaginary"
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-451920887\">Enemy_W2_Yanqing_IF_Ability02_SwordWeakPointTag04</a>"
                      },
                      "passed": [
                        {
                          "name": "Implant Weaknesses",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "element": "Quantum"
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1210540257\">Enemy_W2_Yanqing_IF_Ability02_SwordWeakPointTag01_Secret</a>"
                      },
                      "passed": [
                        {
                          "name": "Implant Weaknesses",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "element": "Wind"
                        },
                        {
                          "name": "Modify Weaknesses",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "valueList": [
                            "Wind"
                          ],
                          "valueListHidden": [
                            "Wind"
                          ]
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-32322596\">Enemy_W2_Yanqing_IF_Ability02_SwordWeakPointTag02_Secret</a>"
                      },
                      "passed": [
                        {
                          "name": "Implant Weaknesses",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "element": "Lightning"
                        },
                        {
                          "name": "Modify Weaknesses",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "valueList": [
                            "Thunder"
                          ],
                          "valueListHidden": [
                            "Thunder"
                          ]
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1561049731\">Enemy_W2_Yanqing_IF_Ability02_SwordWeakPointTag03_Secret</a>"
                      },
                      "passed": [
                        {
                          "name": "Implant Weaknesses",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "element": "Imaginary"
                        },
                        {
                          "name": "Modify Weaknesses",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "valueList": [
                            "Imaginary"
                          ],
                          "valueListHidden": [
                            "Imaginary"
                          ]
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-886573966\">Enemy_W2_Yanqing_IF_Ability02_SwordWeakPointTag04_Secret</a>"
                      },
                      "passed": [
                        {
                          "name": "Implant Weaknesses",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "element": "Quantum"
                        },
                        {
                          "name": "Modify Weaknesses",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "valueList": [
                            "Quantum"
                          ],
                          "valueListHidden": [
                            "Quantum"
                          ]
                        }
                      ]
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"209334766\">Enemy_W2_Yanqing_IF_Ability02_NewWeakPoint</a>"
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "CurrentWeakPoint",
            "MDF_SwordDelayP2"
          ],
          "latentQueue": [
            "W2_Yanqing_00_SwordStep"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-171629456\">Enemy_W2_Yanqing_IF_Ability02_SwordWeakPointLogic01</a>",
          "stackType": "Multiple",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Lock HP",
                  "threshold": 1
                },
                {
                  "name": "Clear Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueList": [
                    "Physical",
                    "Fire",
                    "Ice",
                    "Thunder",
                    "Wind",
                    "Quantum",
                    "Imaginary"
                  ]
                },
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueList": []
                },
                {
                  "name": "Clear Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "action": "Attach",
                  "valueList": [
                    "Physical",
                    "Fire",
                    "Ice",
                    "Thunder",
                    "Wind",
                    "Quantum",
                    "Imaginary"
                  ]
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1068759103\">SwitchWeakPoint</a>"
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "W2_Yanqing_W2_Yanqing_IF_AttackFlag"
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "W2_Yanqing_IF_SwordNumber",
                  "value": 4
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All(with Unselectable)}}"
                  },
                  "variableName": "W2_Yanqing_IF_SwordNumber",
                  "context": "TargetEntity",
                  "value": -1,
                  "max": 4
                },
                {
                  "name": "Clear Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueList": [
                    "Physical",
                    "Fire",
                    "Ice",
                    "Thunder",
                    "Wind",
                    "Quantum",
                    "Imaginary"
                  ]
                },
                {
                  "name": "Clear Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "action": "Attach",
                  "valueList": [
                    "Physical",
                    "Fire",
                    "Ice",
                    "Thunder",
                    "Wind",
                    "Quantum",
                    "Imaginary"
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "scope": "ContextModifier",
                  "variableName": "ChangeWeakPointFlag",
                  "value": 1
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "W2_Yanqing_IF_SwordNumber",
                    "compareType": "=",
                    "value2": 0,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster's Summoner}}"
                      },
                      "variableName": "W2_Yanqing_00_SwordStep",
                      "value": 2
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1368237020\">Enemy_W2_Yanqing_IF_Ability02_SwitchInit</a>"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-284432064\">Enemy_W2_Yanqing_IF_Ability02_PartTag01</a>"
                        },
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Monster_W2_Yanqing_IF_Ability02_Insert_Change01",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Summoner of Modifier Holder}}"
                          },
                          "priorityTag": "EnemyChangeState",
                          "canHitNonTargets": true,
                          "allowAbilityTriggers": false
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1368237020\">Enemy_W2_Yanqing_IF_Ability02_SwitchInit</a>"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-284432064\">Enemy_W2_Yanqing_IF_Ability02_PartTag01</a>"
                        },
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Monster_W2_Yanqing_IF_Ability02_Insert_Change01",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Summoner of Modifier Holder}}"
                          },
                          "priorityTag": "EnemyChangeState",
                          "canHitNonTargets": true,
                          "allowAbilityTriggers": false
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "End Broken State [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "variableName": "W2_Yanqing_IF_SwordNumber",
                  "context": "TargetEntity",
                  "value": 1,
                  "max": 4
                }
              ]
            },
            {
              "eventTrigger": "When Modifier is Added [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Modifier Was",
                        "modifier": "<a class=\"gModGreen\" id=\"-543718560\">Enemy_W2_Yanqing_IF_Ability02_SwitchWeakPoint</a>"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "ChangeWeakPointFlag",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "ContextModifier"
                      },
                      {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "scope": "ContextModifier",
                      "variableName": "ChangeWeakPointFlag",
                      "value": 0
                    },
                    {
                      "name": "Clear Weaknesses",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "valueList": [
                        "Physical",
                        "Fire",
                        "Ice",
                        "Thunder",
                        "Wind",
                        "Quantum",
                        "Imaginary"
                      ]
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{All Team Members(Exclude Self)}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Monster Rank",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "compareType": "<=",
                            "value2": 2
                          },
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "value1": "Target__Toughness",
                            "compareType": ">",
                            "value2": 0
                          }
                        ]
                      },
                      "ifTargetFound": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-401588030\">Enemy_W2_Yanqing_IF_Ability02_SwordWeakPointTag01</a>"
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-401588030\">Enemy_W2_Yanqing_IF_Ability02_SwordWeakPointTag01</a>"
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"209334766\">Enemy_W2_Yanqing_IF_Ability02_NewWeakPoint</a>"
                            }
                          ]
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-418365649\">Enemy_W2_Yanqing_IF_Ability02_SwordWeakPointTag02</a>"
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-418365649\">Enemy_W2_Yanqing_IF_Ability02_SwordWeakPointTag02</a>"
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"209334766\">Enemy_W2_Yanqing_IF_Ability02_NewWeakPoint</a>"
                            }
                          ]
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-435143268\">Enemy_W2_Yanqing_IF_Ability02_SwordWeakPointTag03</a>"
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-435143268\">Enemy_W2_Yanqing_IF_Ability02_SwordWeakPointTag03</a>"
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"209334766\">Enemy_W2_Yanqing_IF_Ability02_NewWeakPoint</a>"
                            }
                          ]
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-451920887\">Enemy_W2_Yanqing_IF_Ability02_SwordWeakPointTag04</a>"
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-451920887\">Enemy_W2_Yanqing_IF_Ability02_SwordWeakPointTag04</a>"
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"209334766\">Enemy_W2_Yanqing_IF_Ability02_NewWeakPoint</a>"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "Action Advance/Delay",
                      "advanceType": "Set",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "multiBase": 999
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"209334766\">Enemy_W2_Yanqing_IF_Ability02_NewWeakPoint</a>"
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1068759103\">SwitchWeakPoint</a>"
                    }
                  ]
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-543718560\">Enemy_W2_Yanqing_IF_Ability02_SwitchWeakPoint</a>"
                }
              ]
            }
          ],
          "modifierFunctions": [
            {
              "name": "CharacterFunctions",
              "functionName": "<a class=\"gTempYellow\" id=\"fun__-1068759103\">SwitchWeakPoint</a>",
              "parse": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target Count",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Enemy Team All}}"
                    },
                    "compareType": ">=",
                    "value2": 1,
                    "livingTargets": true
                  },
                  "passed": [
                    {
                      "name": "Clear Weaknesses",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "action": "Attach",
                      "valueList": [
                        "Thunder",
                        "Wind",
                        "Imaginary",
                        "Quantum"
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-401588030\">Enemy_W2_Yanqing_IF_Ability02_SwordWeakPointTag01</a>"
                      },
                      "passed": [
                        {
                          "name": "Implant Weaknesses",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "element": "Wind"
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-418365649\">Enemy_W2_Yanqing_IF_Ability02_SwordWeakPointTag02</a>"
                      },
                      "passed": [
                        {
                          "name": "Implant Weaknesses",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "element": "Lightning"
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-435143268\">Enemy_W2_Yanqing_IF_Ability02_SwordWeakPointTag03</a>"
                      },
                      "passed": [
                        {
                          "name": "Implant Weaknesses",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "element": "Imaginary"
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-451920887\">Enemy_W2_Yanqing_IF_Ability02_SwordWeakPointTag04</a>"
                      },
                      "passed": [
                        {
                          "name": "Implant Weaknesses",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "element": "Quantum"
                        }
                      ]
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"209334766\">Enemy_W2_Yanqing_IF_Ability02_NewWeakPoint</a>"
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "CurrentWeakPoint",
            "MDF_SwordDelayP2"
          ],
          "latentQueue": [
            "W2_Yanqing_00_SwordStep"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__536339724\">Enemy_W2_Yanqing_IF_Ability02_SwordWeakPoint01</a>",
          "execute": [
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]"
            },
            {
              "eventTrigger": "Injected Ability Use [Anyone]: End"
            }
          ],
          "stackData": [],
          "latentQueue": [
            "W2_Yanqing_00_SwordStep"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__209334766\">Enemy_W2_Yanqing_IF_Ability02_NewWeakPoint</a>",
          "stackData": [],
          "latentQueue": [
            "MDF_SwordDelayP2",
            "W2_Yanqing_00_SwordStep",
            "W2_Yanqing_W2_Yanqing_IF_AttackFlag",
            "W2_Yanqing_IF_SwordNumber",
            "ChangeWeakPointFlag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1554467591\">Enemy_W2_Yanqing_IF_Ability02_SwitchWeakPoint03</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1588022829\">Enemy_W2_Yanqing_IF_Ability02_SwitchWeakPoint01</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1604800448\">Enemy_W2_Yanqing_IF_Ability02_SwitchWeakPoint00</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-543718560\">Enemy_W2_Yanqing_IF_Ability02_SwitchWeakPoint</a>",
          "stackData": [],
          "latentQueue": [
            "MonsterPhase",
            "BreakDarkTeamFlag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1368237020\">Enemy_W2_Yanqing_IF_Ability02_SwitchInit</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Ability",
                  "abilityName": "Monster_W2_Yanqing_IF_Ability02_Insert_Change01"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2138840050\">Enemy_W2_Yanqing_IF_AbilityP01_ChangePhaseController</a>",
          "execute": [
            {
              "eventTrigger": "Waiting for Healing in Limbo",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-273389019\">Enemy_W2_Yanqing_Ability05_Charge</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"684006930\">Enemy_W2_Yanqing_StandByEffect</a>"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "W2_Yanqing_00_SkillP01_InsertFlag",
                    "compareType": "=",
                    "value2": 0,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster's Minions}}"
                        },
                        "value1": "TeamCharacterCount",
                        "compareType": ">=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster's Minions}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1982647452\">Enemy_W2_Yanqing_01_ChangePhaseDestroy</a>"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster's Minions}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1328693800\">Enemy_W2_Yanqing_Ability02_DuringSkill</a>"
                        },
                        {
                          "name": "Force Entity Death",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster's Minions}}"
                          }
                        }
                      ]
                    },
                    {
                      "name": "Dispel Debuffs",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "silent": true
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1404590263\">Standard_Endurance</a>"
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "W2_Yanqing_00_SkillP01_InsertFlag",
                      "value": 1
                    },
                    {
                      "name": "Set Enemy Phase",
                      "mode": "Inc"
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W2_Yanqing_IF_AbilityP01_Insert_Part01to02",
                      "priorityTag": "EnemyPhaseChange",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
                    }
                  ]
                },
                "Modifier Deletes Itself"
              ],
              "priorityLevel": -90
            }
          ],
          "stackData": [],
          "latentQueue": [
            "W2_Yanqing_00_SkillP01_InsertFlag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2056400991\">Enemy_W2_Yanqing_IF_Ability02_SwordEnhance</a>",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
                  "value": 0.99
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]"
            }
          ],
          "stackData": [],
          "latentQueue": [
            "W2_Yanqing_00_SwordStep"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1085065543\">W2_YanQing_BattleScore7</a>",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Character ID",
                    "ID": 1220,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": "Feixiao"
                  },
                  "passed": [
                    {
                      "name": "Achievement",
                      "matchTags": true,
                      "relatedAchievements": [
                        {
                          "title": "Wardance: Armament Trial",
                          "desc": "Use ally character Feixiao to deal the final blow in a victory against Yanqing",
                          "rarity": "Low",
                          "type": "Hidden until Completion"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "W2_Yanqing_00_AICounter",
            "W2_Yanqing_00_AIPhase",
            "W2_Yanqing_00_WeakPointState"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1101843162\">W2_YanQing_BattleScore6</a>",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Character ID",
                        "ID": 1212,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Jingliu"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Achievement",
                      "matchTags": true,
                      "relatedAchievements": [
                        {
                          "title": "Wardance: Soulsteel Trial",
                          "desc": "Use ally Jingliu to deal the final blow in a victory against Yanqing",
                          "rarity": "Low",
                          "type": "Hidden until Completion"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "W2_Yanqing_00_AICounter",
            "W2_Yanqing_00_AIPhase",
            "W2_Yanqing_00_WeakPointState"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1118620781\">W2_YanQing_BattleScore5</a>",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Character ID",
                        "ID": 1209,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Yanqing"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Achievement",
                      "matchTags": true,
                      "relatedAchievements": [
                        {
                          "title": "Wardance...?",
                          "desc": "Use ally Yanqing to deal the final blow in a victory against Yanqing",
                          "rarity": "Low",
                          "type": "Hidden until Completion"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "W2_Yanqing_00_AICounter",
            "W2_Yanqing_00_AIPhase",
            "W2_Yanqing_00_WeakPointState"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1135398400\">W2_YanQing_BattleScore4</a>",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Character ID",
                        "ID": 1002,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Dan Heng"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Achievement",
                      "matchTags": true,
                      "relatedAchievements": [
                        {
                          "title": "Wardance: Spear Trial",
                          "desc": "Use ally Dan Heng to deal the final blow in a victory against Yanqing",
                          "rarity": "Low",
                          "type": "Hidden until Completion"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "W2_Yanqing_00_AICounter",
            "W2_Yanqing_00_AIPhase",
            "W2_Yanqing_00_WeakPointState"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1017955067\">W2_YanQing_BattleScore3</a>",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Character ID",
                    "ID": 1204,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": "Jing Yuan"
                  },
                  "passed": [
                    {
                      "name": "Achievement",
                      "matchTags": true,
                      "relatedAchievements": [
                        {
                          "title": "Wardance: Glaive Trial",
                          "desc": "Use Jing Yuan to deal the final blow in a victory against Yanqing",
                          "rarity": "Low",
                          "type": "Hidden until Completion"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "W2_Yanqing_00_AICounter",
            "W2_Yanqing_00_AIPhase",
            "W2_Yanqing_00_WeakPointState"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1034732686\">W2_YanQing_BattleScore2</a>",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Character ID",
                    "ID": 1203,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": "Luocha"
                  },
                  "passed": [
                    {
                      "name": "Achievement",
                      "matchTags": true,
                      "relatedAchievements": [
                        {
                          "title": "Wardance: Épée Trial",
                          "desc": "Use Luocha to deal the final blow in a victory against Yanqing",
                          "rarity": "Low",
                          "type": "Hidden until Completion"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "W2_Yanqing_00_AICounter",
            "W2_Yanqing_00_AIPhase",
            "W2_Yanqing_00_WeakPointState"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1051510305\">W2_YanQing_BattleScore1</a>",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Character ID",
                    "ID": 1206,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": "Sushang"
                  },
                  "passed": [
                    {
                      "name": "Achievement",
                      "matchTags": true,
                      "relatedAchievements": [
                        {
                          "title": "Wardance: Greatsword Trial",
                          "desc": "Use Sushang to deal the final blow in a victory against Yanqing",
                          "rarity": "Low",
                          "type": "Hidden until Completion"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "W2_Yanqing_00_AICounter",
            "W2_Yanqing_00_AIPhase",
            "W2_Yanqing_00_WeakPointState"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1928823293\">Enemy_W2_Yanqing_MainBattle_MuteUltra</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1881028391\">Enemy_W2_Yanqing_MainBattle_Fatigue</a>",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">Weaken%</span>&nbsp;",
                  "value": 0.5
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1355669844\">Enemy_W2_Yanqing_MainBattle_Perform05</a>",
          "execute": [
            {
              "eventTrigger": "Entity Death [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Related Summoned Entity",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1372447463\">Enemy_W2_Yanqing_MainBattle_Perform04</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1322114606\">Enemy_W2_Yanqing_MainBattle_Perform03</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1338892225\">Enemy_W2_Yanqing_MainBattle_Perform02</a>",
          "counter": 2,
          "execute": [
            {
              "eventTrigger": "Attack Start [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Attack Type",
                        "attackTypes": [
                          "Follow-up",
                          "Ultimate"
                        ],
                        "invertCondition": true
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": null,
                        "compareType": "=",
                        "value2": 2
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Modifier Variable",
                      "modifierName": "<a class=\"gModGreen\" id=\"1338892225\">Enemy_W2_Yanqing_MainBattle_Perform02</a>",
                      "value": 1
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Attack Type",
                            "attackTypes": [
                              "Follow-up",
                              "Ultimate"
                            ],
                            "invertCondition": true
                          },
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": null,
                            "compareType": "=",
                            "value2": 1
                          }
                        ]
                      },
                      "passed": [
                        "Modifier Deletes Itself"
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1288559368\">Enemy_W2_Yanqing_MainBattle_Perform01</a>",
          "execute": [
            {
              "eventTrigger": "Action Choice Window [Owner]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__605967688\">Enemy_W2_Yanqing_MainBattle_FrozenResistanceUp</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Resistance",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "STAT_CTRL_Frozen",
                  "value": 1
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1738340073\">DanHengIL_BPCost_3_Special</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Update Ability Binding",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "abilityName": "Skill01",
                  "skillSlot": "Basic ATK"
                },
                {
                  "name": "Update Ability Properties",
                  "abilityTagList": [
                    "Skill13"
                  ],
                  "propertyList": [
                    {
                      "name": "Ability Property Action",
                      "propertyName": "Skill Point Cost",
                      "propertyAction": "Reset to Default"
                    }
                  ]
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Disable Abilities",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "abilityTypes": null,
                  "extraText": "Basic ATK has been Enhanced to its max capacity",
                  "controlTypes": [
                    "ControlSkill02"
                  ]
                },
                {
                  "name": "Update Ability Binding",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "abilityName": "Skill13",
                  "skillSlot": "Basic ATK"
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "activeCount": 3,
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1554946856\">DanHengIL_BPCost_2_Special</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Update Ability Binding",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "abilityName": "Skill01",
                  "skillSlot": "Basic ATK"
                },
                {
                  "name": "Update Ability Properties",
                  "abilityTagList": [
                    "Skill12"
                  ],
                  "propertyList": [
                    {
                      "name": "Ability Property Action",
                      "propertyName": "Skill Point Cost",
                      "propertyAction": "Reset to Default"
                    }
                  ]
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Update Ability Binding",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "abilityName": "Skill12",
                  "skillSlot": "Basic ATK"
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "activeCount": 2,
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-190723079\">DanHengIL_BPCost_1_Special</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Update Ability Binding",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "abilityName": "Skill01",
                  "skillSlot": "Basic ATK"
                },
                {
                  "name": "Update Ability Properties",
                  "abilityTagList": [
                    "Skill11"
                  ],
                  "propertyList": [
                    {
                      "name": "Ability Property Action",
                      "propertyName": "Skill Point Cost",
                      "propertyAction": "Reset to Default"
                    }
                  ]
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Update Ability Binding",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "abilityName": "Skill11",
                  "skillSlot": "Basic ATK"
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "activeCount": 1,
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__107445387\">DanhengIL_EXAbility01_LV3</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Disable Abilities",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "abilityTypes": null,
                  "extraText": "Ability cannot be used",
                  "controlTypes": [
                    "ControlSkill02"
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "EXSkill01",
                  "value": 3
                },
                {
                  "name": "Adjust Variable Value",
                  "adjustmentType": "Overwrite Value",
                  "variableName": "BPExChange",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "value": 3
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": 3,
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "maximum": 3
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1738340073\">DanHengIL_BPCost_3_Special</a>"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Disable Abilities",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "abilityTypes": null,
                  "extraText": "Ability cannot be used",
                  "controlTypes": [
                    "ControlSkill02"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__90667768\">DanhengIL_EXAbility01_LV2</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Disable Abilities",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "abilityTypes": null,
                  "extraText": "Ability cannot be used",
                  "controlTypes": [
                    "ControlSkill02"
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "EXSkill01",
                  "value": 2
                },
                {
                  "name": "Adjust Variable Value",
                  "adjustmentType": "Overwrite Value",
                  "variableName": "BPExChange",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "value": 2
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": 2,
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1554946856\">DanHengIL_BPCost_2_Special</a>"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Disable Abilities",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "abilityTypes": null,
                  "extraText": "Ability cannot be used",
                  "controlTypes": [
                    "ControlSkill02"
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "DanhengIL_MainBattle_Counter"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__141000625\">DanhengIL_EXAbility01_LV1</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-190723079\">DanHengIL_BPCost_1_Special</a>"
                },
                {
                  "name": "Disable Abilities",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "abilityTypes": null,
                  "extraText": "Ability cannot be used",
                  "controlTypes": [
                    "ControlSkill02"
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "EXSkill01",
                  "value": 1
                },
                {
                  "name": "Adjust Variable Value",
                  "adjustmentType": "Overwrite Value",
                  "variableName": "BPExChange",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "value": 1
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": 1,
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-190723079\">DanHengIL_BPCost_1_Special</a>"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Disable Abilities",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "abilityTypes": null,
                  "extraText": "Ability cannot be used",
                  "controlTypes": [
                    "ControlSkill02"
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "W2_Yanqing_00_MainBattle_Flag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__124223006\">DanhengIL_EXAbility01_LV0</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Disable Abilities",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "abilityTypes": null,
                  "extraText": "Ability cannot be used",
                  "controlTypes": [
                    "ControlSkill02"
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Disable Abilities",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "abilityTypes": null,
                  "extraText": "Ability cannot be used",
                  "controlTypes": [
                    "ControlSkill02"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__310423138\">DanhengIL_EXAbility01_Diable_Ultra</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ],
          "stackData": [],
          "latentQueue": [
            "DanhengIL_MainBattle_Counter"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__684006930\">Enemy_W2_Yanqing_StandByEffect</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            }
          ],
          "stackData": [],
          "latentQueue": [
            "W2_Yanqing_00_AICounter",
            "W2_Yanqing_00_AIPhase",
            "W2_Yanqing_00_WeakPointState"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-933634732\">Enemy_W2_Yanqing_StandBySwordEffect_Frozen</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-483494067\">Enemy_W2_Yanqing_StandBySwordEffect_Break</a>"
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "When Put in Deathstate Limbo",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": {
                      "operator": "Variables[0] (W2_Yanqing_00_MaxPhaseNum) || RETURN",
                      "displayLines": "W2_Yanqing_00_MaxPhaseNum",
                      "constants": [],
                      "variables": [
                        "W2_Yanqing_00_MaxPhaseNum"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-483494067\">Enemy_W2_Yanqing_StandBySwordEffect_Break</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "When Put in Deathstate Limbo",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": {
                      "operator": "Variables[0] (W2_Yanqing_00_MaxPhaseNum) || RETURN",
                      "displayLines": "W2_Yanqing_00_MaxPhaseNum",
                      "constants": [],
                      "variables": [
                        "W2_Yanqing_00_MaxPhaseNum"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-63015955\">Enemy_W2_Yanqing_StandBySwordEffect</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "When Put in Deathstate Limbo",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": {
                      "operator": "Variables[0] (W2_Yanqing_00_MaxPhaseNum) || RETURN",
                      "displayLines": "W2_Yanqing_00_MaxPhaseNum",
                      "constants": [],
                      "variables": [
                        "W2_Yanqing_00_MaxPhaseNum"
                      ]
                    }
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1466013786\">Enemy_W2_Yanqing_StandBySwordEffect_Controller</a>",
          "execute": [
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-63015955\">Enemy_W2_Yanqing_StandBySwordEffect</a>"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "flagName": "STAT_CTRL_Frozen"
                  },
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-483494067\">Enemy_W2_Yanqing_StandBySwordEffect_Break</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "End Broken State [Owner]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-483494067\">Enemy_W2_Yanqing_StandBySwordEffect_Break</a>"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "flagName": "STAT_CTRL_Frozen"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-933634732\">Enemy_W2_Yanqing_StandBySwordEffect_Frozen</a>"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-63015955\">Enemy_W2_Yanqing_StandBySwordEffect</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Modifier is Added [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        }
                      },
                      {
                        "name": "Modifier Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "flagName": "STAT_CTRL_Frozen"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-63015955\">Enemy_W2_Yanqing_StandBySwordEffect</a>"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-483494067\">Enemy_W2_Yanqing_StandBySwordEffect_Break</a>"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-933634732\">Enemy_W2_Yanqing_StandBySwordEffect_Frozen</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Losing Modifier [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Modifier Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "flagName": "STAT_CTRL_Frozen"
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "STAT_CTRL_Frozen",
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-933634732\">Enemy_W2_Yanqing_StandBySwordEffect_Frozen</a>"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "Break"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-483494067\">Enemy_W2_Yanqing_StandBySwordEffect_Break</a>"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-63015955\">Enemy_W2_Yanqing_StandBySwordEffect</a>"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "W2_Yanqing_00_AICounter",
            "W2_Yanqing_00_AIPhase",
            "W2_Yanqing_00_WeakPointState"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-356149908\">Enemy_W2_Yanqing_Ability05_Charge_CharacterChangePhase</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "phase": "PhaseCharge"
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "phase": "PhaseNormal"
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "phase": "PhaseChargeBreak"
                }
              ]
            },
            {
              "eventTrigger": "End Broken State [Owner]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-273389019\">Enemy_W2_Yanqing_Ability05_Charge</a>",
          "modifierFlags": [
            "MuteHitH"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Set Hit-Class",
                  "class": "D"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-356149908\">Enemy_W2_Yanqing_Ability05_Charge_CharacterChangePhase</a>"
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Set Hit-Class",
                  "reset": true
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "W2_Yanqing_00_AICounter",
                  "value": 7
                },
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__805504301\">Enemy_W2_Yanqing_Ability02_AdditiveToast</a>",
          "execute": [
            {
              "eventTrigger": "Action Choice Window [Owner]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"805504301\">Enemy_W2_Yanqing_Ability02_AdditiveToast</a>"
                },
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2095309040\">Enemy_W2_Yanqing_Ability02_UnknownWeakPoint_Unrevealed</a>",
          "modifierFlags": [],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2084667486\">Enemy_W2_Yanqing_Ability02_UnknownWeakPoint_03</a>[<span class=\"descriptionNumberColor\">Formation Core</span>]",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "W2_Yanqing_00_WeakPointState",
                  "value": 1
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Clear Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "action": "Secret",
                  "valueList": [
                    "Imaginary"
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Take Damage Start [Owner]: Hit",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Damage Type/Element",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "list": [
                          "Imaginary"
                        ]
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "W2_Yanqing_00_WeakPointState",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "TargetEntity"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"2095309040\">Enemy_W2_Yanqing_Ability02_UnknownWeakPoint_Unrevealed</a>"
                    },
                    {
                      "name": "Clear Weaknesses",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "action": "Secret",
                      "valueList": [
                        "Imaginary"
                      ]
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "W2_Yanqing_00_WeakPointState",
                      "value": 2
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2095309040\">Enemy_W2_Yanqing_Ability02_UnknownWeakPoint_Unrevealed</a>"
                },
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueList": [
                    "Imaginary"
                  ],
                  "valueListHidden": [
                    "Imaginary"
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Inject Ability Use",
                  "checkOverride": {
                    "name": "Condition Priority",
                    "overridePriority": "MonsterForceKill",
                    "condition": {
                      "name": "Compare: Ability Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Summoner of Modifier Holder}}"
                      },
                      "value1": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                      "compareType": "<=",
                      "value2": 0
                    }
                  },
                  "abilityName": "Monster_W2_Yanqing_Ability02_RevealedDie",
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "priorityTag": "EnemyChangeState",
                  "canHitNonTargets": true,
                  "abortFlags": [
                    "STAT_MonsterChangePhase"
                  ],
                  "allowAbilityTriggers": false
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "The Weakness of the target enemy is one of the following: Wind, Lightning, Imaginary. Use attacks of the corresponding Types to figure out the real Weakness Type. Inflict Weakness Break on the target to destroy the enemy.",
          "type": "Other",
          "effectName": "Formation Core",
          "statusName": "Formation Core"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2101445105\">Enemy_W2_Yanqing_Ability02_UnknownWeakPoint_02</a>[<span class=\"descriptionNumberColor\">Formation Core</span>]",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "W2_Yanqing_00_WeakPointState",
                  "value": 1
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Clear Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "action": "Secret",
                  "valueList": [
                    "Thunder"
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Take Damage Start [Owner]: Hit",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Damage Type/Element",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "list": [
                          "Lightning"
                        ]
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "W2_Yanqing_00_WeakPointState",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "TargetEntity"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"2095309040\">Enemy_W2_Yanqing_Ability02_UnknownWeakPoint_Unrevealed</a>"
                    },
                    {
                      "name": "Clear Weaknesses",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "action": "Secret",
                      "valueList": [
                        "Thunder"
                      ]
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "W2_Yanqing_00_WeakPointState",
                      "value": 2
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2095309040\">Enemy_W2_Yanqing_Ability02_UnknownWeakPoint_Unrevealed</a>"
                },
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueList": [
                    "Thunder"
                  ],
                  "valueListHidden": [
                    "Thunder"
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Inject Ability Use",
                  "checkOverride": {
                    "name": "Condition Priority",
                    "overridePriority": "MonsterForceKill",
                    "condition": {
                      "name": "Compare: Ability Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Summoner of Modifier Holder}}"
                      },
                      "value1": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                      "compareType": "<=",
                      "value2": 0
                    }
                  },
                  "abilityName": "Monster_W2_Yanqing_Ability02_RevealedDie",
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "priorityTag": "EnemyChangeState",
                  "canHitNonTargets": true,
                  "abortFlags": [
                    "STAT_MonsterChangePhase"
                  ],
                  "allowAbilityTriggers": false
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "The Weakness of the target enemy is one of the following: Wind, Lightning, Imaginary. Use attacks of the corresponding Types to figure out the real Weakness Type. Inflict Weakness Break on the target to destroy the enemy.",
          "type": "Other",
          "effectName": "Formation Core",
          "statusName": "Formation Core"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2051112248\">Enemy_W2_Yanqing_Ability02_UnknownWeakPoint_01</a>[<span class=\"descriptionNumberColor\">Formation Core</span>]",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "W2_Yanqing_00_WeakPointState",
                  "value": 1
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Clear Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "action": "Secret",
                  "valueList": [
                    "Wind"
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Take Damage Start [Owner]: Hit",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Damage Type/Element",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "list": [
                          "Wind"
                        ]
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "W2_Yanqing_00_WeakPointState",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "TargetEntity"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"2095309040\">Enemy_W2_Yanqing_Ability02_UnknownWeakPoint_Unrevealed</a>"
                    },
                    {
                      "name": "Clear Weaknesses",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "action": "Secret",
                      "valueList": [
                        "Wind"
                      ]
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "W2_Yanqing_00_WeakPointState",
                      "value": 2
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2095309040\">Enemy_W2_Yanqing_Ability02_UnknownWeakPoint_Unrevealed</a>"
                },
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueList": [
                    "Wind"
                  ],
                  "valueListHidden": [
                    "Wind"
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Inject Ability Use",
                  "checkOverride": {
                    "name": "Condition Priority",
                    "overridePriority": "MonsterForceKill",
                    "condition": {
                      "name": "Compare: Ability Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Summoner of Modifier Holder}}"
                      },
                      "value1": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                      "compareType": "<=",
                      "value2": 0
                    }
                  },
                  "abilityName": "Monster_W2_Yanqing_Ability02_RevealedDie",
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "priorityTag": "EnemyChangeState",
                  "canHitNonTargets": true,
                  "abortFlags": [
                    "STAT_MonsterChangePhase"
                  ],
                  "allowAbilityTriggers": false
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "The Weakness of the target enemy is one of the following: Wind, Lightning, Imaginary. Use attacks of the corresponding Types to figure out the real Weakness Type. Inflict Weakness Break on the target to destroy the enemy.",
          "type": "Other",
          "effectName": "Formation Core",
          "statusName": "Formation Core"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1106896946\">Enemy_W2_Yanqing_Ability02_ImaginaryToast</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__504784023\">Enemy_W2_Yanqing_Ability02_ThunderToast</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1501512671\">Enemy_W2_Yanqing_Ability02_WindToast</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-204617197\">Enemy_W2_Yanqing_Ability02_UnknownWeakPoint_Toast_Controller</a>",
          "execute": [
            {
              "eventTrigger": "Entity Death [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Related Summoned Entity",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1328693800\">Enemy_W2_Yanqing_Ability02_DuringSkill</a>",
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
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Enemy Team All}}"
                            },
                            "value1": "TeamCharacterCount",
                            "compareType": "=",
                            "value2": 0,
                            "conditions": {
                              "name": "Has Modifier",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"2051112248\">Enemy_W2_Yanqing_Ability02_UnknownWeakPoint_01</a>[<span class=\"descriptionNumberColor\">Formation Core</span>]"
                            }
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1501512671\">Enemy_W2_Yanqing_Ability02_WindToast</a>"
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Enemy Team All}}"
                            },
                            "value1": "TeamCharacterCount",
                            "compareType": "=",
                            "value2": 0,
                            "conditions": {
                              "name": "Has Modifier",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"2101445105\">Enemy_W2_Yanqing_Ability02_UnknownWeakPoint_02</a>[<span class=\"descriptionNumberColor\">Formation Core</span>]"
                            }
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"504784023\">Enemy_W2_Yanqing_Ability02_ThunderToast</a>"
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Enemy Team All}}"
                            },
                            "value1": "TeamCharacterCount",
                            "compareType": "=",
                            "value2": 0,
                            "conditions": {
                              "name": "Has Modifier",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"2084667486\">Enemy_W2_Yanqing_Ability02_UnknownWeakPoint_03</a>[<span class=\"descriptionNumberColor\">Formation Core</span>]"
                            }
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1106896946\">Enemy_W2_Yanqing_Ability02_ImaginaryToast</a>"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-242524526\">Enemy_W2_Yanqing_Ability02_UnknownWeakPoint_Core_MainBattle</a>[<span class=\"descriptionNumberColor\">Sword Formation</span>]",
          "modifierFlags": [
            "MuteBreak",
            "MuteHitH"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "Take Damage End [Owner]: Hit"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "action": "Protected",
                  "valueList": [
                    "Physical",
                    "Fire",
                    "Ice",
                    "Thunder",
                    "Wind",
                    "Quantum",
                    "Imaginary"
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Entity Death [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Related Summoned Entity",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1328693800\">Enemy_W2_Yanqing_Ability02_DuringSkill</a>",
                        "invertCondition": true
                      }
                    ]
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
                        "value1": "W2_Yanqing_00_Skill02_AccumulateRevealed",
                        "compareType": "<",
                        "value2": 4
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "W2_Yanqing_00_Skill02_AccumulateRevealed",
                          "value": {
                            "operator": "Variables[0] (W2_Yanqing_00_Skill02_AccumulateRevealed) || Constants[0] (1) || ADD || RETURN",
                            "displayLines": "(W2_Yanqing_00_Skill02_AccumulateRevealed + 1)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "W2_Yanqing_00_Skill02_AccumulateRevealed"
                            ]
                          }
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
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "W2_Yanqing_00_Skill02_InsertFlag",
                        "compareType": "=",
                        "value2": 0,
                        "contextScope": "TargetEntity"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "W2_Yanqing_00_Skill02_AccumulateRevealed",
                        "compareType": "=",
                        "value2": 4
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "W2_Yanqing_00_Skill02_InsertFlag",
                      "value": 1
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W2_Yanqing_Ability02_Insert_Over",
                      "priorityTag": "EnemyChangeState",
                      "canHitNonTargets": true,
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "Yanqing's Toughness cannot be reduced. Destroy all of Yanqing's Flying Swords to dispel that effect and cause DMG to Yanqing.",
          "type": "Other",
          "effectName": "Sword Formation",
          "statusName": "Sword Formation"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__194045592\">Enemy_W2_Yanqing_Ability02_UnknownWeakPoint_Core</a>[<span class=\"descriptionNumberColor\">Sword Formation</span>]",
          "modifierFlags": [
            "MuteBreak",
            "MuteHitH"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "Take Damage End [Owner]: Hit"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "action": "Protected",
                  "valueList": [
                    "Physical",
                    "Fire",
                    "Ice",
                    "Thunder",
                    "Wind",
                    "Quantum",
                    "Imaginary"
                  ]
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDFlat</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_SpeedDelta) || RETURN",
                    "displayLines": "MDF_SpeedDelta",
                    "constants": [],
                    "variables": [
                      "MDF_SpeedDelta"
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "Entity Death [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Related Summoned Entity",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1328693800\">Enemy_W2_Yanqing_Ability02_DuringSkill</a>",
                        "invertCondition": true
                      }
                    ]
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
                        "value1": "W2_Yanqing_00_Skill02_AccumulateRevealed",
                        "compareType": "<",
                        "value2": {
                          "operator": "Variables[0] (W2_Yanqing_00_Skill02_SummonNumber) || RETURN",
                          "displayLines": "W2_Yanqing_00_Skill02_SummonNumber",
                          "constants": [],
                          "variables": [
                            "W2_Yanqing_00_Skill02_SummonNumber"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "W2_Yanqing_00_Skill02_AccumulateRevealed",
                          "value": {
                            "operator": "Variables[0] (W2_Yanqing_00_Skill02_AccumulateRevealed) || Constants[0] (1) || ADD || RETURN",
                            "displayLines": "(W2_Yanqing_00_Skill02_AccumulateRevealed + 1)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "W2_Yanqing_00_Skill02_AccumulateRevealed"
                            ]
                          }
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
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "W2_Yanqing_00_Skill02_InsertFlag",
                        "compareType": "=",
                        "value2": 0,
                        "contextScope": "TargetEntity"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "W2_Yanqing_00_Skill02_AccumulateRevealed",
                        "compareType": "=",
                        "value2": {
                          "operator": "Variables[0] (W2_Yanqing_00_Skill02_SummonNumber) || RETURN",
                          "displayLines": "W2_Yanqing_00_Skill02_SummonNumber",
                          "constants": [],
                          "variables": [
                            "W2_Yanqing_00_Skill02_SummonNumber"
                          ]
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "W2_Yanqing_00_Skill02_InsertFlag",
                      "value": 1
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W2_Yanqing_Ability02_Insert_Over",
                      "priorityTag": "EnemyChangeState",
                      "canHitNonTargets": true,
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_SpeedDelta"
          ],
          "latentQueue": [],
          "description": "Yanqing's Toughness cannot be reduced, and his SPD increases by <span class=\"descriptionNumberColor\">MDF_SpeedDelta</span>. Destroy all of Yanqing's Flying Swords to dispel this effect and cause DMG to Yanqing.",
          "type": "Other",
          "effectName": "Sword Formation",
          "statusName": "Sword Formation"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1328693800\">Enemy_W2_Yanqing_Ability02_DuringSkill</a>",
          "stackData": [],
          "latentQueue": [
            "W2_Yanqing_00_SkillP01_InsertFlag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-403510377\">Enemy_W2_Yanqing_RemoveOneMoreAfterAbility01</a>",
          "execute": [
            {
              "eventTrigger": "Action End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "W2_Yanqing_00_AICounter",
                    "compareType": "=",
                    "value2": 2,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1296940882\">Enemy_W2_Yanqing_MainBattle_ChangeRenSpeed</a>",
          "modifierFlags": [],
          "execute": [
            {
              "eventTrigger": "Action Choice Window [Anyone]"
            },
            {
              "eventTrigger": "Being Attacked End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": 200402000,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": null
                  },
                  "passed": [
                    {
                      "name": "Action Advance/Delay",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "advanceType": "Advance",
                      "multiAdd": -1
                    },
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1319803673\">Enemy_W2_Yanqing_MainBattle_susutouxiang</a>",
          "execute": [
            {
              "eventTrigger": "Ability Use [Owner]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Name",
                    "skillName": "Skill04"
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1240130161\">Enemy_W2_Yanqing_MainBattle_shutup_you_not_leave</a>",
          "modifierFlags": [
            "ListenBattleEventSkill"
          ],
          "execute": [
            {
              "eventTrigger": "Ability Use [Owner]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "W2_Yanqing_00_AICounter",
                    "compareType": "=",
                    "value2": 4,
                    "contextScope": "TargetEntity"
                  }
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Anyone]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Skill Name",
                        "skillName": "Skill11"
                      },
                      {
                        "name": "Character ID",
                        "ID": 7213,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": null
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Action Advance/Delay",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "advanceType": "Advance",
                      "multiAdd": -1
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-696439078\">Enemy_W2_Yanqing_MainBattle_jiaobianzhici</a>",
          "execute": [
            {
              "eventTrigger": "Ability Use [Owner]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "W2_Yanqing_00_AICounter",
                    "compareType": "=",
                    "value2": 3,
                    "contextScope": "TargetEntity"
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1089294259\">Enemy_W2_Yanqing_MainBattle_zhenyanshoua</a>",
          "execute": [
            {
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Name",
                    "skillName": "Skill06"
                  },
                  "passed": [
                    {
                      "name": "Action Advance/Delay",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Trial: Blade}}"
                      },
                      "advanceType": "Advance",
                      "multiAdd": -1
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__551998134\">Enemy_W2_Yanqing_MainBattle_zunming</a>",
          "execute": [
            {
              "eventTrigger": "Action Choice Window [Owner]"
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1596688101\">Enemy_W2_Yanqing_MainBattle_LockHP</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Lock HP",
                  "threshold": 0.0009999999
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ],
      "references": []
    }
  }
}