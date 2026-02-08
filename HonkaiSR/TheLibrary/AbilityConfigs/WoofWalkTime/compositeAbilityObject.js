const compositeAbilityObject = {
  "fullCharacterName": "Woof! Walk Time!",
  "trimCharacterName": "WoofWalkTime",
  "abilityList": [
    "WoofWalkTime_Ability21026"
  ],
  "fixedStats": {
    "1": {
      "ATK%": 0.1
    },
    "2": {
      "ATK%": 0.125
    },
    "3": {
      "ATK%": 0.15
    },
    "4": {
      "ATK%": 0.175
    },
    "5": {
      "ATK%": 0.2
    }
  },
  "abilityObject": {
    "WoofWalkTime_Ability21026": {
      "fileName": "WoofWalkTime_Ability21026",
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
          "modifier": "<a class=\"gModGreen\" id=\"-716257792\">LC_21026_Main</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1936214931\">LC_21026_Sub</a>",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "flagName": "STAT_DOT_Bleed"
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "flagName": "STAT_DOT_Burn"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                          "value": "0.16"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-716257792\">LC_21026_Main</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1936214931\">LC_21026_Sub</a>"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ],
      "isLightcone": true,
      "desc": "Increases the wearer's ATK by #1[i]%, and increases their DMG to enemies afflicted with Burn or Bleed by #2[i]%. This also applies to DoT.",
      "params": [
        [
          0.1,
          0.16
        ],
        [
          0.125,
          0.2
        ],
        [
          0.15,
          0.24
        ],
        [
          0.175,
          0.28
        ],
        [
          0.2,
          0.32
        ]
      ]
    }
  },
  "isLightcone": true
}