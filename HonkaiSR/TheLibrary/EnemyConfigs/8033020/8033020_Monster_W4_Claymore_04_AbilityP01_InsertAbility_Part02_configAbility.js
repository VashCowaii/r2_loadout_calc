const configAbility = {
  "fileName": "8033020_Monster_W4_Claymore_04_AbilityP01_InsertAbility_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Dispel Debuffs",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "silent": true,
      "toRemove": [
        "DisableAction",
        "STAT_CTRL"
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Check Boolean Value",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "value": "Monster_W4_Claymore_04_Main"
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "scope": "TargetEntity",
          "variableName": "AIFlag",
          "value": 5
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "scope": "TargetEntity",
          "variableName": "AIFlag",
          "value": 1
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Current Turn Is",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        }
      },
      "passed": [
        {
          "name": "Assign Advance/Delay to Current Ability Use",
          "adjustmentValue": {
            "operator": "Variables[0] ({[SkillP01[4]]}) || RETURN",
            "displayLines": "{[SkillP01[4]]}",
            "constants": [],
            "variables": [
              "{[SkillP01[4]]}"
            ]
          },
          "adjustmentType": "Advance"
        },
        {
          "name": "Action Advance/Delay",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "advanceType": "Set",
          "multiAdd": "{[SkillP01[4]]}"
        }
      ],
      "failed": [
        {
          "name": "Action Advance/Delay",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "advanceType": "Set",
          "multiAdd": "{[SkillP01[4]]}"
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1394805142\">Modifier_Monster_W4_Claymore_04_Defeated</a>[<span class=\"descriptionNumberColor\">Ruined</span>]",
      "duration": {
        "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
        "displayLines": "{[SkillP01[3]]}",
        "constants": [],
        "variables": [
          "{[SkillP01[3]]}"
        ]
      },
      "valuePerStack": {
        "MDF_DamageTakenUpRatio": {
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
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-998413100\">Modifier_Monster_W4_Claymore_04_Honor</a>[<span class=\"descriptionNumberColor\">All Wishes</span>]"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Enemy Team All(with Unselectable)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-950617106\">Modifier_Monster_W4_Claymore_04_Enhanced</a>[<span class=\"descriptionNumberColor\">Inspire</span>]",
      "onlyRemoveOwnersInstance": true
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Enemy Team All(with Unselectable)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1452769834\">Modifier_Monster_W4_Claymore_04_Ability03_Protect_Weakness</a>[<span class=\"descriptionNumberColor\">Weakness Protected</span>]",
      "onlyRemoveOwnersInstance": true
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-2082088888\">Modifier_Monster_W4_Claymore_04_Ability03_Charge_ForShow</a>[<span class=\"descriptionNumberColor\">Smite Evil</span>]"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-374062983\">Modifier_Monster_W4_Claymore_04_Ability03_Charge</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Check Boolean Value",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "value": "Monster_W4_Claymore_04_Main"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1225325614\">W4_Claymore_04_BattleScore1</a>"
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}