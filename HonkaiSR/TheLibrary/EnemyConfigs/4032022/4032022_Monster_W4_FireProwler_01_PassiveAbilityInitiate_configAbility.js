const configAbility = {
  "fileName": "4032022_Monster_W4_FireProwler_01_PassiveAbilityInitiate",
  "skillTrigger": "PassiveSkillInitiate",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1166907060\">Enemy_Standard_MuteHitFly</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-104101548\">Enemy_W4_FireProwler_01_Repeat</a>[<span class=\"descriptionNumberColor\">Futility</span>]"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster's Summoner}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"1169574682\">Enemy_W4_FireProwler_Charge</a>[<span class=\"descriptionNumberColor\">Silent Sorrow</span>]"
      },
      "failed": [
        {
          "name": "Define Custom Variable with Copy",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "variable": "CurrentHPRatio",
          "target2": null,
          "variable2": "CurrentHPRatio"
        },
        {
          "name": "Consume",
          "consumeFrom": "MaxHP",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "consumePercent": {
            "operator": "Variables[0] ({[PassiveSkill01[1]]}) || Variables[1] (CurrentHPRatio) || MUL || RETURN",
            "displayLines": "({[PassiveSkill01[1]]} * CurrentHPRatio)",
            "constants": [],
            "variables": [
              "{[PassiveSkill01[1]]}",
              "CurrentHPRatio"
            ]
          },
          "consumeFloor": 1,
          "attackType": "Unknown",
          "DamageType": {
            "name": "Damage Type Source",
            "sourceType": "Physical"
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1577610826\">Enemy_W4_FireProwler_RallyHP_Mark</a>",
          "valuePerStack": {
            "MDF_RallyHP": {
              "operator": "Variables[0] ({[PassiveSkill01[1]]}) || Variables[1] (CurrentHPRatio) || MUL || RETURN",
              "displayLines": "({[PassiveSkill01[1]]} * CurrentHPRatio)",
              "constants": [],
              "variables": [
                "{[PassiveSkill01[1]]}",
                "CurrentHPRatio"
              ]
            }
          },
          "casterAssign": "CasterSelf"
        },
        {
          "name": "UI Display Event (On Entity)",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "popUpText": "Entangled By Agony"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1207820325\">Enemy_W4_FireProwler_01_DeathRattle</a>"
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster's Summoner}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-2020453285\">Enemy_W4_FireProwler_01_DamageValue</a>",
      "valuePerStack": {
        "MDF_Ability01": {
          "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
          "displayLines": "{[Skill01[0]]}",
          "constants": [],
          "variables": [
            "{[Skill01[0]]}"
          ]
        },
        "MDF_Ability01_Adjoin": {
          "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
          "displayLines": "{[Skill01[1]]}",
          "constants": [],
          "variables": [
            "{[Skill01[1]]}"
          ]
        },
        "MDF_Ability02": {
          "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
          "displayLines": "{[Skill02[0]]}",
          "constants": [],
          "variables": [
            "{[Skill02[0]]}"
          ]
        }
      },
      "casterAssign": "TargetSelf"
    }
  ],
  "whenAdded": [],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}