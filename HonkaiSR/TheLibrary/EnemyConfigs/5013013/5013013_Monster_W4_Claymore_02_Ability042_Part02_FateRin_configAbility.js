const configAbility = {
  "fileName": "5013013_Monster_W4_Claymore_02_Ability042_Part02_FateRin",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Change Entity Turn-State",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "phase": "Phase1"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-40648707\">MModifier_Monster_W4_Claymore_02_Ability03_Eff</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1553959515\">MModifier_Monster_W4_Claymore_02_Ability03_Aim_FateRin</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-989097149\">MModifier_Monster_W4_Claymore_02_Ability03_AllDamageTypeTaken</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
      "duration": {
        "operator": "Variables[0] ({[Skill03[3]]}) || RETURN",
        "displayLines": "{[Skill03[3]]}",
        "constants": [],
        "variables": [
          "{[Skill03[3]]}"
        ]
      },
      "valuePerStack": {
        "MDF_PropertyValue": {
          "operator": "Variables[0] ({[Skill03[2]]}) || RETURN",
          "displayLines": "{[Skill03[2]]}",
          "constants": [],
          "variables": [
            "{[Skill03[2]]}"
          ]
        }
      }
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}