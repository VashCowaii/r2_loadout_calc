const configAbility = {
  "fileName": "5023020_Monster_W5_Eater_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-662226107\">Enemy_W5_Eater_Ability02_Ate</a>[<span class=\"descriptionNumberColor\">Devour</span>]",
      "valuePerStack": {
        "MDF_AttackRatio": {
          "displayLines": "{[Skill02[1]]}"
        },
        "MDF_AttackMax": {
          "displayLines": "{[Skill02[2]]}"
        },
        "MDF_DirtyHPRatio": {
          "displayLines": "{[Skill02[0]]}"
        }
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1742639356\">Enemy_W5_Eater_Ability02_Ate_Sub</a>",
      "stackLimit": {
        "displayLines": "{[Skill02[3]]}"
      },
      "valuePerStack": {
        "MDF_MaxLayer": {
          "displayLines": "{[Skill02[3]]}"
        }
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1742639356\">Enemy_W5_Eater_Ability02_Ate_Sub</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1742639356\">Enemy_W5_Eater_Ability02_Ate_Sub</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1742639356\">Enemy_W5_Eater_Ability02_Ate_Sub</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1742639356\">Enemy_W5_Eater_Ability02_Ate_Sub</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1742639356\">Enemy_W5_Eater_Ability02_Ate_Sub</a>",
      "addStacksPerTrigger": {
        "displayLines": "{[Skill02[3]]}"
      }
    },
    {
      "name": "Define Custom Variable with Copy",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-662226107\">Enemy_W5_Eater_Ability02_Ate</a>[<span class=\"descriptionNumberColor\">Devour</span>]",
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
      "modifier": "<a class=\"gModGreen\" id=\"-1972425744\">Enemy_W5_Eater_Ability02_Eater</a>[<span class=\"descriptionNumberColor\">Satiated</span>]",
      "valuePerStack": {
        "MDF_LoseAttack": {
          "displayLines": "Skill02_Attack"
        },
        "MDF_Attack": {
          "displayLines": "Skill02_Attack"
        }
      }
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1742639356\">Enemy_W5_Eater_Ability02_Ate_Sub</a>"
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "references": []
}