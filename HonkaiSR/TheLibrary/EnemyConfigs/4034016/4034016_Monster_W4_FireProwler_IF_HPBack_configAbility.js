const configAbility = {
  "fileName": "4034016_Monster_W4_FireProwler_IF_HPBack",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "UI Display Event",
      "popUpText": "Lost Sacrifice"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "HPBack_TimePowerCount"
    },
    {
      "name": "Define Custom Variable with Modifier Values",
      "valueType": "Layer",
      "variableName": "HPBack_TimePowerCount",
      "modifierName": "<a class=\"gModGreen\" id=\"33624492\">Enemy_W4_FireProwler_TimePower</a>[<span class=\"descriptionNumberColor\">Calamity Power</span>]",
      "multiplier": 1
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "includeDyingTargets": true,
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "value1": "HPBack",
            "compareType": "=",
            "value2": 1
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
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1578257108\">Enemy_W4_FireProwler_01_IF_Bonus</a>[<span class=\"descriptionNumberColor\">Complete Vessel</span>]"
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-122367820\">Enemy_W4_FireProwler_IF_DuringAbility</a>",
                "invertCondition": true
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "includeDyingTargets": true,
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "value1": "HPBack",
            "compareType": "=",
            "value2": 1
          },
          {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1578257108\">Enemy_W4_FireProwler_01_IF_Bonus</a>[<span class=\"descriptionNumberColor\">Complete Vessel</span>]",
            "invertCondition": true
          }
        ]
      },
      "ifTargetFound": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1577610826\">Enemy_W4_FireProwler_RallyHP_Mark</a>"
        },
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "HPBack_TimePowerCount",
          "value": -1
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "includeDyingTargets": true,
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "value1": "HPBack",
        "compareType": "=",
        "value2": 1
      },
      "ifTargetFound": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-122367820\">Enemy_W4_FireProwler_IF_DuringAbility</a>",
            "invertCondition": true
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "<a class=\"gModGreen\" id=\"33624492\">Enemy_W4_FireProwler_TimePower</a>[<span class=\"descriptionNumberColor\">Calamity Power</span>]",
                "compareType": ">",
                "value2": 0,
                "valueType": "Layer"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"33624492\">Enemy_W4_FireProwler_TimePower</a>[<span class=\"descriptionNumberColor\">Calamity Power</span>]",
                  "addStacksPerTrigger": -1
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "<a class=\"gModGreen\" id=\"33624492\">Enemy_W4_FireProwler_TimePower</a>[<span class=\"descriptionNumberColor\">Calamity Power</span>]",
                    "compareType": "=",
                    "value2": 0,
                    "valueType": "Layer"
                  },
                  "passed": [
                    {
                      "name": "Action Advance/Delay",
                      "advanceType": "Set",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "multiBase": 0
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
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1578257108\">Enemy_W4_FireProwler_01_IF_Bonus</a>[<span class=\"descriptionNumberColor\">Complete Vessel</span>]"
              },
              "passed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "ToastFlag",
                  "value": 1
                }
              ]
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "variableName": "HPBack",
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
            "modifier": "<a class=\"gModGreen\" id=\"-557758203\">Enemy_W4_FireProwler_IF_Limit</a>[<span class=\"descriptionNumberColor\">Shackle Shatter</span>]"
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "ToastFlag",
                "compareType": "=",
                "value2": 1
              },
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "<a class=\"gModGreen\" id=\"33624492\">Enemy_W4_FireProwler_TimePower</a>[<span class=\"descriptionNumberColor\">Calamity Power</span>]",
                    "compareType": ">=",
                    "value2": 1,
                    "valueType": "Layer"
                  },
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "value1": "HP_Bars_Remaining",
                            "compareType": "=",
                            "value2": 1
                          },
                          {
                            "name": "Enemy ID",
                            "ID": 4034018,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "characterName": "???",
                            "isBaseCompare": true,
                            "invertCondition": true
                          }
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "name": "Remove from Team Target Grouping",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "stayInTeam": false
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Enemy ID",
                "ID": {
                  "operator": "Variables[0] (SummonID_3) || RETURN",
                  "displayLines": "SummonID_3",
                  "constants": [],
                  "variables": [
                    "SummonID_3"
                  ]
                },
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "characterName": null
              },
              "passed": [
                {
                  "name": "Create Enemies",
                  "delayPercent": 0,
                  "enemyList": [
                    {
                      "name": "Create Enemy from Custom",
                      "value": "SummonID_3",
                      "summonLocation": "FormationRecord"
                    }
                  ]
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster's Minions}}"
                  },
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]",
                    "invertCondition": true
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1742476718\">Enemy_W4_FireProwler_01_IF_HPBack</a>[<span class=\"descriptionNumberColor\">Shackled</span>]",
                      "valuePerStack": {
                        "MDF_LoseHPRatio": {
                          "operator": "Variables[0] ({[PassiveSkill01[2]]}) || RETURN",
                          "displayLines": "{[PassiveSkill01[2]]}",
                          "constants": [],
                          "variables": [
                            "{[PassiveSkill01[2]]}"
                          ]
                        }
                      }
                    },
                    {
                      "name": "Change Character Transformation",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "phase": "Phase03"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"2128816741\">Enemy_W4_FireProwler_01_IF_Activated03</a>",
                      "valuePerStack": {
                        "SummonIndex": {
                          "operator": "Variables[0] (CurrentSummonIndex) || RETURN",
                          "displayLines": "CurrentSummonIndex",
                          "constants": [],
                          "variables": [
                            "CurrentSummonIndex"
                          ]
                        },
                        "MDF_ActionDelay1_Weight": {
                          "operator": "Variables[0] ({[SkillP02[0]]}) || RETURN",
                          "displayLines": "{[SkillP02[0]]}",
                          "constants": [],
                          "variables": [
                            "{[SkillP02[0]]}"
                          ]
                        },
                        "MDF_ActionDelay1": {
                          "operator": "Variables[0] ({[SkillP02[1]]}) || RETURN",
                          "displayLines": "{[SkillP02[1]]}",
                          "constants": [],
                          "variables": [
                            "{[SkillP02[1]]}"
                          ]
                        },
                        "MDF_ActionDelay2_Weight": {
                          "operator": "Variables[0] ({[SkillP02[2]]}) || RETURN",
                          "displayLines": "{[SkillP02[2]]}",
                          "constants": [],
                          "variables": [
                            "{[SkillP02[2]]}"
                          ]
                        },
                        "MDF_ActionDelay2": {
                          "operator": "Variables[0] ({[SkillP02[3]]}) || RETURN",
                          "displayLines": "{[SkillP02[3]]}",
                          "constants": [],
                          "variables": [
                            "{[SkillP02[3]]}"
                          ]
                        },
                        "MDF_ActionDelay3_Weight": {
                          "operator": "Variables[0] ({[SkillP02[4]]}) || RETURN",
                          "displayLines": "{[SkillP02[4]]}",
                          "constants": [],
                          "variables": [
                            "{[SkillP02[4]]}"
                          ]
                        },
                        "MDF_ActionDelay3": {
                          "operator": "Variables[0] ({[SkillP02[5]]}) || RETURN",
                          "displayLines": "{[SkillP02[5]]}",
                          "constants": [],
                          "variables": [
                            "{[SkillP02[5]]}"
                          ]
                        }
                      }
                    },
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1876357747\">TaskList_Monster_W4_FireProwler_IF_SummonBounsCheck</a>"
                    },
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"359667306\">TaskList_Monster_W4_FireProwler_IF_SummonIndexChange</a>"
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
      "variableName": "HPBack",
      "value": 0
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "TargetEntity",
      "variableName": "ToastFlag"
    }
  ],
  "references": []
}