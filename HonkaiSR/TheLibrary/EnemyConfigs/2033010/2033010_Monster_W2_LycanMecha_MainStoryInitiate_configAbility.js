const configAbility = {
  "fileName": "2033010_Monster_W2_LycanMecha_MainStoryInitiate",
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
      "modifier": "<a class=\"gModGreen\" id=\"2016689086\">Enemy_W2_LycanMecha_MainStory</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__2016689086\">Enemy_W2_LycanMecha_MainStory</a>",
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