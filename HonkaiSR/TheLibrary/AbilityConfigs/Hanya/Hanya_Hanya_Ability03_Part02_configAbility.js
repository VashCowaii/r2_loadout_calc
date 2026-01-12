const configAbility = {
  "fileName": "Hanya_Hanya_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable with Stat",
      "target": "Caster",
      "variableName": "MDF_Skill03_Speed",
      "value": "&nbsp;<span class=\"descriptionNumberColor\">Speed</span>&nbsp;"
    },
    {
      "name": "Define Custom Variable with Stat",
      "target": "Caster",
      "variableName": "MDF_Skill03_Speed_Convert",
      "value": "&nbsp;<span class=\"descriptionNumberColor\">SpeedConverted</span>&nbsp;"
    },
    {
      "name": "Define Custom Variable",
      "variableName": "MDF_Skill03_Speed",
      "value": {
        "operator": "Variables[0] (MDF_Skill03_Speed) || Variables[1] (MDF_Skill03_Speed_Convert) || SUB || RETURN",
        "displayLines": "(MDF_Skill03_Speed - MDF_Skill03_Speed_Convert)",
        "constants": [],
        "variables": [
          "MDF_Skill03_Speed",
          "MDF_Skill03_Speed_Convert"
        ]
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 4
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "MDF_Skill03_LifeTime",
          "value": {
            "operator": "Variables[0] (2) || Variables[1] (1) || ADD || RETURN",
            "displayLines": "(2 + 1)",
            "constants": [],
            "variables": [
              2,
              1
            ]
          }
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "variableName": "MDF_Skill03_LifeTime",
          "value": {
            "operator": "Variables[0] (2) || RETURN",
            "displayLines": "2",
            "constants": [],
            "variables": [
              2
            ]
          }
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": "Single Target (Primary)",
      "modifier": "WHanya_Ability03Bonus[<span class=\"descriptionNumberColor\">Edict</span>]",
      "duration": {
        "operator": "Variables[0] (MDF_Skill03_LifeTime) || RETURN",
        "displayLines": "MDF_Skill03_LifeTime",
        "constants": [],
        "variables": [
          "MDF_Skill03_LifeTime"
        ]
      },
      "valuePerStack": {
        "Ability03_P1_ATKRatio": {
          "operator": "Variables[0] (0.6) || RETURN",
          "displayLines": "0.6",
          "constants": [],
          "variables": [
            0.6
          ]
        },
        "Ability03_P3_Speed": {
          "operator": "Variables[0] (0.2) || RETURN",
          "displayLines": "0.2",
          "constants": [],
          "variables": [
            0.2
          ]
        },
        "MDF_Ability03_Speed": {
          "operator": "Variables[0] (MDF_Skill03_Speed) || RETURN",
          "displayLines": "MDF_Skill03_Speed",
          "constants": [],
          "variables": [
            "MDF_Skill03_Speed"
          ]
        }
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 1
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": "Single Target (Primary)",
          "modifier": "Hanya_Eidolon1_Other",
          "duration": {
            "operator": "Variables[0] (MDF_Skill03_LifeTime) || RETURN",
            "displayLines": "MDF_Skill03_LifeTime",
            "constants": [],
            "variables": [
              "MDF_Skill03_LifeTime"
            ]
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 1
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Hanya_Eidolon1"
        }
      ]
    },
    {
      "name": "Update Energy",
      "on": "Caster",
      "valuePercent": 1,
      "ofAbilitySplit": true,
      "isFixed": "* ERR"
    },
    "Trigger: Ability End"
  ],
  "references": []
}