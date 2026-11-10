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
          "modifier": "<a class=\"gModGreen\" id=\"1079912443\">Cerydra_PointB3</a>[<span class=\"descriptionNumberColor\">Vici</span>]",
          "duration": {
            "displayLines": "3"
          },
          "valuePerStack": {
            "MDF_PropertyValue": {
              "displayLines": "20"
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
            "displayLines": "2"
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
        "modifier": "<a class=\"gModGreen\" id=\"1716749059\">Cerydra_Ability02_Target</a>",
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
          "modifier": "<a class=\"gModGreen\" id=\"1716749059\">Cerydra_Ability02_Target</a>",
          "valuePerStack": {
            "DV_PointAdded_Get": {
              "displayLines": "1"
            }
          }
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"1612575312\">Cerydra_Template_MaxPointHandle</a>",
          "variables": {
            "DV_AddPoint": {
              "displayLines": "1"
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
                "modifier": "<a class=\"gModGreen\" id=\"-2088457679\">Cerydra_Ability02_Target_Lv1</a>[<span class=\"descriptionNumberColor\">Military Merit</span>]"
              },
              {
                "name": "Compare: Variable",
                "value1": "DV_CurrentPoint",
                "compareType": ">=",
                "value2": {
                  "displayLines": "(6 - 1)"
                }
              }
            ]
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "value": 1,
              "variableName": "DV_DelayReachPromotionRank01_Flag"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"1612575312\">Cerydra_Template_MaxPointHandle</a>",
              "variables": {
                "DV_AddPoint": {
                  "displayLines": "1"
                }
              }
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"1336664335\">Cerydra_Template_ReachPromotionEidolon1</a>"
            }
          ],
          "failed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"1612575312\">Cerydra_Template_MaxPointHandle</a>",
              "variables": {
                "DV_AddPoint": {
                  "displayLines": "1"
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
        "modifier": "<a class=\"gModGreen\" id=\"1690765176\">Cerydra_Maze_Modifier</a>"
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
          "modifier": "<a class=\"gModGreen\" id=\"1690765176\">Cerydra_Maze_Modifier</a>"
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "value": 0,
      "variableName": "DV_DelayReachPromotionRank01_Flag"
    },
    "Trigger: Ability End"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  }
}