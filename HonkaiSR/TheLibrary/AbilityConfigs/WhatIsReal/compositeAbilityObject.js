const compositeAbilityObject = {
  "fullCharacterName": "What Is Real?",
  "trimCharacterName": "WhatIsReal",
  "abilityList": [
    "WhatIsReal_Ability21035"
  ],
  "fixedStats": {
    "1": {
      "DamageBreak": 0.24
    },
    "2": {
      "DamageBreak": 0.3
    },
    "3": {
      "DamageBreak": 0.36
    },
    "4": {
      "DamageBreak": 0.42
    },
    "5": {
      "DamageBreak": 0.48
    }
  },
  "abilityObject": {
    "WhatIsReal_Ability21035": {
      "fileName": "WhatIsReal_Ability21035",
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
          "modifier": "<a class=\"gModGreen\" id=\"752004148\">LC_21035_Main</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__752004148\">LC_21035_Main</a>",
          "execute": [
            {
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Type",
                    "skillType": "Basic ATK"
                  },
                  "passed": [
                    {
                      "name": "Heal",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "healPercent": {
                        "operator": "Variables[0] (0.02) || RETURN",
                        "displayLines": "0.02",
                        "constants": [],
                        "variables": [
                          0.02
                        ]
                      },
                      "healFlat": {
                        "operator": "Variables[0] (800) || RETURN",
                        "displayLines": "800",
                        "constants": [],
                        "variables": [
                          800
                        ]
                      },
                      "formula": "Heal from Healer's MaxHP"
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
      "desc": "Increases the wearer's Break Effect by #1[i]%. After using Basic ATK, restores HP for the wearer by an amount equal to #2[f1]% of Max HP plus #3[i].",
      "params": [
        [
          0.24,
          0.02,
          800
        ],
        [
          0.3,
          0.025,
          800
        ],
        [
          0.36,
          0.03,
          800
        ],
        [
          0.42,
          0.035,
          800
        ],
        [
          0.48,
          0.04,
          800
        ]
      ]
    }
  },
  "isLightcone": true
}