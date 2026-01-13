const configAbility = {
  "fileName": "ShatteredHome_Ability20009",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "LC_20009_Main"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "LC_20009_Main",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": "Target Receiving DMG",
                "value1": "CurrentHP%",
                "compareType": ">",
                "value2": {
                  "operator": "Variables[0] (0.5) || RETURN",
                  "displayLines": "0.5",
                  "constants": [],
                  "variables": [
                    0.5
                  ]
                }
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "on": "Attacker",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (0.2) || RETURN",
                    "displayLines": "0.2",
                    "constants": [],
                    "variables": [
                      0.2
                    ]
                  }
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
  "desc": "The wearer deals #2[i]% more DMG to enemy targets whose HP percentage is greater than #1[i]%.",
  "params": [
    [
      0.5,
      0.2
    ],
    [
      0.5,
      0.25
    ],
    [
      0.5,
      0.3
    ],
    [
      0.5,
      0.35
    ],
    [
      0.5,
      0.4
    ]
  ]
}