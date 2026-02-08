const compositeAbilityObject = {
  "fullCharacterName": "Loop",
  "trimCharacterName": "Loop",
  "abilityList": [
    "Loop_Ability20011"
  ],
  "fixedStats": {},
  "abilityObject": {
    "Loop_Ability20011": {
      "fileName": "Loop_Ability20011",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1542360295\">LC_20011_Main</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1542360295\">LC_20011_Main</a>",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Ability Target TAKING DMG}}"
                    },
                    "flagName": "STAT_SpeedDown"
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                          "value": "0.24"
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
      "desc": "Increases DMG dealt from its wearer to Slowed enemies by #1[i]%.",
      "params": [
        [
          0.24
        ],
        [
          0.3
        ],
        [
          0.36
        ],
        [
          0.42
        ],
        [
          0.48
        ]
      ]
    }
  },
  "isLightcone": true
}