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
      "modifier": "Modifier_Monster_W4_Pollux_B_HardLockHp"
    },
    {
      "name": "Define Custom Variable",
      "variableName": "IsNeedFade",
      "value": 1
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Monster_W4_Pollux_FX_Ground"
    },
    {
      "name": "Show BattleEvent Button",
      "show": true
    },
    {
      "name": "WAIT FOR",
      "condition": {
        "name": "Has Queued Ult"
      }
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
        "modifier": "Monster_W4_Pollux_ThirstBlood[<span class=\"descriptionNumberColor\">Hastened Death</span>]",
        "invertCondition": true
      },
      "ifTargetFound": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "Monster_W4_Pollux_ThirstBlood[<span class=\"descriptionNumberColor\">Hastened Death</span>]",
          "valuePerStack": {
            "MDF_DamagePercentage": {
              "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
              "displayLines": "{[PassiveSkill01[1]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkill01[1]]}"
              ]
            },
            "MDF_DamageHpAddedRatio": {
              "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
              "displayLines": "{[PassiveSkill01[0]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkill01[0]]}"
              ]
            }
          }
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "variableName": "AIFlag",
      "value": {
        "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__41) || RETURN",
        "displayLines": "ENEMIES_OBJECT_UNUSED__41",
        "constants": [],
        "variables": [
          "ENEMIES_OBJECT_UNUSED__41"
        ]
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Monster_W4_Pollux_FX_Ground"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Monster_APShow"
    },
    {
      "name": "Define Custom Variable",
      "variableName": "IsNeedFade",
      "value": 0
    },
    "Trigger: Ability End"
  ],
  "whenAdded": [
    {
      "name": "Preload Battle Event(s)",
      "eventID": [
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
      "modifier": "Modifier_Monster_W4_Pollux_B_HardLockHp",
      "valuePerStack": {
        "MDF_LockHp": {
          "operator": "Variables[0] ({[PassiveSkill02[5]]}) || RETURN",
          "displayLines": "{[PassiveSkill02[5]]}",
          "constants": [],
          "variables": [
            "{[PassiveSkill02[5]]}"
          ]
        }
      }
    }
  ],
  "references": []
}