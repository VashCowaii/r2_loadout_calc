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
              "displayLines": "0.8"
            }
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "value": 1,
              "variableName": "Avatar_Castorice_Rank01_DamageRatio"
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
                      "displayLines": "0.8"
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
                      "displayLines": "0.5"
                    }
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "1.2"
                  },
                  "variableName": "Avatar_Castorice_Rank01_DamageRatio"
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
                      "displayLines": "0.5"
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "1.4"
                      },
                      "variableName": "Avatar_Castorice_Rank01_DamageRatio"
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
            "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MAX</span>(((_CurSpecialSP + _FixedAddValue) - _MaxSpecialSP), 0)"
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
            "displayLines": "_FixedAddValue"
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
          "variableName": "_CurExtraSpecialSP",
          "readTarget": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrentSpecialOverflow</span>&nbsp;"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-1401999190\">Castorice_AddSpecialSP</a>",
          "variables": {
            "_FixedAddValue": {
              "displayLines": "(_CurExtraSpecialSP * MDF_ReturnRatio)"
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