const configAbility = {
  "fileName": "Hook_Hook_Trace01",
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
      "modifier": "M_Hook_Trace01"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "M_Hook_Trace01",
      "stackData": [],
      "latentQueue": []
    }
  ]
}