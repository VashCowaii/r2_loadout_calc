const configAbility = {
  "fileName": "Luka_Luka_PassiveAbility01",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    {
      "name": "Read Variable Value",
      "adjustmentType": "Add to Value (Default)",
      "variableName": "BulletCount",
      "on": "Caster"
    },
    {
      "name": "Adjust Variable Value",
      "adjustmentType": "Overwrite Value",
      "variableName": "BulletCount",
      "on": "Caster",
      "value": 1
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "BulletCount",
        "compareType": "<",
        "value2": 2
      },
      "passed": [
        {
          "name": "Update Displayed Energy Bar",
          "value": {
            "operator": "Variables[0] (BulletCount) || RETURN",
            "displayLines": "BulletCount",
            "constants": [],
            "variables": [
              "BulletCount"
            ]
          },
          "maximum": {
            "operator": "Constants[0] (4) || RETURN",
            "displayLines": "4",
            "constants": [
              4
            ],
            "variables": []
          },
          "assignState": "True",
          "priorState": "Normal",
          "bar#": 3,
          "cooldown": 0
        }
      ],
      "failed": [
        {
          "name": "Update Displayed Energy Bar",
          "value": {
            "operator": "Variables[0] (BulletCount) || RETURN",
            "displayLines": "BulletCount",
            "constants": [],
            "variables": [
              "BulletCount"
            ]
          },
          "maximum": {
            "operator": "Constants[0] (4) || RETURN",
            "displayLines": "4",
            "constants": [
              4
            ],
            "variables": []
          },
          "assignState": "True",
          "priorState": "Active",
          "bar#": 3,
          "cooldown": 0
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "Luka_Passive"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 2
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Luka_Eidolon2"
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "variableName": "BuffClear",
      "value": 0
    }
  ],
  "references": []
}