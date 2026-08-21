const configAbility = {
  "fileName": "5023021_Monster_W5_Eater_Ability02_Part02_FateRin",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "UI Display Event",
      "popUpText": "Attack God-Devourer Offspring to reclaim ATK!"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1281011999\">Enemy_W5_Eater_Ability02_Attack</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-367653256\">Enemy_W5_Eater_Ability02_Eater_FateRin</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"55624689\">Enemy_W5_Eater_Ability02_Ate_FateRin</a>",
      "valuePerStack": {
        "MDF_AttackRatio": {
          "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
          "displayLines": "{[Skill02[0]]}",
          "constants": [],
          "variables": [
            "{[Skill02[0]]}"
          ]
        },
        "MDF_AttackMax": {
          "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
          "displayLines": "{[Skill02[1]]}",
          "constants": [],
          "variables": [
            "{[Skill02[1]]}"
          ]
        }
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1765185548\">Enemy_W5_Eater_Ability02_Ate_Sub_FateRin</a>",
      "stackLimit": {
        "operator": "Variables[0] ({[Skill02[2]]}) || RETURN",
        "displayLines": "{[Skill02[2]]}",
        "constants": [],
        "variables": [
          "{[Skill02[2]]}"
        ]
      },
      "valuePerStack": {
        "MDF_MaxLayer": {
          "operator": "Variables[0] ({[Skill02[2]]}) || RETURN",
          "displayLines": "{[Skill02[2]]}",
          "constants": [],
          "variables": [
            "{[Skill02[2]]}"
          ]
        }
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1765185548\">Enemy_W5_Eater_Ability02_Ate_Sub_FateRin</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1765185548\">Enemy_W5_Eater_Ability02_Ate_Sub_FateRin</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1765185548\">Enemy_W5_Eater_Ability02_Ate_Sub_FateRin</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1765185548\">Enemy_W5_Eater_Ability02_Ate_Sub_FateRin</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1765185548\">Enemy_W5_Eater_Ability02_Ate_Sub_FateRin</a>",
      "addStacksPerTrigger": {
        "operator": "Variables[0] ({[Skill02[2]]}) || RETURN",
        "displayLines": "{[Skill02[2]]}",
        "constants": [],
        "variables": [
          "{[Skill02[2]]}"
        ]
      }
    },
    {
      "name": "Define Custom Variable with Copy",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"55624689\">Enemy_W5_Eater_Ability02_Ate_FateRin</a>",
      "variable": "MDF_LoseAttack",
      "target2": null,
      "variable2": "Skill02_Attack"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-367653256\">Enemy_W5_Eater_Ability02_Eater_FateRin</a>",
      "valuePerStack": {
        "MDF_LoseAttack": {
          "operator": "Variables[0] (Skill02_Attack) || RETURN",
          "displayLines": "Skill02_Attack",
          "constants": [],
          "variables": [
            "Skill02_Attack"
          ]
        },
        "MDF_Attack": {
          "operator": "Variables[0] (Skill02_Attack) || RETURN",
          "displayLines": "Skill02_Attack",
          "constants": [],
          "variables": [
            "Skill02_Attack"
          ]
        }
      }
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1765185548\">Enemy_W5_Eater_Ability02_Ate_Sub_FateRin</a>"
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "references": []
}