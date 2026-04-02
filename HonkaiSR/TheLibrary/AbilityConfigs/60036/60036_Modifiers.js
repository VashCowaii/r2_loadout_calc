const configAbility = {
  "fileName": "60036_Modifiers",
  "abilityType": "Char. Modifiers",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1381424630\">MStageMissionBattleEvent60020</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Add Ability",
              "abilityName": "MissionBattleEvent60020_Ability03_Part01"
            },
            {
              "name": "Add Ability",
              "abilityName": "MissionBattleEvent60020_Ability03_Part02"
            }
          ]
        }
      ]
    }
  ],
  "references": []
}