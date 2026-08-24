const configAbility = {
  "fileName": "8015030_Monster_W5_AsatPramad_MainSpecialWin",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"472491240\">Enemy_W5_AsatPramad_DisableAction</a>"
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__472491240\">Enemy_W5_AsatPramad_DisableAction</a>",
      "modifierFlags": [
        "DisableAction"
      ]
    }
  ]
}