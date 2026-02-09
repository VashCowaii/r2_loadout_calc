const configAbility = {
  "fileName": "1004021_Monster_W1_Gepard_AbilityP01",
  "childAbilityList": [
    "1004021_Monster_W1_Gepard_AbilityP01"
  ],
  "skillTrigger": "SkillP01",
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
      "modifier": "<a class=\"gModGreen\" id=\"633366102\">Enemy_W1_Gepard_ExtraDelay</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__633366102\">Enemy_W1_Gepard_ExtraDelay</a>",
      "execute": [
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            {
              "name": "Action Advance/Delay",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "advanceType": "Delay",
              "multiAdd": 0.5
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}