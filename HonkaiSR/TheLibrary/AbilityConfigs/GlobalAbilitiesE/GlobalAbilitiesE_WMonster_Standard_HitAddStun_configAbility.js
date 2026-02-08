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
      "modifier": "<a class=\"gModGreen\" id=\"1381171644\">WEnemy_Standard_HitAddStun</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1381171644\">WEnemy_Standard_HitAddStun</a>",
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
              "modifier": "<a class=\"gModGreen\" id=\"-1162946172\">Standard_CTRL_Stun</a>[<span class=\"descriptionNumberColor\">Stunned</span>]",
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