const compositeAbilityObject = {
  "fullCharacterName": "Warmth Shortens Cold Nights",
  "trimCharacterName": "WarmthShortensColdNights",
  "abilityList": [
    "WarmthShortensColdNights_Ability21028"
  ],
  "fixedStats": {
    "1": {
      "HP%": 0.16
    },
    "2": {
      "HP%": 0.2
    },
    "3": {
      "HP%": 0.24
    },
    "4": {
      "HP%": 0.28
    },
    "5": {
      "HP%": 0.32
    }
  },
  "abilityObject": {
    "WarmthShortensColdNights_Ability21028": {
      "fileName": "WarmthShortensColdNights_Ability21028",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1793252578\">LC_21028_Main</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1793252578\">LC_21028_Main</a>",
          "execute": [
            {
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Skill Type",
                        "skillType": "Basic ATK"
                      },
                      {
                        "name": "Skill Type",
                        "skillType": "Skill"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Heal",
                      "target": {
                        "name": "Target Name",
                        "target": "{{All Team Members}}"
                      },
                      "healPercent": {
                        "operator": "Variables[0] (0.02) || RETURN",
                        "displayLines": "0.02",
                        "constants": [],
                        "variables": [
                          0.02
                        ]
                      },
                      "formula": "Heal from Target MaxHP"
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
      "desc": "Increases the wearer's Max HP by #1[i]%. When using Basic ATK or Skill, restores all allies' HP by an amount equal to #2[f1]% of their respective Max HP.",
      "params": [
        [
          0.16,
          0.02
        ],
        [
          0.2,
          0.025
        ],
        [
          0.24,
          0.03
        ],
        [
          0.28,
          0.035
        ],
        [
          0.32,
          0.04
        ]
      ]
    }
  },
  "isLightcone": true
}