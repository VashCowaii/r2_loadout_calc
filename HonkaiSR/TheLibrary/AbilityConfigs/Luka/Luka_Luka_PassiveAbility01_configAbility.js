const configAbility = {
  "fileName": "Luka_Luka_PassiveAbility01",
  "childAbilityList": [
    "Luka_Luka_PassiveAbility01"
  ],
  "skillTrigger": "SkillP01",
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
      "on": {
        "name": "Target Name",
        "target": "{{Caster}}"
      }
    },
    {
      "name": "Adjust Variable Value",
      "adjustmentType": "Overwrite Value",
      "variableName": "BulletCount",
      "on": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
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
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1297657953\">Luka_Passive</a>"
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
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-711075902\">Luka_Eidolon2</a>"
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