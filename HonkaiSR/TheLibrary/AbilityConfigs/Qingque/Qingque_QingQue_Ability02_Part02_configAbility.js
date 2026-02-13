const configAbility = {
  "fileName": "Qingque_QingQue_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable",
      "variableName": "QingQue_BPCount",
      "value": {
        "operator": "Variables[0] (QingQue_BPCount) || Constants[0] (1) || ADD || RETURN",
        "displayLines": "(QingQue_BPCount + 1)",
        "constants": [
          1
        ],
        "variables": [
          "QingQue_BPCount"
        ]
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Trace Activated",
            "conditionList": "Tile Battle"
          },
          {
            "name": "Compare: Variable",
            "value1": "QingQue_BPCoolDown",
            "compareType": "=",
            "value2": 0
          }
        ]
      },
      "passed": [
        {
          "name": "Skill Points Modification",
          "adjustmentValue": 1,
          "adjustmentType": "+"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "QingQue_BPCoolDown",
          "value": 1
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Trace Activated",
            "conditionList": "Bide Time"
          }
        ]
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-954959718\">QingQue_BPAbility_DamageUp</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
          "stackLimit": {
            "operator": "Variables[0] (4) || RETURN",
            "displayLines": "4",
            "constants": [],
            "variables": [
              4
            ]
          },
          "valuePerStack": {
            "MDF_DamageAddedRatio": {
              "operator": "Variables[0] (0.1) || Variables[1] (0.28) || ADD || RETURN",
              "displayLines": "(0.1 + 0.28)",
              "constants": [],
              "variables": [
                0.1,
                0.28
              ]
            }
          },
          "addStacksPerTrigger": 1
        }
      ],
      "failed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-954959718\">QingQue_BPAbility_DamageUp</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
          "stackLimit": {
            "operator": "Variables[0] (4) || RETURN",
            "displayLines": "4",
            "constants": [],
            "variables": [
              4
            ]
          },
          "valuePerStack": {
            "MDF_DamageAddedRatio": {
              "operator": "Variables[0] (0.28) || RETURN",
              "displayLines": "0.28",
              "constants": [],
              "variables": [
                0.28
              ]
            }
          },
          "addStacksPerTrigger": 1
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 4
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Random Chance",
            "chance": {
              "operator": "Variables[0] (0.24) || RETURN",
              "displayLines": "0.24",
              "constants": [],
              "variables": [
                0.24
              ]
            }
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"134656141\">QingQue_Eidolon4_ATK</a>[<span class=\"descriptionNumberColor\">Self-Sufficer</span>]"
            }
          ]
        }
      ]
    },
    {
      "name": "Update Energy",
      "on": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "valuePercent": 1,
      "ofAbilitySplit": true,
      "isFixed": "* ERR"
    },
    {
      "name": "Looped Event",
      "maxLoops": {
        "operator": "Variables[0] (2) || RETURN",
        "displayLines": "2",
        "constants": [],
        "variables": [
          2
        ]
      },
      "Event": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1861987598\">QingQue_PassiveCount_QingqueSelf</a>",
          "valuePerStack": {
            "AbilityRank_Eidolon2_P1_SPAdd": {
              "operator": "Variables[0] (1) || RETURN",
              "displayLines": "1",
              "constants": [],
              "variables": [
                1
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
        "value1": "QingQue_Tiao",
        "compareType": "=",
        "value2": 4
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Winning Hand"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"823901022\">QingQue_Ability11PreShowModifier</a>"
            }
          ]
        },
        {
          "name": "Inject Extra-Turn",
          "actionTag": "Qingque_BpInsert",
          "canInjectUltimates": true,
          "followSameTagAsAction": true,
          "abilityName": "Qingque_BpInsertAction_Tiao",
          "afterInjection": []
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"659202160\">QingQue_Passive_Tiao</a>",
          "removeAllInstances": true
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1184170005\">QingQue_Passive_Tong</a>",
          "removeAllInstances": true
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1921510139\">QingQue_Passive_Wan</a>",
          "removeAllInstances": true
        },
        {
          "name": "Define Custom Variable",
          "variableName": "QingQue_Tong",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "QingQue_Tiao",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "QingQue_Wan",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "QingQue_CardCount",
          "value": 0
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1763556388\">QingQue_Passive_Hu</a>[<span class=\"descriptionNumberColor\">Hidden Hand</span>]",
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (MDF_PropertyValue01) || RETURN",
              "displayLines": "MDF_PropertyValue01",
              "constants": [],
              "variables": [
                "MDF_PropertyValue01"
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
          "modifier": "<a class=\"gModGreen\" id=\"757701155\">QingQue_Passive_Hu_Flag_Tiao</a>"
        }
      ],
      "failed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "QingQue_Wan",
            "compareType": "=",
            "value2": 4
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Trace Activated",
                "conditionList": "Winning Hand"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"823901022\">QingQue_Ability11PreShowModifier</a>"
                }
              ]
            },
            {
              "name": "Inject Extra-Turn",
              "actionTag": "Qingque_BpInsert",
              "canInjectUltimates": true,
              "followSameTagAsAction": true,
              "abilityName": "Qingque_BpInsertAction_Wan",
              "afterInjection": []
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"659202160\">QingQue_Passive_Tiao</a>",
              "removeAllInstances": true
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1184170005\">QingQue_Passive_Tong</a>",
              "removeAllInstances": true
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1921510139\">QingQue_Passive_Wan</a>",
              "removeAllInstances": true
            },
            {
              "name": "Define Custom Variable",
              "variableName": "QingQue_Tong",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "variableName": "QingQue_Tiao",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "variableName": "QingQue_Wan",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "variableName": "QingQue_CardCount",
              "value": 0
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1763556388\">QingQue_Passive_Hu</a>[<span class=\"descriptionNumberColor\">Hidden Hand</span>]",
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (MDF_PropertyValue01) || RETURN",
                  "displayLines": "MDF_PropertyValue01",
                  "constants": [],
                  "variables": [
                    "MDF_PropertyValue01"
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
              "modifier": "<a class=\"gModGreen\" id=\"-797865006\">QingQue_Passive_Hu_Flag_Wan</a>"
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "QingQue_Tong",
                "compareType": "=",
                "value2": 4
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Trace Activated",
                    "conditionList": "Winning Hand"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"823901022\">QingQue_Ability11PreShowModifier</a>"
                    }
                  ]
                },
                {
                  "name": "Inject Extra-Turn",
                  "actionTag": "Qingque_BpInsert",
                  "canInjectUltimates": true,
                  "followSameTagAsAction": true,
                  "abilityName": "Qingque_BpInsertAction_Tong",
                  "afterInjection": []
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"659202160\">QingQue_Passive_Tiao</a>",
                  "removeAllInstances": true
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1184170005\">QingQue_Passive_Tong</a>",
                  "removeAllInstances": true
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1921510139\">QingQue_Passive_Wan</a>",
                  "removeAllInstances": true
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "QingQue_Tong",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "QingQue_Tiao",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "QingQue_Wan",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "QingQue_CardCount",
                  "value": 0
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1763556388\">QingQue_Passive_Hu</a>[<span class=\"descriptionNumberColor\">Hidden Hand</span>]",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (MDF_PropertyValue01) || RETURN",
                      "displayLines": "MDF_PropertyValue01",
                      "constants": [],
                      "variables": [
                        "MDF_PropertyValue01"
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1600165622\">QingQue_Passive_Hu_Flag_Tong</a>"
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Target has Extra-Turn Queued",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Player Team All}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Inject Extra-Turn",
                      "actionTag": null,
                      "canInjectUltimates": true,
                      "afterInjection": []
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "CurrentSkillPoints",
                        "compareType": "<=",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Inject Extra-Turn",
                          "actionTag": null,
                          "canInjectUltimates": true,
                          "afterInjection": []
                        }
                      ],
                      "failed": [
                        {
                          "name": "Inject Extra-Turn",
                          "actionTag": "Qingque_BpInsert",
                          "skillType": "ControlSkill02",
                          "skillTypeDelayed": "ControlSkill01",
                          "canInjectUltimates": true,
                          "followSameTagAsAction": true,
                          "abilityName": "Qingque_BpInsertAction",
                          "afterInjection": []
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
    },
    "Refresh QingQue Bar-State",
    "Trigger: Ability End"
  ],
  "references": []
}