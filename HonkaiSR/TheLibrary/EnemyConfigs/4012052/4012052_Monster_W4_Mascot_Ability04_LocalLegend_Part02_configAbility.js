const configAbility = {
  "fileName": "4012052_Monster_W4_Mascot_Ability04_LocalLegend_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "UI Display Event",
      "popUpText": "Looping Explanation"
    },
    {
      "name": "Dispel Debuffs",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "silent": true
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
      "modifier": "<a class=\"gModGreen\" id=\"-71309847\">Enemy_W4_Mascot_LocalLegend_DeathRattle</a>"
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
      "name": "Mark Entity For Immediate Death"
    },
    {
      "name": "Force Entity Death",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      }
    },
    "Trigger: Ability End"
  ],
  "references": []
}