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
      "variableName": "MDF_BPGap",
      "value": {
        "operator": "Variables[0] (TeamBpMax) || Variables[1] (MDF_PassiveLayer01) || SUB || Variables[2] (MDF_PassiveLayerDirty) || SUB || RETURN",
        "displayLines": "((TeamBpMax - MDF_PassiveLayer01) - MDF_PassiveLayerDirty)",
        "constants": [],
        "variables": [
          "TeamBpMax",
          "MDF_PassiveLayer01",
          "MDF_PassiveLayerDirty"
        ]
      }
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
            "operator": "Variables[0] (6) || Constants[0] (1) || ADD || RETURN",
            "displayLines": "(6 + 1)",
            "constants": [
              1
            ],
            "variables": [
              6
            ]
          },
          "adjustmentType": "+"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "BPAdd",
          "value": {
            "operator": "Variables[0] (6) || Constants[0] (1) || ADD || RETURN",
            "displayLines": "(6 + 1)",
            "constants": [
              1
            ],
            "variables": [
              6
            ]
          }
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
            "operator": "Variables[0] (6) || RETURN",
            "displayLines": "6",
            "constants": [],
            "variables": [
              6
            ]
          },
          "adjustmentType": "+"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "BPAdd",
          "value": {
            "operator": "Variables[0] (6) || RETURN",
            "displayLines": "6",
            "constants": [],
            "variables": [
              6
            ]
          }
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
          "operator": "Variables[0] (MDF_BPGap) || RETURN",
          "displayLines": "MDF_BPGap",
          "constants": [],
          "variables": [
            "MDF_BPGap"
          ]
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
            "operator": "Variables[0] (10) || RETURN",
            "displayLines": "10",
            "constants": [],
            "variables": [
              10
            ]
          },
          "addStacksPerTrigger": {
            "operator": "Variables[0] (BPAdd) || Variables[1] (MDF_BPGap) || SUB || RETURN",
            "displayLines": "(BPAdd - MDF_BPGap)",
            "constants": [],
            "variables": [
              "BPAdd",
              "MDF_BPGap"
            ]
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
        "operator": "Variables[0] (3) || RETURN",
        "displayLines": "3",
        "constants": [],
        "variables": [
          3
        ]
      },
      "valuePerStack": {
        "MDF_PropertyValue": {
          "operator": "Variables[0] (0.06) || RETURN",
          "displayLines": "0.06",
          "constants": [],
          "variables": [
            0.06
          ]
        },
        "MDF_PropertyValue2": {
          "operator": "Variables[0] (0.4) || RETURN",
          "displayLines": "0.4",
          "constants": [],
          "variables": [
            0.4
          ]
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
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "MDF_Sparkle_CritDmgValue",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;"
        },
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
                "Sequence": [
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
                "operator": "Variables[0] (2) || RETURN",
                "displayLines": "2",
                "constants": [],
                "variables": [
                  2
                ]
              },
              "valuePerStack": {
                "MDF_PropertyValueConvert2": {
                  "operator": "Variables[0] (MDF_CriticalDamageBase_change) || Variables[1] (NDF_Sparkle_Rank06_CritDmg) || ADD || RETURN",
                  "displayLines": "(MDF_CriticalDamageBase_change + NDF_Sparkle_Rank06_CritDmg)",
                  "constants": [],
                  "variables": [
                    "MDF_CriticalDamageBase_change",
                    "NDF_Sparkle_Rank06_CritDmg"
                  ]
                },
                "MDF_PropertyValueBase2": {
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