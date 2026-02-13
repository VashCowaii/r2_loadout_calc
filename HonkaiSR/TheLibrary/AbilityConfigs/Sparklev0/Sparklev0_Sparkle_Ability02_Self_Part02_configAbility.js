const configAbility = {
  "fileName": "Sparklev0_Sparkle_Ability02_Self_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable with Stat",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "MDF_Sparkle_CritDmgValue",
      "value": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;"
    },
    {
      "name": "Define Custom Variable",
      "variableName": "MDF_CriticalDamageBase_change",
      "value": {
        "operator": "Variables[0] (MDF_Sparkle_CritDmgValue) || RETURN",
        "displayLines": "MDF_Sparkle_CritDmgValue",
        "constants": [],
        "variables": [
          "MDF_Sparkle_CritDmgValue"
        ]
      }
    },
    {
      "name": "Define Custom Variable",
      "variableName": "MDF_CriticalDamageBase_change",
      "value": {
        "operator": "Variables[0] (MDF_CriticalDamageBase_change) || Variables[1] (0.24) || MUL || RETURN",
        "displayLines": "(MDF_CriticalDamageBase_change * 0.24)",
        "constants": [],
        "variables": [
          "MDF_CriticalDamageBase_change",
          0.24
        ]
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 6
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "NDF_Sparkle_Rank06_CritDmg",
          "value": {
            "operator": "Variables[0] (MDF_Sparkle_CritDmgValue) || Variables[1] (0.3) || MUL || RETURN",
            "displayLines": "(MDF_Sparkle_CritDmgValue * 0.3)",
            "constants": [],
            "variables": [
              "MDF_Sparkle_CritDmgValue",
              0.3
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1817279389\">Sparkle_Ability02_CritDmgAddedRatio01</a>[<span class=\"descriptionNumberColor\">Dreamdiver</span>]",
          "duration": {
            "operator": "Variables[0] (1) || RETURN",
            "displayLines": "1",
            "constants": [],
            "variables": [
              1
            ]
          },
          "valuePerStack": {
            "MDF_PropertyValueConvert": {
              "operator": "Variables[0] (MDF_CriticalDamageBase_change) || Variables[1] (NDF_Sparkle_Rank06_CritDmg) || ADD || RETURN",
              "displayLines": "(MDF_CriticalDamageBase_change + NDF_Sparkle_Rank06_CritDmg)",
              "constants": [],
              "variables": [
                "MDF_CriticalDamageBase_change",
                "NDF_Sparkle_Rank06_CritDmg"
              ]
            },
            "MDF_PropertyValueBase": {
              "operator": "Variables[0] (0.45) || RETURN",
              "displayLines": "0.45",
              "constants": [],
              "variables": [
                0.45
              ]
            }
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Sequence",
            "Sequence": [
              {
                "name": "Target Name",
                "target": "{{All Team Members(Exclude Self)}}"
              },
              {
                "name": "Target Filter",
                "conditions": {
                  "name": "OR",
                  "conditionList": [
                    {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1486907244\">Sparkle_Ability03_PowerUp</a>[<span class=\"descriptionNumberColor\">Cipher</span>]"
                    }
                  ]
                }
              }
            ]
          },
          "modifier": "<a class=\"gModGreen\" id=\"1817279389\">Sparkle_Ability02_CritDmgAddedRatio01</a>[<span class=\"descriptionNumberColor\">Dreamdiver</span>]",
          "duration": {
            "operator": "Variables[0] (1) || RETURN",
            "displayLines": "1",
            "constants": [],
            "variables": [
              1
            ]
          },
          "valuePerStack": {
            "MDF_PropertyValueConvert": {
              "operator": "Variables[0] (MDF_CriticalDamageBase_change) || Variables[1] (NDF_Sparkle_Rank06_CritDmg) || ADD || RETURN",
              "displayLines": "(MDF_CriticalDamageBase_change + NDF_Sparkle_Rank06_CritDmg)",
              "constants": [],
              "variables": [
                "MDF_CriticalDamageBase_change",
                "NDF_Sparkle_Rank06_CritDmg"
              ]
            },
            "MDF_PropertyValueBase": {
              "operator": "Variables[0] (0.45) || RETURN",
              "displayLines": "0.45",
              "constants": [],
              "variables": [
                0.45
              ]
            }
          }
        }
      ],
      "failed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1817279389\">Sparkle_Ability02_CritDmgAddedRatio01</a>[<span class=\"descriptionNumberColor\">Dreamdiver</span>]",
          "duration": {
            "operator": "Variables[0] (1) || RETURN",
            "displayLines": "1",
            "constants": [],
            "variables": [
              1
            ]
          },
          "valuePerStack": {
            "MDF_PropertyValueConvert": {
              "operator": "Variables[0] (MDF_CriticalDamageBase_change) || RETURN",
              "displayLines": "MDF_CriticalDamageBase_change",
              "constants": [],
              "variables": [
                "MDF_CriticalDamageBase_change"
              ]
            },
            "MDF_PropertyValueBase": {
              "operator": "Variables[0] (0.45) || RETURN",
              "displayLines": "0.45",
              "constants": [],
              "variables": [
                0.45
              ]
            }
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
      "valuePercent": 1,
      "ofAbilitySplit": true,
      "isFixed": "* ERR"
    },
    "Trigger: Ability End"
  ],
  "references": []
}