const configAbility = {
  "fileName": "4033021_Monster_W4_Claymore_01_LocalLegend_Ability01Insert_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "_FirstProgressInfo",
        "compareType": "=",
        "value2": 0
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "_FirstProgressInfo",
          "value": 1
        },
        {
          "name": "Start Battle Track Progress",
          "progress": 0,
          "count": 100,
          "ID": "#1%",
          "desc": "The Other Boss's Remaining HP"
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable with HP%",
          "target": {
            "name": "Target Name",
            "target": "{{EVENT[RoT] Light Praetor: 3}}"
          },
          "variableName": "_CurrentHPRatio"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{EVENT[RoT] Light Praetor: 3}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1616431833\">Monster_W4_Claymore_01_LocalLegend_LockHP_Revive</a>[<span class=\"descriptionNumberColor\">Indomitable Battle</span>]"
          },
          "passed": [
            {
              "name": "Set Battle Track Progress",
              "progress": 0,
              "count": 0,
              "ID": "#1%"
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_CurrentHPRatio",
                "compareType": "<=",
                "value2": 0.01
              },
              "passed": [
                {
                  "name": "Set Battle Track Progress",
                  "progress": 0,
                  "count": 1,
                  "ID": "#1%"
                }
              ],
              "failed": [
                {
                  "name": "Set Battle Track Progress",
                  "progress": 0,
                  "count": {
                    "operator": "Variables[0] (WHOLE) || Variables[1] (_CurrentHPRatio) || Constants[0] (100) || MUL || PARAM_1 || FUNCTION || RETURN",
                    "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">WHOLE</span>((_CurrentHPRatio * 100))",
                    "constants": [
                      100
                    ],
                    "variables": [
                      "WHOLE",
                      "_CurrentHPRatio"
                    ]
                  },
                  "ID": "#1%"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}} + {{EVENT[RoT] Light Praetor: 3}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1808493640\">Enemy_Standard_LocalLegend_Init_LockHp</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}} + {{EVENT[RoT] Light Praetor: 3}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"449361701\">Enemy_Standard_LocalLegend_Init_MuteBreak</a>"
    },
    {
      "name": "Define Custom Variable",
      "variableName": "_EnterBattle",
      "value": 0
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"735008645\">Enemy_W4_Claymore_01_LocalLegend_BlackMonst</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Level Entity}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-726340599\">Enemy_W4_Claymore_01_LocalLegend_ElationListener</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1358856185\">Enemy_W4_Claymore_01_LocalLegend_TargetSelectPrepare</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{EVENT[RoT] Light Praetor: 3}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"263808079\">Enemy_W4_Claymore_01_LocalLegend_WhiteMonst</a>",
      "casterAssign": "TargetSelf"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"357625087\">Monster_W4_Claymore_01_LocalLegend_Locking</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}} + {{EVENT[RoT] Light Praetor: 3}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-180350393\">Monster_W4_Claymore_01_LocalLegend_Ability02_Perform</a>"
    },
    {
      "name": "Define Custom Variable with Team Count",
      "target": {
        "name": "Target Name",
        "target": "{{Player Team All(with Unselectable)V2}}.[[removeMemosprite]].[[removeBattleEvents]]"
      },
      "variableName": "_CheckAvatarNum",
      "livingTargets": true
    },
    {
      "name": "Define Custom Variable with Team Count",
      "target": {
        "name": "Target Name",
        "target": "{{Player Team All(with Unselectable)V2}}.[[removeMemosprite]].[[removeBattleEvents]]"
      },
      "variableName": "_CheckPickNum",
      "livingTargets": true,
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-1375461160\">BattleEvent_W4_Claymore_01_SelectTarget</a>"
      }
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Player Team All(with Unselectable)V2}}.[[removeMemosprite]].[[removeBattleEvents]]"
      },
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-1375461160\">BattleEvent_W4_Claymore_01_SelectTarget</a>"
      },
      "ifTargetFound": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1331602258\">Enemy_W4_Claymore_01_LocalLegend_BlackCurse</a>",
          "casterAssign": "TargetSelf"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}.[[getMemosprite]] + {{Parameter Target}}.[[getBattleEvents]]"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1331602258\">Enemy_W4_Claymore_01_LocalLegend_BlackCurse</a>",
          "casterAssign": "TargetSelf"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "_CheckPickNum",
        "compareType": "<",
        "value2": {
          "operator": "Variables[0] (_CheckAvatarNum) || Constants[0] (2) || DIV || RETURN",
          "displayLines": "(_CheckAvatarNum / 2)",
          "constants": [
            2
          ],
          "variables": [
            "_CheckAvatarNum"
          ]
        }
      },
      "passed": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}.[[removeMemosprite]].[[removeBattleEvents]]"
          },
          "searchRandom": true,
          "maxTargets": {
            "operator": "Variables[0] (CEIL) || Variables[1] (_CheckAvatarNum) || Constants[0] (2) || DIV || PARAM_1 || FUNCTION || Variables[2] (_CheckPickNum) || SUB || RETURN",
            "displayLines": "(&nbsp;<span class=\"descriptionFunctionColor\">CEIL</span>((_CheckAvatarNum / 2)) - _CheckPickNum)",
            "constants": [
              2
            ],
            "variables": [
              "CEIL",
              "_CheckAvatarNum",
              "_CheckPickNum"
            ]
          },
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1331602258\">Enemy_W4_Claymore_01_LocalLegend_BlackCurse</a>",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1331602258\">Enemy_W4_Claymore_01_LocalLegend_BlackCurse</a>",
              "casterAssign": "TargetSelf"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}.[[getMemosprite]] + {{Parameter Target}}.[[getBattleEvents]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1331602258\">Enemy_W4_Claymore_01_LocalLegend_BlackCurse</a>",
              "casterAssign": "TargetSelf"
            }
          ]
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Player Team All(with Unselectable)V2}}.[[removeMemosprite]].[[removeBattleEvents]]"
      },
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"1331602258\">Enemy_W4_Claymore_01_LocalLegend_BlackCurse</a>",
        "invertCondition": true
      },
      "ifTargetFound": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-609521180\">Enemy_W4_Claymore_01_LocalLegend_WhiteCurse</a>",
          "casterAssign": "TargetSelf"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}.[[getMemosprite]] + {{Parameter Target}}.[[getBattleEvents]]"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-609521180\">Enemy_W4_Claymore_01_LocalLegend_WhiteCurse</a>",
          "casterAssign": "TargetSelf"
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Battle Event List}}"
      },
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1331602258\">Enemy_W4_Claymore_01_LocalLegend_BlackCurse</a>",
            "invertCondition": true
          },
          {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-609521180\">Enemy_W4_Claymore_01_LocalLegend_WhiteCurse</a>",
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
          "modifier": "<a class=\"gModGreen\" id=\"1331602258\">Enemy_W4_Claymore_01_LocalLegend_BlackCurse</a>",
          "casterAssign": "TargetSelf"
        }
      ]
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1375461160\">BattleEvent_W4_Claymore_01_SelectTarget</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{EVENT[RoT] Light Praetor: Light Characters}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1028185089\">Enemy_AML_Minion02_01_RallyHP_Controller_V2</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{EVENT[RoT] Dark Praetor: Dark Characters}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1028185089\">Enemy_AML_Minion02_01_RallyHP_Controller_V2</a>",
      "valuePerStack": {
        "MDF_RallyTransferRatio": {
          "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
          "displayLines": "{[PassiveSkill01[0]]}",
          "constants": [],
          "variables": [
            "{[PassiveSkill01[0]]}"
          ]
        },
        "MDF_Rally_HealPercentage": {
          "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
          "displayLines": "{[PassiveSkill01[1]]}",
          "constants": [],
          "variables": [
            "{[PassiveSkill01[1]]}"
          ]
        },
        "MDF_Rally_HealUpRatio": {
          "operator": "Variables[0] ({[PassiveSkill01[2]]}) || RETURN",
          "displayLines": "{[PassiveSkill01[2]]}",
          "constants": [],
          "variables": [
            "{[PassiveSkill01[2]]}"
          ]
        },
        "MDF_Rally_Strongth_AllDamageTypeAddedRatio": {
          "operator": "Variables[0] ({[PassiveSkill01[3]]}) || RETURN",
          "displayLines": "{[PassiveSkill01[3]]}",
          "constants": [],
          "variables": [
            "{[PassiveSkill01[3]]}"
          ]
        }
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{EVENT[RoT] Dark Praetor: Dark Characters}}"
      },
      "AttackScaling": {
        "DamageType": "Physical",
        "Damage": {
          "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
          "displayLines": "{[Skill01[0]]}",
          "constants": [],
          "variables": [
            "{[Skill01[0]]}"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "100%"
      }
    },
    "Trigger: Attack End"
  ],
  "references": []
}