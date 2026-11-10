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
        "displayLines": "3"
      },
      "adjustment": "Add"
    },
    {
      "name": "Define Custom Variable with Team Count",
      "variableName": "TDF_EnemyCountForPerformance",
      "scope": "ContextAbility",
      "readTarget": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      }
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
          "variableName": "TDF_EnemyCountForDamage",
          "scope": "ContextAbility",
          "readTarget": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "living": true
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable with Team Count",
          "variableName": "TDF_EnemyCountForDamage",
          "scope": "ContextAbility",
          "readTarget": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          }
        }
      ]
    },
    {
      "name": "SWITCH",
      "switchValue": {
        "displayLines": "TDF_EnemyCountForPerformance"
      },
      "hasBreak": false,
      "caseTasks": [
        {
          "name": "SWITCH CONDITON",
          "caseValueIs": 1,
          "execute": [
            {
              "name": "Define Custom Variable",
              "value": 0,
              "variableName": "#CL_ADF_Delay1"
            }
          ]
        },
        {
          "name": "SWITCH CONDITON",
          "caseValueIs": 2,
          "execute": [
            {
              "name": "Define Custom Variable",
              "value": 0,
              "variableName": "#CL_ADF_Delay1"
            },
            {
              "name": "Define Custom Variable",
              "value": 0.4,
              "variableName": "#CL_ADF_Delay2"
            }
          ]
        },
        {
          "name": "SWITCH CONDITON",
          "caseValueIs": 3,
          "execute": [
            {
              "name": "Define Custom Variable",
              "value": 0,
              "variableName": "#CL_ADF_Delay1"
            },
            {
              "name": "Define Custom Variable",
              "value": 0,
              "variableName": "#CL_ADF_Delay2"
            },
            {
              "name": "Define Custom Variable",
              "value": 0.4,
              "variableName": "#CL_ADF_Delay3"
            }
          ]
        },
        {
          "name": "SWITCH CONDITON",
          "caseValueIs": 4,
          "execute": [
            {
              "name": "Define Custom Variable",
              "value": 0,
              "variableName": "#CL_ADF_Delay1"
            },
            {
              "name": "Define Custom Variable",
              "value": 0,
              "variableName": "#CL_ADF_Delay2"
            },
            {
              "name": "Define Custom Variable",
              "value": 0.4,
              "variableName": "#CL_ADF_Delay3"
            },
            {
              "name": "Define Custom Variable",
              "value": 0.4,
              "variableName": "#CL_ADF_Delay4"
            }
          ]
        },
        {
          "name": "SWITCH CONDITON",
          "caseValueIs": 5,
          "execute": [
            {
              "name": "Define Custom Variable",
              "value": 0,
              "variableName": "#CL_ADF_Delay1"
            },
            {
              "name": "Define Custom Variable",
              "value": 0,
              "variableName": "#CL_ADF_Delay2"
            },
            {
              "name": "Define Custom Variable",
              "value": 0,
              "variableName": "#CL_ADF_Delay3"
            },
            {
              "name": "Define Custom Variable",
              "value": 0.4,
              "variableName": "#CL_ADF_Delay4"
            },
            {
              "name": "Define Custom Variable",
              "value": 0.4,
              "variableName": "#CL_ADF_Delay5"
            }
          ]
        }
      ],
      "defaultTasks": [
        {
          "name": "Define Custom Variable",
          "value": 0,
          "variableName": "#CL_ADF_Delay1"
        },
        {
          "name": "Define Custom Variable",
          "value": 0,
          "variableName": "#CL_ADF_Delay2"
        },
        {
          "name": "Define Custom Variable",
          "value": 0,
          "variableName": "#CL_ADF_Delay3"
        },
        {
          "name": "Define Custom Variable",
          "value": 0,
          "variableName": "#CL_ADF_Delay4"
        },
        {
          "name": "Define Custom Variable",
          "value": 0,
          "variableName": "#CL_ADF_Delay5"
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "value": 0,
      "variableName": "#CL_ADF_Index"
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
          "value": {
            "displayLines": "(#CL_ADF_Index + 1)"
          },
          "variableName": "#CL_ADF_Index"
        },
        {
          "name": "SWITCH",
          "switchValue": {
            "displayLines": "#CL_ADF_Index"
          },
          "hasBreak": false,
          "caseTasks": [
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 1,
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "#CL_ADF_Delay1"
                  },
                  "variableName": "#CL_ADF_Delay"
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 2,
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "#CL_ADF_Delay2"
                  },
                  "variableName": "#CL_ADF_Delay"
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 3,
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "#CL_ADF_Delay3"
                  },
                  "variableName": "#CL_ADF_Delay"
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 4,
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "#CL_ADF_Delay4"
                  },
                  "variableName": "#CL_ADF_Delay"
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 5,
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "#CL_ADF_Delay5"
                  },
                  "variableName": "#CL_ADF_Delay"
                }
              ]
            }
          ],
          "defaultTasks": [
            {
              "name": "Define Custom Variable",
              "value": 0,
              "variableName": "#CL_ADF_Delay"
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
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "livingState": "Mask_AliveOnly"
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
                  "displayLines": "0.9"
                },
                "dmgFormula": "Elation Scaling",
                "HitSplit": {
                  "displayLines": "(1 / TDF_EnemyCountForDamage)"
                },
                "Toughness": {
                  "displayLines": "AOE Toughness Value"
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
        "name": "Compare: Variable",
        "target": {
          "name": "Target Name",
          "target": "{{Hostile Entities(AOE)}}"
        },
        "value1": "TeamCharacterCount",
        "compareType": ">",
        "value2": 0,
        "conditions": {
          "name": "Has Modifier",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"637823618\">Standard_LockHPThresholdReached_Mark</a>",
          "invertCondition": true
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