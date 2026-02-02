const configAbility = {
  "fileName": "3021032_Monster_W2_ArgentiTotem_02_IF_AbilityP01_Part01",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Target Name",
          "target": "{{Level Entity}}"
        },
        "value1": "Monster_IF_InsertCameraFlag",
        "compareType": "=",
        "value2": 1
      },
      "passed": [
        {
          "name": "Use Custom Character Function",
          "functionName": "DeathCamera_First"
        }
      ]
    },
    {
      "name": "UI Display Event",
      "popUpText": "Imitation of Alacritous Desire"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "PowerFlag",
        "compareType": "=",
        "value2": 1,
        "contextScope": "TargetEntity"
      },
      "passed": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Check Boolean Value",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "value": "PowerFlag"
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "W2_ArgentiTotem_02_BattleScore1"
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_MaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Monster_W2_ArgentiTotem_02_IF_Shield_Modifier[<span class=\"descriptionNumberColor\">Shield</span>]"
              },
              "passed": [
                {
                  "name": "Adjust Shield",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifierNameArray": [
                    "Monster_W2_ArgentiTotem_02_IF_Shield_Modifier[<span class=\"descriptionNumberColor\">Shield</span>]"
                  ],
                  "value": {
                    "operator": "Variables[0] (UnusedUnderThisBase_11) || Variables[1] (_MaxHP) || MUL || RETURN",
                    "displayLines": "(UnusedUnderThisBase_11 * _MaxHP)",
                    "constants": [],
                    "variables": [
                      "UnusedUnderThisBase_11",
                      "_MaxHP"
                    ]
                  }
                }
              ],
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Monster_W2_ArgentiTotem_02_IF_Shield_Modifier[<span class=\"descriptionNumberColor\">Shield</span>]",
                  "duration": 2,
                  "valuePerStack": {
                    "MDF_ShowValue": {
                      "operator": "Variables[0] (UnusedUnderThisBase_11) || Variables[1] (_MaxHP) || MUL || RETURN",
                      "displayLines": "(UnusedUnderThisBase_11 * _MaxHP)",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_11",
                        "_MaxHP"
                      ]
                    }
                  },
                  "casterAssign": "TargetSelf"
                }
              ]
            }
          ]
        }
      ],
      "failed": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_MaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Monster_W2_ArgentiTotem_02_IF_Shield_Modifier[<span class=\"descriptionNumberColor\">Shield</span>]"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Monster_W2_ArgentiTotem_02_IF_Shield_Modifier[<span class=\"descriptionNumberColor\">Shield</span>]",
                  "duration": 2,
                  "valuePerStack": {
                    "MDF_ShowValue": {
                      "operator": "Variables[0] (UnusedUnderThisBase_11) || Variables[1] (_MaxHP) || MUL || RETURN",
                      "displayLines": "(UnusedUnderThisBase_11 * _MaxHP)",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_11",
                        "_MaxHP"
                      ]
                    }
                  },
                  "casterAssign": "TargetSelf"
                },
                {
                  "name": "Adjust Shield",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifierNameArray": [
                    "Monster_W2_ArgentiTotem_02_IF_Shield_Modifier[<span class=\"descriptionNumberColor\">Shield</span>]"
                  ],
                  "value": {
                    "operator": "Variables[0] (UnusedUnderThisBase_11) || Variables[1] (_MaxHP) || MUL || RETURN",
                    "displayLines": "(UnusedUnderThisBase_11 * _MaxHP)",
                    "constants": [],
                    "variables": [
                      "UnusedUnderThisBase_11",
                      "_MaxHP"
                    ]
                  }
                },
                {
                  "name": "Adjust Shield",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifierNameArray": [
                    "Monster_W2_ArgentiTotem_02_IF_Shield_Modifier[<span class=\"descriptionNumberColor\">Shield</span>]"
                  ],
                  "value": {
                    "operator": "Variables[0] (UnusedUnderThisBase_11) || Variables[1] (_MaxHP) || MUL || RETURN",
                    "displayLines": "(UnusedUnderThisBase_11 * _MaxHP)",
                    "constants": [],
                    "variables": [
                      "UnusedUnderThisBase_11",
                      "_MaxHP"
                    ]
                  }
                }
              ],
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Monster_W2_ArgentiTotem_02_IF_Shield_Modifier[<span class=\"descriptionNumberColor\">Shield</span>]",
                  "duration": 2,
                  "valuePerStack": {
                    "MDF_ShowValue": {
                      "operator": "Variables[0] (UnusedUnderThisBase_11) || Variables[1] (_MaxHP) || MUL || RETURN",
                      "displayLines": "(UnusedUnderThisBase_11 * _MaxHP)",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_11",
                        "_MaxHP"
                      ]
                    }
                  },
                  "casterAssign": "TargetSelf"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Target Name",
          "target": "{{Level Entity}}"
        },
        "value1": "Monster_IF_InsertCount",
        "compareType": "=",
        "value2": 0
      }
    }
  ],
  "references": []
}