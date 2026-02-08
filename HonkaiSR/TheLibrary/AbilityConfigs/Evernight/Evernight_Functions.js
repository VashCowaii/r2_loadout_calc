const configAbility = {
  "fileName": "Evernight_Functions",
  "abilityType": "Char. Functions",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "length": 8,
  "parse": [
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-1711321550\">function_Evernight_Group_FollowControl_00</a>",
      "parse": []
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-1551336747\">function_Evernight_Group_FollowControl_STB</a>",
      "parse": []
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__724548436\">function_Evernight_Group_FollowControl_ViewMode</a>",
      "parse": []
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-1946909591\">function_Evernight_Group_SizeControl_STB</a>",
      "parse": []
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-1393796287\">function_Evernight_Group_SizeControl_STB2</a>",
      "parse": []
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__1349241137\">function_Evernight_Group_SizeControl_Perf2</a>",
      "parse": []
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__294638745\">function_Evernight_Group_SizeControl_Perf</a>",
      "parse": []
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__1497424763\">function_Evernight_TryCreateServant</a>",
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target Count",
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Memosprite}}"
            },
            "compareType": "<=",
            "value2": 0,
            "livingTargets": true
          },
          "passed": [
            {
              "name": "Summon Memosprite",
              "memoID": 11413,
              "valuePerStack": {
                "Init_Count": {
                  "operator": "Variables[0] (DV_Partner_Count) || RETURN",
                  "displayLines": "DV_Partner_Count",
                  "constants": [],
                  "variables": [
                    "DV_Partner_Count"
                  ]
                },
                "Init_HP_Ratio": {
                  "operator": "Variables[0] (DV_HP_Ratio) || RETURN",
                  "displayLines": "DV_HP_Ratio",
                  "constants": [],
                  "variables": [
                    "DV_HP_Ratio"
                  ]
                },
                "Init_Delay": {
                  "operator": "Variables[0] (DV_Delay) || RETURN",
                  "displayLines": "DV_Delay",
                  "constants": [],
                  "variables": [
                    "DV_Delay"
                  ]
                },
                "AbilityP01_P1_AddCount": {
                  "operator": "Variables[0] (2) || RETURN",
                  "displayLines": "2",
                  "constants": [],
                  "variables": [
                    2
                  ]
                },
                "_Evernight_Extra_Energy": {
                  "operator": "Variables[0] (2) || RETURN",
                  "displayLines": "2",
                  "constants": [],
                  "variables": [
                    2
                  ]
                },
                "AbilityRank_Eidolon6_P1_Ratio": {
                  "operator": "Variables[0] (0.3) || RETURN",
                  "displayLines": "0.3",
                  "constants": [],
                  "variables": [
                    0.3
                  ]
                }
              },
              "afterSummon": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_Evernight_00_DeathRattle_Layer",
                  "value": 0
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Trace Activated",
                    "conditionList": "Dark the Night, Still the Moon",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1710373270\">Evernight_PointB1_Crit</a>[<span class=\"descriptionNumberColor\">Dark the Night, Still the Moon</span>]",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (0.35) || RETURN",
                          "displayLines": "0.35",
                          "constants": [],
                          "variables": [
                            0.35
                          ]
                        }
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 2,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1701896777\">Evernight_Eidolon2_Crit</a>[<span class=\"descriptionNumberColor\">Listen Up, the Slumber Speaks Soft</span>]",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (0.4) || RETURN",
                          "displayLines": "0.4",
                          "constants": [],
                          "variables": [
                            0.4
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
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2043260870\">Evernight_HPChange</a>",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (2) || RETURN",
                      "displayLines": "2",
                      "constants": [],
                      "variables": [
                        2
                      ]
                    }
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "DV_Partner_Count",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (_Partner_Count_Max) || RETURN",
                      "displayLines": "_Partner_Count_Max",
                      "constants": [],
                      "variables": [
                        "_Partner_Count_Max"
                      ]
                    }
                  },
                  "failed": [
                    {
                      "name": "Force Auto-Battle on Target",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "enable": true
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"132344239\">Evernight_Ability02_ChangeSkill</a>"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-889130257\">Evernight_UltraMode</a>[<span class=\"descriptionNumberColor\">Darkest Riddle</span>]"
                  },
                  "passed": [
                    {
                      "name": "Change Character UI",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      }
                    }
                  ]
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
                        "modifier": "<a class=\"gModGreen\" id=\"-889130257\">Evernight_UltraMode</a>[<span class=\"descriptionNumberColor\">Darkest Riddle</span>]"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1950285194\">Evernight_S03</a>",
                        "invertCondition": true
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
                      "modifier": "<a class=\"gModGreen\" id=\"1307478561\">Evernight_UltraMode_Effect</a>",
                      "casterAssign": "TargetSelf"
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
  "references": []
}