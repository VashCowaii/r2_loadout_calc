const configAbility = {
  "fileName": "Sparkle_Advanced_Sparkle_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable with Skill Points",
      "variableName": "MDF_PassiveLayer01"
    },
    {
      "name": "Define Custom Variable with Skill Points",
      "variableName": "MDF_PassiveLayerDirty"
    },
    {
      "name": "Define Custom Variable with Skill Point Max",
      "variableName": "TeamBpMax"
    },
    {
      "name": "Define Custom Variable",
      "value": {
        "displayLines": "((TeamBpMax - MDF_PassiveLayer01) - MDF_PassiveLayerDirty)"
      },
      "variableName": "MDF_BPGap"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Eidolon Activated",
            "eidolon": 4
          }
        ]
      },
      "passed": [
        {
          "name": "Skill Points Modification",
          "adjustmentValue": {
            "displayLines": "(6 + 1)"
          },
          "adjustmentType": "+"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "(6 + 1)"
          },
          "variableName": "BPAdd"
        },
        {
          "name": "Define Custom Variable with Skill Points",
          "variableName": "MDF_PassiveLayer02"
        }
      ],
      "failed": [
        {
          "name": "Skill Points Modification",
          "adjustmentValue": {
            "displayLines": "6"
          },
          "adjustmentType": "+"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "6"
          },
          "variableName": "BPAdd"
        },
        {
          "name": "Define Custom Variable with Skill Points",
          "variableName": "MDF_PassiveLayer02"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "BPAdd",
        "compareType": ">",
        "value2": {
          "displayLines": "MDF_BPGap"
        }
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1887140599\">Advanced_Sparkle_Ability03ExtraBP</a>[<span class=\"descriptionNumberColor\">The Hero with a Thousand Faces</span>]",
          "stackLimit": {
            "displayLines": "10"
          },
          "addStacksPerTrigger": {
            "displayLines": "(BPAdd - MDF_BPGap)"
          }
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{All Team Members}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1966292851\">Advanced_Sparkle_Ability03_PowerUp</a>[<span class=\"descriptionNumberColor\">Cipher</span>]",
      "duration": {
        "displayLines": "3"
      },
      "valuePerStack": {
        "MDF_PropertyValue": {
          "displayLines": "0.06"
        },
        "MDF_PropertyValue2": {
          "displayLines": "0.4"
        }
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
            "displayLines": "(MDF_Sparkle_CritDmgValue * 0.3)"
          },
          "variableName": "NDF_Sparkle_Rank06_CritDmg"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"930084380\">Advanced_Sparkle_Ability02_CritDmgAddedRatio01</a>[<span class=\"descriptionNumberColor\">Dreamdiver</span>]"
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members(Exclude Self)}}"
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
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"980417237\">Advanced_Sparkle_Ability02_CritDmgAddedRatio02</a>"
          },
          "ifTargetFound": [
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
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"930084380\">Advanced_Sparkle_Ability02_CritDmgAddedRatio01</a>[<span class=\"descriptionNumberColor\">Dreamdiver</span>]",
                      "invertCondition": true
                    }
                  }
                ]
              },
              "modifier": "<a class=\"gModGreen\" id=\"980417237\">Advanced_Sparkle_Ability02_CritDmgAddedRatio02</a>",
              "duration": {
                "displayLines": "2"
              },
              "valuePerStack": {
                "MDF_PropertyValueConvert2": {
                  "displayLines": "(MDF_CriticalDamageBase_change + NDF_Sparkle_Rank06_CritDmg)"
                },
                "MDF_PropertyValueBase2": {
                  "displayLines": "0.45"
                },
                "MDF_AllDamageTypePenetrate": {
                  "displayLines": "0.1"
                }
              }
            }
          ]
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
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{All Team Members}}"
  }
}