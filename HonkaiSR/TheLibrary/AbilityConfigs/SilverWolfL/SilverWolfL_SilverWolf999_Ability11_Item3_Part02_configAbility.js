const configAbility = {
  "fileName": "SilverWolfL_SilverWolf999_Ability11_Item3_Part02",
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
      "modifier": "<a class=\"gModGreen\" id=\"773036968\">_M_SilverWolf999_DuringAbility11_DisableControlSkillForUI</a>"
    },
    {
      "name": "Adjust Team Punchline Value",
      "value": {
        "operator": "Variables[0] (3) || RETURN",
        "displayLines": "3",
        "constants": [],
        "variables": [
          3
        ]
      },
      "adjustment": "Add"
    },
    {
      "name": "Define Custom Variable with Team Count",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "variableName": "TDF_EnemyCountForPerformance",
      "context": "ContextAbility"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Enemies Still Alive",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        }
      },
      "passed": [
        {
          "name": "Define Custom Variable with Team Count",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "variableName": "TDF_EnemyCountForDamage",
          "livingTargets": true,
          "context": "ContextAbility"
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable with Team Count",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "variableName": "TDF_EnemyCountForDamage",
          "context": "ContextAbility"
        }
      ]
    },
    {
      "name": "SWITCH",
      "switchValue": {
        "operator": "Variables[0] (TDF_EnemyCountForPerformance) || RETURN",
        "displayLines": "TDF_EnemyCountForPerformance",
        "constants": [],
        "variables": [
          "TDF_EnemyCountForPerformance"
        ]
      },
      "hasBreak": false,
      "caseEvents": [
        {
          "name": "SWITCH CONDITON",
          "caseValueIs": 1,
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "#CL_ADF_Delay1",
              "value": 0
            }
          ]
        },
        {
          "name": "SWITCH CONDITON",
          "caseValueIs": 2,
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "#CL_ADF_Delay1",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "variableName": "#CL_ADF_Delay2",
              "value": 0.4
            }
          ]
        },
        {
          "name": "SWITCH CONDITON",
          "caseValueIs": 3,
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "#CL_ADF_Delay1",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "variableName": "#CL_ADF_Delay2",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "variableName": "#CL_ADF_Delay3",
              "value": 0.4
            }
          ]
        },
        {
          "name": "SWITCH CONDITON",
          "caseValueIs": 4,
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "#CL_ADF_Delay1",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "variableName": "#CL_ADF_Delay2",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "variableName": "#CL_ADF_Delay3",
              "value": 0.4
            },
            {
              "name": "Define Custom Variable",
              "variableName": "#CL_ADF_Delay4",
              "value": 0.4
            }
          ]
        },
        {
          "name": "SWITCH CONDITON",
          "caseValueIs": 5,
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "#CL_ADF_Delay1",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "variableName": "#CL_ADF_Delay2",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "variableName": "#CL_ADF_Delay3",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "variableName": "#CL_ADF_Delay4",
              "value": 0.4
            },
            {
              "name": "Define Custom Variable",
              "variableName": "#CL_ADF_Delay5",
              "value": 0.4
            }
          ]
        }
      ],
      "defaultEvents": [
        {
          "name": "Define Custom Variable",
          "variableName": "#CL_ADF_Delay1",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "#CL_ADF_Delay2",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "#CL_ADF_Delay3",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "#CL_ADF_Delay4",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "#CL_ADF_Delay5",
          "value": 0
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "variableName": "#CL_ADF_Index",
      "value": 0
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "includeDyingTargets": true,
      "ifTargetFound": [
        {
          "name": "Define Custom Variable",
          "variableName": "#CL_ADF_Index",
          "value": {
            "operator": "Variables[0] (#CL_ADF_Index) || Constants[0] (1) || ADD || RETURN",
            "displayLines": "(#CL_ADF_Index + 1)",
            "constants": [
              1
            ],
            "variables": [
              "#CL_ADF_Index"
            ]
          }
        },
        {
          "name": "SWITCH",
          "switchValue": {
            "operator": "Variables[0] (#CL_ADF_Index) || RETURN",
            "displayLines": "#CL_ADF_Index",
            "constants": [],
            "variables": [
              "#CL_ADF_Index"
            ]
          },
          "hasBreak": false,
          "caseEvents": [
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 1,
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "#CL_ADF_Delay",
                  "value": {
                    "operator": "Variables[0] (#CL_ADF_Delay1) || RETURN",
                    "displayLines": "#CL_ADF_Delay1",
                    "constants": [],
                    "variables": [
                      "#CL_ADF_Delay1"
                    ]
                  }
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 2,
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "#CL_ADF_Delay",
                  "value": {
                    "operator": "Variables[0] (#CL_ADF_Delay2) || RETURN",
                    "displayLines": "#CL_ADF_Delay2",
                    "constants": [],
                    "variables": [
                      "#CL_ADF_Delay2"
                    ]
                  }
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 3,
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "#CL_ADF_Delay",
                  "value": {
                    "operator": "Variables[0] (#CL_ADF_Delay3) || RETURN",
                    "displayLines": "#CL_ADF_Delay3",
                    "constants": [],
                    "variables": [
                      "#CL_ADF_Delay3"
                    ]
                  }
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 4,
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "#CL_ADF_Delay",
                  "value": {
                    "operator": "Variables[0] (#CL_ADF_Delay4) || RETURN",
                    "displayLines": "#CL_ADF_Delay4",
                    "constants": [],
                    "variables": [
                      "#CL_ADF_Delay4"
                    ]
                  }
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 5,
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "#CL_ADF_Delay",
                  "value": {
                    "operator": "Variables[0] (#CL_ADF_Delay5) || RETURN",
                    "displayLines": "#CL_ADF_Delay5",
                    "constants": [],
                    "variables": [
                      "#CL_ADF_Delay5"
                    ]
                  }
                }
              ]
            }
          ],
          "defaultEvents": [
            {
              "name": "Define Custom Variable",
              "variableName": "#CL_ADF_Delay",
              "value": 0
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Compare: Target List Entities",
                "target": {
                  "name": "Target Name",
                  "target": "{{Hostile Entities(AOE)}}"
                },
                "conditions": {
                  "name": "Living State",
                  "state": "Mask_AliveOnly",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                },
                "invertCondition": true
              },
              {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value1": "CurrentHP",
                "compareType": ">",
                "value2": 0
              }
            ]
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Imaginary",
                "DamageElation": {
                  "operator": "Variables[0] (0.9) || RETURN",
                  "displayLines": "0.9",
                  "constants": [],
                  "variables": [
                    0.9
                  ]
                },
                "dmgFormula": "Elation Scaling",
                "HitSplit": {
                  "operator": "Constants[0] (1) || Variables[0] (TDF_EnemyCountForDamage) || DIV || RETURN",
                  "displayLines": "(1 / TDF_EnemyCountForDamage)",
                  "constants": [
                    1
                  ],
                  "variables": [
                    "TDF_EnemyCountForDamage"
                  ]
                },
                "Toughness": {
                  "operator": "Variables[0] (AOE Toughness Value) || RETURN",
                  "displayLines": "AOE Toughness Value",
                  "constants": [],
                  "variables": [
                    "AOE Toughness Value"
                  ]
                },
                "ToughnessDMGType": {
                  "DamageType": "Imaginary"
                },
                "instanceTag": "SilverWolf999_00_Item_Damage",
                "Tags": null,
                "attackType": "Elation DMG"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"1713096413\">SilverWolf999_Ability11_ItemDamagePerformfinish</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Enemies Still Alive",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        }
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Skill11_Item_LeftCount",
            "compareType": ">",
            "value2": 0
          },
          "passed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"1468343614\">SilverWolf999_Ability11_Shoot</a>"
            }
          ],
          "failed": [
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "ability": "SilverWolf999_Ability11_End_Part01",
              "isTrigger": true
            }
          ]
        }
      ],
      "failed": [
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"872770640\">SilverWolf999_Ability11_QuitOnKillAll</a>"
        }
      ]
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  }
}