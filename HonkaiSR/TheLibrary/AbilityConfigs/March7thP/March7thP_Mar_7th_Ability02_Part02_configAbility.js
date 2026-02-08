const configAbility = {
  "fileName": "March7thP_Mar_7th_Ability02_Part02",
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
      "variableName": "CasterDefence",
      "value": "&nbsp;<span class=\"descriptionNumberColor\">DEFSUM</span>&nbsp;"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Reinforce"
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "_Tree02_LifeTimeAdd",
          "value": {
            "operator": "Variables[0] (1) || RETURN",
            "displayLines": "1",
            "constants": [],
            "variables": [
              1
            ]
          }
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "variableName": "_Tree02_LifeTimeAdd",
          "value": 0
        }
      ]
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
          "variableName": "_Rank06_HealPercentage",
          "value": {
            "operator": "Variables[0] (0.04) || RETURN",
            "displayLines": "0.04",
            "constants": [],
            "variables": [
              0.04
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_Rank06_HealValue",
          "value": {
            "operator": "Variables[0] (106) || RETURN",
            "displayLines": "106",
            "constants": [],
            "variables": [
              106
            ]
          }
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "variableName": "_Rank06_HealPercentage",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_Rank06_HealValue",
          "value": 0
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Purify"
      },
      "passed": [
        {
          "name": "Dispel Debuffs",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "dispelCount": 1,
          "dispelOrder": "LastAdded"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Target Name",
          "target": "{{Ability Target(ST)}}"
        },
        "value1": "CurrentHP%",
        "compareType": ">=",
        "value2": {
          "operator": "Variables[0] (0.3) || RETURN",
          "displayLines": "0.3",
          "constants": [],
          "variables": [
            0.3
          ]
        }
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1541241593\">March7th_BPAbility_Shield</a>[<span class=\"descriptionNumberColor\">Shield</span>]",
          "duration": {
            "operator": "Variables[0] (3) || Variables[1] (_Tree02_LifeTimeAdd) || ADD || RETURN",
            "displayLines": "(3 + _Tree02_LifeTimeAdd)",
            "constants": [],
            "variables": [
              3,
              "_Tree02_LifeTimeAdd"
            ]
          },
          "valuePerStack": {
            "MDF_HealPercentage": {
              "operator": "Variables[0] (_Rank06_HealPercentage) || RETURN",
              "displayLines": "_Rank06_HealPercentage",
              "constants": [],
              "variables": [
                "_Rank06_HealPercentage"
              ]
            },
            "MDF_HealValue": {
              "operator": "Variables[0] (_Rank06_HealValue) || RETURN",
              "displayLines": "_Rank06_HealValue",
              "constants": [],
              "variables": [
                "_Rank06_HealValue"
              ]
            },
            "MDF_ShieldPercentage": {
              "operator": "Variables[0] (0.57) || RETURN",
              "displayLines": "0.57",
              "constants": [],
              "variables": [
                0.57
              ]
            },
            "MDF_ShieldValue": {
              "operator": "Variables[0] (760) || RETURN",
              "displayLines": "760",
              "constants": [],
              "variables": [
                760
              ]
            },
            "MDF_AggroUp": {
              "operator": "Variables[0] (5) || RETURN",
              "displayLines": "5",
              "constants": [],
              "variables": [
                5
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
          "modifier": "<a class=\"gModGreen\" id=\"1541241593\">March7th_BPAbility_Shield</a>[<span class=\"descriptionNumberColor\">Shield</span>]",
          "duration": {
            "operator": "Variables[0] (3) || Variables[1] (_Tree02_LifeTimeAdd) || ADD || RETURN",
            "displayLines": "(3 + _Tree02_LifeTimeAdd)",
            "constants": [],
            "variables": [
              3,
              "_Tree02_LifeTimeAdd"
            ]
          },
          "valuePerStack": {
            "MDF_HealPercentage": {
              "operator": "Variables[0] (_Rank06_HealPercentage) || RETURN",
              "displayLines": "_Rank06_HealPercentage",
              "constants": [],
              "variables": [
                "_Rank06_HealPercentage"
              ]
            },
            "MDF_HealValue": {
              "operator": "Variables[0] (_Rank06_HealValue) || RETURN",
              "displayLines": "_Rank06_HealValue",
              "constants": [],
              "variables": [
                "_Rank06_HealValue"
              ]
            },
            "MDF_ShieldPercentage": {
              "operator": "Variables[0] (0.57) || RETURN",
              "displayLines": "0.57",
              "constants": [],
              "variables": [
                0.57
              ]
            },
            "MDF_ShieldValue": {
              "operator": "Variables[0] (760) || RETURN",
              "displayLines": "760",
              "constants": [],
              "variables": [
                760
              ]
            },
            "MDF_AggroUp": 0
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
    {
      "name": "IF",
      "conditions": {
        "name": "Current Action Holder Is",
        "target": {
          "name": "Target Name",
          "target": "{{Ability Target(ST)}}"
        }
      }
    },
    "Trigger: Ability End"
  ],
  "references": []
}