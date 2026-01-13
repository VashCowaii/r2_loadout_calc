const compositeAbilityObject = {
  "fullCharacterName": "Loop",
  "trimCharacterName": "Loop",
  "abilityList": [
    "Loop_Ability20011"
  ],
  "fixedStats": {},
  "abilityObject": {
    "Loop_Ability20011": {
      "fileName": "Loop_Ability20011",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "LC_20011_Main"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "LC_20011_Main",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": "Target Receiving DMG",
                    "flagName": "STAT_SpeedDown"
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
      "desc": "Increases DMG dealt from its wearer to Slowed enemies by #1[i]%.",
      "params": [
        [
          0.24
        ],
        [
          0.3
        ],
        [
          0.36
        ],
        [
          0.42
        ],
        [
          0.48
        ]
      ]
    }
  },
  "isLightcone": true
}