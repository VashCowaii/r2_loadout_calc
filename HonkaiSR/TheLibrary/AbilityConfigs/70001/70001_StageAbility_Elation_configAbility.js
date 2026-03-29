const configAbility = {
  "fileName": "70001_StageAbility_Elation",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Preload Battle Event(s)",
      "eventID": [
        70001
      ]
    }
  ],
  "whenAdded": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"994071549\">MLevel_Elation_Standard</a>"
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  }
}