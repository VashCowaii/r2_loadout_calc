const configAbility = {
  "fileName": "Yukong_Yukong_Ability02_CountDown",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable with Added Value",
      "target": "Caster",
      "variableName": "YuKong_Flower_Count",
      "context": "TargetEntity",
      "value": -1,
      "max": {
        "operator": "Variables[0] (2) || RETURN",
        "displayLines": "2",
        "constants": [],
        "variables": [
          2
        ]
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "YuKong_Flower_Count",
        "compareType": "=",
        "value2": 0,
        "contextScope": "TargetEntity"
      },
      "passed": [
        {
          "name": "Update Displayed Energy Bar",
          "value": {
            "operator": "Variables[0] (YuKong_Flower_Count) || RETURN",
            "displayLines": "YuKong_Flower_Count",
            "constants": [],
            "variables": [
              "YuKong_Flower_Count"
            ]
          },
          "maximum": {
            "operator": "Variables[0] (2) || RETURN",
            "displayLines": "2",
            "constants": [],
            "variables": [
              2
            ]
          },
          "assignState": "True",
          "priorState": "Normal",
          "bar#": 3,
          "cooldown": 0
        },
        {
          "name": "Remove Events/Bonuses",
          "to": "All Team Members(In Context, with Untargetable)",
          "modifier": "Yukong_Flower"
        }
      ],
      "failed": [
        {
          "name": "Update Displayed Energy Bar",
          "value": {
            "operator": "Variables[0] (YuKong_Flower_Count) || RETURN",
            "displayLines": "YuKong_Flower_Count",
            "constants": [],
            "variables": [
              "YuKong_Flower_Count"
            ]
          },
          "maximum": {
            "operator": "Variables[0] (2) || RETURN",
            "displayLines": "2",
            "constants": [],
            "variables": [
              2
            ]
          },
          "assignState": "True",
          "priorState": "Active",
          "bar#": 3,
          "cooldown": 0
        }
      ]
    }
  ],
  "references": []
}