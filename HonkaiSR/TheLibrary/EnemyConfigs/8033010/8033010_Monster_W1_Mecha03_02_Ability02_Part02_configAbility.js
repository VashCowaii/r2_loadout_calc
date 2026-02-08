const configAbility = {
  "fileName": "8033010_Monster_W1_Mecha03_02_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"1080547453\">Monster_W1_Mecha03_02_Ability04After</a>"
      },
      "passed": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1080547453\">Monster_W1_Mecha03_02_Ability04After</a>"
        }
      ]
    },
    "Ability Start",
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1515004059\">Monster_W1_Mecha03_02_ChargeEffect</a>[<span class=\"descriptionNumberColor\">In Training</span>]"
    },
    "Trigger: Ability End"
  ],
  "references": []
}