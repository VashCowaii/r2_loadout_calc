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
          "displayLines": "(UNKNOWN_PITY_OBJECT - 1)"
        },
        "contextScope": "ContextCaster"
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "scope": "ContextAbility",
          "value": 100,
          "variableName": "_random"
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
      "value": 1,
      "variableName": "_sum_probability"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "_random",
        "compareType": ">=",
        "value2": {
          "displayLines": "((0.6 / _sum_probability) * 100)"
        },
        "contextScope": "ContextAbility"
      },
      "passed": [
        "Deleted bullshit",
        {
          "name": "Define Custom Variable",
          "value": 1,
          "variableName": "_result"
        }
      ],
      "failed": [
        "Deleted bullshit",
        {
          "name": "Define Custom Variable",
          "value": 0,
          "variableName": "_result"
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
          "value": 0,
          "variableName": "_no_ssr_times"
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "scope": "ContextCaster",
          "value": {
            "displayLines": "(_no_ssr_times + 1)"
          },
          "variableName": "_no_ssr_times"
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
      "value": 0,
      "variableName": "_no_ssr_times"
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