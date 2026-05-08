const configAbility = {
  "fileName": "TrailblazerElation_LocalPlayer_PlayerBoy_40_TechniqueUsage",
  "skillTrigger": "MazeSkill",
  "abilityType": "Basic ATK",
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "_no_ssr_times",
        "compareType": ">=",
        "value2": {
          "operator": "Variables[0] (UNKNOWN_PITY_OBJECT) || Constants[0] (1) || SUB || RETURN",
          "displayLines": "(UNKNOWN_PITY_OBJECT - 1)",
          "constants": [
            1
          ],
          "variables": [
            "UNKNOWN_PITY_OBJECT"
          ]
        },
        "contextScope": "ContextCaster"
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "scope": "ContextAbility",
          "variableName": "_random",
          "value": 100
        }
      ],
      "failed": [
        {
          "name": "Define Variable with Random Value",
          "scope": "ContextAbility",
          "integer": true,
          "variableName": "_random",
          "min": 0,
          "max": 100
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "variableName": "_sum_probability",
      "value": 1
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "_random",
        "compareType": ">=",
        "value2": {
          "operator": "Constants[0] (0.6) || Variables[0] (_sum_probability) || DIV || Constants[1] (100) || MUL || RETURN",
          "displayLines": "((0.6 / _sum_probability) * 100)",
          "constants": [
            0.6,
            100
          ],
          "variables": [
            "_sum_probability"
          ]
        },
        "contextScope": "ContextAbility"
      },
      "passed": [
        "Deleted bullshit",
        {
          "name": "Define Custom Variable",
          "variableName": "_result",
          "value": 1
        }
      ],
      "failed": [
        "Deleted bullshit",
        {
          "name": "Define Custom Variable",
          "variableName": "_result",
          "value": 0
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "_result",
        "compareType": "=",
        "value2": 1
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "scope": "ContextCaster",
          "variableName": "_no_ssr_times",
          "value": 0
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "scope": "ContextCaster",
          "variableName": "_no_ssr_times",
          "value": {
            "operator": "Variables[0] (_no_ssr_times) || Constants[0] (1) || ADD || RETURN",
            "displayLines": "(_no_ssr_times + 1)",
            "constants": [
              1
            ],
            "variables": [
              "_no_ssr_times"
            ]
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "_result",
        "compareType": "=",
        "value2": 1
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": null,
          "ID": "800901(Avatar_PlayerBoy_40_SkillMazeInLevel_Big)",
          "duration": -1
        }
      ],
      "failed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": null,
          "ID": "800902(Avatar_PlayerBoy_40_SkillMazeInLevel_Small)",
          "duration": -1
        }
      ]
    },
    "Submit Technique Use",
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "_result",
        "compareType": "=",
        "value2": 1
      }
    }
  ],
  "whenAdded": [
    {
      "name": "Define Custom Variable",
      "scope": "ContextCaster",
      "variableName": "_no_ssr_times",
      "value": 0
    }
  ],
  "onAbortReg": [],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Caster}}"
  }
}