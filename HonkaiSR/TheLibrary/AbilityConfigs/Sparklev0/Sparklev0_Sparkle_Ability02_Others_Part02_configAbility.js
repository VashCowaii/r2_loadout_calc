const configAbility = {
  "fileName": "Sparklev0_Sparkle_Ability02_Others_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
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
                      "modifier": "<a class=\"gModGreen\" id=\"1486907244\">Sparkle_Ability03_PowerUp</a>[<span class=\"descriptionNumberColor\">Cipher</span>]"
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
          "modifier": "<a class=\"gModGreen\" id=\"1817279389\">Sparkle_Ability02_CritDmgAddedRatio01</a>[<span class=\"descriptionNumberColor\">Dreamdiver</span>]",
          "duration": {
            "displayLines": "1"
          },
          "valuePerStack": {
            "MDF_PropertyValueConvert": {
              "displayLines": "(MDF_CriticalDamageBase_change + NDF_Sparkle_Rank06_CritDmg)"
            },
            "MDF_PropertyValueBase": {
              "displayLines": "0.45"
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
            "displayLines": "1"
          },
          "valuePerStack": {
            "MDF_PropertyValueConvert": {
              "displayLines": "MDF_CriticalDamageBase_change"
            },
            "MDF_PropertyValueBase": {
              "displayLines": "0.45"
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