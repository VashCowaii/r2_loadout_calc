const compositeAbilityObject = {
  "fullCharacterName": "Collapsing Sky",
  "trimCharacterName": "CollapsingSky",
  "abilityList": [
    "CollapsingSky_Ability20002"
  ],
  "fixedStats": {},
  "abilityObject": {
    "CollapsingSky_Ability20002": {
      "fileName": "CollapsingSky_Ability20002",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "LC_20002_Main"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "LC_20002_Main",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Basic ATK",
                      "Skill"
                    ]
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                          "value": "0.2"
                        }
                      ]
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
      "desc": "The wearer's Basic ATK and Skill deal #1[i]% more DMG.",
      "params": [
        [
          0.2
        ],
        [
          0.25
        ],
        [
          0.3
        ],
        [
          0.35
        ],
        [
          0.4
        ]
      ]
    }
  },
  "isLightcone": true
}