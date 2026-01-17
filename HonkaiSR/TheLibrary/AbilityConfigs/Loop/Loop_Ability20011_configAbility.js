const configAbility = {
  "fileName": "Loop_Ability20011",
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
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target TAKING DMG}}"
                },
                "flagName": "STAT_SpeedDown"
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                      "value": "0.24"
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