const configAbility = {
  "fileName": "FineFruit_Ability20008",
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
      "modifier": "<a class=\"gModGreen\" id=\"-2063255813\">LC_20008_Main</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-2063255813\">LC_20008_Main</a>",
      "execute": [
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Wave Count",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Player Team(Exclude Memosprites)v2}}"
                  },
                  "value": {
                    "operator": "Variables[0] (6) || RETURN",
                    "displayLines": "6",
                    "constants": [],
                    "variables": [
                      6
                    ]
                  },
                  "isFixed": "* ERR"
                }
              ]
            }
          ],
          "priorityLevel": -80
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ],
  "isLightcone": true,
  "desc": "At the start of the battle, immediately regenerates #1[i] Energy for all allies.",
  "params": [
    [
      6
    ],
    [
      7.5
    ],
    [
      9
    ],
    [
      10.5
    ],
    [
      12
    ]
  ]
}