const configAbility = {
  "fileName": "Cyrene_Cyrene_FemaleMaster",
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
      "modifier": "Cyrene_Passive_FemaleMaster"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Cyrene_Passive_FemaleMaster",
      "stackData": [],
      "latentQueue": []
    }
  ]
}