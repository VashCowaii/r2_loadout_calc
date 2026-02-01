const configAbility = {
  "fileName": "GlobalAbilitiesE_WMonster_Standard_HitAddStun",
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
      "modifier": "WEnemy_Standard_HitAddStun"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "WEnemy_Standard_HitAddStun",
      "execute": [
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Attack Targets of Modifier Holder}}"
              },
              "modifier": "Standard_CTRL_Stun[<span class=\"descriptionNumberColor\">Stunned</span>]",
              "duration": 1,
              "baseChance": 1
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}