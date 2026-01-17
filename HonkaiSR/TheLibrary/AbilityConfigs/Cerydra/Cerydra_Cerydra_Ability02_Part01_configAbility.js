const configAbility = {
  "fileName": "Cerydra_Cerydra_Ability02_Part01",
  "childAbilityList": [
    "Cerydra_Cerydra_Ability02_Part01",
    "Cerydra_Cerydra_Ability02_Camera_TimeLine",
    "Cerydra_Cerydra_Ability02_1_Camera_TimeLine",
    "Cerydra_Cerydra_Ability02_2_Camera_TimeLine",
    "Cerydra_Cerydra_Ability02_Others_Part02",
    "Cerydra_Cerydra_Ability02_InsertEidolon1",
    "Cerydra_Cerydra_Ability02_Insert_Camera",
    "Cerydra_Cerydra_Ability02_3_Camera_TimeLine"
  ],
  "skillTrigger": "Skill02",
  "abilityType": "Skill",
  "energy": 30,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
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
          "name": "IF",
          "conditions": {
            "name": "Current Action Holder Is",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            }
          }
        },
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Cerydra_Ability02_Others_Part02"
        }
      ],
      "failed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "modifier": "Cerydra_Ability02_Target_Lv1[<span class=\"descriptionNumberColor\">Military Merit</span>]"
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
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
              },
              "passed": [
                "Deleted bullshit",
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "ability": "Cerydra_Ability02_Others_Part02"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Ability Target(ST)}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "invertCondition": true
                  }
                }
              ],
              "failed": [
                "Deleted bullshit",
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "DV_CurrentPoint",
                        "compareType": "=",
                        "value2": 2
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "DV_CurrentPoint",
                        "compareType": "=",
                        "value2": 4
                      }
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "DV_CurrentPoint",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "DV_CurrentPoint",
                        "compareType": "=",
                        "value2": 3
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "DV_CurrentPoint",
                        "compareType": "=",
                        "value2": 5
                      }
                    ]
                  }
                },
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "ability": "Cerydra_Ability02_Others_Part02"
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                },
                "modifier": "Cerydra_Ability02_Target_Lv2[<span class=\"descriptionNumberColor\">Peerage</span>]"
              },
              "passed": [
                "Deleted bullshit",
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "ability": "Cerydra_Ability02_Others_Part02"
                }
              ],
              "failed": [
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "ability": "Cerydra_Ability02_Others_Part02"
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