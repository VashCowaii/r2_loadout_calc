const configAbility = {
  "fileName": "Cerydra_Cerydra_Ability02_Others_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Vici"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}} | {{Ability Target(ST)}}"
          },
          "modifier": "Cerydra_PointB3[<span class=\"descriptionNumberColor\">Vici</span>]",
          "duration": {
            "operator": "Variables[0] (3) || RETURN",
            "displayLines": "3",
            "constants": [],
            "variables": [
              3
            ]
          },
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (20) || RETURN",
              "displayLines": "20",
              "constants": [],
              "variables": [
                20
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
        "eidolon": 1
      },
      "passed": [
        {
          "name": "Update Energy",
          "on": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "value": {
            "operator": "Variables[0] (2) || RETURN",
            "displayLines": "2",
            "constants": [],
            "variables": [
              2
            ]
          },
          "isFixed": "(Fixed)",
          "tag": "ActiveSkillAdd"
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
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Ability Target(ST)}}"
        },
        "modifier": "Cerydra_Ability02_Target",
        "invertCondition": true,
        "justAddedOrActive": true
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "Cerydra_Ability02_Target",
          "valuePerStack": {
            "DV_PointAdded_Get": {
              "operator": "Variables[0] (1) || RETURN",
              "displayLines": "1",
              "constants": [],
              "variables": [
                1
              ]
            }
          }
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Cerydra_Template_MaxPointHandle",
          "variables": {
            "DV_AddPoint": {
              "operator": "Variables[0] (1) || RETURN",
              "displayLines": "1",
              "constants": [],
              "variables": [
                1
              ]
            }
          }
        }
      ],
      "failed": [
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                },
                "modifier": "Cerydra_Ability02_Target_Lv1[<span class=\"descriptionNumberColor\">Military Merit</span>]"
              },
              {
                "name": "Compare: Variable",
                "value1": "DV_CurrentPoint",
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] (6) || Variables[1] (1) || SUB || RETURN",
                  "displayLines": "(6 - 1)",
                  "constants": [],
                  "variables": [
                    6,
                    1
                  ]
                }
              }
            ]
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "DV_DelayReachPromotionRank01_Flag",
              "value": 1
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "Cerydra_Template_MaxPointHandle",
              "variables": {
                "DV_AddPoint": {
                  "operator": "Variables[0] (1) || RETURN",
                  "displayLines": "1",
                  "constants": [],
                  "variables": [
                    1
                  ]
                }
              }
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "Cerydra_Template_ReachPromotionEidolon1"
            }
          ],
          "failed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "Cerydra_Template_MaxPointHandle",
              "variables": {
                "DV_AddPoint": {
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
        "modifier": "Cerydra_Maze_Modifier"
      },
      "passed": [
        {
          "name": "Update Ability Properties",
          "propertyList": [
            {
              "name": "Ability Property Action",
              "propertyName": "Skill Point Cost",
              "propertyAction": "Reset to Default"
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Cerydra_Maze_Modifier"
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "variableName": "DV_DelayReachPromotionRank01_Flag",
      "value": 0
    },
    "Trigger: Ability End"
  ],
  "references": []
}