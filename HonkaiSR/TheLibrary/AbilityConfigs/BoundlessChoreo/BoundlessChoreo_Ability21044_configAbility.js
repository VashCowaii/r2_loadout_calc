const configAbility = {
  "fileName": "BoundlessChoreo_Ability21044",
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
      "modifier": "LC_21044_Main"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "LC_21044_Main",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Ability Target TAKING DMG}}"
                    },
                    "flagName": "STAT_SpeedDown"
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Ability Target TAKING DMG}}"
                    },
                    "flagName": "STAT_DefenceDown"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageSUM</span>&nbsp;",
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
  "desc": "Increase the wearer's CRIT Rate by #1[i]%. The wearer deals #2[i]% more CRIT DMG to enemies that are currently Slowed or have reduced DEF.",
  "params": [
    [
      0.08,
      0.24
    ],
    [
      0.1,
      0.3
    ],
    [
      0.12,
      0.36
    ],
    [
      0.14,
      0.42
    ],
    [
      0.16,
      0.48
    ]
  ]
}