const configAbility = {
  "fileName": "FuXuan_FuXuan_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Trace Activated",
            "conditionList": "Taiyi, the Macrocosmic"
          },
          {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1150141703\">FuXuan_ListenLifeTime</a>[<span class=\"descriptionNumberColor\">Matrix of Prescience</span>]"
          }
        ]
      },
      "passed": [
        {
          "name": "Update Energy",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": {
            "displayLines": "20"
          },
          "isFixed": "* ERR"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-1150141703\">FuXuan_ListenLifeTime</a>[<span class=\"descriptionNumberColor\">Matrix of Prescience</span>]"
      }
    },
    {
      "name": "Define Custom Variable with Stat",
      "variableName": "MaxHP",
      "readTarget": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1150141703\">FuXuan_ListenLifeTime</a>[<span class=\"descriptionNumberColor\">Matrix of Prescience</span>]",
      "duration": {
        "displayLines": "3"
      },
      "valuePerStack": {
        "Ability02_P2_DamageResistance": {
          "displayLines": "UnusedUnderThisBase_5275"
        }
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{All Team Members with Unselectable Team Members(Exclude Self)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1553530097\">FuXuan_HitDamageSplit</a>[<span class=\"descriptionNumberColor\">Matrix of Prescience</span>]",
      "valuePerStack": {
        "MDF_SplitPercentage": {
          "displayLines": "0.65"
        },
        "Ability02_P2_DamageResistance": {
          "displayLines": "UnusedUnderThisBase_5275"
        },
        "AddSP": {
          "displayLines": "5"
        }
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Liuren, the Sexagenary"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{All Team Members with Unselectables}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-72044013\">FuXuan_Tree02</a>[<span class=\"descriptionNumberColor\">Liuren, the Sexagenary</span>]"
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
    "primaryTarget": "{{Ability Target List}}"
  }
}