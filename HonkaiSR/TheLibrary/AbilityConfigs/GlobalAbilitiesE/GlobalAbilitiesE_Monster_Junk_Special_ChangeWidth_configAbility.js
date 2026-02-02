const configAbility = {
  "fileName": "GlobalAbilitiesE_Monster_Junk_Special_ChangeWidth",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [],
  "whenAdded": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Monster_Junk_Special_ChangeWidth"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Monster_Junk_Special_ChangeWidth",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}