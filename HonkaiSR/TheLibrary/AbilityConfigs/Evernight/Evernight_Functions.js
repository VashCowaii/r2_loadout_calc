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
      "functionName": "function_Evernight_Group_FollowControl_00",
      "parse": []
    },
    {
      "name": "CharacterFunctions",
      "functionName": "function_Evernight_Group_FollowControl_STB",
      "parse": []
    },
    {
      "name": "CharacterFunctions",
      "functionName": "function_Evernight_Group_FollowControl_ViewMode",
      "parse": []
    },
    {
      "name": "CharacterFunctions",
      "functionName": "function_Evernight_Group_SizeControl_STB",
      "parse": []
    },
    {
      "name": "CharacterFunctions",
      "functionName": "function_Evernight_Group_SizeControl_STB2",
      "parse": []
    },
    {
      "name": "CharacterFunctions",
      "functionName": "function_Evernight_Group_SizeControl_Perf2",
      "parse": []
    },
    {
      "name": "CharacterFunctions",
      "functionName": "function_Evernight_Group_SizeControl_Perf",
      "parse": []
    },
    {
      "name": "CharacterFunctions",
      "functionName": "function_Evernight_TryCreateServant",
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
                      "modifier": "Evernight_PointB1_Crit[<span class=\"descriptionNumberColor\">Dark the Night, Still the Moon</span>]",
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
                      "modifier": "Evernight_Eidolon2_Crit[<span class=\"descriptionNumberColor\">Listen Up, the Slumber Speaks Soft</span>]",
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
                  "modifier": "Evernight_HPChange",
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
                  "modifier": "Evernight_Ability02_ChangeSkill"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "Evernight_UltraMode[<span class=\"descriptionNumberColor\">Darkest Riddle</span>]"
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
                        "modifier": "Evernight_UltraMode[<span class=\"descriptionNumberColor\">Darkest Riddle</span>]"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "Evernight_S03",
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
                      "modifier": "Evernight_UltraMode_Effect",
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