const configAbility = {
  "fileName": "Demiurge_Servant_CyreneServant_BattleCry",
  "childAbilityList": [
    "Demiurge_Servant_CyreneServant_BattleCry"
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
      "modifier": "<a class=\"gModGreen\" id=\"-1818503403\">Memosprite_CyreneServant_BattleCry</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1818503403\">Memosprite_CyreneServant_BattleCry</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Dispel Debuffs",
              "target": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "dispelCount": 99,
              "toRemove": [
                "STAT_CTRL"
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}