const configAbility = {
  "fileName": "3002040_Monster_W3_Clock_PassiveAbilityInitiate",
  "skillTrigger": "PassiveSkillInitiate",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1952577261\">Enemy_W3_Clock_RemoveOneMore</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1206431544\">Enemy_W3_Clock_WatchHandController</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1206431544\">Enemy_W3_Clock_WatchHandController</a>",
      "execute": [
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]"
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}