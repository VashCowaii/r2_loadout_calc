const configAbility = {
  "fileName": "2032021_Monster_W2_Lycan_01_MainStoryInitiate240",
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
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
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