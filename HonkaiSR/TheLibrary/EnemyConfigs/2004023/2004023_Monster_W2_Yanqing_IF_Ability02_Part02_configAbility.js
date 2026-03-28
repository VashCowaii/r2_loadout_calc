const configAbility = {
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
}