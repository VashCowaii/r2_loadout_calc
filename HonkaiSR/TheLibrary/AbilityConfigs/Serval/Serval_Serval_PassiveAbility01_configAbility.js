const configAbility = {
  "fileName": "Serval_Serval_PassiveAbility01",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "Serval_Passive01Modifier"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Serval_Passive01Modifier",
      "execute": [
        {
          "eventTrigger": "Attack End [Owner]",
          "execute": [
            {
              "name": "Find New Target",
              "from": "All Hostile Entities (AOE)",
              "searchRandom": true,
              "conditions": {
                "name": "Has Flag",
                "target": "Use Prior Target(s) Defined",
                "flagName": "STAT_DOT_Electric"
              },
              "ifTargetFound": [
                {
                  "name": "ATK Scaling DMG",
                  "target": "Use Prior Target(s) Defined",
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Thunder",
                    "Damage": {
                      "operator": "Variables[0] (0.72) || RETURN",
                      "displayLines": "0.72",
                      "constants": [],
                      "variables": [
                        0.72
                      ]
                    },
                    "indirectDMG": true,
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Additional DMG"
                  }
                },
                "Trigger: Attack End",
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 2
                  },
                  "passed": [
                    {
                      "name": "Update Energy",
                      "on": "Caster",
                      "value": {
                        "operator": "Variables[0] (4) || RETURN",
                        "displayLines": "4",
                        "constants": [],
                        "variables": [
                          4
                        ]
                      },
                      "isFixed": "* ERR"
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
  ]
}