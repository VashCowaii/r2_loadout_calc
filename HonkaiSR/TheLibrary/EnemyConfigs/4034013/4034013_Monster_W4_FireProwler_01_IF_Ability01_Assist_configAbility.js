const configAbility = {
  "fileName": "4034013_Monster_W4_FireProwler_01_IF_Ability01_Assist",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Deleted bullshit",
    {
      "name": "Define Custom Variable with Added Value",
      "target": {
        "name": "Target Name",
        "target": "{{Caster's Summoner}}"
      },
      "variableName": "Skill01_AssistCount",
      "value": 1,
      "max": 4
    },
    {
      "name": "Define Custom Variable with Added Value",
      "target": {
        "name": "Target Name",
        "target": "{{Caster's Summoner}}"
      },
      "variableName": "Skill01_CurCount",
      "value": 1,
      "max": 4
    },
    {
      "name": "Define Custom Variable with Copy",
      "target": {
        "name": "Target Name",
        "target": "{{Caster's Summoner}}"
      },
      "variable": "Skill01_CurCount",
      "target2": null,
      "variable2": "Skill01_CurCount"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Target Name",
          "target": "{{Caster's Summoner}}"
        },
        "value1": "Skill01_AssistCount",
        "compareType": "=",
        "value2": 1
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Target Name",
          "target": "{{Caster's Summoner}}"
        },
        "value1": "Skill01_AssistCount",
        "compareType": "=",
        "value2": 2
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Target Name",
          "target": "{{Caster's Summoner}}"
        },
        "value1": "Skill01_AssistCount",
        "compareType": "=",
        "value2": 3
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Target Name",
          "target": "{{Caster's Summoner}}"
        },
        "value1": "Skill01_AssistCount",
        "compareType": "=",
        "value2": 4
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Target Name",
          "target": "{{Caster's Summoner}}"
        },
        "value1": "Skill01_AssistCount",
        "compareType": "=",
        "value2": {
          "operator": "Variables[0] (Skill01_CurCount) || RETURN",
          "displayLines": "Skill01_CurCount",
          "constants": [],
          "variables": [
            "Skill01_CurCount"
          ]
        }
      },
      "passed": [
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "CurrentHP",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "MaxHP",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
        }
      ]
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1207820325\">Enemy_W4_FireProwler_01_DeathRattle</a>"
    }
  ],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  },
  "references": []
}