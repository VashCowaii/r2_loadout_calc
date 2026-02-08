const configAbility = {
  "fileName": "4012077_Monster_W4_PolluxPart_IF_PassiveAbility_Initiate",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Deleted bullshit",
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"385444056\">Enemy_W4_PolluxPart_IF_Status</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1636257193\">Enemy_W4_PolluxPart_IF_MinionsSuperArmorController</a>",
      "valuePerStack": {
        "MDF_MinionsSuperArmor_AllDamageReduce": {
          "operator": "Variables[0] ({[SkillEX01[0]]}) || RETURN",
          "displayLines": "{[SkillEX01[0]]}",
          "constants": [],
          "variables": [
            "{[SkillEX01[0]]}"
          ]
        },
        "MDF_MinionsSuperArmor_AllDamageTypeTakenRatio": {
          "operator": "Variables[0] ({[SkillEX01[1]]}) || RETURN",
          "displayLines": "{[SkillEX01[1]]}",
          "constants": [],
          "variables": [
            "{[SkillEX01[1]]}"
          ]
        },
        "MDF_SetActionDelayValue": {
          "operator": "Variables[0] ({[SkillEX01[2]]}) || RETURN",
          "displayLines": "{[SkillEX01[2]]}",
          "constants": [],
          "variables": [
            "{[SkillEX01[2]]}"
          ]
        }
      }
    },
    {
      "name": "Change Character Transformation",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "phase": "Phase1"
    },
    {
      "name": "Define Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster's Summoner}}"
      },
      "scope": "TargetEntity",
      "variableName": "StanceDamagePreshowValue",
      "value": {
        "operator": "Variables[0] ({[SkillP01[0]]}) || RETURN",
        "displayLines": "{[SkillP01[0]]}",
        "constants": [],
        "variables": [
          "{[SkillP01[0]]}"
        ]
      }
    }
  ],
  "references": []
}