const configAbility = {
  "fileName": "2032022_Monster_W2_Lycan_01_MainStoryInitiate240",
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
      "modifier": "<a class=\"gModGreen\" id=\"857287277\">Enemy_W2_Lycan_01_MainStory240</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__857287277\">Enemy_W2_Lycan_01_MainStory240</a>",
      "execute": [
        {
          "eventTrigger": "Action Phase Start [Anyone][?]"
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}