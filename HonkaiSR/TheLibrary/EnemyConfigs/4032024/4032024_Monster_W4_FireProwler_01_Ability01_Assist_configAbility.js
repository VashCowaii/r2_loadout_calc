const configAbility = {
  "fileName": "4032024_Monster_W4_FireProwler_01_Ability01_Assist",
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
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"33624492\">Enemy_W4_FireProwler_TimePower</a>[<span class=\"descriptionNumberColor\">Calamity Power</span>]",
          "addStacksPerTrigger": {
            "operator": "Variables[0] ({[PassiveSkill01[0]]}) || Variables[1] (Skill01_CurCount) || MUL || RETURN",
            "displayLines": "({[PassiveSkill01[0]]} * Skill01_CurCount)",
            "constants": [],
            "variables": [
              "{[PassiveSkill01[0]]}",
              "Skill01_CurCount"
            ]
          },
          "casterAssign": "TargetSelf"
        },
        {
          "name": "Update Displayed Energy Bar",
          "entityClass": "Enemy",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "barType": "FireProwler",
          "trigger": "NumChange_Increase"
        },
        {
          "name": "UI Display Event (On Entity)",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "popUpText": "Calamity Power"
        },
        {
          "name": "Reconstruct Modifier",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "casterFilter": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1577610826\">Enemy_W4_FireProwler_RallyHP_Mark</a>",
          "execute": [
            {
              "name": "Define Custom Variable with Copy",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-228290033\">ParamModifier</a>",
              "variable": "MDF_RallyHP",
              "target2": null,
              "variable2": "Skill01_HealHPRatio"
            }
          ]
        },
        {
          "name": "Heal",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "healPercent": {
            "operator": "Variables[0] (Skill01_HealHPRatio) || Variables[1] (Skill01_CurCount) || MUL || RETURN",
            "displayLines": "(Skill01_HealHPRatio * Skill01_CurCount)",
            "constants": [],
            "variables": [
              "Skill01_HealHPRatio",
              "Skill01_CurCount"
            ]
          },
          "formula": "Heal from Target MaxHP"
        }
      ]
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster's Summoner}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1577610826\">Enemy_W4_FireProwler_RallyHP_Mark</a>",
      "onlyRemoveOwnersInstance": true
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