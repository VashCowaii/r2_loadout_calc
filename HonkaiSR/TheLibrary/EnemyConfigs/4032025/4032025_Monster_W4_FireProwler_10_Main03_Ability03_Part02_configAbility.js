const configAbility = {
  "fileName": "4032025_Monster_W4_FireProwler_10_Main03_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "conditions": {
        "name": "Enemy ID",
        "ID": {
          "operator": "Variables[0] (SummonID_1) || RETURN",
          "displayLines": "SummonID_1",
          "constants": [],
          "variables": [
            "SummonID_1"
          ]
        },
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "characterName": null
      },
      "ifTargetFound": [
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "phase": "Phase01"
        },
        "Deleted bullshit",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1810803535\">Enemy_W4_FireProwler_11_Main03_Activated01</a>[<span class=\"descriptionNumberColor\">Mutual Sacrifice</span>]"
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "conditions": {
        "name": "Enemy ID",
        "ID": {
          "operator": "Variables[0] (SummonID_2) || RETURN",
          "displayLines": "SummonID_2",
          "constants": [],
          "variables": [
            "SummonID_2"
          ]
        },
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "characterName": null
      },
      "ifTargetFound": [
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "phase": "Phase02"
        },
        "Deleted bullshit",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1827581154\">Enemy_W4_FireProwler_11_Main03_Activated02</a>[<span class=\"descriptionNumberColor\">Mutual Sacrifice</span>]"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "OR",
            "conditionList": [
              {
                "name": "Compare: Variable",
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 2
              },
              {
                "name": "Enemy ID",
                "ID": 4034018,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "???",
                "isBaseCompare": true
              }
            ]
          },
          {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>",
            "invertCondition": true
          }
        ]
      },
      "passed": [
        {
          "name": "Assign Advance/Delay to Current Ability Use",
          "adjustmentValue": {
            "operator": "Variables[0] (UnusedUnderThisBase_357) || RETURN",
            "displayLines": "UnusedUnderThisBase_357",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_357"
            ]
          },
          "adjustmentType": "Advance"
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "references": []
}