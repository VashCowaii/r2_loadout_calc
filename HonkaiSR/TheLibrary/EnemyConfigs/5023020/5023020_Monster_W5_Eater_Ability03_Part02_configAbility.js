const configAbility = {
  "fileName": "5023020_Monster_W5_Eater_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable with Copy",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1972425744\">Enemy_W5_Eater_Ability02_Eater</a>[<span class=\"descriptionNumberColor\">Satiated</span>]",
      "variable": "MDF_LoseAttack",
      "target2": null,
      "variable2": "Skill03_Attack"
    },
    {
      "name": "Define Custom Variable",
      "variableName": "Skill03_Attack",
      "value": {
        "operator": "Variables[0] (Skill03_Attack) || Variables[1] ({[Skill03[0]]}) || MUL || RETURN",
        "displayLines": "(Skill03_Attack * {[Skill03[0]]})",
        "constants": [],
        "variables": [
          "Skill03_Attack",
          "{[Skill03[0]]}"
        ]
      }
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1972425744\">Enemy_W5_Eater_Ability02_Eater</a>[<span class=\"descriptionNumberColor\">Satiated</span>]"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"555908682\">Enemy_W5_Eater_Ability03_Attack</a>[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
      "duration": {
        "operator": "Variables[0] ({[Skill03[1]]}) || RETURN",
        "displayLines": "{[Skill03[1]]}",
        "constants": [],
        "variables": [
          "{[Skill03[1]]}"
        ]
      },
      "valuePerStack": {
        "MDF_Attack": {
          "operator": "Variables[0] (Skill03_Attack) || RETURN",
          "displayLines": "Skill03_Attack",
          "constants": [],
          "variables": [
            "Skill03_Attack"
          ]
        }
      },
      "casterAssign": "TargetSelf"
    }
  ],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  },
  "references": []
}