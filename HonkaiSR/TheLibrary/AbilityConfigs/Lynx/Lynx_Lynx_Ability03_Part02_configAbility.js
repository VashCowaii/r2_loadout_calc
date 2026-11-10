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
        "displayLines": "1"
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
        "displayLines": "0.135"
      },
      "healFlat": {
        "displayLines": "360"
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
          "modifier": "<a class=\"gModGreen\" id=\"-704553388\">Lynx_HOT_HealByMaxHp</a>[<span class=\"descriptionNumberColor\">Healing Over Time</span>]",
          "duration": {
            "displayLines": "(2 + 1)"
          },
          "valuePerStack": {
            "MDF_HOT_HOTPercentage": {
              "displayLines": "0.036"
            },
            "MDF_HOT_HealValue": {
              "displayLines": "96"
            },
            "MDF_HOT_AggroUp_HOTPercentage": {
              "displayLines": "0.044999998"
            },
            "MDF_HOT_AggroUp_HealValue": {
              "displayLines": "120"
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
          "modifier": "<a class=\"gModGreen\" id=\"-704553388\">Lynx_HOT_HealByMaxHp</a>[<span class=\"descriptionNumberColor\">Healing Over Time</span>]",
          "duration": {
            "displayLines": "2"
          },
          "valuePerStack": {
            "MDF_HOT_HOTPercentage": {
              "displayLines": "0.036"
            },
            "MDF_HOT_HealValue": {
              "displayLines": "96"
            },
            "MDF_HOT_AggroUp_HOTPercentage": {
              "displayLines": "0.044999998"
            },
            "MDF_HOT_AggroUp_HealValue": {
              "displayLines": "120"
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
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  }
}