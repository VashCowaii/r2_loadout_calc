const configAbility = {
  "fileName": "Pioneering_Ability20017",
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
      "modifier": "<a class=\"gModGreen\" id=\"274850655\">LC_20017_Main</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__274850655\">LC_20017_Main</a>",
      "execute": [
        {
          "eventTrigger": "Caused Weakness Break [Owner]",
          "execute": [
            {
              "name": "Heal",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "healPercent": {
                "operator": "Variables[0] (0.12) || RETURN",
                "displayLines": "0.12",
                "constants": [],
                "variables": [
                  0.12
                ]
              },
              "formula": "Heal from Target MaxHP"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ],
  "isLightcone": true,
  "desc": "When the wearer Breaks an enemy's Weakness, the wearer restores HP by #1[i]% of their Max HP.",
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