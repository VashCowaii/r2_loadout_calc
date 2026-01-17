const configAbility = {
  "fileName": "Lynx_Lynx_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Dispel Debuffs",
      "target": {
        "name": "Target Name",
        "target": "{{All Team Members}}"
      },
      "dispelCount": {
        "operator": "Variables[0] (1) || RETURN",
        "displayLines": "1",
        "constants": [],
        "variables": [
          1
        ]
      },
      "dispelOrder": "LastAdded"
    },
    {
      "name": "Heal",
      "target": {
        "name": "Target Name",
        "target": "{{All Team Members}}"
      },
      "healPercent": {
        "operator": "Variables[0] (0.135) || RETURN",
        "displayLines": "0.135",
        "constants": [],
        "variables": [
          0.135
        ]
      },
      "healFlat": {
        "operator": "Variables[0] (360) || RETURN",
        "displayLines": "360",
        "constants": [],
        "variables": [
          360
        ]
      },
      "formula": "Heal from Healer's MaxHP"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Survival in the Extreme"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{All Team Members}}"
          },
          "modifier": "Lynx_HOT_HealByMaxHp[<span class=\"descriptionNumberColor\">Healing Over Time</span>]",
          "duration": {
            "operator": "Variables[0] (2) || Variables[1] (1) || ADD || RETURN",
            "displayLines": "(2 + 1)",
            "constants": [],
            "variables": [
              2,
              1
            ]
          },
          "valuePerStack": {
            "MDF_HOT_HOTPercentage": {
              "operator": "Variables[0] (0.036) || RETURN",
              "displayLines": "0.036",
              "constants": [],
              "variables": [
                0.036
              ]
            },
            "MDF_HOT_HealValue": {
              "operator": "Variables[0] (96) || RETURN",
              "displayLines": "96",
              "constants": [],
              "variables": [
                96
              ]
            },
            "MDF_HOT_AggroUp_HOTPercentage": {
              "operator": "Variables[0] (0.044999998) || RETURN",
              "displayLines": "0.044999998",
              "constants": [],
              "variables": [
                0.044999998
              ]
            },
            "MDF_HOT_AggroUp_HealValue": {
              "operator": "Variables[0] (120) || RETURN",
              "displayLines": "120",
              "constants": [],
              "variables": [
                120
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
            "target": "{{All Team Members}}"
          },
          "modifier": "Lynx_HOT_HealByMaxHp[<span class=\"descriptionNumberColor\">Healing Over Time</span>]",
          "duration": {
            "operator": "Variables[0] (2) || RETURN",
            "displayLines": "2",
            "constants": [],
            "variables": [
              2
            ]
          },
          "valuePerStack": {
            "MDF_HOT_HOTPercentage": {
              "operator": "Variables[0] (0.036) || RETURN",
              "displayLines": "0.036",
              "constants": [],
              "variables": [
                0.036
              ]
            },
            "MDF_HOT_HealValue": {
              "operator": "Variables[0] (96) || RETURN",
              "displayLines": "96",
              "constants": [],
              "variables": [
                96
              ]
            },
            "MDF_HOT_AggroUp_HOTPercentage": {
              "operator": "Variables[0] (0.044999998) || RETURN",
              "displayLines": "0.044999998",
              "constants": [],
              "variables": [
                0.044999998
              ]
            },
            "MDF_HOT_AggroUp_HealValue": {
              "operator": "Variables[0] (120) || RETURN",
              "displayLines": "120",
              "constants": [],
              "variables": [
                120
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
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Ability Target List}}"
      },
      "searchRandom": true,
      "maxTargets": 1,
      "conditions": {
        "name": "Compare: Target",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "target2": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "invertCondition": true
      }
    },
    "Trigger: Ability End"
  ],
  "references": []
}