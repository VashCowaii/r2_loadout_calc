const configAbility = {
  "fileName": "GlobalAbilitiesE_Monster_XP_Minion04_Huge",
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
      "modifier": "Monster_XP_Minion04_Huge"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Monster_XP_Minion04_Huge",
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