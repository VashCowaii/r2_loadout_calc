const configAbility = {
  "fileName": "8002090_Monster_XP_Minion04_PassiveAbilityInitiate",
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
      "modifier": "<a class=\"gModGreen\" id=\"1012060513\">Enemy_XP_Minion04_BeHitSoundController</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1012060513\">Enemy_XP_Minion04_BeHitSoundController</a>",
      "execute": [
        {
          "eventTrigger": "Take Damage Start [Owner]: Hit"
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}