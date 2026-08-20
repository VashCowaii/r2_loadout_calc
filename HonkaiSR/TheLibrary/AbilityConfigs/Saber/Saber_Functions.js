const configAbility = {
  "fileName": "Saber_Functions",
  "abilityType": "Char. Functions",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "length": 2,
  "parse": [
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-2003815504\">function_Saber_SurgeCheck</a>",
      "parse": [
        {
          "name": "Define Custom Variable",
          "variableName": "DV_SurgePointShow",
          "value": {
            "operator": "Variables[0] (DV_SurgePoint) || RETURN",
            "displayLines": "DV_SurgePoint",
            "constants": [],
            "variables": [
              "DV_SurgePoint"
            ]
          }
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "_SP_R",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyRegenRateSUM</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "_MaxSP",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "_C_SP",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrent</span>&nbsp;"
        },
        {
          "name": "Update UI Preview",
          "show": "Show",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "previewType": "Energy Gain",
          "previewValue": {
            "operator": "Variables[0] (8) || Variables[1] (DV_SurgePointShow) || MUL || Constants[0] (30) || Variables[2] (_SP_R) || MUL || ADD || RETURN",
            "displayLines": "((8 * DV_SurgePointShow) + (30 * _SP_R))",
            "constants": [
              30
            ],
            "variables": [
              8,
              "DV_SurgePointShow",
              "_SP_R"
            ]
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Compare: Variable",
                "value1": "DV_SurgePoint",
                "compareType": ">",
                "value2": 0
              },
              {
                "name": "Compare: Variable",
                "value1": "_MaxSP",
                "compareType": "<=",
                "value2": {
                  "operator": "Variables[0] (_C_SP) || Variables[1] (8) || Variables[2] (DV_SurgePointShow) || MUL || ADD || Constants[0] (30) || Variables[3] (_SP_R) || MUL || ADD || RETURN",
                  "displayLines": "((_C_SP + (8 * DV_SurgePointShow)) + (30 * _SP_R))",
                  "constants": [
                    30
                  ],
                  "variables": [
                    "_C_SP",
                    8,
                    "DV_SurgePointShow",
                    "_SP_R"
                  ]
                }
              }
            ]
          },
          "passed": [
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
                    "modifier": "<a class=\"gModGreen\" id=\"879085567\">Saber_Ability03_CD</a>[<span class=\"descriptionNumberColor\">Mana Burst</span>]"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Skill Points Modification",
                  "adjustmentValue": 1,
                  "adjustmentType": "+"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Current Turn Owner}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Assign Advance/Delay to Current Ability Use",
                      "adjustmentValue": 0,
                      "adjustmentType": "="
                    }
                  ]
                },
                {
                  "name": "Action Advance/Delay",
                  "advanceType": "Set",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "set": 0
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"879085567\">Saber_Ability03_CD</a>[<span class=\"descriptionNumberColor\">Mana Burst</span>]"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"268332262\">Saber_Ability03_CD_02</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Compare: Variable",
                "value1": "DV_SurgePoint",
                "compareType": "<=",
                "value2": 0
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-437296268\">Saber_Wind_Ability03_buff</a>"
              },
              {
                "name": "Compare: Variable",
                "value1": "_MaxSP",
                "compareType": ">",
                "value2": {
                  "operator": "Variables[0] (_C_SP) || Variables[1] (8) || Variables[2] (DV_SurgePointShow) || MUL || ADD || Constants[0] (30) || Variables[3] (_SP_R) || MUL || ADD || RETURN",
                  "displayLines": "((_C_SP + (8 * DV_SurgePointShow)) + (30 * _SP_R))",
                  "constants": [
                    30
                  ],
                  "variables": [
                    "_C_SP",
                    8,
                    "DV_SurgePointShow",
                    "_SP_R"
                  ]
                }
              }
            ]
          },
          "passed": [
            {
              "name": "Update Ability Enhance Button",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "display": "Hide",
              "abilityName": "Skill"
            }
          ],
          "failed": [
            {
              "name": "Update Ability Enhance Button",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "display": "Show",
              "abilityName": "Skill"
            }
          ]
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-1526947844\">function_Gilgamesh_KingCount</a>",
      "parse": [
        {
          "name": "Define Custom Variable",
          "variableName": "Avatar_Gilgamesh_00_KingCount",
          "value": {
            "operator": "Variables[0] (Avatar_Gilgamesh_00_KingCount) || Variables[1] (KingCountAdd) || ADD || RETURN",
            "displayLines": "(Avatar_Gilgamesh_00_KingCount + KingCountAdd)",
            "constants": [],
            "variables": [
              "Avatar_Gilgamesh_00_KingCount",
              "KingCountAdd"
            ]
          }
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": {
            "operator": "Variables[0] (Avatar_Gilgamesh_00_KingCount) || RETURN",
            "displayLines": "Avatar_Gilgamesh_00_KingCount",
            "constants": [],
            "variables": [
              "Avatar_Gilgamesh_00_KingCount"
            ]
          },
          "bar#": 4
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"872801045\">Gilgamesh_PassiveSpeed</a>[<span class=\"descriptionNumberColor\">\"Amuse Me to the Fullest\"</span>]"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Compare: Variable",
                "value1": "Avatar_Gilgamesh_00_IsFirstTime",
                "compareType": "=",
                "value2": {
                  "operator": "Constants[0] (0) || RETURN",
                  "displayLines": "0",
                  "constants": [
                    0
                  ],
                  "variables": []
                }
              },
              {
                "name": "Compare: Variable",
                "value1": "Avatar_Gilgamesh_00_KingCount",
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] (UnusedUnderThisBase_7402) || RETURN",
                  "displayLines": "UnusedUnderThisBase_7402",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_7402"
                  ]
                }
              }
            ]
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "Avatar_Gilgamesh_00_IsFirstTime",
              "value": 1
            },
            {
              "name": "Define Custom Variable",
              "variableName": "Avatar_Gilgamesh_00_FirstHappyTurn",
              "value": 1
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1040682786\">Gilgamesh_Lazy</a>"
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (Avatar_Gilgamesh_00_KingCount) || RETURN",
                "displayLines": "Avatar_Gilgamesh_00_KingCount",
                "constants": [],
                "variables": [
                  "Avatar_Gilgamesh_00_KingCount"
                ]
              },
              "assignState": "True",
              "priorState": "Active",
              "bar#": 4
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1937334192\">Gilgamesh_DamageUp</a>[<span class=\"descriptionNumberColor\">Interest Piqued!</span>]"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"646197750\">Gilgamesh_Ability02_CD</a>"
            }
          ]
        }
      ]
    }
  ],
  "references": []
}