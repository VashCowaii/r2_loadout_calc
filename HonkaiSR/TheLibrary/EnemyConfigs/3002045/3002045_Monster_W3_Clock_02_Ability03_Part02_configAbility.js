const configAbility = {
  "fileName": "3002045_Monster_W3_Clock_02_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "IF",
      "conditions": {
        "name": "Check Boolean Value",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "value": "MonsterType_W3_Theater"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-720232452\">MModifier_Monster_W3_Theater_RLBoss_StanceDamage</a>"
        }
      ]
    },
    {
      "name": "UI Display Event (On Entity)",
      "target": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "popUpText": "Action Advanced"
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
    "Trigger: Ability End"
  ],
  "references": []
}