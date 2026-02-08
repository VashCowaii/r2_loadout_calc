const compositeAbilityObject = {
  "fullCharacterName": "Data Bank",
  "trimCharacterName": "DataBank",
  "abilityList": [
    "DataBank_Ability20006"
  ],
  "fixedStats": {},
  "abilityObject": {
    "DataBank_Ability20006": {
      "fileName": "DataBank_Ability20006",
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
          "modifier": "<a class=\"gModGreen\" id=\"-45630443\">LC_20006_Main</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-45630443\">LC_20006_Main</a>",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Ultimate"
                    ]
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                          "value": "0.28"
                        }
                      ]
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
      "desc": "Increases DMG dealt by the wearer's Ultimate by #1[i]%.",
      "params": [
        [
          0.28
        ],
        [
          0.35
        ],
        [
          0.42
        ],
        [
          0.49
        ],
        [
          0.56
        ]
      ]
    }
  },
  "isLightcone": true
}