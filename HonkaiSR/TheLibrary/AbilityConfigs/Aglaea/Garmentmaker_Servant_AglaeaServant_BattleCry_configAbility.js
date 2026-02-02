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
      "modifier": "Memosprite_AglaeaServant_BattleCry"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Memosprite_AglaeaServant_BattleCry",
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
              "multi": "(0 - 1)"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}