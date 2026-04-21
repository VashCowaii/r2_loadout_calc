const configAbility = {
  "fileName": "3002042_Monster_W3_Clock_02_IF_Ability03_Insert_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-2083560746\">MModifier_W3_Theater_IF_HourglassTrigger_Flop</a>"
    },
    {
      "name": "UI Display Event (On Entity)",
      "target": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "popUpText": "Action Advance"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"2064893309\">Enemy_W3_Clock_Ability01_Charge</a>[<span class=\"descriptionNumberColor\">Set Alarm</span>]"
    },
    {
      "name": "Action Advance/Delay",
      "target": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "advanceType": "Set",
      "multiAdd": "(0 - {[Skill03[0]]})"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Check Boolean Value",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "value": "MonsterType_W3_Theater"
      }
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-2083560746\">MModifier_W3_Theater_IF_HourglassTrigger_Flop</a>"
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "references": []
}