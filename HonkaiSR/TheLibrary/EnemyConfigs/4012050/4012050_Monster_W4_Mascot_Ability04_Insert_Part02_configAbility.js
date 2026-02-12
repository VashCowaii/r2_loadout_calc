const configAbility = {
  "fileName": "4012050_Monster_W4_Mascot_Ability04_Insert_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "UI Display Event",
      "popUpText": "Looping Explanation"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1102283112\">Enemy_W4_Mascot_EscapingCharge00</a>[<span class=\"descriptionNumberColor\">Brainteaser</span>]"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1085505493\">Enemy_W4_Mascot_EscapingCharge01</a>[<span class=\"descriptionNumberColor\">Brainteaser</span>]"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1068727874\">Enemy_W4_Mascot_EscapingCharge02</a>[<span class=\"descriptionNumberColor\">Brainteaser</span>]"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1777684731\">Standard_AllDamageTypeAddedRatio</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
      "valuePerStack": {
        "MDF_PropertyValue": {
          "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
          "displayLines": "{[SkillP01[1]]}",
          "constants": [],
          "variables": [
            "{[SkillP01[1]]}"
          ]
        }
      }
    },
    {
      "name": "Dispel Debuffs",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "silent": true
    }
  ],
  "references": []
}