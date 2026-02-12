const configAbility = {
  "fileName": "4053011_Monster_W4_Manta_LocalLegend_PassiveAbility_Insert",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-643353377\">Enemy_W4_Manta_LocalLegend_Virus_Monster</a>[<span class=\"descriptionNumberColor\">Glacial Erosion</span>]"
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
            "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__104) || RETURN",
            "displayLines": "ENEMIES_OBJECT_UNUSED__104",
            "constants": [],
            "variables": [
              "ENEMIES_OBJECT_UNUSED__104"
            ]
          },
          "locationType": "AfterCaster"
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
    "Deleted bullshit",
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"542143301\">Monster_ChangePhase</a>"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "TargetEntity",
      "variableName": "AIFlag",
      "value": 3
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"668717750\">Enemy_W4_Manta_LocalLegend_PartController_LockHP</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Target",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "target2": {
          "name": "Target Name",
          "target": "{{Current Turn Owner}}"
        }
      },
      "passed": [
        {
          "name": "Assign Advance/Delay to Current Ability Use",
          "adjustmentValue": 0,
          "adjustmentType": "="
        }
      ]
    },
    {
      "name": "Action Advance/Delay",
      "advanceType": "Set",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "set": 0
    }
  ],
  "references": []
}