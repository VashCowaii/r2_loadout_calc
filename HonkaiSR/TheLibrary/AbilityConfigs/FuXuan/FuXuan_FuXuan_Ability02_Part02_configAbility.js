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
            "operator": "Variables[0] (20) || RETURN",
            "displayLines": "20",
            "constants": [],
            "variables": [
              20
            ]
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
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "MaxHP",
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
        "operator": "Variables[0] (3) || RETURN",
        "displayLines": "3",
        "constants": [],
        "variables": [
          3
        ]
      },
      "valuePerStack": {
        "Ability02_P2_DamageResistance": {
          "operator": "Variables[0] (0) || RETURN",
          "displayLines": "0",
          "constants": [],
          "variables": [
            0
          ]
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
          "operator": "Variables[0] (0.65) || RETURN",
          "displayLines": "0.65",
          "constants": [],
          "variables": [
            0.65
          ]
        },
        "Ability02_P2_DamageResistance": {
          "operator": "Variables[0] (0) || RETURN",
          "displayLines": "0",
          "constants": [],
          "variables": [
            0
          ]
        },
        "AddSP": {
          "operator": "Variables[0] (5) || RETURN",
          "displayLines": "5",
          "constants": [],
          "variables": [
            5
          ]
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
  "references": []
}