const configAbility = {
  "fileName": "60001_Colossus_Ability03_Pre",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1565616527\">Colossus_ButtonUIController</a>"
    },
    {
      "name": "WAIT FOR",
      "condition": {
        "name": "Target has Extra-Turn Queued",
        "target": {
          "name": "Target Name",
          "target": "{{All Unselectable Targets}}"
        }
      }
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  }
}