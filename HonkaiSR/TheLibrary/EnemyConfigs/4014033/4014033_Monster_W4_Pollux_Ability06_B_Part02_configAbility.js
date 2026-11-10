const configAbility = {
  "fileName": "4014033_Monster_W4_Pollux_Ability06_B_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1292838645\">Modifier_Monster_W4_Pollux_B_HardLockHp</a>"
    },
    {
      "name": "Define Custom Variable",
      "value": 1,
      "variableName": "IsNeedFade"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"599310144\">Monster_W4_Pollux_FX_Ground</a>"
    },
    {
      "name": "Show BattleEvent Button",
      "show": true
    },
    {
      "name": "WAIT FOR",
      "conditions": "Has Queued Ult"
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-2024056044\">Monster_W4_Pollux_ThirstBlood</a>[<span class=\"descriptionNumberColor\">Hastened Death</span>]",
        "invertCondition": true
      },
      "ifTargetFound": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2024056044\">Monster_W4_Pollux_ThirstBlood</a>[<span class=\"descriptionNumberColor\">Hastened Death</span>]",
          "valuePerStack": {
            "MDF_DamagePercentage": {
              "displayLines": "{[PassiveSkill01[1]]}"
            },
            "MDF_DamageHpAddedRatio": {
              "displayLines": "{[PassiveSkill01[0]]}"
            }
          }
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "value": {
        "displayLines": "_TempAIFlag"
      },
      "variableName": "AIFlag"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"599310144\">Monster_W4_Pollux_FX_Ground</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
    },
    {
      "name": "Define Custom Variable",
      "value": 0,
      "variableName": "IsNeedFade"
    },
    "Trigger: Ability End"
  ],
  "whenAdded": [
    {
      "name": "Preload Battle Event(s)",
      "beID": [
        60026
      ]
    },
    {
      "name": "Add Battle Event",
      "teamName": "Player Team",
      "eventID": 60026,
      "variables": null,
      "whenCreated": [
        "Show BattleEvent Button"
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1292838645\">Modifier_Monster_W4_Pollux_B_HardLockHp</a>",
      "valuePerStack": {
        "MDF_LockHp": {
          "displayLines": "{[PassiveSkill02[5]]}"
        }
      }
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "references": []
}