const compositeAbilityObject = {
  "fullCharacterName": "Fermata",
  "trimCharacterName": "Fermata",
  "abilityList": [
    "Fermata_Ability21022"
  ],
  "fixedStats": {
    "1": {
      "DamageBreak": 0.16
    },
    "2": {
      "DamageBreak": 0.2
    },
    "3": {
      "DamageBreak": 0.24
    },
    "4": {
      "DamageBreak": 0.28
    },
    "5": {
      "DamageBreak": 0.32
    }
  },
  "abilityObject": {
    "Fermata_Ability21022": {
      "fileName": "Fermata_Ability21022",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "LC_21022_Main"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "LC_21022_Sub",
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
                        "target": "Use Prior Target(s) Defined",
                        "flagName": "STAT_DOT_Electric"
                      },
                      {
                        "name": "Has Flag",
                        "target": "Use Prior Target(s) Defined",
                        "flagName": "STAT_DOT_Poison"
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
          "for": "LC_21022_Main",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Caster",
                  "modifier": "LC_21022_Sub"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ],
      "isLightcone": true,
      "desc": "Increases the wearer's Break Effect by #1[i]%, and increases their DMG to enemies afflicted with Shock or Wind Shear by #2[i]%. This also applies to DoT.",
      "params": [
        [
          0.16,
          0.16
        ],
        [
          0.2,
          0.2
        ],
        [
          0.24,
          0.24
        ],
        [
          0.28,
          0.28
        ],
        [
          0.32,
          0.32
        ]
      ]
    }
  },
  "isLightcone": true
}