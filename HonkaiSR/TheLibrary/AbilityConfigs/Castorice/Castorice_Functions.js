const configAbility = {
  "fileName": "Castorice_Functions",
  "abilityType": "Char. Functions",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "length": 3,
  "parse": [
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-815210421\">Castorice_SetDamageRatio</a>",
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "value1": "CurrentHP%",
            "compareType": ">",
            "value2": {
              "operator": "Variables[0] (0.8) || RETURN",
              "displayLines": "0.8",
              "constants": [],
              "variables": [
                0.8
              ]
            }
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "Avatar_Castorice_Rank01_DamageRatio",
              "value": 1
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": "<=",
                    "value2": {
                      "operator": "Variables[0] (0.8) || RETURN",
                      "displayLines": "0.8",
                      "constants": [],
                      "variables": [
                        0.8
                      ]
                    }
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": ">",
                    "value2": {
                      "operator": "Variables[0] (0.5) || RETURN",
                      "displayLines": "0.5",
                      "constants": [],
                      "variables": [
                        0.5
                      ]
                    }
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "Avatar_Castorice_Rank01_DamageRatio",
                  "value": {
                    "operator": "Variables[0] (1.2) || RETURN",
                    "displayLines": "1.2",
                    "constants": [],
                    "variables": [
                      1.2
                    ]
                  }
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": "<=",
                    "value2": {
                      "operator": "Variables[0] (0.5) || RETURN",
                      "displayLines": "0.5",
                      "constants": [],
                      "variables": [
                        0.5
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Avatar_Castorice_Rank01_DamageRatio",
                      "value": {
                        "operator": "Variables[0] (1.4) || RETURN",
                        "displayLines": "1.4",
                        "constants": [],
                        "variables": [
                          1.4
                        ]
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-1401999190\">Castorice_AddSpecialSP</a>",
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
            "operator": "Variables[0] (MAX) || Variables[1] (_CurSpecialSP) || Variables[2] (_FixedAddValue) || ADD || Variables[3] (_MaxSpecialSP) || SUB || Constants[0] (0) || PARAM_2 || FUNCTION || RETURN",
            "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MAX</span>(((_CurSpecialSP + _FixedAddValue) - _MaxSpecialSP), 0)",
            "constants": [
              0
            ],
            "variables": [
              "MAX",
              "_CurSpecialSP",
              "_FixedAddValue",
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
            "operator": "Variables[0] (_FixedAddValue) || RETURN",
            "displayLines": "_FixedAddValue",
            "constants": [],
            "variables": [
              "_FixedAddValue"
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
      "functionName": "<a class=\"gTempYellow\" id=\"fun__1186346947\">Castorice_ExtraSpecialSPReturn</a>",
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
          "functionName": "<a class=\"gTempYellow\" id=\"-1401999190\">Castorice_AddSpecialSP</a>",
          "variables": {
            "_FixedAddValue": {
              "operator": "Variables[0] (_CurExtraSpecialSP) || Variables[1] (MDF_ReturnRatio) || MUL || RETURN",
              "displayLines": "(_CurExtraSpecialSP * MDF_ReturnRatio)",
              "constants": [],
              "variables": [
                "_CurExtraSpecialSP",
                "MDF_ReturnRatio"
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
    }
  ],
  "references": []
}