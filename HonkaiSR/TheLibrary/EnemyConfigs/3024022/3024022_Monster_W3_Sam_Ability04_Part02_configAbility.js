const configAbility = {
  "fileName": "3024022_Monster_W3_Sam_Ability04_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"574655319\">Monster_W3_Sam_Main</a>"
      }
    },
    "Ability Start",
    {
      "name": "Consume",
      "consumeFrom": "MaxHP",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "consumePercent": {
        "displayLines": "{[Skill04[1]]}"
      },
      "consumeFloor": 1
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Check Boolean Value",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "variableName": "Monster_Sam_RLBoss"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1053337379\">Enemy_W3_Sam_RLBoss_Enhance</a>[<span class=\"descriptionNumberColor\">Secondary Combustion</span>]",
          "immediateEffect": true,
          "valuePerStack": {
            "MDF_DamagePercentage": {
              "displayLines": "{[PassiveSkill01[3]]}"
            },
            "MDF_SpeedUpRatio": {
              "displayLines": "{[Skill04[0]]}"
            },
            "MDF_ChangeHPRatio": {
              "displayLines": "{[Skill04[3]]}"
            }
          }
        }
      ],
      "failed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-909732184\">Monster_W3_Sam_Enhance</a>[<span class=\"descriptionNumberColor\">Secondary Combustion</span>]",
          "immediateEffect": true,
          "valuePerStack": {
            "MDF_DamagePercentage": {
              "displayLines": "{[PassiveSkill01[3]]}"
            },
            "MDF_SpeedUpRatio": {
              "displayLines": "{[Skill04[0]]}"
            },
            "MDF_ChangeHPRatio": {
              "displayLines": "{[Skill04[3]]}"
            }
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Check Boolean Value",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "variableName": "Monster_Sam_RLBoss"
          },
          {
            "name": "Compare: Variable",
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 3
          }
        ]
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE, with Unselectables)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1797892283\">Monster_W3_Sam_BurningBP</a>[<span class=\"descriptionNumberColor\">Molten Core</span>]",
      "valuePerStack": {
        "MDF_HealDownRatio": {
          "displayLines": "{[PassiveSkill01[4]]}"
        },
        "MDF_DamageUpRatio": {
          "displayLines": "{[PassiveSkill01[2]]}"
        }
      }
    },
    {
      "name": "Set SkillPoint Mechanic",
      "modifierName": "<a class=\"gModGreen\" id=\"909865518\">Monster_W3_Sam_UseBurningBP</a>"
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}