const configAbility = {
  "fileName": "4033010_Monster_XP_Elite01_02_Ability04_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-2071311511\">Enemy_XP_Elite01_02_Charge_Enhance</a>[<span class=\"descriptionNumberColor\">Ominous Degeneration</span>]"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-2071311511\">Enemy_XP_Elite01_02_Charge_Enhance</a>[<span class=\"descriptionNumberColor\">Ominous Degeneration</span>]",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "Uses \"Torrential Surge\" in the next action.",
      "type": "Other",
      "statusName": "Ominous Degeneration"
    }
  ]
}