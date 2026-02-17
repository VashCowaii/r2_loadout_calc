const configAbility = {
  "fileName": "3002051_Monster_W3_Junk_ActivityTelevision",
  "skillTrigger": "SkillP01",
  "abilityType": "Basic ATK",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable",
      "variableName": "WeaknessCount",
      "value": 3
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"945585904\">Monster_W3_Junk_AttackListenerForPuzzle</a>",
      "casterAssign": "TargetSelf"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-2087901039\">Monster_W3_Junk_ATMark</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-2087901039\">Monster_W3_Junk_ATMark</a>",
      "modifierFlags": [
        "Deathrattle"
      ],
      "stackData": [],
      "latentQueue": [
        "WeaknessCount"
      ]
    }
  ]
}