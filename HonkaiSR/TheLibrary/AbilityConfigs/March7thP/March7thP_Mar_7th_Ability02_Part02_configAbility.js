const configAbility = {
  "fileName": "March7thP_Mar_7th_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable with Stat",
      "variableName": "CasterDefence",
      "readTarget": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
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
          "value": {
            "displayLines": "1"
          },
          "variableName": "_Tree02_LifeTimeAdd"
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "value": 0,
          "variableName": "_Tree02_LifeTimeAdd"
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
          "value": {
            "displayLines": "0.04"
          },
          "variableName": "_Rank06_HealPercentage"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "106"
          },
          "variableName": "_Rank06_HealValue"
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "value": 0,
          "variableName": "_Rank06_HealPercentage"
        },
        {
          "name": "Define Custom Variable",
          "value": 0,
          "variableName": "_Rank06_HealValue"
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
          "displayLines": "0.3"
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
            "displayLines": "(3 + _Tree02_LifeTimeAdd)"
          },
          "valuePerStack": {
            "MDF_HealPercentage": {
              "displayLines": "_Rank06_HealPercentage"
            },
            "MDF_HealValue": {
              "displayLines": "_Rank06_HealValue"
            },
            "MDF_ShieldPercentage": {
              "displayLines": "0.57"
            },
            "MDF_ShieldValue": {
              "displayLines": "760"
            },
            "MDF_AggroUp": {
              "displayLines": "5"
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
            "displayLines": "(3 + _Tree02_LifeTimeAdd)"
          },
          "valuePerStack": {
            "MDF_HealPercentage": {
              "displayLines": "_Rank06_HealPercentage"
            },
            "MDF_HealValue": {
              "displayLines": "_Rank06_HealValue"
            },
            "MDF_ShieldPercentage": {
              "displayLines": "0.57"
            },
            "MDF_ShieldValue": {
              "displayLines": "760"
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
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  }
}