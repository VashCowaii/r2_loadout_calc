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
            "displayLines": "2"
          },
          "referenceModifier": "<a class=\"gModGreen\" id=\"1020254741\">MReference_SpeedRatioUp</a>",
          "valuePerStack": {
            "MDF_PropertyValue": {
              "displayLines": "0.15"
            }
          }
        }
      ]
    },
    {
      "name": "Define Custom Variable with Stat",
      "variableName": "MDF_Sparkle_CritDmgValue",
      "readTarget": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "value": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;"
    },
    {
      "name": "Define Custom Variable",
      "value": {
        "displayLines": "MDF_Sparkle_CritDmgValue"
      },
      "variableName": "MDF_CriticalDamageBase_change"
    },
    {
      "name": "Define Custom Variable",
      "value": {
        "displayLines": "(MDF_CriticalDamageBase_change * 0.24)"
      },
      "variableName": "MDF_CriticalDamageBase_change"
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
          "value": {
            "displayLines": "(MDF_Sparkle_CritDmgValue * 0.3)"
          },
          "variableName": "NDF_Sparkle_Rank06_CritDmg"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Sequence",
            "TargetList": [
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
                      "target1": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "target2": {
                        "name": "Target Name",
                        "target": "{{Ability Target(ST)}}"
                      }
                    }
                  ]
                }
              }
            ]
          },
          "modifier": "<a class=\"gModGreen\" id=\"930084380\">Advanced_Sparkle_Ability02_CritDmgAddedRatio01</a>[<span class=\"descriptionNumberColor\">Dreamdiver</span>]",
          "duration": {
            "displayLines": "2"
          },
          "valuePerStack": {
            "MDF_PropertyValueConvert": {
              "displayLines": "(MDF_CriticalDamageBase_change + NDF_Sparkle_Rank06_CritDmg)"
            },
            "MDF_PropertyValueBase": {
              "displayLines": "0.45"
            },
            "MDF_AllDamageTypePenetrate": {
              "displayLines": "0.1"
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
            "displayLines": "2"
          },
          "valuePerStack": {
            "MDF_PropertyValueConvert": {
              "displayLines": "MDF_CriticalDamageBase_change"
            },
            "MDF_PropertyValueBase": {
              "displayLines": "0.45"
            },
            "MDF_AllDamageTypePenetrate": {
              "displayLines": "0.1"
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