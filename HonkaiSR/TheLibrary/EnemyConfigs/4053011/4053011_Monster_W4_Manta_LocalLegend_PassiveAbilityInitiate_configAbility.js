const configAbility = {
  "fileName": "4053011_Monster_W4_Manta_LocalLegend_PassiveAbilityInitiate",
  "skillTrigger": "PassiveSkill02",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Level Entity}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-630222072\">W4_Manta_LocalLegend_BattleScore1</a>",
      "casterAssign": "TargetSelf"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1166907060\">Enemy_Standard_MuteHitFly</a>"
    },
    {
      "name": "Boss Bar Display",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "display": true
    },
    {
      "name": "Set Enemy Phase"
    },
    {
      "name": "Add Battle Event",
      "teamName": "Neutral Team",
      "eventID": 20035,
      "variables": null,
      "whenCreated": [
        {
          "name": "Assign Unique Name",
          "uniqueName": "SelectTarget",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-909971584\">Enemy_W4_Manta_LocalLegend_PickUpMessage</a>"
        },
        "Show BattleEvent Button"
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1575455810\">Enemy_W4_Manta_LocalLegend_Statues</a>[<span class=\"descriptionNumberColor\">Respite By The Waters</span>]",
      "valuePerStack": {
        "MDF_MaxLayer": {
          "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
          "displayLines": "{[PassiveSkill01[0]]}",
          "constants": [],
          "variables": [
            "{[PassiveSkill01[0]]}"
          ]
        }
      }
    },
    {
      "name": "Define Custom Variable",
      "variableName": "_DotDamageRatio",
      "value": {
        "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
        "displayLines": "{[PassiveSkill01[1]]}",
        "constants": [],
        "variables": [
          "{[PassiveSkill01[1]]}"
        ]
      }
    },
    {
      "name": "Create Enemies",
      "delayPercent": {
        "operator": "Variables[0] ({[PassiveSkill02[0]]}) || RETURN",
        "displayLines": "{[PassiveSkill02[0]]}",
        "constants": [],
        "variables": [
          "{[PassiveSkill02[0]]}"
        ]
      },
      "enemyList": [
        {
          "name": "Enemy Entry",
          "enemyID": {
            "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__95) || RETURN",
            "displayLines": "ENEMIES_OBJECT_UNUSED__95",
            "constants": [],
            "variables": [
              "ENEMIES_OBJECT_UNUSED__95"
            ]
          },
          "locationType": "BeforeCaster"
        }
      ]
    },
    {
      "name": "Create Enemies",
      "delayPercent": {
        "operator": "Variables[0] ({[PassiveSkill02[1]]}) || RETURN",
        "displayLines": "{[PassiveSkill02[1]]}",
        "constants": [],
        "variables": [
          "{[PassiveSkill02[1]]}"
        ]
      },
      "enemyList": [
        {
          "name": "Enemy Entry",
          "enemyID": {
            "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__103) || RETURN",
            "displayLines": "ENEMIES_OBJECT_UNUSED__103",
            "constants": [],
            "variables": [
              "ENEMIES_OBJECT_UNUSED__103"
            ]
          },
          "locationType": "BeforeCaster"
        }
      ]
    },
    {
      "name": "Create Enemies",
      "delayPercent": {
        "operator": "Variables[0] ({[PassiveSkill02[2]]}) || RETURN",
        "displayLines": "{[PassiveSkill02[2]]}",
        "constants": [],
        "variables": [
          "{[PassiveSkill02[2]]}"
        ]
      },
      "enemyList": [
        {
          "name": "Enemy Entry",
          "enemyID": {
            "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__103) || RETURN",
            "displayLines": "ENEMIES_OBJECT_UNUSED__103",
            "constants": [],
            "variables": [
              "ENEMIES_OBJECT_UNUSED__103"
            ]
          },
          "locationType": "AfterCaster"
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
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
      "name": "IF",
      "conditions": {
        "name": "OR",
        "conditionList": [
          {
            "name": "Enemy ID",
            "ID": 4053011,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "Elegy Siren: Insatiable Leviathan"
          },
          {
            "name": "Enemy ID",
            "ID": 405301100,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": null
          }
        ]
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"668717750\">Enemy_W4_Manta_LocalLegend_PartController_LockHP</a>"
        }
      ]
    }
  ],
  "whenAdded": [],
  "references": []
}