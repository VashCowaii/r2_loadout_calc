const configAbility = {
  "fileName": "Garmentmaker_Servant_AglaeaServant_BattleCry",
  "childAbilityList": [
    "Garmentmaker_Servant_AglaeaServant_BattleCry"
  ],
  "skillTrigger": "SkillP03",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1545439856\">Memosprite_AglaeaServant_BattleCry</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1545439856\">Memosprite_AglaeaServant_BattleCry</a>",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Action Advance/Delay",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "advanceType": "Set",
              "multiAdd": "(0 - 1)"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}