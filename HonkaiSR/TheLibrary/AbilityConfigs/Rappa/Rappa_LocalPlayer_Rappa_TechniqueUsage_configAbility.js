const configAbility = {
  "fileName": "Rappa_LocalPlayer_Rappa_TechniqueUsage",
  "skillTrigger": "MazeSkill",
  "abilityType": "Basic ATK",
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"933509647\">ADV_StageAbility_Maze_IgnoreWeakness_TechniqueUsageMark</a>"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "ContextCaster",
      "variableName": "DV_AbilityEnd"
    },
    {
      "name": "Define Custom Variable",
      "variableName": "SprintModifiedSteerSpeed",
      "value": {
        "operator": "Variables[0] (SprintModifiedSteerSpeed) || RETURN",
        "displayLines": "SprintModifiedSteerSpeed",
        "constants": [],
        "variables": [
          "SprintModifiedSteerSpeed"
        ]
      }
    },
    {
      "name": "Define Custom Variable",
      "variableName": "SprintModifiedSpeed",
      "value": {
        "operator": "Variables[0] (SprintModifiedSpeed) || RETURN",
        "displayLines": "SprintModifiedSpeed",
        "constants": [],
        "variables": [
          "SprintModifiedSpeed"
        ]
      }
    },
    {
      "name": "IF",
      "conditions": "Ability Has a Target",
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Move Input Active (Overworld)",
                "invertCondition": true
              },
              {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "from": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "to": {
                      "name": "Target Name",
                      "target": "{{Ability Target(ST)}}"
                    },
                    "value1": "Distance_Between_Entities",
                    "compareType": "<",
                    "value2": 2
                  }
                ]
              },
              {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "from": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "to": {
                      "name": "Target Name",
                      "target": "{{Ability Target(ST)}}"
                    },
                    "value1": "Distance_Between_Entities",
                    "compareType": "<",
                    "value2": 6
                  }
                ]
              },
              {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "from": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "to": {
                      "name": "Target Name",
                      "target": "{{Ability Target(ST)}}"
                    },
                    "value1": "Distance_Between_Entities",
                    "compareType": ">=",
                    "value2": 6
                  }
                ]
              }
            ]
          }
        }
      ]
    },
    {
      "name": "Create Overworld Entity",
      "summonID": 13171
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": null,
      "ID": "131702()",
      "duration": {
        "operator": "Variables[0] (20) || RETURN",
        "displayLines": "20",
        "constants": [],
        "variables": [
          20
        ]
      }
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"-379736777\">Rappa_Sprint_PreProcess</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "DV_AbilityEnd",
        "compareType": "=",
        "value2": 1
      }
    }
  ],
  "onAbortReg": [
    {
      "name": "Define Custom Variable",
      "variableName": "DV_AbilityEnd",
      "value": 1
    }
  ],
  "functions": [
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-379736777\">Rappa_Sprint_PreProcess</a>",
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1835153663\">ADV_Modifier_Maze_Rappa_HolyShield</a>",
          "duration": 22
        },
        "Deleted bullshit",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-770906695\">ADV_Modifier_Maze_Rappa_IsHit</a>"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Rappa_00_Achievenment",
          "value": 0
        }
      ]
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "Skill Point User(Or NONE)"
  },
  "realTargetData": {
    "primaryTarget": "Select Hostile Target"
  }
}