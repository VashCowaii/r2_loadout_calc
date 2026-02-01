const configAbility = {
  "fileName": "GlobalAbilitiesE_Monster_Aventurine_GamblingStart",
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
      "modifier": "Monster_Aventurine_GamblingStart"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Monster_Aventurine_GamblingStart",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "AIFlag",
              "value": 3
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}