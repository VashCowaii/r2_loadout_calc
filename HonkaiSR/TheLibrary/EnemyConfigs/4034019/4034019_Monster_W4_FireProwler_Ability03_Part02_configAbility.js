const configAbility = {
  "fileName": "4034019_Monster_W4_FireProwler_Ability03_Part02",
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
            "name": "Compare: Variable",
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 1
          },
          {
            "name": "Enemy ID",
            "ID": 4034017,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "Flame Reaver of the Deepest Dark",
            "isBaseCompare": true,
            "invertCondition": true
          }
        ]
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Stage Type",
                "stageType": "EvolveBuildActivity"
              }
            ]
          }
        }
      ],
      "failed": [
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Stage Type",
                "stageType": "EvolveBuildActivity"
              }
            ]
          }
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
          "modifier": "<a class=\"gModGreen\" id=\"-585162959\">Enemy_W4_FireProwler_01_Activated01</a>[<span class=\"descriptionNumberColor\">Mutual Sacrifice</span>]"
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
          "modifier": "<a class=\"gModGreen\" id=\"-635495816\">Enemy_W4_FireProwler_01_Activated02</a>[<span class=\"descriptionNumberColor\">Mutual Sacrifice</span>]"
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
                "ID": 4034017,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Flame Reaver of the Deepest Dark",
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
            "operator": "Variables[0] ({[Skill03[0]]}) || RETURN",
            "displayLines": "{[Skill03[0]]}",
            "constants": [],
            "variables": [
              "{[Skill03[0]]}"
            ]
          },
          "adjustmentType": "Advance"
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-635495816\">Enemy_W4_FireProwler_01_Activated02</a>[<span class=\"descriptionNumberColor\">Mutual Sacrifice</span>]",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "When \"%CasterName\" uses \"Fading Fate,\" also use \"Fading Fate\" at the same time.",
      "type": "Other",
      "effectName": "Simultaneously use \"Fading Fate\"",
      "statusName": "Mutual Sacrifice"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-585162959\">Enemy_W4_FireProwler_01_Activated01</a>[<span class=\"descriptionNumberColor\">Mutual Sacrifice</span>]",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "When \"%CasterName\" uses \"Demise's Storm\", also use \"Demise's Storm\" at the same time.",
      "type": "Other",
      "effectName": "Simultaneously use \"Demise's Storm\"",
      "statusName": "Mutual Sacrifice"
    }
  ]
}