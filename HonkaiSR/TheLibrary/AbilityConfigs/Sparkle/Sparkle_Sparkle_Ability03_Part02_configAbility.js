const configAbility = {
  "fileName": "Sparkle_Sparkle_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable with Skill Points",
      "variableName": "MDF_PassiveLayer01"
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
            "operator": "Variables[0] (4) || Constants[0] (1) || ADD || RETURN",
            "displayLines": "(4 + 1)",
            "constants": [
              1
            ],
            "variables": [
              4
            ]
          },
          "adjustmentType": "+"
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
            "operator": "Variables[0] (4) || RETURN",
            "displayLines": "4",
            "constants": [],
            "variables": [
              4
            ]
          },
          "adjustmentType": "+"
        },
        {
          "name": "Define Custom Variable with Skill Points",
          "variableName": "MDF_PassiveLayer02"
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": "All Team Members(In Context)",
      "modifier": "Sparkle_Ability03_PowerUp[<span class=\"descriptionNumberColor\">Cipher</span>]",
      "duration": {
        "operator": "Variables[0] (2) || RETURN",
        "displayLines": "2",
        "constants": [],
        "variables": [
          2
        ]
      },
      "valuePerStack": {
        "MDF_PropertyValue": {
          "operator": "Variables[0] (0.1) || RETURN",
          "displayLines": "0.1",
          "constants": [],
          "variables": [
            0.1
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
          "target": "Caster",
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
          "from": "Allied Team",
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": "Use Prior Target(s) Defined",
            "modifier": "Sparkle_Ability02_CritDmgAddedRatio01[<span class=\"descriptionNumberColor\">Dreamdiver</span>]"
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": "All Teammates (Excluding Owner)",
              "modifier": "Sparkle_Ability02_CritDmgAddedRatio01[<span class=\"descriptionNumberColor\">Dreamdiver</span>]",
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
          ]
        },
        {
          "name": "Find New Target",
          "from": "Allied Team",
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": "Use Prior Target(s) Defined",
            "modifier": "Sparkle_Ability02_CritDmgAddedRatio02[<span class=\"descriptionNumberColor\">Dreamdiver</span>]"
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": [
                {
                  "name": "Target List",
                  "target": "All Teammates (Excluding Owner)"
                },
                {
                  "name": "Target Filter",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": "Use Prior Target(s) Defined",
                    "modifier": "Sparkle_Ability02_CritDmgAddedRatio01[<span class=\"descriptionNumberColor\">Dreamdiver</span>]",
                    "invertCondition": true
                  }
                }
              ],
              "modifier": "Sparkle_Ability02_CritDmgAddedRatio02[<span class=\"descriptionNumberColor\">Dreamdiver</span>]",
              "duration": {
                "operator": "Variables[0] (1) || RETURN",
                "displayLines": "1",
                "constants": [],
                "variables": [
                  1
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
                }
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Update Energy",
      "on": "Caster",
      "valuePercent": 1,
      "ofAbilitySplit": true,
      "isFixed": "* ERR"
    },
    "Trigger: Ability End"
  ],
  "references": []
}