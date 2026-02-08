const configAbility = {
  "fileName": "Defense_Ability20010",
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
      "modifier": "<a class=\"gModGreen\" id=\"250762008\">LC_20010_Main</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__250762008\">LC_20010_Main</a>",
      "execute": [
        {
          "eventTrigger": "Ability Use [Owner]: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Type",
                "skillType": "Ultimate"
              },
              "passed": [
                {
                  "name": "Heal",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "healPercent": {
                    "operator": "Variables[0] (0.18) || RETURN",
                    "displayLines": "0.18",
                    "constants": [],
                    "variables": [
                      0.18
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
  "desc": "When the wearer unleashes their Ultimate, they restore HP by #1[i]% of their Max HP.",
  "params": [
    [
      0.18
    ],
    [
      0.21
    ],
    [
      0.24
    ],
    [
      0.27
    ],
    [
      0.3
    ]
  ]
}