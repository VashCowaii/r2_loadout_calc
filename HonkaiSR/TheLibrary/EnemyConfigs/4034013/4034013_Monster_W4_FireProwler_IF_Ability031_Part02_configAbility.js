const configAbility = {
  "fileName": "4034013_Monster_W4_FireProwler_IF_Ability031_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1617419184\">Enemy_W4_FireProwler_IF_Charge_Ability031</a>[<span class=\"descriptionNumberColor\">Dying Sobs</span>]"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"33624492\">Enemy_W4_FireProwler_TimePower</a>[<span class=\"descriptionNumberColor\">Calamity Power</span>]",
      "addStacksPerTrigger": 6,
      "casterAssign": "TargetSelf"
    },
    {
      "name": "UI Display Event (On Entity)",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "popUpText": "Calamity Power"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1026601385\">Enemy_W4_FireProwler_IF_OffTeamFormation</a>"
    },
    {
      "name": "Create Enemies",
      "delayPercent": 0,
      "enemyList": [
        {
          "name": "Create Enemy from Custom",
          "value": "SummonID_3",
          "summonLocation": "First"
        },
        {
          "name": "Create Enemy from Custom",
          "value": "SummonID_3",
          "summonLocation": "First"
        },
        {
          "name": "Create Enemy from Custom",
          "value": "SummonID_3",
          "summonLocation": "First"
        },
        {
          "name": "Create Enemy from Custom",
          "value": "SummonID_3",
          "summonLocation": "First"
        }
      ]
    },
    {
      "name": "UI Display Event",
      "popUpText": "Defeat clones to weaken the boss's ability"
    },
    {
      "name": "UI Display Event",
      "popUpText": "Defeat clone to reduce the boss's Toughness"
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"-410869211\">TaskList_Monster_W4_FireProwler_IF_SummonIndexInitiate</a>"
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "conditions": {
        "name": "Enemy ID",
        "ID": {
          "operator": "Variables[0] (SummonID_3) || RETURN",
          "displayLines": "SummonID_3",
          "constants": [],
          "variables": [
            "SummonID_3"
          ]
        },
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "characterName": null
      },
      "ifTargetFound": [
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "phase": "Phase03"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2128816741\">Enemy_W4_FireProwler_01_IF_Activated03</a>",
          "valuePerStack": {
            "SummonIndex": {
              "operator": "Variables[0] (CurrentSummonIndex) || RETURN",
              "displayLines": "CurrentSummonIndex",
              "constants": [],
              "variables": [
                "CurrentSummonIndex"
              ]
            },
            "MDF_ActionDelay1_Weight": {
              "operator": "Variables[0] ({[SkillP02[0]]}) || RETURN",
              "displayLines": "{[SkillP02[0]]}",
              "constants": [],
              "variables": [
                "{[SkillP02[0]]}"
              ]
            },
            "MDF_ActionDelay1": {
              "operator": "Variables[0] ({[SkillP02[1]]}) || RETURN",
              "displayLines": "{[SkillP02[1]]}",
              "constants": [],
              "variables": [
                "{[SkillP02[1]]}"
              ]
            },
            "MDF_ActionDelay2_Weight": {
              "operator": "Variables[0] ({[SkillP02[2]]}) || RETURN",
              "displayLines": "{[SkillP02[2]]}",
              "constants": [],
              "variables": [
                "{[SkillP02[2]]}"
              ]
            },
            "MDF_ActionDelay2": {
              "operator": "Variables[0] ({[SkillP02[3]]}) || RETURN",
              "displayLines": "{[SkillP02[3]]}",
              "constants": [],
              "variables": [
                "{[SkillP02[3]]}"
              ]
            },
            "MDF_ActionDelay3_Weight": {
              "operator": "Variables[0] ({[SkillP02[4]]}) || RETURN",
              "displayLines": "{[SkillP02[4]]}",
              "constants": [],
              "variables": [
                "{[SkillP02[4]]}"
              ]
            },
            "MDF_ActionDelay3": {
              "operator": "Variables[0] ({[SkillP02[5]]}) || RETURN",
              "displayLines": "{[SkillP02[5]]}",
              "constants": [],
              "variables": [
                "{[SkillP02[5]]}"
              ]
            }
          }
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"359667306\">TaskList_Monster_W4_FireProwler_IF_SummonIndexChange</a>"
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "searchRandom": true,
      "maxTargets": 1,
      "conditions": {
        "name": "Enemy ID",
        "ID": {
          "operator": "Variables[0] (SummonID_3) || RETURN",
          "displayLines": "SummonID_3",
          "constants": [],
          "variables": [
            "SummonID_3"
          ]
        },
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "characterName": null
      },
      "ifTargetFound": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1578257108\">Enemy_W4_FireProwler_01_IF_Bonus</a>[<span class=\"descriptionNumberColor\">Complete Vessel</span>]"
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1742476718\">Enemy_W4_FireProwler_01_IF_HPBack</a>[<span class=\"descriptionNumberColor\">Shackled</span>]",
      "valuePerStack": {
        "MDF_LoseHPRatio": {
          "operator": "Variables[0] ({[PassiveSkill01[2]]}) || RETURN",
          "displayLines": "{[PassiveSkill01[2]]}",
          "constants": [],
          "variables": [
            "{[PassiveSkill01[2]]}"
          ]
        }
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
    },
    "Trigger: Ability End"
  ],
  "references": []
}