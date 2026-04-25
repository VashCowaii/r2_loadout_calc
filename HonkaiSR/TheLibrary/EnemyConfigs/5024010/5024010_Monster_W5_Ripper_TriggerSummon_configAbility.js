const configAbility = {
  "fileName": "5024010_Monster_W5_Ripper_TriggerSummon",
  "skillTrigger": "Skill07",
  "abilityType": "Skill",
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Deleted bullshit",
    {
      "name": "Define Modifier-Specific Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifierName": "<a class=\"gModGreen\" id=\"1728959136\">Monster_W5_Ripper_Passive</a>",
      "variableName": "MDF_InsertCheck",
      "value": 0
    },
    {
      "name": "Define Modifier-Specific Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifierName": "<a class=\"gModGreen\" id=\"1728959136\">Monster_W5_Ripper_Passive</a>",
      "variableName": "MDF_CurrentCount",
      "value": 0
    },
    {
      "name": "Update Displayed Energy Bar",
      "value": 0,
      "entityClass": "Enemy",
      "target": {
        "name": "Target Name",
        "target": "{{Modifier Holder}}"
      },
      "maximum": {
        "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
        "displayLines": "{[PassiveSkill01[0]]}",
        "constants": [],
        "variables": [
          "{[PassiveSkill01[0]]}"
        ]
      },
      "assignState": "True",
      "state": "Normal",
      "trigger": "SpEff_Trigger"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-98226572\">Monster_W5_Ripper_DamageTakenUp</a>[<span class=\"descriptionNumberColor\">Teasing</span>]",
      "duration": {
        "operator": "Variables[0] ({[PassiveSkill01[5]]}) || RETURN",
        "displayLines": "{[PassiveSkill01[5]]}",
        "constants": [],
        "variables": [
          "{[PassiveSkill01[5]]}"
        ]
      },
      "stackLimit": {
        "operator": "Variables[0] ({[PassiveSkill01[2]]}) || RETURN",
        "displayLines": "{[PassiveSkill01[2]]}",
        "constants": [],
        "variables": [
          "{[PassiveSkill01[2]]}"
        ]
      },
      "valuePerStack": {
        "MDF_DamageTakenUpRatio_PerLayer": {
          "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
          "displayLines": "{[PassiveSkill01[1]]}",
          "constants": [],
          "variables": [
            "{[PassiveSkill01[1]]}"
          ]
        }
      },
      "addStacksPerTrigger": 1
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"1271467699\">Monster_W5_RipperPart_Bonus</a>[<span class=\"descriptionNumberColor\">Wicked Grin</span>]"
      },
      "passed": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1271467699\">Monster_W5_RipperPart_Bonus</a>[<span class=\"descriptionNumberColor\">Wicked Grin</span>]"
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}