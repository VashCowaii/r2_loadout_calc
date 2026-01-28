const configAbility = {
  "fileName": "Cyrene_Cyrene_MaleMaster",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [],
  "whenAdded": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "modifier": "Cyrene_Passive_MaleMaster"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Cyrene_Passive_MaleMaster",
      "stackData": [],
      "latentQueue": []
    }
  ]
}