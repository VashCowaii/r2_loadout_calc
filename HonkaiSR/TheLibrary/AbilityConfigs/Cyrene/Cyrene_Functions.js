const configAbility = {
  "fileName": "Cyrene_Functions",
  "abilityType": "Char. Functions",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "length": 5,
  "parse": [
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__1194720287\">Cyrene_PointB3_CheckSpeed</a>",
      "parse": [
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "variableName": "_CurrentSpeed",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">Speed</span>&nbsp;"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "_CurrentSpeed",
            "compareType": ">=",
            "value2": {
              "operator": "Variables[0] (180) || RETURN",
              "displayLines": "180",
              "constants": [],
              "variables": [
                180
              ]
            }
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"827249673\">Cyrene_PointB3_Sub3</a>[<span class=\"descriptionNumberColor\">Causality in Trichotomy</span>]",
              "valuePerStack": {
                "MDF_DamageIncrease": {
                  "operator": "Variables[0] (0.2) || RETURN",
                  "displayLines": "0.2",
                  "constants": [],
                  "variables": [
                    0.2
                  ]
                }
              }
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "_CurrentSpeedConvert",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">SpeedConverted</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_CurrentSpeed",
              "value": {
                "operator": "Variables[0] (_CurrentSpeed) || Variables[1] (_CurrentSpeedConvert) || SUB || RETURN",
                "displayLines": "(_CurrentSpeed - _CurrentSpeedConvert)",
                "constants": [],
                "variables": [
                  "_CurrentSpeed",
                  "_CurrentSpeedConvert"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_CurrentSpeed",
              "value": {
                "operator": "Variables[0] (_CurrentSpeed) || Variables[1] (180) || SUB || RETURN",
                "displayLines": "(_CurrentSpeed - 180)",
                "constants": [],
                "variables": [
                  "_CurrentSpeed",
                  180
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_CurrentSpeed",
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] (60) || RETURN",
                  "displayLines": "60",
                  "constants": [],
                  "variables": [
                    60
                  ]
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_CurrentSpeed",
                  "value": {
                    "operator": "Variables[0] (60) || RETURN",
                    "displayLines": "60",
                    "constants": [],
                    "variables": [
                      60
                    ]
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_CurrentSpeed",
                "compareType": ">=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}+{{Modifier Holder}}.[[getMemosprite]]"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"810472054\">Cyrene_PointB3_Sub2</a>[<span class=\"descriptionNumberColor\">Causality in Trichotomy</span>]",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (_CurrentSpeed) || RETURN",
                      "displayLines": "_CurrentSpeed",
                      "constants": [],
                      "variables": [
                        "_CurrentSpeed"
                      ]
                    },
                    "MDF_DamageIncrease": {
                      "operator": "Variables[0] (0.2) || RETURN",
                      "displayLines": "0.2",
                      "constants": [],
                      "variables": [
                        0.2
                      ]
                    }
                  }
                }
              ],
              "failed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}+{{Modifier Holder}}.[[getMemosprite]]"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"810472054\">Cyrene_PointB3_Sub2</a>[<span class=\"descriptionNumberColor\">Causality in Trichotomy</span>]"
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"827249673\">Cyrene_PointB3_Sub3</a>[<span class=\"descriptionNumberColor\">Causality in Trichotomy</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}+{{Modifier Holder}}.[[getMemosprite]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"810472054\">Cyrene_PointB3_Sub2</a>[<span class=\"descriptionNumberColor\">Causality in Trichotomy</span>]"
            }
          ]
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-619579107\">Cyrene_ChrysosCheck</a>",
      "parse": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{{{Cyrene}}'s All Player Characters}}-{{Caster}}"
          },
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Target is Pathstrider",
                "path": [
                  "Remembrance"
                ],
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                }
              },
              {
                "name": "Is Part Of Group",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "group": "Chrysos"
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
              "modifier": "<a class=\"gModGreen\" id=\"-1865411138\">ChrysosMark</a>"
            }
          ]
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__1682831339\">Cyrene_ChargeEnergy</a>",
      "parse": [
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "_CurSpecialSP",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrentSpecial</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "_MaxSpecialSP",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">MaxSpecialEnergy</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable",
          "scope": "ContextTaskTemplate",
          "variableName": "_ExtraSpecialSP",
          "value": {
            "operator": "Variables[0] (MAX) || Variables[1] (_CurSpecialSP) || Variables[2] (parameter[0]_AddValue) || ADD || Variables[3] (_MaxSpecialSP) || SUB || Constants[0] (0) || PARAM_2 || FUNCTION || RETURN",
            "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MAX</span>(((_CurSpecialSP + parameter[0]_AddValue) - _MaxSpecialSP), 0)",
            "constants": [
              0
            ],
            "variables": [
              "MAX",
              "_CurSpecialSP",
              "parameter[0]_AddValue",
              "_MaxSpecialSP"
            ]
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "_ExtraSpecialSP",
            "compareType": ">",
            "value2": 0,
            "contextScope": "ContextTaskTemplate"
          },
          "passed": [
            {
              "name": "Define Custom Property",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrentSpecialOverflow</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (_ExtraSpecialSP) || RETURN",
                "displayLines": "_ExtraSpecialSP",
                "constants": [],
                "variables": [
                  "_ExtraSpecialSP"
                ]
              }
            }
          ]
        },
        {
          "name": "Update Energy",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": {
            "operator": "Variables[0] (parameter[0]_AddValue) || RETURN",
            "displayLines": "parameter[0]_AddValue",
            "constants": [],
            "variables": [
              "parameter[0]_AddValue"
            ]
          },
          "isFixed": "(Fixed)",
          "ignoreBlock": true,
          "isSpecialEnergy": true
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-1728765029\">Cyrene_ExtraSpecialSPReturn</a>",
      "parse": [
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "_CurExtraSpecialSP",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrentSpecialOverflow</span>&nbsp;"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"1682831339\">Cyrene_ChargeEnergy</a>",
          "variables": {
            "parameter[0]_AddValue": {
              "operator": "Variables[0] (_CurExtraSpecialSP) || RETURN",
              "displayLines": "_CurExtraSpecialSP",
              "constants": [],
              "variables": [
                "_CurExtraSpecialSP"
              ]
            }
          }
        },
        {
          "name": "Define Custom Property",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrentSpecialOverflow</span>&nbsp;",
          "value": 0,
          "function": "="
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-348324927\">Cyrene_Preload_ServantReadyEffect</a>",
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "_IsPreload",
            "compareType": "=",
            "value2": 1
          }
        }
      ]
    }
  ],
  "references": []
}