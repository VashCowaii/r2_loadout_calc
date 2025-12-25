const configAbility = {
  "fileName": "TheAshblazingGrandDuke_Ability51150",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "Relic_115_Main2"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Relic_115_Main2",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Attack Type",
                "attackTypes": [
                  "Follow-up"
                ]
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "on": "Attacker",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (0.2) || RETURN",
                    "displayLines": "0.2",
                    "constants": [],
                    "variables": [
                      0.2
                    ]
                  }
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ],
  "isLightcone": true,
  "isRelic": true,
  "desc": [
    "Increases the DMG dealt by Follow-up ATK by 20%.",
    "When the wearer uses a Follow-up ATK, increases the wearer's ATK by 6% for every time the Follow-up ATK deals DMG. This effect can stack up to 8 time(s) and lasts for 3 turn(s). This effect is removed the next time the wearer uses a Follow-up ATK."
  ],
  "params": [
    [
      0.2
    ],
    [
      0.06,
      8,
      3
    ]
  ]
}