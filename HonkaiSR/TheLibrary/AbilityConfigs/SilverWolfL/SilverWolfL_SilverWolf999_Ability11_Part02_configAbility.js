const configAbility = {
  "fileName": "SilverWolfL_SilverWolf999_Ability11_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"1816674206\">_M_SilverWolf999_IsAbility11Succession</a>"
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "Skill11_Item_TotalCount",
          "value": {
            "operator": "Variables[0] (Skill11_Item_LeftCount) || RETURN",
            "displayLines": "Skill11_Item_LeftCount",
            "constants": [],
            "variables": [
              "Skill11_Item_LeftCount"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Skill11_Shoot_TotalCount",
          "value": {
            "operator": "Variables[0] (Skill11_Shoot_LeftCount) || RETURN",
            "displayLines": "Skill11_Shoot_LeftCount",
            "constants": [],
            "variables": [
              "Skill11_Shoot_LeftCount"
            ]
          }
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "variableName": "Skill11_Shoot_TotalCount",
          "value": {
            "operator": "Variables[0] (100) || RETURN",
            "displayLines": "100",
            "constants": [],
            "variables": [
              100
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Skill11_Item_TotalCount",
          "value": {
            "operator": "Variables[0] (3) || RETURN",
            "displayLines": "3",
            "constants": [],
            "variables": [
              3
            ]
          }
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "variableName": "Skill11_Item_LeftCount",
      "value": {
        "operator": "Variables[0] (Skill11_Item_TotalCount) || RETURN",
        "displayLines": "Skill11_Item_TotalCount",
        "constants": [],
        "variables": [
          "Skill11_Item_TotalCount"
        ]
      }
    },
    {
      "name": "Define Custom Variable",
      "variableName": "Skill11_Shoot_LeftCount",
      "value": {
        "operator": "Variables[0] (Skill11_Shoot_TotalCount) || RETURN",
        "displayLines": "Skill11_Shoot_TotalCount",
        "constants": [],
        "variables": [
          "Skill11_Shoot_TotalCount"
        ]
      }
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"1468343614\">SilverWolf999_Ability11_Shoot</a>"
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  }
}