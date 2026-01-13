const configAbility = {
  "fileName": "ATrailofBygoneBlood_Ability21058",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "LC_21058_Main"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "LC_21058_Main",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Attack Type",
                "attackTypes": [
                  "Skill",
                  "Ultimate"
                ]
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "on": "Attacker",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (0.24) || RETURN",
                    "displayLines": "0.24",
                    "constants": [],
                    "variables": [
                      0.24
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
  "desc": "Increases the wearer's CRIT Rate by #1[i]%. The Skill DMG and Ultimate DMG dealt by the wearer increase by #2[i]%.",
  "params": [
    [
      0.12,
      0.24
    ],
    [
      0.14,
      0.28
    ],
    [
      0.16,
      0.32
    ],
    [
      0.18,
      0.36
    ],
    [
      0.2,
      0.4
    ]
  ]
}