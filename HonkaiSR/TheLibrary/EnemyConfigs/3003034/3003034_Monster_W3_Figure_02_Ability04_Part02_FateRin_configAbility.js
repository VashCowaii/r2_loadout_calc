const configAbility = {
  "fileName": "3003034_Monster_W3_Figure_02_Ability04_Part02_FateRin",
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
      "modifier": "<a class=\"gModGreen\" id=\"1849920114\">Monster_W3_Figure_02_IsAiming_FateRin</a>"
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1849920114\">Monster_W3_Figure_02_IsAiming_FateRin</a>"
    }
  ]
}