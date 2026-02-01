const configAbility = {
  "fileName": "GlobalAbilitiesE_Monster_Standard_BossInfoBar",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Boss Bar Display",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "display": true
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Standard_BOSSInfoBar_Active"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Standard_BOSSInfoBar_Active",
      "stackData": [],
      "latentQueue": []
    }
  ]
}