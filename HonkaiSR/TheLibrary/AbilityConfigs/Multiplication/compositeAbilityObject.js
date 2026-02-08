const compositeAbilityObject = {
  "fullCharacterName": "Multiplication",
  "trimCharacterName": "Multiplication",
  "abilityList": [
    "Multiplication_Ability20015"
  ],
  "fixedStats": {},
  "abilityObject": {
    "Multiplication_Ability20015": {
      "fileName": "Multiplication_Ability20015",
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
          "modifier": "<a class=\"gModGreen\" id=\"582849029\">LC_20015_Main</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__582849029\">LC_20015_Main</a>",
          "execute": [
            {
              "eventTrigger": "Ability Use [Owner]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Type",
                    "skillType": "Basic ATK"
                  },
                  "passed": [
                    {
                      "name": "Assign Advance/Delay to Current Ability Use",
                      "adjustmentValue": {
                        "operator": "Variables[0] (0.12) || INVERT || RETURN",
                        "displayLines": "-0.12",
                        "constants": [],
                        "variables": [
                          0.12
                        ]
                      },
                      "adjustmentType": "Advance"
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
      "desc": "After the wearer uses their Basic ATK, their next action will be Advanced Forward by #1[i]%.",
      "params": [
        [
          0.12
        ],
        [
          0.14
        ],
        [
          0.16
        ],
        [
          0.18
        ],
        [
          0.2
        ]
      ]
    }
  },
  "isLightcone": true
}