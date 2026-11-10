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
          "variableName": "_CurrentSpeed",
          "readTarget": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "value": "&nbsp;<span class=\"descriptionNumberColor\">Speed</span>&nbsp;"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "_CurrentSpeed",
            "compareType": ">=",
            "value2": {
              "displayLines": "180"
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
                  "displayLines": "0.2"
                }
              }
            },
            {
              "name": "Define Custom Variable with Stat",
              "variableName": "_CurrentSpeedConvert",
              "readTarget": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "value": "&nbsp;<span class=\"descriptionNumberColor\">SpeedConverted</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(_CurrentSpeed - _CurrentSpeedConvert)"
              },
              "variableName": "_CurrentSpeed"
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(_CurrentSpeed - 180)"
              },
              "variableName": "_CurrentSpeed"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_CurrentSpeed",
                "compareType": ">=",
                "value2": {
                  "displayLines": "60"
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "60"
                  },
                  "variableName": "_CurrentSpeed"
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
                      "displayLines": "_CurrentSpeed"
                    },
                    "MDF_DamageIncrease": {
                      "displayLines": "0.2"
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
          "variableName": "_CurSpecialSP",
          "readTarget": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrentSpecial</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable with Stat",
          "variableName": "_MaxSpecialSP",
          "readTarget": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": "&nbsp;<span class=\"descriptionNumberColor\">MaxSpecialEnergy</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable",
          "scope": "ContextTaskTemplate",
          "value": {
            "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MAX</span>(((_CurSpecialSP + parameter[0]_AddValue) - _MaxSpecialSP), 0)"
          },
          "variableName": "_ExtraSpecialSP"
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
                "displayLines": "_ExtraSpecialSP"
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
            "displayLines": "parameter[0]_AddValue"
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
          "variableName": "_CurExtraSpecialSP",
          "readTarget": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrentSpecialOverflow</span>&nbsp;"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"1682831339\">Cyrene_ChargeEnergy</a>",
          "variables": {
            "parameter[0]_AddValue": {
              "displayLines": "_CurExtraSpecialSP"
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