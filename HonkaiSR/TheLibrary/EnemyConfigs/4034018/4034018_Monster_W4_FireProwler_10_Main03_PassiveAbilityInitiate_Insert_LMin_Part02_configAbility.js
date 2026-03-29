const configAbility = {
  "fileName": "4034018_Monster_W4_FireProwler_10_Main03_PassiveAbilityInitiate_Insert_LMin_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Dispel Debuffs",
      "target": {
        "name": "Target Name",
        "target": "{{Modifier Holder}}"
      },
      "silent": true,
      "toRemove": [
        "STAT_CTRL"
      ]
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
    },
    {
      "name": "Define Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Modifier Holder}}"
      },
      "scope": "TargetEntity",
      "variableName": "LMCountDown",
      "value": 0
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Modifier Holder}}"
      },
      "scope": "TargetEntity",
      "variableName": "InsertFlag_LMin"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Modifier Holder}}"
      },
      "scope": "TargetEntity",
      "variableName": "InsertFlag_LMout"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1240010895\">Enemy_W4_FireProwler_10_Main03_Limit_EnvirEffect</a>"
    },
    {
      "name": "Action Advance/Delay",
      "advanceType": "Set",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "set": 0
    },
    {
      "name": "Exit Broken-State",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      }
    },
    {
      "name": "Define Custom Variable with Stat",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "MaxStance",
      "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;",
      "warningType": "MaxToughness"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "value1": "TargetCurrentToughness",
        "compareType": "=",
        "value2": 1
      },
      "passed": [
        {
          "name": "Reset Toughness",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "constantValue": {
            "operator": "Variables[0] (MaxStance) || RETURN",
            "displayLines": "MaxStance",
            "constants": [],
            "variables": [
              "MaxStance"
            ]
          }
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"670740905\">Enemy_W4_FireProwler_10_Main03_Limit</a>[<span class=\"descriptionNumberColor\">Shackle Shatter</span>]",
      "valuePerStack": {
        "MDF_AttackAddedRatio": {
          "operator": "Variables[0] ({[SkillP01[0]]}) || RETURN",
          "displayLines": "{[SkillP01[0]]}",
          "constants": [],
          "variables": [
            "{[SkillP01[0]]}"
          ]
        },
        "MDF_SpeedAddedRatio": {
          "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
          "displayLines": "{[SkillP01[1]]}",
          "constants": [],
          "variables": [
            "{[SkillP01[1]]}"
          ]
        },
        "MDF_LM_DamageStanceValue": {
          "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
          "displayLines": "{[SkillP01[2]]}",
          "constants": [],
          "variables": [
            "{[SkillP01[2]]}"
          ]
        }
      }
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "TargetEntity",
      "variableName": "AIFlag",
      "value": 1
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "TargetEntity",
      "variableName": "SkillFlag",
      "value": 1
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"917444423\">Enemy_W4_FireProwler_10_Main03_Limit_EffectBody</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-952344169\">Enemy_W4_FireProwler_10_Main03_Endurance</a>"
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}