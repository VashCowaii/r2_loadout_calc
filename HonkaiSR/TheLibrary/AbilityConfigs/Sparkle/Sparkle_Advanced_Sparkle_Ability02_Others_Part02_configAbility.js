const configAbility = {
  "fileName": "Sparkle_Advanced_Sparkle_Ability02_Others_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 1
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1178065515\">Advanced_Sparkle_SpeedUP</a>[<span class=\"descriptionNumberColor\">Suspension of Disbelief</span>]",
          "duration": {
            "operator": "Variables[0] (2) || RETURN",
            "displayLines": "2",
            "constants": [],
            "variables": [
              2
            ]
          },
          "referenceModifier": "<a class=\"gModGreen\" id=\"1020254741\">MReference_SpeedRatioUp</a>",
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (0.15) || RETURN",
              "displayLines": "0.15",
              "constants": [],
              "variables": [
                0.15
              ]
            }
          }
        }
      ]
    },
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
                      "modifier": "<a class=\"gModGreen\" id=\"-1966292851\">Advanced_Sparkle_Ability03_PowerUp</a>[<span class=\"descriptionNumberColor\">Cipher</span>]"
                    },
                    {
                      "name": "Is Part Of",
                      "of": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "target": {
                        "name": "Target Name",
                        "target": "{{Ability Target(ST)}}"
                      },
                      "mustBeAlive2": true
                    }
                  ]
                }
              }
            ]
          },
          "modifier": "<a class=\"gModGreen\" id=\"930084380\">Advanced_Sparkle_Ability02_CritDmgAddedRatio01</a>[<span class=\"descriptionNumberColor\">Dreamdiver</span>]",
          "duration": {
            "operator": "Variables[0] (2) || RETURN",
            "displayLines": "2",
            "constants": [],
            "variables": [
              2
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
            },
            "MDF_AllDamageTypePenetrate": {
              "operator": "Variables[0] (0.1) || RETURN",
              "displayLines": "0.1",
              "constants": [],
              "variables": [
                0.1
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
          "modifier": "<a class=\"gModGreen\" id=\"930084380\">Advanced_Sparkle_Ability02_CritDmgAddedRatio01</a>[<span class=\"descriptionNumberColor\">Dreamdiver</span>]",
          "duration": {
            "operator": "Variables[0] (2) || RETURN",
            "displayLines": "2",
            "constants": [],
            "variables": [
              2
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
            },
            "MDF_AllDamageTypePenetrate": {
              "operator": "Variables[0] (0.1) || RETURN",
              "displayLines": "0.1",
              "constants": [],
              "variables": [
                0.1
              ]
            }
          }
        }
      ]
    },
    {
      "name": "Action Advance/Delay",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "advanceType": "Advance",
      "multiAdd": "-0.5"
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
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  }
}